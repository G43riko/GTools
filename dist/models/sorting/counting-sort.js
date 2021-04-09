"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountingSort = void 0;
var CountingSort = (function () {
    function CountingSort() {
    }
    CountingSort.prototype.sort = function (a, low, high) {
        var counts = new Array(high - low + 1);
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var x = a_1[_i];
            counts[x - low]++;
        }
        var current = 0;
        for (var i = 0; i < counts.length; i++) {
            a.fill(current, current + counts[i], i + low);
            current += counts[i];
        }
    };
    return CountingSort;
}());
exports.CountingSort = CountingSort;
//# sourceMappingURL=counting-sort.js.map