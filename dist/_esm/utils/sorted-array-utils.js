export function binarySearch(array, item, comparator) {
    let m = 0;
    let n = array.length - 1;
    while (m <= n) {
        const k = (n + m) >> 1;
        const cmp = comparator(item, array[k]);
        if (cmp > 0) {
            m = k + 1;
        }
        else if (cmp < 0) {
            n = k - 1;
        }
        else {
            return k;
        }
    }
    return ~m;
}
export function sortedFind(array, el, compare) {
    const idx = binarySearch(array, el, compare);
    if (idx < 0) {
        return;
    }
    return array[idx];
}
export function sortedInsert(array, value, compare) {
    const idx = binarySearch(array, value, compare);
    const newIdx = idx < 0 ? ~idx : idx;
    array.splice(newIdx, 0, value);
    return newIdx;
}
export function sortedInsertAll(array, values, compare, skipDuplicates = false) {
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
export function sortedRemove(array, value, compare) {
    const idx = binarySearch(array, value, compare);
    if (idx < 0) {
        return;
    }
    const r = array[idx];
    array.splice(idx, 1);
    return r;
}
export function sortedPickAll(array, values, compare) {
    let i1 = 0;
    let i2 = 0;
    const r = [];
    while (i1 < values.length && i2 < array.length) {
        const id = values[i1];
        const f = array[i2];
        const cmp = compare(id, f);
        if (cmp > 0) {
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
            r.push(f);
            ++i1;
            ++i2;
        }
    }
    return r;
}
export function SortedDifference(array, values, compare) {
    let i1 = 0;
    let i2 = 0;
    const r = [];
    while (i1 < values.length && i2 < array.length) {
        const id = values[i1];
        const f = array[i2];
        const cmp = compare(id, f);
        if (cmp > 0) {
            r.push(f);
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
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
export function SortedPartition(array, values, compare) {
    let i1 = 0;
    let i2 = 0;
    const r1 = [];
    const r2 = [];
    while (i1 < values.length && i2 < array.length) {
        const id = values[i1];
        const f = array[i2];
        const cmp = compare(id, f);
        if (cmp > 0) {
            r2.push(f);
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
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
export function sortedMerge(array, values, compare) {
    let i1 = 0;
    let i2 = 0;
    const r = [];
    while (i1 < values.length && i2 < array.length) {
        const f1 = values[i1];
        const f2 = array[i2];
        const cmp = compare(f1, f2);
        if (cmp > 0) {
            r.push(f2);
            ++i2;
        }
        else if (cmp < 0) {
            r.push(f1);
            ++i1;
        }
        else {
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
//# sourceMappingURL=sorted-array-utils.js.map