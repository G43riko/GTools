import { SimpleVector2 } from "../../../math";

export class Point implements SimpleVector2 {
    public constructor(
        public readonly x: number,
        public readonly y: number,
    ) {
    }

    public lte(point: SimpleVector2): boolean {
        return this.x <= point.x && this.y <= point.y;
    }

    public gte(point: SimpleVector2): boolean {
        return this.x >= point.x && this.y >= point.y;
    }

    public equals(point: SimpleVector2): boolean {
        return this.x === point.x && this.y === point.y;
    }
}

/**
 * generalized box class, defined by two points with lessThan (lte) and greaterThan (gte) functions
 */
export class Box {
    public constructor(
        private readonly low: Point,
        private readonly high: Point,
    ) {
    }

    /**
     * return true if box contains point
     */
    public contains(point: Point): boolean {
        return this.low.lte(point) && this.high.gte(point);
    }

    public overlaps(box: Box): boolean {
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
    public containsBox(box: Box): boolean {
        return this.contains(box.low) && this.contains(box.high);
    }

    /**
     * return array of children
     */
    public split(): [Box, Box, Box, Box] {
        return [
            new Box(
                this.low,
                new Point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2),
            ),
            new Box(
                new Point((this.low.x + this.high.x) / 2, this.low.y),
                new Point(this.high.x, (this.low.y + this.high.y) / 2),
            ),
            new Box(
                new Point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2),
                this.high,
            ),
            new Box(
                new Point(this.low.x, (this.low.y + this.high.y) / 2),
                new Point((this.low.x + this.high.x) / 2, this.high.y),
            ),
        ];
    }
}

// tslint:disable-next-line:max-classes-per-file
export class QuadTree<T> {
    private children: [QuadTree<T>, QuadTree<T>, QuadTree<T>, QuadTree<T>] | null = null;
    private value: { point: Point; value: T }[]                                   = [];

    public constructor(
        private readonly box: Box,
        private readonly max = 10) {
    }

    public insert(point: Point, value: T): this | void {
        // check if should contain point
        if (!this.box.contains(point)) {
            return this;
        }

        // if is a leaf node and not full, then insert
        // need to check if it already exists though
        if (this.children === null && this.value.length < this.max) {
            for (const item of this.value) {
                if (item.point.equals(point)) {
                    item.value = value;

                    return;
                }
            }
            this.value.push({point, value});

            return this;
        }

        // if is a leaf node but full, call subdivide
        if (this.children === null) {
            this.subdivide();
        }

        // if is not a leaf node, call insert on child nodes
        this.children?.forEach((child) => {
            child.insert(point, value);
        });
        this.value = [];

        return this;
    }

    private subdivide(): void {
        // use box quadrant method to create 4 new equal child quadrants
        // tslint:disable-next-line:no-map-without-usage
        this.children = this.box.split().map((child) => new QuadTree<T>(child, this.max)) as [QuadTree<T>, QuadTree<T>, QuadTree<T>, QuadTree<T>];

        // try inserting each value into the new child nodes
        this.value.forEach((item) => {
            this.children?.forEach((child) => {
                child.insert(item.point, item.value);
            });
        });
    }

    public queryRange(box: Box): { point: Point; value: T }[] {
        // return all point/value pairs contained in range
        const result: { point: Point; value: T }[] = [];
        this._queryRangeRec(box, result);

        return result;
    }

    private _queryRangeRec(box: Box, result: { point: Point; value: T }[]): void {
        // if query area doesn't overlap this box then return
        if (!this.box.overlaps(box)) {
            return;
        }
        // if leaf node with contained value(s), then check against contained objects
        let i;
        if (this.value.length > 0) {
            for (i = 0; i < this.value.length; i++) {
                if (box.contains(this.value[i].point)) {
                    result.push(this.value[i]);
                }
            }

            return;
        }
        // if has children, then make recursive call on children
        if (this.children === null) {
            return;
        }

        this.children.forEach((child) => {
            child._queryRangeRec(box, result);
        });

    }

    public queryPoint(point: Point): null | T {
        // return value if tree contains point
        if (!this.box.contains(point)) {
            return null;
        }

        if (this.value.length > 0) {
            const result = this.value.find((item) => item.point.equals(point));
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

    public removePoint(point: Point): void {
        // return if tree doesn't contain point
        if (!this.box.contains(point)) {
            return;
        }

        let i;
        if (this.value.length > 0) {
            for (i = 0; i < this.value.length; i++) {
                if (this.value[i].point.equals(point)) {
                    this.value.splice(i, 1);

                    return;
                }
            }

            return; // didn't contain point and is leaf node
        }

        if (this.children !== null) {
            for (i = 0; i < this.children.length; i++) {
                this.children[i].removePoint(point);
            }
        }

        return;
    }

    public clear(): void {
        this.children = null;
        this.value    = [];
    }
}
