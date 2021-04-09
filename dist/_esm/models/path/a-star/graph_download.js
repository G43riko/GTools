import { astar } from "./a-star_download";
import { GridNode } from "./grid-node_download";
export class Graph {
    constructor(gridIn, options = {}) {
        this.options = options;
        this.nodes = [];
        this.grid = [];
        this.dirtyNodes = [];
        for (let x = 0; x < gridIn.length; x++) {
            this.grid[x] = [];
            const row = gridIn[x];
            for (let y = 0; y < row.length; y++) {
                const node = new GridNode(x, y, row[y]);
                this.grid[x][y] = node;
                this.nodes.push(node);
            }
        }
        this.init();
    }
    get diagonal() {
        return !!this.options.diagonal;
    }
    get(x, y) {
        return this.grid[x][y];
    }
    init() {
        this.dirtyNodes = [];
        for (const item of this.nodes) {
            astar.cleanNode(item);
        }
    }
    cleanDirty() {
        for (const item of this.dirtyNodes) {
            astar.cleanNode(item);
        }
        this.dirtyNodes = [];
    }
    markDirty(node) {
        this.dirtyNodes.push(node);
    }
    neighbors(node) {
        const ret = [];
        const x = node.x;
        const y = node.y;
        const grid = this.grid;
        if (grid[x - 1] && grid[x - 1][y]) {
            ret.push(grid[x - 1][y]);
        }
        if (grid[x + 1] && grid[x + 1][y]) {
            ret.push(grid[x + 1][y]);
        }
        if (grid[x] && grid[x][y - 1]) {
            ret.push(grid[x][y - 1]);
        }
        if (grid[x] && grid[x][y + 1]) {
            ret.push(grid[x][y + 1]);
        }
        if (this.diagonal) {
            if (grid[x - 1] && grid[x - 1][y - 1]) {
                ret.push(grid[x - 1][y - 1]);
            }
            if (grid[x + 1] && grid[x + 1][y - 1]) {
                ret.push(grid[x + 1][y - 1]);
            }
            if (grid[x - 1] && grid[x - 1][y + 1]) {
                ret.push(grid[x - 1][y + 1]);
            }
            if (grid[x + 1] && grid[x + 1][y + 1]) {
                ret.push(grid[x + 1][y + 1]);
            }
        }
        return ret;
    }
    toString() {
        const graphString = [];
        const nodes = this.grid;
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
//# sourceMappingURL=graph_download.js.map