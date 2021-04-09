import { SelectionHolder } from "./selection-holder";
export class Selection {
    constructor(allValues = [], options = {
        mode: "single",
        unselectable: false,
    }) {
        this.allValues = allValues;
        this.options = options;
        this.selectionHolder = new SelectionHolder();
        this.selection = Object.defineProperties({}, {
            isSelected: { value: (item) => this.selectionHolder.isSelected(item) },
            selected: {
                get: () => this.selectionHolder.selected,
            },
            length: {
                get: () => this.selectionHolder.length,
            },
        });
    }
    click(item, options = {}) {
        switch (this.options.mode) {
            case "single":
                return this.processSingleClick(item);
            case "multi":
                return this.processMultiClick(item);
            case "multi-control":
                return this.processMultiControlClick(item, !!options.ctrlDown);
            case "multi-continuous":
                return this.processMultiContinuousClick(item, !!options.shiftDown);
        }
    }
    setValues(values) {
        this.allValues = values;
    }
    setOptions(options) {
        this.options.mode = options.mode || this.options.mode;
        this.options.unselectable = typeof options.unselectable === "boolean" ? options.unselectable : this.options.unselectable;
    }
    processSingleClick(item) {
        if (this.selectionHolder.isSelected(item)) {
            if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            this.selectionHolder.selectOnly(item);
        }
    }
    processMultiClick(item) {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                this.selectionHolder.unselect(item);
            }
            else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            this.selectionHolder.select(item);
        }
    }
    processMultiControlClick(item, isCtrlDown) {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                if (isCtrlDown) {
                    this.selectionHolder.unselect(item);
                }
                else {
                    this.selectionHolder.selectOnly(item);
                }
            }
            else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            if (isCtrlDown) {
                this.selectionHolder.select(item);
            }
            else {
                this.selectionHolder.selectOnly(item);
            }
        }
    }
    processMultiContinuousClick(item, isShiftDown) {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                this.selectionHolder.selectOnly(item);
            }
            else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            if (isShiftDown) {
                if (this.selectionHolder.length === 0) {
                    this.selectionHolder.select(item);
                }
                else {
                    const selectedIndices = this.selectionHolder.selected.map((actualItem) => this.allValues.indexOf(actualItem));
                    const minIndex = Math.min(this.allValues.indexOf(item), ...selectedIndices);
                    const maxIndex = Math.max(this.allValues.indexOf(item), ...selectedIndices);
                    this.selectionHolder.selectOnly(...this.allValues.slice(minIndex, maxIndex + 1));
                }
            }
            else {
                this.selectionHolder.selectOnly(item);
            }
        }
    }
}
//# sourceMappingURL=selection.js.map