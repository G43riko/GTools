export declare class BinaryHeap<T> {
    private readonly scoreFunction;
    private content;
    constructor(scoreFunction: (item: T) => number);
    push(element: T): void;
    pop(): T;
    remove(node: T): void;
    size(): number;
    rescoreElement(node: T): void;
    sinkDown(n: number): void;
    bubbleUp(n: number): void;
}
//# sourceMappingURL=binary-queue.d.ts.map