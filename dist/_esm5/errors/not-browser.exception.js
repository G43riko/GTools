import { __extends } from "tslib";
function getText(text) {
    return text ? ": " + text : "";
}
var NotBrowserException = (function (_super) {
    __extends(NotBrowserException, _super);
    function NotBrowserException(text) {
        var _this = _super.call(this, "App is not running in browser" + getText(text) + "!") || this;
        Object.setPrototypeOf(_this, NotBrowserException.prototype);
        return _this;
    }
    return NotBrowserException;
}(Error));
export { NotBrowserException };
//# sourceMappingURL=not-browser.exception.js.map