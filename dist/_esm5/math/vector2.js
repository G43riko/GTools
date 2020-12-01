import { Range } from "../models";
var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Vector2, "ZERO", {
        get: function () {
            return new Vector2(0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "UP", {
        get: function () {
            return new Vector2(0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "LEFT", {
        get: function () {
            return new Vector2(-1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "BOTTOM", {
        get: function () {
            return new Vector2(0, -1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "RIGHT", {
        get: function () {
            return new Vector2(1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "ONE", {
        get: function () {
            return new Vector2(1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "avg", {
        get: function () {
            return this.sum / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "sum", {
        get: function () {
            return this.x + this.y;
        },
        enumerable: false,
        configurable: true
    });
    Vector2.fromArray = function (val) {
        return new Vector2(val[0], val[1]);
    };
    Object.defineProperty(Vector2.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: false,
        configurable: true
    });
    Vector2.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y;
    };
    Vector2.sub = function (vecA, vecB) {
        return new Vector2(vecA.x - vecB.x, vecA.y - vecB.y);
    };
    Vector2.from = function (valA, valB) {
        if (valB === void 0) { valB = valA; }
        return new Vector2(valA, valB);
    };
    Vector2.isVisible = function (obsX, obsY, angle, cutOff, px, py) {
        return angle - Math.atan2(py - obsY, px - obsX) <= cutOff;
    };
    Vector2.createOutlineRange = function (points) {
        var min = {
            x: Infinity,
            y: Infinity,
        };
        var max = {
            x: -Infinity,
            y: -Infinity,
        };
        points.forEach(function (p) {
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
    };
    Vector2.angleBetweenPoints = function (obsX, obsY, px1, py1, px2, py2) {
        return Math.atan2(py1 - obsY, px1 - obsX) - Math.atan2(py2 - obsY, px2 - obsX);
    };
    Vector2.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y);
    };
    Vector2.sum = function (vecA, vecB) {
        return new Vector2(vecA.x + vecB.x, vecA.y + vecB.y);
    };
    Vector2.min = function (vecA, vecB) {
        return new Vector2(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y));
    };
    Vector2.max = function (vecA, vecB) {
        return new Vector2(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y));
    };
    Vector2.dist = function (vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2));
    };
    Vector2.prototype.isZero = function () {
        return this.x === 0 && this.y === 0;
    };
    Vector2.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.normalize = function () {
        var length = this.length;
        this.x /= length;
        this.y /= length;
        return this;
    };
    Vector2.mulNum = function (vecA, val) {
        return new Vector2(vecA.x * val, vecA.y * val);
    };
    Vector2.prototype.mul = function (value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
        }
        return this;
    };
    Vector2.prototype.add = function (value) {
        if (typeof value === "number") {
            this.x += value;
            this.y += value;
        }
        else {
            this.x += value.x;
            this.y += value.y;
        }
        return this;
    };
    Vector2.prototype.sub = function (value) {
        if (typeof value === "number") {
            this.x -= value;
            this.y -= value;
        }
        else {
            this.x -= value.x;
            this.y -= value.y;
        }
        return this;
    };
    Vector2.prototype.div = function (value) {
        if (typeof value === "number") {
            this.x /= value;
            this.y /= value;
        }
        else {
            this.x /= value.x;
            this.y /= value.y;
        }
        return this;
    };
    Vector2.prototype.setData = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    };
    return Vector2;
}());
export { Vector2 };
//# sourceMappingURL=vector2.js.map