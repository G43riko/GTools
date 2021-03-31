export declare class QuickSort<T> {
    private readonly comparator;
    private array;
    private tmpValue;
    constructor(comparator: (a: T, b: T) => number);
    sort(array: T[]): void;
    private quickSort;
    private exchangeNumbers;
}
