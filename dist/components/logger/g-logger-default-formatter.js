"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLoggerDefaultFormatter = void 0;
var utils_1 = require("../../utils");
var GLoggerDefaultFormatter = (function () {
    function GLoggerDefaultFormatter() {
        this.showPriority = false;
        this.showContext = true;
        this.showTime = false;
        this.showTimeOffset = false;
        this.useDifferentColorsForContexts = true;
        this.colors = {};
        this.lastFormatTime = Date.now();
        this.contextColorMap = {};
    }
    GLoggerDefaultFormatter.prototype.formatColored = function (priority, data, context) {
        var result = [this.getOutputArray(priority, data, context).join(" ")];
        if (this.showPriority) {
            result.push("color: " + (this.colors.priority || "blue"));
        }
        if (this.showContext && context) {
            result.push("color: " + this.getColorForContext(context, this.colors.context || "red"));
        }
        if (this.showTime) {
            result.push("color: " + (this.colors.time || "green"));
        }
        if (this.showTimeOffset) {
            result.push("color: " + (this.colors.timeOffset || "green"));
        }
        result.push("color: " + (this.colors.textColor || "black"));
        return result;
    };
    GLoggerDefaultFormatter.prototype.format = function (priority, data, context) {
        return this.getOutputArray(priority, data, context).join(" ");
    };
    GLoggerDefaultFormatter.prototype.getColorForContext = function (context, defaultColor) {
        if (!this.useDifferentColorsForContexts) {
            return defaultColor;
        }
        if (context in this.contextColorMap) {
            return this.contextColorMap[context];
        }
        var createColor = function () {
            return "#" + new Array(6).fill("").map(function () { return utils_1.randomItem("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D"); }).join("");
        };
        return this.contextColorMap[context] = createColor();
    };
    GLoggerDefaultFormatter.prototype.getOutputArray = function (priority, data, context) {
        var partials = [];
        if (this.showPriority) {
            partials.push("[" + priority + "]");
        }
        if (this.showContext && context) {
            partials.push(context + ":");
        }
        if (this.showTime) {
            partials.push("[" + new Date().toISOString() + "]");
        }
        if (this.showTimeOffset) {
            var now = Date.now();
            partials.push("" + utils_1.dateAgo(now - this.lastFormatTime));
            this.lastFormatTime = now;
        }
        partials.push.apply(partials, data.map(String));
        return partials;
    };
    return GLoggerDefaultFormatter;
}());
exports.GLoggerDefaultFormatter = GLoggerDefaultFormatter;
//# sourceMappingURL=g-logger-default-formatter.js.map