var Grid2StringHolder = (function () {
    function Grid2StringHolder() {
        this.data = {};
    }
    Object.defineProperty(Grid2StringHolder.prototype, "length", {
        get: function () {
            return Object.keys(this.data).length;
        },
        enumerable: false,
        configurable: true
    });
    Grid2StringHolder.prototype.get = function (x, y) {
        return this.data[x + "_" + y].value;
    };
    Grid2StringHolder.prototype.set = function (x, y, value) {
        this.data[x + "_" + y] = { x: x, y: y, value: value };
    };
    Grid2StringHolder.prototype.forEach = function (callback) {
        Object.values(this.data).forEach(function (item) { return (callback(item.value, item.x, item.y)); });
        return true;
    };
    Grid2StringHolder.prototype.getArea = function (position, size) {
        throw new Error("Not implemented");
    };
    Grid2StringHolder.prototype.delete = function (x, y) {
        delete this.data[x + "_" + y];
    };
    Grid2StringHolder.prototype.getAroundData = function (x, y, size) {
        throw new Error("Not implemented");
    };
    Grid2StringHolder.prototype.getRandomBlock = function (filter) {
        throw new Error("Not implemented");
    };
    return Grid2StringHolder;
}());
export { Grid2StringHolder };
//# sourceMappingURL=grid2-string-holder.js.map