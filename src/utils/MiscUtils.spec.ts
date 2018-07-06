import { expect } from "chai";
import "mocha";
import { MiscUtils } from "./MiscUtils";

describe("Misc utils", () => {

    describe("CreateClass", () => {
        class Person {
            public constructor(public readonly name: string) {
            }

            public getName(): string {
                return "My name is " + this.name;
            }
        }

        it("It should create class by string", () => {
            const person: Person = MiscUtils.createClass(Person, ["Gabriel"]);
            expect(person.name).to.be.equal("Gabriel");
            expect(person.getName()).to.be.equal("My name is Gabriel");
        });
    });
    describe("IsIn", () => {
        it("It should return true if elements contains searched element", () => {
            expect(MiscUtils.isIn("a", "b", "d", "a")).to.be.true;
            expect(MiscUtils.isIn("a", ["b", "d", "a"])).to.be.true;
            expect(MiscUtils.isIn("c", "b", "d", "a")).to.be.false;
            expect(MiscUtils.isIn("c", ["b", "d", "a"])).to.be.false;
            expect(MiscUtils.isIn("c")).to.be.false;
            expect(MiscUtils.isIn("c", [])).to.be.false;
        });
    });
    describe("ObjectToQueryParams", () => {
        expect(MiscUtils.objectToQueryParams({})).to.equal("");
        expect(MiscUtils.objectToQueryParams({a: "aa", b: "bb"})).to.equal("?a=aa&b=bb");
        expect(MiscUtils.objectToQueryParams({a: "21", b: "22"})).to.equal("?a=21&b=22");
    });
    describe("ParseParams", () => {
        const param       = "name=Gabriel&age=23&email=gcsollei&email=gabrielcsollei";
        const parsedParam = MiscUtils.parseParams(param);
        expect(parsedParam).to.be.an("object");
        expect(parsedParam.name).to.be.equal("Gabriel");
        expect(parsedParam.age).to.be.equal("23");
        expect(parsedParam.email).to.be.an("array");
        expect(parsedParam.email[0]).to.be.equal("gcsollei");
        expect(parsedParam.email[1]).to.be.equal("gabrielcsollei");
    });
});
