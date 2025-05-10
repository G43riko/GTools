import { Vector2 } from "@g43/math";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import type { RayCast2D, RaycastResult } from "../objects/2d/ray-2d.ts";
import { AABB2 } from "./aabb2.ts";

describe("AABB2", () => {
    describe("construction", () => {
        it.skip("should create from position and size", () => {
            const aabb = AABB2.fromPosAndSize({ x: 10, y: 20 }, { x: 30, y: 40 });
            expect(aabb.left).toBe(10);
            expect(aabb.top).toBe(20);
            expect(aabb.right).toBe(40); // 10 + 30
            expect(aabb.bottom).toBe(60); // 20 + 40
        });

        it.skip("should create from center and size", () => {
            const aabb = AABB2.fromCenterAndSize({ x: 50, y: 60 }, { x: 30, y: 40 });
            expect(aabb.left).toBe(35); // 50 - 30/2
            expect(aabb.top).toBe(40); // 60 - 40/2
            expect(aabb.right).toBe(65); // 50 + 30/2
            expect(aabb.bottom).toBe(80); // 60 + 40/2
        });

        it("should create from dimensions", () => {
            const aabb = AABB2.fromDimension(30, 40);
            expect(aabb.left).toBe(-15); // -30 * 0.5
            expect(aabb.top).toBe(-20); // -40 * 0.5
            expect(aabb.right).toBe(15); // 30 - 30 * 0.5
            expect(aabb.bottom).toBe(20); // 40 - 40 * 0.5
        });

        it("should create from dimensions with custom anchor and position", () => {
            const aabb = AABB2.fromDimension(30, 40, { x: 0.2, y: 0.3 }, { x: 5, y: 10 });
            expect(aabb.left).toBe(-1); // -30 * 0.2 + 5
            expect(aabb.top).toBe(-2); // -40 * 0.3 + 10
            expect(aabb.right).toBe(29); // 30 - 30 * 0.2 + 5
            expect(aabb.bottom).toBe(38); // 40 - 40 * 0.3 + 10
        });

        it("should create from points", () => {
            const aabb = AABB2.fromPoints([
                { x: 10, y: 20 },
                { x: 30, y: 15 },
                { x: 5, y: 25 },
                { x: 15, y: 35 },
            ]);
            expect(aabb.left).toBe(5);
            expect(aabb.top).toBe(15);
            expect(aabb.right).toBe(30);
            expect(aabb.bottom).toBe(35);
        });
    });

    describe("properties", () => {
        it("should calculate width and height", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            expect(aabb.width).toBe(30); // 40 - 10
            expect(aabb.height).toBe(40); // 60 - 20
        });

        it("should get center", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const center = aabb.getCenter();
            expect(center.x).toBe(25); // (10 + 40) / 2
            expect(center.y).toBe(40); // (20 + 60) / 2
        });

        it("should get size", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const size = aabb.getSize();
            expect(size.x).toBe(30); // 40 - 10
            expect(size.y).toBe(40); // 60 - 20
        });

        it("should get volume (area in 2D)", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            expect(aabb.getVolume()).toBe(1200); // 30 * 40
        });

        it("should get position", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const pos = aabb.getPosition();
            expect(pos.x).toBe(10);
            expect(pos.y).toBe(20);
        });

        it("should get min/max", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const minMax = aabb.getMinMax();
            expect(minMax.min.x).toBe(10);
            expect(minMax.min.y).toBe(20);
            expect(minMax.max.x).toBe(40);
            expect(minMax.max.y).toBe(60);
        });

        it("should get points", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const points = aabb.getPoints();
            expect(points.length).toBe(4);
            expect(points[0]).toEqual({ x: 10, y: 20 }); // top-left
            expect(points[1]).toEqual({ x: 40, y: 20 }); // top-right
            expect(points[2]).toEqual({ x: 40, y: 60 }); // bottom-right
            expect(points[3]).toEqual({ x: 10, y: 60 }); // bottom-left
        });
    });

    describe("transformations", () => {
        it("should translate by x and y", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            aabb.translate(5, 10);
            expect(aabb.left).toBe(15);
            expect(aabb.top).toBe(30);
            expect(aabb.right).toBe(45);
            expect(aabb.bottom).toBe(70);
        });

        it("should translate by vector", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            aabb.translateVec({ x: 5, y: 10 });
            expect(aabb.left).toBe(15);
            expect(aabb.top).toBe(30);
            expect(aabb.right).toBe(45);
            expect(aabb.bottom).toBe(70);
        });

        it("should get translated copy", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const translated = aabb.getTranslated(5, 10);
            expect(translated.left).toBe(15);
            expect(translated.top).toBe(30);
            expect(translated.right).toBe(45);
            expect(translated.bottom).toBe(70);
            // Original should be unchanged
            expect(aabb.left).toBe(10);
            expect(aabb.top).toBe(20);
        });

        it("should scale", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            aabb.scale(2, 3);
            expect(aabb.left).toBe(20);
            expect(aabb.top).toBe(60);
            expect(aabb.right).toBe(80);
            expect(aabb.bottom).toBe(180);
        });

        it("should get scaled copy", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const scaled = aabb.getScaled(2, 3);
            expect(scaled.left).toBe(20);
            expect(scaled.top).toBe(60);
            expect(scaled.right).toBe(80);
            expect(scaled.bottom).toBe(180);
            // Original should be unchanged
            expect(aabb.left).toBe(10);
            expect(aabb.top).toBe(20);
        });

        it("should rotate around origin", () => {
            const aabb = new AABB2(-10, -10, 10, 10);
            aabb.rotate(Math.PI / 2); // 90 degrees
            // After 90 degree rotation, the corners should be approximately at:
            // (-10, -10) -> (-10, 10)
            // (10, -10) -> (-10, -10)
            // (10, 10) -> (10, -10)
            // (-10, 10) -> (10, 10)
            expect(aabb.left).toBeCloseTo(-10);
            expect(aabb.top).toBeCloseTo(-10);
            expect(aabb.right).toBeCloseTo(10);
            expect(aabb.bottom).toBeCloseTo(10);
        });

        it("should get rotated copy", () => {
            const aabb = new AABB2(-10, -10, 10, 10);
            const rotated = aabb.getRotated(Math.PI / 2); // 90 degrees
            expect(rotated.left).toBeCloseTo(-10);
            expect(rotated.top).toBeCloseTo(-10);
            expect(rotated.right).toBeCloseTo(10);
            expect(rotated.bottom).toBeCloseTo(10);
            // Original should be unchanged
            expect(aabb.left).toBe(-10);
            expect(aabb.top).toBe(-10);
        });

        it("should move center to specified point", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            aabb.moveCenterTo({ x: 100, y: 200 });
            // Original center is (25, 40)
            // Offset is (100 - 25, 200 - 40) = (75, 160)
            expect(aabb.left).toBe(85); // 10 + 75
            expect(aabb.top).toBe(180); // 20 + 160
            expect(aabb.right).toBe(115); // 40 + 75
            expect(aabb.bottom).toBe(220); // 60 + 160
        });
    });

    describe("expansion", () => {
        it("should expand by scalar", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            aabb.expandByScalar(5);
            expect(aabb.left).toBe(5);
            expect(aabb.top).toBe(15);
            expect(aabb.right).toBe(45);
            expect(aabb.bottom).toBe(65);
        });

        it("should expand by vector", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            aabb.expandByVector({ x: 5, y: 10 });
            expect(aabb.left).toBe(5);
            expect(aabb.top).toBe(10);
            expect(aabb.right).toBe(45);
            expect(aabb.bottom).toBe(70);
        });

        it("should expand by point", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            aabb.expandByPoint({ x: 5, y: 70 });
            expect(aabb.left).toBe(5);
            expect(aabb.top).toBe(20);
            expect(aabb.right).toBe(40);
            expect(aabb.bottom).toBe(70);
        });

        it("should expand by another AABB", () => {
            const aabb1 = new AABB2(10, 20, 40, 60);
            const aabb2 = new AABB2(5, 15, 45, 65);
            aabb1.expandByAABB(aabb2);
            expect(aabb1.left).toBe(5);
            expect(aabb1.top).toBe(15);
            expect(aabb1.right).toBe(45);
            expect(aabb1.bottom).toBe(65);
        });
    });

    describe("combination", () => {
        it("should combine with another AABB", () => {
            const aabb1 = new AABB2(10, 20, 40, 60);
            const aabb2 = new AABB2(5, 15, 45, 65);
            const combined = aabb1.combine(aabb2);
            expect(combined.left).toBe(5);
            expect(combined.top).toBe(15);
            expect(combined.right).toBe(45);
            expect(combined.bottom).toBe(65);
            // Original should be unchanged
            expect(aabb1.left).toBe(10);
            expect(aabb1.top).toBe(20);
        });
    });

    describe("ray casting", () => {
        it("should detect ray intersection", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const result = {
                fraction: 0,
                normal: new Vector2(),
            } as RaycastResult;
            const ray = {
                from: { x: 0, y: 30 },
                direction: { x: 1, y: 0 },
            } as RayCast2D;
            const hit = aabb.rayCast(result, ray);
            expect(hit).toBeTruthy();
            expect(result.fraction).toBeCloseTo(10); // Ray hits at x=10
            expect(result.normal.x).toBeCloseTo(-1); // Normal points left
            expect(result.normal.y).toBeCloseTo(0);
        });

        it("should not detect ray intersection when ray misses", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const result = {
                fraction: 0,
                normal: new Vector2(),
            } as RaycastResult;
            const ray = {
                from: { x: 0, y: 10 },
                direction: { x: 1, y: 0 },
            } as RayCast2D;
            const hit = aabb.rayCast(result, ray);
            expect(hit).toBeFalsy();
        });

        it("should not detect ray intersection when ray starts inside box", () => {
            const aabb = new AABB2(10, 20, 40, 60);
            const result = {
                fraction: 0,
                normal: new Vector2(),
            } as RaycastResult;
            const ray = {
                from: { x: 20, y: 30 },
                direction: { x: 1, y: 0 },
            } as RayCast2D;
            const hit = aabb.rayCast(result, ray);
            expect(hit).toBeFalsy();
        });
    });
});
