const accentedLowerCharacters = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const normalLowerCharacters = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
const accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
const normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validPhoneNumberRegex = /^\+?[0-9]*$/;

export class StringUtils {
    public static removeAccentedCharacters(word: string): string {
        if (!word) {
            return word;
        }
        return word.replace(/./g, (e: string) => {
            const index = accentedCharacters.indexOf(e);
            return index >= 0 ? normalCharacters[index] : e;
        });
    }

    public static join(data: string[], delimiter = " ", prefix = "", postfix = ""): string {
        return `${prefix}${data.join(delimiter)}${postfix}`;
    }

    public static toUpperSnakeCase(text: string): string {
        return text.replace(/[A-Z]/g, (e) => "_" + e.toUpperCase()).toUpperCase();
    }

    public static toCamelCase(text: string): string {
        return text.trim().replace(/(-|_|\s)+(.)?/g, (math, sep, c) => c ? c.toUpperCase() : "");
    }

    public static getLastPart(text: string, divider: string): string {
        if (!text) {
            return text;
        }
        const splitText = text.split(divider);
        if (splitText.length === 0) {
            return text;
        }
        return splitText[splitText.length - 1];
    }

    public static removeAll(text: string, words: string[]): string {
        return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
    }

    public static between(text: string, key1: string, key2: string): string {
        const startPos = text.indexOf(key1);
        const endPos = text.indexOf(key2);
        if (startPos < 0 && endPos >= 0) {
            return text.substring(0, endPos);
        } else if (endPos < 0 && startPos >= 0) {
            return text.substring(startPos + key1.length, text.length);
        } else {
            return text.substring(startPos + key1.length, endPos);
        }

    }

    public static occurences(text: string, key: string): number {
        return (text.match(new RegExp(key, "g")) || []).length;
    }

    public static collapseWhitespace(text: string): string {
        return text.replace(/^[\s\uFEFF\xA0]{2,}/g, "");
    }

    public static capitalize(text: string): string {
        return text.toLowerCase().replace(/^./, (char) => char.toUpperCase());
    }

    public static swapCase(text: string): string {
        return text.replace(/\S/g, function(char) {
            const lowerCase = char.toLowerCase();
            return lowerCase === char ? char.toUpperCase() : lowerCase;
        });
    }

    public static transformToBasicFormat(text: string): string {
        return StringUtils.removeAccentedCharacters(text).toLowerCase().trim();
    }

    public static isValidEmail(email: string): boolean {
        if (!email) {
            return false;
        }
        return validEmailRegex.test(email.trim());
    }

    public static isValidPhoneNumber(number: string): boolean {
        if (!number) {
            return false;
        }
        return validPhoneNumberRegex.test(number.trim());
    }


    public static toBasicForm(text: string): string {
        return StringUtils.removeAccentedCharacters(text.toLowerCase());
    }

    public static contains(text: string, substring: string): boolean {
        return text && StringUtils.removeAccentedCharacters(text.toLowerCase()).indexOf(substring) >= 0;
    }

    public static getFormattedNumber(number: string, prefix = "+421"): string {
        number = number.replace(/[( )/-]/g, "");
        if (number.startsWith("+")) {
            return number;
        }
        if (number.startsWith("00")) {
            return number.substring(2);
        }
        if (number.startsWith("09") || number.startsWith("02")) {
            return prefix + number.substring(1);
        }
        return number;
    }
}


function fuzzy_match_simple(pattern: string, str: string): boolean {
    let patternIdx = 0;
    let strIdx = 0;
    const patternLength = pattern.length;
    const strLength = str.length;

    while (patternIdx !== patternLength && strIdx !== strLength) {
        const patternChar = pattern.charAt(patternIdx).toLowerCase();
        const strChar = str.charAt(strIdx).toLowerCase();
        if (patternChar === strChar) {
            ++patternIdx;
        }
        ++strIdx;
    }

    return patternLength !== 0 && strLength !== 0 && patternIdx === patternLength;
}
