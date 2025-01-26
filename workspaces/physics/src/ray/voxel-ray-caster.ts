import { SimpleVector, Vector3 } from "@g43/math";
import type { ReadonlySimpleVector3, SimpleVector3 } from "@g43/types";
import { Ray3Iterable } from "./ray-3d-iterable.ts";
import { VoxelRayData } from "./voxel-ray-data.ts";

export class VoxelRayCaster<T extends { block: unknown; position: ReadonlySimpleVector3 }> extends Ray3Iterable {
    protected block: SimpleVector3;

    public constructor(
        private readonly world: { getBlockByPosition(x: number, y: number, z: number): T },
        private readonly blockSize: number,
        origin: ReadonlySimpleVector3,
        direction: ReadonlySimpleVector3,
    ) {
        super(
            origin,
            direction,
            100,
        );
        this.block = SimpleVector.create3(this.blockSize, this.blockSize, this.blockSize)
    }

    public getBlock(stepSize: number, maxLength: number): VoxelRayData<T> {
        const lastPosition = new Vector3();

        do {
            // const fixedPosition = Vector3.mulNum(this.position, 1 / this.blockSize);
            const fixedPosition = Object.assign({}, this.position);

            const block = this.world.getBlockByPosition(fixedPosition.x, fixedPosition.y, fixedPosition.z);

            // TODO: check transparency;
            if (block.block) {
                return new VoxelRayData<T>(fixedPosition, lastPosition, this.end, block);
            }
            lastPosition.set(fixedPosition);
            this.step(stepSize);
        } while (Vector3.dist(this.origin, this.position) < maxLength);

        return VoxelRayData.getEmpty();
    }
}
