"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
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
    return Sphere;
}());
exports.Sphere = Sphere;
//# sourceMappingURL=sphere.js.map