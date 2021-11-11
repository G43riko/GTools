import { Holder } from "../holder";
import { Selector } from "../selectors/selector";
import { Operator } from "./operator";

export function selectChildren<R extends Element, S extends Element>(selector: Selector<R, S>, onlyExisting = true): Operator<R, S> {
    if(onlyExisting) {
        return (source: Holder<R>) => {
            const elements = source.elements.reduce<S[]>((acc, parent) => [...acc, ...(selector(parent) ?? [])], []);

            return new Holder<S>(elements);
        };
    }

    return (source: Holder<R>) => {
        const elements = source.elements.reduce<S[]>((acc, parent) => {
            const holder = selector(parent);

            return holder?.length ? [...acc, ...holder] : acc;
        }, []);

        return new Holder<S>(elements);
    };
}
