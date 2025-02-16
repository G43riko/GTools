import type { XYWH } from "@g43/types";
import type { SvgElementProxy, SvgElementProxyAttribute } from "./svg-element-proxy.ts";

export class DOMSvgElement implements SvgElementProxy {
    public readonly classList: DOMTokenList;

    public get textContent(): string {
        return this.element.textContent as string;
    }

    public set textContent(text: string) {
        this.element.textContent = text;
    }

    public get parentElement(): SvgElementProxy | undefined {
        return this.element.parentElement ? new DOMSvgElement(this.element.parentNode as SVGElement) : undefined;
    }

    public constructor(public readonly element: SVGElement) {
        this.classList = this.element.classList;
    }
    public addEventListener<K extends keyof SVGElementEventMap>(
        type: K,
        listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void {
        this.element.addEventListener(type, listener, options);
    }

    public removeEventListener<K extends keyof SVGElementEventMap>(
        type: K,
        listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void {
        this.element.removeEventListener(type, listener, options);
    }

    public addChild(child: SVGElement | SvgElementProxy | string): void {
        if (child instanceof Element) {
            this.element.append(child);
        } else if (typeof child === "string") {
            this.element.innerHTML += child;
        } else if (child instanceof DOMSvgElement) {
            this.element.append(child.element);
        } else {
            console.error({ child });
            throw new Error("SOMETHING IS WRONG");
        }
    }

    public querySelector(selector: string): SvgElementProxy | undefined {
        const foundElement = this.element.querySelector<SVGElement>(selector);

        if (foundElement) {
            return new DOMSvgElement(foundElement);
        }
    }

    public calculateBoundingBox(): XYWH {
        const isInDom = document.contains(this.element);

        if (!isInDom) {
            document.body.append(this.element);
        }

        const bbox = this.element.getBoundingClientRect();

        const result = {
            x: bbox.x,
            y: bbox.y,
            w: bbox.width,
            h: bbox.height,
        };
        if (!isInDom) {
            document.body.removeChild(this.element);
        }

        return result;
    }

    public appendTo(element: Element = document.body): void {
        element.append(this.element);
    }

    public prependTo(element: Element = document.body): void {
        element.prepend(this.element);
    }

    public removeFrom(element: Element = document.body): void {
        element.removeChild(this.element);
    }

    public clear(): void {
        this.element.innerHTML = "";
    }

    public get outerHTML(): string {
        return this.element.outerHTML;
    }

    public getAttribute(attribute: string): string | undefined {
        return this.element.getAttribute(attribute) as string;
    }

    public removeAttribute(attribute: string): void {
        this.element.removeAttribute(attribute);
    }

    public setAttribute(attribute: string, value?: string): void {
        this.element.setAttribute(attribute, value ?? "");
    }

    public setAttributeNumber(attribute: SvgElementProxyAttribute, value: number): void {
        this.element.setAttribute(attribute, String(value));
    }
}
