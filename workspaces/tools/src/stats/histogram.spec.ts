import { expect } from "@std/expect";
import { beforeEach, describe, it } from "@std/testing/bdd";
import { Histogram } from "./histogram.ts";

describe("Histogram", () => {
    let histogram: Histogram;

    beforeEach(() => {
        histogram = new Histogram();
    });

    describe("initial state", () => {
        it("should initialize with zero length", () => {
            expect(histogram.length).toBe(0);
            expect(histogram.totalLength).toBe(0);
        });
    });

    describe("add", () => {
        it("should add items and increment counts", () => {
            histogram.add("ITEM_A");
            histogram.add("ITEM_B");
            histogram.add("ITEM_A");

            expect(histogram.length).toBe(2);
            expect(histogram.totalLength).toBe(3);
        });

        it("should ignore falsy values by default", () => {
            histogram.add("" as any);
            histogram.add(undefined as any);
            histogram.add(null as any);

            expect(histogram.length).toBe(0);
            expect(histogram.totalLength).toBe(0);
        });

        it("should include falsy values when configured", () => {
            const histogramWithFalsy = new Histogram({ includeFalsyValues: true });
            histogramWithFalsy.add("" as any);
            histogramWithFalsy.add(undefined as any);
            histogramWithFalsy.add(null as any);

            expect(histogramWithFalsy.length).toBe(3);
            expect(histogramWithFalsy.totalLength).toBe(3);
        });
    });

    describe("addAll", () => {
        it("should add multiple items at once", () => {
            histogram.addAll(["ITEM_A", "ITEM_B", "ITEM_A", "ITEM_C"]);

            expect(histogram.length).toBe(3);
            expect(histogram.totalLength).toBe(4);
        });
    });

    describe("reset", () => {
        it("should clear the data map but not reset totalLength", () => {
            histogram.add("ITEM_A");
            histogram.add("ITEM_B");
            const totalLengthBeforeReset = histogram.totalLength;
            histogram.reset();

            expect(histogram.length).toBe(0);
            expect(histogram.totalLength).toBe(totalLengthBeforeReset);
        });
    });

    describe("getSorted", () => {
        beforeEach(() => {
            histogram.add("ITEM_A");
            histogram.add("ITEM_B");
            histogram.add("ITEM_A");
            histogram.add("ITEM_C");
            histogram.add("ITEM_A");
        });

        it("should return items sorted by count in descending order by default", () => {
            const sorted = histogram.getSorted();

            // Check that the order is correct (ITEM_A has 3, ITEM_B and ITEM_C have 1 each)
            const keys = Object.keys(sorted);
            expect(keys[0]).toBe("ITEM_A");

            // Check the values
            expect(sorted["ITEM_A"]).toBe(3);
            expect(sorted["ITEM_B"]).toBe(1);
            expect(sorted["ITEM_C"]).toBe(1);
        });

        it("should return items sorted by count in ascending order when specified", () => {
            const sorted = histogram.getSorted("ASC");

            // Check that the order is correct (ITEM_B and ITEM_C have 1 each, ITEM_A has 3)
            const keys = Object.keys(sorted);
            expect(keys[keys.length - 1]).toBe("ITEM_A");

            // Check the values
            expect(sorted["ITEM_A"]).toBe(3);
            expect(sorted["ITEM_B"]).toBe(1);
            expect(sorted["ITEM_C"]).toBe(1);
        });

        it("should filter items by minimum occurrences", () => {
            const sorted = histogram.getSorted("DESC", { minOccurences: 2 });

            // Only ITEM_A should be included (has 3 occurrences)
            expect(Object.keys(sorted).length).toBe(1);
            expect(sorted["ITEM_A"]).toBe(3);
            expect(sorted["ITEM_B"]).toBeUndefined();
            expect(sorted["ITEM_C"]).toBeUndefined();
        });
    });

    describe("toJSON", () => {
        it("should return the sorted data", () => {
            histogram.add("ITEM_A");
            histogram.add("ITEM_B");
            histogram.add("ITEM_A");

            const json = histogram.toJSON();
            expect(json["ITEM_A"]).toBe(2);
            expect(json["ITEM_B"]).toBe(1);
        });
    });

    describe("generic type parameter", () => {
        it("should work with specific string types", () => {
            type ItemType = "TYPE_A" | "TYPE_B";
            const typedHistogram = new Histogram<ItemType>();

            typedHistogram.add("TYPE_A");
            typedHistogram.add("TYPE_B");
            typedHistogram.add("TYPE_A");

            const sorted = typedHistogram.getSorted();
            expect(sorted["TYPE_A"]).toBe(2);
            expect(sorted["TYPE_B"]).toBe(1);
        });
    });
});
