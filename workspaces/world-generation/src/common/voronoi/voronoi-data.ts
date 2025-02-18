import type { ReadonlyPair, ReadonlySimpleVector2 } from "@g43/types";
import { SimpleVector, Vector2 } from "@g43/math";

export interface VoronoiData {
    /**
     * voronoi cells: v = cell vertices, c = adjacent cells, b = near-border cell
     * @private
     */
    readonly cells: { v: number[][]; c: number[][]; b: number[] };

    /**
     * cells vertices: p = vertex coordinates, v = neighboring vertices, c = adjacent cells
     * @private
     */
    readonly vertices: { p: ReadonlyPair<number>[]; v: number[][]; c: number[][] };
}

export class VoronoiDataHolder implements VoronoiData {
    public readonly cells: { v: number[][]; c: number[][]; b: number[] } = { v: [], c: [], b: [] };

    public readonly vertices: { p: ReadonlyPair<number>[]; v: number[][]; c: number[][] } = { p: [], v: [], c: [] };

    public get numberOfCells(): number {
        return this.cells.b.length;
    }

    public forEachCell(
        callback: (vertices: ReadonlySimpleVector2[], adjacentCellIndices: number[], index: number) => void,
    ): void {
        this.cells.v.forEach((_, cellIndex) => {
            const cellVertices = this.getCellVertices(cellIndex);
            const adjacentCells = this.cells.c[cellIndex];

            callback(cellVertices, adjacentCells, cellIndex);
        });
    }

    public getCellVertices(cellIndex: number): ReadonlySimpleVector2[] {
        return this.cells.v[cellIndex].map((vertexIndex) => {
            const p = this.vertices.p[vertexIndex];

            return SimpleVector.create2(p[0], p[1]);
        });
    }

    public calculateCenterOfCell(cellIndex: number): ReadonlySimpleVector2 {
        const cellVertices = this.getCellVertices(cellIndex);

        return Vector2.center(cellVertices);
    }

    public getCellsVertices(): readonly ReadonlySimpleVector2[][] {
        return this.cells.v.reduce<ReadonlySimpleVector2[][]>((acc, cellVertices) => {
            if (cellVertices.length < 3) {
                return acc;
            }

            return [
                ...acc,
                cellVertices.map((vertexIndex) => {
                    const vertex = this.vertices.p[vertexIndex];

                    return SimpleVector.create2(vertex[1], vertex[0]);
                }),
            ];
        }, []);
    }
}
