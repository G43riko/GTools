import { convertPosSizeToMinMax } from "../object-convertors";
export class Sphere {
    constructor(radius, center) {
        this.radius = radius;
        this.center = center;
    }
    get circuit() {
        return 2 * Math.PI * this.radius;
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
}
//# sourceMappingURL=sphere.js.map