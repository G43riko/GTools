import { SimpleVector, Vector2 } from "@g43/math";
import type { MinMax2D, ReadonlySimpleVector2, SimpleVector2 } from "@g43/types";
import type { RayCast2D, RaycastResult } from "../objects/2d/ray-2d.ts";
import type { AABB } from "./aabb.ts";

/**
 * @see https://github.com/excaliburjs/Excalibur/blob/main/src/engine/Collision/BoundingBox.ts
 * @see GameEngineBoundingBox
 * @see AABB2_Old
 */
// eslint-disable-next-line no-use-before-define
export class AABB2 implements AABB<AABB2, SimpleVector2, MinMax2D> {
    public static fromPosAndSize(pos: ReadonlySimpleVector2, size: ReadonlySimpleVector2): AABB2 {
        return new AABB2(
            pos.y,
            pos.x + size.x,
            pos.y + size.y,
            pos.x,
        );
    }

    public static fromCenterAndSize(center: ReadonlySimpleVector2, size: ReadonlySimpleVector2): AABB2 {
        const halfSize = {
            x: size.x / 2,
            y: size.y / 2,
        };

        return new AABB2(
            center.y - halfSize.y,
            center.x + halfSize.x,
            center.y + halfSize.y,
            center.x - halfSize.x,
        );
    }

    public static fromDimension(
        width: number,
        height: number,
        anchor = SimpleVector.HALF_2,
        pos = SimpleVector.ZERO_2,
    ): AABB2 {
        return new AABB2(
            -width * anchor.x + pos.x,
            -height * anchor.y + pos.y,
            width - width * anchor.x + pos.x,
            height - height * anchor.y + pos.y,
        );
    }

    public static fromPoints(points: ReadonlySimpleVector2[]): AABB2 {
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        for (const point of points) {
            if (point.x < minX) {
                minX = point.x;
            }
            if (point.x > maxX) {
                maxX = point.x;
            }
            if (point.y < minY) {
                minY = point.y;
            }
            if (point.y > maxY) {
                maxY = point.y;
            }
        }

        return new AABB2(minX, minY, maxX, maxY);
    }

    public left: number;
    public top: number;
    public right: number;
    public bottom: number;
    public constructor(
        left = 0,
        top = 0,
        right = 0,
        bottom = 0,
    ) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }

    public rayCast(result: RaycastResult, ray: RayCast2D, maxFraction = Infinity): boolean {
        // From Real-time Collision Detection, p179.

        let tmin = -Infinity;
        let tmax = Infinity;

        const p = ray.from;
        const d = ray.direction;
        const absD = Vector2.getAbs(d);

        const normal = Vector2.ZERO;

        const { min, max } = this.getMinMax();

        for (let f: "x" | "y" | null = "x"; f !== null; f = f === "x" ? "y" : null) {
            if (absD.x < Number.EPSILON) {
                // Parallel.
                if (p[f] < min[f] || max[f] < p[f]) {
                    return false;
                }
            } else {
                const invD = 1 / d[f];
                let t1 = (min[f] - p[f]) * invD;
                let t2 = (max[f] - p[f]) * invD;

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
        this.left -= distance;
        this.top -= distance;
        this.right += distance;
        this.bottom += distance;
    }

    public expandByVector(vec: ReadonlySimpleVector2): void {
        this.left -= vec.x;
        this.top -= vec.y;
        this.right += vec.x;
        this.bottom += vec.y;
    }

    public scale(scaleX: number, scaleY: number): this {
        this.left *= scaleX;
        this.top *= scaleY;
        this.right *= scaleX;
        this.bottom *= scaleY;

        return this;
    }

    public getScaled(scaleX: number, scaleY: number): AABB2 {
        return new AABB2(this.left * scaleX, this.top * scaleY, this.right * scaleX, this.bottom * scaleY);
    }

    public rotate(angle: number, anchor: ReadonlySimpleVector2 = SimpleVector.ZERO_2): this {
        const points = this.getPoints().map((p) => Vector2.rotate(angle, p, anchor));

        const range = Vector2.createOutlineMinMax(points);
        this.left = range.min.x;
        this.top = range.min.y;
        this.right = range.max.x;
        this.bottom = range.max.y;

        return this;
    }

    public getRotated(angle: number, anchor: ReadonlySimpleVector2 = SimpleVector.ZERO_2): AABB2 {
        const points = this.getPoints().map((p) => Vector2.rotate(angle, p, anchor));

        return AABB2.fromPoints(points);
    }

    public translateVec(pos: ReadonlySimpleVector2): this {
        return this.translate(pos.x, pos.y);
    }

    public translate(posX: number, posY: number): this {
        this.left += posX;
        this.top += posY;
        this.right += posX;
        this.bottom += posY;

        return this;
    }

    public getPoints(): ReadonlySimpleVector2[] {
        return [
            { x: this.left, y: this.top },
            { x: this.right, y: this.top },
            { x: this.right, y: this.bottom },
            { x: this.left, y: this.bottom },
        ];
    }

    public getTranslated(posX: number, posY: number): AABB2 {
        return new AABB2(this.left + posX, this.top + posY, this.right + posX, this.bottom + posY);
    }

    public combine(other: AABB2): AABB2 {
        return new AABB2(
            Math.min(this.left, other.left),
            Math.min(this.top, other.top),
            Math.max(this.right, other.right),
            Math.max(this.bottom, other.bottom),
        );
    }

    public expandByPoint(point: ReadonlySimpleVector2): void {
        this.left = Math.min(this.left, point.x);
        this.top = Math.min(this.top, point.y);

        this.right = Math.max(this.right, point.x);
        this.bottom = Math.max(this.bottom, point.y);
    }

    public expandByAABB(other: AABB2): void {
        this.left = Math.min(this.left, other.left);
        this.top = Math.min(this.top, other.top);

        this.right = Math.max(this.right, other.right);
        this.bottom = Math.max(this.bottom, other.bottom);
    }

    public moveByScalar(distance: number): void {
        this.left += distance;
        this.top += distance;
        this.right += distance;
        this.bottom += distance;
    }

    public getCenter(): ReadonlySimpleVector2 {
        return {
            x: (this.right + this.left) / 2,
            y: (this.bottom + this.top) / 2,
        };
    }

    public get width(): number {
        return this.right - this.left;
    }

    public get height(): number {
        return this.bottom - this.top;
    }

    public getSize(): ReadonlySimpleVector2 {
        return {
            x: this.width,
            y: this.height,
        };
    }

    public getVolume(): number {
        const size = this.getSize();

        return size.x * size.y;
    }

    public moveByVector(vec: ReadonlySimpleVector2): void {
        this.left += vec.x;
        this.top += vec.y;
        this.right += vec.x;
        this.bottom += vec.y;
    }

    public getMinMax(): MinMax2D {
        return {
            min: {
                x: this.left,
                y: this.top,
            },
            max: {
                x: this.right,
                y: this.bottom,
            },
        };
    }

    public getPosition(): ReadonlySimpleVector2 {
        return {
            x: this.left,
            y: this.top,
        };
    }

    public moveCenterTo(center: ReadonlySimpleVector2): void {
        const offset = {
            x: center.x - (this.right + this.left) / 2,
            y: center.y - (this.bottom + this.top) / 2,
        };

        this.left += offset.x;
        this.top += offset.y;
        this.right += offset.x;
        this.bottom += offset.y;
    }
}
