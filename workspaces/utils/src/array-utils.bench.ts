import { pairwiseArray, shuffle } from "./array-utils.ts";

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

// Create test arrays of different sizes
const smallArray = Array.from({ length: 10 }, (_, i) => i);
const mediumArray = Array.from({ length: 100 }, (_, i) => i);
const largeArray = Array.from({ length: 1000 }, (_, i) => i);

// Benchmark pairwiseArray implementations
Deno.bench("pairwiseArray old (small)", { group: "pairwiseArray" }, () => {
    pairwiseArrayOld(smallArray);
});

Deno.bench("pairwiseArray current (small)", { group: "pairwiseArray" }, () => {
    pairwiseArray(smallArray);
});

Deno.bench("pairwiseArray old (medium)", { group: "pairwiseArray" }, () => {
    pairwiseArrayOld(mediumArray);
});

Deno.bench("pairwiseArray current (medium)", { group: "pairwiseArray" }, () => {
    pairwiseArray(mediumArray);
});

Deno.bench("pairwiseArray old (large)", { group: "pairwiseArray" }, () => {
    pairwiseArrayOld(largeArray);
});

Deno.bench("pairwiseArray current (large)", { group: "pairwiseArray" }, () => {
    pairwiseArray(largeArray);
});

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

// Benchmark shuffle implementations
Deno.bench("shuffle old (small)", { group: "shuffle" }, () => {
    shuffleOld(smallArray);
});

Deno.bench("shuffle current (small)", { group: "shuffle" }, () => {
    shuffle(smallArray);
});

Deno.bench("shuffle old (medium)", { group: "shuffle" }, () => {
    shuffleOld(mediumArray);
});

Deno.bench("shuffle current (medium)", { group: "shuffle" }, () => {
    shuffle(mediumArray);
});

Deno.bench("shuffle old (large)", { group: "shuffle" }, () => {
    shuffleOld(largeArray);
});

Deno.bench("shuffle current (large)", { group: "shuffle" }, () => {
    shuffle(largeArray);
});
