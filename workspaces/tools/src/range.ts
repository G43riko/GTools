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

/**
 * Represents a closed interval [min, max] for various value types.
 *
 * Provides helpers to parse common range definitions, generate random values
 * within the range (numbers, vectors, colors), and transform ranges via map().
 *
 * @example
 * const r = new Range(1, 3);
 * const v = Range.randomInt(r); // integer from 1..3
 */
export class Range<T> {
    public readonly min: T;
    public readonly max: T;

    /**
     * Creates a range with given minimum and optional maximum. If max is omitted, min==max.
     * @param min - Lower bound of the interval
     * @param max - Upper bound of the interval (defaults to min)
     */
    public constructor(min: T, max?: T) {
        this.min = min;
        this.max = max ?? min;
    }

    /**
     * Parses a flexible random number definition into a numeric range.
     *
     * Accepts:
     * - a single number → [value, value]
     * - a tuple [min, max]
     * - an object { min, max }
     *
     * @example
     * Range.parse(5)           // → Range(5, 5)
     * Range.parse([1, 3])      // → Range(1, 3)
     * Range.parse({min:1,max:3}) // → Range(1, 3)
     */
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

    /**
     * Creates a numeric range centered at value with ±randomness span.
     * @param value - Center value
     * @param randomness - Half-width of the range
     * @returns Range [value - randomness, value + randomness]
     */
    public static createFromRandomness(value: number, randomness: number): Range<number> {
        return new Range<number>(value - randomness, value + randomness);
    }

    /**
     * Returns a random floating-point number within the given numeric range.
     */
    public static randomFloat(range: Range<number>): number {
        return randomFloatBetween(range.min, range.max);
    }

    /**
     * Returns a random integer within the given numeric range.
     */
    public static randomInt(range: Range<number>): number {
        return randomIntBetween(range.min, range.max);
    }

    /**
     * Returns a random 2D integer vector where each component is within its corresponding range.
     */
    public static randomVector2i(range: Range<ReadonlySimpleVector2>): SimpleVector2 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
        };
    }

    /**
     * Returns a random 3D integer vector where each component is within its corresponding range.
     */
    public static randomVector3i(range: Range<ReadonlySimpleVector3>): SimpleVector3 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
        };
    }

    /**
     * Returns a random 4D integer vector where each component is within its corresponding range.
     */
    public static randomVector4i(range: Range<ReadonlySimpleVector4>): SimpleVector4 {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
            w: randomIntBetween(range.min.w, range.max.w),
        };
    }

    /**
     * Returns a random 2D float vector where each component is within its corresponding range.
     */
    public static randomVector2f(range: Range<ReadonlySimpleVector2>): SimpleVector2 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
        };
    }

    /**
     * Returns a random 3D float vector where each component is within its corresponding range.
     */
    public static randomVector3f(range: Range<ReadonlySimpleVector3>): SimpleVector3 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
        };
    }

    /**
     * Returns a random 4D float vector where each component is within its corresponding range.
     */
    public static randomVector4f(range: Range<ReadonlySimpleVector4>): SimpleVector4 {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
            w: randomFloatBetween(range.min.w, range.max.w),
        };
    }

    /**
     * Returns a random Color with floating components within the specified color range.
     * Each channel (r,g,b,a) is sampled independently between corresponding min/max values.
     */
    public static randomColorF(range: Range<Color>): Color {
        return new Color(
            randomFloatBetween(range.min.red, range.max.red),
            randomFloatBetween(range.min.green, range.max.green),
            randomFloatBetween(range.min.blue, range.max.blue),
            randomFloatBetween(range.min.alpha, range.max.alpha),
        );
    }

    /**
     * Returns a random Color with integer components within the specified color range.
     * Each channel (r,g,b,a) is sampled independently between corresponding min/max values,
     * using integer sampling.
     */
    public static randomColorI(range: Range<Color>): Color {
        return new Color(
            randomIntBetween(range.min.red, range.max.red),
            randomIntBetween(range.min.green, range.max.green),
            randomIntBetween(range.min.blue, range.max.blue),
            randomIntBetween(range.min.alpha, range.max.alpha),
        );
    }

    /**
     * Maps both endpoints of this range through a function and returns a new range.
     * Note: The mapping is applied to min and max independently; ensure fn preserves order if required.
     * @param fn - Transformation function applied to endpoints
     * @returns A new Range with transformed endpoints
     */
    public map<U>(fn: (v: T) => U): Range<U> {
        return new Range<U>(fn(this.min), fn(this.max));
    }
}
