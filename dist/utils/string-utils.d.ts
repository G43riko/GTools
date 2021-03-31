import { StringMap } from "gtools/types";
export declare function removeAccentedCharacters(word: string): string;
/**
 * @example
 *  cutUsing("abcdefghij", 10) => abcdefghij
 *  cutUsing("abcdefghij", 15) => abcdefghij
 *  cutUsing("abcdefghij", 9) => abcdefg...
 *  cutUsing("abcdefghij", 9, "...", false) => abcdefghi...
 */
export declare function cutUsing(text: string, maxLength: number, suffix?: string, lengthIncludeSuffix?: boolean): string;
export declare function toUpperSnakeCase(text: string): string;
export declare function toLowerSnakeCase(text: string): string;
export declare function toLowerCamelCase(text: string): string;
export declare function toUpperCamelCase(text: string): string;
/**
 * @example
 *  capitalize("gabo") => Gabo
 *  capitalize("GABO") => Gabo
 *  capitalize("gABO") => Gabo
 */
export declare function capitalize(text: string): string;
/**
 * @deprecated use {@link capitalize} instead
 */
export declare function toCapital(text: string): string;
export declare function getLastPart(text: string, divider?: string): string;
/**
 * @deprecated use {@link occurrences} instead
 */
export declare function count(text: string, key: string): number;
/**
 * @param text - text need to be repeat
 * @param numberOfRepetitions - number of iterations
 * @deprecated - use {@link String#repeat}
 */
export declare function repeat(text: string, numberOfRepetitions: number): string;
export declare function removeAll(text: string, words: string[]): string;
/**
 * @example
 *  template("{{name}} is {{age}} years old", {name: "Gabriel", age: 23}) => Gabriel is 23 years old
 */
export declare function template(text: string, values: StringMap<unknown>, start?: string, end?: string): string;
export declare function removeEmptyLines(content: string): string;
/**
 * @example
 *  between("my name is gabriel and I am 26 years old", "NAME", "gabriel") => "my name is "
 *  between("my name is gabriel and I am 26 years old", "name", "GABRIEL") => " is gabriel and I am 26 years old"
 *  between("my name is gabriel and I am 26 years old", "name", "gabriel") => " is "
 *  between("my name is gabriel and I am 26 years old", "name", "gabriel", true) => "is"
 */
export declare function between(text: string, key1: string, key2: string, trim?: boolean): string;
/**
 * Returns number of occurrences of substring
 * @version 0.2.40 - much faster then previous regex method using `return (text.match(new RegExp(key, "g")) || []).length;`
 * @example
 *  occurrences("foofoofoo", "bar"); => 0
 *  occurrences("foofoofoo", "foo"); => 3
 *  occurrences("foofoofoo", "foofoo"); => 1
 *  occurrences("foofoofoo", "foofoo", true); => 2
 * @param text - text
 * @param key - searched substring
 * @param overlapping - allows math overlapping
 */
export declare function occurrences(text: string, key: string, overlapping?: boolean): number;
export declare function collapseWhitespace(text: string): string;
export declare function swapCase(text: string): string;
/**
 * @example
 *  formatTime("{} is a big {}", ["Gabo", "hero"]) => Gabo is a big hero
 *  formatTime("<> is a big <>", ["Gabo", "hero"], "<>") => Gabo is a big hero
 */
export declare function format(text: string, values: string[], placeHolder?: string): string;
export declare function transformToBasicFormat(text: string): string;
/**
 * @example
 *  getAsciiArray("abcdefg") ==> [97, 98, 99, 100, 101, 102, 103]
 * @param thisArg - argument
 */
export declare function getAsciiArray(thisArg: string): number[];
export declare function toBasicForm(text: string): string;
export declare function contains(text: string, substring: string): boolean;
/**
 * @example
 *  joinSingle("package", ".", "json") => package.json
 *  joinSingle("package.", ".", "json") => package.json
 *  joinSingle("package", ".", ".json") => package.json
 *  joinSingle("package.", ".", ".json") => package.json
 */
export declare function joinSingle(prefix: string, divider: string, postfix: string): string;
/**
 * @deprecated use {@link join} instead
 * @param data - data to join
 * @param delimiter - delimiter
 * @param prefix - prefix
 * @param postfix - postfix
 */
export declare function joinString(data: string[], delimiter?: string, prefix?: string, postfix?: string): string;
export declare function getFormattedNumber(num: string, prefix?: string): string;
export declare function replaceForAll(content: string, values: string[], placeHolder: string): string[];
//# sourceMappingURL=string-utils.d.ts.map