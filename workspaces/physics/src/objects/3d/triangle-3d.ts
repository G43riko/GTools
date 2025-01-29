import { Vector3 } from "@g43/math";
import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import type { Object3D } from "./object-3d.ts";
import type { Plane3D } from "./plane-3d.ts";

/**
 * @see https://github.com/mrdoob/three.js/blob/dev/src/math/Triangle.js
 */
export class Triangle3D implements Object3D {
    public static area(v1: ReadonlySimpleVector3, v2: ReadonlySimpleVector3, v3: ReadonlySimpleVector3): number {
        const v1v2 = { x: v2.x - v1.x, y: v2.y - v1.y, z: v2.z - v1.z };
        const v1v3 = { x: v3.x - v1.x, y: v3.y - v1.y, z: v3.z - v1.z };
    
        const crossX = v1v2.y * v1v3.z - v1v2.z * v1v3.y;
        const crossY = v1v2.z * v1v3.x - v1v2.x * v1v3.z;
        const crossZ = v1v2.x * v1v3.y - v1v2.y * v1v3.x;
    
        const magnitude = Math.sqrt(crossX*crossX + crossY*crossY + crossZ*crossZ)
        const area = magnitude / 2;
    
        return area;
    }

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

        return Vector3.equals(triangle.pointA, this.pointA) && Vector3.equals(triangle.pointB, this.pointB) &&
            Vector3.equals(triangle.pointC, this.pointC);
    }

    public get area(): number {
        return Triangle3D.area(this.pointA, this.pointB, this.pointC);
    }

    public getPlane(): Plane3D {
        throw new Error("Not implemented");
    }

    public collideWithMinMax(_minMax: MinMax3D): boolean {
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
