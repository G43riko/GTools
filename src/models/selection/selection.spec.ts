import { expect } from "chai";
import "mocha";
import { Selection } from "./selection";

describe("Selection", () => {
    it("It should test empty basic clicking", () => {
        const selectionHolder = new Selection(["A", "B", "C"]);
        expect(selectionHolder.selection.length).to.be.equal(0);
        expect(selectionHolder.selection.selected).to.deep.equal([]);
        expect(selectionHolder.selection.isSelected("A")).to.be.false;
        expect(selectionHolder.selection.isSelected("B")).to.be.false;
        expect(selectionHolder.selection.isSelected("C")).to.be.false;

        selectionHolder.click("A");

        expect(selectionHolder.selection.length).to.be.equal(1);
        expect(selectionHolder.selection.selected).to.deep.equal(["A"]);
        expect(selectionHolder.selection.isSelected("A")).to.be.true;
        expect(selectionHolder.selection.isSelected("B")).to.be.false;
        expect(selectionHolder.selection.isSelected("C")).to.be.false;

        selectionHolder.click("A");

        expect(selectionHolder.selection.length).to.be.equal(1);
        expect(selectionHolder.selection.selected).to.deep.equal(["A"]);
        expect(selectionHolder.selection.isSelected("A")).to.be.true;
        expect(selectionHolder.selection.isSelected("B")).to.be.false;
        expect(selectionHolder.selection.isSelected("C")).to.be.false;

        selectionHolder.click("B");

        expect(selectionHolder.selection.length).to.be.equal(1);
        expect(selectionHolder.selection.selected).to.deep.equal(["B"]);
        expect(selectionHolder.selection.isSelected("A")).to.be.false;
        expect(selectionHolder.selection.isSelected("B")).to.be.true;
        expect(selectionHolder.selection.isSelected("C")).to.be.false;

        selectionHolder.click("A");

        expect(selectionHolder.selection.length).to.be.equal(1);
        expect(selectionHolder.selection.selected).to.deep.equal(["A"]);
        expect(selectionHolder.selection.isSelected("A")).to.be.true;
        expect(selectionHolder.selection.isSelected("B")).to.be.false;
        expect(selectionHolder.selection.isSelected("C")).to.be.false;
    });

});
