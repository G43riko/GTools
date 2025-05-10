import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { SimpleVectorXZ } from "./simple-vector-xz.ts";

describe("SimpleVectorXZ", () => {
    describe("isEqual", () => {
        it("should return true for identical vectors", () => {
            const vecA = { x: 3, z: 4 };
            const vecB = { x: 3, z: 4 };
            assertEquals(SimpleVectorXZ.isEqual(vecA, vecB), true);
        });

        it("should return true for same object reference", () => {
            const vec = { x: 3, z: 4 };
            assertEquals(SimpleVectorXZ.isEqual(vec, vec), true);
        });

        it("should return false for different vectors", () => {
            const vecA = { x: 3, z: 4 };
            const vecB = { x: 5, z: 4 };
            const vecC = { x: 3, z: 6 };
            assertEquals(SimpleVectorXZ.isEqual(vecA, vecB), false);
            assertEquals(SimpleVectorXZ.isEqual(vecA, vecC), false);
        });
    });

    describe("isVectorXZ", () => {
        it("should return true for valid SimpleVectorXZ objects", () => {
            const vec = { x: 3, z: 4 };
            assertEquals(SimpleVectorXZ.isVectorXZ(vec), true);
        });

        it("should return false for null", () => {
            assertEquals(SimpleVectorXZ.isVectorXZ(null), false);
        });

        it("should return false for non-objects", () => {
            assertEquals(SimpleVectorXZ.isVectorXZ(5), false);
            assertEquals(SimpleVectorXZ.isVectorXZ("string"), false);
            assertEquals(SimpleVectorXZ.isVectorXZ(true), false);
        });

        it("should return false for objects missing properties", () => {
            assertEquals(SimpleVectorXZ.isVectorXZ({ x: 3 }), false);
            assertEquals(SimpleVectorXZ.isVectorXZ({ z: 4 }), false);
            assertEquals(SimpleVectorXZ.isVectorXZ({}), false);
        });

        it("should return false for objects with wrong property types", () => {
            assertEquals(SimpleVectorXZ.isVectorXZ({ x: "3", z: 4 }), false);
            assertEquals(SimpleVectorXZ.isVectorXZ({ x: 3, z: "4" }), false);
            assertEquals(SimpleVectorXZ.isVectorXZ({ x: null, z: 4 }), false);
            assertEquals(SimpleVectorXZ.isVectorXZ({ x: 3, z: null }), false);
        });

        it("should return true for objects with additional properties", () => {
            assertEquals(SimpleVectorXZ.isVectorXZ({ x: 3, z: 4, extra: true }), true);
        });
    });
});
