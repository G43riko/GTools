import { expect } from "chai";
import "mocha";
import { SelectionHolder } from "./selection-holder";

describe("Selection holder", () => {
    it("It should test empty selectionHolder", () => {
        const holder = new SelectionHolder();

        expect(holder.length).to.be.equal(0);
        expect(holder.selected).to.deep.equal([]);
        expect(holder.isSelected("A")).to.be.false;
        expect(holder.isSelected("B")).to.be.false;
    });
    it("It should test selecting single item", () => {
        const holder = new SelectionHolder();

        holder.select("A");

        expect(holder.length).to.be.equal(1);
        expect(holder.selected).to.deep.equal(["A"]);
        expect(holder.isSelected("A")).to.be.true;
        expect(holder.isSelected("B")).to.be.false;

        holder.unselect("B");

        expect(holder.length).to.be.equal(1);
        expect(holder.selected).to.deep.equal(["A"]);
        expect(holder.isSelected("A")).to.be.true;
        expect(holder.isSelected("B")).to.be.false;

        holder.unselect("A");

        expect(holder.length).to.be.equal(0);
        expect(holder.selected).to.deep.equal([]);
        expect(holder.isSelected("A")).to.be.false;
        expect(holder.isSelected("B")).to.be.false;
    });
    it("It should test selecting multiple items", () => {
        const holder = new SelectionHolder();

        holder.select("B", "A");

        expect(holder.length).to.be.equal(2);
        expect(holder.selected).to.have.all.members(["B", "A"]);
        expect(holder.isSelected("A")).to.be.true;
        expect(holder.isSelected("B")).to.be.true;

        holder.unselectAll();

        expect(holder.length).to.be.equal(0);
        expect(holder.selected).to.deep.equal([]);
        expect(holder.isSelected("A")).to.be.false;
        expect(holder.isSelected("B")).to.be.false;
    });


    it("It should test selectOnly", () => {
        const holder = new SelectionHolder();

        holder.select("C", "D");
        holder.selectOnly("A", "B");

        expect(holder.length).to.be.equal(2);
        expect(holder.selected).to.have.all.members(["B", "A"]);
        expect(holder.isSelected("A")).to.be.true;
        expect(holder.isSelected("B")).to.be.true;
    });

});
