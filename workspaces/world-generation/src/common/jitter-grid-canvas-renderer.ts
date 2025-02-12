import type { Color } from "@g43/tools";
import type { JitterGrid } from "./jitter-grid.ts";
import type { CanvasDrawer } from "@g43/canvas";

export class JitterCanvasRendererGrid {
    public static renderGrid(grid: JitterGrid, drawer: CanvasDrawer, color: string | Color, width: number): void {
        drawer.strokeGrid(
            grid.gridSize,
            grid.jitterSize,
            color,
            width,
        );

        grid.grid.forEach((center) => {
            drawer.fillArcByCenterAndRadius(center.x, center.y, 2, color);
        });
    }
}
