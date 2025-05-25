import type { ReadonlySimpleVector3 } from "@g43/types";
import { SimpleVector } from "@g43/math";
import { Curve3D } from "./curve-3d.ts";
import { QuadraticBezier } from "./interpolations.ts";

export class QuadraticBezierCurve3D extends Curve3D {
    private readonly v0: ReadonlySimpleVector3;
    private readonly v1: ReadonlySimpleVector3;
    private readonly v2: ReadonlySimpleVector3;
    public constructor(
        v0: ReadonlySimpleVector3 = SimpleVector.ZERO_3,
        v1: ReadonlySimpleVector3 = SimpleVector.ZERO_3,
        v2: ReadonlySimpleVector3 = SimpleVector.ZERO_3,
    ) {
        super([v0, v1, v2]);
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
    }

    public getPointAt(t: number): ReadonlySimpleVector3 {
        return {
            x: QuadraticBezier(t, this.v0.x, this.v1.x, this.v2.x),
            y: QuadraticBezier(t, this.v0.y, this.v1.y, this.v2.y),
            z: QuadraticBezier(t, this.v0.z, this.v1.z, this.v2.z),
        };
    }
}
