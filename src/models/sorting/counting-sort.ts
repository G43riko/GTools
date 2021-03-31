/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GCountingSort.java
 */
export class CountingSort {
    public sort(a: number[], low: number, high: number): void {
        // this will hold all possible values, from low to high
        const counts = new Array<number>(high - low + 1);
        for (const x of a) {
            // - low so the lowest possible value is always 0
            counts[x - low]++;
        }
        let current = 0;
        for (let i = 0; i < counts.length; i++) {
            // fills counts[i] elements of value i + low in current
            a.fill(current, current + counts[i], i + low);
            // leap forward by counts[i] steps
            current += counts[i];
        }
    }
}
