import { randomFloatBetween, randomIntBetween } from "../utils";
import { Color } from "./color.model";
var Range = (function () {
    function Range(min, max) {
        if (max === void 0) { max = min; }
        this.min = min;
        this.max = max;
    }
    Range.random = function (range) {
        return randomFloatBetween(range.min, range.max);
    };
    Range.randomVector2i = function (range) {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
        };
    };
    Range.randomVector3i = function (range) {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
        };
    };
    Range.randomVector4i = function (range) {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
            w: randomIntBetween(range.min.w, range.max.w),
        };
    };
    Range.randomVector2f = function (range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
        };
    };
    Range.randomVector3f = function (range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
        };
    };
    Range.randomVector4f = function (range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
            w: randomFloatBetween(range.min.w, range.max.w),
        };
    };
    Range.randomColorF = function (range) {
        return new Color(randomFloatBetween(range.min.red, range.max.red), randomFloatBetween(range.min.green, range.max.green), randomFloatBetween(range.min.blue, range.max.blue), randomFloatBetween(range.min.alpha, range.max.alpha));
    };
    Range.randomColorI = function (range) {
        return new Color(randomIntBetween(range.min.red, range.max.red), randomIntBetween(range.min.green, range.max.green), randomIntBetween(range.min.blue, range.max.blue), randomIntBetween(range.min.alpha, range.max.alpha));
    };
    return Range;
}());
export { Range };
//# sourceMappingURL=range.js.map