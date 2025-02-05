import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { vector2ToDirection4 } from "./direction-utils.ts";
import { Direction4 } from "@g43/enums";

describe("Directions", () => {
    it("should test vector2ToDirection4", () => {
        expect(vector2ToDirection4({ x: 0, y: 1 })).toBe(Direction4.UP);
        expect(vector2ToDirection4({ x: 0, y: -1 })).toBe(Direction4.DOWN);
        expect(vector2ToDirection4({ x: 1, y: 0 })).toBe(Direction4.RIGHT);
        expect(vector2ToDirection4({ x: -1, y: 0 })).toBe(Direction4.LEFT);
    });
    it("should test vector2ToDirection4", () => {
        expect(vector2ToDirection4({ x: 1, y: 1.000001 })).toBe(Direction4.UP);
        expect(vector2ToDirection4({ x: 1, y: 0.999999 })).toBe(Direction4.RIGHT);
    });
});
