export class QuickSort {
    constructor(comparator) {
        this.comparator = comparator;
        this.array = [];
        this.tmpValue = null;
    }
    sort(array) {
        if (!(array === null || array === void 0 ? void 0 : array.length)) {
            return;
        }
        this.array = array;
        this.quickSort(0, array.length - 1);
    }
    quickSort(lowerIndex, higherIndex) {
        let i = lowerIndex;
        let j = higherIndex;
        const pivot = this.array[~~(lowerIndex + (higherIndex - lowerIndex) / 2)];
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
    }
    exchangeNumbers(i, j) {
        this.tmpValue = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = this.tmpValue;
    }
}
//# sourceMappingURL=quick-sort.js.map