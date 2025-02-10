import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { makeNoise4D } from "./make-noise-4d.ts";
import { IteratorUtils } from "../../../../utils/src/iterator-utils.ts";
import { NOISE_MAX_VALUE, NOISE_MIN_VALUE } from "./noise-constants.ts";

describe("MakeNoise4D", () => {
    it("Should generate noise in required interval", () => {
        const noise = makeNoise4D(1234);
        const size = 10;
        IteratorUtils.iterateXYZW(size, size, size, size, (x, y, z, w) => {
            const value = noise(x, y, z, w);
            expect(value).toBeLessThanOrEqual(NOISE_MAX_VALUE);
            expect(value).toBeGreaterThanOrEqual(NOISE_MIN_VALUE);
        });
    });

    it("Should generate same values if seed is same", () => {
        const noiseA = makeNoise4D(1234);
        const noiseB = makeNoise4D(1234);
        const size = 10;
        IteratorUtils.iterateXYZW(size, size, size, size, (x, y, z, w) => {
            const valueA = noiseA(x, y, z, w);
            const valueB = noiseB(x, y, z, w);
            expect(valueA).toBe(valueB);
        });
    });
});
