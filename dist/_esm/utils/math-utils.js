import * as Random from "./random-utils";
export function pad(num, size) {
    const s = "00000000000000" + num;
    return s.substr(s.length - size);
}
export function roundToDecimals(num, decimals = 2, type = "round") {
    const divider = parseInt(1 + new Array(decimals + 1).join("0"), 10);
    return (Math[type](num * divider) / divider).toFixed(decimals);
}
export function hash2Numbers(x, y) {
    const xFinal = x >= 0 ? x * 2 : -x * 2 - 1;
    const yFinal = y >= 0 ? y * 2 : -y * 2 - 1;
    return (xFinal + yFinal) * (xFinal + yFinal + 1) / 2 + yFinal;
}
export function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}
export function binomialCoefficient(n, k) {
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
export function lerp(a, b, val) {
    return b * val + (1 - val) * a;
}
export function log2i(value) {
    let r = 0;
    while ((value >>= 1) > 0) {
        r++;
    }
    return r;
}
export function lamp(min, max, scale) {
    return clamp((max - min) * scale + min, min, max);
}
export function randomInt(min, max) {
    return Random.randomIntBetween(min, max);
}
export function random(min, max) {
    return Random.randomFloatBetween(min, max);
}
export function average(args) {
    let sum = 0;
    for (const item of args) {
        sum += item;
    }
    return sum / args.length;
}
export function isPowerOf2(value) {
    return (value & value - 1) === 0;
}
export function getDiff(num1, num2) {
    return Math.abs(num1 - num2);
}
const ratio = 180 / Math.PI;
export function toDegrees(radians) {
    return radians * ratio;
}
//# sourceMappingURL=math-utils.js.map