import type { SimpleVector2 } from "@g43/types";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import {
    collision3dBoxBox,
    collision3dCylinderCylinder,
    collision3dLineBox2,
    collision3dLineSphere,
    collision3dPointBox,
    collision3dPointEllipsoid,
    collision3dPointSphere,
    collision3dSphereBoxMinMax,
    collision3dSphereSphere,
    IntersectionType
} from "./collisions-3d.ts";

describe("Collisions3d", () => {
    describe("sphere-sphere", () => {
        it("should detect collision for overlapping spheres", () => {
            expect(collision3dSphereSphere(0, 0, 0, 10, 0, 0, 0, 10)).toBeTruthy();
            expect(collision3dSphereSphere(0, 0, 0, 10, 5, 5, 5, 10)).toBeTruthy();
        });
        
        it("should detect collision for touching spheres", () => {
            expect(collision3dSphereSphere(0, 0, 0, 10, 20, 0, 0, 10)).toBeTruthy();
            expect(collision3dSphereSphere(0, 0, 0, 10, 0, 20, 0, 10)).toBeTruthy();
            expect(collision3dSphereSphere(0, 0, 0, 10, 0, 0, 20, 10)).toBeTruthy();
        });
        
        it("should not detect collision for non-touching spheres", () => {
            expect(collision3dSphereSphere(0, 0, 0, 10, 21, 0, 0, 10)).toBeFalsy();
            expect(collision3dSphereSphere(0, 0, 0, 10, 0, 21, 0, 10)).toBeFalsy();
            expect(collision3dSphereSphere(0, 0, 0, 10, 0, 0, 21, 10)).toBeFalsy();
            expect(collision3dSphereSphere(0, 0, 0, 10, 15, 15, 15, 10)).toBeFalsy();
        });
    });

    describe("point-sphere", () => {
        it("should detect collision for point inside sphere", () => {
            expect(collision3dPointSphere(0, 0, 0, 0, 0, 0, 10)).toBeTruthy();
            expect(collision3dPointSphere(5, 5, 5, 0, 0, 0, 10)).toBeTruthy();
        });
        
        it("should detect collision for point on sphere surface", () => {
            expect(collision3dPointSphere(10, 0, 0, 0, 0, 0, 10)).toBeTruthy();
            expect(collision3dPointSphere(0, 10, 0, 0, 0, 0, 10)).toBeTruthy();
            expect(collision3dPointSphere(0, 0, 10, 0, 0, 0, 10)).toBeTruthy();
        });
        
        it("should not detect collision for point outside sphere", () => {
            expect(collision3dPointSphere(11, 0, 0, 0, 0, 0, 10)).toBeFalsy();
            expect(collision3dPointSphere(0, 11, 0, 0, 0, 0, 10)).toBeFalsy();
            expect(collision3dPointSphere(0, 0, 11, 0, 0, 0, 10)).toBeFalsy();
            expect(collision3dPointSphere(7, 7, 7, 0, 0, 0, 10)).toBeFalsy();
        });
    });

    describe("line-sphere", () => {
        it("should detect collision for line passing through sphere", () => {
            expect(collision3dLineSphere(-15, 0, 0, 15, 0, 0, 0, 0, 0, 10)).toBeTruthy();
            expect(collision3dLineSphere(0, -15, 0, 0, 15, 0, 0, 0, 0, 10)).toBeTruthy();
            expect(collision3dLineSphere(0, 0, -15, 0, 0, 15, 0, 0, 0, 10)).toBeTruthy();
        });
        
        it.skip("should detect collision for line touching sphere", () => {
            expect(collision3dLineSphere(0, 10, -15, 0, 10, 15, 0, 0, 0, 10)).toBeTruthy();
            expect(collision3dLineSphere(10, 0, -15, 10, 0, 15, 0, 0, 0, 10)).toBeTruthy();
        });
        
        it("should not detect collision for line not touching sphere", () => {
            expect(collision3dLineSphere(0, 11, -15, 0, 11, 15, 0, 0, 0, 10)).toBeFalsy();
            expect(collision3dLineSphere(11, 0, -15, 11, 0, 15, 0, 0, 0, 10)).toBeFalsy();
        });
    });

    describe("box-box", () => {
        it("should detect collision for overlapping boxes", () => {
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 5, 5, 5, 10, 10, 10)).toBeTruthy();
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 0, 0, 0, 10, 10, 10)).toBeTruthy();
        });
        
        it.skip("should detect collision for touching boxes", () => {
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 10, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 0, 10, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 0, 0, 10, 10, 10, 10)).toBeTruthy();
        });
        
        it("should not detect collision for non-touching boxes", () => {
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 11, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 0, 11, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dBoxBox(0, 0, 0, 10, 10, 10, 0, 0, 11, 10, 10, 10)).toBeFalsy();
        });
    });

    describe("point-box", () => {
        it("should detect collision for point inside box", () => {
            expect(collision3dPointBox(5, 5, 5, 0, 0, 0, 10, 10, 10)).toBeTruthy();
        });
        
        it.skip("should detect collision for point on box edge", () => {
            expect(collision3dPointBox(0, 0, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointBox(10, 0, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointBox(0, 10, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointBox(0, 0, 10, 0, 0, 0, 10, 10, 10)).toBeTruthy();
        });
        
        it("should not detect collision for point outside box", () => {
            expect(collision3dPointBox(-1, 5, 5, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointBox(11, 5, 5, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointBox(5, -1, 5, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointBox(5, 11, 5, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointBox(5, 5, -1, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointBox(5, 5, 11, 0, 0, 0, 10, 10, 10)).toBeFalsy();
        });
    });

    describe("point-ellipsoid", () => {
        it("should detect collision for point inside ellipsoid", () => {
            expect(collision3dPointEllipsoid(0, 0, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointEllipsoid(5, 0, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointEllipsoid(0, 5, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointEllipsoid(0, 0, 5, 0, 0, 0, 10, 10, 10)).toBeTruthy();
        });
        
        it("should detect collision for point on ellipsoid surface", () => {
            expect(collision3dPointEllipsoid(10, 0, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointEllipsoid(0, 10, 0, 0, 0, 0, 10, 10, 10)).toBeTruthy();
            expect(collision3dPointEllipsoid(0, 0, 10, 0, 0, 0, 10, 10, 10)).toBeTruthy();
        });
        
        it("should not detect collision for point outside ellipsoid", () => {
            expect(collision3dPointEllipsoid(11, 0, 0, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointEllipsoid(0, 11, 0, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointEllipsoid(0, 0, 11, 0, 0, 0, 10, 10, 10)).toBeFalsy();
            expect(collision3dPointEllipsoid(7, 7, 7, 0, 0, 0, 10, 10, 10)).toBeFalsy();
        });
        
        it("should handle non-uniform ellipsoid", () => {
            expect(collision3dPointEllipsoid(15, 0, 0, 0, 0, 0, 20, 10, 10)).toBeTruthy();
            expect(collision3dPointEllipsoid(0, 15, 0, 0, 0, 0, 10, 20, 10)).toBeTruthy();
            expect(collision3dPointEllipsoid(0, 0, 15, 0, 0, 0, 10, 10, 20)).toBeTruthy();
            expect(collision3dPointEllipsoid(21, 0, 0, 0, 0, 0, 20, 10, 10)).toBeFalsy();
        });
    });

    describe("line-box2", () => {
        it("should detect intersection for line passing through box", () => {
            const result: SimpleVector2 = { x: 0, y: 0 };
            const type = collision3dLineBox2(
                -15, 0, 0, 15, 0, 0,  // Line from (-15,0,0) to (15,0,0)
                -10, -10, -10, 10, 10, 10,  // Box with min (-10,-10,-10) and max (10,10,10)
                result
            );
            expect(type).toBe(IntersectionType.TWO_INTERSECTION);
            expect(result.x).toBeGreaterThanOrEqual(0);
            expect(result.y).toBeLessThanOrEqual(1);
        });
        
        it("should detect when line is outside box", () => {
            const result: SimpleVector2 = { x: 0, y: 0 };
            const type = collision3dLineBox2(
                -15, 20, 0, 15, 20, 0,  // Line above the box
                -10, -10, -10, 10, 10, 10,
                result
            );
            expect(type).toBe(IntersectionType.OUTSIDE);
        });
    });

    describe("cylinder-cylinder", () => {
        it.skip("should detect collision for overlapping cylinders", () => {
            expect(collision3dCylinderCylinder(0, 0, 0, 10, 20, 0, 0, 0, 10, 20)).toBeTruthy();
            expect(collision3dCylinderCylinder(5, 0, 5, 10, 20, 0, 0, 0, 10, 20)).toBeTruthy();
        });
        
        it.skip("should detect collision for touching cylinders", () => {
            expect(collision3dCylinderCylinder(0, 0, 0, 10, 20, 20, 0, 0, 10, 20)).toBeTruthy();
        });
        
        it("should not detect collision for non-touching cylinders", () => {
            expect(collision3dCylinderCylinder(0, 0, 0, 10, 20, 21, 0, 0, 10, 20)).toBeFalsy();
            expect(collision3dCylinderCylinder(0, 30, 0, 10, 20, 0, 0, 0, 10, 20)).toBeFalsy();
        });
    });

    describe("sphere-box", () => {
        it("should detect collision for sphere overlapping box", () => {
            expect(collision3dSphereBoxMinMax(
                0, 0, 0, 100,  // Sphere at origin with radius 10
                -10, -10, -10, 10, 10, 10  // Box centered at origin
            )).toBeTruthy();
        });
        
        it("should detect collision for sphere touching box", () => {
            expect(collision3dSphereBoxMinMax(
                20, 0, 0, 100,  // Sphere at (20,0,0) with radius 10
                -10, -10, -10, 10, 10, 10  // Box centered at origin
            )).toBeTruthy();
        });
        
        it("should not detect collision for sphere not touching box", () => {
            expect(collision3dSphereBoxMinMax(
                25, 0, 0, 36,  // Sphere at (25,0,0) with radius 6 (6² = 36)
                -10, -10, -10, 10, 10, 10  // Box centered at origin
            )).toBeFalsy();
        });
    });
});
