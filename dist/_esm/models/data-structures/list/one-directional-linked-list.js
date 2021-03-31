import { AbstractLinkedList } from "./abstract-linked-list";
import { OneDirectionalLinkedListEntry } from "./linked-list-entry";
export class OneDirectionalLinkedList extends AbstractLinkedList {
    add(item) {
        const newFirst = new OneDirectionalLinkedListEntry(item);
        newFirst.next = this.first;
        this.first = newFirst;
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
    clear() {
        this.first = null;
        this.localLength = 0;
    }
    remove(item) {
        var _a;
        for (let current = this.first; current; current = current.next) {
            if (current === this.first && current.item === item) {
                this.first = current.next;
                this.localLength--;
                return true;
            }
            if (((_a = current.next) === null || _a === void 0 ? void 0 : _a.item) === item) {
                current.next = current.next.next;
                this.localLength--;
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=one-directional-linked-list.js.map