import { AbstractLinkedList } from "./abstract-linked-list";
import { BiDirectionalLinkedListEntry } from "./linked-list-entry";
export class BiDirectionalLinkedList extends AbstractLinkedList {
    constructor() {
        super(...arguments);
        this.last = null;
    }
    add(item) {
        const newItem = new BiDirectionalLinkedListEntry(item);
        if (this.empty) {
            this.first = newItem;
        }
        else {
            this.last.next = newItem;
        }
        newItem.prev = this.last;
        this.last = newItem;
        this.localLength++;
        return true;
    }
    forEach(callback) {
        let act = this.first;
        let index = 0;
        while (act) {
            callback(act.item, index++);
            act = act.next;
        }
    }
    forEachReverse(callback) {
        let act = this.last;
        let index = this.length - 1;
        while (act) {
            callback(act.item, index--);
            act = act.prev;
        }
    }
    clear() {
        this.first = null;
        this.last = null;
        this.localLength = 0;
    }
    remove(item) {
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
                    this.first = current.next;
                    current.next.prev = null;
                    this.localLength--;
                    return true;
                }
                if (current === this.last) {
                    this.last = current.prev;
                    current.prev.next = null;
                    this.localLength--;
                    return true;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.localLength--;
                return true;
            }
        }
        return true;
    }
}
//# sourceMappingURL=bi-directional-linked-list.js.map