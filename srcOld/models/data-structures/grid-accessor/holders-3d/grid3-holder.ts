import { SimpleVector3 } from "../../../../math";

export interface Grid3Block<T> {
    readonly item: T;
    readonly coordinates: SimpleVector3;
}

export interface Grid3Holder<T> {
    readonly length: number;

    get(x: number, y: number, z: number): T;

    set(x: number, y: number, z: number, value: T): void;

    transform(x: number, y: number, z: number, transformer: (value: T) => T): void;

    swap(ax: number, ay: number, az: number, bx: number, by: number, bz: number): void;

    mirror?(orientation: "XY" | "XZ" | "YZ"): void;

    rotateCW?(): void;

    rotateCCW?(): void;

    /**
     * Fill all holder with value or with result of callback value
     *
     * @param value - value or function returning value
     */
    fill<R extends T & Record<string | number, unknown>>(value: R | ((x: number, y: number, z: number) => R)): void;

    /**
     * Iterate over all elements. If callback returns false, iteration will breaks and function returns false.
     * If any callback call returns false, function returns false otherwise function returns true
     *
     * @param callback - function to be executed on each element
     */
    forEachUntil?(callback: (block: T, x: number, y: number, z: number) => unknown): boolean;

    /**
     * @deprecated use either {@link forEachUntil} or {@link forEach}
     * @param callback - function to be executed on each element
     */
    forEach(callback: (block: T, x: number, y: number, z: number) => unknown): boolean;

    // forEach(callback: (block: T, x: number, y: number, z: number) => void): void;

    setHolder(holder: Grid3Holder<T>): void;

    clear(): void;

    // getRandomBlock(filter?: GridBlockItemFilter<T>): Grid3Block<T> | null;
    //
    // getBetween(position: SimpleVector3, size: SimpleVector3): T[];
}
