var InsertionSort = (function () {
    function InsertionSort(comparator) {
        this.comparator = comparator;
    }
    InsertionSort.prototype.sort = function (list) {
        for (var i = 1; i < list.length; i++) {
            var item = list[i];
            if (this.comparator(item, list[i - 1]) < 0) {
                this.sortUpLowToHigh(list, i);
            }
        }
    };
    InsertionSort.prototype.sortUpLowToHigh = function (list, i) {
        var item = list[i];
        var attemptPos = i - 1;
        while (attemptPos !== 0 && this.comparator(list[attemptPos - 1], item) > 0) {
            attemptPos--;
        }
        list.splice(i, 1);
        list.splice(attemptPos, 0, item);
    };
    return InsertionSort;
}());
export { InsertionSort };
//# sourceMappingURL=insertion-sort.js.map