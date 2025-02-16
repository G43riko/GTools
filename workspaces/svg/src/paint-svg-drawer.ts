import { type DrawingObject, DrawingObjectType } from "@g43/drawing";
import { SvgArcElementFactory } from "./factories/svg-arc-element-factory.ts";
import { SvgCircleElementFactory } from "./factories/svg-circle-element-factory.ts";
import type { SvgElementFactory } from "./factories/svg-element-factory.ts";
import { SvgPathElementFactory } from "./factories/svg-path-element-factory.ts";
import { SvgRectElementFactory } from "./factories/svg-rect-element-factory.ts";
import { SvgHolder } from "./svg-holder.ts";
import { SvgPolygonElementFactory } from "./factories/svg-polygon-element-factory.ts";
import { SvgPolylineElementFactory } from "./factories/svg-polyline-element-factory.ts";

export class PaintSvgDrawer {
    private readonly svgFactories: { [key in DrawingObjectType]?: SvgElementFactory } = {
        [DrawingObjectType.RECTANGLE]: new SvgRectElementFactory(),
        [DrawingObjectType.ARC]: new SvgArcElementFactory(),
        [DrawingObjectType.CIRCLE]: new SvgCircleElementFactory(),
        [DrawingObjectType.POLYGON]: new SvgPolygonElementFactory(),
        [DrawingObjectType.POLYLINE]: new SvgPolylineElementFactory(),
        [DrawingObjectType.PATH]: new SvgPathElementFactory(),
    };

    private getSvgFactoryFor(object: DrawingObject): SvgElementFactory {
        const factory = this.svgFactories[object.type];
        if (factory) {
            return factory.setFrom(object);
        }

        throw new Error(`Cannot find svg factory for object '${object.type}'`);
    }

    public getSvgForObjects(width: number, height: number, objects: readonly DrawingObject[]): SVGSVGElement {
        const svgHolder = SvgHolder.createNew({ x: width, y: height });
        objects.forEach((object) => {
            const factory = this.getSvgFactoryFor(object);
            svgHolder.append(factory);
        });

        const svgElement = svgHolder.getSvgElement;
        if (!svgElement) {
            throw new Error("Cannot get svg element");
        }

        return svgElement;
    }
}
