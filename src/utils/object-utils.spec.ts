import { expect } from "chai";
import "mocha";
import * as ObjectUtils from "./object-utils";

describe("ObjectUtils", () => {
    describe("GetNestedProperty", () => {
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
            expect(ObjectUtils.getNestedProperty(testObject, "a.c.b.d")).to.be.undefined;
            expect(ObjectUtils.getNestedProperty(testObject, "a_c_b_d", "_")).to.be.undefined;
            expect(ObjectUtils.getNestedProperty(testObject, "a.b.c.d")).to.be.equal("dd");
            expect(ObjectUtils.getNestedProperty(testObject, "a_b_c_d", "_")).to.be.equal("dd");
        });
    });
    describe("DeepEqual", () => {
        const createFlatObject = (): any => ({a: "a", b: 23, c: true});
        const createFlatArray  = (): any => ["a", 23, true];

        const createNestedObject            = (): any => ({...createFlatObject(), d: createFlatObject(), e: createFlatArray()});
        const createNestedObjectWithClasses = (): any => ({...createNestedObject(), f: new Date()});

        const createNestedArray            = (): any => [...createFlatArray(), createFlatObject(), createFlatArray()];
        const createNestedArrayWithClasses = (): any => [...createFlatArray(), createFlatObject(), createFlatArray(), new Date()];

        it("It should test equal immutable objects", () => {
            expect(ObjectUtils.deepEqual("a", "a")).to.be.true;
            expect(ObjectUtils.deepEqual({}, {})).to.be.true;
            expect(ObjectUtils.deepEqual([], [])).to.be.true;
            expect(ObjectUtils.deepEqual(563, 563)).to.be.true;
            expect(ObjectUtils.deepEqual(true, true)).to.be.true;
            expect(ObjectUtils.deepEqual(null, null)).to.be.true;
            expect(ObjectUtils.deepEqual(NaN, NaN)).to.be.true;
            expect(ObjectUtils.deepEqual(undefined, undefined)).to.be.true;
        });
        it("It should test different immutable objects", () => {
            expect(ObjectUtils.deepEqual("a", "b")).to.be.false;
            expect(ObjectUtils.deepEqual({}, [])).to.be.false;
            expect(ObjectUtils.deepEqual([], null)).to.be.false;
            expect(ObjectUtils.deepEqual(563, 2000)).to.be.false;
            expect(ObjectUtils.deepEqual(true, false)).to.be.false;
            expect(ObjectUtils.deepEqual(null, undefined)).to.be.false;
            expect(ObjectUtils.deepEqual(NaN, 53)).to.be.false;
            expect(ObjectUtils.deepEqual(undefined, NaN)).to.be.false;
        });
        it("It should test compare objects", () => {
            expect(ObjectUtils.deepEqual(createFlatArray(), createFlatArray())).to.be.true;
            expect(ObjectUtils.deepEqual(createFlatObject(), createFlatObject())).to.be.true;
            expect(ObjectUtils.deepEqual(createNestedObject(), createNestedObject())).to.be.true;
            expect(ObjectUtils.deepEqual(createNestedArray(), createNestedArray())).to.be.true;
        });
    });
    describe("DeepCopy", () => {
        const createFlatObject = (): any => ({a: "a", b: 23, c: true});
        const createFlatArray  = (): any => ["a", 23, true];

        const createNestedObject            = (): any => ({...createFlatObject(), d: createFlatObject(), e: createFlatArray()});
        const createNestedObjectWithClasses = (): any => ({...createNestedObject(), f: new Date()});

        const createNestedArray            = (): any => [...createFlatArray(), createFlatObject(), createFlatArray()];
        const createNestedArrayWithClasses = (): any => [...createFlatArray(), createFlatObject(), createFlatArray(), new Date()];

        it("It should test immutable objects", () => {
            expect(ObjectUtils.deepCopy("a")).to.be.eq("a");
            expect(ObjectUtils.deepCopy(563)).to.be.eq(563);
            expect(ObjectUtils.deepCopy(true)).to.be.eq(true);
        });
        it("It should test objects", () => {
            expect(ObjectUtils.deepCopy({})).to.be.not.eq({});
            expect(ObjectUtils.deepCopy({})).to.deep.equal({});
            expect(ObjectUtils.deepCopy(createNestedObject())).to.be.not.eq(createNestedObject());
            expect(ObjectUtils.deepCopy(createNestedObject())).to.deep.equal(createNestedObject());
            expect(ObjectUtils.deepCopy(createNestedArray())).to.be.not.eq(createNestedArray());
            expect(ObjectUtils.deepCopy(createNestedArray())).to.deep.equal(createNestedArray());
        });
        xit("It should test object with classes", () => {
            expect(ObjectUtils.deepCopy(createNestedObjectWithClasses())).to.be.not.eq(createNestedObjectWithClasses());
            expect(ObjectUtils.deepCopy(createNestedObjectWithClasses())).to.deep.equal(createNestedObjectWithClasses());
            expect(ObjectUtils.deepCopy(createNestedArrayWithClasses())).to.be.not.eq(createNestedArrayWithClasses());
            expect(ObjectUtils.deepCopy(createNestedArrayWithClasses())).to.deep.equal(createNestedArrayWithClasses());
        });
    });
    describe("RoughSizeOfObject", () => {
        it("It should return object rough size", () => {
            expect(ObjectUtils.roughSizeOfObject([])).to.be.equal(0);
            expect(ObjectUtils.roughSizeOfObject({})).to.be.equal(0);
            expect(ObjectUtils.roughSizeOfObject({a: "a"})).to.be.equal(2);
            expect(ObjectUtils.roughSizeOfObject({a: "aa"})).to.be.equal(4);
            expect(ObjectUtils.roughSizeOfObject({a: "aaa"})).to.be.equal(6);
            expect(ObjectUtils.roughSizeOfObject({a: "aaaa"})).to.be.equal(8);
            expect(ObjectUtils.roughSizeOfObject({a: 21})).to.be.equal(8);
            expect(ObjectUtils.roughSizeOfObject({a: true})).to.be.equal(4);
        });
    });
    describe("Size", () => {
        const item = {
            address: {
                city  : "Bratislava",
                number: "23",
                street: "street",
            },
            age    : 24,
            name   : "Adam",
        };
        it("It should return number of attributes", () => {
            expect(ObjectUtils.size(item)).to.equal(3);
            expect(ObjectUtils.size({})).to.be.equal(0);
            expect(ObjectUtils.size({a: "aa"})).to.be.equal(1);
            expect(ObjectUtils.size({
                a: "aa",
                b: "bb",
            })).to.be.equal(2);
            expect(ObjectUtils.size({
                a: undefined,
                b: undefined,
            })).to.be.equal(2);
            expect(ObjectUtils.size([])).to.be.equal(0);
            expect(ObjectUtils.size([0])).to.be.equal(1);
            expect(ObjectUtils.size(["a", "b", "c"])).to.equal(3);
            expect(ObjectUtils.size([0, "a"])).to.be.equal(2);
        });
    });
    describe("isPlain", () => {
        it("It check if object is plain or not", () => {
            expect(ObjectUtils.isPlain({
                a: "a",
                b: "b",
            })).to.be.true;
            expect(ObjectUtils.isPlain({
                a: 1,
                b: "b",
                c: true,
            })).to.be.true;
            expect(ObjectUtils.isPlain({
                a: 1,
                b: "b",
                c: undefined,
            })).to.be.true;

            expect(ObjectUtils.isPlain({
                a: {},
                b: "b",
            })).to.be.false;
            expect(ObjectUtils.isPlain({
                a: 1,
                b: "b",
                c: [],
            })).to.be.false;
            expect(ObjectUtils.isPlain({
                a: 1,
                b: "b",
                c: null,
            })).to.be.false;
            expect(ObjectUtils.isPlain({
                a: 1,
                b: "b",
                c: new Date(),
            })).to.be.false;
        });
    });
    describe("Without", () => {
        it("It should return object without values given as second parameter", () => {
            expect(ObjectUtils.without({
                a: "a",
                b: "b",
            }, ["a"])).to.deep.equal({b: "b"});
            expect(ObjectUtils.without({} as any, ["a"])).to.deep.equal({});
            expect(ObjectUtils.without({}, [])).to.deep.equal({});
            expect(ObjectUtils.without({
                a: "a",
                b: "b",
            }, [])).to.deep.equal({
                a: "a",
                b: "b",
            });
            expect(ObjectUtils.without({
                a: "aa",
                b: "bb",
            }, ["a"])).to.deep.equal({b: "bb"});
            expect(ObjectUtils.without({
                a : "a",
                b : "b",
                aa: "aa",
            }, ["a"])).to.deep.equal({
                b : "b",
                aa: "aa",
            });
        });
    });
});
