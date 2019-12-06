export abstract class AbstractMapper<Obj, ObjDto> {
    public abstract mapToDto(object: Partial<Obj>): ObjDto;

    public abstract mapFromDto(object: Partial<ObjDto>): Obj;
}
