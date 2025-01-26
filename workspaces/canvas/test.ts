/// <reference lib="deno.ns" />
import {createCanvas, type EmulatedCanvas2DContext} from "jsr:@gfx/canvas-wasm";
import { StaticCanvasDrawer } from "./src/static-canvas-drawer.ts";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { SimpleVector } from "@g43/math";

const outDirectory = `${import.meta.dirname}/out/images`;
const examples = new Array<() => void | Promise<void>>();
globalThis.addEventListener("unload", () => {
    console.log(`Executing ${examples.length} examples...`);
    const start = Date.now()
    for(const example of examples) {
        example();
    }
    console.log(`Done in ${Date.now() - start}ms`);
 });
function createExample(name: string, resolution: ReadonlySimpleVector2, callback: (ctx: CanvasRenderingContext2D) => Promise<void> | void): void {    
    examples.push(() => {
        const canvas = createCanvas(resolution.x, resolution.y);
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D & EmulatedCanvas2DContext;
        callback(ctx);
        Deno.writeFileSync(`${outDirectory}/${name.replace(/.(png|jpg|jpeg|gif)$/g, "")}.png`, canvas.toBuffer());
    })
}

try {
    Deno.removeSync(outDirectory, {recursive: true})
    console.log(`Directory '${outDirectory}' removed`);
} catch(_e) {
    console.log(`Skip removing because directory '${outDirectory}' is missing`);
}
Deno.mkdirSync(outDirectory, {recursive: true});
console.log(`New directory '${outDirectory}' created`);


/************************* Create examples here *************************/
createExample("rotated-rectangle", SimpleVector.create2(200, 200), (ctx) => {
    ctx.fillStyle = "red";
    StaticCanvasDrawer.fillRotatedRect(ctx, 10, 10, 200 - 20, 200 - 20, Math.PI / 4, "AQUA");
});

createExample("rounded-rectange", SimpleVector.create2(200, 200), (ctx) => {
    ctx.fillStyle = "red";
    StaticCanvasDrawer.fillRoundedRect(ctx, 10, 10, 200 - 20, 200 - 20, 20, "BLUE");
})
