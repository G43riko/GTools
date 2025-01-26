import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { SimpleVector } from "@g43/math";
import { LineCurve2d } from "./line-curve-2d.ts";

describe("LineCurve2D", () => {
    it("It should point access", () => {
        const curve = new LineCurve2d([
            SimpleVector.create(0, 0),
            SimpleVector.create(1, 0),
            SimpleVector.create(5, 0),
            SimpleVector.create(7, 0),
            SimpleVector.create(8, 0),
        ]);
        expect(curve.length).toEqual(5);
        expect(curve.getSize()).toEqual(8);

        expect(curve.getPoint(0)).toEqual({ x: 0, y: 0 });
        expect(curve.getPoint(2)).toEqual({ x: 5, y: 0 });
        expect(curve.getPoint(4)).toEqual({ x: 8, y: 0 });

        expect(curve.getPointAt(0)).toEqual({ x: 0, y: 0 });
        expect(curve.getPointAt(0.5)).toEqual({ x: 4, y: 0 });
        expect(curve.getPointAt(1)).toEqual({ x: 8, y: 0 });

        expect(curve.getPoints(2)).toEqual([
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 8, y: 0 },
        ]);
    });
});
