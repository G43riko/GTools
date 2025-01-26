import { Holder } from "../holder";
import { Operator } from "./operator";

export function filter<E>(condition: (element: E, index: number) => boolean): Operator<E> {
    return (source: Holder<E>) => new Holder(source.elements.filter(condition));
}

export function filterAttribute<E extends Element>(
    attrName: string,
    condition: (attribute: string | null, element: E, index: number) => boolean,
): Operator<E> {
    return (source: Holder<E>) =>
        new Holder(
            source.elements.filter((element, index) => condition(element.getAttribute(attrName), element, index)),
        );
}
