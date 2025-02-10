// @ts-nocheck skipped becasue of dirty code
import { shuffleSeed } from "./noise-utils.ts";
import * as constants_1 from "./noise-constants.ts";

function contribution3D(multiplier: number, xsb: number, ysb: number, zsb: number) {
    return {
        dx: -xsb - multiplier * constants_1.SQUISH_3D,
        dy: -ysb - multiplier * constants_1.SQUISH_3D,
        dz: -zsb - multiplier * constants_1.SQUISH_3D,
        xsb,
        ysb,
        zsb,
    };
}

const contributions = [];
for (let i = 0; i < constants_1.p3D.length; i += 9) {
    const baseSet = constants_1.base3D[constants_1.p3D[i]];
    let previous = null;
    let current = null;
    for (let k = 0; k < baseSet.length; k += 4) {
        current = contribution3D(baseSet[k], baseSet[k + 1], baseSet[k + 2], baseSet[k + 3]);
        if (previous === null) {
            contributions[i / 9] = current;
        } else {
            previous.next = current;
        }
        previous = current;
    }
    current.next = contribution3D(
        constants_1.p3D[i + 1],
        constants_1.p3D[i + 2],
        constants_1.p3D[i + 3],
        constants_1.p3D[i + 4],
    );
    current.next.next = contribution3D(
        constants_1.p3D[i + 5],
        constants_1.p3D[i + 6],
        constants_1.p3D[i + 7],
        constants_1.p3D[i + 8],
    );
}
const lookup = [];
for (let i = 0; i < constants_1.lookupPairs3D.length; i += 2) {
    lookup[constants_1.lookupPairs3D[i]] = contributions[constants_1.lookupPairs3D[i + 1]];
}

export function makeNoise3D(clientSeed: number): (x: number, y: number, z: number) => number {
    const perm = new Uint8Array(256);
    const perm3D = new Uint8Array(256);
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
        perm3D[i] = (perm[i] % 24) * 3;
        source[r[0]] = source[i];
    }

    return function (x, y, z) {
        const stretchOffset = (x + y + z) * constants_1.STRETCH_3D;
        const xs = x + stretchOffset;
        const ys = y + stretchOffset;
        const zs = z + stretchOffset;
        const xsb = Math.floor(xs);
        const ysb = Math.floor(ys);
        const zsb = Math.floor(zs);
        const squishOffset = (xsb + ysb + zsb) * constants_1.SQUISH_3D;
        const dx0 = x - (xsb + squishOffset);
        const dy0 = y - (ysb + squishOffset);
        const dz0 = z - (zsb + squishOffset);
        const xins = xs - xsb;
        const yins = ys - ysb;
        const zins = zs - zsb;
        const inSum = xins + yins + zins;
        const hash = (yins - zins + 1) |
            ((xins - yins + 1) << 1) |
            ((xins - zins + 1) << 2) |
            (inSum << 3) |
            ((inSum + zins) << 5) |
            ((inSum + yins) << 7) |
            ((inSum + xins) << 9);
        let value = 0;
        for (let c = lookup[hash]; c !== undefined; c = c.next) {
            const dx = dx0 + c.dx;
            const dy = dy0 + c.dy;
            const dz = dz0 + c.dz;
            const attn = 2 - dx * dx - dy * dy - dz * dz;
            if (attn > 0) {
                const px = xsb + c.xsb;
                const py = ysb + c.ysb;
                const pz = zsb + c.zsb;
                const indexPartA = perm[px & 0xff];
                const indexPartB = perm[(indexPartA + py) & 0xff];
                const index = perm3D[(indexPartB + pz) & 0xff];
                const valuePart = constants_1.gradients3D[index] * dx +
                    constants_1.gradients3D[index + 1] * dy +
                    constants_1.gradients3D[index + 2] * dz;
                value += attn * attn * attn * attn * valuePart;
            }
        }

        return value * constants_1.NORM_3D;
    };
}
