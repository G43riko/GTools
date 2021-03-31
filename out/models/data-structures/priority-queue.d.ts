import { G43BasicCollection } from "./g43-collection";
export declare class PriorityQueue<T> implements G43BasicCollection<T> {
    private readonly comparator;
    private heap;
    constructor(comparator: (a: T, b: T) => boolean);
    static createMaxQueue<T>(valueExtractor: (value: T) => number): PriorityQueue<T>;
    static createMinQueue<T>(valueExtractor: (value: T) => number): PriorityQueue<T>;
    private swap;
    peek(): T;
    get length(): number;
    contains(item: T): boolean;
    clear(): void;
    forEach(callback: (item: T, index: number) => boolean): void;
    add(element: T): void;
    pop(): T | undefined;
    private heapify;
}
