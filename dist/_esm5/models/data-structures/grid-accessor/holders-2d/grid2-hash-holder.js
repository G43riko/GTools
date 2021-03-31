import { hash2Numbers } from "../../../../utils/math-utils";
var Grid2HashHolder = (function () {
    function Grid2HashHolder() {
        this.data = {};
    }
    Grid2HashHolder.prototype.get = function (x, y) {
        return this.data[hash2Numbers(x, y)].value;
    };
    Grid2HashHolder.prototype.set = function (x, y, value) {
        this.data[hash2Numbers(x, y)] = { x: x, y: y, value: value };
    };
    Grid2HashHolder.prototype.forEach = function (callback) {
        Object.values(this.data).forEach(function (item) { return (callback(item.value, item.x, item.y)); });
    };
    Grid2HashHolder.prototype.getArea = function (position, size) {
        throw new Error("Not implemented");
    };
    Grid2HashHolder.prototype.getAroundData = function (x, y, size) {
        throw new Error("Not implemented");
    };
    Grid2HashHolder.prototype.getRandomBlock = function (filter) {
        throw new Error("Not implemented");
    };
    return Grid2HashHolder;
}());
export { Grid2HashHolder };
//# sourceMappingURL=grid2-hash-holder.js.map