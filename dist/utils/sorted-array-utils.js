"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedMerge = exports.SortedPartition = exports.SortedDifference = exports.sortedPickAll = exports.sortedRemove = exports.sortedInsertAll = exports.sortedInsert = exports.sortedFind = exports.binarySearch = void 0;
function binarySearch(array, item, comparator) {
    var m = 0;
    var n = array.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = comparator(item, array[k]);
        if (cmp > 0) {
            m = k + 1;
        }
        else if (cmp < 0) {
            n = k - 1;
        }
        else {
            return k;
        }
    }
    return ~m;
}
exports.binarySearch = binarySearch;
function sortedFind(array, el, compare) {
    var idx = binarySearch(array, el, compare);
    if (idx < 0) {
        return;
    }
    return array[idx];
}
exports.sortedFind = sortedFind;
function sortedInsert(array, value, compare) {
    var idx = binarySearch(array, value, compare);
    var newIdx = idx < 0 ? ~idx : idx;
    array.splice(newIdx, 0, value);
    return newIdx;
}
exports.sortedInsert = sortedInsert;
function sortedInsertAll(array, values, compare, skipDuplicates) {
    if (skipDuplicates === void 0) { skipDuplicates = false; }
    var actualIndex = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        actualIndex = binarySearch(array.slice(actualIndex), value, compare);
        if (skipDuplicates && actualIndex >= 0) {
            break;
        }
        if (actualIndex < 0) {
            actualIndex = ~actualIndex;
        }
        array.splice(actualIndex, 0, value);
    }
    return values.length;
}
exports.sortedInsertAll = sortedInsertAll;
function sortedRemove(array, value, compare) {
    var idx = binarySearch(array, value, compare);
    if (idx < 0) {
        return;
    }
    var r = array[idx];
    array.splice(idx, 1);
    return r;
}
exports.sortedRemove = sortedRemove;
function sortedPickAll(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r = [];
    while (i1 < values.length && i2 < array.length) {
        var id = values[i1];
        var f = array[i2];
        var cmp = compare(id, f);
        if (cmp > 0) {
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
            r.push(f);
            ++i1;
            ++i2;
        }
    }
    return r;
}
exports.sortedPickAll = sortedPickAll;
function SortedDifference(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r = [];
    while (i1 < values.length && i2 < array.length) {
        var id = values[i1];
        var f = array[i2];
        var cmp = compare(id, f);
        if (cmp > 0) {
            r.push(f);
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
            ++i1;
            ++i2;
        }
    }
    while (i2 < array.length) {
        var f = array[i2];
        r.push(f);
        ++i2;
    }
    return r;
}
exports.SortedDifference = SortedDifference;
function SortedPartition(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r1 = [];
    var r2 = [];
    while (i1 < values.length && i2 < array.length) {
        var id = values[i1];
        var f = array[i2];
        var cmp = compare(id, f);
        if (cmp > 0) {
            r2.push(f);
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
            r1.push(f);
            ++i1;
            ++i2;
        }
    }
    while (i2 < array.length) {
        var f = array[i2];
        r2.push(f);
        ++i2;
    }
    return [r1, r2];
}
exports.SortedPartition = SortedPartition;
function sortedMerge(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r = [];
    while (i1 < values.length && i2 < array.length) {
        var f1 = values[i1];
        var f2 = array[i2];
        var cmp = compare(f1, f2);
        if (cmp > 0) {
            r.push(f2);
            ++i2;
        }
        else if (cmp < 0) {
            r.push(f1);
            ++i1;
        }
        else {
            r.push(f1);
            ++i1;
            ++i2;
        }
    }
    while (i1 < values.length) {
        var f = values[i1];
        r.push(f);
        ++i1;
    }
    while (i2 < array.length) {
        var f = array[i2];
        r.push(f);
        ++i2;
    }
    return r;
}
exports.sortedMerge = sortedMerge;
//# sourceMappingURL=sorted-array-utils.js.map