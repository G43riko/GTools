export class BucketSort {
    sort(a, maxValue) {
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
//# sourceMappingURL=bucket-sort.js.map