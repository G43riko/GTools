import { SimpleVector3, Vector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { Plane3D } from "./plane-3d";

/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Triangle.js
 */
export class Triangle3D {
    public constructor(
        private readonly pointA: SimpleVector3,
        private readonly pointB: SimpleVector3,
        private readonly pointC: SimpleVector3,
    ) {
    }

    public getNormal(): SimpleVector3 {
        const AB = Vector3.sub(this.pointA, this.pointB);
        const AC = Vector3.sub(this.pointA, this.pointC);

        return AB.cross(AC).normalize();
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
}
