import { SimpleVector2, SimpleVector3, SimpleVector4 } from "../math";
import { randomFloatBetween, randomIntBetween } from "../utils";
import { Color } from "./color.model";

export class Range<T> {
    public constructor(public readonly min: T, public readonly max: T = min) {
    }

    public static random(range: Range<number>): number {
        return randomFloatBetween(range.min, range.max);
    }

    public static randomF(range: Range<number>): number {
        return randomFloatBetween(range.min, range.max);
    }

    public static randomI(range: Range<number>): number {
        return randomIntBetween(range.min, range.max);
    }

    public static randomVector2i(range: Range<SimpleVector2>): SimpleVector2 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
        };
    }

    public static randomVector3i(range: Range<SimpleVector3>): SimpleVector3 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
        };
    }

    public static randomVector4i(range: Range<SimpleVector4>): SimpleVector4 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
            w: randomIntBetween(range.min.w, range.max.w),
        };
    }

    public static randomVector2f(range: Range<SimpleVector2>): SimpleVector2 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
        };
    }

    public static randomVector3f(range: Range<SimpleVector3>): SimpleVector3 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
        };
    }

    public static randomVector4f(range: Range<SimpleVector4>): SimpleVector4 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
            w: randomFloatBetween(range.min.w, range.max.w),
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
