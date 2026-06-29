import { occurrences } from "./occurences.ts";

const shortText = "I am the most expensive and the best IDE on the world";
const longText = Array.from({ length: 5_000 }, () => "The quick brown fox jumps over the lazy dog").join(" ");
const overlappingText = "foofoofoofoofoofoofoofoofoo";
const key = "the";
const overlappingKey = "foo";

function countWithRegex(text: string, key: string): number {
    if (!key) return 0;
    const matches = text.match(new RegExp(key, "g"));
    return matches?.length ?? 0;
}

/**
 * New
 * @param text 
 * @param key 
 * @param overlapping 
 * @returns 
 */
function countWithIndexOf(text: string, key: string, overlapping = false): number {
    if (!key) return 0;

    let count = 0;
    let pos = 0;
    const step = overlapping ? 1 : key.length;

    while ((pos = text.indexOf(key, pos)) !== -1) {
        count++;
        pos += step;
    }

    return count;
}

Deno.bench({ name: "occurrences current", group: "occurrences (short)" }, () => {
    occurrences(shortText, key);
});

Deno.bench({ name: "occurrences regex", group: "occurrences (short)" }, () => {
    countWithRegex(shortText, key);
});

Deno.bench({ name: "occurrences indexOf", group: "occurrences (short)" }, () => {
    countWithIndexOf(shortText, key);
});


Deno.bench({ name: "occurrences current", group: "occurrences (long)" }, () => {
    occurrences(longText, key);
});

Deno.bench({ name: "occurrences regex", group: "occurrences (long)" }, () => {
    countWithRegex(longText, key);
});

Deno.bench({ name: "occurrences indexOf", group: "occurrences (long)" }, () => {
    countWithIndexOf(longText, key);
});


Deno.bench({ name: "occurrences current overlapping", group: "occurrences (overlapping)" }, () => {
    occurrences(overlappingText, overlappingKey, true);
});

Deno.bench({ name: "occurrences indexOf overlapping", group: "occurrences (overlapping)" }, () => {
    countWithIndexOf(overlappingText, overlappingKey, true);
});


Deno.bench({ name: "occurrences regex overlapping", group: "occurrences (overlapping)" }, () => {
    countWithRegex(overlappingText, overlappingKey);
});