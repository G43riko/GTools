export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    lte(point) {
        return this.x <= point.x && this.y <= point.y;
    }
    gte(point) {
        return this.x >= point.x && this.y >= point.y;
    }
    equals(point) {
        return this.x === point.x && this.y === point.y;
    }
}
export class Box {
    constructor(low, high) {
        this.low = low;
        this.high = high;
    }
    contains(point) {
        return this.low.lte(point) && this.high.gte(point);
    }
    overlaps(box) {
        if (this.high.x < box.low.x) {
            return false;
        }
        if (this.low.x > box.high.x) {
            return false;
        }
        if (this.high.y < box.low.y) {
            return false;
        }
        if (this.low.y > box.high.y) {
            return false;
        }
        return true;
    }
    containsBox(box) {
        return this.contains(box.low) && this.contains(box.high);
    }
    split() {
        return [
            new Box(this.low, new Point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2)),
            new Box(new Point((this.low.x + this.high.x) / 2, this.low.y), new Point(this.high.x, (this.low.y + this.high.y) / 2)),
            new Box(new Point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2), this.high),
            new Box(new Point(this.low.x, (this.low.y + this.high.y) / 2), new Point((this.low.x + this.high.x) / 2, this.high.y)),
        ];
    }
}
export class QuadTree {
    constructor(box, max = 10) {
        this.box = box;
        this.max = max;
        this.children = null;
        this.value = [];
    }
    insert(point, value) {
        var _a;
        if (!this.box.contains(point)) {
            return this;
        }
        if (this.children === null && this.value.length < this.max) {
            for (const item of this.value) {
                if (item.point.equals(point)) {
                    item.value = value;
                    return;
                }
            }
            this.value.push({ point, value });
            return this;
        }
        if (this.children === null) {
            this.subdivide();
        }
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
            child.insert(point, value);
        });
        this.value = [];
        return this;
    }
    subdivide() {
        this.children = this.box.split().map((child) => new QuadTree(child, this.max));
        this.value.forEach((item) => {
            var _a;
            (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
                child.insert(item.point, item.value);
            });
        });
    }
    queryRange(box) {
        const result = [];
        this._queryRangeRec(box, result);
        return result;
    }
    _queryRangeRec(box, result) {
        if (!this.box.overlaps(box)) {
            return;
        }
        let i;
        if (this.value.length > 0) {
            for (i = 0; i < this.value.length; i++) {
                if (box.contains(this.value[i].point)) {
                    result.push(this.value[i]);
                }
            }
            return;
        }
        if (this.children === null) {
            return;
        }
        this.children.forEach((child) => {
            child._queryRangeRec(box, result);
        });
    }
    queryPoint(point) {
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
    removePoint(point) {
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
            return;
        }
        if (this.children !== null) {
            for (i = 0; i < this.children.length; i++) {
                this.children[i].removePoint(point);
            }
        }
        return;
    }
    clear() {
        this.children = null;
        this.value = [];
    }
}
//# sourceMappingURL=quad-tree.js.map