import * as Random from "./random-utils";

/*
 * @see https://github.com/mrdoob/three.js/blob/dev/src/math/MathUtils.js
 */

export function pad(num: number, size: number): string {
    const s = `00000000000000${num}`;

    return s.substr(s.length - size);
}

export function roundToDecimals(num: number, decimals = 2, type: "floor" | "ceil" | "round" = "round"): string {
    const divider = parseInt(1 + new Array(decimals + 1).join("0"), 10);

    return (Math[type](num * divider) / divider).toFixed(decimals);
}

export function hash2Numbers(x: number, y: number): number {
    const xFinal = x >= 0 ? x * 2 : -x * 2 - 1;
    const yFinal = y >= 0 ? y * 2 : -y * 2 - 1;

    return (xFinal + yFinal) * (xFinal + yFinal + 1) / 2 + yFinal;
}

export function hash3Numbers(x: number, y: number, z: number): number {
    const xFinal = x >= 0 ? x * 2 : -x * 2 - 1;
    const yFinal = y >= 0 ? y * 2 : -y * 2 - 1;
    const zFinal = z >= 0 ? z * 2 : -z * 2 - 1;

    const xyHash = (xFinal + yFinal) * (xFinal + yFinal + 1) / 2 + yFinal;

    return (xyHash + zFinal) * (xyHash + zFinal + 1) / 2 + zFinal;
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

export function binomialCoefficient(n: number, k: number): number {
    let r = 1;
    if (k > n) {
        return 0;
    }
    for (let d = 1; d <= k; d++) {
        r *= n;
        n--;
        r /= d;
    }

    return r;
}

export function lerp(a: number, b: number, val: number): number {
    return b * val + (1 - val) * a;
}

export function log2i(value: number): number {
    let r = 0;
    // tslint:disable-next-line
    while ((value >>= 1) > 0) {
        r++;
    }

    return r;
}

export function lamp(min: number, max: number, scale: number): number {
    return clamp((max - min) * scale + min, min, max);
}

/**
 * @deprecated use {@link randomIntBetween} instead;
 *
 * @param min - min value
 * @param max - max value
 */
export function randomInt(min: number, max: number): number {
    return Random.randomIntBetween(min, max);
}

/**
 * @deprecated use {@link randomFloatBetween} instead;
 *
 * @param min - min value
 * @param max - max value
 */
export function random(min: number, max: number): number {
    return Random.randomFloatBetween(min, max);
}

export function average(args: number[]): number {
    let sum = 0;
    for (const item of args) {
        sum += item;
    }

    return sum / args.length;
}

export function isPowerOf2(value: number): boolean {
    return (value & value - 1) === 0;
}

export function getDiff(num1: number, num2: number): number {
    return Math.abs(num1 - num2);
}

const ratio = 180 / Math.PI;

export function toDegrees(radians: number): number {
    return radians * ratio;
}
