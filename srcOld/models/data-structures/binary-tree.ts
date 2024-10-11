import { G43Collection } from "./g43-collection";

class Node<T> {
    public leftChild: Node<T> | null = null;
    public rightChild: Node<T> | null = null;

    public constructor(public val: T) {
    }
}

/**
 * TODO: add comparator
 */
export class BinarySearchTree<T extends number> implements G43Collection<T> {
    public root: Node<T> | null;
    private _length = 0;

    public get length(): number {
        return this._length;
    }

    public constructor(rootValue: T) {
        this.root = new Node(rootValue);
    }

    public clear(): void {
        this._length = 0;
        this.root = null;
    }

    private addInternally(currentNode: Node<T> | null, newValue: T): Node<T> {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.val) {
            currentNode.leftChild = this.addInternally(currentNode.leftChild, newValue);
        } else {
            currentNode.rightChild = this.addInternally(currentNode.rightChild, newValue);
        }
        this._length++;

        return currentNode;
    }

    public add(newValue: T): void {
        if (!this.root) {
            this.root = new Node(newValue);

            return;
        }
        this.addInternally(this.root, newValue);
    }

    public forEach(callback: (item: T, index: number) => boolean): void {
        this.forEachInternally(this.root, callback);
    }

    public forEachOrderedInternally(
        currentNode: Node<T> | null,
        callback: (item: T, index: number) => boolean,
        order: "POST" | "PRE",
    ): void {
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

    public forEachInternally(currentNode: Node<T> | null, callback: (item: T, index: number) => boolean): void {
        if (!currentNode) {
            return;
        }
        this.forEachInternally(currentNode.leftChild, callback);
        callback(currentNode.val, NaN);
        this.forEachInternally(currentNode.rightChild, callback);
    }

    private searchInternally(currentNode: Node<T> | null, value: T): Node<T> | null {
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

    public search(value: T): Node<T> | null {
        return this.searchInternally(this.root, value);
    }

    public contains(value: T): boolean {
        return !!this.search(value);
    }

    public remove(value: T): boolean {
        const removed = this.removeInternally(this.root, value);

        if (removed) {
            this._length--;
        }

        return removed;
    }

    private removeInternally(currentNode: Node<T> | null, value: T): boolean {
        if (!currentNode) {
            return false;
        }

        let parentNode: Node<T> | null = null;
        while (currentNode && (currentNode.val !== value)) {
            parentNode = currentNode;
            if (value < currentNode.val) {
                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;
            }
        }

        if (currentNode === null) {
            return false;
        }
        if (!currentNode.leftChild && !currentNode.rightChild) {
            if (currentNode.val === this.root?.val) {
                this.root = null;

                return true;
            }
            if (currentNode.val < parentNode!.val) {
                parentNode!.leftChild = null;

                return true;
            }
            parentNode!.rightChild = null;

            return true;
        }
        if (!currentNode.rightChild) {
            if (currentNode.val === this.root?.val) {
                this.root = currentNode.leftChild;

                return true;
            }
            if (currentNode.leftChild!.val < parentNode!.val) {
                parentNode!.leftChild = currentNode.leftChild;

                return true;
            }
            parentNode!.rightChild = currentNode.leftChild;

            return true;
        }
        if (!currentNode.leftChild) {
            if (currentNode.val === this.root!.val) {
                this.root = currentNode.rightChild;

                return true;
            }
            if (currentNode.rightChild.val < parentNode!.val) {
                parentNode!.leftChild = currentNode.rightChild;

                return true;
            }
            parentNode!.rightChild = currentNode.rightChild;

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
