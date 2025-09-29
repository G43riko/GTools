export const FilterType = {
    STRING: "STRING",
    NUMBER: "NUMBER",
    BOOLEAN: "BOOLEAN",
};
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

export const FooterType = {
    SUM: "SUM",
    MAX: "MAX",
    MIN: "MIN",
    AVG: "AVG",
};
export type FooterType = (typeof FooterType)[keyof typeof FooterType];

export const SelectionType = {
    NONE: "NONE",
    SINGLE: "SINGLE",
    MULTI: "MULTI",
};
export type SelectionType = (typeof SelectionType)[keyof typeof SelectionType];
export const SortOrder = {
    ASC: "ASC",
    DESC: "DESC",
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export interface FilterConfig {
    readonly type: FilterType;
}
export interface ColumnConfig<Obj, Key extends keyof Obj = keyof Obj> {
    readonly filter?: FilterConfig;
    readonly sort?: boolean;
    readonly label?: string;
    readonly customContent?: (row: Obj) => string | null | undefined;
    readonly hidden?: boolean;
    readonly footer?: FooterType;
    readonly customFooter?: (iterator: IterableIterator<Obj>) => string;
    readonly columnDef: Key | string;
    // sticky: "LEFT" | "RIGHT"
}
export interface TableConfig<Obj> {
    // sticky footer
    readonly stickyHeader?: boolean;
    /**
     * CSS Color
     */
    readonly rowHoverColor?: string;
    readonly backgroundColor?: string;
    readonly selectable?: SelectionType;
    readonly onSelectionChange?: (selectedRows: readonly Obj[]) => void;
    readonly columns: ColumnConfig<Obj>[];
    readonly rowClass?: (row: Obj, rowIndex: number, config: TableConfig<Obj>) => string;
    readonly cellClass?: (row: Obj, cellIndex: number, rowIndex: number) => string;
    readonly rowVisible?: (row: Obj, rowIndex: number) => boolean;
    readonly onRowClick?: (row: Obj, rowIndex: number, config: TableConfig<Obj>) => void;
}
