import type { SimpleVector3 } from "@g43/types";

/**
 * @see Sphere
 */
export class BoundingSphere {
    public constructor(
        public readonly center: SimpleVector3,
        public radius: number,
    ) {
    }
}
