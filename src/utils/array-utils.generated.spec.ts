import { expect } from "chai";
import "mocha";
import * as TESTED_OBJ from "./array-utils";

describe("array-utils", () => {

    it("It should test function where", () => {

    });

    it("It should test function compareArrays", () => {
        expect(TESTED_OBJ.compareArrays(["a", "b", "c"], ["a", "b", "c"])).to.be.true;
        expect(TESTED_OBJ.compareArrays([{v: "a"}, {v: "b"}, {v: "c"}], [{v: "a"}, {v: "b"}, {v: "c"}])).to.be.false;
        expect(TESTED_OBJ.compareArrays([{v: "a"}, {v: "b"}, {v: "c"}], [{v: "a"}, {v: "b"}, {v: "c"}], (a, b) => a.v === b.v)).to.be.true;
        expect(TESTED_OBJ.compareArrays([{v: "a"}, {v: "b"}, {v: "c"}], [{v: "a"}, {v: "b"}, {v: "c"}], (a, b) => a.v === b.v)).to.be.true;
    });

    it("It should test function analyzeArrayChanges", () => {
        expect(TESTED_OBJ.analyzeArrayChanges(["a", "b", "c"], ["a", "b", "c"])).to.deep.equal({"toAdd": [], "toRemove": []});
        expect(TESTED_OBJ.analyzeArrayChanges(["a", "b", "c"], ["b", "c", "d"])).to.deep.equal({"toAdd": ["d"], "toRemove": ["a"]});
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
