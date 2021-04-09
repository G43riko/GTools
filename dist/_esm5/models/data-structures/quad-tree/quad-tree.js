var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.lte = function (point) {
        return this.x <= point.x && this.y <= point.y;
    };
    Point.prototype.gte = function (point) {
        return this.x >= point.x && this.y >= point.y;
    };
    Point.prototype.equals = function (point) {
        return this.x === point.x && this.y === point.y;
    };
    return Point;
}());
export { Point };
var Box = (function () {
    function Box(low, high) {
        this.low = low;
        this.high = high;
    }
    Box.prototype.contains = function (point) {
        return this.low.lte(point) && this.high.gte(point);
    };
    Box.prototype.overlaps = function (box) {
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
    };
    Box.prototype.containsBox = function (box) {
        return this.contains(box.low) && this.contains(box.high);
    };
    Box.prototype.split = function () {
        return [
            new Box(this.low, new Point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2)),
            new Box(new Point((this.low.x + this.high.x) / 2, this.low.y), new Point(this.high.x, (this.low.y + this.high.y) / 2)),
            new Box(new Point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2), this.high),
            new Box(new Point(this.low.x, (this.low.y + this.high.y) / 2), new Point((this.low.x + this.high.x) / 2, this.high.y)),
        ];
    };
    return Box;
}());
export { Box };
var QuadTree = (function () {
    function QuadTree(box, max) {
        if (max === void 0) { max = 10; }
        this.box = box;
        this.max = max;
        this.children = null;
        this.value = [];
    }
    QuadTree.prototype.insert = function (point, value) {
        var _a;
        if (!this.box.contains(point)) {
            return this;
        }
        if (this.children === null && this.value.length < this.max) {
            for (var _i = 0, _b = this.value; _i < _b.length; _i++) {
                var item = _b[_i];
                if (item.point.equals(point)) {
                    item.value = value;
                    return;
                }
            }
            this.value.push({ point: point, value: value });
            return this;
        }
        if (this.children === null) {
            this.subdivide();
        }
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            child.insert(point, value);
        });
        this.value = [];
        return this;
    };
    QuadTree.prototype.subdivide = function () {
        var _this = this;
        this.children = this.box.split().map(function (child) { return new QuadTree(child, _this.max); });
        this.value.forEach(function (item) {
            var _a;
            (_a = _this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
                child.insert(item.point, item.value);
            });
        });
    };
    QuadTree.prototype.queryRange = function (box) {
        var result = [];
        this._queryRangeRec(box, result);
        return result;
    };
    QuadTree.prototype._queryRangeRec = function (box, result) {
        if (!this.box.overlaps(box)) {
            return;
        }
        var i;
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
        this.children.forEach(function (child) {
            child._queryRangeRec(box, result);
        });
    };
    QuadTree.prototype.queryPoint = function (point) {
        if (!this.box.contains(point)) {
            return null;
        }
        if (this.value.length > 0) {
            var result = this.value.find(function (item) { return item.point.equals(point); });
            if (result) {
                return result.value;
            }
        }
        if (this.children !== null) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var result = child.queryPoint(point);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    };
    QuadTree.prototype.removePoint = function (point) {
        if (!this.box.contains(point)) {
            return;
        }
        var i;
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
    };
    QuadTree.prototype.clear = function () {
        this.children = null;
        this.value = [];
    };
    return QuadTree;
}());
export { QuadTree };
//# sourceMappingURL=quad-tree.js.map