"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetUtils = void 0;
var fs = __importStar(require("fs"));
var http = __importStar(require("http"));
var https = __importStar(require("https"));
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
