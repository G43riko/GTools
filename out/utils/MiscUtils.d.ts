import { StringMap } from "../interfaces/string-map.interface";

export declare class MiscUtils {
    /**
     * Create class by name and list of parameters
     *
     * @param name - class name
     * @param args - constructor parameter
     * @returns created object
     */
    static createClass(name: any, args: any[]): any;

    /**
     * Method parse cookies
     * @param cookies - cooke to parse
     */
    static parseCookies(cookies: string): StringMap;

    /**
     * Method check if object is in array
     * @param obj - searched object
     * @param data - array of objects to be compare with searched object
     */
    static isIn(obj: any, ...data: any[]): boolean;

    /**
     * Method parse JSON content with comments
     * @param content - stringify JSON
     */
    static parseJSONWithComments(content: string): any;
    static setCookie(name: string, value: string | number | boolean, days: number): string;
    static getCookie(cname: string, source?: string): string;
    static parseParams(query?: string, separator?: string, delimiter?: string): any;
    static roughSizeOfObject(object: any): number;
    static objectToQueryParams(obj: StringMap): string;
    static includeFile(file: string): void;
    static serialize(obj: any): string;
    static parse(obj: string): any;
}
