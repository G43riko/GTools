export declare class Paginator<T = any> {
    private static readonly itemsPerPage;
    private readonly allItems;
    private actList;
    private actualPage;
    private readonly lastPage;
    private _reCalcList;

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
}
