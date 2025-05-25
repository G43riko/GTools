import { Color } from "@g43/tools";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { type DrawingObject, type DrawingObjectType, Gradient } from "@g43/drawing";
import { SvgElementProxy, type SvgElementProxyAttribute } from "../proxy/svg-element-proxy.ts";
import { SvgGradientFactory } from "./svg-gradient-factory.ts";

let idCounter = 0;
/**
 * TODO: hold map of error for each property. It should be set when property assignment failed
 */
export abstract class SvgElementFactory {
    public abstract readonly type: DrawingObjectType;
    public readonly id: string = `element-${idCounter++}`;
    protected static readonly svgNS = "http://www.w3.org/2000/svg";
    protected readonly _element: SvgElementProxy;
    public readonly classList: DOMTokenList;

    public get element(): SvgElementProxy {
        return this._element;
    }

    public getSvgString(): string {
        return this._element.outerHTML;
    }

    private _hoverStyles = "";
    private _styles = "";
    private readonly _defs: string[] = [];
    public readonly elementName: string;
    protected constructor(elementName: string) {
        this.elementName = elementName;
        this._element = SvgElementProxy.create(this.elementName);
        this.classList = this._element.classList;
    }

    public addClassName(className: string): this {
        this.classList.add(className);

        return this;
    }

    /**
     * Override current factory data by data from given object
     * TODO: should be abstract
     * @param _object to override current data
     */
    public setFrom(_object: DrawingObject): this {
        return this;
    }

    /**
     * TODO: should be abstract
     * @param _object
     */
    public patchFrom(_object: DrawingObject): this {
        throw new Error("Not implemented");
    }
    public setTransformSingle(
        rot: number,
        originX: number,
        originY: number,
        posX: number,
        posY: number,
        scaleX: number,
        scaleY: number,
    ): this {
        const transform = `
               rotate(${rot} ${originX} ${originY})
               translate(${posX} ${posY})
               scale(${scaleX} ${scaleY})`;

        this._element.setAttribute("transform", transform);

        return this;
    }

    public setTransform(position: ReadonlySimpleVector2, rotation: number, scale: ReadonlySimpleVector2): this {
        return this.setTransformSingle(
            rotation,
            position.x,
            position.y,
            position.x,
            position.y,
            scale.x,
            scale.y,
        );
    }

    public setStyles(styles: string): this {
        this._styles = styles;

        return this;
    }

    public setHoverStyles(hoverAble: string): this {
        this._hoverStyles = hoverAble;

        if (this._hoverStyles) {
            this._element.setAttribute("class", `hover-able-${this.id}`);
        } else {
            this._element.removeAttribute("class");
        }

        return this;
    }

    public getDefsString(): string {
        if (!this._defs.length) {
            return "";
        }

        return `<defs>${this._defs.join(" ")}</defs>`;
    }

    public getStyleString(): string {
        const styles: string[] = [];

        if (this._styles) {
            styles.push(`
                .hover-able-${this.id} {
                    ${this._styles}
                }
            `);
        }

        if (this._hoverStyles) {
            styles.push(`
                .hover-able-${this.id}:hover {
                    ${this._hoverStyles}
                }
            `);
        }
        if (!styles.length) {
            return "";
        }

        return `<style>${styles.join(" ")}</style>`;
    }

    protected processColorAttribute(
        attribute: "fill" | "stroke",
        color?: string | Color | Gradient | undefined,
    ): this {
        if (!color) {
            this._element.removeAttribute(attribute);

            return this;
        }
        if (typeof color === "string") {
            this._element.setAttribute(attribute, color);
        } else if (color instanceof Color) {
            this._element.setAttribute(attribute, color.hex);
        } else if (Gradient.isGradient(color)) {
            const [id, gradient] = SvgGradientFactory.createGradient(color);
            this._defs.push(gradient);
            this._element.setAttribute(attribute, `url(#${id})`);
        } else {
            this._element.removeAttribute(attribute);
        }

        return this;
    }

    protected processVectorAttributes(
        attributeX: "rx" | "cx" | "x" | "width",
        attributeY: "ry" | "cy" | "y" | "height",
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        if (typeof valueA === "number") {
            this.processNumberAttribute(attributeX, valueA);
            this.processNumberAttribute(attributeY, valueB as number);
        } else {
            this.processNumberAttribute(attributeX, valueA.x);
            this.processNumberAttribute(attributeY, valueA.y);
        }

        return this;
    }

    protected processNumberAttribute(attribute: string, value?: number): this {
        if (typeof value === "number") {
            this._element.setAttribute(attribute as SvgElementProxyAttribute, value.toString());
        } else {
            this._element.removeAttribute(attribute);
        }

        return this;
    }

    protected getNumericAttribute(key: SvgElementProxyAttribute): number {
        return +(this._element.getAttribute(key) as string);
    }

    protected getColorAttribute(key: SvgElementProxyAttribute): string | Color {
        return this._element.getAttribute(key) as string;
    }
}
