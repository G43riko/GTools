var BucketSort = (function () {
    function BucketSort() {
    }
    BucketSort.prototype.sort = function (a, maxValue) {
        var bucket = new Array(maxValue + 1);
        for (var i = 0; i < bucket.length; i++) {
            bucket[i] = 0;
        }
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var item = a_1[_i];
            bucket[item]++;
        }
        var outPos = 0;
        for (var i = 0; i < bucket.length; i++) {
            for (var j = 0; j < bucket[i]; j++) {
                a[outPos++] = i;
            }
        }
    };
    return BucketSort;
}());
export { BucketSort };
//# sourceMappingURL=bucket-sort.js.map