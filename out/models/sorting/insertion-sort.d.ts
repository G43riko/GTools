export declare class InsertionSort<T> {
    private readonly comparator;
    constructor(comparator: (a: T, b: T) => number);
    sort(list: T[]): void;
    private sortUpLowToHigh;
}
