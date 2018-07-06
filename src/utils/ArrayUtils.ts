export class ArrayUtils {
    public static where(array: any[], condition: any): any[] {
        if (!Array.isArray(array)) {
            return array;
        }
        const result: any[] = [];

        if (typeof condition !== "object" || !condition) {
            return result;
        }
        array.forEach((e) => {
            let add = false;
            for (const key in condition) {
                if (condition.hasOwnProperty(key)) {
                    if (e[key] === condition[key]) {
                        add = true;
                        break;
                    }
                }
            }
            if (add) {
                result[result.length] = e;
            }
        });

        return result;
    }

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
     * @param {number[]} array
     * @returns {number}
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
     * @param {number[]} array
     * @returns {number}
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
     * @param {number[]} array
     * @returns {number}
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
     * @param {number[]} array
     * @returns {number}
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
     * @param {any[]} array
     * @param {string} delimiter
     * @param {string} prefix
     * @param {string} postfix
     * @returns {string}
     */
    public static join(array: any[], delimiter: string, prefix: string = "", postfix: string = ""): string {
        if (!Array.isArray(array)) {
            return prefix + array + postfix;
        }

        return prefix + array.join(delimiter) + postfix;
    }

    /**
     * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
     * @param {T[]} array
     * @returns {T | null}
     */
    public static getLast<T = any>(array: T[]): T | null {
        if (!Array.isArray(array)) {
            return array;
        }

        if (array.length === 0) {
            return null;
        }

        return array[array.length - 1];
    }

    /**
     * Method returns random element from array
     *
     * @param {T[]} args
     * @returns {T | null}
     */
    public static getRandom<T = any>(args: T[]): T | null {
        if (!Array.isArray(args)) {
            return args;
        }
        if (args.length === 0) {
            return null;
        }

        return args[Math.floor(Math.random() * args.length)];
    }

    /**
     * Method return copy of array with only distinct elements
     *
     * @param {T[]} array
     * @returns {T[]}
     */
    public static makeUnique<T = any>(array: T[]): T[] {
        if (!Array.isArray(array)) {
            return array;
        }

        return Array.from(new Set<T>(array));
    }
}
