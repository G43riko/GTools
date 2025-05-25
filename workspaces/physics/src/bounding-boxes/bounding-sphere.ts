import type { SimpleVector3 } from "@g43/types";

/**
 * @see Sphere
 */
export class BoundingSphere {
    public readonly center: SimpleVector3;
    public radius: number;
    public constructor(
        center: SimpleVector3,
        radius: number,
    ) {
        this.center = center;
        this.radius = radius;
    }
}
