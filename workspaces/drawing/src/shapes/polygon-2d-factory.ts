import { Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { AdvancedPolygon2d } from "./advanced-polygon-2d.ts";
import type { Polygon2d } from "./polygon-2d.ts";

export class Polygon2dFactory {
    private normalized: boolean;
    private centered: boolean;
    private points!: readonly ReadonlySimpleVector2[];

    public constructor(
        points: readonly ReadonlySimpleVector2[],
        params: { normalized?: boolean; centered?: boolean } = {},
    ) {
        this.normalized = !!params.normalized;
        this.centered = !!params.centered;

        this.setPoints(points);
    }

    /**
     * transformPoints(points, true, false) - make points centered
     * transformPoints(points, false, true) - make point coordinates in range [0, 1]
     * transformPoints(points, true, true) - make point coordinates in range [-1, 1]
     * @param points
     * @param centered
     * @param normalized
     * @private
     */
    private static transformPoints(
        points: readonly ReadonlySimpleVector2[],
        centered: boolean,
        normalized: boolean,
    ): readonly ReadonlySimpleVector2[] {
        if (centered) {
            const center = Vector2.center(points);

            if (normalized) {
                throw new Error("Not implemented");
            }

            return points.map((p) => ({
                x: p.x - center.x,
                y: p.y - center.y,
            }));
        }

        if (normalized) {
            throw new Error("Not implemented");
        }

        return points;
    }

    public setCentered(centered: boolean): this {
        if (this.centered) {
            return this;
        }

        this.centered = centered;

        return this.setPoints(this.points);
    }

    public setNormalized(normalized: boolean): this {
        if (this.normalized) {
            return this;
        }

        this.normalized = normalized;

        return this.setPoints(this.points);
    }

    public setPoints(points: readonly ReadonlySimpleVector2[]): this {
        this.points = Polygon2dFactory.transformPoints(points, this.normalized, this.centered);

        return this;
    }

    public getPolygon2d(): Polygon2d {
        throw new Error("Not implemented");
    }

    public getAdvancedPolygon2d(): AdvancedPolygon2d {
        return new AdvancedPolygon2d(this.points);
    }
}
