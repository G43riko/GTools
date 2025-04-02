/**
 * @example
 * ```ts
 * import {Historgram} from "@g43/tools";
 *
 * const histogram = new Historgram();
 * histogram.add("ITEM_A");
 * histogram.add("ITEM_B");
 * histogram.add("ITEM_A");
 *
 * console.log(histogram); // {"ITEM_A": 2, "ITEM_B": 1}
 * ```
 */
export class Historgram<Key extends string = string> {
    public readonly data: Map<Key, number> = new Map();

    public constructor(private readonly options: { includeFalsyValues?: boolean } = {}) {
    }

    public reset(): void {
        this.data.clear();
    }


    public getSorted(sort: "ASC" | "DESC" = "DESC"): Record<Key, number> {
        const entries = Array.from(this.data.entries());
        entries.sort(sort === "ASC" ? (a, b) => a[1] - b[1] : (a, b) => b[1] - a[1]);

        return Object.fromEntries(entries) as Record<Key, number>;
    }

    public add(key: Key): void {
        if (!key && !this.options.includeFalsyValues) {
            return;
        }
        this.data.set(key, (this.data.get(key) ?? 0) + 1);
    }

    public toJSON(): Record<Key, number> {
        return this.getSorted();
    }
}
