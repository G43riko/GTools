import { Grid3Holder } from "./grid3-holder";
export declare class Grid3HashHolder<T> implements Grid3Holder<T> {
    private readonly values;
    get(x: number, y: number, z: number): T;
    set(x: number, y: number, z: number, value: T): void;
    forEach(callback: (value: T, x: number, y: number, z: number) => void): void;
}
