import * as Arrays from "../array-utils";
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
export { ArrayUtils };
//# sourceMappingURL=ArrayUtils.js.map