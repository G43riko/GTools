import { createFactory } from "../../utils/drawer-test-utils.ts";
import { Vector2 } from "@g43/math";
import { CanvasDrawer } from "@g43/canvas";
import { PointSelectorFactory } from "./src/common/point-selector-factory.ts";


const outDirectory = `${import.meta.dirname}/out/images/points-generation`;
const createExample = createFactory(outDirectory);



const canvasSize = new Vector2(200, 200);
const numberOfDosts = 1000;
createExample("PointSelectorFactory-random", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateRandom(canvasSize.avg, 1234, 0);
    const dots = factory(numberOfDosts).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});
createExample("PointSelectorFactory-random with 10 offset", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateRandom(canvasSize.avg, 1234);
    const dots = factory(numberOfDosts).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});
createExample("PointSelectorFactory-hexagon", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateHexagon(canvasSize.avg);
    const dots = factory(numberOfDosts).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});
createExample("PointSelectorFactory-hexagon with 10 offset", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateHexagon(canvasSize.avg, 10);
    const dots = factory(numberOfDosts).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});
createExample("PointSelectorFactory-square", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateSquare(canvasSize.avg);
    const dots = factory(numberOfDosts).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});
createExample("PointSelectorFactory-square with 10 offset", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateSquare(canvasSize.avg, 10);
    const dots = factory(numberOfDosts).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});

createExample("PointSelectorFactory-jitter", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateJitter(canvasSize.avg, 10, 1234);
    const dots = factory(Math.min(canvasSize.x + canvasSize.y, numberOfDosts)).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});
createExample("PointSelectorFactory-jitter with 10 offset", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const factory = PointSelectorFactory.generateJitter(canvasSize.avg, 10, 1234, 10);
    const dots = factory(Math.min(canvasSize.x + canvasSize.y, numberOfDosts)).map(({x, y}) => [x, y] as const);
    drawer.fillDots(dots, "red", 3)
});