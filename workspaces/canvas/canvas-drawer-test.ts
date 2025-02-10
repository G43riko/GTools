import { SimpleVector } from "@g43/math";
import { createFactory } from "../../utils/drawer-test-utils.ts";
import { CanvasDrawer } from "./src/canvas-drawer.ts";
import { Color } from "@g43/tools";

const outDirectory = `${import.meta.dirname}/out/images/canvas-drawer`;
const createExample = createFactory(outDirectory);

/************************* Create examples here *************************/

const demos: [string, ((drawer: CanvasDrawer, x: number, y: number, w: number, h: number) => void)][] = [
    ["FillRect", (drawer, x, y, w, h) => drawer.fillRect(x, y, w, h, Color.RED)],
    ["FillRotatedRect", (drawer, x, y, w, h) => drawer.fillRotatedRect(x, y, w, h, Math.PI / 5, Color.RED)],
    ["StrokeRect", (drawer, x, y, w, h) => drawer.strokeRect(x, y, w, h, Color.GREEN, 2)],
    ["FillRoundedRect", (drawer, x, y, w, h) => drawer.fillRoundedRect(x, y, w, h, 5, Color.MAGENTA)],
    ["StrokeRoundedRect", (drawer, x, y, w, h) => drawer.strokeRoundedRect(x, y, w, h, [1, 2, 4, 8], Color.BLUE, 2)],
    ["FillArc", (drawer, x, y, w, h) => drawer.fillArc(x, y, w, h, Color.AQUA)],
    ["StrokeArc", (drawer, x, y, w, h) => drawer.strokeArc(x, y, w, h, Color.PURPLE, 2)],
    ["FillArc", (drawer, x, y, w, h) => drawer.fillArc(x, y, w, h / 2, Color.OLIVE)],
    ["StrokeArc", (drawer, x, y, w, h) => drawer.strokeArc(x, y, w / 2, h, Color.YELLOW, 2)],
    [
        "StrokeGrid",
        (drawer, x, y, w, h, gridSize = 10) =>
            drawer.strokeGrid({ x: w / gridSize, y: h / gridSize }, { x: gridSize, y: gridSize }, Color.TEAL, 1, {
                x,
                y,
            }),
    ],
    [
        "FillText",
        (drawer, x, y) => {
            drawer.context.textBaseline = "top";
            drawer.context.textAlign = "left";
            drawer.context.font = "15px sans-serif";
            drawer.context.fillStyle = "RED";
            drawer.fillText("TEXT", x + 20, y + 20);
        },
    ],
    [
        "FillVerticalText",
        (drawer, x, y) => {
            drawer.context.fillStyle = "RED";
            drawer.context.textBaseline = "top";
            drawer.context.textAlign = "right";
            drawer.context.font = "10px sans-serif";
            drawer.fillVerticalText("ABC", x + 20, y + 20);
        },
    ],
];
demos.forEach(([name, callback]) => {
    createExample(name, SimpleVector.create2(200, 200), (ctx) => {
        const drawer = new CanvasDrawer(ctx);
        callback(drawer, 0, 0, 200, 200);
    });
});
