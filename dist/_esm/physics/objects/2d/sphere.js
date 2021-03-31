import { Vector2 } from "../../../math";
import { convertPosSizeToMinMax } from "../object-convertors";
export class Sphere {
    constructor(radius, center) {
        this.radius = radius;
        this.center = center;
    }
    get circuit() {
        return 2 * Math.PI * this.radius;
    }
    get momentOfInertia() {
        const r = this.radius;
        return r * r / 2;
    }
    get boundingRadius() {
        return this.radius;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    static fromMinMax({ min, max }, chooseSize = "max") {
        const center = {
            x: (min.x + max.x) / 2,
            y: (min.y + max.y) / 2,
        };
        const sizeX = max.x - min.x;
        const sizeY = max.y - min.y;
        const radius = chooseSize === "min" ? Math.min(sizeX, sizeY) : Math.max(sizeX, sizeY);
        return new Sphere(radius, center);
    }
    static fromPosSize(posSize, chooseSize = "max") {
        return Sphere.fromMinMax(convertPosSizeToMinMax(posSize), chooseSize);
    }
    toMinMax() {
        return {
            min: Vector2.addNum(this.center, -this.radius),
            max: Vector2.addNum(this.center, this.radius),
        };
    }
    raycast(result, ray) {
        const from = ray.from;
        const to = ray.to;
        const r = this.radius;
        const position = new Vector2(this.center.x, this.center.y);
        const a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2);
        const b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y));
        const c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) - Math.pow(r, 2);
        const delta = Math.pow(b, 2) - 4 * a * c;
        const intersectionPoint = new Vector2();
        const normal = new Vector2();
        if (delta < 0) {
            return;
        }
        if (delta === 0) {
            intersectionPoint.set(Vector2.lerp(from, to, delta));
            Vector2.sub(intersectionPoint, position, normal);
            Vector2.normalize(normal, normal);
            ray.reportIntersection(result, delta, normal, -1);
        }
        else {
            const sqrtDelta = Math.sqrt(delta);
            const inv2a = 1 / (2 * a);
            const d1 = (-b - sqrtDelta) * inv2a;
            const d2 = (-b + sqrtDelta) * inv2a;
            if (d1 >= 0 && d1 <= 1) {
                intersectionPoint.set(Vector2.lerp(from, to, d1));
                Vector2.sub(intersectionPoint, position, normal);
                Vector2.normalize(normal, normal);
                ray.reportIntersection(result, d1, normal, -1);
                if (result.shouldStop(ray)) {
                    return;
                }
            }
            if (d2 >= 0 && d2 <= 1) {
                intersectionPoint.set(Vector2.lerp(from, to, d2));
                Vector2.sub(intersectionPoint, position, normal);
                Vector2.normalize(normal, normal);
                ray.reportIntersection(result, d2, normal, -1);
            }
        }
    }
}
//# sourceMappingURL=sphere.js.map