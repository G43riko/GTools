"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.where = function (array, condition) {
        if (!Array.isArray(array)) {
            return array;
        }
        var result = [];
        if (typeof condition !== "object" || !condition) {
            return result;
        }
        array.forEach(function (e) {
            var add = false;
            for (var key in condition) {
                if (condition.hasOwnProperty(key)) {
                    if (e[key] === condition[key]) {
                        add = true;
                        break;
                    }
                }
            }
            if (add) {
                result[result.length] = e;
            }
        });
        return result;
    };
    ArrayUtils.subArray = function (array, minIndex, maxIndex) {
        if (minIndex === void 0) { minIndex = 0; }
        if (maxIndex === void 0) { maxIndex = array.length - 1; }
        if (!Array.isArray(array)) {
            return array;
        }
        var result = [];
        var final = array.length < maxIndex ? array.length - 1 : maxIndex;
        for (var i = minIndex; i <= final; i++) {
            result[result.length] = array[i];
        }
        return result;
    };
    /**
     * Function return maximal value from numeric array
     *
     * @param {number[]} array
     * @returns {number}
     */
    ArrayUtils.max = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        if (array.length === 0) {
            return 0;
        }
        return array.reduce(function (a, b) { return a > b ? a : b; });
    };
    /**
     * Function return minimal value from numeric array
     *
     * @param {number[]} array
     * @returns {number}
     */
    ArrayUtils.min = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        if (array.length === 0) {
            return 0;
        }
        return array.reduce(function (a, b) { return a < b ? a : b; });
    };
    /**
     * Function return total value of all elements in numeric array
     *
     * @param {number[]} array
     * @returns {number}
     */
    ArrayUtils.sum = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        if (array.length === 0) {
            return 0;
        }
        return array.reduce(function (a, b) { return a + b; });
    };
    /**
     * Function returns average of numeric array given as input
     *
     * @param {number[]} array
     * @returns {number}
     */
    ArrayUtils.avg = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        if (array.length === 0) {
            return 0;
        }
        return array.reduce(function (a, b) { return a + b; }) / array.length;
    };
    /**
     * Function join array by delimiter and append prefix and postfix
     *
     * @param {any[]} array
     * @param {string} delimiter
     * @param {string} prefix
     * @param {string} postfix
     * @returns {string}
     */
    ArrayUtils.join = function (array, delimiter, prefix, postfix) {
        if (prefix === void 0) { prefix = ""; }
        if (postfix === void 0) { postfix = ""; }
        if (!Array.isArray(array)) {
            return prefix + array + postfix;
        }
        return prefix + array.join(delimiter) + postfix;
    };
    /**
     * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
     * @param {T[]} array
     * @returns {T | null}
     */
    ArrayUtils.getLast = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    };
    /**
     * Method returns random element from array
     *
     * @param {T[]} args
     * @returns {T | null}
     */
    ArrayUtils.getRandom = function (args) {
        if (!Array.isArray(args)) {
            return args;
        }
        if (args.length === 0) {
            return null;
        }
        return args[Math.floor(Math.random() * args.length)];
    };
    ArrayUtils.getNRandom = function (args, count) {
        if (!Array.isArray(args)) {
            return args;
        }
        if (args.length === 0 || count === 0) {
            return [];
        }
        if (args.length <= count) {
            return args;
        }
        var result = new Set();
        while (result.size <= count) {
            result.add(ArrayUtils.getRandom(args));
        }
        return Array.from(result);
    };
    /**
     * Method return copy of array with only distinct elements
     *
     * @param {T[]} array
     * @returns {T[]}
     */
    ArrayUtils.makeUnique = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        return Array.from(new Set(array));
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
