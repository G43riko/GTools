"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function walk(dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) {
            return done(err);
        }
        var pending = list.length;
        if (!pending) {
            return done(null, results);
        }
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err1, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err2, res) {
                        if (!res) {
                            return;
                        }
                        results.push.apply(results, res);
                        if (!--pending) {
                            done(null, results);
                        }
                    });
                }
                else {
                    results.push(file);
                    if (!--pending) {
                        done(null, results);
                    }
                }
            });
        });
    });
}
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.scanDirRecursive = function (dir) {
        return new Promise(function (success, reject) {
            fs.stat(dir, function (err0, stats) {
                if (err0) {
                    return reject(err0);
                }
                if (!stats.isDirectory()) {
                    return reject(dir + " is not directory");
                }
                walk(dir, function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    success(data);
                });
            });
        });
    };
    FileUtils.loadFileJSON = function (url, callback) {
        FileUtils.loadFile(url, function (data) { return callback(JSON.parse(data)); });
    };
    FileUtils.loadFile = function (url, callback, encoding) {
        if (encoding === void 0) { encoding = "utf8"; }
        fs.readFile(url, encoding, function (err, data) {
            if (err) {
                throw err;
            }
            callback(data);
        });
    };
    FileUtils.saveJsonFile = function (data, fileName) {
        return FileUtils.saveFile(JSON.stringify(data), fileName);
    };
    FileUtils.saveFile = function (data, fileName) {
        return new Promise(function (success, reject) {
            fs.writeFile(fileName, data, function (err) {
                err ? reject(err) : success("The file was saved!");
            });
        });
    };
    FileUtils.removeFile = function (fileName) {
        return new Promise(function (success, reject) {
            fs.unlink(fileName, function (err) {
                err ? reject(err) : success("The file was removed!");
            });
        });
    };
    return FileUtils;
}());
exports.FileUtils = FileUtils;