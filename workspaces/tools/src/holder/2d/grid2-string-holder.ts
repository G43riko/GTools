import type { ReadonlySimpleVector2 } from "@g43/types";
import { getValueFromProvider, type ValueProvider } from "@g43/core";
import type { GridBlockItemFilter } from "../grid-filters.ts";
import type { Grid2Block, Grid2Holder } from "./grid2-holder.ts";

export class Grid2StringHolder<T> implements Grid2Holder<T> {
    private data: { [key: string]: { value: T; x: number; y: number } } = {};

    public get length(): number {
        return Object.keys(this.data).length;
    }

    public clear(): void {
        this.data = {};
    }

    public getOrCreate(x: number, y: number, provider: ValueProvider<T>): T {
        const key = `${x}_${y}`;

        const existingItem = this.data[key];
        if (existingItem) {
            return existingItem.value;
        }
        const newItem = getValueFromProvider(provider);
        this.data[key] = { x, y, value: newItem };

        return newItem;
    }

    public get(x: number, y: number): T | undefined {
        return this.data[`${x}_${y}`]?.value;
    }

    public require(x: number, y: number, message: string = `Cannot find item at ${x}_${y}`): T {
        const result = this.get(x, y);
        if (!result) {
            throw new Error(message);
        }

        return result;
    }

    public set(x: number, y: number, value: T): void {
        this.data[`${x}_${y}`] = { x, y, value };
    }

    public map<Result>(mapper: (value: T, x: number, y: number) => Result): Result[] {
        return Object.values(this.data).map((item) => mapper(item.value, item.x, item.y));
    }

    public forEach(callback: (value: T, x: number, y: number) => void): boolean {
        Object.values(this.data).forEach((item) => callback(item.value, item.x, item.y));

        return true;
    }

    public delete(x: number, y: number): void {
        delete this.data[`${x}_${y}`];
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
