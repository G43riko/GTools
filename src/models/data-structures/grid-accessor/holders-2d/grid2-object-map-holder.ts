import { SimpleVector2 } from "../../../../math";
import { GridBlockItemFilter } from "../grid-filters";
import { Grid2Block, Grid2Holder } from "./grid2-holder";

export class Grid2ObjectMapHolder<T> implements Grid2Holder<T> {
    private readonly chunks = new Map<number, Map<number, T>>();

    public get length(): number {
        let length = 0;
        this.chunks.forEach((value) => length += value.size);

        return length;
    }

    public get(x: number, y: number): T | undefined {
        return this.chunks.get(x)?.get(y);
    }

    public remove(x: number, y: number): boolean {
        return this.chunks.get(x)?.delete(y) ?? false;
    }

    public forEach(callback: (item: T, x: number, y: number) => void): boolean {
        this.chunks.forEach((row, x) => row.forEach((item, y) => callback(item, x, y)));

        return true;
    }

    public set(x: number, y: number, value: T): void {
        const row = this.chunks.get(x);

        if (row) {
            row.set(y, value);
        } else {
            this.chunks.set(x, new Map([[y, value]]));
        }
    }

    public getArea(position: SimpleVector2, size: SimpleVector2): T[] {
        return [];
    }

    public getAroundData(x: number, y: number, size?: number): Grid2Block<T>[] {
        return [];
    }

    public getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        return;
    }
}
