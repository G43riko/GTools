import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { insertionSort } from "./insertion-sort.ts";
import { mergeSort } from "./merge-sort.ts";
import { quickSort } from "./quick-sort.ts";

const numericComparator = (a: number, b: number) => a - b;

describe("insertionSort", () => {
    it("runs without error on an empty array", () => {
        expect(() => insertionSort([], numericComparator)).not.toThrow();
    });

    it("runs without error on a single-element array", () => {
        expect(() => insertionSort([42], numericComparator)).not.toThrow();
    });

    it("runs without error on an already-sorted array", () => {
        expect(() => insertionSort([1, 2, 3, 4, 5], numericComparator)).not.toThrow();
    });

    it("runs without error on a reverse-sorted array", () => {
        expect(() => insertionSort([5, 4, 3, 2, 1], numericComparator)).not.toThrow();
    });

    it("runs without error on an array with duplicate values", () => {
        expect(() => insertionSort([3, 1, 4, 1, 5, 9, 2, 6], numericComparator)).not.toThrow();
    });
});

describe("mergeSort", () => {
    it("runs without error on an empty array", () => {
        expect(() => mergeSort([], numericComparator)).not.toThrow();
    });

    it("runs without error on a single-element array", () => {
        expect(() => mergeSort([42], numericComparator)).not.toThrow();
    });

    it("runs without error on an already-sorted array", () => {
        expect(() => mergeSort([1, 2, 3, 4, 5], numericComparator)).not.toThrow();
    });

    it("runs without error on a reverse-sorted array", () => {
        expect(() => mergeSort([5, 4, 3, 2, 1], numericComparator)).not.toThrow();
    });

    it("runs without error on an array with duplicate values", () => {
        expect(() => mergeSort([3, 1, 4, 1, 5, 9, 2, 6], numericComparator)).not.toThrow();
    });
});

describe("quickSort", () => {
    it("returns early without error on an empty array", () => {
        expect(() => quickSort([], numericComparator)).not.toThrow();
    });

    it("runs without error on a single-element array", () => {
        expect(() => quickSort([42], numericComparator)).not.toThrow();
    });

    it("runs without error on an already-sorted array", () => {
        expect(() => quickSort([1, 2, 3, 4, 5], numericComparator)).not.toThrow();
    });

    it("runs without error on a reverse-sorted array", () => {
        expect(() => quickSort([5, 4, 3, 2, 1], numericComparator)).not.toThrow();
    });

    it("runs without error on an array with duplicate values", () => {
        expect(() => quickSort([3, 1, 4, 1, 5, 9, 2, 6], numericComparator)).not.toThrow();
    });
});
