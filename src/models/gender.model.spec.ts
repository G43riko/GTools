import { expect } from "chai";
import "mocha";
import { MockData } from "../MockData";
import { parseGender } from "./gender.model";

describe("ParseGender", () => {
    it("It should parse MAN", () => {
        MockData.man.forEach((key) => {
            expect(parseGender(key), key + " is a MAN").to.be.equal("MAN");
        });
    });
    it("It should parse WOMAN", () => {
        MockData.woman.forEach((key) => {
            expect(parseGender(key), key + " is a WOMAN").to.be.equal("WOMAN");
        });
    });
    it("It should not parse any gender", () => {
        [...MockData.randomStrings, ...MockData.nothing, null, "", undefined].forEach((key) => {
            expect(parseGender(key as string), key + " is not valid gender").to.be.null;
        });
    });
});
