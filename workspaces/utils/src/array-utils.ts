/**
 * Function return minimal value from numeric array
 *
 * @param array - array of numbers
 * @returns minimal number from array
 * @deprecated use {@link Math.min} instead
 */
export function min(array: readonly number[]): number {
    if (array.length === 0) {
        return NaN;
    }

    return array.reduce((a, b) => a < b ? a : b);
}


export function pairwiseArray<T>(arr: ArrayLike<T>): [T, T][] {
    if (arr.length < 2) {
        return [];
    }
    if (arr.length % 2 !== 0) {
        throw new Error("Array length must be even");
    }

    const result = new Array<[T, T]>();

    for (let i = 0; i < arr.length;) {
        result.push([arr[i++], arr[i++]]);
    }

    return result;
}