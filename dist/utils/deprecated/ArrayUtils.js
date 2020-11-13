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
exports.ArrayUtils = void 0;
var Arrays = __importStar(require("../array-utils"));
var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    ArrayUtils.where = function (array, condition) {
        return Arrays.where(array, condition);
    };
    ArrayUtils.subArray = function (array, minIndex, maxIndex) {
        if (minIndex === void 0) { minIndex = 0; }
        if (maxIndex === void 0) { maxIndex = array.length - 1; }
        return Arrays.subArray(array, minIndex, maxIndex);
    };
    ArrayUtils.max = function (array) {
        return Arrays.max(array);
    };
    ArrayUtils.min = function (array) {
        return Arrays.min(array);
    };
    ArrayUtils.sum = function (array) {
        return Arrays.sum(array);
    };
    ArrayUtils.avg = function (array) {
        return Arrays.avg(array);
    };
    ArrayUtils.join = function (array, delimiter, prefix, postfix) {
        if (prefix === void 0) { prefix = ""; }
        if (postfix === void 0) { postfix = ""; }
        return Arrays.join(array, delimiter, prefix, postfix);
    };
    ArrayUtils.getLast = function (array) {
        return Arrays.getLast(array);
    };
    ArrayUtils.getRandom = function (array) {
        return Arrays.getRandomItem(array);
    };
    ArrayUtils.getNRandom = function (array, count) {
        return Arrays.getNRandom(array, count);
    };
    ArrayUtils.makeUnique = function (array) {
        return Arrays.makeUnique(array);
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
//# sourceMappingURL=ArrayUtils.js.map