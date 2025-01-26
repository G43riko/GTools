import type { SimpleVector3 } from "@g43/types";

export class VoxelRayData<T> {
    public static getEmpty = <S>(): VoxelRayData<S> => new VoxelRayData<S>(undefined, undefined, undefined, {} as S);

    public constructor(
        public readonly fixedPosition: SimpleVector3 | undefined,
        public readonly lastPosition: SimpleVector3 | undefined,
        public readonly rayEnd: SimpleVector3 | undefined,
        public readonly blockData: Partial<T>,
    ) {
    }

    public hitBlock(): boolean {
        return !!this.fixedPosition && !!this.lastPosition;
    }
}
