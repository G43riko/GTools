import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing";
import { Vector2 } from "./vector2.ts";

const vec0_0 = new Vector2();
const vec5_0 = new Vector2(5, 0);
const vec0_5 = new Vector2(0, 5);
const vec5_5 = new Vector2(5, 5);
const vecm5_0 = new Vector2(-5, 0);
const vec0_m5 = new Vector2(0, -5);
const vecm5_m5 = new Vector2(-5, -5);
describe("Vector2", () => {
    it("lerp", () => {
        assertEquals({ ...Vector2.lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 0) }, { x: 0, y: 0 });
        assertEquals({ ...Vector2.lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.25) }, { x: 2.5, y: 2.5 });
        assertEquals({ ...Vector2.lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.5) }, { x: 5, y: 5 });
        assertEquals({ ...Vector2.lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.75) }, { x: 7.5, y: 7.5 });
        assertEquals({ ...Vector2.lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 1) }, { x: 10, y: 10 });
    });
    it("min and max", () => {
        assertEquals(5, vec5_0.max);
        assertEquals(0, vec5_0.min);
    });

    it("avg", () => {
        assertEquals(vec5_0.avg, 2.5);
        assertEquals(vec0_5.avg, 2.5);
    });

    it("dist", () => {
        assertEquals(vec0_0.dist(vec5_0), 5);
        assertEquals(vec5_0.dist(vec0_0), 5);
    });

    it("sqrtDist", () => {
        assertEquals(Vector2.sqrtDist(vec0_0, vec5_0), 25);
        assertEquals(Vector2.sqrtDist(vec5_0, vec0_0), 25);
    });
    /*
    it("angle", () => {
        assertEquals(Math.abs(vec5_0.angle(vec0_5) - Math.PI / 4), 0);
        assertEquals(Math.abs(vec0_5.angle(vec5_0) - Math.PI / 4), 0);
    });

    it("angle", () => {
        assertEquals(Math.abs(Vector2.angle(vec5_0, vec0_5) - Math.PI / 4), 0);
        assertEquals(Math.abs(Vector2.angle(vec0_5, vec5_0) - Math.PI / 4), 0);
    });
    */
    it("normalize", () => {
        assertEquals(vec5_0.normalize().toString(), "[1, 0]");
        assertEquals(vec0_5.normalize().toString(), "[0, 1]");
    });
});
