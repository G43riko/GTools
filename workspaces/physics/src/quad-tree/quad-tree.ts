import { SimpleVector, Vector2 } from "@g43/math";
import { pointRectMinMax2dCollision } from "@g43/physics";
import type { ReadonlySimpleVector2 } from "@g43/types";

/**
 * generalized box class, defined by two points with lessThan (lte) and greaterThan (gte) functions
 */
export class QuadBox {
    public readonly low: ReadonlySimpleVector2;
    public readonly high: ReadonlySimpleVector2;
    public constructor(low: ReadonlySimpleVector2, high: ReadonlySimpleVector2) {
        this.low = low;
        this.high = high;
    }

    /**
     * return true if box contains point
     */
    public contains(point: ReadonlySimpleVector2): boolean {
        return pointRectMinMax2dCollision(
            point.x,
            point.y,
            this.low.x,
            this.low.y,
            this.high.x,
            this.high.y,
        );
    }

    public overlaps(box: QuadBox): boolean {
        if (this.high.x < box.low.x) {
            return false;
        } // a is left of b
        if (this.low.x > box.high.x) {
            return false;
        } // a is right of b
        if (this.high.y < box.low.y) {
            return false;
        } // a is above b
        if (this.low.y > box.high.y) {
            return false;
        } // a is below b

        return true;
    }

    /**
     * return true if the box contains the box provided as argument.
     */
    public containsBox(box: QuadBox): boolean {
        return this.contains(box.low) && this.contains(box.high);
    }

    /**
     * return array of children
     */
    public split(): [QuadBox, QuadBox, QuadBox, QuadBox] {
        const centerX = (this.low.x + this.high.x) / 2;
        const centerY = (this.low.y + this.high.y) / 2;

        return [
            new QuadBox(this.low, SimpleVector.create2(centerX, centerY)),
            new QuadBox(
                SimpleVector.create2(centerX, this.low.y),
                SimpleVector.create2(this.high.x, centerY),
            ),
            new QuadBox(SimpleVector.create2(centerX, centerY), this.high),
            new QuadBox(
                SimpleVector.create2(this.low.x, centerY),
                SimpleVector.create2(centerX, this.high.y),
            ),
        ];
    }
}

export class QuadTreeWithPoint<T extends ReadonlySimpleVector2> {
    private children:
        | [
            QuadTreeWithPoint<T>,
            QuadTreeWithPoint<T>,
            QuadTreeWithPoint<T>,
            QuadTreeWithPoint<T>,
        ]
        | null = null;
    private value: T[] = [];

    public readonly box: QuadBox;
    private readonly max: number;
    /**
     * @param box
     * @param max max number of points in one quad
     */
    public constructor(box: QuadBox, max = 10) {
        this.box = box;
        this.max = max;
    }

    public iterateTree(
        callback: (
            tree: QuadTreeWithPoint<T>,
            values: readonly T[],
            depth: number,
        ) => unknown,
        depth = 0,
    ): void {
        callback(this, this.value, depth);
        this.children?.forEach((subTree) => subTree.iterateTree(callback, depth + 1));
    }

    /**
     * TODO: should return quadtree into which the element was inserted
     * @param point
     * @param value
     */
    public insert(value: T): this | void {
        // check if this box contains point
        if (!this.box.contains(value)) {
            return this;
        }

        // if is a leaf node and not full, then insert
        // need to check if it already exists though
        if (this.children === null && this.value.length < this.max) {
            for (const item of this.value) {
                // Update existing point
                if (Vector2.equals(item, value)) {
                    throw new Error("Must replace item");
                }
            }
            this.value.push(value);

            return this;
        }

        // if is a leaf node but full, call subdivide
        if (this.children === null) {
            // create children and insert all existing values
            this.subdivide();
        }

        // if is not a leaf node, call insert on child nodes
        this.children?.forEach((child) => {
            // TODO: return early if successfully added
            child.insert(value);
        });

        return this;
    }

    private subdivide(): void {
        // use box quadrant method to create 4 new equal child quadrants
        this.children = this.box
            .split()
            .map((child) => new QuadTreeWithPoint<T>(child, this.max)) as [
                QuadTreeWithPoint<T>,
                QuadTreeWithPoint<T>,
                QuadTreeWithPoint<T>,
                QuadTreeWithPoint<T>,
            ];

        // try inserting each value into the new child nodes
        this.value.forEach((item) => {
            this.children?.forEach((child) => {
                // TODO: return early if successfully added
                child.insert(item);
            });
        });
        this.value = [];
    }

    public queryRange(box: QuadBox): readonly T[] {
        // return all point/value pairs contained in range
        const result: T[] = [];
        this.queryRangeRecursively(box, result);

        return result;
    }

    private queryRangeRecursively(box: QuadBox, result: T[]): void {
        // if query area doesn't overlap this box then return
        if (!this.box.overlaps(box)) {
            return;
        }
        // if leaf node with contained value(s), then check against contained objects
        if (this.value.length > 0) {
            for (let i = 0; i < this.value.length; i++) {
                if (box.contains(this.value[i])) {
                    result.push(this.value[i]);
                }
            }

            return;
        }
        // if children exist, then make recursive call on children
        if (this.children === null) {
            return;
        }

        this.children.forEach((child) => {
            child.queryRangeRecursively(box, result);
        });
    }

    public queryPoint(point: ReadonlySimpleVector2): null | T {
        // return value if tree contains point
        if (!this.box.contains(point)) {
            return null;
        }

        if (this.value.length > 0) {
            const result = this.value.find((item) => Vector2.equals(item, point));
            if (result) {
                return result;
            }
        }

        if (this.children !== null) {
            for (const child of this.children) {
                const result = child.queryPoint(point);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    }

    /**
     * TODO: should return boolean
     * @param point
     */
    public removePoint(point: ReadonlySimpleVector2): void {
        // return if tree doesn't contain point
        if (!this.box.contains(point)) {
            return;
        }

        let i;
        if (this.value.length > 0) {
            for (i = 0; i < this.value.length; i++) {
                if (Vector2.equals(this.value[i], point)) {
                    this.value.splice(i, 1);

                    return;
                }
            }

            return; // didn't contain point and is leaf node
        }

        if (this.children !== null) {
            for (i = 0; i < this.children.length; i++) {
                // TODO: early exit
                this.children[i].removePoint(point);
            }
        }
    }

    public clear(): void {
        this.children = null;
        this.value = [];
    }
}

export class QuadTree<T> {
    // eslint-disable-next-line no-use-before-define
    private children:
        | [QuadTree<T>, QuadTree<T>, QuadTree<T>, QuadTree<T>]
        | null = null;
    private value: { point: ReadonlySimpleVector2; value: T }[] = [];
    public readonly box: QuadBox;
    private readonly max: number;

    /**
     * @param box
     * @param max max number of points in one quad
     */
    public constructor(
        box: QuadBox,
        max = 10,
    ) {
        this.box = box;
        this.max = max;
    }

    public iterateTree(
        callback: (
            tree: QuadTree<T>,
            values: readonly {
                point: ReadonlySimpleVector2;
                value: T;
            }[],
            depth: number,
        ) => unknown,
        depth = 0,
    ): void {
        callback(this, this.value, depth);
        this.children?.forEach((subTree) => subTree.iterateTree(callback, depth + 1));
    }

    /**
     * TODO: should return quadtree into which the element was inserted
     * @param point
     * @param value
     */
    public insert(point: ReadonlySimpleVector2, value: T): this | void {
        // check if this box contains point
        if (!this.box.contains(point)) {
            return this;
        }

        // if is a leaf node and not full, then insert
        // need to check if it already exists though
        if (this.children === null && this.value.length < this.max) {
            for (const item of this.value) {
                // Update existing point
                if (Vector2.equals(item.point, point)) {
                    item.value = value;

                    return;
                }
            }
            this.value.push({ point, value });

            return this;
        }

        // if is a leaf node but full, call subdivide
        if (this.children === null) {
            // create children and insert all existing values
            this.subdivide();
        }

        // if is not a leaf node, call insert on child nodes
        this.children?.forEach((child) => {
            // TODO: return early if successfully added
            child.insert(point, value);
        });

        return this;
    }

    private subdivide(): void {
        // use box quadrant method to create 4 new equal child quadrants
        this.children = this.box
            .split()
            .map((child) => new QuadTree<T>(child, this.max)) as [
                QuadTree<T>,
                QuadTree<T>,
                QuadTree<T>,
                QuadTree<T>,
            ];

        // try inserting each value into the new child nodes
        this.value.forEach((item) => {
            this.children?.forEach((child) => {
                // TODO: return early if successfully added
                child.insert(item.point, item.value);
            });
        });
        this.value = [];
    }

    public queryRange(
        box: QuadBox,
    ): readonly { point: ReadonlySimpleVector2; value: T }[] {
        // return all point/value pairs contained in range
        const result: { point: ReadonlySimpleVector2; value: T }[] = [];
        this.queryRangeRecursively(box, result);

        return result;
    }

    private queryRangeRecursively(
        box: QuadBox,
        result: { point: ReadonlySimpleVector2; value: T }[],
    ): void {
        // if query area doesn't overlap this box then return
        if (!this.box.overlaps(box)) {
            return;
        }
        // if leaf node with contained value(s), then check against contained objects
        if (this.value.length > 0) {
            for (let i = 0; i < this.value.length; i++) {
                if (box.contains(this.value[i].point)) {
                    result.push(this.value[i]);
                }
            }

            return;
        }
        // if children exist, then make recursive call on children
        if (this.children === null) {
            return;
        }

        this.children.forEach((child) => {
            child.queryRangeRecursively(box, result);
        });
    }

    public queryPoint(point: ReadonlySimpleVector2): null | T {
        // return value if tree contains point
        if (!this.box.contains(point)) {
            return null;
        }

        if (this.value.length > 0) {
            const result = this.value.find((item) => Vector2.equals(item.point, point));
            if (result) {
                return result.value;
            }
        }

        if (this.children !== null) {
            for (const child of this.children) {
                const result = child.queryPoint(point);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    }

    /**
     * TODO: should return boolean
     * @param point
     */
    public removePoint(point: ReadonlySimpleVector2): void {
        // return if tree doesn't contain point
        if (!this.box.contains(point)) {
            return;
        }

        let i;
        if (this.value.length > 0) {
            for (i = 0; i < this.value.length; i++) {
                if (Vector2.equals(this.value[i].point, point)) {
                    this.value.splice(i, 1);

                    return;
                }
            }

            return; // didn't contain point and is leaf node
        }

        if (this.children !== null) {
            for (i = 0; i < this.children.length; i++) {
                // TODO: early exit
                this.children[i].removePoint(point);
            }
        }
    }

    public clear(): void {
        this.children = null;
        this.value = [];
    }
}

export class QuadTreeWithPointProvider<T> {
    private children:
        | [
            QuadTreeWithPointProvider<T>,
            QuadTreeWithPointProvider<T>,
            QuadTreeWithPointProvider<T>,
            QuadTreeWithPointProvider<T>,
        ]
        | null = null;
    private value: T[] = [];

    public readonly box: QuadBox;
    public pointProvider: (item: T) => ReadonlySimpleVector2;
    private readonly max: number;
    /**
     * @param box
     * @param max max number of points in one quad
     */
    public constructor(
        box: QuadBox,
        pointProvider: (item: T) => ReadonlySimpleVector2,
        max = 10,
    ) {
        this.box = box;
        this.pointProvider = pointProvider;
        this.max = max;
    }

    public iterateTree(
        callback: (
            tree: QuadTreeWithPointProvider<T>,
            values: readonly T[],
            depth: number,
        ) => unknown,
        depth = 0,
    ): void {
        callback(this, this.value, depth);
        this.children?.forEach((subTree) => subTree.iterateTree(callback, depth + 1));
    }

    /**
     * TODO: should return quadtreeWithPointProvider into which the element was inserted
     * @param value
     */
    public insert(value: T): this | void {
        const point = this.pointProvider(value);
        // check if this box contains point
        if (!this.box.contains(point)) {
            return this;
        }

        // if is a leaf node and not full, then insert
        // need to check if it already exists though
        if (this.children === null && this.value.length < this.max) {
            for (const item of this.value) {
                // Update existing point
                if (Vector2.equals(this.pointProvider(item), point)) {
                    throw new Error("Must replace item");
                }
            }
            this.value.push(value);

            return this;
        }

        // if is a leaf node but full, call subdivide
        if (this.children === null) {
            // create children and insert all existing values
            this.subdivide();
        }

        // if is not a leaf node, call insert on child nodes
        this.children?.forEach((child) => {
            // TODO: return early if successfully added
            child.insert(value);
        });

        return this;
    }

    private subdivide(): void {
        // use box quadrant method to create 4 new equal child quadrants
        this.children = this.box
            .split()
            .map(
                (child) => new QuadTreeWithPointProvider<T>(child, this.pointProvider, this.max),
            ) as [
                QuadTreeWithPointProvider<T>,
                QuadTreeWithPointProvider<T>,
                QuadTreeWithPointProvider<T>,
                QuadTreeWithPointProvider<T>,
            ];

        // try inserting each value into the new child nodes
        this.value.forEach((item) => {
            this.children?.forEach((child) => {
                // TODO: return early if successfully added
                child.insert(item);
            });
        });
        this.value = [];
    }

    public queryRange(box: QuadBox): readonly T[] {
        // return all point/value pairs contained in range
        const result: T[] = [];
        this.queryRangeRecursively(box, result);

        return result;
    }

    private queryRangeRecursively(box: QuadBox, result: T[]): void {
        // if query area doesn't overlap this box then return
        if (!this.box.overlaps(box)) {
            return;
        }
        // if leaf node with contained value(s), then check against contained objects
        if (this.value.length > 0) {
            for (let i = 0; i < this.value.length; i++) {
                if (box.contains(this.pointProvider(this.value[i]))) {
                    result.push(this.value[i]);
                }
            }

            return;
        }
        // if children exist, then make recursive call on children
        if (this.children === null) {
            return;
        }

        this.children.forEach((child) => {
            child.queryRangeRecursively(box, result);
        });
    }

    public queryPoint(point: ReadonlySimpleVector2): null | T {
        // return value if tree contains point
        if (!this.box.contains(point)) {
            return null;
        }

        if (this.value.length > 0) {
            const result = this.value.find((item) => Vector2.equals(this.pointProvider(item), point));
            if (result) {
                return result;
            }
        }

        if (this.children !== null) {
            for (const child of this.children) {
                const result = child.queryPoint(point);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    }

    /**
     * TODO: should return boolean
     * @param point
     */
    public removePoint(point: ReadonlySimpleVector2): void {
        // return if tree doesn't contain point
        if (!this.box.contains(point)) {
            return;
        }

        let i;
        if (this.value.length > 0) {
            for (i = 0; i < this.value.length; i++) {
                if (Vector2.equals(this.pointProvider(this.value[i]), point)) {
                    this.value.splice(i, 1);

                    return;
                }
            }

            return; // didn't contain point and is leaf node
        }

        if (this.children !== null) {
            for (i = 0; i < this.children.length; i++) {
                // TODO: early exit
                this.children[i].removePoint(point);
            }
        }
    }

    public clear(): void {
        this.children = null;
        this.value = [];
    }
}
