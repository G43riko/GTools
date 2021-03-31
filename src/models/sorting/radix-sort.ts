/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GRadixSort.java
 *
 * Only useful for fix length integer keys.
 */
export class RadixSort<T> {
    public constructor(private readonly mapper: (item: T) => number) {
    }
    public sort(a: T[]): void {
        let m   = a[0];
        let exp = 1;
        const b = new Array<T>(a.length);
        for (let i = 1; i < a.length; i++) {
            if (a[i] > m) {
                m = a[i];
            }
        }
        const mValue = this.mapper(m);
        while (mValue / exp > 0) {
            const bucket = new Array<number>(10);

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
    public sort2(a: number[]): void {
        let m   = a[0];
        let exp = 1;
        const b = new Array<number>(a.length);
        for (let i = 1; i < a.length; i++) {
            if (a[i] > m) {
                m = a[i];
            }
        }
        while (m / exp > 0) {
            const bucket = new Array<number>(10);

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
