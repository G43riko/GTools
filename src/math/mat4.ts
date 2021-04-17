/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix4.js
 * https://github.com/BennyQBD/3DEngineCpp/blob/master/src/core/math3d.h
 * https://github.com/fynnfluegge/oreon-engine/blob/master/oreonengine/oe-core/src/main/java/org/oreon/core/math/Matrix4f.java
 */
export class SimpleMat4 {
    public constructor(private readonly data: number[][]) {
    }

    public set(x: number, y: number, value: number): void {
        this.data[x][y] = value;
    }

    public get(x: number, y: number): number {
        return this.data[x][y];
    }
}


export class Mat4 extends SimpleMat4{
    public static createViewMatrix(): void {
        // TODO: implement
    }
    public static createTransformMatrix(): void {
        // TODO: implement
    }
    public static createPerspectiveMatrix(): void {
        // TODO: implement
    }
    public static createOrthographicMatrix(): void {
        // TODO: implement
    }
}
