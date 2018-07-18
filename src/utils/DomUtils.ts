import { Checkers } from "../dom/Checkers";
import { Get } from "../dom/Get";
import { StringMap } from "./MiscUtils";

export interface ObjectCreatorParams {
    name: string;
    attr?: StringMap;
    cont?: string | HTMLElement | HTMLElement[];
    style?: CSSStyleDeclaration;
}

/**
 * @typedef {Object} SizeObject
 * @property {number} width
 * @property {number} height
 *
 * @typedef {Object} PositionObject
 * @property {number} x
 * @property {number} y
 */
export class DomUtils {
    /**
     * Function returns height of window
     *
     * @returns {number}
     */
    public static getWindowHeight(): number {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    /**
     * Function returns width of window
     *
     * @returns {number}
     */
    public static getWindowWidth(): number {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    /**
     * Function set, append or returns text of element
     *
     * @param {HTMLElement} element
     * @param {string} text
     * @param {boolean} append
     * @returns {HTMLElement}
     */
    public static text(element: HTMLElement, text: string, append = true): HTMLElement {
        if (append) {
            element.textContent += text;
        }
        else {
            element.textContent = text;
        }

        return element;
    }

    /**
     * Function set, append or returns html content of element
     *
     * @param {HTMLElement} element
     * @param {string} html
     * @param {boolean} append
     * @returns {HTMLElement}
     */
    public static html(element: HTMLElement, html: string | HTMLElement, append = true): HTMLElement {
        if (append) {
            if (typeof html === "string") {
                element.innerHTML += html;
            }
            else if (Checkers.isElement(html)) {
                element.appendChild(html);
            }
        }
        else {
            if (typeof html === "string") {
                element.innerHTML = html;
            }
            else if (Checkers.isElement(html)) {
                element.innerHTML = "";
                element.appendChild(html);
            }
        }

        return element;
    }

    /**
     * Function returns, add, remove or toggle elements classes
     *
     * @param {HTMLElement} element
     * @param {string | string[]} name
     * @param {boolean} force
     * @returns {HTMLElement | boolean}
     */
    public static class(element: HTMLElement, name: string | string[], force?: boolean): HTMLElement | boolean {
        if (Array.isArray(name)) {
            for (const className of name) {
                DomUtils.class(element, className, force);
            }
        }
        else {
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
                    }
                    else {
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
     * @param {string | ObjectCreatorParams} name
     * @param {StringMap} attr
     * @param {string | HTMLElement | HTMLElement[]} cont
     * @param {CSSStyleDeclaration} style
     * @returns {HTMLElement}
     */
    public static createElement(name: string | ObjectCreatorParams,
                                attr?: StringMap,
                                cont?: string | HTMLElement | HTMLElement[],
                                style?: CSSStyleDeclaration): HTMLElement {
        let el: HTMLElement;
        if (typeof name === "object") {
            return DomUtils.createElement(name.name, name.attr || {}, name.cont || "", name.style);
        }

        el = document.createElement(name);

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
        }
        else {
            DomUtils.html(el, cont as string | HTMLElement);
        }

        return el;
    }

    /**
     * Function remove element
     *
     * @param {Element} element
     * @returns {Element}
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
     * @param {HTMLElement} element
     * @returns {PositionObject}
     */
    public static position(element: HTMLElement): { x: number, y: number } {
        let top                        = 0;
        let left                       = 0;
        let actElement: Element | null = element;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
        } while (actElement = element.offsetParent);

        return {
            x: left,
            y: top,
        };
    }

    /**
     * Function returns order of element between siblings
     *
     * @param {Element} element
     * @returns {number}
     */
    public static indexOf(element: Element): number {
        let index                      = 0;
        let actElement: Element | null = element;
        while (actElement = element.previousElementSibling) {
            index++;
        }

        return index;
    }

    /**
     * Function returns object with element size
     *
     * @param {HTMLElement} element
     * @returns {SizeObject}
     */
    public static size(element: HTMLElement): { width: number, height: number } {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    }

    public static serialize(form: HTMLFormElement): StringMap {
        const result: StringMap = {};
        // ak formular nieje element
        if (!Checkers.isElement(form)) {
            return result;
        }

        // k formular nieje typu form
        if (form.tagName.toLowerCase() !== "form") {
            return result;
        }

        // získame všetky input elementy
        const elements = Get.byTag("input");

        // priradíme hodnoty do výsledného objektu
        for (const key in elements) {
            if (elements.hasOwnProperty(key)) {
                const e: Element = elements[key];

                const name = e.getAttribute("name");
                if (name) {
                    result[name] = e.getAttribute("value") as string;
                }
            }
        }

        return result;
    }
}
