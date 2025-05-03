import type { CanvasDrawer } from "@g43/canvas";
import { Color, GMap } from "@g43/tools";
import type { ReadonlySimpleVector2 } from "@g43/types";
import type { DelaunatorHolder } from "./delaunator-holder.ts";

export type GraphVertexId = number & { readonly __graphVertexId: unique symbol };
export type GraphEdgeId = number & { readonly __graphEdgeId: unique symbol };
export type GraphCellId = number & { readonly __graphCellId: unique symbol };

/**
 * TODO:
 *  - [ ] getVertexNeighbors(vertexId: GraphVertexId): readonly ReadonlySimpleVector2[];
 *  - [ ] getVertexEdgesIndices(vertexId: GraphVertexId): readonly GraphEdgeId[];
 *  - [ ] getVertexCellsIndices(vertexId: GraphVertexId): readonly GraphCellId[];
 *  - [ ] getVertex(vertexId: GraphVertexId): ReadonlySimpleVector2;
 *  - [ ] getEdgeVerticesIndices(edgeId: GraphEdgeId): readonly [GraphVertexId, GraphVertexId];
 *  - [ ] getEdgeVertices(edgeId: GraphEdgeId): readonly [ReadonlySimpleVector2, ReadonlySimpleVector2];
 *  - [ ] getEdgeCellsIndices(edgeId: GraphEdgeId): readonly [GraphCellId, GraphCellId];
 *  - [ ] getEdgeNeighbors(edgeId: GraphEdgeId): readonly GraphEdgeId[];
 *  - [ ] getEdgeCenter(edgeId: GraphEdgeId): ReadonlySimpleVector2;
 *  - [ ] getCellVerticesIndices(cellId: GraphCellId): readonly GraphVertexId[];
 *  - [ ] getCellVertices(cellId: GraphCellId): readonly ReadonlySimpleVector2[];
 *  - [ ] getCellNeighbors(cellId: GraphCellId): readonly GraphCellId[];
 *  - [ ] getCellCenter(cellId: GraphCellId): ReadonlySimpleVector2;
 */
export class GraphHolder {
    /**
     * TODO: Remove duplicates
     */
    public readonly vertexCells: readonly GraphCellId[][];
    public readonly vertexEdges: readonly GraphEdgeId[][];
    public readonly vertexNeighbors: readonly GraphVertexId[][];

    public readonly edgeCells: [cellA: GraphCellId, cellB: GraphCellId][];

    /**
     * TODO: remove duplicates
     */
    public readonly cellVertices: readonly GraphVertexId[][];
    public readonly cellNeighbors: readonly GraphCellId[][];

    /**
     * @param vertices
     * @param edges
     * @param cellBorders
     */
    private constructor(
        public readonly vertices: readonly ReadonlySimpleVector2[],
        public readonly edges: readonly [from: GraphVertexId, to: GraphVertexId][],
        public readonly cellBorders: readonly GraphEdgeId[][],
    ) {
        this.vertexCells = Array.from({ length: this.vertices.length }, () => []);
        this.vertexEdges = Array.from({ length: this.vertices.length }, () => []);
        this.vertexNeighbors = Array.from({ length: this.vertices.length }, () => []);

        this.cellVertices = Array.from({ length: this.cellBorders.length }, () => []);
        this.cellNeighbors = Array.from({ length: this.cellBorders.length }, () => []);

        this.edgeCells = Array.from<[cellA: GraphCellId, cellB: GraphCellId]>({ length: this.edges.length }).fill([
            -1,
            -1,
        ] as [cellA: GraphCellId, cellB: GraphCellId]);
    }

    public static fromDelaunatorHolderOld(holder: DelaunatorHolder): GraphHolder {
        const edges: [from: GraphVertexId, to: GraphVertexId][] = [];
        const cellBorders: GraphEdgeId[][] = [];

        // key = `${Math.min(triangleAIndex, triangleBIndex)}_${Math.max(triangleAIndex, triangleBIndex)}`
        const edgeIndexMap = new GMap<string, [GraphVertexId, GraphVertexId]>();
        const triangleIndexCenterMap = new GMap<GraphCellId, ReadonlySimpleVector2>();
        const cellBordersMap = new GMap<GraphVertexId, string[]>();
        const holderVertexIndexRealIndexMap = new GMap<GraphVertexId, GraphVertexId>();
        const realVertices = new Array<ReadonlySimpleVector2>();

        const getKeyForEdgeBetweenTriangles = (triangleAIndex: GraphCellId, triangleBIndex: GraphCellId) => {
            const minTriangleIndex = Math.min(triangleAIndex, triangleBIndex) as GraphVertexId;
            const maxTriangleIndex = Math.max(triangleAIndex, triangleBIndex) as GraphVertexId;

            const key = `${minTriangleIndex}_${maxTriangleIndex}`;

            edgeIndexMap.addIfMissing(key, () => [minTriangleIndex, maxTriangleIndex]);

            return key;
        };

        holder.vertices.forEach((vertex, index) => {
            if (holder.isHull(index as GraphVertexId)) {
                return;
            }

            const realVertexIndex = realVertices.length as GraphVertexId;
            holderVertexIndexRealIndexMap.set(index as GraphVertexId, realVertexIndex);
            realVertices.push(vertex);
            const triangleIndices = holder.getAdjacentTrianglesIndices(index as GraphVertexId);

            for (let i = 0; i < triangleIndices.length; i++) {
                const triangleAIndex = triangleIndices[i] as GraphCellId;
                const triangleBIndex = triangleIndices[i - 1] as GraphCellId;
                triangleIndexCenterMap.addIfMissing(triangleAIndex, () => holder.getTriangleCenter(triangleAIndex));
                if (!i) {
                    continue;
                }

                const key = getKeyForEdgeBetweenTriangles(triangleAIndex, triangleBIndex);

                cellBordersMap.upsert(realVertexIndex, (exist) => [...exist, key], () => [key]);
            }
        });

        const borderKeyIndexMap = new GMap<string, GraphEdgeId>();

        edgeIndexMap.forEach((points, key) => {
            borderKeyIndexMap.set(key, edges.length as GraphEdgeId);
            edges.push(points);
        });

        cellBordersMap.forEach((borders, triangle) => {
            cellBorders[triangle] = borders.map((border) => borderKeyIndexMap.require(border));
        });

        return GraphHolder.from(realVertices, edges, cellBorders);
        // return new GraphHolder(holder.vertices, edges, cellBorders);
    }

    public render(drawer: CanvasDrawer): void {
        this.cellBorders.forEach((edges, cellIndex) => {
            drawer.fillPath(
                edges.map((edgeId) => {
                    const border = this.edges[edgeId];

                    return this.vertices[border[0]];
                }),
                Color.random(cellIndex),
            );
        });
    }

    /**
     * @param vertices
     * @param edges - [from, to] from, to are indices of vertices
     * @param cells - array of indices of edges for each cell
     */
    public static from(
        vertices: readonly ReadonlySimpleVector2[],
        edges: readonly [from: number, to: number][],
        cells: readonly number[][],
    ): GraphHolder {
        const result = new GraphHolder(
            vertices,
            edges as [from: GraphVertexId, to: GraphVertexId][],
            cells as GraphEdgeId[][],
        );

        cells.forEach((edgesIds, cellIndexO) => {
            const cellIndex = cellIndexO as GraphCellId;
            edgesIds.forEach((edgeId) => {
                const border = result.edges[edgeId];

                result.vertexNeighbors[border[0]].push(border[1]);
                result.vertexNeighbors[border[1]].push(border[0]);

                result.vertexEdges[border[0]].push(edgeId as GraphEdgeId);
                result.vertexEdges[border[1]].push(edgeId as GraphEdgeId);

                if (result.cellVertices[cellIndex].indexOf(border[0]) === -1) {
                    result.cellVertices[cellIndex].push(border[0]);
                }
                if (result.cellVertices[cellIndex].indexOf(border[1]) === -1) {
                    result.cellVertices[cellIndex].push(border[1]);
                }

                if (result.vertexCells[border[0]].indexOf(cellIndex) === -1) {
                    result.vertexCells[border[0]].push(cellIndex);
                }
                if (result.vertexCells[border[1]].indexOf(cellIndex) === -1) {
                    result.vertexCells[border[1]].push(cellIndex);
                }

                const edgeCells = result.edgeCells[edgeId];
                if (edgeCells[0] === -1) {
                    result.edgeCells[edgeId] = [cellIndex, edgeCells[1]];
                } else if (edgeCells[1] === -1) {
                    result.edgeCells[edgeId] = [edgeCells[0], cellIndex];
                } else {
                    throw new Error("Edge is in more than two cells");
                }
            });
        });

        result.edgeCells.forEach(([cellA, cellB]) => {
            if (cellA < 0 || cellB < 0) {
                return;
            }
            result.cellNeighbors[cellA].push(cellB);
            result.cellNeighbors[cellB].push(cellA);
        });

        return result;
    }
}
