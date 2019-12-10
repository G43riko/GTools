export declare class MathUtils {
    static roundToDecimals(num: number, decimals?: number, type?: "floor" | "ceil" | "round"): string;

    static pad(num: number, size: number): string;

    static clamp(value: number, min: number, max: number): number;

    static binomialCoefficient(n: number, k: number): number;

    static lerp(a: number, b: number, val: number): number;

    static log2i(value: number): number;

    static lamp(min: number, max: number, scale: number): number;

    static randomInt(min: number, max: number): number;

    static random(min: number, max: number): number;

    static average(args: number[]): number;

    static diff(num1: number, num2: number): number;
}
