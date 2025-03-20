import { Vector2 } from "@g43/math";
import type { MinMax2D, ReadonlySimpleVector2, SimpleVector2 } from "@g43/types";
import { convertPosSizeToMinMax2D } from "../object-2d-convertors.ts";
import type { Circle } from "./circle.ts";
import type { MassAble2D } from "./object-2d.ts";
import type { Ray2D } from "./ray-2d.ts";

/**
 * @see https://github.com/schteppe/p2.js/blob/master/src/shapes/Box.js
 */
export class Rect implements MassAble2D {
    public get area(): number {
        return this.size.x * this.size.y;
    }

    public get momentOfInertia(): number {
        return (this.size.x * this.size.x + this.size.y * this.size.y) / 12;
    }

    public get boundingRadius(): number {
        return Math.sqrt(this.size.x * this.size.x + this.size.y * this.size.y) / 2;
    }

    public get circuit(): number {
        return this.size.x + this.size.x + this.size.y + this.size.y;
    }

    public get center(): ReadonlySimpleVector2 {
        return {
            x: this.position.x + this.size.x / 2,
            y: this.position.y + this.size.y / 2,
        };
    }

    public static fromSphere({ radius, center }: Pick<Circle, "radius" | "center">): Rect {
        return Rect.fromMinMax({
            min: {
                x: center.x - radius,
                y: center.y - radius,
            },
            max: {
                x: center.x + radius,
                y: center.y + radius,
            },
        });
    }

    public static fromRay({
        origin,
        direction,
        length,
    }: Pick<Ray2D, "origin" | "direction" | "length">, realLength = length): Rect {
        if (realLength === Infinity) {
            throw new Error("Cannot create rectangle from infinite ray");
        }
        const end = {
            x: origin.x + direction.x * realLength,
            y: origin.y + direction.y * realLength,
        };

        return Rect.fromMinMax({
            min: {
                x: Math.min(end.x, origin.x),
                y: Math.min(end.y, origin.y),
            },
            max: {
                x: Math.max(end.x, origin.x),
                y: Math.max(end.y, origin.y),
            },
        });
    }

    public static fromPoints(points: SimpleVector2[], offsetX = 0, offsetY = offsetX): Rect {
        const range = Vector2.createOutlineMinMax(points);

        if (!offsetX && !offsetY) {
            return Rect.fromMinMax(range);
        }

        return Rect.fromMinMax({
            min: {
                x: range.min.x - offsetX,
                y: range.min.y - offsetY,
            },
            max: {
                x: range.max.x + offsetX,
                y: range.max.y + offsetY,
            },
        });
    }

    public static fromMinMax({ min, max }: MinMax2D): Rect {
        const size = {
            x: max.x - min.x,
            y: max.y - min.y,
        };

        return new Rect({ ...min }, size);
    }

    public constructor(
        public readonly position: ReadonlySimpleVector2,
        public readonly size: ReadonlySimpleVector2,
    ) {
    }
    public toMinMax(): MinMax2D {
        return convertPosSizeToMinMax2D(this);
    }
}
