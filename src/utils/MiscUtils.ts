/**
 * @typedef  {(Object)} any
 */
import { NotBrowserException } from "../errors/NotBrowserException";
import { StringMap } from "../interfaces/string-map.interface";

export class MiscUtils {
    /**
     * Create class by name and list of parameters
     *
     * @param name - class name
     * @param args - constructor parameter
     * @returns - created object
     */
    public static createClass(name: any, args: any[]): any {
        const temp = Object.create(name.prototype);
        name.apply(temp, args);

        return temp;
    }

    public static parseCookies(cookies: string): StringMap {
        const list: StringMap = {};
        const data            = cookies ? cookies.toString()
                                                 .split(";") : [];
        data.forEach((cookie) => {
            const parts     = cookie.split("=");
            const shiftPart = parts.shift();
            if (shiftPart) {
                list[shiftPart.trim()] = decodeURI(parts.join("="));
            }
        });

        return list;
    }

    public static isIn(obj: any, ...data: any[]): boolean {
        if (Array.isArray(data[0])) {
            if (data[0].indexOf(obj) >= 0) {
                return true;
            }
        } else if (data.indexOf(obj) >= 0) {
            return true;
        }

        return false;
    }

    // TODO: should append cookies or add option to appending instead of replace cookies
    // TODO: expires must be only in the end of cookies
    public static setCookie(name: string, value: string | number | boolean, days: number): string {
        const d: Date = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const finalCookies = `${name}=${value};expires=${d.toUTCString()}`;
        if (typeof document !== "undefined") {
            document.cookie = finalCookies;
        }

        return `${name}=${value}`;
    }

    public static getCookie(cname: string, source = typeof document !== "undefined" ? document.cookie : ""): string {
        const name = cname + "=";
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

    public static parseParams(query     = typeof window !== "undefined" ? window.location.search.substring(1) : "",
                              separator = "&",
                              delimiter = "="): any {
        const queryString: any = {};
        const vars: string[]   = query.split(separator);
        for (const key of vars) {
            const pair = key.split(delimiter);
            if (typeof queryString[pair[0]] === "undefined") {
                queryString[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof queryString[pair[0]] === "string") {
                queryString[pair[0]] = [queryString[pair[0]], decodeURIComponent(pair[1])];
            } else {
                queryString[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }

        return queryString;
    }

    public static roughSizeOfObject(object: any): number {
        const objectList   = [];
        const stack: any[] = [object];
        let bytes          = 0;
        while (stack.length) {
            const value: any = stack.pop();
            if (typeof value === "boolean") {
                bytes += 4;
            } else if (typeof value === "string") {
                bytes += value.length << 1;
            } else if (typeof value === "number") {
                bytes += 8;
            } else if (typeof value === "object" && objectList.indexOf(value) === -1) {
                objectList.push(value);
                for (const key in value) {
                    if (value.hasOwnProperty(key)) {
                        stack.push(value[key]);
                    }
                }
            }
        }

        return bytes;
    }

    public static objectToQueryParams(obj: StringMap): string {
        // TODO: add url prefix
        let result = "";
        for (const objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                result += `${result.length > 0 ? "&" : "?"}${objKey}=${obj[objKey]}`;
            }
        }

        return result;
    }

    public static includeFile(file: string): void {
        if (typeof document === "undefined") {
            throw new NotBrowserException();
        }
        const script = document.createElement("script");
        if (!script) {
            return;
        }
        script.src   = file;
        script.type  = "text/javascript";
        script.defer = true;
        document.head.appendChild(script);
    }

    public static serialize(obj: any): string {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
                obj[key] = obj[key].toString();
            }
        }

        return JSON.stringify(obj);
    }

    public static parse(obj: string): any {
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
                eval("result[i] = " + result[i]);
            } catch (e) {
                result[i] = e;
            }
        }

        return result;
    }
}
