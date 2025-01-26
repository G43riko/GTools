export type Selector<E extends Element = Element, S extends Element = E> = (target: E) => readonly S[];
