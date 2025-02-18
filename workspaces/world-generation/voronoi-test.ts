import { createSvgFactory } from "../../utils/svg-test-utils.ts";
import { SimpleVector, Vector2 } from "@g43/math";
import { DelaunatorHolder, Voronoi, VoronoiCanvasRenderer } from "./src/index.ts";
import { JitterGrid } from "./src/common/jitter-grid.ts";
import { VoronoiSvgRenderer } from "./src/rendering/svg/voronoi-svg-renderer.ts";
import { createCanvasFactory } from "../../utils/canvas-test-utils.ts";
import { VoronoiDataCanvasRenderer } from "./src/rendering/canvas/voronoi-data-canvas-renderer.ts";

const outDirectory = `${import.meta.dirname}/out/images/voronoi`;
const createSvgExample = createSvgFactory(outDirectory);
const createCanvasExample = createCanvasFactory(outDirectory);

const canvasSize = new Vector2(200, 200);

for (const jitterSize of [5, 10, 25]) {
    createSvgExample(`voronoi-jitter-size-${jitterSize}`, canvasSize, () => {
        const jitter = JitterGrid.createJitterGrid(SimpleVector.create2(canvasSize.x / jitterSize, canvasSize.y / jitterSize), jitterSize);


        const holder = DelaunatorHolder.fromJitter(jitter);
        const voronoi = Voronoi.fromDelaunator(holder.delaunator);
        const rendered = new VoronoiSvgRenderer(voronoi);
        
        return rendered.renderCells()
    });
    createCanvasExample(`voronoi-jitter-size-${jitterSize}`, canvasSize, (ctx) => {
        const jitter = JitterGrid.createJitterGrid(SimpleVector.create2(canvasSize.x / jitterSize, canvasSize.y / jitterSize), jitterSize);


        const holder = DelaunatorHolder.fromJitter(jitter);
        const voronoi = Voronoi.fromDelaunator(holder.delaunator);
        const rendered = new VoronoiCanvasRenderer(voronoi);
        
        rendered.renderCellVertices(ctx);
    });
}
