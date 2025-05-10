import { expect } from "@std/expect";
import { beforeEach, describe, it } from "@std/testing/bdd";
import { NumericCounter } from "./numeric-counter.ts";

describe("NumericCounter", () => {
    let counter: NumericCounter;

    beforeEach(() => {
        counter = new NumericCounter();
    });

    describe("min", () => {
        it("should return Infinity when no values are added", () => {
            expect(counter.min).toBe(Infinity);
        });

        it("should return the minimum value after adding numbers", () => {
            counter.add(5);
            counter.add(2);
            counter.add(8);
            expect(counter.min).toBe(2);
        });
    });

    describe("max", () => {
        it("should return -Infinity when no values are added", () => {
            expect(counter.max).toBe(-Infinity);
        });

        it("should return the maximum value after adding numbers", () => {
            counter.add(1);
            counter.add(10);
            counter.add(7);
            expect(counter.max).toBe(10);
        });
    });

    describe("sum", () => {
        it("should return 0 when no values are added", () => {
            expect(counter.sum).toBe(0);
        });

        it("should return the sum of all added numbers", () => {
            counter.add(3);
            counter.add(4);
            expect(counter.sum).toBe(7);
        });
    });

    describe("reset", () => {
        it("should reset all properties to initial values", () => {
            counter.add(5);
            counter.add(15);
            counter.reset();

            expect(counter.min).toBe(Infinity);
            expect(counter.max).toBe(-Infinity);
            expect(counter.sum).toBe(0);
            expect(counter.getCount()).toBe(0);
        });
    });

    describe("getMin", () => {
        it("should return the minimum value", () => {
            counter.add(9);
            counter.add(3);
            expect(counter.getMin()).toBe(3);
        });
    });

    describe("getMax", () => {
        it("should return the maximum value", () => {
            counter.add(4);
            counter.add(12);
            expect(counter.getMax()).toBe(12);
        });
    });

    describe("getCount", () => {
        it("should return the count of added numbers", () => {
            counter.add(4);
            counter.add(12);
            expect(counter.getCount()).toBe(2);
        });
    });

    describe("getAverage", () => {
        it("should return the average of added numbers", () => {
            counter.add(5);
            counter.add(15);
            expect(counter.getAverage()).toBe(10);
        });

        it("should return NaN if no numbers are added", () => {
            expect(counter.getAverage()).toBeNaN();
        });
    });

    describe("addAll", () => {
        it("should add all numbers from an array", () => {
            counter.addAll([2, 4, 6]);
            expect(counter.getCount()).toBe(3);
            expect(counter.sum).toBe(12);
            expect(counter.min).toBe(2);
            expect(counter.max).toBe(6);
        });
    });
});
