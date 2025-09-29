import { type ColumnConfig, FooterType, SortOrder, type TableConfig } from "./table-maker-config.ts";

export class TableMaker<T> {
    private readonly config: TableConfig<T>;
    private sort?: SortOrder;
    private sortColumn?: (keyof T) | string;
    private readonly filters: { [key in keyof T]?: string | number } = {};
    private readonly utils = {
        getRowName<Key extends keyof T>(config: ColumnConfig<T, Key>): Key {
            return config.columnDef as Key;
        },
        createElement<S extends HTMLElement>(elementName: string): S {
            return document.createElement(elementName) as S;
        },
    };

    private getText<Key extends keyof T>(config: ColumnConfig<T, Key>, rowData: T): string | number {
        if (typeof config.customContent === "function") {
            return config.customContent(rowData) ?? "";
        }
        const rowName = this.utils.getRowName(config);

        return rowData[rowName] as string | number ?? "";
    }

    public constructor(config: TableConfig<T>) {
        this.config = config;
    }
    public render(
        data: readonly T[],
        {
            useTailwind,
        }: { useTailwind?: boolean } = {},
    ): string {
        const tableId = `g43-table-${Date.now() + Math.random()}`.replace(".", "_");
        const tableHeader = this.renderHeader({ useTailwind });

        const hasAnyData = data.length;
        const tableBody = hasAnyData ? this.renderBody(data) : "";

        const hasAnyFooter = this.config.columns.some((config) => !!config.footer || !config.customFooter);
        const tableFooter = hasAnyFooter ? this.renderFooter(data) : "";

        if (useTailwind) {
            return `<table class="${tableId}">
                ${tableHeader}
                ${tableBody}
                ${tableFooter}
            </table>`;
        }

        const tableStyles = this.renderStyles(tableId);

        const customAttributes: [string, string | undefined][] = [
            ["row-hover-color", this.config.rowHoverColor],
            ["background-color", this.config.backgroundColor],
        ];
        const styleVariables = customAttributes.filter(([_, value]) => !!value).map(([key, value]) =>
            `--${key}: ${value}`
        );
        const styleVariablesHtml = styleVariables.length ? `style="${styleVariables.join(";")}"` : "";

        return `
        ${tableStyles}
        <table class="${tableId}" ${styleVariablesHtml}>
            ${tableHeader}
            ${tableBody}
            ${tableFooter}
        </table>`;
    }

    /**
     * TODO: these should be generic styles, so tableId should be omitted
     * @param tableId
     * @returns
     */
    private renderStyles(
        tableId: string,
        {
            bgColor = "white",
            rowHoverColor = "rgba(0, 0, 0, 0.1)",
        } = {},
    ): string {
        return `<style>
            .${tableId} {
                width: 100%;
                background: var(--background-color, ${bgColor});
                border-collapse: collapse;
                >tbody > tr:hover {
                    background: var(--row-hover-color, ${rowHoverColor});
                }

                ${
            this.config.stickyHeader
                ? ` > thead > tr {
                    position: sticky; 
                    top: 0; 
                    background: var(--background-color, ${bgColor});
                }`
                : ""
        }
                
            }
        </style>`;
    }

    private renderHeader({ useTailwind = false, bgColor = "white" } = {}): string {
        const hasAnyFilter = this.config.columns.some((config) => !!config.filter);
        const renderFirstRow = (): string => {
            const columns = this.config.columns.filter(this.isVisible.bind(this)).map((column) => {
                if (typeof column.label === "string") {
                    return column.label;
                }
                if (column.sort === true) {
                    throw new Error("Sorting is not supported for rendered table");
                }
            }).filter((e) => !!e).map((e) => `<th>${e}</th>`);

            if (useTailwind) {
                return `<tr class="top-0 sticky bg-${bgColor}">${columns.join("")}</tr>`;
            }

            return `<tr>${columns.join("")}</tr>`;
        };

        if (hasAnyFilter) {
            throw new Error("Filtering is not supported for rendered table");
        }

        return `<thead>${renderFirstRow()}</thead>`;
    }

    private isVisible(column: ColumnConfig<T>): boolean {
        return !column.hidden;
    }
    private renderFooter(data: readonly T[]): string {
        const renderFooterRow = (): string => {
            const columns = this.config.columns.filter(this.isVisible.bind(this)).map((column) => {
                const getNumberData = (): number[] => data.map((row) => Number(this.getText(column, row)));
                if (typeof column.customFooter === "function") {
                    return column.customFooter(data.values());
                }
                if (column.footer === FooterType.MAX) {
                    return "Max: " + Math.max(...getNumberData());
                }
                if (column.footer === FooterType.MIN) {
                    return "Min: " + Math.min(...getNumberData());
                }
                if (column.footer === FooterType.SUM) {
                    return "Sum: " + getNumberData().reduce((acc, val) => acc + val);
                }
                if (column.footer === FooterType.AVG) {
                    const data = getNumberData();
                    return "Avg: " + data.reduce((acc, val) => acc + val) / data.length;
                }
            }).filter((e) => !!e).map((innerText) => `<td>${innerText}</td>`);

            return `<tr>${columns.join("")}</tr>`;
        };
        // TODO: dont return empty tfoot
        return `<tfoot>${renderFooterRow()}</tfoot>`;
    }

    private renderBody(data: readonly T[]): string {
        const renderCell = (rowData: T, config: ColumnConfig<T>, rowIndex: number, cellIndex: number): string => {
            const columntTitle = this.utils.getRowName(config);
            const text = this.getText(config, rowData);
            const filterValue = this.filters[columntTitle];
            if (typeof filterValue === "string") {
                if (String(text).indexOf(filterValue) < 0) {
                    return "";
                }
            }

            const classes = new Array<string>();
            if (typeof this.config.cellClass === "function") {
                const cellClasses = this.config.cellClass(rowData, cellIndex, rowIndex);
                if (typeof cellClasses === "string") {
                    classes.push(...cellClasses.split(" "));
                }
            }

            const classesString = classes.length ? ` class="${classes.join(" ")}"` : "";
            return `<td${classesString}>${text}</td>`;
        };
        const renderRow = (rowData: T, rowIndex: number): string => {
            const cells = new Array<string>();
            const classes = new Array<string>();
            for (let columnIndex = 0; columnIndex < this.config.columns.length; columnIndex++) {
                const columnConfig = this.config.columns[columnIndex];
                if (!this.isVisible(columnConfig)) {
                    continue;
                }
                const newCell = renderCell(rowData, columnConfig, rowIndex, columnIndex);
                if (newCell) {
                    cells.push(newCell);
                }
            }

            if (typeof this.config.rowClass === "function") {
                const rowClasses = this.config.rowClass(rowData, rowIndex, this.config);
                if (typeof rowClasses === "string") {
                    classes.push(...rowClasses.split(" "));
                }
            }

            if (typeof this.config.onRowClick === "function") {
                throw new Error("OnRowClick is not supported for rendered table");
            }

            const classesString = classes.length ? ` class="${classes.join(" ")}"` : "";

            return `<tr${classesString}>${cells.join("")}</tr>`;
        };

        const rows = new Array<string>();

        data.toSorted((a, b) => {
            if (!this.sort || !this.sortColumn) {
                return 0;
            }
            const valA = String((a as any)[this.sortColumn]);
            const valB = String((b as any)[this.sortColumn]);
            const result = valA.localeCompare(valB);

            return this.sort === SortOrder.ASC ? result : -result;
        }).forEach((row: T, index: number) => {
            if (typeof this.config.rowVisible === "function" && !this.config.rowVisible(row, index)) {
                return;
            }
            const newRow = renderRow(row, index);
            if (newRow) {
                rows.push(newRow);
            }
        });

        return `<tbody>${rows.join("")}</tbody>`;
    }
}
