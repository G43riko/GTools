import { levenshtein } from "./levenshtein.ts";

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

Deno.bench("levenshtein", { group: "levenshtein" }, () => {
    levenshtein("I am the most expensive and the best IDE on the world", "the");
});
Deno.bench("levenshtein old", { group: "levenshtein" }, () => {
    levenshteinOld("I am the most expensive and the best IDE on the world", "the");
});
Deno.bench("levenshtein older", { group: "levenshtein" }, () => {
    levenshteinOlder("I am the most expensive and the best IDE on the world", "the");
});
