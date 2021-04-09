import { binarySearch, sortedInsert, sortedRemove } from "../../../utils/sorted-array-utils";
export class SortedArrayList {
    constructor(comparator) {
        this.comparator = comparator;
        this.data = [];
    }
    forEach(callback) {
        this.data.forEach(callback);
    }
    [Symbol.iterator]() {
        let current = 0;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next: () => {
                if (current < this.data.length) {
                    return {
                        value: this.data[current++],
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
    get length() {
        return this.data.length;
    }
    get empty() {
        return this.data.length === 0;
    }
    add(item) {
        return sortedInsert(this.data, item, this.comparator) >= 0;
    }
    clear() {
        this.data.splice(0, this.data.length);
    }
    contains(item) {
        return binarySearch(this.data, item, this.comparator) >= 0;
    }
    remove(item) {
        return !!sortedRemove(this.data, item, this.comparator);
    }
    toArray() {
        return [...this.data];
    }
}
//# sourceMappingURL=sorted-array-list.js.map