import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Random } from "./random.ts";

describe("Random", () => {
    let random: Random;

    beforeEach(() => {
        random = new Random(12345); // Use a seed for predictable results.
    });

    it("intBetween should return a random integer within range", () => {
        const result = Random.intBetween(5, 10);
        expect(result).toBeGreaterThanOrEqual(5);
        expect(result).toBeLessThan(10);
    });

    it("floatBetween should return a random float within range", () => {
        const result = Random.floatBetween(1.5, 5.5);
        expect(result).toBeGreaterThanOrEqual(1.5);
        expect(result).toBeLessThan(5.5);
    });

    it("angleInRadians should return a value between 0 and 2π", () => {
        const result = Random.angleInRadians();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(Math.PI * 2);
    });

    it("randomInt should generate a predictable integer with a seed", () => {
        const result = Random.randomInt(12345);
        expect(typeof result).toBe("number");
    });

    it("nextInt should generate integers within range", () => {
        const result = random.nextInt();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(0x7FFFFFFF);
    });

    it("nextFloat should generate floats between 0 and 1", () => {
        const result = random.nextFloat();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(1);
    });

    it("nextFloatBetween should generate floats within range", () => {
        const result = random.nextFloatBetween(2, 8);
        expect(result).toBeGreaterThanOrEqual(2);
        expect(result).toBeLessThan(8);
    });

    it("nextIntBetween should generate integers within range", () => {
        const result = random.nextIntBetween(10, 20);
        expect(result).toBeGreaterThanOrEqual(10);
        expect(result).toBeLessThan(20);
    });

    it("nextItem should return a random item from an array", () => {
        const array = [1, 2, 3, 4];
        const result = random.nextItem(array);
        expect(array).toContain(result);
    });

    it("nextWeightItemUsingWeighProvider should return a weighted random item", () => {
        const array = ["a", "b", "c"] as const;
        const weights = { a: 1, b: 2, c: 7 } as const;
        const result = random.nextWeightItemUsingWeighProvider(array, (item: keyof typeof weights) => weights[item]);
        expect(array).toContain(result);
    });

    it("nextWeightItem should return a weighted random item", () => {
        const weights = { a: 1, b: 2, c: 7 };
        const result = random.nextWeightItem(weights);
        expect(["a", "b", "c"]).toContain(result);
    });

    it("requireNextWeightItem should return an item or throw", () => {
        const weights = { a: 1, b: 2, c: 7 };
        expect(() => random.requireNextWeightItem(weights)).not.toThrow();
        expect(() => random.requireNextWeightItem({}, "Error")).toThrow("Error");
    });

    it("requireNextItem should return an item or throw", () => {
        const array = [1, 2, 3, 4];
        expect(() => random.requireNextItem(array)).not.toThrow();
        expect(() => random.requireNextItem([], "Error")).toThrow("Error");
    });

    it("nextBoolean should return true or false based on probability", () => {
        const result1 = random.nextBoolean(1); // Always true
        const result2 = random.nextBoolean(0); // Always false
        expect(result1).toBe(true);
        expect(result2).toBe(false);
    });

    it("shuffleArray should return a shuffled version of the array", () => {
        const array = [1, 2, 3, 4, 5];
        const shuffled = random.shuffleArray(array);
        expect(shuffled).not.toEqual(array); // Ensure it is shuffled
        expect(shuffled.sort()).toEqual(array); // Ensure elements are the same
    });

    it("randomSubset should return a subset of the specified size", () => {
        const array = [1, 2, 3, 4, 5];
        const subset = random.randomSubset(array, 3);
        expect(subset.length).toBe(3);
        expect(new Set(array).has(subset[0])).toBe(true);
        expect(new Set(array).has(subset[1])).toBe(true);
        expect(new Set(array).has(subset[2])).toBe(true);
    });

    it("randomSubset should throw an error if count exceeds array length", () => {
        const array = [1, 2, 3];
        expect(() => random.randomSubset(array, 5)).toThrow("Subset size exceeds array length.");
    });

    it("nextGaussian should generate numbers following a Gaussian distribution", () => {
        const values = Array.from({ length: 10000 }, () => random.nextGaussian(0, 1));
        const mean = values.reduce((sum, x) => sum + x, 0) / values.length;
        const variance = values.reduce((sum, x) => sum + (x - mean) ** 2, 0) / values.length;
        const stdDev = Math.sqrt(variance);

        expect(mean).toBeCloseTo(0, 0.1); // Mean should be approximately 0
        expect(stdDev).toBeCloseTo(1, 0.1); // Standard deviation should be approximately 1
    });
});
