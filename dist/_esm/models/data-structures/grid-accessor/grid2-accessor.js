import { Grid2BlockAccessor } from "./grid2-block-accessor";
export class Grid2Accessor {
    constructor(holder) {
        this.holder = holder;
        this.around4Offsets = [
            { x: +0, y: +1 },
            { x: +0, y: -1 },
            { x: +1, y: +0 },
            { x: -1, y: +0 },
        ];
        this.around8Offsets = [
            { x: +0, y: +1 },
            { x: +0, y: -1 },
            { x: +1, y: +0 },
            { x: -1, y: +0 },
            { x: +1, y: +1 },
            { x: +1, y: -1 },
            { x: -1, y: +1 },
            { x: -1, y: -1 },
        ];
    }
    get(position) {
        return this.holder.get(position.x, position.y);
    }
    getAccessor(position) {
        return new Grid2BlockAccessor(this.holder, position);
    }
    getRandomAround(position, radius, condition) {
        return this.holder.getAroundData(position.x, position.y, radius).sort(Math.random).find(condition);
    }
    getRandomBlock(filter) {
        return this.holder.getRandomBlock(filter);
    }
    checkEveryFromPosAndSize(position, size, condition) {
        return this.holder.getArea(position, size).every(condition);
    }
}
//# sourceMappingURL=grid2-accessor.js.map