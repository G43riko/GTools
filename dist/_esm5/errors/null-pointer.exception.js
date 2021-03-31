import { __extends } from "tslib";
var NullPointerException = (function (_super) {
    __extends(NullPointerException, _super);
    function NullPointerException(text) {
        var _this = _super.call(this, "Null pointer exception at line" + (typeof text === "string" ? ": " + text : "!")) || this;
        Object.setPrototypeOf(_this, NullPointerException.prototype);
        return _this;
    }
    return NullPointerException;
}(Error));
export { NullPointerException };
//# sourceMappingURL=null-pointer.exception.js.map