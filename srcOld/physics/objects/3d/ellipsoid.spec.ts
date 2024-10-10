import { expect } from "chai";
import { SimpleVector3 } from "../../../math";
import { Ellipsoid } from "./ellipsoid";
import { Sphere } from "./sphere";

describe("Ellipsoid", () => {
    it("Should test ellipsoid creation", () => {

    });

    it("Should test volume and toMinMax", () => {
        const ellipsoid = new Ellipsoid(SimpleVector3.ZERO, SimpleVector3.ONE);
        const sphere = new Sphere(SimpleVector3.ZERO, 1);
        const zeroEllipsoid = new Ellipsoid(SimpleVector3.ZERO, SimpleVector3.ZERO);

        expect(zeroEllipsoid.volume).to.be.equal(0);
        expect(zeroEllipsoid.toMinMax()).to.deep.equal({min: SimpleVector3.ZERO, max: SimpleVector3.ZERO});

        expect(ellipsoid.volume).to.be.equal(sphere.volume);
        expect(ellipsoid.toMinMax()).to.deep.equal(sphere.toMinMax());
    });
});
