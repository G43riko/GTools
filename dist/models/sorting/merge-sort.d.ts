/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GMergeSort.java
 */
export declare class MergeSort<T> {
    private readonly comparator;
    private array;
    private tempMergeArray;
    constructor(comparator: (a: T, b: T) => number);
    sort(array: T[]): void;
    private doMergeSort;
    private mergeParts;
}
//# sourceMappingURL=merge-sort.d.ts.map