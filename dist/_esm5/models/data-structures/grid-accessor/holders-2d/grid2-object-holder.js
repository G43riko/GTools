import { getOrSetProperty } from "../../../../utils/object-utils";
var Grid2ObjectHolder = (function () {
    function Grid2ObjectHolder() {
        this.data = {};
        this._length = 0;
    }
    Grid2ObjectHolder.prototype.get = function (x, y) {
        var row = getOrSetProperty(this.data, x, {});
        return row[y];
    };
    Grid2ObjectHolder.prototype.remove = function (x, y) {
        var row = getOrSetProperty(this.data, x, {});
        if (row[y]) {
            this._length--;
        }
        delete row[y];
    };
    Grid2ObjectHolder.prototype.forEach = function (callback) {
        Object.entries(this.data).forEach(function (_a) {
            var x = _a[0], chunkRows = _a[1];
            Object.entries(chunkRows).forEach(function (_a) {
                var y = _a[0], chunk = _a[1];
                callback(chunk, +x, +y);
            });
        });
    };
    Grid2ObjectHolder.prototype.set = function (x, y, value) {
        var row = getOrSetProperty(this.data, x, {});
        if (!row[y]) {
            this._length++;
        }
        row[y] = value;
    };
    Grid2ObjectHolder.prototype.getArea = function (position, size) {
        throw new Error("Not implemented");
    };
    Grid2ObjectHolder.prototype.getAroundData = function (x, y, size) {
        throw new Error("Not implemented");
    };
    Grid2ObjectHolder.prototype.getRandomBlock = function (filter) {
        throw new Error("Not implemented");
    };
    return Grid2ObjectHolder;
}());
export { Grid2ObjectHolder };
//# sourceMappingURL=grid2-object-holder.js.map