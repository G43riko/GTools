import { G43Collection } from "./g43-collection";
declare class Node<T> {
    val: T;
    leftChild: Node<T> | null;
    rightChild: Node<T> | null;
    constructor(val: T);
}
/**
 * TODO: add comparator
 */
export declare class BinarySearchTree<T extends number> implements G43Collection<T> {
    root: Node<T> | null;
    private _length;
    get length(): number;
    constructor(rootValue: T);
    clear(): void;
    private addInternally;
    add(newValue: T): void;
    forEach(callback: (item: T, index: number) => boolean): void;
    forEachOrderedInternally(currentNode: Node<T> | null, callback: (item: T, index: number) => boolean, order: "POST" | "PRE"): void;
    forEachInternally(currentNode: Node<T> | null, callback: (item: T, index: number) => boolean): void;
    private searchInternally;
    search(value: T): Node<T> | null;
    contains(value: T): boolean;
    remove(value: T): boolean;
    private removeInternally;
}
export {};
//# sourceMappingURL=binary-tree.d.ts.map