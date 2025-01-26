import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { SimpleVector, Vector3 } from "@g43/math";
import { Plane3D } from "./plane-3d.ts";

describe("Plane3D", () => {
    it("Should test plane creation", () => {
        const planeFromPointAndPlane = Plane3D.fromPointAndNormal({ x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 });
        const planeFromPoints = Plane3D.fromPoints({ x: 1, y: 0, z: 0 }, { x: 1, y: 0, z: 1 }, {
            x: 0,
            y: 0,
            z: 1,
        });

        expect(planeFromPointAndPlane).toEqual(planeFromPoints);
    });

    it("Should test isFacingTo", () => {
        const plane = new Plane3D(Vector3.fromVec(SimpleVector.UP_3), Vector3.fromVec(SimpleVector.ZERO_3));

        expect(plane.isFacingTo({ x: 0, y: 1, z: 0 })).toBeTruthy();
        expect(plane.isFacingTo({ x: 1, y: 1, z: 1 })).toBeTruthy();
        expect(plane.isFacingTo({ x: 0, y: -1, z: 0 })).toBeFalsy();
        expect(plane.isFacingTo({ x: 1, y: -1, z: 1 })).toBeFalsy();
    });
});
