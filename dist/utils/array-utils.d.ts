/**
 *
 * @example
 *  const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 *  const conditions = {age: 23, name: "Monica"}
 *  where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 */
export declare function where<T extends Record<string, unknown>>(array: T[], condition: Partial<T>): T[];
/**
 * @example
 *  compareArrays(["a", "b", "c"], ["a", "b", "c"]) => true
 *  compareArrays([{v: "a"}, {v: "b"}, {v: "c"}], [{v: "a"}, {v: "b"}, {v: "c"}]) => false
 *  compareArrays([{v: "a"}, {v: "b"}, {v: "c"}], [{v: "a"}, {v: "b"}, {v: "c"}], (a, b) => a.v === b.v) => true
 */
export declare function compareArrays<T>(prev: T[], act: T[], comparator?: (a: T, b: T) => boolean): boolean;
/**
 * @example
 *  groupByLast([{a: "a", b: "A"}, {a: "b", b: "B"}, {a: "c", b: "C"}, {a: "a", b: "D"}], "a") ==> {a: {a: "a", b: "D"}, b: {a: "b", b: "B"}, c: {a: "c", b: "C"}}
 */
export declare function groupByLast<T, S extends keyof T>(arr: T[], key: S): {
    [k in S]: T;
};
/**
 *
 * @example
 *  analyzeArrayChanges(["a", "b", "c"], ["a", "b", "c"]) ==> {toAdd: [], toRemove: []}
 *  analyzeArrayChanges(["a", "b", "c"], ["b", "c", "d"]) ==> {toAdd: ["d"], toRemove: ["a"]}
 */
export declare function analyzeArrayChanges<T>(prev: T[], act: T[], comparator?: (a: T, b: T) => boolean): {
    toAdd: T[];
    toRemove: T[];
};
/**
 * Return sub array from array
 *
 * @deprecated use {@link Array.prototype.slice} instead
 * @param array - input array
 * @param minIndex - start index
 * @param maxIndex - end index
 * @returns final array
 */
export declare function subArray<T = any>(array: T[], minIndex?: number, maxIndex?: number): T[];
/**
 * Function return maximal value from numeric array
 *
 * @param array - array of numbers
 * @returns maximal number from array
 * @deprecated use {@link Math.max} instead
 */
export declare function max(array: number[]): number;
/**
 * Function return minimal value from numeric array
 *
 * @param array - array of numbers
 * @returns minimal number from array
 * @deprecated use {@link Math.min} instead
 */
export declare function min(array: number[]): number;
/**
 * Function return total value of all elements in numeric array
 * @example
 *  sum([1, 2, 3, 4, 5]) => 15
 * @param array - array of numbers
 * @returns summary of all numbers in array
 */
export declare function sum(array: number[]): number;
/**
 * Function returns average of numeric array given as input
 * @example
 *  avg([1, 2, 3, 4, 5]) => 3
 * @param array - array of numbers
 * @returns average of all numbers in array
 */
export declare function avg(array: number[]): number;
/**
 * Function join array by delimiter and append prefix and postfix
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
export declare function join<T>(array: T[], delimiter: string, prefix?: string, postfix?: string): string;
/**
 * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
 * @example
 *  getLast([]) => undefined
 *  getLast(["a", "b"]) => b
 *  getLast([5, 6]) => 6
 * @param array - not empty array
 * @returns last value from array
 */
export declare function getLast<T>(array: T[]): T | undefined;
/**
 * Method returns random element from array
 *
 * @param array - not empty array
 * @returns random value from array
 */
export declare function getRandomItem<T = unknown>(array: T[]): T | null;
export declare function getNRandom<T>(args: T[], count: number): T[];
/**
 * Method return copy of array with only distinct elements
 * @example
 *  makeUnique([5, 5, 3, 2, 1, 4, 5, 4]) ==> [5, 3, 2, 1, 4]
 *  makeUnique(["5", "5", "3", "2", "1", "4", "5", "4"]) ==> ["5", "3", "2", "1", "4"]
 * @param array - array with duplicate elements
 * @returns unique array
 */
export declare function makeUnique<T>(array: T[]): T[];
export declare function createFilledArray<T>(length: number, provider: (() => T) | T): T[];
/**
 * Combine 2 array each other
 */
export declare function eachOther<T>(arr: T[], callback: (a: T, b: T) => void): void;
export declare function mergeArrays2<S, T, R>(arr1: S[], arr2: T[], callback: (item1: S, item2: T) => R): R[];
export declare function mergeArrays3<S, T, U, R>(arr1: S[], arr2: T[], arr3: U[], callback: (item1: S, item2: T, item3: U) => R): R[];
//# sourceMappingURL=array-utils.d.ts.map