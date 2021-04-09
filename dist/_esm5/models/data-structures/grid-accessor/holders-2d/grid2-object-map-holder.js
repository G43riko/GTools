var Grid2ObjectMapHolder = (function () {
    function Grid2ObjectMapHolder() {
        this.chunks = new Map();
    }
    Object.defineProperty(Grid2ObjectMapHolder.prototype, "length", {
        get: function () {
            var length = 0;
            this.chunks.forEach(function (value) { return length += value.size; });
            return length;
        },
        enumerable: false,
        configurable: true
    });
    Grid2ObjectMapHolder.prototype.get = function (x, y) {
        var _a;
        return (_a = this.chunks.get(x)) === null || _a === void 0 ? void 0 : _a.get(y);
    };
    Grid2ObjectMapHolder.prototype.remove = function (x, y) {
        var _a, _b;
        return (_b = (_a = this.chunks.get(x)) === null || _a === void 0 ? void 0 : _a.delete(y)) !== null && _b !== void 0 ? _b : false;
    };
    Grid2ObjectMapHolder.prototype.forEach = function (callback) {
        this.chunks.forEach(function (row, x) { return row.forEach(function (item, y) { return callback(item, x, y); }); });
        return true;
    };
    Grid2ObjectMapHolder.prototype.set = function (x, y, value) {
        var row = this.chunks.get(x);
        if (row) {
            row.set(y, value);
        }
        else {
            this.chunks.set(x, new Map([[y, value]]));
        }
    };
    Grid2ObjectMapHolder.prototype.getArea = function (position, size) {
        return [];
    };
    Grid2ObjectMapHolder.prototype.getAroundData = function (x, y, size) {
        return [];
    };
    Grid2ObjectMapHolder.prototype.getRandomBlock = function (filter) {
        return;
    };
    return Grid2ObjectMapHolder;
}());
export { Grid2ObjectMapHolder };
//# sourceMappingURL=grid2-object-map-holder.js.map