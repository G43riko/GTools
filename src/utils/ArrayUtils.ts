export function isEmpty<T>(arr: T[]): boolean {
    return !Array.isArray(arr) || arr.length === 0;
}

export function isNotEmptyArray<T>(arr: T[]): boolean {
    return Array.isArray(arr) && arr.length > 0;
}

/**
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
        if (!Array.isArray(array)) {
            return array;
        }

        if (!condition || typeof condition !== "object") {
            return [];
        }

        const result: any[] = [];
        const conditionEntries = Object.entries(condition);

        array.forEach((e) => {
            const add = conditionEntries.some((conditionEntry) => e[conditionEntry[0]] === conditionEntry[1]);
            if (add) {
                result[result.length] = e;
            }
        });

        return result;
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
     */
    public static max(array: number[]): number {
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
     */
    public static min(array: number[]): number {
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
     * @param array - array of numbers
     * @returns summary of all numbers in array
     */
    public static sum(array: number[]): number {
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
     * @param array - array of numbers
     * @returns average of all numbers in array
     */
    public static avg(array: number[]): number {
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
     * @param array - not empty array
     * @param delimiter - character used for join elements in array
     * @param prefix - string append at the beginning of final string
     * @param postfix - string append at the end of final string
     * @returns final string
     */
    public static join<T>(array: T[], delimiter: string, prefix = "", postfix = ""): string {
        if (!Array.isArray(array)) {
            return prefix + array + postfix;
        }

        return prefix + array.join(delimiter) + postfix;
    }

    /**
     * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
     * @param array - not empty array
     * @returns last value from array
     */
    public static getLast<T = any>(array: T[]): T | undefined {
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
    public static getRandom<T = any>(array: T[]): T | null {
        if (!Array.isArray(array)) {
            return array;
        }
        if (array.length === 0) {
            return null;
        }

        return array[Math.floor(Math.random() * array.length)];
    }

    public static getNRandom<T = any>(args: T[], count: number): T[] {
        if (!Array.isArray(args)) {
            return args;
        }
        if (args.length === 0 || count === 0) {
            return [];
        }
        if (args.length <= count) {
            return args;
        }

        const result = new Set<T>();

        while (result.size <= count) {
            const randomItem = ArrayUtils.getRandom<T>(args);
            if (randomItem) {
                result.add(randomItem);
            }
        }

        return Array.from<T>(result);
    }

    /**
     * Method return copy of array with only distinct elements
     *
     * @param array - array with duplicate elements
     * @returns unique array
     */
    public static makeUnique<T = any>(array: T[]): T[] {
        if (!Array.isArray(array)) {
            return array;
        }

        return Array.from(new Set<T>(array));
    }
}
