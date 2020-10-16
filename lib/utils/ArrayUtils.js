"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = exports.isNotEmptyArray = exports.isEmpty = void 0;
function isEmpty(arr) {
    return !Array.isArray(arr) || arr.length === 0;
}
exports.isEmpty = isEmpty;
function isNotEmptyArray(arr) {
    return Array.isArray(arr) && arr.length > 0;
}
exports.isNotEmptyArray = isNotEmptyArray;
/**
 */
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    /**
     *
     * @example
     * const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     * const conditions = {age: 23, name: "Monica"}
     * where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     */
    ArrayUtils.where = function (array, condition) {
        if (!Array.isArray(array)) {
            return array;
        }
        if (!condition || typeof condition !== "object") {
            return [];
        }
        var result = [];
        var conditionEntries = Object.entries(condition);
        array.forEach(function (e) {
            var add = conditionEntries.some(function (conditionEntry) { return e[conditionEntry[0]] === conditionEntry[1]; });
            if (add) {
                result[result.length] = e;
            }
        });
        return result;
    };
    /**
     * Return sub array from array
     *
     * @deprecated use {@link Array.prototype.slice} instead
     * @param array - input array
     * @param minIndex - start index
     * @param maxIndex - end index
     * @returns final array
     */
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
     * @param array - array of numbers
     * @returns maximal number from array
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
     * @param array - array of numbers
     * @returns minimal number from array
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
     * @param array - array of numbers
     * @returns summary of all numbers in array
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
     * @param array - array of numbers
     * @returns average of all numbers in array
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
     * @param array - not empty array
     * @param delimiter - character used for join elements in array
     * @param prefix - string append at the beginning of final string
     * @param postfix - string append at the end of final string
     * @returns final string
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
     * @param array - not empty array
     * @returns last value from array
     */
    ArrayUtils.getLast = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        return array[array.length - 1];
    };
    /**
     * Method returns random element from array
     *
     * @param array - not empty array
     * @returns random value from array
     */
    ArrayUtils.getRandom = function (array) {
        if (!Array.isArray(array)) {
            return array;
        }
        if (array.length === 0) {
            return null;
        }
        return array[Math.floor(Math.random() * array.length)];
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
            var randomItem = ArrayUtils.getRandom(args);
            if (randomItem) {
                result.add(randomItem);
            }
        }
        return Array.from(result);
    };
    /**
     * Method return copy of array with only distinct elements
     *
     * @param array - array with duplicate elements
     * @returns unique array
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
