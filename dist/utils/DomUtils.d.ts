import { Point } from "../types/point.interaface";
import { Size } from "../types/size.interaface";
import { StringMap } from "../types/string-map.interface";
export interface ObjectCreatorParams {
    name: string;
    attr?: StringMap;
    cont?: string | HTMLElement | HTMLElement[];
    style?: CSSStyleDeclaration;
}
export declare class DomUtils {
    /**
     * Function returns height of window
     *
     * @returns window height in pixels
     */
    static getWindowHeight(): number;
    /**
     * Function returns width of window
     *
     * @returns window width in pixels
     */
    static getWindowWidth(): number;
    /**
     * Function set, append or returns text of element
     *
     * @param element - input element
     * @param text - text to put in element
     * @param append - flag if text should be append or replace previous text
     * @returns element given as input
     */
    static text(element: HTMLElement, text: string, append?: boolean): HTMLElement;
    /**
     * Function set, append or returns html content of element
     *
     * @param element - input element
     * @param html - html to put in element
     * @param append - flag if html should be append or replace previous content
     * @returns element given as input
     */
    static html(element: HTMLElement, html: string | HTMLElement, append?: boolean): HTMLElement;
    /**
     * Function returns, add, remove or toggle elements classes
     *
     * @param element - input element
     * @param name - class name or list of class names
     * @param force - flag if class should be toggled false
     * @returns boolean if function is used to check class presence otherwise element given as input
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
     * @param name - name of element or object contains all configuration
     * @param attr - map of all element attributes
     * @param cont - element content. Can be string, element or array of elements
     * @param style - styles that will be applied to the element
     * @returns created element
     */
    static createElement(name: string | ObjectCreatorParams, attr?: StringMap, cont?: string | HTMLElement | HTMLElement[], style?: CSSStyleDeclaration): HTMLElement;
    /**
     * Function remove element
     *
     * @param element - input element
     * @returns removed element
     */
    static remove(element: Element): Element;
    /**
     * Function returns object with element position
     *
     * @param element - input element
     * @returns position of element
     */
    static position(element: HTMLElement): Point;
    /**
     * Function returns order of element between siblings
     *
     * @param element - input element
     * @returns index of number
     */
    static indexOf(element: Element | null): number;
    /**
     * Function returns object with element size
     *
     * @param element - input element
     * @returns size of element
     */
    static size(element: HTMLElement): Size;
    static serialize(form: HTMLFormElement): StringMap;
}
