"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AABB = void 0;
var math_1 = require("../../math");
var AABB = (function () {
    function AABB(min, max) {
        this.min = min;
        this.max = max;
    }
    AABB.prototype.rayCast = function (result, ray, maxFraction) {
        if (maxFraction === void 0) { maxFraction = Infinity; }
        var tmin = -Infinity;
        var tmax = Infinity;
        var p = ray.from;
        var d = ray.direction;
        var absD = math_1.Vector2.getAbs(d);
        var normal = math_1.Vector2.ZERO;
        for (var f = "x"; f !== null; f = (f === "x" ? "y" : null)) {
            if (absD.x < Number.EPSILON) {
                if (p[f] < this.min[f] || this.max[f] < p[f]) {
                    return false;
                }
            }
            else {
                var invD = 1 / d[f];
                var t1 = (this.min[f] - p[f]) * invD;
                var t2 = (this.max[f] - p[f]) * invD;
                var s = -1;
                if (t1 > t2) {
                    var temp = t1;
                    t1 = t2;
                    t2 = temp;
                    s = 1;
                }
                if (t1 > tmin) {
                    normal.setData(0, 0);
                    normal[f] = s;
                    tmin = t1;
                }
                tmax = Math.min(tmax, t2);
                if (tmin > tmax) {
                    return false;
                }
            }
        }
        if (tmin < 0 || maxFraction < tmin) {
            return false;
        }
        result.fraction = tmin;
        result.normal.set(normal);
        return true;
    };
    AABB.prototype.expandByScalar = function (distance) {
        this.min.x -= distance;
        this.min.y -= distance;
        this.min.z -= distance;
        this.max.x += distance;
        this.max.y += distance;
        this.max.z += distance;
    };
    AABB.prototype.expandByVector = function (vec) {
        this.min.x -= vec.x;
        this.min.y -= vec.y;
        this.min.z -= vec.z;
        this.max.x += vec.x;
        this.max.y += vec.y;
        this.max.z += vec.z;
    };
    AABB.prototype.expandByPoint = function (point) {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.min.z = Math.min(this.min.z, point.z);
        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        this.max.z = Math.max(this.max.z, point.z);
    };
    AABB.prototype.expandBtAABB = function (other) {
        this.min.x = Math.min(this.min.x, other.min.x);
        this.min.y = Math.min(this.min.y, other.min.y);
        this.min.z = Math.min(this.min.z, other.min.z);
        this.max.x = Math.max(this.max.x, other.max.x);
        this.max.y = Math.max(this.max.y, other.max.y);
        this.max.z = Math.max(this.max.z, other.max.z);
    };
    AABB.prototype.moveByScalar = function (distance) {
        this.min.x += distance;
        this.min.y += distance;
        this.min.z += distance;
        this.max.x += distance;
        this.max.y += distance;
        this.max.z += distance;
    };
    AABB.prototype.getCenter = function () {
        return {
            x: (this.max.x + this.min.x) / 2,
            y: (this.max.y + this.min.y) / 2,
            z: (this.max.z + this.min.z) / 2,
        };
    };
    AABB.prototype.getSize = function () {
        return {
            x: this.max.x - this.min.x,
            y: this.max.y - this.min.y,
            z: this.max.z - this.min.z,
        };
    };
    AABB.prototype.getVolume = function () {
        var size = this.getSize();
        return size.x * size.y * size.z;
    };
    AABB.prototype.moveByVector = function (vec) {
        this.min.x += vec.x;
        this.min.y += vec.y;
        this.min.z += vec.z;
        this.max.x += vec.x;
        this.max.y += vec.y;
        this.max.z += vec.z;
    };
    AABB.prototype.getMinMax = function () {
        return {
            min: this.min,
            max: this.max,
        };
    };
    AABB.fromPosAndSize = function (pos, size) {
        return new AABB({
            x: pos.x,
            y: pos.y,
            z: pos.z,
        }, {
            x: pos.x + size.x,
            y: pos.y + size.y,
            z: pos.z + size.z,
        });
    };
    AABB.prototype.getPosition = function () {
        return {
            x: this.min.x,
            y: this.min.y,
            z: this.min.z,
        };
    };
    AABB.fromCenterAndSize = function (center, size) {
        var halfSize = {
            x: size.x / 2,
            y: size.y / 2,
            z: size.z / 2,
        };
        return new AABB({
            x: center.x + halfSize.x,
            y: center.y + halfSize.y,
            z: center.z + halfSize.z,
        }, {
            x: center.x - halfSize.x,
            y: center.y - halfSize.y,
            z: center.z - halfSize.z,
        });
    };
    AABB.prototype.moveCenterTo = function (center) {
        var offset = {
            x: center.x - (this.max.x + this.min.x) / 2,
            y: center.y - (this.max.y + this.min.y) / 2,
            z: center.z - (this.max.z + this.min.z) / 2,
        };
        this.min.x += offset.x;
        this.min.y += offset.y;
        this.min.z += offset.z;
        this.max.x += offset.x;
        this.max.y += offset.y;
        this.max.z += offset.z;
    };
    return AABB;
}());
exports.AABB = AABB;
//# sourceMappingURL=aabb.js.map