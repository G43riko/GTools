import { binarySearch, sortedInsert, sortedRemove } from "gtools/utils";
import { List } from "./list";

export class SortedArrayList<T> implements List<T> {
    private readonly data: T[] = [];

    public constructor(private readonly comparator: (a: T, b: T) => number) {
    }

    public [Symbol.iterator](): IterableIterator<T> {
        let current = 0;

        return {
            [Symbol.iterator](): IterableIterator<T> {
                return this;
            },
            next: (): IteratorResult<T> => {
                if (current < this.data.length) {
                    return {
                        value: this.data[current++],
                        done : false,
                    };
                }

                return {
                    value: null,
                    done : true
                };
            }
        };
    }

    public get length(): number {
        return this.data.length;
    }

    public get empty(): boolean {
        return this.data.length === 0;
    }

    public add(item: T): boolean {
        return sortedInsert(this.data, item, this.comparator) >= 0;
    }

    public clear(): void {
        this.data.splice(0, this.data.length);
    }

    public contains(item: T): boolean {
        return binarySearch(this.data, item, this.comparator) >= 0;
    }

    public remove(item: T): boolean {
        return !!sortedRemove(this.data, item, this.comparator);
    }

    public toArray(): T[] {
        return [...this.data];
    }
}
