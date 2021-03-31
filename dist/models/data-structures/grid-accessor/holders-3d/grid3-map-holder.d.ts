import { SimpleVector3 } from "gtools/math";
import { GridBlockItemFilter } from "gtools/models";
import { Grid3Block, Grid3Holder } from "./grid3-holder";
export declare class Grid3MapHolder<T> implements Grid3Holder<T> {
    readonly data: T[][][];
    constructor(data: T[][][]);
    static initEmpty<T>(x: number, y: number, z: number, defaultValue?: T): Grid3MapHolder<T>;
    get(x: number, y: number, z: number): T;
    set(x: number, y: number, z: number, value: T): void;
    getBetween(pointA: SimpleVector3, pointB: SimpleVector3): T[];
    getArea(position: SimpleVector3, size: SimpleVector3): T[];
    setData(data: T[][][]): void;
    private getAreaInternally;
    forEach(callback: (block: T, x: number, y: number, z: number) => void): void;
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid3Block<T> | null;
}
//# sourceMappingURL=grid3-map-holder.d.ts.map