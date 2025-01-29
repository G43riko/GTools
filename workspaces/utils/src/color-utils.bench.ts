/// <reference lib="deno.ns" />

import type { ReadonlyTrinity } from "@g43/types";
import { hex2rgb, rgb2hex } from "./color-utils.ts";

const HEX_COLOR = /^#?[a-fA-F0-9]{6}$/;

function hex2rgbOld(color: string, validate?: boolean): ReadonlyTrinity<number> | null {
    if (validate && !HEX_COLOR.test(color)) {
        return null;
    }

    const num = color[0] === "#" ? parseInt(color.slice(1), 16) : parseInt(color, 16);

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
