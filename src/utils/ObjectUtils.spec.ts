import { expect } from "chai";
import "mocha";
import { ObjectUtils } from "./ObjectUtils";

describe("ObjectUtils", () => {
    describe("ByPath", () => {
        it("It should access object attribute by string", () => {
            const testObject: any = {
                a: {
                    b: {
                        c: {
                            d: "dd",
                        },
                    },
                },
            };
            expect(ObjectUtils.byPath(testObject, "a.c.b.d")).to.be.undefined;
            expect(ObjectUtils.byPath(testObject, "a_c_b_d", "_")).to.be.undefined;
            expect(ObjectUtils.byPath(testObject, "a.b.c.d")).to.be.equal("dd");
            expect(ObjectUtils.byPath(testObject, "a_b_c_d", "_")).to.be.equal("dd");
        });
    });
    describe("Size", () => {
        it("It should return number of attributes", () => {
            expect(ObjectUtils.size({})).to.be.equal(0);
            expect(ObjectUtils.size({a: "aa"})).to.be.equal(1);
            expect(ObjectUtils.size({a: "aa", b: "bb"})).to.be.equal(2);
            expect(ObjectUtils.size({a: undefined, b: undefined})).to.be.equal(2);
            expect(ObjectUtils.size([])).to.be.equal(0);
            expect(ObjectUtils.size([0])).to.be.equal(1);
            expect(ObjectUtils.size([0, "a"])).to.be.equal(2);
        });
    });
});
