import { SimpleVector2 } from "../../../../math";
import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "../../../../models";

export class Grid2MapHolder<T> implements Grid2Holder<T> {
    public readonly length = this.data.length * this.data[0].length;

    public constructor(public readonly data: T[][]) {
    }

    public static initEmpty<T>(x: number, y: number, defaultValue: T = null as unknown as T): Grid2MapHolder<T> {
        const result = new Array<T[]>(x);
        for (let i = 0; i < x; i++) {
            result[i] = new Array<T>(y);
            for (let j = 0; j < y; j++) {
                result[i][j] = defaultValue;
            }
        }

        return new Grid2MapHolder<T>(result);
    }

    public static initWithProvider<T>(x: number, y: number, provider: (x: number, y: number) => T): Grid2MapHolder<T> {
        const result = new Array<T[]>(x);
        for (let i = 0; i < x; i++) {
            result[i] = new Array<T>(y);
            for (let j = 0; j < y; j++) {
                result[i][j] = provider(x, y);
            }
        }

        return new Grid2MapHolder<T>(result);
    }

    public get(x: number, y: number): T | undefined {
        return this.data[x][y];
    }

    public set(x: number, y: number, value: T): void {
        this.data[x][y] = value;
    }

    public delete(x: number, y: number): void {
        this.data[x][y] = undefined as unknown as T;
    }

    public forEach(callback: (block: T, x: number, y: number) => void): boolean {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                callback(this.data[i][j], i, j);
            }
        }

        return true;
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
