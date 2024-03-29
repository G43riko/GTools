import { SimpleVector2 } from "../../../../math";
import { GridBlockItemFilter } from "../grid-filters";

export interface Grid2Block<T> {
    readonly item: T;
    readonly coordinates: SimpleVector2;
}

export interface Grid2Holder<T> {
    readonly length: number;

    get(x: number, y: number): T | undefined;

    set(x: number, y: number, value: T): void;

    /**
     * Iterate over all elements. If callback returns false, iteration will breaks and function returns false.
     * If any callback call returns false, function returns false otherwise function returns true
     *
     * @param callback - function to be executed on each element
     */
    forEach(callback: (block: T, x: number, y: number) => boolean): boolean;

    transform?(x: number, y: number, transformer: (value: T) => T): void;

    fill?<R extends T & Record<string | number, unknown>>(value: R | ((x: number, y: number) => R)): void;

    setHolder?(holder: Grid2Block<T>): void;
    swap?(ax: number, ay: number, bx: number, by: number): void;

    mirrorX?(): void;

    mirrorY?(): void;

    rotateCW?(): void;

    rotateCCW?(): void;

    clear(): void;

    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];

    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined;

    getArea(position: SimpleVector2, size: SimpleVector2): T[];
}
