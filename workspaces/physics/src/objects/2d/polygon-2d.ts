import { Vector2 } from "@g43/math";
import type { MinMax2D, ReadonlySimpleVector2 } from "@g43/types";
import type { MassAble2D } from "./object-2d.ts";

/**
 * https://github.com/excaliburjs/Excalibur/blob/main/src/engine/Collision/Colliders/PolygonCollider.ts
 */
export class Polygon2d implements MassAble2D {
    public get boundingRadius(): number {
        throw new Error("Not implemented");
    }

    /**
     * Get the moment of inertia for an arbitrary polygon
     * https://en.wikipedia.org/wiki/List_of_moments_of_inertia
     */
    public get momentOfInertia(): number {
        let numerator = 0;
        let denominator = 0;
        for (let i = 0; i < this.points.length; i++) {
            const iplusone = (i + 1) % this.points.length;
            const crossTerm = Vector2.cross(this.points[iplusone], this.points[i]);

            numerator += crossTerm *
                (Vector2.dot(this.points[i], this.points[i]) +
                    Vector2.dot(this.points[i], this.points[iplusone]) +
                    Vector2.dot(this.points[iplusone], this.points[iplusone]));
            denominator += crossTerm;
        }

        return numerator / denominator;
    }

    public constructor(private readonly points: readonly ReadonlySimpleVector2[]) {
    }

    /**
     * https://stackoverflow.com/questions/16285134/calculating-polygon-area
     * @param mass
     */
    public getInertia(mass: number): number {
        return (mass / 6) * this.momentOfInertia;
    }

    /**
     * https://stackoverflow.com/questions/16285134/calculating-polygon-area
     */
    public get area(): number {
        const vertices = this.points;
        let total = 0;

        for (let i = 0, l = vertices.length; i < l; i++) {
            const addX = vertices[i].x;
            const addY = vertices[i === vertices.length - 1 ? 0 : i + 1].y;
            const subX = vertices[i === vertices.length - 1 ? 0 : i + 1].x;
            const subY = vertices[i].y;

            total += addX * addY * 0.5;
            total -= subX * subY * 0.5;
        }

        return Math.abs(total);
    }

    public isConvex(): boolean {
        // From SO: https://stackoverflow.com/a/45372025
        if (this.points.length < 3) {
            return false;
        }
        let oldPoint = this.points[this.points.length - 2];
        let newPoint = this.points[this.points.length - 1];
        let direction = Math.atan2(newPoint.y - oldPoint.y, newPoint.x - oldPoint.x);
        let oldDirection = 0;
        let orientation = 0;
        let angleSum = 0;
        for (const [i, point] of this.points.entries()) {
            oldPoint = newPoint;
            oldDirection = direction;
            newPoint = point;
            direction = Math.atan2(newPoint.y - oldPoint.y, newPoint.x - oldPoint.x);
            if (Vector2.equals(oldPoint, newPoint)) {
                return false; // repeat point
            }
            let angle = direction - oldDirection;
            if (angle <= -Math.PI) {
                angle += Math.PI * 2;
            } else if (angle > Math.PI) {
                angle -= Math.PI * 2;
            }
            if (i === 0) {
                if (angle === 0.0) {
                    return false;
                }
                orientation = angle > 0 ? 1 : -1;
            } else {
                if (orientation * angle <= 0) {
                    return false;
                }
            }
            angleSum += angle;
        }

        return Math.abs(Math.round(angleSum / (Math.PI * 2))) === 1;
    }

    /**
     * @see https://github.com/excaliburjs/Excalibur/blob/57443406c943ceebc208d120ece978fc46297dc2/src/engine/Collision/Colliders/PolygonCollider.ts#L140
     */
    public triangulate(): void {
        throw new Error("Not implemented");
    }

    public get circuit(): number {
        let sum = 0;
        for (let i = 1; i < this.points.length; i++) {
            const p1 = this.points[i - 1];
            const p2 = this.points[1];
            sum += Vector2.dist(p1, p2);
        }

        return sum + Vector2.dist(this.points[this.points.length - 1], this.points[0]);
    }

    public toMinMax(): MinMax2D {
        return Vector2.createOutlineMinMax(this.points);
    }
}
