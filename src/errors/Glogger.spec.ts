import { expect } from "chai";
import "mocha";
import { GLogger } from "./GLogger";

describe.skip("GLogger", () => {
    it("It should test getLine method", () => {
        expect(GLogger.getLine()).to.be.equal("at (D:\\Projects\\GTools\\src\\errors\\Glogger.spec.ts:7:24)");
    });
});
