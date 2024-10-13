import { assertEquals } from "@std/assert";
import { occurrences, removeAccentedCharacters } from "./index.ts";
import { describe, it } from "@std/testing/bdd";
import { MockData } from "../mocks/mock-data.ts";
describe("StringUtils", () => {
    it("occurrences", () => {
        assertEquals(occurrences("I am the most expensive and the best IDE on the world", "the"), 3);
    });

    it("removeAccentedCharacters", () => {
        const testString = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
        const resultString = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";

        const finalTestString = testString + testString.toUpperCase();
        const finalResultString = resultString + resultString.toUpperCase();

        assertEquals(removeAccentedCharacters(finalTestString), finalResultString);
        assertEquals(removeAccentedCharacters(finalResultString), finalResultString);
        assertEquals(removeAccentedCharacters(MockData.charactersString), MockData.charactersString);
    });
});
