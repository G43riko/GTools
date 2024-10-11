import { expect } from "chai";
import "mocha";
import { WorldPlaceManager } from "./place-manager";

describe("PlaceManager", () => {
    it("It should test basic place manager", () => {
        const placeManager = new WorldPlaceManager({ x: 2, y: 2 }, (x, y) => ["00", "11"].includes(`${x}${y}`));

        expect(placeManager.isFree(-1, -1)).to.be.false;
        expect(placeManager.isFree(2, 2)).to.be.false;
        expect(placeManager.isFree(0, 0)).to.be.true;
        expect(placeManager.isFree(1, 1)).to.be.true;
        expect(placeManager.isFree(0, 1)).to.be.false;
        expect(placeManager.isFree(1, 0)).to.be.false;
    });
    it("It should test basic item adding", () => {
        const placeManager = new WorldPlaceManager({ x: 3, y: 3 });
        placeManager.setItem("flora", { position: { x: 0, y: 0 } });
        placeManager.setItem("flora", { position: { x: 1, y: 1 }, size: { x: 2, y: 2 } });

        expect(placeManager.isFree(0, 0)).to.be.false;
        expect(placeManager.isFree(1, 1)).to.be.false;
        expect(placeManager.isFree(0, 1)).to.be.true;
        expect(placeManager.isFree(1, 0)).to.be.true;
        expect(placeManager.isFree(2, 2)).to.be.false;
    });
    it("It should test basic item removing", () => {
        const placeManager = new WorldPlaceManager({ x: 4, y: 4 });
        placeManager.setItem("flora", { position: { x: 0, y: 0 } });
        placeManager.setItem("flora", { position: { x: 2, y: 2 }, size: { x: 2, y: 2 } });
        placeManager.setItem("flora", { position: { x: 0, y: 2 }, size: { x: 2, y: 2 } });
        placeManager.setItem("flora", { position: { x: 2, y: 0 }, size: { x: 2, y: 2 } });

        expect(placeManager.isFree(0, 0)).to.be.false;
        expect(placeManager.isFree(1, 1)).to.be.true;
        expect(placeManager.isFree(0, 1)).to.be.true;
        expect(placeManager.isFree(1, 0)).to.be.true;
        expect(placeManager.isFree(2, 2)).to.be.false;
        expect(placeManager.isFree(3, 3)).to.be.false;
        expect(placeManager.isFree(3, 0)).to.be.false;
        expect(placeManager.isFree(0, 3)).to.be.false;

        expect(placeManager.removeItemFrom({ x: -1, y: -1 })).to.be.false;
        expect(placeManager.removeItemFrom({ x: 4, y: 4 })).to.be.false;
        expect(placeManager.removeItemFrom({ x: 0, y: 0 })).to.be.true;
        expect(placeManager.removeItemFrom({ x: 3, y: 0 })).to.be.true;
        expect(placeManager.removeItemFrom({ x: 0, y: 3 })).to.be.true;
        expect(placeManager.removeItemFrom({ x: 3, y: 3 })).to.be.true;

        expect(placeManager.isFree(0, 0)).to.be.true;
        expect(placeManager.isFree(1, 1)).to.be.true;
        expect(placeManager.isFree(0, 1)).to.be.true;
        expect(placeManager.isFree(1, 0)).to.be.true;
        expect(placeManager.isFree(2, 2)).to.be.true;
        expect(placeManager.isFree(3, 3)).to.be.true;
        expect(placeManager.isFree(3, 0)).to.be.true;
        expect(placeManager.isFree(0, 3)).to.be.true;
    });
    it("It should test area checking", () => {
        const placeManager = new WorldPlaceManager({ x: 4, y: 4 });
        placeManager.setItem("flora", { position: { x: 2, y: 2 } });

        expect(placeManager.isFree(-1, -1, { x: 2, y: 2 })).to.be.false;
        expect(placeManager.isFree(0, 0, { x: 2, y: 2 })).to.be.true;
        expect(placeManager.isFree(1, 1, { x: 2, y: 2 })).to.be.false;
        expect(placeManager.isFree(0, 1, { x: 2, y: 1 })).to.be.true;
        expect(placeManager.isFree(1, 0, { x: 1, y: 2 })).to.be.true;
        expect(placeManager.isFree(2, 2, { x: 2, y: 2 })).to.be.false;
        expect(placeManager.isFree(2, 2, { x: 1, y: 1 })).to.be.false;
        expect(placeManager.isFree(3, 3, { x: 1, y: 1 })).to.be.true;
        expect(placeManager.isFree(3, 3, { x: 2, y: 2 })).to.be.false;
    });
});
