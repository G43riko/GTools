"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentFrom = exports.getContentFromFile = exports.getContentFromUrl = exports.getContent = exports.getPublicIp = exports.serverDownloadFile = void 0;
var fs_1 = require("fs");
var http_1 = require("http");
var https_1 = require("https");
function serverDownloadFile(url, fileName) {
    var file = fs_1.createWriteStream(fileName);
    http_1.get(url, function (response) { return response.pipe(file); });
}
exports.serverDownloadFile = serverDownloadFile;
function getPublicIp() {
    var options = {
        host: "ipv4bot.whatismyipaddress.com",
        port: 80,
        path: "/"
    };
    return new Promise(function (success, reject) {
        http_1.get(options, function (res) {
            res.on("data", function (chunk) {
                success(String(chunk));
            });
        }).on("error", reject);
    });
}
exports.getPublicIp = getPublicIp;
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
function getContent(uri) {
    var url = tryParseUrl(uri);
    if (url) {
        return getContentFromUrl(url);
    }
    return getContentFromFile(uri);
}
exports.getContent = getContent;
function getContentFromUrl(url) {
    if (url.protocol === "http") {
        return processClientRequest(url.href, http_1.request);
    }
    if (url.protocol === "https") {
        return processClientRequest(url.href, https_1.request);
    }
    throw new Error("Unknown protocol " + url.protocol);
}
exports.getContentFromUrl = getContentFromUrl;
function getContentFromFile(path, encoding) {
    if (encoding === void 0) { encoding = "utf8"; }
    return new Promise(function (success, reject) {
        fs_1.readFile(path, { encoding: encoding }, function (error, data) {
            if (error) {
                return reject(error);
            }
            success(data);
        });
    });
}
exports.getContentFromFile = getContentFromFile;
/**
 * @deprecated use {@link getContentFromUrl} instead
 * @param url - resource url
 */
function getContentFrom(url) {
    return getContent(url);
}
exports.getContentFrom = getContentFrom;
