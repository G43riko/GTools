import { ReadonlySimpleVector3, SimpleVector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { collision3dPointSphere, collision3dSphereBoxMinMax, collision3dSphereCylinder, collision3dSphereSphere } from "../../collisions-3d";
import { Cylinder } from "./cylinder";
import { CollideAble3D, VolumeAble3D } from "./object-3d";

/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Sphere.js
 */
export class Sphere implements VolumeAble3D, CollideAble3D {
    public constructor(
        public readonly center: ReadonlySimpleVector3,
        public readonly radius: number,
    ) {
    }

    public toMinMax(): MinMax3D {
        return {
            min: {
                x: this.center.x - this.radius,
                y: this.center.y - this.radius,
                z: this.center.z - this.radius,
            },
            max: {
                x: this.center.x + this.radius,
                y: this.center.y + this.radius,
                z: this.center.z + this.radius,
            },
        };
    }

    public static fromPoints(points: SimpleVector3[], optionalCenter?: SimpleVector3): Sphere {
        return null as any;
    }

    public get volume(): number {
        return 4 / 3 * Math.PI * Math.pow(this.radius, 3);
    }

    public collideWithCylinder(cylinder: Cylinder): boolean {
        return collision3dSphereCylinder(
            this.center.x,
            this.center.y,
            this.center.z,
            this.radius,
            cylinder.position.x,
            cylinder.position.y,
            cylinder.position.z,
            cylinder.radius,
            cylinder.height,
        );
    }

    public collideWithPoint(point: ReadonlySimpleVector3): boolean {
        return collision3dPointSphere(point.x, point.y, point.z, this.center.x, this.center.y, this.center.z, this.radius);
    }

    public collideWithSphere(sphere: Sphere): boolean {
        return collision3dSphereSphere(this.center.x, this.center.y, this.center.z, this.radius, sphere.center.x, sphere.center.y, sphere.center.z, sphere.radius);
    }

    public collideWithMinMax(minMax: MinMax3D): boolean {
        return collision3dSphereBoxMinMax(this.center.x, this.center.y, this.center.z, this.radius, minMax.min.x, minMax.min.y, minMax.min.z, minMax.max.x, minMax.max.y, minMax.max.z);
    }
}
