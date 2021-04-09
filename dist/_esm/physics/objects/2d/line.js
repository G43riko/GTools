import { Vector2 } from "gtools/math";
export class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    get length() {
        return Vector2.dist(this.pointA, this.pointB);
    }
    angle() {
        return Math.atan2(this.pointB.y - this.pointA.y, this.pointB.x - this.pointA.x);
    }
    get boundingRadius() {
        return this.length / 2;
    }
    static fromPoints(aX, aY, bX, bY) {
        return new Line({
            x: aX,
            y: aY,
        }, {
            x: bX,
            y: bY,
        });
    }
    get momentOfInertia() {
        return Math.pow(this.length, 2) / 12;
    }
    toMinMax() {
        return {
            min: Vector2.min(this.pointA, this.pointB),
            max: Vector2.max(this.pointA, this.pointB),
        };
    }
}
//# sourceMappingURL=line.js.map