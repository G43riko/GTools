import { createWriteStream, readFile } from "fs";
import { get as HttpGet, request as HttpRequest } from "http";
import { request as HttpsRequest } from "https";
export function serverDownloadFile(url, fileName) {
    const file = createWriteStream(fileName);
    HttpGet(url, (response) => response.pipe(file));
}
export function getPublicIp() {
    const options = {
        host: "ipv4bot.whatismyipaddress.com",
        port: 80,
        path: "/",
    };
    return new Promise((success, reject) => {
        HttpGet(options, (res) => {
            res.on("data", (chunk) => {
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
function processClientRequest(url, req) {
    return new Promise((success, reject) => {
        const request = req(url, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                success(data);
            });
        });
        request.on("error", (e) => {
            reject(e);
        });
        request.end();
    });
}
export function getContent(uri) {
    const url = tryParseUrl(uri);
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
export function getContentFromFile(path, encoding = "utf8") {
    return new Promise((success, reject) => {
        readFile(path, { encoding }, (error, data) => {
            if (error) {
                return reject(error);
            }
            success(data);
        });
    });
}
export function getContentFrom(url) {
    return getContent(url);
}
//# sourceMappingURL=net-server-utils.js.map