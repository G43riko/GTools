import { binarySearch, sortedInsert, sortedRemove } from "../../../utils/sorted-array-utils";
import { List } from "./list";

export class SortedArrayList<T> implements List<T> {
    private readonly data: T[] = [];

    public constructor(private readonly comparator: (a: T, b: T) => number) {
    }

    public forEach(callback: (item: T, index: number) => boolean): void {
        this.data.forEach(callback);
    }

    public getItem(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return;
        }

        return this.data[index];
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
                        done: false,
                    };
                }

                return {
                    value: undefined,
                    done: true,
                };
            },
        };
    }

    public get length(): number {
        return this.data.length;
    }

    public get empty(): boolean {
        return this.data.length === 0;
    }

    public add(item: T): number {
        return sortedInsert(this.data, item, this.comparator);
    }

    public removeItemAt(index: number): boolean {
        if (index < 0 || index >= this.length) {
            return false;
        }

        this.data.splice(index, 1);

        return true;
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
