import { AbstractLinkedList } from "./abstract-linked-list";
import { BiDirectionalLinkedListEntry } from "./linked-list-entry";
import { List } from "./list";

export class BiDirectionalLinkedList<T> extends AbstractLinkedList<T, BiDirectionalLinkedListEntry<T>>
    implements List<T> {
    private last?: BiDirectionalLinkedListEntry<T>;

    public add(item: T): boolean {
        return this.append(item);
    }

    public prepend(item: T): boolean {
        const newItem = new BiDirectionalLinkedListEntry(item);
        newItem.next = this.first;
        this.first = newItem;

        this.localLength++;

        return true;
    }

    public append(item: T): boolean {
        const newItem = new BiDirectionalLinkedListEntry(item);
        if (this.empty) {
            this.first = newItem;
        } else {
            this.last!.next = newItem;
        }

        newItem.prev = this.last;
        this.last = newItem;

        this.localLength++;

        return true;
    }

    /**
     * TODO: if index is nearer to the end then iterate from the end
     *
     * @param index - index of element to be removed
     */
    public removeItemAt(index: number): boolean {
        if (index < 0 || index >= this.length || this.empty) {
            return false;
        }
        if (index === 0) {
            this.first = this.first?.next;
            this.first!.prev = undefined;
            this.localLength--;

            return true;
        }
        if (index === this.length - 1) {
            this.last = this.last?.prev;
            this.last!.next = undefined;
            this.localLength--;

            return true;
        }

        const item = this.getHolderAtNotChecked(index);
        if (!item) {
            return false;
        }
        item.next!.prev = item?.prev;
        item.prev!.next = item?.next;
        this.localLength--;

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

    public forEachReverse(callback: (item: T, index: number) => boolean): void {
        let act = this.last;
        let index = this.length - 1;
        while (act) {
            callback(act.item, index--);
            act = act.prev;
        }
    }

    public clear(): void {
        this.first = undefined;
        this.last = undefined;
        this.localLength = 0;
    }

    public remove(item: T): boolean {
        if (this.empty) {
            return false;
        }

        for (let current = this.first; current; current = current.next) {
            if (current.item === item) {
                if (current === this.first) {
                    this.first = current.next;
                    current.next!.prev = undefined;
                    this.localLength--;

                    return true;
                }

                if (current === this.last) {
                    this.last = current.prev;
                    current.prev!.next = undefined;
                    this.localLength--;

                    return true;
                }

                current.prev!.next = current.next;
                current.next!.prev = current.prev;
                this.localLength--;

                return true;
            }
        }

        return false;
    }
}
