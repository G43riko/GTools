import { randomFloatBetween, randomIntBetween } from "gtools/utils";
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
    Range.randomVector = function (range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
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