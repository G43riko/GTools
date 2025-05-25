import type { SimpleVector2 } from "@g43/types";
import type { GridBlockItemFilter } from "./grid-filters.ts";
import type { Grid2Holder } from "./2d/grid2-holder.ts";

export class Grid2BlockAccessor<T> {
    private readonly holder: Grid2Holder<T>;
    private readonly position: SimpleVector2;
    public constructor(
        holder: Grid2Holder<T>,
        position: SimpleVector2,
    ) {
        this.holder = holder;
        this.position = position;
    }

    public check(filter: GridBlockItemFilter<T>): boolean {
        return filter(this.holder.get(this.position.x, this.position.y) as T);
    }

    public getByOffset(x = 0, y = 0): Grid2BlockAccessor<T> {
        return new Grid2BlockAccessor(this.holder, { x: this.position.x + x, y: this.position.y - y });
    }

    public get top(): Grid2BlockAccessor<T> {
        return this.getByOffset(0, -1);
    }

    public get bottom(): Grid2BlockAccessor<T> {
        return this.getByOffset(0, 1);
    }

    public get left(): Grid2BlockAccessor<T> {
        return this.getByOffset(-1, 0);
    }

    public get right(): Grid2BlockAccessor<T> {
        return this.getByOffset(1, 0);
    }
}
