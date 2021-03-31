import { Vector2 } from "gtools/math";
var Triangle = (function () {
    function Triangle(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    Object.defineProperty(Triangle.prototype, "area", {
        get: function () {
            return (((this.pointB.x - this.pointA.x) * (this.pointC.y - this.pointA.y)) -
                ((this.pointC.x - this.pointA.x) * (this.pointB.y - this.pointA.y))) * 0.5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "boundingRadius", {
        get: function () {
            return Math.max(Vector2.dist(this.pointA, this.pointB), Vector2.dist(this.pointB, this.pointC), Vector2.dist(this.pointA, this.pointC)) / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "circuit", {
        get: function () {
            return Vector2.dist(this.pointA, this.pointB) +
                Vector2.dist(this.pointB, this.pointC) +
                Vector2.dist(this.pointA, this.pointC);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "momentOfInertia", {
        get: function () {
            throw new Error("Not implemented");
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.toMinMax = function () {
        return Vector2.createOutlineRange([this.pointA, this.pointB, this.pointC]);
    };
    return Triangle;
}());
export { Triangle };
//# sourceMappingURL=triangle.js.map