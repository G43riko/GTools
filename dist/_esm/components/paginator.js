import { GToolsConfig } from "../config/gtools-config";
export class Paginator {
    constructor(allItems, itemsPerPage = GToolsConfig.PAGE_LIMIT) {
        this.allItems = allItems;
        this.itemsPerPage = itemsPerPage;
        this.actualPage = 0;
        this.lastPage = allItems ? Math.floor(allItems.length / this.itemsPerPage) : 0;
        this.actList = this._reCalcList();
    }
    getActualPage() {
        return this.actualPage + 1;
    }
    getPages() {
        return this.lastPage + 1;
    }
    getPagesAround() {
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
    getList() {
        return this.actList;
    }
    goToNext() {
        if (this.actualPage < this.lastPage) {
            this.actualPage++;
            return this._reCalcList();
        }
        return this.getList();
    }
    gotTo(page) {
        if (page >= 0 && page <= this.lastPage) {
            this.actualPage = page;
            return this._reCalcList();
        }
        return this.getList();
    }
    goToPrev() {
        if (this.actualPage > 0) {
            this.actualPage--;
            return this._reCalcList();
        }
        return this.getList();
    }
    goToFirst() {
        this.actualPage = 0;
        return this._reCalcList();
    }
    goToLast() {
        this.actualPage = this.lastPage;
        return this._reCalcList();
    }
    _reCalcList() {
        const start = this.actualPage * this.itemsPerPage;
        this.actList = this.allItems ? this.allItems.slice(start, start + this.itemsPerPage) : [];
        return this.actList;
    }
}
//# sourceMappingURL=paginator.js.map