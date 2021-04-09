export declare class NearestVertex {
    readonly name: string;
    readonly type: string;
    readonly nodes: {
        readonly weight: number;
        readonly name: string;
    }[];
    constructor(name: string, type: string, nodes: {
        readonly weight: number;
        readonly name: string;
    }[]);
}
export interface NearestResult {
    readonly distance: number;
    readonly nodes: readonly string[];
}
export declare class NearestItem {
    private vertices;
    addVertex(vertex: NearestVertex): void;
    getVertex(vertex: NearestVertex): NearestVertex;
    removeVertex(vertex: NearestVertex): void;
    requireVertex(name: string, type: string): NearestVertex;
    getNearestItem(name: string, searchedType: string): NearestResult;
}
//# sourceMappingURL=nearest-item.d.ts.map