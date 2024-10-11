import { ReadonlySimpleVector3, SimpleVector3, Vector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { intersection3dLineMinMax, intersection3dLineSphere } from "../../intersects-3d";

export class Ray3D {
    public constructor(
        public readonly origin: ReadonlySimpleVector3,
        public readonly direction: ReadonlySimpleVector3,
        public readonly length = Infinity,
    ) {
    }

    public get end(): SimpleVector3 {
        return Vector3.fromVec(this.direction).mul(this.length).add(this.origin);
    }

    public getMinMaxIntersection(minMax: MinMax3D): undefined | SimpleVector3 {
        return intersection3dLineMinMax(
            this.origin,
            this.end,
            minMax,
        );
    }

    public getSphereIntersection(center: ReadonlySimpleVector3, radius: number): undefined | SimpleVector3 {
        return intersection3dLineSphere(
            this.origin,
            this.end,
            center,
            radius,
        );
    }

    public static fromLine(start: ReadonlySimpleVector3, end: ReadonlySimpleVector3): Ray3D {
        const direction = Vector3.sub(end, start);
        const length = direction.length;

        return new Ray3D(start, Vector3.normalize(direction), length);
    }
}
