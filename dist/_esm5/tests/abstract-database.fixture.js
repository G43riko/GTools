import { __extends } from "tslib";
import { AbstractFixture } from "./abstract.fixture";
var AbstractDatabaseFixture = (function (_super) {
    __extends(AbstractDatabaseFixture, _super);
    function AbstractDatabaseFixture(list, mapper) {
        var _this = _super.call(this, list) || this;
        _this.listDto = list.map(mapper.mapToDto, mapper);
        _this.detailDto = _this.listDto[0];
        return _this;
    }
    return AbstractDatabaseFixture;
}(AbstractFixture));
export { AbstractDatabaseFixture };
//# sourceMappingURL=abstract-database.fixture.js.map