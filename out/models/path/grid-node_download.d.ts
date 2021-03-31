export declare class GridNode {
    readonly x: number;
    readonly y: number;
    readonly weight: number;
    f: number;
    g: number;
    h: number;
    visited: boolean;
    closed: boolean;
    parent: GridNode | null;
    constructor(x: number, y: number, weight: number);
    cleanUp(): void;
    toString(): string;
    getCost(fromNeighbor: GridNode): number;
    isWall(): boolean;
}
