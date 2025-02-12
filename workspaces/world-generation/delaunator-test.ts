import { createFactory } from "../../utils/drawer-test-utils.ts";
import { Vector2 } from "@g43/math";
import { CanvasDrawer } from "../canvas/src/index.ts";
import { DelaunatorHolder } from "./src/common/delaunator-holder.ts";
import { JitterGrid } from "./src/common/jitter-grid.ts";
import { DelaunatorHolderRenderer } from "./src/common/delaunator-holder-renderer.ts";

const outDirectory = `${import.meta.dirname}/out/images/delaunator`;
const createExample = createFactory(outDirectory);

const canvasSize = new Vector2(200, 200);

for (const size of [10, 20, 50]) {
    const delaunator = DelaunatorHolder.fromJitter(
        JitterGrid.createJitterGrid({ x: canvasSize.x / size, y: canvasSize.y / size }, size, 1234),
    );
    const renderer = new DelaunatorHolderRenderer(delaunator);

    createExample(`delaunator-fill-areas-size-${size}`, canvasSize, (context) => {
        const drawer = new CanvasDrawer(context);
        renderer.fillAreas(drawer);
    });
    createExample.skip(`delaunator-fill-half-edges-size-${size}`, canvasSize, (context) => {
        renderer.fillHalfEdges(context, 10, "blue");
    });
    createExample(`delaunator-fill-half-edges-size-${size}`, canvasSize, (context) => {
        renderer.fillTriangleCenters(context, 2, "blue");
    });
    createExample.skip(`delaunator-fill-triangles-size-${size}`, canvasSize, (context) => {
        renderer.fillTriangles(context, "blue");
    });
    createExample(`delaunator-draw-edges-size-${size}`, canvasSize, (context) => {
        renderer.drawEdges(context, 2, "blue");
    });
}
