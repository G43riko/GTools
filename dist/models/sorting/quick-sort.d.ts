/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GQuickSort.java
 */
export declare class QuickSort<T> {
    private readonly comparator;
    private array;
    private tmpValue;
    constructor(comparator: (a: T, b: T) => number);
    sort(array: T[]): void;
    private quickSort;
    private exchangeNumbers;
}
//# sourceMappingURL=quick-sort.d.ts.map