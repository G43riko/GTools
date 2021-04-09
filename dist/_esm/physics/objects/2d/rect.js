import { Vector2 } from "../../../math";
import { convertPosSizeToMinMax } from "../object-convertors";
export class Rect {
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    get area() {
        return this.size.x * this.size.y;
    }
    get momentOfInertia() {
        return (this.size.x * this.size.x + this.size.y * this.size.y) / 12;
    }
    get boundingRadius() {
        return Math.sqrt(this.size.x * this.size.x + this.size.y * this.size.y) / 2;
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
    static fromRay({ origin, direction, length }, realLength = length) {
        if (realLength === Infinity) {
            throw new Error("Cannot create rectangle from infinite ray");
        }
        const end = {
            x: origin.x + direction.x * realLength,
            y: origin.y + direction.y * realLength,
        };
        return Rect.fromMinMax({
            min: {
                x: Math.min(end.x, origin.x),
                y: Math.min(end.y, origin.y),
            },
            max: {
                x: Math.max(end.x, origin.x),
                y: Math.max(end.y, origin.y),
            },
        });
    }
    static fromPoints(points, offsetX = 0, offsetY = offsetX) {
        const range = Vector2.createOutlineRange(points);
        if (!offsetX && !offsetY) {
            return Rect.fromMinMax(range);
        }
        return Rect.fromMinMax({
            min: {
                x: range.min.x - offsetX,
                y: range.min.y - offsetY,
            },
            max: {
                x: range.max.x + offsetX,
                y: range.max.y + offsetY,
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