import { expect } from "@std/expect";
import { beforeAll, describe, it } from "@std/testing/bdd";
import { BKTree } from "./bk-tree.ts";

describe("BKTree with Levenshtein distance", () => {
  const words = ["cat", "cut", "cot", "coat", "cost", "cast", "dog"];
  const tree = new BKTree({ maxWords: 100, distance: "levenshtein" });

  beforeAll(() => {
    tree.add(words);
  });

  it("Finds exact match", () => {
    expect(tree.simWords("cat", 0)).toContain("cat");
  });

  it("Finds similar words within tolerance", () => {
    const result = tree.simWords("cat", 1);
    expect(result).toEqual(expect.arrayContaining(["cut", "cot", "cat"]));
  });

  it("Finds nothing if tolerance too low", () => {
    expect(tree.simWords("cat", 0)).toEqual(["cat"]);
    expect(tree.simWords("xyz", 0)).toEqual([]);
  });

  it("Throws on non-array input", () => {
    expect(() => tree.add("not-an-array" as any)).toThrow("Input must be an array of strings.");
  });
});

describe("BKTree with Damerau–Levenshtein distance", () => {
  const tree = new BKTree({ maxWords: 100, distance: "damerau-levenshtein" });
  const words = ["abcd", "acbd", "abdc", "bacd", "cabd"];

  beforeAll(() => {
    tree.add(words);
  });

  it("Detects transpositions within 1 edit", () => {
    const result = tree.simWords("abdc", 1);
    expect(result).toEqual(expect.arrayContaining(["abdc", "abcd"]));
  });

  it("Returns only words within distance", () => {
    const result = tree.simWords("xxxx", 1);
    expect(result).toEqual([]);
  });

  it("Returns all within 2 edits", () => {
    const result = tree.simWords("abcd", 2);
    expect(result.length).toBeGreaterThanOrEqual(3);
  });
});

describe("BKTree edge cases", () => {
  it("Empty tree returns empty list", () => {
    const tree = new BKTree({ maxWords: 10 });
    expect(tree.simWords("any", 2)).toEqual([]);
  });

  it("Add duplicate words", () => {
    const tree = new BKTree({ maxWords: 10 });
    tree.add(["same", "same", "same"]);
    const result = tree.simWords("same", 0);
    expect(result).toEqual(["same"]);
  });
});
