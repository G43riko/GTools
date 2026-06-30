import { jaroWinkler } from "./jaro-winkler.ts";

/**
 * Optimised Jaro-Winkler.
 *
 * Problems with the original:
 *   1. `getMatchingCharacters` and `getTranspositions` each independently
 *      iterate through s1/s2 to find the same set of matching pairs — the
 *      matching window computation is done twice.
 *   2. Both helpers allocate `Array(n).fill(false)` (boxed JS booleans).
 *   3. `getMatchingCharacters` collects matched chars into a string[] that is
 *      only used to check its `.length` — wasteful allocation.
 *   4. A separate `getCommonPrefixLength` call adds a third small loop.
 *
 * Fixes applied here:
 *   - Single matching pass; track matches with two `Uint8Array`s (typed,
 *     contiguous, no boxing).
 *   - Transpositions computed inline during the same match-collection step.
 *   - Prefix length inlined after the main loop — no extra function call.
 */
function jaroWinklerFast(s1: string, s2: string): number {
    const len1 = s1.length;
    const len2 = s2.length;

    if (len1 === 0 && len2 === 0) return 1;
    if (len1 === 0 || len2 === 0) return 0;

    const matchDist = Math.max(0, Math.floor(Math.max(len1, len2) / 2) - 1);

    const matched1 = new Uint8Array(len1); // 0 = unmatched, 1 = matched
    const matched2 = new Uint8Array(len2);

    let matches = 0;

    // Single pass to collect match positions
    for (let i = 0; i < len1; i++) {
        const start = Math.max(0, i - matchDist);
        const end = Math.min(i + matchDist + 1, len2);
        for (let j = start; j < end; j++) {
            if (!matched2[j] && s1[i] === s2[j]) {
                matched1[i] = 1;
                matched2[j] = 1;
                matches++;
                break;
            }
        }
    }

    if (matches === 0) return 0;

    // Count transpositions in a single forward sweep
    let transpositions = 0;
    let k = 0;
    for (let i = 0; i < len1; i++) {
        if (!matched1[i]) continue;
        while (!matched2[k]) k++;
        if (s1[i] !== s2[k]) transpositions++;
        k++;
    }

    const jaro =
        (matches / len1 + matches / len2 + (matches - transpositions / 2) / matches) / 3;

    // Inline common-prefix length (capped at 4)
    let prefix = 0;
    const maxPfx = Math.min(4, Math.min(len1, len2));
    while (prefix < maxPfx && s1[prefix] === s2[prefix]) prefix++;

    return jaro + prefix * 0.1 * (1 - jaro);
}

// ---------------------------------------------------------------------------
// Benchmark data
// ---------------------------------------------------------------------------

const pairs: [string, string][] = [
    ["martha", "marhta"],          // classic example, short, many matches
    ["dixon", "dicksonx"],         // moderate mismatch
    ["CRATE", "TRACE"],            // anagram-like, lots of transpositions
    [
        "The quick brown fox jumps over the lazy dog",
        "The slow green turtle crawls under the lazy cat",
    ], // long strings
    ["", "nonempty"],              // edge: one empty
    ["identical", "identical"],    // edge: same string
];

for (const [s1, s2] of pairs) {
    const label = `"${s1.slice(0, 16)}" vs "${s2.slice(0, 16)}"`;

    Deno.bench(`jaroWinkler         ${label}`, { group: label }, () => {
        jaroWinkler(s1, s2);
    });

    Deno.bench(`jaroWinklerFast     ${label}`, { group: label, baseline: true }, () => {
        jaroWinklerFast(s1, s2);
    });
}
