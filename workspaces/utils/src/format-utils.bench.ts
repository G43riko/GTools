import { formatBytes, formatElapsed, formatElapsedNew } from "./format-utils.ts";

// ---------------------------------------------------------------------------
// formatElapsed — optimised variant
// ---------------------------------------------------------------------------

/**
 * Optimised `formatElapsed`.
 *
 * Problems with the original:
 *   1. Allocates a `string[]`, calls `push` up to 4 times, then `join(" ")`.
 *      Each push may trigger an array reallocation; join always allocates a
 *      new string by concatenating all parts.
 *   2. The conditional `if (hours || parts.length)` etc. reads `.length`
 *      on every check.
 *
 * Fix: Each possible output shape is a single template-literal expression —
 * no array, no join, no push, no `.length` reads.
 */
function formatElapsedFast(ms: number): string {
    if (ms < 1000) {
        return ms < 1 ? `${ms.toFixed(2)} ms` : ms < 10 ? `${ms.toFixed(1)} ms` : `${Math.round(ms)} ms`;
    }

    const sec = Math.floor(ms / 1000);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    // One template literal per output shape; no intermediate array.
    if (days) return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (hours) return `${hours}h ${minutes}m ${seconds}s`;
    if (minutes) return `${minutes}m ${seconds}s`;
    return `${seconds}s`;
}

// ---------------------------------------------------------------------------
// formatBytes — optimised variant
// ---------------------------------------------------------------------------

const FILE_SIZE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

/**
 * Optimised `formatBytes`.
 *
 * Problem with the original:
 *   - Computes `Math.log(k)` inside the function on every call where `k = 1024`
 *     is a local constant — the JIT *may* hoist it, but it is not guaranteed
 *     across all invocations. `Math.log` is a non-trivial transcendental call.
 *
 * Fix: hoist `LOG_1024 = Math.log(1024)` to module level so it is computed
 * exactly once, making the hot division a simple register-to-register op.
 */
const LOG_1024 = Math.log(1024);

function formatBytesFast(bytes: number, decimals = 2): string {
    if (bytes === 0) return "0 B";
    const i = Math.floor(Math.log(bytes) / LOG_1024);
    const size = bytes / Math.pow(1024, i);
    return `${parseFloat(size.toFixed(decimals))} ${FILE_SIZE_UNITS[i]}`;
}

// ---------------------------------------------------------------------------
// Benchmark data
// ---------------------------------------------------------------------------

const elapsedSamples = [
    0.42,         // sub-ms
    7.3,          // single-digit ms
    850,          // whole ms
    1_234,        // ~1 s
    90_000,       // 1m 30s
    3_661_000,    // 1h 1m 1s
    90_061_000,   // 1d + hours + minutes + seconds
];

const bytesSamples = [
    0,
    500,
    1_024,
    1_234_567,
    9_876_543_210,
    Number.MAX_SAFE_INTEGER,
];

for (const ms of elapsedSamples) {
    const label = `formatElapsed(${ms})`;
    Deno.bench(`formatElapsed     ${label}`, { group: label }, () => {
        formatElapsed(ms);
    });
    Deno.bench(`formatElapsedFast ${label}`, { group: label, baseline: true }, () => {
        formatElapsedFast(ms);
    });
    Deno.bench(`formatElapsedNew ${label}`, { group: label, baseline: true }, () => {
        formatElapsedNew(ms);
    });
}

for (const bytes of bytesSamples) {
    const label = `formatBytes(${bytes})`;
    Deno.bench(`formatBytes     ${label}`, { group: label }, () => {
        formatBytes(bytes);
    });
    Deno.bench(`formatBytesFast ${label}`, { group: label, baseline: true }, () => {
        formatBytesFast(bytes);
    });
}
