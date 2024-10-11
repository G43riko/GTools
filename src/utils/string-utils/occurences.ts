/**
 * Returns number of occurrences of substring
 * @param text - text
 * @param key - searched substring
 * @param overlapping - allows math overlapping
 *
 * @example 
 * ```ts
 * import { assertEquals } from "jsr:@std/assert/equals";
 * 
 * assertEquals(occurrences("foofoofoo", "bar"), 0);
 * assertEquals(occurrences("foofoofoo", "foo"), 3);
 * assertEquals(occurrences("foofoofoo", "foofoo"), 1);
 * assertEquals(occurrences("foofoofoo", "foofoo", true), 2);
 * ```
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
