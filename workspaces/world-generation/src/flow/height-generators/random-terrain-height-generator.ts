import { Random } from "@g43/tools";
import type { TerrainHeightGenerator } from "./terrain-height-generator.ts";

export class RandomTerrainHeightGenerator<BIOME extends string | number> implements TerrainHeightGenerator<BIOME> {
    readonly #random: Random;
    readonly #minValue: number;
    readonly #maxValue: number;

    public constructor(
        seed: number,
        minValue: number,
        maxValue: number,
    ) {
        this.#random = new Random(seed);
        this.#minValue = minValue;
        this.#maxValue = maxValue;
    }

    public getHeightFor(_x: number, _z: number): number {
        return this.#random.nextIntBetween(this.#minValue, this.#maxValue);
    }
}
