import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { VectorXZ } from "./vector-xz.ts";

describe("SimpleVectorXZ", () => {
    describe("isEqual", () => {
        it("should return true for identical vectors", () => {
            const vecA = { x: 3, z: 4 };
            const vecB = { x: 3, z: 4 };
            assertEquals(VectorXZ.isEqual(vecA, vecB), true);
        });

        it("should return true for same object reference", () => {
            const vec = { x: 3, z: 4 };
            assertEquals(VectorXZ.isEqual(vec, vec), true);
        });

        it("should return false for different vectors", () => {
            const vecA = { x: 3, z: 4 };
            const vecB = { x: 5, z: 4 };
            const vecC = { x: 3, z: 6 };
            assertEquals(VectorXZ.isEqual(vecA, vecB), false);
            assertEquals(VectorXZ.isEqual(vecA, vecC), false);
        });
    });

    describe("isVectorXZ", () => {
        it("should return true for valid VectorXZ objects", () => {
            const vec = { x: 3, z: 4 };
            assertEquals(VectorXZ.isVectorXZ(vec), true);
        });

        it("should return false for null", () => {
            assertEquals(VectorXZ.isVectorXZ(null), false);
        });

        it("should return false for non-objects", () => {
            assertEquals(VectorXZ.isVectorXZ(5), false);
            assertEquals(VectorXZ.isVectorXZ("string"), false);
            assertEquals(VectorXZ.isVectorXZ(true), false);
        });

        it("should return false for objects missing properties", () => {
            assertEquals(VectorXZ.isVectorXZ({ x: 3 }), false);
            assertEquals(VectorXZ.isVectorXZ({ z: 4 }), false);
            assertEquals(VectorXZ.isVectorXZ({}), false);
        });

        it("should return false for objects with wrong property types", () => {
            assertEquals(VectorXZ.isVectorXZ({ x: "3", z: 4 }), false);
            assertEquals(VectorXZ.isVectorXZ({ x: 3, z: "4" }), false);
            assertEquals(VectorXZ.isVectorXZ({ x: null, z: 4 }), false);
            assertEquals(VectorXZ.isVectorXZ({ x: 3, z: null }), false);
        });

        it("should return true for objects with additional properties", () => {
            assertEquals(VectorXZ.isVectorXZ({ x: 3, z: 4, extra: true }), true);
        });
    });
});
