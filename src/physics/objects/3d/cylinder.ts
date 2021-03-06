import { ReadonlySimpleVector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { collision3dBoxMinMaxCylinder, collision3dCylinderCylinder, collision3dPointCylinder, collision3dSphereCylinder } from "../../collisions-3d";
import { CollideAble3D, VolumeAble3D } from "./object-3d";
import { Sphere } from "./sphere";

export class Cylinder implements VolumeAble3D, CollideAble3D {
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

    public get volume(): number {
        return Math.PI * this.radius * this.radius * this.height;
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

    public collideWithCylinder(cylinder: Cylinder): boolean {
        return collision3dCylinderCylinder(
            cylinder.position.x,
            cylinder.position.y,
            cylinder.position.z,
            cylinder.radius,
            cylinder.height,
            this.position.x,
            this.position.y,
            this.position.z,
            this.radius,
            this.height,
        );
    }

    public collideWithPoint(point: ReadonlySimpleVector3): boolean {
        return collision3dPointCylinder(
            point.x,
            point.y,
            point.z,
            this.position.x,
            this.position.y,
            this.position.z,
            this.radius,
            this.height,
        );
    }

    public collideWithSphere(sphere: Sphere): boolean {
        return collision3dSphereCylinder(
            sphere.center.x,
            sphere.center.y,
            sphere.center.z,
            sphere.radius,
            this.position.x,
            this.position.y,
            this.position.z,
            this.radius,
            this.height,
        );
    }

    public collideWithMinMax(minMax: MinMax3D): boolean {
        return collision3dBoxMinMaxCylinder(
            minMax.min.x,
            minMax.min.y,
            minMax.min.z,
            minMax.max.x,
            minMax.max.y,
            minMax.max.z,
            this.position.x,
            this.position.y,
            this.position.z,
            this.radius,
            this.height,
        );
    }
}
