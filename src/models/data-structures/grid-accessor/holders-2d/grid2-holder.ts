import { SimpleVector2 } from "gtools/math";
import { GridBlockItemFilter } from "../grid-filters";

export interface Grid2Block<T> {
    readonly item: T;
    readonly coordinates: SimpleVector2;
}

export interface Grid2Holder<T> {
    get(x: number, y: number): T;

    set(x: number, y: number, value: T): void;

    forEach(callback: (block: T, x: number, y: number) => void): void;

    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];

    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | null;

    getArea(position: SimpleVector2, size: SimpleVector2): T[];
}
