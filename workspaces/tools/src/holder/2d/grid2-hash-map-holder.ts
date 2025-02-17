import type { ReadonlySimpleVector2 } from "@g43/types";
import { getValueFromProvider, type ValueProvider } from "@g43/core";
import { hash2Numbers } from "@g43/utils";
import type { GridBlockItemFilter } from "../grid-filters.ts";
import type { Grid2Block, Grid2Holder } from "./grid2-holder.ts";

export class Grid2HashMapHolder<T> implements Grid2Holder<T> {
    private readonly data = new Map<number, { value: T; x: number; y: number }>();

    public get length(): number {
        return Object.keys(this.data).length;
    }

    public clear(): void {
        this.data.clear();
    }

    public get(x: number, y: number): T | undefined {
        const hash = hash2Numbers(x, y);

        return this.data.get(hash)?.value;
    }

    public getOrCreate(x: number, y: number, provider: ValueProvider<T>): T {
        const hash = hash2Numbers(x, y);

        const existingItem = this.data.get(hash);
        if (existingItem) {
            return existingItem.value;
        }
        const newItem = getValueFromProvider(provider);
        this.data.set(hash, { x, y, value: newItem });

        return newItem;
    }

    public set(x: number, y: number, value: T): void {
        const hash = hash2Numbers(x, y);
        this.data.set(hash, { x, y, value });
    }

    public forEach(callback: (value: T, x: number, y: number) => void): boolean {
        this.data.forEach((item) => (callback(item.value, item.x, item.y)));

        return true;
    }
    public delete(x: number, y: number): void {
        const hash = hash2Numbers(x, y);
        this.data.delete(hash);
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
