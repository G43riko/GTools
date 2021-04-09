import { SimpleVector2 } from "gtools/math";
import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";
import { getOrSetProperty } from "../../../../utils/object-utils";

export class Grid2ObjectHolder<T> implements Grid2Holder<T> {
    private readonly data: { [x: number]: { [y: number]: T } } = {};
    private _length                                            = 0;

    public get(x: number, y: number): T {
        const row = getOrSetProperty(this.data, x, {});

        return row[y];
    }

    public remove(x: number, y: number): void {
        const row = getOrSetProperty(this.data, x, {});
        if (row[y]) {
            this._length--;
        }
        delete row[y];
    }

    public forEach(callback: (item: T, x: number, y: number) => void): void {
        Object.entries(this.data).forEach(([x, chunkRows]) => {
            Object.entries(chunkRows).forEach(([y, chunk]) => {
                callback(chunk, +x, +y);
            });
        });
    }

    public set(x: number, y: number, value: T): void {
        const row = getOrSetProperty(this.data, x, {});

        if (typeof row[y] === "undefined") {
            this._length++;
        }

        row[y] = value;
    }

    public getArea(position: SimpleVector2, size: SimpleVector2): T[] {
        throw new Error("Not implemented");
    }

    public getAroundData(x: number, y: number, size?: number): Grid2Block<T>[] {
        throw new Error("Not implemented");
    }

    public getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        throw new Error("Not implemented");
    }
}
