export class AbstractLinkedList {
    constructor() {
        this.first = null;
        this.localLength = 0;
    }
    get length() {
        return this.localLength;
    }
    [Symbol.iterator]() {
        let current = this.first;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if (current) {
                    const value = current.item;
                    current = current.next;
                    return {
                        value,
                        done: false,
                    };
                }
                return {
                    value: null,
                    done: true,
                };
            },
        };
    }
    get empty() {
        return this.localLength === 0;
    }
    contains(item) {
        for (let current = this.first; current; current = current.next) {
            if (current.item === item) {
                return true;
            }
        }
        return false;
    }
    toArray() {
        const newArray = new Array(this.localLength);
        let i = 0;
        for (let current = this.first; current; current = current.next) {
            newArray[i++] = current.item;
        }
        return newArray;
    }
}
//# sourceMappingURL=abstract-linked-list.js.map