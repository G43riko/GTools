"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var http = require("http");
var https = require("https");
var NetUtils = /** @class */ (function () {
    function NetUtils() {
    }
    NetUtils.downloadFile = function (url, fileName) {
        var file = fs.createWriteStream(fileName);
        http.get(url, function (response) { return response.pipe(file); });
    };
    NetUtils.getPublicIp = function () {
        var options = {
            host: "ipv4bot.whatismyipaddress.com",
            port: 80,
            path: "/"
        };
        return new Promise(function (success, reject) {
            http.get(options, function (res) {
                res.on("data", function (chunk) {
                    success(String(chunk));
                });
            }).on("error", reject);
        });
    };
    NetUtils.getContentFrom = function (url) {
        var callback = function (res, success) {
            var data = "";
            res.on("data", function (chunk) { return data += chunk; });
            res.on("end", function () { return success(data); });
        };
        return new Promise(function (success, reject) {
            if (url.startsWith("https")) {
                var request = https.get(url, {}, function (res) { return callback(res, success); });
                request.on("error", reject);
                request.end();
            }
            else {
                var request = http.request(url, {}, function (res) { return callback(res, success); });
                request.on("error", reject);
                request.end();
            }
        });
    };
    return NetUtils;
}());
exports.NetUtils = NetUtils;
