import { type ReadonlySimpleVector3, Vector3 } from "@g43/math";
import type { MinMax3D } from "@g43/types";
import type { VolumeAble3D } from "./object-3d.ts";

export class Ellipsoid implements VolumeAble3D {
    public get volume(): number {
        return Math.PI * 4 / 3 * this.radius.x * this.radius.y * this.radius.z;
    }

    public constructor(
        public readonly center: ReadonlySimpleVector3,
        public readonly radius: ReadonlySimpleVector3,
    ) {
    }

    public getCenter(): ReadonlySimpleVector3 {
        return this.center;
    }

    public equals(ellipsoid: any): boolean {
        if (!ellipsoid) {
            return false;
        }

        if (!(ellipsoid instanceof Ellipsoid)) {
            return false;
        }

        return Vector3.equals(ellipsoid.center, this.center) && Vector3.equals(ellipsoid.radius, this.radius);
    }

    public toMinMax(): MinMax3D {
        return {
            min: {
                x: this.center.x - this.radius.x,
                y: this.center.y - this.radius.y,
                z: this.center.z - this.radius.z,
            },
            max: {
                x: this.center.x + this.radius.x,
                y: this.center.y + this.radius.y,
                z: this.center.z + this.radius.z,
            },
        };
    }
}
