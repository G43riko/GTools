import { AbstractLinkedList } from "./abstract-linked-list";
import { BiDirectionalLinkedListEntry } from "./linked-list-entry";
import { List } from "./list";
export declare class BiDirectionalLinkedList<T> extends AbstractLinkedList<T, BiDirectionalLinkedListEntry<T>> implements List<T> {
    private last;
    add(item: T): boolean;
    forEach(callback: (item: T, index: number) => boolean): void;
    forEachReverse(callback: (item: T, index: number) => boolean): void;
    clear(): void;
    remove(item: T): boolean;
}
//# sourceMappingURL=bi-directional-linked-list.d.ts.map