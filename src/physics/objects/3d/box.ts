import { ReadonlySimpleVector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { collision3dBoxBoxMinMax, collision3dBoxCylinder, collision3dPointBox, collision3dSphereBoxMinMax } from "../../collisions-3d";
import { convertPosSizeToMinMax3D } from "../object-3d-convertors";
import { Cylinder } from "./cylinder";
import { CollideAble3D, VolumeAble3D } from "./object-3d";
import { Sphere } from "./sphere";

export class Box implements VolumeAble3D, CollideAble3D {
    public constructor(
        public readonly position: ReadonlySimpleVector3,
        public readonly size: ReadonlySimpleVector3,
    ) {
    }

    public get volume(): number {
        return this.size.x * this.size.y * this.size.z;
    }

    public toMinMax(): MinMax3D {
        return convertPosSizeToMinMax3D(this);
    }

    public collideWithCylinder(cylinder: Cylinder): boolean {
        return collision3dBoxCylinder(
            this.position.x,
            this.position.y,
            this.position.z,
            this.size.x,
            this.size.y,
            this.size.z,
            cylinder.position.x,
            cylinder.position.y,
            cylinder.position.z,
            cylinder.radius,
            cylinder.height,
        );
    }

    public collideWithPoint(point: ReadonlySimpleVector3): boolean {
        return collision3dPointBox(point.x, point.y, point.z, this.position.x, this.position.y, this.position.z, this.size.x, this.size.y, this.size.z);
    }

    public collideWithSphere(sphere: Sphere): boolean {
        const minMax = this.toMinMax();

        return collision3dSphereBoxMinMax(
            sphere.center.x,
            sphere.center.y,
            sphere.center.z,
            sphere.radius,
            minMax.min.x,
            minMax.min.y,
            minMax.min.z,
            minMax.max.x,
            minMax.max.y,
            minMax.max.z,
        );
    }

    public collideWithMinMax(minMax: MinMax3D): boolean {
        return collision3dBoxBoxMinMax(
            this.position.x,
            this.position.y,
            this.position.z,
            this.size.x,
            this.size.y,
            this.size.z,
            minMax.min.x,
            minMax.min.y,
            minMax.min.z,
            minMax.max.x,
            minMax.max.y,
            minMax.max.z,
        );
    }
}
