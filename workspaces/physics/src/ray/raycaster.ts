import type { SimpleVector3 } from "@g43/types";
import { Ray3D } from "../objects/3d/ray-3d.ts";

export class RayCaster {
    private readonly near: number;
    private readonly far: number;
    private readonly ray: Ray3D;

    public constructor(
        origin: SimpleVector3,
        direction: SimpleVector3,
        near = 0,
        far = Infinity,
    ) {
        this.near = near;
        this.far = far;
        this.ray = new Ray3D(origin, direction);
    }
}
