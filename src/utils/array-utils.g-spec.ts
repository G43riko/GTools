import { expect } from "chai";
import "mocha";
import * as TESTED_OBJ from "./array-utils";

describe("array-utils", () => {

    it("It should test function where", () => {

    });

    it("It should test function sum", () => {
        expect(TESTED_OBJ.sum([1, 2, 3, 4, 5])).to.be.equal(15);
    });

    it("It should test function avg", () => {
        expect(TESTED_OBJ.avg([1, 2, 3, 4, 5])).to.be.equal(3);
    });

    it("It should test function join", () => {
        expect(TESTED_OBJ.join(["a", "b", "c", "d"], "")).to.be.equal("abcd");
        expect(TESTED_OBJ.join(["a", "b", "c", "d"], "=")).to.be.equal("a=b=c=d");
        expect(TESTED_OBJ.join(["a", "b", "c", "d"], "=", ">>", "<<")).to.be.equal(">>a=b=c=d<<");
    });

    it("It should test function getLast", () => {
        expect(TESTED_OBJ.getLast([])).to.be.undefined;
        expect(TESTED_OBJ.getLast(["a", "b"])).to.be.equal("b");
        expect(TESTED_OBJ.getLast([5, 6])).to.be.equal(6);
    });

    it("It should test function makeUnique", () => {
        expect(TESTED_OBJ.makeUnique([5, 5, 3, 2, 1, 4, 5, 4])).to.deep.equal([5, 3, 2, 1, 4]);
        expect(TESTED_OBJ.makeUnique(["5", "5", "3", "2", "1", "4", "5", "4"])).to.deep.equal(["5", "3", "2", "1", "4"]);
    });
});
