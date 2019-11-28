"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCheckers_1 = require("./StringCheckers");
var accentedLowerCharacters = "ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
var normalLowerCharacters = "aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
var accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
var normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();
var validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
var validPhoneNumberRegex = /^([+]|00)?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{2,3}[-\s.]?[0-9]{2,6}([-\s.]?[0-9]{3})?$/im;
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
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.removeAccentedCharacters = function (word) {
        if (!word || !word.replace) {
            return word;
        }
        return word.replace(/./g, function (e) {
            var index = accentedCharacters.indexOf(e);
            return index >= 0 ? normalCharacters[index] : e;
        });
    };
    StringUtils.join = function (data, delimiter, prefix, postfix) {
        if (delimiter === void 0) { delimiter = " "; }
        if (prefix === void 0) { prefix = ""; }
        if (postfix === void 0) { postfix = ""; }
        if (!Array.isArray(data)) {
            return prefix + data + postfix;
        }
        return "" + prefix + data.join(delimiter) + postfix;
    };
    StringUtils.toUpperSnakeCase = function (text) {
        if (StringCheckers_1.StringCheckers.isCamelCase(text)) {
            return text.replace(/([a-z])([A-Z])/g, "$1_$2")
                .replace(/([A-Z])([A-Z])/g, "$1_$2")
                .toUpperCase();
        }
        if (StringCheckers_1.StringCheckers.isUpperSnakeCase(text)) {
            return text;
        }
        return text.replace(/(-|_| |\s)+(.)?/g, function (i, u, e) { return e ? "_" + e : ""; })
            .replace(/^_/, "")
            .toUpperCase();
    };
    StringUtils.toLowerSnakeCase = function (text) {
        if (StringCheckers_1.StringCheckers.isCamelCase(text)) {
            return text.replace(/([a-z])([A-Z])/g, "$1_$2")
                .replace(/([A-Z])([A-Z])/g, "$1_$2")
                .toLowerCase();
        }
        if (StringCheckers_1.StringCheckers.isLowerSnakeCase(text)) {
            return text;
        }
        return text.replace(/(-|_| |\s)+(.)?/g, function (i, u, e) { return e ? "_" + e : ""; })
            .replace(/^_/, "")
            .toLowerCase();
    };
    StringUtils.toLowerCamelCase = function (text) {
        if (StringCheckers_1.StringCheckers.isLowerCamelCase(text)) {
            return text;
        }
        return text.trim()
            .replace(/([a-z])([A-Z])([A-Z])/g, "$1$2_$3")
            .replace(/([a-z])([A-Z])/g, "$1_$2")
            .toLowerCase()
            .replace(/(-|_| |\s)+(.)?/g, function (math, sep, c) { return c ? c.toUpperCase() : ""; })
            .replace(/^./, function (e) { return e.toLowerCase(); });
    };
    StringUtils.toUpperCamelCase = function (text) {
        if (StringCheckers_1.StringCheckers.isUpperCamelCase(text)) {
            return text;
        }
        return StringUtils.toCapital(StringUtils.toLowerCamelCase(text));
    };
    StringUtils.toCapital = function (text) {
        return text.replace(/./, function (e) { return e.toUpperCase(); });
    };
    StringUtils.getLastPart = function (text, divider) {
        if (divider === void 0) { divider = " "; }
        if (!text || !text.split) {
            return text;
        }
        var splitText = text.split(divider);
        return splitText[splitText.length - 1];
    };
    StringUtils.count = function (text, key) {
        return (text.match(new RegExp(key, "g")) || []).length;
    };
    /**
     * @param text - text need to be repeat
     * @param count - number of iterations
     * @deprecated - use {@link String#repeat}
     */
    StringUtils.repeat = function (text, count) {
        return new Array(count + 1).join(text);
    };
    StringUtils.removeAll = function (text, words) {
        return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
    };
    // TODO: need to be fixed
    StringUtils.template = function (text, values, start, end) {
        if (start === void 0) { start = "{{"; }
        if (end === void 0) { end = "}}"; }
        start = start.replace(/[-[\]()*\s]/g, "\\$&")
            .replace(/\$/g, "\\$");
        end = end.replace(/[-[\]()*\s]/g, "\\$&")
            .replace(/\$/g, "\\$");
        var regexp = new RegExp(start + "(.+?)'" + end, "g");
        var matches = text.match(regexp) || [];
        matches.forEach(function (match) {
            var key = match.substring(start.length, match.length - end.length)
                .trim();
            var value = values[key];
            if (value) {
                text = text.replace(match, value);
            }
        });
        return text;
    };
    StringUtils.removeEmptyLines = function (content) {
        return content.replace(/^\s*$(?:\r\n?|\n)/gm, "");
    };
    StringUtils.between = function (text, key1, key2) {
        var startPos = text.indexOf(key1);
        var endPos = text.indexOf(key2);
        if (startPos < 0 && endPos >= 0) {
            return text.substring(0, endPos);
        }
        if (endPos < 0 && startPos >= 0) {
            return text.substring(startPos + key1.length, text.length);
        }
        return text.substring(startPos + key1.length, endPos);
    };
    StringUtils.occurrences = function (text, key) {
        return (text.match(new RegExp(key, "g")) || []).length;
    };
    StringUtils.collapseWhitespace = function (text) {
        return text.replace(/[\s\uFEFF\xA0]{2,}/g, " ");
    };
    StringUtils.capitalize = function (text) {
        return text.toLowerCase()
            .replace(/^./, function (char) { return char.toUpperCase(); });
    };
    StringUtils.isEmpty = function (thisArg) {
        return !thisArg || /^[\s\xa0]*$/.test(thisArg);
    };
    StringUtils.swapCase = function (text) {
        return text.replace(/\S/g, function (char) {
            var lowerCase = char.toLowerCase();
            return lowerCase === char ? char.toUpperCase() : lowerCase;
        });
    };
    StringUtils.transformToBasicFormat = function (text) {
        return StringUtils.collapseWhitespace(StringUtils.removeAccentedCharacters(text)
            .toLowerCase()).trim();
    };
    StringUtils.isValidEmail = function (email) {
        if (!email) {
            return false;
        }
        return validEmailRegex.test(email.trim());
    };
    StringUtils.getAsciiArray = function (thisArg) {
        var result = [];
        for (var _i = 0, thisArg_1 = thisArg; _i < thisArg_1.length; _i++) {
            var letter = thisArg_1[_i];
            result[result.length] = letter.charCodeAt(0);
        }
        return result;
    };
    StringUtils.isValidPhoneNumber = function (num) {
        if (!num) {
            return false;
        }
        return validPhoneNumberRegex.test(num.trim());
    };
    StringUtils.toBasicForm = function (text) {
        return StringUtils.removeAccentedCharacters(text.toLowerCase());
    };
    StringUtils.contains = function (text, substring) {
        return !!text && StringUtils.removeAccentedCharacters(text.toLowerCase())
            .indexOf(substring) >= 0;
    };
    StringUtils.joinSingle = function (prefix, divider, postfix) {
        if (postfix.startsWith(divider) && prefix.endsWith(divider)) {
            return prefix + postfix.substring(divider.length);
        }
        if (postfix.startsWith(divider) || prefix.endsWith(divider)) {
            return prefix + postfix;
        }
        return prefix + divider + postfix;
    };
    StringUtils.getFormattedNumber = function (num, prefix) {
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
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
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
