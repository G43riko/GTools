export class GridNode {
    constructor(x, y, weight) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.visited = false;
        this.closed = false;
        this.parent = null;
    }
    cleanUp() {
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.visited = false;
        this.closed = false;
        this.parent = null;
    }
    toString() {
        return `[${this.x} ${this.y}]`;
    }
    getCost(fromNeighbor) {
        if (fromNeighbor && fromNeighbor.x !== this.x && fromNeighbor.y !== this.y) {
            return this.weight * 1.41421;
        }
        return this.weight;
    }
    isWall() {
        return this.weight === 0;
    }
}
//# sourceMappingURL=grid-node_download.js.map