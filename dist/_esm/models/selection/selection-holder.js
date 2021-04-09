export class SelectionHolder {
    constructor(comparator = (a, b) => a === b) {
        this.comparator = comparator;
        this.selectedValues = [];
    }
    isSelected(item) {
        return this.selectedValues.some((actualItem) => this.comparator(actualItem, item));
    }
    emit(data) {
        this.selectedValues = data;
        if (typeof this.onChange === "function") {
            this.onChange();
        }
    }
    select(...items) {
        this.emit([...this.selectedValues, ...items]);
    }
    unselectAll() {
        this.emit([]);
    }
    selectOnly(...items) {
        this.emit([...items]);
    }
    unselect(item) {
        const newSelectedValues = [...this.selectedValues];
        const index = this.selectedValues.findIndex((actualItem) => this.comparator(actualItem, item));
        if (index < 0) {
            return;
        }
        newSelectedValues.splice(index, 1);
        this.emit(newSelectedValues);
    }
    get selected() {
        return this.selectedValues;
    }
    get length() {
        return this.selectedValues.length;
    }
}
//# sourceMappingURL=selection-holder.js.map