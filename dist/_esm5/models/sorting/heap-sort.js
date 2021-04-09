var HeapSort = (function () {
    function HeapSort(comparator) {
        this.comparator = comparator;
        this.n = 0;
        this.left = 0;
        this.right = 0;
        this.largest = 0;
        this.tmp = null;
    }
    HeapSort.prototype.sort = function (array) {
        this.buildHeap(array);
        for (var i = this.n; i > 0; i--) {
            this.exchange(array, 0, i);
            this.n--;
            this.maxHeap(array, 0);
        }
    };
    HeapSort.prototype.buildHeap = function (a) {
        this.n = a.length - 1;
        for (var i = this.n / 2; i >= 0; i--) {
            this.maxHeap(a, i);
        }
    };
    HeapSort.prototype.maxHeap = function (a, i) {
        this.left = 2 * i;
        this.right = 2 * i + 1;
        if (this.left <= this.n && this.comparator(a[this.left], a[i]) > 0) {
            this.largest = this.left;
        }
        else {
            this.largest = i;
        }
        if (this.right <= this.n && this.comparator(a[this.right], a[this.largest]) > 0) {
            this.largest = this.right;
        }
        if (this.largest !== i) {
            this.exchange(a, i, this.largest);
            this.maxHeap(a, this.largest);
        }
    };
    HeapSort.prototype.exchange = function (a, i, j) {
        this.tmp = a[i];
        a[i] = a[j];
        a[j] = this.tmp;
    };
    return HeapSort;
}());
export { HeapSort };
//# sourceMappingURL=heap-sort.js.map