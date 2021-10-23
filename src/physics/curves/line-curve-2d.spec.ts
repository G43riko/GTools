import { expect } from "chai";
import { SimpleVector2 } from "../../math";
import { LineCurve2d } from "./line-curve-2d";

describe("LineCurve2D", () => {
    it("It should point access", () => {
        const curve = new LineCurve2d([
            SimpleVector2.create(0, 0),
            SimpleVector2.create(1, 0),
            SimpleVector2.create(5, 0),
            SimpleVector2.create(7, 0),
            SimpleVector2.create(8, 0),
        ]);
        expect(curve.length).to.be.equal(5);
        expect(curve.getSize()).to.be.equal(10);

        expect(curve.getPoint(0)).to.deep.equal({x: 0, y: 0});
        expect(curve.getPoint(2)).to.deep.equal({x: 5, y: 0});
        expect(curve.getPoint(4)).to.deep.equal({x: 10, y: 0});

        expect(curve.getPointAt(0)).to.deep.equal({x: 0, y: 0});
        expect(curve.getPointAt(0.5)).to.deep.equal({x: 5, y: 0});
        expect(curve.getPointAt(1)).to.deep.equal({x: 10, y: 0});

        expect(curve.getPoints(5)).to.deep.equal([
            {x: 0, y: 0},
            {x: 2, y: 0},
            {x: 4, y: 0},
            {x: 6, y: 0},
            {x: 8, y: 0},
            {x: 10, y: 0},
        ]);

    });
});
