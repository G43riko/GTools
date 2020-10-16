export function pad(num, size) {
    var s = "00000000000000" + num;
    return s.substr(s.length - size);
}
export function roundToDecimals(num, decimals, type) {
    if (decimals === void 0) { decimals = 2; }
    if (type === void 0) { type = "round"; }
    var divider = parseInt(1 + new Array(decimals + 1).join("0"), 10);
    return (Math[type](num * divider) / divider).toFixed(decimals);
}
export function hash2Numbers(x, y) {
    var xFinal = x >= 0 ? x * 2 : -x * 2 - 1;
    var yFinal = y >= 0 ? y * 2 : -y * 2 - 1;
    return ((xFinal + yFinal) * (xFinal + yFinal + 1) / 2) + yFinal;
}
export function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}
export function binomialCoefficient(n, k) {
    var r = 1;
    if (k > n) {
        return 0;
    }
    for (var d = 1; d <= k; d++) {
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
    var r = 0;
    // tslint:disable-next-line
    while ((value >>= 1) > 0) {
        r++;
    }
    return r;
}
export function lamp(min, max, scale) {
    return clamp((max - min) * scale + min, min, max);
}
export function randomInt(min, max) {
    return Math.floor(random(min, max));
}
export function random(min, max) {
    var diff = max - min;
    return min + Math.random() * diff;
}
export function average(args) {
    var sum = 0;
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var item = args_1[_i];
        sum += item;
    }
    return sum / args.length;
}
export function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}
export function getDiff(num1, num2) {
    return Math.abs(num1 - num2);
}
var ratio = 180 / Math.PI;
export function toDegrees(radians) {
    return radians * ratio;
}
