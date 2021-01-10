import { SimpleVector2, Vector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { convertPosSizeToMinMax } from "../object-convertors";
import { MassAble } from "./object-2d";
import { Ray } from "./ray";
import { Sphere } from "./sphere";

/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Box.js
 */
export class Rect implements MassAble {
    public constructor(
        public readonly position: SimpleVector2,
        public readonly size: SimpleVector2,
    ) {
    }

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

    public toMinMax(): MinMax {
        return convertPosSizeToMinMax(this);
    }

    public static fromSphere({radius, center}: Pick<Sphere, "radius" | "center">): Rect {
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

    public static fromRay({origin, direction, length}: Pick<Ray, "origin" | "direction" | "length">, realLength = length): Rect {
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
        const range = Vector2.createOutlineRange(points);

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

    public static fromMinMax({min, max}: MinMax): Rect {
        const size = {
            x: max.x - min.x,
            y: max.y - min.y,
        };

        return new Rect(Object.assign({}, min), size);
    }
}
