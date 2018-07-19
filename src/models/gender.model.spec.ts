import { expect } from "chai";
import "mocha";
import { TestCase } from "../TestCase";
import { Gender } from "./gender.model";

describe("Gender", () => {
    it("It should parse MAN", () => {
        TestCase.man.forEach((key) => {
            expect(Gender.parse(key), key + " is a MAN").to.be.equal("MAN");
        });
    });
    it("It should parse WOMAN", () => {
        TestCase.woman.forEach((key) => {
            expect(Gender.parse(key), key + " is a WOMAN").to.be.equal("WOMAN");
        });
    });
    it("It should not parse any gender", () => {
        [...TestCase.randomStrings, ...TestCase.nothing, null, "", undefined].forEach((key) => {
            expect(Gender.parse(key as string), key + " is not valid gender").to.be.equal("");
        });
    });
});
