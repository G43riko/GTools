import "mocha";
import { HeapSort } from "./heap-sort";
import { InsertionSort } from "./insertion-sort";
import { MergeSort } from "./merge-sort";
import { QuickSort } from "./quick-sort";
import { RadixSort } from "./radix-sort";

describe("Sorts", () => {
    describe("default", () => {
        const heapSort = new HeapSort<number>((a, b) => a - b);
        const insertionSort = new InsertionSort<number>((a, b) => a - b);
        const mergeSort = new MergeSort<number>((a, b) => a - b);
        const quickSort = new QuickSort<number>((a, b) => a - b);
        const radixSort = new RadixSort<number>((a) => a);

        const sorts = [
            // radixSort,
            quickSort,
            mergeSort,
            {
                constructor: { name: "DEFAULT" },
                sort: (array: number[]): unknown => array.sort(),
            },
            heapSort,
            insertionSort,
        ];

        const arr = new Array<number>(10000).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

        it("It should lerp", () => {
            sorts.forEach((sort) => {
                const testArr = [...arr];
                const start = Date.now();
                sort.sort(testArr);

                const diff = Date.now() - start;
                console.log(sort.constructor.name, ": ", diff, "ms");
            });
        });
    });
});
