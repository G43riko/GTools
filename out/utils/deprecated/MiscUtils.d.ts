import { StringMap } from "../../types/string-map.interface";

export declare class MiscUtils {
    static createClass(name: any, args: any[]): any;
    static parseCookies(cookies: string): StringMap;
    static isIn<T>(obj: T, ...data: T[] | [T[]]): boolean;
    static parseJSONWithComments(content: string): any;
    static setCookie(name: string, value: string | number | boolean, days: number): string;
    static getCookie(cname: string, source?: string): string;
    static parseParams(query?: string, separator?: string, delimiter?: string): any;
    static roughSizeOfObject(object: any): number;
    static objectToQueryParams(obj: StringMap): string;
    static includeFile(file: string): void;
    static serialize(obj: any): string;
    static parse(obj: string): any;
    map<S = any, T = S>(source: S, data: {
        attrS: keyof S;
        attrD?: keyof T;
        mapFunction: (src: any) => any;
    }[]): T;
}
