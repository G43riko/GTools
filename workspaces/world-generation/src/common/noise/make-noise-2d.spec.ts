import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { makeNoise2D } from "./make-noise-2d.ts";
import { IteratorUtils } from "../../../../utils/src/iterator-utils.ts";
import { NOISE_MAX_VALUE, NOISE_MIN_VALUE } from "./noise-constants.ts";

describe("MakeNoise2D", () => {
    it("Should generate noise in required interval", () => {
        const noise = makeNoise2D(1234);
        const size = 100;
        IteratorUtils.iterateXY(size, size, (x, y) => {
            const value = noise(x, y);
            expect(value).toBeLessThanOrEqual(NOISE_MAX_VALUE);
            expect(value).toBeGreaterThanOrEqual(NOISE_MIN_VALUE);
        });
    });

    it("Should generate same values if seed is same", () => {
        const noiseA = makeNoise2D(1234);
        const noiseB = makeNoise2D(1234);
        const size = 100;
        IteratorUtils.iterateXY(size, size, (x, y) => {
            const valueA = noiseA(x, y);
            const valueB = noiseB(x, y);
            expect(valueA).toBe(valueB);
        });
    });
});
