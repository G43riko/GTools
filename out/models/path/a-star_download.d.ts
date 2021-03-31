import { SimpleVector2 } from "gtools/math";
import { Graph } from "./graph_download";
import { GridNode } from "./grid-node_download";
declare const astar: {
    search(graph: Graph, start: GridNode, end: GridNode, options?: {
        heuristic?: any;
        closest?: boolean | undefined;
    }): GridNode[];
    heuristics: {
        manhattan(pos0: SimpleVector2, pos1: SimpleVector2): number;
        diagonal(pos0: SimpleVector2, pos1: SimpleVector2): number;
    };
    cleanNode(node: GridNode): void;
};
export { astar };
