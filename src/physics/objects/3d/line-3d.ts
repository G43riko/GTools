import { ReadonlySimpleVector3, Vector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { Object3D } from "./object-3d";

/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Line3.js
 */
export class Line3D implements Object3D {
    public constructor(public readonly pointA: ReadonlySimpleVector3,
                       public readonly pointB: ReadonlySimpleVector3) {
    }

    public get length(): number {
        return Vector3.dist(this.pointA, this.pointB);
    }

    public get lengthSQ(): number {
        return Vector3.distSqrt(this.pointA, this.pointB);
    }

    public get boundingRadius(): number {
        return this.length / 2;
    }

    public static fromPoints(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number): Line3D {
        return new Line3D(
            {
                x: aX,
                y: aY,
                z: aZ,
            },
            {
                x: bX,
                y: bY,
                z: bZ,
            },
        );
    }

    public toMinMax(): MinMax3D {
        return {
            min: Vector3.min(this.pointA, this.pointB),
            max: Vector3.max(this.pointA, this.pointB),
        };
    }
}
