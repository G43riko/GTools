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
export declare class DomUtils {
    /**
     * Function returns height of window
     *
     * @returns {number}
     */
    static getWindowHeight(): number;
    /**
     * Function returns width of window
     *
     * @returns {number}
     */
    static getWindowWidth(): number;
    /**
     * Function set, append or returns text of element
     *
     * @param {HTMLElement} element
     * @param {string} text
     * @param {boolean} append
     * @returns {HTMLElement}
     */
    static text(element: HTMLElement, text: string, append?: boolean): HTMLElement;
    /**
     * Function set, append or returns html content of element
     *
     * @param {HTMLElement} element
     * @param {string} html
     * @param {boolean} append
     * @returns {HTMLElement}
     */
    static html(element: HTMLElement, html: string | HTMLElement, append?: boolean): HTMLElement;
    /**
     * Function returns, add, remove or toggle elements classes
     *
     * @param {HTMLElement} element
     * @param {string | string[]} name
     * @param {boolean} force
     * @returns {HTMLElement | boolean}
     */
    static class(element: HTMLElement, name: string | string[], force?: boolean): HTMLElement | boolean;
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
    static createElement(name: string | ObjectCreatorParams, attr?: StringMap, cont?: string | HTMLElement | HTMLElement[], style?: CSSStyleDeclaration): HTMLElement;
    /**
     * Function remove element
     *
     * @param {Element} element
     * @returns {Element}
     */
    static remove(element: Element): Element;
    /**
     * Function returns object with element position
     *
     * @param {HTMLElement} element
     * @returns {PositionObject}
     */
    static position(element: HTMLElement): {
        x: number;
        y: number;
    };
    /**
     * Function returns order of element between siblings
     *
     * @param {Element} element
     * @returns {number}
     */
    static indexOf(element: Element): number;
    /**
     * Function returns object with element size
     *
     * @param {HTMLElement} element
     * @returns {SizeObject}
     */
    static size(element: HTMLElement): {
        width: number;
        height: number;
    };
    static serialize(form: HTMLFormElement): StringMap;
}
