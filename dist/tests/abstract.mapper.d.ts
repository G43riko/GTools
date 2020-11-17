export declare abstract class AbstractMapper<Obj, ObjDto> {
    abstract mapToDto(object: Partial<Obj>): ObjDto;
    abstract mapFromDto(object: Partial<ObjDto>): Obj;
}
//# sourceMappingURL=abstract.mapper.d.ts.map