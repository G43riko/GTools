export declare class BidirectionalGraph<T> {
    private readonly comparator;
    readonly map: Map<T, T[]>;
    constructor(comparator?: (a: T, b: T) => boolean);
    get numberOfVertices(): number;
    cleanUp(): void;
    getEdges(): [T, T][];
    hasVertex(item: T): boolean;
    removeVertex(vertex: T, force?: boolean): void;
    removeDisconnectedVertices(): void;
    private require;
    addVertex(...items: T[]): void;
    disconnect(itemA: T, itemB: T): void;
    connect(itemA: T, ...items: T[]): void;
    areConnected(itemA: T, itemB: T): boolean;
}
