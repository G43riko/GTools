import { Grid2ArrayHolder, type Grid2Holder } from "@g43/tools";

export interface BiomeGenerator<Type extends string | number> {
    /**
     * @param x global X block coordinate
     * @param z global Z block coordinate
     */
    getBiomeFor(x: number, z: number): Type;
}

export function generateBiomeMapFor<BIOME extends string | number>(
    chunkX: number,
    chunkZ: number,
    generator: BiomeGenerator<BIOME>,
    chunkSizeX: number,
    chunkSizeZ: number,
    defaultBiome: BIOME,
    result: Grid2ArrayHolder<BIOME> = Grid2ArrayHolder.initEmpty<BIOME>(chunkSizeX, chunkSizeZ, defaultBiome),
): Grid2Holder<BIOME> {
    const chunkOffsetX = chunkX * chunkSizeX;
    const chunkOffsetZ = chunkZ * chunkSizeZ;
    for (let x = 0; x < chunkSizeX; x++) {
        for (let z = 0; z < chunkSizeZ; z++) {
            result.set(x, z, generator.getBiomeFor(chunkOffsetX + x, chunkOffsetZ + z));
        }
    }

    return result;
}
