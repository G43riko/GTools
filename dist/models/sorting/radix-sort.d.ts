/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GRadixSort.java
 *
 * Only useful for fix length integer keys.
 */
export declare class RadixSort<T> {
    private readonly mapper;
    constructor(mapper: (item: T) => number);
    sort(a: T[]): void;
    sort2(a: number[]): void;
}
//# sourceMappingURL=radix-sort.d.ts.map