import { GridNode } from "./grid-node_download";
export declare class Graph {
    private readonly options;
    private readonly nodes;
    private readonly grid;
    protected dirtyNodes: GridNode[];
    get diagonal(): boolean;
    /**
     * A graph memory structure
     *
     * @param gridIn - 2D array of input weights
     * @param options - diagonal - Specifies whether diagonal moves are allowed
     */
    constructor(gridIn: number[][], options?: {
        diagonal?: boolean;
    });
    get(x: number, y: number): GridNode;
    private init;
    cleanDirty(): void;
    markDirty(node: GridNode): void;
    neighbors(node: GridNode): GridNode[];
    toString(): string;
}
//# sourceMappingURL=graph_download.d.ts.map