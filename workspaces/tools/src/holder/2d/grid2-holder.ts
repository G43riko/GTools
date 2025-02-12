import type { ReadonlySimpleVector2, SimpleVector2 } from "@g43/types";
import type { ValueProvider } from "@g43/core";
// import { GridBlockItemFilter } from "../grid-filters";

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
     * TODO: this should be renamed to forEachUntil
     *
     * @param callback - function to be executed on each element
     */
    forEach(callback: (block: T, x: number, y: number) => boolean): boolean;

    transform?(x: number, y: number, transformer: (value: T) => T): void;

    fill?(value: ValueProvider<T, [number, number]>): void;

    setHolder?(holder: Grid2Block<T>): void;

    swap?(ax: number, ay: number, bx: number, by: number): void;

    mirrorX?(): void;

    mirrorY?(): void;

    rotateCW?(): void;

    rotateCCW?(): void;

    clear(): void;

    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];

    // getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined;

    getArea(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): T[];
}
