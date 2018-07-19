export class Paginator<T = any> {
    private static readonly itemsPerPage = 10;
    private actList: T[];
    private actualPage                   = 0;
    private lastPage: number;

    public constructor(private allItems: T[]) {
        this.lastPage = allItems ? Math.floor(allItems.length / Paginator.itemsPerPage) : 0;
        this.actList  = this._reCalcList();
    }

    public getActualPage(): number {
        return this.actualPage + 1;
    }

    public getPages(): number {
        return this.lastPage + 1;
    }

    public getPagesAround(): number[] {
        if (this.actualPage < 2) {
            return [1, 2, 3, 4, 5];
        }
        if (this.actualPage > this.lastPage - 3) {
            return [
                this.lastPage - 3,
                this.lastPage - 2,
                this.lastPage - 1,
                this.lastPage,
                this.lastPage + 1,
            ];
        }

        return [
            this.actualPage - 1,
            this.actualPage,
            this.actualPage + 1,
            this.actualPage + 2,
            this.actualPage + 3,
        ];
    }

    public getList(): T[] {
        return this.actList;
    }

    public goToNext(): T[] {
        if (this.actualPage < this.lastPage) {
            this.actualPage++;

            return this._reCalcList();
        }

        return this.getList();
    }

    public gotTo(page: number): T[] {
        if (page >= 0 && page <= this.lastPage) {
            this.actualPage = page;

            return this._reCalcList();
        }

        return this.getList();
    }

    public goToPrev(): T[] {
        if (this.actualPage > 0) {
            this.actualPage--;

            return this._reCalcList();
        }

        return this.getList();
    }

    public goToFirst(): T[] {
        this.actualPage = 0;

        return this._reCalcList();
    }

    public goToLast(): T[] {
        this.actualPage = this.lastPage;

        return this._reCalcList();
    }

    private _reCalcList(): T[] {
        const start  = this.actualPage * Paginator.itemsPerPage;
        this.actList = this.allItems ? this.allItems.slice(start, start + Paginator.itemsPerPage) : [];

        return this.actList;
    }
}
