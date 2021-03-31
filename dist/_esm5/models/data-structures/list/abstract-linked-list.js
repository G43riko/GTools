var AbstractLinkedList = (function () {
    function AbstractLinkedList() {
        this.first = null;
        this.localLength = 0;
    }
    Object.defineProperty(AbstractLinkedList.prototype, "length", {
        get: function () {
            return this.localLength;
        },
        enumerable: false,
        configurable: true
    });
    AbstractLinkedList.prototype[Symbol.iterator] = function () {
        var _a;
        var current = this.first;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                if (current) {
                    var value = current.item;
                    current = current.next;
                    return {
                        value: value,
                        done: false,
                    };
                }
                return {
                    value: null,
                    done: true,
                };
            },
            _a;
    };
    Object.defineProperty(AbstractLinkedList.prototype, "empty", {
        get: function () {
            return this.localLength === 0;
        },
        enumerable: false,
        configurable: true
    });
    AbstractLinkedList.prototype.contains = function (item) {
        for (var current = this.first; current; current = current.next) {
            if (current.item === item) {
                return true;
            }
        }
        return false;
    };
    AbstractLinkedList.prototype.toArray = function () {
        var newArray = new Array(this.localLength);
        var i = 0;
        for (var current = this.first; current; current = current.next) {
            newArray[i++] = current.item;
        }
        return newArray;
    };
    return AbstractLinkedList;
}());
export { AbstractLinkedList };
//# sourceMappingURL=abstract-linked-list.js.map