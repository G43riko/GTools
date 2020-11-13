export function parseCookies(cookies) {
    const list = {};
    const data = cookies ? cookies.toString()
        .split(";") : [];
    data.forEach((cookie) => {
        const parts = cookie.split("=");
        const shiftPart = parts.shift();
        if (shiftPart) {
            list[shiftPart.trim()] = decodeURI(parts.join("="));
        }
    });
    return list;
}
export function isIn(obj, ...data) {
    if (Array.isArray(data[0])) {
        if (data[0].indexOf(obj) >= 0) {
            return true;
        }
    }
    else if (data.indexOf(obj) >= 0) {
        return true;
    }
    return false;
}
export function parseJSONWithComments(content) {
    return JSON.parse(content.replace(/\/\/.*\n/g, ""));
}
export function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const finalCookies = `${name}=${value};expires=${d.toUTCString()}`;
    if (typeof document !== "undefined") {
        document.cookie = finalCookies;
    }
    return `${name}=${value}`;
}
export function getCookie(cname, source = typeof document !== "undefined" ? document.cookie : "") {
    const name = cname + "=";
    const ca = source.split(";");
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
export function parseParams(query = typeof window !== "undefined" ? window.location.search.substring(1) : "", separator = "&", delimiter = "=") {
    const queryString = {};
    const vars = query.split(separator);
    for (const pair of vars) {
        const [key, value] = pair.split(delimiter);
        if (typeof queryString[key] === "undefined") {
            queryString[key] = decodeURIComponent(value);
        }
        else if (typeof queryString[key] === "string") {
            queryString[key] = [queryString[key], decodeURIComponent(value)];
        }
        else {
            queryString[key].push(decodeURIComponent(value));
        }
    }
    return queryString;
}
export function objectToQueryParams(obj) {
    let result = "";
    for (const objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            result += `${result.length > 0 ? "&" : "?"}${objKey}=${obj[objKey]}`;
        }
    }
    return result;
}
export function serialize(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
            obj[key] = obj[key].toString();
        }
    }
    return JSON.stringify(obj);
}
export function parse(obj) {
    const result = JSON.parse(obj);
    for (const i in result) {
        if (!result.hasOwnProperty(i) ||
            typeof result[i] !== "string" || !(result[i].indexOf("function (") === 0 ||
            result[i].match(/^\([_a-zA-Z0-9]+( *, *[_a-zA-Z0-9]+)*\) *=>/))) {
            continue;
        }
        try {
            eval("result[i] = " + result[i]);
        }
        catch (e) {
            result[i] = e;
        }
    }
    return result;
}
export function map(source, data) {
    const destination = {};
    data.forEach((item) => {
        if (item.mapFunction) {
            if (item.attrD) {
                destination[item.attrD] = item.mapFunction(source[item.attrS]);
            }
            else {
                destination[item.attrS] = item.mapFunction(source[item.attrS]);
            }
            return;
        }
        if (item.attrD) {
            destination[item.attrD] = source[item.attrS];
        }
        else {
            destination[item.attrS] = source[item.attrS];
        }
    });
    return destination;
}
//# sourceMappingURL=misc-utils.js.map