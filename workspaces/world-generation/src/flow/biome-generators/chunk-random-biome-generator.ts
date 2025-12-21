import { makeNoise2D, PerlinNoise } from "@g43/world-generation";
import type { BiomeGenerator } from "./biome-generator.ts";

/**
 * Generates random biome for every chunk
 */
export class ChunkRandomBiomeGenerator<BIOME extends string | number> implements BiomeGenerator<BIOME> {
    private readonly noise: (x: number, y: number) => number;

    private readonly seed: number;
    private readonly availableBiomes: readonly BIOME[];
    private readonly chunkSize: number;
    public constructor(
        seed: number,
        availableBiomes: readonly BIOME[],
        chunkSize = 16,
    ) {
        this.seed = seed;
        this.availableBiomes = availableBiomes;
        this.chunkSize = chunkSize;
        this.noise = PerlinNoise.createDynamicIntProvider2(makeNoise2D(this.seed + 13874), {
            frequency: 0.01,
            octaves: 2,
        });
    }

    public getBiomeFor(x: number, z: number): BIOME {
        const chunkX = Math.floor(x / this.chunkSize);
        const chunkZ = Math.floor(z / this.chunkSize);

        return this
            .availableBiomes[
                Math.floor(this.noise(chunkX + chunkZ, chunkX - chunkZ) / 19) % this.availableBiomes.length
            ];
    }
}
