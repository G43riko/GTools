import * as fs from "fs";
import * as path from "path";
import { StringUtils } from "./StringUtils";

function walk(dir: string, done: (error: any, files?: string[]) => any): void {
    const results: string[] = [];
    fs.readdir(dir, (err: NodeJS.ErrnoException, list: string[]) => {
        if (err) {
            return done(err);
        }
        let pending: number = list.length;
        if (!pending) {
            return done(null, results);
        }
        list.forEach((file: string) => {
            file = path.resolve(dir, file);
            fs.stat(file, (err1: NodeJS.ErrnoException, stat: any) => {
                if (stat && stat.isDirectory()) {
                    walk(file, (err2: any, res?: string[]) => {
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
    public static scanDirRecursive(dir: string): Promise<string[]> {
        return new Promise<string[]>((success, reject) => {
            fs.stat(dir, (err0: NodeJS.ErrnoException, stats: fs.Stats) => {
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

    public static loadFileJSON(url: string, callback: (err: NodeJS.ErrnoException, data: any) => any): void {
        FileUtils.loadFile(url, (err, data) => callback(err, JSON.parse(data)));
    }

    public static loadFile(url: string, callback: (err: NodeJS.ErrnoException, data: string) => any, encoding = "utf8"): void {
        fs.readFile(url, encoding, callback);
    }

    public static saveJsonFile(data: any, fileName: string): Promise<string> {
        return FileUtils.saveFile(JSON.stringify(data), fileName);
    }

    public static saveFile(data: string, fileName: string): Promise<string> {
        return new Promise((success, reject) => {
            fs.writeFile(fileName, data, (err) => {
                err ? reject(err) : success("The file was saved!");
            });
        });
    }

    public static removeFile(fileName: string): Promise<string> {
        return new Promise((success, reject) => {
            fs.unlink(fileName, (err) => {
                err ? reject(err) : success("The file was removed!");
            });
        });
    }

    public static checkExtension(name: string, extension: string): string {
        if (name.endsWith(extension)) {
            return name;
        }

        return StringUtils.joinSingle(name, ".", extension);
    }
}
