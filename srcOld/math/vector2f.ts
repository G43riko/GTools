const process = (
    op: (x: number, y: number) => void,
    arg1: Vector2f | number,
    arg2?: number,
): void => {
    if (typeof arg2 === "number") {
        op(arg1 as number, arg2);
    } else if (typeof arg1 === "number") {
        op(arg1, arg1);
    } else {
        op(arg1.x, arg1.y);
    }
};

/**
 * Class is used for holding 2 numeric values and manipulation with them
 */
export class Vector2f {
    /**
     * the X value of vector
     */
    public y = 0;

    /**
     * the Y value of vector
     */
    public x = 0;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Function set vectors values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns created {@link Vector2f}
     */
    public set(arg1: Vector2f | number, arg2?: number): this {
        process(
            (x, y) => {
                this.x = x;
                this.y = y;
            },
            arg1,
            arg2,
        );

        return this;
    }

    /**
     * Function add values into current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    public add(arg1: Vector2f | number, arg2?: number): this {
        process(
            (x, y) => {
                this.x += x;
                this.y += y;
            },
            arg1,
            arg2,
        );

        return this;
    }

    /**
     * Function divide current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    public div(arg1: Vector2f | number, arg2?: number): this {
        process(
            (x, y) => {
                this.x /= x;
                this.y /= y;
            },
            arg1,
            arg2,
        );

        return this;
    }

    /**
     * Function multiply current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    public mul(arg1: Vector2f | number, arg2?: number): this {
        process(
            (x, y) => {
                this.x *= x;
                this.y *= y;
            },
            arg1,
            arg2,
        );

        return this;
    }

    /**
     * Function subtract values from current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    public sub(arg1: Vector2f | number, arg2?: number): this {
        process(
            (x, y) => {
                this.x -= x;
                this.y -= y;
            },
            arg1,
            arg2,
        );

        return this;
    }
}
