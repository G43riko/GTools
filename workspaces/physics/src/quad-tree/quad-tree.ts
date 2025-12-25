import { SimpleVector, Vector2 } from "@g43/math";
import { pointRectMinMax2dCollision } from "@g43/physics";
import type { MinMax2D, ReadonlySimpleVector2 } from "@g43/types";

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
/**
 * TODO: use som external function
 * @param a
 * @param b
 * @returns
 */
const intersects = function (a: MinMax2D, b: MinMax2D) {
    return !(
        a.max.x < b.min.x ||
        a.max.y < b.min.y ||
        a.min.x > b.max.x ||
        a.min.y > b.max.y
    );
};
export class QuadBoxWithRect extends QuadBox {
    public readonly center: ReadonlySimpleVector2;
    public constructor(low: ReadonlySimpleVector2, high: ReadonlySimpleVector2) {
        super(low, high);

        this.center = SimpleVector.create((low.x + high.x) / 2, (low.y + high.y) / 2);
    }

    /**
     * return array of children
     */
    public override split(): [QuadBoxWithRect, QuadBoxWithRect, QuadBoxWithRect, QuadBoxWithRect] {
        const centerX = (this.low.x + this.high.x) / 2;
        const centerY = (this.low.y + this.high.y) / 2;

        return [
            new QuadBoxWithRect(this.low, SimpleVector.create2(centerX, centerY)),
            new QuadBoxWithRect(
                SimpleVector.create2(centerX, this.low.y),
                SimpleVector.create2(this.high.x, centerY),
            ),
            new QuadBoxWithRect(SimpleVector.create2(centerX, centerY), this.high),
            new QuadBoxWithRect(
                SimpleVector.create2(this.low.x, centerY),
                SimpleVector.create2(centerX, this.high.y),
            ),
        ];
    }
    public overlapsMinMax(box: MinMax2D): boolean {
        if (this.high.x < box.min.x) {
            return false;
        } // a is left of b
        if (this.low.x > box.max.x) {
            return false;
        } // a is right of b
        if (this.high.y < box.min.y) {
            return false;
        } // a is above b
        if (this.low.y > box.max.y) {
            return false;
        } // a is below b

        return true;
    }
    /**
     * return true if the box contains the box provided as argument.
     */
    public containsMinMax(box: MinMax2D): boolean {
        return this.contains(box.min) && this.contains(box.max);
    }
    public isOnlyOneQuarter(box: MinMax2D): null | "TL" | "TR" | "BR" | "BL" {
        const left = box.min.x <= this.center.x;
        const top = box.min.y <= this.center.y;

        const sameQuarter = (left === box.max.x <= this.center.x) &&
            (top === box.max.y <= this.center.y);

        if (!sameQuarter) {
            return null;
        }

        if (left) {
            return top ? "TL" : "BL";
        }
        return top ? "TR" : "BR";
    }
}
/**
 * @see https://gamedev.stackexchange.com/questions/20607/quad-tree-with-a-lot-of-moving-objects
 */
export class QuadTreeWithRect<T extends MinMax2D> {
    private readonly map = new WeakMap<T, QuadTreeWithRect<T>>();
    private children?: [QuadTreeWithRect<T>, QuadTreeWithRect<T>, QuadTreeWithRect<T>, QuadTreeWithRect<T>];
    private readonly values = new Array<T>();

    private readonly box: QuadBoxWithRect;
    private readonly maxDepth: number;
    private readonly parent?: QuadTreeWithRect<T>;

    private readonly depth: number;
    private readonly root: QuadTreeWithRect<T>;

    public constructor(
        box: QuadBoxWithRect,
        maxDepth = 10,
        parent?: QuadTreeWithRect<T>,
    ) {
        this.box = box;
        this.maxDepth = maxDepth;
        this.parent = parent;
        this.depth = this.parent ? this.parent.depth + 1 : 0;
        this.root = this.parent ? this.parent.root : this;
    }

    private filterValues(box: MinMax2D): readonly T[] {
        return this.values.filter((value) => intersects(box, value));
    }

    public iterateBoxesUpside(callback: (value: QuadBoxWithRect) => unknown): void {
        callback(this.box);

        this.parent?.iterateBoxesUpside(callback);
    }
    public iterateValues(callback: (value: T) => unknown): void {
        this.values.forEach(callback);

        this.children?.forEach((child) => child.iterateValues(callback));
    }

    public query(box: MinMax2D, result: T[] = []): readonly T[] {
        result.push(
            ...this.filterValues(box),
        );
        if (!this.children) {
            return result;
        }

        if (box.min.x <= this.box.center.x) {
            if (box.min.y <= this.box.center.y) {
                // TL
                this.children[0].query(box, result);
            }
            if (box.max.y >= this.box.center.y) {
                // BL
                this.children[3].query(box, result);
            }
        }
        if (box.max.x >= this.box.center.x) {
            if (box.min.y <= this.box.center.y) {
                //TR
                this.children[1].query(box, result);
            }
            if (box.max.y >= this.box.center.y) {
                // BR
                this.children[2].query(box, result);
            }
        }

        return result;
    }

    private getQuadBackward(box: T): QuadTreeWithRect<T> {
        if (!this.parent) {
            return this;
        }
        if (this.box.containsMinMax(box)) {
            return this;
        }

        return this.parent.getQuadBackward(box);
    }

    public move(oldBox: T, newBox: T): QuadTreeWithRect<T> {
        const result = this.moveInternally(oldBox, newBox);

        result.root.map.set(newBox, result);

        return result;
    }
    public moveInternally(oldBox: T, newBox: T): QuadTreeWithRect<T> {
        const oldTree = this.root.map.get(oldBox);
        if (!oldTree) {
            throw new Error("Box is missing");
        }

        if (oldTree.box.containsMinMax(newBox)) {
            const quarter = this.box.isOnlyOneQuarter(newBox);
            if (quarter) {
                const index = oldTree.values.indexOf(oldBox);
                oldTree.values.splice(index, 1);

                return this.getChildren(quarter).addInternally(newBox);
            }
        } else {
            const index = oldTree.values.indexOf(oldBox);
            oldTree.values.splice(index, 1);

            return this.getQuadBackward(newBox).addInternally(newBox);
        }

        return this;
    }

    public add(box: T): QuadTreeWithRect<T> {
        const result = this.addInternally(box);

        this.root.map.set(box, result);

        return result;
    }

    private getChildren(quarter: "TL" | "TR" | "BR" | "BL"): QuadTreeWithRect<T> {
        if (!this.children) {
            this.children = this.box.split()
                .map((child) => new QuadTreeWithRect<T>(child, this.maxDepth, this)) as [
                    QuadTreeWithRect<T>,
                    QuadTreeWithRect<T>,
                    QuadTreeWithRect<T>,
                    QuadTreeWithRect<T>,
                ];
        }

        switch (quarter) {
            case "TL":
                return this.children[0];
            case "TR":
                return this.children[1];
            case "BR":
                return this.children[2];
            case "BL":
                return this.children[3];
        }
    }

    private addInternally(box: T): QuadTreeWithRect<T> {
        if (!this.box.overlapsMinMax(box)) {
            throw new Error("Box outside of range");
        }

        // if we are in max depth then push to this quarter
        if (this.depth === this.maxDepth) {
            this.values.push(box);

            return this;
        }

        const quarter = this.box.isOnlyOneQuarter(box);
        // push to this quarter
        if (!quarter) {
            this.values.push(box);

            return this;
        }
        return this.getChildren(quarter).addInternally(box);
    }
}
