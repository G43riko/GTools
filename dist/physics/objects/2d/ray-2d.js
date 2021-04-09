"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RayCast = exports.RaycastResult = exports.RayMode = exports.Ray2D = void 0;
var math_1 = require("../../../math");
var Ray2D = (function () {
    function Ray2D(origin, direction, length) {
        if (length === void 0) { length = Infinity; }
        this.origin = origin;
        this.direction = direction;
        this.length = length;
    }
    Object.defineProperty(Ray2D.prototype, "end", {
        get: function () {
            return math_1.Vector2.from(this.direction.x, this.direction.y).mul(this.length).add(this.origin);
        },
        enumerable: false,
        configurable: true
    });
    Ray2D.fromLine = function (start, end) {
        var direction = math_1.Vector2.sub(end, start);
        var length = direction.length;
        return new Ray2D(start, math_1.Vector2.normalize(direction), length);
    };
    return Ray2D;
}());
exports.Ray2D = Ray2D;
var RayMode;
(function (RayMode) {
    RayMode["ANY"] = "ANY";
    RayMode["CLOSEST"] = "CLOSEST";
    RayMode["ALL"] = "ALL";
})(RayMode = exports.RayMode || (exports.RayMode = {}));
var RaycastResult = (function () {
    function RaycastResult() {
        this.normal = new math_1.Vector2();
        this.faceIndex = -1;
        this.fraction = -1;
        this.isStopped = false;
    }
    RaycastResult.prototype.reset = function () {
        this.normal.setData(0, 0);
        this.shape = null;
        this.body = null;
        this.faceIndex = -1;
        this.fraction = -1;
        this.isStopped = false;
    };
    RaycastResult.prototype.getHitDistance = function (ray) {
        return math_1.Vector2.dist(ray.from, ray.to) * this.fraction;
    };
    RaycastResult.prototype.hasHit = function () {
        return this.fraction !== -1;
    };
    RaycastResult.prototype.getHitPoint = function (ray) {
        return math_1.Vector2.lerp(ray.from, ray.to, this.fraction);
    };
    RaycastResult.prototype.stop = function () {
        this.isStopped = true;
    };
    RaycastResult.prototype.shouldStop = function (ray) {
        return this.isStopped || (this.fraction !== -1 && ray.mode === RayMode.ANY);
    };
    RaycastResult.prototype.set = function (normal, shape, body, fraction, faceIndex) {
        this.normal.set(normal);
        this.shape = shape;
        this.body = body;
        this.fraction = fraction;
        this.faceIndex = faceIndex;
    };
    return RaycastResult;
}());
exports.RaycastResult = RaycastResult;
var RayCast = (function () {
    function RayCast(ray) {
        this.ray = ray;
        this.checkCollisionResponse = true;
        this.skipBackfaces = false;
        this.collisionMask = -1;
        this.collisionGroup = -1;
        this.mode = RayMode.ANY;
    }
    Object.defineProperty(RayCast.prototype, "from", {
        get: function () {
            return this.ray.origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RayCast.prototype, "to", {
        get: function () {
            return this.ray.end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RayCast.prototype, "direction", {
        get: function () {
            return this.ray.direction;
        },
        enumerable: false,
        configurable: true
    });
    RayCast.prototype.reportIntersection = function (result, fraction, normal, faceIndex) {
        var shape = null;
        var body = null;
        if (this.skipBackfaces && math_1.Vector2.dot(normal, this.ray.direction) > 0) {
            return;
        }
        switch (this.mode) {
            case RayMode.ALL:
                result.set(normal, shape, body, fraction, faceIndex);
                this.callback && this.callback(result);
                break;
            case RayMode.CLOSEST:
                if (fraction < result.fraction || !result.hasHit()) {
                    result.set(normal, shape, body, fraction, faceIndex);
                }
                break;
            case RayMode.ANY:
                result.set(normal, shape, body, fraction, faceIndex);
                break;
        }
    };
    return RayCast;
}());
exports.RayCast = RayCast;
//# sourceMappingURL=ray-2d.js.map