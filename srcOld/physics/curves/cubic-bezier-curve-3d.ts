import { ReadonlySimpleVector3, SimpleVector3 } from "../../math";
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

// CubicBezier

function CubicBezierP0(t: number, p: number): number {
    const k = 1 - t;

    return k * k * k * p;
}

function CubicBezierP1(t: number, p: number): number {
    const k = 1 - t;

    return 3 * k * k * t * p;
}

function CubicBezierP2(t: number, p: number): number {
    return 3 * (1 - t) * t * t * p;
}

function CubicBezierP3(t: number, p: number): number {
    return t * t * t * p;
}

function CubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
    return CubicBezierP0(t, p0) + CubicBezierP1(t, p1) + CubicBezierP2(t, p2) + CubicBezierP3(t, p3);
}

export class CubicBezierCurve3D extends Curve3D {
    public constructor(
        private readonly v0 = SimpleVector3.ZERO,
        private readonly v1 = SimpleVector3.ZERO,
        private readonly v2 = SimpleVector3.ZERO,
        private readonly v3 = SimpleVector3.ZERO,
    ) {
        super([v0, v1, v2, v3]);
    }

    public getPointAt(t: number): ReadonlySimpleVector3 {
        return {
            x: CubicBezier(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
            y: CubicBezier(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
            z: CubicBezier(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z),
        };
    }
}
