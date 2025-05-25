import type { XYWH } from "@g43/types";
import { CustomSvgElementClassList } from "./custom-svg-element-class-list.ts";
import { DOMSvgElement } from "./dom-svg-element.ts";
import type { SvgElementProxy, SvgElementProxyAttribute } from "./svg-element-proxy.ts";

export class CustomSvgElement implements SvgElementProxy {
    private readonly attributes: { [attribute in string]: string } = {};
    private readonly children: (SVGElement | SvgElementProxy | string)[] = [];
    private _parent?: SvgElementProxy;
    public textContent = "";

    public readonly classList: CustomSvgElementClassList = new CustomSvgElementClassList();
    public readonly name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public querySelector(selector: string): SvgElementProxy | undefined {
        // filter by tagName
        if (/^[a-zA-Z-]+$/.test(selector)) {
            const foundElement = this.children.find((element) => {
                if (element instanceof CustomSvgElement) {
                    if (element.name === selector) {
                        return true;
                    }
                } else if (element instanceof SVGElement) {
                    if (element.tagName === selector) {
                        return true;
                    }
                }
            });

            if (!foundElement) {
                return;
            }

            if (foundElement instanceof CustomSvgElement) {
                return foundElement;
            }
            if (foundElement instanceof SVGElement) {
                return new DOMSvgElement(foundElement);
            }
        }
        // filter by className
        if (/^\.[a-zA-Z-]+$/.test(selector)) {
            const className = selector.slice(1);
            const foundElement = this.children.find((element) => {
                const isSvgElement = element instanceof CustomSvgElement || element instanceof SVGElement;
                if (isSvgElement && element.classList.contains(className)) {
                    return true;
                }
            });

            if (!foundElement) {
                return;
            }

            if (foundElement instanceof CustomSvgElement) {
                return foundElement;
            }
            if (foundElement instanceof SVGElement) {
                return new DOMSvgElement(foundElement);
            }
        }

        throw new Error(`Unsupported selector ${selector}`);
    }

    public calculateBoundingBox(): XYWH {
        return {
            x: NaN,
            y: NaN,
            w: NaN,
            h: NaN,
        };
    }

    public addEventListener<K extends keyof SVGElementEventMap>(
        _type: K,
        _listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
        _options?: boolean | AddEventListenerOptions,
    ): void {
        throw new Error("Not implemented");
    }

    public removeEventListener<K extends keyof SVGElementEventMap>(
        _type: K,
        _listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
        _options?: boolean | AddEventListenerOptions,
    ): void {
        throw new Error("Not implemented");
    }

    public setParent(parent: SvgElementProxy): void {
        if (this._parent) {
            throw new Error("Parent elready exists");
        }
        this._parent = parent;
    }

    public addChild(child: SVGElement | SvgElementProxy | string): void {
        this.children.push(child);
        if (child instanceof CustomSvgElement) {
            child.setParent(this);
        }
    }

    public get parentElement(): SvgElementProxy | undefined {
        return this._parent;
    }

    private readonly width = 320;
    private readonly height = 240;

    public get outerHTML(): string {
        if (this.name === "svg") {
            this.attributes["xmlns:svg"] = "http://www.w3.org/2000/svg";
            this.attributes["xmlns:xlink"] = "http://www.w3.org/1999/xlink";
            this.attributes.xmlns = "http://www.w3.org/2000/svg";
            this.attributes.xmlns = "http://www.w3.org/2000/svg";
            this.attributes.version = "1.1";
            this.attributes.width = this.attributes.width ?? String(this.width);
            this.attributes.height = this.attributes.height ?? String(this.height);
            this.attributes.viewBox = `0 0 ${this.attributes.width} ${this.attributes.height}`;
        }
        type ProperyStringType = `${string}="${string}"`;
        const properties = Object.entries(this.attributes)
            .map(([key, value]) => `${key}="${value}"` as ProperyStringType);

        // TODO: escape characters like ></"
        const text = this.textContent || this.children
            .map((e) => (typeof e === "string" ? e : e.outerHTML))
            .join("");

        if (this.classList.length) {
            properties.push(`class="${this.classList.value}"`);
        }

        const propertiesText = properties.length ? ` ${properties.join(" ")}` : "";
        return `<${this.name}${propertiesText}>${text}</${this.name}>`.replace(/ {2,}/g, "");
    }

    public prependTo(_element: Element): void {
        // element.append();
        // TODO: append this;
        throw new Error("Not implemented method prependTo");
    }

    public appendTo(_element: Element): void {
        // element.append();
        // TODO: append this;
        throw new Error("Not implemented method appendTo");
    }

    public removeFrom(_element: Element): void {
        // element.removeChild();
        // TODO: remove this;
        throw new Error("Not implemented method removeFrom");
    }

    public clear(): void {
        throw new Error("Not implemented");
    }

    public setAttribute(attribute: string, value?: string): void {
        if (!value) {
            delete this.attributes[attribute];
        } else {
            this.attributes[attribute] = value;
        }
    }

    public setAttributeNumber(attribute: SvgElementProxyAttribute, value: number): void {
        this.attributes[attribute] = String(value);
    }

    public getAttribute(attribute: string): string | undefined {
        return this.attributes[attribute];
    }

    public removeAttribute(attribute: string): void {
        delete this.attributes[attribute];
    }
}
