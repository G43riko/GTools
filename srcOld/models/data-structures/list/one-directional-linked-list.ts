import { AbstractLinkedList } from "./abstract-linked-list";
import { OneDirectionalLinkedListEntry } from "./linked-list-entry";
import { List } from "./list";

/**
 * Array should have pointer to last item
 */
export class OneDirectionalLinkedList<T> extends AbstractLinkedList<T, OneDirectionalLinkedListEntry<T>>
    implements List<T> {
    public add(item: T): boolean {
        return this.append(item);
    }

    // tslint:disable-next-line:no-invariant-return
    public append(item: T): boolean {
        const newFirst = new OneDirectionalLinkedListEntry(item);

        if (this.empty) {
            this.first = newFirst;
            this.localLength++;

            return true;
        }
        let current = this.first;
        while (current?.next) {
            current = current?.next;
        }
        current!.next = newFirst;

        this.localLength++;

        return true;
    }

    public prepend(item: T): boolean {
        const newFirst = new OneDirectionalLinkedListEntry(item);
        newFirst.next = this.first;
        this.first = newFirst;

        this.localLength++;

        return true;
    }

    public forEach(callback: (item: T, index: number) => boolean): void {
        let act = this.first;
        let index = 0;
        while (act) {
            callback(act.item, index++);
            act = act.next;
        }
    }

    public clear(): void {
        this.first = undefined;
        this.localLength = 0;
    }

    public removeItemAt(index: number): boolean {
        if (index < 0 || index >= this.length || this.empty) {
            return false;
        }
        if (index === 0) {
            this.first = this.first?.next;
            this.localLength--;

            return true;
        }

        const item = this.getHolderAtNotChecked(index - 1);
        if (!item) {
            return false;
        }
        item.next = item.next?.next;
        this.localLength--;

        return true;

        // let counter = 1;
        // for (let current = this.first; current; current = current.next, counter++) {
        //     if (counter === index) {
        //         current.next = current.next?.next;
        //         this.localLength--;
        //
        //         return true;
        //     }
        // }
        //
        // return false;
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
