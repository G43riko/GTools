export declare class PaginateModel {
    static ITEMS_PER_PAGE: number;
    limit: number;
    offset: number;
    constructor(count?: number, offset?: number);
    static validate(paginate?: PaginateModel): PaginateModel;
}
//# sourceMappingURL=paginate.model.d.ts.map