/**
 * Class is used for holding 2 numeric values and manipulation with them
 */
export declare class Vector2f {
    /**
     * the X value of vector
     */
    y: number;
    /**
     * the Y value of vector
     */
    x: number;
    constructor(x: number, y: number);
    /**
     * Function set vectors values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns created {@link Vector2f}
     */
    set(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function add values into current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    add(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function divide current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    div(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function multiply current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    mul(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function subtract values from current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    sub(arg1: Vector2f | number, arg2?: number): Vector2f;
}
