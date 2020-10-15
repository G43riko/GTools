"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GLogger = /** @class */ (function () {
    function GLogger() {
    }
    GLogger.getLine = function (steps) {
        if (steps === void 0) { steps = 2; }
        var error = new Error();
        if (error.stack) {
            var results = error.stack.split("\n")[steps].trim().match(/\(.*\)/);
            if (results && results[0]) {
                return "at " + results[0];
            }
        }
        return "";
    };
    return GLogger;
}());
exports.GLogger = GLogger;
