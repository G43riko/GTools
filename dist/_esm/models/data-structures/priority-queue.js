const leftChild = (index) => index * 2 + 1;
const rightChild = (index) => index * 2 + 2;
const getParentIndex = (index) => Math.floor((index - 1) / 2);
export class PriorityQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.heap = [];
    }
    static createMaxQueue(valueExtractor) {
        return new PriorityQueue((a, b) => valueExtractor(a) > valueExtractor(b));
    }
    static createMinQueue(valueExtractor) {
        return new PriorityQueue((a, b) => valueExtractor(a) < valueExtractor(b));
    }
    swap(indexOne, indexTwo) {
        const tmp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = tmp;
    }
    peek() {
        return this.heap[0];
    }
    get length() {
        return this.heap.length;
    }
    contains(item) {
        return this.heap.some((e) => this.comparator(e, item));
    }
    clear() {
        this.heap = [];
    }
    forEach(callback) {
        this.heap.forEach(callback);
    }
    add(element) {
        this.heap.push(element);
        let index = this.heap.length - 1;
        while (index !== 0 && this.comparator(this.heap[index], this.heap[getParentIndex(index)])) {
            this.swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }
    pop() {
        const root = this.heap.shift();
        this.heap.unshift(this.heap[this.heap.length - 1]);
        this.heap.pop();
        this.heapify(0);
        return root;
    }
    heapify(index) {
        const left = leftChild(index);
        const right = rightChild(index);
        let smallest = index;
        if (left < this.heap.length && this.comparator(this.heap[left], this.heap[smallest])) {
            smallest = left;
        }
        if (right < this.heap.length && this.comparator(this.heap[right], this.heap[smallest])) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(smallest, index);
            this.heapify(smallest);
        }
    }
}
//# sourceMappingURL=priority-queue.js.map