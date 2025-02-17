import type { Grid2BlockAccessor } from "./grid2-block-accessor.ts";
import type { Grid2Block } from "./2d/grid2-holder.ts";

export type GridBlockItemFilter<T> = (item: T) => boolean;
export type Grid2BlockFilter<T> = (item: Grid2Block<T>) => boolean;
export type Grid2AccessorFilter<T> = (item: Grid2BlockAccessor<T>) => boolean;
// export type Grid3BlockFilter<T> = (item: Grid3Block<T>) => boolean;
// export type Grid3AccessorFilter<A> = (item: Grid3BlockAccessor<A>) => boolean;
