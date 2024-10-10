import { expect } from "chai";
import { BiDirectionalLinkedList } from "./bi-directional-linked-list";

describe("Bi directional linked list", () => {
    it("Should test empty list", () => {
        const list = new BiDirectionalLinkedList<string>();

        expect(list.empty).to.be.true;
        expect(list.length).to.be.equal(0);
    });

    it("Should test adding data", () => {
        const list = new BiDirectionalLinkedList<string>();

        list.add("c");
        list.add("b");
        list.add("d");
        list.add("e");
        list.add("a");
        list.add("g");
        list.add("f");
        expect(list.toArray()).to.deep.equal(["c", "b", "d", "e", "a", "g", "f"]);
        expect(list.length).to.be.equal(7);

        list.add("d");
        list.add("a");
        list.add("g");
        expect(list.toArray()).to.deep.equal(["c", "b", "d", "e", "a", "g", "f", "d", "a", "g"]);
        expect(list.length).to.be.equal(10);

        expect(list.contains("a")).to.be.true;
        expect(list.contains("aa")).to.be.false;
        expect(list.contains("b")).to.be.true;
        expect(list.contains("bb")).to.be.false;

        expect(list.remove("d")).to.be.true;
        expect(list.length).to.be.equal(9);
        expect(list.contains("d")).to.be.true;
        expect(list.toArray()).to.deep.equal(["c", "b", "e", "a", "g", "f", "d", "a", "g"]);
        expect(list.remove("d")).to.be.true;
        expect(list.length).to.be.equal(8);
        expect(list.contains("d")).to.be.false;
        expect(list.toArray()).to.deep.equal(["c", "b", "e", "a", "g", "f", "a", "g"]);
        expect(list.remove("d")).to.be.false;
        expect(list.length).to.be.equal(8);

        const currentData = ["c", "b", "e", "a", "g", "f", "a", "g"];

        expect(list.toArray()).to.deep.equal(currentData);
        expect(list.getItemAt(-5)).to.be.undefined;
        expect(list.getItemAt(500)).to.be.undefined;

        currentData.forEach((item, index) => {
            expect(list.getItemAt(index)).to.be.equal(item);
        });

        expect(list.removeItemAt(-5)).to.be.false;
        expect(list.removeItemAt(500)).to.be.false;
        expect(list.removeItemAt(2)).to.be.true;
        expect(list.removeItemAt(4)).to.be.true;

        const currentData2 = ["c", "b", "a", "g", "a", "g"];
        expect(list.toArray()).to.deep.equal(currentData2);
        currentData2.forEach((item, index) => {
            expect(list.getItemAt(index)).to.be.equal(item);
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
