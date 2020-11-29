import { SimpleVector2 } from "gtools/math";
import { randomFloatBetween, randomIntBetween } from "../utils";
import { Color } from "./color.model";

export class Range<T> {
    public constructor(public readonly min: T, public readonly max: T = min) {
    }

    public static random(range: Range<number>): number {
        return randomFloatBetween(range.min, range.max);
    }

    public static randomVector(range: Range<SimpleVector2>): SimpleVector2 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
        };
    }

    public static randomColorF(range: Range<Color>): Color {
        return new Color(
            randomFloatBetween(range.min.red, range.max.red),
            randomFloatBetween(range.min.green, range.max.green),
            randomFloatBetween(range.min.blue, range.max.blue),
            randomFloatBetween(range.min.alpha, range.max.alpha),
        );
    }

    public static randomColorI(range: Range<Color>): Color {
        return new Color(
            randomIntBetween(range.min.red, range.max.red),
            randomIntBetween(range.min.green, range.max.green),
            randomIntBetween(range.min.blue, range.max.blue),
            randomIntBetween(range.min.alpha, range.max.alpha),
        );
    }
}
