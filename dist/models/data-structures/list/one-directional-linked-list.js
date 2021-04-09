"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneDirectionalLinkedList = void 0;
var abstract_linked_list_1 = require("./abstract-linked-list");
var linked_list_entry_1 = require("./linked-list-entry");
var OneDirectionalLinkedList = (function (_super) {
    __extends(OneDirectionalLinkedList, _super);
    function OneDirectionalLinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OneDirectionalLinkedList.prototype.add = function (item) {
        var newFirst = new linked_list_entry_1.OneDirectionalLinkedListEntry(item);
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
}(abstract_linked_list_1.AbstractLinkedList));
exports.OneDirectionalLinkedList = OneDirectionalLinkedList;
//# sourceMappingURL=one-directional-linked-list.js.map