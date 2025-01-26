import { Vector3 } from "@g43/math";
import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import { CollisionTable3d } from "../../collision-table-3d.ts";
import { IntersectionTable3d } from "../../intersection-table-3d.ts";
import type { Capsule } from "./capsule.ts";
import type { Line3D } from "./line-3d.ts";
import type { CollideAble3D, VolumeAble3D } from "./object-3d.ts";
import type { Sphere } from "./sphere.ts";

export class Cylinder implements VolumeAble3D, CollideAble3D<"minMax" | "cylinder" | "point" | "sphere"> {
    public readonly collideWith = {
        cylinder: (cylinder: Cylinder): boolean => CollisionTable3d.cylinderCylinder(this, cylinder),
        point: (point: ReadonlySimpleVector3): boolean => CollisionTable3d.cylinderPoint(this, point),
        sphere: (sphere: Sphere): boolean => CollisionTable3d.sphereCylinder(sphere, this),
        minMax: (minMax: MinMax3D): boolean => CollisionTable3d.cylinderMinMax(this, minMax),
    };

    public static fromCapsule(capsule: Capsule): Cylinder {
        return new Cylinder(capsule.position, capsule.radius, capsule.height);
    }

    public readonly intersectionWith = {
        line: (line: Line3D): ReadonlySimpleVector3 | undefined =>
            IntersectionTable3d.cylinderLine(this, line.pointA, line.pointB),
    };

    /**
     * @param position - bottom center of cylinder
     * @param radius - radius of cylinder
     * @param height - height of cylinder
     */
    public constructor(
        public readonly position: ReadonlySimpleVector3,
        public readonly radius: number,
        public readonly height: number,
    ) {
    }

    public equals(cylinder: any): boolean {
        if (!cylinder) {
            return false;
        }

        if (!(cylinder instanceof Cylinder)) {
            return false;
        }

        return this.height === cylinder.height && this.radius === cylinder.radius &&
            Vector3.equals(this.position, cylinder.position);
    }

    public getCenter(): ReadonlySimpleVector3 {
        return {
            x: this.position.x,
            y: this.position.y + this.height / 2,
            z: this.position.z,
        };
    }

    public static getVolume(height: number, radius: number): number {
        return Math.PI * radius * radius * height;
    }

    public get volume(): number {
        return Cylinder.getVolume(this.height, this.radius);
    }

    public toMinMax(): MinMax3D {
        return {
            min: {
                x: this.position.x - this.radius,
                y: this.position.y,
                z: this.position.z - this.radius,
            },
            max: {
                x: this.position.x + this.radius,
                y: this.position.y + this.height,
                z: this.position.z + this.radius,
            },
        };
    }
}
