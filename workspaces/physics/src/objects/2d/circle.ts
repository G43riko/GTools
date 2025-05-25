import { Vector2 } from "@g43/math";
import type { MinMax2D, PosSize2D, SimpleVector2 } from "@g43/types";
import { convertPosSizeToMinMax2D } from "../object-2d-convertors.ts";
import type { MassAble2D } from "./object-2d.ts";
import type { RayCast2D, RaycastResult } from "./ray-2d.ts";

/**
 * @see https://github.com/schteppe/p2.js/blob/master/src/shapes/Circle.js
 * @see https://github.com/excaliburjs/Excalibur/blob/main/src/engine/Collision/Colliders/CircleCollider.ts
 */
export class Circle implements MassAble2D {
    public readonly radius: number;
    public readonly center: SimpleVector2;
    /** Gets the circumference of the circle */
    public get circuit(): number {
        return 2 * Math.PI * this.radius;
    }

    /** Gets the moment of inertia of the circle around its center */
    public get momentOfInertia(): number {
        const r = this.radius;

        return r * r / 2;
    }

    /** Gets the radius of the smallest circle that completely contains this circle */
    public get boundingRadius(): number {
        return this.radius;
    }

    /** Gets the area of the circle */
    public get area(): number {
        return Math.PI * this.radius * this.radius;
    }

    /**
     * Creates a circle from a bounding box
     * @param param0 The minimum and maximum coordinates of the bounding box
     * @param chooseSize Whether to use the minimum or maximum dimension for the circle's diameter
     * @returns A new Circle instance
     */
    public static fromMinMax({ min, max }: MinMax2D, chooseSize: "min" | "max" = "max"): Circle {
        const center = {
            x: (min.x + max.x) / 2,
            y: (min.y + max.y) / 2,
        };

        const sizeX = max.x - min.x;
        const sizeY = max.y - min.y;

        const radius = chooseSize === "min" ? Math.min(sizeX, sizeY) : Math.max(sizeX, sizeY);

        return new Circle(radius, center);
    }

    /**
     * Creates a circle from position and size
     * @param posSize The position and size parameters
     * @param chooseSize Whether to use the minimum or maximum dimension for the circle's diameter
     * @returns A new Circle instance
     */
    public static fromPosSize(posSize: PosSize2D, chooseSize: "min" | "max" = "max"): Circle {
        return Circle.fromMinMax(convertPosSizeToMinMax2D(posSize), chooseSize);
    }

    /**
     * Creates a new Circle instance
     * @param radius The radius of the circle
     * @param center The center point of the circle
     */
    public constructor(
        radius: number,
        center: SimpleVector2,
    ) {
        this.radius = radius;
        this.center = center;
    }

    /**
     * Converts the circle to its axis-aligned bounding box
     * @returns The minimum and maximum coordinates of the bounding box
     */
    public toMinMax(): MinMax2D {
        return {
            min: Vector2.sumNum(this.center, -this.radius),
            max: Vector2.sumNum(this.center, this.radius),
        };
    }

    /**
     * Calculates the intersection points between the circle and a ray
     * @param result The object to store the raycast results
     * @param ray The ray to test for intersection
     */
    public raycast(result: RaycastResult, ray: RayCast2D): void {
        const from = ray.from;
        const to = ray.to;
        const r = this.radius;

        const position = Vector2.fromVec(this.center);

        const a = (to.x - from.x) ** 2 + (to.y - from.y) ** 2;
        const b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y));
        const c = (from.x - position.x) ** 2 + (from.y - position.y) ** 2 - r ** 2;
        const delta = b ** 2 - 4 * a * c;

        const intersectionPoint = new Vector2();
        const normal = new Vector2();

        if (delta < 0) {
            // No intersection
            return;
        }
        if (delta === 0) {
            // single intersection point
            intersectionPoint.set(Vector2.lerp(from, to, delta));

            Vector2.sub(intersectionPoint, position, normal);
            Vector2.normalize(normal, normal);

            ray.reportIntersection(result, delta, normal, -1);
        } else {
            const sqrtDelta = Math.sqrt(delta);
            const inv2a = 1 / (2 * a);
            const d1 = (-b - sqrtDelta) * inv2a;
            const d2 = (-b + sqrtDelta) * inv2a;

            if (d1 >= 0 && d1 <= 1) {
                intersectionPoint.set(Vector2.lerp(from, to, d1));

                Vector2.sub(intersectionPoint, position, normal);
                Vector2.normalize(normal);

                ray.reportIntersection(result, d1, normal, -1);

                if (result.shouldStop(ray)) {
                    return;
                }
            }

            if (d2 >= 0 && d2 <= 1) {
                intersectionPoint.set(Vector2.lerp(from, to, d2));

                Vector2.sub(intersectionPoint, position, normal);
                Vector2.normalize(normal);

                ray.reportIntersection(result, d2, normal, -1);
            }
        }
    }
}
