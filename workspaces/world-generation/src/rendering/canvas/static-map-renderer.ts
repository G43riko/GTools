import type { Color } from "@g43/tools";
import type { AbstractStaticMapGenerator } from "../../common/static-map-generator.ts";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { SimpleVector } from "@g43/math";
import { IteratorUtils } from "@g43/utils";
export type ColorProvider<T> = (value: T) => Color;

interface StaticMapRendererParams {
    /**
     * Will be override by `canvas.getContext("2d")`
     */
    readonly context?: CanvasRenderingContext2D;
    readonly canvas?: HTMLCanvasElement;
    readonly canvasSize?: ReadonlySimpleVector2;
    readonly tileSize?: ReadonlySimpleVector2;
}

const RENDER_TYPE: "DIRECT" | "SMALL_CANVAS" | "IMAGE_DATA" = "DIRECT";
export class StaticMapRenderer {

    private renderDirectly<T>(
        generator: AbstractStaticMapGenerator<T>,
        colorProvider: ColorProvider<T>,
        context: CanvasRenderingContext2D,
        tileSize: ReadonlySimpleVector2
    ): void {
        IteratorUtils.iterateXY(generator.mapSize.x, generator.mapSize.y, (x, y) => {
            const tile = generator.getTileFor(x, y);
            if (typeof tile === "undefined") {
                return;
            }
            const tileColor = colorProvider(tile);
            if (!tileColor) {
                return;
            }
            context.fillStyle = tileColor.hex;
            context.fillRect(
                x * tileSize.x,
                y * tileSize.y,
                tileSize.x,
                tileSize.y,
            )
        })
    }
    private renderUsingSmallCanvas<T>(
        generator: AbstractStaticMapGenerator<T>,
        colorProvider: ColorProvider<T>,
        context: CanvasRenderingContext2D,
        canvasSize: ReadonlySimpleVector2,
    ): void {
        const smallCanvas = document.createElement("canvas");
        const smallContext = smallCanvas.getContext("2d");
        if (!smallContext) {
            throw new Error("Context is missing");
        }
        smallCanvas.width = generator.mapSize.x;
        smallCanvas.height = generator.mapSize.y;
        IteratorUtils.iterateXY(generator.mapSize.x, generator.mapSize.y, (x, y) => {
            const tile = generator.getTileFor(x, y);
            if (typeof tile === "undefined") {
                return;
            }
            const tileColor = colorProvider(tile);
            if (!tileColor) {
                return;
            }
            smallContext.fillStyle = tileColor.hex;
            smallContext.fillRect(x, y, 1, 1)
        });
        const prevImageSmoothingEnabled = context.imageSmoothingEnabled;
        context.drawImage(smallCanvas, 0, 0, canvasSize.x, canvasSize.y);
        context.imageSmoothingEnabled = prevImageSmoothingEnabled;
    }

    private renderUsingSmallCanvasAndImageData<T>(
        generator: AbstractStaticMapGenerator<T>,
        colorProvider: ColorProvider<T>,
        context: CanvasRenderingContext2D,
        canvasSize: ReadonlySimpleVector2,
    ): void {
        let counter = 0;
        const smallCanvas = document.createElement("canvas");
        const smallContext = smallCanvas.getContext("2d");
        if (!smallContext) {
            throw new Error("Context is missing");
        }
        smallCanvas.width = generator.mapSize.x;
        smallCanvas.height = generator.mapSize.y;
        const data = smallContext.createImageData(generator.mapSize.x, generator.mapSize.y);
        IteratorUtils.iterateXY(generator.mapSize.x, generator.mapSize.y, (x, y) => {
            const tile = generator.getTileFor(x, y);
            if (typeof tile === "undefined") {
                return;
            }
            const tileColor = colorProvider(tile);
            if (!tileColor) {
                return;
            }
            data.data[counter++] = tileColor.red;
            data.data[counter++] = tileColor.green;
            data.data[counter++] = tileColor.blue;
            data.data[counter++] = tileColor.alpha;
        })
        smallContext.putImageData(data, 0, 0);

        const prevImageSmoothingEnabled = context.imageSmoothingEnabled;
        context.drawImage(smallCanvas, 0, 0, canvasSize.x, canvasSize.y);
        context.imageSmoothingEnabled = prevImageSmoothingEnabled;
    }
    public renderGenerator<T>(
        generator: AbstractStaticMapGenerator<T>,
        colorProvider: ColorProvider<T>,
        {
            canvas,
            context = canvas?.getContext("2d") ?? undefined,
            tileSize = SimpleVector.ONE_2,
            canvasSize: initialCanvasSize,
        }: StaticMapRendererParams): HTMLCanvasElement {
        if (!context) {
            throw new Error("Context is missing");
        }
        const canvasSize =  initialCanvasSize ?? SimpleVector.create2(
            generator.mapSize.x * tileSize.x,
            generator.mapSize.y * tileSize.y,
        )
        if(!initialCanvasSize) {
            context.canvas.width = canvasSize.x;
            context.canvas.height = canvasSize.y;
        }
        if (RENDER_TYPE === "DIRECT") {
            this.renderDirectly(generator, colorProvider, context, tileSize);
        } else if (RENDER_TYPE === "SMALL_CANVAS") {
            this.renderUsingSmallCanvas(generator, colorProvider, context, canvasSize);
        } else if (RENDER_TYPE === "IMAGE_DATA") {
            this.renderUsingSmallCanvasAndImageData(generator, colorProvider, context, canvasSize);
        }
        return context.canvas;
    }
}