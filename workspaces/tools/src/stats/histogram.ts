/**
 * @example
 * ```ts
 * import { assertEquals } from "jsr:@std/assert/equals";
 *
 * const histogram = new Histogram();
 * histogram.add("ITEM_A");
 * histogram.add("ITEM_B");
 * histogram.add("ITEM_A");
 *
 * assertEquals(histogram.getSorted(), {"ITEM_A": 2, "ITEM_B": 1});
 * assertEquals(histogram.length, 2);
 * assertEquals(histogram.totalLength, 3);
 * ```
 */
export class Histogram<Key extends string = string> {
    private _totalLength = 0;
    private readonly _data: Map<Key, number> = new Map();

    /**
     * Gets the total number of items added to the histogram
     * @returns The total count of all items
     */
    public get totalLength(): number {
        return this._totalLength;
    }

    /**
     * Gets the number of unique keys in the histogram
     * @returns The count of unique keys
     */
    public get length(): number {
        return this._data.size;
    }

    /**
     * Creates a new instance of Histogram
     * @param options - Configuration options
     * @param options.includeFalsyValues - Whether to include falsy values in the histogram
     */
    public constructor(private readonly options: { includeFalsyValues?: boolean } = {}) {
    }

    /**
     * Clears all data from the histogram
     */
    public reset(): void {
        this._data.clear();
    }

    /**
     * Returns the histogram data as a sorted object
     * @param sort - Sort direction ("ASC" or "DESC")
     * @param options - Additional options
     * @param options.minOccurences - Minimum number of occurrences to include in the result
     * @returns An object with keys and their counts, sorted by count
     */
    public getSorted(sort: "ASC" | "DESC" = "DESC", { minOccurences = 0 } = {}): Record<Key, number> {
        const entries = new Array<[key: Key, value: number]>();

        for (const [key, count] of this._data) {
            if (count >= minOccurences) {
                entries.push([key, count]);
            }
        }

        entries.sort(sort === "ASC" ? (a, b) => a[1] - b[1] : (a, b) => b[1] - a[1]);

        return Object.fromEntries(entries) as Record<Key, number>;
    }

    /**
     * Adds multiple keys to the histogram
     * @param keys - Array of keys to add
     */
    public addAll(keys: readonly Key[]): void {
        keys.forEach((key) => this.add(key));
    }

    /**
     * Adds a single key to the histogram
     * @param key - The key to add
     */
    public add(key: Key): void {
        if (!key && !this.options.includeFalsyValues) {
            return;
        }
        this._totalLength++;
        this._data.set(key, (this._data.get(key) ?? 0) + 1);
    }

    /**
     * Creates a JSON representation of the histogram
     * @returns An object with keys and their counts, sorted in descending order
     */
    public toJSON(): Record<Key, number> {
        return this.getSorted();
    }
}
