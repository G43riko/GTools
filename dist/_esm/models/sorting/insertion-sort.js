export class InsertionSort {
    constructor(comparator) {
        this.comparator = comparator;
    }
    sort(list) {
        for (let i = 1; i < list.length; i++) {
            const item = list[i];
            if (this.comparator(item, list[i - 1]) < 0) {
                this.sortUpLowToHigh(list, i);
            }
        }
    }
    sortUpLowToHigh(list, i) {
        const item = list[i];
        let attemptPos = i - 1;
        while (attemptPos !== 0 && this.comparator(list[attemptPos - 1], item) > 0) {
            attemptPos--;
        }
        list.splice(i, 1);
        list.splice(attemptPos, 0, item);
    }
}
//# sourceMappingURL=insertion-sort.js.map