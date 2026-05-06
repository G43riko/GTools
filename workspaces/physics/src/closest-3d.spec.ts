import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { getClosestPointOnLine } from "./closest-3d.ts";

describe("getClosestPointOnLine", () => {
    it("projects a point onto a line in the XY plane", () => {
        const result = getClosestPointOnLine(0, 0, 0, 10, 0, 0, 5, 5, 0);
        expect(result.x).toBeCloseTo(5);
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(0);
    });

    it("returns the start point when projection is before the line start", () => {
        const result = getClosestPointOnLine(0, 0, 0, 10, 0, 0, -5, 5, 0);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(0);
    });

    it("returns the end point when projection is beyond the line end", () => {
        const result = getClosestPointOnLine(0, 0, 0, 10, 0, 0, 15, 5, 0);
        expect(result.x).toBeCloseTo(10);
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(0);
    });

    it("projects a point onto a vertical line along Z axis", () => {
        const result = getClosestPointOnLine(0, 0, 0, 0, 0, 10, 5, 0, 5);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(5);
    });

    it("projects a point onto a diagonal 3D line", () => {
        // Line from (0,0,0) to (10,10,10), point at (0,0,10)
        const result = getClosestPointOnLine(0, 0, 0, 10, 10, 10, 0, 0, 10);
        expect(result.x).toBeCloseTo(10 / 3);
        expect(result.y).toBeCloseTo(10 / 3);
        expect(result.z).toBeCloseTo(10 / 3);
    });

    it("returns the point itself when the point is on the line", () => {
        const result = getClosestPointOnLine(0, 0, 0, 10, 0, 0, 7, 0, 0);
        expect(result.x).toBeCloseTo(7);
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(0);
    });

    it("returns start for a point exactly at the line start", () => {
        const result = getClosestPointOnLine(1, 2, 3, 7, 8, 9, 1, 2, 3);
        expect(result.x).toBeCloseTo(1);
        expect(result.y).toBeCloseTo(2);
        expect(result.z).toBeCloseTo(3);
    });
});
