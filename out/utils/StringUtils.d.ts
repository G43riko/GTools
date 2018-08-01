import { StringMap } from "./MiscUtils";
export declare class StringUtils {
    static removeAccentedCharacters(word: string): string;
    static join(data: string[], delimiter?: string, prefix?: string, postfix?: string): string;
    static toUpperSnakeCase(text: string): string;
    static toLowerSnakeCase(text: string): string;
    static toLowerCamelCase(text: string): string;
    static toUpperCamelCase(text: string): string;
    static toCapital(text: string): string;
    static getLastPart(text: string, divider?: string): string;
    static count(text: string, key: string): number;
    /**
     * @param text
     * @param count
     * @deprecated - use {@link String#repeat}
     */
    static repeat(text: string, count: number): string;
    static removeAll(text: string, words: string[]): string;
    static template(text: string, values: StringMap, start?: string, end?: string): string;
    static removeEmptyLines(content: string): string;
    static between(text: string, key1: string, key2: string): string;
    static occurrences(text: string, key: string): number;
    static collapseWhitespace(text: string): string;
    static capitalize(text: string): string;
    static isEmpty(thisArg: string): boolean;
    static swapCase(text: string): string;
    static transformToBasicFormat(text: string): string;
    static isValidEmail(email: string): boolean;
    static getAsciiArray(thisArg: string): number[];
    static isValidPhoneNumber(num: string): boolean;
    static toBasicForm(text: string): string;
    static contains(text: string, substring: string): boolean;
    static joinSingle(prefix: string, divider: string, postfix: string): string;
    static getFormattedNumber(num: string, prefix?: string): string;
}
