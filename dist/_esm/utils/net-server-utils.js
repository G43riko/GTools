import { createWriteStream, readFile } from "fs";
import { get as HttpGet, request as HttpRequest } from "http";
import { request as HttpsRequest } from "https";
export function serverDownloadFile(url, fileName) {
    var file = createWriteStream(fileName);
    HttpGet(url, function (response) { return response.pipe(file); });
}
export function getPublicIp() {
    var options = {
        host: "ipv4bot.whatismyipaddress.com",
        port: 80,
        path: "/",
    };
    return new Promise(function (success, reject) {
        HttpGet(options, function (res) {
            res.on("data", function (chunk) {
                success(String(chunk));
            });
        }).on("error", reject);
    });
}
function tryParseUrl(url) {
    if (url instanceof URL) {
        return url;
    }
    try {
        return new URL(url.toString());
    }
    catch (e) {
        return null;
    }
}
// @ts-ignore
function processClientRequest(url, req) {
    return new Promise(function (success, reject) {
        var request = req(url, function (res) {
            var data = "";
            res.on("data", function (chunk) {
                data += chunk;
            });
            res.on("end", function () {
                success(data);
            });
        });
        request.on("error", function (e) {
            reject(e);
        });
        request.end();
    });
}
export function getContent(uri) {
    var url = tryParseUrl(uri);
    if (url) {
        return getContentFromUrl(url);
    }
    return getContentFromFile(uri);
}
export function getContentFromUrl(url) {
    if (url.protocol === "http") {
        return processClientRequest(url.href, HttpRequest);
    }
    if (url.protocol === "https") {
        return processClientRequest(url.href, HttpsRequest);
    }
    throw new Error("Unknown protocol " + url.protocol);
}
export function getContentFromFile(path, encoding) {
    if (encoding === void 0) { encoding = "utf8"; }
    return new Promise(function (success, reject) {
        readFile(path, { encoding: encoding }, function (error, data) {
            if (error) {
                return reject(error);
            }
            success(data);
        });
    });
}
/**
 * @deprecated use {@link getContentFromUrl} instead
 * @param url - resource url
 */
export function getContentFrom(url) {
    return getContent(url);
}
