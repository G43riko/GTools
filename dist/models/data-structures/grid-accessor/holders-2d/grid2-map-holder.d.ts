import { SimpleVector2 } from "gtools/math";
import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";
export declare class Grid2MapHolder<T> implements Grid2Holder<T> {
    readonly data: T[][];
    constructor(data: T[][]);
    get(x: number, y: number): T;
    set(x: number, y: number, value: T): void;
    forEach(callback: (block: T, x: number, y: number) => void): void;
    getArea(position: SimpleVector2, size: SimpleVector2): T[];
    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | null;
}
//# sourceMappingURL=grid2-map-holder.d.ts.map