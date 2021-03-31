export declare class OneDirectionalLinkedListEntry<T> {
    readonly item: T;
    next: OneDirectionalLinkedListEntry<T> | null;
    constructor(item: T);
}
export declare class BiDirectionalLinkedListEntry<T> {
    readonly item: T;
    prev: BiDirectionalLinkedListEntry<T> | null;
    next: BiDirectionalLinkedListEntry<T> | null;
    constructor(item: T);
}
