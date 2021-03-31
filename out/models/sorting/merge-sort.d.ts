export declare class MergeSort<T> {
    private readonly comparator;
    private array;
    private tempMergeArray;
    constructor(comparator: (a: T, b: T) => number);
    sort(array: T[]): void;
    private doMergeSort;
    private mergeParts;
}
