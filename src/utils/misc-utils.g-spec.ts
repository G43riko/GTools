import { expect } from "chai";
import "mocha";
import * as TESTED_OBJ from "./misc-utils";

describe("misc-utils", () => {

    it("It should test function isIn", () => {
        expect(TESTED_OBJ.isIn("a", "b", "d", "a")).to.be.true;
        expect(TESTED_OBJ.isIn("a", ["b", "d", "a"])).to.be.true;
        expect(TESTED_OBJ.isIn("c", "b", "d", "a")).to.be.false;
        expect(TESTED_OBJ.isIn("c", ["b", "d", "a"])).to.be.false;
        expect(TESTED_OBJ.isIn("c")).to.be.false;
        expect(TESTED_OBJ.isIn("c", [])).to.be.false;
    });

    it("It should test function parseParams", () => {
        expect(TESTED_OBJ.parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test")).to.be.an("object");
        expect(TESTED_OBJ.parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").name).to.be.equal("Gabriel");
        expect(TESTED_OBJ.parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").age).to.be.equal("23");
        expect(TESTED_OBJ.parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email).to.be.an("array");
        expect(TESTED_OBJ.parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email[0]).to.be.equal("gcsollei");
        expect(TESTED_OBJ.parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email[1]).to.be.equal("gabrielcsollei");
        expect(TESTED_OBJ.parseParams<any>("name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei&email=test").email[2]).to.be.equal("test");
    });

    it("It should test function objectToQueryParams", () => {
        expect(TESTED_OBJ.objectToQueryParams({a: "aa", b: "bb"})).to.be.equal("?a=aa&b=bb");
        expect(TESTED_OBJ.objectToQueryParams({a: 21, b: 22})).to.be.equal("?a=21&b=22");
    });
});
