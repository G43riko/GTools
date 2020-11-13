export declare class Paginator<T = unknown> {
    private readonly allItems;
    private readonly itemsPerPage;
    private actList;
    private actualPage;
    private readonly lastPage;
    constructor(allItems: T[], itemsPerPage?: number);
    getActualPage(): number;
    getPages(): number;
    getPagesAround(): number[];
    getList(): T[];
    goToNext(): T[];
    gotTo(page: number): T[];
    goToPrev(): T[];
    goToFirst(): T[];
    goToLast(): T[];
    private _reCalcList;
}
//# sourceMappingURL=paginator.d.ts.map