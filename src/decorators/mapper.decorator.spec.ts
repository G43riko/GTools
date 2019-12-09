import { expect } from "chai";
import { Mapper } from "./mapper.decorator";

class A {
    @Mapper()
    public notChanged   = "";
    @Mapper({}, "__")
    public onlyPrefixed = "";
    @Mapper({
        onSet: ((val: any): any => "SETTER >>>" + val + "<<< SETTER"),
        onGet: ((val: any): any => "GETTER >>>" + val + "<<< GETTER"),
    })
    public both?: string;
    @Mapper({
        onSet: ((val: any): any => "SETTER >>>" + val + "<<< SETTER"),
    })
    public setter?: string;
    @Mapper({
        onGet: ((val: any): any => "GETTER >>>" + val + "<<< GETTER"),
    })
    public getter?: string;
}

describe("Mapper decorator", () => {

    const test = new A();
    it("test first round", () => {
        test.both         = "HAS both";
        test.getter       = "HAS getter";
        test.setter       = "has setter";
        test.notChanged   = "notChanged";
        test.onlyPrefixed = "onlyPrefixed";

        expect(test.both).to.be.an("GETTER >>>SETTER >>>has both<<< SETTER<<< GETTER");
        expect(test.getter).to.be.an("GETTER >>>has both<<< GETTER");
        expect(test.setter).to.be.an("SETTER >>>has both<<< SETTER");
        expect(test.notChanged).to.be.an("notChanged");
        expect(test.onlyPrefixed).to.be.an("onlyPrefixed");
    });
    it("test second round", () => {
        test.getter       = "has getter 2";
        test.both         = "has both 2";
        test.setter       = "has setter 2";
        test.notChanged   = "notChanged 2";
        test.onlyPrefixed = "onlyPrefixed 2";

        expect(test.both).to.be.an("GETTER >>>SETTER >>>has both 2<<< SETTER<<< GETTER");
        expect(test.getter).to.be.an("GETTER >>>has both 2<<< GETTER");
        expect(test.setter).to.be.an("SETTER >>>has both 2<<< SETTER");
        expect(test.notChanged).to.be.an("notChanged 2");
        expect(test.onlyPrefixed).to.be.an("onlyPrefixed 2");
    });
});
