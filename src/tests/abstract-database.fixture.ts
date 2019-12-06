import { AbstractFixture } from "./abstract.fixture";
import { AbstractMapper } from "./abstract.mapper";

export abstract class AbstractDatabaseFixture<Obj, ObjDto> extends AbstractFixture<Obj> {
    public readonly listDto: ObjDto[];
    public readonly detailDto: ObjDto;

    protected constructor(list: Obj[], mapper: AbstractMapper<Obj, ObjDto>) {
        super(list);
        this.listDto   = list.map(mapper.mapToDto, mapper);
        this.detailDto = this.listDto[0];
    }
}
