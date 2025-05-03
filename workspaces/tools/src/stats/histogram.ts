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

    public get totalLength(): number {
        return this._totalLength;
    }
    public get length(): number {
        return this._data.size;
    }
    public constructor(private readonly options: { includeFalsyValues?: boolean } = {}) {
    }

    public reset(): void {
        this._data.clear();
    }

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

    public addAll(keys: readonly Key[]): void {
        keys.forEach((key) => this.add(key));
    }

    public add(key: Key): void {
        if (!key && !this.options.includeFalsyValues) {
            return;
        }
        this._totalLength++;
        this._data.set(key, (this._data.get(key) ?? 0) + 1);
    }

    public toJSON(): Record<Key, number> {
        return this.getSorted();
    }
}
