import { SimpleVector2 } from "gtools/math";
import { Grid2BlockFilter, GridBlockItemFilter } from "./grid-filters";
import { Grid2BlockAccessor } from "./grid2-block-accessor";
import { Grid2Block, Grid2Holder } from "./holders-2d/grid2-holder";

export class Grid2Accessor<T> {
    private readonly around4Offsets = [
        {x: +0, y: +1},
        {x: +0, y: -1},
        {x: +1, y: +0},
        {x: -1, y: +0},
    ];
    private readonly around8Offsets = [
        {x: +0, y: +1},
        {x: +0, y: -1},
        {x: +1, y: +0},
        {x: -1, y: +0},
        {x: +1, y: +1},
        {x: +1, y: -1},
        {x: -1, y: +1},
        {x: -1, y: -1},
    ];

    public constructor(
        private readonly holder: Grid2Holder<T>,
    ) {
    }

    public get(position: SimpleVector2): T {
        return this.holder.get(position.x, position.y);
    }

    public getAccessor(position: SimpleVector2): Grid2BlockAccessor<T> {
        return new Grid2BlockAccessor(this.holder, position);
    }
    public getRandomAround(position: SimpleVector2, radius: number, condition: Grid2BlockFilter<T>): Grid2Block<T> | undefined {
        return this.holder.getAroundData(position.x, position.y, radius).sort(Math.random).find(condition);
    }

    public getRandomBlock(filter: GridBlockItemFilter<T>): Grid2Block<T> | null {
        return this.holder.getRandomBlock(filter);
    }

    public checkEveryFromPosAndSize(position: SimpleVector2, size: SimpleVector2, condition: GridBlockItemFilter<T>): boolean {
        return this.holder.getArea(position, size).every(condition);
    }

}
