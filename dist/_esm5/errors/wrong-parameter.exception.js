import { __extends } from "tslib";
var WrongParameterException = (function (_super) {
    __extends(WrongParameterException, _super);
    function WrongParameterException(text) {
        var _this = _super.call(this, "Wrong parameter exception at line" + (typeof text === "string" ? ": " + text : "!")) || this;
        Object.setPrototypeOf(_this, WrongParameterException.prototype);
        return _this;
    }
    return WrongParameterException;
}(Error));
export { WrongParameterException };
//# sourceMappingURL=wrong-parameter.exception.js.map