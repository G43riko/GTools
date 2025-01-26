import { type ReadonlySimpleVector2, SimpleVector } from "@g43/math";
import { Curve2D } from "./curve-2d";
import { CubicBezier } from "./interpolations";

export class CubicBezierCurve2D extends Curve2D {
    public constructor(
        private readonly v0 = SimpleVector.ZERO_2,
        private readonly v1 = SimpleVector.ZERO_2,
        private readonly v2 = SimpleVector.ZERO_2,
        private readonly v3 = SimpleVector.ZERO_2,
    ) {
        super([v0, v1, v2, v3]);
    }

    public getPointAt(t: number): ReadonlySimpleVector2 {
        return {
            x: CubicBezier(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
            y: CubicBezier(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
        };
    }
}
