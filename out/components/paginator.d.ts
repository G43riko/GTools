export declare class Paginator<T = any> {
    private allItems;
    private static readonly itemsPerPage;
    private actList;
    private actualPage;
    private lastPage;
    constructor(allItems: T[]);
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
