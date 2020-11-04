import * as Maths from "../math-utils";

/**
 * @deprecated use {@link Maths} instead
 */
export class MathUtils {
    public static roundToDecimals(num: number, decimals = 2, type: "floor" | "ceil" | "round" = "round"): string {
        return Maths.roundToDecimals(num, decimals, type);
    }

    public static pad(num: number, size: number): string {
        return Maths.pad(num, size);
    }

    public static clamp(value: number, min: number, max: number): number {
        return Maths.clamp(value, min, max);
    }

    public static binomialCoefficient(n: number, k: number): number {
        return Maths.binomialCoefficient(n, k);
    }

    public static lerp(a: number, b: number, val: number): number {
        return Maths.lerp(a, b, val);
    }

    public static log2i(value: number): number {
        return Maths.log2i(value);
    }

    public static lamp(min: number, max: number, scale: number): number {
        return Maths.lamp(min, max, scale);
    }

    public static randomInt(min: number, max: number): number {
        return Maths.randomInt(min, max);
    }

    public static random(min: number, max: number): number {
        return Maths.random(min, max);
    }

    public static average(args: number[]): number {
        return Maths.average(args);
    }

    public static diff(num1: number, num2: number): number {
        return Maths.getDiff(num1, num2);
    }
}
