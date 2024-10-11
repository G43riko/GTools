import { accentedCharacters, normalCharacters, removeAccentedCharacters } from "./remove-accented-characters.ts";
function removeAccentedCharactersOld(word: string): string {
    if (!word || !word.replace) {
        return word;
    }

    return word.replace(/./g, (e: string) => {
        const index = accentedCharacters.indexOf(e);

        return index >= 0 ? normalCharacters[index] : e;
    });
}

Deno.bench("removeAccentedCharacters new", { group: "removeAccentedCharacters" }, () => {
    removeAccentedCharacters(accentedCharacters);
});

Deno.bench("removeAccentedCharacters old", { group: "removeAccentedCharacters" }, () => {
    removeAccentedCharactersOld(accentedCharacters);
});
