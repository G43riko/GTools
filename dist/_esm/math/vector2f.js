const process = (op, arg1, arg2) => {
    if (typeof arg2 === "number") {
        op(arg1, arg2);
    }
    else if (typeof arg1 === "number") {
        op(arg1, arg1);
    }
    else {
        op(arg1.x, arg1.y);
    }
};
export class Vector2f {
    constructor(x, y) {
        this.y = 0;
        this.x = 0;
        this.x = x;
        this.y = y;
    }
    set(arg1, arg2) {
        process((x, y) => {
            this.x = x;
            this.y = y;
        }, arg1, arg2);
        return this;
    }
    add(arg1, arg2) {
        process((x, y) => {
            this.x += x;
            this.y += y;
        }, arg1, arg2);
        return this;
    }
    div(arg1, arg2) {
        process((x, y) => {
            this.x /= x;
            this.y /= y;
        }, arg1, arg2);
        return this;
    }
    mul(arg1, arg2) {
        process((x, y) => {
            this.x *= x;
            this.y *= y;
        }, arg1, arg2);
        return this;
    }
    sub(arg1, arg2) {
        process((x, y) => {
            this.x -= x;
            this.y -= y;
        }, arg1, arg2);
        return this;
    }
}
//# sourceMappingURL=vector2f.js.map