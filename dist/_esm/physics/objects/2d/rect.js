import { convertPosSizeToMinMax } from "../object-convertors";
export class Rect {
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    get area() {
        return this.size.x * this.size.y;
    }
    get circuit() {
        return this.size.x + this.size.x + this.size.y + this.size.y;
    }
    toMinMax() {
        return convertPosSizeToMinMax(this);
    }
    static fromSphere({ radius, center }) {
        return Rect.fromMinMax({
            min: {
                x: center.x - radius,
                y: center.y - radius,
            },
            max: {
                x: center.x + radius,
                y: center.y + radius,
            },
        });
    }
    static fromMinMax({ min, max }) {
        const size = {
            x: max.x - min.x,
            y: max.y - min.y,
        };
        return new Rect(Object.assign({}, min), size);
    }
}
//# sourceMappingURL=rect.js.map