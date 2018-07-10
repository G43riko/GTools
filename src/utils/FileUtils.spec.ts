import { expect } from "chai";
import "mocha";
import { FileUtils } from "./FileUtils";

describe("File utils", () => {
    describe("scanDirRecursive", () => {
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
});
