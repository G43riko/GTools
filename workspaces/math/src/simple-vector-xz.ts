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
        return (
            vec !== null &&
            typeof vec === "object" &&
            "x" in vec &&
            "z" in vec &&
            typeof (vec as SimpleVectorXZ).x === "number" &&
            typeof (vec as SimpleVectorXZ).z === "number"
        );
    },
};
