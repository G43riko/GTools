import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { makeNoise3D } from "./make-noise-3d.ts";
import { IteratorUtils } from "../../../../utils/src/iterator-utils.ts";
import { NOISE_MAX_VALUE, NOISE_MIN_VALUE } from "./noise-constants.ts";

describe("MakeNoise3D", () => {
    it("Should generate noise in required interval", () => {
        const noise = makeNoise3D(1234);
        const size = 100;
        IteratorUtils.iterateXYZ(size, size, size, (x, y, z) => {
            const value = noise(x, y, z);
            expect(value).toBeLessThanOrEqual(NOISE_MAX_VALUE);
            expect(value).toBeGreaterThanOrEqual(NOISE_MIN_VALUE);
        });
    });

    it("Should generate same values if seed is same", () => {
        const noiseA = makeNoise3D(1234);
        const noiseB = makeNoise3D(1234);
        const size = 100;
        IteratorUtils.iterateXYZ(size, size, size, (x, y, z) => {
            const valueA = noiseA(x, y, z);
            const valueB = noiseB(x, y, z);
            expect(valueA).toBe(valueB);
        });
    });
});
