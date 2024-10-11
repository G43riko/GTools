import { assert, assertEquals, assertThrows } from "@std/assert";
import { occurrences } from "./string-utils.ts";

Deno.test("StringUtils.occurrences", () => {
    assertEquals(occurrences("I am the most expensive and the best IDE on the world", "the"), 3);
    /*
    // Fallowing tests should be checked in function jsdoc
    assertEquals(occurrences("foofoofoo", "bar"), 0);
    assertEquals(occurrences("foofoofoo", "foo"), 3);
    assertEquals(occurrences("foofoofoo", "foofoo"), 1);
    assertEquals(occurrences("foofoofoo", "foofoo", true), 2);
    */
});
