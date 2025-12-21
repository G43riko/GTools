import { makeNoise2D, PerlinNoise } from "@g43/world-generation";
import type { BiomeGenerator } from "./biome-generator.ts";

export class PerlinBiomeGenerator<BIOME extends string | number> implements BiomeGenerator<BIOME> {
    readonly #provider: (x: number, y: number) => number;
    readonly #data: { biome: BIOME; endLevel: number }[];

    public constructor(
        seed: number,
        data: { biome: BIOME; endLevel: number }[],
        frequency = 0.04,
        octaves = 2,
    ) {
        this.#data = data.sort((a, b) => a.endLevel - b.endLevel);

        this.#provider = PerlinNoise.createDynamicProvider2(makeNoise2D(seed), { frequency, octaves });
    }

    public getBiomeFor(x: number, z: number): BIOME {
        const val = this.#provider(x, z);
        for (const item of this.#data) {
            if (val > item.endLevel) {
                continue;
            }

            return item.biome;
        }

        return this.#data[this.#data.length - 1].biome;
    }
}
