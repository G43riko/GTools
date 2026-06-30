import type { ReadonlyTrinity } from "@g43/types";
import { hex2rgb, lerpColor, rgb2hex } from "./color-utils.ts";

const HEX_COLOR = /^#?[a-fA-F0-9]{6}$/;

// ---------------------------------------------------------------------------
// lerpColor — optimised variant
// ---------------------------------------------------------------------------

/**
 * Optimised `lerpColor`.
 *
 * Problems with the original:
 *   1. Calls `clamp(x, 0, 255)` four times.  Each call is
 *      `Math.max(0, Math.min(x, 255))` — two variadic math calls per channel.
 *   2. `(1 - progress)` is recomputed for every channel.
 *
 * Fixes:
 *   - Pre-compute `inv = 1 - progress` once.
 *   - Inline clamp as a ternary: `x < 0 ? 0 : x > 255 ? 255 : x`.
 *     This is 2 comparisons instead of 2 function calls + 2 Math calls.
 */
function lerpColorFast(
    fromColor: readonly [number, number, number, number],
    toColor: readonly [number, number, number, number],
    progress: number,
): [number, number, number, number] {
    const inv = 1 - progress;
    const r = progress * fromColor[0] + inv * toColor[0];
    const g = progress * fromColor[1] + inv * toColor[1];
    const b = progress * fromColor[2] + inv * toColor[2];
    const a = progress * fromColor[3] + inv * toColor[3];

    return [
        r < 0 ? 0 : r > 255 ? 255 : r,
        g < 0 ? 0 : g > 255 ? 255 : g,
        b < 0 ? 0 : b > 255 ? 255 : b,
        a < 0 ? 0 : a > 255 ? 255 : a,
    ];
}

function hex2rgbOld(color: string, validate?: boolean): ReadonlyTrinity<number> | null {
    if (validate && !HEX_COLOR.test(color)) {
        return null;
    }

    const num = color.startsWith("#") ? parseInt(color.slice(1), 16) : parseInt(color, 16);

    return [num >> 16, num >> 8 & 0x00FF, num & 0x0000FF];
}

function rgb2hexOld(R: number, G: number, B: number, validate?: boolean): `#${string}` | null {
    if (
        validate &&
        (R < 0 || G < 0 || B < 0 || R > 255 || G > 255 || B > 255 || R % 1 !== 0 || G % 1 !== 0 || B % 1 !== 0)
    ) {
        return null;
    }
    const hex = 0x1000000 +
        (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255);

    return `#${hex.toString(16).toUpperCase().slice(1)}`;
}

Deno.bench("hex2rgb new ", { group: "color-utils.hex2rgb" }, () => {
    hex2rgb("#aabbcc");
});
Deno.bench("hex2rgb old ", { group: "color-utils.hex2rgb" }, () => {
    hex2rgbOld("#aabbcc");
});

Deno.bench("rgb2hex new ", { group: "color-utils.rgb2hex" }, () => {
    rgb2hex(1, 2, 3);
});
Deno.bench("rgb2hex old ", { group: "color-utils.rgb2hex" }, () => {
    rgb2hexOld(1, 2, 3);
});

// ---------------------------------------------------------------------------
// lerpColor benchmarks
// ---------------------------------------------------------------------------

const colorSamples: Array<[
    readonly [number, number, number, number],
    readonly [number, number, number, number],
    number,
]> = [
    [[255, 0, 0, 255], [0, 0, 255, 255], 0.5],       // red → blue, 50%
    [[0, 0, 0, 0], [255, 255, 255, 255], 0.25],       // black → white, 25%
    [[100, 150, 200, 128], [50, 75, 100, 64], 0.75],  // typical
    [[255, 255, 255, 255], [0, 0, 0, 0], 0.0],        // edge: progress = 0
    [[255, 255, 255, 255], [0, 0, 0, 0], 1.0],        // edge: progress = 1
];

for (const [from, to, progress] of colorSamples) {
    const label = `lerpColor(progress=${progress})`;
    Deno.bench(`lerpColor     ${label}`, { group: label }, () => {
        lerpColor(from, to, progress);
    });
    Deno.bench(`lerpColorFast ${label}`, { group: label, baseline: true }, () => {
        lerpColorFast(from, to, progress);
    });
}
