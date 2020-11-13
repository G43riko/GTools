import { StringMap } from "../types/string-map.interface";

export declare function parseCookies(cookies: string): StringMap<string>;
export declare function isIn<T>(obj: T, ...data: unknown[]): boolean;
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
