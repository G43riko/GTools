class Node<T> {
    public leftChild: Node<T> | null = null;
    public rightChild: Node<T> | null = null;

    public constructor(public val: T) {
    }
}

export class BinarySearchTree<T extends number> {
    public root: Node<T> | null;

    public constructor(rootValue: T) {
        this.root = new Node(rootValue);
    }

    public insert(currentNode: Node<T> | null, newValue: T): Node<T> {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.val) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }

        return currentNode;
    }

    public insertBST(newValue: T): void {
        if (!this.root) {
            this.root = new Node(newValue);

            return;
        }
        this.insert(this.root, newValue);
    }

    public preOrderPrint(currentNode: Node<T> | null): void {
        if (!currentNode) {
            return;
        }
        console.log(currentNode.val);
        this.preOrderPrint(currentNode.leftChild);
        this.preOrderPrint(currentNode.rightChild);

    }

    public inOrderPrint(currentNode: Node<T> | null): void {
        if (!currentNode) {
            return;
        }
        this.inOrderPrint(currentNode.leftChild);
        console.log(currentNode.val);
        this.inOrderPrint(currentNode.rightChild);

    }

    public postOrderPrint(currentNode: Node<T> | null): void {
        if (!currentNode) {
            return;
        }
        this.postOrderPrint(currentNode.leftChild);
        this.postOrderPrint(currentNode.rightChild);
        console.log(currentNode.val);

    }

    private search(currentNode: Node<T> | null, value: T): Node<T> | null {

        if (currentNode) {
            if (value === currentNode.val) {

                return currentNode;
            }
            if (value < currentNode.val) {
                return this.search(currentNode.leftChild, value);
            }

            return this.search(currentNode.rightChild, value);
        }

        return null;

    }

    private searchBST(value: T): Node<T> | null {
        return this.search(this.root, value);
    }

    private delete(currentNode: Node<T> | null, value: T): boolean {
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
        this.delete(this.root, minRight.val);
        currentNode.val = temp;

        return true;

    }
}
