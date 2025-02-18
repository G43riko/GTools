import { createCanvasFactory } from "../../utils/canvas-test-utils.ts";
import { SimpleVector } from "@g43/math";
import { Color } from "@g43/tools";
import { SingleValueStaticMapGenerator } from "./src/common/single-value-static-map-generator.ts";
import { type ColorProvider, StaticMapRenderer } from "./src/rendering/canvas/static-map-renderer.ts";
import { PerlinStaticMapGenerator } from "./src/common/pseudo-random-static-map-generators.ts";
import { StaticWorldGenerator } from "./src/static-world-generator.ts";
import { StaticWorldCanvasRenderer } from "./src/static-world-canvas-renderer.ts";
import { CanvasDrawer } from "../canvas/src/canvas-drawer.ts";

const outDirectory = `${import.meta.dirname}/out/images/static-world-generation`;
const createExample = createCanvasFactory(outDirectory);

const createSerializableColorProvider = <T>(mapper: ColorProvider<T>): ColorProvider<T> => {
    const colorMap = new Map<T, Color>();

    return (value: T) => {
        const savedColor = colorMap.get(value);
        if (savedColor) {
            return savedColor;
        }

        const newColor = mapper(value);
        colorMap.set(value, newColor);

        return newColor;
    };
};

const canvasSize = SimpleVector.create2(200, 200);

createExample("Flat height map with 1 tile size", canvasSize, (context) => {
    const renderer = new StaticMapRenderer();
    const mapSize = SimpleVector.create2(100, 100);
    const mapGenerator = new SingleValueStaticMapGenerator(mapSize, 128);
    const colorProvider = createSerializableColorProvider((value: number) => new Color(value, value, value));
    renderer.renderGenerator(mapGenerator, colorProvider, { context, canvasSize });
});

createExample("Flat height map with tile size of 2", canvasSize, (context) => {
    const renderer = new StaticMapRenderer();
    const mapSize = SimpleVector.create2(100, 100);
    const tileSize = SimpleVector.create2(2, 2);
    const mapGenerator = new SingleValueStaticMapGenerator(mapSize, 128);
    const colorProvider = createSerializableColorProvider((value: number) => new Color(value, value, value));
    renderer.renderGenerator(mapGenerator, colorProvider, { context, canvasSize, tileSize });
});
createExample("Perlin noise map", canvasSize, (context) => {
    const renderer = new StaticMapRenderer();
    const mapSize = canvasSize;
    const mapGenerator = new PerlinStaticMapGenerator(mapSize, 0.01, 8);
    const colorProvider = createSerializableColorProvider((value: number) =>
        new Color(value * 255, value * 255, value * 255)
    );
    renderer.renderGenerator(mapGenerator, colorProvider, { context, canvasSize });
});

createExample("Islant generator", canvasSize, (context) => {
    const tileSize = 10;
    const worldGenerator = new StaticWorldGenerator({
        width: canvasSize.x / tileSize,
        height: canvasSize.y / tileSize,
        biomes: ["WATER", "LAND"],
    });

    const world = worldGenerator.generateHolder();
    const renderer = new StaticWorldCanvasRenderer(world);
    const biomeColorMap = new Map<"WATER" | "LAND", string>([
        ["WATER", "blue"],
        ["LAND", "green"],
    ]);

    const drawer = new CanvasDrawer(context);
    renderer.renderBiomes(drawer, biomeColorMap);
});
