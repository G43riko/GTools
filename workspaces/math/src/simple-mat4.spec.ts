import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { SimpleMat4 } from "./simple-mat4.ts";

const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

describe("SimpleMat4", () => {
    describe("create", () => {
        it("creates an identity matrix", () => {
            const mat = SimpleMat4.create();
            expect(mat.equalsArray(IDENTITY)).toBe(true);
        });
    });

    describe("equals / equalsArray", () => {
        it("returns true for two identity matrices", () => {
            expect(SimpleMat4.create().equals(SimpleMat4.create())).toBe(true);
        });

        it("returns false when comparing with null/undefined", () => {
            expect(SimpleMat4.create().equals(null as unknown as SimpleMat4)).toBe(false);
        });

        it("returns false for an empty array", () => {
            expect(SimpleMat4.create().equalsArray([])).toBe(false);
        });

        it("returns false for different matrices", () => {
            const a = SimpleMat4.create();
            a.setItem(0, 0, 99);
            expect(a.equals(SimpleMat4.create())).toBe(false);
        });
    });

    describe("get / setItem", () => {
        it("reads the same value that was written", () => {
            const mat = SimpleMat4.create();
            mat.setItem(2, 3, 42);
            expect(mat.get(2, 3)).toBe(42);
        });

        it("reads diagonal identity values correctly", () => {
            const mat = SimpleMat4.create();
            expect(mat.get(0, 0)).toBe(1);
            expect(mat.get(1, 1)).toBe(1);
            expect(mat.get(2, 2)).toBe(1);
            expect(mat.get(3, 3)).toBe(1);
        });
    });

    describe("set", () => {
        it("copies all elements from another matrix", () => {
            const src = SimpleMat4.create();
            src.setItem(0, 0, 7);
            const dst = SimpleMat4.create();
            dst.set(src);
            expect(dst.get(0, 0)).toBe(7);
        });
    });

    describe("setIdentity", () => {
        it("resets a modified matrix back to identity", () => {
            const mat = SimpleMat4.create();
            mat.setItem(1, 2, 99);
            SimpleMat4.setIdentity(mat);
            expect(mat.equalsArray(IDENTITY)).toBe(true);
        });
    });

    describe("fromTranslation", () => {
        it("places translation values in the last column", () => {
            const mat = SimpleMat4.fromTranslation({ x: 3, y: 5, z: 7 });
            const t = mat.getTranslation();
            expect(t.x).toBeCloseTo(3);
            expect(t.y).toBeCloseTo(5);
            expect(t.z).toBeCloseTo(7);
        });

        it("with zero translation equals identity", () => {
            const mat = SimpleMat4.fromTranslation({ x: 0, y: 0, z: 0 });
            expect(mat.equalsArray(IDENTITY)).toBe(true);
        });
    });

    describe("getTranslation", () => {
        it("fills an output object when provided", () => {
            const mat = SimpleMat4.fromTranslation({ x: 1, y: 2, z: 3 });
            const out = { x: 0, y: 0, z: 0 };
            mat.getTranslation(out);
            expect(out.x).toBeCloseTo(1);
            expect(out.y).toBeCloseTo(2);
            expect(out.z).toBeCloseTo(3);
        });
    });

    describe("fromScale", () => {
        it("sets the diagonal scale values", () => {
            const mat = SimpleMat4.fromScale({ x: 2, y: 3, z: 4 });
            expect(mat.data[0]).toBe(2);
            expect(mat.data[5]).toBe(3);
            expect(mat.data[10]).toBe(4);
        });

        it("with uniform scale (1,1,1) equals identity", () => {
            const mat = SimpleMat4.fromScale({ x: 1, y: 1, z: 1 });
            expect(mat.equalsArray(IDENTITY)).toBe(true);
        });
    });

    describe("getScaling", () => {
        it("returns scale from a scale matrix", () => {
            const mat = SimpleMat4.fromScale({ x: 2, y: 3, z: 4 });
            const s = mat.getScaling();
            expect(s.x).toBeCloseTo(2);
            expect(s.y).toBeCloseTo(3);
            expect(s.z).toBeCloseTo(4);
        });
    });

    describe("getScale", () => {
        it("returns diagonal scale values", () => {
            const mat = SimpleMat4.fromScale({ x: 5, y: 6, z: 7 });
            const s = mat.getScale();
            expect(s.x).toBe(5);
            expect(s.y).toBe(6);
            expect(s.z).toBe(7);
        });
    });

    describe("scale (instance method)", () => {
        it("scales the matrix components", () => {
            const mat = SimpleMat4.create();
            mat.scale(2, 3, 4);
            expect(mat.data[0]).toBeCloseTo(2);
            expect(mat.data[5]).toBeCloseTo(3);
            expect(mat.data[10]).toBeCloseTo(4);
        });
    });

    describe("translate (instance method)", () => {
        it("translates identity matrix correctly", () => {
            const mat = SimpleMat4.create();
            mat.translate(1, 2, 3);
            const t = mat.getTranslation();
            expect(t.x).toBeCloseTo(1);
            expect(t.y).toBeCloseTo(2);
            expect(t.z).toBeCloseTo(3);
        });
    });

    describe("multiply", () => {
        it("multiplying two identity matrices yields identity", () => {
            const result = SimpleMat4.multiply(SimpleMat4.create(), SimpleMat4.create());
            expect(result.equalsArray(IDENTITY)).toBe(true);
        });

        it("multiplying by identity leaves the matrix unchanged", () => {
            const mat = SimpleMat4.fromTranslation({ x: 1, y: 2, z: 3 });
            const result = SimpleMat4.multiply(mat, SimpleMat4.create());
            expect(result.equals(mat)).toBe(true);
        });
    });

    describe("transformVector / getTransformedVector", () => {
        it("identity matrix does not transform the vector", () => {
            const mat = SimpleMat4.create();
            const v = { x: 1, y: 2, z: 3 };
            mat.transformVector(v);
            expect(v.x).toBeCloseTo(1);
            expect(v.y).toBeCloseTo(2);
            expect(v.z).toBeCloseTo(3);
        });

        it("translation matrix shifts a vector", () => {
            const mat = SimpleMat4.fromTranslation({ x: 10, y: 20, z: 30 });
            const result = mat.getTransformedVector({ x: 1, y: 2, z: 3 });
            expect(result.x).toBeCloseTo(11);
            expect(result.y).toBeCloseTo(22);
            expect(result.z).toBeCloseTo(33);
        });
    });

    describe("fromXRotation / fromYRotation / fromZRotation", () => {
        it("zero-angle rotation matrices equal identity", () => {
            expect(SimpleMat4.fromXRotation(0).equalsArray(IDENTITY)).toBe(true);
            expect(SimpleMat4.fromYRotation(0).equalsArray(IDENTITY)).toBe(true);
            expect(SimpleMat4.fromZRotation(0).equalsArray(IDENTITY)).toBe(true);
        });
    });

    describe("fromRotation", () => {
        it("returns null for a zero-length axis", () => {
            const result = SimpleMat4.fromRotation(Math.PI / 4, { x: 0, y: 0, z: 0 });
            expect(result).toBeNull();
        });

        it("rotation by 0 around any unit axis is identity", () => {
            const result = SimpleMat4.fromRotation(0, { x: 0, y: 0, z: 1 });
            expect(result).not.toBeNull();
            expect(result!.equalsArray(IDENTITY)).toBe(true);
        });
    });
});
