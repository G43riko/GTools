export class CountingSort {
    sort(a, low, high) {
        const counts = new Array(high - low + 1);
        for (const x of a) {
            counts[x - low]++;
        }
        let current = 0;
        for (let i = 0; i < counts.length; i++) {
            a.fill(current, current + counts[i], i + low);
            current += counts[i];
        }
    }
}
//# sourceMappingURL=counting-sort.js.map