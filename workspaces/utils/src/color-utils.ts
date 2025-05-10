import type { ReadonlyTrinity } from "@g43/types";
import { clamp } from "./math-utils.ts";

/**
 * TODO: Implement https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/main/java/org/utils/units/ColorUtils.java
 */
const MAXIMAL_INT_COLOR_VALUE = 0xFFFFFF;
const HEX_COLOR = /^#?[a-fA-F0-9]{6}$/;

/**
 * Linearly interpolates between two RGBA colors.
 *
 * This function performs a linear interpolation between two colors represented as RGBA arrays.
 * The progress parameter determines the blend ratio between the colors.
 *
 * @param fromColor - The starting color as an RGBA array [r, g, b, a] (values 0-255)
 * @param toColor - The ending color as an RGBA array [r, g, b, a] (values 0-255)
 * @param progress - The interpolation factor (0.0 to 1.0)
 * @returns A new RGBA color array representing the interpolated color
 *
 * @example
 * ```ts
 * // Blend red and blue to create purple (50% blend)
 * const red = [255, 0, 0, 255];
 * const blue = [0, 0, 255, 255];
 * const purple = lerpColor(red, blue, 0.5); // [127, 0, 127, 255]
 * ```
 */
export function lerpColor(
    fromColor: [number, number, number, number],
    toColor: [number, number, number, number],
    progress: number,
): [number, number, number, number] {
    const red = progress * fromColor[0] + (1 - progress) * toColor[0];
    const green = progress * fromColor[1] + (1 - progress) * toColor[1];
    const blue = progress * fromColor[2] + (1 - progress) * toColor[2];
    const alpha = progress * fromColor[3] + (1 - progress) * toColor[3];

    return [
        clamp(red, 0, 255),
        clamp(green, 0, 255),
        clamp(blue, 0, 255),
        clamp(alpha, 0, 255),
    ];
}

/**
 * Linearly interpolates between two hexadecimal color strings.
 *
 * This function performs a linear interpolation between two colors represented as hex strings.
 * The amount parameter determines the blend ratio between the colors.
 *
 * @param a - The starting color as a hex string (e.g., "#FF0000")
 * @param b - The ending color as a hex string (e.g., "#0000FF")
 * @param amount - The interpolation factor (0.0 to 1.0)
 * @returns A new hex color string representing the interpolated color
 *
 * @example
 * ```ts
 * // Blend red and blue to create purple (50% blend)
 * const purple = lerpHexColor("#FF0000", "#0000FF", 0.5); // "#7f007f"
 * ```
 */
export function lerpHexColor(a: string, b: string, amount: number): string {
    const ah = +a.replace("#", "0x");
    const ar = ah >> 16;
    const ag = ah >> 8 & 0xFF;
    const ab = ah & 0xFF;
    const bh = +b.replace("#", "0x");
    const br = bh >> 16;
    const bg = bh >> 8 & 0xFF;
    const bb = bh & 0xFF;
    const rr = ar + amount * (br - ar);
    const rg = ag + amount * (bg - ag);
    const rb = ab + amount * (bb - ab);

    return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1)}`;
}

export function hex2rgb(color: string, validate?: false): ReadonlyTrinity<number>;
export function hex2rgb(color: string, validate: true): ReadonlyTrinity<number> | null;
export function hex2rgb(color: string, validate?: boolean): ReadonlyTrinity<number> | null {
    if (validate && !HEX_COLOR.test(color)) {
        return null;
    }
    color = color.startsWith("#") ? color.slice(1) : color;
    const num = parseInt(color, 16);

    return [
        (num >> 16) & 0xFF, // Extract red component
        (num >> 8) & 0xFF, // Extract green component
        num & 0xFF, // Extract blue component
    ];
}

export function shadeHexColor(color: string, percent: number): string {
    const num = hex2rgb(color);
    const amt = Math.round(2.55 * percent);
    const R = num[0] + amt;
    const G = num[1] + amt;
    const B = num[2] + amt;

    return rgb2hex(R, G, B);
}

export function rgb2hex(R: number, G: number, B: number, validate?: false): `#${string}`;
export function rgb2hex(R: number, G: number, B: number, validate: true): `#${string}` | null;
export function rgb2hex(R: number, G: number, B: number, validate?: boolean): `#${string}` | null {
    if (
        validate &&
        (R < 0 || G < 0 || B < 0 || R > 255 || G > 255 || B > 255 || R % 1 !== 0 || G % 1 !== 0 || B % 1 !== 0)
    ) {
        return null;
    }
    return `#${
        (
            0x1000000 + Math.min(255, Math.max(0, R)) *
                0x10000 +
            Math.min(255, Math.max(0, G)) *
                0x100 +
            Math.min(255, Math.max(0, B))
        ).toString(16).slice(1).toUpperCase()
    }`;
}

export function rgba2hex(R: number, G: number, B: number, A: number, validate?: false): `#${string}`;
export function rgba2hex(R: number, G: number, B: number, A: number, validate: true): `#${string}` | null;
export function rgba2hex(R: number, G: number, B: number, A: number, validate?: boolean): `#${string}` | null {
    if (
        validate &&
        (R < 0 || G < 0 || B < 0 || A < 0 || R > 255 || G > 255 || B > 255 || A > 255 || R % 1 !== 0 || G % 1 !== 0 ||
            B % 1 !== 0 || A % 1 !== 0)
    ) {
        return null;
    }

    const hex = 0x100000000 +
        (R < 255 ? R < 1 ? 0 : R : 255) * 0x1000000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x10000 +
        (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 +
        (A < 255 ? A < 1 ? 0 : A : 255);

    return `#${hex.toString(16).toUpperCase().slice(1)}`;
}

export function rgbaArray2hex(
    rgba: readonly [r: number, g: number, b: number, a: number],
    validate?: false,
): `#${string}`;
export function rgbaArray2hex(
    rgba: readonly [r: number, g: number, b: number, a: number],
    validate: true,
): `#${string}` | null;
export function rgbaArray2hex(
    rgba: readonly [r: number, g: number, b: number, a: number],
    validate?: boolean,
): `#${string}` | null {
    return rgba2hex(...rgba, validate as true);
}

export function int2hex(val: number, validate?: false): string;
export function int2hex(val: number, validate: true): string | null;
export function int2hex(val: number, validate?: boolean): string | null {
    if (validate && (val < 0 || val > MAXIMAL_INT_COLOR_VALUE)) {
        return null;
    }
    const value = val.toString(16);
    const result = "000000".substr(0, 6 - value.length) + value;

    return `#${result.toUpperCase()}`;
}

export function int2rgb(val: number, validate?: false): ReadonlyTrinity<number>;
export function int2rgb(val: number, validate: true): ReadonlyTrinity<number> | null;
export function int2rgb(val: number, validate?: boolean): ReadonlyTrinity<number> | null {
    if (validate && (val < 0 || val > MAXIMAL_INT_COLOR_VALUE)) {
        return null;
    }

    return [
        val >> 16,
        val >> 8 & 0xFF,
        val & 0xFF,
    ];
}

export function hex2int(val: string, validate?: false): number;
export function hex2int(val: string, validate: true): number | null;
export function hex2int(val: string, validate?: boolean): number | null {
    if (validate && !HEX_COLOR.test(val)) {
        return null;
    }

    return val[0] === "#" ? parseInt(val.slice(1), 16) : parseInt(val, 16);
}

export function rgb2int(R: number, G: number, B: number, validate?: false): number;
export function rgb2int(R: number, G: number, B: number, validate: true): number | null;
export function rgb2int(R: number, G: number, B: number, validate?: boolean): number | null {
    if (
        validate &&
        (R < 0 || G < 0 || B < 0 || R > 255 || G > 255 || B > 255 || R % 1 !== 0 || G % 1 !== 0 || B % 1 !== 0)
    ) {
        return null;
    }

    return R << 16 | G << 8 & 0xFFFF | B;
}

export function rgb2hsl(r: number, g: number, b: number): ReadonlyTrinity<number> {
    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;

    const min = Math.min(red, Math.min(green, blue));
    const max = Math.max(red, Math.max(green, blue));
    const delta = max - min;

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (delta !== 0) {
        if (l < 0.5) {
            s = delta / (max + min);
        } else {
            s = delta / (2 - max - min);
        }

        const deltaR = (((max - red) / 6) + (delta / 2)) / delta;
        const deltaG = (((max - green) / 6) + (delta / 2)) / delta;
        const deltaB = (((max - blue) / 6) + (delta / 2)) / delta;

        if (red === max) {
            h = deltaB - deltaG;
        } else if (green === max) {
            h = (1 / 3) + deltaR - deltaB;
        } else if (blue === max) {
            h = (2 / 3) + deltaG - deltaR;
        }
        if (h < 0) {
            h += 1;
        }
        if (h > 1) {
            h -= 1;
        }
    }

    return [Math.round(360 * h), Math.round(s * 100), Math.round(l * 100)];
}

export function getAverageColorFromArrayData(
    data: number[] | Uint8ClampedArray | Uint8Array,
    colors = 4,
): [red: number, green: number, blue: number, alpha: number] {
    const resolution = data.length / colors;
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 0;
    for (let i = 0; i < data.length;) {
        r += data[i++] || 0;
        g += data[i++] || 0;
        b += data[i++] || 0;
        a += data[i++] || 0;
    }

    return [
        r / resolution,
        g / resolution,
        b / resolution,
        a / resolution,
    ];
}

export function hsl2rgb(h: number, s: number, l: number): ReadonlyTrinity<number> {
    const hue = h / 360;
    const saturation = s / 100;
    const lightness = l / 100;
    let r;
    let g;
    let b;
    let tmp1;
    let tmp2;

    if (saturation === 0) {
        r = lightness * 255;
        g = lightness * 255;
        b = lightness * 255;
    } else {
        if (lightness < 0.5) {
            tmp2 = lightness * (1 + saturation);
        } else {
            tmp2 = (lightness + saturation) - (saturation * lightness);
        }

        tmp1 = 2 * lightness - tmp2;

        r = 255 * hue2rgb(tmp1, tmp2, hue + (1 / 3));
        g = 255 * hue2rgb(tmp1, tmp2, hue);
        b = 255 * hue2rgb(tmp1, tmp2, hue - (1 / 3));
    }

    return [Math.round(r), Math.round(g), Math.round(b)];
}

export function hue2rgb(v1: number, v2: number, vH: number): number {
    if (vH < 0) {
        vH += 1;
    }
    if (vH > 1) {
        vH -= 1;
    }
    if ((6 * vH) < 1) {
        return (v1 + (v2 - v1) * 6 * vH);
    }
    if ((2 * vH) < 1) {
        return v2;
    }
    if ((3 * vH) < 2) {
        return (v1 + (v2 - v1) * (2 / 3 - vH) * 6);
    }

    return v1;
}
