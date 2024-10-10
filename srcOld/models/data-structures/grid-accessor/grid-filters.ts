import { Grid2BlockAccessor } from "./grid2-block-accessor";
import { Grid2Block } from "./holders-2d/grid2-holder";
import { Grid3Block } from "./holders-3d/grid3-holder";

export type GridBlockItemFilter<T> = (item: T) => boolean;
export type Grid2BlockFilter<T> = (item: Grid2Block<T>) => boolean;
export type Grid2AccessorFilter<T> = (item: Grid2BlockAccessor<T>) => boolean;
export type Grid3BlockFilter<T> = (item: Grid3Block<T>) => boolean;
// export type Grid3AccessorFilter<T> = (item: Grid3BlockAccessor<T>) => boolean;
