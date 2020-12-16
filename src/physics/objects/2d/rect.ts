import { SimpleVector2, Vector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { convertPosSizeToMinMax } from "../object-convertors";
import { Sphere } from "./sphere";

export class Rect {
    public constructor(
        public readonly position: SimpleVector2,
        public readonly size: SimpleVector2,
    ) {
    }

    public get area(): number {
        return this.size.x * this.size.y;
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
