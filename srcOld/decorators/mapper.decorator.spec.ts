import { expect } from "chai";
import { Mapper } from "./mapper.decorator";

class A {
    @Mapper()
    public notChanged = "";
    @Mapper({}, "__")
    public onlyPrefixed = "";
    @Mapper({
        onSet: (val: any): any => `SETTER >>>${val}<<< SETTER`,
        onGet: (val: any): any => `GETTER >>>${val}<<< GETTER`,
    })
    public both?: string;
    @Mapper({
        onSet: (val: any): any => `SETTER >>>${val}<<< SETTER`,
    })
    public setter?: string;
    @Mapper({
        onGet: (val: any): any => `GETTER >>>${val}<<< GETTER`,
    })
    public getter?: string;
}

describe("Mapper decorator", () => {
    const test = new A();
    it("test first round", () => {
        test.both = "HAS both";
        test.getter = "HAS getter";
        test.setter = "contains setter";
        test.notChanged = "notChanged";
        test.onlyPrefixed = "onlyPrefixed";

        console.log(test.both);
        expect(test.both).to.be.equal("GETTER >>>SETTER >>>HAS both<<< SETTER<<< GETTER");
        expect(test.getter).to.be.equal("GETTER >>>HAS getter<<< GETTER");
        expect(test.setter).to.be.equal("SETTER >>>contains setter<<< SETTER");
        expect(test.notChanged).to.be.equal("notChanged");
        expect(test.onlyPrefixed).to.be.equal("onlyPrefixed");
    });
    it("test second round", () => {
        test.getter = "HAS getter 2";
        test.both = "HAS both 2";
        test.setter = "contains setter 2";
        test.notChanged = "notChanged 2";
        test.onlyPrefixed = "onlyPrefixed 2";

        expect(test.both).to.be.equal("GETTER >>>SETTER >>>HAS both 2<<< SETTER<<< GETTER");
        expect(test.getter).to.be.equal("GETTER >>>HAS getter 2<<< GETTER");
        expect(test.setter).to.be.equal("SETTER >>>contains setter 2<<< SETTER");
        expect(test.notChanged).to.be.equal("notChanged 2");
        expect(test.onlyPrefixed).to.be.equal("onlyPrefixed 2");
    });
});
