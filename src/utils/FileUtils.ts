import * as fs from "fs";
import * as path from "path";

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
}
