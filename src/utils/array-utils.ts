
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