import { Grid2Block, Grid2Holder, GridBlockItemFilter } from "gtools/models";
import { SimpleVector2 } from "../../../../math";
export declare class Grid2StringHolder<T> implements Grid2Holder<T> {
    private readonly data;
    get length(): number;
    get(x: number, y: number): T | undefined;
    set(x: number, y: number, value: T): void;
    forEach(callback: (value: T, x: number, y: number) => void): boolean;
    getArea(position: SimpleVector2, size: SimpleVector2): T[];
    delete(x: number, y: number): void;
    getAroundData(x: number, y: number, size?: number): Grid2Block<T>[];
    getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined;
}
//# sourceMappingURL=grid2-string-holder.d.ts.map