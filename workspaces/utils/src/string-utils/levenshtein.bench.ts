import { levenshtein } from "./levenshtein.ts";

/**
 * Optimised Levenshtein using two typed Int32Array rows instead of a full 2-D
 * JS Array.  Benefits:
 *   - O(n) memory instead of O(m*n)
 *   - Int32Array lives in contiguous memory → much better CPU cache locality
 *   - charCodeAt avoids repeated string indexing / Unicode normalisation
 *   - branchless manual min avoids the overhead of Math.min with 3 args
 */
function levenshteinFast(a: string, b: string): number {
    const m = a.length;
    const n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;

    // Keep the shorter string as the "column" dimension to minimise allocation
    const [s1, s2, len1, len2] = m <= n
        ? [a, b, m, n]
        : [b, a, n, m];

    let prev = new Int32Array(len2 + 1);
    let curr = new Int32Array(len2 + 1);

    for (let j = 0; j <= len2; j++) prev[j] = j;

    for (let i = 1; i <= len1; i++) {
        curr[0] = i;
        const code = s1.charCodeAt(i - 1);
        for (let j = 1; j <= len2; j++) {
            if (code === s2.charCodeAt(j - 1)) {
                curr[j] = prev[j - 1];
            } else {
                const del = prev[j];
                const ins = curr[j - 1];
                const sub = prev[j - 1];
                // branchless 3-way min
                curr[j] = 1 + (del < ins ? (del < sub ? del : sub) : (ins < sub ? ins : sub));
            }
        }
        // swap rows without re-allocating
        const tmp = prev;
        prev = curr;
        curr = tmp;
    }

    return prev[len2];
}

/**
 * Basic Levenshtein distance (no transpositions).
 */
function levenshteinOld(a: string, b: string): number {
    const m = a.length;
    const n = b.length;

    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] !== b[j - 1]) {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // deletion
                    dp[i][j - 1] + 1, // insertion
                    dp[i - 1][j - 1] + 1, // substitution
                );
            } else {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
}

export const levenshteinOlder = (a: string, b: string): number => {
    const c = a.length + 1;
    const d = b.length + 1;
    const r = Array(c);
    for (let i = 0; i < c; ++i) {
        r[i] = Array(d);
    }
    for (let i = 0; i < c; ++i) {
        r[i][0] = i;
    }
    for (let j = 0; j < d; ++j) {
        r[0][j] = j;
    }
    for (let i = 1; i < c; ++i) {
        for (let j = 1; j < d; ++j) {
            const s = a[i - 1] === b[j - 1] ? 0 : 1;
            r[i][j] = Math.min(
                r[i - 1][j] + 1,
                r[i][j - 1] + 1,
                r[i - 1][j - 1] + s,
            );
        }
    }
    return r[a.length][b.length];
};

const shortA = "I am the most expensive and the best IDE on the world";
const shortB = "the";
const longA = "The quick brown fox jumps over the lazy dog".repeat(100);
const longB = "jumped over the lazy";

Deno.bench("levenshtein", { group: "levenshtein (short)" }, () => {
    levenshtein(shortA, shortB);
});
Deno.bench("levenshtein old", { group: "levenshtein (short)" }, () => {
    levenshteinOld(shortA, shortB);
});
Deno.bench("levenshtein older", { group: "levenshtein (short)" }, () => {
    levenshteinOlder(shortA, shortB);
});
Deno.bench("levenshtein fast", { group: "levenshtein (short)" }, () => {
    levenshteinFast(shortA, shortB);
});

Deno.bench("levenshtein", { group: "levenshtein (long)" }, () => {
    levenshtein(longA, longB);
});
Deno.bench("levenshtein old", { group: "levenshtein (long)" }, () => {
    levenshteinOld(longA, longB);
});
Deno.bench("levenshtein older", { group: "levenshtein (long)" }, () => {
    levenshteinOlder(longA, longB);
});
Deno.bench("levenshtein fast", { group: "levenshtein (long)" }, () => {
    levenshteinFast(longA, longB);
});
