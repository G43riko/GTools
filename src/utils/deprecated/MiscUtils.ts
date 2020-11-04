/**
 * @typedef  {(Object)} any
 */
import { StringMap } from "../../types/string-map.interface";
import * as Misc from "../misc-utils";
import * as NetClient from "../net-client-utils";
import * as Objects from "../object-utils";
import * as Reflection from "../reflection-utils";

/**
 * @deprecated use {@link Misc} instead
 */
export class MiscUtils {
    /**
     * Create class by name and list of parameters
     *
     * @deprecated use {@link createClass} instead
     *
     * @param name - class name
     * @param args - constructor parameter
     * @returns created object
     */
    public static createClass(name: any, args: any[]): any {
        return Reflection.createClass(name, args);
    }

    /**
     * Method parse cookies
     * @param cookies - cooke to parse
     */
    public static parseCookies(cookies: string): StringMap {
        return Misc.parseCookies(cookies);
    }

    /**
     * Method check if object is in array
     * @param obj - searched object
     * @param data - array of objects to be compare with searched object
     */
    public static isIn<T>(obj: T, ...data: T[] | [T[]]): boolean {
        return Misc.isIn(obj, ...data);
    }

    /**
     * Method parse JSON content with comments
     * @param content - stringify JSON
     */
    public static parseJSONWithComments(content: string): any {
        return Misc.parseJSONWithComments(content);
    }

    // TODO: should append cookies or add option to appending instead of replace cookies
    // TODO: expires must be only in the end of cookies
    public static setCookie(name: string, value: string | number | boolean, days: number): string {
        return Misc.setCookie(name, value, days);
    }

    public static getCookie(cname: string, source = typeof document !== "undefined" ? document.cookie : ""): string {
        return Misc.getCookie(cname, source);
    }

    public static parseParams(query     = typeof window !== "undefined" ? window.location.search.substring(1) : "",
                              separator = "&",
                              delimiter = "="): any {
        return Misc.parseParams(query, separator, delimiter);
    }

    /**
     * @deprecated use {@link roughSizeOfObject} instead
     *
     * @param object - object to determine size
     */
    public static roughSizeOfObject(object: any): number {
        return Objects.roughSizeOfObject(object);
    }

    public static objectToQueryParams(obj: StringMap): string {
        return Misc.objectToQueryParams(obj);
    }

    /**
     * @deprecated use {@link includeFile} instead
     *
     * @param file - path to file
     */
    public static includeFile(file: string): void {
        return NetClient.includeFile(file);
    }

    public static serialize(obj: any): string {
        return Misc.serialize(obj);
    }

    public static parse(obj: string): any {
        return Misc.parse(obj);
    }

    public map<S = any, T = S>(source: S, data: { attrS: keyof S, attrD?: keyof T, mapFunction: (src: any) => any }[]): T {
        return Misc.map(source, data);
    }
}
