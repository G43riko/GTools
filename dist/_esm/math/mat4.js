export class SimpleMat4 {
    constructor(data) {
        this.data = data;
    }
    set(x, y, value) {
        this.data[x][y] = value;
    }
    get(x, y) {
        return this.data[x][y];
    }
}
export class Mat4 extends SimpleMat4 {
    static createViewMatrix() {
    }
    static createTransformMatrix() {
    }
    static createPerspectiveMatrix() {
    }
    static createOrthographicMatrix() {
    }
}
//# sourceMappingURL=mat4.js.map