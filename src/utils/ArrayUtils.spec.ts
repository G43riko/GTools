import { expect } from "chai";
import "mocha";
import { ArrayUtils } from "./ArrayUtils";

describe("Array utils", () => {
    const numArray: number[]    = [5, 8, 7, 3, 1, 5, 21, 8];
    const notArray: any[] | any = "gabriel";
    describe("Min", () => {
        it("It should find minimum from array", () => {
            expect(ArrayUtils.min(notArray)).to.equal(notArray);
            expect(ArrayUtils.min(numArray)).to.equal(1);
            expect(ArrayUtils.min([])).to.equal(0);
        });
    });
    describe("Max", () => {
        it("It should find maximum from array", () => {
            expect(ArrayUtils.max(notArray)).to.equal(notArray);
            expect(ArrayUtils.max(numArray)).to.equal(21);
            expect(ArrayUtils.max([])).to.equal(0);
        });
    });
    describe("Avg", () => {
        it("It should find average value from array", () => {
            expect(ArrayUtils.avg(notArray)).to.equal(notArray);
            expect(ArrayUtils.avg(numArray)).to.equal(7.25);
            expect(ArrayUtils.avg([])).to.equal(0);
        });
    });
    describe("Sum", () => {
        it("It should find summary of array elements", () => {
            expect(ArrayUtils.sum(notArray)).to.equal(notArray);
            expect(ArrayUtils.sum(numArray)).to.equal(58);
            expect(ArrayUtils.sum([])).to.equal(0);
        });
    });
    describe("Join", () => {
        it("It should join array elements", () => {
            expect(ArrayUtils.join(notArray, "///", "<<", ">>")).to.equal("<<" + notArray + ">>");
            expect(ArrayUtils.join(numArray, "-", "<<", ">>")).to.equal("<<5-8-7-3-1-5-21-8>>");
            expect(ArrayUtils.join([], "-", "<<", ">>")).to.equal("<<>>");
            expect(ArrayUtils.join([], "/")).to.equal("");
        });
    });
    describe("GetLast", () => {
        it("It return last element of array", () => {
            expect(ArrayUtils.getLast(notArray)).to.equal(notArray);
            expect(ArrayUtils.getLast(numArray)).to.equal(8);
            expect(ArrayUtils.getLast([])).to.be.null;
        });
    });
    describe("MakeUnique", () => {
        it("It return array with distinct elements", () => {
            expect(ArrayUtils.makeUnique(notArray)).to.equal(notArray);
            expect(ArrayUtils.makeUnique(numArray)).to.deep.equal([5, 8, 7, 3, 1, 21]);
            expect(ArrayUtils.makeUnique([])).to.deep.equal([]);
        });
    });
    describe("GetRandom", () => {
        it("It return random element from array", () => {
            for (let i = 0; i < 1000; i++) {
                expect(ArrayUtils.getRandom(notArray)).to.equal(notArray);
                expect(ArrayUtils.getRandom(numArray)).to.be.oneOf([5, 8, 7, 3, 1, 21]);
                expect(ArrayUtils.getRandom(["g"])).to.equal("g");
            }
            expect(ArrayUtils.getRandom([])).to.be.null;
        });
    });
    describe("SubArray", () => {
        it("It return subArray from array", () => {
            expect(ArrayUtils.subArray(notArray)).to.equal(notArray);
            expect(ArrayUtils.subArray(numArray)).to.deep.equal([5, 8, 7, 3, 1, 5, 21, 8]);
            expect(ArrayUtils.subArray(numArray, 3)).to.deep.equal([3, 1, 5, 21, 8]);
            expect(ArrayUtils.subArray(numArray, 3, 20000)).to.deep.equal([3, 1, 5, 21, 8]);
            expect(ArrayUtils.subArray(numArray, 2, 4)).to.deep.equal([7, 3, 1]);
            expect(ArrayUtils.subArray([])).to.deep.equal([]);
        });
    });
    describe("Where", () => {
        const testArray = [{a: "aa"}, {a: "aa", b: "bbb"}, {b: "bb"}];
        it("It return subArray with element existing in both arrays", () => {
            expect(ArrayUtils.where(testArray, {b: "bb"})).to.deep.equal([{b: "bb"}]);
            expect(ArrayUtils.where(testArray, {a: "aa"})).to.deep.equal([{a: "aa"}, {a: "aa", b: "bbb"}]);
            expect(ArrayUtils.where(testArray, {b: "bbb"})).to.deep.equal([{a: "aa", b: "bbb"}]);
        });
    });
});