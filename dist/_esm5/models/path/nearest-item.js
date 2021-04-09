import { __spreadArrays } from "tslib";
import { PriorityQueue } from "../data-structures/priority-queue";
var NearestVertex = (function () {
    function NearestVertex(name, type, nodes) {
        this.name = name;
        this.type = type;
        this.nodes = nodes;
    }
    return NearestVertex;
}());
export { NearestVertex };
var NearestItem = (function () {
    function NearestItem() {
        this.vertices = {};
    }
    NearestItem.prototype.addVertex = function (vertex) {
        this.vertices[vertex.name] = vertex;
    };
    NearestItem.prototype.getVertex = function (vertex) {
        return this.vertices[vertex.name];
    };
    NearestItem.prototype.removeVertex = function (vertex) {
        delete this.vertices[vertex.name];
    };
    NearestItem.prototype.requireVertex = function (name, type) {
        var result = this.vertices[name];
        if (result) {
            return result;
        }
        var newVertex = new NearestVertex(name, type, []);
        this.addVertex(newVertex);
        return newVertex;
    };
    NearestItem.prototype.getNearestItem = function (name, searchedType) {
        var _this = this;
        var resultVertices = [];
        var queue = PriorityQueue.createMinQueue(function (value) { return value.weight; });
        var visitedVertices = {};
        queue.add({
            weight: 0,
            vertices: [this.vertices[name]],
        });
        var _loop_1 = function () {
            var currentItem = queue.pop();
            var currentVertex = currentItem.vertices[currentItem.vertices.length - 1];
            if (currentVertex.type === searchedType) {
                return { value: {
                        distance: currentItem.weight,
                        nodes: currentItem.vertices.map(function (e) { return e.name; }),
                    } };
            }
            visitedVertices[currentVertex.name] = true;
            currentVertex.nodes.forEach(function (path) {
                if (visitedVertices[path.name]) {
                    return;
                }
                queue.add({
                    weight: currentItem.weight + path.weight,
                    vertices: __spreadArrays(currentItem.vertices, [_this.vertices[path.name]]),
                });
            });
            resultVertices.push(currentVertex);
        };
        while (queue.length) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return null;
    };
    return NearestItem;
}());
export { NearestItem };
//# sourceMappingURL=nearest-item.js.map