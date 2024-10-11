export class PaginateModel {
    public static ITEMS_PER_PAGE = 10;
    public limit: number;
    public offset: number;

    public constructor(count = PaginateModel.ITEMS_PER_PAGE, offset = 0) {
        this.limit = +count;
        this.offset = +offset;
    }

    public static validate(paginate?: PaginateModel): PaginateModel {
        if (!paginate) {
            return new PaginateModel();
        }

        return new PaginateModel(
            isNaN(paginate.limit) ? PaginateModel.ITEMS_PER_PAGE : paginate.limit,
            isNaN(paginate.offset) ? 0 : paginate.offset,
        );
    }
}
