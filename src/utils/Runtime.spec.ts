import { expect } from "chai";
import "mocha";
import { NullPointerException } from "../errors/NullPointerException";
import { WrongParameterException } from "../errors/WrongParameterException";
import { WrongTypeException } from "../errors/WrongTypeException";
import { TestCase } from "../TestCase";
import { Runtime } from "./Runtime";

describe("Runtime", () => {
    describe("Check variable types", () => {
        it("Check array", () => {
            expect(Runtime.isArray([1, 2, 3])).to.deep.equal([1, 2, 3]);
            expect(Runtime.isArray([])).to.deep.equal([]);
            expect(() => Runtime.isArray("Vlado" as any)).to.throw(WrongTypeException);
        });
        it("Check string", () => {
            expect(Runtime.isString("")).to.be.equal("");
            expect(Runtime.isString("Name")).to.be.equal("Name");
            expect(() => Runtime.isString(21 as any)).to.throw(WrongTypeException);
        });
        it("Check number", () => {
            expect(Runtime.isNumber(21)).to.be.equal(21);
            expect(Runtime.isNumber(2.3)).to.be.equal(2.3);
            expect(() => Runtime.isNumber("Name" as any)).to.throw(WrongTypeException);
        });
        it("Check boolean", () => {
            expect(Runtime.isBoolean(true)).to.be.true;
            expect(Runtime.isBoolean(false)).to.be.false;
            expect(() => Runtime.isBoolean("Name" as any)).to.throw(WrongTypeException);
        });

        it("Check function", () => {
            const funcA = (a: number, b: number) => a + b;
            // tslint:disable-next-line
            const funcB = function() {
                return 23;
            };
            expect(Runtime.isFunction(funcA)).to.be.equal(funcA);
            expect(Runtime.isFunction(funcB)).to.be.equal(funcB);
            expect(() => Runtime.isFunction("Name" as any)).to.throw(WrongTypeException);
        });
    });
    describe("Check maths", () => {
        it("Check min", () => {
            expect(Runtime.min(23, 20)).to.be.equal(23);
            expect(Runtime.min(2.3, 2.01)).to.be.equal(2.3);
            expect(() => Runtime.min(15, 20)).to.throw(WrongParameterException);
        });
        it("Check max", () => {
            expect(Runtime.max(20, 23)).to.be.equal(20);
            expect(Runtime.max(2.01, 2.3)).to.be.equal(2.01);
            expect(() => Runtime.max(20, 15)).to.throw(WrongParameterException);
        });
    });
    describe("Check existence", () => {
        it("Check exists", () => {
            expect(Runtime.exists(234)).to.be.equal(234);
            expect(Runtime.exists(true)).to.be.true;
            expect(Runtime.exists(false)).to.be.false;
            expect(Runtime.exists({a: "a"})).to.deep.equal({a: "a"});
            expect(Runtime.exists(TestCase.randomArray)).to.deep.equal(TestCase.randomArray);
            expect(Runtime.exists("Hello")).to.be.equal("Hello");
            expect(() => Runtime.exists(undefined)).to.throw(Error);
            expect(() => Runtime.exists(null)).to.throw(Error);
            expect(() => Runtime.exists("")).to.throw(Error);

            expect(Runtime.notNull(234)).to.be.equal(234);
            expect(Runtime.notNull(true)).to.be.true;
            expect(Runtime.notNull(false)).to.be.false;
            expect(Runtime.notNull({a: "a"})).to.deep.equal({a: "a"});
            expect(() => Runtime.notNull(null)).to.throw(NullPointerException);
        });

        it("Check option for disable runtime checkers", () => {
            expect(() => Runtime.isArray("Vlado" as any)).to.throw(WrongTypeException);
            expect(() => Runtime.isString(21 as any)).to.throw(WrongTypeException);
            expect(() => Runtime.isNumber("Name" as any)).to.throw(WrongTypeException);
            expect(() => Runtime.isFunction("Name" as any)).to.throw(WrongTypeException);
            expect(() => Runtime.min(15, 20)).to.throw(WrongParameterException);
            expect(() => Runtime.max(20, 15)).to.throw(WrongParameterException);
            expect(() => Runtime.exists(undefined)).to.throw(Error);
            expect(() => Runtime.exists(null)).to.throw(Error);
            expect(() => Runtime.exists("")).to.throw(Error);
            expect(() => Runtime.notNull(null)).to.throw(NullPointerException);

            Runtime.useRuntimeExceptions(false);

            expect(Runtime.isArray("Vlado" as any)).to.be.equal("Vlado");
            expect(Runtime.isString(21 as any)).to.be.equal(21);
            expect(Runtime.isNumber("Name" as any)).to.be.equal("Name");
            expect(Runtime.isFunction("Name" as any)).to.be.equal("Name");
            expect(Runtime.min(15, 20)).to.be.equal(15);
            expect(Runtime.max(20, 15)).to.be.equal(20);
            expect(Runtime.exists(undefined)).to.be.equal(undefined);
            expect(Runtime.exists(null)).to.be.null;
            expect(Runtime.exists("")).to.be.equal("");
            expect(Runtime.notNull(null)).to.be.null;

            Runtime.useRuntimeExceptions(true);

            expect(() => Runtime.isArray("Vlado" as any)).to.throw(WrongTypeException);
            expect(() => Runtime.isString(21 as any)).to.throw(WrongTypeException);
            expect(() => Runtime.isNumber("Name" as any)).to.throw(WrongTypeException);
            expect(() => Runtime.isFunction("Name" as any)).to.throw(WrongTypeException);
            expect(() => Runtime.min(15, 20)).to.throw(WrongParameterException);
            expect(() => Runtime.max(20, 15)).to.throw(WrongParameterException);
            expect(() => Runtime.exists(undefined)).to.throw(Error);
            expect(() => Runtime.exists(null)).to.throw(Error);
            expect(() => Runtime.exists("")).to.throw(Error);
            expect(() => Runtime.notNull(null)).to.throw(NullPointerException);
        });
    });
});
