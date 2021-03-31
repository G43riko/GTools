import { __extends } from "tslib";
var MissingParameterError = (function (_super) {
    __extends(MissingParameterError, _super);
    function MissingParameterError(parameterName) {
        return _super.call(this, "Parameter " + parameterName + " must be defined") || this;
    }
    return MissingParameterError;
}(Error));
export { MissingParameterError };
//# sourceMappingURL=missing-parameter.error.js.map