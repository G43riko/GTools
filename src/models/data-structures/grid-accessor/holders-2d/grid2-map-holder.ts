import { SimpleVector2 } from "../../../../math";
import { GridBlockItemFilter } from "../grid-filters";
import { Grid2Block, Grid2Holder } from "./grid2-holder";

export class Grid2MapHolder<T> implements Grid2Holder<T> {
    public readonly length = this.data.length * this.data[0].length;

    public constructor(public readonly data: T[][]) {
    }

    public static initEmpty<S>(x: number, y: number, defaultValue: S = null as unknown as S): Grid2MapHolder<S> {
        const result = new Array<S[]>(x);
        for (let i = 0; i < x; i++) {
            result[i] = new Array<S>(y);
            for (let j = 0; j < y; j++) {
                result[i][j] = defaultValue;
            }
        }

        return new Grid2MapHolder<S>(result);
    }

    public static initWithProvider<S>(x: number, y: number, provider: (_x: number, _y: number) => S): Grid2MapHolder<S> {
        const result = new Array<S[]>(x);
        for (let i = 0; i < x; i++) {
            result[i] = new Array<S>(y);
            for (let j = 0; j < y; j++) {
                result[i][j] = provider(x, y);
            }
        }

        return new Grid2MapHolder<S>(result);
    }

    public clear(): void {
        for (const row of this.data) {
            for (let k = 0; k < row.length; k++) {
                row[k] = undefined as unknown as T;
            }
        }
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

    public getArea(_position: SimpleVector2, _size: SimpleVector2): T[] {
        throw new Error("Not implemented");
    }

    public getAroundData(_x: number, _y: number, _size?: number): Grid2Block<T>[] {
        throw new Error("Not implemented");
    }

    public getRandomBlock(_filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        throw new Error("Not implemented");
    }
}
