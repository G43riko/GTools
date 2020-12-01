import { SimpleVector2 } from "gtools/math";
import { Size, StringMap } from "gtools/types";
export interface ObjectCreatorParams {
    name: string;
    attr?: StringMap;
    cont?: string | HTMLElement | HTMLElement[];
    style?: CSSStyleDeclaration;
}
export declare class DomUtils {
    static getWindowHeight(): number;
    static getWindowWidth(): number;
    static text(element: HTMLElement, text: string, append?: boolean): HTMLElement;
    static html(element: HTMLElement, html: string | HTMLElement, append?: boolean): HTMLElement;
    static class(element: HTMLElement, name: string | string[], force?: boolean): HTMLElement | boolean;
    static createElement(name: string | ObjectCreatorParams, attr?: StringMap, cont?: string | HTMLElement | HTMLElement[], style?: CSSStyleDeclaration): HTMLElement;
    static remove(element: Element): Element;
    static position(element: HTMLElement): SimpleVector2;
    static indexOf(element: Element | null): number;
    static size(element: HTMLElement): Size;
    static serialize(form: HTMLFormElement): StringMap;
}
