import { min, pairwiseArray, shuffle } from "./array-utils.ts";

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

export function minOld(array: readonly number[]): number {
    if (array.length === 0) {
        return NaN;
    }

    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Old implementation of shuffle for benchmarking
function shuffleOld<T>(array: readonly T[]): T[] {
    const result = [...array];
    let currentIndex = result.length;

    // While there remain elements to shuffle
    while (currentIndex > 0) {
        // Pick a remaining element
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
    }

    return result;
}

// Create test arrays of different sizes
const smallArray = Array.from({ length: 10 }, (_, i) => i);
const mediumArray = Array.from({ length: 100 }, (_, i) => i);
const largeArray = Array.from({ length: 1000 }, (_, i) => i);

const arrays = {
    small: smallArray,
    medium: mediumArray,
    large: largeArray,
};
Object.entries(arrays).forEach(([name, array]) => {
    // Benchmark pairwiseArray implementations
    Deno.bench(`min old (${name})`, { group: `min-${name}` }, () => {
        minOld(array);
    });

    Deno.bench(`min current (${name})`, { group: `min-${name}` }, () => {
        min(array);
    });
    Deno.bench(`Math.min (${name})`, { group: `min-${name}` }, () => {
        Math.min(...array);
    });

    // Benchmark pairwiseArray implementations
    Deno.bench(`pairwiseArray old (${name})`, { group: `pairwiseArray-${name}` }, () => {
        pairwiseArrayOld(array);
    });

    Deno.bench(`pairwiseArray current (${name})`, { group: `pairwiseArray-${name}` }, () => {
        pairwiseArray(array);
    });

    // Benchmark shuffle implementations
    Deno.bench(`shuffle old (${name})`, { group: `shuffle-${name}` }, () => {
        shuffleOld(array);
    });

    Deno.bench(`shuffle current (${name})`, { group: `shuffle-${name}` }, () => {
        shuffle(array);
    });
});
