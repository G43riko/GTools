export declare abstract class AbstractLinkedList<T, S extends {
    next: S | null;
    item: T;
}> implements Iterable<T> {
    protected first: S | null;
    protected localLength: number;
    get length(): number;
    [Symbol.iterator](): IterableIterator<T>;
    get empty(): boolean;
    contains(item: T): boolean;
    toArray(): T[];
}
//# sourceMappingURL=abstract-linked-list.d.ts.map