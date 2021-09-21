import { SimpleMat4 } from "./simple-mat4";

export class Mat4 extends SimpleMat4 {
    // public static create(): Mat4 {
    //     return new Mat4([
    //         1, 0, 0, 0,
    //         0, 1, 0, 0,
    //         0, 0, 1, 0,
    //         0, 0, 0, 1,
    //     ]);
    // }
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
