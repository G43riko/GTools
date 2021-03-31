export class MergeSort {
    constructor(comparator) {
        this.comparator = comparator;
        this.array = [];
        this.tempMergeArray = [];
    }
    sort(array) {
        this.array = array;
        this.tempMergeArray = new Array(array.length);
        this.doMergeSort(0, array.length - 1);
    }
    doMergeSort(lowerIndex, higherIndex) {
        if (lowerIndex >= higherIndex) {
            return;
        }
        const middle = Math.floor(lowerIndex + (higherIndex - lowerIndex) / 2);
        this.doMergeSort(lowerIndex, middle);
        this.doMergeSort(middle + 1, higherIndex);
        this.mergeParts(lowerIndex, middle, higherIndex);
    }
    mergeParts(lowerIndex, middle, higherIndex) {
        for (let index = lowerIndex; index <= higherIndex; index++) {
            this.tempMergeArray[index] = this.array[index];
        }
        let i = lowerIndex;
        let j = middle + 1;
        let k = lowerIndex;
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
    }
}
//# sourceMappingURL=merge-sort.js.map