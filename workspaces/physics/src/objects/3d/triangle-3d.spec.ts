import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Triangle3D } from "./triangle-3d.ts";
import { Vector3 } from "@g43/math";

describe("Triangle3d", () => {
    describe("area", () => {
        it("Should calculate areaA", () => {
            const triangle = new Triangle3D(
                new Vector3(0, 0, 0),
                new Vector3(1, 0, 0),
                new Vector3(0, 1, 0),
            )

            expect(triangle.area).toBe(0.5);
        })
        it("Should calculate areaB", () => {
            const triangle = new Triangle3D(
                new Vector3(0, 0, 0),
                new Vector3(2, 0, 0),
                new Vector3(0, 2, 0),
            )

            expect(triangle.area).toBe(2);
        })
    })
})