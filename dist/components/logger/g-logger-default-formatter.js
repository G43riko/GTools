"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLoggerDefaultFormatter = exports.SimpleColorFormatter = exports.ColorGenerator = void 0;
var utils_1 = require("../../utils");
var ColorGenerator = (function () {
    function ColorGenerator() {
        this.useDifferentColorsForContexts = true;
        this.contextColorMap = {};
    }
    ColorGenerator.prototype.getColorForContext = function (context, defaultColor) {
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
    return ColorGenerator;
}());
exports.ColorGenerator = ColorGenerator;
var SimpleColorFormatter = (function () {
    function SimpleColorFormatter(pattern) {
        if (pattern === void 0) { pattern = "[{{priority}}] {{context}}: {{data}}"; }
        this.pattern = pattern;
        this.colorGenerator = new ColorGenerator();
        this.colorMap = {
            priority: "red",
            context: "blue",
            data: "black",
            default: "black",
        };
    }
    SimpleColorFormatter.prototype.format = function (priority, data, context) {
        var dataPlaceholders = data.map(function (item) {
            switch (typeof item) {
                case "object":
                    return "%o";
                case "number":
                    return (item % 1 === 0) ? "%d" : "%f";
                default:
                    return "%s";
            }
        });
        var text = utils_1.template(this.pattern, {
            priority: "%s",
            context: "%s",
            data: dataPlaceholders.join(" "),
        });
        var logFragments = [text];
        this.pattern.replace(/(priority|context|data)/g, function (match) {
            switch (match) {
                case "priority":
                    logFragments.push(priority);
                    break;
                case "context":
                    logFragments.push(context || "");
                    break;
                case "data":
                    logFragments.push.apply(logFragments, data);
                    break;
            }
            return match;
        });
        return logFragments.join(", ");
    };
    SimpleColorFormatter.prototype.formatColored = function (priority, data, context) {
        var _this = this;
        var dataPlaceholders = data.map(function (item) {
            switch (typeof item) {
                case "object":
                    return "%o";
                case "number":
                    return (item % 1 === 0) ? "%d" : "%f";
                default:
                    return "%s";
            }
        });
        var text = utils_1.template(this.pattern, {
            priority: "%c%s%c",
            context: "%c%s%c",
            data: "%c" + dataPlaceholders.join(" ") + "%c",
        });
        var logFragments = [text];
        this.pattern.replace(/(priority|context|data)/g, function (match) {
            switch (match) {
                case "priority":
                    logFragments.push("color: " + _this.colorMap[match]);
                    logFragments.push(priority);
                    logFragments.push("color: " + _this.colorMap.default);
                    break;
                case "context":
                    logFragments.push("color: " + _this.colorGenerator.getColorForContext(context || "root", "black"));
                    logFragments.push(context || "");
                    logFragments.push("color: " + _this.colorMap.default);
                    break;
                case "data":
                    logFragments.push("color: " + _this.colorMap[match]);
                    logFragments.push.apply(logFragments, data);
                    logFragments.push("color: " + _this.colorMap.default);
                    break;
            }
            return match;
        });
        return logFragments;
    };
    return SimpleColorFormatter;
}());
exports.SimpleColorFormatter = SimpleColorFormatter;
var GLoggerDefaultFormatter = (function () {
    function GLoggerDefaultFormatter() {
        this.showPriority = false;
        this.showContext = true;
        this.showTime = false;
        this.showTimeOffset = false;
        this.colors = {};
        this.colorGenerator = new ColorGenerator();
        this.lastFormatTime = Date.now();
    }
    GLoggerDefaultFormatter.prototype.formatColored = function (priority, data, context) {
        var result = [this.getOutputArray(priority, data, context).join(" ")];
        if (this.showPriority) {
            result.push("color: " + (this.colors.priority || "blue"));
        }
        if (this.showContext && context) {
            result.push("color: " + this.colorGenerator.getColorForContext(context, this.colors.context || "red"));
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