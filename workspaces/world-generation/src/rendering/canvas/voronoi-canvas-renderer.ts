import { Color } from "@g43/tools";
import type { Voronoi } from "../../common/voronoi/voronoi.ts";

export class VoronoiCanvasRenderer {
    public constructor(
        private readonly voronoi: Voronoi,
    ) {
    }

    public renderCells(_context: CanvasRenderingContext2D): void {
        // const cellVertices = this.voronoi.getCellsVertices();
    }

    public renderVertices(context: CanvasRenderingContext2D, radius: number, color: string): void {
        context.fillStyle = color;
        this.voronoi.vertices.p.forEach(([x, y]) => {
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fill();
        });
    }

    public renderCellVertices(context: CanvasRenderingContext2D): void {
        this.voronoi.cells.v.forEach((cellVertices, cellIndex) => {
            if (cellVertices.length < 3) {
                return;
            }
            context.beginPath();
            context.fillStyle = Color.random(cellIndex * 2).hex;

            cellVertices.forEach((vertexIndex, i) => {
                const vertex = this.voronoi.vertices.p[vertexIndex];

                if (i) {
                    context.lineTo(vertex[0], vertex[1]);
                } else {
                    context.moveTo(vertex[0], vertex[1]);
                }
            });
            context.fill();
        });
    }
}
