import { quickSort } from "./quick-sort.ts";
import { insertionSort } from "./insertion-sort.ts";
import { mergeSort } from "./merge-sort.ts";
const SIZE = 10000;
const randomArray = new Array<number>(SIZE).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
const ascArray = new Array<number>(SIZE).fill(0).map((_, i) => i);
const descArray = new Array<number>(SIZE).fill(0).map((_, i) => SIZE - i);

Deno.bench("quickSort", { group: "sort.random" }, () => {
    quickSort(randomArray, (a, b) => a - b);
});
Deno.bench("insertionSort", { group: "sort.random" }, () => {
    insertionSort(randomArray, (a, b) => a - b);
});
Deno.bench("mergeSort", { group: "sort.random" }, () => {
    mergeSort(randomArray, (a, b) => a - b);
});

Deno.bench("quickSort", { group: "sort.asc" }, () => {
    quickSort(ascArray, (a, b) => a - b);
});
Deno.bench("insertionSort", { group: "sort.asc" }, () => {
    insertionSort(ascArray, (a, b) => a - b);
});
Deno.bench("mergeSort", { group: "sort.asc" }, () => {
    mergeSort(ascArray, (a, b) => a - b);
});

Deno.bench("quickSort", { group: "sort.desc" }, () => {
    quickSort(descArray, (a, b) => a - b);
});
Deno.bench("insertionSort", { group: "sort.desc" }, () => {
    insertionSort(descArray, (a, b) => a - b);
});
Deno.bench("mergeSort", { group: "sort.desc" }, () => {
    mergeSort(descArray, (a, b) => a - b);
});
