import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { SimpleVector } from "@g43/math";
import { Ellipsoid } from "./ellipsoid.ts";
import { Sphere } from "./sphere.ts";

describe("Ellipsoid", () => {
    it("Should test ellipsoid creation", () => {
    });

    it("Should test volume and toMinMax", () => {
        const ellipsoid = new Ellipsoid(SimpleVector.ZERO_3, SimpleVector.ONE_3);
        const sphere = new Sphere(SimpleVector.ZERO_3, 1);
        const zeroEllipsoid = new Ellipsoid(SimpleVector.ZERO_3, SimpleVector.ZERO_3);

        expect(zeroEllipsoid.volume).toEqual(0);
        expect(zeroEllipsoid.toMinMax()).toEqual({ min: SimpleVector.ZERO_3, max: SimpleVector.ZERO_3 });

        expect(ellipsoid.volume).toEqual(sphere.volume);
        expect(ellipsoid.toMinMax()).toEqual(sphere.toMinMax());
    });
});
