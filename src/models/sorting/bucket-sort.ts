/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GBucketSort.java
 */
export class BucketSort {
    public sort(a: number[], maxValue: number): void {
        const bucket = new Array(maxValue + 1);

        for (let i = 0; i < bucket.length; i++) {
            bucket[i] = 0;
        }

        for (const item of a) {
            bucket[item]++;
        }

        let outPos = 0;
        for (let i = 0; i < bucket.length; i++) {
            for (let j = 0; j < bucket[i]; j++) {
                a[outPos++] = i;
            }
        }
    }
}
