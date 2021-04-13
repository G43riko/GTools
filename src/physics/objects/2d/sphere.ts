import { SimpleVector2, Vector2 } from "../../../math";
import { MinMax2D, PosSize2d } from "../../../types";
import { convertPosSizeToMinMax } from "../object-convertors";
import { MassAble2D } from "./object2-d";
import { RayCast, RaycastResult } from "./ray-2d";

/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Circle.js
 */
export class Sphere implements MassAble2D {
    public constructor(
        public readonly radius: number,
        public readonly center: SimpleVector2,
    ) {
    }

    public get circuit(): number {
        return 2 * Math.PI * this.radius;
    }

    public get momentOfInertia(): number {
        const r = this.radius;

        return r * r / 2;
    }

    public get boundingRadius(): number {
        return this.radius;
    }

    public get area(): number {
        return Math.PI * this.radius * this.radius;
    }

    public static fromMinMax({min, max}: MinMax2D, chooseSize: "min" | "max" = "max"): Sphere {
        const center = {
            x: (min.x + max.x) / 2,
            y: (min.y + max.y) / 2,
        };

        const sizeX = max.x - min.x;
        const sizeY = max.y - min.y;

        const radius = chooseSize === "min" ? Math.min(sizeX, sizeY) : Math.max(sizeX, sizeY);

        return new Sphere(radius, center);
    }

    public static fromPosSize(posSize: PosSize2d, chooseSize: "min" | "max" = "max"): Sphere {
        return Sphere.fromMinMax(convertPosSizeToMinMax(posSize), chooseSize);
    }

    public toMinMax(): MinMax2D {
        return {
            min: Vector2.addNum(this.center, -this.radius),
            max: Vector2.addNum(this.center, this.radius),
        };
    }

    public raycast(result: RaycastResult, ray: RayCast): void {
        const from = ray.from;
        const to   = ray.to;
        const r    = this.radius;

        const position = new Vector2(this.center.x, this.center.y);

        const a     = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2);
        const b     = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y));
        const c     = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) - Math.pow(r, 2);
        const delta = Math.pow(b, 2) - 4 * a * c;

        const intersectionPoint = new Vector2();
        const normal            = new Vector2();

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
            const inv2a     = 1 / (2 * a);
            const d1        = (-b - sqrtDelta) * inv2a;
            const d2        = (-b + sqrtDelta) * inv2a;

            if (d1 >= 0 && d1 <= 1) {
                intersectionPoint.set(Vector2.lerp(from, to, d1));

                Vector2.sub(intersectionPoint, position, normal);
                Vector2.normalize(normal, normal);

                ray.reportIntersection(result, d1, normal, -1);

                if (result.shouldStop(ray)) {
                    return;
                }
            }

            if (d2 >= 0 && d2 <= 1) {
                intersectionPoint.set(Vector2.lerp(from, to, d2));

                Vector2.sub(intersectionPoint, position, normal);
                Vector2.normalize(normal, normal);

                ray.reportIntersection(result, d2, normal, -1);
            }
        }
    }
}
