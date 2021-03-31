var RadixSort = (function () {
    function RadixSort(mapper) {
        this.mapper = mapper;
    }
    RadixSort.prototype.sort = function (a) {
        var m = a[0];
        var exp = 1;
        var b = new Array(a.length);
        for (var i = 1; i < a.length; i++) {
            if (a[i] > m) {
                m = a[i];
            }
        }
        var mValue = this.mapper(m);
        while (mValue / exp > 0) {
            var bucket = new Array(10);
            for (var i = 0; i < a.length; i++) {
                bucket[(this.mapper(a[i]) / exp) % 10]++;
            }
            for (var i = 1; i < 10; i++) {
                bucket[i] += bucket[i - 1];
            }
            for (var i = a.length - 1; i >= 0; i--) {
                b[--bucket[(this.mapper(a[i]) / exp) % 10]] = a[i];
            }
            for (var i = 0; i < a.length; i++) {
                a[i] = b[i];
            }
            exp *= 10;
        }
    };
    RadixSort.prototype.sort2 = function (a) {
        var m = a[0];
        var exp = 1;
        var b = new Array(a.length);
        for (var i = 1; i < a.length; i++) {
            if (a[i] > m) {
                m = a[i];
            }
        }
        while (m / exp > 0) {
            var bucket = new Array(10);
            for (var i = 0; i < a.length; i++) {
                bucket[(a[i] / exp) % 10]++;
            }
            for (var i = 1; i < 10; i++) {
                bucket[i] += bucket[i - 1];
            }
            for (var i = a.length - 1; i >= 0; i--) {
                b[--bucket[(a[i] / exp) % 10]] = a[i];
            }
            for (var i = 0; i < a.length; i++) {
                a[i] = b[i];
            }
            exp *= 10;
        }
    };
    return RadixSort;
}());
export { RadixSort };
//# sourceMappingURL=radix-sort.js.map