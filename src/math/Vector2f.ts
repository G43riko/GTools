const process = (op: (x: number, y: number) => void,
                 arg1: Vector2f | number,
                 arg2?: number) => {
    if (typeof arg2 === "number") {
        op(arg1 as number, arg2);
    }
    else {
        if (typeof arg1 === "number") {
            op(arg1, arg1);
        }
        else {
            op(arg1.x, arg1.y);
        }
    }
};

export class Vector2f {
    public y = 0;
    public x = 0;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public set(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x = x;
            this.y = y;
        }, arg1, arg2);

        return this;
    }

    public add(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x += x;
            this.y += y;
        }, arg1, arg2);

        return this;
    }

    public div(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x /= x;
            this.y /= y;
        }, arg1, arg2);

        return this;
    }

    public mul(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x *= x;
            this.y *= y;
        }, arg1, arg2);

        return this;
    }

    public sub(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x -= x;
            this.y -= y;
        }, arg1, arg2);

        return this;
    }
}
