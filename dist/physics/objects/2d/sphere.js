"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
var math_1 = require("../../../math");
var object_convertors_1 = require("../object-convertors");
var Sphere = (function () {
    function Sphere(radius, center) {
        this.radius = radius;
        this.center = center;
    }
    Object.defineProperty(Sphere.prototype, "circuit", {
        get: function () {
            return 2 * Math.PI * this.radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sphere.prototype, "momentOfInertia", {
        get: function () {
            var r = this.radius;
            return r * r / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sphere.prototype, "boundingRadius", {
        get: function () {
            return this.radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sphere.prototype, "area", {
        get: function () {
            return Math.PI * this.radius * this.radius;
        },
        enumerable: false,
        configurable: true
    });
    Sphere.fromMinMax = function (_a, chooseSize) {
        var min = _a.min, max = _a.max;
        if (chooseSize === void 0) { chooseSize = "max"; }
        var center = {
            x: (min.x + max.x) / 2,
            y: (min.y + max.y) / 2,
        };
        var sizeX = max.x - min.x;
        var sizeY = max.y - min.y;
        var radius = chooseSize === "min" ? Math.min(sizeX, sizeY) : Math.max(sizeX, sizeY);
        return new Sphere(radius, center);
    };
    Sphere.fromPosSize = function (posSize, chooseSize) {
        if (chooseSize === void 0) { chooseSize = "max"; }
        return Sphere.fromMinMax(object_convertors_1.convertPosSizeToMinMax(posSize), chooseSize);
    };
    Sphere.prototype.toMinMax = function () {
        return {
            min: math_1.Vector2.addNum(this.center, -this.radius),
            max: math_1.Vector2.addNum(this.center, this.radius),
        };
    };
    Sphere.prototype.raycast = function (result, ray) {
        var from = ray.from;
        var to = ray.to;
        var r = this.radius;
        var position = new math_1.Vector2(this.center.x, this.center.y);
        var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2);
        var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y));
        var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) - Math.pow(r, 2);
        var delta = Math.pow(b, 2) - 4 * a * c;
        var intersectionPoint = new math_1.Vector2();
        var normal = new math_1.Vector2();
        if (delta < 0) {
            return;
        }
        if (delta === 0) {
            intersectionPoint.set(math_1.Vector2.lerp(from, to, delta));
            math_1.Vector2.sub(intersectionPoint, position, normal);
            math_1.Vector2.normalize(normal, normal);
            ray.reportIntersection(result, delta, normal, -1);
        }
        else {
            var sqrtDelta = Math.sqrt(delta);
            var inv2a = 1 / (2 * a);
            var d1 = (-b - sqrtDelta) * inv2a;
            var d2 = (-b + sqrtDelta) * inv2a;
            if (d1 >= 0 && d1 <= 1) {
                intersectionPoint.set(math_1.Vector2.lerp(from, to, d1));
                math_1.Vector2.sub(intersectionPoint, position, normal);
                math_1.Vector2.normalize(normal, normal);
                ray.reportIntersection(result, d1, normal, -1);
                if (result.shouldStop(ray)) {
                    return;
                }
            }
            if (d2 >= 0 && d2 <= 1) {
                intersectionPoint.set(math_1.Vector2.lerp(from, to, d2));
                math_1.Vector2.sub(intersectionPoint, position, normal);
                math_1.Vector2.normalize(normal, normal);
                ray.reportIntersection(result, d2, normal, -1);
            }
        }
    };
    return Sphere;
}());
exports.Sphere = Sphere;
//# sourceMappingURL=sphere.js.map