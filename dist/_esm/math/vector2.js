import { Range } from "gtools/models";
export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static get ZERO() {
        return new Vector2(0, 0);
    }
    static get UP() {
        return new Vector2(0, 1);
    }
    static get LEFT() {
        return new Vector2(-1, 0);
    }
    static get BOTTOM() {
        return new Vector2(0, -1);
    }
    static get RIGHT() {
        return new Vector2(1, 0);
    }
    static get ONE() {
        return new Vector2(1, 1);
    }
    get avg() {
        return this.sum / 2;
    }
    get sum() {
        return this.x + this.y;
    }
    static fromArray(val) {
        return new Vector2(val[0], val[1]);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    static equals(vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y;
    }
    static sub(vecA, vecB) {
        return new Vector2(vecA.x - vecB.x, vecA.y - vecB.y);
    }
    static from(valA, valB = valA) {
        return new Vector2(valA, valB);
    }
    static isVisible(obsX, obsY, angle, cutOff, px, py) {
        return angle - Math.atan2(py - obsY, px - obsX) <= cutOff;
    }
    static createOutlineRange(points) {
        const min = {
            x: Infinity,
            y: Infinity,
        };
        const max = {
            x: -Infinity,
            y: -Infinity,
        };
        points.forEach((p) => {
            if (p.x < min.x) {
                min.x = p.x;
            }
            if (p.y < min.y) {
                min.y = p.y;
            }
            if (p.x > max.x) {
                max.x = p.x;
            }
            if (p.y > max.y) {
                max.y = p.y;
            }
        });
        return new Range(min, max);
    }
    static angleBetweenPoints(obsX, obsY, px1, py1, px2, py2) {
        return Math.atan2(py1 - obsY, px1 - obsX) - Math.atan2(py2 - obsY, px2 - obsX);
    }
    static isVector(item) {
        return item && !isNaN(item.x) && !isNaN(item.y);
    }
    static sum(vecA, vecB) {
        return new Vector2(vecA.x + vecB.x, vecA.y + vecB.y);
    }
    static min(vecA, vecB) {
        return new Vector2(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y));
    }
    static max(vecA, vecB) {
        return new Vector2(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y));
    }
    static dist(vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2));
    }
    isZero() {
        return this.x === 0 && this.y === 0;
    }
    getNormalized() {
        return this.clone().normalize();
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    normalize() {
        const length = this.length;
        this.x /= length;
        this.y /= length;
        return this;
    }
    static mulNum(vecA, val) {
        return new Vector2(vecA.x * val, vecA.y * val);
    }
    mul(value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
        }
        return this;
    }
    add(value) {
        if (typeof value === "number") {
            this.x += value;
            this.y += value;
        }
        else {
            this.x += value.x;
            this.y += value.y;
        }
        return this;
    }
    sub(value) {
        if (typeof value === "number") {
            this.x -= value;
            this.y -= value;
        }
        else {
            this.x -= value.x;
            this.y -= value.y;
        }
        return this;
    }
    div(value) {
        if (typeof value === "number") {
            this.x /= value;
            this.y /= value;
        }
        else {
            this.x /= value.x;
            this.y /= value.y;
        }
        return this;
    }
    setData(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    set(vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }
}
//# sourceMappingURL=vector2.js.map