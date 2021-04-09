import { G43Collection } from "../g43-collection";
export interface List<T> extends Iterable<T>, G43Collection<T> {
    readonly empty: boolean;
    toArray(): T[];
}
//# sourceMappingURL=list.d.ts.map