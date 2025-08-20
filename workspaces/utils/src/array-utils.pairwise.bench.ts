import { BENCH_ARRAY_ENTRIES } from "../../../utils/bench-data.ts";
import {  pairwiseArray} from "./array-utils.ts";

// Old implementation of pairwiseArray for benchmarking
function pairwiseArrayOld<T>(arr: ArrayLike<T>): [T, T][] {
    if (arr.length < 2) {
        return [];
    }
    if (arr.length % 2 !== 0) {
        throw new Error("Array length must be even");
    }

    const result = new Array<[T, T]>();

    for (let i = 0; i < arr.length;) {
        result.push([arr[i++], arr[i++]]);
    }

    return result;
}

BENCH_ARRAY_ENTRIES.forEach(([name, array]) => {
    // Benchmark pairwiseArray implementations
    Deno.bench(`pairwiseArray old (${name})`, { group: `pairwiseArray-${name}` }, () => {
        pairwiseArrayOld(array);
    });

    Deno.bench(`pairwiseArray current (${name})`, { group: `pairwiseArray-${name}` }, () => {
        pairwiseArray(array);
    });

});
