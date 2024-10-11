/**
 * https://www.dropbox.com/sh/be1lrxk0h9dhdx7/AAD8G5xdEBdEeTJOi4LnGXePa?dl=0&preview=InsertionSort.java
 * Very fast for almost sorted data
 */
export class InsertionSort<T> {
    public constructor(private readonly comparator: (a: T, b: T) => number) {
    }

    public sort(list: T[]): void {
        for (let i = 1; i < list.length; i++) {
            const item = list[i];
            if (this.comparator(item, list[i - 1]) < 0) {
                this.sortUpLowToHigh(list, i);
            }
        }
    }

    private sortUpLowToHigh(list: T[], i: number): void {
        const item = list[i];
        let attemptPos = i - 1;
        while (attemptPos !== 0 && this.comparator(list[attemptPos - 1], item) > 0) {
            attemptPos--;
        }
        list.splice(i, 1);
        list.splice(attemptPos, 0, item);
    }
}
