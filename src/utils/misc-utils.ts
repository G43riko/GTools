import { StringMap } from "../types";

/**
 * Method parse cookies
 *
 * @param cookies - cooke to parse
 */
export function parseCookies(cookies: string): StringMap {
    const list: StringMap = {};
    const data            = cookies ? cookies.toString().split(";") : [];
    data.forEach((cookie) => {
        const parts     = cookie.split("=");
        const shiftPart = parts.shift();
        if (shiftPart) {
            list[shiftPart.trim()] = decodeURI(parts.join("="));
        }
    });

    return list;
}

/**
 * Method check if object is in array
 *
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
export function isIn<T>(obj: T, ...data: unknown[]): boolean {
    if (Array.isArray(data[0])) {
        if (data[0].indexOf(obj) >= 0) {
            return true;
        }
    } else if (data.indexOf(obj) >= 0) {
        return true;
    }

    return false;
}

/**
 * Method parse JSON content with comments
 *
 * @param content - stringify JSON
 */
export function parseJSONWithComments<T>(content: string): T {
    return JSON.parse(content.replace(/\/\/.*\n/g, ""));
}

// TODO: should append cookies or add option to appending instead of replace cookies
// TODO: expires must be only in the end of cookies
export function setCookie(name: string, value: string | number | boolean, days: number): string {
    const d: Date = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const finalCookies = `${name}=${value};expires=${d.toUTCString()}`;
    if (typeof document !== "undefined") {
        document.cookie = finalCookies;
    }

    return `${name}=${value}`;
}

export function getCookie(cname: string, source = typeof document !== "undefined" ? document.cookie : ""): string {
    const name = `${cname}=`;
    const ca   = source.split(";");
    for (let c of ca) {
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

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
export function parseParams<T>(
    query     = typeof window !== "undefined" ? window.location.search.substring(1) : "",
    separator = "&",
    delimiter = "=",
): T {
    const queryString: any = {};
    const vars: string[]   = query.split(separator);
    for (const pair of vars) {
        const [key, value] = pair.split(delimiter);
        if (typeof queryString[key] === "undefined") {
            queryString[key] = decodeURIComponent(value);
        } else if (typeof queryString[key] === "string") {
            queryString[key] = [queryString[key], decodeURIComponent(value)];
        } else {
            queryString[key].push(decodeURIComponent(value));
        }
    }

    return queryString as T;
}

/**
 * @example
 *  objectToQueryParams({a: "aa", b: "bb"}) => ?a=aa&b=bb
 *  objectToQueryParams({a: 21, b: 22}) => ?a=21&b=22
 */
export function objectToQueryParams(obj: StringMap<unknown>): string {
    // TODO: add url prefix
    let result = "";
    for (const objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            result += `${result.length > 0 ? "&" : "?"}${objKey}=${obj[objKey]}`;
        }
    }

    return result;
}

export function serialize(obj: any): string {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
            obj[key] = obj[key].toString();
        }
    }

    return JSON.stringify(obj);
}

export function parse<T>(obj: string): T {
    const result = JSON.parse(obj);
    for (const i in result) {
        if (!result.hasOwnProperty(i) ||
            typeof result[i] !== "string" || !(result[i].indexOf("function (") === 0 ||
                result[i].match(/^\([_a-zA-Z0-9]+( *, *[_a-zA-Z0-9]+)*\) *=>/))
        ) {
            continue;
        }
        try {
            // tslint:disable-next-line no-eval
            eval(`result[i] = ${result[i]}`);
        } catch (e) {
            result[i] = e;
        }
    }

    return result;
}

/**
 * @example
 *  map({name: "gabriel", age: 29.534}, {name: {mapper: (e) => e.toUpperCase(), destVal: "firstName"}, age: {mapper: Math.round}) ==> {surName: "GABRIEL", age: 30}
 */
export function mapObject<S = any, T = S>(source: S, data: { [attr in keyof S]: { mapper: (sourceVal: S[attr]) => T[keyof T]; destVal: keyof T } }): T {
    const result: Partial<T> = {};

    for (const key in data) {
        if (!data.hasOwnProperty(key)) {
            continue;
        }

        const item      = data[key];
        const realKey   = item.destVal ?? key;
        result[realKey] = item.mapper(source[key]);
    }

    return result as T;
}

/**
 * @example
 *  map({name: "gabriel", age: 29.534}, [{attrS: name}])
 */
export function map<S = any, T = S>(source: S, data: { attrS: keyof S; attrD?: keyof T; mapFunction: (src: any) => any }[]): T {
    const destination: any = {};

    data.forEach((item) => {
        if (item.mapFunction) {
            if (item.attrD) {
                destination[item.attrD] = item.mapFunction(source[item.attrS]);
            } else {
                destination[item.attrS] = item.mapFunction(source[item.attrS]);
            }

            return;
        }
        if (item.attrD) {
            destination[item.attrD] = source[item.attrS];
        } else {
            destination[item.attrS] = source[item.attrS];
        }
    });

    return destination;
}
