class Node {
    constructor(val) {
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}
export class BinarySearchTree {
    constructor(rootValue) {
        this._length = 0;
        this.root = new Node(rootValue);
    }
    get length() {
        return this._length;
    }
    clear() {
        this._length = 0;
        this.root = null;
    }
    addInternally(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        }
        else if (newValue < currentNode.val) {
            currentNode.leftChild = this.addInternally(currentNode.leftChild, newValue);
        }
        else {
            currentNode.rightChild = this.addInternally(currentNode.rightChild, newValue);
        }
        this._length++;
        return currentNode;
    }
    add(newValue) {
        if (!this.root) {
            this.root = new Node(newValue);
            return;
        }
        this.addInternally(this.root, newValue);
    }
    forEach(callback) {
        this.forEachInternally(this.root, callback);
    }
    forEachOrderedInternally(currentNode, callback, order) {
        if (!currentNode) {
            return;
        }
        if (order === "PRE") {
            callback(currentNode.val, NaN);
        }
        this.forEachOrderedInternally(currentNode.leftChild, callback, order);
        if (!order) {
            callback(currentNode.val, NaN);
        }
        this.forEachOrderedInternally(currentNode.rightChild, callback, order);
        if (order === "POST") {
            callback(currentNode.val, NaN);
        }
    }
    forEachInternally(currentNode, callback) {
        if (!currentNode) {
            return;
        }
        this.forEachInternally(currentNode.leftChild, callback);
        callback(currentNode.val, NaN);
        this.forEachInternally(currentNode.rightChild, callback);
    }
    searchInternally(currentNode, value) {
        if (currentNode) {
            if (value === currentNode.val) {
                return currentNode;
            }
            if (value < currentNode.val) {
                return this.searchInternally(currentNode.leftChild, value);
            }
            return this.searchInternally(currentNode.rightChild, value);
        }
        return null;
    }
    search(value) {
        return this.searchInternally(this.root, value);
    }
    contains(value) {
        return !!this.search(value);
    }
    remove(value) {
        const removed = this.removeInternally(this.root, value);
        if (removed) {
            this._length--;
        }
        return removed;
    }
    removeInternally(currentNode, value) {
        var _a, _b;
        if (!currentNode) {
            return false;
        }
        let parentNode = null;
        while (currentNode && (currentNode.val !== value)) {
            parentNode = currentNode;
            if (value < currentNode.val) {
                currentNode = currentNode.leftChild;
            }
            else {
                currentNode = currentNode.rightChild;
            }
        }
        if (currentNode === null) {
            return false;
        }
        if (!currentNode.leftChild && !currentNode.rightChild) {
            if (currentNode.val === ((_a = this.root) === null || _a === void 0 ? void 0 : _a.val)) {
                this.root = null;
                return true;
            }
            if (currentNode.val < parentNode.val) {
                parentNode.leftChild = null;
                return true;
            }
            parentNode.rightChild = null;
            return true;
        }
        if (!currentNode.rightChild) {
            if (currentNode.val === ((_b = this.root) === null || _b === void 0 ? void 0 : _b.val)) {
                this.root = currentNode.leftChild;
                return true;
            }
            if (currentNode.leftChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.leftChild;
                return true;
            }
            parentNode.rightChild = currentNode.leftChild;
            return true;
        }
        if (!currentNode.leftChild) {
            if (currentNode.val === this.root.val) {
                this.root = currentNode.rightChild;
                return true;
            }
            if (currentNode.rightChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.rightChild;
                return true;
            }
            parentNode.rightChild = currentNode.rightChild;
            return true;
        }
        let minRight = currentNode.rightChild;
        while (minRight.leftChild !== null) {
            minRight = minRight.leftChild;
        }
        const temp = minRight.val;
        this.removeInternally(this.root, minRight.val);
        currentNode.val = temp;
        return true;
    }
}
//# sourceMappingURL=binary-tree.js.map