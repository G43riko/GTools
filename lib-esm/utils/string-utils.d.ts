import { StringMap } from "../types/string-map.interface";
export declare function removeAccentedCharacters(word: string): string;
export declare function toUpperSnakeCase(text: string): string;
export declare function toLowerSnakeCase(text: string): string;
export declare function toLowerCamelCase(text: string): string;
export declare function toUpperCamelCase(text: string): string;
export declare function toCapital(text: string): string;
export declare function getLastPart(text: string, divider?: string): string;
export declare function count(text: string, key: string): number;
/**
 * @param text - text need to be repeat
 * @param count - number of iterations
 * @deprecated - use {@link String#repeat}
 */
export declare function repeat(text: string, count: number): string;
export declare function removeAll(text: string, words: string[]): string;
export declare function template(text: string, values: StringMap<string>, start?: string, end?: string): string;
export declare function removeEmptyLines(content: string): string;
export declare function between(text: string, key1: string, key2: string): string;
export declare function occurrences(text: string, key: string): number;
export declare function collapseWhitespace(text: string): string;
export declare function capitalize(text: string): string;
export declare function isEmpty(thisArg: string): boolean;
export declare function swapCase(text: string): string;
export declare function transformToBasicFormat(text: string): string;
export declare function isValidEmail(email: string): boolean;
export declare function getAsciiArray(thisArg: string): number[];
export declare function isValidPhoneNumber(num: string): boolean;
export declare function toBasicForm(text: string): string;
export declare function contains(text: string, substring: string): boolean;
export declare function joinSingle(prefix: string, divider: string, postfix: string): string;
export declare function getFormattedNumber(num: string, prefix?: string): string;
export declare function replaceForAll(template: string, values: string[], placeHolder: string): string[];
