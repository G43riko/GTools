import { assertAlmostEquals, assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { Vector4 } from "./vector4.ts";

const vec0_0_0_0 = new Vector4();
const vec5_0_0_0 = new Vector4(5, 0, 0, 0);
const vec0_5_0_0 = new Vector4(0, 5, 0, 0);
const vec0_0_5_0 = new Vector4(0, 0, 5, 0);
const vec0_0_0_5 = new Vector4(0, 0, 0, 5);
const vec5_5_5_5 = new Vector4(5, 5, 5, 5);
const vecm5_0_0_0 = new Vector4(-5, 0, 0, 0);
const vec0_m5_0_0 = new Vector4(0, -5, 0, 0);
const vec0_0_m5_0 = new Vector4(0, 0, -5, 0);
const vec0_0_0_m5 = new Vector4(0, 0, 0, -5);
const vecm5_m5_m5_m5 = new Vector4(-5, -5, -5, -5);

describe("Vector4", () => {
    describe("constructors and factory methods", () => {
        it("constructor", () => {
            const v = new Vector4(3, 4, 5, 6);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("createEmpty", () => {
            const v = Vector4.createEmpty();
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
            assertEquals(v.z, 0);
            assertEquals(v.w, 0);
        });

        it("ZERO", () => {
            const v = Vector4.ZERO;
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
            assertEquals(v.z, 0);
            assertEquals(v.w, 0);
        });

        it("ONE", () => {
            const v = Vector4.ONE;
            assertEquals(v.x, 1);
            assertEquals(v.y, 1);
            assertEquals(v.z, 1);
            assertEquals(v.w, 1);
        });

        it("fromArray", () => {
            const v = Vector4.fromArray([3, 4, 5, 6]);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("from", () => {
            const v = Vector4.from(3, 4, 5, 6);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });
    });

    describe("properties", () => {
        it("length", () => {
            assertEquals(vec0_0_0_0.length, 0);
            assertEquals(vec5_0_0_0.length, 5);
            assertEquals(vec0_5_0_0.length, 5);
            assertEquals(vec0_0_5_0.length, 5);
            assertEquals(vec0_0_0_5.length, 5);
            assertEquals(vec5_5_5_5.length, Math.sqrt(100));
        });

        it("avg", () => {
            assertEquals(vec0_0_0_0.avg, 0);
            assertEquals(vec5_0_0_0.avg, 5/4);
            assertEquals(vec5_5_5_5.avg, 5);
            assertEquals(vecm5_m5_m5_m5.avg, -5);
        });

        it("sum", () => {
            assertEquals(vec0_0_0_0.sum, 0);
            assertEquals(vec5_0_0_0.sum, 5);
            assertEquals(vec5_5_5_5.sum, 20);
            assertEquals(vecm5_m5_m5_m5.sum, -20);
        });

        it("min and max", () => {
            assertEquals(vec5_0_0_0.max, 5);
            assertEquals(vec5_0_0_0.min, 0);
            assertEquals(vecm5_0_0_0.max, 0);
            assertEquals(vecm5_0_0_0.min, -5);
            assertEquals(vec5_5_5_5.max, 5);
            assertEquals(vec5_5_5_5.min, 5);
            assertEquals(vecm5_m5_m5_m5.max, -5);
            assertEquals(vecm5_m5_m5_m5.min, -5);
        });
    });

    describe("vector operations", () => {
        it("normalize", () => {
            const v1 = vec5_0_0_0.clone().normalize();
            assertAlmostEquals(v1.x, 1, 0.0001);
            assertAlmostEquals(v1.y, 0, 0.0001);
            assertAlmostEquals(v1.z, 0, 0.0001);
            assertAlmostEquals(v1.w, 0, 0.0001);

            const v2 = vec0_5_0_0.clone().normalize();
            assertAlmostEquals(v2.x, 0, 0.0001);
            assertAlmostEquals(v2.y, 1, 0.0001);
            assertAlmostEquals(v2.z, 0, 0.0001);
            assertAlmostEquals(v2.w, 0, 0.0001);

            // // Test static normalize
            // const result = new Vector4();
            // Vector4.normalize(vec5_5_5_5, result);
            // const norm = 5 / Math.sqrt(100);
            // assertAlmostEquals(result.x, norm, 0.0001);
            // assertAlmostEquals(result.y, norm, 0.0001);
            // assertAlmostEquals(result.z, norm, 0.0001);
            // assertAlmostEquals(result.w, norm, 0.0001);
        });

        it("getNormalized", () => {
            const v1 = vec5_0_0_0.getNormalized();
            assertAlmostEquals(v1.x, 1, 0.0001);
            assertAlmostEquals(v1.y, 0, 0.0001);
            assertAlmostEquals(v1.z, 0, 0.0001);
            assertAlmostEquals(v1.w, 0, 0.0001);
            // Original should be unchanged
            assertEquals(vec5_0_0_0.x, 5);
            assertEquals(vec5_0_0_0.y, 0);
            assertEquals(vec5_0_0_0.z, 0);
            assertEquals(vec5_0_0_0.w, 0);
        });

        it("invert", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.invert();
            assertEquals(v.x, -3);
            assertEquals(v.y, -4);
            assertEquals(v.z, -5);
            assertEquals(v.w, -6);
        });

        it("getInverted", () => {
            const v = new Vector4(3, 4, 5, 6);
            const inverted = v.getInverted();
            assertEquals(inverted.x, -3);
            assertEquals(inverted.y, -4);
            assertEquals(inverted.z, -5);
            assertEquals(inverted.w, -6);
            // Original should be unchanged
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("dot", () => {
            assertEquals(vec5_0_0_0.dot(vec0_5_0_0), 0);
            assertEquals(vec5_0_0_0.dot(vec5_0_0_0), 25);
            assertEquals(vec5_5_5_5.dot(vec5_5_5_5), 100);

            // Test static dot
            assertEquals(Vector4.dot(vec5_0_0_0, vec0_5_0_0), 0);
            assertEquals(Vector4.dot(vec5_0_0_0, vec5_0_0_0), 25);
        });

        it("angle", () => {
            assertAlmostEquals(vec5_0_0_0.angle(vec0_5_0_0), Math.PI / 2, 0.0001);
            assertAlmostEquals(vec5_0_0_0.angle(vec5_0_0_0), 0, 0.0001);
            assertAlmostEquals(vec5_0_0_0.angle(vecm5_0_0_0), Math.PI, 0.0001);
        });

        it("dist", () => {
            assertEquals(vec0_0_0_0.dist(vec5_0_0_0), 5);
            assertEquals(vec0_0_0_0.dist(vec0_5_0_0), 5);
            assertEquals(vec0_0_0_0.dist(vec0_0_5_0), 5);
            assertEquals(vec0_0_0_0.dist(vec0_0_0_5), 5);
            assertEquals(vec0_0_0_0.dist(vec5_5_5_5), Math.sqrt(100));

            // Test static dist
            assertEquals(Vector4.dist(vec0_0_0_0, vec5_0_0_0), 5);
        });

        it("sizeSQ and size", () => {
            assertEquals(Vector4.sizeSQ(vec5_0_0_0), 25);
            assertEquals(Vector4.sizeSQ(vec5_5_5_5), 100);
            assertEquals(Vector4.size(vec5_0_0_0), 5);
            assertEquals(Vector4.size(vec5_5_5_5), Math.sqrt(100));
        });
    });

    describe("arithmetic operations", () => {
        it("add", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.add(new Vector4(1, 2, 3, 4));
            assertEquals(v.x, 4);
            assertEquals(v.y, 6);
            assertEquals(v.z, 8);
            assertEquals(v.w, 10);
        });

        it("addNum", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.addNum(2);
            assertEquals(v.x, 5);
            assertEquals(v.y, 6);
            assertEquals(v.z, 7);
            assertEquals(v.w, 8);
        });

        it("addNums", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.addNums(1, 2, 3, 4);
            assertEquals(v.x, 4);
            assertEquals(v.y, 6);
            assertEquals(v.z, 8);
            assertEquals(v.w, 10);
        });

        it("sub", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.sub(new Vector4(1, 2, 3, 4));
            assertEquals(v.x, 2);
            assertEquals(v.y, 2);
            assertEquals(v.z, 2);
            assertEquals(v.w, 2);
        });

        it("subNum", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.subNum(2);
            assertEquals(v.x, 1);
            assertEquals(v.y, 2);
            assertEquals(v.z, 3);
            assertEquals(v.w, 4);
        });

        it("subNums", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.subNums(1, 2, 3, 4);
            assertEquals(v.x, 2);
            assertEquals(v.y, 2);
            assertEquals(v.z, 2);
            assertEquals(v.w, 2);
        });

        it("mul", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.mul(new Vector4(2, 3, 4, 5));
            assertEquals(v.x, 6);
            assertEquals(v.y, 12);
            assertEquals(v.z, 20);
            assertEquals(v.w, 30);
        });

        it("mulNum", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.mulNum(2);
            assertEquals(v.x, 6);
            assertEquals(v.y, 8);
            assertEquals(v.z, 10);
            assertEquals(v.w, 12);
        });

        it("mulNums", () => {
            const v = new Vector4(3, 4, 5, 6);
            v.mulNums(2, 3, 4, 5);
            assertEquals(v.x, 6);
            assertEquals(v.y, 12);
            assertEquals(v.z, 20);
            assertEquals(v.w, 30);
        });

        it("div", () => {
            const v = new Vector4(6, 12, 20, 30);
            v.div(new Vector4(2, 3, 4, 5));
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("divNum", () => {
            const v = new Vector4(6, 8, 10, 12);
            v.divNum(2);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("divNums", () => {
            const v = new Vector4(6, 12, 20, 30);
            v.divNums(2, 3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });
    });

    describe("utility methods", () => {
        it("clone", () => {
            const v = new Vector4(3, 4, 5, 6);
            const clone = v.clone();
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            assertEquals(clone.z, 5);
            assertEquals(clone.w, 6);
            // Ensure it's a different object
            v.x = 7;
            assertEquals(clone.x, 3);
        });

        it("equals", () => {
            const v1 = new Vector4(3, 4, 5, 6);
            const v2 = new Vector4(3, 4, 5, 6);
            const v3 = new Vector4(7, 4, 5, 6);
            assertEquals(v1.equals(v2), true);
            assertEquals(v1.equals(v3), false);

            // Test static equals
            assertEquals(Vector4.equals(v1, v2), true);
            assertEquals(Vector4.equals(v1, v3), false);
        });

        it("isZero", () => {
            assertEquals(vec0_0_0_0.isZero(), true);
            assertEquals(vec5_0_0_0.isZero(), false);
        });

        it("set", () => {
            const v = new Vector4();
            v.set({ x: 3, y: 4, z: 5, w: 6 });
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("setData", () => {
            const v = new Vector4();
            v.setData(3, 4, 5, 6);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("toArray", () => {
            const arr = new Vector4(3, 4, 5, 6).toArray();
            assertEquals(arr[0], 3);
            assertEquals(arr[1], 4);
            assertEquals(arr[2], 5);
            assertEquals(arr[3], 6);
        });

        it("toReadonlyProxy", () => {
            const v = new Vector4(3, 4, 5, 6);
            const proxy = v.toReadonlyProxy();
            assertEquals(proxy.x, 3);
            assertEquals(proxy.y, 4);
            assertEquals(proxy.z, 5);
            assertEquals(proxy.w, 6);

            // Change original
            v.x = 7;
            // Proxy should reflect changes
            assertEquals(proxy.x, 7);
        });

        it("getAbs", () => {
            const v = new Vector4(-3, -4, -5, -6);
            const abs = v.getAbs();
            assertEquals(abs.x, 3);
            assertEquals(abs.y, 4);
            assertEquals(abs.z, 5);
            assertEquals(abs.w, 6);
        });
    });

    describe("static utility methods", () => {
        it("min", () => {
            const result = Vector4.min(
                { x: 3, y: 4, z: 5, w: 6 }, 
                { x: 1, y: 7, z: 4, w: 8 }
            );
            assertEquals(result.x, 1);
            assertEquals(result.y, 4);
            assertEquals(result.z, 4);
            assertEquals(result.w, 6);
        });

        it("max", () => {
            const result = Vector4.max(
                { x: 3, y: 4, z: 5, w: 6 }, 
                { x: 1, y: 7, z: 4, w: 8 }
            );
            assertEquals(result.x, 3);
            assertEquals(result.y, 7);
            assertEquals(result.z, 5);
            assertEquals(result.w, 8);
        });

        it("isVector", () => {
            assertEquals(Vector4.isVector({ x: 3, y: 4, z: 5, w: 6 }), true);
            assertEquals(Vector4.isVector({ x: "3", y: 4, z: 5, w: 6 }), true);
            assertEquals(Vector4.isVector({ x: 3, y: 4, z: 5 }), false);
            assertEquals(Vector4.isVector(null), false);
        });

        it("equalsApproximately", () => {
            assertEquals(Vector4.equalsApproximately(
                { x: 3, y: 4, z: 5, w: 6 }, 
                { x: 3.0001, y: 4.0001, z: 5.0001, w: 6.0001 }, 
                0.001
            ), true);

            assertEquals(Vector4.equalsApproximately(
                { x: 3, y: 4, z: 5, w: 6 }, 
                { x: 3.01, y: 4.01, z: 5.01, w: 6.01 }, 
                0.001
            ), false);
        });
    });
});
