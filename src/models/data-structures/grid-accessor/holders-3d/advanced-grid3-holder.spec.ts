import { expect } from "chai";
import "mocha";
import { AdvancedGrid3Holder } from "./advanced-grid3-holder";

describe("AdvancedGrid3Holder", () => {
    it("It should test origin manipulation", () => {
        const holder = new AdvancedGrid3Holder(4, 4, 4);
        expect(holder.origin).to.deep.equal({x: 0, y: 0, z: 0});

        holder.setOrigin(1, 2, 3);
        expect(holder.origin).to.deep.equal({x: 1, y: 2, z: 3});
    });

    it("It should test fill and forEach method", () => {
        const holder = new AdvancedGrid3Holder<string>(2, 2, 2);

        holder.forEach((item) => {
            expect(item).to.be.null;
        });

        holder.fill("a");

        holder.forEach((item) => {
            expect(item).to.be.equal("a");
        });
    });

    it("It should test swapping", () => {
        const holder = new AdvancedGrid3Holder<string>(2, 2, 2);
        holder.set(0, 0, 0, "A");
        holder.set(1, 1, 1, "B");

        expect(holder.get(0, 0, 0)).to.be.equal("A");
        expect(holder.get(1, 1, 1)).to.be.equal("B");

        holder.swap(0, 0, 0, 1, 1, 1);

        expect(holder.get(0, 0, 0)).to.be.equal("B");
        expect(holder.get(1, 1, 1)).to.be.equal("A");
    });

    it("It should test rotateCW", () => {
        const holder = new AdvancedGrid3Holder<string>(2, 1, 2);
        holder.set(0, 0, 0, "A");
        holder.set(1, 0, 0, "B");
        holder.set(0, 0, 1, "C");
        holder.set(1, 0, 1, "D");

        holder.rotateCW();

        expect(holder.get(1, 0, 0)).to.be.equal("A");
        expect(holder.get(1, 0, 1)).to.be.equal("B");
        expect(holder.get(0, 0, 0)).to.be.equal("C");
        expect(holder.get(0, 0, 1)).to.be.equal("D");
    });

    it("It should test mirror XY", () => {
        const holder = new AdvancedGrid3Holder<string>(2, 2, 2);
        holder.fill("A");
        holder.set(0, 0, 0, "B");
        holder.set(1, 0, 0, "B");
        holder.set(0, 1, 0, "B");
        holder.set(1, 1, 0, "B");

        holder.forEach((item, _x, _y, z) => {
            if (z === 0) {
                expect(item).to.be.equal("B");
            } else if (z === 1) {
                expect(item).to.be.equal("A");
            }
        });

        holder.mirrorXY();

        holder.forEach((item, _x, _y, z) => {
            if (z === 0) {
                expect(item).to.be.equal("A");
            } else if (z === 1) {
                expect(item).to.be.equal("B");
            }
        });
    });
});
