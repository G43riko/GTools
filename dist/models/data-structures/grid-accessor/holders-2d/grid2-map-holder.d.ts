import { SimpleVector2 } from "gtools/math";
import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";
export declare class Grid2MapHolder<T> implements Grid2Holder<T> {
    readonly data: T[][];
    readonly length: number;
    constructor(data: T[][]);
    static initEmpty<T>(x: number, y: number, defaultValue?: T): Grid2MapHolder<T>;
    static initWithProvider<T>(x: number, y: number, provider: (x: number, y: number) => T): Grid2MapHolder<T>;
    get(x: number, y: number): T | undefined;
    set(x: number, y: number, value: T): void;
    delete(x: number, y: number): void;
    forEach(callback: (block: T, x: number, y: number) => void): boolean;
    getArea(position: SimpleVector2, size: SimpleVector2): T[];
    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined;
}
//# sourceMappingURL=grid2-map-holder.d.ts.map