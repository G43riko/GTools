import { SimpleVector2 } from "gtools/math";
export declare class Point implements SimpleVector2 {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    lte(point: SimpleVector2): boolean;
    gte(point: SimpleVector2): boolean;
    equals(point: SimpleVector2): boolean;
}
/**
 * generalized box class, defined by two points with lessThan (lte) and greaterThan (gte) functions
 */
export declare class Box {
    private readonly low;
    private readonly high;
    constructor(low: Point, high: Point);
    /**
     * return true if box contains point
     */
    contains(point: Point): boolean;
    overlaps(box: Box): boolean;
    /**
     * return true if the box contains the box provided as argument.
     */
    containsBox(box: Box): boolean;
    /**
     * return array of children
     */
    split(): [Box, Box, Box, Box];
}
export declare class QuadTree<T> {
    private readonly box;
    private readonly max;
    private children;
    private value;
    constructor(box: Box, max?: number);
    insert(point: Point, value: T): this | void;
    private subdivide;
    queryRange(box: Box): {
        point: Point;
        value: T;
    }[];
    private _queryRangeRec;
    queryPoint(point: Point): null | T;
    removePoint(point: Point): void;
    clear(): void;
}
//# sourceMappingURL=quad-tree.d.ts.map