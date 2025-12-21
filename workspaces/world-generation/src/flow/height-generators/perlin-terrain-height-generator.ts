import { makeNoise2D, PerlinNoise } from "@g43/world-generation";
import type { TerrainHeightGenerator } from "./terrain-height-generator.ts";

export class PerlinTerrainHeightGenerator<BIOME extends string | number> implements TerrainHeightGenerator<BIOME> {
    private readonly noise: (x: number, y: number) => number;
    private readonly range: number;
    private readonly minValue: number;
    private readonly maxValue: number;

    public constructor(
        seed: number,
        minValue = 0,
        maxValue = 1,
    ) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.range = this.maxValue - this.minValue;
        this.noise = PerlinNoise.createDynamicIntProvider2(makeNoise2D(seed + 13874), {
            frequency: 0.01,
            octaves: 2,
        });
    }

    public getHeightFor(x: number, z: number): number {
        return (this.noise(x - z, z + x) / Number.MAX_SAFE_INTEGER) * this.range + this.minValue;
    }
}
