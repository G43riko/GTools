import type { TerrainHeightGenerator } from "./terrain-height-generator.ts";

export class ConstantTerrainHeightGenerator<BIOME extends string | number> implements TerrainHeightGenerator<BIOME> {
    readonly #height: number;
    public constructor(height: number) {
        this.#height = height;
    }

    public getHeightFor(_x: number, _z: number): number {
        return this.#height;
    }
}
