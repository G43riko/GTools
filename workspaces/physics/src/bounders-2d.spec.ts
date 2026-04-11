import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { fixPosSize, fixSphere, fixXYWH } from "./bounders-2d.ts";
import { Circle } from "./objects/2d/circle.ts";

const bounds = {
    min: { x: 0, y: 0 },
    max: { x: 100, y: 100 },
};

describe("fixXYWH", () => {
    it("returns the original position when inside bounds", () => {
        const result = fixXYWH(bounds, { x: 50, y: 50, w: 10, h: 10 });
        expect(result.x).toBe(50);
        expect(result.y).toBe(50);
    });

    it("clamps x to min when object extends past left edge", () => {
        const result = fixXYWH(bounds, { x: -5, y: 50, w: 10, h: 10 });
        expect(result.x).toBe(0);
    });

    it("clamps x so object fits within right edge", () => {
        const result = fixXYWH(bounds, { x: 95, y: 50, w: 10, h: 10 });
        expect(result.x).toBe(90);
    });

    it("clamps y to min when object extends past top edge", () => {
        const result = fixXYWH(bounds, { x: 50, y: -5, w: 10, h: 10 });
        expect(result.y).toBe(0);
    });

    it("clamps y so object fits within bottom edge", () => {
        const result = fixXYWH(bounds, { x: 50, y: 95, w: 10, h: 10 });
        expect(result.y).toBe(90);
    });

    it("clamps both axes simultaneously", () => {
        const result = fixXYWH(bounds, { x: -5, y: -5, w: 10, h: 10 });
        expect(result.x).toBe(0);
        expect(result.y).toBe(0);
    });
});

describe("fixPosSize", () => {
    it("returns the original position when inside bounds", () => {
        const result = fixPosSize(bounds, { position: { x: 50, y: 50 }, size: { x: 10, y: 10 } });
        expect(result.x).toBe(50);
        expect(result.y).toBe(50);
    });

    it("clamps position.x to min when it extends past left edge", () => {
        const result = fixPosSize(bounds, { position: { x: -5, y: 50 }, size: { x: 10, y: 10 } });
        expect(result.x).toBe(0);
    });

    it("clamps position.x so object fits within right edge", () => {
        const result = fixPosSize(bounds, { position: { x: 95, y: 50 }, size: { x: 10, y: 10 } });
        expect(result.x).toBe(90);
    });

    it("clamps position.y to min when it extends past top edge", () => {
        const result = fixPosSize(bounds, { position: { x: 50, y: -5 }, size: { x: 10, y: 10 } });
        expect(result.y).toBe(0);
    });

    it("clamps position.y so object fits within bottom edge", () => {
        const result = fixPosSize(bounds, { position: { x: 50, y: 95 }, size: { x: 10, y: 10 } });
        expect(result.y).toBe(90);
    });
});

describe("fixSphere", () => {
    it("returns the original center when inside bounds", () => {
        const circle = new Circle(5, { x: 50, y: 50 });
        const result = fixSphere(bounds, circle);
        expect(result.x).toBe(50);
        expect(result.y).toBe(50);
    });

    it("clamps center.x when the sphere extends past the left edge", () => {
        const circle = new Circle(10, { x: 3, y: 50 });
        const result = fixSphere(bounds, circle);
        // halfRadius = 5, center.x - halfRadius = -2 < 0 => result.x = 0 + 5 = 5
        expect(result.x).toBe(5);
    });

    it("clamps center.x when the sphere extends past the right edge", () => {
        const circle = new Circle(10, { x: 97, y: 50 });
        const result = fixSphere(bounds, circle);
        // halfRadius = 5, center.x + halfRadius = 102 > 100 => result.x = 100 - 5 = 95
        expect(result.x).toBe(95);
    });

    it("clamps center.y when the sphere extends past the top edge", () => {
        const circle = new Circle(10, { x: 50, y: 3 });
        const result = fixSphere(bounds, circle);
        expect(result.y).toBe(5);
    });

    it("clamps center.y when the sphere extends past the bottom edge", () => {
        const circle = new Circle(10, { x: 50, y: 97 });
        const result = fixSphere(bounds, circle);
        expect(result.y).toBe(95);
    });
});
