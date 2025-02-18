import { StaticCanvasDrawer } from "./src/static-canvas-drawer.ts";
import { SimpleVector } from "@g43/math";
import { createCanvasFactory } from "../../utils/canvas-test-utils.ts";

const outDirectory = `${import.meta.dirname}/out/images/static-canvas-drawer`;
const createExample = createCanvasFactory(outDirectory);

createExample("rotated-rectangle", SimpleVector.create2(200, 200), (ctx) => {
    ctx.fillStyle = "red";
    StaticCanvasDrawer.fillRotatedRect(ctx, 10, 10, 200 - 20, 200 - 20, Math.PI / 4, "AQUA");
});

createExample("rounded-rectange", SimpleVector.create2(200, 200), (ctx) => {
    ctx.fillStyle = "red";
    StaticCanvasDrawer.fillRoundedRect(ctx, 10, 10, 200 - 20, 200 - 20, 20, "BLUE");
});
