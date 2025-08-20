import { min } from "./array-utils.ts";

function minOld(array: readonly number[]): number {
    if (array.length === 0) {
        return NaN;
    }
    return array.reduce((a, b) => (a < b ? a : b));
}

// Pre-generate datasets to avoid measuring generation time inside the benches
const smallArray = (() => {
    const arr = new Array<number>(5_000);
    for (let i = 0; i < arr.length; i++) arr[i] = Math.random() * 1e9 - 5e8;
    return arr as readonly number[];
})();

const largeArray = (() => {
    const arr = new Array<number>(200_000);
    for (let i = 0; i < arr.length; i++) arr[i] = Math.random() * 1e12 - 5e11;
    return arr as readonly number[];
})();

Deno.bench("min new (small)", { group: "array-utils.min" }, () => {
    min(smallArray);
});

Deno.bench("Math.min (small)", { group: "array-utils.min" }, () => {
    Math.min(...smallArray);
});


Deno.bench("min old (small)", { group: "array-utils.min" }, () => {
    minOld(smallArray);
});

Deno.bench("min new (large)", { group: "array-utils.min" }, () => {
    min(largeArray);
});

Deno.bench("min old (large)", { group: "array-utils.min" }, () => {
    minOld(largeArray);
});
