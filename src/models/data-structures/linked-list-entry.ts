export class OneDirectionalLinkedListEntry<T> {
    public next: OneDirectionalLinkedListEntry<T> | null = null;

    public constructor(public readonly item: T) {
    }
}

export class BiDirectionalLinkedListEntry<T> {
    public prev: BiDirectionalLinkedListEntry<T> | null = null;
    public next: BiDirectionalLinkedListEntry<T> | null = null;

    public constructor(public readonly item: T) {
    }
}
