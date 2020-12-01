"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
var Path = (function () {
    function Path(points) {
        this.points = points;
        if (points.length < 2) {
            throw new Error("Cannot create path with less than 2 points");
        }
    }
    Object.defineProperty(Path.prototype, "length", {
        get: function () {
            return this.points.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Path.prototype, "first", {
        get: function () {
            return this.points[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Path.prototype, "last", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Path.prototype.getPoint = function (index) {
        return this.points[index];
    };
    return Path;
}());
exports.Path = Path;
//# sourceMappingURL=path.js.map