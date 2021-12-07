/**
 *
 * @example
 *  const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 *  const conditions = {age: 23, name: "Monica"}
 *  where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 */
export function where<T extends Record<string, unknown>>(array: T[], condition: Partial<T>): T[] {
    if (!Array.isArray(array)) {
        return array;
    }

    if (!condition || typeof condition !== "object") {
        return [];
    }

    const result: T[]      = [];
    const conditionEntries = Object.entries(condition);

    array.forEach((e) => {
        const add = conditionEntries.some((conditionEntry) => e[conditionEntry[0] as keyof T] === conditionEntry[1]);
        if (add) {
            result[result.length] = e;
        }
    });

    return result;
}

/**
 * @example
 *  compareArrays(["a", "b", "c"], ["a", "b", "c"]) => true
 *  compareArrays([{v: "a"}, {v: "b"}, {v: "c"}], [{v: "a"}, {v: "b"}, {v: "c"}]) => false
 *  compareArrays([{v: "a"}, {v: "b"}, {v: "c"}], [{v: "a"}, {v: "b"}, {v: "c"}], (a, b) => a.v === b.v) => true
 */
export function compareArrays<T>(
    prev: T[],
    act: T[],
    comparator: (a: T, b: T) => boolean = (a, b) => a === b,
): boolean {
    if (prev.length !== act.length) {
        return false;
    }

    for (let i = 0; i < prev.length; i++) {
        if (!comparator(prev[i], act[i])) {
            return false;
        }
    }

    return true;
}

/**
 * @example
 *  groupByLast([{a: "a", b: "A"}, {a: "b", b: "B"}, {a: "c", b: "C"}, {a: "a", b: "D"}], "a") ==> {a: {a: "a", b: "D"}, b: {a: "b", b: "B"}, c: {a: "c", b: "C"}}
 */
export function groupByLast<T, S extends keyof T>(arr: T[], key: S): { [k in S]: T } {
    return arr.reduce((acc, curr) => Object.assign({}, acc, {[curr[key] as any]: curr}), {}) as { [k in S]: T };
}

/**
 *
 * @example
 *  analyzeArrayChanges(["a", "b", "c"], ["a", "b", "c"]) ==> {toAdd: [], toRemove: []}
 *  analyzeArrayChanges(["a", "b", "c"], ["b", "c", "d"]) ==> {toAdd: ["d"], toRemove: ["a"]}
 */
export function analyzeArrayChanges<T>(
    prev: T[],
    act: T[],
    comparator: (a: T, b: T) => boolean = (a, b) => a === b,
): { toAdd: T[]; toRemove: T[] } {
    const existingPrevIndices: { [key: number]: true } = {};

    const toRemove: T[] = [];
    const toAdd: T[]    = [];
    act.forEach((e) => {
        const prevIndex = prev.findIndex((item) => comparator(e, item));

        if (prevIndex < 0) {
            toAdd.push(e);
        } else {
            existingPrevIndices[prevIndex] = true;
        }
    });

    prev.forEach((e, i) => {
        if (i in existingPrevIndices) {
            return;
        }
        toRemove.push(e);
    });

    return {toAdd, toRemove};
}

/**
 * Return sub array from array
 *
 * @deprecated use {@link Array.prototype.slice} instead
 * @param array - input array
 * @param minIndex - start index
 * @param maxIndex - end index
 * @returns final array
 */
export function subArray<T = any>(array: T[], minIndex = 0, maxIndex = array.length - 1): T[] {
    if (!Array.isArray(array)) {
        return array;
    }
    const result: T[] = [];
    const final       = array.length < maxIndex ? array.length - 1 : maxIndex;
    for (let i = minIndex; i <= final; i++) {
        result[result.length] = array[i];
    }

    return result;
}

/**
 * Function return maximal value from numeric array
 *
 * @param array - array of numbers
 * @returns maximal number from array
 * @deprecated use {@link Math.max} instead
 */
export function max(array: number[]): number {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }

    return array.reduce((a, b) => a > b ? a : b);
}

/**
 * Function return minimal value from numeric array
 *
 * @param array - array of numbers
 * @returns minimal number from array
 * @deprecated use {@link Math.min} instead
 */
export function min(array: number[]): number {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }

    return array.reduce((a, b) => a < b ? a : b);
}

/**
 * Function return total value of all elements in numeric array
 *
 * @example
 *    sum([1, 2, 3, 4, 5]) => 15
 * @param array - array of numbers
 * @returns summary of all numbers in array
 */
export function sum(array: number[]): number {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }

    return array.reduce((a, b) => a + b);
}

/**
 * Function returns average of numeric array given as input
 *
 * @example
 *  avg([1, 2, 3, 4, 5]) => 3
 * @param array - array of numbers
 * @returns average of all numbers in array
 */
export function avg(array: number[]): number {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }

    return array.reduce((a, b) => a + b) / array.length;
}

/**
 * Function join array by delimiter and append prefix and postfix
 *
 * @example
 *  join(["a", "b", "c", "d"], "") => abcd
 *  join(["a", "b", "c", "d"], "=") => a=b=c=d
 *  join(["a", "b", "c", "d"], "=", ">>", "<<") => >>a=b=c=d<<
 * @param array - not empty array
 * @param delimiter - character used for join elements in array
 * @param prefix - string append at the beginning of final string
 * @param postfix - string append at the end of final string
 * @returns final string
 */
export function join<T>(array: T[], delimiter: string, prefix = "", postfix = ""): string {
    if (!Array.isArray(array)) {
        return prefix + String(array) + postfix;
    }

    return prefix + array.join(delimiter) + postfix;
}

/**
 * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
 *
 * @example
 *  getLast([]) => undefined
 *  getLast(["a", "b"]) => b
 *  getLast([5, 6]) => 6
 * @param array - not empty array
 * @returns last value from array
 */
export function getLast<T>(array: T[]): T | undefined {
    if (!Array.isArray(array)) {
        return array;
    }

    return array[array.length - 1];
}

/**
 * Method returns random element from array
 *
 * @param array - not empty array
 * @returns random value from array
 */
export function getRandomItem<T = unknown>(array:  T[]): T | null {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return null;
    }

    return array[Math.floor(Math.random() * array.length)];
}

export function getNRandom<T>(args: T[], count: number): T[] {
    if (!Array.isArray(args)) {
        return args;
    }
    if (args.length === 0 || count === 0) {
        return [];
    }
    if (args.length <= count) {
        return args;
    }
    if (Math.random() < 2) {
        throw new Error("Not implemented because of infinity loop");
    }

    const result = new Set<T>();

    while (result.size <= count) {
        const randomItem = getRandomItem<T>(args);
        if (randomItem) {
            result.add(randomItem);
        }
    }

    return Array.from<T>(result);
}

/**
 * Method return copy of array with only distinct elements
 *
 * @example
 *  makeUnique([5, 5, 3, 2, 1, 4, 5, 4]) ==> [5, 3, 2, 1, 4]
 *  makeUnique(["5", "5", "3", "2", "1", "4", "5", "4"]) ==> ["5", "3", "2", "1", "4"]
 * @param array - array with duplicate elements
 * @returns unique array
 */
export function makeUnique<T>(array: T[]): T[] {
    if (!Array.isArray(array)) {
        return array;
    }

    return Array.from(new Set<T>(array));
}

export function createFilledArray<T>(length: number, provider: ((index: number) => T) | T): T[] {
    if (typeof provider === "function") {
        return new Array<T | null>(length).fill(null).map((_, i) => (provider as (index: number) => T)(i));
    }

    return new Array<T>(length).fill(provider);
}

/**
 * Combine 2 array each other
 */
export function eachOther<T>(arr: T[], callback: (a: T, b: T) => void): void {
    arr.forEach((e, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            callback(e, arr[j]);
        }
    });
}

// tslint:disable:no-for-each-push
export function mergeArrays2<S, T, R>(arr1: S[], arr2: T[], callback: (item1: S, item2: T) => R): R[] {
    const result: R[] = [];
    arr1.forEach((item1) => {
        arr2.forEach((item2) => {
            result.push(callback(item1, item2));
        });
    });

    return result;
}

export function mergeArrays3<S, T, U, R>(arr1: S[], arr2: T[], arr3: U[], callback: (item1: S, item2: T, item3: U) => R): R[] {
    const result: R[] = [];
    arr1.forEach((item1) => {
        arr2.forEach((item2) => {
            arr3.forEach((item3) => {
                result.push(callback(item1, item2, item3));
            });
        });
    });

    return result;
}

export function findArrayDiff<T>(arrA: T[], arrB: T[], comparator: (a: T, b: T) => number, merger?: (a: T, b: T) => T): { same: T[]; missingInA: T[]; missingInB: T[] } {
    const sortedArrayA = [...arrA].sort(comparator);
    const sortedArrayB = [...arrB].sort(comparator);

    const same: T[]       = [];
    const missingInA: T[] = [];
    const missingInB: T[] = [];
    let i                 = 0;
    let j                 = 0;
    while (i < sortedArrayA.length || j < sortedArrayB.length) {
        if (i === sortedArrayA.length) {
            missingInA.push(sortedArrayB[j]);
            j++;
            continue;
        }
        if (j === sortedArrayB.length) {
            missingInB.push(sortedArrayA[i]);
            i++;
            continue;
        }
        const comparatorResult = comparator(sortedArrayA[i], sortedArrayB[j]);
        if (comparatorResult === 0) {
            same.push(merger ? merger(sortedArrayA[i], sortedArrayB[j]) : sortedArrayA[i]);
            i++;
            j++;
        } else if (comparatorResult < 0) {
            missingInB.push(sortedArrayA[i]);
            i++;
        } else if (comparatorResult > 0) {
            missingInA.push(sortedArrayB[j]);
            j++;
        }
    }

    return {same, missingInA, missingInB};
}

function _rowLength<T>(arr: T | T[] | T[][], fn: (a: number, b: number) => number, len0: number): number {
    if (Array.isArray(arr)) {
        if (Array.isArray(arr[0])) {
            let len = len0;
            for (const item of arr) {
                len = fn(len, (item as T[]).length);
            }

            return len;
        }

        return arr.length;
    }

    return 0;
}

export function maxRowLength<T>(arr: T | T[] | T[][]): number {
    return _rowLength(arr, Math.max, 0);
}

export function minRowLength<T>(arr: T | T[] | T[][]): number {
    return _rowLength(arr, Math.min, Infinity);
}
