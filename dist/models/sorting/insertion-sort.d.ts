/**
 * https://www.dropbox.com/sh/be1lrxk0h9dhdx7/AAD8G5xdEBdEeTJOi4LnGXePa?dl=0&preview=InsertionSort.java
 * Very fast for almost sorted data
 */
export declare class InsertionSort<T> {
    private readonly comparator;
    constructor(comparator: (a: T, b: T) => number);
    sort(list: T[]): void;
    private sortUpLowToHigh;
}
//# sourceMappingURL=insertion-sort.d.ts.map