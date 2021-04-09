import { Vector2 } from "gtools/math";
export class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    get area() {
        return (((this.pointB.x - this.pointA.x) * (this.pointC.y - this.pointA.y)) -
            ((this.pointC.x - this.pointA.x) * (this.pointB.y - this.pointA.y))) * 0.5;
    }
    get boundingRadius() {
        return Math.max(Vector2.dist(this.pointA, this.pointB), Vector2.dist(this.pointB, this.pointC), Vector2.dist(this.pointA, this.pointC)) / 2;
    }
    get circuit() {
        return Vector2.dist(this.pointA, this.pointB) +
            Vector2.dist(this.pointB, this.pointC) +
            Vector2.dist(this.pointA, this.pointC);
    }
    get momentOfInertia() {
        throw new Error("Not implemented");
    }
    toMinMax() {
        return Vector2.createOutlineRange([this.pointA, this.pointB, this.pointC]);
    }
}
//# sourceMappingURL=triangle.js.map