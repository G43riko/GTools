"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArrays3 = exports.mergeArrays2 = exports.eachOther = exports.createFilledArray = exports.makeUnique = exports.getNRandom = exports.getRandomItem = exports.getLast = exports.join = exports.avg = exports.sum = exports.min = exports.max = exports.subArray = exports.analyzeArrayChanges = exports.groupByLast = exports.compareArrays = exports.where = void 0;
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
function compareArrays(prev, act, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    if (prev.length !== act.length) {
        return false;
    }
    for (var i = 0; i < prev.length; i++) {
        if (!comparator(prev[i], act[i])) {
            return false;
        }
    }
    return true;
}
exports.compareArrays = compareArrays;
function groupByLast(arr, key) {
    return arr.reduce(function (acc, curr) {
        var _a;
        return Object.assign({}, acc, (_a = {}, _a[curr[key]] = curr, _a));
    }, {});
}
exports.groupByLast = groupByLast;
function analyzeArrayChanges(prev, act, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    var existingPrevIndices = {};
    var toRemove = [];
    var toAdd = [];
    act.forEach(function (e) {
        var prevIndex = prev.findIndex(function (item) { return comparator(e, item); });
        if (prevIndex < 0) {
            toAdd.push(e);
        }
        else {
            existingPrevIndices[prevIndex] = true;
        }
    });
    prev.forEach(function (e, i) {
        if (i in existingPrevIndices) {
            return;
        }
        toRemove.push(e);
    });
    return { toAdd: toAdd, toRemove: toRemove };
}
exports.analyzeArrayChanges = analyzeArrayChanges;
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
function createFilledArray(length, provider) {
    if (typeof provider === "function") {
        return new Array(length).fill(null).map(function () { return provider(); });
    }
    return new Array(length).fill(provider);
}
exports.createFilledArray = createFilledArray;
function eachOther(arr, callback) {
    arr.forEach(function (e, i) {
        for (var j = i + 1; j < arr.length; j++) {
            callback(e, arr[j]);
        }
    });
}
exports.eachOther = eachOther;
function mergeArrays2(arr1, arr2, callback) {
    var result = [];
    arr1.forEach(function (item1) {
        arr2.forEach(function (item2) {
            result.push(callback(item1, item2));
        });
    });
    return result;
}
exports.mergeArrays2 = mergeArrays2;
function mergeArrays3(arr1, arr2, arr3, callback) {
    var result = [];
    arr1.forEach(function (item1) {
        arr2.forEach(function (item2) {
            arr3.forEach(function (item3) {
                result.push(callback(item1, item2, item3));
            });
        });
    });
    return result;
}
exports.mergeArrays3 = mergeArrays3;
//# sourceMappingURL=array-utils.js.map