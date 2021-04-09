import { Grid3Holder } from "./grid3-holder";
export declare class Grid3HashHolder<T> implements Grid3Holder<T> {
    private readonly cacheForIteration;
    private readonly data;
    private values;
    constructor(cacheForIteration?: boolean);
    get(x: number, y: number, z: number): T;
    set(x: number, y: number, z: number, value: T): void;
    delete(x: number, y: number, z: number): void;
    forEach(callback: (value: T, x: number, y: number, z: number) => void): void;
}
//# sourceMappingURL=grid3-hash-holder.d.ts.map