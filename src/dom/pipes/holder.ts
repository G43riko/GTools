import { Operator } from "./operators/operator";
import { Selector } from "./selectors/selector";

export class Holder<T = Element> {
    public constructor(public readonly elements: readonly T[]) {
    }

    public static select<S extends Element, R extends Element = Element>(selector: Selector<S, R>, root?: S): Holder {
        return new Holder<R>(selector((root ?? document.body) as S));
    }

    public pipe<A, B>(operatorA: Operator<A, B>): Holder<B>;
    public pipe<A, B, C>(operatorA: Operator<A, B>, operatorB: Operator<B, C>): Holder<C>;
    public pipe<A, B, C, D>(operatorA: Operator<A, B>, operatorB: Operator<B, C>, operatorC: Operator<C, D>): Holder<D>;
    public pipe<A, B, C, D, E>(operatorA: Operator<A, B>, operatorB: Operator<B, C>, operatorC: Operator<C, D>, operatorD: Operator<D, E>): Holder<E>;
    public pipe<A, B, C, D, E, F>(operatorA: Operator<A, B>, operatorB: Operator<B, C>, operatorC: Operator<C, D>, operatorD: Operator<D, E>, operatorE: Operator<E, F>): Holder<F>;
    public pipe(...operators: Operator<unknown>[]): Holder {
        const result = operators.reduce((acc, curr) => curr(acc), this as Holder<unknown>);

        return result as Holder;
    }
}
