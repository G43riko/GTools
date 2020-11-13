import { SimpleVector2 } from "gtools/math";
import { Color } from "./color.model";

export class Range<T> {
    public constructor(public readonly min: T, public readonly max: T = min) {
    }

    public static random(range: Range<number>): number {
        return Math.random() * (range.max - range.min) + range.min;
    }

    public static randomVector(range: Range<SimpleVector2>): SimpleVector2 {
        return {
            x: Math.random() * (range.max.x - range.min.x) + range.min.x,
            y: Math.random() * (range.max.y - range.min.y) + range.min.y,
        };
    }

    public static randomColor(range: Range<Color>, method = "rgba"): Color {
        const min = range.min.rgba;
        const max = range.max.rgba;

        return new Color(
            Math.random() * (max[0] - min[0]) + min[0],
            Math.random() * (max[1] - min[1]) + min[1],
            Math.random() * (max[2] - min[2]) + min[2],
            Math.random() * (max[3] - min[3]) + min[3],
        );
    }
}
