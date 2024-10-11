import { occurrences, occurrencesOld } from "./occurences.ts";

Deno.bench("new implementation", { group: "occurrences" }, () => {
    occurrences("I am the most expensive and the best IDE on the world", "the");
});
Deno.bench("oldImplementation", { group: "occurrences" }, () => {
    occurrencesOld("I am the most expensive and the best IDE on the world", "the");
});
