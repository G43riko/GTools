import { SimpleVector3 } from "gtools/math";
import { Grid3Holder } from "./grid3-holder";
export declare function getIndex(x: number, y: number, z: number, width: number, height?: number): number;
export declare function getCoordinates(index: number, width: number, height?: number): SimpleVector3;
/**
 * https://github.com/cuberite/cuberite/blob/master/src/ChunkDef.h
 */
export declare class Grid3ArrayHolder<T> implements Grid3Holder<T> {
    private readonly size;
    private readonly data;
    constructor(size: SimpleVector3, data: T[]);
    private getIndex;
    private getCoordinates;
    static initEmpty<T>(x: number, y: number, z: number, defaultValue?: T): Grid3ArrayHolder<T>;
    get(x: number, y: number, z: number): T;
    set(x: number, y: number, z: number, value: T): void;
    forEach(callback: (item: T, x: number, y: number, z: number) => void | boolean): void;
}
//# sourceMappingURL=grid3-array-holder.d.ts.map