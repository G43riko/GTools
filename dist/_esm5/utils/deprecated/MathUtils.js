import * as Maths from "../math-utils";
var MathUtils = (function () {
    function MathUtils() {
    }
    MathUtils.roundToDecimals = function (num, decimals, type) {
        if (decimals === void 0) { decimals = 2; }
        if (type === void 0) { type = "round"; }
        return Maths.roundToDecimals(num, decimals, type);
    };
    MathUtils.pad = function (num, size) {
        return Maths.pad(num, size);
    };
    MathUtils.clamp = function (value, min, max) {
        return Maths.clamp(value, min, max);
    };
    MathUtils.binomialCoefficient = function (n, k) {
        return Maths.binomialCoefficient(n, k);
    };
    MathUtils.lerp = function (a, b, val) {
        return Maths.lerp(a, b, val);
    };
    MathUtils.log2i = function (value) {
        return Maths.log2i(value);
    };
    MathUtils.lamp = function (min, max, scale) {
        return Maths.lamp(min, max, scale);
    };
    MathUtils.randomInt = function (min, max) {
        return Maths.randomInt(min, max);
    };
    MathUtils.random = function (min, max) {
        return Maths.random(min, max);
    };
    MathUtils.average = function (args) {
        return Maths.average(args);
    };
    MathUtils.diff = function (num1, num2) {
        return Maths.getDiff(num1, num2);
    };
    return MathUtils;
}());
export { MathUtils };
//# sourceMappingURL=MathUtils.js.map