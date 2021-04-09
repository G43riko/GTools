var Grid2MapHolder = (function () {
    function Grid2MapHolder(data) {
        this.data = data;
        this.length = this.data.length * this.data[0].length;
    }
    Grid2MapHolder.initEmpty = function (x, y, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var result = new Array(x);
        for (var i = 0; i < x; i++) {
            result[i] = new Array(y);
            for (var j = 0; j < y; j++) {
                result[i][j] = defaultValue;
            }
        }
        return new Grid2MapHolder(result);
    };
    Grid2MapHolder.initWithProvider = function (x, y, provider) {
        var result = new Array(x);
        for (var i = 0; i < x; i++) {
            result[i] = new Array(y);
            for (var j = 0; j < y; j++) {
                result[i][j] = provider(x, y);
            }
        }
        return new Grid2MapHolder(result);
    };
    Grid2MapHolder.prototype.get = function (x, y) {
        return this.data[x][y];
    };
    Grid2MapHolder.prototype.set = function (x, y, value) {
        this.data[x][y] = value;
    };
    Grid2MapHolder.prototype.delete = function (x, y) {
        this.data[x][y] = undefined;
    };
    Grid2MapHolder.prototype.forEach = function (callback) {
        for (var i = 0; i < this.data.length; i++) {
            for (var j = 0; j < this.data[i].length; j++) {
                callback(this.data[i][j], i, j);
            }
        }
        return true;
    };
    Grid2MapHolder.prototype.getArea = function (position, size) {
        throw new Error("Not implemented");
    };
    Grid2MapHolder.prototype.getAroundData = function (x, y, size) {
        throw new Error("Not implemented");
    };
    Grid2MapHolder.prototype.getRandomBlock = function (filter) {
        throw new Error("Not implemented");
    };
    return Grid2MapHolder;
}());
export { Grid2MapHolder };
//# sourceMappingURL=grid2-map-holder.js.map