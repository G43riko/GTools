/**
 * TODO:
 *  heightMapGenerator
 */
export interface TerrainHeightGenerator<BIOME extends string | number> {
    getHeightFor(x: number, z: number, biome: BIOME): number;
}
