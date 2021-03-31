"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = void 0;
var QuickSort = (function () {
    function QuickSort(comparator) {
        this.comparator = comparator;
        this.array = [];
        this.tmpValue = null;
    }
    QuickSort.prototype.sort = function (array) {
        if (!(array === null || array === void 0 ? void 0 : array.length)) {
            return;
        }
        this.array = array;
        this.quickSort(0, array.length - 1);
    };
    QuickSort.prototype.quickSort = function (lowerIndex, higherIndex) {
        var i = lowerIndex;
        var j = higherIndex;
        var pivot = this.array[~~(lowerIndex + (higherIndex - lowerIndex) / 2)];
        while (i <= j) {
            while (this.comparator(this.array[i], pivot) < 0) {
                i++;
            }
            while (this.comparator(this.array[j], pivot) > 0) {
                j--;
            }
            if (i <= j) {
                this.exchangeNumbers(i++, j--);
            }
        }
        if (lowerIndex < j) {
            this.quickSort(lowerIndex, j);
        }
        if (i < higherIndex) {
            this.quickSort(i, higherIndex);
        }
    };
    QuickSort.prototype.exchangeNumbers = function (i, j) {
        this.tmpValue = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = this.tmpValue;
    };
    return QuickSort;
}());
exports.QuickSort = QuickSort;
//# sourceMappingURL=quick-sort.js.map