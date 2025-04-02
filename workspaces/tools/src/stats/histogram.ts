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
export class Histogram<Key extends string = string> {
    public readonly data: Map<Key, number> = new Map();

    public get length(): number {
        return this.data.size;
    }
    public constructor(private readonly options: { includeFalsyValues?: boolean } = {}) {
    }

    public reset(): void {
        this.data.clear();
    }


    public getSorted(sort: "ASC" | "DESC" = "DESC", { minOccurences = 0 } = {}): Record<Key, number> {
        const entries = new Array<[key: Key, value: number]>();

        for (const [key, count] of this.data) {
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
        this.data.set(key, (this.data.get(key) ?? 0) + 1);
    }

    public toJSON(): Record<Key, number> {
        return this.getSorted();
    }
}
