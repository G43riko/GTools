import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { Path2D } from "./path-2d.ts";

describe("Path2D", () => {
    // Sample points for testing
    const points = [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
        { x: 20, y: 0 },
        { x: 30, y: 10 }
    ];

    describe("constructor", () => {
        it("should create a path with the specified points", () => {
            const path = new Path2D(points);
            expect(path.length).toBe(4);
        });

        it("should throw an error when creating a path with less than 2 points", () => {
            expect(() => new Path2D([{ x: 0, y: 0 }])).toThrow("Cannot create path with less than 2 points");
        });
    });

    describe("getFirstN", () => {
        it("should return the first N points", () => {
            const path = new Path2D(points);
            const firstTwo = path.getFirstN(2);
            expect(firstTwo.length).toBe(2);
            expect(firstTwo[0]).toEqual({ x: 0, y: 0 });
            expect(firstTwo[1]).toEqual({ x: 10, y: 10 });
        });

        it("should return all points if N is greater than path length", () => {
            const path = new Path2D(points);
            const allPoints = path.getFirstN(10);
            expect(allPoints.length).toBe(4);
            expect(allPoints).toEqual(points);
        });

        it("should return empty array if N is 0", () => {
            const path = new Path2D(points);
            const noPoints = path.getFirstN(0);
            expect(noPoints.length).toBe(0);
        });
    });

    describe("getLastN", () => {
        it("should return the last N points", () => {
            const path = new Path2D(points);
            const lastTwo = path.getLastN(2);
            expect(lastTwo.length).toBe(2);
            expect(lastTwo[0]).toEqual({ x: 20, y: 0 });
            expect(lastTwo[1]).toEqual({ x: 30, y: 10 });
        });

        it("should return all points if N is greater than path length", () => {
            const path = new Path2D(points);
            const allPoints = path.getLastN(10);
            expect(allPoints.length).toBe(4);
            expect(allPoints).toEqual(points);
        });

        it("should return empty array if N is 0", () => {
            const path = new Path2D(points);
            const noPoints = path.getLastN(0);
            expect(noPoints.length).toBe(0);
        });
    });

    describe("getFrom", () => {
        it("should return all points from the specified index", () => {
            const path = new Path2D(points);
            const fromSecond = path.getFrom(1);
            expect(fromSecond.length).toBe(3);
            expect(fromSecond[0]).toEqual({ x: 10, y: 10 });
            expect(fromSecond[1]).toEqual({ x: 20, y: 0 });
            expect(fromSecond[2]).toEqual({ x: 30, y: 10 });
        });

        it("should return empty array if index is beyond path length", () => {
            const path = new Path2D(points);
            const noPoints = path.getFrom(10);
            expect(noPoints.length).toBe(0);
        });

        it("should return all points if index is 0", () => {
            const path = new Path2D(points);
            const allPoints = path.getFrom(0);
            expect(allPoints.length).toBe(4);
            expect(allPoints).toEqual(points);
        });
    });

    describe("length", () => {
        it("should return the number of points in the path", () => {
            const path = new Path2D(points);
            expect(path.length).toBe(4);
        });
    });

    describe("first", () => {
        it("should return the first point in the path", () => {
            const path = new Path2D(points);
            expect(path.first).toEqual({ x: 0, y: 0 });
        });
    });

    describe("last", () => {
        it("should return the last point in the path", () => {
            const path = new Path2D(points);
            expect(path.last).toEqual({ x: 30, y: 10 });
        });
    });

    describe("getPoint", () => {
        it("should return the point at the specified index", () => {
            const path = new Path2D(points);
            expect(path.getPoint(0)).toEqual({ x: 0, y: 0 });
            expect(path.getPoint(1)).toEqual({ x: 10, y: 10 });
            expect(path.getPoint(2)).toEqual({ x: 20, y: 0 });
            expect(path.getPoint(3)).toEqual({ x: 30, y: 10 });
        });

        it("should return undefined for an index outside the path bounds", () => {
            const path = new Path2D(points);
            expect(path.getPoint(10)).toBeUndefined();
        });
    });
});
