var OneDirectionalLinkedListEntry = (function () {
    function OneDirectionalLinkedListEntry(item) {
        this.item = item;
        this.next = null;
    }
    return OneDirectionalLinkedListEntry;
}());
export { OneDirectionalLinkedListEntry };
var BiDirectionalLinkedListEntry = (function () {
    function BiDirectionalLinkedListEntry(item) {
        this.item = item;
        this.prev = null;
        this.next = null;
    }
    return BiDirectionalLinkedListEntry;
}());
export { BiDirectionalLinkedListEntry };
//# sourceMappingURL=linked-list-entry.js.map