import { SimpleVector2 } from "gtools/math";
import { Graph } from "./graph_download";
import { GridNode } from "./grid-node_download";
declare const astar: {
    /**
     * Perform an A* Search on a graph given a start and end node.
     *
     * [options.closest] Specifies whether to return the path to the closest node if the target is unreachable.
     * [options.heuristic] Heuristic function (see astar.heuristics).
     *
     */
    search(graph: Graph, start: GridNode, end: GridNode, options?: {
        heuristic?: any;
        closest?: boolean;
    }): GridNode[];
    heuristics: {
        manhattan(pos0: SimpleVector2, pos1: SimpleVector2): number;
        diagonal(pos0: SimpleVector2, pos1: SimpleVector2): number;
    };
    cleanNode(node: GridNode): void;
};
export { astar };
//# sourceMappingURL=a-star_download.d.ts.map