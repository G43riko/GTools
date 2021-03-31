import { List } from "./list";
export declare class SortedArrayList<T> implements List<T> {
    private readonly comparator;
    private readonly data;
    constructor(comparator: (a: T, b: T) => number);
    forEach(callback: (item: T, index: number) => boolean): void;
    [Symbol.iterator](): IterableIterator<T>;
    get length(): number;
    get empty(): boolean;
    add(item: T): boolean;
    clear(): void;
    contains(item: T): boolean;
    remove(item: T): boolean;
    toArray(): T[];
}
