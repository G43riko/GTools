export declare function pad(num: number, size: number): string;
export declare function roundToDecimals(num: number, decimals?: number, type?: "floor" | "ceil" | "round"): string;
export declare function hash2Numbers(x: number, y: number): number;
export declare function clamp(value: number, min: number, max: number): number;
export declare function binomialCoefficient(n: number, k: number): number;
export declare function lerp(a: number, b: number, val: number): number;
export declare function log2i(value: number): number;
export declare function lamp(min: number, max: number, scale: number): number;
/**
 * @deprecated use {@link randomIntBetween} instead;
 *
 * @param min - min value
 * @param max - max value
 */
export declare function randomInt(min: number, max: number): number;
/**
 * @deprecated use {@link randomFloatBetween} instead;
 *
 * @param min - min value
 * @param max - max value
 */
export declare function random(min: number, max: number): number;
export declare function average(args: number[]): number;
export declare function isPowerOf2(value: number): boolean;
export declare function getDiff(num1: number, num2: number): number;
export declare function toDegrees(radians: number): number;
//# sourceMappingURL=math-utils.d.ts.map