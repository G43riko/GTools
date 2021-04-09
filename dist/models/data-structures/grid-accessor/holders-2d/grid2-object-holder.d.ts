import { SimpleVector2 } from "gtools/math";
import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";
export declare class Grid2ObjectHolder<T> implements Grid2Holder<T> {
    private readonly data;
    private _length;
    get(x: number, y: number): T;
    remove(x: number, y: number): void;
    forEach(callback: (item: T, x: number, y: number) => void): boolean;
    set(x: number, y: number, value: T): void;
    getArea(position: SimpleVector2, size: SimpleVector2): T[];
    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined;
}
//# sourceMappingURL=grid2-object-holder.d.ts.map