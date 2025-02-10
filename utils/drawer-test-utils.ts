import { createCanvas, EmulatedCanvas2D, type EmulatedCanvas2DContext } from "jsr:@gfx/canvas-wasm";
import type { ReadonlySimpleVector2 } from "@g43/types";

export type CreateExampleFn = (
    name: string,
    resolution: ReadonlySimpleVector2,
    callback: (ctx: CanvasRenderingContext2D) => Promise<void> | void,
) => void;

export function createFactory(outDirectory: string): CreateExampleFn {
    const examples = new Array<() => void | Promise<void>>();
    globalThis.addEventListener("unload", () => {
        console.log(`Executing ${examples.length} examples...`);
        const start = Date.now();
        for (const example of examples) {
            example();
        }
        console.log(`Done in ${Date.now() - start}ms`);
    });
    function createExample(
        name: string,
        resolution: ReadonlySimpleVector2,
        callback: (ctx: CanvasRenderingContext2D) => Promise<void> | void,
    ): void {
        examples.push(() => {
            const canvas = createCanvas(resolution.x, resolution.y) as HTMLCanvasElement & EmulatedCanvas2D;
            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D & EmulatedCanvas2DContext;
            try {
                callback(ctx);
                Deno.writeFileSync(`${outDirectory}/${name.replace(/.(png|jpg|jpeg|gif)$/g, "")}.png`, canvas.toBuffer());
            } catch(e: any) {
                console.error(e);
                throw e;
            }
        });
    }

    try {
        Deno.removeSync(outDirectory, { recursive: true });
        console.log(`Directory '${outDirectory}' removed`);
    } catch (_e) {
        console.log(`Skip removing because directory '${outDirectory}' is missing`);
    }
    Deno.mkdirSync(outDirectory, { recursive: true });
    console.log(`New directory '${outDirectory}' created`);

    return createExample;
}
