import { Vector3 } from "@g43/math";
import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import { CollisionTable3d } from "../../collision-table-3d.ts";
import { collision3dBoxBoxMinMax, collision3dPointBox, collision3dSphereBoxMinMax } from "../../collisions-3d.ts";
import { IntersectionTable3d } from "../../intersection-table-3d.ts";
import { convertPosSizeToMinMax3D } from "../object-3d-convertors.ts";
import type { Cylinder } from "./cylinder.ts";
import type { Line3D } from "./line-3d.ts";
import type { CollideAble3D, VolumeAble3D } from "./object-3d.ts";
import type { Sphere } from "./sphere.ts";

export class Box implements VolumeAble3D, CollideAble3D<"minMax" | "cylinder" | "point" | "sphere"> {
    public readonly collideWith = {
        cylinder: (cylinder: Cylinder): boolean => CollisionTable3d.cylinderBox(cylinder, this),
        point: (point: ReadonlySimpleVector3): boolean =>
            collision3dPointBox(
                point.x,
                point.y,
                point.z,
                this.position.x,
                this.position.y,
                this.position.z,
                this.size.x,
                this.size.y,
                this.size.z,
            ),
        sphere: (sphere: Sphere): boolean => {
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
        },
        minMax: (minMax: MinMax3D): boolean =>
            collision3dBoxBoxMinMax(
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
            ),
    };

    public readonly intersectionWith = {
        line: (line: Line3D): ReadonlySimpleVector3 | undefined =>
            IntersectionTable3d.minMaxLine(this.toMinMax(), line.pointA, line.pointB),
    };

    public constructor(
        public readonly position: ReadonlySimpleVector3,
        public readonly size: ReadonlySimpleVector3,
    ) {
    }

    public static fromMinMax(
        min: ReadonlySimpleVector3,
        max: ReadonlySimpleVector3,
        offset?: ReadonlySimpleVector3,
    ): Box {
        const size = {
            x: max.x - min.x,
            y: max.y - min.y,
            z: max.z - min.z,
        };

        if (offset) {
            size.x += offset.x * 2;
            size.y += offset.y * 2;
            size.z += offset.z * 2;

            const minWithOffset = {
                x: min.x - offset.x,
                y: min.y - offset.y,
                z: min.z - offset.z,
            };

            return new Box(minWithOffset, size);
        }

        return new Box(min, size);
    }

    public static fromPoints(points: ReadonlySimpleVector3[], offset?: ReadonlySimpleVector3): Box {
        const range = Vector3.createOutlineMinMax(points);

        return Box.fromMinMax(range.min, range.max, offset);
    }

    public static fromLine(
        start: ReadonlySimpleVector3,
        end: ReadonlySimpleVector3,
        offset?: ReadonlySimpleVector3,
    ): Box {
        return Box.fromMinMax(start, end, offset);
    }

    public getCenter(): ReadonlySimpleVector3 {
        return {
            x: this.position.x + this.size.x / 2,
            y: this.position.y + this.size.y / 2,
            z: this.position.z + this.size.z / 2,
        };
    }

    public equals(box: any): boolean {
        if (!box) {
            return false;
        }

        if (!(box instanceof Box)) {
            return false;
        }

        return Vector3.equals(box.position, this.position) && Vector3.equals(box.size, this.size);
    }

    public get volume(): number {
        return this.size.x * this.size.y * this.size.z;
    }

    public toMinMax(): MinMax3D {
        return convertPosSizeToMinMax3D(this);
    }
}
