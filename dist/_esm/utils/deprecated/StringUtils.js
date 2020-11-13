import { isEmpty } from "../../validators";
import * as Checkers from "../string-checkers";
import * as Strings from "../string-utils";
export class StringUtils {
    static removeAccentedCharacters(word) {
        return Strings.removeAccentedCharacters(word);
    }
    static join(data, delimiter = " ", prefix = "", postfix = "") {
        return Strings.joinString(data, delimiter, prefix, postfix);
    }
    static toUpperSnakeCase(text) {
        return Strings.toUpperSnakeCase(text);
    }
    static toLowerSnakeCase(text) {
        return Strings.toLowerSnakeCase(text);
    }
    static toLowerCamelCase(text) {
        return Strings.toLowerCamelCase(text);
    }
    static toUpperCamelCase(text) {
        return Strings.toUpperCamelCase(text);
    }
    static toCapital(text) {
        return Strings.toCapital(text);
    }
    static getLastPart(text, divider = " ") {
        return Strings.getLastPart(text, divider);
    }
    static count(text, key) {
        return Strings.count(text, key);
    }
    static repeat(text, count) {
        return text.repeat(count);
    }
    static removeAll(text, words) {
        return Strings.removeAll(text, words);
    }
    static template(text, values, start = "{{", end = "}}") {
        return Strings.template(text, values, start, end);
    }
    static removeEmptyLines(content) {
        return Strings.removeEmptyLines(content);
    }
    static between(text, key1, key2) {
        return Strings.between(text, key1, key2);
    }
    static occurrences(text, key) {
        return Strings.occurrences(text, key);
    }
    static collapseWhitespace(text) {
        return Strings.collapseWhitespace(text);
    }
    static capitalize(text) {
        return Strings.capitalize(text);
    }
    static isEmpty(text) {
        return isEmpty(text);
    }
    static swapCase(text) {
        return Strings.swapCase(text);
    }
    static transformToBasicFormat(text) {
        return Strings.transformToBasicFormat(text);
    }
    static isValidEmail(email) {
        return Checkers.isValidEmail(email);
    }
    static isValidPhoneNumber(num) {
        return Checkers.isValidPhoneNumber(num);
    }
    static getAsciiArray(text) {
        return Strings.getAsciiArray(text);
    }
    static toBasicForm(text) {
        return Strings.toBasicForm(text);
    }
    static contains(text, substring) {
        return Strings.contains(text, substring);
    }
    static joinSingle(prefix, divider, postfix) {
        return Strings.joinSingle(prefix, divider, postfix);
    }
    static getFormattedNumber(num, prefix = "+421") {
        return Strings.getFormattedNumber(num, prefix);
    }
}
//# sourceMappingURL=StringUtils.js.map