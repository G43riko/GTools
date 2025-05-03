/*
 * @see https://github.com/mrdoob/three.js/blob/dev/src/math/MathUtils.js
 * @module
 */

const RAD_TO_DEG_RATIO = 180 / Math.PI;

export function roundToDecimals(num: number, decimals = 2, type: "floor" | "ceil" | "round" = "round"): string {
    const multiplier = Math.pow(10, decimals);

    return (Math[type](num * multiplier) / multiplier).toFixed(decimals);
}

const finalizeNumberToHash = (num: number): number => num >= 0 ? num * 2 : -num * 2 - 1;

export function hash2Numbers(x: number, y: number): number {
    const xFinal = finalizeNumberToHash(x);
    const yFinal = finalizeNumberToHash(y);

    return (xFinal + yFinal) * (xFinal + yFinal + 1) / 2 + yFinal;
}

export function hash3Numbers(x: number, y: number, z: number): number {
    const xFinal = finalizeNumberToHash(x);
    const yFinal = finalizeNumberToHash(y);
    const zFinal = finalizeNumberToHash(z);

    const xyHash = (xFinal + yFinal) * (xFinal + yFinal + 1) / 2 + yFinal;

    return (xyHash + zFinal) * (xyHash + zFinal + 1) / 2 + zFinal;
}

/**
 * Constrains a value to be within a specified range.
 *
 * This function ensures that the value is not less than the minimum and not greater than the maximum.
 *
 * @param value - The value to constrain
 * @param min - The lower bound of the range
 * @param max - The upper bound of the range
 * @returns The constrained value
 *
 * @example
 * ```ts
 * clamp(15, 0, 10); // 10
 * clamp(-5, 0, 10); // 0
 * clamp(5, 0, 10);  // 5
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

export function binomialCoefficient(n: number, k: number): number {
    if (k > n) {
        return 0;
    }

    let result = 1;
    for (let d = 1; d <= k; d++) {
        result *= n;
        n--;
        result /= d;
    }

    return result;
}

/**
 * Linearly interpolates between two values.
 *
 * This function performs a linear interpolation between two numbers.
 * The t parameter determines the interpolation factor between the two values.
 *
 * @param a - The starting value
 * @param b - The ending value
 * @param t - The interpolation factor (typically between 0.0 and 1.0)
 * @returns The interpolated value
 *
 * @example
 * ```ts
 * lerp(0, 100, 0.5);  // 50
 * lerp(20, 80, 0.25); // 35
 * lerp(-10, 10, 0.5); // 0
 * ```
 */
export function lerp(a: number, b: number, t: number): number {
    return a * (1 - t) + b * t;
}

export function nextHighestPowerOfTwo(x: number): number {
    --x;
    for (let i = 1; i < 32; i <<= 1) {
        x |= x >> i;
    }

    return x + 1;
}

export function ensurePowerOfTwo(x: number): number {
    if (!isPowerOf2(x)) {
        return nextHighestPowerOfTwo(x);
    }

    return x;
}

export function log2i(value: number): number {
    return Math.floor(Math.log2(value));
}

export function average(args: number[]): number {
    let sum = 0;
    for (const item of args) {
        sum += item;
    }

    return sum / args.length;
}

export function nearestPowerOf2(n: number): number {
    return Math.pow(2, Math.round(Math.log2(n)));
}

export function isPowerOf2(value: number): boolean {
    return (value & value - 1) === 0;
}

export function toDegrees(radians: number): number {
    return radians * RAD_TO_DEG_RATIO;
}

export function toRadians(degrees: number): number {
    return degrees / RAD_TO_DEG_RATIO;
}

export function modPos(value: number, mod: number): number {
    const res = value % mod;

    return res < 0 ? res + mod : res;
}
