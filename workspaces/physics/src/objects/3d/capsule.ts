import { Vector3 } from "@g43/math";
import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import { CollisionTable3d } from "../../collision-table-3d.ts";
import type { VolumeAble3D } from "./object-3d.ts";
import { Cylinder } from "./cylinder.ts";
import { Sphere } from "./sphere.ts";

export class Capsule implements VolumeAble3D {
    public static fromCylinder(cylinder: Cylinder): Capsule {
        return new Capsule(cylinder.position, cylinder.radius, cylinder.height);
    }

    public readonly collideWith = {
        point: (point: ReadonlySimpleVector3): boolean => CollisionTable3d.pointCapsule(point, this),
    };

    public get volume(): number {
        return Cylinder.getVolume(this.radius, this.height - this.radius * 2) + Sphere.getVolume(this.radius);
    }

    /**
     * @param position - bottom center of bottom center of bottom sphere
     * @param radius
     * @param height - height from the bottom  of  bottom sphere to the top of the top sphere
     */
    public constructor(
        public readonly position: ReadonlySimpleVector3,
        public readonly radius: number,
        public readonly height: number,
    ) {
    }

    public equals(capsule: any): boolean {
        if (!capsule) {
            return false;
        }

        if (!(capsule instanceof Capsule)) {
            return false;
        }

        return this.height === capsule.height && this.radius === capsule.radius &&
            Vector3.equals(this.position, capsule.position);
    }

    public getCenter(): ReadonlySimpleVector3 {
        return {
            x: this.position.x,
            y: this.position.y + this.height / 2,
            z: this.position.z,
        };
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
