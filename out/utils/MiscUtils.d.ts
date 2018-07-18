/**
 * @typedef  {(Object)} any
 */
export interface StringMap {
    [s: string]: string;
}
export declare class MiscUtils {
    /**
     * Create class by name and list of parameters
     *
     * @param name - class name
     * @param {any[]} args - constructor parameter
     * @returns {any} - created object
     */
    static createClass(name: any, args: any[]): any;
    static parseCookies(cookies: string): StringMap;
    static isIn(obj: any, ...data: any[]): boolean;
    static setCookie(name: string, value: string | number | boolean, days: number): string;
    static getCookie(cname: string, source?: string): string;
    static parseParams(query?: string, separator?: string, delimiter?: string): any;
    static roughSizeOfObject(object: any): number;
    static objectToQueryParams(obj: StringMap): string;
    static includeFile(file: string): void;
}