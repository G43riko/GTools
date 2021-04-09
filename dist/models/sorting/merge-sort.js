"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = void 0;
var MergeSort = (function () {
    function MergeSort(comparator) {
        this.comparator = comparator;
        this.array = [];
        this.tempMergeArray = [];
    }
    MergeSort.prototype.sort = function (array) {
        this.array = array;
        this.tempMergeArray = new Array(array.length);
        this.doMergeSort(0, array.length - 1);
    };
    MergeSort.prototype.doMergeSort = function (lowerIndex, higherIndex) {
        if (lowerIndex >= higherIndex) {
            return;
        }
        var middle = Math.floor(lowerIndex + (higherIndex - lowerIndex) / 2);
        this.doMergeSort(lowerIndex, middle);
        this.doMergeSort(middle + 1, higherIndex);
        this.mergeParts(lowerIndex, middle, higherIndex);
    };
    MergeSort.prototype.mergeParts = function (lowerIndex, middle, higherIndex) {
        for (var index = lowerIndex; index <= higherIndex; index++) {
            this.tempMergeArray[index] = this.array[index];
        }
        var i = lowerIndex;
        var j = middle + 1;
        var k = lowerIndex;
        while (i <= middle && j <= higherIndex) {
            if (this.comparator(this.tempMergeArray[i], this.tempMergeArray[j]) <= 0) {
                this.array[k] = this.tempMergeArray[i++];
            }
            else {
                this.array[k] = this.tempMergeArray[j++];
            }
            k++;
        }
        while (i <= middle) {
            this.array[k++] = this.tempMergeArray[i++];
        }
    };
    return MergeSort;
}());
exports.MergeSort = MergeSort;
//# sourceMappingURL=merge-sort.js.map