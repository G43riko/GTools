import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";
import { SimpleVector2 } from "../../../../math";
export declare class Grid2HashHolder<T> implements Grid2Holder<T> {
    private readonly data;
    get(x: number, y: number): T;
    set(x: number, y: number, value: T): void;
    forEach(callback: (value: T, x: number, y: number) => void): void;
    getArea(position: SimpleVector2, size: SimpleVector2): T[];
    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | null;
}
