"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiDirectionalLinkedListEntry = exports.OneDirectionalLinkedListEntry = void 0;
var OneDirectionalLinkedListEntry = (function () {
    function OneDirectionalLinkedListEntry(item) {
        this.item = item;
        this.next = null;
    }
    return OneDirectionalLinkedListEntry;
}());
exports.OneDirectionalLinkedListEntry = OneDirectionalLinkedListEntry;
var BiDirectionalLinkedListEntry = (function () {
    function BiDirectionalLinkedListEntry(item) {
        this.item = item;
        this.prev = null;
        this.next = null;
    }
    return BiDirectionalLinkedListEntry;
}());
exports.BiDirectionalLinkedListEntry = BiDirectionalLinkedListEntry;
//# sourceMappingURL=linked-list-entry.js.map