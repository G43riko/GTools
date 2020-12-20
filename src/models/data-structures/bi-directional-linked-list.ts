import { AbstractLinkedList } from "./abstract-linked-list";
import { BiDirectionalLinkedListEntry } from "./linked-list-entry";
import { List } from "./list";

export class BiDirectionalLinkedList<T> extends AbstractLinkedList<T, BiDirectionalLinkedListEntry<T>> implements List<T> {
    private last: BiDirectionalLinkedListEntry<T> | null = null;

    public add(item: T): boolean {
        const newItem = new BiDirectionalLinkedListEntry(item);
        if (this.empty) {
            this.first = newItem;
        } else {
            this.last!.next = newItem;
        }

        newItem.prev = this.last;
        this.last    = newItem;

        this.localLength++;

        return true;
    }

    public clear(): void {
        this.first       = null;
        this.last        = null;
        this.localLength = 0;
    }

    public remove(item: T): boolean {
        if (this.empty) {
            return false;
        }

        if (this.length === 1) {
            this.clear();

            return true;
        }

        for (let current = this.first; current; current = current.next) {
            if (current.item === item) {
                if (current === this.first) {
                    this.first        = current.next;
                    current.next!.prev = null;
                    this.localLength--;

                    return true;
                }

                if (current === this.last) {
                    this.last         = current.prev;
                    current.prev!.next = null;
                    this.localLength--;

                    return true;
                }

                current.prev!.next = current.next;
                current.next!.prev = current.prev;
                this.localLength--;

                return true;
            }
        }

        return true;
    }
}
