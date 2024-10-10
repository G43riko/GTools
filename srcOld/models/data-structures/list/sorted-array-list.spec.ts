import { expect } from "chai";
import { SortedArrayList } from "./sorted-array-list";

describe("Sorted array list", () => {
    it("Should test empty list", () => {
        const list = new SortedArrayList<string>((a, b) => a.localeCompare(b));

        expect(list.empty).to.be.true;
        expect(list.length).to.be.equal(0);
    });

    it("Should test adding data", () => {
        const list = new SortedArrayList<string>((a, b) => a.localeCompare(b));

        list.add("c");
        list.add("b");
        list.add("d");
        list.add("e");
        list.add("a");
        list.add("g");
        list.add("f");
        expect(list.toArray()).to.deep.equal(["a", "b", "c", "d", "e", "f", "g"]);
        expect(list.length).to.be.equal(7);

        list.add("d");
        list.add("a");
        list.add("g");
        expect(list.toArray()).to.deep.equal(["a", "a", "b", "c", "d", "d", "e", "f", "g", "g"]);
        expect(list.length).to.be.equal(10);

        expect(list.contains("a")).to.be.true;
        expect(list.contains("aa")).to.be.false;
        expect(list.contains("b")).to.be.true;
        expect(list.contains("bb")).to.be.false;

        expect(list.remove("d")).to.be.true;
        expect(list.length).to.be.equal(9);
        expect(list.contains("d")).to.be.true;
        expect(list.remove("d")).to.be.true;
        expect(list.length).to.be.equal(8);
        expect(list.contains("d")).to.be.false;
        expect(list.remove("d")).to.be.false;
        expect(list.length).to.be.equal(8);

        const currentData = ["a", "a", "b", "c", "e", "f", "g", "g"];

        expect(list.toArray()).to.deep.equal(currentData);
        expect(list.getItem(-5)).to.be.undefined;
        expect(list.getItem(500)).to.be.undefined;

        currentData.forEach((item, index) => {
            expect(list.getItem(index)).to.be.equal(item);
        });

        expect(list.removeItemAt(-5)).to.be.false;
        expect(list.removeItemAt(500)).to.be.false;
        expect(list.removeItemAt(2)).to.be.true;
        expect(list.removeItemAt(4)).to.be.true;

        const currentData2 = ["a", "a", "c", "e", "g", "g"];
        expect(list.toArray()).to.deep.equal(currentData2);
        currentData2.forEach((item, index) => {
            expect(list.getItem(index)).to.be.equal(item);
        });

        list.clear();
        expect(list.empty).to.be.true;
        expect(list.length).to.be.equal(0);
        expect(list.contains("a")).to.be.false;
        expect(list.contains("aa")).to.be.false;
        expect(list.contains("b")).to.be.false;
        expect(list.contains("bb")).to.be.false;
    });
});
