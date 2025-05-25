import type { CanvasDrawer } from "@g43/canvas";
import { Color } from "@g43/tools";
import type { DelaunatorHolder } from "./delaunator-holder.ts";
import type { GraphVertexId } from "./graph-holder.ts";

export class DelaunatorHolderRenderer {
    private readonly delaunatorHolder: DelaunatorHolder;
    public constructor(
        delaunatorHolder: DelaunatorHolder,
    ) {
        this.delaunatorHolder = delaunatorHolder;
    }

    public fillHalfEdges(context: CanvasRenderingContext2D, radius: number, color: string): void {
        context.fillStyle = color;

        this.delaunatorHolder.iterateHalfEdges((pointA, pointB) => {
            const center = {
                x: (pointA.x + pointB.x) / 2,
                y: (pointA.y + pointB.y) / 2,
            };

            context.beginPath();
            context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
            context.fill();
        });
    }

    public fillVertices(context: CanvasRenderingContext2D, radius: number, color: string): void {
        context.fillStyle = color;
        this.delaunatorHolder.vertices.forEach((vertex) => {
            context.beginPath();
            context.arc(vertex.x, vertex.y, radius, 0, 2 * Math.PI);
            context.fill();
        });
    }

    public drawEdges(context: CanvasRenderingContext2D, width: number, color: string): void {
        context.strokeStyle = color;
        context.lineWidth = width;
        this.delaunatorHolder.iterateTriangles(([a, b, c]) => {
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.lineTo(c.x, c.y);
            context.closePath();
        });

        context.stroke();
    }

    /**
     * TODO: ONLY triangle centers need to be included in shape
     * @param drawer
     */
    public fillAreas(drawer: CanvasDrawer): void {
        this.delaunatorHolder.vertices.forEach((_, index) => {
            if (this.delaunatorHolder.isHull(index as GraphVertexId)) {
                return;
            }

            // drawer.fillPath(this.delaunatorHolder.getVertexHalfEdges(index), Color.random());
            drawer.fillPath(
                this.delaunatorHolder.getAdjacentTriangleCenters(index as GraphVertexId),
                Color.random(index),
            );
        });
    }

    public fillTriangleCenters(context: CanvasRenderingContext2D, radius: number, color: string): void {
        context.fillStyle = color;
        this.delaunatorHolder.getTriangleCenters().forEach((center) => {
            context.beginPath();
            context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
            context.fill();
        });
    }

    public fillTriangles(context: CanvasRenderingContext2D, color: string): void {
        context.fillStyle = color;
        this.delaunatorHolder.iterateTriangles(([a, b, c]) => {
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.lineTo(c.x, c.y);
            context.closePath();
        });

        context.fill();
    }
}
