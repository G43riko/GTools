import type { SimpleVector3 } from "@g43/types";

export class VoxelRayData<T> {
    public readonly fixedPosition: SimpleVector3 | undefined;
    public readonly lastPosition: SimpleVector3 | undefined;
    public readonly rayEnd: SimpleVector3 | undefined;
    public readonly blockData: Partial<T>;
    public static readonly getEmpty = <S>(): VoxelRayData<S> =>
        new VoxelRayData<S>(undefined, undefined, undefined, {} as S);

    public constructor(
        fixedPosition: SimpleVector3 | undefined,
        lastPosition: SimpleVector3 | undefined,
        rayEnd: SimpleVector3 | undefined,
        blockData: Partial<T>,
    ) {
        this.fixedPosition = fixedPosition;
        this.lastPosition = lastPosition;
        this.rayEnd = rayEnd;
        this.blockData = blockData;
    }

    public hitBlock(): boolean {
        return !!this.fixedPosition && !!this.lastPosition;
    }
}
