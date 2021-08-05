import { SimpleVector3 } from "../../../../math";

export interface Grid3Block<T> {
    readonly item: T;
    readonly coordinates: SimpleVector3;
}

export interface Grid3Holder<T> {
    readonly length: number;

    get(x: number, y: number, z: number): T;

    set(x: number, y: number, z: number, value: T): void;

    forEach(callback: (block: T, x: number, y: number, z: number) => void): void;

    clear(): void;

    // getRandomBlock(filter?: GridBlockItemFilter<T>): Grid3Block<T> | null;
    //
    // getBetween(position: SimpleVector3, size: SimpleVector3): T[];
    //
    // forEach(callback: (block: T, x: number, y: number, z: number) => void): void;
}
