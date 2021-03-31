import { SimpleVector2 } from "../../../../math";
import { Grid2Block, GridBlockItemFilter, Grid2Holder } from "gtools/models";
export declare class Grid2ArrayHolder<T> implements Grid2Holder<T> {
    readonly size: SimpleVector2;
    readonly data: T[];
    constructor(size: SimpleVector2, data: T[]);
    static initEmpty<T>(x: number, y: number, defaultValue?: T): Grid2ArrayHolder<T>;
    get(x: number, y: number): T;
    set(x: number, y: number, value: T): void;
    private getIndex;
    private getCoordinates;
    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];
    getAround(x: number, y: number, size?: number): T[];
    getAroundSQ(x: number, y: number, size?: number): T[];
    getBetween(pointA: SimpleVector2, pointB: SimpleVector2): T[];
    getNearest(x: number, y: number, condition: (item: T) => boolean): Grid2Block<T>[];
    expandConditionally(x: number, y: number, condition: (item: T) => boolean): Grid2Block<T>[];
    private getAround4;
    private getAround4Index;
    getArea(position: SimpleVector2, size: SimpleVector2): T[];
    private getAreaInternally;
    forEach(callback: (item: T, x: number, y: number) => void | boolean): void;
    getRandomBlockOfSize(size: SimpleVector2, filter: GridBlockItemFilter<T>): Grid2Block<T> | null;
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | null;
    getRandomBlock2(filter?: GridBlockItemFilter<T>): Grid2Block<T> | null;
}
