export declare class SimpleMat4 {
    private readonly data;
    constructor(data: number[][]);
    set(x: number, y: number, value: number): void;
    get(x: number, y: number): number;
}
export declare class Mat4 extends SimpleMat4 {
    static createViewMatrix(): void;
    static createTransformMatrix(): void;
    static createPerspectiveMatrix(): void;
    static createOrthographicMatrix(): void;
}
//# sourceMappingURL=mat4.d.ts.map