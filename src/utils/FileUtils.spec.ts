import { expect } from "chai";
import * as fs from "fs";
import "mocha";
import { FileUtils } from "./FileUtils";

describe("File utils", () => {
    describe("scanDirRecursive", () => {
        it("it should return list of files in folder", (done) => {
            FileUtils.scanDirRecursive("src/utils").then((data) => {
                const changedData = data.map((e) =>
                    e.replace(__dirname, "").replace(/^\W*/, ""),
                );

                expect(changedData).to.include.members([
                    "analytics-utils.ts",
                    "array-utils.ts",
                    "coerce-util.ts",
                    "color-utils.ts",
                    "date-utils.ts",
                    "html-utils.ts",
                    "image-utils.ts",
                    "math-utils.ts",
                    "misc-utils.ts",
                    "input-utils.ts",
                    "object-utils.ts",
                    "parser-utils.ts",
                    "process-utils.ts",
                    "reflection-utils.ts",
                    "string-utils.ts",
                    "svg-utils.ts",
                ]);
                done();
            }).catch(console.error);
        });
        it("it should reject promise because folder does not exist", (done) => {
            FileUtils.scanDirRecursive("gabriel").catch((error) => {
                expect(error).to.exist;
                done();
            });
        });
        it("it should reject promise because target is file", (done) => {
            FileUtils.scanDirRecursive("package.json").catch((error: string) => {
                expect(error).to.exist;
                expect(typeof error.endsWith).to.be.equal("function");
                expect(error.endsWith("is not directory")).to.be.true;
                done();
            });
        });
    });
    describe("File manipulation", () => {
        const fileName = "tmpFile.txt";
        const object   = {
            a: "aa",
            b: true,
            c: 23,
            e: [1, "2", true, {}],
            f: {
                a: "aa",
                b: 12,
            },
        };
        it("It should save file", (done) => {
            expect(fs.existsSync(fileName)).to.be.false;
            FileUtils.saveJsonFile(object, fileName).then(() => {
                expect(fs.existsSync(fileName)).to.be.true;
                FileUtils.loadFileJSON(fileName, (err, data) => {
                    FileUtils.removeFile(fileName).then(() => {
                        expect(fs.existsSync(fileName)).to.be.false;
                        expect(data).to.deep.equal(object);
                        done();
                    }).catch((error) => {
                        console.error(error);
                        done();
                    });
                });
            }).catch((error) => {
                console.error(error);
                done();
            });
        });
    });
});
