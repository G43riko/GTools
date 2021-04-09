import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";
import { SimpleVector2 } from "../../../../math";
export declare class Grid2ArrayHolder<T> implements Grid2Holder<T> {
    readonly size: SimpleVector2;
    readonly data: T[];
    constructor(size: SimpleVector2, data: T[]);
    get length(): number;
    static initEmpty<T>(x: number, y: number, defaultValue?: T): Grid2ArrayHolder<T>;
    static initWithProvider<T>(x: number, y: number, provider: (x: number, y: number) => T): Grid2ArrayHolder<T>;
    setData(data: T[]): void;
    get(x: number, y: number): T;
    set(x: number, y: number, value: T): void;
    delete(x: number, y: number): void;
    private getIndex;
    private getCoordinates;
    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];
    getAround(x: number, y: number, size?: number): T[];
    getAroundSQ(x: number, y: number, size?: number): T[];
    getBetween(pointA: SimpleVector2, pointB: SimpleVector2): T[];
    /**
     * TODO: add limit
     */
    getNearest(x: number, y: number, condition: (item: T) => boolean): Grid2Block<T>[];
    expandConditionally(x: number, y: number, condition: (item: T) => boolean): Grid2Block<T>[];
    private getAround4;
    private getAround4Index;
    getArea(position: SimpleVector2, size: SimpleVector2): T[];
    private getAreaInternally;
    forEach(callback: (item: T, x: number, y: number) => void | boolean): boolean;
    getRandomBlockOfSize(size: SimpleVector2, filter: GridBlockItemFilter<T>): Grid2Block<T> | null;
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined;
    getRandomBlock2(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined;
}
//# sourceMappingURL=grid2-array-holder.d.ts.map