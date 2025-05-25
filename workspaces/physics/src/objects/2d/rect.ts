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
    public readonly position: ReadonlySimpleVector2;
    public readonly size: ReadonlySimpleVector2;
    /** Gets the area of the rectangle */
    public get area(): number {
        return this.size.x * this.size.y;
    }

    /** Gets the moment of inertia of the rectangle around its center of mass */
    public get momentOfInertia(): number {
        return (this.size.x * this.size.x + this.size.y * this.size.y) / 12;
    }

    /** Gets the radius of the smallest circle that completely contains the rectangle */
    public get boundingRadius(): number {
        return Math.sqrt(this.size.x * this.size.x + this.size.y * this.size.y) / 2;
    }

    /** Gets the perimeter length of the rectangle */
    public get circuit(): number {
        return this.size.x + this.size.x + this.size.y + this.size.y;
    }

    /** Gets the center point of the rectangle */
    public get center(): ReadonlySimpleVector2 {
        return {
            x: this.position.x + this.size.x / 2,
            y: this.position.y + this.size.y / 2,
        };
    }

    /**
     * Creates a rectangle that bounds the given circle
     * @param params Circle parameters containing radius and center
     * @returns A new rectangle instance
     */
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

    /**
     * Creates a rectangle that bounds the given ray segment
     * @param params Ray parameters containing origin, direction and length
     * @param realLength Optional length override for the ray
     * @returns A new rectangle instance
     * @throws Error when the ray length is infinite
     */
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

    /**
     * Creates a rectangle that bounds the given points
     * @param points Array of 2D points
     * @param offsetX Optional horizontal padding
     * @param offsetY Optional vertical padding, defaults to offsetX
     * @returns A new rectangle instance
     */
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

    /**
     * Creates a rectangle from minimum and maximum coordinates
     * @param params Object containing min and max coordinates
     * @returns A new rectangle instance
     */
    public static fromMinMax({ min, max }: MinMax2D): Rect {
        const size = {
            x: max.x - min.x,
            y: max.y - min.y,
        };

        return new Rect({ ...min }, size);
    }
    /**
     * Creates a new rectangle instance
     * @param position The position of the rectangle's top-left corner
     * @param size The width and height of the rectangle
     */
    public constructor(
        position: ReadonlySimpleVector2,
        size: ReadonlySimpleVector2,
    ) {
        this.position = position;
        this.size = size;
    }

    /**
     * Converts the rectangle to its minimum and maximum coordinates
     * @returns An object containing min and max coordinates
     */
    public toMinMax(): MinMax2D {
        return convertPosSizeToMinMax2D(this);
    }
}
