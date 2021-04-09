import { Vector2 } from "gtools/math";
export class Capsule {
    constructor(start, end, radius) {
        this.start = start;
        this.end = end;
        this.radius = radius;
    }
    get boundingRadius() {
        return this.radius + this.length / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius + this.radius * 2 * this.length;
    }
    get circuit() {
        return 2 * Math.PI * this.radius + 2 * Vector2.dist(this.start, this.end);
    }
    toMinMax() {
        throw new Error("Not implemented");
    }
    get momentOfInertia() {
        const boxI = (w, h) => w * h * (Math.pow(w, 2) + Math.pow(h, 2)) / 12;
        const semiA = (r) => Math.PI * Math.pow(r, 2) / 2;
        const semiI = (r) => ((Math.PI / 4) - (8 / (9 * Math.PI))) * Math.pow(r, 4);
        const semiC = (r) => (4 * r) / (3 * Math.PI);
        const capsuleA = (l, r) => l * 2 * r + Math.PI * Math.pow(r, 2);
        const capsuleI = (l, r) => {
            const d = l / 2 + semiC(r);
            return boxI(l, 2 * r) + 2 * (semiI(r) + semiA(r) * Math.pow(d, 2));
        };
        const length = this.length;
        const area = capsuleA(length, this.radius);
        return (area > 0) ? capsuleI(length, this.radius) / area : 0;
    }
    get length() {
        return Vector2.dist(this.start, this.end);
    }
}
//# sourceMappingURL=capsule.js.map