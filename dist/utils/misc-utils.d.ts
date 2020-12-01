import { StringMap } from "gtools/types";
/**
 * Method parse cookies
 * @param cookies - cooke to parse
 */
export declare function parseCookies(cookies: string): StringMap;
/**
 * Method check if object is in array
 * @example
 *  isIn("a", "b", "d", "a") => true
 *  isIn("a", ["b", "d", "a"]) => true
 *  isIn("c", "b", "d", "a") => false
 *  isIn("c", ["b", "d", "a"]) => false
 *  isIn("c") => false
 *  isIn("c", []) => false
 * @param obj - searched object
 * @param data - array of objects to be compare with searched object
 */
export declare function isIn<T>(obj: T, ...data: unknown[]): boolean;
/**
 * Method parse JSON content with comments
 * @param content - stringify JSON
 */
export declare function parseJSONWithComments<T>(content: string): T;
export declare function setCookie(name: string, value: string | number | boolean, days: number): string;
export declare function getCookie(cname: string, source?: string): string;
/**
 * @example
 *  parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test") typeof object
 *  parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").name => Gabriel
 *  parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").age => "23"
 *  parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email typeof array
 *  parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email[0] => gcsollei
 *  parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email[1] => gabrielcsollei
 *  parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email[2] => test
 */
export declare function parseParams<T>(query?: string, separator?: string, delimiter?: string): T;
/**
 * @example
 *  objectToQueryParams({a: "aa", b: "bb"}) => ?a=aa&b=bb
 *  objectToQueryParams({a: 21, b: 22}) => ?a=21&b=22
 */
export declare function objectToQueryParams(obj: StringMap<unknown>): string;
export declare function serialize(obj: any): string;
export declare function parse<T>(obj: string): T;
export declare function map<S = any, T = S>(source: S, data: {
    attrS: keyof S;
    attrD?: keyof T;
    mapFunction: (src: any) => any;
}[]): T;
//# sourceMappingURL=misc-utils.d.ts.map