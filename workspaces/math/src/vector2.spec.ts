import { assertAlmostEquals, assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { Vector2 } from "./vector2.ts";

const vec0_0 = new Vector2();
const vec5_0 = new Vector2(5, 0);
const vec0_5 = new Vector2(0, 5);
const vec5_5 = new Vector2(5, 5);
const vecm5_0 = new Vector2(-5, 0);
const vec0_m5 = new Vector2(0, -5);
const vecm5_m5 = new Vector2(-5, -5);

describe("Vector2", () => {
    describe("constructors and factory methods", () => {
        it("constructor", () => {
            const v = new Vector2(3, 4);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("createEmpty", () => {
            const v = Vector2.createEmpty();
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
        });

        it("fromVec", () => {
            const v = Vector2.fromVec({ x: 3, y: 4 });
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("ZERO", () => {
            const v = Vector2.ZERO;
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
        });

        it("UP", () => {
            const v = Vector2.UP;
            assertEquals(v.x, 0);
            assertEquals(v.y, 1);
        });

        it("DOWN", () => {
            const v = Vector2.DOWN;
            assertEquals(v.x, 0);
            assertEquals(v.y, -1);
        });

        it("LEFT", () => {
            const v = Vector2.LEFT;
            assertEquals(v.x, -1);
            assertEquals(v.y, 0);
        });

        it("RIGHT", () => {
            const v = Vector2.RIGHT;
            assertEquals(v.x, 1);
            assertEquals(v.y, 0);
        });

        it("ONE", () => {
            const v = Vector2.ONE;
            assertEquals(v.x, 1);
            assertEquals(v.y, 1);
        });

        it("fromAngle", () => {
            const v = Vector2.fromAngle(Math.PI / 2);
            assertAlmostEquals(v.x, 0, 0.0001);
            assertAlmostEquals(v.y, 1, 0.0001);
        });

        it("fromArray", () => {
            const v = Vector2.fromArray([3, 4]);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });
    });

    describe("properties", () => {
        it("min and max", () => {
            assertEquals(vec5_0.max, 5);
            assertEquals(vec5_0.min, 0);
            assertEquals(vecm5_0.max, 0);
            assertEquals(vecm5_0.min, -5);
            assertEquals(vec5_5.max, 5);
            assertEquals(vec5_5.min, 5);
        });

        it("length", () => {
            assertEquals(vec0_0.length, 0);
            assertEquals(vec5_0.length, 5);
            assertEquals(vec0_5.length, 5);
            assertEquals(vec5_5.length, Math.sqrt(50));
        });

        it("avg", () => {
            assertEquals(vec0_0.avg, 0);
            assertEquals(vec5_0.avg, 2.5);
            assertEquals(vec5_5.avg, 5);
            assertEquals(vecm5_m5.avg, -5);
        });

        it("sum", () => {
            assertEquals(vec0_0.sum, 0);
            assertEquals(vec5_0.sum, 5);
            assertEquals(vec5_5.sum, 10);
            assertEquals(vecm5_m5.sum, -10);
        });
    });

    describe("vector operations", () => {
        it("normalize", () => {
            assertEquals(vec5_0.clone().normalize().toString(), "[1, 0]");
            assertEquals(vec0_5.clone().normalize().toString(), "[0, 1]");

            // Test static normalize
            const result = new Vector2();
            Vector2.normalize(vec5_5, result);
            assertAlmostEquals(result.x, 5 / Math.sqrt(50), 0.0001);
            assertAlmostEquals(result.y, 5 / Math.sqrt(50), 0.0001);
        });

        it("getNormalized", () => {
            const v1 = vec5_0.getNormalized();
            assertEquals(v1.toString(), "[1, 0]");
            // Original should be unchanged
            assertEquals(vec5_0.toString(), "[5, 0]");
        });

        it("invert", () => {
            const v = new Vector2(3, 4);
            v.invert();
            assertEquals(v.x, -3);
            assertEquals(v.y, -4);
        });

        it("getInverted", () => {
            const v = new Vector2(3, 4);
            const inverted = v.getInverted();
            assertEquals(inverted.x, -3);
            assertEquals(inverted.y, -4);
            // Original should be unchanged
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("perpendicular", () => {
            const v = new Vector2(3, 4).perpendicular();
            assertEquals(v.x, 4);
            assertEquals(v.y, -3);
        });

        it("dot", () => {
            assertEquals(vec5_0.dot(vec0_5), 0);
            assertEquals(vec5_0.dot(vec5_0), 25);
            assertEquals(vec5_5.dot(vec5_5), 50);

            // Test static dot
            assertEquals(Vector2.dot(vec5_0, vec0_5), 0);
            assertEquals(Vector2.dot(vec5_0, vec5_0), 25);
        });

        it("cross", () => {
            assertEquals(Vector2.cross(vec5_0, vec0_5), 25);
            assertEquals(Vector2.cross(vec5_0, vec5_0), 0);
            assertEquals(Vector2.cross(vec5_5, vec5_5), 0);
        });

        it("angle", () => {
            assertAlmostEquals(vec5_0.angle(vec0_5), Math.PI / 2, 0.0001);
            assertAlmostEquals(vec5_0.angle(vec5_0), 0, 0.0001);
            assertAlmostEquals(vec5_0.angle(vecm5_0), Math.PI, 0.0001);

            // Test static angle
            assertAlmostEquals(Vector2.angle(vec5_0, vec0_5), Math.PI / 2, 0.0001);
        });

        it("rotate", () => {
            const v = new Vector2(1, 0);
            const rotated = v.rotate(Math.PI / 2);
            assertAlmostEquals(rotated.x, 0, 0.0001);
            assertAlmostEquals(rotated.y, 1, 0.0001);
        });

        it("dist", () => {
            assertEquals(vec0_0.dist(vec5_0), 5);
            assertEquals(vec0_0.dist(vec0_5), 5);
            assertEquals(vec0_0.dist(vec5_5), Math.sqrt(50));

            // Test static dist
            assertEquals(Vector2.dist(vec0_0, vec5_0), 5);
        });

        it("sizeSQ and size", () => {
            assertEquals(Vector2.sizeSQ(vec5_0), 25);
            assertEquals(Vector2.sizeSQ(vec5_5), 50);
            assertEquals(Vector2.size(vec5_0), 5);
            assertEquals(Vector2.size(vec5_5), Math.sqrt(50));
        });
    });

    describe("arithmetic operations", () => {
        it("add", () => {
            const v = new Vector2(3, 4);
            v.add(new Vector2(1, 2));
            assertEquals(v.x, 4);
            assertEquals(v.y, 6);
        });

        it("addNum", () => {
            const v = new Vector2(3, 4);
            v.addNum(2);
            assertEquals(v.x, 5);
            assertEquals(v.y, 6);
        });

        it("addNums", () => {
            const v = new Vector2(3, 4);
            v.addNums(1, 2);
            assertEquals(v.x, 4);
            assertEquals(v.y, 6);
        });

        it("sub", () => {
            const v = new Vector2(3, 4);
            v.sub(new Vector2(1, 2));
            assertEquals(v.x, 2);
            assertEquals(v.y, 2);
        });

        it("subNum", () => {
            const v = new Vector2(3, 4);
            v.subNum(2);
            assertEquals(v.x, 1);
            assertEquals(v.y, 2);
        });

        it("subNums", () => {
            const v = new Vector2(3, 4);
            v.subNums(1, 2);
            assertEquals(v.x, 2);
            assertEquals(v.y, 2);
        });

        it("mul", () => {
            const v = new Vector2(3, 4);
            v.mul(new Vector2(2, 3));
            assertEquals(v.x, 6);
            assertEquals(v.y, 12);
        });

        it("mulNum", () => {
            const v = new Vector2(3, 4);
            v.mulNum(2);
            assertEquals(v.x, 6);
            assertEquals(v.y, 8);
        });

        it("mulNums", () => {
            const v = new Vector2(3, 4);
            v.mulNums(2, 3);
            assertEquals(v.x, 6);
            assertEquals(v.y, 12);
        });

        it("div", () => {
            const v = new Vector2(6, 12);
            v.div(new Vector2(2, 3));
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("divNum", () => {
            const v = new Vector2(6, 8);
            v.divNum(2);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("divNums", () => {
            const v = new Vector2(6, 12);
            v.divNums(2, 3);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });
    });

    describe("utility methods", () => {
        it("clone", () => {
            const v = new Vector2(3, 4);
            const clone = v.clone();
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            // Ensure it's a different object
            v.x = 5;
            assertEquals(clone.x, 3);
        });

        it("equals", () => {
            const v1 = new Vector2(3, 4);
            const v2 = new Vector2(3, 4);
            const v3 = new Vector2(5, 4);
            assertEquals(v1.equals(v2), true);
            assertEquals(v1.equals(v3), false);

            // Test static equals
            assertEquals(Vector2.equals(v1, v2), true);
            assertEquals(Vector2.equals(v1, v3), false);
        });

        it("isZero", () => {
            assertEquals(vec0_0.isZero(), true);
            assertEquals(vec5_0.isZero(), false);
        });

        it("set", () => {
            const v = new Vector2();
            v.set({ x: 3, y: 4 });
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("setData", () => {
            const v = new Vector2();
            v.setData(3, 4);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("toArray", () => {
            const arr = new Vector2(3, 4).toArray();
            assertEquals(arr[0], 3);
            assertEquals(arr[1], 4);
        });

        it("toString", () => {
            assertEquals(new Vector2(3, 4).toString(), "[3, 4]");

            // Test static toString
            assertEquals(Vector2.toString({ x: 3, y: 4 }), "[3, 4]");
            assertEquals(Vector2.toString({ x: 3.1415, y: 2.7182 }, 2), "[3.14, 2.72]");
        });

        it("toReadonlyProxy", () => {
            const v = new Vector2(3, 4);
            const proxy = v.toReadonlyProxy();
            assertEquals(proxy.x, 3);
            assertEquals(proxy.y, 4);

            // Change original
            v.x = 5;
            // Proxy should reflect changes
            assertEquals(proxy.x, 5);
        });
    });

    describe("static utility methods", () => {
        it("lerp", () => {
            const result = Vector2.lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.5);
            assertEquals(result.x, 5);
            assertEquals(result.y, 5);

            // Test with result parameter
            const target = new Vector2();
            Vector2.lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.25, target);
            assertEquals(target.x, 2.5);
            assertEquals(target.y, 2.5);
        });

        it("getAbs", () => {
            const result = Vector2.getAbs({ x: -3, y: -4 });
            assertEquals(result.x, 3);
            assertEquals(result.y, 4);

            // Test with result parameter
            const target = new Vector2();
            Vector2.getAbs({ x: -3, y: -4 }, target);
            assertEquals(target.x, 3);
            assertEquals(target.y, 4);
        });

        it("sum", () => {
            const result = Vector2.sum({ x: 3, y: 4 }, { x: 1, y: 2 });
            assertEquals(result.x, 4);
            assertEquals(result.y, 6);

            // Test with result parameter
            const target = new Vector2();
            Vector2.sum({ x: 3, y: 4 }, { x: 1, y: 2 }, target);
            assertEquals(target.x, 4);
            assertEquals(target.y, 6);
        });

        it("sub", () => {
            const result = Vector2.sub({ x: 3, y: 4 }, { x: 1, y: 2 });
            assertEquals(result.x, 2);
            assertEquals(result.y, 2);

            // Test with result parameter
            const target = new Vector2();
            Vector2.sub({ x: 3, y: 4 }, { x: 1, y: 2 }, target);
            assertEquals(target.x, 2);
            assertEquals(target.y, 2);
        });

        it("min", () => {
            const result = Vector2.min({ x: 3, y: 4 }, { x: 1, y: 5 });
            assertEquals(result.x, 1);
            assertEquals(result.y, 4);

            // Test with result parameter
            const target = new Vector2();
            Vector2.min({ x: 3, y: 4 }, { x: 1, y: 5 }, target);
            assertEquals(target.x, 1);
            assertEquals(target.y, 4);
        });

        it("max", () => {
            const result = Vector2.max({ x: 3, y: 4 }, { x: 1, y: 5 });
            assertEquals(result.x, 3);
            assertEquals(result.y, 5);

            // Test with result parameter
            const target = new Vector2();
            Vector2.max({ x: 3, y: 4 }, { x: 1, y: 5 }, target);
            assertEquals(target.x, 3);
            assertEquals(target.y, 5);
        });

        it("isVector", () => {
            assertEquals(Vector2.isVector({ x: 3, y: 4 }), true);
            assertEquals(Vector2.isVector({ x: "3", y: 4 }), false);
            assertEquals(Vector2.isVector({ x: 3 }), false);
            assertEquals(Vector2.isVector(null), false);
        });
    });
});
