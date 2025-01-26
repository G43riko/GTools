import { Vector3 } from "@g43/math";
import { Ray3D } from "../objects/3d/ray-3d.ts";

export class Ray3Iterable extends Ray3D {
    protected readonly position: Vector3 = new Vector3(this.origin.x, this.origin.y, this.origin.z);

    public step(scale: number): void {
        this.position.add({
            x: this.direction.x * scale,
            y: this.direction.y * scale,
            z: this.direction.z * scale,
        });
    }
}
