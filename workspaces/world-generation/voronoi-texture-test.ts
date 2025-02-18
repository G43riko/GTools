import { createCanvasFactory } from "../../utils/canvas-test-utils.ts";
import { Vector2 } from "@g43/math";
import { VoronoiTexture } from "./src/common/voronoi/voronoi-texture.ts";
import { VoronoiDataCanvasRenderer } from "./src/rendering/canvas/voronoi-data-canvas-renderer.ts";
import { Color } from "@g43/tools";

const outDirectory = `${import.meta.dirname}/out/images/voronoi-texture`;
const createExample = createCanvasFactory(outDirectory);

const canvasSize = new Vector2(200, 200);

for (const points of [10, 100, 1000]) {
    createExample(`voronoi-points-${points}`, canvasSize, (context) => {
        const voronoi = VoronoiTexture.generateVoronoiData(
            canvasSize.x,
            canvasSize.y,
            points,
            1234,
        );

        VoronoiDataCanvasRenderer.renderInto(context, voronoi);
    });
}

for (const points of [10, 100, 1000]) {
    createExample(`voronoi-points-red-${points}`, canvasSize, (context) => {
        const voronoi = VoronoiTexture.generateVoronoiData(
            canvasSize.x,
            canvasSize.y,
            points,
            1234,
        );
        VoronoiDataCanvasRenderer.renderInto(context, voronoi, Color.RED);
    });
}
