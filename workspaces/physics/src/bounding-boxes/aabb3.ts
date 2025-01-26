import type { MinMax3D, ReadonlySimpleVector3, SimpleVector3 } from "@g43/types";
import type { AABB } from "./aabb.ts";

/**
 * @see AABBShadowedBbox
 */
// eslint-disable-next-line no-use-before-define
export class AABB3 implements AABB<AABB3, SimpleVector3, MinMax3D> {
    public static fromPosAndSize(pos: ReadonlySimpleVector3, size: ReadonlySimpleVector3): AABB3 {
        return new AABB3(
            {
                x: pos.x,
                y: pos.y,
                z: pos.z,
            },
            {
                x: pos.x + size.x,
                y: pos.y + size.y,
                z: pos.z + size.z,
            },
        );
    }

    public static fromCenterAndSize(center: ReadonlySimpleVector3, size: ReadonlySimpleVector3): AABB3 {
        const halfSize = {
            x: size.x / 2,
            y: size.y / 2,
            z: size.z / 2,
        };

        return new AABB3(
            {
                x: center.x + halfSize.x,
                y: center.y + halfSize.y,
                z: center.z + halfSize.z,
            },
            {
                x: center.x - halfSize.x,
                y: center.y - halfSize.y,
                z: center.z - halfSize.z,
            },
        );
    }

    public static fromPoints(points: ReadonlySimpleVector3[]): AABB3 {
        let minX = Infinity;
        let minY = Infinity;
        let minZ = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        let maxZ = -Infinity;
        for (let i = 0; i < points.length; i++) {
            if (points[i].x < minX) {
                minX = points[i].x;
            }
            if (points[i].x > maxX) {
                maxX = points[i].x;
            }
            if (points[i].y < minY) {
                minY = points[i].y;
            }
            if (points[i].y > maxY) {
                maxY = points[i].y;
            }
            if (points[i].z < minZ) {
                minZ = points[i].z;
            }
            if (points[i].z > maxZ) {
                maxZ = points[i].z;
            }
        }

        return new AABB3(
            {
                x: minX,
                y: minY,
                z: minZ,
            },
            {
                x: maxX,
                y: maxY,
                z: maxZ,
            },
        );
    }

    public constructor(protected readonly min: SimpleVector3, protected readonly max: SimpleVector3) {
    }

    public expandByScalar(distance: number): void {
        this.min.x -= distance;
        this.min.y -= distance;
        this.min.z -= distance;
        this.max.x += distance;
        this.max.y += distance;
        this.max.z += distance;
    }

    public expandByVector(vec: ReadonlySimpleVector3): void {
        this.min.x -= vec.x;
        this.min.y -= vec.y;
        this.min.z -= vec.z;
        this.max.x += vec.x;
        this.max.y += vec.y;
        this.max.z += vec.z;
    }

    public expandByPoint(point: ReadonlySimpleVector3): void {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.min.z = Math.min(this.min.z, point.z);

        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        this.max.z = Math.max(this.max.z, point.z);
    }

    public expandByAABB(other: AABB3): void {
        this.min.x = Math.min(this.min.x, other.min.x);
        this.min.y = Math.min(this.min.y, other.min.y);
        this.min.z = Math.min(this.min.z, other.min.z);

        this.max.x = Math.max(this.max.x, other.max.x);
        this.max.y = Math.max(this.max.y, other.max.y);
        this.max.z = Math.max(this.max.z, other.max.z);
    }

    public moveByScalar(distance: number): void {
        this.min.x += distance;
        this.min.y += distance;
        this.min.z += distance;
        this.max.x += distance;
        this.max.y += distance;
        this.max.z += distance;
    }

    public getCenter(): ReadonlySimpleVector3 {
        return {
            x: (this.max.x + this.min.x) / 2,
            y: (this.max.y + this.min.y) / 2,
            z: (this.max.z + this.min.z) / 2,
        };
    }

    public get width(): number {
        return this.max.x - this.min.x;
    }

    public get height(): number {
        return this.max.y - this.min.y;
    }

    public get depth(): number {
        return this.max.z - this.min.z;
    }

    public getSize(): ReadonlySimpleVector3 {
        return {
            x: this.width,
            y: this.height,
            z: this.depth,
        };
    }

    public combine(other: AABB3): AABB3 {
        return new AABB3(
            {
                x: Math.min(this.min.x, other.min.x),
                y: Math.min(this.min.y, other.min.y),
                z: Math.min(this.min.z, other.min.z),
            },
            {
                x: Math.max(this.max.x, other.max.x),
                y: Math.max(this.max.y, other.max.y),
                z: Math.max(this.max.z, other.max.z),
            },
        );
    }

    public getVolume(): number {
        const size = this.getSize();

        return size.x * size.y * size.z;
    }

    public moveByVector(vec: ReadonlySimpleVector3): void {
        this.min.x += vec.x;
        this.min.y += vec.y;
        this.min.z += vec.z;
        this.max.x += vec.x;
        this.max.y += vec.y;
        this.max.z += vec.z;
    }

    public getMinMax(): MinMax3D {
        return {
            min: this.min,
            max: this.max,
        };
    }

    public getPosition(): ReadonlySimpleVector3 {
        return {
            x: this.min.x,
            y: this.min.y,
            z: this.min.z,
        };
    }

    public moveCenterTo(center: ReadonlySimpleVector3): void {
        const offset = {
            x: center.x - (this.max.x + this.min.x) / 2,
            y: center.y - (this.max.y + this.min.y) / 2,
            z: center.z - (this.max.z + this.min.z) / 2,
        };

        this.min.x += offset.x;
        this.min.y += offset.y;
        this.min.z += offset.z;
        this.max.x += offset.x;
        this.max.y += offset.y;
        this.max.z += offset.z;
    }
}
