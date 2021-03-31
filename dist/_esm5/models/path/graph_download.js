import { astar } from "./a-star_download";
import { GridNode } from "./grid-node_download";
var Graph = (function () {
    function Graph(gridIn, options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.nodes = [];
        this.grid = [];
        this.dirtyNodes = [];
        for (var x = 0; x < gridIn.length; x++) {
            this.grid[x] = [];
            var row = gridIn[x];
            for (var y = 0; y < row.length; y++) {
                var node = new GridNode(x, y, row[y]);
                this.grid[x][y] = node;
                this.nodes.push(node);
            }
        }
        this.init();
    }
    Object.defineProperty(Graph.prototype, "diagonal", {
        get: function () {
            return !!this.options.diagonal;
        },
        enumerable: false,
        configurable: true
    });
    Graph.prototype.get = function (x, y) {
        return this.grid[x][y];
    };
    Graph.prototype.init = function () {
        this.dirtyNodes = [];
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var item = _a[_i];
            astar.cleanNode(item);
        }
    };
    Graph.prototype.cleanDirty = function () {
        for (var _i = 0, _a = this.dirtyNodes; _i < _a.length; _i++) {
            var item = _a[_i];
            astar.cleanNode(item);
        }
        this.dirtyNodes = [];
    };
    Graph.prototype.markDirty = function (node) {
        this.dirtyNodes.push(node);
    };
    Graph.prototype.neighbors = function (node) {
        var ret = [];
        var x = node.x;
        var y = node.y;
        var grid = this.grid;
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
    };
    Graph.prototype.toString = function () {
        var graphString = [];
        var nodes = this.grid;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var row = nodes_1[_i];
            var rowDebug = [];
            for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
                var item = row_1[_a];
                rowDebug.push(item.weight);
            }
            graphString.push(rowDebug.join(" "));
        }
        return graphString.join("\n");
    };
    return Graph;
}());
export { Graph };
//# sourceMappingURL=graph_download.js.map