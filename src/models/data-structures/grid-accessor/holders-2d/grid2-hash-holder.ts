import { SimpleVector2 } from "../../../../math";
import { hash2Numbers } from "../../../../utils/math-utils";
import { GridBlockItemFilter } from "../grid-filters";
import { Grid2Block, Grid2Holder } from "./grid2-holder";

export class Grid2HashHolder<T> implements Grid2Holder<T> {
    private readonly data: { [key: number]: { value: T, x: number, y: number } } = {};

    public get length(): number {
        return Object.keys(this.data).length;
    }

    public get(x: number, y: number): T | undefined{
        return this.data[hash2Numbers(x, y)]?.value;
    }

    public set(x: number, y: number, value: T): void {
        this.data[hash2Numbers(x, y)] = {x, y, value};
    }

    public forEach(callback: (value: T, x: number, y: number) => void): boolean {
        Object.values(this.data).forEach((item) => (callback(item.value, item.x, item.y)));

        return true;
    }

    public getArea(position: SimpleVector2, size: SimpleVector2): T[] {
        throw new Error("Not implemented");
    }

    public delete(x: number, y: number): void {
        delete this.data[hash2Numbers(x, y)];
    }

    public getAroundData(x: number, y: number, size?: number): Grid2Block<T>[] {
        throw new Error("Not implemented");
    }

    public getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        throw new Error("Not implemented");
    }
}
