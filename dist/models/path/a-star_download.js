"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.astar = void 0;
var binary_queue_1 = require("../data-structures/binary-queue");
var pathTo = function (node) {
    var curr = node;
    var path = [];
    while (curr.parent) {
        path.unshift(curr);
        curr = curr.parent;
    }
    return path;
};
var getHeap = function () { return new binary_queue_1.BinaryHeap(function (node) { return node.f; }); };
var astar = {
    search: function (graph, start, end, options) {
        if (options === void 0) { options = {}; }
        graph.cleanDirty();
        options = options || {};
        var heuristic = options.heuristic || astar.heuristics.manhattan;
        var closest = options.closest || false;
        var openHeap = getHeap();
        var closestNode = start;
        start.h = heuristic(start, end);
        graph.markDirty(start);
        openHeap.push(start);
        while (openHeap.size() > 0) {
            var currentNode = openHeap.pop();
            if (currentNode === end) {
                return pathTo(currentNode);
            }
            currentNode.closed = true;
            var neighbors = graph.neighbors(currentNode);
            for (var i = 0, il = neighbors.length; i < il; ++i) {
                var neighbor = neighbors[i];
                if (neighbor.closed || neighbor.isWall()) {
                    continue;
                }
                var gScore = currentNode.g + neighbor.getCost(currentNode);
                var beenVisited = neighbor.visited;
                if (!beenVisited || gScore < neighbor.g) {
                    neighbor.visited = true;
                    neighbor.parent = currentNode;
                    neighbor.h = neighbor.h || heuristic(neighbor, end);
                    neighbor.g = gScore;
                    neighbor.f = neighbor.g + neighbor.h;
                    graph.markDirty(neighbor);
                    if (closest) {
                        if (neighbor.h < closestNode.h || (neighbor.h === closestNode.h && neighbor.g < closestNode.g)) {
                            closestNode = neighbor;
                        }
                    }
                    if (!beenVisited) {
                        openHeap.push(neighbor);
                    }
                    else {
                        openHeap.rescoreElement(neighbor);
                    }
                }
            }
        }
        if (closest) {
            return pathTo(closestNode);
        }
        return [];
    },
    heuristics: {
        manhattan: function (pos0, pos1) {
            var d1 = Math.abs(pos1.x - pos0.x);
            var d2 = Math.abs(pos1.y - pos0.y);
            return d1 + d2;
        },
        diagonal: function (pos0, pos1) {
            var D = 1;
            var D2 = Math.sqrt(2);
            var d1 = Math.abs(pos1.x - pos0.x);
            var d2 = Math.abs(pos1.y - pos0.y);
            return (D * (d1 + d2)) + ((D2 - (2 * D)) * Math.min(d1, d2));
        },
    },
    cleanNode: function (node) {
        node.cleanUp();
    },
};
exports.astar = astar;
//# sourceMappingURL=a-star_download.js.map