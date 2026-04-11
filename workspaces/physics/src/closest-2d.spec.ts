import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { pointLine2dClosest } from "./closest-2d.ts";

describe("pointLine2dClosest", () => {
    it("projects a point perpendicularly onto a horizontal line", () => {
        const result = pointLine2dClosest(0, 0, 10, 0, 5, 5);
        expect(result.x).toBeCloseTo(5);
        expect(result.y).toBeCloseTo(0);
    });

    it("returns the start point when the projection is before the line", () => {
        const result = pointLine2dClosest(0, 0, 10, 0, -5, 5);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(0);
    });

    it("returns the end point when the projection is beyond the line end", () => {
        const result = pointLine2dClosest(0, 0, 10, 0, 15, 5);
        expect(result.x).toBeCloseTo(10);
        expect(result.y).toBeCloseTo(0);
    });

    it("returns the exact point when the point is on the line", () => {
        const result = pointLine2dClosest(0, 0, 10, 0, 5, 0);
        expect(result.x).toBeCloseTo(5);
        expect(result.y).toBeCloseTo(0);
    });

    it("projects a point onto a vertical line", () => {
        const result = pointLine2dClosest(0, 0, 0, 10, 5, 5);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(5);
    });

    it("projects a point onto a diagonal line", () => {
        // Line from (0,0) to (10,10), point at (0,10)
        const result = pointLine2dClosest(0, 0, 10, 10, 0, 10);
        expect(result.x).toBeCloseTo(5);
        expect(result.y).toBeCloseTo(5);
    });

    it("returns start for a point exactly at the line start", () => {
        const result = pointLine2dClosest(2, 3, 8, 7, 2, 3);
        expect(result.x).toBeCloseTo(2);
        expect(result.y).toBeCloseTo(3);
    });

    it("returns end for a point exactly at the line end", () => {
        const result = pointLine2dClosest(2, 3, 8, 7, 8, 7);
        expect(result.x).toBeCloseTo(8);
        expect(result.y).toBeCloseTo(7);
    });
});
