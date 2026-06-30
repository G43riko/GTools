import { average, nearestPowerOf2 } from "./math-utils.ts";

// ---------------------------------------------------------------------------
// average — optimised variant
// ---------------------------------------------------------------------------

/**
 * Optimised `average`.
 *
 * Problem with the original:
 *   - Uses `for...of` which goes through the iterator protocol
 *     (allocating an iterator object and calling `.next()` each step).
 *     V8 can sometimes elide this, but an indexed `for` loop avoids the
 *     overhead entirely and expresses intent more directly.
 *
 * Fix: plain indexed loop + guard for empty input.
 */
function averageFast(args: number[]): number {
    const n = args.length;
    if (n === 0) return NaN;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += args[i];
    }
    return sum / n;
}

// Datasets
const small = Array.from({ length: 100 }, () => Math.random() * 1e6);
const medium = Array.from({ length: 10_000 }, () => Math.random() * 1e9);
const large = Array.from({ length: 500_000 }, () => Math.random() * 1e12);

for (const [label, arr] of [["small (100)", small], ["medium (10k)", medium], ["large (500k)", large]] as const) {
    Deno.bench(`average     ${label}`, { group: `math-utils.average (${label})` }, () => {
        average(arr as number[]);
    });
    Deno.bench(`averageFast ${label}`, { group: `math-utils.average (${label})`, baseline: true }, () => {
        averageFast(arr as number[]);
    });
}

function nearestPowerOf2Old(num: number): number {
    return 1 << 31 - Math.clz32(num);
}
Deno.bench("nearestPowerOf2 new ", { group: "math-utils.nearestPowerOf2" }, () => {
    nearestPowerOf2(123456789);
});
Deno.bench("nearestPowerOf2 old ", { group: "math-utils.nearestPowerOf2" }, () => {
    nearestPowerOf2Old(123456789);
});
