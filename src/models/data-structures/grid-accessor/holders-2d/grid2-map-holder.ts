import { SimpleVector2 } from "gtools/math";
import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";

export class Grid2MapHolder<T> implements Grid2Holder<T> {
    public constructor(public readonly data: T[][]) {
    }

    public get(x: number, y: number): T {
        return this.data[x][y];
    }

    public set(x: number, y: number, value: T): void {
        this.data[x][y] = value;
    }

    public forEach(callback: (block: T, x: number, y: number) => void): void {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                callback(this.data[i][j], i, j);
            }
        }
    }

    public getArea(position: SimpleVector2, size: SimpleVector2): T[] {
        throw new Error("Not implemented");
    }

    public getAroundData(x: number, y: number, size?: number): Grid2Block<T>[] {
        throw new Error("Not implemented");
    }

    public getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | null {
        throw new Error("Not implemented");
    }
}
