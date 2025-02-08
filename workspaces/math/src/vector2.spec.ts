import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { Vector2 } from "./vector2.ts";

const vec0_0 = new Vector2();
const vec5_0 = new Vector2(5, 0);
const vec0_5 = new Vector2(0, 5);
/*
const vec5_5 = new Vector2(5, 5);
const vecm5_0 = new Vector2(-5, 0);
const vec0_m5 = new Vector2(0, -5);
const vecm5_m5 = new Vector2(-5, -5);
*/
describe("Vector2", () => {
    it("min and max", () => {
        assertEquals(5, vec5_0.max);
        assertEquals(0, vec5_0.min);
    });

    it("normalize", () => {
        assertEquals(vec5_0.normalize().toString(), "[1, 0]");
        assertEquals(vec0_5.normalize().toString(), "[0, 1]");
    });
});
