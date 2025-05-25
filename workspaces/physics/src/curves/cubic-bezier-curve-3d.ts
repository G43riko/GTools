import { SimpleVector } from "@g43/math";
import type { ReadonlySimpleVector3 } from "@g43/types";
import { Curve3D } from "./curve-3d.ts";
import { CubicBezier } from "./interpolations.ts";

export class CubicBezierCurve3D extends Curve3D {
    private readonly v0: ReadonlySimpleVector3;
    private readonly v1: ReadonlySimpleVector3;
    private readonly v2: ReadonlySimpleVector3;
    private readonly v3: ReadonlySimpleVector3;
    public constructor(
        v0: ReadonlySimpleVector3 = SimpleVector.ZERO_3,
        v1: ReadonlySimpleVector3 = SimpleVector.ZERO_3,
        v2: ReadonlySimpleVector3 = SimpleVector.ZERO_3,
        v3: ReadonlySimpleVector3 = SimpleVector.ZERO_3,
    ) {
        super([v0, v1, v2, v3]);
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    public getPointAt(t: number): ReadonlySimpleVector3 {
        return {
            x: CubicBezier(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
            y: CubicBezier(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
            z: CubicBezier(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z),
        };
    }
}
