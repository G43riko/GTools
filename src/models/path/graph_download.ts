import { astar } from "./a-star_download";
import { GridNode } from "./grid-node_download";

export class Graph {
    private readonly nodes: GridNode[]  = [];
    private readonly grid: GridNode[][] = [];
    protected dirtyNodes: GridNode[]    = [];

    public get diagonal(): boolean {
        return !!this.options.diagonal;
    }

    /**
     * A graph memory structure
     *
     * @param gridIn - 2D array of input weights
     * @param options - diagonal - Specifies whether diagonal moves are allowed
     */
    public constructor(gridIn: number[][], private readonly options: {diagonal?: boolean} = {}) {
        for (let x = 0; x < gridIn.length; x++) {
            this.grid[x] = [];

            const row = gridIn[x];
            for (let y = 0; y < row.length; y++) {
                const node      = new GridNode(x, y, row[y]);
                this.grid[x][y] = node;
                this.nodes.push(node);
            }
        }
        this.init();
    }

    public get(x: number, y: number): GridNode {
        return this.grid[x][y];
    }

    private init(): void {
        this.dirtyNodes = [];
        for (const item of this.nodes) {
            astar.cleanNode(item);
        }
    }

    public cleanDirty(): void {
        for (const item of this.dirtyNodes) {
            astar.cleanNode(item);
        }
        this.dirtyNodes = [];
    }

    public markDirty(node: GridNode): void {
        this.dirtyNodes.push(node);
    }

    public neighbors(node: GridNode): GridNode[] {
        const ret  = [];
        const x    = node.x;
        const y    = node.y;
        const grid = this.grid;

        // West
        if (grid[x - 1] && grid[x - 1][y]) {
            ret.push(grid[x - 1][y]);
        }

        // East
        if (grid[x + 1] && grid[x + 1][y]) {
            ret.push(grid[x + 1][y]);
        }

        // South
        if (grid[x] && grid[x][y - 1]) {
            ret.push(grid[x][y - 1]);
        }

        // North
        if (grid[x] && grid[x][y + 1]) {
            ret.push(grid[x][y + 1]);
        }

        if (this.diagonal) {
            // Southwest
            if (grid[x - 1] && grid[x - 1][y - 1]) {
                ret.push(grid[x - 1][y - 1]);
            }

            // Southeast
            if (grid[x + 1] && grid[x + 1][y - 1]) {
                ret.push(grid[x + 1][y - 1]);
            }

            // Northwest
            if (grid[x - 1] && grid[x - 1][y + 1]) {
                ret.push(grid[x - 1][y + 1]);
            }

            // Northeast
            if (grid[x + 1] && grid[x + 1][y + 1]) {
                ret.push(grid[x + 1][y + 1]);
            }
        }

        return ret;
    }

    public toString(): string {
        const graphString = [];
        const nodes       = this.grid;
        for (const row of nodes) {
            const rowDebug = [];
            for (const item of row) {
                rowDebug.push(item.weight);
            }
            graphString.push(rowDebug.join(" "));
        }

        return graphString.join("\n");
    }
}
