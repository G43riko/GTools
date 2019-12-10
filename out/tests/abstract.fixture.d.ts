export declare abstract class AbstractFixture<Obj> {
    readonly list: Obj[];
    readonly detail: Obj;

    protected constructor(list: Obj[]);
}
