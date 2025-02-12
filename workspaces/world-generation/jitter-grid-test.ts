import { createFactory } from "../../utils/drawer-test-utils.ts";
import { Vector2 } from "@g43/math";
import { CanvasDrawer } from "../canvas/src/index.ts";
import { DelaunatorHolder } from "./src/common/delaunator-holder.ts";
import { JitterGrid } from "./src/common/jitter-grid.ts";
import { DelaunatorHolderRenderer } from "./src/common/delaunator-holder-renderer.ts";
import { JitterCanvasRendererGrid } from "./src/common/jitter-grid-canvas-renderer.ts";
import { Color } from "../tools/src/color.ts";


const outDirectory = `${import.meta.dirname}/out/images/jitter-grid`;
const createExample = createFactory(outDirectory);



const canvasSize = new Vector2(200, 200);
for (const size of [10, 20, 50]) {
    createExample(`jitter-grid-size-${size}`, canvasSize, (context) => {
        const grid = JitterGrid.createJitterGrid({ x: canvasSize.x / size, y: canvasSize.y / size }, size, 1234)

        JitterCanvasRendererGrid.renderGrid(grid, new CanvasDrawer(context), Color.RED, 1);
    });
}


