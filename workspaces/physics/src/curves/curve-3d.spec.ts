import { Vector3 } from "@g43/math";
import type { ReadonlySimpleVector3 } from "@g43/types";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { Curve3D } from "./curve-3d.ts";

// Concrete implementation of Curve3D for testing
class LineCurve3D extends Curve3D {
    constructor(start: ReadonlySimpleVector3, end: ReadonlySimpleVector3) {
        super([start, end]);
    }

    public getPointAt(t: number): ReadonlySimpleVector3 {
        // Linear interpolation between start and end points
        const start = this.points[0];
        const end = this.points[1];
        return this.lerp(start, end, t);
    }
}

describe("Curve3D", () => {
    describe("lerp", () => {
        it("should linearly interpolate between two points", () => {
            const start = { x: 0, y: 0, z: 0 };
            const end = { x: 10, y: 20, z: 30 };
            const curve = new LineCurve3D(start, end);
            
            // Test private method through the getPointAt method
            const midpoint = curve.getPointAt(0.5);
            expect(midpoint.x).toBe(5);
            expect(midpoint.y).toBe(10);
            expect(midpoint.z).toBe(15);
            
            const quarterPoint = curve.getPointAt(0.25);
            expect(quarterPoint.x).toBe(2.5);
            expect(quarterPoint.y).toBe(5);
            expect(quarterPoint.z).toBe(7.5);
            
            const threeQuarterPoint = curve.getPointAt(0.75);
            expect(threeQuarterPoint.x).toBe(7.5);
            expect(threeQuarterPoint.y).toBe(15);
            expect(threeQuarterPoint.z).toBe(22.5);
        });
    });
    
    describe("getPointAtArc", () => {
        it("should return the same result as getPointAt", () => {
            const start = { x: 0, y: 0, z: 0 };
            const end = { x: 10, y: 20, z: 30 };
            const curve = new LineCurve3D(start, end);
            
            const point1 = curve.getPointAt(0.5);
            const point2 = curve.getPointAtArc(0.5);
            
            expect(point1).toEqual(point2);
        });
    });
    
    describe("getPoints", () => {
        it("should return an array of points along the curve", () => {
            const start = { x: 0, y: 0, z: 0 };
            const end = { x: 10, y: 20, z: 30 };
            const curve = new LineCurve3D(start, end);
            
            const points = curve.getPoints(4);
            
            expect(points.length).toBe(5); // divisions + 1
            
            expect(points[0]).toEqual({ x: 0, y: 0, z: 0 });
            expect(points[1]).toEqual({ x: 2.5, y: 5, z: 7.5 });
            expect(points[2]).toEqual({ x: 5, y: 10, z: 15 });
            expect(points[3]).toEqual({ x: 7.5, y: 15, z: 22.5 });
            expect(points[4]).toEqual({ x: 10, y: 20, z: 30 });
        });
    });
    
    describe("computeFrenetFrames", () => {
        it("should compute tangents, normals, and binormals for a straight line", () => {
            const start = { x: 0, y: 0, z: 0 };
            const end = { x: 10, y: 0, z: 0 }; // Line along x-axis
            const curve = new LineCurve3D(start, end);
            
            const segments = 4;
            const closed = false;
            const frames = curve.computeFrenetFrames(segments, closed);
            
            expect(frames.tangents.length).toBe(segments + 1);
            expect(frames.normals.length).toBe(segments + 1);
            expect(frames.binormals.length).toBe(segments + 1);
            
            // For a line along x-axis, all tangents should point in x direction
            for (const tangent of frames.tangents) {
                expect(tangent.x).toBeCloseTo(1);
                expect(tangent.y).toBeCloseTo(0);
                expect(tangent.z).toBeCloseTo(0);
            }
            
            // For a line along x-axis, normals could be in y or z direction
            // Let's check that they're perpendicular to tangents
            for (let i = 0; i < frames.normals.length; i++) {
                const tangent = frames.tangents[i];
                const normal = frames.normals[i];
                const binormal = frames.binormals[i];
                
                // Normal should be perpendicular to tangent
                expect(tangent.dot(normal)).toBeCloseTo(0);
                
                // Binormal should be perpendicular to both tangent and normal
                expect(tangent.dot(binormal)).toBeCloseTo(0);
                expect(normal.dot(binormal)).toBeCloseTo(0);
                
                // Binormal should be the cross product of tangent and normal
                const crossProduct = new Vector3().set(tangent.cross(normal));
                expect(binormal.x).toBeCloseTo(crossProduct.x);
                expect(binormal.y).toBeCloseTo(crossProduct.y);
                expect(binormal.z).toBeCloseTo(crossProduct.z);
            }
        });
        
        it("should compute frames for a curve in 3D space", () => {
            const start = { x: 0, y: 0, z: 0 };
            const end = { x: 10, y: 10, z: 10 }; // Diagonal line
            const curve = new LineCurve3D(start, end);
            
            const segments = 4;
            const closed = false;
            const frames = curve.computeFrenetFrames(segments, closed);
            
            expect(frames.tangents.length).toBe(segments + 1);
            expect(frames.normals.length).toBe(segments + 1);
            expect(frames.binormals.length).toBe(segments + 1);
            
            // For a diagonal line, tangents should point in the direction of the line
            const expectedDirection = new Vector3(10, 10, 10).normalize();
            for (const tangent of frames.tangents) {
                expect(tangent.x).toBeCloseTo(expectedDirection.x);
                expect(tangent.y).toBeCloseTo(expectedDirection.y);
                expect(tangent.z).toBeCloseTo(expectedDirection.z);
            }
            
            // Check orthogonality of frames
            for (let i = 0; i < frames.normals.length; i++) {
                const tangent = frames.tangents[i];
                const normal = frames.normals[i];
                const binormal = frames.binormals[i];
                
                // Normal should be perpendicular to tangent
                expect(tangent.dot(normal)).toBeCloseTo(0);
                
                // Binormal should be perpendicular to both tangent and normal
                expect(tangent.dot(binormal)).toBeCloseTo(0);
                expect(normal.dot(binormal)).toBeCloseTo(0);
            }
        });
        
        it("should handle closed curves", () => {
            // For a closed curve test, we'll still use a line but set closed=true
            const start = { x: 0, y: 0, z: 0 };
            const end = { x: 10, y: 0, z: 0 };
            const curve = new LineCurve3D(start, end);
            
            const segments = 4;
            const closed = true;
            const frames = curve.computeFrenetFrames(segments, closed);
            
            expect(frames.tangents.length).toBe(segments + 1);
            expect(frames.normals.length).toBe(segments + 1);
            expect(frames.binormals.length).toBe(segments + 1);
            
            // For a closed curve, the first and last normal vectors should be similar
            // (they might not be exactly the same due to numerical precision)
            const firstNormal = frames.normals[0];
            const lastNormal = frames.normals[segments];
            
            // The dot product should be close to 1 if they're pointing in the same direction
            const dotProduct = firstNormal.dot(lastNormal);
            expect(dotProduct).toBeGreaterThan(0.9);
        });
    });
});
