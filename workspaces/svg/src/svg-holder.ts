import type { ReadonlySimpleVector2 } from "@g43/types";
import { SvgArcElementFactory } from "./factories/svg-arc-element-factory.ts";
import { SvgCircleElementFactory } from "./factories/svg-circle-element-factory.ts";
import { SvgElementFactory } from "./factories/svg-element-factory.ts";
import { SvgPathElementFactory } from "./factories/svg-path-element-factory.ts";
import { SvgRectElementFactory } from "./factories/svg-rect-element-factory.ts";
import { SvgElementProxy } from "./proxy/svg-element-proxy.ts";

const svgHolderAddParameter: {
    readonly rect: () => SvgRectElementFactory;
    readonly circle: () => SvgCircleElementFactory;
    readonly path: () => SvgPathElementFactory;
    readonly arc: () => SvgArcElementFactory;
} = Object.freeze(
    {
        rect: () => new SvgRectElementFactory(),
        circle: () => new SvgCircleElementFactory(),
        path: () => new SvgPathElementFactory(),
        arc: () => new SvgArcElementFactory(),
    } as const,
);

export class SvgHolder {
    // public static createFromSelector(selector: string): SvgHolder {
    //     const element = document.querySelector(selector);
    //     if (!element) {
    //         throw new Error(`Cannot find element using selector ${selector}`);
    //     }
    //     if (!(element instanceof SVGSVGElement)) {
    //         throw new Error(` ${element} is not SVG element`);
    //     }
    //
    //     return new SvgHolder(element);
    // }

    public static createNew(size?: ReadonlySimpleVector2): SvgHolder {
        const svgElement = SvgElementProxy.create("svg");
        if (size) {
            svgElement.setAttributeNumber("width", size.x);
            svgElement.setAttributeNumber("height", size.y);
        }

        return new SvgHolder(svgElement);
    }
    public readonly svg: SvgElementProxy;
    public constructor(svg: SvgElementProxy) {
        this.svg = svg;
    }

    public get getSvgElement(): SVGSVGElement | undefined {
        if (typeof document === "undefined") {
            return undefined;
        }

        const parent = document.createElement("div");
        parent.innerHTML = this.svg.outerHTML;

        const svgElement = parent.querySelector("svg");

        return svgElement as SVGSVGElement;
    }

    public add(
        callback: (
            creator: typeof svgHolderAddParameter,
        ) => SvgElementFactory | SVGElement,
    ): this {
        const result = callback(svgHolderAddParameter);

        if (result) {
            this.append(result);
        } else {
            console.warn("Cannot createStaticWorld element");
        }

        return this;
    }

    public append(
        element: SvgElementFactory | SVGElement | SvgElementProxy,
    ): this {
        if (element instanceof SvgElementFactory) {
            const styles = element.getStyleString();
            if (styles) {
                this.svg.addChild(styles);
            }
            const defs = element.getDefsString();
            if (defs) {
                this.svg.addChild(defs);
            }
            this.svg.addChild(element.element);
        } else {
            this.svg.addChild(element);
        }

        return this;
    }

    public removeFrom(element: Element): this {
        if (this.svg.parentElement) {
            throw new Error("SVG Element is already in DOM");
        }
        this.svg.removeFrom(element);

        return this;
    }

    public appendTo(element: Element = document.body): this {
        if (this.svg.parentElement) {
            throw new Error("SVG Element is already in DOM");
        }
        this.svg.appendTo(element);

        return this;
    }

    // async saveAs(
    //     path: string,
    //     encoding: BufferEncoding = "utf8",
    // ): Promise<this> {
    //     try {
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         const fs = await import("fs");
    //
    //         fs.writeFileSync(path, this.svg.outerHTML, { encoding });
    //
    //         return this;
    //     } catch (e) {
    //         return this;
    //     }
    // }
}
