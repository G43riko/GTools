import { AbstractLinkedList } from "./abstract-linked-list";
import { OneDirectionalLinkedListEntry } from "./linked-list-entry";
import { List } from "./list";

export class OneDirectionalLinkedList<T> extends AbstractLinkedList<T, OneDirectionalLinkedListEntry<T>> implements List<T> {
    public add(item: T): boolean {
        const newFirst = new OneDirectionalLinkedListEntry(item);
        newFirst.next  = this.first;
        this.first     = newFirst;

        this.localLength++;

        return true;
    }

    public forEach(callback: (item: T, index: number) => boolean): void {
        let act = this.first;
        let index = 0;
        while(act) {
            callback(act.item, index++);
            act = act.next;
        }
    }

    public clear(): void {
        this.first       = null;
        this.localLength = 0;
    }

    public remove(item: T): boolean {
        for (let current = this.first; current; current = current.next) {
            if (current === this.first && current.item === item) {
                this.first = current.next;
                this.localLength--;

                return true;
            }
            // tslint:disable-next-line:early-exit
            if (current.next?.item === item) {
                current.next = current.next.next;
                this.localLength--;

                return true;
            }
        }

        return false;
    }
}
