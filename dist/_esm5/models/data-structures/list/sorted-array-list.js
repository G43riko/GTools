import { __spreadArrays } from "tslib";
import { binarySearch, sortedInsert, sortedRemove } from "../../../utils/sorted-array-utils";
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
        return sortedInsert(this.data, item, this.comparator) >= 0;
    };
    SortedArrayList.prototype.clear = function () {
        this.data.splice(0, this.data.length);
    };
    SortedArrayList.prototype.contains = function (item) {
        return binarySearch(this.data, item, this.comparator) >= 0;
    };
    SortedArrayList.prototype.remove = function (item) {
        return !!sortedRemove(this.data, item, this.comparator);
    };
    SortedArrayList.prototype.toArray = function () {
        return __spreadArrays(this.data);
    };
    return SortedArrayList;
}());
export { SortedArrayList };
//# sourceMappingURL=sorted-array-list.js.map