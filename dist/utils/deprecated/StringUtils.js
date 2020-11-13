"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
var validators_1 = require("../../validators");
var Checkers = __importStar(require("../string-checkers"));
var Strings = __importStar(require("../string-utils"));
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.removeAccentedCharacters = function (word) {
        return Strings.removeAccentedCharacters(word);
    };
    StringUtils.join = function (data, delimiter, prefix, postfix) {
        if (delimiter === void 0) { delimiter = " "; }
        if (prefix === void 0) { prefix = ""; }
        if (postfix === void 0) { postfix = ""; }
        return Strings.joinString(data, delimiter, prefix, postfix);
    };
    StringUtils.toUpperSnakeCase = function (text) {
        return Strings.toUpperSnakeCase(text);
    };
    StringUtils.toLowerSnakeCase = function (text) {
        return Strings.toLowerSnakeCase(text);
    };
    StringUtils.toLowerCamelCase = function (text) {
        return Strings.toLowerCamelCase(text);
    };
    StringUtils.toUpperCamelCase = function (text) {
        return Strings.toUpperCamelCase(text);
    };
    StringUtils.toCapital = function (text) {
        return Strings.toCapital(text);
    };
    StringUtils.getLastPart = function (text, divider) {
        if (divider === void 0) { divider = " "; }
        return Strings.getLastPart(text, divider);
    };
    StringUtils.count = function (text, key) {
        return Strings.count(text, key);
    };
    StringUtils.repeat = function (text, count) {
        return text.repeat(count);
    };
    StringUtils.removeAll = function (text, words) {
        return Strings.removeAll(text, words);
    };
    StringUtils.template = function (text, values, start, end) {
        if (start === void 0) { start = "{{"; }
        if (end === void 0) { end = "}}"; }
        return Strings.template(text, values, start, end);
    };
    StringUtils.removeEmptyLines = function (content) {
        return Strings.removeEmptyLines(content);
    };
    StringUtils.between = function (text, key1, key2) {
        return Strings.between(text, key1, key2);
    };
    StringUtils.occurrences = function (text, key) {
        return Strings.occurrences(text, key);
    };
    StringUtils.collapseWhitespace = function (text) {
        return Strings.collapseWhitespace(text);
    };
    StringUtils.capitalize = function (text) {
        return Strings.capitalize(text);
    };
    StringUtils.isEmpty = function (text) {
        return validators_1.isEmpty(text);
    };
    StringUtils.swapCase = function (text) {
        return Strings.swapCase(text);
    };
    StringUtils.transformToBasicFormat = function (text) {
        return Strings.transformToBasicFormat(text);
    };
    StringUtils.isValidEmail = function (email) {
        return Checkers.isValidEmail(email);
    };
    StringUtils.isValidPhoneNumber = function (num) {
        return Checkers.isValidPhoneNumber(num);
    };
    StringUtils.getAsciiArray = function (text) {
        return Strings.getAsciiArray(text);
    };
    StringUtils.toBasicForm = function (text) {
        return Strings.toBasicForm(text);
    };
    StringUtils.contains = function (text, substring) {
        return Strings.contains(text, substring);
    };
    StringUtils.joinSingle = function (prefix, divider, postfix) {
        return Strings.joinSingle(prefix, divider, postfix);
    };
    StringUtils.getFormattedNumber = function (num, prefix) {
        if (prefix === void 0) { prefix = "+421"; }
        return Strings.getFormattedNumber(num, prefix);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
//# sourceMappingURL=StringUtils.js.map