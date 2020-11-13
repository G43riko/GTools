import * as fs from "fs";
import * as path from "path";
import { StringUtils } from "./deprecated/StringUtils";
function walk(dir, done) {
    const results = [];
    fs.readdir(dir, (err, list) => {
        if (err) {
            return done(err);
        }
        let pending = list.length;
        if (!pending) {
            return done(null, results);
        }
        list.forEach((file) => {
            file = path.resolve(dir, file);
            fs.stat(file, (err1, stat) => {
                if (stat && stat.isDirectory()) {
                    walk(file, (err2, res) => {
                        if (!res) {
                            return;
                        }
                        results.push(...res);
                        pending--;
                        if (!pending) {
                            done(null, results);
                        }
                    });
                }
                else {
                    results.push(file);
                    pending--;
                    if (!pending) {
                        done(null, results);
                    }
                }
            });
        });
    });
}
export class FileUtils {
    static scanDirRecursive(dir) {
        return new Promise((success, reject) => {
            fs.stat(dir, (err0, stats) => {
                if (err0) {
                    return reject(err0);
                }
                if (!stats.isDirectory()) {
                    return reject(dir + " is not directory");
                }
                walk(dir, (err, data) => {
                    if (err) {
                        return reject(err);
                    }
                    success(data);
                });
            });
        });
    }
    static loadFileJSON(url, callback) {
        FileUtils.loadFile(url, (err, data) => callback(err, JSON.parse(data)));
    }
    static loadFile(url, callback, encoding = "utf8") {
        fs.readFile(url, encoding, callback);
    }
    static saveJsonFile(data, fileName) {
        return FileUtils.saveFile(JSON.stringify(data), fileName);
    }
    static saveFile(data, fileName) {
        return new Promise((success, reject) => {
            fs.writeFile(fileName, data, (err) => {
                err ? reject(err) : success("The file was saved!");
            });
        });
    }
    static removeFile(fileName) {
        return new Promise((success, reject) => {
            fs.unlink(fileName, (err) => {
                err ? reject(err) : success("The file was removed!");
            });
        });
    }
    static checkExtension(name, extension) {
        if (name.endsWith(extension)) {
            return name;
        }
        return StringUtils.joinSingle(name, ".", extension);
    }
}
//# sourceMappingURL=FileUtils.js.map