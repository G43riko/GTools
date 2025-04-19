import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";

import { chunk, groupBy, min, pairwiseArray, partition, shuffle, unique } from "./array-utils.ts";

describe("Array utils", () => {
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

    describe("chunk function", () => {
        it("should split array into chunks of the specified size", () => {
            expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        });

        it("should handle empty arrays", () => {
            expect(chunk([], 3)).toEqual([]);
        });

        it("should use a default size of 1 if not specified", () => {
            expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
        });

        it("should throw an error if size is less than 1", () => {
            expect(() => chunk([1, 2, 3], 0)).toThrow("Chunk size must be greater than 0");
        });

        it("should return a single chunk if size is greater than array length", () => {
            expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
        });
    });

    describe("unique function", () => {
        it("should remove duplicate values", () => {
            expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
        });

        it("should handle empty arrays", () => {
            expect(unique([])).toEqual([]);
        });

        it("should handle arrays with no duplicates", () => {
            expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
        });

        it("should handle arrays with all duplicate values", () => {
            expect(unique([1, 1, 1])).toEqual([1]);
        });

        it("should handle arrays with different types", () => {
            expect(unique([1, "1", true, 1, "1"])).toEqual([1, "1", true]);
        });
    });

    describe("groupBy function", () => {
        it("should group array elements by the result of iteratee", () => {
            const result = groupBy([6.1, 4.2, 6.3], Math.floor);
            expect(result).toEqual({
                4: [4.2],
                6: [6.1, 6.3]
            });
        });

        it("should handle empty arrays", () => {
            expect(groupBy([], (x) => x)).toEqual({});
        });

        it("should group by string property", () => {
            const users = [
                { name: "John", age: 30 },
                { name: "Jane", age: 25 },
                { name: "John", age: 40 }
            ];
            const result = groupBy(users, (user) => user.name);
            expect(result).toEqual({
                John: [
                    { name: "John", age: 30 },
                    { name: "John", age: 40 }
                ],
                Jane: [
                    { name: "Jane", age: 25 }
                ]
            });
        });
    });

    describe("partition function", () => {
        it("should split array into two groups based on predicate", () => {
            const [evens, odds] = partition([1, 2, 3, 4, 5], (n) => n % 2 === 0);
            expect(evens).toEqual([2, 4]);
            expect(odds).toEqual([1, 3, 5]);
        });

        it("should handle empty arrays", () => {
            const [pass, fail] = partition([], () => true);
            expect(pass).toEqual([]);
            expect(fail).toEqual([]);
        });

        it("should handle case where all elements pass", () => {
            const [pass, fail] = partition([1, 2, 3], () => true);
            expect(pass).toEqual([1, 2, 3]);
            expect(fail).toEqual([]);
        });

        it("should handle case where all elements fail", () => {
            const [pass, fail] = partition([1, 2, 3], () => false);
            expect(pass).toEqual([]);
            expect(fail).toEqual([1, 2, 3]);
        });
    });

    describe("shuffle function", () => {
        it("should return an array of the same length", () => {
            const original = [1, 2, 3, 4, 5];
            const shuffled = shuffle(original);
            expect(shuffled.length).toBe(original.length);
        });

        it("should contain all the same elements", () => {
            const original = [1, 2, 3, 4, 5];
            const shuffled = shuffle(original);
            expect(shuffled.sort()).toEqual(original.sort());
        });

        it("should handle empty arrays", () => {
            expect(shuffle([])).toEqual([]);
        });

        it("should handle arrays with a single element", () => {
            expect(shuffle([1])).toEqual([1]);
        });

        // Note: We can't reliably test randomness, but we can ensure the function doesn't modify the original array
        it("should not modify the original array", () => {
            const original = [1, 2, 3, 4, 5];
            const originalCopy = [...original];
            shuffle(original);
            expect(original).toEqual(originalCopy);
        });
    });
})
