import * as Misc from "../misc-utils";
import * as NetClient from "../net-client-utils";
import * as Objects from "../object-utils";
import * as Reflection from "../reflection-utils";
export class MiscUtils {
    static createClass(name, args) {
        return Reflection.createClass(name, args);
    }
    static parseCookies(cookies) {
        return Misc.parseCookies(cookies);
    }
    static isIn(obj, ...data) {
        return Misc.isIn(obj, ...data);
    }
    static parseJSONWithComments(content) {
        return Misc.parseJSONWithComments(content);
    }
    static setCookie(name, value, days) {
        return Misc.setCookie(name, value, days);
    }
    static getCookie(cname, source = typeof document !== "undefined" ? document.cookie : "") {
        return Misc.getCookie(cname, source);
    }
    static parseParams(query = typeof window !== "undefined" ? window.location.search.substring(1) : "", separator = "&", delimiter = "=") {
        return Misc.parseParams(query, separator, delimiter);
    }
    static roughSizeOfObject(object) {
        return Objects.roughSizeOfObject(object);
    }
    static objectToQueryParams(obj) {
        return Misc.objectToQueryParams(obj);
    }
    static includeFile(file) {
        return NetClient.includeFile(file);
    }
    static serialize(obj) {
        return Misc.serialize(obj);
    }
    static parse(obj) {
        return Misc.parse(obj);
    }
    map(source, data) {
        return Misc.map(source, data);
    }
}
//# sourceMappingURL=MiscUtils.js.map