/**
 * @class Vector2f
 */
export declare class Vector2f {
    /**
     * the X value of vector
     * @type {number}
     * @public
     */
    y: number;
    /**
     * the Y value of vector
     * @type {number}
     * @public
     */
    x: number;
    constructor(x: number, y: number);
    /**
     * Function set vectors values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    set(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function add values into current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    add(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function divide current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    div(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function multiply current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    mul(arg1: Vector2f | number, arg2?: number): Vector2f;
    /**
     * Function subtract values from current values and return object itself
     *
     * @param {Vector2f | number} arg1
     * @param {number} arg2
     * @returns {Vector2f}
     * @public
     */
    sub(arg1: Vector2f | number, arg2?: number): Vector2f;
}
