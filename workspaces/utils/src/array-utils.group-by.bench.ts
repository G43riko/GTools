import { groupBy } from "./array-utils.ts";

function groupByOld<Value, Key extends string | number | symbol>(
    array: readonly Value[],
    iteratee: (value: Value) => Key,
): Record<Key, Value[]> {
    return array.reduce((result, value) => {
        const key = iteratee(value);
        (result as Record<string | number | symbol, Value[]>)[key] ??= [];
        (result as Record<string | number | symbol, Value[]>)[key].push(value);
        return result;
    }, {} as Record<Key, Value[]>);
}

// Datasets
const smallNumbers = (() => {
    const arr = new Array<number>(20_000);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() * 1e6) | 0;
    return arr as readonly number[];
})();

const largeNumbers = (() => {
    const arr = new Array<number>(200_000);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() * 1e9) | 0;
    return arr as readonly number[];
})();

const modIteratee = (v: number) => v % 100;

Deno.bench("groupBy new (small)", { group: "array-utils.groupBy" }, () => {
    groupBy(smallNumbers, modIteratee);
});

Deno.bench("groupBy old (small)", { group: "array-utils.groupBy" }, () => {
    groupByOld(smallNumbers, modIteratee);
});

Deno.bench("groupBy new (large)", { group: "array-utils.groupBy" }, () => {
    groupBy(largeNumbers, modIteratee);
});

Deno.bench("groupBy old (large)", { group: "array-utils.groupBy" }, () => {
    groupByOld(largeNumbers, modIteratee);
});
