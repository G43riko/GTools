import { AbstractFixture } from "./abstract.fixture";
import { AbstractMapper } from "./abstract.mapper";

export declare abstract class AbstractDatabaseFixture<Obj, ObjDto> extends AbstractFixture<Obj> {
    readonly listDto: ObjDto[];
    readonly detailDto: ObjDto;

    protected constructor(list: Obj[], mapper: AbstractMapper<Obj, ObjDto>);
}
