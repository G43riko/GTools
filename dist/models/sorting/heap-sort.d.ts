/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GHeapSort.java
 */
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
//# sourceMappingURL=heap-sort.d.ts.map