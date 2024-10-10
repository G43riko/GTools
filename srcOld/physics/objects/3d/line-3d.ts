import { ReadonlySimpleVector3, Vector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { collision3dLineBox, collision3dLineSphere } from "../../collisions-3d";
import { pointLine3dDistance } from "../../distances-3d";
import { Cylinder } from "./cylinder";
import { DistanceAble3D } from "./object-3d";
import { Sphere } from "./sphere";

/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Line3.js
 */
export class Line3D implements DistanceAble3D<"point"> {
    public readonly collideWith = {
        cylinder: (cylinder: Cylinder): boolean => false,
        point   : (point: ReadonlySimpleVector3, tolerance = 0.00001): boolean => pointLine3dDistance(
            this.pointA.x,
            this.pointA.y,
            this.pointA.z,
            this.pointB.x,
            this.pointB.y,
            this.pointB.z,
            point.x,
            point.y,
            point.z,
        ) <= tolerance,
        sphere  : (sphere: Sphere): boolean => collision3dLineSphere(
            this.pointA.x,
            this.pointA.y,
            this.pointA.z,
            this.pointB.x,
            this.pointB.y,
            this.pointB.z,
            sphere.center.x,
            sphere.center.y,
            sphere.center.z,
            sphere.radius,
        ),
        minMax  : (minMax: MinMax3D): boolean => {
            const size = Vector3.sum(minMax.max, minMax.min);

            return collision3dLineBox(
                this.pointA.x,
                this.pointA.y,
                this.pointA.z,
                this.pointB.x,
                this.pointB.y,
                this.pointB.z,
                minMax.min.x,
                minMax.min.y,
                minMax.min.z,
                size.x,
                size.y,
                size.z,
            );
        },
    };

    public readonly distanceTo = {
        point: (point: ReadonlySimpleVector3): number => pointLine3dDistance(
            this.pointA.x,
            this.pointA.y,
            this.pointA.z,
            this.pointB.x,
            this.pointB.y,
            this.pointB.z,
            point.x,
            point.y,
            point.z,
        ),
    };

    public constructor(public readonly pointA: ReadonlySimpleVector3,
                       public readonly pointB: ReadonlySimpleVector3) {
    }

    public get length(): number {
        return Vector3.dist(this.pointA, this.pointB);
    }

    public get lengthSQ(): number {
        return Vector3.distSqrt(this.pointA, this.pointB);
    }

    public getCenter(): ReadonlySimpleVector3 {
        return {
            x: (this.pointA.x + this.pointB.x) / 2,
            y: (this.pointA.y + this.pointB.y) / 2,
            z: (this.pointA.z + this.pointB.z) / 2,
        };
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

    public equals(line: any): boolean {
        if (!line) {
            return false;
        }

        if (!(line instanceof Line3D)) {
            return false;
        }

        return Vector3.equals(line.pointA, this.pointA) && Vector3.equals(line.pointB, this.pointB);
    }

    public toMinMax(): MinMax3D {
        return {
            min: Vector3.min(this.pointA, this.pointB),
            max: Vector3.max(this.pointA, this.pointB),
        };
    }
}
