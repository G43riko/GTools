import { expect } from "chai";
import "mocha";
import { MockData } from "../MockData";
import { Gender } from "./gender.model";

describe("Gender", () => {
    it("It should parse MAN", () => {
        MockData.man.forEach((key) => {
            expect(Gender.parse(key), key + " is a MAN").to.be.equal("MAN");
        });
    });
    it("It should parse WOMAN", () => {
        MockData.woman.forEach((key) => {
            expect(Gender.parse(key), key + " is a WOMAN").to.be.equal("WOMAN");
        });
    });
    it("It should not parse any gender", () => {
        [...MockData.randomStrings, ...MockData.nothing, null, "", undefined].forEach((key) => {
            expect(Gender.parse(key as string), key + " is not valid gender").to.be.equal("");
        });
    });
});
