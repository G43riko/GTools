/**
 * @class
 */
export declare class ArrayUtils {
    static where(array: any[], condition: any): any[];
    /**
     * Return sub array from array
     *
     * @param {T[]} array
     * @param {number} minIndex
     * @param {number} maxIndex
     * @returns {T[]} - sub array
     * @static
     */
    static subArray<T = any>(array: T[], minIndex?: number, maxIndex?: number): T[];
    /**
     * Function return maximal value from numeric array
     *
     * @param {number[]} array
     * @returns {number}
     */
    static max(array: number[]): number;
    /**
     * Function return minimal value from numeric array
     *
     * @param {number[]} array
     * @returns {number}
     */
    static min(array: number[]): number;
    /**
     * Function return total value of all elements in numeric array
     *
     * @param {number[]} array
     * @returns {number}
     */
    static sum(array: number[]): number;
    /**
     * Function returns average of numeric array given as input
     *
     * @param {number[]} array
     * @returns {number}
     */
    static avg(array: number[]): number;
    /**
     * Function join array by delimiter and append prefix and postfix
     *
     * @param {any[]} array
     * @param {string} delimiter
     * @param {string} prefix
     * @param {string} postfix
     * @returns {string}
     */
    static join(array: any[], delimiter: string, prefix?: string, postfix?: string): string;
    /**
     * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
     * @param {T[]} array
     * @returns {T | null}
     */
    static getLast<T = any>(array: T[]): T | null;
    /**
     * Method returns random element from array
     *
     * @param {T[]} args
     * @returns {T | null}
     */
    static getRandom<T = any>(args: T[]): T | null;
    static getNRandom<T = any>(args: T[], count: number): T[];
    /**
     * Method return copy of array with only distinct elements
     *
     * @param {T[]} array
     * @returns {T[]}
     */
    static makeUnique<T = any>(array: T[]): T[];
}
