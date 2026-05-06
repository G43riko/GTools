import { assertEquals } from "@std/assert";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { Mat3 } from "./mat3.ts";
import { SimpleMat3 } from "./simple-mat3.ts";

describe("Mat3", () => {
    describe("mul", () => {
        it("identity multiplied by identity returns identity", () => {
            const a = SimpleMat3.create();
            const b = SimpleMat3.create();
            const result = Mat3.mul(a, b);
            expect(result.equalsArray([1, 0, 0, 0, 1, 0, 0, 0, 1])).toBeTruthy();
        });

        it("stores result in provided output matrix", () => {
            const a = SimpleMat3.create();
            const b = SimpleMat3.create();
            const out = SimpleMat3.create();
            const result = Mat3.mul(a, b, out);
            assertEquals(result, out);
        });

        it("scale matrix multiplied by identity returns scale matrix", () => {
            const scale = SimpleMat3.fromScale(2, 3);
            const identity = SimpleMat3.create();
            const result = Mat3.mul(scale, identity);
            const scaleResult = Mat3.mul(identity, scale);
            expect(result.equalsArray(scale.data)).toBeTruthy();
            expect(scaleResult.equalsArray(scale.data)).toBeTruthy();
        });
    });

    describe("getTranslatedVector", () => {
        it("transforms a point by identity matrix (no change)", () => {
            const identity = SimpleMat3.create();
            const result = Mat3.getTranslatedVector({ x: 3, y: 4 }, identity);
            assertEquals(result.x, 3);
            assertEquals(result.y, 4);
        });

        it("applies scale from matrix to the vector", () => {
            const scale = SimpleMat3.fromScale(2, 3);
            const result = Mat3.getTranslatedVector({ x: 3, y: 4 }, scale);
            assertEquals(result.x, 6);
            assertEquals(result.y, 12);
        });

        it("stores result in provided output object", () => {
            const identity = SimpleMat3.create();
            const out = { x: 0, y: 0 };
            const result = Mat3.getTranslatedVector({ x: 5, y: 7 }, identity, out);
            assertEquals(result, out);
            assertEquals(out.x, 5);
            assertEquals(out.y, 7);
        });
    });
});
