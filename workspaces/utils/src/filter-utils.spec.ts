import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { createFilter, filterItemsString } from "./filter-utils.ts";

describe("createFilter", () => {
    const items = [
        { id: 1, name: "Alice", age: 20, nested: { score: 5 } },
        { id: 2, name: "Bob", age: 30, nested: { score: 10 } },
        { id: 3, name: "alice", age: 40, nested: { score: 15 } },
    ];

    it("returns always-true filter when search is empty", () => {
        const filter = createFilter();
        expect(filter({})).toBe(true);
    });

    it("EQ operator (case-insensitive, string compare)", () => {
        const filter = createFilter("name:alice");
        expect(filter(items[0])).toBe(true);
        expect(filter(items[2])).toBe(true);
        expect(filter(items[1])).toBe(false);
    });

    it("EQ numeric string still compared as string", () => {
        const filter = createFilter("age:20");
        expect(filter(items[0])).toBe(true);
        expect(filter(items[1])).toBe(false);
    });

    it("GT operator", () => {
        const filter = createFilter("age:GT:25");
        expect(filter(items[0])).toBe(false);
        expect(filter(items[1])).toBe(true);
        expect(filter(items[2])).toBe(true);
    });

    it("LT operator", () => {
        const filter = createFilter("age:LT:30");
        expect(filter(items[0])).toBe(true);
        expect(filter(items[1])).toBe(false);
        expect(filter(items[2])).toBe(false);
    });

    it("numeric comparison throws when non-number provided to GT/LT", () => {
        expect(() => createFilter("age:GT:xxx")).toThrow("Invalid value for 'age'");
    });

    it("nested property resolution works", () => {
        const filter = createFilter("nested.score:GT:7");
        expect(filter(items[0])).toBe(false);
        expect(filter(items[1])).toBe(true);
        expect(filter(items[2])).toBe(true);
    });

    it("ENUM operator triggers custom filter", () => {
        const customFilters = {
            premium: (item: any) => item.age > 25,
        };

        const filter = createFilter("premium", customFilters);

        expect(filter(items[0])).toBe(false);
        expect(filter(items[1])).toBe(true);
        expect(filter(items[2])).toBe(true);
    });

    it.skip("ENUM operator fails when custom filter missing", () => {
        expect(() => createFilter("unknownFilter")).toThrow("'unknownFilter' is not a custom filter");
    });

    it("customFilterValueMappers modify the parsed value", () => {
        const mapper = {
            age: (v: string) => Number(v) + 5,
        };

        const filter = createFilter("age:GT:20", {}, mapper);

        // becomes GT 25
        expect(filter({ age: 24 })).toBe(false);
        expect(filter({ age: 26 })).toBe(true);
    });

    it("invalid operator throws error", () => {
        expect(() => createFilter("age:WTF:20")).toThrow("Invalid operator 'WTF'");
    });

    it("invalid filter format throws", () => {
        expect(() => createFilter("a:b:c:d")).toThrow("Invalid filter");
    });
});

describe("filterItemsString", () => {
    const items = [
        { id: 1, age: 10 },
        { id: 2, age: 20 },
        { id: 3, age: 30 },
    ];

    it("returns all items when search is empty", () => {
        expect(filterItemsString(items)).toEqual(items);
    });

    it("filters using createFilter logic", () => {
        const result = filterItemsString(items, "age:GT:15");
        expect(result).toEqual([
            { id: 2, age: 20 },
            { id: 3, age: 30 },
        ]);
    });

    it.skip("works with custom filters", () => {
        const custom = {
            even: (item: any) => item.age % 2 === 0,
        };

        const result = filterItemsString(items, "even", custom);
        expect(result).toEqual([
            { id: 2, age: 20 },
        ]);
    });
});
