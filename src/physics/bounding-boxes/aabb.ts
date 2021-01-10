import { MinMax } from "gtools/types";
import { Vector2 } from "../../math";
import { RayCast, RaycastResult } from "../objects/2d/ray";

const EPSILON = 1e-9;

export class AABB {
    public constructor(private readonly minMax: MinMax) {
    }

    public rayCast(result: RaycastResult, ray: RayCast, maxFraction = Infinity): boolean {
        // From Real-time Collision Detection, p179.

        let tmin = -Infinity;
        let tmax = Infinity;

        const p    = ray.from;
        const d    = ray.direction;
        const absD = Vector2.getAbs(d);

        const normal = Vector2.ZERO;

        // @ts-ignore
        for (let f: "x" | "y" = "x"; f !== null; f = (f === "x" ? "y" : null)) {
            if (absD.x < EPSILON) {
                // Parallel.
                if (p[f] < this.minMax.min[f] || this.minMax.max[f] < p[f]) {
                    return false;
                }
            } else {
                const invD = 1 / d[f];
                let t1     = (this.minMax.min[f] - p[f]) * invD;
                let t2     = (this.minMax.max[f] - p[f]) * invD;

                // Sign of the normal vector.
                let s = -1;

                if (t1 > t2) {
                    const temp = t1;
                    t1         = t2;
                    t2         = temp;
                    s          = 1;
                }

                // Push the min up
                if (t1 > tmin) {
                    normal.setData(0, 0);
                    normal[f] = s;
                    tmin      = t1;
                }

                // Pull the max down
                tmax = Math.min(tmax, t2);

                if (tmin > tmax) {
                    return false;
                }
            }
        }

        // Does the ray start inside the box?
        // Does the ray intersect beyond the max fraction?
        if (tmin < 0 || maxFraction < tmin) {
            return false;
        }

        result.fraction = tmin;
        result.normal.set(normal);

        return true;
    }
}
