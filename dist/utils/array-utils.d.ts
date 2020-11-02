/**
 *
 * @example
 * const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 * const conditions = {age: 23, name: "Monica"}
 * where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 */
export declare function where<T extends object>(array: T[], condition: Partial<T>): T[];
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
 *
 * @param array - array of numbers
 * @returns summary of all numbers in array
 */
export declare function sum(array: number[]): number;
/**
 * Function returns average of numeric array given as input
 *
 * @param array - array of numbers
 * @returns average of all numbers in array
 */
export declare function avg(array: number[]): number;
/**
 * Function join array by delimiter and append prefix and postfix
 *
 * @param array - not empty array
 * @param delimiter - character used for join elements in array
 * @param prefix - string append at the beginning of final string
 * @param postfix - string append at the end of final string
 * @returns final string
 */
export declare function join<T>(array: T[], delimiter: string, prefix?: string, postfix?: string): string;
/**
 * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
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
 *
 * @param array - array with duplicate elements
 * @returns unique array
 */
export declare function makeUnique<T>(array: T[]): T[];
/**
 * Combine 2 array each other
 * @param arr
 * @param callback
 */
export declare function eachOther<T>(arr: T[], callback: (a: T, b: T) => void): void;
