import { Color } from "@g43/tools";
import type { VoronoiData } from "../../common/voronoi/voronoi-data.ts";

export class VoronoiDataCanvasRenderer {
    /**
     * TODO: use HSL for random colors to make sure that there are no similar colors
     * @param voronoiData
     * @param color
     * @returns
     */
    public static getImageDataFromVoronoiData(
        voronoiData: VoronoiData,
        color?: Color,
    ): readonly number[] {
        const width = voronoiData.size.x;
        const height = voronoiData.size.y;
        const imageData = new Array(width * height * 4);
        const { maxDist, points, numPoints } = voronoiData;

        // Draw points
        if (color) {
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    const i = (x + y * width) * 4;
                    const num = points[y * width + x];
                    imageData[i] = num.dist * (color.red / maxDist);
                    imageData[i + 1] = num.dist * (color.green / maxDist);
                    imageData[i + 2] = num.dist * (color.blue / maxDist);
                    imageData[i + 3] = 255;
                }
            }
        } else {
            const colorProvider = (): Color => new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
            const colors = Array.from({ length: numPoints }, colorProvider);
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    const i = (x + y * width) * 4;
                    const num = points[y * width + x];
                    imageData[i] = colors[num.index].red;
                    imageData[i + 1] = colors[num.index].green;
                    imageData[i + 2] = colors[num.index].blue;
                    imageData[i + 3] = 255;
                }
            }
        }

        return imageData;
    }

    public static renderInto(
        context: CanvasRenderingContext2D,
        voronoiData: VoronoiData,
        color?: Color,
    ): void {
        const imageData = VoronoiDataCanvasRenderer.getImageDataFromVoronoiData(voronoiData, color);
        const data = context.createImageData(voronoiData.size.x, voronoiData.size.y);
        data.data.set(imageData);
        context.putImageData(data, 0, 0);
    }

    private static createCanvasFromVoronoiData(
        voronoiData: VoronoiData,
        color?: Color,
        canvas = document.createElement("canvas"),
    ): HTMLCanvasElement {
        canvas.width = voronoiData.size.x;
        canvas.height = voronoiData.size.y;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Cannot create contex 2d");
        }

        VoronoiDataCanvasRenderer.renderInto(ctx, voronoiData, color);

        return canvas;
    }
}
