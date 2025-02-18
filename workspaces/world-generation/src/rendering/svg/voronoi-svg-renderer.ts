import { Color } from "@g43/tools";
import { SvgElementProxy, SvgPolygonElementFactory } from "@g43/svg";
import type { VoronoiDataHolder } from "../../common/voronoi/voronoi-data.ts";

export class VoronoiSvgRenderer {
    public constructor(
        private readonly voronoi: VoronoiDataHolder,
    ) {
    }

    public renderCells(): SvgElementProxy {
        const parent = SvgElementProxy.create("g");
        const cellVertices = this.voronoi.getCellsVertices();
        const polygon = new SvgPolygonElementFactory();

        const colorProvider = (index: number) => Color.random(index * 153);

        cellVertices.forEach((points, index) => {
            parent.addChild(
                polygon.setPoints(points)
                    .setFillColor(colorProvider(index)).element.outerHTML,
            );
        });

        return parent;
    }
}
