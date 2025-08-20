import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { Color } from "./color.ts";
import { Range } from "./range.ts";

function within(v: number, min: number, max: number) {
    expect(v).toBeGreaterThanOrEqual(Math.min(min, max));
    expect(v).toBeLessThanOrEqual(Math.max(min, max));
}

describe("Range", () => {
    it("constructor sets min/max and defaults max to min", () => {
        const r1 = new Range(5);
        expect(r1.min).toBe(5);
        expect(r1.max).toBe(5);

        const r2 = new Range(1, 3);
        expect(r2.min).toBe(1);
        expect(r2.max).toBe(3);
    });

    describe("parse", () => {
        it("parses number, tuple, and object forms", () => {
            const a = Range.parse(5);
            expect(a.min).toBe(5);
            expect(a.max).toBe(5);

            const b = Range.parse([1, 4] as const);
            expect(b.min).toBe(1);
            expect(b.max).toBe(4);

            const c = Range.parse({ min: 2, max: 6 } as const);
            expect(c.min).toBe(2);
            expect(c.max).toBe(6);
        });

        it("throws on unsupported input", () => {
            expect(() => Range.parse(undefined as unknown as any)).toThrow();
        });
    });

    it("createFromRandomness builds centered range", () => {
        const r = Range.createFromRandomness(10, 2);
        expect(r.min).toBe(8);
        expect(r.max).toBe(12);
    });

    describe("randomFloat/randomInt", () => {
        it("returns values within bounds", () => {
            const r = new Range(1, 3);
            for (let i = 0; i < 200; i++) {
                const f = Range.randomFloat(r);
                within(f, r.min, r.max);
                const n = Range.randomInt(r);
                within(n, r.min, r.max);
                expect(Number.isInteger(n)).toBe(true);
            }
        });
    });

    describe("randomVector<i/f>", () => {
        it("vector2 in range", () => {
            const r2i = new Range({ x: -2, y: 5 }, { x: 3, y: 7 });
            const r2f = new Range({ x: -2.5, y: 5.1 }, { x: 3.2, y: 7.7 });
            for (let i = 0; i < 50; i++) {
                const vi = Range.randomVector2i(r2i);
                within(vi.x, -2, 3);
                within(vi.y, 5, 7);

                const vf = Range.randomVector2f(r2f);
                within(vf.x, -2.5, 3.2);
                within(vf.y, 5.1, 7.7);
            }
        });

        it("vector3 in range", () => {
            const r3i = new Range({ x: 0, y: 1, z: 2 }, { x: 5, y: 6, z: 7 });
            const r3f = new Range({ x: 0.1, y: 1.2, z: 2.3 }, { x: 5.4, y: 6.5, z: 7.6 });
            for (let i = 0; i < 50; i++) {
                const vi = Range.randomVector3i(r3i);
                within(vi.x, 0, 5);
                within(vi.y, 1, 6);
                within(vi.z, 2, 7);

                const vf = Range.randomVector3f(r3f);
                within(vf.x, 0.1, 5.4);
                within(vf.y, 1.2, 6.5);
                within(vf.z, 2.3, 7.6);
            }
        });

        it("vector4 in range", () => {
            const r4i = new Range({ x: -1, y: 0, z: 1, w: 2 }, { x: 3, y: 4, z: 5, w: 6 });
            const r4f = new Range({ x: -1.1, y: 0.2, z: 1.3, w: 2.4 }, { x: 3.5, y: 4.6, z: 5.7, w: 6.8 });
            for (let i = 0; i < 50; i++) {
                const vi = Range.randomVector4i(r4i);
                within(vi.x, -1, 3);
                within(vi.y, 0, 4);
                within(vi.z, 1, 5);
                within(vi.w, 2, 6);

                const vf = Range.randomVector4f(r4f);
                within(vf.x, -1.1, 3.5);
                within(vf.y, 0.2, 4.6);
                within(vf.z, 1.3, 5.7);
                within(vf.w, 2.4, 6.8);
            }
        });
    });

    describe("randomColorF / randomColorI", () => {
        it("components within color bounds", () => {
            const min = new Color(10, 20, 30, 40);
            const max = new Color(50, 60, 70, 80);
            const rr = new Range(min, max);
            for (let i = 0; i < 50; i++) {
                const cf = Range.randomColorF(rr);
                within(cf.red, 10, 50);
                within(cf.green, 20, 60);
                within(cf.blue, 30, 70);
                within(cf.alpha, 40, 80);

                const ci = Range.randomColorI(rr);
                within(ci.red, 10, 50);
                within(ci.green, 20, 60);
                within(ci.blue, 30, 70);
                within(ci.alpha, 40, 80);
                expect(Number.isInteger(ci.red)).toBe(true);
                expect(Number.isInteger(ci.green)).toBe(true);
                expect(Number.isInteger(ci.blue)).toBe(true);
                expect(Number.isInteger(ci.alpha)).toBe(true);
            }
        });
    });

    it("map transforms endpoints", () => {
        const r = new Range(2, 4).map((v) => v * 10);
        expect(r.min).toBe(20);
        expect(r.max).toBe(40);
    });
});
