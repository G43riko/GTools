import { NotBrowserException } from "gtools/errors";
import { SimpleVector2 } from "gtools/math";
import { Size, StringMap } from "gtools/types";
import { DomGet } from "../dom/dom-get";
import * as Checkers from "../validators/misc-validators";

export interface ObjectCreatorParams {
    name: string;
    attr?: StringMap;
    cont?: string | HTMLElement | HTMLElement[];
    style?: CSSStyleDeclaration;
}

export class DomUtils {
    /**
     * Function returns height of window
     *
     * @returns window height in pixels
     */
    public static getWindowHeight(): number {
        if (typeof window === "undefined") {
            throw new NotBrowserException();
        }

        // @ts-ignore
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    /**
     * Function returns width of window
     *
     * @returns window width in pixels
     */
    public static getWindowWidth(): number {
        if (typeof window === "undefined") {
            throw new NotBrowserException();
        }

        // @ts-ignore
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    /**
     * Function set, append or returns text of element
     *
     * @param element - input element
     * @param text - text to put in element
     * @param append - flag if text should be append or replace previous text
     * @returns element given as input
     */
    public static text(element: HTMLElement, text: string, append = true): HTMLElement {
        if (append) {
            element.textContent += text;
        } else {
            element.textContent = text;
        }

        return element;
    }

    /**
     * Function set, append or returns html content of element
     *
     * @param element - input element
     * @param html - html to put in element
     * @param append - flag if html should be append or replace previous content
     * @returns element given as input
     */
    public static html(element: HTMLElement, html: string | HTMLElement, append = true): HTMLElement {
        if (append) {
            if (typeof html === "string") {
                element.innerHTML += html;
            } else if (Checkers.isElement(html)) {
                element.appendChild(html);
            }
        } else if (typeof html === "string") {
            element.innerHTML = html;
        } else if (Checkers.isElement(html)) {
            element.innerHTML = "";
            element.appendChild(html);
        }

        return element;
    }

    /**
     * Function returns, add, remove or toggle elements classes
     *
     * @param element - input element
     * @param name - class name or data-structures of class names
     * @param force - flag if class should be toggled false
     * @returns boolean if function is used to check class presence otherwise element given as input
     */
    public static class(element: HTMLElement, name: string | string[], force = false): HTMLElement | boolean {
        if (Array.isArray(name)) {
            for (const className of name) {
                DomUtils.class(element, className, force);
            }
        } else {
            switch (name[0]) {
                case "+":
                    element.classList.add(name.substring(1));
                    break;
                case "-":
                    element.classList.remove(name.substring(1));
                    break;
                case "/":
                    name = name.substring(1);
                    if (Checkers.isBoolean(force)) {
                        element.classList.toggle(name, force);
                    } else {
                        element.classList.toggle(name);
                    }
                    break;
                default:
                    return element.classList.contains(name);
            }
        }

        return element;
    }

    /**
     * Function crete new element
     *
     * ElementManager.createElement("div") => <div></div>;
     * ElementManager.createElement("div", {id: "ide"}) => <div id="ide"></div>;
     * ElementManager.createElement("div", {}, "text") => <div>text</div>;
     * ElementManager.createElement("div", {}, "<b>text</b>") => <div><b>text</b></div>;
     * ElementManager.createElement("div", {}, "text", {color: "blue"}) => <div style="color: blue;">text</div>
     *
     * ElementManager.createElement({name: "div"}) => <div></div>;
     * ElementManager.createElement({name: "div"}) => <div></div>;
     * ElementManager.createElement({name: "div", attr: {id: "ide"}}) => <div id="ide"></div>;
     *
     * @param name - name of element or object contains all configuration
     * @param attr - map of all element attributes
     * @param cont - element content. Can be string, element or array of elements
     * @param style - styles that will be applied to the element
     * @returns created element
     */
    public static createElement(
        name: string | ObjectCreatorParams,
        attr?: StringMap,
        cont?: string | HTMLElement | HTMLElement[],
        style?: CSSStyleDeclaration,
    ): HTMLElement {
        if (typeof document === "undefined") {
            throw new NotBrowserException();
        }

        if (typeof name === "object") {
            return DomUtils.createElement(name.name, name.attr || {}, name.cont || "", name.style);
        }

        const el = document.createElement(name);

        if (typeof attr === "object") {
            for (const key in attr) {
                if (attr.hasOwnProperty(key)) {
                    el.setAttribute(key, attr[key]);
                }
            }
        }

        if (typeof style === "object") {
            for (const key in style) {
                if (style.hasOwnProperty(key)) {
                    el.style[key] = style[key];
                }
            }
        }

        if (Array.isArray(cont)) {
            cont.forEach((e) => {
                DomUtils.html(el, e, true);
            });
        } else {
            DomUtils.html(el, cont as string | HTMLElement);
        }

        return el;
    }

    /**
     * Function remove element
     *
     * @param element - input element
     * @returns removed element
     */
    public static remove(element: Element): Element {
        const parentElement = element.parentElement;
        if (parentElement) {
            parentElement.removeChild(element);
        }

        return element;
    }

    /**
     * Function returns object with element position
     *
     * @param element - input element
     * @returns position of element
     */
    public static position(element: HTMLElement): SimpleVector2 {
        let top  = 0;
        let left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;

            element = element.offsetParent as HTMLElement;
        } while (element);

        return {
            x: left,
            y: top,
        };
    }

    /**
     * Function returns order of element between siblings
     *
     * @param element - input element
     * @returns index of number
     */
    public static indexOf(element: Element | null): number {
        let index = 0;
        while (element) {
            element = element.previousElementSibling;
            index++;
        }

        return index;
    }

    /**
     * Function returns object with element size
     *
     * @param element - input element
     * @returns size of element
     */
    public static size(element: HTMLElement): Size {
        return {
            height: element.offsetHeight,
            width : element.offsetWidth,
        };
    }

    public static serialize(form: HTMLFormElement): StringMap {
        const result: StringMap = {};
        // if forms is not element
        if (!Checkers.isElement(form)) {
            return result;
        }

        // if form is not form
        if (form.tagName.toLowerCase() !== "form") {
            return result;
        }

        // get all inputs
        const elements = DomGet.byTag("input");

        // add all values to result object
        for (const key in elements) {
            if (!elements.hasOwnProperty(key)) {
                continue;
            }
            const e: Element = elements[key];
            const name       = e.getAttribute("name");
            if (name) {
                result[name] = e.getAttribute("value") as string;
            }
        }

        return result;
    }
}
