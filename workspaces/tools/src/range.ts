import type {
    ReadonlySimpleVector2,
    ReadonlySimpleVector3,
    ReadonlySimpleVector4,
    SimpleVector2,
    SimpleVector3,
    SimpleVector4,
} from "@g43/types";
import { randomFloatBetween, randomIntBetween } from "@g43/utils";
import { Color } from "./color.ts";
import type { RandomNumberDefinition } from "./random.ts";

export class Range<T> {
    public readonly min: T;
    public readonly max: T;

    public constructor(min: T, max?: T) {
        this.min = min;
        this.max = max ?? min;
    }

    public static parse<T extends number>(
        param: RandomNumberDefinition<T>,
    ): Range<T> {
        if (typeof param === "number") {
            return new Range(param);
        }

        if (typeof param === "object" && "min" in param && "max" in param) {
            return new Range(param.min, param.max);
        }
        if (Array.isArray(param)) {
            return new Range(param[0], param[1]);
        }

        throw new Error(`Unsupported range value '${param}'`);
    }

    public static createFromRandomness(value: number, randomness: number): Range<number> {
        return new Range<number>(value - randomness, value + randomness);
    }

    public static randomFloat(range: Range<number>): number {
        return randomFloatBetween(range.min, range.max);
    }

    public static randomInt(range: Range<number>): number {
        return randomIntBetween(range.min, range.max);
    }

    public static randomVector2i(range: Range<ReadonlySimpleVector2>): SimpleVector2 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
        };
    }

    public static randomVector3i(range: Range<ReadonlySimpleVector3>): SimpleVector3 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
        };
    }

    public static randomVector4i(range: Range<ReadonlySimpleVector4>): SimpleVector4 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
            w: randomIntBetween(range.min.w, range.max.w),
        };
    }

    public static randomVector2f(range: Range<ReadonlySimpleVector2>): SimpleVector2 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
        };
    }

    public static randomVector3f(range: Range<ReadonlySimpleVector3>): SimpleVector3 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
        };
    }

    public static randomVector4f(range: Range<ReadonlySimpleVector4>): SimpleVector4 {
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

    public map<U>(fn: (v: T) => U): Range<U> {
        return new Range<U>(fn(this.min), fn(this.max));
    }
}
