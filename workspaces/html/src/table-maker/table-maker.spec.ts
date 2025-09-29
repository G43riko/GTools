import { expect } from "@std/expect";
import { beforeEach, describe, it } from "@std/testing/bdd";

/**
 * table-maker.test.ts
 *
 * Assumptions:
 * - Your TableMaker class is exported from './table-maker'
 * - FooterType and SortOrder are exported from './table-maker-config'
 * - If your filenames/paths differ, update the imports below.
 */

import { TableMaker } from "./table-maker.ts";
import { FooterType, SortOrder } from "./table-maker-config.ts";

type Person = {
  name: string;
  age: number;
  salary?: number;
  score?: number;
};

// Polyfill toSorted for older Node runtimes used in some CI; harmless if already present.
if (!(Array.prototype as any).toSorted) {
  (Array.prototype as any).toSorted = function <T>(this: T[], compare?: (a: T, b: T) => number) {
    const copy = [...this];
    if (compare) copy.sort(compare as any);
    else copy.sort();
    return copy;
  };
}

describe("TableMaker (rendered table)", () => {
  it("renders header and body (non-tailwind) and includes style block", () => {
    const config = {
      columns: [
        { columnDef: "name", label: "Name" },
        { columnDef: "age", label: "Age" },
      ],
      stickyHeader: false,
      rowHoverColor: "rgba(0,0,0,0.1)",
      backgroundColor: "#eee",
    } as any;

    const data: Person[] = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];

    const t = new TableMaker<Person>(config);
    const html = t.render(data);

    expect(html).toContain("<th>Name</th>");
    expect(html).toContain("<th>Age</th>");
    expect(html).toContain("<td>Alice</td>");
    expect(html).toContain("<td>Bob</td>");
    // style block and CSS variables should be present
    expect(html).toContain("<style>");
    expect(html).toContain("--row-hover-color:");
    expect(html).toContain("--background-color:");
  });

  it("returns minimal table when useTailwind === true (no <style>)", () => {
    const config = {
      columns: [{ columnDef: "name", label: "Name" }],
    } as any;

    const t = new TableMaker<Person>(config);
    const html = t.render([{ name: "A", age: 1 }], { useTailwind: true });

    expect(html).toContain("<table");
    expect(html).toContain("<thead>");
    expect(html).not.toContain("<style>");
  });

  it("throws when a column has a `filter` (filtering not supported for rendered table)", () => {
    const config = {
      columns: [{ columnDef: "name", label: "Name", filter: true }],
    } as any;

    const t = new TableMaker<Person>(config);
    expect(() => t.render([{ name: "A", age: 1 }])).toThrow("Filtering is not supported for rendered table");
  });

  it("throws when a column has `sort: true` but non-string label (sorting not supported)", () => {
    const config = {
      columns: [{ columnDef: "name", sort: true, label: undefined }],
    } as any;

    const t = new TableMaker<Person>(config);
    expect(() => t.render([{ name: "A", age: 1 }])).toThrow("Sorting is not supported for rendered table");
  });

  it("computes SUM, AVG and MAX footers correctly", () => {
    const config = {
      columns: [
        { columnDef: "salary", label: "Salary", footer: FooterType.SUM },
        { columnDef: "age", label: "Age", footer: FooterType.AVG },
        { columnDef: "score", label: "Score", footer: FooterType.MAX },
      ],
    } as any;

    const data: Person[] = [
      { name: "Alice", age: 25, salary: 1000, score: 10 },
      { name: "Bob", age: 30, salary: 2000, score: 5 },
    ];

    const t = new TableMaker<Person>(config);
    const html = t.render(data);

    expect(html).toContain("Sum: 3000"); // salary sum 1000+2000
    // average of 25 and 30 -> 27.5
    expect(html).toContain("Avg: 27.5");
    // max score is 10
    expect(html).toContain("Max: 10");
  });

  it.skip("calls customFooter when provided", () => {
    const config = {
      columns: [
        {
          columnDef: "salary",
          label: "Salary",
          customFooter: (it: Iterable<Person>) => {
            const arr = Array.from(it);
            return `CustomCount:${arr.length}`;
          },
        },
      ],
    } as any;

    const data: Person[] = [{ name: "A", age: 1 }, { name: "B", age: 2 }];
    const t = new TableMaker<Person>(config);
    const html = t.render(data);

    expect(html).toContain("CustomCount:2");
  });

  it("uses customContent for cell text when provided", () => {
    const config = {
      columns: [
        {
          columnDef: "name",
          label: "Name",
          customContent: (row: Person) => row.name.toUpperCase(),
        },
        { columnDef: "age", label: "Age" },
      ],
    } as any;

    const data: Person[] = [{ name: "alice", age: 42 }];
    const t = new TableMaker<Person>(config);
    const html = t.render(data);

    expect(html).toContain("<td>ALICE</td>");
  });

  it("omits hidden columns from header/body", () => {
    const config = {
      columns: [
        { columnDef: "name", label: "Name" },
        { columnDef: "salary", label: "Salary", hidden: true },
      ],
    } as any;

    const data: Person[] = [{ name: "Zoe", age: 10, salary: 999 }];

    const t = new TableMaker<Person>(config);
    const html = t.render(data);

    expect(html).toContain("<th>Name</th>");
    expect(html).not.toContain("<th>Salary</th>");
    expect(html).toContain("<td>Zoe</td>");
    expect(html).not.toContain("999"); // salary cell should not be rendered
  });

  it("respects manual cell filters set on the instance (hides cells that don't match)", () => {
    const config = {
      columns: [
        { columnDef: "name", label: "Name" },
        { columnDef: "age", label: "Age" },
      ],
    } as any;

    const data: Person[] = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];

    const t = new TableMaker<Person>(config);
    // set filter for 'name' so only rows containing 'Bob' will show the name cell
    (t as any).filters["name"] = "Bob";

    const html = t.render(data);
    expect(html).not.toContain("<td>Alice</td>");
    expect(html).toContain("<td>Bob</td>");
  });

  it("applies cellClass and rowClass function outputs to rendered HTML", () => {
    const config = {
      columns: [
        { columnDef: "name", label: "Name" },
        { columnDef: "age", label: "Age" },
      ],
      cellClass: (row: Person, cellIndex: number) => (cellIndex === 0 ? "cell-first" : ""),
      rowClass: (row: Person) => "row-klass",
    } as any;

    const data: Person[] = [{ name: "X", age: 1 }];

    const t = new TableMaker<Person>(config);
    const html = t.render(data);

    // first cell should have the cell-first class
    expect(html).toContain('<td class="cell-first">X</td>');
    // the row should have row-klass
    expect(html).toContain('<tr class="row-klass">');
  });

  it("respects rowVisible and skips rows where it returns false", () => {
    const config = {
      columns: [{ columnDef: "name", label: "Name" }],
      rowVisible: (row: Person, index: number) => index === 0, // only keep first
    } as any;

    const data: Person[] = [
      { name: "Keep", age: 1 },
      { name: "Skip", age: 2 },
    ];

    const t = new TableMaker<Person>(config);
    const html = t.render(data);

    expect(html).toContain("Keep");
    expect(html).not.toContain("Skip");
  });

  it("applies sorting when instance sort and sortColumn are set", () => {
    const config = {
      columns: [
        { columnDef: "name", label: "Name" },
        { columnDef: "age", label: "Age" },
      ],
    } as any;

    // data initially Alice (30) then Bob (25)
    const data: Person[] = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];

    const t = new TableMaker<Person>(config);
    // sort ascending by age -> Bob (25) should appear before Alice (30)
    (t as any).sort = SortOrder.ASC;
    (t as any).sortColumn = "age";

    const html = t.render(data);
    const idxBob = html.indexOf("<td>Bob</td>");
    const idxAlice = html.indexOf("<td>Alice</td>");
    expect(idxBob).toBeGreaterThan(-1);
    expect(idxAlice).toBeGreaterThan(-1);
    expect(idxBob).toBeLessThan(idxAlice);
  });

  it("throws when `onRowClick` is provided (not supported for rendered table)", () => {
    const config = {
      columns: [{ columnDef: "name", label: "Name" }],
      onRowClick: () => {},
    } as any;

    const t = new TableMaker<Person>(config);
    expect(() => t.render([{ name: "X", age: 1 }])).toThrow("OnRowClick is not supported for rendered table");
  });
});
