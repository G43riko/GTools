import { assertAlmostEquals, assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { Vector3 } from "./vector3.ts";

const vec0_0_0 = new Vector3();
const vec5_0_0 = new Vector3(5, 0, 0);
const vec0_5_0 = new Vector3(0, 5, 0);
const vec0_0_5 = new Vector3(0, 0, 5);
const vec5_5_5 = new Vector3(5, 5, 5);
const vecm5_0_0 = new Vector3(-5, 0, 0);
const _vec0_m5_0 = new Vector3(0, -5, 0);
const _vec0_0_m5 = new Vector3(0, 0, -5);
const vecm5_m5_m5 = new Vector3(-5, -5, -5);

describe("Vector3", () => {
    describe("constructors and factory methods", () => {
        it("constructor", () => {
            const v = new Vector3(3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("createEmpty", () => {
            const v = Vector3.createEmpty();
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
            assertEquals(v.z, 0);
        });

        it("fromVec", () => {
            const v = Vector3.fromVec({ x: 3, y: 4, z: 5 });
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("ZERO", () => {
            const v = Vector3.ZERO;
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
            assertEquals(v.z, 0);
        });

        it("UP", () => {
            const v = Vector3.UP;
            assertEquals(v.x, 0);
            assertEquals(v.y, 1);
            assertEquals(v.z, 0);
        });

        it("ONE", () => {
            const v = Vector3.ONE;
            assertEquals(v.x, 1);
            assertEquals(v.y, 1);
            assertEquals(v.z, 1);
        });

        it("fromArray", () => {
            const v = Vector3.fromArray([3, 4, 5]);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("from", () => {
            const v = Vector3.from(3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });
    });

    describe("properties", () => {
        it("length", () => {
            assertEquals(vec0_0_0.length, 0);
            assertEquals(vec5_0_0.length, 5);
            assertEquals(vec0_5_0.length, 5);
            assertEquals(vec0_0_5.length, 5);
            assertEquals(vec5_5_5.length, Math.sqrt(75));
        });

        it("avg", () => {
            assertEquals(vec0_0_0.avg, 0);
            assertEquals(vec5_0_0.avg, 5 / 3);
            assertEquals(vec5_5_5.avg, 5);
            assertEquals(vecm5_m5_m5.avg, -5);
        });

        it("sum", () => {
            assertEquals(vec0_0_0.sum, 0);
            assertEquals(vec5_0_0.sum, 5);
            assertEquals(vec5_5_5.sum, 15);
            assertEquals(vecm5_m5_m5.sum, -15);
        });

        it("min and max", () => {
            assertEquals(vec5_0_0.max, 5);
            assertEquals(vec5_0_0.min, 0);
            assertEquals(vecm5_0_0.max, 0);
            assertEquals(vecm5_0_0.min, -5);
            assertEquals(vec5_5_5.max, 5);
            assertEquals(vec5_5_5.min, 5);
            assertEquals(vecm5_m5_m5.max, -5);
            assertEquals(vecm5_m5_m5.min, -5);
        });
    });

    describe("vector operations", () => {
        it("normalize", () => {
            const v1 = vec5_0_0.clone().normalize();
            assertAlmostEquals(v1.x, 1, 0.0001);
            assertAlmostEquals(v1.y, 0, 0.0001);
            assertAlmostEquals(v1.z, 0, 0.0001);

            const v2 = vec0_5_0.clone().normalize();
            assertAlmostEquals(v2.x, 0, 0.0001);
            assertAlmostEquals(v2.y, 1, 0.0001);
            assertAlmostEquals(v2.z, 0, 0.0001);

            const v3 = vec0_0_5.clone().normalize();
            assertAlmostEquals(v3.x, 0, 0.0001);
            assertAlmostEquals(v3.y, 0, 0.0001);
            assertAlmostEquals(v3.z, 1, 0.0001);

            // Test static normalize
            const result = new Vector3();
            Vector3.normalize(vec5_5_5, result);
            const norm = 5 / Math.sqrt(75);
            assertAlmostEquals(result.x, norm, 0.0001);
            assertAlmostEquals(result.y, norm, 0.0001);
            assertAlmostEquals(result.z, norm, 0.0001);
        });

        it("getNormalized", () => {
            const v1 = vec5_0_0.getNormalized();
            assertAlmostEquals(v1.x, 1, 0.0001);
            assertAlmostEquals(v1.y, 0, 0.0001);
            assertAlmostEquals(v1.z, 0, 0.0001);
            // Original should be unchanged
            assertEquals(vec5_0_0.x, 5);
            assertEquals(vec5_0_0.y, 0);
            assertEquals(vec5_0_0.z, 0);
        });

        it("invert", () => {
            const v = new Vector3(3, 4, 5);
            v.invert();
            assertEquals(v.x, -3);
            assertEquals(v.y, -4);
            assertEquals(v.z, -5);
        });

        it("getInverted", () => {
            const v = new Vector3(3, 4, 5);
            const inverted = v.getInverted();
            assertEquals(inverted.x, -3);
            assertEquals(inverted.y, -4);
            assertEquals(inverted.z, -5);
            // Original should be unchanged
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("dot", () => {
            assertEquals(vec5_0_0.dot(vec0_5_0), 0);
            assertEquals(vec5_0_0.dot(vec5_0_0), 25);
            assertEquals(vec5_5_5.dot(vec5_5_5), 75);

            // Test static dot
            assertEquals(Vector3.dot(vec5_0_0, vec0_5_0), 0);
            assertEquals(Vector3.dot(vec5_0_0, vec5_0_0), 25);
        });

        it("cross", () => {
            const result = vec5_0_0.cross(vec0_5_0);
            assertEquals(result.x, 0);
            assertEquals(result.y, 0);
            assertEquals(result.z, 25);

            // Test static cross
            const staticResult = new Vector3();
            Vector3.crossStatic(vec5_0_0, vec0_5_0, staticResult);
            assertEquals(staticResult.x, 0);
            assertEquals(staticResult.y, 0);
            assertEquals(staticResult.z, 25);
        });

        it("angle", () => {
            assertAlmostEquals(vec5_0_0.angle(vec0_5_0), Math.PI / 2, 0.0001);
            assertAlmostEquals(vec5_0_0.angle(vec5_0_0), 0, 0.0001);
            assertAlmostEquals(vec5_0_0.angle(vecm5_0_0), Math.PI, 0.0001);

            // Test static angle
            assertAlmostEquals(Vector3.angle(vec5_0_0, vec0_5_0), Math.PI / 2, 0.0001);
        });

        it("dist", () => {
            assertEquals(vec0_0_0.dist(vec5_0_0), 5);
            assertEquals(vec0_0_0.dist(vec0_5_0), 5);
            assertEquals(vec0_0_0.dist(vec0_0_5), 5);
            assertEquals(vec0_0_0.dist(vec5_5_5), Math.sqrt(75));

            // Test static dist
            assertEquals(Vector3.dist(vec0_0_0, vec5_0_0), 5);
        });

        it("sizeSQ and size", () => {
            assertEquals(Vector3.sizeSQ(vec5_0_0), 25);
            assertEquals(Vector3.sizeSQ(vec5_5_5), 75);
            assertEquals(Vector3.size(vec5_0_0), 5);
            assertEquals(Vector3.size(vec5_5_5), Math.sqrt(75));
        });

        it("reflect", () => {
            const v = new Vector3(1, -1, 0);
            const normal = new Vector3(0, 1, 0);
            const result = Vector3.reflect(v, normal);
            assertEquals(result.x, 1);
            assertEquals(result.y, 1);
            assertEquals(result.z, 0);

            // Test with result parameter
            const target = new Vector3();
            Vector3.reflect(v, normal, target);
            assertEquals(target.x, 1);
            assertEquals(target.y, 1);
            assertEquals(target.z, 0);
        });
    });

    describe("arithmetic operations", () => {
        it("add", () => {
            const v = new Vector3(3, 4, 5);
            v.add(new Vector3(1, 2, 3));
            assertEquals(v.x, 4);
            assertEquals(v.y, 6);
            assertEquals(v.z, 8);
        });

        it("addNum", () => {
            const v = new Vector3(3, 4, 5);
            v.addNum(2);
            assertEquals(v.x, 5);
            assertEquals(v.y, 6);
            assertEquals(v.z, 7);
        });

        it("addNums", () => {
            const v = new Vector3(3, 4, 5);
            v.addNums(1, 2, 3);
            assertEquals(v.x, 4);
            assertEquals(v.y, 6);
            assertEquals(v.z, 8);
        });

        it("sub", () => {
            const v = new Vector3(3, 4, 5);
            v.sub(new Vector3(1, 2, 3));
            assertEquals(v.x, 2);
            assertEquals(v.y, 2);
            assertEquals(v.z, 2);
        });

        it("subNum", () => {
            const v = new Vector3(3, 4, 5);
            v.subNum(2);
            assertEquals(v.x, 1);
            assertEquals(v.y, 2);
            assertEquals(v.z, 3);
        });

        it("subNums", () => {
            const v = new Vector3(3, 4, 5);
            v.subNums(1, 2, 3);
            assertEquals(v.x, 2);
            assertEquals(v.y, 2);
            assertEquals(v.z, 2);
        });

        it("mul", () => {
            const v = new Vector3(3, 4, 5);
            v.mul(new Vector3(2, 3, 4));
            assertEquals(v.x, 6);
            assertEquals(v.y, 12);
            assertEquals(v.z, 20);
        });

        it("mulNum", () => {
            const v = new Vector3(3, 4, 5);
            v.mulNum(2);
            assertEquals(v.x, 6);
            assertEquals(v.y, 8);
            assertEquals(v.z, 10);
        });

        it("mulNums", () => {
            const v = new Vector3(3, 4, 5);
            v.mulNums(2, 3, 4);
            assertEquals(v.x, 6);
            assertEquals(v.y, 12);
            assertEquals(v.z, 20);
        });

        it("div", () => {
            const v = new Vector3(6, 12, 20);
            v.div(new Vector3(2, 3, 4));
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("divNum", () => {
            const v = new Vector3(6, 8, 10);
            v.divNum(2);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("divNums", () => {
            const v = new Vector3(6, 12, 20);
            v.divNums(2, 3, 4);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });
    });

    describe("utility methods", () => {
        it("clone", () => {
            const v = new Vector3(3, 4, 5);
            const clone = v.clone();
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            assertEquals(clone.z, 5);
            // Ensure it's a different object
            v.x = 6;
            assertEquals(clone.x, 3);
        });

        it("equals", () => {
            const v1 = new Vector3(3, 4, 5);
            const v2 = new Vector3(3, 4, 5);
            const v3 = new Vector3(6, 4, 5);
            assertEquals(v1.equals(v2), true);
            assertEquals(v1.equals(v3), false);

            // Test static equals
            assertEquals(Vector3.equals(v1, v2), true);
            assertEquals(Vector3.equals(v1, v3), false);
        });

        it("isZero", () => {
            assertEquals(vec0_0_0.isZero(), true);
            assertEquals(vec5_0_0.isZero(), false);
        });

        it("set", () => {
            const v = new Vector3();
            v.set({ x: 3, y: 4, z: 5 });
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("setData", () => {
            const v = new Vector3();
            v.setData(3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("toArray", () => {
            const arr = new Vector3(3, 4, 5).toArray();
            assertEquals(arr[0], 3);
            assertEquals(arr[1], 4);
            assertEquals(arr[2], 5);
        });

        it("toString", () => {
            assertEquals(new Vector3(3, 4, 5).toString(), "[3, 4, 5]");

            // Test static toString
            assertEquals(Vector3.toString({ x: 3, y: 4, z: 5 }), "[3, 4, 5]");
            assertEquals(Vector3.toString({ x: 3.1415, y: 2.7182, z: 1.4142 }, 2), "[3.14, 2.72, 1.41]");
        });

        it("toReadonlyProxy", () => {
            const v = new Vector3(3, 4, 5);
            const proxy = v.toReadonlyProxy();
            assertEquals(proxy.x, 3);
            assertEquals(proxy.y, 4);
            assertEquals(proxy.z, 5);

            // Change original
            v.x = 6;
            // Proxy should reflect changes
            assertEquals(proxy.x, 6);
        });

        it("component extraction", () => {
            const v = new Vector3(3, 4, 5);

            const xy = v.xy;
            assertEquals(xy.x, 3);
            assertEquals(xy.y, 4);

            const yx = v.yx;
            assertEquals(yx.x, 4);
            assertEquals(yx.y, 3);

            const yz = v.yz;
            assertEquals(yz.x, 4);
            assertEquals(yz.y, 5);

            const zy = v.zy;
            assertEquals(zy.x, 5);
            assertEquals(zy.y, 4);

            const xz = v.xz;
            assertEquals(xz.x, 3);
            assertEquals(xz.y, 5);

            const zx = v.zx;
            assertEquals(zx.x, 5);
            assertEquals(zx.y, 3);
        });
    });

    describe("static utility methods", () => {
        it("sum", () => {
            const result = Vector3.sum({ x: 3, y: 4, z: 5 }, { x: 1, y: 2, z: 3 });
            assertEquals(result.x, 4);
            assertEquals(result.y, 6);
            assertEquals(result.z, 8);

            // Test with result parameter
            const target = new Vector3();
            Vector3.sum({ x: 3, y: 4, z: 5 }, { x: 1, y: 2, z: 3 }, target);
            assertEquals(target.x, 4);
            assertEquals(target.y, 6);
            assertEquals(target.z, 8);
        });

        it("sub", () => {
            const result = Vector3.sub({ x: 3, y: 4, z: 5 }, { x: 1, y: 2, z: 3 });
            assertEquals(result.x, 2);
            assertEquals(result.y, 2);
            assertEquals(result.z, 2);

            // Test with result parameter
            const target = new Vector3();
            Vector3.sub({ x: 3, y: 4, z: 5 }, { x: 1, y: 2, z: 3 }, target);
            assertEquals(target.x, 2);
            assertEquals(target.y, 2);
            assertEquals(target.z, 2);
        });

        it("min", () => {
            const result = Vector3.min({ x: 3, y: 4, z: 5 }, { x: 1, y: 6, z: 4 }, new Vector3());
            assertEquals(result.x, 1);
            assertEquals(result.y, 4);
            assertEquals(result.z, 4);
        });

        it("max", () => {
            const result = Vector3.max({ x: 3, y: 4, z: 5 }, { x: 1, y: 6, z: 4 }, new Vector3());
            assertEquals(result.x, 3);
            assertEquals(result.y, 6);
            assertEquals(result.z, 5);
        });

        it("isVector", () => {
            assertEquals(Vector3.isVector({ x: 3, y: 4, z: 5 }), true);
            assertEquals(Vector3.isVector({ x: "3", y: 4, z: 5 }), true);
            assertEquals(Vector3.isVector({ x: 3, y: 4 }), false);
            assertEquals(Vector3.isVector(null), false);
        });

        it("equalsApproximately", () => {
            assertEquals(
                Vector3.equalsApproximately(
                    { x: 3, y: 4, z: 5 },
                    { x: 3.0001, y: 4.0001, z: 5.0001 },
                    0.001,
                ),
                true,
            );

            assertEquals(
                Vector3.equalsApproximately(
                    { x: 3, y: 4, z: 5 },
                    { x: 3.01, y: 4.01, z: 5.01 },
                    0.001,
                ),
                false,
            );
        });
    });
});
