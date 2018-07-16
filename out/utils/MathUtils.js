"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.roundToDecimals = function (num, decimals, type) {
        if (decimals === void 0) { decimals = 2; }
        if (type === void 0) { type = "round"; }
        var divider = parseInt(1 + new Array(decimals + 1).join("0"), 10);
        return (Math[type](num * divider) / divider).toFixed(decimals);
    };
    MathUtils.pad = function (num, size) {
        var s = "00000000000000" + num;
        return s.substr(s.length - size);
    };
    MathUtils.clamp = function (value, min, max) {
        return Math.max(min, Math.min(value, max));
    };
    MathUtils.binomialCoefficient = function (n, k) {
        var r = 1;
        if (k > n) {
            return 0;
        }
        for (var d = 1; d <= k; d++) {
            r *= n--;
            r /= d;
        }
        return r;
    };
    MathUtils.lerp = function (a, b, val) {
        return b * val + (1 - val) * a;
    };
    MathUtils.log2i = function (value) {
        var r = 0;
        while ((value >>= 1) > 0) {
            r++;
        }
        return r;
    };
    MathUtils.lamp = function (min, max, scale) {
        return MathUtils.clamp((max - min) * scale + min, min, max);
    };
    MathUtils.average = function (args) {
        var sum = 0;
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var item = args_1[_i];
            sum += item;
        }
        return sum / args.length;
    };
    MathUtils.diff = function (num1, num2) {
        return Math.abs(num1 - num2);
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;
