export declare function isEmpty<T>(arr: T[]): boolean;
export declare function isNotEmptyArray<T>(arr: T[]): boolean;
/**
 */
export declare class ArrayUtils {
    /**
     *
     * @example
     * const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     * const conditions = {age: 23, name: "Monica"}
     * where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     */
    static where<T extends {
        [key: string]: any;
    }>(array: T[], condition: any): T[];
    /**
     * Return sub array from array
     *
     * @deprecated use {@link Array.prototype.slice} instead
     * @param array - input array
     * @param minIndex - start index
     * @param maxIndex - end index
     * @returns final array
     */
    static subArray<T = any>(array: T[], minIndex?: number, maxIndex?: number): T[];
    /**
     * Function return maximal value from numeric array
     *
     * @param array - array of numbers
     * @returns maximal number from array
     */
    static max(array: number[]): number;
    /**
     * Function return minimal value from numeric array
     *
     * @param array - array of numbers
     * @returns minimal number from array
     */
    static min(array: number[]): number;
    /**
     * Function return total value of all elements in numeric array
     *
     * @param array - array of numbers
     * @returns summary of all numbers in array
     */
    static sum(array: number[]): number;
    /**
     * Function returns average of numeric array given as input
     *
     * @param array - array of numbers
     * @returns average of all numbers in array
     */
    static avg(array: number[]): number;
    /**
     * Function join array by delimiter and append prefix and postfix
     *
     * @param array - not empty array
     * @param delimiter - character used for join elements in array
     * @param prefix - string append at the beginning of final string
     * @param postfix - string append at the end of final string
     * @returns final string
     */
    static join<T>(array: T[], delimiter: string, prefix?: string, postfix?: string): string;
    /**
     * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
     * @param array - not empty array
     * @returns last value from array
     */
    static getLast<T = any>(array: T[]): T | undefined;
    /**
     * Method returns random element from array
     *
     * @param array - not empty array
     * @returns random value from array
     */
    static getRandom<T = any>(array: T[]): T | null;
    static getNRandom<T = any>(args: T[], count: number): T[];
    /**
     * Method return copy of array with only distinct elements
     *
     * @param array - array with duplicate elements
     * @returns unique array
     */
    static makeUnique<T = any>(array: T[]): T[];
}
