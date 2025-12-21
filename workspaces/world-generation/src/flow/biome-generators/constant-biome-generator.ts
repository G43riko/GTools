import type { BiomeGenerator } from "./biome-generator.ts";

export class ConstantBiomeGenerator<BIOME extends string | number> implements BiomeGenerator<BIOME> {
    readonly #biome: BIOME;

    public constructor(biome: BIOME) {
        this.#biome = biome;
    }

    public getBiomeFor(_x: number, _z: number): BIOME {
        return this.#biome;
    }
}
