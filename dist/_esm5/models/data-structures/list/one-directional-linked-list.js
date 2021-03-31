import { __extends } from "tslib";
import { AbstractLinkedList } from "./abstract-linked-list";
import { OneDirectionalLinkedListEntry } from "./linked-list-entry";
var OneDirectionalLinkedList = (function (_super) {
    __extends(OneDirectionalLinkedList, _super);
    function OneDirectionalLinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OneDirectionalLinkedList.prototype.add = function (item) {
        var newFirst = new OneDirectionalLinkedListEntry(item);
        newFirst.next = this.first;
        this.first = newFirst;
        this.localLength++;
        return true;
    };
    OneDirectionalLinkedList.prototype.forEach = function (callback) {
        var act = this.first;
        var index = 0;
        while (act) {
            callback(act.item, index++);
            act = act.next;
        }
    };
    OneDirectionalLinkedList.prototype.clear = function () {
        this.first = null;
        this.localLength = 0;
    };
    OneDirectionalLinkedList.prototype.remove = function (item) {
        var _a;
        for (var current = this.first; current; current = current.next) {
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
    };
    return OneDirectionalLinkedList;
}(AbstractLinkedList));
export { OneDirectionalLinkedList };
//# sourceMappingURL=one-directional-linked-list.js.map