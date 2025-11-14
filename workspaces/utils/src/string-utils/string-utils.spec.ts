import { assertEquals } from "@std/assert";
import { expect } from "@std/expect";
import { occurrences, removeAccentedCharacters } from "./index.ts";
import { describe, it } from "@std/testing/bdd";
import { MockData } from "../mocks/mock-data.ts";
import { jaroWinkler } from "./jaro-winkler.ts";
import { levenshtein } from "./levenshtein.ts";
describe("StringUtils", () => {
    it("occurrences", () => {
        assertEquals(occurrences("I am the most expensive and the best IDE on the world", "the"), 3);
    });

    it("removeAccentedCharacters", () => {
        const testString =   "ąàáäâãåæăćčĉďęèéëeeĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
        const resultString = "aaaaaaaaacccdeeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";

        const finalTestString = testString + testString.toUpperCase();
        const finalResultString = resultString + resultString.toUpperCase();

        assertEquals(removeAccentedCharacters(finalTestString), finalResultString);
        assertEquals(removeAccentedCharacters(finalResultString), finalResultString);
        assertEquals(removeAccentedCharacters(MockData.charactersString), MockData.charactersString);
    });
    describe("levenshtein", () => {
        it("identical strings return 0", () => {
            expect(levenshtein("test", "test")).toBe(0);
            expect(levenshtein("", "")).toBe(0);
        });

        it("empty string comparisons", () => {
            expect(levenshtein("", "abc")).toBe(3);
            expect(levenshtein("abc", "")).toBe(3);
        });

        it("single character differences", () => {
            expect(levenshtein("a", "b")).toBe(1); // substitution
            expect(levenshtein("a", "aa")).toBe(1); // insertion
            expect(levenshtein("aa", "a")).toBe(1); // deletion
        });

        it("common examples", () => {
            expect(levenshtein("kitten", "sitting")).toBe(3);
            expect(levenshtein("flaw", "lawn")).toBe(2);
            expect(levenshtein("gumbo", "gambol")).toBe(2);
        });

        it("prefix and suffix differences", () => {
            expect(levenshtein("abc", "xbc")).toBe(1);
            expect(levenshtein("abc", "abx")).toBe(1);
            expect(levenshtein("abc", "xbcx")).toBe(2);
        });

        it("case sensitivity", () => {
            expect(levenshtein("abc", "ABC")).toBe(3);
        });

        it("longer string comparisons", () => {
            const str1 = "a".repeat(50);
            const str2 = "a".repeat(49) + "b";
            expect(levenshtein(str1, str2)).toBe(1);
        });
    });
    describe("jaroWinkler", () => {
        it("identical strings should return 1", () => {
            expect(jaroWinkler("test", "test")).toBe(1);
        });

        it("completely different strings should return 0", () => {
            expect(jaroWinkler("abc", "xyz")).toBe(0);
        });

        it("single character difference", () => {
            const score = jaroWinkler("martha", "marhta");
            expect(score).toBeGreaterThan(0.95);
            expect(score).toBeLessThanOrEqual(1);
        });

        it("similar but longer strings", () => {
            const score = jaroWinkler("dixon", "dicksonx");
            expect(score).toBeCloseTo(0.813, 2);
        });

        it("short strings with partial match", () => {
            const score = jaroWinkler("ab", "ac");
            expect(score).toBeGreaterThan(0);
            expect(score).toBeLessThan(1);
        });

        it("empty strings should return 0", () => {
            expect(jaroWinkler("", "")).toBe(0);
            expect(jaroWinkler("abc", "")).toBe(0);
            expect(jaroWinkler("", "abc")).toBe(0);
        });

        it("common prefix should increase similarity", () => {
            const score1 = jaroWinkler("abcdef", "abcxyz");
            const score2 = jaroWinkler("abcdef", "xyzabc");
            expect(score1).toBeGreaterThan(score2);
        });
    });
});
