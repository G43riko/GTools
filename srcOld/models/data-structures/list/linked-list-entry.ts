export class OneDirectionalLinkedListEntry<T> {
    public next?: OneDirectionalLinkedListEntry<T>;

    public constructor(public readonly item: T) {
    }
}

export class BiDirectionalLinkedListEntry<T> {
    public prev?: BiDirectionalLinkedListEntry<T>;
    public next?: BiDirectionalLinkedListEntry<T>;

    public constructor(public readonly item: T) {
    }
}
