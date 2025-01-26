import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { SimpleVector } from "@g43/math";
import { Ellipsoid } from "./ellipsoid.ts";
import { Sphere } from "./sphere.ts";

describe("Sphere", () => {
    describe("Should test sphere creation", () => {
        it("FromPoints", () => {
            const sphere = Sphere.fromPoints([{ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 }]);
            const originSphere = new Sphere(SimpleVector.ZERO_3, 2);

            expect(originSphere.equals(sphere)).toBeTruthy();
        });
    });

    it("Should test volume and toMinMax", () => {
        const ellipsoid = new Ellipsoid(SimpleVector.ZERO_3, SimpleVector.ONE_3);
        const sphere = new Sphere(SimpleVector.ZERO_3, 1);
        const zeroSphere = new Sphere(SimpleVector.ZERO_3, 0);

        expect(zeroSphere.volume).toEqual(0);
        expect(zeroSphere.toMinMax()).toEqual({ min: SimpleVector.ZERO_3, max: SimpleVector.ZERO_3 });

        expect(sphere.volume).toEqual(ellipsoid.volume);
        expect(sphere.toMinMax()).toEqual(ellipsoid.toMinMax());
    });
});
