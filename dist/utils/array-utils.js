"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachOther = exports.makeUnique = exports.getNRandom = exports.getRandomItem = exports.getLast = exports.join = exports.avg = exports.sum = exports.min = exports.max = exports.subArray = exports.where = void 0;
function where(array, condition) {
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
}
exports.where = where;
function subArray(array, minIndex, maxIndex) {
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
}
exports.subArray = subArray;
function max(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a > b ? a : b; });
}
exports.max = max;
function min(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a < b ? a : b; });
}
exports.min = min;
function sum(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a + b; });
}
exports.sum = sum;
function avg(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a + b; }) / array.length;
}
exports.avg = avg;
function join(array, delimiter, prefix, postfix) {
    if (prefix === void 0) { prefix = ""; }
    if (postfix === void 0) { postfix = ""; }
    if (!Array.isArray(array)) {
        return prefix + array + postfix;
    }
    return prefix + array.join(delimiter) + postfix;
}
exports.join = join;
function getLast(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return array[array.length - 1];
}
exports.getLast = getLast;
function getRandomItem(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return null;
    }
    return array[Math.floor(Math.random() * array.length)];
}
exports.getRandomItem = getRandomItem;
function getNRandom(args, count) {
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
        var randomItem = getRandomItem(args);
        if (randomItem) {
            result.add(randomItem);
        }
    }
    return Array.from(result);
}
exports.getNRandom = getNRandom;
function makeUnique(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return Array.from(new Set(array));
}
exports.makeUnique = makeUnique;
function eachOther(arr, callback) {
    arr.forEach(function (e, i) {
        for (var j = i + 1; j < arr.length; j++) {
            callback(e, arr[j]);
        }
    });
}
exports.eachOther = eachOther;
//# sourceMappingURL=array-utils.js.map