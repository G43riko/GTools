"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dijkstra = exports.DjikstraVertex = void 0;
var DjikstraVertex = (function () {
    function DjikstraVertex(name, nodes, weight) {
        this.name = name;
        this.nodes = nodes;
        this.weight = weight;
    }
    return DjikstraVertex;
}());
exports.DjikstraVertex = DjikstraVertex;
var Dijkstra = (function () {
    function Dijkstra() {
        this.vertices = {};
    }
    Dijkstra.prototype.addVertex = function (vertex) {
        this.vertices[vertex.name] = vertex;
    };
    Dijkstra.prototype.removeVertex = function (vertexName) {
        delete this.vertices[vertexName];
    };
    Dijkstra.prototype.getVertex = function (vertexName) {
        return this.vertices[vertexName];
    };
    Dijkstra.prototype.requireVertex = function (name, vertexWeight) {
        if (vertexWeight === void 0) { vertexWeight = 0; }
        var result = this.getVertex(name);
        if (result) {
            return result;
        }
        var newVertex = new DjikstraVertex(name, [], 0);
        this.addVertex(newVertex);
        return newVertex;
    };
    Dijkstra.prototype.findPointsOfShortestWay = function (start, finish, weight) {
        var _this = this;
        var nextVertex = finish;
        var arrayWithVertex = [];
        var _loop_1 = function () {
            var minWeight = Number.MAX_VALUE;
            var minVertex = "";
            this_1.vertices[nextVertex].nodes.forEach(function (node) {
                if (node.weight + _this.vertices[node.nameOfVertex].weight < minWeight) {
                    minWeight = _this.vertices[node.nameOfVertex].weight;
                    minVertex = node.nameOfVertex;
                }
            });
            arrayWithVertex.push(minVertex);
            nextVertex = minVertex;
        };
        var this_1 = this;
        while (nextVertex !== start) {
            _loop_1();
        }
        return arrayWithVertex;
    };
    Dijkstra.prototype.findShortestWay = function (start, finish) {
        var _this = this;
        var nodes = {};
        Object.values(this.vertices).forEach(function (vertex) {
            if (vertex.name === start) {
                vertex.weight = 0;
            }
            else {
                vertex.weight = Number.MAX_VALUE;
            }
            nodes[vertex.name] = vertex.weight;
        });
        while (Object.keys(nodes).length !== 0) {
            var sortedVisitedByWeight = Object.keys(nodes).sort(function (a, b) { return _this.vertices[a].weight - _this.vertices[b].weight; });
            var currentVertex = this.vertices[sortedVisitedByWeight[0]];
            for (var _i = 0, _a = currentVertex.nodes; _i < _a.length; _i++) {
                var j = _a[_i];
                var calculateWeight = currentVertex.weight + j.weight;
                if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                    this.vertices[j.nameOfVertex].weight = calculateWeight;
                }
            }
            delete nodes[sortedVisitedByWeight[0]];
        }
        var finishWeight = this.vertices[finish].weight;
        var arrayWithVertex = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();
        return {
            distance: finishWeight,
            nodes: __spreadArrays(arrayWithVertex, [finish]),
        };
    };
    return Dijkstra;
}());
exports.Dijkstra = Dijkstra;
//# sourceMappingURL=djikstra.js.map