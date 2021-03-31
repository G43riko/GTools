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
