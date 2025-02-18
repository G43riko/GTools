import type { ReadonlySimpleVector2 } from "@g43/types";
import { makeNoise2D } from "./noise/make-noise-2d.ts";
import { PerlinNoise } from "./noise/perlin-noise.ts";
import { AbstractStaticMapGenerator } from "./static-map-generator.ts";

/**
 * TODO: this is statis so we should pregenerate data
 * Creates map with random values between 0 and 1
 */
export class PerlinStaticMapGenerator extends AbstractStaticMapGenerator<number> {
    public readonly provider: (x: number, y: number) => number;

    public constructor(
        size: ReadonlySimpleVector2,
        public readonly frequency = 0.01,
        public readonly octaves = 2,
        public readonly seed = 1,
    ) {
        super(size);

        this.provider = PerlinNoise.createDynamicProvider2(makeNoise2D(this.seed + 13874), { frequency, octaves });
    }

    public override getTileFor(x: number, y: number): number {
        return (this.provider(x, y) + 1) / 2;
    }
}
