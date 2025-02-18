import type { CanvasDrawer } from "@g43/canvas";
import type { StaticWorldHolder } from "./static-world-holder.ts";
import type { MapHolderCell } from "./static-world-holder.ts";
import { VoronoiCanvasRenderer } from "./rendering/canvas/voronoi-canvas-renderer.ts";
export class StaticWorldCanvasRenderer<Cell extends MapHolderCell = MapHolderCell, Biome extends string = string> {
    private readonly voronoiRenderer: VoronoiCanvasRenderer;
    public constructor(
        private readonly world: StaticWorldHolder<Cell, Biome>,
    ) {
        this.voronoiRenderer = new VoronoiCanvasRenderer(world.voronoi);
    }

    public renderBiomes(drawer: CanvasDrawer, biomeMap: Map<Biome, string>): void {
        this.voronoiRenderer.renderCellVertices(drawer.context, (cellIndex) => {
            const biome = this.world.getBiomeFor(cellIndex);
            const color = biomeMap.get(biome);

            return color ?? "pink";
        });
    }
}
