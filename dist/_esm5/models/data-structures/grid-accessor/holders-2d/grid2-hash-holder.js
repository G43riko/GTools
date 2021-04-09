import { hash2Numbers } from "../../../../utils/math-utils";
var Grid2HashHolder = (function () {
    function Grid2HashHolder() {
        this.data = {};
    }
    Object.defineProperty(Grid2HashHolder.prototype, "length", {
        get: function () {
            return Object.keys(this.data).length;
        },
        enumerable: false,
        configurable: true
    });
    Grid2HashHolder.prototype.get = function (x, y) {
        var _a;
        return (_a = this.data[hash2Numbers(x, y)]) === null || _a === void 0 ? void 0 : _a.value;
    };
    Grid2HashHolder.prototype.set = function (x, y, value) {
        this.data[hash2Numbers(x, y)] = { x: x, y: y, value: value };
    };
    Grid2HashHolder.prototype.forEach = function (callback) {
        Object.values(this.data).forEach(function (item) { return (callback(item.value, item.x, item.y)); });
        return true;
    };
    Grid2HashHolder.prototype.getArea = function (position, size) {
        throw new Error("Not implemented");
    };
    Grid2HashHolder.prototype.delete = function (x, y) {
        delete this.data[hash2Numbers(x, y)];
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