import { ReadonlySimpleVector3, Vector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { Object3D } from "./object-3d";
import { Plane3D } from "./plane-3d";

/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Triangle.js
 */
export class Triangle3D implements Object3D {
    public constructor(
        public readonly pointA: ReadonlySimpleVector3,
        public readonly pointB: ReadonlySimpleVector3,
        public readonly pointC: ReadonlySimpleVector3,
    ) {
    }

    public getNormal(): ReadonlySimpleVector3 {
        const AB = Vector3.sub(this.pointA, this.pointB);
        const AC = Vector3.sub(this.pointA, this.pointC);

        return AB.cross(AC).normalize();
    }

    public getCenter(): ReadonlySimpleVector3 {
        return {
            x: (this.pointA.x + this.pointB.x + this.pointC.x) / 3,
            y: (this.pointA.y + this.pointB.y + this.pointC.y) / 3,
            z: (this.pointA.z + this.pointB.z + this.pointC.z) / 3,
        };
    }

    public equals(triangle: any): boolean {
        if (!triangle) {
            return false;
        }

        if (!(triangle instanceof Triangle3D)) {
            return false;
        }

        return Vector3.equals(triangle.pointA, this.pointA) && Vector3.equals(triangle.pointB, this.pointB) && Vector3.equals(triangle.pointC, this.pointC);
    }

    public get area(): number {
        throw new Error("Not implemented");
    }

    public getPlane(): Plane3D {
        throw new Error("Not implemented");
    }

    public collideWithMinMax(minMax: MinMax3D): boolean {
        throw new Error("Not implemented");
    }

    public toMinMax(): MinMax3D {
        return {
            min: {
                x: Math.min(this.pointA.x, this.pointB.x, this.pointC.x),
                y: Math.min(this.pointA.y, this.pointB.y, this.pointC.y),
                z: Math.min(this.pointA.z, this.pointB.z, this.pointC.z),
            },
            max: {
                x: Math.max(this.pointA.x, this.pointB.x, this.pointC.x),
                y: Math.max(this.pointA.y, this.pointB.y, this.pointC.y),
                z: Math.max(this.pointA.z, this.pointB.z, this.pointC.z),
            },
        };
    }
}
