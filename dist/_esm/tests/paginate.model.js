export class PaginateModel {
    constructor(count = PaginateModel.ITEMS_PER_PAGE, offset = 0) {
        this.limit = +count;
        this.offset = +offset;
    }
    static validate(paginate) {
        if (!paginate) {
            return new PaginateModel();
        }
        return new PaginateModel(isNaN(paginate.limit) ? PaginateModel.ITEMS_PER_PAGE : paginate.limit, isNaN(paginate.offset) ? 0 : paginate.offset);
    }
}
PaginateModel.ITEMS_PER_PAGE = 10;
//# sourceMappingURL=paginate.model.js.map