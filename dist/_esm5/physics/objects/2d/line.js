import { Vector2 } from "gtools/math";
var Line = (function () {
    function Line(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    Object.defineProperty(Line.prototype, "length", {
        get: function () {
            return Vector2.dist(this.pointA, this.pointB);
        },
        enumerable: false,
        configurable: true
    });
    Line.prototype.angle = function () {
        return Math.atan2(this.pointB.y - this.pointA.y, this.pointB.x - this.pointA.x);
    };
    Object.defineProperty(Line.prototype, "boundingRadius", {
        get: function () {
            return this.length / 2;
        },
        enumerable: false,
        configurable: true
    });
    Line.fromPoints = function (aX, aY, bX, bY) {
        return new Line({
            x: aX,
            y: aY,
        }, {
            x: bX,
            y: bY,
        });
    };
    Object.defineProperty(Line.prototype, "momentOfInertia", {
        get: function () {
            return Math.pow(this.length, 2) / 12;
        },
        enumerable: false,
        configurable: true
    });
    Line.prototype.toMinMax = function () {
        return {
            min: Vector2.min(this.pointA, this.pointB),
            max: Vector2.max(this.pointA, this.pointB),
        };
    };
    return Line;
}());
export { Line };
//# sourceMappingURL=line.js.map