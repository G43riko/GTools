import { SimpleVector2 } from "gtools/math";
import { Grid2BlockFilter, GridBlockItemFilter } from "./grid-filters";
import { Grid2BlockAccessor } from "./grid2-block-accessor";
import { Grid2Block, Grid2Holder } from "./holders-2d/grid2-holder";
export declare class Grid2Accessor<T> {
    private readonly holder;
    private readonly around4Offsets;
    private readonly around8Offsets;
    constructor(holder: Grid2Holder<T>);
    get(position: SimpleVector2): T | undefined;
    getAccessor(position: SimpleVector2): Grid2BlockAccessor<T>;
    getRandomAround(position: SimpleVector2, radius: number, condition: Grid2BlockFilter<T>): Grid2Block<T> | undefined;
    getRandomBlock(filter: GridBlockItemFilter<T>): Grid2Block<T> | undefined;
    checkEveryFromPosAndSize(position: SimpleVector2, size: SimpleVector2, condition: GridBlockItemFilter<T>): boolean;
}
//# sourceMappingURL=grid2-accessor.d.ts.map