import { SimpleVector2, Vector2 } from "../../math";
import { MinMax2D } from "../../types";
import { RayCast2D, RaycastResult } from "../objects/2d/ray-2d";
import { AABB } from "./aabb";

export class AABB2 implements AABB<AABB2, SimpleVector2, MinMax2D> {
    public constructor(protected readonly min: SimpleVector2, protected readonly max: SimpleVector2) {
    }

    public rayCast(result: RaycastResult, ray: RayCast2D, maxFraction = Infinity): boolean {
        // From Real-time Collision Detection, p179.

        let tmin = -Infinity;
        let tmax = Infinity;

        const p = ray.from;
        const d = ray.direction;
        const absD = Vector2.getAbs(d);

        const normal = Vector2.ZERO;

        // @ts-ignore
        for (let f: "x" | "y" = "x"; f !== null; f = f === "x" ? "y" : null) {
            if (absD.x < Number.EPSILON) {
                // Parallel.
                if (p[f] < this.min[f] || this.max[f] < p[f]) {
                    return false;
                }
            } else {
                const invD = 1 / d[f];
                let t1 = (this.min[f] - p[f]) * invD;
                let t2 = (this.max[f] - p[f]) * invD;

                // Sign of the normal vector.
                let s = -1;

                if (t1 > t2) {
                    const temp = t1;
                    t1 = t2;
                    t2 = temp;
                    s = 1;
                }

                // Push the min up
                if (t1 > tmin) {
                    normal.setData(0, 0);
                    normal[f] = s;
                    tmin = t1;
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

    public expandByScalar(distance: number): void {
        this.min.x -= distance;
        this.min.y -= distance;
        this.max.x += distance;
        this.max.y += distance;
    }

    public expandByVector(vec: SimpleVector2): void {
        this.min.x -= vec.x;
        this.min.y -= vec.y;
        this.max.x += vec.x;
        this.max.y += vec.y;
    }

    public expandByPoint(point: SimpleVector2): void {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);

        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
    }

    public expandByAABB(other: AABB2): void {
        this.min.x = Math.min(this.min.x, other.min.x);
        this.min.y = Math.min(this.min.y, other.min.y);

        this.max.x = Math.max(this.max.x, other.max.x);
        this.max.y = Math.max(this.max.y, other.max.y);
    }

    public moveByScalar(distance: number): void {
        this.min.x += distance;
        this.min.y += distance;
        this.max.x += distance;
        this.max.y += distance;
    }

    public getCenter(): SimpleVector2 {
        return {
            x: (this.max.x + this.min.x) / 2,
            y: (this.max.y + this.min.y) / 2,
        };
    }

    public getSize(): SimpleVector2 {
        return {
            x: this.max.x - this.min.x,
            y: this.max.y - this.min.y,
        };
    }

    public getVolume(): number {
        const size = this.getSize();

        return size.x * size.y;
    }

    public moveByVector(vec: SimpleVector2): void {
        this.min.x += vec.x;
        this.min.y += vec.y;
        this.max.x += vec.x;
        this.max.y += vec.y;
    }

    public getMinMax(): MinMax2D {
        return {
            min: this.min,
            max: this.max,
        };
    }

    public static fromPosAndSize(pos: SimpleVector2, size: SimpleVector2): AABB2 {
        return new AABB2(
            {
                x: pos.x,
                y: pos.y,
            },
            {
                x: pos.x + size.x,
                y: pos.y + size.y,
            },
        );
    }

    public getPosition(): SimpleVector2 {
        return {
            x: this.min.x,
            y: this.min.y,
        };
    }

    public static fromCenterAndSize(center: SimpleVector2, size: SimpleVector2): AABB2 {
        const halfSize = {
            x: size.x / 2,
            y: size.y / 2,
        };

        return new AABB2(
            {
                x: center.x + halfSize.x,
                y: center.y + halfSize.y,
            },
            {
                x: center.x - halfSize.x,
                y: center.y - halfSize.y,
            },
        );
    }

    public moveCenterTo(center: SimpleVector2): void {
        const offset = {
            x: center.x - (this.max.x + this.min.x) / 2,
            y: center.y - (this.max.y + this.min.y) / 2,
        };

        this.min.x += offset.x;
        this.min.y += offset.y;
        this.max.x += offset.x;
        this.max.y += offset.y;
    }
}
