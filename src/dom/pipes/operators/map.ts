import { Holder } from "../holder";
import { Selector } from "../selectors/selector";
import { Operator } from "./operator";

export function map<R, S>(condition: (element: R, index: number) => S): Operator<R, S> {
    return (source: Holder<R>) => new Holder<S>(source.elements.map(condition));
}
export function mapToAttribute<R extends Element, S extends string | null>(propertyName: string): Operator<R, S> {
    return (source: Holder<R>) =>
        new Holder<S>(source.elements.map((element) => element.getAttribute(propertyName) as S));
}

export function mapToChildren<R extends Element, S extends Element>(selector: Selector<R, S>): Operator<R, S> {
    return (source: Holder<R>) => {
        const elements = source.elements.reduce<S[]>((acc, element) => [...acc, ...(selector(element) ?? [])], []);

        return new Holder<S>(elements);
    };
}

export function mapToChild<R extends Element, S extends Element>(selector: Selector<R, S>): Operator<R, S> {
    return (source: Holder<R>) => {
        const elements = source.elements.map((element) => selector(element)?.[0]).filter((element) => !!element);

        return new Holder<S>(elements);
    };
}
