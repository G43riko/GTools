import { __spreadArrays } from "tslib";
var BidirectionalGraph = (function () {
    function BidirectionalGraph(comparator) {
        if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
        this.comparator = comparator;
        this.map = new Map();
    }
    Object.defineProperty(BidirectionalGraph.prototype, "numberOfVertices", {
        get: function () {
            return this.map.size;
        },
        enumerable: false,
        configurable: true
    });
    BidirectionalGraph.prototype.cleanUp = function () {
        this.map.clear();
    };
    BidirectionalGraph.prototype.getEdges = function () {
        var _this = this;
        var result = [];
        var processedKeys = [];
        this.map.forEach(function (value, vertexA) {
            value.forEach(function (vertexB) {
                if (processedKeys.some(function (v) { return _this.comparator(v, vertexB); })) {
                    return;
                }
                result.push([vertexA, vertexB]);
            });
            processedKeys.push(vertexA);
        });
        return result;
    };
    BidirectionalGraph.prototype.hasVertex = function (item) {
        return this.map.has(item);
    };
    BidirectionalGraph.prototype.removeVertex = function (vertex, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        var itemValues = this.map.get(vertex);
        if (!itemValues) {
            return;
        }
        if (!force && itemValues.length) {
            console.warn("Vertex contains connections");
            return;
        }
        this.map.delete(vertex);
        itemValues.forEach(function (point) {
            _this.map.set(point, _this.require(point).filter(function (p) { return !_this.comparator(p, vertex); }));
        });
    };
    BidirectionalGraph.prototype.removeDisconnectedVertices = function () {
        var _this = this;
        this.map.forEach(function (value, key) {
            if (!value.length) {
                _this.map.delete(key);
            }
        });
    };
    BidirectionalGraph.prototype.require = function (item) {
        return this.map.get(item) || [];
    };
    BidirectionalGraph.prototype.addVertex = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        items.forEach(function (item) {
            if (_this.map.has(item)) {
                return;
            }
            _this.map.set(item, []);
        });
    };
    BidirectionalGraph.prototype.disconnect = function (itemA, itemB) {
        var _this = this;
        var aValues = this.require(itemA);
        if (!(aValues === null || aValues === void 0 ? void 0 : aValues.length)) {
            return;
        }
        this.map.set(itemA, aValues.filter(function (v) { return !_this.comparator(itemB, v); }));
        this.map.set(itemB, this.require(itemB).filter(function (v) { return !_this.comparator(itemA, v); }));
    };
    BidirectionalGraph.prototype.connect = function (itemA) {
        var _this = this;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        if (!items.length) {
            return;
        }
        var aValues = this.map.get(itemA) || [];
        var missingPoints = items.filter(function (p) { return !aValues.some(function (v) { return _this.comparator(v, p); }); });
        this.map.set(itemA, __spreadArrays(aValues, missingPoints));
        missingPoints.forEach(function (itemB) {
            _this.map.set(itemB, __spreadArrays(_this.require(itemB), [itemA]));
        });
    };
    BidirectionalGraph.prototype.areConnected = function (itemA, itemB) {
        var _this = this;
        var aValues = this.map.get(itemA);
        if (!aValues) {
            return false;
        }
        return aValues.some(function (v) { return _this.comparator(itemB, v); });
    };
    return BidirectionalGraph;
}());
export { BidirectionalGraph };
//# sourceMappingURL=bidirectional-graph.js.map