var Path2D = (function () {
    function Path2D(points) {
        this.points = points;
        if (points.length < 2) {
            throw new Error("Cannot create path with less than 2 points");
        }
    }
    Object.defineProperty(Path2D.prototype, "length", {
        get: function () {
            return this.points.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Path2D.prototype, "first", {
        get: function () {
            return this.points[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Path2D.prototype, "last", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Path2D.prototype.getPoint = function (index) {
        return this.points[index];
    };
    return Path2D;
}());
export { Path2D };
//# sourceMappingURL=path-2d.js.map