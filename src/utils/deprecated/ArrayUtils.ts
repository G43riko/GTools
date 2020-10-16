import * as Arrays from "../array-utils";

/**
 * @deprecated use {@link Arrays} instead
 */
export class ArrayUtils {
    /**
     *
     * @example
     * const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     * const conditions = {age: 23, name: "Monica"}
     * where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     */
    public static where<T extends { [key: string]: any }>(array: T[], condition: any): T[] {
        return Arrays.where(array, condition);
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
    public static subArray<T = any>(array: T[], minIndex = 0, maxIndex = array.length - 1): T[] {
        return Arrays.subArray(array);
    }

    /**
     * Function return maximal value from numeric array
     *
     * @param array - array of numbers
     * @returns maximal number from array
     */
    public static max(array: number[]): number {
        return Arrays.max(array);
    }

    /**
     * Function return minimal value from numeric array
     *
     * @param array - array of numbers
     * @returns minimal number from array
     */
    public static min(array: number[]): number {
        return Arrays.min(array);
    }

    /**
     * Function return total value of all elements in numeric array
     *
     * @param array - array of numbers
     * @returns summary of all numbers in array
     */
    public static sum(array: number[]): number {
        return Arrays.sum(array);
    }

    /**
     * Function returns average of numeric array given as input
     *
     * @param array - array of numbers
     * @returns average of all numbers in array
     */
    public static avg(array: number[]): number {
        return Arrays.avg(array);
    }

    /**
     * Function join array by delimiter and append prefix and postfix
     *
     * @param array - not empty array
     * @param delimiter - character used for join elements in array
     * @param prefix - string append at the beginning of final string
     * @param postfix - string append at the end of final string
     * @returns final string
     */
    public static join<T>(array: T[], delimiter: string, prefix = "", postfix = ""): string {
        return Arrays.join(array, delimiter, prefix, postfix);
    }

    /**
     * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
     * @param array - not empty array
     * @returns last value from array
     */
    public static getLast<T = any>(array: T[]): T | undefined {
        return Arrays.getLast(array);
    }

    /**
     * Method returns random element from array
     *
     * @param array - not empty array
     * @returns random value from array
     */
    public static getRandom<T = any>(array: T[]): T | null {
        return Arrays.getRandomItem(array);
    }

    public static getNRandom<T = any>(array: T[], count: number): T[] {
        return Arrays.getNRandom(array, count);
    }

    /**
     * Method return copy of array with only distinct elements
     *
     * @param array - array with duplicate elements
     * @returns unique array
     */
    public static makeUnique<T = any>(array: T[]): T[] {
        return Arrays.makeUnique(array);
    }
}
