"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
var vector2_1 = require("./vector2");
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Vector3, "UP", {
        get: function () {
            return new Vector3(0, 1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "ZERO", {
        get: function () {
            return new Vector3(0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "ONE", {
        get: function () {
            return new Vector3(1, 1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "avg", {
        get: function () {
            return (this.x + this.y + this.z) / 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        enumerable: false,
        configurable: true
    });
    Vector3.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
    };
    Vector3.sub = function (vecA, vecB) {
        return new Vector3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z);
    };
    Vector3.add = function (vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    };
    Vector3.sum = function (vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    };
    Vector3.mulNum = function (vecA, val) {
        return new Vector3(vecA.x * val, vecA.y * val, vecA.z * val);
    };
    Vector3.mul = function (vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    };
    Vector3.min = function (vecA, vecB) {
        return new Vector3(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y), Math.min(vecA.z, vecB.z));
    };
    Vector3.createFromSphericalCoords = function (radius, phi, theta) {
        var sinPhiRadius = Math.sin(phi) * radius;
        var x = sinPhiRadius * Math.sin(theta);
        var y = Math.cos(phi) * radius;
        var z = sinPhiRadius * Math.cos(theta);
        return new Vector3(x, y, z);
    };
    Vector3.max = function (vecA, vecB) {
        return new Vector3(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y), Math.max(vecA.z, vecB.z));
    };
    Vector3.dist = function (vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2) + Math.pow(vecA.z - vecB.z, 2));
    };
    Vector3.normalize = function (vec) {
        var length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;
        return vec;
    };
    Vector3.fromArray = function (value) {
        return new Vector3(value[0], value[1], value[2]);
    };
    Vector3.from = function (valA, valB, valC) {
        if (valB === void 0) { valB = valA; }
        if (valC === void 0) { valC = valA; }
        return new Vector3(valA, valB, valC);
    };
    Vector3.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z);
    };
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    Vector3.prototype.sum = function () {
        return this.x + this.y + this.z;
    };
    Vector3.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Vector3.prototype.clone = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    Vector3.prototype.normalize = function () {
        var length = this.length;
        this.x /= length;
        this.y /= length;
        this.z /= length;
        return this;
    };
    Vector3.prototype.mul = function (value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
            this.z *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
            this.z *= value.z;
        }
        return this;
    };
    Vector3.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    };
    Vector3.prototype.cross = function (v) {
        var localX = this.y * v.z - this.z * v.y;
        var localY = this.z * v.x - this.x * v.z;
        var localZ = this.x * v.y - this.y * v.x;
        return new Vector3(localX, localY, localZ);
    };
    Vector3.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    Vector3.prototype.sub = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    };
    Vector3.prototype.setData = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    };
    Vector3.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
    };
    Object.defineProperty(Vector3.prototype, "xy", {
        get: function () {
            return new vector2_1.Vector2(this.x, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "yx", {
        get: function () {
            return new vector2_1.Vector2(this.y, this.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "yz", {
        get: function () {
            return new vector2_1.Vector2(this.y, this.z);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "zy", {
        get: function () {
            return new vector2_1.Vector2(this.z, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "xz", {
        get: function () {
            return new vector2_1.Vector2(this.x, this.z);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "zx", {
        get: function () {
            return new vector2_1.Vector2(this.z, this.x);
        },
        enumerable: false,
        configurable: true
    });
    return Vector3;
}());
exports.Vector3 = Vector3;
