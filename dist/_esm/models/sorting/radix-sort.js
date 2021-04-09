export class RadixSort {
    constructor(mapper) {
        this.mapper = mapper;
    }
    sort(a) {
        let m = a[0];
        let exp = 1;
        const b = new Array(a.length);
        for (let i = 1; i < a.length; i++) {
            if (a[i] > m) {
                m = a[i];
            }
        }
        const mValue = this.mapper(m);
        while (mValue / exp > 0) {
            const bucket = new Array(10);
            for (let i = 0; i < a.length; i++) {
                bucket[(this.mapper(a[i]) / exp) % 10]++;
            }
            for (let i = 1; i < 10; i++) {
                bucket[i] += bucket[i - 1];
            }
            for (let i = a.length - 1; i >= 0; i--) {
                b[--bucket[(this.mapper(a[i]) / exp) % 10]] = a[i];
            }
            for (let i = 0; i < a.length; i++) {
                a[i] = b[i];
            }
            exp *= 10;
        }
    }
    sort2(a) {
        let m = a[0];
        let exp = 1;
        const b = new Array(a.length);
        for (let i = 1; i < a.length; i++) {
            if (a[i] > m) {
                m = a[i];
            }
        }
        while (m / exp > 0) {
            const bucket = new Array(10);
            for (let i = 0; i < a.length; i++) {
                bucket[(a[i] / exp) % 10]++;
            }
            for (let i = 1; i < 10; i++) {
                bucket[i] += bucket[i - 1];
            }
            for (let i = a.length - 1; i >= 0; i--) {
                b[--bucket[(a[i] / exp) % 10]] = a[i];
            }
            for (let i = 0; i < a.length; i++) {
                a[i] = b[i];
            }
            exp *= 10;
        }
    }
}
//# sourceMappingURL=radix-sort.js.map