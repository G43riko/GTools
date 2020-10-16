"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.isDate = function (obj) {
        try {
            var date = new Date(obj);
            return !isNaN(date.getTime());
        }
        catch (e) {
            return false;
        }
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;