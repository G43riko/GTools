const accentedLowerCharacters = "ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const normalLowerCharacters = "aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";

/**
 * String of unaccented characters (lowercase + uppercase) that correspond
 * to each character in {@link accentedCharacters} at the same position.
 */
export const normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();

/**
 * String of accented characters (lowercase + uppercase) that are mapped
 * to their plain equivalents in {@link normalCharacters}.
 */
export const accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();

const characterMap: { [key: string]: string } = {};

for (let i = 0; i < accentedCharacters.length; i++) {
    characterMap[accentedCharacters[i]] = normalCharacters[i];
}

/**
 * Replaces accented characters in a string with their plain ASCII equivalents.
 *
 * @param word - The input string that may contain accented characters.
 * @returns The string with all recognised accented characters replaced.
 *          Returns the original value unchanged when it is falsy (e.g. empty string).
 *
 * @example
 * ```ts
 * import { assertEquals } from "@std/assert";
 * import { removeAccentedCharacters } from "./remove-accented-characters.ts";
 *
 * assertEquals(removeAccentedCharacters("café"), "cafe");
 * assertEquals(removeAccentedCharacters("naïve"), "naive");
 * ```
 */
export function removeAccentedCharacters(word: string): string {
    if (!word) {
        return word;
    }

    return word.split("").map((char) => characterMap[char] || char).join("");
}
