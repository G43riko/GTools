import type { ReadonlySimpleVector2 } from "@g43/types";
import { IteratorUtils } from "@g43/utils";
export interface StaticMapGenerator<T> {
    getTileFor(x: number, y: number): T;
}
/**
 * Generate map data for map with static size
 */
export abstract class AbstractStaticMapGenerator<T> implements StaticMapGenerator<T> {
    protected constructor(
        public readonly mapSize: ReadonlySimpleVector2,
    ) {
    }

    public abstract getTileFor(x: number, y: number): T;

    public generateArrayData(): T[] {
        const result = new Array<T>(this.mapSize.x * this.mapSize.y);

        IteratorUtils.iterateXY(this.mapSize.x, this.mapSize.y, (x, y, index) => {
            result[index] = this.getTileFor(x, y);
        });

        return result;
    }

    public generateMapData(): T[][] {
        const result = new Array<T[]>(this.mapSize.x);
        for (let i = 0; i < this.mapSize.x; i++) {
            const row = new Array<T>(this.mapSize.y);
            for (let j = 0; j < this.mapSize.y; j++) {
                row[j] = this.getTileFor(i, j);
            }
            result[i] = row;
        }

        return result;
    }
}
