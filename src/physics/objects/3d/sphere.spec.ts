import { expect } from "chai";
import { SimpleVector3 } from "../../../math";
import { Ellipsoid } from "./ellipsoid";
import { Sphere } from "./sphere";

describe("Sphere", () => {
    describe("Should test sphere creation", () => {
        it("FromPoints", () => {
            const sphere       = Sphere.fromPoints([{x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}]);
            const originSphere = new Sphere(SimpleVector3.ZERO, 2);

            expect(originSphere.equals(sphere)).to.be.true;
        });
    });

    it("Should test volume and toMinMax", () => {
        const ellipsoid  = new Ellipsoid(SimpleVector3.ZERO, SimpleVector3.ONE);
        const sphere     = new Sphere(SimpleVector3.ZERO, 1);
        const zeroSphere = new Sphere(SimpleVector3.ZERO, 0);

        expect(zeroSphere.volume).to.be.equal(0);
        expect(zeroSphere.toMinMax()).to.deep.equal({min: SimpleVector3.ZERO, max: SimpleVector3.ZERO});

        expect(sphere.volume).to.be.equal(ellipsoid.volume);
        expect(sphere.toMinMax()).to.deep.equal(ellipsoid.toMinMax());
    });
});
