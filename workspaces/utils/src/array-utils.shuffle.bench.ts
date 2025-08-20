import { BENCH_ARRAY_ENTRIES } from "../../../utils/bench-data.ts";
import { shuffle } from "./array-utils.ts";

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

BENCH_ARRAY_ENTRIES.forEach(([name, array]) => {
    // Benchmark shuffle implementations
    Deno.bench(`shuffle old (${name})`, { group: "shuffle" }, () => {
        shuffleOld(array);
    });

    Deno.bench(`shuffle current (${name})`, { group: "shuffle" }, () => {
        shuffle(array);
    });
});

BENCH_ARRAY_ENTRIES.forEach(([name, array]) => {
    // Benchmark shuffle implementations
    Deno.bench(`shuffle old (${name})`, { group: `shuffle-${name}` }, () => {
        shuffleOld(array);
    });

    Deno.bench(`shuffle current (${name})`, { group: `shuffle-${name}` }, () => {
        shuffle(array);
    });
});
