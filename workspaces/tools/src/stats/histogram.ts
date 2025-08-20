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
 *
 * TODO: add function to return print histogram if key is numeric value for instance year
 */
export class Histogram<Key extends string | number = string | number> {
    private readonly options: { includeFalsyValues?: boolean };
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
    public constructor(options: { includeFalsyValues?: boolean } = {}) {
        this.options = options;
    }

    /**
     * Clears all data from the histogram
     */
    public reset(): void {
        this._data.clear();
    }

    /**
     * Renders a simple textual bar histogram for numeric-like keys (e.g., years).
     *
     * This utility is intended for quick inspection in logs/CLI. It scales each bar
     * proportionally to the maximum bucket count and returns either a flat array of
     * formatted strings or a key/value object of padded labels to bar strings.
     *
     * Note: When fillEmpty is true, the function will include missing keys between
     * the minimal and maximal observed keys. Missing keys get count 0. Keys are
     * treated as strings but coerced via Number(...) to determine range bounds.
     *
     * TODO: add maxOccurences
     *
     * @param histogram - Source histogram (typically built with numeric keys such as years)
     * @param length - Maximum number of '#' chars for the bucket with the highest count
     * @param options - Rendering options
     * @param options.minOccurences - Buckets with occurrences below this threshold are ignored
     * @param options.fillEmpty - Whether to print entries for missing keys between min and max
     * @param options.appendValue - Whether to append the raw count after the bar
     * @param options.flat - When true returns an array of 'label: bar [count]'; when false an object
     * @returns Flat array of lines when flat=true; otherwise a mapping of label->bar
     */
    public printHist(
        histogram: Histogram,
        length: number,
        {
            minOccurences = 1,
            fillEmpty = true,
            appendValue = true,
            flat = true,
        } = {},
    ): Record<string, string> | Array<string> {
        let minYear = Infinity;
        let maxYear = -Infinity;
        let maxKeyLength = 0;
        let maxCount = 0;
        const yearMap = histogram.getSorted("DESC", { minOccurences });
        const yearEntries = Object.entries(yearMap);
        yearEntries.forEach(([yearString, count]) => {
            const year = Number(yearString);
            if (minYear > year) {
                minYear = year;
            }
            if (maxYear < year) {
                maxYear = year;
            }

            if (maxCount < count) {
                maxCount = count;
            }
            if (maxKeyLength < yearString.length) {
                maxKeyLength = yearString.length;
            }
        });

        const createEntry = (year: number | string, count: number) => {
            const value = Math.floor(count / maxCount * length);
            const key = String(year).padEnd(maxKeyLength);
            if (appendValue) {
                return [key, `${"#".repeat(value)} ${count}`.trim()];
            }
            return [key, "#".repeat(value)];
        };
        const createEntries = () => {
            if (fillEmpty) {
                return Array.from({ length: maxYear - minYear }, (_, i) => {
                    const year = minYear + i;
                    const count = yearMap[year] ?? 0;

                    return createEntry(year, count);
                });
            }
            return yearEntries.map(([year, count]) => {
                return createEntry(year, count);
            });
        };
        const entries = createEntries();

        if (flat) {
            return entries.map(([year, value]) => `${year}: ${value}`);
        }
        return Object.fromEntries(entries);
    }
    /**
     * Returns the histogram data as a sorted object
     * @param sort - Sort direction ("ASC" or "DESC")
     * @param options - Additional options
     * @param options.minOccurences - Minimum number of occurrences to include in the result
     * @returns An object with keys and their counts, sorted by count
     *
     * TODO: add maxOccurences
     * TODO: add maxNumber
     */
    public getSorted(sort: "ASC" | "DESC" = "DESC", { minOccurences = 0 } = {}): Record<Key, number> {
        const entries = new Array<[key: Key, value: number]>();

        for (const [key, count] of this._data) {
            if (count >= minOccurences) {
                entries.push([key, count]);
            }
        }
        // TODO: fix issue with sorting if key is number
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
