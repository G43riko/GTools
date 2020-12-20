export interface List<T> extends Iterable<T> {
    readonly length: number;
    readonly empty: boolean;

    add(item: T): boolean;

    clear(): void;

    contains(item: T): boolean;

    remove(item: T): boolean;

    toArray(): T[];
}
