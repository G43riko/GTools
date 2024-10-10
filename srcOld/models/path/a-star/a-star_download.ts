// javascript-astar 0.4.1
// http://github.com/bgrins/javascript-astar
// Freely distributable under the MIT License.
// Implements the astar search algorithm in javascript using a Binary Heap.
// Includes Binary Heap (with modifications) from Marijn Haverbeke.
// http://eloquentjavascript.net/appendix2.html

import { SimpleVector2 } from "../../../math";
import { BinaryHeap } from "../../data-structures/binary-queue";
import { Graph } from "./graph_download";
import { GridNode } from "./grid-node_download";

const pathTo = (node: GridNode): GridNode[] => {
    let curr   = node;
    const path = [];
    while (curr.parent) {
        path.unshift(curr);
        curr = curr.parent;
    }

    return path;
};

const getHeap = (): BinaryHeap<GridNode> => new BinaryHeap((node: GridNode) => node.f);

const astar = {
    /**
     * Perform an A* Search on a graph given a start and end node.
     *
     * [options.closest] Specifies whether to return the path to the closest node if the target is unreachable.
     * [options.heuristic] Heuristic function (see astar.heuristics).
     *
     */
    search(graph: Graph, start: GridNode, end: GridNode, options: { heuristic?: any; closest?: boolean } = {}): GridNode[] {
        graph.cleanDirty();
        options         = options || {};
        const heuristic = options.heuristic || astar.heuristics.manhattan;
        const closest   = options.closest || false;

        const openHeap  = getHeap();
        let closestNode = start; // set the start node to be the closest if required

        start.h = heuristic(start, end);
        graph.markDirty(start);

        openHeap.push(start);

        while (openHeap.size() > 0) {

            // Grab the lowest f(x) to process next.  Heap keeps this sorted for us.
            const currentNode = openHeap.pop();

            // End case -- result contains been found, return the traced path.
            if (currentNode === end) {
                return pathTo(currentNode);
            }

            // Normal case -- move currentNode from open to closed, process each of its neighbors.
            currentNode.closed = true;

            // Find all neighbors for the current node.
            const neighbors = graph.neighbors(currentNode);

            for (let i = 0, il = neighbors.length; i < il; ++i) {
                const neighbor = neighbors[i];

                if (neighbor.closed || neighbor.isWall()) {
                    // Not a valid node to process, skip to next neighbor.
                    continue;
                }

                // The g score is the shortest distance from start to current node.
                // We need to check if the path we have arrived at this neighbor is the shortest one we have seen yet.
                const gScore      = currentNode.g + neighbor.getCost(currentNode);
                const beenVisited = neighbor.visited;

                if (!beenVisited || gScore < neighbor.g) {

                    // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
                    neighbor.visited = true;
                    neighbor.parent  = currentNode;
                    neighbor.h       = neighbor.h || heuristic(neighbor, end);
                    neighbor.g       = gScore;
                    neighbor.f       = neighbor.g + neighbor.h;
                    graph.markDirty(neighbor);
                    if (closest) {
                        // If the neighbour is closer than the current closestNode or if it's equally close but contains
                        // a cheaper path than the current closest node then it becomes the closest node
                        if (neighbor.h < closestNode.h || (neighbor.h === closestNode.h && neighbor.g < closestNode.g)) {
                            closestNode = neighbor;
                        }
                    }

                    if (!beenVisited) {
                        // Pushing to heap will put it in proper place based on the 'f' value.
                        openHeap.push(neighbor);
                    } else {
                        // Already seen the node, but since it contains been rescored we need to reorder it in the heap
                        openHeap.rescoreElement(neighbor);
                    }
                }
            }
        }

        if (closest) {
            return pathTo(closestNode);
        }

        // No result was found - empty array signifies failure to find path.
        return [];
    },
    // See data-structures of heuristics: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
    heuristics: {
        manhattan(pos0: SimpleVector2, pos1: SimpleVector2): number {
            const d1 = Math.abs(pos1.x - pos0.x);
            const d2 = Math.abs(pos1.y - pos0.y);

            return d1 + d2;
        },
        diagonal(pos0: SimpleVector2, pos1: SimpleVector2): number {
            const D  = 1;
            const D2 = Math.sqrt(2);
            const d1 = Math.abs(pos1.x - pos0.x);
            const d2 = Math.abs(pos1.y - pos0.y);

            return (D * (d1 + d2)) + ((D2 - (2 * D)) * Math.min(d1, d2));
        },
    },
    cleanNode(node: GridNode): void {
        node.cleanUp();
    },
};

export { astar };
