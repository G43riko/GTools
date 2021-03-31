export class BidirectionalGraph {
    constructor(comparator = (a, b) => a === b) {
        this.comparator = comparator;
        this.map = new Map();
    }
    get numberOfVertices() {
        return this.map.size;
    }
    cleanUp() {
        this.map.clear();
    }
    getEdges() {
        const result = [];
        const processedKeys = [];
        this.map.forEach((value, vertexA) => {
            value.forEach((vertexB) => {
                if (processedKeys.some((v) => this.comparator(v, vertexB))) {
                    return;
                }
                result.push([vertexA, vertexB]);
            });
            processedKeys.push(vertexA);
        });
        return result;
    }
    hasVertex(item) {
        return this.map.has(item);
    }
    removeVertex(vertex, force = false) {
        const itemValues = this.map.get(vertex);
        if (!itemValues) {
            return;
        }
        if (!force && itemValues.length) {
            console.warn("Vertex contains connections");
            return;
        }
        this.map.delete(vertex);
        itemValues.forEach((point) => {
            this.map.set(point, this.require(point).filter((p) => !this.comparator(p, vertex)));
        });
    }
    removeDisconnectedVertices() {
        this.map.forEach((value, key) => {
            if (!value.length) {
                this.map.delete(key);
            }
        });
    }
    require(item) {
        return this.map.get(item) || [];
    }
    addVertex(...items) {
        items.forEach((item) => {
            if (this.map.has(item)) {
                return;
            }
            this.map.set(item, []);
        });
    }
    disconnect(itemA, itemB) {
        const aValues = this.require(itemA);
        if (!(aValues === null || aValues === void 0 ? void 0 : aValues.length)) {
            return;
        }
        this.map.set(itemA, aValues.filter((v) => !this.comparator(itemB, v)));
        this.map.set(itemB, this.require(itemB).filter((v) => !this.comparator(itemA, v)));
    }
    connect(itemA, ...items) {
        if (!items.length) {
            return;
        }
        const aValues = this.map.get(itemA) || [];
        const missingPoints = items.filter((p) => !aValues.some((v) => this.comparator(v, p)));
        this.map.set(itemA, [...aValues, ...missingPoints]);
        missingPoints.forEach((itemB) => {
            this.map.set(itemB, [...this.require(itemB), itemA]);
        });
    }
    areConnected(itemA, itemB) {
        const aValues = this.map.get(itemA);
        if (!aValues) {
            return false;
        }
        return aValues.some((v) => this.comparator(itemB, v));
    }
}
//# sourceMappingURL=bidirectional-graph.js.map