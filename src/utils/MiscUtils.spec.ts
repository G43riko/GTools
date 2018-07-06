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
});
