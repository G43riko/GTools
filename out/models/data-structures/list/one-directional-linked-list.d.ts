import { AbstractLinkedList } from "./abstract-linked-list";
import { OneDirectionalLinkedListEntry } from "./linked-list-entry";
import { List } from "./list";
export declare class OneDirectionalLinkedList<T> extends AbstractLinkedList<T, OneDirectionalLinkedListEntry<T>> implements List<T> {
    add(item: T): boolean;
    forEach(callback: (item: T, index: number) => boolean): void;
    clear(): void;
    remove(item: T): boolean;
}
