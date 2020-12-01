import { join } from "./array-utils";
import * as StringCheckers from "./string-checkers";
var accentedLowerCharacters = "ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
var normalLowerCharacters = "aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
var accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
var normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();
export function removeAccentedCharacters(word) {
    if (!word || !word.replace) {
        return word;
    }
    return word.replace(/./g, function (e) {
        var index = accentedCharacters.indexOf(e);
        return index >= 0 ? normalCharacters[index] : e;
    });
}
export function cutUsing(text, maxLength, suffix, lengthIncludeSuffix) {
    if (suffix === void 0) { suffix = "..."; }
    if (lengthIncludeSuffix === void 0) { lengthIncludeSuffix = true; }
    if (text.length <= maxLength) {
        return text;
    }
    return text.substr(0, maxLength - (lengthIncludeSuffix ? suffix.length - 1 : 0)) + suffix;
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
    return text.replace(/(-|_| |\s)+(.)?/g, function (i, u, e) { return e ? "_" + e : ""; })
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
    return text.replace(/(-|_| |\s)+(.)?/g, function (i, u, e) { return e ? "_" + e : ""; })
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
        .replace(/(-|_| |\s)+(.)?/g, function (math, sep, c) { return c ? c.toUpperCase() : ""; })
        .replace(/^./, function (e) { return e.toLowerCase(); });
}
export function toUpperCamelCase(text) {
    if (StringCheckers.isUpperCamelCase(text)) {
        return text;
    }
    return toCapital(toLowerCamelCase(text));
}
export function capitalize(text) {
    return text.toLowerCase().replace(/^./, function (char) { return char.toUpperCase(); });
}
export function toCapital(text) {
    return text.replace(/^./, function (e) { return e.toUpperCase(); });
}
export function getLastPart(text, divider) {
    if (divider === void 0) { divider = " "; }
    if (!text || !text.split) {
        return text;
    }
    var splitText = text.split(divider);
    return splitText[splitText.length - 1];
}
export function count(text, key) {
    return (text.match(new RegExp(key, "g")) || []).length;
}
export function repeat(text, numberOfRepetitions) {
    return new Array(numberOfRepetitions + 1).join(text);
}
export function removeAll(text, words) {
    return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
}
export function template(text, values, start, end) {
    if (start === void 0) { start = "{{"; }
    if (end === void 0) { end = "}}"; }
    var updatedStart = start.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
    var updatedEnd = end.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
    return text.replace(new RegExp(updatedStart + "(.+?)" + updatedEnd, "g"), function (math, key) { return String(values[key]); });
}
export function removeEmptyLines(content) {
    return content.replace(/^\s*$(?:\r\n?|\n)/gm, "");
}
export function between(text, key1, key2, trim) {
    if (trim === void 0) { trim = false; }
    var processResult = function (result) { return trim ? result.trim() : result; };
    var startPos = text.indexOf(key1);
    var endPos = text.indexOf(key2);
    if (startPos < 0 && endPos >= 0) {
        return processResult(text.substring(0, endPos));
    }
    if (endPos < 0 && startPos >= 0) {
        return processResult(text.substring(startPos + key1.length, text.length));
    }
    return processResult(text.substring(startPos + key1.length, endPos));
}
export function occurrences(text, key, overlapping) {
    if (overlapping === void 0) { overlapping = false; }
    var index = text.indexOf(key);
    var counter = 0;
    var step = overlapping ? 1 : key.length;
    while (index >= 0) {
        counter++;
        index = text.indexOf(key, index + step);
    }
    return counter;
}
export function collapseWhitespace(text) {
    return text.replace(/[\s\uFEFF\xA0]{2,}/g, " ");
}
export function swapCase(text) {
    return text.replace(/\S/g, function (char) {
        var lowerCase = char.toLowerCase();
        return lowerCase === char ? char.toUpperCase() : lowerCase;
    });
}
export function format(text, values, placeHolder) {
    if (placeHolder === void 0) { placeHolder = "{}"; }
    var result = [];
    var lastIndex;
    var actualIndex = 0;
    var counter = 0;
    while (counter < values.length) {
        lastIndex = actualIndex;
        actualIndex = text.indexOf(placeHolder, actualIndex);
        result.push(text.substring(lastIndex, actualIndex));
        result.push(values[counter++]);
        actualIndex += placeHolder.length;
    }
    result.push(text.substring(actualIndex));
    return result.join("");
}
export function transformToBasicFormat(text) {
    return collapseWhitespace(removeAccentedCharacters(text).toLowerCase()).trim();
}
export function getAsciiArray(thisArg) {
    var result = [];
    for (var _i = 0, thisArg_1 = thisArg; _i < thisArg_1.length; _i++) {
        var letter = thisArg_1[_i];
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
export function joinString(data, delimiter, prefix, postfix) {
    if (delimiter === void 0) { delimiter = " "; }
    if (prefix === void 0) { prefix = ""; }
    if (postfix === void 0) { postfix = ""; }
    return join(data, delimiter, prefix, postfix);
}
export function getFormattedNumber(num, prefix) {
    if (prefix === void 0) { prefix = "+421"; }
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
    var patternIdx = 0;
    var strIdx = 0;
    var patternLength = pattern.length;
    var strLength = str.length;
    while (patternIdx !== patternLength && strIdx !== strLength) {
        var patternChar = pattern.charAt(patternIdx)
            .toLowerCase();
        var strChar = str.charAt(strIdx)
            .toLowerCase();
        if (patternChar === strChar) {
            ++patternIdx;
        }
        ++strIdx;
    }
    return patternLength !== 0 && strLength !== 0 && patternIdx === patternLength;
}
export function replaceForAll(content, values, placeHolder) {
    return values.map(function (value) { return content.replace(placeHolder, value); });
}
//# sourceMappingURL=string-utils.js.map