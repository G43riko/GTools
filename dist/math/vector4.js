"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector4 = void 0;
var Vector4 = (function () {
    function Vector4(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Object.defineProperty(Vector4, "ZERO", {
        get: function () {
            return new Vector4(0, 0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4, "ONE", {
        get: function () {
            return new Vector4(1, 1, 1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Vector4.fromArray = function (val) {
        return new Vector4(val[0], val[1], val[2], val[3]);
    };
    Vector4.from = function (valA, valB, valC, valD) {
        if (valB === void 0) { valB = valA; }
        if (valC === void 0) { valC = valB; }
        if (valD === void 0) { valD = valC; }
        return new Vector4(valA, valB, valC, valB);
    };
    Object.defineProperty(Vector4.prototype, "avg", {
        get: function () {
            return (this.x + this.y + this.z + this.w) / 4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        },
        enumerable: false,
        configurable: true
    });
    Vector4.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z && vecA.w === vecB.w;
    };
    Vector4.min = function (vecA, vecB) {
        return new Vector4(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y), Math.min(vecA.z, vecB.z), Math.min(vecA.w, vecB.w));
    };
    Vector4.max = function (vecA, vecB) {
        return new Vector4(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y), Math.max(vecA.z, vecB.z), Math.max(vecA.w, vecB.w));
    };
    Vector4.dist = function (vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) +
            Math.pow(vecA.y - vecB.y, 2) +
            Math.pow(vecA.z - vecB.z, 2) +
            Math.pow(vecA.w - vecB.w, 2));
    };
    Vector4.normalize = function (vec) {
        var length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z + vec.w * vec.w);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;
        vec.w /= length;
        return vec;
    };
    Vector4.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z) && !isNaN(item.w);
    };
    Vector4.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    Vector4.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Vector4.prototype.clone = function () {
        return new Vector4(this.x, this.y, this.z, this.w);
    };
    Vector4.prototype.normalize = function () {
        var length = this.length;
        this.x /= length;
        this.y /= length;
        this.z /= length;
        this.w /= length;
        return this;
    };
    Vector4.prototype.mul = function (value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
            this.z *= value;
            this.w *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
            this.z *= value.z;
            this.w *= value.w;
        }
        return this;
    };
    Vector4.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        this.w += vec.w;
        return this;
    };
    Vector4.prototype.sub = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        this.w -= vec.w;
        return this;
    };
    Vector4.prototype.setData = function (x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    };
    Vector4.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        this.w = vec.w;
        return this;
    };
    return Vector4;
}());
exports.Vector4 = Vector4;
//# sourceMappingURL=vector4.js.map