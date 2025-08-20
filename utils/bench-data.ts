// Create test arrays of different sizes
const smallArray = Array.from({ length: 10 }, (_, i) => i);
const mediumArray = Array.from({ length: 100 }, (_, i) => i);
const largeArray = Array.from({ length: 1_000 }, (_, i) => i);
const extraLargeArray = Array.from({ length: 10_000 }, (_, i) => i);
const hugeArray = Array.from({ length: 100_000 }, (_, i) => i);

export const BENCH_ARRAYS = {
    small: smallArray,
    medium: mediumArray,
    large: largeArray,
    extraLarge: extraLargeArray,
    huge: hugeArray,
};

export const BENCH_ARRAY_ENTRIES = Object.entries(BENCH_ARRAYS);
