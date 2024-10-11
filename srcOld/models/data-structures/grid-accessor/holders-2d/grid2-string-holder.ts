import { SimpleVector2 } from "../../../../math";
import { GridBlockItemFilter } from "../grid-filters";
import { Grid2Block, Grid2Holder } from "./grid2-holder";

export class Grid2StringHolder<T> implements Grid2Holder<T> {
    private data: { [key: string]: { value: T; x: number; y: number } } = {};

    public get length(): number {
        return Object.keys(this.data).length;
    }

    public clear(): void {
        this.data = {};
    }

    public get(x: number, y: number): T | undefined {
        return this.data[`${x}_${y}`].value;
    }

    public set(x: number, y: number, value: T): void {
        this.data[`${x}_${y}`] = { x, y, value };
    }

    public forEach(callback: (value: T, x: number, y: number) => void): boolean {
        Object.values(this.data).forEach((item) => (callback(item.value, item.x, item.y)));

        return true;
    }

    public getArea(_position: SimpleVector2, _size: SimpleVector2): T[] {
        throw new Error("Not implemented");
    }

    public delete(x: number, y: number): void {
        delete this.data[`${x}_${y}`];
    }

    public getAroundData(_x: number, _y: number, _size?: number): Grid2Block<T>[] {
        throw new Error("Not implemented");
    }

    public getRandomBlock(_filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        throw new Error("Not implemented");
    }
}
