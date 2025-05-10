import { expect } from "@std/expect";
import { beforeEach, describe, it } from "@std/testing/bdd";
import { BooleanCounter } from "./boolean-counter.ts";

describe("BooleanCounter", () => {
    let counter: BooleanCounter;

    beforeEach(() => {
        counter = new BooleanCounter();
    });

    describe("initial state", () => {
        it("should initialize with zero values", () => {
            expect(counter.trueValues).toBe(0);
            expect(counter.falseValues).toBe(0);
            expect(counter.totalValues).toBe(0);
        });
    });

    describe("add", () => {
        it("should increment trueValues when adding truthy values", () => {
            counter.add(true);
            counter.add(1);
            counter.add("string");
            counter.add({});
            counter.add([]);

            expect(counter.trueValues).toBe(5);
            expect(counter.falseValues).toBe(0);
            expect(counter.totalValues).toBe(5);
        });

        it("should increment falseValues when adding falsy values", () => {
            counter.add(false);
            counter.add(0);
            counter.add("");
            counter.add(null);
            counter.add(undefined);

            expect(counter.trueValues).toBe(0);
            expect(counter.falseValues).toBe(5);
            expect(counter.totalValues).toBe(5);
        });

        it("should track mixed values correctly", () => {
            counter.add(true);
            counter.add(false);
            counter.add(1);
            counter.add(0);

            expect(counter.trueValues).toBe(2);
            expect(counter.falseValues).toBe(2);
            expect(counter.totalValues).toBe(4);
        });
    });

    describe("reset", () => {
        it("should reset all counters to zero", () => {
            counter.add(true);
            counter.add(false);
            counter.reset();

            expect(counter.trueValues).toBe(0);
            expect(counter.falseValues).toBe(0);
            expect(counter.totalValues).toBe(0);
        });
    });

    describe("toPercentage", () => {
        it("should return 0% when no values are added", () => {
            expect(counter.toPercentage()).toBe("0.00%");
        });

        it("should calculate percentage of true values", () => {
            counter.add(true);
            counter.add(true);
            counter.add(false);
            counter.add(false);

            expect(counter.toPercentage()).toBe("50.00%");
        });

        it("should respect fixed decimal places", () => {
            counter.add(true);
            counter.add(true);
            counter.add(false);

            expect(counter.toPercentage(0)).toBe("67%");
            expect(counter.toPercentage(1)).toBe("66.7%");
            expect(counter.toPercentage(3)).toBe("66.667%");
        });

        it("should return 100% when all values are true", () => {
            counter.add(true);
            counter.add(true);

            expect(counter.toPercentage()).toBe("100.00%");
        });

        it("should return 0% when all values are false", () => {
            counter.add(false);
            counter.add(false);

            expect(counter.toPercentage()).toBe("0.00%");
        });
    });

    describe("toString", () => {
        it("should return formatted string with count and percentage", () => {
            counter.add(true);
            counter.add(true);
            counter.add(false);

            expect(counter.toString()).toBe("2 (66.67%");
        });
    });

    describe("toJSON", () => {
        it("should return object with counts and percentage", () => {
            counter.add(true);
            counter.add(false);

            const json = counter.toJSON();
            expect(json.trueValues).toBe(1);
            expect(json.totalValues).toBe(2);
            expect(json.percentage).toBe("50.00%");
        });
    });
});
