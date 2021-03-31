import { Vector2 } from "gtools/math";
var Capsule = (function () {
    function Capsule(start, end, radius) {
        this.start = start;
        this.end = end;
        this.radius = radius;
    }
    Object.defineProperty(Capsule.prototype, "boundingRadius", {
        get: function () {
            return this.radius + this.length / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capsule.prototype, "area", {
        get: function () {
            return Math.PI * this.radius * this.radius + this.radius * 2 * this.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capsule.prototype, "circuit", {
        get: function () {
            return 2 * Math.PI * this.radius + 2 * Vector2.dist(this.start, this.end);
        },
        enumerable: false,
        configurable: true
    });
    Capsule.prototype.toMinMax = function () {
        throw new Error("Not implemented");
    };
    Object.defineProperty(Capsule.prototype, "momentOfInertia", {
        get: function () {
            var boxI = function (w, h) { return w * h * (Math.pow(w, 2) + Math.pow(h, 2)) / 12; };
            var semiA = function (r) { return Math.PI * Math.pow(r, 2) / 2; };
            var semiI = function (r) { return ((Math.PI / 4) - (8 / (9 * Math.PI))) * Math.pow(r, 4); };
            var semiC = function (r) { return (4 * r) / (3 * Math.PI); };
            var capsuleA = function (l, r) { return l * 2 * r + Math.PI * Math.pow(r, 2); };
            var capsuleI = function (l, r) {
                var d = l / 2 + semiC(r);
                return boxI(l, 2 * r) + 2 * (semiI(r) + semiA(r) * Math.pow(d, 2));
            };
            var length = this.length;
            var area = capsuleA(length, this.radius);
            return (area > 0) ? capsuleI(length, this.radius) / area : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capsule.prototype, "length", {
        get: function () {
            return Vector2.dist(this.start, this.end);
        },
        enumerable: false,
        configurable: true
    });
    return Capsule;
}());
export { Capsule };
//# sourceMappingURL=capsule.js.map