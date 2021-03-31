import { AbstractFixture } from "./abstract.fixture";
export class AbstractDatabaseFixture extends AbstractFixture {
    constructor(list, mapper) {
        super(list);
        this.listDto = list.map(mapper.mapToDto, mapper);
        this.detailDto = this.listDto[0];
    }
}
//# sourceMappingURL=abstract-database.fixture.js.map