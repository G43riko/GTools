export class GridNode {
    public f = 0;
    public g = 0;
    public h = 0;

    public visited = false;
    public closed  = false;

    public parent: GridNode | null = null;

    public constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly weight: number,
    ) {
    }

    public cleanUp(): void {
        this.f       = 0;
        this.g       = 0;
        this.h       = 0;
        this.visited = false;
        this.closed  = false;
        this.parent  = null;
    }

    public toString(): string {
        return `[${this.x} ${this.y}]`;
    }

    public getCost(fromNeighbor: GridNode): number {
        // Take diagonal weight into consideration.
        if (fromNeighbor && fromNeighbor.x !== this.x && fromNeighbor.y !== this.y) {
            return this.weight * 1.41421;
        }

        return this.weight;
    }

    public isWall(): boolean {
        return this.weight === 0;
    }
}
