export interface SimpleVectorXZ {
    x: number;
    z: number;
}

export type ReadonlySimpleVectorXZ = Readonly<SimpleVectorXZ>;

export const SimpleVectorXZ: {
    isEqual(vecA: ReadonlySimpleVectorXZ, vecB: ReadonlySimpleVectorXZ): boolean;
    isVectorXZ(vec: any): vec is SimpleVectorXZ;
} = {
    isEqual(vecA: ReadonlySimpleVectorXZ, vecB: ReadonlySimpleVectorXZ): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.z === vecB.z;
    },
    isVectorXZ(vec: any): vec is SimpleVectorXZ {
        if (!vec) {
            return false;
        }

        return typeof vec.x === "number" && typeof vec.z === "number";
    },
};
