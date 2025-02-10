// @ts-nocheck skipped becasue of dirty code
import { shuffleSeed } from "./noise-utils.ts";
import * as constants_1 from "./noise-constants.ts";

function contribution4D(multiplier: number, xsb: number, ysb: number, zsb: number, wsb: number) {
    return {
        dx: -xsb - multiplier * constants_1.SQUISH_4D,
        dy: -ysb - multiplier * constants_1.SQUISH_4D,
        dz: -zsb - multiplier * constants_1.SQUISH_4D,
        dw: -wsb - multiplier * constants_1.SQUISH_4D,
        xsb,
        ysb,
        zsb,
        wsb,
    };
}
const contributions = [];
for (let i = 0; i < constants_1.p4D.length; i += 16) {
    const baseSet = constants_1.base4D[constants_1.p4D[i]];
    let previous = null;
    let current = null;
    for (let k = 0; k < baseSet.length; k += 5) {
        current = contribution4D(baseSet[k], baseSet[k + 1], baseSet[k + 2], baseSet[k + 3], baseSet[k + 4]);
        if (previous === null) {
            contributions[i / 16] = current;
        } else {
            previous.next = current;
        }
        previous = current;
    }
    current.next = contribution4D(
        constants_1.p4D[i + 1],
        constants_1.p4D[i + 2],
        constants_1.p4D[i + 3],
        constants_1.p4D[i + 4],
        constants_1.p4D[i + 5],
    );
    current.next.next = contribution4D(
        constants_1.p4D[i + 6],
        constants_1.p4D[i + 7],
        constants_1.p4D[i + 8],
        constants_1.p4D[i + 9],
        constants_1.p4D[i + 10],
    );
    current.next.next.next = contribution4D(
        constants_1.p4D[i + 11],
        constants_1.p4D[i + 12],
        constants_1.p4D[i + 13],
        constants_1.p4D[i + 14],
        constants_1.p4D[i + 15],
    );
}
const lookup = [];
for (let i = 0; i < constants_1.lookupPairs4D.length; i += 2) {
    lookup[constants_1.lookupPairs4D[i]] = contributions[constants_1.lookupPairs4D[i + 1]];
}

export function makeNoise4D(clientSeed: number): (x: number, y: number, z: number, w: number) => number {
    const perm = new Uint8Array(256);
    const perm4D = new Uint8Array(256);
    const source = new Uint8Array(256);
    for (let i = 0; i < 256; i++) {
        source[i] = i;
    }
    let seed = new Uint32Array(1);
    seed[0] = clientSeed;
    seed = shuffleSeed(shuffleSeed(shuffleSeed(seed)));
    for (let i = 255; i >= 0; i--) {
        seed = shuffleSeed(seed);
        const r = new Uint32Array(1);
        r[0] = (seed[0] + 31) % (i + 1);
        if (r[0] < 0) {
            r[0] += i + 1;
        }
        perm[i] = source[r[0]];
        perm4D[i] = perm[i] & 0xfc;
        source[r[0]] = source[i];
    }

    return function (x, y, z, w) {
        const stretchOffset = (x + y + z + w) * constants_1.STRETCH_4D;
        const xs = x + stretchOffset;
        const ys = y + stretchOffset;
        const zs = z + stretchOffset;
        const ws = w + stretchOffset;
        const xsb = Math.floor(xs);
        const ysb = Math.floor(ys);
        const zsb = Math.floor(zs);
        const wsb = Math.floor(ws);
        const squishOffset = (xsb + ysb + zsb + wsb) * constants_1.SQUISH_4D;
        const dx0 = x - (xsb + squishOffset);
        const dy0 = y - (ysb + squishOffset);
        const dz0 = z - (zsb + squishOffset);
        const dw0 = w - (wsb + squishOffset);
        const xins = xs - xsb;
        const yins = ys - ysb;
        const zins = zs - zsb;
        const wins = ws - wsb;
        const inSum = xins + yins + zins + wins;
        const hash = (zins - wins + 1) |
            ((yins - zins + 1) << 1) |
            ((yins - wins + 1) << 2) |
            ((xins - yins + 1) << 3) |
            ((xins - zins + 1) << 4) |
            ((xins - wins + 1) << 5) |
            (inSum << 6) |
            ((inSum + wins) << 8) |
            ((inSum + zins) << 11) |
            ((inSum + yins) << 14) |
            ((inSum + xins) << 17);
        let value = 0;
        for (let c = lookup[hash]; c !== undefined; c = c.next) {
            const dx = dx0 + c.dx;
            const dy = dy0 + c.dy;
            const dz = dz0 + c.dz;
            const dw = dw0 + c.dw;
            const attn = 2 - dx * dx - dy * dy - dz * dz - dw * dw;
            if (attn > 0) {
                const px = xsb + c.xsb;
                const py = ysb + c.ysb;
                const pz = zsb + c.zsb;
                const pw = wsb + c.wsb;
                const indexPartA = perm[px & 0xff];
                const indexPartB = perm[(indexPartA + py) & 0xff];
                const indexPartC = perm[(indexPartB + pz) & 0xff];
                const index = perm4D[(indexPartC + pw) & 0xff];
                const valuePart = constants_1.gradients4D[index] * dx +
                    constants_1.gradients4D[index + 1] * dy +
                    constants_1.gradients4D[index + 2] * dz +
                    constants_1.gradients4D[index + 3] * dw;
                value += attn * attn * attn * attn * valuePart;
            }
        }

        return value * constants_1.NORM_4D;
    };
}

function shuffleSeed(seed: number): number {
    const newSeed = new Uint32Array(1);
    newSeed[0] = seed[0] * 1664525 + 1013904223;

    return newSeed;
}
