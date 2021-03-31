/**
 * If return positive value so this number is index of the element
 * but if it returns negative value than you can use ~result to determine index of new element
 * @example
 *  binarySearch(["b",  "d"], "a", (a, b) => a.localeCompare(b)) => -1
 *  binarySearch(["b",  "d"], "b", (a, b) => a.localeCompare(b)) => 0
 *  binarySearch(["b",  "d"], "c", (a, b) => a.localeCompare(b)) => -2
 *  binarySearch(["b",  "d"], "d", (a, b) => a.localeCompare(b)) => 1
 *  binarySearch(["b",  "d"], "e", (a, b) => a.localeCompare(b)) => -3
 */
export declare function binarySearch<T>(array: readonly T[], item: T, comparator: (a: T, b: T) => number): number;
/**
 *  sortedFind(["a", "c"], "a", (a, b) => a.localeCompare(b)) => a
 *  sortedFind(["a", "c"], "b", (a, b) => a.localeCompare(b)) => undefined
 *  sortedFind(["a", "c"], "c", (a, b) => a.localeCompare(b)) => c
 */
export declare function sortedFind<T>(array: readonly T[], el: T, compare: (left: T, right: T) => number): T | undefined;
export declare function sortedInsert<T>(array: T[], value: T, compare: (left: T, right: T) => number): number;
export declare function sortedInsertAll<T>(array: T[], values: T[], compare: (left: T, right: T) => number, skipDuplicates?: boolean): number;
export declare function sortedRemove<T>(array: T[], value: T, compare: (left: T, right: T) => number): T | undefined;
/**
 * Picks values from the 'array' that are present in 'values'.
 * Both 'array' and 'values' are expected to be sorted.
 * @example
 *  sortedPickAll(["a", "b", "c"], ["b", "c", "d"], (a, b) => a.localeCompare(b)) ==> ["b", "c"]
 */
export declare function sortedPickAll<T>(array: readonly T[], values: readonly T[], compare: (left: T, right: T) => number): T[];
/**
 * Picks values from the 'array' that are NOT present in 'values'.
 * Both 'array' and 'values' are expected to be sorted.
 * @example
 *  SortedDifference(["a", "b", "c"], ["b", "c", "d"], (a, b) => a.localeCompare(b)) ==> ["a"]
 */
export declare function SortedDifference<T>(array: readonly T[], values: readonly T[], compare: (left: T, right: T) => number): T[];
export declare function SortedPartition<T>(array: readonly T[], values: readonly T[], compare: (left: T, right: T) => number): [T[], T[]];
/**
 * Merges values from the 'array' and 'values' into one sorted array.
 * Both 'array' and 'values' are expected to be sorted.
 * @example
 *  sortedMerge(["a", "c", "e"], ["b", "d", "f"], (a, b) => a.localeCompare(b)) ==> ["a", "b", "c", "d", "e"]
 */
export declare function sortedMerge<T>(array: readonly T[], values: readonly T[], compare: (left: T, right: T) => number): T[];
//# sourceMappingURL=sorted-array-utils.d.ts.map