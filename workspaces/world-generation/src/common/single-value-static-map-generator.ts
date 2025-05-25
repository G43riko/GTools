import type { ReadonlySimpleVector2 } from "@g43/types";
import { AbstractStaticMapGenerator } from "./static-map-generator.ts";

export class SingleValueStaticMapGenerator<T> extends AbstractStaticMapGenerator<T> {
    public readonly tile: T;
    public constructor(
        size: ReadonlySimpleVector2,
        tile: T,
    ) {
        super(size);
        this.tile = tile;
    }

    public override getTileFor(): T {
        return this.tile;
    }

    public override generateArrayData(): T[] {
        return new Array(this.mapSize.x * this.mapSize.y).fill(this.tile);
    }

    public override generateMapData(): T[][] {
        const result = new Array<T[]>(this.mapSize.x);
        for (let i = 0; i < this.mapSize.x; i++) {
            result[i] = new Array(this.mapSize.y).fill(this.tile);
        }

        return result;
    }
}
