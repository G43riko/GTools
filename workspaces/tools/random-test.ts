import { createFactory } from "../../utils/drawer-test-utils.ts";
import { SimpleVector } from "@g43/math";
import { Random } from "./src/random.ts";
import { CanvasDrawer } from "@g43/canvas";

const outDirectory = `${import.meta.dirname}/out/images/utils`;
const createExample = createFactory(outDirectory);

const canvasSize = SimpleVector.create2(200, 200);
const center = SimpleVector.create2(canvasSize.x / 2, canvasSize.y / 2);
const numberOfDosts = 1000;
createExample("Random", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const random = new Random();
    const dots = Array.from({ length: numberOfDosts }, () =>
        [
            random.nextIntBetween(0, canvasSize.x),
            random.nextIntBetween(0, canvasSize.y),
        ] as const);
    drawer.fillDots(dots, "red", 3);
});
createExample("gausian-1", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const random = new Random();
    const dots = Array.from({ length: numberOfDosts }, () =>
        [
            random.nextGaussian(0, 1) * canvasSize.x / 5 + center.x,
            random.nextGaussian(0, 1) * canvasSize.y / 5 + center.y,
        ] as const);
    drawer.fillDots(dots, "red", 3);
});
createExample("gausian-5", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const random = new Random();
    const dots = Array.from({ length: numberOfDosts }, () =>
        [
            random.nextGaussian(0, 5) * canvasSize.x / 5 + center.x,
            random.nextGaussian(0, 5) * canvasSize.y / 5 + center.y,
        ] as const);
    drawer.fillDots(dots, "red", 3);
});

createExample("gausian-0.2", canvasSize, (context) => {
    const drawer = new CanvasDrawer(context);
    const random = new Random();
    const dots = Array.from({ length: numberOfDosts }, () =>
        [
            random.nextGaussian(0, 0.2) * canvasSize.x / 5 + center.x,
            random.nextGaussian(0, 0.2) * canvasSize.y / 5 + center.y,
        ] as const);
    drawer.fillDots(dots, "red", 3);
});
