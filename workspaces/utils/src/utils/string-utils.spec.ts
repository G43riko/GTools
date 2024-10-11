import { assert, assertEquals, assertThrows } from "@std/assert";
import { occurrences } from "./string-utils.ts";

Deno.test("StringUtils.occurrences", () => {
    assertEquals(occurrences("I am the most expensive and the best IDE on the world", "the"), 3);
});
