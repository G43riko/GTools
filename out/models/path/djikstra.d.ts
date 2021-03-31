export interface DjikstraResult {
    readonly distance: number;
    readonly nodes: readonly string[];
}
export declare class DjikstraVertex {
    readonly name: string;
    readonly nodes: {
        readonly nameOfVertex: string;
        readonly weight: number;
    }[];
    weight: number;
    constructor(name: string, nodes: {
        readonly nameOfVertex: string;
        readonly weight: number;
    }[], weight: number);
}
export declare class Dijkstra {
    vertices: {
        [key: string]: DjikstraVertex;
    };
    constructor();
    addVertex(vertex: DjikstraVertex): void;
    removeVertex(vertexName: string): void;
    getVertex(vertexName: string): DjikstraVertex;
    requireVertex(name: string, vertexWeight?: number): DjikstraVertex;
    findPointsOfShortestWay(start: string, finish: string, weight: number): string[];
    findShortestWay(start: string, finish: string): DjikstraResult;
}
