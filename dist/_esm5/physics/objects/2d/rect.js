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