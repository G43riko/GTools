import { expect } from "chai";
import "mocha";
import { coerceBooleanProperty } from "./coerce-util";

describe("Coerce utils", () => {
    it("It should test false cases", () => {
        expect(coerceBooleanProperty(null)).to.be.false;
        expect(coerceBooleanProperty(false)).to.be.false;
        expect(coerceBooleanProperty("false")).to.be.false;
    });


    it("It should test true cases", () => {
        expect(coerceBooleanProperty(undefined)).to.be.true;
        expect(coerceBooleanProperty(1)).to.be.true;
        expect(coerceBooleanProperty(0)).to.be.true;
        expect(coerceBooleanProperty("")).to.be.true;
        expect(coerceBooleanProperty("something")).to.be.true;
        expect(coerceBooleanProperty("true")).to.be.true;
        expect(coerceBooleanProperty(true)).to.be.true;
    });
});
