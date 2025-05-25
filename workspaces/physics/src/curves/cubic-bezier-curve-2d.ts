import { SimpleVector } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { Curve2D } from "./curve-2d.ts";
import { CubicBezier } from "./interpolations.ts";

export class CubicBezierCurve2D extends Curve2D {
    private readonly v0: ReadonlySimpleVector2;
    private readonly v1: ReadonlySimpleVector2;
    private readonly v2: ReadonlySimpleVector2;
    private readonly v3: ReadonlySimpleVector2;
    public constructor(
        v0: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
        v1: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
        v2: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
        v3: ReadonlySimpleVector2 = SimpleVector.ZERO_2,
    ) {
        super([v0, v1, v2, v3]);
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    public getPointAt(t: number): ReadonlySimpleVector2 {
        return {
            x: CubicBezier(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
            y: CubicBezier(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
        };
    }
}
