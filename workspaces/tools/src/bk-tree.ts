import { levenshtein } from "@g43/utils";

/**
 * Damerau–Levenshtein distance (supports adjacent transpositions).
 */
function damerauLevenshteinDistance(a: string, b: string): number {
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
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;

            dp[i][j] = Math.min(
                dp[i - 1][j] + 1, // deletion
                dp[i][j - 1] + 1, // insertion
                dp[i - 1][j - 1] + cost, // substitution
            );

            if (
                i > 1 &&
                j > 1 &&
                a[i - 1] === b[j - 2] &&
                a[i - 2] === b[j - 1]
            ) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1); // transposition
            }
        }
    }

    return dp[m][n];
}

const MAX_WORD_LENGTH = 1024;

class BKNode {
    public word: string;
    public readonly next: (number | null)[];

    public constructor(word: string) {
        this.word = word;
        this.next = new Array(2 * MAX_WORD_LENGTH).fill(null);
    }

    public setWord(word: string): void {
        this.word = word;
    }
}

type DistanceType = "levenshtein" | "damerau-levenshtein";

interface BKTreeOptions {
    readonly maxWords: number;
    readonly distance?: DistanceType | ((a: string, b: string) => number);
}

/**
 * BK-tree with configurable distance metric.
 */
export class BKTree {
    private readonly tree: BKNode[];
    private readonly root = new BKNode("");
    private ptr = 0;
    private readonly distanceFn: (a: string, b: string) => number;

    /**
     * Creates a BK-tree instance.
     * @param options - Configuration options.
     */
    public constructor(options: BKTreeOptions) {
        const { maxWords, distance = "levenshtein" } = options;

        this.tree = new Array(maxWords).fill(null).map(() => new BKNode(""));
        if (typeof distance === "function") {
            this.distanceFn = distance;
        } else {
            this.distanceFn = distance === "damerau-levenshtein" ? damerauLevenshteinDistance : levenshtein;
        }
    }

    private _add(idx: number, node: BKNode): void {
        if (this.root.word === "") {
            this.root.setWord(node.word);
            this.tree[0] = this.root;
            return;
        }
        const current = this.tree[idx];
        const dist = this.distanceFn(current.word, node.word);
        const childIndex = current.next[dist];

        if (childIndex === null) {
            this.ptr++;
            this.tree[this.ptr].setWord(node.word);
            current.next[dist] = this.ptr;
        } else {
            this._add(childIndex, node);
        }
    }

    private _simWords(idx: number | null, word: string, tolerance: number): string[] {
        if (idx === null || idx >= this.tree.length) {
            return [];
        }

        const current = this.tree[idx];
        const dist = this.distanceFn(word, current.word);

        const results: string[] = [];
        if (dist <= tolerance) {
            results.push(current.word);
        }

        const start = Math.max(1, dist - tolerance);
        const end = dist + tolerance;

        for (let d = start; d <= end; d++) {
            const nextIdx = current.next[d];
            if (nextIdx !== null) {
                results.push(...this._simWords(nextIdx, word, tolerance));
            }
        }

        return results;
    }

    /**
     * Add multiple words to the tree.
     */
    public add(words: string[]): void {
        if (!Array.isArray(words)) {
            throw new Error("Input must be an array of strings.");
        }

        for (const word of words) {
            this._add(0, new BKNode(word));
        }
    }

    /**
     * Find similar words in the tree.
     * @param source - Input word.
     * @param tolerance - Maximum edit distance allowed.
     */
    public simWords(source: string, tolerance: number): string[] {
        return this._simWords(0, source, tolerance);
    }
}
