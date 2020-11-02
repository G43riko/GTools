"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongTypeException = void 0;
var WrongTypeException = /** @class */ (function (_super) {
    __extends(WrongTypeException, _super);
    function WrongTypeException(requiredType, text) {
        var _this = _super.call(this, "Wrong type exception at line. " + typeof requiredType + " must be " + requiredType + (typeof text === "string" ? ": " + text : "!")) || this;
        Object.setPrototypeOf(_this, WrongTypeException.prototype);
        return _this;
    }
    return WrongTypeException;
}(Error));
exports.WrongTypeException = WrongTypeException;
