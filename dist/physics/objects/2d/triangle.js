"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var math_1 = require("gtools/math");
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
            return Math.max(math_1.Vector2.dist(this.pointA, this.pointB), math_1.Vector2.dist(this.pointB, this.pointC), math_1.Vector2.dist(this.pointA, this.pointC)) / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "circuit", {
        get: function () {
            return math_1.Vector2.dist(this.pointA, this.pointB) +
                math_1.Vector2.dist(this.pointB, this.pointC) +
                math_1.Vector2.dist(this.pointA, this.pointC);
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
        return math_1.Vector2.createOutlineRange([this.pointA, this.pointB, this.pointC]);
    };
    return Triangle;
}());
exports.Triangle = Triangle;
//# sourceMappingURL=triangle.js.map