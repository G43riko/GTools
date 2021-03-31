import { SelectionHolder } from "./selection-holder";

export type SelectionMode = "single" | "multi" | "multi-control" | "multi-continuous";

interface SelectableOptions {
    mode: SelectionMode;
    unselectable: boolean;
}

export class Selection<T> {
    private readonly selectionHolder = new SelectionHolder<T>();
    public readonly selection        = Object.defineProperties({}, {
        isSelected: {value: (item: T): boolean => this.selectionHolder.isSelected(item)},
        selected  : {
            get: () => this.selectionHolder.selected,
        },
        length    : {
            get: () => this.selectionHolder.length,
        },
    });

    public constructor(
        private allValues: readonly T[] = [],
        private readonly options                 = {
            mode        : "single",
            unselectable: false,
        },
    ) {
    }

    public click(item: T, options: { ctrlDown?: boolean, shiftDown?: boolean } = {}): void {
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

    public setValues(values: T[]): void {
        this.allValues = values;
    }

    public setOptions(options: Partial<SelectableOptions>): void {
        this.options.mode         = options.mode || this.options.mode;
        this.options.unselectable = typeof options.unselectable === "boolean" ? options.unselectable : this.options.unselectable;
    }

    private processSingleClick(item: T): void {
        if (this.selectionHolder.isSelected(item)) {
            if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        } else {
            this.selectionHolder.selectOnly(item);
        }
    }

    private processMultiClick(item: T): void {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                this.selectionHolder.unselect(item);
            } else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        } else {
            this.selectionHolder.select(item);
        }
    }

    private processMultiControlClick(item: T, isCtrlDown: boolean): void {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                if (isCtrlDown) {
                    this.selectionHolder.unselect(item);
                } else {
                    this.selectionHolder.selectOnly(item);
                }
            } else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        } else {
            if (isCtrlDown) {
                this.selectionHolder.select(item);
            } else {
                this.selectionHolder.selectOnly(item);
            }
        }
    }

    private processMultiContinuousClick(item: T, isShiftDown: boolean): void {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                this.selectionHolder.selectOnly(item);
            } else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        } else {
            if (isShiftDown) {
                if (this.selectionHolder.length === 0) {
                    this.selectionHolder.select(item);
                } else {
                    const selectedIndices = this.selectionHolder.selected.map((actualItem) => this.allValues.indexOf(actualItem));

                    const minIndex = Math.min(this.allValues.indexOf(item), ...selectedIndices);
                    const maxIndex = Math.max(this.allValues.indexOf(item), ...selectedIndices);
                    this.selectionHolder.selectOnly(...this.allValues.slice(minIndex, maxIndex + 1));
                }
            } else {
                this.selectionHolder.selectOnly(item);
            }
        }
    }
}
