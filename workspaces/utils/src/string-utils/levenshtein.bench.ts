import { levenshtein } from "./levenshtein.ts";

/**
 * Returns the minimum of three numbers.
 */
function tripleMin(a: number, b: number, c: number): number {
    return Math.min(a, b, c);
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
                dp[i][j] = tripleMin(
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
Deno.bench("levenshtein", { group: "levenshtein" }, () => {
    levenshtein("I am the most expensive and the best IDE on the world", "the");
});
Deno.bench("levenshtein old", { group: "levenshtein" }, () => {
    levenshteinOld("I am the most expensive and the best IDE on the world", "the");
});
