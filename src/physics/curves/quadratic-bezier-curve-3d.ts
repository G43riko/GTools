import { ReadonlySimpleVector3 } from "../../math";
import { Curve3D } from "./curve-3d";

// QuadraticBezier
function QuadraticBezierP0(t: number, p: number): number {
    const k = 1 - t;

    return k * k * p;
}

function QuadraticBezierP1(t: number, p: number): number {
    return 2 * (1 - t) * t * p;
}

function QuadraticBezierP2(t: number, p: number): number {
    return t * t * p;
}

function QuadraticBezier(t: number, p0: number, p1: number, p2: number): number {
    return QuadraticBezierP0(t, p0) + QuadraticBezierP1(t, p1) + QuadraticBezierP2(t, p2);
}

export class QuadraticBezierCurve3D extends Curve3D {
    public constructor(
        private readonly v0 = {x: 0, y: 0, z: 0},
        private readonly v1 = {x: 0, y: 0, z: 0},
        private readonly v2 = {x: 0, y: 0, z: 0},
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
