import type { XYWH } from "@g43/types";
import { CustomSvgElement } from "./custom-svg-element.ts";
import { DOMSvgElement } from "./dom-svg-element.ts";

const svgNS = "http://www.w3.org/2000/svg";

export type CommonAttribute = "title" | "class" | "transform";
export type SvgElementProxyAttribute =
    | "d"
    | "fill"
    | "stroke"
    | "stroke-width"
    | "pathLength"
    | "r"
    | "cx"
    | "cy"
    | "rx"
    | "ry"
    | "x"
    | "y"
    | "width"
    | "height"
    | "font-size"
    | "alignment-baseline"
    | "text-anchor"
    | "stroke-dasharray"
    | "font-weight"
    | "font-family"
    | "x1"
    | "x2"
    | "y1"
    | "y2"
    | CommonAttribute;

export interface SvgElementProxy {
    readonly parentElement?: SvgElementProxy;
    readonly outerHTML: string;

    readonly classList: DOMTokenList;

    textContent: string;

    addEventListener<K extends keyof SVGElementEventMap>(
        type: K,
        listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;

    removeEventListener<K extends keyof SVGElementEventMap>(
        type: K,
        listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;

    calculateBoundingBox(): XYWH;

    querySelector(selector: string): SvgElementProxy | undefined;

    addChild(child: SVGElement | SvgElementProxy | string): void;

    setAttribute(attribute: SvgElementProxyAttribute, value?: string): void;

    setAttributeNumber(attribute: SvgElementProxyAttribute, value: number): void;

    getAttribute(attribute: SvgElementProxyAttribute): string | undefined;

    removeAttribute(attribute: string): void;

    appendTo(element?: Element): void;

    prependTo(element?: Element): void;

    removeFrom(element: Element): void;

    clear(): void;
}

export const SvgElementProxy = {
    create: (name: string): SvgElementProxy => {
        if (typeof document === "undefined") {
            return new CustomSvgElement(name);
        }

        const element = document.createElementNS(svgNS, name);

        return new DOMSvgElement(element);
    },
};
