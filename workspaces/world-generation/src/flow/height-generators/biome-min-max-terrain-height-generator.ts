import { makeNoise2D, PerlinNoise } from "@g43/world-generation";
import { Grid2ArrayHolder } from "@g43/tools";
import { type BiomeGenerator, generateBiomeMapFor } from "../biome-generators/biome-generator.ts";
import type { TerrainHeightGenerator } from "./terrain-height-generator.ts";

/**
 * This generates heights based on biomes
 */
export class BiomeMinMaxTerrainHeightGenerator<BIOME extends string | number> implements TerrainHeightGenerator<BIOME> {
    /**
     * @see https://github.dev/cuberite/cuberite/blob/95bc2eac222a12c049b1aef799ac280fa9123af4/src/Generating/HeiGen.cpp#L752
     * @private
     */

    /** Size of the averaging process, in columns (for each direction). Must be less than 16. */
    private readonly AVERAGING_SIZE = 4;
    private readonly weightsHolder = Grid2ArrayHolder.initEmpty(this.AVERAGING_SIZE, this.AVERAGING_SIZE, 0);
    private readonly totalWeight = 0;

    private readonly seed: number;
    private readonly biomeGenerator: BiomeGenerator<BIOME>;
    private readonly minMaxMap: { [key in BIOME]: [min: number, max: number] };

    public constructor(
        seed: number,
        biomeGenerator: BiomeGenerator<BIOME>,
        minMaxMap: { [key in BIOME]: [min: number, max: number] },
    ) {
        this.seed = seed;
        this.biomeGenerator = biomeGenerator;
        this.minMaxMap = minMaxMap;
        // Initialize the weights:
        for (let z = 0; z <= this.AVERAGING_SIZE * 2; z++) {
            for (let x = 0; x <= this.AVERAGING_SIZE * 2; x++) {
                const weight = 1 + 2 * this.AVERAGING_SIZE - Math.abs(x - this.AVERAGING_SIZE) -
                    Math.abs(z - this.AVERAGING_SIZE);
                this.weightsHolder.set(x, z, weight);
                this.totalWeight += weight;
            }
        }
    }

    public getHeightFor(_x: number, _z: number, _biome: BIOME): number {
        throw new Error("Not implemented");
    }

    /**
     * @see https://github.dev/cuberite/cuberite/blob/95bc2eac222a12c049b1aef799ac280fa9123af4/src/Generating/HeiGen.cpp#L662
     * @param chunkDesc
     */
    public getHeightForChunk(cX: number, cY: number, chunkSize: number, defaultBiome: BIOME): Grid2ArrayHolder<number> {
        const result = Grid2ArrayHolder.initEmpty(chunkSize, chunkSize, 0);
        const biomeMap = Grid2ArrayHolder.initWithProvider(3, 3, (x, y) =>
            generateBiomeMapFor(
                cX + x - 1,
                cY + y - 1,
                this.biomeGenerator,
                chunkSize,
                chunkSize,
                defaultBiome,
            ));
        const minMap = Grid2ArrayHolder.initEmpty(chunkSize, chunkSize, 0);
        const maxMap = Grid2ArrayHolder.initEmpty(chunkSize, chunkSize, 0);

        for (let x = 0; x < chunkSize; x++) {
            for (let z = 0; z < chunkSize; z++) {
                // For each column, sum the min and max values of the neighborhood around it:
                let min = 0;
                let max = 0;

                for (let relZ = 0; relZ <= this.AVERAGING_SIZE * 2; relZ++) {
                    let bz = z + 16 + relZ - this.AVERAGING_SIZE; // Biome Z coord relative to the neighborBiomes start
                    const cz = bz / 16; // Chunk Z coord relative to the neighborBiomes start
                    bz %= 16; // Biome Z coord relative to cz in neighborBiomes
                    for (let relX = 0; relX <= this.AVERAGING_SIZE * 2; relX++) {
                        let bx = x + 16 + relX - this.AVERAGING_SIZE; // Biome X coord relative to the neighborBiomes start
                        const cx = bx / 16; // Chunk X coord relative to the neighborBiomes start
                        bx %= 16; // Biome X coord relative to cz in neighborBiomes

                        // Get the biome's min and max heights:
                        const biome = biomeMap.get(cx, cz).get(bx, bz);
                        if (!biome) {
                            throw new Error("Biome not found");
                        }
                        const [biomeMin, biomeMax] = this.minMaxMap[biome];

                        // Add them to the total, with the weight depending on their relative position to the column:
                        min += biomeMin * this.weightsHolder.get(relX, relZ);
                        max += biomeMax * this.weightsHolder.get(relX, relZ);
                    }
                }
                minMap.set(x, z, min / this.totalWeight);
                maxMap.set(x, z, max / this.totalWeight);
            }
        }

        // TODO Generate noise https://github.dev/cuberite/cuberite/blob/95bc2eac222a12c049b1aef799ac280fa9123af4/src/Generating/HeiGen.cpp#L706-L712

        const noise = PerlinNoise.createDynamicIntProvider2(makeNoise2D(this.seed + 13874), {
            frequency: 0.01,
            octaves: 2,
        });

        for (let x = 0; x < chunkSize; x++) {
            for (let z = 0; z < chunkSize; z++) {
                const min = minMap.get(x, z);
                const max = maxMap.get(x, z);
                const height = (max + min) / 2 + noise(x, z) * (max - min);

                result.set(x, z, height);
            }
        }

        return result;
    }
}
