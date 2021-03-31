export declare class SelectionHolder<T> {
    private readonly comparator;
    private selectedValues;
    onChange?: () => void;
    constructor(comparator?: (a: T, b: T) => boolean);
    isSelected(item: T): boolean;
    private emit;
    select(...items: T[]): void;
    unselectAll(): void;
    selectOnly(...items: T[]): void;
    unselect(item: T): void;
    get selected(): readonly T[];
    get length(): number;
}
//# sourceMappingURL=selection-holder.d.ts.map