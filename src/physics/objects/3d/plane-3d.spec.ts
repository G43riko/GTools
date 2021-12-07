import { expect } from "chai";
import { SimpleVector3 } from "../../../math";
import { Plane3D } from "./plane-3d";

describe("Plane3D", () => {
    it("Should test plane creation", () => {

        const planeFromPointAndPlane = Plane3D.fromPointAndNormal({x: 1, y: 0, z: 0}, {x: 0, y: 1, z: 0});
        const planeFromPoints        = Plane3D.fromPoints({x: 1, y: 0, z: 0}, {x: 1, y: 0, z: 1}, {x: 0, y: 0, z: 1});

        expect(planeFromPointAndPlane).to.deep.equal(planeFromPoints);
    });

    it("Should test isFacingTo", () => {
        const plane = new Plane3D(SimpleVector3.UP, SimpleVector3.ZERO);

        expect(plane.isFacingTo({x: 0, y: 1, z: 0})).to.be.true;
        expect(plane.isFacingTo({x: 1, y: 1, z: 1})).to.be.true;
        expect(plane.isFacingTo({x: 0, y: -1, z: 0})).to.be.false;
        expect(plane.isFacingTo({x: 1, y: -1, z: 1})).to.be.false;
    });
});
