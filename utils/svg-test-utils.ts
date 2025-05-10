import { SvgElementProxy } from "@g43/svg";
import type { ReadonlySimpleVector2 } from "@g43/types";

export type CreateSvgExampleFn = (
    name: string,
    resolution: ReadonlySimpleVector2,
    callback: () => SvgElementProxy,
) => void;

export function createSvgFactory(outDirectory: string): CreateSvgExampleFn & { skip: CreateSvgExampleFn } {
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
        callback: () => SvgElementProxy,
    ): void {
        examples.push(() => {
            try {
                const svgProxy = callback();
                const svgContent =
                    `<svg xmlns="http://www.w3.org/2000/svg" width="${resolution.x}" height="${resolution.y}">${svgProxy.outerHTML}</svg>`;
                Deno.writeTextFileSync(
                    `${outDirectory}/${name.replace(/.(svg)$/g, "")}.svg`,
                    svgContent,
                );
            } catch (e: any) {
                console.error(e);
                throw e;
            }
        });
    }

    createExample.skip = () => null;
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
