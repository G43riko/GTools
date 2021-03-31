import { SimpleVector2 } from "gtools/math";
import { GridBlockItemFilter } from "./grid-filters";
import { Grid2Holder } from "./holders-2d/grid2-holder";
export declare class Grid2BlockAccessor<T> {
    private readonly holder;
    private readonly position;
    constructor(holder: Grid2Holder<T>, position: SimpleVector2);
    check(filter: GridBlockItemFilter<T>): boolean;
    getByOffset(x?: number, y?: number): Grid2BlockAccessor<T>;
    get top(): Grid2BlockAccessor<T>;
    get bottom(): Grid2BlockAccessor<T>;
    get left(): Grid2BlockAccessor<T>;
    get right(): Grid2BlockAccessor<T>;
}
