import { Grid2Holder } from "@g43/tools";
import { Pair, ReadonlyPair, ReadonlySimpleVector2 } from "@g43/types";
import Delaunator from "delaunator";
import { GraphCellId, GraphVertexId } from "./graph-holder.ts";
import { JitterGrid } from "./jitter-grid.ts";

export class DelaunatorHolder {
    public readonly hullIndices: readonly number[];
    public readonly triangleIndices: readonly number[];
    public readonly halfEdgeIndices: readonly number[];
    public readonly vertices: readonly ReadonlySimpleVector2[] = this.createVertexArray();

    private createVertexArray(): readonly ReadonlySimpleVector2[] {
        const result = new Array<ReadonlySimpleVector2>();

        for (let i = 0; i < this.delaunator.coords.length; i += 2) {
            result.push({
                x: this.delaunator.coords[i],
                y: this.delaunator.coords[i + 1],
            });
        }

        return result;
    }


    public constructor(
        public readonly delaunator: Delaunator<number>,
    ) {
        this.hullIndices = Array.from(this.delaunator.hull);
        this.triangleIndices = Array.from(this.delaunator.triangles);
        this.halfEdgeIndices = Array.from(this.delaunator.halfedges);
    }

    public static fromJitter(jitter: JitterGrid, totalOffset?: number): DelaunatorHolder {
        function rn(v: number, d = 0): number {
            const m = 10 ** d;

            return Math.round(v * m) / m;
        }

        function getBoundaryPoints(width: number, height: number, spacing: number): readonly ReadonlyPair<number>[] {
            const offset = rn(-1 * spacing);
            const bSpacing = spacing * 2;
            const w = width - offset * 2;
            const h = height - offset * 2;
            const numberX = Math.ceil(w / bSpacing) - 1;
            const numberY = Math.ceil(h / bSpacing) - 1;
            const points = new Array<Pair<number>>();
            for (let i = 0.5; i < numberX; i++) {
                const x = Math.ceil((w * i) / numberX + offset);
                points.push([x, offset], [x, h + offset]);
            }
            for (let i = 0.5; i < numberY; i++) {
                const y = Math.ceil((h * i) / numberY + offset);
                points.push([offset, y], [w + offset, y]);
            }

            return points;
        }

        return DelaunatorHolder.fromGridOfVectors(
            jitter.grid,
            getBoundaryPoints(jitter.getMapWidth(), jitter.getMapHeight(), jitter.jitterSize),
            totalOffset,
        );
    }

    public static fromGridOfVectors(grid: Grid2Holder<ReadonlySimpleVector2>, additional?: readonly ReadonlyPair<number>[], offset = 0): DelaunatorHolder {
        const data = new Array<number>();

        grid.forEach((item) => data.push(item.x + offset, item.y + offset) as unknown as boolean);

        additional?.forEach(([x, y]) => data.push(x + offset, y + offset));

        return new DelaunatorHolder(new Delaunator(data));
    }

    public getHullVertices(): readonly ReadonlySimpleVector2[] {
        return this.hullIndices.map((index) => this.vertices[index]);
    }

    public getTriangleVertices(triangleIndex: GraphCellId): [ReadonlySimpleVector2, ReadonlySimpleVector2, ReadonlySimpleVector2] {
        return [
            this.vertices[this.triangleIndices[triangleIndex * 3]],
            this.vertices[this.triangleIndices[triangleIndex * 3 + 1]],
            this.vertices[this.triangleIndices[triangleIndex * 3 + 2]],
        ];
    }

    public isHull(vertexIndex: GraphVertexId): boolean {
        return this.hullIndices.includes(vertexIndex);
    }

    public getVertex(vertexIndex: GraphVertexId): ReadonlySimpleVector2 {
        return this.vertices[vertexIndex];
    }

    public getVertexHalfEdges(vertexIndex: GraphVertexId): readonly ReadonlySimpleVector2[] {
        const result = new Array<ReadonlySimpleVector2>();
        const vertexPosition = this.vertices[vertexIndex];

        this.halfEdgeIndices.forEach((halfEdgeIndex, index) => {
            if (this.triangleIndices[halfEdgeIndex] === vertexIndex) {
                const vertexBPosition = this.vertices[this.triangleIndices[index]];
                result.push({
                    x: (vertexPosition.x + vertexBPosition.x) / 2,
                    y: (vertexPosition.y + vertexBPosition.y) / 2,
                });
            }
        });

        return result.sort((a, b) => Math.atan2(a.y - vertexPosition.y, a.x - vertexPosition.x)
            - Math.atan2(b.y - vertexPosition.y, b.x - vertexPosition.x));
    }

    /**
     * Return indices of triangles which are adjacent to the given vertex
     * @param vertexIndex
     */
    public getAdjacentTrianglesIndices(vertexIndex: GraphVertexId): readonly GraphCellId[] {
        const result = new Array<GraphCellId>();

        for (let i = 0; i < this.triangleIndices.length; i += 3) {
            if (this.triangleIndices[i] === vertexIndex || this.triangleIndices[i + 1] === vertexIndex || this.triangleIndices[i + 2] === vertexIndex) {
                result.push(i / 3 as GraphCellId);
            }
        }

        return result;
    }

    public getAdjacentTriangleCenters(vertexIndex: GraphVertexId): readonly ReadonlySimpleVector2[] {
        const vertexPosition = this.vertices[vertexIndex];

        return this.getAdjacentTrianglesIndices(vertexIndex)
            .map((triangleIndex) => this.getTriangleCenter(triangleIndex))
            .sort((a, b) =>
                Math.atan2(a.y - vertexPosition.y, a.x - vertexPosition.x) -
                Math.atan2(b.y - vertexPosition.y, b.x - vertexPosition.x));
    }

    public getAdjacentVerticesOf(vertexIndex: GraphVertexId): readonly ReadonlySimpleVector2[] {
        const adjacentVerticesIndices = new Set<number>();

        for (let i = 0; i < this.triangleIndices.length; i += 3) {
            if (this.triangleIndices[i] === vertexIndex || this.triangleIndices[i + 1] === vertexIndex || this.triangleIndices[i + 2] === vertexIndex) {
                adjacentVerticesIndices.add(this.triangleIndices[i]);
                adjacentVerticesIndices.add(this.triangleIndices[i + 1]);
                adjacentVerticesIndices.add(this.triangleIndices[i + 2]);
            }
        }

        const finalResult = new Array<ReadonlySimpleVector2>();

        adjacentVerticesIndices.forEach((index) => {
            if (index === vertexIndex) {
                return;
            }
            finalResult.push(this.vertices[index]);
        });

        return finalResult;
    }

    public iterateHalfEdges(callback: (pointA: ReadonlySimpleVector2, pointB: ReadonlySimpleVector2, triangleAIndex: GraphCellId, triangleBIndex: GraphCellId) => unknown): void {
        this.delaunator.halfedges.forEach((halfEdge: any, vertexIndex: any) => {
            const triangleAIndex = this.delaunator.triangles[halfEdge] as GraphCellId;
            const triangleBIndex = this.delaunator.triangles[vertexIndex] as GraphCellId;

            callback(
                this.vertices[triangleAIndex],
                this.vertices[triangleBIndex],
                // {
                //     x: this.delaunator.coords[triangleAIndex * 2],
                //     y: this.delaunator.coords[triangleAIndex * 2 + 1],
                // },
                // {
                //     x: this.delaunator.coords[triangleBIndex * 2],
                //     y: this.delaunator.coords[triangleBIndex * 2 + 1],
                // },
                triangleAIndex,
                triangleBIndex,
            );
        });
    }

    public getTriangleCenter(triangleIndex: GraphCellId): ReadonlySimpleVector2 {
        const vertices = this.getTriangleVertices(triangleIndex);

        return this.getCenterBetweenVertices(vertices[0], vertices[1], vertices[2]);
    }

    private getCenterBetweenVertices(a: ReadonlySimpleVector2, b: ReadonlySimpleVector2, c: ReadonlySimpleVector2): ReadonlySimpleVector2 {
        return {
            x: (a.x + b.x + c.x) / 3,
            y: (a.y + b.y + c.y) / 3,
        };
    }

    public getTriangleCenters(): readonly ReadonlySimpleVector2[] {
        const result = new Array<ReadonlySimpleVector2>();

        for (let i = 0; i < this.delaunator.triangles.length; i += 3) {
            const a = this.vertices[this.delaunator.triangles[i]];
            const b = this.vertices[this.delaunator.triangles[i + 1]];
            const c = this.vertices[this.delaunator.triangles[i + 2]];

            result.push(this.getCenterBetweenVertices(a, b, c));
        }

        return result;
    }

    public iterateTriangles(callback: (points: [ReadonlySimpleVector2, ReadonlySimpleVector2, ReadonlySimpleVector2], indices: [GraphCellId, GraphCellId, GraphCellId]) => unknown): void {
        for (let i = 0; i < this.delaunator.triangles.length; i += 3) {
            const a = this.vertices[this.delaunator.triangles[i]];
            const b = this.vertices[this.delaunator.triangles[i + 1]];
            const c = this.vertices[this.delaunator.triangles[i + 2]];

            callback([a, b, c], [i, i + 1, i + 2] as [GraphCellId, GraphCellId, GraphCellId]);
        }
    }
}
