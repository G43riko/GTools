import { type ReadonlySimpleVector3, SimpleVector } from "@g43/math";
import { Curve3D } from "./curve-3d.ts";
import { QuadraticBezier } from "./interpolations.ts";

export class QuadraticBezierCurve3D extends Curve3D {
    public constructor(
        private readonly v0 = SimpleVector.ZERO_3,
        private readonly v1 = SimpleVector.ZERO_3,
        private readonly v2 = SimpleVector.ZERO_3,
    ) {
        super([v0, v1, v2]);
    }

    public getPointAt(t: number): ReadonlySimpleVector3 {
        return {
            x: QuadraticBezier(t, this.v0.x, this.v1.x, this.v2.x),
            y: QuadraticBezier(t, this.v0.y, this.v1.y, this.v2.y),
            z: QuadraticBezier(t, this.v0.z, this.v1.z, this.v2.z),
        };
    }
}
