export interface G43BasicCollection<T> {
    readonly length: number;
    add(item: T): void;
    contains(item: T): boolean;
    clear(): void;
    forEach(callback: (item: T, index: number) => boolean): void;
}
export interface G43Collection<T> extends G43BasicCollection<T> {
    remove(item: T): void;
}
//# sourceMappingURL=g43-collection.d.ts.map