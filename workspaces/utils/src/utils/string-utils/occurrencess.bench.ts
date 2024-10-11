import { occurrences } from "./occurences.ts";

export function occurrencesOld(text: string, key: string): number {
    return (text.match(new RegExp(key, "g")) || []).length;
}

Deno.bench("new implementation", { group: "occurrences" }, () => {
    occurrences("I am the most expensive and the best IDE on the world", "the");
});
Deno.bench("oldImplementation", { group: "occurrences" }, () => {
    occurrencesOld("I am the most expensive and the best IDE on the world", "the");
});
