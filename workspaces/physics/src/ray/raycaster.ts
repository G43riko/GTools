import type { SimpleVector3 } from "@g43/types";
import { Ray3D } from "../objects/3d/ray-3d.ts";

export class RayCaster {
    private readonly ray: Ray3D;

    public constructor(
        origin: SimpleVector3,
        direction: SimpleVector3,
        private readonly near = 0,
        private readonly far = Infinity,
    ) {
        this.ray = new Ray3D(origin, direction);
    }
}
