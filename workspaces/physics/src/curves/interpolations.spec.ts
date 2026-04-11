import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { CubicBezier, QuadraticBezier } from "./interpolations.ts";

describe("CubicBezier", () => {
    it("returns p0 at t=0", () => {
        expect(CubicBezier(0, 10, 20, 30, 40)).toBeCloseTo(10);
    });

    it("returns p3 at t=1", () => {
        expect(CubicBezier(1, 10, 20, 30, 40)).toBeCloseTo(40);
    });

    it("returns midpoint value at t=0.5 for symmetric control points", () => {
        // For p0=0, p1=1, p2=1, p3=0 the value at t=0.5 is 0.75
        const result = CubicBezier(0.5, 0, 1, 1, 0);
        expect(result).toBeCloseTo(0.75);
    });

    it("handles all-zero control points", () => {
        expect(CubicBezier(0.5, 0, 0, 0, 0)).toBeCloseTo(0);
    });

    it("handles all-same control points", () => {
        expect(CubicBezier(0.3, 5, 5, 5, 5)).toBeCloseTo(5);
    });

    it("produces values between p0 and p3 for linear interpolation", () => {
        // p0=0, p1=0.333, p2=0.666, p3=1 approaches linear
        const result = CubicBezier(0.5, 0, 0.333, 0.666, 1);
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(1);
    });
});

describe("QuadraticBezier", () => {
    it("returns p0 at t=0", () => {
        expect(QuadraticBezier(0, 10, 20, 30)).toBeCloseTo(10);
    });

    it("returns p2 at t=1", () => {
        expect(QuadraticBezier(1, 10, 20, 30)).toBeCloseTo(30);
    });

    it("returns midpoint value at t=0.5 for symmetric control points", () => {
        // For p0=0, p1=1, p2=0: value = 0*(1-0.5)^2 + 2*1*(1-0.5)*0.5 + 0*0.5^2 = 0.5
        const result = QuadraticBezier(0.5, 0, 1, 0);
        expect(result).toBeCloseTo(0.5);
    });

    it("handles all-zero control points", () => {
        expect(QuadraticBezier(0.5, 0, 0, 0)).toBeCloseTo(0);
    });

    it("handles all-same control points", () => {
        expect(QuadraticBezier(0.7, 7, 7, 7)).toBeCloseTo(7);
    });

    it("is symmetric around t=0.5 for symmetric control points", () => {
        const a = QuadraticBezier(0.25, 0, 1, 0);
        const b = QuadraticBezier(0.75, 0, 1, 0);
        expect(a).toBeCloseTo(b);
    });
});
