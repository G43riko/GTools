export declare class HeapSort<T> {
    private readonly comparator;
    private n;
    private left;
    private right;
    private largest;
    private tmp;
    constructor(comparator: (a: T, b: T) => number);
    sort(array: T[]): void;
    private buildHeap;
    private maxHeap;
    private exchange;
}
