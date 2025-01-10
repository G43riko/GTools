import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import * as MathUtils from "./math-utils.ts";
import { Random } from "@g43/tools";

describe("Math utils", () => {
    describe("RoundToDecimal", () => {
        it("Returns decimal number rounded off to N decimal places", () => {
            expect(MathUtils.roundToDecimals(1, 5)).toEqual("1.00000");
            expect(MathUtils.roundToDecimals(1.00000000001, 5)).toEqual("1.00000");
            expect(MathUtils.roundToDecimals(1.000009, 5, "floor")).toEqual("1.00000");
            expect(MathUtils.roundToDecimals(1.000009, 4, "floor")).toEqual("1.0000");
            expect(MathUtils.roundToDecimals(1.000001, 5, "ceil")).toEqual("1.00001");
            expect(MathUtils.roundToDecimals(1.000001, 4, "ceil")).toEqual("1.0001");
            expect(MathUtils.roundToDecimals(1.000005, 5)).toEqual("1.00001");
            expect(MathUtils.roundToDecimals(1.000005, 4)).toEqual("1.0000");
        });
    });
    describe("Average", () => {
        it("test average function", () => {
            expect(isNaN(MathUtils.average([]))).toBeTruthy();
            expect(MathUtils.average([1])).toEqual(1);
            expect(MathUtils.average([1, 2, 3])).toEqual(2);
            expect(MathUtils.average([2, 2, 2])).toEqual(2);
            expect(MathUtils.average([2.5, 8.6, 3.9])).toEqual(5);
        });
    });
    describe("Clamp", () => {
        it("test clamp function", () => {
            expect(MathUtils.clamp(15, 10, 20)).toEqual(15);
            expect(MathUtils.clamp(5, 10, 20)).toEqual(10);
            expect(MathUtils.clamp(25, 10, 20)).toEqual(20);
            expect(MathUtils.clamp(10, 10, 20)).toEqual(10);
            expect(MathUtils.clamp(20, 10, 20)).toEqual(20);
        });
    });
    describe("Lerp", () => {
        it("test lerp function", () => {
            expect(MathUtils.lerp(0, 10, 0)).toEqual(0);
            expect(MathUtils.lerp(0, 10, 1)).toEqual(10);
            expect(MathUtils.lerp(0, 10, 0.5)).toEqual(5);
        });
    });
    describe("Log2", () => {
        it("test log2 function", () => {
            expect(MathUtils.log2i(1)).toEqual(0);
            expect(MathUtils.log2i(2)).toEqual(1);
            expect(MathUtils.log2i(4)).toEqual(2);
            expect(MathUtils.log2i(8)).toEqual(3);
            expect(MathUtils.log2i(16)).toEqual(4);
            expect(MathUtils.log2i(32)).toEqual(5);
            expect(MathUtils.log2i(64)).toEqual(6);
            expect(MathUtils.log2i(128)).toEqual(7);
        });
    });
    describe("BinomialCoefficient", () => {
        it("test binomialCoefficient function", () => {
            // should test (0, 1) to equal 1
            expect(MathUtils.binomialCoefficient(1, 5)).toEqual(0);
            expect(MathUtils.binomialCoefficient(1, 1)).toEqual(1);
            expect(MathUtils.binomialCoefficient(2, 1)).toEqual(2);
            expect(MathUtils.binomialCoefficient(2, 2)).toEqual(1);
            expect(MathUtils.binomialCoefficient(3, 1)).toEqual(3);
            expect(MathUtils.binomialCoefficient(3, 2)).toEqual(3);
            expect(MathUtils.binomialCoefficient(3, 3)).toEqual(1);
        });
    });
    describe("BinomialCoefficient", () => {
        it("Should return random value from given interval", () => {
            for (let i = 0; i < 1000; i++) {
                const min = Random.intBetween(0, 1000);
                const max = Random.intBetween(1000, 1000000);
                expect(min < max).toBeTruthy();

                const result = Random.intBetween(min, max);
                expect(min < result).toBeTruthy();
                expect(result < max).toBeTruthy();
            }
        });
    });
});
