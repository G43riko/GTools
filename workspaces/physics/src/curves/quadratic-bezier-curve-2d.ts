import { SimpleVector } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { Curve2D } from "./curve-2d.ts";
import { QuadraticBezier } from "./interpolations.ts";

export class QuadraticBezierCurve2D extends Curve2D {
    private readonly v0: ReadonlySimpleVector2;
    private readonly v1: ReadonlySimpleVector2;
    private readonly v2: ReadonlySimpleVector2;
    public constructor(
        v0: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
        v1: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
        v2: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
    ) {
        super([v0, v1, v2]);
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
    }

    public getPointAt(t: number): ReadonlySimpleVector2 {
        return {
            x: QuadraticBezier(t, this.v0.x, this.v1.x, this.v2.x),
            y: QuadraticBezier(t, this.v0.y, this.v1.y, this.v2.y),
        };
    }
}
