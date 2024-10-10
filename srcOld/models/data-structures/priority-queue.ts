import { G43BasicCollection } from "./g43-collection";

const leftChild      = (index: number): number => index * 2 + 1;
const rightChild     = (index: number): number => index * 2 + 2;
const getParentIndex = (index: number): number => Math.floor((index - 1) / 2);

export class PriorityQueue<T> implements G43BasicCollection<T> {
    private heap: T[] = [];

    public constructor(private readonly comparator: (a: T, b: T) => boolean) {
    }

    public static createMaxQueue<T>(valueExtractor: (value: T) => number): PriorityQueue<T> {
        return new PriorityQueue<T>((a, b) => valueExtractor(a) > valueExtractor(b));
    }

    public static createMinQueue<T>(valueExtractor: (value: T) => number): PriorityQueue<T> {
        return new PriorityQueue<T>((a, b) => valueExtractor(a) < valueExtractor(b));
    }

    private swap(indexOne: number, indexTwo: number): void {
        const tmp           = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = tmp;
    }

    public peek(): T {
        // the root is always the highest priority item
        return this.heap[0];
    }

    public get length(): number {
        return this.heap.length;
    }

    public contains(item: T): boolean {
        return this.heap.some((e) => this.comparator(e, item));
    }

    public clear(): void {
        this.heap = [];
    }

    public forEach(callback: (item: T, index: number) => boolean): void {
        this.heap.forEach(callback);
    }

    public add(element: T): void {
        // push element to the end of the heap
        this.heap.push(element);

        // the index of the element we have just pushed
        let index = this.heap.length - 1;

        // if the element is greater than its getParentIndex:
        // swap element with its getParentIndex
        while (index !== 0 && this.comparator(this.heap[index], this.heap[getParentIndex(index)])) {
            this.swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }

    public pop(): T | undefined {
        // remove the first element from the heap
        const root = this.heap.shift();

        // put the last element to the front of the heap
        // and remove the last element from the heap as it now
        // sits at the front of the heap
        this.heap.unshift(this.heap[this.heap.length - 1]);
        this.heap.pop();

        // correctly re-position heap
        this.heapify(0);

        return root;
    }

    private heapify(index: number): void {
        const left   = leftChild(index);
        const right  = rightChild(index);
        let smallest = index;

        // if the left child is bigger than the node we are looking at
        if (left < this.heap.length && this.comparator(this.heap[left], this.heap[smallest])) {
            smallest = left;
        }

        // if the right child is bigger than the node we are looking at
        if (right < this.heap.length && this.comparator(this.heap[right], this.heap[smallest])) {
            smallest = right;
        }

        // if the value of smallest contains changed, then some swapping needs to be done
        // and this method needs to be called again with the swapped element
        if (smallest !== index) {
            this.swap(smallest, index);
            this.heapify(smallest);
        }
    }
}
