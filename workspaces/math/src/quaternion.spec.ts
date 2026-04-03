import { assertAlmostEquals, assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { Quaternion } from "./quaternion.ts";

describe("Quaternion", () => {
    describe("fromEuler", () => {
        it("identity rotation produces zero vector and unit w", () => {
            const q = Quaternion.fromEuler(0, 0, 0);
            assertAlmostEquals(q.x, 0, 0.0001);
            assertAlmostEquals(q.y, 0, 0.0001);
            assertAlmostEquals(q.z, 0, 0.0001);
            assertAlmostEquals(q.w, 1, 0.0001);
        });

        it("rotation around X axis sets only x and w components", () => {
            const q = Quaternion.fromEuler(90, 0, 0);
            assertAlmostEquals(q.y, 0, 0.0001);
            assertAlmostEquals(q.z, 0, 0.0001);
        });

        it("rotation around Y axis sets only y and w components", () => {
            const q = Quaternion.fromEuler(0, 90, 0);
            assertAlmostEquals(q.x, 0, 0.0001);
            assertAlmostEquals(q.z, 0, 0.0001);
        });

        it("rotation around Z axis sets only z and w components", () => {
            const q = Quaternion.fromEuler(0, 0, 90);
            assertAlmostEquals(q.x, 0, 0.0001);
            assertAlmostEquals(q.y, 0, 0.0001);
        });

        it("stores result in provided output quaternion", () => {
            const out = new Quaternion();
            const result = Quaternion.fromEuler(0, 0, 0, out);
            assertEquals(result, out);
        });
    });

    describe("clone", () => {
        it("creates an independent copy with the same components", () => {
            const q = Quaternion.fromEuler(30, 45, 60);
            const copy = q.clone();
            assertAlmostEquals(copy.x, q.x, 0.0001);
            assertAlmostEquals(copy.y, q.y, 0.0001);
            assertAlmostEquals(copy.z, q.z, 0.0001);
            assertAlmostEquals(copy.w, q.w, 0.0001);
            // Mutating original should not affect the clone
            q.x = 999;
            assertAlmostEquals(copy.x, copy.x, 0.0001);
        });
    });

    describe("multiply", () => {
        it("multiplying by identity quaternion returns the same quaternion", () => {
            const identity = Quaternion.fromEuler(0, 0, 0);
            const q = Quaternion.fromEuler(30, 0, 0);
            const result = Quaternion.multiply(q, identity);
            assertAlmostEquals(result.x, q.x, 0.0001);
            assertAlmostEquals(result.y, q.y, 0.0001);
            assertAlmostEquals(result.z, q.z, 0.0001);
            assertAlmostEquals(result.w, q.w, 0.0001);
        });

        it("stores result in provided output quaternion", () => {
            const a = Quaternion.fromEuler(0, 0, 0);
            const b = Quaternion.fromEuler(0, 0, 0);
            const out = new Quaternion();
            const result = Quaternion.multiply(a, b, out);
            assertEquals(result, out);
        });
    });

    describe("toEuler", () => {
        it("identity quaternion converts back to zero angles", () => {
            const q = Quaternion.fromEuler(0, 0, 0);
            const euler = q.toEuler();
            assertAlmostEquals(euler.x, 0, 0.0001);
            assertAlmostEquals(euler.y, 0, 0.0001);
            assertAlmostEquals(euler.z, 0, 0.0001);
        });

        it("round-trips a rotation around X axis (returns radians)", () => {
            const q = Quaternion.fromEuler(30, 0, 0);
            const euler = q.toEuler();
            assertAlmostEquals(euler.x, Math.PI / 6, 0.0001);
            assertAlmostEquals(euler.y, 0, 0.0001);
            assertAlmostEquals(euler.z, 0, 0.0001);
        });

        it("round-trips a rotation around Z axis (returns radians)", () => {
            const q = Quaternion.fromEuler(0, 0, 45);
            const euler = q.toEuler();
            assertAlmostEquals(euler.z, Math.PI / 4, 0.0001);
        });
    });
});
