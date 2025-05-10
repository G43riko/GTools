import { Vector2 } from "@g43/math";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { Ray2D, RayCast2D, RaycastResult, RayMode } from "./ray-2d.ts";

describe("Ray2D", () => {
    describe("construction", () => {
        it("should create a ray with origin, direction, and length", () => {
            const origin = { x: 10, y: 20 };
            const direction = { x: 1, y: 0 };
            const length = 30;
            const ray = new Ray2D(origin, direction, length);
            
            expect(ray.origin).toBe(origin);
            expect(ray.direction).toBe(direction);
            expect(ray.length).toBe(length);
        });
        
        it("should default length to Infinity if not provided", () => {
            const origin = { x: 10, y: 20 };
            const direction = { x: 1, y: 0 };
            const ray = new Ray2D(origin, direction);
            
            expect(ray.length).toBe(Infinity);
        });
        
        it("should create a ray from line segment", () => {
            const start = { x: 10, y: 20 };
            const end = { x: 40, y: 20 };
            const ray = Ray2D.fromLine(start, end);
            
            expect(ray.origin).toBe(start);
            expect(ray.direction.x).toBeCloseTo(1);
            expect(ray.direction.y).toBeCloseTo(0);
            expect(ray.length).toBeCloseTo(30);
        });
        
        it("should normalize direction when creating from line segment", () => {
            const start = { x: 10, y: 20 };
            const end = { x: 40, y: 50 };
            const ray = Ray2D.fromLine(start, end);
            
            // Direction should be normalized
            const dirLength = Math.sqrt(ray.direction.x * ray.direction.x + ray.direction.y * ray.direction.y);
            expect(dirLength).toBeCloseTo(1);
        });
    });
    
    describe("properties", () => {
        it("should calculate end point", () => {
            const origin = { x: 10, y: 20 };
            const direction = { x: 1, y: 0 };
            const length = 30;
            const ray = new Ray2D(origin, direction, length);
            
            const end = ray.end;
            expect(end.x).toBeCloseTo(40); // 10 + 30*1
            expect(end.y).toBeCloseTo(20); // 20 + 30*0
        });
        
        it("should calculate end point with non-unit direction", () => {
            const origin = { x: 10, y: 20 };
            const direction = { x: 2, y: 0 }; // Non-unit direction
            const length = 15;
            const ray = new Ray2D(origin, direction, length);
            
            const end = ray.end;
            expect(end.x).toBeCloseTo(40); // 10 + 15*2
            expect(end.y).toBeCloseTo(20); // 20 + 15*0
        });
    });
});

describe("RaycastResult", () => {
    describe("initialization", () => {
        it("should initialize with default values", () => {
            const result = new RaycastResult();
            
            expect(result.normal.x).toBe(0);
            expect(result.normal.y).toBe(0);
            expect(result.shape).toBeUndefined();
            expect(result.body).toBeUndefined();
            expect(result.faceIndex).toBe(-1);
            expect(result.fraction).toBe(-1);
            expect(result.isStopped).toBe(false);
        });
    });
    
    describe("methods", () => {
        it("should reset to default values", () => {
            const result = new RaycastResult();
            result.normal.setData(1, 0);
            result.shape = "shape";
            result.body = "body";
            result.faceIndex = 1;
            result.fraction = 0.5;
            result.isStopped = true;
            
            result.reset();
            
            expect(result.normal.x).toBe(0);
            expect(result.normal.y).toBe(0);
            expect(result.shape).toBeNull();
            expect(result.body).toBeNull();
            expect(result.faceIndex).toBe(-1);
            expect(result.fraction).toBe(-1);
            expect(result.isStopped).toBe(false);
        });
        
        it("should check if there was a hit", () => {
            const result = new RaycastResult();
            expect(result.hasHit()).toBe(false);
            
            result.fraction = 0.5;
            expect(result.hasHit()).toBe(true);
        });
        
        it("should calculate hit distance", () => {
            const result = new RaycastResult();
            result.fraction = 0.5;
            
            const ray = new RayCast2D(new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            ));
            
            const distance = result.getHitDistance(ray);
            expect(distance).toBeCloseTo(15); // 30 * 0.5
        });
        
        it("should calculate hit point", () => {
            const result = new RaycastResult();
            result.fraction = 0.5;
            
            const ray = new RayCast2D(new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            ));
            
            const hitPoint = result.getHitPoint(ray);
            expect(hitPoint.x).toBeCloseTo(25); // 10 + (40-10)*0.5
            expect(hitPoint.y).toBeCloseTo(20); // 20 + (20-20)*0.5
        });
        
        it("should stop the raycast", () => {
            const result = new RaycastResult();
            expect(result.isStopped).toBe(false);
            
            result.stop();
            expect(result.isStopped).toBe(true);
        });
        
        it("should check if raycast should stop", () => {
            const result = new RaycastResult();
            const ray = new RayCast2D(new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            ));
            
            // Not stopped, no hit, mode ANY
            ray.mode = RayMode.ANY;
            expect(result.shouldStop(ray)).toBe(false);
            
            // Not stopped, has hit, mode ANY
            result.fraction = 0.5;
            expect(result.shouldStop(ray)).toBe(true);
            
            // Not stopped, has hit, mode CLOSEST
            ray.mode = RayMode.CLOSEST;
            expect(result.shouldStop(ray)).toBe(false);
            
            // Stopped, has hit, mode CLOSEST
            result.isStopped = true;
            expect(result.shouldStop(ray)).toBe(true);
        });
        
        it("should set result values", () => {
            const result = new RaycastResult();
            const normal = { x: 1, y: 0 };
            const shape = "shape";
            const body = "body";
            const fraction = 0.5;
            const faceIndex = 1;
            
            result.set(normal, shape, body, fraction, faceIndex);
            
            expect(result.normal.x).toBe(1);
            expect(result.normal.y).toBe(0);
            expect(result.shape).toBe(shape);
            expect(result.body).toBe(body);
            expect(result.fraction).toBe(fraction);
            expect(result.faceIndex).toBe(faceIndex);
        });
    });
});

describe("RayCast2D", () => {
    describe("initialization", () => {
        it("should initialize with default values", () => {
            const ray = new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            );
            const rayCast = new RayCast2D(ray);
            
            expect(rayCast.ray).toBe(ray);
            expect(rayCast.checkCollisionResponse).toBe(true);
            expect(rayCast.skipBackfaces).toBe(false);
            expect(rayCast.collisionMask).toBe(-1);
            expect(rayCast.collisionGroup).toBe(-1);
            expect(rayCast.mode).toBe(RayMode.ANY);
            expect(rayCast.callback).toBeUndefined();
        });
    });
    
    describe("properties", () => {
        it("should provide access to ray properties", () => {
            const origin = { x: 10, y: 20 };
            const direction = { x: 1, y: 0 };
            const ray = new Ray2D(origin, direction, 30);
            const rayCast = new RayCast2D(ray);
            
            expect(rayCast.from).toBe(origin);
            expect(rayCast.direction).toBe(direction);
            expect(rayCast.to.x).toBeCloseTo(40);
            expect(rayCast.to.y).toBeCloseTo(20);
        });
    });
    
    describe("reportIntersection", () => {
        it("should report intersection in ANY mode", () => {
            const ray = new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            );
            const rayCast = new RayCast2D(ray);
            rayCast.mode = RayMode.ANY;
            
            const result = new RaycastResult();
            const normal = new Vector2(0, 1);
            
            rayCast.reportIntersection(result, 0.5, normal, 1);
            
            expect(result.fraction).toBe(0.5);
            expect(result.normal.x).toBe(0);
            expect(result.normal.y).toBe(1);
            expect(result.faceIndex).toBe(1);
        });
        
        it("should report closest intersection in CLOSEST mode", () => {
            const ray = new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            );
            const rayCast = new RayCast2D(ray);
            rayCast.mode = RayMode.CLOSEST;
            
            const result = new RaycastResult();
            const normal1 = new Vector2(0, 1);
            const normal2 = new Vector2(0, -1);
            
            // First intersection at 0.7
            rayCast.reportIntersection(result, 0.7, normal1, 1);
            expect(result.fraction).toBe(0.7);
            
            // Second intersection at 0.3 (closer)
            rayCast.reportIntersection(result, 0.3, normal2, 2);
            expect(result.fraction).toBe(0.3);
            expect(result.normal.x).toBe(0);
            expect(result.normal.y).toBe(-1);
            expect(result.faceIndex).toBe(2);
            
            // Third intersection at 0.5 (not as close as 0.3)
            rayCast.reportIntersection(result, 0.5, normal1, 3);
            expect(result.fraction).toBe(0.3); // Still the closest
        });
        
        it("should call callback for each intersection in ALL mode", () => {
            const ray = new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            );
            const rayCast = new RayCast2D(ray);
            rayCast.mode = RayMode.ALL;
            
            let callCount = 0;
            rayCast.callback = () => {
                callCount++;
            };
            
            const result = new RaycastResult();
            const normal = new Vector2(0, 1);
            
            rayCast.reportIntersection(result, 0.3, normal, 1);
            rayCast.reportIntersection(result, 0.5, normal, 2);
            rayCast.reportIntersection(result, 0.7, normal, 3);
            
            expect(callCount).toBe(3);
        });
        
        it("should skip backfaces when skipBackfaces is true", () => {
            const ray = new Ray2D(
                { x: 10, y: 20 },
                { x: 1, y: 0 },
                30
            );
            const rayCast = new RayCast2D(ray);
            rayCast.skipBackfaces = true;
            rayCast.mode = RayMode.ANY;
            
            const result = new RaycastResult();
            
            // Normal pointing in same direction as ray (backface)
            const backfaceNormal = new Vector2(1, 0);
            rayCast.reportIntersection(result, 0.5, backfaceNormal, 1);
            expect(result.fraction).toBe(-1); // No hit reported
            
            // Normal pointing in opposite direction as ray (front face)
            const frontfaceNormal = new Vector2(-1, 0);
            rayCast.reportIntersection(result, 0.7, frontfaceNormal, 2);
            expect(result.fraction).toBe(0.7); // Hit reported
        });
    });
});
