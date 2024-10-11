const accentedLowerCharacters = "ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const normalLowerCharacters = "aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
export const normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();
export const accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();

const characterMap: { [key: string]: string } = {};

for (let i = 0; i < accentedCharacters.length; i++) {
    characterMap[accentedCharacters[i]] = normalCharacters[i];
}

export function removeAccentedCharacters(word: string): string {
    if (!word) {
        return word;
    }

    return word.split("").map((char) => characterMap[char] || char).join("");
}
