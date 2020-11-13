import { join } from "./array-utils";
import * as StringCheckers from "./string-checkers";
const accentedLowerCharacters = "ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const normalLowerCharacters = "aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
const accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
const normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();
export function removeAccentedCharacters(word) {
    if (!word || !word.replace) {
        return word;
    }
    return word.replace(/./g, (e) => {
        const index = accentedCharacters.indexOf(e);
        return index >= 0 ? normalCharacters[index] : e;
    });
}
export function toUpperSnakeCase(text) {
    if (StringCheckers.isCamelCase(text)) {
        return text.replace(/([a-z])([A-Z])/g, "$1_$2")
            .replace(/([A-Z])([A-Z])/g, "$1_$2")
            .toUpperCase();
    }
    if (StringCheckers.isUpperSnakeCase(text)) {
        return text;
    }
    return text.replace(/(-|_| |\s)+(.)?/g, (i, u, e) => e ? "_" + e : "")
        .replace(/^_/, "")
        .toUpperCase();
}
export function toLowerSnakeCase(text) {
    if (StringCheckers.isCamelCase(text)) {
        return text.replace(/([a-z])([A-Z])/g, "$1_$2")
            .replace(/([A-Z])([A-Z])/g, "$1_$2")
            .toLowerCase();
    }
    if (StringCheckers.isLowerSnakeCase(text)) {
        return text;
    }
    return text.replace(/(-|_| |\s)+(.)?/g, (i, u, e) => e ? "_" + e : "")
        .replace(/^_/, "")
        .toLowerCase();
}
export function toLowerCamelCase(text) {
    if (StringCheckers.isLowerCamelCase(text)) {
        return text;
    }
    return text.trim()
        .replace(/([a-z])([A-Z])([A-Z])/g, "$1$2_$3")
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .toLowerCase()
        .replace(/(-|_| |\s)+(.)?/g, (math, sep, c) => c ? c.toUpperCase() : "")
        .replace(/^./, (e) => e.toLowerCase());
}
export function toUpperCamelCase(text) {
    if (StringCheckers.isUpperCamelCase(text)) {
        return text;
    }
    return toCapital(toLowerCamelCase(text));
}
export function capitalize(text) {
    return text.toLowerCase().replace(/^./, (char) => char.toUpperCase());
}
export function toCapital(text) {
    return text.replace(/^./, (e) => e.toUpperCase());
}
export function getLastPart(text, divider = " ") {
    if (!text || !text.split) {
        return text;
    }
    const splitText = text.split(divider);
    return splitText[splitText.length - 1];
}
export function count(text, key) {
    return (text.match(new RegExp(key, "g")) || []).length;
}
export function repeat(text, numberOfRepetitions) {
    return new Array(numberOfRepetitions + 1).join(text);
}
export function removeAll(text, words) {
    return text.replace(new RegExp(`(${words.join("|")})`, "g"), "");
}
export function template(text, values, start = "{{", end = "}}") {
    start = start.replace(/[-[\]()*\s]/g, "\\$&")
        .replace(/\$/g, "\\$");
    end = end.replace(/[-[\]()*\s]/g, "\\$&")
        .replace(/\$/g, "\\$");
    const regexp = new RegExp(`${start}(.+?)'${end}`, "g");
    const matches = text.match(regexp) || [];
    matches.forEach((match) => {
        const key = match.substring(start.length, match.length - end.length)
            .trim();
        const value = values[key];
        if (value) {
            text = text.replace(match, value);
        }
    });
    return text;
}
export function removeEmptyLines(content) {
    return content.replace(/^\s*$(?:\r\n?|\n)/gm, "");
}
export function between(text, key1, key2) {
    const startPos = text.indexOf(key1);
    const endPos = text.indexOf(key2);
    if (startPos < 0 && endPos >= 0) {
        return text.substring(0, endPos);
    }
    if (endPos < 0 && startPos >= 0) {
        return text.substring(startPos + key1.length, text.length);
    }
    return text.substring(startPos + key1.length, endPos);
}
export function occurrences(text, key) {
    return (text.match(new RegExp(key, "g")) || []).length;
}
export function collapseWhitespace(text) {
    return text.replace(/[\s\uFEFF\xA0]{2,}/g, " ");
}
export function swapCase(text) {
    return text.replace(/\S/g, (char) => {
        const lowerCase = char.toLowerCase();
        return lowerCase === char ? char.toUpperCase() : lowerCase;
    });
}
export function transformToBasicFormat(text) {
    return collapseWhitespace(removeAccentedCharacters(text).toLowerCase()).trim();
}
export function getAsciiArray(thisArg) {
    const result = [];
    for (const letter of thisArg) {
        result[result.length] = letter.charCodeAt(0);
    }
    return result;
}
export function toBasicForm(text) {
    return removeAccentedCharacters(text.toLowerCase());
}
export function contains(text, substring) {
    return !!text && removeAccentedCharacters(text.toLowerCase()).indexOf(substring) >= 0;
}
export function joinSingle(prefix, divider, postfix) {
    if (postfix.startsWith(divider) && prefix.endsWith(divider)) {
        return prefix + postfix.substring(divider.length);
    }
    if (postfix.startsWith(divider) || prefix.endsWith(divider)) {
        return prefix + postfix;
    }
    return prefix + divider + postfix;
}
export function joinString(data, delimiter = " ", prefix = "", postfix = "") {
    return join(data, delimiter, prefix, postfix);
}
export function getFormattedNumber(num, prefix = "+421") {
    num = num.replace(/[( )/-]/g, "");
    if (num.startsWith("+")) {
        return num;
    }
    if (num.startsWith("00")) {
        return num.substring(2);
    }
    if (num.startsWith("09") || num.startsWith("02")) {
        return prefix + num.substring(1);
    }
    return num;
}
function fuzzy_match_simple(pattern, str) {
    let patternIdx = 0;
    let strIdx = 0;
    const patternLength = pattern.length;
    const strLength = str.length;
    while (patternIdx !== patternLength && strIdx !== strLength) {
        const patternChar = pattern.charAt(patternIdx)
            .toLowerCase();
        const strChar = str.charAt(strIdx)
            .toLowerCase();
        if (patternChar === strChar) {
            ++patternIdx;
        }
        ++strIdx;
    }
    return patternLength !== 0 && strLength !== 0 && patternIdx === patternLength;
}
export function replaceForAll(content, values, placeHolder) {
    return values.map((value) => content.replace(placeHolder, value));
}
//# sourceMappingURL=string-utils.js.map