import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { min, pairwiseArray } from "./array-utils.ts";

describe("min function", () => {
    it("should return the minimum value in an array", () => {
        expect(min([3, 1, 4, 1, 5, 9])).toBe(1);
    });

    it("should return NaN for an empty array", () => {
        expect(min([])).toBeNaN();
    });

    it("should return the only element if array has one number", () => {
        expect(min([42])).toBe(42);
    });

    it("should handle negative numbers", () => {
        expect(min([-10, -20, -5])).toBe(-20);
    });

    it("should handle an array with duplicate values", () => {
        expect(min([2, 2, 2, 2])).toBe(2);
    });
});

describe("pairwiseArray function", () => {
    it("should return pairs for an even-length array", () => {
        expect(pairwiseArray([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    });

    it("should return an empty array for an empty input", () => {
        expect(pairwiseArray([])).toEqual([]);
    });

    it("should return an empty array for an array with a single element", () => {
        expect(pairwiseArray([1])).toEqual([]);
    });

    it("should throw an error for an odd-length array", () => {
        expect(() => pairwiseArray([1, 2, 3])).toThrow("Array length must be even");
    });

    it("should handle an array of strings", () => {
        expect(pairwiseArray(["a", "b", "c", "d"])).toEqual([["a", "b"], ["c", "d"]]);
    });

    it("should handle an array of mixed types", () => {
        expect(pairwiseArray([1, "a", true, null])).toEqual([[1, "a"], [true, null]]);
    });
});
