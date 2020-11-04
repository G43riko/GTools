import { StringMap } from "../../types/string-map.interface";
import { isEmpty } from "../../validators";
import * as Checkers from "../string-checkers";
import * as Strings from "../string-utils";

/**
 * @deprecated use {@link Strings} instead
 */
export class StringUtils {
    public static removeAccentedCharacters(word: string): string {
        return Strings.removeAccentedCharacters(word);
    }

    public static join(data: string[], delimiter = " ", prefix = "", postfix = ""): string {
        return Strings.joinString(data, delimiter, prefix, postfix);
    }

    public static toUpperSnakeCase(text: string): string {
        return Strings.toUpperSnakeCase(text);
    }

    public static toLowerSnakeCase(text: string): string {
        return Strings.toLowerSnakeCase(text);

    }

    public static toLowerCamelCase(text: string): string {
        return Strings.toLowerCamelCase(text);

    }

    public static toUpperCamelCase(text: string): string {
        return Strings.toUpperCamelCase(text);

    }

    public static toCapital(text: string): string {
        return Strings.toCapital(text);

    }

    public static getLastPart(text: string, divider = " "): string {
        return Strings.getLastPart(text, divider);
    }

    public static count(text: string, key: string): number {
        return Strings.count(text, key);
    }

    /**
     * @param text - text need to be repeat
     * @param count - number of iterations
     * @deprecated - use {@link String#repeat}
     */
    public static repeat(text: string, count: number): string {
        return text.repeat(count);
    }

    public static removeAll(text: string, words: string[]): string {
        return Strings.removeAll(text, words);
    }

    // TODO: need to be fixed
    public static template(text: string, values: StringMap, start = "{{", end = "}}"): string {
        return Strings.template(text, values, start, end);
    }

    public static removeEmptyLines(content: string): string {
        return Strings.removeEmptyLines(content);
    }

    public static between(text: string, key1: string, key2: string): string {
        return Strings.between(text, key1, key2);
    }

    public static occurrences(text: string, key: string): number {
        return Strings.occurrences(text, key);
    }

    public static collapseWhitespace(text: string): string {
        return Strings.collapseWhitespace(text);
    }

    public static capitalize(text: string): string {
        return Strings.capitalize(text);
    }

    public static isEmpty(text: string): boolean {
        return isEmpty(text);
    }

    public static swapCase(text: string): string {
        return Strings.swapCase(text);
    }

    public static transformToBasicFormat(text: string): string {
        return Strings.transformToBasicFormat(text);
    }

    public static isValidEmail(email: string): boolean {
        return Checkers.isValidEmail(email);
    }

    /**
     * @deprecated use {@link isValidPhoneNumber} instead
     *
     * @param num - string to validate
     */
    public static isValidPhoneNumber(num: string): boolean {
        return Checkers.isValidPhoneNumber(num);
    }

    public static getAsciiArray(text: string): number[] {
        return Strings.getAsciiArray(text);
    }

    public static toBasicForm(text: string): string {
        return Strings.toBasicForm(text);
    }

    public static contains(text: string, substring: string): boolean {
        return Strings.contains(text, substring);
    }

    public static joinSingle(prefix: string, divider: string, postfix: string): string {
        return Strings.joinSingle(prefix, divider, postfix);
    }

    public static getFormattedNumber(num: string, prefix = "+421"): string {
        return Strings.getFormattedNumber(num, prefix);
    }
}
