import { SimpleVector } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { Curve2D } from "./curve-2d.ts";
import { QuadraticBezier } from "./interpolations.ts";

export class QuadraticBezierCurve2D extends Curve2D {
    public constructor(
        private readonly v0: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
        private readonly v1: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
        private readonly v2: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
    ) {
        super([v0, v1, v2]);
    }

    public getPointAt(t: number): ReadonlySimpleVector2 {
        return {
            x: QuadraticBezier(t, this.v0.x, this.v1.x, this.v2.x),
            y: QuadraticBezier(t, this.v0.y, this.v1.y, this.v2.y),
        };
    }
}
