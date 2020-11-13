"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
function isValidDate(obj) {
    try {
        var date = new Date(obj);
        return !isNaN(date.getTime());
    }
    catch (e) {
        return false;
    }
}
exports.isValidDate = isValidDate;
//# sourceMappingURL=date-utils.js.map