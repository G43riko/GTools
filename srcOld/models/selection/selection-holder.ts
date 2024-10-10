export class SelectionHolder<T> {
    private selectedValues: readonly T[] = [];
    public onChange?: () => void;

    public constructor(private readonly comparator: (a: T, b: T) => boolean = (a, b) => a === b) {
    }

    public isSelected(item: T): boolean {
        return this.selectedValues.some((actualItem) => this.comparator(actualItem, item));
    }

    private emit(data: readonly T[]): void {
        this.selectedValues = data;

        if (typeof this.onChange === "function") {
            this.onChange();
        }
    }

    public select(...items: T[]): void {
        this.emit([...this.selectedValues, ...items]);
    }

    public unselectAll(): void {
        this.emit([]);
    }

    public selectOnly(...items: T[]): void {
        this.emit([...items]);
    }

    public unselect(item: T): void {
        const newSelectedValues = [...this.selectedValues];
        const index             = this.selectedValues.findIndex((actualItem) =>
            this.comparator(actualItem, item),
        );
        if (index < 0) {
            return;
        }
        newSelectedValues.splice(index, 1);
        this.emit(newSelectedValues);
    }

    public get selected(): readonly T[] {
        return this.selectedValues;
    }

    public get length(): number {
        return this.selectedValues.length;
    }
}
