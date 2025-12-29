import { SimpleVector } from "@g43/math";
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
            pos.x,
            pos.y,
            pos.x + size.x,
            pos.y + size.y,
        );
    }

    public static fromCenterAndSize(center: ReadonlySimpleVector2, size: ReadonlySimpleVector2): AABB2 {
        const halfSizeX = size.x / 2;
        const halfSizeY = size.y / 2;

        return new AABB2(
            center.x - halfSizeX,
            center.y - halfSizeY,
            center.x + halfSizeX,
            center.y + halfSizeY,
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

        let normalX = 0;
        let normalY = 0;

        // X axis
        if (Math.abs(d.x) < Number.EPSILON) {
            // Parallel.
            if (p.x < this.left || this.right < p.x) {
                return false;
            }
        } else {
            const invD = 1 / d.x;
            let t1 = (this.left - p.x) * invD;
            let t2 = (this.right - p.x) * invD;

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
                normalX = s;
                normalY = 0;
                tmin = t1;
            }

            // Pull the max down
            tmax = Math.min(tmax, t2);

            if (tmin > tmax) {
                return false;
            }
        }

        // Y axis
        if (Math.abs(d.y) < Number.EPSILON) {
            // Parallel.
            if (p.y < this.top || this.bottom < p.y) {
                return false;
            }
        } else {
            const invD = 1 / d.y;
            let t1 = (this.top - p.y) * invD;
            let t2 = (this.bottom - p.y) * invD;

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
                normalX = 0;
                normalY = s;
                tmin = t1;
            }

            // Pull the max down
            tmax = Math.min(tmax, t2);

            if (tmin > tmax) {
                return false;
            }
        }

        // Does the ray start inside the box?
        // Does the ray intersect beyond the max fraction?
        if (tmin < 0 || maxFraction < tmin) {
            return false;
        }

        result.fraction = tmin;
        result.normal.setData(normalX, normalY);

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
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const x1 = this.left - anchor.x;
        const y1 = this.top - anchor.y;
        const x2 = this.right - anchor.x;
        const y2 = this.bottom - anchor.y;

        const cornersX = [
            x1 * cos - y1 * sin + anchor.x,
            x2 * cos - y1 * sin + anchor.x,
            x2 * cos - y2 * sin + anchor.x,
            x1 * cos - y2 * sin + anchor.x,
        ];
        const cornersY = [
            x1 * sin + y1 * cos + anchor.y,
            x2 * sin + y1 * cos + anchor.y,
            x2 * sin + y2 * cos + anchor.y,
            x1 * sin + y2 * cos + anchor.y,
        ];

        this.left = Math.min(...cornersX);
        this.top = Math.min(...cornersY);
        this.right = Math.max(...cornersX);
        this.bottom = Math.max(...cornersY);

        return this;
    }

    public getRotated(angle: number, anchor: ReadonlySimpleVector2 = SimpleVector.ZERO_2): AABB2 {
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const x1 = this.left - anchor.x;
        const y1 = this.top - anchor.y;
        const x2 = this.right - anchor.x;
        const y2 = this.bottom - anchor.y;

        const cornersX = [
            x1 * cos - y1 * sin + anchor.x,
            x2 * cos - y1 * sin + anchor.x,
            x2 * cos - y2 * sin + anchor.x,
            x1 * cos - y2 * sin + anchor.x,
        ];
        const cornersY = [
            x1 * sin + y1 * cos + anchor.y,
            x2 * sin + y1 * cos + anchor.y,
            x2 * sin + y2 * cos + anchor.y,
            x1 * sin + y2 * cos + anchor.y,
        ];

        return new AABB2(
            Math.min(...cornersX),
            Math.min(...cornersY),
            Math.max(...cornersX),
            Math.max(...cornersY),
        );
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

    public getCenter(result?: SimpleVector2): ReadonlySimpleVector2 {
        if (result) {
            result.x = (this.right + this.left) / 2;
            result.y = (this.bottom + this.top) / 2;

            return result;
        }

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

    public getSize(result?: SimpleVector2): ReadonlySimpleVector2 {
        if (result) {
            result.x = this.right - this.left;
            result.y = this.bottom - this.top;

            return result;
        }

        return {
            x: this.right - this.left,
            y: this.bottom - this.top,
        };
    }

    public getVolume(): number {
        return (this.right - this.left) * (this.bottom - this.top);
    }

    public moveByVector(vec: ReadonlySimpleVector2): void {
        this.left += vec.x;
        this.top += vec.y;
        this.right += vec.x;
        this.bottom += vec.y;
    }

    public getMinMax(result?: MinMax2D): MinMax2D {
        if (result) {
            result.min.x = this.left;
            result.min.y = this.top;
            result.max.x = this.right;
            result.max.y = this.bottom;

            return result;
        }

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

    public getPosition(result?: SimpleVector2): ReadonlySimpleVector2 {
        if (result) {
            result.x = this.left;
            result.y = this.top;

            return result;
        }

        return {
            x: this.left,
            y: this.top,
        };
    }

    public moveCenterTo(center: ReadonlySimpleVector2): void {
        const offsetX = center.x - (this.right + this.left) / 2;
        const offsetY = center.y - (this.bottom + this.top) / 2;

        this.left += offsetX;
        this.top += offsetY;
        this.right += offsetX;
        this.bottom += offsetY;
    }
}
