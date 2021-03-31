"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid2MapHolder = void 0;
var Grid2MapHolder = (function () {
    function Grid2MapHolder(data) {
        this.data = data;
    }
    Grid2MapHolder.prototype.get = function (x, y) {
        return this.data[x][y];
    };
    Grid2MapHolder.prototype.set = function (x, y, value) {
        this.data[x][y] = value;
    };
    Grid2MapHolder.prototype.forEach = function (callback) {
        for (var i = 0; i < this.data.length; i++) {
            for (var j = 0; j < this.data[i].length; j++) {
                callback(this.data[i][j], i, j);
            }
        }
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
exports.Grid2MapHolder = Grid2MapHolder;
//# sourceMappingURL=grid2-map-holder.js.map