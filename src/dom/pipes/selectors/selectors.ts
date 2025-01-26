import { Selector } from "./selector";

export function ByClass(className: string): Selector {
    return (element: Element) => Array.from(element.getElementsByClassName(className));
}

export function ByAttribute(attribute: string, value?: string): Selector {
    if (typeof value === "string") {
        return (element: Element) => Array.from(element.querySelectorAll(`[${attribute}]=${value}`));
    }

    return (element: Element) => Array.from(element.querySelectorAll(`[${attribute}]`));
}
export function By(selector: string): Selector {
    return (element: Element) => Array.from(element.querySelectorAll(selector));
}
