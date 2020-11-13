"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
var Maths = __importStar(require("../math-utils"));
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
exports.MathUtils = MathUtils;
//# sourceMappingURL=MathUtils.js.map