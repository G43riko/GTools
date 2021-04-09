export declare type SelectionMode = "single" | "multi" | "multi-control" | "multi-continuous";
interface SelectableOptions {
    mode: SelectionMode;
    unselectable: boolean;
}
export declare class Selection<T> {
    private allValues;
    private readonly options;
    private readonly selectionHolder;
    readonly selection: any;
    constructor(allValues?: readonly T[], options?: {
        mode: string;
        unselectable: boolean;
    });
    click(item: T, options?: {
        ctrlDown?: boolean;
        shiftDown?: boolean;
    }): void;
    setValues(values: T[]): void;
    setOptions(options: Partial<SelectableOptions>): void;
    private processSingleClick;
    private processMultiClick;
    private processMultiControlClick;
    private processMultiContinuousClick;
}
export {};
//# sourceMappingURL=selection.d.ts.map