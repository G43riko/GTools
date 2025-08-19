export { occurrences } from "./occurences.ts";
export * from "./levenshtein.ts";
export * from "./jaro-winkler.ts";
export { removeAccentedCharacters } from "./remove-accented-characters.ts";

/**
 * Truncates a string to a maximum length and adds ellipsis ("...") if it exceeds that length.
 *
 * @param str - The string to truncate.
 * @param maxLength - Maximum allowed length of the result including the ellipsis.
 * @returns The truncated string with ellipsis if needed.
 *
 * @example
 * truncate("Hello world", 5);       // "He..."
 * truncate("Short", 10);           // "Short"
 */
export function truncate(str: string | undefined, maxLength: number): string {
    if (!str) {
        return "";
    }
    if (str.length <= maxLength) {
        return str;
    }
    if (maxLength <= 3) {
        return ".".repeat(maxLength); // handles very short limits
    }

    return str.slice(0, maxLength - 3) + "...";
}

/**
 * Calculates the Hamming distance between two strings of equal length.
 *
 * The Hamming distance is the number of positions at which the corresponding
 * characters are different. Typically used for comparing hash strings or
 * binary-like data.
 *
 * @param {string} hash1 - The first string to compare.
 * @param {string} hash2 - The second string to compare. Must be the same length as `hash1`.
 * @returns {number} The number of differing positions between `hash1` and `hash2`.
 *
 * @throws {Error} If the two input strings have different lengths.
 *
 * @example
 * hamming("1011101", "1001001"); // 2
 * hamming("karolin", "kathrin"); // 3
 */
export function hamming(hash1: string, hash2: string): number {
    if (hash1.length !== hash2.length) {
        throw new Error("Strings must be of equal length to compute Hamming distance");
    }
    return [...hash1].reduce(
        (acc, bit, i) => acc + (bit !== hash2[i] ? 1 : 0),
        0,
    );
}

/**
 * Performs a case-insensitive fuzzy search to check if `pattern`
 * exists as a subsequence within `str`.
 *
 * A subsequence means all characters of `pattern` must appear
 * in order within `str`, but not necessarily contiguously.
 *
 * @param {string} pattern - The search pattern to look for.
 * @param {string} str - The string to search within.
 * @returns {boolean} `true` if `pattern` is found as a subsequence of `str`, otherwise `false`.
 * @see fuzzySearchCaseSensitive
 * @example
 * fuzzySearch("cat", "concatenate"); // true
 * fuzzySearch("ctn", "concatenate"); // true
 * fuzzySearch("dog", "concatenate"); // false
 */
export function fuzzySearch(pattern: string, str: string): boolean {
    return fuzzySearchCaseSensitive(pattern.toLowerCase(), str.toLowerCase());
}

/**
 * Performs a case-sensitive fuzzy search to check if `pattern`
 * exists as a subsequence within `str`.
 *
 * Characters must appear in order but do not need to be adjacent.
 *
 * @param {string} pattern - The search pattern to look for.
 * @param {string} str - The string to search within.
 * @returns {boolean} `true` if `pattern` is found as a subsequence of `str`, otherwise `false`.
 *
 * @example
 * fuzzySearchCaseSensitive("cat", "concatenate"); // true
 * fuzzySearchCaseSensitive("CAT", "concatenate"); // false
 * fuzzySearchCaseSensitive("cne", "concatenate"); // true
 */
export function fuzzySearchCaseSensitive(
    pattern: string,
    str: string,
): boolean {
    let patternIdx = 0;
    let strIdx = 0;
    const patternLength = pattern.length;
    const strLength = str.length;

    while (patternIdx !== patternLength && strIdx !== strLength) {
        const patternChar = pattern.charAt(patternIdx);
        const strChar = str.charAt(strIdx);
        if (patternChar === strChar) {
            ++patternIdx;
        }
        ++strIdx;
    }

    return (
        patternLength !== 0 && strLength !== 0 && patternIdx === patternLength
    );
}
