import { StringMap } from "../types/string-map.interface";
/**
 * Method parse cookies
 * @param cookies - cooke to parse
 */
export declare function parseCookies(cookies: string): StringMap<string>;
/**
 * Method check if object is in array
 * @param obj - searched object
 * @param data - array of objects to be compare with searched object
 */
export declare function isIn(obj: unknown, ...data: unknown[]): boolean;
/**
 * Method parse JSON content with comments
 * @param content - stringify JSON
 */
export declare function parseJSONWithComments<T>(content: string): T;
export declare function setCookie(name: string, value: string | number | boolean, days: number): string;
export declare function getCookie(cname: string, source?: string): string;
export declare function parseParams<T>(query?: string, separator?: string, delimiter?: string): T;
export declare function objectToQueryParams(obj: StringMap<string>): string;
export declare function serialize(obj: any): string;
export declare function parse<T>(obj: string): T;
export declare function map<S = any, T = S>(source: S, data: {
    attrS: keyof S;
    attrD?: keyof T;
    mapFunction: (src: any) => any;
}[]): T;
