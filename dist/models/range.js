"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
var utils_1 = require("../utils");
var color_model_1 = require("./color.model");
var Range = (function () {
    function Range(min, max) {
        if (max === void 0) { max = min; }
        this.min = min;
        this.max = max;
    }
    Range.random = function (range) {
        return utils_1.randomFloatBetween(range.min, range.max);
    };
    Range.randomVector = function (range) {
        return {
            x: utils_1.randomFloatBetween(range.min.x, range.max.x),
            y: utils_1.randomFloatBetween(range.min.y, range.max.y),
        };
    };
    Range.randomColorF = function (range) {
        return new color_model_1.Color(utils_1.randomFloatBetween(range.min.red, range.max.red), utils_1.randomFloatBetween(range.min.green, range.max.green), utils_1.randomFloatBetween(range.min.blue, range.max.blue), utils_1.randomFloatBetween(range.min.alpha, range.max.alpha));
    };
    Range.randomColorI = function (range) {
        return new color_model_1.Color(utils_1.randomIntBetween(range.min.red, range.max.red), utils_1.randomIntBetween(range.min.green, range.max.green), utils_1.randomIntBetween(range.min.blue, range.max.blue), utils_1.randomIntBetween(range.min.alpha, range.max.alpha));
    };
    return Range;
}());
exports.Range = Range;
//# sourceMappingURL=range.js.map