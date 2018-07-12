import { expect } from "chai";
import * as fs from "fs";
import "mocha";
import { FileUtils } from "./FileUtils";

describe("File utils", () => {
    describe.skip("scanDirRecursive", () => {
        it("it should return list of files in folder", (done) => {
            FileUtils.scanDirRecursive("src/utils").then((data) => {
                const changedData = data.map((e) => e.replace(__dirname, ""));
                expect(changedData).to.include.members([
                    "\\ArrayUtils.spec.ts",
                    "\\ArrayUtils.ts",
                    "\\DomUtils.ts",
                    "\\FileUtils.spec.ts",
                    "\\FileUtils.ts",
                    "\\MathUtils.spec.ts",
                    "\\MathUtils.ts",
                    "\\MiscUtils.spec.ts",
                    "\\MiscUtils.ts",
                    "\\ObjectUtils.spec.ts",
                    "\\ObjectUtils.ts",
                    "\\StringCheckers.spec.ts",
                    "\\StringCheckers.ts",
                    "\\StringUtils.spec.ts",
                    "\\StringUtils.ts",
                    "\\TimeUtils.spec.ts",
                    "\\TimeUtils.ts",
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
                FileUtils.loadFileJSON(fileName, (data) => {
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
