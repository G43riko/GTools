/**
 * If return positive value so this number is index of the element
 * but if it returns negative value than you can use ~result to determine index of new element
 *
 * @example
 *  binarySearch(["b",  "d"], "a", (a, b) => a.localeCompare(b)) => -1
 *  binarySearch(["b",  "d"], "b", (a, b) => a.localeCompare(b)) => 0
 *  binarySearch(["b",  "d"], "c", (a, b) => a.localeCompare(b)) => -2
 *  binarySearch(["b",  "d"], "d", (a, b) => a.localeCompare(b)) => 1
 *  binarySearch(["b",  "d"], "e", (a, b) => a.localeCompare(b)) => -3
 */
export function binarySearch<T>(array: readonly T[], item: T, comparator: (a: T, b: T) => number): number {
    let m = 0;
    let n = array.length - 1;

    while (m <= n) {
        const k = (n + m) >> 1;
        const cmp = comparator(item, array[k]);

        if (cmp > 0) {
            m = k + 1;
        } else if (cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }

    return ~m;
}

/**
 *  sortedFind(["a", "c"], "a", (a, b) => a.localeCompare(b)) => a
 *  sortedFind(["a", "c"], "b", (a, b) => a.localeCompare(b)) => undefined
 *  sortedFind(["a", "c"], "c", (a, b) => a.localeCompare(b)) => c
 */
export function sortedFind<T>(
    array: readonly T[],
    el: T,
    compare: (left: T, right: T) => number,
): T | undefined {
    const idx = binarySearch(array, el, compare);
    if (idx < 0) {
        return;
    }

    return array[idx];
}

export function sortedInsert<T>(array: T[], value: T, compare: (left: T, right: T) => number): number {
    const idx = binarySearch(array, value, compare);
    const newIdx = idx < 0 ? ~idx : idx;
    array.splice(newIdx, 0, value);

    return newIdx;
}

// Insert all values from the 'values' into 'array'.
// Both 'array' and 'values' are expected to be sorted.
export function sortedInsertAll<T>(
    array: T[],
    values: T[],
    compare: (left: T, right: T) => number,
    skipDuplicates = false,
): number {
    let actualIndex = 0;
    for (const value of values) {
        actualIndex = binarySearch(array.slice(actualIndex), value, compare);
        if (skipDuplicates && actualIndex >= 0) {
            break;
        }
        if (actualIndex < 0) {
            actualIndex = ~actualIndex;
        }
        array.splice(actualIndex, 0, value);
    }

    return values.length;
}

export function sortedRemove<T>(array: T[], value: T, compare: (left: T, right: T) => number): T | undefined {
    const idx = binarySearch(array, value, compare);
    if (idx < 0) {
        return;
    }
    const r = array[idx];

    // tslint:disable-next-line:no-commented-code
    // pullAt(array, idx);
    array.splice(idx, 1);

    return r;
}

/**
 * Picks values from the 'array' that are present in 'values'.
 * Both 'array' and 'values' are expected to be sorted.
 *
 * @example
 *  sortedPickAll(["a", "b", "c"], ["b", "c", "d"], (a, b) => a.localeCompare(b)) ==> ["b", "c"]
 */
export function sortedPickAll<T>(
    array: readonly T[],
    values: readonly T[],
    compare: (left: T, right: T) => number,
): T[] {
    let i1 = 0;
    let i2 = 0;
    const r: T[] = [];
    while (i1 < values.length && i2 < array.length) {
        const id = values[i1];
        const f = array[i2];
        const cmp = compare(id, f);
        if (cmp > 0) {
            ++i2;
        } else if (cmp < 0) {
            ++i1;
        } else {
            r.push(f);
            ++i1;
            ++i2;
        }
    }

    return r;
}

/**
 * Picks values from the 'array' that are NOT present in 'values'.
 * Both 'array' and 'values' are expected to be sorted.
 *
 * @example
 *  SortedDifference(["a", "b", "c"], ["b", "c", "d"], (a, b) => a.localeCompare(b)) ==> ["a"]
 */
export function SortedDifference<T>(
    array: readonly T[],
    values: readonly T[],
    compare: (left: T, right: T) => number,
): T[] {
    let i1 = 0;
    let i2 = 0;
    const r: T[] = [];
    while (i1 < values.length && i2 < array.length) {
        const id = values[i1];
        const f = array[i2];
        const cmp = compare(id, f);
        if (cmp > 0) {
            r.push(f);
            ++i2;
        } else if (cmp < 0) {
            ++i1;
        } else {
            ++i1;
            ++i2;
        }
    }
    while (i2 < array.length) {
        const f = array[i2];
        r.push(f);
        ++i2;
    }

    return r;
}

// Splits values of the 'array' to two arrays.
// Those that are present in 'values' and those that are not.
// Both 'array' and 'values' are expected to be sorted.
export function SortedPartition<T>(
    array: readonly T[],
    values: readonly T[],
    compare: (left: T, right: T) => number,
): [T[], T[]] {
    let i1 = 0;
    let i2 = 0;
    const r1: T[] = [];
    const r2: T[] = [];
    while (i1 < values.length && i2 < array.length) {
        const id = values[i1];
        const f = array[i2];
        const cmp = compare(id, f);
        if (cmp > 0) {
            r2.push(f);
            ++i2;
        } else if (cmp < 0) {
            ++i1;
        } else {
            r1.push(f);
            ++i1;
            ++i2;
        }
    }
    while (i2 < array.length) {
        const f = array[i2];
        r2.push(f);
        ++i2;
    }

    return [r1, r2];
}

/**
 * Merges values from the 'array' and 'values' into one sorted array.
 * Both 'array' and 'values' are expected to be sorted.
 *
 * @example
 *  sortedMerge(["a", "c", "e"], ["b", "d", "f"], (a, b) => a.localeCompare(b)) ==> ["a", "b", "c", "d", "e"]
 */
export function sortedMerge<T>(
    array: readonly T[],
    values: readonly T[],
    compare: (left: T, right: T) => number,
): T[] {
    let i1 = 0;
    let i2 = 0;
    const r: T[] = [];
    while (i1 < values.length && i2 < array.length) {
        const f1 = values[i1];
        const f2 = array[i2];
        const cmp = compare(f1, f2);
        if (cmp > 0) {
            r.push(f2);
            ++i2;
        } else if (cmp < 0) {
            r.push(f1);
            ++i1;
        } else {
            r.push(f1);
            ++i1;
            ++i2;
        }
    }
    while (i1 < values.length) {
        const f = values[i1];
        r.push(f);
        ++i1;
    }
    while (i2 < array.length) {
        const f = array[i2];
        r.push(f);
        ++i2;
    }

    return r;
}
