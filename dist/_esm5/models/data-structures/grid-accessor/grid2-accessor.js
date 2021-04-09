import { Grid2BlockAccessor } from "./grid2-block-accessor";
var Grid2Accessor = (function () {
    function Grid2Accessor(holder) {
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
    Grid2Accessor.prototype.get = function (position) {
        return this.holder.get(position.x, position.y);
    };
    Grid2Accessor.prototype.getAccessor = function (position) {
        return new Grid2BlockAccessor(this.holder, position);
    };
    Grid2Accessor.prototype.getRandomAround = function (position, radius, condition) {
        return this.holder.getAroundData(position.x, position.y, radius).sort(Math.random).find(condition);
    };
    Grid2Accessor.prototype.getRandomBlock = function (filter) {
        return this.holder.getRandomBlock(filter);
    };
    Grid2Accessor.prototype.checkEveryFromPosAndSize = function (position, size, condition) {
        return this.holder.getArea(position, size).every(condition);
    };
    return Grid2Accessor;
}());
export { Grid2Accessor };
//# sourceMappingURL=grid2-accessor.js.map