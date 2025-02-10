// @ts-nocheck skipped becasue of dirty code
import { shuffleSeed } from "./noise-utils.ts";
import * as constants_1 from "./noise-constants.ts";

function contribution2D(multiplier: number, xsb: number, ysb: number) {
    return {
        dx: -xsb - multiplier * constants_1.SQUISH_2D,
        dy: -ysb - multiplier * constants_1.SQUISH_2D,
        xsb,
        ysb,
    };
}

const contributions = [];
for (let i = 0; i < constants_1.p2D.length; i += 4) {
    const baseSet = constants_1.base2D[constants_1.p2D[i]];
    let previous = null;
    let current = null;
    for (let k = 0; k < baseSet.length; k += 3) {
        current = contribution2D(baseSet[k], baseSet[k + 1], baseSet[k + 2]);
        if (previous === null) {
            contributions[i / 4] = current;
        } else {
            previous.next = current;
        }
        previous = current;
    }
    current.next = contribution2D(constants_1.p2D[i + 1], constants_1.p2D[i + 2], constants_1.p2D[i + 3]);
}
const lookup = [];
for (let i = 0; i < constants_1.lookupPairs2D.length; i += 2) {
    lookup[constants_1.lookupPairs2D[i]] = contributions[constants_1.lookupPairs2D[i + 1]];
}
export function makeNoise2D(clientSeed: number): (x: number, y: number) => number {
    const perm = new Uint8Array(256);
    const perm2D = new Uint8Array(256);
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
        perm2D[i] = perm[i] & 0x0e;
        source[r[0]] = source[i];
    }

    return function (x, y) {
        const stretchOffset = (x + y) * constants_1.STRETCH_2D;
        const xs = x + stretchOffset;
        const ys = y + stretchOffset;
        const xsb = Math.floor(xs);
        const ysb = Math.floor(ys);
        const squishOffset = (xsb + ysb) * constants_1.SQUISH_2D;
        const dx0 = x - (xsb + squishOffset);
        const dy0 = y - (ysb + squishOffset);
        const xins = xs - xsb;
        const yins = ys - ysb;
        const inSum = xins + yins;
        const hash = (xins - yins + 1) |
            (inSum << 1) |
            ((inSum + yins) << 2) |
            ((inSum + xins) << 4);
        let value = 0;
        for (let c = lookup[hash]; c !== undefined; c = c.next) {
            const dx = dx0 + c.dx;
            const dy = dy0 + c.dy;
            const attn = 2 - dx * dx - dy * dy;
            if (attn > 0) {
                const px = xsb + c.xsb;
                const py = ysb + c.ysb;
                const indexPartA = perm[px & 0xff];
                const index = perm2D[(indexPartA + py) & 0xff];
                const valuePart = constants_1.gradients2D[index] * dx + constants_1.gradients2D[index + 1] * dy;
                value += attn * attn * attn * attn * valuePart;
            }
        }

        return value * constants_1.NORM_2D;
    };
}
