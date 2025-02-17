import type { ReadonlySimpleVector2 } from "@g43/types";
import type { GridBlockItemFilter } from "../grid-filters.ts";
import type { Grid2Block, Grid2Holder } from "./grid2-holder.ts";

export class Grid2ObjectMapHolder<T> implements Grid2Holder<T> {
    private readonly chunks = new Map<number, Map<number, T>>();

    public get length(): number {
        let length = 0;
        this.chunks.forEach((value) => length += value.size);

        return length;
    }

    public clear(): void {
        this.chunks.clear();
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

    public getArea(_position: ReadonlySimpleVector2, _size: ReadonlySimpleVector2): T[] {
        throw new Error("Not implemented");
    }

    public getAroundData(_x: number, _y: number, _size?: number): Grid2Block<T>[] {
        throw new Error("Not implemented");
    }

    public getRandomBlock(_filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        throw new Error("Not implemented");
    }
}
