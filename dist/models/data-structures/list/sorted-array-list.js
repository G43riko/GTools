"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortedArrayList = void 0;
var sorted_array_utils_1 = require("../../../utils/sorted-array-utils");
var SortedArrayList = (function () {
    function SortedArrayList(comparator) {
        this.comparator = comparator;
        this.data = [];
    }
    SortedArrayList.prototype.forEach = function (callback) {
        this.data.forEach(callback);
    };
    SortedArrayList.prototype[Symbol.iterator] = function () {
        var _a;
        var _this = this;
        var current = 0;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                if (current < _this.data.length) {
                    return {
                        value: _this.data[current++],
                        done: false,
                    };
                }
                return {
                    value: null,
                    done: true,
                };
            },
            _a;
    };
    Object.defineProperty(SortedArrayList.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SortedArrayList.prototype, "empty", {
        get: function () {
            return this.data.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    SortedArrayList.prototype.add = function (item) {
        return sorted_array_utils_1.sortedInsert(this.data, item, this.comparator) >= 0;
    };
    SortedArrayList.prototype.clear = function () {
        this.data.splice(0, this.data.length);
    };
    SortedArrayList.prototype.contains = function (item) {
        return sorted_array_utils_1.binarySearch(this.data, item, this.comparator) >= 0;
    };
    SortedArrayList.prototype.remove = function (item) {
        return !!sorted_array_utils_1.sortedRemove(this.data, item, this.comparator);
    };
    SortedArrayList.prototype.toArray = function () {
        return __spreadArrays(this.data);
    };
    return SortedArrayList;
}());
exports.SortedArrayList = SortedArrayList;
//# sourceMappingURL=sorted-array-list.js.map