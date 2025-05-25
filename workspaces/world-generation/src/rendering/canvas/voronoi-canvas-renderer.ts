import { Color } from "@g43/tools";
import type { VoronoiDataHolder } from "../../common/voronoi/voronoi-data.ts";

export class VoronoiCanvasRenderer {
    private readonly voronoi: VoronoiDataHolder;
    public constructor(
        voronoi: VoronoiDataHolder,
    ) {
        this.voronoi = voronoi;
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

    public renderCellVertices(
        context: CanvasRenderingContext2D,
        colorProvider: (cellIndex: number) => string = (cellIndex) => Color.random(cellIndex * 2).hex,
    ): void {
        this.voronoi.cells.v.forEach((cellVertices, cellIndex) => {
            if (cellVertices.length < 3) {
                return;
            }
            context.beginPath();
            context.fillStyle = colorProvider(cellIndex);

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
