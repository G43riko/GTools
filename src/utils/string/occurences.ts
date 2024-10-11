/**
 * Returns number of occurrences of substring
 *
 * @example
 *  occurrences("foofoofoo", "bar"); => 0
 *  occurrences("foofoofoo", "foo"); => 3
 *  occurrences("foofoofoo", "foofoo"); => 1
 *  occurrences("foofoofoo", "foofoo", true); => 2
 * @param text - text
 * @param key - searched substring
 * @param overlapping - allows math overlapping
 */
export function occurrences(text: string, key: string, overlapping = false): number {
    let index = text.indexOf(key);
    let counter = 0;
    const step = overlapping ? 1 : key.length;
    while (index >= 0) {
        counter++;
        index = text.indexOf(key, index + step);
    }

    return counter;
}

export function occurrencesOld(text: string, key: string): number {
    return (text.match(new RegExp(key, "g")) || []).length;
}
