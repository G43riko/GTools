const accentedLowerCharacters = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const normalLowerCharacters = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
const accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
const normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validPhoneNumberRegex = /^\+?[0-9]*$/;
/* TODO:
    static underscore(word) {
    }
    static humanize(word) {
    }
    static dasherize(word) {
    }
    //dashCase = a-b-c-d-e
    //dotCase a.c.d.v.s.d
    //pascalCase = FooBarBaz
    //pathCase = a/b/c/d
    //snakeCase = a_b_c_d_
    static isUpper(word) {
    }
    static isLower(word) {
    }
*/
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

    public static count(text: string, key: string): number {
        return (text.match(new RegExp(key, "g")) || []).length;
    };

    public static repeat(text: string, count: number): string {
        return new Array(count + 1).join(text);
    };

    public static removeAll(text: string, words: string[]): string {
        return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
    }

    public static template(text: string, values: any, start = "{{", end = "}}"): string {
        start = start.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
        end = end.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
        const regexp = new RegExp(start + "(.+?)'" + end, "g");
        const matches = text.match(regexp) || [];

        for(let i = 0 ; i < matches.length ; i++) {
            const match = matches[i];
            const key = match.substring(start.length, match.length - end.length).trim();
            const value = values[key];
            if (value) {
                console.log("match: ", match);
                console.log("key: ", key);
                console.log("value: ", value);
                text = text.replace(match, value);
            }
        }
        return text;
    };

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

    public static isEmpty(thisArg: string): boolean {
        return !thisArg || /^[\s\xa0]*$/.test(thisArg);
    };

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

    public static getAsciiArray(thisArg: string): any {
        const result = [];
        for(let i = 0 ; i < thisArg.length ; i++) {
            result[result.length] = thisArg[i].charCodeAt(0);
        }
        return result;
    };

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
