import { Vector2 } from "../../../math";
import { convertPosSizeToMinMax } from "../object-convertors";
var Rect = (function () {
    function Rect(position, size) {
        this.position = position;
        this.size = size;
    }
    Object.defineProperty(Rect.prototype, "area", {
        get: function () {
            return this.size.x * this.size.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "momentOfInertia", {
        get: function () {
            return (this.size.x * this.size.x + this.size.y * this.size.y) / 12;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "boundingRadius", {
        get: function () {
            return Math.sqrt(this.size.x * this.size.x + this.size.y * this.size.y) / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "circuit", {
        get: function () {
            return this.size.x + this.size.x + this.size.y + this.size.y;
        },
        enumerable: false,
        configurable: true
    });
    Rect.prototype.toMinMax = function () {
        return convertPosSizeToMinMax(this);
    };
    Rect.fromSphere = function (_a) {
        var radius = _a.radius, center = _a.center;
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
    };
    Rect.fromRay = function (_a, realLength) {
        var origin = _a.origin, direction = _a.direction, length = _a.length;
        if (realLength === void 0) { realLength = length; }
        if (realLength === Infinity) {
            throw new Error("Cannot create rectangle from infinite ray");
        }
        var end = {
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
    };
    Rect.fromPoints = function (points, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = offsetX; }
        var range = Vector2.createOutlineRange(points);
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
    };
    Rect.fromMinMax = function (_a) {
        var min = _a.min, max = _a.max;
        var size = {
            x: max.x - min.x,
            y: max.y - min.y,
        };
        return new Rect(Object.assign({}, min), size);
    };
    return Rect;
}());
export { Rect };
//# sourceMappingURL=rect.js.map