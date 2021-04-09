import { __extends } from "tslib";
import { AbstractLinkedList } from "./abstract-linked-list";
import { BiDirectionalLinkedListEntry } from "./linked-list-entry";
var BiDirectionalLinkedList = (function (_super) {
    __extends(BiDirectionalLinkedList, _super);
    function BiDirectionalLinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.last = null;
        return _this;
    }
    BiDirectionalLinkedList.prototype.add = function (item) {
        var newItem = new BiDirectionalLinkedListEntry(item);
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
    };
    BiDirectionalLinkedList.prototype.forEach = function (callback) {
        var act = this.first;
        var index = 0;
        while (act) {
            callback(act.item, index++);
            act = act.next;
        }
    };
    BiDirectionalLinkedList.prototype.forEachReverse = function (callback) {
        var act = this.last;
        var index = this.length - 1;
        while (act) {
            callback(act.item, index--);
            act = act.prev;
        }
    };
    BiDirectionalLinkedList.prototype.clear = function () {
        this.first = null;
        this.last = null;
        this.localLength = 0;
    };
    BiDirectionalLinkedList.prototype.remove = function (item) {
        if (this.empty) {
            return false;
        }
        if (this.length === 1) {
            this.clear();
            return true;
        }
        for (var current = this.first; current; current = current.next) {
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
    };
    return BiDirectionalLinkedList;
}(AbstractLinkedList));
export { BiDirectionalLinkedList };
//# sourceMappingURL=bi-directional-linked-list.js.map