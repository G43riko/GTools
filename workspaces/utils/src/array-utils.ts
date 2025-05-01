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

/**
 * Creates an array of pairs from an array-like object
 * 
 * @param arr - The array-like object to process
 * @returns An array of pairs
 * @throws Error if the array length is odd
 */
export function pairwiseArray<T>(arr: ArrayLike<T>): [T, T][] {
    if (arr.length < 2) {
        return [];
    }
    if (arr.length % 2 !== 0) {
        throw new Error("Array length must be even");
    }

    // Pre-allocate the result array with the correct size for better performance
    const pairCount = arr.length / 2;
    const result = new Array<[T, T]>(pairCount);

    for (let i = 0, j = 0; i < arr.length;) {
        result[j++] = [arr[i++], arr[i++]];
    }

    return result;
}

/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * 
 * @param array - The array to process
 * @param size - The length of each chunk
 * @returns The new array of chunks
 */
export function chunk<T>(array: readonly T[], size = 1): T[][] {
    if (size < 1) {
        throw new Error("Chunk size must be greater than 0");
    }

    const result: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
}

/**
 * Creates a duplicate-free version of an array, using strict equality for comparisons.
 * 
 * @param array - The array to inspect
 * @returns The new duplicate-free array
 */
export function unique<T>(array: readonly T[]): T[] {
    return [...new Set(array)];
}

/**
 * Creates an object composed of keys generated from the results of running
 * each element of collection through iteratee.
 * 
 * @param array - The array to iterate over
 * @param iteratee - The function invoked per iteration
 * @returns The composed aggregate object
 */
export function groupBy<Value, Key extends string | number | symbol>(
    array: readonly Value[],
    iteratee: (value: Value) => Key
): Record<Key, Value[]> {
    return array.reduce((result, value) => {
        const key = iteratee(value);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(value);
        return result;
    }, {} as Record<Key, Value[]>);
}

/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 * The original array is split into two arrays: one with elements that pass and one with elements that fail.
 * 
 * @param array - The array to partition
 * @param predicate - The function invoked per iteration
 * @returns An array of two arrays: elements that passed and elements that failed
 */
export function partition<T>(
    array: readonly T[], 
    predicate: (value: T) => boolean
): readonly [pass: T[], fail: T[]] {
        const pass: T[] = [];
        const fail: T[] = [];

        for (const item of array) {
            (predicate(item) ? pass : fail).push(item);
        }

        return [pass, fail];
    }

/**
 * Creates a new array with the elements in random order.
 * Uses the Fisher-Yates shuffle algorithm.
 * 
 * @param array - The array to shuffle
 * @returns A new array with elements in random order
 */
export function shuffle<T>(array: readonly T[]): T[] {
    // Pre-allocate the result array with the correct size for better performance
    const length = array.length;
    const result = new Array<T>(length);

    // Copy the array first (faster than spread for large arrays)
    for (let i = 0; i < length; i++) {
        result[i] = array[i];
    }

    // Fisher-Yates shuffle algorithm
    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements using a temp variable (faster than destructuring for primitive types)
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }

    return result;
}
