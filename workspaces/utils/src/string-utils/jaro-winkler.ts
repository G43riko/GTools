/**
 * Computes the Jaro-Winkler similarity between two strings.
 * The similarity is a value between 0 and 1, where:
 * - 1 means the strings are identical
 * - 0 means the strings are completely dissimilar
 *
 * @param {string} s1 - First string to compare.
 * @param {string} s2 - Second string to compare.
 * @returns {number} - A similarity score between 0 and 1.
 *
 * @example
 * jaroWinkler("martha", "marhta"); // ~0.961
 * jaroWinkler("dixon", "dicksonx"); // ~0.813
 */
export function jaroWinkler(s1: string, s2: string): number {
    const m = getMatchingCharacters(s1, s2);
    const t = getTranspositions(s1, s2, m);

    const mLen = m.length;
    if (mLen === 0) {
        return 0;
    }

    const jaro = (mLen / s1.length +
        mLen / s2.length +
        (mLen - t / 2) / mLen) / 3;

    // Jaro-Winkler adjustment
    const prefixLength = getCommonPrefixLength(s1, s2);
    const scalingFactor = 0.1; // Default Winkler factor

    return jaro + prefixLength * scalingFactor * (1 - jaro);
}

/**
 * Finds matching characters between two strings within a matching window.
 *
 * @param {string} s1 - First string.
 * @param {string} s2 - Second string.
 * @returns {string[]} - Array of matching characters.
 * @private
 */
function getMatchingCharacters(s1: string, s2: string): string[] {
    const matchDistance = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;
    const matchedS2 = Array(s2.length).fill(false);

    const matches: string[] = [];

    for (let i = 0; i < s1.length; i++) {
        const start = Math.max(0, i - matchDistance);
        const end = Math.min(i + matchDistance + 1, s2.length);

        for (let j = start; j < end; j++) {
            if (!matchedS2[j] && s1[i] === s2[j]) {
                matches.push(s1[i]);
                matchedS2[j] = true;
                break;
            }
        }
    }

    return matches;
}

/**
 * Calculates the number of transpositions between two strings,
 * based on their matching characters.
 *
 * @param {string} s1 - First string.
 * @param {string} s2 - Second string.
 * @param {string[]} m - Matching characters.
 * @returns {number} - The number of transpositions.
 * @private
 */
function getTranspositions(s1: string, s2: string, _m: string[]): number {
    const s1Matches = [];
    const s2Matches = [];
    const matchDistance = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;
    const matchedS2 = Array(s2.length).fill(false);

    for (let i = 0; i < s1.length; i++) {
        const start = Math.max(0, i - matchDistance);
        const end = Math.min(i + matchDistance + 1, s2.length);

        for (let j = start; j < end; j++) {
            if (!matchedS2[j] && s1[i] === s2[j]) {
                s1Matches.push(s1[i]);
                s2Matches.push(s2[j]);
                matchedS2[j] = true;
                break;
            }
        }
    }

    let transpositions = 0;
    for (let i = 0; i < s1Matches.length; i++) {
        if (s1Matches[i] !== s2Matches[i]) {
            transpositions++;
        }
    }

    return transpositions;
}

/**
 * Gets the length of the common prefix between two strings,
 * capped at 4 characters as per Jaro-Winkler.
 *
 * @param {string} s1 - First string.
 * @param {string} s2 - Second string.
 * @returns {number} - Length of the common prefix (0–4).
 * @private
 */
function getCommonPrefixLength(s1: string, s2: string): number {
    const maxPrefixLength = 4;
    let n = 0;
    for (; n < maxPrefixLength; n++) {
        if (s1[n] !== s2[n]) break;
    }
    return n;
}
