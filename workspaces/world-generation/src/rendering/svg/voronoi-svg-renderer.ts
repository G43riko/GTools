import { Color } from "@g43/tools";
import { SvgElementProxy, SvgPolygonElementFactory } from "@g43/svg";
import type { Voronoi } from "../../common/voronoi/voronoi.ts";

export class VoronoiSvgRenderer {
    public constructor(
        private readonly voronoi: Voronoi,
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
