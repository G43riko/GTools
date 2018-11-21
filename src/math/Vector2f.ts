const process = (op: (x: number, y: number) => void,
                 arg1: Vector2f | number,
                 arg2?: number) => {
    if (typeof arg2 === "number") {
        op(arg1 as number, arg2);
    } else if (typeof arg1 === "number") {
        op(arg1, arg1);
    } else {
        op(arg1.x, arg1.y);
    }
};

/**
 * @class Vector2f
 */
export class Vector2f {
    /**
     * the X value of vector
     * @type {number}
     * @public
     */
    public y = 0;

    /**
     * the Y value of vector
     * @type {number}
     * @public
     */
    public x = 0;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Function set vectors values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    public set(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x = x;
            this.y = y;
        }, arg1, arg2);

        return this;
    }

    /**
     * Function add values into current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    public add(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x += x;
            this.y += y;
        }, arg1, arg2);

        return this;
    }

    /**
     * Function divide current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    public div(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x /= x;
            this.y /= y;
        }, arg1, arg2);

        return this;
    }

    /**
     * Function multiply current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    public mul(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x *= x;
            this.y *= y;
        }, arg1, arg2);

        return this;
    }

    /**
     * Function subtract values from current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    public sub(arg1: Vector2f | number, arg2?: number): Vector2f {
        process((x, y) => {
            this.x -= x;
            this.y -= y;
        }, arg1, arg2);

        return this;
    }
}
