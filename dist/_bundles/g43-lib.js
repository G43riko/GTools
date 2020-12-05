(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("G43Lib", [], factory);
	else if(typeof exports === 'object')
		exports["G43Lib"] = factory();
	else
		root["G43Lib"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1716:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(542), exports);
__exportStar(__webpack_require__(3527), exports);
__exportStar(__webpack_require__(8364), exports);
__exportStar(__webpack_require__(5679), exports);
__exportStar(__webpack_require__(5083), exports);
__exportStar(__webpack_require__(7321), exports);
__exportStar(__webpack_require__(8439), exports);
__exportStar(__webpack_require__(5421), exports);
__exportStar(__webpack_require__(2740), exports);
__exportStar(__webpack_require__(8037), exports);
__exportStar(__webpack_require__(3871), exports);
__exportStar(__webpack_require__(5118), exports);
__exportStar(__webpack_require__(3081), exports);
__exportStar(__webpack_require__(4991), exports);
__exportStar(__webpack_require__(7554), exports);
__exportStar(__webpack_require__(4503), exports);
__exportStar(__webpack_require__(3833), exports);
__exportStar(__webpack_require__(2501), exports);
__exportStar(__webpack_require__(4650), exports);
__exportStar(__webpack_require__(1230), exports);
__exportStar(__webpack_require__(5928), exports);


/***/ }),

/***/ 5797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManager = void 0;
var file_types_enum_1 = __webpack_require__(5440);
var FileManager = (function () {
    function FileManager() {
        this.input = document.createElement("input");
        this.input.setAttribute("type", "file");
        this.input.setAttribute("value", "files");
        this.input.setAttribute("class", "hide");
        this.link = document.createElement("a");
        this.link.setAttribute("class", "hide");
        this.link.setAttribute("href", "");
    }
    FileManager.prototype.saveFile = function (name, text, type) {
        if (type === void 0) { type = file_types_enum_1.FileTypes.TXT; }
        this.link.href = URL.createObjectURL(new Blob([text], { type: type }));
        this.link.download = name;
        this.link.click();
    };
    FileManager.prototype.saveImage = function (name, image) {
        this.link.href = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    };
    FileManager.prototype.loadImage = function (func) {
        this.input.onchange = function (event) {
            var files = event.target.files;
            if (files.length <= 0) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function () {
                var image = new Image();
                image.src = reader.result;
                func(image, files[0]);
            };
            reader.readAsDataURL(files[0]);
        };
        this.input.click();
    };
    FileManager.prototype.loadFile = function (func) {
        this.input.onchange = function (e) {
            var reader = new FileReader();
            var files = e.target.files;
            if (files.length > 0) {
                reader.onload = function () { return func(reader.result, files); };
                reader.readAsText(files[0]);
            }
        };
        this.input.click();
    };
    FileManager.prototype.loadBinaryFile = function (func) {
        this.input.onchange = function (event) {
            var reader = new FileReader();
            var files = event.target.files;
            if (files.length > 0) {
                reader.onload = function () { return func(reader.result, files[0].name); };
                reader.readAsBinaryString(files[0]);
            }
        };
        this.input.click();
    };
    return FileManager;
}());
exports.FileManager = FileManager;


/***/ }),

/***/ 4673:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GMap = void 0;
var GMap = (function (_super) {
    __extends(GMap, _super);
    function GMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GMap.prototype.get = function (key, defaultValue) {
        return _super.prototype.get.call(this, key) || defaultValue;
    };
    GMap.prototype.getOrCreate = function (key, defaultValue) {
        var result = _super.prototype.get.call(this, key);
        if (result) {
            return result;
        }
        this.set(key, defaultValue);
        return defaultValue;
    };
    return GMap;
}(Map));
exports.GMap = GMap;


/***/ }),

/***/ 2740:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerInstance = exports.GLoggerCallbackHolder = exports.SimpleColorFormatter = exports.GLoggerDefaultFormatter = exports.GLoggerPriority = void 0;
__exportStar(__webpack_require__(5797), exports);
__exportStar(__webpack_require__(3113), exports);
__exportStar(__webpack_require__(4673), exports);
__exportStar(__webpack_require__(1556), exports);
__exportStar(__webpack_require__(3602), exports);
__exportStar(__webpack_require__(927), exports);
var g_logger_priority_1 = __webpack_require__(4031);
Object.defineProperty(exports, "GLoggerPriority", ({ enumerable: true, get: function () { return g_logger_priority_1.GLoggerPriority; } }));
var g_logger_default_formatter_1 = __webpack_require__(1703);
Object.defineProperty(exports, "GLoggerDefaultFormatter", ({ enumerable: true, get: function () { return g_logger_default_formatter_1.GLoggerDefaultFormatter; } }));
Object.defineProperty(exports, "SimpleColorFormatter", ({ enumerable: true, get: function () { return g_logger_default_formatter_1.SimpleColorFormatter; } }));
var g_logger_callback_holder_1 = __webpack_require__(5505);
Object.defineProperty(exports, "GLoggerCallbackHolder", ({ enumerable: true, get: function () { return g_logger_callback_holder_1.GLoggerCallbackHolder; } }));
var g_logger_instance_1 = __webpack_require__(2875);
Object.defineProperty(exports, "GLoggerInstance", ({ enumerable: true, get: function () { return g_logger_instance_1.GLoggerInstance; } }));


/***/ }),

/***/ 1556:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyValueCounter = void 0;
var KeyValueCounter = (function () {
    function KeyValueCounter() {
        this.data = {};
        this.results = [];
        this.processed = false;
    }
    KeyValueCounter.prototype.add = function (item) {
        if (item in this.data) {
            this.data[item]++;
        }
        else {
            this.data[item] = 1;
        }
        if (this.processed) {
            this.processed = false;
        }
    };
    KeyValueCounter.prototype.addAll = function (items) {
        items.forEach(this.add, this);
    };
    KeyValueCounter.prototype.getAll = function () {
        if (!this.processed) {
            this.process();
        }
        return this.results;
    };
    KeyValueCounter.prototype.getTopN = function (count) {
        if (!this.processed) {
            this.process();
        }
        return this.results.slice(0, count);
    };
    KeyValueCounter.prototype.getCount = function () {
        return this.getAll().length;
    };
    KeyValueCounter.prototype.process = function () {
        for (var key in this.data) {
            if (!this.data.hasOwnProperty(key)) {
                continue;
            }
            this.results.push({
                key: key,
                count: this.data[key],
            });
        }
        this.results.sort(function (a, b) { return b.count - a.count; });
        this.processed = true;
    };
    return KeyValueCounter;
}());
exports.KeyValueCounter = KeyValueCounter;


/***/ }),

/***/ 5505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerCallbackHolder = void 0;
var g_logger_default_formatter_1 = __webpack_require__(1703);
var g_logger_priority_1 = __webpack_require__(4031);
var GLoggerCallbackHolder = (function () {
    function GLoggerCallbackHolder(callbacks) {
        this.callbacks = callbacks;
    }
    GLoggerCallbackHolder.prototype.copy = function () {
        return new GLoggerCallbackHolder(this.callbacks);
    };
    GLoggerCallbackHolder.createConsoleCallbacks = function (formatter) {
        var _a;
        if (formatter === void 0) { formatter = new g_logger_default_formatter_1.SimpleColorFormatter(); }
        return new GLoggerCallbackHolder((_a = {},
            _a[g_logger_priority_1.GLoggerPriority.LOG] = function (message, context) { return console.log.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.LOG, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.WARN] = function (message, context) { return console.warn.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.WARN, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.ERROR] = function (message, context) { return console.error.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.ERROR, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.SUCCESS] = function (message, context) { return console.log.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.SUCCESS, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.VERBOSE] = function (message, context) { return console.log.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.VERBOSE, message, context)); },
            _a));
    };
    GLoggerCallbackHolder.createArrayCallbacks = function (array, options) {
        var _a;
        if (options === void 0) { options = {}; }
        var mapper = options.mapper || (function (priority, messages, context) { return [priority, messages, context]; });
        var appendToArray = function (priority, messages, context) {
            array.push(mapper(priority, messages, context));
        };
        return new GLoggerCallbackHolder((_a = {},
            _a[g_logger_priority_1.GLoggerPriority.LOG] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.LOG, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.WARN] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.WARN, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.ERROR] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.ERROR, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.SUCCESS] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.SUCCESS, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.VERBOSE] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.VERBOSE, message, context); },
            _a));
    };
    GLoggerCallbackHolder.prototype.setCallback = function (priority, callback) {
        this.callbacks[priority] = callback;
    };
    GLoggerCallbackHolder.prototype.set = function (holder) {
        var _this = this;
        Object.values(g_logger_priority_1.GLoggerPriority).forEach(function (priority) {
            _this.setCallback(priority, holder.getCallback(priority));
        });
    };
    GLoggerCallbackHolder.prototype.getCallback = function (priority) {
        return this.callbacks[priority];
    };
    return GLoggerCallbackHolder;
}());
exports.GLoggerCallbackHolder = GLoggerCallbackHolder;


/***/ }),

/***/ 1703:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerDefaultFormatter = exports.SimpleColorFormatter = exports.ColorGenerator = void 0;
var utils_1 = __webpack_require__(5928);
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


/***/ }),

/***/ 2875:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerInstance = void 0;
var g_logger_priority_1 = __webpack_require__(4031);
var GLoggerInstance = (function () {
    function GLoggerInstance(loggerCallbacks, context) {
        this.loggerCallbacks = loggerCallbacks;
        this.context = context;
    }
    GLoggerInstance.localPrint = function (type, data, callbacks, context) {
        callbacks.getCallback(type)(data, context);
    };
    GLoggerInstance.getContextString = function (context) {
        var _a;
        if (typeof context === "string") {
            return context;
        }
        if (typeof ((_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name) === "string") {
            return context.constructor.name;
        }
        if (typeof (context === null || context === void 0 ? void 0 : context.name) === "string") {
            return context.name;
        }
        return undefined;
    };
    GLoggerInstance.prototype.setLogCallback = function (priority, callback) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.setCallback(priority, callback);
    };
    GLoggerInstance.prototype.setLogCallbacks = function (callbackHolder) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.set(callbackHolder);
    };
    GLoggerInstance.prototype.print = function (type, context) {
        if (context === void 0) { context = ""; }
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        var realContext = GLoggerInstance.getContextString(context);
        GLoggerInstance.localPrint(type, data, this.loggerCallbacks, realContext);
    };
    GLoggerInstance.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.print.apply(this, __spreadArrays([g_logger_priority_1.GLoggerPriority.LOG, this.context], messages));
    };
    GLoggerInstance.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.print.apply(this, __spreadArrays([g_logger_priority_1.GLoggerPriority.WARN, this.context], messages));
    };
    GLoggerInstance.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.print.apply(this, __spreadArrays([g_logger_priority_1.GLoggerPriority.ERROR, this.context], messages));
    };
    return GLoggerInstance;
}());
exports.GLoggerInstance = GLoggerInstance;


/***/ }),

/***/ 4031:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerPriority = void 0;
var GLoggerPriority;
(function (GLoggerPriority) {
    GLoggerPriority["LOG"] = "LOG";
    GLoggerPriority["WARN"] = "WARN";
    GLoggerPriority["ERROR"] = "ERROR";
    GLoggerPriority["VERBOSE"] = "VERBOSE";
    GLoggerPriority["SUCCESS"] = "SUCCESS";
})(GLoggerPriority = exports.GLoggerPriority || (exports.GLoggerPriority = {}));


/***/ }),

/***/ 3113:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLogger = void 0;
var g_logger_callback_holder_1 = __webpack_require__(5505);
var g_logger_instance_1 = __webpack_require__(2875);
var g_logger_priority_1 = __webpack_require__(4031);
var GLogger = (function (_super) {
    __extends(GLogger, _super);
    function GLogger(context, callbacks) {
        if (callbacks === void 0) { callbacks = GLogger.staticCallbacks.copy(); }
        return _super.call(this, callbacks, context) || this;
    }
    GLogger.setCallbacks = function (callbackHolder) {
        GLogger.staticCallbacks.set(callbackHolder);
    };
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
    GLogger.createClassLogger = function (context, parent) {
        var _a, _b;
        if (parent) {
            return parent.extends((context === null || context === void 0 ? void 0 : context.name) || ((_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name));
        }
        return new GLogger((_b = context === null || context === void 0 ? void 0 : context.constructor) === null || _b === void 0 ? void 0 : _b.name);
    };
    GLogger.createArrayLogger = function (array, context, mapper) {
        return new GLogger(context, g_logger_callback_holder_1.GLoggerCallbackHolder.createArrayCallbacks(array, { mapper: mapper }));
    };
    GLogger.print = function (type, context) {
        if (context === void 0) { context = ""; }
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        var realContext = GLogger.getContextString(context);
        var result = realContext && realContext.match(GLogger.skipRegexp);
        if (result) {
            return;
        }
        g_logger_instance_1.GLoggerInstance.localPrint(type, data, GLogger.staticCallbacks, realContext);
    };
    GLogger.log = function (message, context) {
        GLogger.print.apply(GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.LOG, context], (Array.isArray(message) ? message : [message])));
    };
    GLogger.error = function (message, context) {
        GLogger.print.apply(GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.ERROR, context], (Array.isArray(message) ? message : [message])));
    };
    GLogger.warn = function (message, context) {
        GLogger.print.apply(GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.WARN, context], (Array.isArray(message) ? message : [message])));
    };
    GLogger.prototype.extends = function (subContext) {
        var currentContext = GLogger.getContextString(this.context);
        var subContextNameContext = GLogger.getContextString(subContext);
        return new GLogger(currentContext ? currentContext + ":" + subContextNameContext : subContextNameContext, this.loggerCallbacks.copy());
    };
    GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    GLogger.skipRegexp = new RegExp("" + GLogger.skipContexts.join("|"), "gi");
    GLogger.staticCallbacks = g_logger_callback_holder_1.GLoggerCallbackHolder.createConsoleCallbacks();
    return GLogger;
}(g_logger_instance_1.GLoggerInstance));
exports.GLogger = GLogger;


/***/ }),

/***/ 3602:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberCounter = void 0;
var NumberCounter = (function () {
    function NumberCounter() {
        this.min = Infinity;
        this.max = -Infinity;
        this.sum = 0;
        this.numbers = [];
    }
    NumberCounter.prototype.add = function (value) {
        this.numbers.push(value);
        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);
        this.sum += value;
    };
    NumberCounter.prototype.getMin = function () {
        return this.min;
    };
    NumberCounter.prototype.getMax = function () {
        return this.max;
    };
    NumberCounter.prototype.getCount = function () {
        return this.numbers.length;
    };
    NumberCounter.prototype.getAverage = function () {
        return this.sum / this.numbers.length;
    };
    NumberCounter.prototype.addAll = function (items) {
        items.forEach(this.add, this);
    };
    return NumberCounter;
}());
exports.NumberCounter = NumberCounter;


/***/ }),

/***/ 927:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Paginator = void 0;
var gtools_config_1 = __webpack_require__(8364);
var Paginator = (function () {
    function Paginator(allItems, itemsPerPage) {
        if (itemsPerPage === void 0) { itemsPerPage = gtools_config_1.GToolsConfig.PAGE_LIMIT; }
        this.allItems = allItems;
        this.itemsPerPage = itemsPerPage;
        this.actualPage = 0;
        this.lastPage = allItems ? Math.floor(allItems.length / this.itemsPerPage) : 0;
        this.actList = this._reCalcList();
    }
    Paginator.prototype.getActualPage = function () {
        return this.actualPage + 1;
    };
    Paginator.prototype.getPages = function () {
        return this.lastPage + 1;
    };
    Paginator.prototype.getPagesAround = function () {
        if (this.actualPage < 2) {
            return [1, 2, 3, 4, 5];
        }
        if (this.actualPage > this.lastPage - 3) {
            return [
                this.lastPage - 3,
                this.lastPage - 2,
                this.lastPage - 1,
                this.lastPage,
                this.lastPage + 1,
            ];
        }
        return [
            this.actualPage - 1,
            this.actualPage,
            this.actualPage + 1,
            this.actualPage + 2,
            this.actualPage + 3,
        ];
    };
    Paginator.prototype.getList = function () {
        return this.actList;
    };
    Paginator.prototype.goToNext = function () {
        if (this.actualPage < this.lastPage) {
            this.actualPage++;
            return this._reCalcList();
        }
        return this.getList();
    };
    Paginator.prototype.gotTo = function (page) {
        if (page >= 0 && page <= this.lastPage) {
            this.actualPage = page;
            return this._reCalcList();
        }
        return this.getList();
    };
    Paginator.prototype.goToPrev = function () {
        if (this.actualPage > 0) {
            this.actualPage--;
            return this._reCalcList();
        }
        return this.getList();
    };
    Paginator.prototype.goToFirst = function () {
        this.actualPage = 0;
        return this._reCalcList();
    };
    Paginator.prototype.goToLast = function () {
        this.actualPage = this.lastPage;
        return this._reCalcList();
    };
    Paginator.prototype._reCalcList = function () {
        var start = this.actualPage * this.itemsPerPage;
        this.actList = this.allItems ? this.allItems.slice(start, start + this.itemsPerPage) : [];
        return this.actList;
    };
    return Paginator;
}());
exports.Paginator = Paginator;


/***/ }),

/***/ 3527:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8364:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GToolsConfig = exports.initConfig = exports.ClassGToolsConfig = void 0;
var config;
var checkConfig = function () {
    if (!config) {
        return {
            URL_API: "",
            LANGUAGE: "",
            VERSION: "",
            PAGE_LIMIT: 0,
        };
    }
    return config;
};
var ClassGToolsConfig = (function () {
    function ClassGToolsConfig() {
    }
    Object.defineProperty(ClassGToolsConfig.prototype, "URL_API", {
        get: function () {
            return checkConfig().URL_API;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassGToolsConfig.prototype, "PAGE_LIMIT", {
        get: function () {
            return checkConfig().PAGE_LIMIT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassGToolsConfig.prototype, "LANGUAGE", {
        get: function () {
            return checkConfig().LANGUAGE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassGToolsConfig.prototype, "VERSION", {
        get: function () {
            return checkConfig().VERSION;
        },
        enumerable: false,
        configurable: true
    });
    return ClassGToolsConfig;
}());
exports.ClassGToolsConfig = ClassGToolsConfig;
function initConfig(appConfig) {
    config = appConfig;
}
exports.initConfig = initConfig;
exports.GToolsConfig = new ClassGToolsConfig();


/***/ }),

/***/ 5601:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS = void 0;
exports.ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS = true;


/***/ }),

/***/ 2867:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Deprecated = void 0;
function Deprecated(value) {
    return function (target, propertyKey, descriptor) {
        var oldMethod = target[propertyKey];
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.warn("Method " + target.constructor.name + "." + propertyKey + " is deprecated. " + (value || ""));
            return oldMethod.apply(target, args);
        };
    };
}
exports.Deprecated = Deprecated;


/***/ }),

/***/ 1430:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinalClass = void 0;
function FinalClass(target) {
    return (function (_super) {
        __extends(Final, _super);
        function Final() {
            var _newTarget = this.constructor;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            if (_newTarget !== Final) {
                throw new Error("Cannot inherit from final class");
            }
            _this = _super.apply(this, args) || this;
            return _this;
        }
        return Final;
    }(target));
}
exports.FinalClass = FinalClass;


/***/ }),

/***/ 5679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2867), exports);
__exportStar(__webpack_require__(1430), exports);
__exportStar(__webpack_require__(3255), exports);
__exportStar(__webpack_require__(3610), exports);
__exportStar(__webpack_require__(6905), exports);


/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mapper = void 0;
function Mapper(params, prefix) {
    if (params === void 0) { params = {}; }
    if (prefix === void 0) { prefix = "_"; }
    return function (target, key) {
        if (!delete target[key]) {
            return;
        }
        var descriptor = {
            enumerable: true,
            configurable: true,
        };
        var newName = prefix + key;
        if (params) {
            if (typeof params.onGet === "function") {
                descriptor.get = function () { return params.onGet && params.onGet(target[newName]); };
            }
            else {
                descriptor.get = function () { return target[newName]; };
            }
            if (typeof params.onSet === "function") {
                descriptor.set = function (newVal) { return target[newName] = params.onSet && params.onSet(newVal); };
            }
            else {
                descriptor.set = function (value) { return target[newName] = value; };
            }
        }
        Object.defineProperty(target, key, descriptor);
    };
}
exports.Mapper = Mapper;


/***/ }),

/***/ 3610:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Singleton = void 0;
var instances = {};
function Singleton(constructor) {
    var className = constructor.name;
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            if (instances[className]) {
                throw new Error("Instance of " + className + " is already created");
            }
            instances[className] = _this;
            return _this;
        }
        return class_1;
    }(constructor));
}
exports.Singleton = Singleton;


/***/ }),

/***/ 6905:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Watch = void 0;
function Watch(onSet, options) {
    var prefix = options && options.prefix || "_";
    return function (target, key) {
        var setter = function (newVal) {
            if (onSet) {
                target[prefix + key] = onSet(newVal, target[prefix + key]);
            }
            target[prefix + key] = newVal;
        };
        if (!delete target[key]) {
            return;
        }
        Object.defineProperty(target, key, {
            get: function () { return target[prefix + key]; },
            set: setter,
            enumerable: options && typeof options.enumerable === "boolean" ? options.enumerable : true,
            configurable: options && typeof options.configurable === "boolean" ? options.configurable : true,
        });
    };
}
exports.Watch = Watch;


/***/ }),

/***/ 5083:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasManager = void 0;
var errors_1 = __webpack_require__(8037);
var AbstractCanvasManager = (function () {
    function AbstractCanvasManager(arg1, arg2, arg3) {
        if (arg1 instanceof HTMLCanvasElement) {
            this.localCanvas = arg1;
            if (arg2 && arg3) {
                this.setCanvasSize(arg2, arg3);
            }
        }
        else if (arg1 instanceof HTMLImageElement) {
            this.localCanvas = CanvasManager.imageToCanvas(arg1);
        }
        else {
            if (typeof document === "undefined") {
                throw new errors_1.NotBrowserException();
            }
            this.localCanvas = document.createElement("canvas");
            if (arg1 && arg2) {
                this.setCanvasSize(arg1, arg2);
            }
        }
        this.localContext = this.localCanvas.getContext("2d");
    }
    Object.defineProperty(AbstractCanvasManager.prototype, "canvas", {
        get: function () {
            return this.localCanvas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractCanvasManager.prototype, "context", {
        get: function () {
            return this.localContext;
        },
        enumerable: false,
        configurable: true
    });
    AbstractCanvasManager.prototype.setTransform = function (transform) {
        this.setTransformRaw(transform.offset.x, transform.offset.y, transform.scale);
    };
    AbstractCanvasManager.prototype.setTransformRaw = function (translationX, translationY, scaleX, scaleY) {
        if (scaleY === void 0) { scaleY = scaleX; }
        if (this.localContext) {
            CanvasManager.setTransformRaw(this.localContext, translationX, translationY, scaleX, scaleY);
        }
    };
    AbstractCanvasManager.prototype.getImage = function () {
        return CanvasManager.canvasToImage(this.localCanvas);
    };
    AbstractCanvasManager.prototype.setShadow = function (x, y, color, blur) {
        if (this.localContext) {
            CanvasManager.setShadow(this.localContext, x, y, color, blur);
        }
    };
    AbstractCanvasManager.prototype.show = function (format) {
        if (format === void 0) { format = "image/png"; }
        window.open(this.localCanvas.toDataURL(format), "_blank");
    };
    AbstractCanvasManager.prototype.clearCanvas = function () {
        if (this.localContext) {
            CanvasManager.clearCanvas(this.localContext);
        }
    };
    AbstractCanvasManager.prototype.setCanvasSize = function (width, height) {
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        CanvasManager.setCanvasSize(this.localCanvas, width, height);
    };
    AbstractCanvasManager.prototype.appendTo = function (element) {
        element.appendChild(this.localCanvas);
        return element;
    };
    return AbstractCanvasManager;
}());
var CanvasManager = (function (_super) {
    __extends(CanvasManager, _super);
    function CanvasManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanvasManager.clearCanvas = function (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
    CanvasManager.setCanvasSize = function (canvas, width, height) {
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        canvas.width = width;
        canvas.height = height;
    };
    CanvasManager.setShadow = function (ctx, x, y, color, blur) {
        ctx.shadowColor = color;
        ctx.shadowBlur = blur;
        ctx.shadowOffsetX = x;
        ctx.shadowOffsetY = y;
    };
    CanvasManager.imageToCanvas = function (image) {
        if (typeof document === "undefined") {
            throw new errors_1.NotBrowserException();
        }
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.drawImage(image, 0, 0);
        }
        return canvas;
    };
    CanvasManager.setLineDash = function (ctx) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof ctx.setLineDash === "function") {
            ctx.setLineDash(args);
        }
    };
    CanvasManager.calcTextWidth = function (ctx, value, font) {
        if (font) {
            ctx.font = font;
        }
        return ctx.measureText(value).width;
    };
    CanvasManager.setTransformRaw = function (ctx, translationX, translationY, scaleX, scaleY) {
        if (scaleY === void 0) { scaleY = scaleX; }
        ctx.setTransform(scaleX, 0, 0, scaleY, translationX, translationY);
    };
    CanvasManager.canvasToImage = function (canvas, format) {
        if (format === void 0) { format = "image/png"; }
        var image = new Image();
        image.src = canvas.toDataURL(format);
        image.width = canvas.width;
        image.height = canvas.height;
        return image;
    };
    return CanvasManager;
}(AbstractCanvasManager));
exports.CanvasManager = CanvasManager;


/***/ }),

/***/ 7321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasUtils = void 0;
var canvas_manager_1 = __webpack_require__(5083);
function setShadow(context, config) {
    if (config) {
        canvas_manager_1.CanvasManager.setShadow(context, config.x, config.y, config.color, config.blur);
    }
    else {
        canvas_manager_1.CanvasManager.setShadow(context, 0, 0, "black", 0);
    }
}
function process(res) {
    if (res.shadow) {
        setShadow(res.ctx, res.shadow);
    }
    if (res.bgImage) {
        res.ctx.save();
        res.ctx.clip();
        if (res.bgImage instanceof HTMLImageElement) {
            res.ctx.drawImage(res.bgImage, res.x, res.y, res.width, res.height);
        }
        else {
            res.ctx.drawImage(res.bgImage.img, res.bgImage.x, res.bgImage.y, res.bgImage.w, res.bgImage.h, res.x, res.y, res.width, res.height);
        }
        res.ctx.restore();
    }
    else if (res.fill) {
        res.ctx.fillStyle = res.fillColor;
        res.ctx.fill();
    }
    if (res.shadow) {
        setShadow(res.ctx);
    }
    res.ctx.lineCap = res.lineCap;
    res.ctx.lineJoin = res.joinType;
    if (typeof res.ctx.setLineDash === "function") {
        res.ctx.setLineDash(res.lineDash);
    }
    if (!res.draw) {
        return;
    }
    res.ctx.lineWidth = res.borderWidth;
    res.ctx.strokeStyle = res.borderColor;
    res.ctx.stroke();
}
function initDef(obj) {
    return {
        borderColor: "black",
        borderWidth: 1,
        center: false,
        ctx: obj.ctx,
        draw: typeof obj.borderColor !== "undefined" || typeof obj.borderWidth !== "undefined",
        endAngle: Math.PI * 2,
        fill: typeof obj.fillColor !== "undefined",
        fillColor: "white",
        height: 0,
        joinType: "bevel",
        lineCap: "round",
        lineDash: [],
        offset: null,
        radius: {
            tl: 0,
            tr: 0,
            br: 0,
            bl: 0,
        },
        startAngle: 0,
        width: 0,
        x: 0,
        y: 0,
    };
}
function remakePosAndSize(def, obj) {
    var res = $.extend(def, obj);
    var checkAttribute = function (attrName, partA, partB) {
        if (typeof res[attrName] === "undefined") {
            return;
        }
        var value = res[attrName];
        if (!isNaN(value)) {
            res[partA] = value;
            res[partB] = value;
        }
        else if (Array.isArray(value)) {
            res[partA] = value[0];
            res[partB] = value[1];
        }
        else {
            res[partA] = value;
            res[partB] = value;
        }
    };
    checkAttribute("size", "width", "size");
    checkAttribute("position", "x", "y");
    if (res.center) {
        res.x -= res.width >> 1;
        res.y -= res.height >> 1;
    }
    return res;
}
function checkPosAndSize(obj, name) {
    if ((typeof obj.x === "undefined" || typeof obj.y === "undefined") && typeof obj.position === "undefined") {
        console.error("MSG_TRY_DRAW_WITHOUT_POSITION: " + name);
    }
    if ((typeof obj.width === "undefined" || typeof obj.height === "undefined") && typeof obj.size === "undefined") {
        console.error("MSG_TRY_DRAW_WITHOUT_SIZE: " + name);
    }
    if (obj.width <= 0 || obj.height <= 0) {
        console.error("MSG_TRY_DRAW_WITH_NEG_POSITION: " + name);
    }
    return initDef(obj);
}
var CanvasUtils = (function () {
    function CanvasUtils() {
    }
    CanvasUtils.doArc = function (obj) {
        var res = remakePosAndSize(checkPosAndSize(obj, "Arc"), obj);
        res.ctx.beginPath();
        if (typeof res.ctx.ellipse === "function") {
            res.ctx.ellipse(res.x + (res.width >> 1), res.y + (res.height >> 1), res.width >> 1, res.height >> 1, 0, res.startAngle, res.endAngle);
        }
        else {
            res.ctx.rect(res.x + (res.width >> 1), res.y + (res.height >> 1), res.width >> 1, res.height >> 1);
        }
        process(res);
    };
    CanvasUtils.doRect = function (obj) {
        var def = checkPosAndSize(obj, "Rect");
        if (typeof obj.radius !== "undefined") {
            if (!isNaN(obj.radius)) {
                obj.radius = {
                    bl: obj.radius,
                    br: obj.radius,
                    tl: obj.radius,
                    tr: obj.radius,
                };
            }
            else {
                for (var key in def.radius) {
                    if (def.radius.hasOwnProperty(key)) {
                        obj.radius[key] = obj.radius[key] || def.radius[key];
                    }
                }
            }
        }
        var res = remakePosAndSize(def, obj);
        res.ctx.beginPath();
        res.ctx.moveTo(res.x + res.radius.tl, res.y);
        res.ctx.lineTo(res.x + res.width - res.radius.tr, res.y);
        res.ctx.quadraticCurveTo(res.x + res.width, res.y, res.x + res.width, res.y + res.radius.tr);
        res.ctx.lineTo(res.x + res.width, res.y + res.height - res.radius.br);
        res.ctx.quadraticCurveTo(res.x + res.width, res.y + res.height, res.x + res.width - res.radius.br, res.y + res.height);
        res.ctx.lineTo(res.x + res.radius.bl, res.y + res.height);
        res.ctx.quadraticCurveTo(res.x, res.y + res.height, res.x, res.y + res.height - res.radius.bl);
        res.ctx.lineTo(res.x, res.y + res.radius.tl);
        res.ctx.quadraticCurveTo(res.x, res.y, res.x + res.radius.tl, res.y);
        res.ctx.closePath();
        process(res);
    };
    return CanvasUtils;
}());
exports.CanvasUtils = CanvasUtils;


/***/ }),

/***/ 8439:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomGet = void 0;
var localContext = typeof document !== "undefined" ? document : null;
var DomGet = (function () {
    function DomGet() {
    }
    DomGet.setContext = function (context) {
        localContext = context;
    };
    DomGet.byClass = function (className, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByClassName(className);
    };
    DomGet.byLink = function (link, context) {
        if (context === void 0) { context = localContext; }
        return context.querySelectorAll("a[attr=\"" + link + "\"]");
    };
    DomGet.byId = function (id, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementById(id);
    };
    DomGet.byName = function (name, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByName(name);
    };
    DomGet.byTag = function (tagName, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByTagName(tagName);
    };
    return DomGet;
}());
exports.DomGet = DomGet;


/***/ }),

/***/ 5421:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8031:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = void 0;
var Button;
(function (Button) {
    Button[Button["LEFT"] = 0] = "LEFT";
    Button[Button["RIGHT"] = 1] = "RIGHT";
    Button[Button["MIDDLE"] = 2] = "MIDDLE";
})(Button = exports.Button || (exports.Button = {}));


/***/ }),

/***/ 3982:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Days = void 0;
var Days;
(function (Days) {
    Days["MON"] = "MON";
    Days["TUE"] = "TUE";
    Days["WED"] = "WED";
    Days["THU"] = "THU";
    Days["FRI"] = "FRI";
    Days["SAT"] = "SAT";
    Days["SUN"] = "SUN";
})(Days = exports.Days || (exports.Days = {}));


/***/ }),

/***/ 3115:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Encodings = void 0;
var Encodings;
(function (Encodings) {
    Encodings["UTF8"] = "utf8";
    Encodings["UTF16"] = "utf16";
    Encodings["UNICODE"] = "unicode";
    Encodings["ASCII"] = "ascii";
    Encodings["UCS2"] = "ucs2";
})(Encodings = exports.Encodings || (exports.Encodings = {}));


/***/ }),

/***/ 5440:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileTypes = void 0;
var FileTypes;
(function (FileTypes) {
    FileTypes["CSS"] = "text/css";
    FileTypes["HTML"] = "text/html";
    FileTypes["JS"] = "application/javascript";
    FileTypes["MP3"] = "audio/mpeg";
    FileTypes["MP4"] = "video/mp4";
    FileTypes["OGG"] = "application/ogg";
    FileTypes["OGV"] = "video/ogg";
    FileTypes["OGA"] = "audio/ogg";
    FileTypes["TXT"] = "text/plain";
    FileTypes["WAV"] = "audio/x-wav";
    FileTypes["WEBM"] = "video/webm";
})(FileTypes = exports.FileTypes || (exports.FileTypes = {}));


/***/ }),

/***/ 8034:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpStatusCodes = void 0;
var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["CONTINUE"] = 100] = "CONTINUE";
    HttpStatusCodes[HttpStatusCodes["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatusCodes[HttpStatusCodes["OK"] = 200] = "OK";
    HttpStatusCodes[HttpStatusCodes["CREATED"] = 201] = "CREATED";
    HttpStatusCodes[HttpStatusCodes["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatusCodes[HttpStatusCodes["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatusCodes[HttpStatusCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCodes[HttpStatusCodes["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatusCodes[HttpStatusCodes["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatusCodes[HttpStatusCodes["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpStatusCodes[HttpStatusCodes["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatusCodes[HttpStatusCodes["FOUND"] = 302] = "FOUND";
    HttpStatusCodes[HttpStatusCodes["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatusCodes[HttpStatusCodes["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatusCodes[HttpStatusCodes["USE_PROXY"] = 305] = "USE_PROXY";
    HttpStatusCodes[HttpStatusCodes["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatusCodes[HttpStatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCodes[HttpStatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCodes[HttpStatusCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatusCodes[HttpStatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCodes[HttpStatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCodes[HttpStatusCodes["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatusCodes[HttpStatusCodes["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatusCodes[HttpStatusCodes["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatusCodes[HttpStatusCodes["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatusCodes[HttpStatusCodes["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCodes[HttpStatusCodes["GONE"] = 410] = "GONE";
    HttpStatusCodes[HttpStatusCodes["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatusCodes[HttpStatusCodes["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatusCodes[HttpStatusCodes["REQUEST_ENTITY_TOO_LARGE"] = 413] = "REQUEST_ENTITY_TOO_LARGE";
    HttpStatusCodes[HttpStatusCodes["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
    HttpStatusCodes[HttpStatusCodes["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatusCodes[HttpStatusCodes["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatusCodes[HttpStatusCodes["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatusCodes[HttpStatusCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatusCodes[HttpStatusCodes["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatusCodes[HttpStatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusCodes[HttpStatusCodes["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatusCodes[HttpStatusCodes["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatusCodes[HttpStatusCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusCodes[HttpStatusCodes["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatusCodes[HttpStatusCodes["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(HttpStatusCodes = exports.HttpStatusCodes || (exports.HttpStatusCodes = {}));


/***/ }),

/***/ 542:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8031), exports);
__exportStar(__webpack_require__(3982), exports);
__exportStar(__webpack_require__(3115), exports);
__exportStar(__webpack_require__(5440), exports);
__exportStar(__webpack_require__(8034), exports);
__exportStar(__webpack_require__(6788), exports);


/***/ }),

/***/ 6788:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeysOld = exports.Keys = void 0;
var Keys;
(function (Keys) {
    Keys["ARROW_UP"] = "ArrowUp";
    Keys["ARROW_DOWN"] = "ArrowDown";
    Keys["ARROW_LEFT"] = "ArrowLeft";
    Keys["ARROW_RIGHT"] = "ArrowRight";
    Keys["DELETE"] = "Delete";
    Keys["CONTROL"] = "ControlLeft";
    Keys["SHIFT"] = "ShiftLeft";
    Keys["PAGE_UP"] = "PageUp";
    Keys["PAGE_DOWN"] = "PageDown";
    Keys["ESCAPE"] = "Escape";
    Keys["W"] = "KeyW";
    Keys["F"] = "KeyF";
    Keys["A"] = "KeyA";
    Keys["P"] = "KeyP";
    Keys["S"] = "KeyS";
    Keys["D"] = "KeyD";
    Keys["R"] = "KeyR";
    Keys["DIGIT_1"] = "Digit1";
    Keys["DIGIT_2"] = "Digit2";
    Keys["DIGIT_3"] = "Digit3";
    Keys["DIGIT_4"] = "Digit4";
    Keys["DIGIT_5"] = "Digit5";
    Keys["DIGIT_6"] = "Digit6";
    Keys["DIGIT_7"] = "Digit7";
    Keys["DIGIT_8"] = "Digit8";
    Keys["DIGIT_9"] = "Digit9";
    Keys["DIGIT_0"] = "Digit0";
})(Keys = exports.Keys || (exports.Keys = {}));
var KeysOld = (function () {
    function KeysOld() {
    }
    KeysOld.ENTER = 13;
    KeysOld.TAB = 9;
    KeysOld.W = 87;
    KeysOld.A = 65;
    KeysOld.S = 83;
    KeysOld.D = 68;
    KeysOld.Q = 81;
    KeysOld.E = 69;
    KeysOld.F = 70;
    KeysOld.LCONTROL = 17;
    KeysOld.ESCAPE = 27;
    KeysOld.LALT = 18;
    KeysOld.LSHIFT = 16;
    KeysOld.SPACE = 32;
    KeysOld.ARROW_UP = 38;
    KeysOld.ARROW_DOWN = 40;
    KeysOld.ARROW_RIGHT = 39;
    KeysOld.ARROW_LEFT = 37;
    return KeysOld;
}());
exports.KeysOld = KeysOld;


/***/ }),

/***/ 8037:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1351), exports);
__exportStar(__webpack_require__(1566), exports);
__exportStar(__webpack_require__(8650), exports);
__exportStar(__webpack_require__(9089), exports);
__exportStar(__webpack_require__(6162), exports);
__exportStar(__webpack_require__(9043), exports);


/***/ }),

/***/ 9089:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MissingParameterError = void 0;
var MissingParameterError = (function (_super) {
    __extends(MissingParameterError, _super);
    function MissingParameterError(parameterName) {
        return _super.call(this, "Parameter " + parameterName + " must be defined") || this;
    }
    return MissingParameterError;
}(Error));
exports.MissingParameterError = MissingParameterError;


/***/ }),

/***/ 6162:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoDatabaseConnectionError = void 0;
var NoDatabaseConnectionError = (function (_super) {
    __extends(NoDatabaseConnectionError, _super);
    function NoDatabaseConnectionError() {
        return _super.call(this, "Database connection is no established") || this;
    }
    return NoDatabaseConnectionError;
}(Error));
exports.NoDatabaseConnectionError = NoDatabaseConnectionError;


/***/ }),

/***/ 1351:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotBrowserException = void 0;
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
exports.NotBrowserException = NotBrowserException;


/***/ }),

/***/ 1566:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NullPointerException = void 0;
var NullPointerException = (function (_super) {
    __extends(NullPointerException, _super);
    function NullPointerException(text) {
        var _this = _super.call(this, "Null pointer exception at line" + (typeof text === "string" ? ": " + text : "!")) || this;
        Object.setPrototypeOf(_this, NullPointerException.prototype);
        return _this;
    }
    return NullPointerException;
}(Error));
exports.NullPointerException = NullPointerException;


/***/ }),

/***/ 8650:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WrongParameterException = void 0;
var WrongParameterException = (function (_super) {
    __extends(WrongParameterException, _super);
    function WrongParameterException(text) {
        var _this = _super.call(this, "Wrong parameter exception at line" + (typeof text === "string" ? ": " + text : "!")) || this;
        Object.setPrototypeOf(_this, WrongParameterException.prototype);
        return _this;
    }
    return WrongParameterException;
}(Error));
exports.WrongParameterException = WrongParameterException;


/***/ }),

/***/ 9043:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WrongTypeException = void 0;
var WrongTypeException = (function (_super) {
    __extends(WrongTypeException, _super);
    function WrongTypeException(requiredType, text) {
        var _this = _super.call(this, "Wrong type exception at line. " + typeof requiredType + " must be " + requiredType + (typeof text === "string" ? ": " + text : "!")) || this;
        Object.setPrototypeOf(_this, WrongTypeException.prototype);
        return _this;
    }
    return WrongTypeException;
}(Error));
exports.WrongTypeException = WrongTypeException;


/***/ }),

/***/ 3607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1716), exports);


/***/ }),

/***/ 3081:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7533), exports);
__exportStar(__webpack_require__(7153), exports);
__exportStar(__webpack_require__(5015), exports);
__exportStar(__webpack_require__(9281), exports);
__exportStar(__webpack_require__(5079), exports);
__exportStar(__webpack_require__(5870), exports);
__exportStar(__webpack_require__(2343), exports);
__exportStar(__webpack_require__(1433), exports);


/***/ }),

/***/ 7533:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7153:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5015:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9281:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
var models_1 = __webpack_require__(7554);
var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Vector2, "ZERO", {
        get: function () {
            return new Vector2(0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "UP", {
        get: function () {
            return new Vector2(0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "LEFT", {
        get: function () {
            return new Vector2(-1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "BOTTOM", {
        get: function () {
            return new Vector2(0, -1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "RIGHT", {
        get: function () {
            return new Vector2(1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "ONE", {
        get: function () {
            return new Vector2(1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "avg", {
        get: function () {
            return this.sum / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "sum", {
        get: function () {
            return this.x + this.y;
        },
        enumerable: false,
        configurable: true
    });
    Vector2.fromArray = function (val) {
        return new Vector2(val[0], val[1]);
    };
    Object.defineProperty(Vector2.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: false,
        configurable: true
    });
    Vector2.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y;
    };
    Vector2.sub = function (vecA, vecB) {
        return new Vector2(vecA.x - vecB.x, vecA.y - vecB.y);
    };
    Vector2.from = function (valA, valB) {
        if (valB === void 0) { valB = valA; }
        return new Vector2(valA, valB);
    };
    Vector2.isVisible = function (obsX, obsY, angle, cutOff, px, py) {
        return angle - Math.atan2(py - obsY, px - obsX) <= cutOff;
    };
    Vector2.createOutlineRange = function (points) {
        var min = {
            x: Infinity,
            y: Infinity,
        };
        var max = {
            x: -Infinity,
            y: -Infinity,
        };
        points.forEach(function (p) {
            if (p.x < min.x) {
                min.x = p.x;
            }
            if (p.y < min.y) {
                min.y = p.y;
            }
            if (p.x > max.x) {
                max.x = p.x;
            }
            if (p.y > max.y) {
                max.y = p.y;
            }
        });
        return new models_1.Range(min, max);
    };
    Vector2.angleBetweenPoints = function (obsX, obsY, px1, py1, px2, py2) {
        return Math.atan2(py1 - obsY, px1 - obsX) - Math.atan2(py2 - obsY, px2 - obsX);
    };
    Vector2.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y);
    };
    Vector2.sum = function (vecA, vecB) {
        return new Vector2(vecA.x + vecB.x, vecA.y + vecB.y);
    };
    Vector2.min = function (vecA, vecB) {
        return new Vector2(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y));
    };
    Vector2.max = function (vecA, vecB) {
        return new Vector2(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y));
    };
    Vector2.dist = function (vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2));
    };
    Vector2.prototype.isZero = function () {
        return this.x === 0 && this.y === 0;
    };
    Vector2.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.normalize = function () {
        var length = this.length;
        this.x /= length;
        this.y /= length;
        return this;
    };
    Vector2.mulNum = function (vecA, val) {
        return new Vector2(vecA.x * val, vecA.y * val);
    };
    Vector2.prototype.mul = function (value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
        }
        return this;
    };
    Vector2.prototype.add = function (value) {
        if (typeof value === "number") {
            this.x += value;
            this.y += value;
        }
        else {
            this.x += value.x;
            this.y += value.y;
        }
        return this;
    };
    Vector2.prototype.sub = function (value) {
        if (typeof value === "number") {
            this.x -= value;
            this.y -= value;
        }
        else {
            this.x -= value.x;
            this.y -= value.y;
        }
        return this;
    };
    Vector2.prototype.div = function (value) {
        if (typeof value === "number") {
            this.x /= value;
            this.y /= value;
        }
        else {
            this.x /= value.x;
            this.y /= value.y;
        }
        return this;
    };
    Vector2.prototype.setData = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    };
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ }),

/***/ 5870:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2f = void 0;
var process = function (op, arg1, arg2) {
    if (typeof arg2 === "number") {
        op(arg1, arg2);
    }
    else if (typeof arg1 === "number") {
        op(arg1, arg1);
    }
    else {
        op(arg1.x, arg1.y);
    }
};
var Vector2f = (function () {
    function Vector2f(x, y) {
        this.y = 0;
        this.x = 0;
        this.x = x;
        this.y = y;
    }
    Vector2f.prototype.set = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x = x;
            _this.y = y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.add = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x += x;
            _this.y += y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.div = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x /= x;
            _this.y /= y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.mul = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x *= x;
            _this.y *= y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.sub = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x -= x;
            _this.y -= y;
        }, arg1, arg2);
        return this;
    };
    return Vector2f;
}());
exports.Vector2f = Vector2f;


/***/ }),

/***/ 2343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
var vector2_1 = __webpack_require__(5079);
var Vector3 = (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Vector3, "UP", {
        get: function () {
            return new Vector3(0, 1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "ZERO", {
        get: function () {
            return new Vector3(0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "ONE", {
        get: function () {
            return new Vector3(1, 1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "avg", {
        get: function () {
            return (this.x + this.y + this.z) / 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        enumerable: false,
        configurable: true
    });
    Vector3.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
    };
    Vector3.sub = function (vecA, vecB) {
        return new Vector3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z);
    };
    Vector3.add = function (vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    };
    Vector3.sum = function (vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    };
    Vector3.mulNum = function (vecA, val) {
        return new Vector3(vecA.x * val, vecA.y * val, vecA.z * val);
    };
    Vector3.mul = function (vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    };
    Vector3.min = function (vecA, vecB) {
        return new Vector3(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y), Math.min(vecA.z, vecB.z));
    };
    Vector3.createFromSphericalCoords = function (radius, phi, theta) {
        var sinPhiRadius = Math.sin(phi) * radius;
        var x = sinPhiRadius * Math.sin(theta);
        var y = Math.cos(phi) * radius;
        var z = sinPhiRadius * Math.cos(theta);
        return new Vector3(x, y, z);
    };
    Vector3.max = function (vecA, vecB) {
        return new Vector3(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y), Math.max(vecA.z, vecB.z));
    };
    Vector3.dist = function (vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2) + Math.pow(vecA.z - vecB.z, 2));
    };
    Vector3.normalize = function (vec) {
        var length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;
        return vec;
    };
    Object.defineProperty(Vector3.prototype, "xy", {
        get: function () {
            return new vector2_1.Vector2(this.x, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Vector3.from = function (valA, valB, valC) {
        if (valB === void 0) { valB = valA; }
        if (valC === void 0) { valC = valA; }
        return new Vector3(valA, valB, valC);
    };
    Vector3.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z);
    };
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    Vector3.prototype.sum = function () {
        return this.x + this.y + this.z;
    };
    Vector3.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Vector3.prototype.clone = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    Vector3.prototype.normalize = function () {
        var length = this.length;
        this.x /= length;
        this.y /= length;
        this.z /= length;
        return this;
    };
    Vector3.prototype.mul = function (value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
            this.z *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
            this.z *= value.z;
        }
        return this;
    };
    Vector3.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    };
    Vector3.prototype.cross = function (v) {
        var localX = this.y * v.z - this.z * v.y;
        var localY = this.z * v.x - this.x * v.z;
        var localZ = this.x * v.y - this.y * v.x;
        return new Vector3(localX, localY, localZ);
    };
    Vector3.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    Vector3.prototype.sub = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    };
    Vector3.prototype.setData = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    };
    Vector3.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
    };
    Object.defineProperty(Vector3.prototype, "yx", {
        get: function () {
            return new vector2_1.Vector2(this.y, this.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "yz", {
        get: function () {
            return new vector2_1.Vector2(this.y, this.z);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "zy", {
        get: function () {
            return new vector2_1.Vector2(this.z, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "xz", {
        get: function () {
            return new vector2_1.Vector2(this.x, this.z);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "zx", {
        get: function () {
            return new vector2_1.Vector2(this.z, this.x);
        },
        enumerable: false,
        configurable: true
    });
    Vector3.fromArray = function (value) {
        return new Vector3(value[0], value[1], value[2]);
    };
    return Vector3;
}());
exports.Vector3 = Vector3;


/***/ }),

/***/ 1433:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector4 = void 0;
var Vector4 = (function () {
    function Vector4(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Object.defineProperty(Vector4, "ZERO", {
        get: function () {
            return new Vector4(0, 0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4, "ONE", {
        get: function () {
            return new Vector4(1, 1, 1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Vector4.fromArray = function (val) {
        return new Vector4(val[0], val[1], val[2], val[3]);
    };
    Vector4.from = function (valA, valB, valC, valD) {
        if (valB === void 0) { valB = valA; }
        if (valC === void 0) { valC = valB; }
        if (valD === void 0) { valD = valC; }
        return new Vector4(valA, valB, valC, valD);
    };
    Object.defineProperty(Vector4.prototype, "avg", {
        get: function () {
            return (this.x + this.y + this.z + this.w) / 4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        },
        enumerable: false,
        configurable: true
    });
    Vector4.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z && vecA.w === vecB.w;
    };
    Vector4.min = function (vecA, vecB) {
        return new Vector4(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y), Math.min(vecA.z, vecB.z), Math.min(vecA.w, vecB.w));
    };
    Vector4.max = function (vecA, vecB) {
        return new Vector4(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y), Math.max(vecA.z, vecB.z), Math.max(vecA.w, vecB.w));
    };
    Vector4.dist = function (vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) +
            Math.pow(vecA.y - vecB.y, 2) +
            Math.pow(vecA.z - vecB.z, 2) +
            Math.pow(vecA.w - vecB.w, 2));
    };
    Vector4.normalize = function (vec) {
        var length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z + vec.w * vec.w);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;
        vec.w /= length;
        return vec;
    };
    Vector4.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z) && !isNaN(item.w);
    };
    Vector4.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    Vector4.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Vector4.prototype.clone = function () {
        return new Vector4(this.x, this.y, this.z, this.w);
    };
    Vector4.prototype.normalize = function () {
        var length = this.length;
        this.x /= length;
        this.y /= length;
        this.z /= length;
        this.w /= length;
        return this;
    };
    Vector4.prototype.mul = function (value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
            this.z *= value;
            this.w *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
            this.z *= value.z;
            this.w *= value.w;
        }
        return this;
    };
    Vector4.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        this.w += vec.w;
        return this;
    };
    Vector4.prototype.sub = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        this.w -= vec.w;
        return this;
    };
    Vector4.prototype.setData = function (x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    };
    Vector4.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        this.w = vec.w;
        return this;
    };
    return Vector4;
}());
exports.Vector4 = Vector4;


/***/ }),

/***/ 4795:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ajax = void 0;
var AjaxWrapper = (function () {
    function AjaxWrapper(ajaxHandler) {
        this.ajaxHandler = ajaxHandler;
    }
    return AjaxWrapper;
}());
function ajax(_a) {
    var _b = _a.method, method = _b === void 0 ? "GET" : _b, url = _a.url, onResponse = _a.onResponse, content = _a.content, _c = _a.headers, headers = _c === void 0 ? {} : _c;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (!(request.readyState === 4 && (request.status === 200 || request.status === 201))) {
            return;
        }
        if (typeof onResponse === "function") {
            onResponse(request.responseText);
        }
    };
    request.open(method, url, true);
    Object.entries(headers).forEach(function (entry) { return request.setRequestHeader(entry[0], entry[1]); });
    request.send(content);
    return new AjaxWrapper(request);
}
exports.ajax = ajax;


/***/ }),

/***/ 2515:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatFileSize = void 0;
var FILE_SIZE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
var FILE_SIZE_UNITS_LONG = ["Bytes", "Kilobytes", "Megabytes", "Gigabytes", "Pettabytes", "Exabytes", "Zettabytes", "Yottabytes"];
function formatFileSize(sizeInBytes, longForm) {
    if (longForm === void 0) { longForm = false; }
    var units = longForm
        ? FILE_SIZE_UNITS_LONG
        : FILE_SIZE_UNITS;
    var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);
    var size = sizeInBytes / Math.pow(1024, power);
    var formattedSize = Math.round(size * 100) / 100;
    var unit = units[power];
    return size ? formattedSize + " " + unit : "0";
}
exports.formatFileSize = formatFileSize;


/***/ }),

/***/ 5118:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(680), exports);
__exportStar(__webpack_require__(4795), exports);
__exportStar(__webpack_require__(2515), exports);
__exportStar(__webpack_require__(7021), exports);
__exportStar(__webpack_require__(7525), exports);


/***/ }),

/***/ 7525:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAsNumber = exports.getAsString = void 0;
exports.getAsString = function (key) {
    if (typeof key !== "string") {
        throw new Error("Variable with value " + key + " is not a string");
    }
    return key;
};
exports.getAsNumber = function (key) {
    if (typeof key !== "number") {
        throw new Error("Variable with value " + key + " is not a number");
    }
    return key;
};


/***/ }),

/***/ 7021:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.simpleLoop = void 0;
function simpleLoop(callback, requiredFps) {
    if (requiredFps === void 0) { requiredFps = 60; }
    var start;
    var req;
    var requiredDuration = 1000 / requiredFps;
    var tick = function (time) {
        var duration = time - start;
        start = time;
        req = requestAnimationFrame(tick);
        callback((duration / requiredDuration) || 1);
    };
    req = requestAnimationFrame(tick);
    return {
        stop: function () { return cancelAnimationFrame(req); },
    };
}
exports.simpleLoop = simpleLoop;


/***/ }),

/***/ 680:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlovakStemmer = void 0;
function removePredpona(char) {
    if (char.length > 6 && char.startsWith("naj")) {
        return char.substr(3, char.length);
    }
    return char;
}
function removeCase(key) {
    var len = key.length;
    if (len > 9 && key.endsWith("ejšieho")
        || key.endsWith("ejšiemu")) {
        return key.substring(0, len - 7);
    }
    if (len > 8 && (key.endsWith("ejších") ||
        key.endsWith("encoch") ||
        key.endsWith("ejšími") ||
        key.endsWith("encami"))) {
        return key.substring(0, len - 6);
    }
    if (len > 7 && (key.endsWith("ejšia") ||
        key.endsWith("atami") ||
        key.endsWith("atách") ||
        key.endsWith("eniec") ||
        key.endsWith("encom") ||
        key.endsWith("ejšom") ||
        key.endsWith("ejším") ||
        key.endsWith("ejšej") ||
        key.endsWith("ejšou") ||
        key.endsWith("ejšiu") ||
        key.endsWith("ejšie"))) {
        return key.substring(0, len - 5);
    }
    if (len > 6 &&
        (key.endsWith("eťom") ||
            key.endsWith("iami") ||
            key.endsWith("atám") ||
            key.endsWith("aťom") ||
            key.endsWith("ovia") ||
            key.endsWith("iach") ||
            key.endsWith("atám") ||
            key.endsWith("ence") ||
            key.endsWith("ieho") ||
            key.endsWith("iemu") ||
            key.endsWith("ieme") ||
            key.endsWith("iete") ||
            key.endsWith("ejší") ||
            key.endsWith("enie"))) {
        return key.substring(0, len - 4);
    }
    if (len > 5 &&
        (key.endsWith("ich") ||
            key.endsWith("eho") ||
            key.endsWith("ych") ||
            key.endsWith("ích") ||
            key.endsWith("ého") ||
            key.endsWith("emi") ||
            key.endsWith("ému") ||
            key.endsWith("emu") ||
            key.endsWith("ími") ||
            key.endsWith("imi") ||
            key.endsWith("ách") ||
            key.endsWith("ých") ||
            key.endsWith("ami") ||
            key.endsWith("ovi") ||
            key.endsWith("ieť") ||
            key.endsWith("ieš") ||
            key.endsWith("ejú") ||
            key.endsWith("ajú") ||
            key.endsWith("ujú") ||
            key.endsWith("ejú") ||
            key.endsWith("eme") ||
            key.endsWith("íte") ||
            key.endsWith("íme") ||
            key.endsWith("ými") ||
            key.endsWith("ymi") ||
            key.endsWith("ach") ||
            key.endsWith("iam") ||
            key.endsWith("iac") ||
            key.endsWith("ite") ||
            key.endsWith("ili") ||
            key.endsWith("ila") ||
            key.endsWith("ilo") ||
            key.endsWith("ime") ||
            key.endsWith("och"))) {
        return key.substring(0, len - 3);
    }
    if (len > 4 &&
        (key.endsWith("ím") ||
            key.endsWith("ám") ||
            key.endsWith("am") ||
            key.endsWith("us") ||
            key.endsWith("ým") ||
            key.endsWith("ym") ||
            key.endsWith("mi") ||
            key.endsWith("ou") ||
            key.endsWith("om") ||
            key.endsWith("ej") ||
            key.endsWith("ov") ||
            key.endsWith("ia") ||
            key.endsWith("ie") ||
            key.endsWith("iu") ||
            key.endsWith("im") ||
            key.endsWith("ho") ||
            key.endsWith("mu") ||
            key.endsWith("me") ||
            key.endsWith("te") ||
            key.endsWith("ať") ||
            key.endsWith("aš") ||
            key.endsWith("úť") ||
            key.endsWith("iť") ||
            key.endsWith("íš") ||
            key.endsWith("iš") ||
            key.endsWith("il") ||
            key.endsWith("úc") ||
            key.endsWith("eš"))) {
        return key.substring(0, len - 2);
    }
    if (len > 3) {
        switch (key[len - 1]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "ú":
            case "y":
            case "á":
            case "é":
            case "í":
            case "ý":
                return key.substring(0, len - 1);
        }
    }
    return key;
}
function removePossessives(s) {
    var len = s.length;
    if (len > 5 && s.endsWith("in") ||
        s.endsWith("ov")) {
        return s.substr(0, len - 2);
    }
    return s;
}
function normalize(s) {
    var len = s.length;
    switch (s[len - 1]) {
        case "c":
        case "č":
            return s.replace(/./g, function (e, i) { return i === len - 1 ? e : "k"; });
        case "ľ":
            return s.replace(/./g, function (e, i) { return i === len - 1 ? e : "l"; });
        case "ň":
            return s.replace(/./g, function (e, i) { return i === len - 1 ? e : "n"; });
        case "ť":
            return s.replace(/./g, function (e, i) { return i === len - 1 ? e : "t"; });
    }
    if (len > 3 && s[len - 3] === "i" && (s[len - 2] === "e" || s[len - 2] === "a" || s[len - 2] === "u")) {
        return s.replace(/./g, function (e, i) {
            if (i === len - 3) {
                return s[len - 2];
            }
            if (i === len - 2) {
                return s[len - 1];
            }
            return e;
        });
    }
    return s;
}
var SlovakStemmer = (function () {
    function SlovakStemmer() {
    }
    SlovakStemmer.steme = function (word) {
        var result = removePossessives(removeCase(removePredpona(word)));
        if (result.length) {
            return normalize(result);
        }
        return result;
    };
    return SlovakStemmer;
}());
exports.SlovakStemmer = SlovakStemmer;


/***/ }),

/***/ 2472:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
var utils_1 = __webpack_require__(5928);
function checkColorValue(value) {
    console.assert(value >= 0);
    console.assert(value <= 255);
}
var Color = (function () {
    function Color(red, green, blue, alpha) {
        if (alpha === void 0) { alpha = 255; }
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        checkColorValue(red);
        checkColorValue(green);
        checkColorValue(blue);
        checkColorValue(alpha);
    }
    Object.defineProperty(Color.prototype, "rgb", {
        get: function () {
            return [this.red, this.green, this.blue];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rgbString", {
        get: function () {
            return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rgba", {
        get: function () {
            return [this.red, this.green, this.blue, this.alpha];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hex", {
        get: function () {
            return utils_1.rgb2hex(Math.floor(this.red), Math.floor(this.green), Math.floor(this.blue));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "int", {
        get: function () {
            return utils_1.rgb2int(this.red, this.green, this.blue);
        },
        enumerable: false,
        configurable: true
    });
    Color.fromHex = function (color) {
        var value = utils_1.hex2rgb(color);
        return new (Color.bind.apply(Color, __spreadArrays([void 0], value)))();
    };
    Color.fromInt = function (color) {
        var value = utils_1.int2rgb(color);
        return new (Color.bind.apply(Color, __spreadArrays([void 0], value)))();
    };
    Color.prototype.normalized = function () {
        if (this.red > 1 || this.green > 1 || this.blue > 1 || this.alpha > 1) {
            return new Color(this.red / 255, this.green / 255, this.blue / 255, this.alpha / 255);
        }
        return this;
    };
    Color.BLACK = new Color(0, 0, 0);
    Color.WHITE = new Color(255, 255, 255);
    Color.GRAY = new Color(128, 128, 128);
    Color.RED = new Color(255, 0, 0);
    Color.GREEN = new Color(0, 255, 0);
    Color.BLUE = new Color(0, 0, 255);
    return Color;
}());
exports.Color = Color;


/***/ }),

/***/ 7004:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenderClass = exports.parseGender = exports.Gender = void 0;
var maleRegexp = /^(male|man|muz|boy|chlapec|m)$/g;
var femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;
var Gender;
(function (Gender) {
    Gender["MAN"] = "MAN";
    Gender["WOMAN"] = "WOMAN";
})(Gender = exports.Gender || (exports.Gender = {}));
function parseGender(gender) {
    if (!gender) {
        return null;
    }
    var genderLowerCase = gender.trim().toLowerCase().replace("ž", "z").replace("č", "c");
    if (genderLowerCase.match(maleRegexp)) {
        return Gender.MAN;
    }
    if (genderLowerCase.match(femaleRegexp)) {
        return Gender.WOMAN;
    }
    return null;
}
exports.parseGender = parseGender;
var GenderClass = (function () {
    function GenderClass() {
    }
    GenderClass.parse = parseGender;
    return GenderClass;
}());
exports.GenderClass = GenderClass;


/***/ }),

/***/ 7554:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7004), exports);
__exportStar(__webpack_require__(2472), exports);
__exportStar(__webpack_require__(7486), exports);
__exportStar(__webpack_require__(182), exports);
__exportStar(__webpack_require__(5863), exports);


/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Path = void 0;
var Path = (function () {
    function Path(points) {
        this.points = points;
        if (points.length < 2) {
            throw new Error("Cannot create path with less than 2 points");
        }
    }
    Object.defineProperty(Path.prototype, "length", {
        get: function () {
            return this.points.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Path.prototype, "first", {
        get: function () {
            return this.points[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Path.prototype, "last", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Path.prototype.getPoint = function (index) {
        return this.points[index];
    };
    return Path;
}());
exports.Path = Path;


/***/ }),

/***/ 182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range = void 0;
var utils_1 = __webpack_require__(5928);
var color_model_1 = __webpack_require__(2472);
var Range = (function () {
    function Range(min, max) {
        if (max === void 0) { max = min; }
        this.min = min;
        this.max = max;
    }
    Range.random = function (range) {
        return utils_1.randomFloatBetween(range.min, range.max);
    };
    Range.randomVector = function (range) {
        return {
            x: utils_1.randomFloatBetween(range.min.x, range.max.x),
            y: utils_1.randomFloatBetween(range.min.y, range.max.y),
        };
    };
    Range.randomColorF = function (range) {
        return new color_model_1.Color(utils_1.randomFloatBetween(range.min.red, range.max.red), utils_1.randomFloatBetween(range.min.green, range.max.green), utils_1.randomFloatBetween(range.min.blue, range.max.blue), utils_1.randomFloatBetween(range.min.alpha, range.max.alpha));
    };
    Range.randomColorI = function (range) {
        return new color_model_1.Color(utils_1.randomIntBetween(range.min.red, range.max.red), utils_1.randomIntBetween(range.min.green, range.max.green), utils_1.randomIntBetween(range.min.blue, range.max.blue), utils_1.randomIntBetween(range.min.alpha, range.max.alpha));
    };
    return Range;
}());
exports.Range = Range;


/***/ }),

/***/ 7486:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDefaultTransform = void 0;
function getDefaultTransform() {
    return {
        offset: {
            x: 0,
            y: 0,
        },
        scale: 1,
        rotation: 0,
    };
}
exports.getDefaultTransform = getDefaultTransform;


/***/ }),

/***/ 6917:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fixSphere = exports.fixPosSize = exports.fixXYWH = void 0;
function fixXYWH(minMax, xywh) {
    var result = { x: xywh.x, y: xywh.y };
    if (xywh.x < minMax.min.x) {
        result.x = minMax.min.x;
    }
    else if (xywh.x + xywh.w > minMax.max.x) {
        result.x = minMax.max.x - xywh.w;
    }
    if (xywh.y < minMax.min.y) {
        result.y = minMax.min.y;
    }
    else if (xywh.y + xywh.h > minMax.max.y) {
        result.y = minMax.max.y - xywh.h;
    }
    return result;
}
exports.fixXYWH = fixXYWH;
function fixPosSize(minMax, target) {
    var result = __assign({}, target.position);
    if (target.position.x < minMax.min.x) {
        result.x = minMax.min.x;
    }
    else if (target.position.x + target.size.x > minMax.max.x) {
        result.x = minMax.max.x - target.size.x;
    }
    if (target.position.y < minMax.min.y) {
        result.y = minMax.min.y;
    }
    else if (target.position.y + target.size.y > minMax.max.y) {
        result.y = minMax.max.y - target.size.y;
    }
    return result;
}
exports.fixPosSize = fixPosSize;
function fixSphere(minMax, sphere) {
    var result = __assign({}, sphere.center);
    var halfRadius = sphere.radius / 2;
    if (sphere.center.x - halfRadius < minMax.min.x) {
        result.x = minMax.min.x + halfRadius;
    }
    else if (sphere.center.x + halfRadius > minMax.max.x) {
        result.x = minMax.max.x - halfRadius;
    }
    if (sphere.center.y - halfRadius < minMax.min.y) {
        result.y = minMax.min.y + halfRadius;
    }
    else if (sphere.center.y + halfRadius > minMax.max.y) {
        result.y = minMax.max.y - halfRadius;
    }
    return result;
}
exports.fixSphere = fixSphere;


/***/ }),

/***/ 3438:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointLine2dClosest = void 0;
function pointLine2dClosest(sx1, sy1, sx2, sy2, px, py) {
    var xDelta = sx2 - sx1;
    var yDelta = sy2 - sy1;
    var u = ((px - sx1) * xDelta + (py - sy1) * yDelta) / (xDelta * xDelta + yDelta * yDelta);
    if (u < 0) {
        return {
            x: sx1,
            y: sy1,
        };
    }
    if (u > 1) {
        return {
            x: sx2,
            y: sy2,
        };
    }
    return {
        x: sx1 + u * xDelta,
        y: sy1 + u * yDelta,
    };
}
exports.pointLine2dClosest = pointLine2dClosest;


/***/ }),

/***/ 9890:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getClosestPointOnLine = void 0;
function getClosestPointOnLine(sx1, sy1, sz1, sx2, sy2, sz2, px, py, pz) {
    var xDelta = sx2 - sx1;
    var yDelta = sy2 - sy1;
    var zDelta = sz2 - sz1;
    var u = ((px - sx1) * xDelta + (py - sy1) * yDelta + (pz - sz1) * zDelta);
    u /= (xDelta * xDelta + yDelta * yDelta + zDelta * zDelta);
    if (u < 0) {
        return {
            x: sx1,
            y: sy1,
            z: sz1,
        };
    }
    if (u > 1) {
        return {
            x: sx2,
            y: sy2,
            z: sz2,
        };
    }
    return {
        x: sx1 + u * xDelta,
        y: sy1 + u * yDelta,
        z: sz1 + u * zDelta,
    };
}
exports.getClosestPointOnLine = getClosestPointOnLine;


/***/ }),

/***/ 2899:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointCircle2dCollision = exports.pointRectMinMax2dCollision = exports.pointRect2dCollision = exports.circleCircle2dCollision = exports.rectRect2dCollision = exports.lineLine2dCollision = exports.lineRectangle2dCollision = exports.circleRect2dCollision = void 0;
var distances_2d_1 = __webpack_require__(7619);
function circleRect2dCollision(cPosX, cPosY, cRadius, rPosX, rPosY, rSizeX, rSizeY) {
    var circleDistanceX = Math.abs(cPosX - rPosX);
    var circleDistanceY = Math.abs(cPosY - rPosY);
    if (circleDistanceX > rSizeX / 2 + cRadius) {
        return false;
    }
    if (circleDistanceY > rSizeY / 2 + cRadius) {
        return false;
    }
    if (circleDistanceX <= rSizeX / 2) {
        return true;
    }
    if (circleDistanceY <= rSizeY / 2) {
        return true;
    }
    var cornerDistanceSQ = Math.pow(circleDistanceX - rPosX / 2, 2) +
        Math.pow(circleDistanceY - rPosY / 2, 2);
    return cornerDistanceSQ <= Math.pow(cRadius, 2);
}
exports.circleRect2dCollision = circleRect2dCollision;
function lineRectangle2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX, bPosY, bSizeX, bSizeY) {
    return pointRect2dCollision(aStartX, aStartY, bPosX, bPosY, bSizeX, bSizeY) ||
        pointRect2dCollision(aEndX, aEndY, bPosX, bPosY, bSizeX, bSizeY) ||
        lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX, bPosY, bPosX + bSizeX, bPosY + bSizeY) ||
        lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX + bSizeX, bPosY, bPosX, bPosY + bSizeY);
}
exports.lineRectangle2dCollision = lineRectangle2dCollision;
function lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bStartX, bStartY, bEndX, bEndY) {
    var denominator = (aEndX - aStartX) * (bEndY - bStartY) - (aEndY - aStartY) * (bEndX - bStartX);
    var numerator1 = (aStartY - bStartY) * (bEndX - bStartX) - (aStartX - bStartX) * (bEndY - bStartY);
    var numerator2 = (aStartY - bStartY) * (aEndX - aStartX) - (aStartX - bStartX) * (aEndY - aStartY);
    if (denominator === 0) {
        return numerator1 === 0 && numerator2 === 0;
    }
    var r = numerator1 / denominator;
    var s = numerator2 / denominator;
    return r >= 0 && r <= 1 && (s >= 0 && s <= 1);
}
exports.lineLine2dCollision = lineLine2dCollision;
function rectRect2dCollision(ax, ay, aw, ah, bx, by, bw, bh) {
    return bx + bw >= ax && by + bh >= ay && bx <= ax + aw && by <= ay + ah;
}
exports.rectRect2dCollision = rectRect2dCollision;
function circleCircle2dCollision(aX, aY, aRadius, bX, bY, bRadius) {
    return distances_2d_1.pointPoint2dDistance(aX, aY, bX, bY) <= aRadius + bRadius;
}
exports.circleCircle2dCollision = circleCircle2dCollision;
function pointRect2dCollision(pointX, pointY, rectX, rectY, rectW, rectH) {
    return pointX >= rectX &&
        pointY >= rectY &&
        pointX <= rectX + rectW &&
        pointY <= rectY + rectH;
}
exports.pointRect2dCollision = pointRect2dCollision;
function pointRectMinMax2dCollision(pointX, pointY, minX, minY, maxX, maxY) {
    return pointX >= minX &&
        pointY >= minY &&
        pointX <= maxX &&
        pointY <= maxY;
}
exports.pointRectMinMax2dCollision = pointRectMinMax2dCollision;
function pointCircle2dCollision(pointX, pointY, circleX, circleY, circleRadius) {
    return distances_2d_1.pointPoint2dDistance(pointX, pointY, circleX, circleY) <= circleRadius;
}
exports.pointCircle2dCollision = pointCircle2dCollision;


/***/ }),

/***/ 8381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testSphereBoxMinMax = exports.sphereCylinder = exports.pointCylinder = exports.lineEllipsoid = exports.pointEllipsoid = exports.boxBox = exports.lineSphere2 = exports.lineBox = exports.pointBoxMinMax = exports.pointBox = exports.lineBox2 = exports.IntersectionType = exports.lineSphere = exports.pointSphere = exports.sphereSphere = void 0;
var math_1 = __webpack_require__(3081);
var closest_3d_1 = __webpack_require__(9890);
var distances_2d_1 = __webpack_require__(7619);
var distances_3d_1 = __webpack_require__(7239);
var intersects_3d_1 = __webpack_require__(3812);
function sphereSphere(ax, ay, az, aRadius, bx, by, bz, bRadius) {
    var dist = distances_3d_1.pointPoint3dDistance(ax, ay, az, bx, by, bz);
    return dist <= aRadius + bRadius;
}
exports.sphereSphere = sphereSphere;
function pointSphere(ax, ay, az, bx, by, bz, bRadius) {
    var dist = distances_3d_1.pointPoint3dDistance(ax, ay, az, bx, by, bz);
    return dist <= bRadius;
}
exports.pointSphere = pointSphere;
function lineSphere(ax, ay, az, bx, by, bz, sx, sy, sz, sr) {
    return distances_3d_1.pointLine3dDistance(ax, ay, az, bx, by, bz, sx, sy, sz) < sr;
}
exports.lineSphere = lineSphere;
var IntersectionType;
(function (IntersectionType) {
    IntersectionType["OUTSIDE"] = "OUTSIDE";
    IntersectionType["INSIDE"] = "INSIDE";
    IntersectionType["ONE_INTERSECTION"] = "ONE_INTERSECTION";
    IntersectionType["TWO_INTERSECTION"] = "TWO_INTERSECTION";
})(IntersectionType = exports.IntersectionType || (exports.IntersectionType = {}));
function lineBox2(p0X, p0Y, p0Z, p1X, p1Y, p1Z, minX, minY, minZ, maxX, maxY, maxZ, result) {
    var dirX = p1X - p0X;
    var dirY = p1Y - p0Y;
    var dirZ = p1Z - p0Z;
    var invDirX = 1 / dirX;
    var invDirY = 1 / dirY;
    var invDirZ = 1 / dirZ;
    var tNear;
    var tFar;
    var tymin;
    var tymax;
    var tzmin;
    var tzmax;
    if (invDirX >= 0) {
        tNear = (minX - p0X) * invDirX;
        tFar = (maxX - p0X) * invDirX;
    }
    else {
        tNear = (maxX - p0X) * invDirX;
        tFar = (minX - p0X) * invDirX;
    }
    if (invDirY >= 0) {
        tymin = (minY - p0Y) * invDirY;
        tymax = (maxY - p0Y) * invDirY;
    }
    else {
        tymin = (maxY - p0Y) * invDirY;
        tymax = (minY - p0Y) * invDirY;
    }
    if (tNear > tymax || tymin > tFar) {
        return IntersectionType.OUTSIDE;
    }
    if (invDirZ >= 0) {
        tzmin = (minZ - p0Z) * invDirZ;
        tzmax = (maxZ - p0Z) * invDirZ;
    }
    else {
        tzmin = (maxZ - p0Z) * invDirZ;
        tzmax = (minZ - p0Z) * invDirZ;
    }
    if (tNear > tzmax || tzmin > tFar) {
        return IntersectionType.OUTSIDE;
    }
    tNear = tymin > tNear || isNaN(tNear) ? tymin : tNear;
    tFar = tymax < tFar || isNaN(tFar) ? tymax : tFar;
    tNear = tzmin > tNear ? tzmin : tNear;
    tFar = tzmax < tFar ? tzmax : tFar;
    var type = IntersectionType.OUTSIDE;
    if (tNear < tFar && tNear <= 1 && tFar >= 0) {
        if (tNear > 0 && tFar > 1) {
            tFar = tNear;
            type = IntersectionType.ONE_INTERSECTION;
        }
        else if (tNear < 0 && tFar < 1) {
            tNear = tFar;
            type = IntersectionType.ONE_INTERSECTION;
        }
        else if (tNear < 0 && tFar > 1) {
            type = IntersectionType.INSIDE;
        }
        else {
            type = IntersectionType.TWO_INTERSECTION;
        }
        result.x = tNear;
        result.y = tFar;
    }
    return type;
}
exports.lineBox2 = lineBox2;
function pointBox(bx, by, bz, ax, ay, az, aWidth, aHeight, aDepth) {
    return ax < bx && ax + aWidth > bx &&
        ay < by && ay + aHeight > by &&
        az < bz && az + aDepth > bz;
}
exports.pointBox = pointBox;
function pointBoxMinMax(bPosX, bPosY, bPosZ, minX, minY, minZ, maxX, maxY, maxZ) {
    return bPosX >= minX && bPosY >= minY && bPosZ >= minZ &&
        bPosX <= maxX && bPosY >= minY && bPosZ <= maxZ;
}
exports.pointBoxMinMax = pointBoxMinMax;
function lineBox(a1x, a1y, a1z, a2x, a2y, a2z, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    return intersects_3d_1.vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ - bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ - bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ) ||
        intersects_3d_1.vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ - bSizeZ);
}
exports.lineBox = lineBox;
function lineSphere2(p0X, p0Y, p0Z, p1X, p1Y, p1Z, centerX, centerY, centerZ, radiusSquared) {
    var dX = p1X - p0X;
    var dY = p1Y - p0Y;
    var dZ = p1Z - p0Z;
    var nom = (centerX - p0X) * dX + (centerY - p0Y) * dY + (centerZ - p0Z) * dZ;
    var den = dX * dX + dY * dY + dZ * dZ;
    var u = nom / den;
    if (u < 0) {
        dX = p0X - centerX;
        dY = p0Y - centerY;
        dZ = p0Z - centerZ;
    }
    else if (u > 1) {
        dX = p1X - centerX;
        dY = p1Y - centerY;
        dZ = p1Z - centerZ;
    }
    else {
        var pX = p0X + u * dX;
        var pY = p0Y + u * dY;
        var pZ = p0Z + u * dZ;
        dX = pX - centerX;
        dY = pY - centerY;
        dZ = pZ - centerZ;
    }
    var dist = dX * dX + dY * dY + dZ * dZ;
    return dist <= radiusSquared;
}
exports.lineSphere2 = lineSphere2;
function boxBox(ax, ay, az, aw, ah, ad, bx, by, bz, bw, bh, bd) {
    return ax + aw > bx && bx + bw > ax &&
        ay + ah > by && by + bh > ay &&
        az + ad > bz && bz + bd > az;
}
exports.boxBox = boxBox;
function pointEllipsoid(ax, ay, az, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    var aposNewX = ax - bPosX;
    var aposNewY = ay - bPosY;
    var aposNewZ = az - bPosZ;
    var xa = (aposNewX * aposNewX) / (bSizeX * bSizeX);
    var yb = (aposNewY * aposNewY) / (bSizeY * bSizeY);
    var zc = (aposNewZ * aposNewZ) / (bSizeZ * bSizeZ);
    return xa + yb + zc <= 1;
}
exports.pointEllipsoid = pointEllipsoid;
function lineEllipsoid(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    var point = closest_3d_1.getClosestPointOnLine(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bPosX, bPosY, bPosZ);
    return pointEllipsoid(point.x, point.y, point.z, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ);
}
exports.lineEllipsoid = lineEllipsoid;
function pointCylinder(ax, ay, az, bx, by, bz, bRadius, bHeight) {
    var conditionOne = ay > by && ay < by + bHeight;
    var conditionTwo = distances_2d_1.pointPoint2dDistance(ax, az, bx, bz) < bRadius;
    return conditionOne && conditionTwo;
}
exports.pointCylinder = pointCylinder;
function sphereCylinder(ax, ay, az, aRadius, bx, by, bz, bRadius, bHeight) {
    var conditionOne = ay + aRadius > by && ay - aRadius < by + bHeight;
    var conditionTwo = distances_2d_1.pointPoint2dDistance(ax, az, bx, bz) < aRadius + bRadius;
    return conditionOne && conditionTwo;
}
exports.sphereCylinder = sphereCylinder;
function testSphereBoxMinMax(centerX, centerY, centerZ, radiusSquared, minX, minY, minZ, maxX, maxY, maxZ) {
    var radius2 = radiusSquared;
    var func = function (val) {
        var d = 0;
        if (val.z < val.x) {
            d = val.z - val.x;
        }
        else if (val.z > val.y) {
            d = val.z - val.y;
        }
        return d * d;
    };
    var params = new math_1.Vector3();
    radius2 -= func(params.setData(minX, maxX, centerX));
    radius2 -= func(params.setData(minY, maxY, centerY));
    radius2 -= func(params.setData(minZ, maxZ, centerZ));
    return radius2 >= 0;
}
exports.testSphereBoxMinMax = testSphereBoxMinMax;


/***/ }),

/***/ 7619:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointLineSqr2dDistance = exports.pointLine2dDistance = exports.pointCircleSqr2dDistance = exports.pointCircle2dDistance = exports.circleCircleSqr2dDistance = exports.circleCircle2dDistance = exports.pointPointSqr2dDistance = exports.pointPoint2dDistance = void 0;
function pointPoint2dDistance(ax, ay, bx, by) {
    return Math.sqrt(pointPointSqr2dDistance(ax, ay, bx, by));
}
exports.pointPoint2dDistance = pointPoint2dDistance;
function pointPointSqr2dDistance(ax, ay, bx, by) {
    var distX = ax - bx;
    var distY = ay - by;
    return distX * distX + distY * distY;
}
exports.pointPointSqr2dDistance = pointPointSqr2dDistance;
function circleCircle2dDistance(ax, ay, ar, bx, by, br) {
    return Math.max(pointPoint2dDistance(ax, ay, bx, by) - br - ar, 0);
}
exports.circleCircle2dDistance = circleCircle2dDistance;
function circleCircleSqr2dDistance(ax, ay, ar, bx, by, br) {
    return Math.max(pointPointSqr2dDistance(ax, ay, bx, by) - br - ar);
}
exports.circleCircleSqr2dDistance = circleCircleSqr2dDistance;
function pointCircle2dDistance(ax, ay, bx, by, br) {
    return Math.max(pointPoint2dDistance(ax, ay, bx, by) - br, 0);
}
exports.pointCircle2dDistance = pointCircle2dDistance;
function pointCircleSqr2dDistance(ax, ay, bx, by, br) {
    return Math.max(pointPointSqr2dDistance(ax, ay, bx, by) - br, 0);
}
exports.pointCircleSqr2dDistance = pointCircleSqr2dDistance;
function pointLine2dDistance(aX, aY, bX, bY, pX, pY) {
    return Math.sqrt(pointLineSqr2dDistance(aX, aY, bX, bY, pX, pY));
}
exports.pointLine2dDistance = pointLine2dDistance;
function pointLineSqr2dDistance(aX, aY, bX, bY, pX, pY) {
    var A = pX - aX;
    var B = pY - aY;
    var C = bX - aX;
    var D = bY - aY;
    var dot = A * C + B * D;
    var lengthSquare = C * C + D * D;
    var param = -1;
    if (lengthSquare !== 0) {
        param = dot / lengthSquare;
    }
    var xx;
    var yy;
    if (param < 0) {
        xx = aX;
        yy = aY;
    }
    else if (param > 1) {
        xx = bX;
        yy = bY;
    }
    else {
        xx = aX + param * C;
        yy = aY + param * D;
    }
    var dx = pX - xx;
    var dy = pY - yy;
    return dx * dx + dy * dy;
}
exports.pointLineSqr2dDistance = pointLineSqr2dDistance;


/***/ }),

/***/ 7239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vectorPoint3dDistance = exports.pointNormalPlane3dDistance = exports.pointLine3dDistance = exports.pointPointSqr3dDistance = exports.pointPoint3dDistance = void 0;
var math_1 = __webpack_require__(3081);
function pointPoint3dDistance(ax, ay, az, bx, by, bz) {
    return Math.sqrt(pointPointSqr3dDistance(ax, ay, az, bx, by, bz));
}
exports.pointPoint3dDistance = pointPoint3dDistance;
function pointPointSqr3dDistance(ax, ay, az, bx, by, bz) {
    var distX = ax - bx;
    var distY = ay - by;
    var distZ = az - bz;
    return distX * distX + distY * distY + distZ * distZ;
}
exports.pointPointSqr3dDistance = pointPointSqr3dDistance;
function pointLine3dDistance(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bCenterX, bCenterY, bCenterZ) {
    var aSubBx = aStartX - aEndX;
    var aSubBy = aStartY - aEndY;
    var aSubBz = aStartZ - aEndZ;
    var pSubBx = bCenterX - aEndX;
    var pSubBy = bCenterY - aEndY;
    var pSubBz = bCenterZ - aEndZ;
    var dotA = aSubBx * pSubBx + aSubBy * pSubBy + aSubBz * pSubBz;
    if (dotA < 0) {
        return pointPoint3dDistance(bCenterX, bCenterY, bCenterZ, aEndX, aEndY, aEndZ);
    }
    var bSubAx = aEndX - aStartX;
    var bSubAy = aEndY - aStartY;
    var bSubAz = aEndZ - aStartZ;
    var pSubAx = bCenterX - aStartX;
    var pSubAy = bCenterY - aStartY;
    var pSubAz = bCenterZ - aStartZ;
    var dotB = bSubAx * pSubAx + bSubAy * pSubAy + bSubAz * pSubAz;
    if (dotB < 0) {
        return pointPoint3dDistance(bCenterX, bCenterY, bCenterZ, aStartX, aStartY, aStartZ);
    }
    return vectorPoint3dDistance(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bCenterX, bCenterY, bCenterZ);
}
exports.pointLine3dDistance = pointLine3dDistance;
function pointNormalPlane3dDistance(aNormal, aPoint, bPoint) {
    var d = -math_1.Vector3.mul(aNormal, aPoint).sum();
    return Math.abs((math_1.Vector3.mul(aNormal, bPoint).sum() + d) / Math.sqrt(math_1.Vector3.mul(aNormal, aNormal).sum()));
}
exports.pointNormalPlane3dDistance = pointNormalPlane3dDistance;
function vectorPoint3dDistance(startX, startY, startZ, endX, endY, endZ, pointX, pointY, pointZ) {
    var startSubEndX = startX - endX;
    var startSubEndY = startY - endY;
    var startSubEndZ = startZ - endZ;
    var endSubPointX = endX - pointX;
    var endSubPointY = endY - pointY;
    var endSubPointZ = endZ - pointZ;
    var crossX = startSubEndY * endSubPointZ - startSubEndZ * endSubPointY;
    var crossY = startSubEndZ * endSubPointX - startSubEndX * endSubPointZ;
    var crossZ = startSubEndX * endSubPointY - startSubEndY * endSubPointX;
    var length1 = Math.sqrt(crossX * crossX + crossY * crossY + crossZ * crossZ);
    var length2 = Math.sqrt(startSubEndX * startSubEndX + startSubEndY * startSubEndY + startSubEndZ * startSubEndZ);
    return length1 / length2;
}
exports.vectorPoint3dDistance = vectorPoint3dDistance;


/***/ }),

/***/ 4991:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3438), exports);
__exportStar(__webpack_require__(9890), exports);
__exportStar(__webpack_require__(2899), exports);
__exportStar(__webpack_require__(8381), exports);
__exportStar(__webpack_require__(7619), exports);
__exportStar(__webpack_require__(7239), exports);
__exportStar(__webpack_require__(6917), exports);
__exportStar(__webpack_require__(9305), exports);
__exportStar(__webpack_require__(3812), exports);


/***/ }),

/***/ 3812:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vectorSquareIntersect3d_2 = exports.vectorSquareIntersect3d = void 0;
var math_1 = __webpack_require__(3081);
function vectorSquareIntersect3d(r1x, r1y, r1z, r2x, r2y, r2z, s1x, s1y, s1z, s2x, s2y, s2z, s3x, s3y, s3z) {
    return vectorSquareIntersect3d_2(new math_1.Vector3(r1x, r1y, r1z), new math_1.Vector3(r2x, r2y, r2z), new math_1.Vector3(s1x, s1y, s1z), new math_1.Vector3(s2x, s2y, s2z), new math_1.Vector3(s3x, s3y, s3z));
}
exports.vectorSquareIntersect3d = vectorSquareIntersect3d;
function vectorSquareIntersect3d_2(R1, R2, S1, S2, S3) {
    var dS21 = math_1.Vector3.sub(S2, S1);
    var dS31 = math_1.Vector3.sub(S3, S1);
    var dR = math_1.Vector3.sub(R1, R2);
    var n = dS21.cross(dS31);
    var ndotdR = n.dot(dR);
    if (Math.abs(ndotdR) < 1e-6) {
        return false;
    }
    var t = -n.dot(math_1.Vector3.sub(R1, S1)) / ndotdR;
    var M = math_1.Vector3.add(R1, dR.mul(t));
    var dMS1 = M.sub(S1);
    var u = dMS1.dot(dS21);
    var v = dMS1.dot(dS31);
    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}
exports.vectorSquareIntersect3d_2 = vectorSquareIntersect3d_2;


/***/ }),

/***/ 500:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rect = void 0;
var object_convertors_1 = __webpack_require__(8219);
var Rect = (function () {
    function Rect(position, size) {
        this.position = position;
        this.size = size;
    }
    Object.defineProperty(Rect.prototype, "area", {
        get: function () {
            return this.size.x * this.size.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "circuit", {
        get: function () {
            return this.size.x + this.size.x + this.size.y + this.size.y;
        },
        enumerable: false,
        configurable: true
    });
    Rect.prototype.toMinMax = function () {
        return object_convertors_1.convertPosSizeToMinMax(this);
    };
    Rect.fromSphere = function (_a) {
        var radius = _a.radius, center = _a.center;
        return Rect.fromMinMax({
            min: {
                x: center.x - radius,
                y: center.y - radius,
            },
            max: {
                x: center.x + radius,
                y: center.y + radius,
            },
        });
    };
    Rect.fromMinMax = function (_a) {
        var min = _a.min, max = _a.max;
        var size = {
            x: max.x - min.x,
            y: max.y - min.y,
        };
        return new Rect(Object.assign({}, min), size);
    };
    return Rect;
}());
exports.Rect = Rect;


/***/ }),

/***/ 1417:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sphere = void 0;
var object_convertors_1 = __webpack_require__(8219);
var Sphere = (function () {
    function Sphere(radius, center) {
        this.radius = radius;
        this.center = center;
    }
    Object.defineProperty(Sphere.prototype, "circuit", {
        get: function () {
            return 2 * Math.PI * this.radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sphere.prototype, "area", {
        get: function () {
            return Math.PI * this.radius * this.radius;
        },
        enumerable: false,
        configurable: true
    });
    Sphere.fromMinMax = function (_a, chooseSize) {
        var min = _a.min, max = _a.max;
        if (chooseSize === void 0) { chooseSize = "max"; }
        var center = {
            x: (min.x + max.x) / 2,
            y: (min.y + max.y) / 2,
        };
        var sizeX = max.x - min.x;
        var sizeY = max.y - min.y;
        var radius = chooseSize === "min" ? Math.min(sizeX, sizeY) : Math.max(sizeX, sizeY);
        return new Sphere(radius, center);
    };
    Sphere.fromPosSize = function (posSize, chooseSize) {
        if (chooseSize === void 0) { chooseSize = "max"; }
        return Sphere.fromMinMax(object_convertors_1.convertPosSizeToMinMax(posSize), chooseSize);
    };
    return Sphere;
}());
exports.Sphere = Sphere;


/***/ }),

/***/ 9305:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(500), exports);
__exportStar(__webpack_require__(1417), exports);
__exportStar(__webpack_require__(8219), exports);


/***/ }),

/***/ 8219:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertPosSizeToMinMax = exports.convertMinMaxToPosSize = void 0;
function convertMinMaxToPosSize(_a) {
    var min = _a.min, max = _a.max;
    return {
        position: {
            x: min.x,
            y: min.y,
        },
        size: {
            x: max.x - min.x,
            y: max.y - min.y,
        },
    };
}
exports.convertMinMaxToPosSize = convertMinMaxToPosSize;
function convertPosSizeToMinMax(_a) {
    var position = _a.position, size = _a.size;
    return {
        min: {
            x: position.x,
            y: position.y,
        },
        max: {
            x: position.x + size.x,
            y: position.y + size.y,
        },
    };
}
exports.convertPosSizeToMinMax = convertPosSizeToMinMax;


/***/ }),

/***/ 4503:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractDatabaseFixture = void 0;
var abstract_fixture_1 = __webpack_require__(3833);
var AbstractDatabaseFixture = (function (_super) {
    __extends(AbstractDatabaseFixture, _super);
    function AbstractDatabaseFixture(list, mapper) {
        var _this = _super.call(this, list) || this;
        _this.listDto = list.map(mapper.mapToDto, mapper);
        _this.detailDto = _this.listDto[0];
        return _this;
    }
    return AbstractDatabaseFixture;
}(abstract_fixture_1.AbstractFixture));
exports.AbstractDatabaseFixture = AbstractDatabaseFixture;


/***/ }),

/***/ 3833:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractFixture = void 0;
var AbstractFixture = (function () {
    function AbstractFixture(list) {
        this.list = list;
        this.detail = list[0];
    }
    return AbstractFixture;
}());
exports.AbstractFixture = AbstractFixture;


/***/ }),

/***/ 2501:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractMapper = void 0;
var AbstractMapper = (function () {
    function AbstractMapper() {
    }
    return AbstractMapper;
}());
exports.AbstractMapper = AbstractMapper;


/***/ }),

/***/ 4650:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginateModel = void 0;
var PaginateModel = (function () {
    function PaginateModel(count, offset) {
        if (count === void 0) { count = PaginateModel.ITEMS_PER_PAGE; }
        if (offset === void 0) { offset = 0; }
        this.limit = +count;
        this.offset = +offset;
    }
    PaginateModel.validate = function (paginate) {
        if (!paginate) {
            return new PaginateModel();
        }
        return new PaginateModel(isNaN(paginate.limit) ? PaginateModel.ITEMS_PER_PAGE : paginate.limit, isNaN(paginate.offset) ? 0 : paginate.offset);
    };
    PaginateModel.ITEMS_PER_PAGE = 10;
    return PaginateModel;
}());
exports.PaginateModel = PaginateModel;


/***/ }),

/***/ 7899:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 3067:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7281:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5090:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7147:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 1230:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7899), exports);
__exportStar(__webpack_require__(7281), exports);
__exportStar(__webpack_require__(5090), exports);
__exportStar(__webpack_require__(3067), exports);
__exportStar(__webpack_require__(7147), exports);
__exportStar(__webpack_require__(8102), exports);
__exportStar(__webpack_require__(2638), exports);
__exportStar(__webpack_require__(6177), exports);
__exportStar(__webpack_require__(6717), exports);
__exportStar(__webpack_require__(287), exports);
__exportStar(__webpack_require__(8432), exports);
__exportStar(__webpack_require__(7000), exports);
__exportStar(__webpack_require__(7602), exports);
__exportStar(__webpack_require__(8614), exports);
__exportStar(__webpack_require__(2578), exports);
__exportStar(__webpack_require__(8434), exports);
__exportStar(__webpack_require__(4088), exports);
__exportStar(__webpack_require__(9494), exports);
__exportStar(__webpack_require__(9487), exports);
__exportStar(__webpack_require__(8059), exports);


/***/ }),

/***/ 8102:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2638:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6177:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6717:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8432:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7000:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7602:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8614:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2578:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8434:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4088:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9494:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9487:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8059:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7858:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasMouse = exports.isTouch = exports.isChromeOs = exports.isMac = exports.isWin = exports.isChromeApp = exports.isIOS = exports.isSafari = exports.isEdge = exports.isIE11 = exports.isIE6 = exports.isIE = void 0;
function isIE() {
    return navigator.userAgent.indexOf("MSIE") >= 0;
}
exports.isIE = isIE;
function isIE6() {
    return navigator.userAgent.indexOf("MSIE 6") >= 0;
}
exports.isIE6 = isIE6;
function isIE11() {
    return !!navigator.userAgent.match(/Trident\/7\./);
}
exports.isIE11 = isIE11;
function isEdge() {
    return !!navigator.userAgent.match(/Edge\//);
}
exports.isEdge = isEdge;
function isSafari() {
    return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
        navigator.userAgent.indexOf("Chrome/") < 0 &&
        navigator.userAgent.indexOf("Edge/") < 0;
}
exports.isSafari = isSafari;
function isIOS() {
    return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
}
exports.isIOS = isIOS;
function isChromeApp() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.chrome) === null || _b === void 0 ? void 0 : _b.app) === null || _c === void 0 ? void 0 : _c.runtime;
}
exports.isChromeApp = isChromeApp;
function isWin() {
    return navigator.appVersion.indexOf("Win") > 0;
}
exports.isWin = isWin;
function isMac() {
    return navigator.appVersion.indexOf("Mac") > 0;
}
exports.isMac = isMac;
function isChromeOs() {
    return /\bCrOS\b/.test(navigator.userAgent);
}
exports.isChromeOs = isChromeOs;
function isTouch() {
    return "ontouchstart" in document.documentElement;
}
exports.isTouch = isTouch;
function hasMouse() {
    return "onmousemove" in document.documentElement;
}
exports.hasMouse = hasMouse;


/***/ }),

/***/ 6042:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eachOther = exports.makeUnique = exports.getNRandom = exports.getRandomItem = exports.getLast = exports.join = exports.avg = exports.sum = exports.min = exports.max = exports.subArray = exports.analyzeArrayChanges = exports.compareArrays = exports.where = void 0;
function where(array, condition) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (!condition || typeof condition !== "object") {
        return [];
    }
    var result = [];
    var conditionEntries = Object.entries(condition);
    array.forEach(function (e) {
        var add = conditionEntries.some(function (conditionEntry) { return e[conditionEntry[0]] === conditionEntry[1]; });
        if (add) {
            result[result.length] = e;
        }
    });
    return result;
}
exports.where = where;
function compareArrays(prev, act, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    if (prev.length !== act.length) {
        return false;
    }
    for (var i = 0; i < prev.length; i++) {
        if (!comparator(prev[i], act[i])) {
            return false;
        }
    }
    return true;
}
exports.compareArrays = compareArrays;
function analyzeArrayChanges(prev, act, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    var existingPrevIndices = {};
    var toRemove = [];
    var toAdd = [];
    act.forEach(function (e) {
        var prevIndex = prev.findIndex(function (item) { return comparator(e, item); });
        if (prevIndex < 0) {
            toAdd.push(e);
        }
        else {
            existingPrevIndices[prevIndex] = true;
        }
    });
    prev.forEach(function (e, i) {
        if (i in existingPrevIndices) {
            return;
        }
        toRemove.push(e);
    });
    return { toAdd: toAdd, toRemove: toRemove };
}
exports.analyzeArrayChanges = analyzeArrayChanges;
function subArray(array, minIndex, maxIndex) {
    if (minIndex === void 0) { minIndex = 0; }
    if (maxIndex === void 0) { maxIndex = array.length - 1; }
    if (!Array.isArray(array)) {
        return array;
    }
    var result = [];
    var final = array.length < maxIndex ? array.length - 1 : maxIndex;
    for (var i = minIndex; i <= final; i++) {
        result[result.length] = array[i];
    }
    return result;
}
exports.subArray = subArray;
function max(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a > b ? a : b; });
}
exports.max = max;
function min(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a < b ? a : b; });
}
exports.min = min;
function sum(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a + b; });
}
exports.sum = sum;
function avg(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) { return a + b; }) / array.length;
}
exports.avg = avg;
function join(array, delimiter, prefix, postfix) {
    if (prefix === void 0) { prefix = ""; }
    if (postfix === void 0) { postfix = ""; }
    if (!Array.isArray(array)) {
        return prefix + array + postfix;
    }
    return prefix + array.join(delimiter) + postfix;
}
exports.join = join;
function getLast(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return array[array.length - 1];
}
exports.getLast = getLast;
function getRandomItem(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return null;
    }
    return array[Math.floor(Math.random() * array.length)];
}
exports.getRandomItem = getRandomItem;
function getNRandom(args, count) {
    if (!Array.isArray(args)) {
        return args;
    }
    if (args.length === 0 || count === 0) {
        return [];
    }
    if (args.length <= count) {
        return args;
    }
    var result = new Set();
    while (result.size <= count) {
        var randomItem = getRandomItem(args);
        if (randomItem) {
            result.add(randomItem);
        }
    }
    return Array.from(result);
}
exports.getNRandom = getNRandom;
function makeUnique(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return Array.from(new Set(array));
}
exports.makeUnique = makeUnique;
function eachOther(arr, callback) {
    arr.forEach(function (e, i) {
        for (var j = i + 1; j < arr.length; j++) {
            callback(e, arr[j]);
        }
    });
}
exports.eachOther = eachOther;


/***/ }),

/***/ 9240:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.coerceBooleanProperty = void 0;
function coerceBooleanProperty(value) {
    return value !== null && "" + value !== "false";
}
exports.coerceBooleanProperty = coerceBooleanProperty;


/***/ }),

/***/ 8042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseColor = exports.rgb2int = exports.hex2int = exports.int2rgb = exports.int2hex = exports.rgb2hex = exports.shadeColor = exports.hex2rgb = exports.lerpHexaColor = exports.lerpColor = void 0;
var math_utils_1 = __webpack_require__(5595);
var colors = {
    black: [0, 0, 0],
    white: [255, 255, 255],
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
};
function lerpColor(fromColor, toColor, progress) {
    var red = progress * fromColor[0] + (1 - progress) * toColor[0];
    var green = progress * fromColor[1] + (1 - progress) * toColor[1];
    var blue = progress * fromColor[2] + (1 - progress) * toColor[2];
    var alpha = progress * fromColor[3] + (1 - progress) * toColor[3];
    return [
        math_utils_1.clamp(red, 0, 255),
        math_utils_1.clamp(green, 0, 255),
        math_utils_1.clamp(blue, 0, 255),
        math_utils_1.clamp(alpha, 0, 255),
    ];
}
exports.lerpColor = lerpColor;
function lerpHexaColor(a, b, amount) {
    var ah = +a.replace("#", "0x");
    var ar = ah >> 16;
    var ag = ah >> 8 & 0xFF;
    var ab = ah & 0xFF;
    var bh = +b.replace("#", "0x");
    var br = bh >> 16;
    var bg = bh >> 8 & 0xFF;
    var bb = bh & 0xFF;
    var rr = ar + amount * (br - ar);
    var rg = ag + amount * (bg - ag);
    var rb = ab + amount * (bb - ab);
    return "#" + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}
exports.lerpHexaColor = lerpHexaColor;
function hex2rgb(color) {
    var num = parseInt(color.slice(1), 16);
    return [num >> 16, num >> 8 & 0x00FF, num & 0x0000FF];
}
exports.hex2rgb = hex2rgb;
function shadeColor(color, percent) {
    var num = hex2rgb(color);
    var amt = Math.round(2.55 * percent);
    var R = num[0] + amt;
    var G = num[1] + amt;
    var B = num[2] + amt;
    return rgb2hex(R, G, B);
}
exports.shadeColor = shadeColor;
function rgb2hex(R, G, B) {
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}
exports.rgb2hex = rgb2hex;
function int2hex(val) {
    var value = val.toString(16);
    var result = "000000".substr(0, 6 - value.length) + value;
    return "#" + result.toUpperCase();
}
exports.int2hex = int2hex;
function int2rgb(val) {
    return [
        val >> 16,
        val >> 8 & 0xFF,
        val & 0xFF,
    ];
}
exports.int2rgb = int2rgb;
function hex2int(val) {
    return parseInt(val, 16);
}
exports.hex2int = hex2int;
function rgb2int(R, G, B) {
    return R << 16 | G << 8 & 0xFFFF | B;
}
exports.rgb2int = rgb2int;
function parseColor(color) {
    if (colors[color]) {
        return colors[color];
    }
    var hexaMatch = color.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
    if (hexaMatch) {
        return [
            parseInt(hexaMatch[1], 16),
            parseInt(hexaMatch[2], 16),
            parseInt(hexaMatch[3], 16),
        ];
    }
    var rgbaMath = color.match(/rgba?\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3})( *, *\d*.?\d*)\)/);
    if (rgbaMath) {
        return [
            parseInt(rgbaMath[1], 10),
            parseInt(rgbaMath[2], 10),
            parseInt(rgbaMath[3], 10),
        ];
    }
    throw new Error("Cannot parse color: " + color);
}
exports.parseColor = parseColor;


/***/ }),

/***/ 7291:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ 2102:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOrCreateAndAppend = exports.getOrCreate = exports.chooseColorUsingDefaultInput = exports.CreateElement = exports.createCheckbox = exports.CreateImage = exports.dragElement = exports.elementToString = void 0;
var constants_1 = __webpack_require__(5601);
function elementToString(element) {
    var classes = Array.from(element.classList).join(".");
    var id = element.id ? "#" + element.id : "";
    var parent = element.parentElement ? elementToString(element.parentElement) + " > " : "";
    return parent + element.localName + id + (classes ? "." + classes : "");
}
exports.elementToString = elementToString;
function dragElement(element, headerSelector) {
    if (headerSelector === void 0) { headerSelector = ".header"; }
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;
    var elementDrag = function (e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    };
    var dragMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointerup = closeDragElement;
        document.onpointermove = elementDrag;
    };
    var header = element.querySelector(headerSelector);
    if (header) {
        header.addEventListener("pointerdown", dragMouseDown);
    }
    else {
        element.addEventListener("pointerdown", dragMouseDown);
    }
    function closeDragElement() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    return {
        clear: function () {
            if (header) {
                header.removeEventListener("pointerdown", dragMouseDown);
            }
            else {
                element.removeEventListener("pointerdown", dragMouseDown);
            }
        },
    };
}
exports.dragElement = dragElement;
function CreateImage(options) {
    var result = CreateElement("img", options);
    if (constants_1.ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS) {
        result.crossOrigin = "Anonymous";
    }
    return result;
}
exports.CreateImage = CreateImage;
function createCheckbox(label, onChange, checked) {
    if (checked === void 0) { checked = false; }
    var inputElement = CreateElement("input", {
        checked: checked,
        type: "checkbox",
        onChange: function () { return onChange(inputElement.checked); },
    });
    return CreateElement("label", {
        className: "checkbox-container",
        children: [label, inputElement, CreateElement("span", { className: "checkmark" })],
    });
}
exports.createCheckbox = createCheckbox;
function CreateElement(type, options) {
    var result = document.createElement(type);
    if (!options) {
        return result;
    }
    Object.entries(options).forEach(function (entry) {
        switch (entry[0]) {
            case "className":
                result.className = entry[1];
                break;
            case "onChange":
                result.addEventListener("change", entry[1]);
                break;
            case "onClick":
                result.addEventListener("click", entry[1]);
                break;
            case "checked":
                result.checked = entry[1];
                break;
            case "styles":
                Object.entries(entry[1]).forEach(function (styleEntry) {
                    result.style[styleEntry[0]] = styleEntry[1];
                });
                break;
            case "children":
                if (Array.isArray(entry[1])) {
                    result.append.apply(result, entry[1]);
                }
                else {
                    result.append(entry[1]);
                }
                break;
            case "content":
                if (entry[1]) {
                    result.innerHTML = entry[1];
                }
                break;
            default:
                result.setAttribute(entry[0], entry[1]);
        }
    });
    return result;
}
exports.CreateElement = CreateElement;
function chooseColorUsingDefaultInput(color, onInput) {
    if (color === void 0) { color = "#000000"; }
    return new Promise(function (success) {
        var input = CreateElement("input", {
            type: "color",
            className: "hidden",
            value: color,
            onInput: typeof onInput === "function" ? function () { return onInput(input.value); } : undefined,
            onChange: function () {
                success(input.value);
                document.body.removeChild(input);
            },
        });
        document.body.appendChild(input);
        input.click();
    });
}
exports.chooseColorUsingDefaultInput = chooseColorUsingDefaultInput;
function getOrCreate(parent, type) {
    var classes = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        classes[_i - 2] = arguments[_i];
    }
    var result = parent.querySelector(type + "." + classes.join("."));
    if (result) {
        return result;
    }
    return CreateElement(type, { className: classes.join(" ") });
}
exports.getOrCreate = getOrCreate;
function getOrCreateAndAppend(parent, type) {
    var classes = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        classes[_i - 2] = arguments[_i];
    }
    var result = getOrCreate.apply(void 0, __spreadArrays([parent, type], classes));
    parent.appendChild(result);
    return result;
}
exports.getOrCreateAndAppend = getOrCreateAndAppend;


/***/ }),

/***/ 9199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createImage = exports.deserializeImage = exports.serializeImage = void 0;
var html_utils_1 = __webpack_require__(2102);
function serializeImage(image) {
    var canvas = html_utils_1.CreateElement("canvas", {
        width: image.width,
        height: image.height,
    });
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas.toDataURL("image/png");
}
exports.serializeImage = serializeImage;
function deserializeImage(image) {
    return html_utils_1.CreateImage({
        src: image,
    });
}
exports.deserializeImage = deserializeImage;
function createImage(callback, width, height) {
    if (height === void 0) { height = width; }
    var canvas = html_utils_1.CreateElement("canvas", {
        width: width,
        height: height,
    });
    callback(canvas.getContext("2d"));
    return canvas;
}
exports.createImage = createImage;


/***/ }),

/***/ 5928:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7858), exports);
__exportStar(__webpack_require__(6042), exports);
__exportStar(__webpack_require__(9240), exports);
__exportStar(__webpack_require__(8042), exports);
__exportStar(__webpack_require__(7291), exports);
__exportStar(__webpack_require__(2102), exports);
__exportStar(__webpack_require__(9199), exports);
__exportStar(__webpack_require__(5595), exports);
__exportStar(__webpack_require__(5065), exports);
__exportStar(__webpack_require__(7799), exports);
__exportStar(__webpack_require__(1458), exports);
__exportStar(__webpack_require__(669), exports);
__exportStar(__webpack_require__(1054), exports);
__exportStar(__webpack_require__(8244), exports);
__exportStar(__webpack_require__(8476), exports);
__exportStar(__webpack_require__(1320), exports);
__exportStar(__webpack_require__(5429), exports);
__exportStar(__webpack_require__(7788), exports);
__exportStar(__webpack_require__(3683), exports);


/***/ }),

/***/ 669:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compareEventKey = exports.getButtonFromEventButtons = exports.getButtonFromEvent = void 0;
var enums_1 = __webpack_require__(542);
function getButtonFromEvent(event) {
    return getButtonFromEventButtons(event.button);
}
exports.getButtonFromEvent = getButtonFromEvent;
function getButtonFromEventButtons(button) {
    if (button === 0) {
        return enums_1.Button.LEFT;
    }
    if (button === 1) {
        return enums_1.Button.MIDDLE;
    }
    if (button === 2) {
        return enums_1.Button.RIGHT;
    }
}
exports.getButtonFromEventButtons = getButtonFromEventButtons;
function compareEventKey(event, key) {
    return event.code === key;
}
exports.compareEventKey = compareEventKey;


/***/ }),

/***/ 5595:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toDegrees = exports.getDiff = exports.isPowerOf2 = exports.average = exports.random = exports.randomInt = exports.lamp = exports.log2i = exports.lerp = exports.binomialCoefficient = exports.clamp = exports.hash2Numbers = exports.roundToDecimals = exports.pad = void 0;
var Random = __importStar(__webpack_require__(5429));
function pad(num, size) {
    var s = "00000000000000" + num;
    return s.substr(s.length - size);
}
exports.pad = pad;
function roundToDecimals(num, decimals, type) {
    if (decimals === void 0) { decimals = 2; }
    if (type === void 0) { type = "round"; }
    var divider = parseInt(1 + new Array(decimals + 1).join("0"), 10);
    return (Math[type](num * divider) / divider).toFixed(decimals);
}
exports.roundToDecimals = roundToDecimals;
function hash2Numbers(x, y) {
    var xFinal = x >= 0 ? x * 2 : -x * 2 - 1;
    var yFinal = y >= 0 ? y * 2 : -y * 2 - 1;
    return (xFinal + yFinal) * (xFinal + yFinal + 1) / 2 + yFinal;
}
exports.hash2Numbers = hash2Numbers;
function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}
exports.clamp = clamp;
function binomialCoefficient(n, k) {
    var r = 1;
    if (k > n) {
        return 0;
    }
    for (var d = 1; d <= k; d++) {
        r *= n;
        n--;
        r /= d;
    }
    return r;
}
exports.binomialCoefficient = binomialCoefficient;
function lerp(a, b, val) {
    return b * val + (1 - val) * a;
}
exports.lerp = lerp;
function log2i(value) {
    var r = 0;
    while ((value >>= 1) > 0) {
        r++;
    }
    return r;
}
exports.log2i = log2i;
function lamp(min, max, scale) {
    return clamp((max - min) * scale + min, min, max);
}
exports.lamp = lamp;
function randomInt(min, max) {
    return Random.randomIntBetween(min, max);
}
exports.randomInt = randomInt;
function random(min, max) {
    return Random.randomFloatBetween(min, max);
}
exports.random = random;
function average(args) {
    var sum = 0;
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var item = args_1[_i];
        sum += item;
    }
    return sum / args.length;
}
exports.average = average;
function isPowerOf2(value) {
    return (value & value - 1) === 0;
}
exports.isPowerOf2 = isPowerOf2;
function getDiff(num1, num2) {
    return Math.abs(num1 - num2);
}
exports.getDiff = getDiff;
var ratio = 180 / Math.PI;
function toDegrees(radians) {
    return radians * ratio;
}
exports.toDegrees = toDegrees;


/***/ }),

/***/ 5065:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.map = exports.parse = exports.serialize = exports.objectToQueryParams = exports.parseParams = exports.getCookie = exports.setCookie = exports.parseJSONWithComments = exports.isIn = exports.parseCookies = void 0;
function parseCookies(cookies) {
    var list = {};
    var data = cookies ? cookies.toString()
        .split(";") : [];
    data.forEach(function (cookie) {
        var parts = cookie.split("=");
        var shiftPart = parts.shift();
        if (shiftPart) {
            list[shiftPart.trim()] = decodeURI(parts.join("="));
        }
    });
    return list;
}
exports.parseCookies = parseCookies;
function isIn(obj) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    if (Array.isArray(data[0])) {
        if (data[0].indexOf(obj) >= 0) {
            return true;
        }
    }
    else if (data.indexOf(obj) >= 0) {
        return true;
    }
    return false;
}
exports.isIn = isIn;
function parseJSONWithComments(content) {
    return JSON.parse(content.replace(/\/\/.*\n/g, ""));
}
exports.parseJSONWithComments = parseJSONWithComments;
function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    var finalCookies = name + "=" + value + ";expires=" + d.toUTCString();
    if (typeof document !== "undefined") {
        document.cookie = finalCookies;
    }
    return name + "=" + value;
}
exports.setCookie = setCookie;
function getCookie(cname, source) {
    if (source === void 0) { source = typeof document !== "undefined" ? document.cookie : ""; }
    var name = cname + "=";
    var ca = source.split(";");
    for (var _i = 0, ca_1 = ca; _i < ca_1.length; _i++) {
        var c = ca_1[_i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
exports.getCookie = getCookie;
function parseParams(query, separator, delimiter) {
    if (query === void 0) { query = typeof window !== "undefined" ? window.location.search.substring(1) : ""; }
    if (separator === void 0) { separator = "&"; }
    if (delimiter === void 0) { delimiter = "="; }
    var queryString = {};
    var vars = query.split(separator);
    for (var _i = 0, vars_1 = vars; _i < vars_1.length; _i++) {
        var pair = vars_1[_i];
        var _a = pair.split(delimiter), key = _a[0], value = _a[1];
        if (typeof queryString[key] === "undefined") {
            queryString[key] = decodeURIComponent(value);
        }
        else if (typeof queryString[key] === "string") {
            queryString[key] = [queryString[key], decodeURIComponent(value)];
        }
        else {
            queryString[key].push(decodeURIComponent(value));
        }
    }
    return queryString;
}
exports.parseParams = parseParams;
function objectToQueryParams(obj) {
    var result = "";
    for (var objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            result += "" + (result.length > 0 ? "&" : "?") + objKey + "=" + obj[objKey];
        }
    }
    return result;
}
exports.objectToQueryParams = objectToQueryParams;
function serialize(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
            obj[key] = obj[key].toString();
        }
    }
    return JSON.stringify(obj);
}
exports.serialize = serialize;
function parse(obj) {
    var result = JSON.parse(obj);
    for (var i in result) {
        if (!result.hasOwnProperty(i) ||
            typeof result[i] !== "string" || !(result[i].indexOf("function (") === 0 ||
            result[i].match(/^\([_a-zA-Z0-9]+( *, *[_a-zA-Z0-9]+)*\) *=>/))) {
            continue;
        }
        try {
            eval("result[i] = " + result[i]);
        }
        catch (e) {
            result[i] = e;
        }
    }
    return result;
}
exports.parse = parse;
function map(source, data) {
    var destination = {};
    data.forEach(function (item) {
        if (item.mapFunction) {
            if (item.attrD) {
                destination[item.attrD] = item.mapFunction(source[item.attrS]);
            }
            else {
                destination[item.attrS] = item.mapFunction(source[item.attrS]);
            }
            return;
        }
        if (item.attrD) {
            destination[item.attrD] = source[item.attrS];
        }
        else {
            destination[item.attrS] = source[item.attrS];
        }
    });
    return destination;
}
exports.map = map;


/***/ }),

/***/ 1054:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeFlat = exports.isPlain = exports.size = exports.roughSizeOfObject = exports.setNestedProperty = exports.getNestedProperty = exports.getObjectEntries = exports.deepCopy = exports.deepEqual = exports.without = void 0;
function without(obj, items) {
    return getObjectEntries(obj).filter(function (entry) { return !items.includes(entry.key); })
        .reduce(function (prev, entry) {
        prev[entry.key] = entry.value;
        return prev;
    }, {});
}
exports.without = without;
function deepEqual(objA, objB) {
    var _a, _b, _c, _d;
    if (typeof objA !== typeof objB) {
        return false;
    }
    if (typeof objA === "object") {
        if (!objA || !objB) {
            return objA === objB;
        }
        if (((_b = (_a = objA) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) !== ((_d = (_c = objB) === null || _c === void 0 ? void 0 : _c.constructor) === null || _d === void 0 ? void 0 : _d.name)) {
            return false;
        }
        var keys = Object.keys(objA);
        if (keys.length !== Object.keys(objB).length) {
            return false;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!deepEqual(objA[key], objB[key])) {
                return false;
            }
        }
        return true;
    }
    if (typeof objA === "number" && typeof objB === "number") {
        if (isNaN(+objA) && isNaN(+objB)) {
            return true;
        }
    }
    return objA === objB;
}
exports.deepEqual = deepEqual;
function deepCopy(source) {
    var _a, _b;
    if (typeof source === "object") {
        if (Array.isArray(source)) {
            return source.map(function (e) { return deepCopy(e); });
        }
        if (((_b = (_a = source) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) !== "Object") {
            throw new Error("This method cannot copy class instances");
        }
        var result_1 = {};
        Object.entries(source).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            result_1[key] = deepCopy(value);
        });
        return result_1;
    }
    if (typeof source === "function") {
        throw new Error("This method cannot copy functions");
    }
    return source;
}
exports.deepCopy = deepCopy;
function getObjectEntries(obj) {
    var result = [];
    for (var objKey in obj) {
        if (!obj.hasOwnProperty(objKey)) {
            continue;
        }
        result.push({
            key: objKey,
            value: obj[objKey],
        });
    }
    return result;
}
exports.getObjectEntries = getObjectEntries;
function getNestedProperty(object, propertyPath, separator) {
    if (separator === void 0) { separator = "."; }
    var propertyList = propertyPath.split(separator);
    return propertyList.reduce(function (currentNestedPropertyValue, propertyName) { return currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined; }, object);
}
exports.getNestedProperty = getNestedProperty;
function setNestedProperty(key, item, value) {
    var obj = item;
    var splitKey = key.split(".");
    for (var i = 0; i < splitKey.length - 1; i++) {
        obj = obj[splitKey[i]];
    }
    obj[splitKey[splitKey.length - 1]] = value;
}
exports.setNestedProperty = setNestedProperty;
function roughSizeOfObject(object) {
    var objectList = [];
    var stack = [object];
    var bytes = 0;
    while (stack.length) {
        var value = stack.pop();
        if (typeof value === "boolean") {
            bytes += 4;
        }
        else if (typeof value === "string") {
            bytes += value.length << 1;
        }
        else if (typeof value === "number") {
            bytes += 8;
        }
        else if (typeof value === "object" && objectList.indexOf(value) === -1) {
            objectList.push(value);
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    stack.push(value[key]);
                }
            }
        }
    }
    return bytes;
}
exports.roughSizeOfObject = roughSizeOfObject;
function size(object) {
    var result = 0;
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            result++;
        }
    }
    return result;
}
exports.size = size;
function isPlain(object) {
    for (var index in object) {
        if (object.hasOwnProperty(index) && typeof object[index] === "object") {
            return false;
        }
    }
    return true;
}
exports.isPlain = isPlain;
function makeFlat(list, propertyPath, separator, skipUndefined) {
    if (separator === void 0) { separator = "."; }
    if (skipUndefined === void 0) { skipUndefined = false; }
    var propertyList = propertyPath.indexOf(separator) >= 0 ? propertyPath.split(separator) : [propertyPath];
    return list.reduce(function (acc, curr) {
        var value = propertyList.reduce(function (propVal, propertyName) { return propVal ? propVal[propertyName] : undefined; }, curr);
        if (typeof value === "undefined" && skipUndefined) {
            return acc;
        }
        acc.push(value);
        return acc;
    }, []);
}
exports.makeFlat = makeFlat;


/***/ }),

/***/ 8244:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseBooleanValue = void 0;
function parseBooleanValue(key) {
    if (key.match(/(1|true|yes|ano|áno)/i)) {
        return true;
    }
    if (key.match(/(0|false|no|nie)/i)) {
        return false;
    }
}
exports.parseBooleanValue = parseBooleanValue;


/***/ }),

/***/ 8476:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setDefaultEnvironment = exports.getProcessData = exports.setEnvironment = exports.isDev = exports.isProd = exports.isTest = void 0;
function isTest() {
    return "production" === "test";
}
exports.isTest = isTest;
function isProd() {
    return "production" === "production";
}
exports.isProd = isProd;
function isDev() {
    return  false || !"production";
}
exports.isDev = isDev;
function setEnvironment(type) {
}
exports.setEnvironment = setEnvironment;
function getProcessData() {
    return {
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage(),
        upTime: process.uptime(),
        version: process.version,
        platform: process.platform,
    };
}
exports.getProcessData = getProcessData;
function setDefaultEnvironment() {
    if (false) {}
}
exports.setDefaultEnvironment = setDefaultEnvironment;


/***/ }),

/***/ 5429:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomItem = exports.randomBoolean = exports.randomIntBetween = exports.randomFloatBetween = void 0;
function randomFloatBetween(min, max) {
    return min + Math.random() * (max - min);
}
exports.randomFloatBetween = randomFloatBetween;
function randomIntBetween(min, max) {
    return Math.floor(randomFloatBetween(min, max));
}
exports.randomIntBetween = randomIntBetween;
function randomBoolean() {
    return Math.random() < 0.5;
}
exports.randomBoolean = randomBoolean;
function randomItem() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items[Math.floor(Math.random() * items.length)];
}
exports.randomItem = randomItem;


/***/ }),

/***/ 1320:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.callFirstFunction = exports.createClass = void 0;
function createClass(name, args) {
    var temp = Object.create(name.prototype);
    name.apply(temp, args);
    return temp;
}
exports.createClass = createClass;
function callFirstFunction() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var _a, functions_1, func;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = 0, functions_1 = functions;
                    _b.label = 1;
                case 1:
                    if (!(_a < functions_1.length)) return [3, 4];
                    func = functions_1[_a];
                    if (!(typeof func === "function")) return [3, 3];
                    return [4, func()];
                case 2: return [2, _b.sent()];
                case 3:
                    _a++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    });
}
exports.callFirstFunction = callFirstFunction;


/***/ }),

/***/ 1458:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sortedMerge = exports.SortedPartition = exports.SortedDifference = exports.sortedPickAll = exports.sortedRemove = exports.sortedInsertAll = exports.sortedInsert = exports.sortedFind = exports.binarySearch = void 0;
function binarySearch(array, item, comparator) {
    var m = 0;
    var n = array.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = comparator(item, array[k]);
        if (cmp > 0) {
            m = k + 1;
        }
        else if (cmp < 0) {
            n = k - 1;
        }
        else {
            return k;
        }
    }
    return ~m;
}
exports.binarySearch = binarySearch;
function sortedFind(array, el, compare) {
    var idx = binarySearch(array, el, compare);
    if (idx < 0) {
        return;
    }
    return array[idx];
}
exports.sortedFind = sortedFind;
function sortedInsert(array, value, compare) {
    var idx = binarySearch(array, value, compare);
    var newIdx = idx < 0 ? ~idx : idx;
    array.splice(newIdx, 0, value);
    return newIdx;
}
exports.sortedInsert = sortedInsert;
function sortedInsertAll(array, values, compare, skipDuplicates) {
    if (skipDuplicates === void 0) { skipDuplicates = false; }
    var actualIndex = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        actualIndex = binarySearch(array.slice(actualIndex), value, compare);
        if (skipDuplicates && actualIndex >= 0) {
            break;
        }
        if (actualIndex < 0) {
            actualIndex = ~actualIndex;
        }
        array.splice(actualIndex, 0, value);
    }
    return values.length;
}
exports.sortedInsertAll = sortedInsertAll;
function sortedRemove(array, value, compare) {
    var idx = binarySearch(array, value, compare);
    if (idx < 0) {
        return;
    }
    var r = array[idx];
    array.splice(idx, 1);
    return r;
}
exports.sortedRemove = sortedRemove;
function sortedPickAll(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r = [];
    while (i1 < values.length && i2 < array.length) {
        var id = values[i1];
        var f = array[i2];
        var cmp = compare(id, f);
        if (cmp > 0) {
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
            r.push(f);
            ++i1;
            ++i2;
        }
    }
    return r;
}
exports.sortedPickAll = sortedPickAll;
function SortedDifference(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r = [];
    while (i1 < values.length && i2 < array.length) {
        var id = values[i1];
        var f = array[i2];
        var cmp = compare(id, f);
        if (cmp > 0) {
            r.push(f);
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
            ++i1;
            ++i2;
        }
    }
    while (i2 < array.length) {
        var f = array[i2];
        r.push(f);
        ++i2;
    }
    return r;
}
exports.SortedDifference = SortedDifference;
function SortedPartition(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r1 = [];
    var r2 = [];
    while (i1 < values.length && i2 < array.length) {
        var id = values[i1];
        var f = array[i2];
        var cmp = compare(id, f);
        if (cmp > 0) {
            r2.push(f);
            ++i2;
        }
        else if (cmp < 0) {
            ++i1;
        }
        else {
            r1.push(f);
            ++i1;
            ++i2;
        }
    }
    while (i2 < array.length) {
        var f = array[i2];
        r2.push(f);
        ++i2;
    }
    return [r1, r2];
}
exports.SortedPartition = SortedPartition;
function sortedMerge(array, values, compare) {
    var i1 = 0;
    var i2 = 0;
    var r = [];
    while (i1 < values.length && i2 < array.length) {
        var f1 = values[i1];
        var f2 = array[i2];
        var cmp = compare(f1, f2);
        if (cmp > 0) {
            r.push(f2);
            ++i2;
        }
        else if (cmp < 0) {
            r.push(f1);
            ++i1;
        }
        else {
            r.push(f1);
            ++i1;
            ++i2;
        }
    }
    while (i1 < values.length) {
        var f = values[i1];
        r.push(f);
        ++i1;
    }
    while (i2 < array.length) {
        var f = array[i2];
        r.push(f);
        ++i2;
    }
    return r;
}
exports.sortedMerge = sortedMerge;


/***/ }),

/***/ 7863:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidEmail = exports.isValidPhoneNumber = exports.isTimeFormat = exports.isSnakeCase = exports.isUpperSnakeCase = exports.isLowerSnakeCase = exports.isLowerCamelCase = exports.isUpperCamelCase = exports.isCamelCase = void 0;
var MiscValidators = __importStar(__webpack_require__(3254));
var timeFormats = {
    HH: "(2[0-3]|[01]\\d)",
    H: "(2[0-3]|[01]?\\d)",
    mm: "([0-5]\\d)",
    m: "([0-5]?\\d)",
    MM: "(0\\d|1[0-2]|\\d)",
    M: "([1-9]|1[0-2])",
    ss: "([0-5]\\d)",
    s: "([0-5]?\\d)",
    YYYY: "([1-9]\\d{3,3})",
    YY: "(\\d{2,2})",
    DD: "([0-3]\\d)",
};
function isCamelCase(text) {
    return new RegExp("^[A-Z]?[a-z]+([A-Z][a-z]*)*$", "g").test(text);
}
exports.isCamelCase = isCamelCase;
function isUpperCamelCase(text) {
    return new RegExp("^([A-Z][a-z]*)*$", "g").test(text);
}
exports.isUpperCamelCase = isUpperCamelCase;
function isLowerCamelCase(text) {
    return new RegExp("^[a-z]+([A-Z][a-z]*)*$", "g").test(text);
}
exports.isLowerCamelCase = isLowerCamelCase;
function isLowerSnakeCase(text) {
    return new RegExp("^[a-z]*(_[a-z]*)*$", "g").test(text);
}
exports.isLowerSnakeCase = isLowerSnakeCase;
function isUpperSnakeCase(text) {
    return new RegExp("^[A-Z]*(_[A-Z]*)*$", "g").test(text);
}
exports.isUpperSnakeCase = isUpperSnakeCase;
function isSnakeCase(text) {
    return new RegExp("^([a-z]*|[A-Z]*)(_[a-zA-Z]*)*$", "g").test(text);
}
exports.isSnakeCase = isSnakeCase;
function isTimeFormat(text, format) {
    for (var key in timeFormats) {
        if (timeFormats.hasOwnProperty(key)) {
            format = format.replace(key, timeFormats[key]);
        }
    }
    return new RegExp("^" + format + "$").test(text);
}
exports.isTimeFormat = isTimeFormat;
function isValidPhoneNumber(num) {
    return MiscValidators.isValidPhoneNumber(num);
}
exports.isValidPhoneNumber = isValidPhoneNumber;
function isValidEmail(email) {
    return MiscValidators.isValidEmail(email);
}
exports.isValidEmail = isValidEmail;


/***/ }),

/***/ 7788:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replaceForAll = exports.getFormattedNumber = exports.joinString = exports.joinSingle = exports.contains = exports.toBasicForm = exports.getAsciiArray = exports.transformToBasicFormat = exports.format = exports.swapCase = exports.collapseWhitespace = exports.occurrences = exports.between = exports.removeEmptyLines = exports.template = exports.removeAll = exports.repeat = exports.count = exports.getLastPart = exports.toCapital = exports.capitalize = exports.toUpperCamelCase = exports.toLowerCamelCase = exports.toLowerSnakeCase = exports.toUpperSnakeCase = exports.cutUsing = exports.removeAccentedCharacters = void 0;
var array_utils_1 = __webpack_require__(6042);
var StringCheckers = __importStar(__webpack_require__(7863));
var accentedLowerCharacters = "ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
var normalLowerCharacters = "aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
var accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
var normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();
function removeAccentedCharacters(word) {
    if (!word || !word.replace) {
        return word;
    }
    return word.replace(/./g, function (e) {
        var index = accentedCharacters.indexOf(e);
        return index >= 0 ? normalCharacters[index] : e;
    });
}
exports.removeAccentedCharacters = removeAccentedCharacters;
function cutUsing(text, maxLength, suffix, lengthIncludeSuffix) {
    if (suffix === void 0) { suffix = "..."; }
    if (lengthIncludeSuffix === void 0) { lengthIncludeSuffix = true; }
    if (text.length <= maxLength) {
        return text;
    }
    return text.substr(0, maxLength - (lengthIncludeSuffix ? suffix.length - 1 : 0)) + suffix;
}
exports.cutUsing = cutUsing;
function toUpperSnakeCase(text) {
    if (StringCheckers.isCamelCase(text)) {
        return text.replace(/([a-z])([A-Z])/g, "$1_$2")
            .replace(/([A-Z])([A-Z])/g, "$1_$2")
            .toUpperCase();
    }
    if (StringCheckers.isUpperSnakeCase(text)) {
        return text;
    }
    return text.replace(/(-|_| |\s)+(.)?/g, function (i, u, e) { return e ? "_" + e : ""; })
        .replace(/^_/, "")
        .toUpperCase();
}
exports.toUpperSnakeCase = toUpperSnakeCase;
function toLowerSnakeCase(text) {
    if (StringCheckers.isCamelCase(text)) {
        return text.replace(/([a-z])([A-Z])/g, "$1_$2")
            .replace(/([A-Z])([A-Z])/g, "$1_$2")
            .toLowerCase();
    }
    if (StringCheckers.isLowerSnakeCase(text)) {
        return text;
    }
    return text.replace(/(-|_| |\s)+(.)?/g, function (i, u, e) { return e ? "_" + e : ""; })
        .replace(/^_/, "")
        .toLowerCase();
}
exports.toLowerSnakeCase = toLowerSnakeCase;
function toLowerCamelCase(text) {
    if (StringCheckers.isLowerCamelCase(text)) {
        return text;
    }
    return text.trim()
        .replace(/([a-z])([A-Z])([A-Z])/g, "$1$2_$3")
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .toLowerCase()
        .replace(/(-|_| |\s)+(.)?/g, function (math, sep, c) { return c ? c.toUpperCase() : ""; })
        .replace(/^./, function (e) { return e.toLowerCase(); });
}
exports.toLowerCamelCase = toLowerCamelCase;
function toUpperCamelCase(text) {
    if (StringCheckers.isUpperCamelCase(text)) {
        return text;
    }
    return toCapital(toLowerCamelCase(text));
}
exports.toUpperCamelCase = toUpperCamelCase;
function capitalize(text) {
    return text.toLowerCase().replace(/^./, function (char) { return char.toUpperCase(); });
}
exports.capitalize = capitalize;
function toCapital(text) {
    return text.replace(/^./, function (e) { return e.toUpperCase(); });
}
exports.toCapital = toCapital;
function getLastPart(text, divider) {
    if (divider === void 0) { divider = " "; }
    if (!text || !text.split) {
        return text;
    }
    var splitText = text.split(divider);
    return splitText[splitText.length - 1];
}
exports.getLastPart = getLastPart;
function count(text, key) {
    return (text.match(new RegExp(key, "g")) || []).length;
}
exports.count = count;
function repeat(text, numberOfRepetitions) {
    return new Array(numberOfRepetitions + 1).join(text);
}
exports.repeat = repeat;
function removeAll(text, words) {
    return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
}
exports.removeAll = removeAll;
function template(text, values, start, end) {
    if (start === void 0) { start = "{{"; }
    if (end === void 0) { end = "}}"; }
    var updatedStart = start.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
    var updatedEnd = end.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
    return text.replace(new RegExp(updatedStart + "(.+?)" + updatedEnd, "g"), function (math, key) { return String(values[key]); });
}
exports.template = template;
function removeEmptyLines(content) {
    return content.replace(/^\s*$(?:\r\n?|\n)/gm, "");
}
exports.removeEmptyLines = removeEmptyLines;
function between(text, key1, key2, trim) {
    if (trim === void 0) { trim = false; }
    var processResult = function (result) { return trim ? result.trim() : result; };
    var startPos = text.indexOf(key1);
    var endPos = text.indexOf(key2);
    if (startPos < 0 && endPos >= 0) {
        return processResult(text.substring(0, endPos));
    }
    if (endPos < 0 && startPos >= 0) {
        return processResult(text.substring(startPos + key1.length, text.length));
    }
    return processResult(text.substring(startPos + key1.length, endPos));
}
exports.between = between;
function occurrences(text, key, overlapping) {
    if (overlapping === void 0) { overlapping = false; }
    var index = text.indexOf(key);
    var counter = 0;
    var step = overlapping ? 1 : key.length;
    while (index >= 0) {
        counter++;
        index = text.indexOf(key, index + step);
    }
    return counter;
}
exports.occurrences = occurrences;
function collapseWhitespace(text) {
    return text.replace(/[\s\uFEFF\xA0]{2,}/g, " ");
}
exports.collapseWhitespace = collapseWhitespace;
function swapCase(text) {
    return text.replace(/\S/g, function (char) {
        var lowerCase = char.toLowerCase();
        return lowerCase === char ? char.toUpperCase() : lowerCase;
    });
}
exports.swapCase = swapCase;
function format(text, values, placeHolder) {
    if (placeHolder === void 0) { placeHolder = "{}"; }
    var result = [];
    var lastIndex;
    var actualIndex = 0;
    var counter = 0;
    while (counter < values.length) {
        lastIndex = actualIndex;
        actualIndex = text.indexOf(placeHolder, actualIndex);
        result.push(text.substring(lastIndex, actualIndex));
        result.push(values[counter++]);
        actualIndex += placeHolder.length;
    }
    result.push(text.substring(actualIndex));
    return result.join("");
}
exports.format = format;
function transformToBasicFormat(text) {
    return collapseWhitespace(removeAccentedCharacters(text).toLowerCase()).trim();
}
exports.transformToBasicFormat = transformToBasicFormat;
function getAsciiArray(thisArg) {
    var result = [];
    for (var _i = 0, thisArg_1 = thisArg; _i < thisArg_1.length; _i++) {
        var letter = thisArg_1[_i];
        result[result.length] = letter.charCodeAt(0);
    }
    return result;
}
exports.getAsciiArray = getAsciiArray;
function toBasicForm(text) {
    return removeAccentedCharacters(text.toLowerCase());
}
exports.toBasicForm = toBasicForm;
function contains(text, substring) {
    return !!text && removeAccentedCharacters(text.toLowerCase()).indexOf(substring) >= 0;
}
exports.contains = contains;
function joinSingle(prefix, divider, postfix) {
    if (postfix.startsWith(divider) && prefix.endsWith(divider)) {
        return prefix + postfix.substring(divider.length);
    }
    if (postfix.startsWith(divider) || prefix.endsWith(divider)) {
        return prefix + postfix;
    }
    return prefix + divider + postfix;
}
exports.joinSingle = joinSingle;
function joinString(data, delimiter, prefix, postfix) {
    if (delimiter === void 0) { delimiter = " "; }
    if (prefix === void 0) { prefix = ""; }
    if (postfix === void 0) { postfix = ""; }
    return array_utils_1.join(data, delimiter, prefix, postfix);
}
exports.joinString = joinString;
function getFormattedNumber(num, prefix) {
    if (prefix === void 0) { prefix = "+421"; }
    num = num.replace(/[( )/-]/g, "");
    if (num.startsWith("+")) {
        return num;
    }
    if (num.startsWith("00")) {
        return num.substring(2);
    }
    if (num.startsWith("09") || num.startsWith("02")) {
        return prefix + num.substring(1);
    }
    return num;
}
exports.getFormattedNumber = getFormattedNumber;
function fuzzy_match_simple(pattern, str) {
    var patternIdx = 0;
    var strIdx = 0;
    var patternLength = pattern.length;
    var strLength = str.length;
    while (patternIdx !== patternLength && strIdx !== strLength) {
        var patternChar = pattern.charAt(patternIdx)
            .toLowerCase();
        var strChar = str.charAt(strIdx)
            .toLowerCase();
        if (patternChar === strChar) {
            ++patternIdx;
        }
        ++strIdx;
    }
    return patternLength !== 0 && strLength !== 0 && patternIdx === patternLength;
}
function replaceForAll(content, values, placeHolder) {
    return values.map(function (value) { return content.replace(placeHolder, value); });
}
exports.replaceForAll = replaceForAll;


/***/ }),

/***/ 3683:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTransform = exports.createSvg = void 0;
var svgns = "http://www.w3.org/2000/svg";
function createSvg(type) {
    return document.createElementNS(svgns, type);
}
exports.createSvg = createSvg;
function getTransform(selectedElement) {
    var transforms = selectedElement.transform.baseVal;
    if (transforms.numberOfItems === 0 ||
        transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        var translate = selectedElement.ownerSVGElement.createSVGTransform();
        translate.setTranslate(0, 0);
        selectedElement.transform.baseVal.insertItemBefore(translate, 0);
    }
    return transforms.getItem(0);
}
exports.getTransform = getTransform;


/***/ }),

/***/ 7799:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEndOfTheDay = exports.getStartOfTheDay = exports.createStopWatch = exports.formatTime = exports.dateAgo = void 0;
var intervals = {
    "year": 31536000,
    "month": 2592000,
    "week": 604800,
    "day": 86400,
    "hour": 3600,
    "minute": 60,
    "second": 1,
};
var intervalEntries = Object.entries(intervals);
function dateAgo(value) {
    if (value) {
        var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) {
            return "Just now";
        }
        var counter = void 0;
        for (var _i = 0, intervalEntries_1 = intervalEntries; _i < intervalEntries_1.length; _i++) {
            var _a = intervalEntries_1[_i], key = _a[0], interval = _a[1];
            counter = Math.floor(seconds / interval);
            if (counter <= 0) {
                continue;
            }
            if (counter === 1) {
                return counter + " " + key + " ago";
            }
            return counter + " " + key + "s ago";
        }
    }
    return value;
}
exports.dateAgo = dateAgo;
function formatTime(date, pattern) {
    var toString = function (time) { return time < 10 ? "0" + time : "" + time; };
    var regex = new RegExp("(DD|MM|YYYY|YYY|YY|HH|mm|SS)", "g");
    var DD = toString(date.getDate());
    var MM = toString(date.getMonth() + 1);
    var YYYY = date.getFullYear() + "";
    var YYY = YYYY.substr(1, 4);
    var YY = YYY.substr(1, 4);
    var HH = toString(date.getHours());
    var mm = toString(date.getMinutes());
    var SS = toString(date.getSeconds());
    return pattern.replace(regex, function (e) {
        switch (e) {
            case "DD":
                return DD;
            case "MM":
                return MM;
            case "YYYY":
                return YYYY;
            case "YYY":
                return YYY;
            case "YY":
                return YY;
            case "HH":
                return HH;
            case "mm":
                return mm;
            case "SS":
                return SS;
            default:
                return e;
        }
    });
}
exports.formatTime = formatTime;
function createStopWatch() {
    var start = Date.now();
    var getDiffMs = function () { return Date.now() - start; };
    return {
        getDiffMs: getDiffMs,
        getDiff: function () {
            return getDiffMs() + "ms";
        },
    };
}
exports.createStopWatch = createStopWatch;
function setDate(date, opt) {
    if (!date) {
        return new Date("");
    }
    if (!isNaN(opt.ms)) {
        date.setMilliseconds(opt.ms);
    }
    if (!isNaN(opt.s)) {
        date.setSeconds(opt.s);
    }
    if (!isNaN(opt.m)) {
        date.setMinutes(opt.m);
    }
    if (!isNaN(opt.h)) {
        date.setHours(opt.h);
    }
    return date;
}
function getStartOfTheDay(date) {
    return setDate(date, {
        ms: 0,
        s: 0,
        m: 0,
        h: 0,
    });
}
exports.getStartOfTheDay = getStartOfTheDay;
function getEndOfTheDay(date) {
    return setDate(date, {
        ms: 999,
        s: 59,
        m: 59,
        h: 23,
    });
}
exports.getEndOfTheDay = getEndOfTheDay;


/***/ }),

/***/ 3871:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3254), exports);


/***/ }),

/***/ 3254:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidEmail = exports.isValidPhoneNumber = exports.isEmpty = exports.isElement = exports.isUndefined = exports.isFloat = exports.isInt = exports.isArray = exports.isBoolean = exports.isNumber = exports.isObject = exports.isString = exports.isFunction = void 0;
var validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
var validPhoneNumberRegex = /^([+]|00)?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{2,3}[-\s.]?[0-9]{2,6}([-\s.]?[0-9]{3})?$/im;
function typeOf(arg) {
    return typeof arg;
}
function isFunction(arg) {
    return typeOf(arg) === "function";
}
exports.isFunction = isFunction;
function isString(arg) {
    return typeOf(arg) === "string";
}
exports.isString = isString;
function isObject(arg) {
    return typeOf(arg) === "object";
}
exports.isObject = isObject;
function isNumber(arg) {
    return typeOf(arg) === "number";
}
exports.isNumber = isNumber;
function isBoolean(arg) {
    return typeOf(arg) === "boolean";
}
exports.isBoolean = isBoolean;
function isArray(arg) {
    return Array.isArray(arg);
}
exports.isArray = isArray;
function isInt(arg) {
    return typeOf(arg) === "number" && arg % 1 === 0;
}
exports.isInt = isInt;
function isFloat(arg) {
    return typeOf(arg) === "number" && arg % 1 !== 0;
}
exports.isFloat = isFloat;
function isUndefined(arg) {
    return typeOf(arg) === "undefined";
}
exports.isUndefined = isUndefined;
function isElement(obj) {
    try {
        return obj instanceof HTMLElement;
    }
    catch (e) {
        return isObject(obj) &&
            obj.nodeType === 1 &&
            isObject(obj.style) &&
            isObject(obj.ownerDocument);
    }
}
exports.isElement = isElement;
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }
    if (typeof value === "string") {
        return value.length === 0 || /^[\s\xa0]*$/.test(value);
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    if (value.constructor === Object) {
        return Object.keys(value).length === 0;
    }
    return false;
}
exports.isEmpty = isEmpty;
function isValidPhoneNumber(num) {
    if (!num) {
        return false;
    }
    return validPhoneNumberRegex.test(num.trim());
}
exports.isValidPhoneNumber = isValidPhoneNumber;
function isValidEmail(email) {
    if (!email) {
        return false;
    }
    return validEmailRegex.test(email.trim());
}
exports.isValidEmail = isValidEmail;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(3607);
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2ctbWFwLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2tleS12YWx1ZS1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLWRlZmF1bHQtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9sb2dnZXIvZy1sb2dnZXItcHJpb3JpdHkudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL251bWJlci1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uZmlnL2d0b29scy1jb25maWcudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9kZXByZWNhdGVkLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9maW5hbC1jbGFzcy5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvbWFwcGVyLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9zaW5nbGV0b24uZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3dhdGNoLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZG9tL2NhbnZhcy1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZG9tLWdldC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvYnV0dG9uLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2RheXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvZW5jb2RpbmdzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2ZpbGUtdHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaHR0cC1zdGF0dXMtY29kZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2tleXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbWlzc2luZy1wYXJhbWV0ZXIuZXJyb3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy9uby1kYXRhYmFzZS1jb25uZWN0aW9uLmVycm9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbnVsbC1wb2ludGVyLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL3dyb25nLXBhcmFtZXRlci5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy93cm9uZy10eXBlLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IyZi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tYXRoL3ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvYWpheC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9maWxlLXNpemUtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3J1bnRpbWUtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zaW1wbGUtbG9vcC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zbG92YWstc3RlbW1lci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL2NvbG9yLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvZ2VuZGVyLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy9wYXRoLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvYm91bmRlcnMtMmQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvY2xvc2VzdC0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9jbG9zZXN0LTNkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2NvbGxpc2lvbnMtMmQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvY29sbGlzaW9ucy0zZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9kaXN0YW5jZXMtMmQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvZGlzdGFuY2VzLTNkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2ludGVyc2VjdHMtM2QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3Mvb2JqZWN0cy8yZC9yZWN0LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL29iamVjdHMvMmQvc3BoZXJlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL29iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3Mvb2JqZWN0cy9vYmplY3QtY29udmVydG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QtZGF0YWJhc2UuZml4dHVyZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QuZml4dHVyZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QubWFwcGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9wYWdpbmF0ZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2FuYWx5dGljcy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvYXJyYXktdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2NvZXJjZS11dGlsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9jb2xvci11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGF0ZS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaHRtbC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaW1hZ2UtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9pbnB1dC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWF0aC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWlzYy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvb2JqZWN0LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9wYXJzZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3Byb2Nlc3MtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3JhbmRvbS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcmVmbGVjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc29ydGVkLWFycmF5LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9zdHJpbmctY2hlY2tlcnMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3N0cmluZy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3ZnLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy90aW1lLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy92YWxpZGF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLGdEQUF3QjtBQUV4QixpREFBaUQ7QUFDakQsaURBQXVDO0FBRXZDLGlEQUE2QjtBQUM3QixpREFBcUM7QUFDckMsaURBQW1DO0FBQ25DLGlEQUE4QjtBQUM5QixpREFBaUQ7QUFNakQsaURBQTZCO0FBRTdCLGlEQUF5QjtBQUV6QixpREFBNkI7QUFFN0IsaURBQXVCO0FBQ3ZCLGlEQUF1QjtBQUN2QixpREFBMEI7QUFFMUIsaURBQXlCO0FBRXpCLGlEQUFrRDtBQUNsRCxpREFBeUM7QUFDekMsaURBQXdDO0FBQ3hDLGlEQUF1QztBQUV2QyxpREFBd0I7QUFDeEIsaURBQXdCOzs7Ozs7Ozs7OztBQ2pDeEIsa0RBQXFEO0FBTXJEO0lBVUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFL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R0FBRyxDQUFDLENBQUM7UUFFdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUksR0FBRyxDQUFDLE1BQWMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUksR0FBRyxDQUFDLE1BQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBSSxHQUFHLENBQUMsTUFBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoSSxHQUFHLENBQUMsR0FBRyxDQUFD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LENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQ3hCLEVBQUU7UUFDQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUM7UUFDUCxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXBCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtRQUMzQixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUM7UUFDUCxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBSW5CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ3RCLEVBQUU7UUFDSCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUM7UUFDUCxDQUNJLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUN6QixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNULFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRztnQkFFSixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztLQUNKO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxDQUFTO0lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFNckIsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2hCLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDOUQsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDOUQsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDOUQsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7S0FDakU7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ25HLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1lBRUQsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztLQUNOO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQ7SUFBQTtJQVNBLENBQUM7SUFSaUIsbUJBQUssR0FBbkIsVUFBb0IsSUFBWTtRQUM1QixJQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7QUFUWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE0xQix3Q0FBOEQ7QUFFOUQsU0FBUyxlQUFlLENBQUMsS0FBYTtJQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQ7SUFRSSxlQUFtQyxHQUFXLEVBQ1gsS0FBYSxFQUNiLElBQVksRUFDWixLQUFXO1FBQVgsbUNBQVc7UUFIWCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQzFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQVcsc0JBQUc7YUFBZDtZQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNEJBQVM7YUFBcEI7WUFDSSxPQUFPLFNBQU8sSUFBSSxDQUFDLEdBQUcsVUFBSyxJQUFJLENBQUMsS0FBSyxVQUFLLElBQUksQ0FBQyxJQUFJLE1BQUcsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHVCQUFJO2FBQWY7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0JBQUc7YUFBZDtZQUNJLE9BQU8sZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQkFBRzthQUFkO1lBQ0ksT0FBTyxlQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVhLGFBQU8sR0FBckIsVUFBc0IsS0FBYTtRQUMvQixJQUFNLEtBQUssR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsWUFBVyxLQUFLLFlBQUwsS0FBSywyQkFBSSxLQUFLLE1BQUU7SUFDL0IsQ0FBQztJQUVhLGFBQU8sR0FBckIsVUFBc0IsS0FBYTtRQUMvQixJQUFNLEtBQUssR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsWUFBVyxLQUFLLFlBQUwsS0FBSywyQkFBSSxLQUFLLE1BQUU7SUFDL0IsQ0FBQztJQUVNLDBCQUFVLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNuRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDekY7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBdkRzQixXQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixXQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxVQUFJLEdBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxTQUFHLEdBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixXQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixVQUFJLEdBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQW1EeEQsWUFBQztDQUFBO0FBekRZLHNCQUFLOzs7Ozs7Ozs7OztBQ0ZsQixJQUFNLFVBQVUsR0FBSyxpQ0FBaUMsQ0FBQztBQUN2RCxJQUFNLFlBQVksR0FBRywwQ0FBMEMsQ0FBQztBQUVoRSxJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDZCxxQkFBYTtJQUNiLHlCQUFlO0FBQ25CLENBQUMsRUFIVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFHakI7QUFFRCxTQUFnQixXQUFXLENBQUMsTUFBYztJQUN0QyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEYsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ25DLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNyQjtJQUVELElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDdkI7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBZEQsa0NBY0M7QUFNRDtJQUFBO0lBUUEsQ0FBQztJQURpQixpQkFBSyxHQUFHLFdBQVcsQ0FBQztJQUN0QyxrQkFBQztDQUFBO0FBUlksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0J4QixpREFBK0I7QUFDL0IsaURBQThCO0FBQzlCLGlEQUE0QjtBQUM1QixnREFBd0I7QUFDeEIsaURBQXVCOzs7Ozs7Ozs7OztBQ052QjtJQUNJLGNBQXNDLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDdEQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDO0lBRUQsc0JBQVcsd0JBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBRU0sdUJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7QUF0Qlksb0JBQUk7Ozs7Ozs7Ozs7O0FDRGpCLHdDQUFnRTtBQUNoRSw4Q0FBc0M7QUFFdEM7SUFDSSxlQUFtQyxHQUFNLEVBQWtCLEdBQVk7UUFBWiwrQkFBWTtRQUFwQyxRQUFHLEdBQUgsR0FBRyxDQUFHO1FBQWtCLFFBQUcsR0FBSCxHQUFHLENBQVM7SUFDdkUsQ0FBQztJQUVhLFlBQU0sR0FBcEIsVUFBcUIsS0FBb0I7UUFDckMsT0FBTywwQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRWEsa0JBQVksR0FBMUIsVUFBMkIsS0FBMkI7UUFDbEQsT0FBTztZQUNILENBQUMsRUFBRSwwQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDLEVBQUUsMEJBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEQsQ0FBQztJQUNOLENBQUM7SUFFYSxrQkFBWSxHQUExQixVQUEyQixLQUFtQjtRQUMxQyxPQUFPLElBQUksbUJBQUssQ0FDWiwwQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNoRCwwQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUNwRCwwQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUNsRCwwQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUN2RCxDQUFDO0lBQ04sQ0FBQztJQUVhLGtCQUFZLEdBQTFCLFVBQTJCLEtBQW1CO1FBQzFDLE9BQU8sSUFBSSxtQkFBSyxDQUNaLHdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQzlDLHdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQ2xELHdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ2hELHdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ3JELENBQUM7SUFDTixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFoQ1ksc0JBQUs7Ozs7Ozs7Ozs7O0FDSWxCLFNBQWdCLG1CQUFtQjtJQUMvQixPQUFPO1FBQ0gsTUFBTSxFQUFJO1lBQ04sQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNQO1FBQ0QsS0FBSyxFQUFLLENBQUM7UUFDWCxRQUFRLEVBQUUsQ0FBQztLQUNkLENBQUM7QUFDTixDQUFDO0FBVEQsa0RBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRCxTQUFnQixPQUFPLENBQUMsTUFBYyxFQUFFLElBQVU7SUFDOUMsSUFBTSxNQUFNLEdBQUcsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBRXRDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QixNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNCO1NBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0I7U0FBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBaEJELDBCQWdCQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBZTtJQUN0RCxJQUFNLE1BQU0sZ0JBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDbEMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzQjtTQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDekQsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUMzQztJQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDbEMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzQjtTQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDekQsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUMzQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFmRCxnQ0FlQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxNQUFjLEVBQUUsTUFBYztJQUNwRCxJQUFNLE1BQU0sZ0JBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRXJDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO0tBQ3hDO1NBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDcEQsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7S0FDeEM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUM3QyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztLQUN4QztTQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3BELE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO0tBQ3hDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQWpCRCw4QkFpQkM7Ozs7Ozs7Ozs7O0FDeERELFNBQWdCLGtCQUFrQixDQUM5QixHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsRUFBVSxFQUNWLEVBQVU7SUFFVixJQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLElBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFekIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUU1RixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDUCxPQUFPO1lBQ0gsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztTQUNULENBQUM7S0FDTDtJQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNQLE9BQU87WUFDSCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1QsQ0FBQztLQUNMO0lBRUQsT0FBTztRQUNILENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU07UUFDbkIsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTTtLQUN0QixDQUFDO0FBQ04sQ0FBQztBQS9CRCxnREErQkM7Ozs7Ozs7Ozs7O0FDN0JELFNBQWdCLHFCQUFxQixDQUNqQyxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7SUFFVixJQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLElBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDekIsSUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUV6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUUzRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDUCxPQUFPO1lBQ0gsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1QsQ0FBQztLQUNMO0lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1AsT0FBTztZQUNILENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztTQUNULENBQUM7S0FDTDtJQUVELE9BQU87UUFDSCxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNO1FBQ25CLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU07UUFDbkIsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTTtLQUN0QixDQUFDO0FBQ04sQ0FBQztBQXRDRCxzREFzQ0M7Ozs7Ozs7Ozs7O0FDeENELCtDQUFzRDtBQUV0RCxTQUFnQixxQkFBcUIsQ0FDakMsS0FBYSxFQUNiLEtBQWEsRUFDYixPQUFlLEVBQ2YsS0FBYSxFQUNiLEtBQWEsRUFDYixNQUFjLEVBQ2QsTUFBYztJQUVkLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2hELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBRWhELElBQUksZUFBZSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFO1FBQ3hDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxlQUFlLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUU7UUFDeEMsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLGVBQWUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLGVBQWUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFNLGdCQUFnQixHQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFbkQsT0FBTyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBL0JELHNEQStCQztBQUVELFNBQWdCLHdCQUF3QixDQUNwQyxPQUFlLEVBQ2YsT0FBZSxFQUNmLEtBQWEsRUFDYixLQUFhLEVBQ2IsS0FBYSxFQUNiLEtBQWEsRUFDYixNQUFjLEVBQ2QsTUFBYztJQUVkLE9BQU8sb0JBQW9CLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDdkUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEUsbUJBQW1CLENBQUMsT0FBTyxFQUN2QixPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssR0FBRyxNQUFNLEVBQ2QsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuQixtQkFBbUIsQ0FBQyxPQUFPLEVBQ3ZCLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssR0FBRyxNQUFNLEVBQ2QsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFFNUIsQ0FBQztBQTdCRCw0REE2QkM7QUFFRCxTQUFnQixtQkFBbUIsQ0FDL0IsT0FBZSxFQUNmLE9BQWUsRUFDZixLQUFhLEVBQ2IsS0FBYSxFQUNiLE9BQWUsRUFDZixPQUFlLEVBQ2YsS0FBYSxFQUNiLEtBQWE7SUFHYixJQUFNLFdBQVcsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNsRyxJQUFNLFVBQVUsR0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQztJQUN0RyxJQUFNLFVBQVUsR0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQztJQUd0RyxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxVQUFVLEtBQUssQ0FBQyxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUM7S0FDL0M7SUFFRCxJQUFNLENBQUMsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ25DLElBQU0sQ0FBQyxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFFbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBeEJELGtEQXdCQztBQUVELFNBQWdCLG1CQUFtQixDQUMvQixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDNUUsQ0FBQztBQVhELGtEQVdDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQ25DLEVBQVUsRUFDVixFQUFVLEVBQ1YsT0FBZSxFQUNmLEVBQVUsRUFDVixFQUFVLEVBQ1YsT0FBZTtJQUVmLE9BQU8sbUNBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUNyRSxDQUFDO0FBVEQsMERBU0M7QUFFRCxTQUFnQixvQkFBb0IsQ0FDaEMsTUFBYyxFQUNkLE1BQWMsRUFDZCxLQUFhLEVBQ2IsS0FBYSxFQUNiLEtBQWEsRUFDYixLQUFhO0lBRWIsT0FBTyxNQUFNLElBQUksS0FBSztRQUNsQixNQUFNLElBQUksS0FBSztRQUNmLE1BQU0sSUFBSSxLQUFLLEdBQUcsS0FBSztRQUN2QixNQUFNLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNoQyxDQUFDO0FBWkQsb0RBWUM7QUFFRCxTQUFnQiwwQkFBMEIsQ0FDdEMsTUFBYyxFQUNkLE1BQWMsRUFDZCxJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixJQUFZO0lBRVosT0FBTyxNQUFNLElBQUksSUFBSTtRQUNqQixNQUFNLElBQUksSUFBSTtRQUNkLE1BQU0sSUFBSSxJQUFJO1FBQ2QsTUFBTSxJQUFJLElBQUksQ0FBQztBQUN2QixDQUFDO0FBWkQsZ0VBWUM7QUFFRCxTQUFnQixzQkFBc0IsQ0FDbEMsTUFBYyxFQUNkLE1BQWMsRUFDZCxPQUFlLEVBQ2YsT0FBZSxFQUNmLFlBQW9CO0lBRXBCLE9BQU8sbUNBQW9CLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFDO0FBQ2xGLENBQUM7QUFSRCx3REFRQzs7Ozs7Ozs7Ozs7QUN4SkQsdUNBQWlEO0FBQ2pELDZDQUFxRDtBQUNyRCwrQ0FBc0Q7QUFDdEQsK0NBQTJFO0FBQzNFLGdEQUEwRDtBQUUxRCxTQUFnQixZQUFZLENBQ3hCLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLE9BQWUsRUFDZixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixPQUFlO0lBRWYsSUFBTSxJQUFJLEdBQUcsbUNBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUxRCxPQUFPLElBQUksSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3JDLENBQUM7QUFiRCxvQ0FhQztBQUVELFNBQWdCLFdBQVcsQ0FDdkIsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsT0FBZTtJQUVmLElBQU0sSUFBSSxHQUFHLG1DQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFMUQsT0FBTyxJQUFJLElBQUksT0FBTyxDQUFDO0FBQzNCLENBQUM7QUFaRCxrQ0FZQztBQUVELFNBQWdCLFVBQVUsQ0FDdEIsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sa0NBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDeEUsQ0FBQztBQWJELGdDQWFDO0FBRUQsSUFBWSxnQkFLWDtBQUxELFdBQVksZ0JBQWdCO0lBQ3hCLHVDQUE0QjtJQUM1QixxQ0FBMkI7SUFDM0IseURBQXFDO0lBQ3JDLHlEQUFxQztBQUN6QyxDQUFDLEVBTFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFLM0I7QUFHRCxTQUFnQixRQUFRLENBQ3BCLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLE1BQXFCO0lBRXJCLElBQU0sSUFBSSxHQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDMUIsSUFBTSxJQUFJLEdBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUMxQixJQUFNLElBQUksR0FBTSxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzFCLElBQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN6QixJQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRXpCLElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLEtBQUssQ0FBQztJQUNWLElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLEtBQUssQ0FBQztJQUVWLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRTtRQUNkLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxHQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUNsQztTQUFNO1FBQ0gsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLEdBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ2xDO0lBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1FBQ2QsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMvQixLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ2xDO1NBQU07UUFDSCxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQy9CLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDbEM7SUFDRCxJQUFJLEtBQUssR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtRQUMvQixPQUFPLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztLQUNuQztJQUNELElBQUksT0FBTyxJQUFJLENBQUMsRUFBRTtRQUNkLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDL0IsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUNsQztTQUFNO1FBQ0gsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMvQixLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ2xDO0lBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUU7UUFDL0IsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7S0FDbkM7SUFDRCxLQUFLLEdBQU0sS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pELElBQUksR0FBTyxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsS0FBSyxHQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pDLElBQUksR0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2QyxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtRQUN6QyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2IsSUFBSSxHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1NBQzVDO2FBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNiLElBQUksR0FBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3QzthQUFNLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7U0FDbEM7YUFBTTtZQUNILElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QztRQUNELE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ25CO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQTlFRCw0QkE4RUM7QUFFRCxTQUFnQixRQUFRLENBQ3BCLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLE1BQWMsRUFDZCxPQUFlLEVBQ2YsTUFBYztJQUVkLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQUU7UUFDOUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxHQUFHLEVBQUU7UUFDNUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBZEQsNEJBY0M7QUFFRCxTQUFnQixjQUFjLENBQzFCLEtBQWEsRUFDYixLQUFhLEVBQ2IsS0FBYSxFQUNiLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWTtJQUVaLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJO1FBQ2xELEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQ3hELENBQUM7QUFiRCx3Q0FhQztBQUVELFNBQWdCLE9BQU8sQ0FDbkIsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsS0FBYSxFQUNiLEtBQWEsRUFDYixLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQWMsRUFDZCxNQUFjO0lBRWQsT0FBTyx1Q0FBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDeEMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2IsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUMvQyx1Q0FBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDakMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2IsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuRCx1Q0FBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDakMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2IsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuRCx1Q0FBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDakMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2IsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuRCx1Q0FBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDakMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2IsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuRCx1Q0FBdUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDakMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2IsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzVELENBQUM7QUE1Q0QsMEJBNENDO0FBRUQsU0FBZ0IsV0FBVyxDQUN2QixHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxPQUFlLEVBQ2YsT0FBZSxFQUNmLE9BQWUsRUFDZixhQUFxQjtJQUVyQixJQUFJLEVBQUUsR0FBTSxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLElBQUksRUFBRSxHQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdEIsSUFBSSxFQUFFLEdBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN0QixJQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMvRSxJQUFNLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN4QyxJQUFNLENBQUMsR0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNQLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO0tBQ3RCO1NBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2QsRUFBRSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDbkIsRUFBRSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDbkIsRUFBRSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7S0FDdEI7U0FBTTtRQUNILElBQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsR0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEVBQUUsR0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEVBQUUsR0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDO0tBQzNCO0lBQ0QsSUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFekMsT0FBTyxJQUFJLElBQUksYUFBYSxDQUFDO0FBQ2pDLENBQUM7QUFyQ0Qsa0NBcUNDO0FBRUQsU0FBZ0IsTUFBTSxDQUNsQixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7SUFFVixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUMvQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7UUFDNUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckMsQ0FBQztBQWpCRCx3QkFpQkM7QUFFRCxTQUFnQixjQUFjLENBQzFCLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEtBQWEsRUFDYixLQUFhLEVBQ2IsS0FBYSxFQUNiLE1BQWMsRUFDZCxNQUFjLEVBQ2QsTUFBYztJQUVkLElBQU0sUUFBUSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDNUIsSUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUM1QixJQUFNLFFBQVEsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRTVCLElBQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELElBQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELElBQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBRXJELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFwQkQsd0NBb0JDO0FBRUQsU0FBZ0IsYUFBYSxDQUN6QixPQUFlLEVBQ2YsT0FBZSxFQUNmLE9BQWUsRUFDZixLQUFhLEVBQ2IsS0FBYSxFQUNiLEtBQWEsRUFDYixLQUFhLEVBQ2IsS0FBYSxFQUNiLEtBQWEsRUFDYixNQUFjLEVBQ2QsTUFBYyxFQUNkLE1BQWM7SUFFZCxJQUFNLEtBQUssR0FBRyxrQ0FBcUIsQ0FDL0IsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLENBQ1IsQ0FBQztJQUVGLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbEcsQ0FBQztBQTNCRCxzQ0EyQkM7QUFFRCxTQUFnQixhQUFhLENBQ3pCLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLE9BQWUsRUFDZixPQUFlO0lBRWYsSUFBTSxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUNsRCxJQUFNLFlBQVksR0FBRyxtQ0FBb0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7SUFFcEUsT0FBTyxZQUFZLElBQUksWUFBWSxDQUFDO0FBQ3hDLENBQUM7QUFkRCxzQ0FjQztBQUVELFNBQWdCLGNBQWMsQ0FDMUIsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsT0FBZSxFQUNmLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLE9BQWUsRUFDZixPQUFlO0lBRWYsSUFBTSxZQUFZLEdBQUcsRUFBRSxHQUFHLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3RFLElBQU0sWUFBWSxHQUFHLG1DQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFOUUsT0FBTyxZQUFZLElBQUksWUFBWSxDQUFDO0FBQ3hDLENBQUM7QUFmRCx3Q0FlQztBQUVELFNBQWdCLG1CQUFtQixDQUMvQixPQUFlLEVBQ2YsT0FBZSxFQUNmLE9BQWUsRUFDZixhQUFxQixFQUNyQixJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVk7SUFFWixJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFPNUIsSUFBTSxJQUFJLEdBQUssVUFBQyxHQUFZO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2YsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBQ0YsSUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztJQUM3QixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckQsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVyRCxPQUFPLE9BQU8sSUFBSSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQW5DRCxrREFtQ0M7Ozs7Ozs7Ozs7O0FDeFlELFNBQWdCLG9CQUFvQixDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7SUFDL0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUZELG9EQUVDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtJQUNsRixJQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFdEIsT0FBTyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDekMsQ0FBQztBQUxELDBEQUtDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQ2xDLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFURCx3REFTQztBQUVELFNBQWdCLHlCQUF5QixDQUNyQyxFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7SUFFVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFURCw4REFTQztBQUVELFNBQWdCLHFCQUFxQixDQUNqQyxFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQVJELHNEQVFDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQ3BDLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVO0lBRVYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBUkQsNERBUUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FDL0IsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVO0lBRVYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBVEQsa0RBU0M7QUFFRCxTQUFnQixzQkFBc0IsQ0FDbEMsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVO0lBRVYsSUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNsQixJQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLElBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVsQixJQUFNLEdBQUcsR0FBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLElBQUksS0FBSyxHQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtRQUNwQixLQUFLLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztLQUM5QjtJQUVELElBQUksRUFBVSxDQUFDO0lBQ2YsSUFBSSxFQUFVLENBQUM7SUFFZixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDWCxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNYO1NBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ2xCLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDUixFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQ1g7U0FBTTtRQUNILEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNwQixFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDdkI7SUFFRCxJQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ25CLElBQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFbkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQXRDRCx3REFzQ0M7Ozs7Ozs7Ozs7O0FDdEdELHVDQUFrQztBQUVsQyxTQUFnQixvQkFBb0IsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7SUFDdkcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRkQsb0RBRUM7QUFFRCxTQUFnQix1QkFBdUIsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7SUFDMUcsSUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixJQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFdEIsT0FBTyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN6RCxDQUFDO0FBTkQsMERBTUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FDL0IsT0FBZSxFQUNmLE9BQWUsRUFDZixPQUFlLEVBQ2YsS0FBYSxFQUNiLEtBQWEsRUFDYixLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsUUFBZ0I7SUFFaEIsSUFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQy9CLElBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDL0IsSUFBTSxNQUFNLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNoQyxJQUFNLE1BQU0sR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLElBQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDaEMsSUFBTSxJQUFJLEdBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbkUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2xGO0lBRUQsSUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztJQUMvQixJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQy9CLElBQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDL0IsSUFBTSxNQUFNLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUNsQyxJQUFNLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ2xDLElBQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDbEMsSUFBTSxJQUFJLEdBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbkUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3hGO0lBRUQsT0FBTyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9HLENBQUM7QUFsQ0Qsa0RBa0NDO0FBRUQsU0FBZ0IsMEJBQTBCLENBQUMsT0FBZ0IsRUFBRSxNQUFlLEVBQUUsTUFBZTtJQUN6RixJQUFNLENBQUMsR0FBRyxDQUFDLGNBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTlDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9HLENBQUM7QUFKRCxnRUFJQztBQU1ELFNBQWdCLHFCQUFxQixDQUNqQyxNQUFjLEVBQ2QsTUFBYyxFQUNkLE1BQWMsRUFDZCxJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixNQUFjLEVBQ2QsTUFBYyxFQUNkLE1BQWM7SUFFZCxJQUFNLFlBQVksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ25DLElBQU0sWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsSUFBTSxZQUFZLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztJQUVuQyxJQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ25DLElBQU0sWUFBWSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7SUFDbkMsSUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUVuQyxJQUFNLE1BQU0sR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDekUsSUFBTSxNQUFNLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3pFLElBQU0sTUFBTSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUV6RSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDL0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBRW5ILE9BQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUM3QixDQUFDO0FBM0JELHNEQTJCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkQsaURBQTZCO0FBQzdCLGlEQUE2QjtBQUM3QixpREFBZ0M7QUFDaEMsaURBQWdDO0FBQ2hDLGlEQUErQjtBQUMvQixpREFBK0I7QUFDL0IsaURBQThCO0FBQzlCLGlEQUEwQjtBQUMxQixpREFBZ0M7Ozs7Ozs7Ozs7O0FDUmhDLHVDQUFpRDtBQUVqRCxTQUFnQix1QkFBdUIsQ0FDbkMsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXO0lBRVgsT0FBTyx5QkFBeUIsQ0FDNUIsSUFBSSxjQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsSUFBSSxjQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsSUFBSSxjQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsSUFBSSxjQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsSUFBSSxjQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDN0IsQ0FBQztBQUNOLENBQUM7QUF4QkQsMERBd0JDO0FBRUQsU0FBZ0IseUJBQXlCLENBQ3JDLEVBQWlCLEVBQ2pCLEVBQWlCLEVBQ2pCLEVBQWlCLEVBQ2pCLEVBQWlCLEVBQ2pCLEVBQWlCO0lBRWpCLElBQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sRUFBRSxHQUFLLGNBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sQ0FBQyxHQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV6QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQy9DLElBQU0sQ0FBQyxHQUFHLGNBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyQyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLElBQU0sQ0FBQyxHQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsSUFBTSxDQUFDLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU1QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUUsQ0FBQztBQTFCRCw4REEwQkM7Ozs7Ozs7Ozs7O0FDcERELG9EQUE4RDtBQUc5RDtJQUNJLGNBQ29CLFFBQXVCLEVBQ3ZCLElBQW1CO1FBRG5CLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUV2QyxDQUFDO0lBRUQsc0JBQVcsc0JBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7SUFFTSx1QkFBUSxHQUFmO1FBQ0ksT0FBTywwQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRWEsZUFBVSxHQUF4QixVQUF5QixFQUFtRDtZQUFsRCxNQUFNLGNBQUUsTUFBTTtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU07Z0JBQ3BCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU07YUFDdkI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0QsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTTtnQkFDcEIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTTthQUN2QjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSxlQUFVLEdBQXhCLFVBQXlCLEVBQWtCO1lBQWpCLEdBQUcsV0FBRSxHQUFHO1FBQzlCLElBQU0sSUFBSSxHQUFHO1lBQ1QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDbkIsQ0FBQztRQUVGLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBeENZLG9CQUFJOzs7Ozs7Ozs7OztBQ0hqQixvREFBOEQ7QUFFOUQ7SUFDSSxnQkFDb0IsTUFBYyxFQUNkLE1BQXFCO1FBRHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBRXpDLENBQUM7SUFFRCxzQkFBVywyQkFBTzthQUFsQjtZQUNJLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHdCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBRWEsaUJBQVUsR0FBeEIsVUFBeUIsRUFBa0IsRUFBRSxVQUFpQztZQUFwRCxHQUFHLFdBQUUsR0FBRztRQUFXLCtDQUFpQztRQUMxRSxJQUFNLE1BQU0sR0FBRztZQUNYLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUN6QixDQUFDO1FBRUYsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFNLE1BQU0sR0FBRyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEYsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVhLGtCQUFXLEdBQXpCLFVBQTBCLE9BQWdCLEVBQUUsVUFBaUM7UUFBakMsK0NBQWlDO1FBQ3pFLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQywwQ0FBc0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUFoQ1ksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLGdEQUEwQjtBQUMxQixpREFBNEI7QUFDNUIsaURBQW9DOzs7Ozs7Ozs7OztBQ0FwQyxTQUFnQixzQkFBc0IsQ0FBQyxFQUFrQjtRQUFqQixHQUFHLFdBQUUsR0FBRztJQUM1QyxPQUFPO1FBQ0gsUUFBUSxFQUFFO1lBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLEVBQUU7WUFDRixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNuQjtLQUNKLENBQUM7QUFDTixDQUFDO0FBWEQsd0RBV0M7QUFDRCxTQUFnQixzQkFBc0IsQ0FBQyxFQUF5QjtRQUF4QixRQUFRLGdCQUFFLElBQUk7SUFDbEQsT0FBTztRQUNILEdBQUcsRUFBRTtZQUNELENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNiLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNoQjtRQUNELEdBQUcsRUFBRTtZQUNELENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0tBQ0osQ0FBQztBQUNOLENBQUM7QUFYRCx3REFXQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJELG1EQUFxRDtBQUdyRDtJQUFtRSwyQ0FBb0I7SUFJbkYsaUNBQXNCLElBQVcsRUFBRSxNQUFtQztRQUF0RSxZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUdkO1FBRkcsS0FBSSxDQUFDLE9BQU8sR0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUNyQyxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLENBVGtFLGtDQUFlLEdBU2pGO0FBVHFCLDBEQUF1Qjs7Ozs7Ozs7Ozs7QUNIN0M7SUFHSSx5QkFBc0MsSUFBVztRQUFYLFNBQUksR0FBSixJQUFJLENBQU87UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQztBQU5xQiwwQ0FBZTs7Ozs7Ozs7Ozs7QUNBckM7SUFBQTtJQUlBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUM7QUFKcUIsd0NBQWM7Ozs7Ozs7Ozs7O0FDQXBDO0lBS0ksdUJBQW1CLEtBQW9DLEVBQUUsTUFBVTtRQUFoRCxnQ0FBUSxhQUFhLENBQUMsY0FBYztRQUFFLG1DQUFVO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUksQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRWEsc0JBQVEsR0FBdEIsVUFBdUIsUUFBd0I7UUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxhQUFhLENBQ3BCLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQ3JFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFsQmEsNEJBQWMsR0FBRyxFQUFFLENBQUM7SUFtQnRDLG9CQUFDO0NBQUE7QUFwQlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTFCLGlEQUE0QztBQUM1QyxpREFBK0I7QUFDL0IsaURBQWlDO0FBQ2pDLGlEQUFtQztBQUVuQyxpREFBd0M7QUFDeEMsaURBQXNDO0FBQ3RDLGlEQUE4QztBQUM5QyxpREFBeUM7QUFDekMsaURBQWdDO0FBQ2hDLGdEQUE0QjtBQUM1QixpREFBMEM7QUFDMUMsaURBQXVCO0FBQ3ZCLGlEQUF1QjtBQUN2QixpREFBa0M7QUFDbEMsaURBQWtDO0FBQ2xDLGlEQUF1QztBQUN2QyxpREFBeUM7QUFDekMsaURBQWlDO0FBQ2pDLGlEQUFtQztBQUNuQyxpREFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ0QyxTQUFnQixJQUFJO0lBQ2hCLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCxvQkFFQztBQUtELFNBQWdCLEtBQUs7SUFDakIsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUZELHNCQUVDO0FBS0QsU0FBZ0IsTUFBTTtJQUNsQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRkQsd0JBRUM7QUFLRCxTQUFnQixNQUFNO0lBQ2xCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGRCx3QkFFQztBQUtELFNBQWdCLFFBQVE7SUFDcEIsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDMUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFKRCw0QkFJQztBQUtELFNBQWdCLEtBQUs7SUFDakIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRkQsc0JBRUM7QUFLRCxTQUFnQixXQUFXOztJQUN2Qix5QkFBUSxNQUFjLDBDQUFFLE1BQU0sMENBQUUsR0FBRywwQ0FBRSxPQUFPLENBQUM7QUFDakQsQ0FBQztBQUZELGtDQUVDO0FBS0QsU0FBZ0IsS0FBSztJQUNqQixPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRkQsc0JBRUM7QUFLRCxTQUFnQixLQUFLO0lBQ2pCLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFGRCxzQkFFQztBQUtELFNBQWdCLFVBQVU7SUFDdEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRkQsZ0NBRUM7QUFLRCxTQUFnQixPQUFPO0lBQ25CLE9BQU8sY0FBYyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDdEQsQ0FBQztBQUZELDBCQUVDO0FBS0QsU0FBZ0IsUUFBUTtJQUNwQixPQUFPLGFBQWEsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQ3JELENBQUM7QUFGRCw0QkFFQzs7Ozs7Ozs7Ozs7QUM3RUQsU0FBZ0IsS0FBSyxDQUFvQyxLQUFVLEVBQUUsU0FBcUI7SUFDdEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUM3QyxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBRUQsSUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLElBQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztRQUNaLElBQU0sR0FBRyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFDLGNBQWMsSUFBSyxRQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBWSxDQUFDLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUM7UUFDN0csSUFBSSxHQUFHLEVBQUU7WUFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQXBCRCxzQkFvQkM7QUFRRCxTQUFnQixhQUFhLENBQ3pCLElBQVMsRUFDVCxHQUFRLEVBQ1IsVUFBdUQ7SUFBdkQsb0RBQXVDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLENBQUMsRUFBUCxDQUFPO0lBRXZELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDaEI7S0FDSjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFoQkQsc0NBZ0JDO0FBUUQsU0FBZ0IsbUJBQW1CLENBQy9CLElBQVMsRUFDVCxHQUFRLEVBQ1IsVUFBdUQ7SUFBdkQsb0RBQXVDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLENBQUMsRUFBUCxDQUFPO0lBRXZELElBQU0sbUJBQW1CLEdBQTRCLEVBQUUsQ0FBQztJQUV4RCxJQUFNLFFBQVEsR0FBUSxFQUFFLENBQUM7SUFDekIsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1FBQ1YsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxpQkFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBRWhFLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN6QztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksbUJBQW1CLEVBQUU7WUFDMUIsT0FBTztTQUNWO1FBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sRUFBQyxLQUFLLFNBQUUsUUFBUSxZQUFDLENBQUM7QUFDN0IsQ0FBQztBQTNCRCxrREEyQkM7QUFXRCxTQUFnQixRQUFRLENBQVUsS0FBVSxFQUFFLFFBQVksRUFBRSxRQUEyQjtJQUF6Qyx1Q0FBWTtJQUFFLHNDQUFXLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUNuRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUN2QixJQUFNLEtBQUssR0FBUyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMxRSxLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVhELDRCQVdDO0FBU0QsU0FBZ0IsR0FBRyxDQUFDLEtBQWU7SUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFURCxrQkFTQztBQVNELFNBQWdCLEdBQUcsQ0FBQyxLQUFlO0lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLENBQUMsQ0FBQztLQUNaO0lBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBVEQsa0JBU0M7QUFTRCxTQUFnQixHQUFHLENBQUMsS0FBZTtJQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxHQUFHLENBQUMsRUFBTCxDQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBVEQsa0JBU0M7QUFTRCxTQUFnQixHQUFHLENBQUMsS0FBZTtJQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxHQUFHLENBQUMsRUFBTCxDQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3hELENBQUM7QUFURCxrQkFTQztBQWNELFNBQWdCLElBQUksQ0FBSSxLQUFVLEVBQUUsU0FBaUIsRUFBRSxNQUFXLEVBQUUsT0FBWTtJQUF6QixvQ0FBVztJQUFFLHNDQUFZO0lBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7S0FDbkM7SUFFRCxPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNwRCxDQUFDO0FBTkQsb0JBTUM7QUFXRCxTQUFnQixPQUFPLENBQUksS0FBVTtJQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQU5ELDBCQU1DO0FBUUQsU0FBZ0IsYUFBYSxDQUFjLEtBQVU7SUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBVEQsc0NBU0M7QUFFRCxTQUFnQixVQUFVLENBQUksSUFBUyxFQUFFLEtBQWE7SUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtRQUNsQyxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUssQ0FBQztJQUU1QixPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFO1FBQ3pCLElBQU0sVUFBVSxHQUFHLGFBQWEsQ0FBSSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLFVBQVUsRUFBRTtZQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUI7S0FDSjtJQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBSSxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBckJELGdDQXFCQztBQVVELFNBQWdCLFVBQVUsQ0FBSSxLQUFVO0lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQU5ELGdDQU1DO0FBT0QsU0FBZ0IsU0FBUyxDQUFJLEdBQVEsRUFBRSxRQUE4QjtJQUNqRSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELDhCQU1DOzs7Ozs7Ozs7OztBQzlSRCxTQUFnQixxQkFBcUIsQ0FBSSxLQUFRO0lBQzdDLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFHLEtBQU8sS0FBSyxPQUFPLENBQUM7QUFDcEQsQ0FBQztBQUZELHNEQUVDOzs7Ozs7Ozs7OztBQ0ZELDZDQUFxQztBQUVyQyxJQUFNLE1BQU0sR0FBa0Q7SUFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDdEIsR0FBRyxFQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbEIsSUFBSSxFQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDckIsQ0FBQztBQUVGLFNBQWdCLFNBQVMsQ0FDckIsU0FBMkMsRUFDM0MsT0FBeUMsRUFDekMsUUFBZ0I7SUFFaEIsSUFBTSxHQUFHLEdBQUssUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBTSxJQUFJLEdBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEUsT0FBTztRQUNILGtCQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDbEIsa0JBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNwQixrQkFBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ25CLGtCQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7S0FDdkIsQ0FBQztBQUNOLENBQUM7QUFoQkQsOEJBZ0JDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYztJQUM5RCxJQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLElBQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEIsSUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUIsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLElBQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEIsSUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUIsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLElBQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkMsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVuQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7QUFkRCxzQ0FjQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxLQUFhO0lBQ2pDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBSkQsMEJBSUM7QUFFRCxTQUFnQixVQUFVLENBQUMsS0FBYSxFQUFFLE9BQWU7SUFDckQsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLElBQU0sQ0FBQyxHQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekIsSUFBTSxDQUFDLEdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN6QixJQUFNLENBQUMsR0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRXpCLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQVJELGdDQVFDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztJQUNuRCxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO1FBQy9ELENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUs7UUFDdkMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFKRCwwQkFJQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxHQUFXO0lBQy9CLElBQU0sS0FBSyxHQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7SUFFNUQsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RDLENBQUM7QUFMRCwwQkFLQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxHQUFXO0lBQy9CLE9BQU87UUFDSCxHQUFHLElBQUksRUFBRTtRQUNULEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNmLEdBQUcsR0FBRyxJQUFJO0tBQ2IsQ0FBQztBQUNOLENBQUM7QUFORCwwQkFNQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxHQUFXO0lBQy9CLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRkQsMEJBRUM7QUFFRCxTQUFnQixPQUFPLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ25ELE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEtBQWE7SUFDcEMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDZixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4QjtJQUVELElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztJQUNyRixJQUFJLFNBQVMsRUFBRTtRQUNYLE9BQU87WUFDSCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUM3QixDQUFDO0tBQ0w7SUFFRCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7SUFDOUYsSUFBSSxRQUFRLEVBQUU7UUFDVixPQUFPO1lBQ0gsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDNUIsQ0FBQztLQUNMO0lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBeEJELGdDQXdCQzs7Ozs7Ozs7Ozs7QUNqSEQsU0FBZ0IsV0FBVyxDQUFtQyxHQUFNO0lBQ2hFLElBQUk7UUFDQSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ2pDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUM7QUFSRCxrQ0FRQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQsNENBQW1FO0FBdUJuRSxTQUFnQixlQUFlLENBQUMsT0FBb0I7SUFDaEQsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQU0sRUFBRSxHQUFRLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbkQsSUFBTSxNQUFNLEdBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUU1RixPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUUsQ0FBQztBQU5ELDBDQU1DO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLE9BQW9CLEVBQUUsY0FBMEI7SUFBMUIsMkRBQTBCO0lBQ3hFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUViLElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBZTtRQUNoQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksR0FBaUIsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEMsSUFBSSxHQUFpQixJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJLEdBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxHQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFJLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQyxDQUFDO0lBRUYsSUFBTSxhQUFhLEdBQUcsVUFBQyxDQUFlO1FBQ2xDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxHQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksR0FBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxRQUFRLENBQUMsV0FBVyxHQUFLLGdCQUFnQixDQUFDO1FBQzFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO0lBQ3pDLENBQUMsQ0FBQztJQUVGLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFnQixDQUFDO0lBQ3BFLElBQUksTUFBTSxFQUFFO1FBQ1IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUN6RDtTQUFNO1FBQ0gsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUMxRDtJQUVELFNBQVMsZ0JBQWdCO1FBQ3JCLFFBQVEsQ0FBQyxXQUFXLEdBQUssSUFBSSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPO1FBQ0gsS0FBSyxFQUFFO1lBQ0gsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUM1RDtpQkFBTTtnQkFDSCxPQUFPLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQzdEO1FBQ0wsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBL0NELGtDQStDQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxPQUEyQjtJQUNuRCxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTdDLElBQUksK0NBQW1DLEVBQUU7UUFDckMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDcEM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBUkQsa0NBUUM7QUFFRCxTQUFnQixjQUFjLENBQUMsS0FBYSxFQUFFLFFBQW9DLEVBQUUsT0FBZTtJQUFmLHlDQUFlO0lBQy9GLElBQU0sWUFBWSxHQUFxQixhQUFhLENBQUMsT0FBTyxFQUFFO1FBQzFELE9BQU87UUFDUCxJQUFJLEVBQU0sVUFBVTtRQUNwQixRQUFRLEVBQUUsY0FBTSxlQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUE5QixDQUE4QjtLQUNqRCxDQUFDLENBQUM7SUFFSCxPQUFPLGFBQWEsQ0FBQyxPQUFPLEVBQUU7UUFDMUIsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixRQUFRLEVBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztLQUNwRixDQUFDLENBQUM7QUFDUCxDQUFDO0FBWEQsd0NBV0M7QUFFRCxTQUFnQixhQUFhLENBQXdDLElBQU8sRUFBRSxPQUEyQjtJQUNyRyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFJLElBQUksQ0FBQyxDQUFDO0lBQy9DLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDVixPQUFPLE1BQU0sQ0FBQztLQUNqQjtJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztRQUNsQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNkLEtBQUssV0FBVztnQkFDWixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1QsTUFBMkIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtvQkFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFRLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN6QixNQUFNLENBQUMsTUFBTSxPQUFiLE1BQU0sRUFBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQzlCO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNCO2dCQUNELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQy9CO2dCQUNELE1BQU07WUFDVjtnQkFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQTNDRCxzQ0EyQ0M7QUFNRCxTQUFnQiw0QkFBNEIsQ0FBQyxLQUFpQixFQUFFLE9BQWlDO0lBQXBELHlDQUFpQjtJQUMxRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztRQUN2QixJQUFNLEtBQUssR0FBcUIsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxJQUFJLEVBQU8sT0FBTztZQUNsQixTQUFTLEVBQUUsUUFBUTtZQUNuQixLQUFLLEVBQU0sS0FBSztZQUNoQixPQUFPLEVBQUUsT0FBTyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxjQUFNLGNBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDL0UsUUFBUSxFQUFHO2dCQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBZkQsb0VBZUM7QUFFRCxTQUFnQixXQUFXLENBQXdDLE1BQW1CLEVBQUUsSUFBTztJQUFFLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsZ0NBQW9COztJQUNqSCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUE4QixJQUFJLFNBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUFDO0lBQzlGLElBQUksTUFBTSxFQUFFO1FBQ1IsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQVBELGtDQU9DO0FBRUQsU0FBZ0Isb0JBQW9CLENBQXdDLE1BQW1CLEVBQUUsSUFBTztJQUFFLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsZ0NBQW9COztJQUMxSCxJQUFNLE1BQU0sR0FBRyxXQUFXLCtCQUFJLE1BQU0sRUFBRSxJQUFJLEdBQUssT0FBTyxFQUFDLENBQUM7SUFDeEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBTEQsb0RBS0M7Ozs7Ozs7Ozs7O0FDdkxELDZDQUEwRDtBQUUxRCxTQUFnQixjQUFjLENBQUMsS0FBdUI7SUFDbEQsSUFBTSxNQUFNLEdBQUcsMEJBQWEsQ0FBQyxRQUFRLEVBQUU7UUFDbkMsS0FBSyxFQUFHLEtBQUssQ0FBQyxLQUFLO1FBQ25CLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtLQUN2QixDQUFDLENBQUM7SUFDRixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBOEIsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3RSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQVJELHdDQVFDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsS0FBYTtJQUMxQyxPQUFPLHdCQUFXLENBQUM7UUFDZixHQUFHLEVBQUUsS0FBSztLQUNiLENBQUMsQ0FBQztBQUNQLENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxRQUFxRCxFQUFFLEtBQWEsRUFBRSxNQUFjO0lBQWQsdUNBQWM7SUFDNUcsSUFBTSxNQUFNLEdBQUcsMEJBQWEsQ0FBQyxRQUFRLEVBQUU7UUFDbkMsS0FBSztRQUNMLE1BQU07S0FDVCxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQTZCLENBQUMsQ0FBQztJQUU5RCxPQUFPLE1BQU0sQ0FBQztBQUVsQixDQUFDO0FBVEQsa0NBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JELGlEQUFrQztBQUNsQyxpREFBOEI7QUFDOUIsaURBQThCO0FBQzlCLGlEQUE4QjtBQUM5QixpREFBNkI7QUFDN0IsaURBQTZCO0FBQzdCLGlEQUE4QjtBQUM5QixpREFBNkI7QUFDN0IsaURBQTZCO0FBQzdCLGlEQUE2QjtBQUM3QixpREFBcUM7QUFLckMsZ0RBQThCO0FBQzlCLGlEQUErQjtBQUMvQixpREFBK0I7QUFDL0IsaURBQWdDO0FBQ2hDLGlEQUFtQztBQUNuQyxpREFBK0I7QUFDL0IsaURBQStCO0FBQy9CLGlEQUE0Qjs7Ozs7Ozs7Ozs7QUN0QjVCLHVDQUF3QztBQUV4QyxTQUFnQixrQkFBa0IsQ0FBQyxLQUFpQjtJQUNoRCxPQUFPLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRkQsZ0RBRUM7QUFFRCxTQUFnQix5QkFBeUIsQ0FBQyxNQUE0QjtJQUNsRSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLGNBQU0sQ0FBQyxJQUFJLENBQUM7S0FDdEI7SUFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLGNBQU0sQ0FBQyxNQUFNLENBQUM7S0FDeEI7SUFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLGNBQU0sQ0FBQyxLQUFLLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBVkQsOERBVUM7QUFFRCxTQUFnQixlQUFlLENBQUMsS0FBb0IsRUFBRSxHQUFTO0lBQzNELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUM7QUFDOUIsQ0FBQztBQUZELDBDQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQscURBQXlDO0FBRXpDLFNBQWdCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBWTtJQUN6QyxJQUFNLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFFakMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUpELGtCQUlDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEdBQVcsRUFBRSxRQUFZLEVBQUUsSUFBMEM7SUFBeEQsdUNBQVk7SUFBRSxxQ0FBMEM7SUFDakcsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXBFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBSkQsMENBSUM7QUFFRCxTQUFnQixZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDN0MsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTNDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEUsQ0FBQztBQUxELG9DQUtDO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUN6RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHNCQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1AsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNWO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBWkQsa0RBWUM7QUFFRCxTQUFnQixJQUFJLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxHQUFXO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUZELG9CQUVDO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLEtBQWE7SUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRVYsT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEIsQ0FBQyxFQUFFLENBQUM7S0FDUDtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQVJELHNCQVFDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTtJQUN4RCxPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsb0JBRUM7QUFRRCxTQUFnQixTQUFTLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDOUMsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCw4QkFFQztBQVFELFNBQWdCLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBVztJQUMzQyxPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLElBQWM7SUFDbEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBbUIsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtRQUFwQixJQUFNLElBQUk7UUFDWCxHQUFHLElBQUksSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLENBQUM7QUFQRCwwQkFPQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxTQUFnQixPQUFPLENBQUMsSUFBWSxFQUFFLElBQVk7SUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsMEJBRUM7QUFFRCxJQUFNLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUU1QixTQUFnQixTQUFTLENBQUMsT0FBZTtJQUNyQyxPQUFPLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDM0IsQ0FBQztBQUZELDhCQUVDOzs7Ozs7Ozs7OztBQzVGRCxTQUFnQixZQUFZLENBQUMsT0FBZTtJQUN4QyxJQUFNLElBQUksR0FBYyxFQUFFLENBQUM7SUFDM0IsSUFBTSxJQUFJLEdBQWMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1NBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1FBQ2hCLElBQU0sS0FBSyxHQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFiRCxvQ0FhQztBQWNELFNBQWdCLElBQUksQ0FBSSxHQUFNO0lBQUUsY0FBa0I7U0FBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1FBQWxCLDZCQUFrQjs7SUFDOUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3hCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO1NBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVZELG9CQVVDO0FBTUQsU0FBZ0IscUJBQXFCLENBQUksT0FBZTtJQUNwRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRkQsc0RBRUM7QUFJRCxTQUFnQixTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWdDLEVBQUUsSUFBWTtJQUNsRixJQUFNLENBQUMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRCxJQUFNLFlBQVksR0FBTSxJQUFJLFNBQUksS0FBSyxpQkFBWSxDQUFDLENBQUMsV0FBVyxFQUFJLENBQUM7SUFDbkUsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDakMsUUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7S0FDbEM7SUFFRCxPQUFVLElBQUksU0FBSSxLQUFPLENBQUM7QUFDOUIsQ0FBQztBQVRELDhCQVNDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUErRDtJQUEvRCxrQ0FBUyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDcEcsSUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN6QixJQUFNLEVBQUUsR0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLEtBQWMsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUUsRUFBRTtRQUFiLElBQUksQ0FBQztRQUNOLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QztLQUNKO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBYkQsOEJBYUM7QUFZRCxTQUFnQixXQUFXLENBQUksS0FBb0YsRUFDL0csU0FBZSxFQUNmLFNBQWU7SUFGWSxnQ0FBWSxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMvRywyQ0FBZTtJQUNmLDJDQUFlO0lBQ2YsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO0lBQzVCLElBQU0sSUFBSSxHQUFlLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsS0FBbUIsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtRQUFwQixJQUFNLElBQUk7UUFDTCxTQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQW5DLEdBQUcsVUFBRSxLQUFLLFFBQXlCLENBQUM7UUFDM0MsSUFBSSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDekMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDN0MsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNILFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwRDtLQUNKO0lBRUQsT0FBTyxXQUFnQixDQUFDO0FBQzVCLENBQUM7QUFqQkQsa0NBaUJDO0FBT0QsU0FBZ0IsbUJBQW1CLENBQUMsR0FBdUI7SUFFdkQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLEtBQUssSUFBTSxNQUFNLElBQUksR0FBRyxFQUFFO1FBQ3RCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksTUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUcsTUFBTSxTQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUcsQ0FBQztTQUN4RTtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVZELGtEQVVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQVE7SUFDOUIsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDbkIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMzRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQVJELDhCQVFDO0FBRUQsU0FBZ0IsS0FBSyxDQUFJLEdBQVc7SUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixLQUFLLElBQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLEVBQ3JFO1lBQ0UsU0FBUztTQUNaO1FBQ0QsSUFBSTtZQUVBLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFsQkQsc0JBa0JDO0FBRUQsU0FBZ0IsR0FBRyxDQUFpQixNQUFTLEVBQUUsSUFBMkU7SUFDdEgsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO0lBRTVCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xFO2lCQUFNO2dCQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEU7WUFFRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQztBQXJCRCxrQkFxQkM7Ozs7Ozs7Ozs7O0FDaExELFNBQWdCLE9BQU8sQ0FBb0MsR0FBTSxFQUFFLEtBQWtCO0lBQ2pGLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLFFBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUM7U0FDckUsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsRUFBRSxFQUFPLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBUEQsMEJBT0M7QUFFRCxTQUFnQixTQUFTLENBQUksSUFBTyxFQUFFLElBQU87O0lBQ3pDLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUMxQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksYUFBQyxJQUFZLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxtQkFBTSxJQUFZLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxHQUFFO1lBQ3ZFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWdCLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzFDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsS0FBaUIsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtZQUFuQixJQUFNLEdBQUc7WUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLE9BQVEsSUFBWSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDL0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUM7QUFDekIsQ0FBQztBQW5DRCw4QkFtQ0M7QUFFRCxTQUFnQixRQUFRLENBQUksTUFBUzs7SUFDakMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXZCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxlQUFRLENBQUMsQ0FBQyxDQUFDLEVBQVgsQ0FBVyxDQUFRLENBQUM7U0FDaEQ7UUFDRCxJQUFJLGFBQUMsTUFBYywwQ0FBRSxXQUFXLDBDQUFFLElBQUksTUFBSyxRQUFRLEVBQUU7WUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzlEO1FBR0QsSUFBTSxRQUFNLEdBQWUsRUFBRSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtnQkFBWCxHQUFHLFVBQUUsS0FBSztZQUN0QyxRQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFXLENBQUM7S0FDdEI7SUFFRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtRQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBekJELDRCQXlCQztBQUVELFNBQWdCLGdCQUFnQixDQUFvQyxHQUFNO0lBQ3RFLElBQU0sTUFBTSxHQUFxQixFQUFFLENBQUM7SUFDcEMsS0FBSyxJQUFNLE1BQU0sSUFBSSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsU0FBUztTQUNaO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBSSxNQUFNO1lBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDckIsQ0FBQyxDQUFDO0tBQ047SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBYkQsNENBYUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsWUFBb0IsRUFBRSxTQUFlO0lBQWYsMkNBQWU7SUFDaEYsSUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuRCxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQywwQkFBMEIsRUFBRSxZQUFZLElBQUssaUNBQTBCLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQWpGLENBQWlGLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEssQ0FBQztBQUpELDhDQUlDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUksR0FBVyxFQUFFLElBQVMsRUFBRSxLQUFRO0lBQ2pFLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQztJQUN0QixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQy9DLENBQUM7QUFQRCw4Q0FPQztBQUVELFNBQWdCLGlCQUFpQixDQUFJLE1BQVM7SUFDMUMsSUFBTSxVQUFVLEdBQVMsRUFBRSxDQUFDO0lBQzVCLElBQU0sS0FBSyxHQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsSUFBSSxLQUFLLEdBQWdCLENBQUMsQ0FBQztJQUMzQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsSUFBTSxLQUFLLEdBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2xDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2xDLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixLQUFLLElBQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDckIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUF2QkQsOENBdUJDO0FBRUQsU0FBZ0IsSUFBSSxDQUFrRCxNQUFTO0lBQzNFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBTSxDQUFDLElBQUksTUFBTSxFQUFFO1FBQ3BCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixNQUFNLEVBQUUsQ0FBQztTQUNaO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBVEQsb0JBU0M7QUFFRCxTQUFnQixPQUFPLENBQW9DLE1BQVM7SUFDaEUsS0FBSyxJQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDeEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUNuRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQVJELDBCQVFDO0FBMENELFNBQWdCLFFBQVEsQ0FBQyxJQUFXLEVBQUUsWUFBb0IsRUFBRSxTQUFlLEVBQUUsYUFBcUI7SUFBdEMsMkNBQWU7SUFBRSxxREFBcUI7SUFDOUYsSUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFM0csT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7UUFDekIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sRUFBRSxZQUFZLElBQUssY0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBM0MsQ0FBMkMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoSCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxhQUFhLEVBQUU7WUFDL0MsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBWkQsNEJBWUM7Ozs7Ozs7Ozs7O0FDM01ELFNBQWdCLGlCQUFpQixDQUFDLEdBQVc7SUFDekMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDcEMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQztBQVBELDhDQU9DOzs7Ozs7Ozs7OztBQ0NELFNBQWdCLE1BQU07SUFDbEIsT0FBTyxZQUFvQixLQUFLLE1BQU0sQ0FBQztBQUMzQyxDQUFDO0FBRkQsd0JBRUM7QUFFRCxTQUFnQixNQUFNO0lBQ2xCLE9BQU8sWUFBb0IsS0FBSyxZQUFZLENBQUM7QUFDakQsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsS0FBSztJQUNqQixPQUFPLE1BQXNDLElBQUksQ0FBQyxZQUFvQixDQUFDO0FBQzNFLENBQUM7QUFGRCxzQkFFQztBQUdELFNBQWdCLGNBQWMsQ0FBQyxJQUEyQztBQUUxRSxDQUFDO0FBRkQsd0NBRUM7QUFFRCxTQUFnQixjQUFjO0lBQzFCLE9BQU87UUFDSCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUNsQyxRQUFRLEVBQUssT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUMvQixNQUFNLEVBQU8sT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUM3QixPQUFPLEVBQU0sT0FBTyxDQUFDLE9BQU87UUFDNUIsUUFBUSxFQUFLLE9BQU8sQ0FBQyxRQUFRO0tBQ2hDLENBQUM7QUFDTixDQUFDO0FBUkQsd0NBUUM7QUFFRCxTQUFnQixxQkFBcUI7SUFDakMsSUFBSSxLQUFxQixFQUFFLEVBRTFCO0FBQ0wsQ0FBQztBQUpELHNEQUlDOzs7Ozs7Ozs7OztBQ3ZDRCxTQUFnQixrQkFBa0IsQ0FBQyxHQUFXLEVBQUUsR0FBVztJQUN2RCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELGdEQUVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDckQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCw0Q0FFQztBQUVELFNBQWdCLGFBQWE7SUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQy9CLENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLFVBQVU7SUFBSSxlQUFhO1NBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtRQUFiLDBCQUFhOztJQUN2QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRkQsZ0NBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQsU0FBZ0IsV0FBVyxDQUFDLElBQVMsRUFBRSxJQUFXO0lBQzlDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXZCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFMRCxrQ0FLQztBQUVELFNBQXNCLGlCQUFpQjtJQUFDLG1CQUFtQjtTQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7UUFBbkIsOEJBQW1COzs7Ozs7OzBCQUMzQixFQUFULHVCQUFTOzs7eUJBQVQsd0JBQVM7b0JBQWpCLElBQUk7eUJBQ1AsUUFBTyxJQUFJLEtBQUssVUFBVSxHQUExQixjQUEwQjtvQkFFbkIsV0FBTSxJQUFJLEVBQUU7d0JBQW5CLFdBQU8sU0FBWSxFQUFDOztvQkFIVCxJQUFTOzs7Ozs7Q0FNL0I7QUFQRCw4Q0FPQzs7Ozs7Ozs7Ozs7QUNYRCxTQUFnQixZQUFZLENBQUksS0FBbUIsRUFBRSxJQUFPLEVBQUUsVUFBa0M7SUFDNUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFekIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1gsSUFBTSxDQUFDLEdBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDYjthQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNoQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNiO2FBQU07WUFDSCxPQUFPLENBQUMsQ0FBQztTQUNaO0tBQ0o7SUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQWxCRCxvQ0FrQkM7QUFPRCxTQUFnQixVQUFVLENBQ3RCLEtBQW1CLEVBQ25CLEVBQUssRUFDTCxPQUFzQztJQUV0QyxJQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDVCxPQUFPO0tBQ1Y7SUFFRCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBWEQsZ0NBV0M7QUFFRCxTQUFnQixZQUFZLENBQUksS0FBVSxFQUFFLEtBQVEsRUFBRSxPQUFzQztJQUN4RixJQUFNLEdBQUcsR0FBTSxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxJQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUvQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBTkQsb0NBTUM7QUFJRCxTQUFnQixlQUFlLENBQzNCLEtBQVUsRUFDVixNQUFXLEVBQ1gsT0FBc0MsRUFDdEMsY0FBc0I7SUFBdEIsdURBQXNCO0lBRXRCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixLQUFvQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtRQUF2QixJQUFNLEtBQUs7UUFDWixXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLElBQUksY0FBYyxJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDcEMsTUFBTTtTQUNUO1FBQ0QsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQztTQUM5QjtRQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN2QztJQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN6QixDQUFDO0FBbkJELDBDQW1CQztBQUVELFNBQWdCLFlBQVksQ0FBSSxLQUFVLEVBQUUsS0FBUSxFQUFFLE9BQXNDO0lBQ3hGLElBQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNULE9BQU87S0FDVjtJQUNELElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUlyQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVyQixPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFaRCxvQ0FZQztBQVFELFNBQWdCLGFBQWEsQ0FDekIsS0FBbUIsRUFDbkIsTUFBb0IsRUFDcEIsT0FBc0M7SUFFdEMsSUFBSSxFQUFFLEdBQVMsQ0FBQyxDQUFDO0lBQ2pCLElBQUksRUFBRSxHQUFTLENBQUMsQ0FBQztJQUNqQixJQUFNLENBQUMsR0FBUSxFQUFFLENBQUM7SUFDbEIsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM1QyxJQUFNLEVBQUUsR0FBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBTSxDQUFDLEdBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsRUFBRSxFQUFFLENBQUM7U0FDUjthQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNoQixFQUFFLEVBQUUsQ0FBQztTQUNSO2FBQU07WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsRUFBRSxFQUFFLENBQUM7WUFDTCxFQUFFLEVBQUUsQ0FBQztTQUNSO0tBQ0o7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUF4QkQsc0NBd0JDO0FBUUQsU0FBZ0IsZ0JBQWdCLENBQzVCLEtBQW1CLEVBQ25CLE1BQW9CLEVBQ3BCLE9BQXNDO0lBRXRDLElBQUksRUFBRSxHQUFTLENBQUMsQ0FBQztJQUNqQixJQUFJLEVBQUUsR0FBUyxDQUFDLENBQUM7SUFDakIsSUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFDO0lBQ2xCLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDNUMsSUFBTSxFQUFFLEdBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLElBQU0sQ0FBQyxHQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLEVBQUUsQ0FBQztTQUNSO2FBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLEVBQUUsRUFBRSxDQUFDO1NBQ1I7YUFBTTtZQUNILEVBQUUsRUFBRSxDQUFDO1lBQ0wsRUFBRSxFQUFFLENBQUM7U0FDUjtLQUNKO0lBQ0QsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUN0QixJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLEVBQUUsRUFBRSxDQUFDO0tBQ1I7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUE3QkQsNENBNkJDO0FBS0QsU0FBZ0IsZUFBZSxDQUMzQixLQUFtQixFQUNuQixNQUFvQixFQUNwQixPQUFzQztJQUV0QyxJQUFJLEVBQUUsR0FBVSxDQUFDLENBQUM7SUFDbEIsSUFBSSxFQUFFLEdBQVUsQ0FBQyxDQUFDO0lBQ2xCLElBQU0sRUFBRSxHQUFRLEVBQUUsQ0FBQztJQUNuQixJQUFNLEVBQUUsR0FBUSxFQUFFLENBQUM7SUFDbkIsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM1QyxJQUFNLEVBQUUsR0FBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBTSxDQUFDLEdBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLEVBQUUsRUFBRSxDQUFDO1NBQ1I7YUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDaEIsRUFBRSxFQUFFLENBQUM7U0FDUjthQUFNO1lBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLEVBQUUsRUFBRSxDQUFDO1lBQ0wsRUFBRSxFQUFFLENBQUM7U0FDUjtLQUNKO0lBQ0QsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUN0QixJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLEVBQUUsRUFBRSxDQUFDO0tBQ1I7SUFFRCxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUEvQkQsMENBK0JDO0FBUUQsU0FBZ0IsV0FBVyxDQUN2QixLQUFtQixFQUNuQixNQUFvQixFQUNwQixPQUFzQztJQUV0QyxJQUFJLEVBQUUsR0FBUyxDQUFDLENBQUM7SUFDakIsSUFBSSxFQUFFLEdBQVMsQ0FBQyxDQUFDO0lBQ2pCLElBQU0sQ0FBQyxHQUFRLEVBQUUsQ0FBQztJQUNsQixPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzVDLElBQU0sRUFBRSxHQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFNLEVBQUUsR0FBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsRUFBRSxFQUFFLENBQUM7U0FDUjthQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsRUFBRSxFQUFFLENBQUM7U0FDUjthQUFNO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNYLEVBQUUsRUFBRSxDQUFDO1lBQ0wsRUFBRSxFQUFFLENBQUM7U0FDUjtLQUNKO0lBQ0QsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUN2QixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLEVBQUUsRUFBRSxDQUFDO0tBQ1I7SUFDRCxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ3RCLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1YsRUFBRSxFQUFFLENBQUM7S0FDUjtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQXBDRCxrQ0FvQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVPRCw2REFBZ0U7QUFFaEUsSUFBTSxXQUFXLEdBQThCO0lBQzNDLEVBQUUsRUFBSSxrQkFBa0I7SUFDeEIsQ0FBQyxFQUFLLG1CQUFtQjtJQUN6QixFQUFFLEVBQUksWUFBWTtJQUNsQixDQUFDLEVBQUssYUFBYTtJQUNuQixFQUFFLEVBQUksbUJBQW1CO0lBQ3pCLENBQUMsRUFBSyxnQkFBZ0I7SUFDdEIsRUFBRSxFQUFJLFlBQVk7SUFDbEIsQ0FBQyxFQUFLLGFBQWE7SUFDbkIsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixFQUFFLEVBQUksWUFBWTtJQUNsQixFQUFFLEVBQUksWUFBWTtDQUNyQixDQUFDO0FBRUYsU0FBZ0IsV0FBVyxDQUFDLElBQVk7SUFDcEMsT0FBTyxJQUFJLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxPQUFPLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3pDLE9BQU8sSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFGRCw0Q0FFQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDekMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxPQUFPLElBQUksTUFBTSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBWTtJQUNwQyxPQUFPLElBQUksTUFBTSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFnQixZQUFZLENBQUMsSUFBWSxFQUFFLE1BQWM7SUFDckQsS0FBSyxJQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7UUFDM0IsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtLQUNKO0lBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFJLE1BQU0sTUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFSRCxvQ0FRQztBQU1ELFNBQWdCLGtCQUFrQixDQUFDLEdBQVc7SUFDMUMsT0FBTyxjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUZELGdEQUVDO0FBTUQsU0FBZ0IsWUFBWSxDQUFDLEtBQWE7SUFDdEMsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFGRCxvQ0FFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVELDhDQUFxQztBQUNyQyw2REFBb0Q7QUFFcEQsSUFBTSx1QkFBdUIsR0FBRyw0REFBNEQsQ0FBQztBQUM3RixJQUFNLHFCQUFxQixHQUFLLDREQUE0RCxDQUFDO0FBQzdGLElBQU0sa0JBQWtCLEdBQVEsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEcsSUFBTSxnQkFBZ0IsR0FBVSxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQW9CNUYsU0FBZ0Isd0JBQXdCLENBQUMsSUFBWTtJQUNqRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUN4QixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQVM7UUFDaEMsSUFBTSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCw0REFVQztBQVNELFNBQWdCLFFBQVEsQ0FBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxNQUFjLEVBQUUsbUJBQTBCO0lBQTFDLHVDQUFjO0lBQUUsZ0VBQTBCO0lBQ2hHLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUM5RixDQUFDO0FBTkQsNEJBTUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3pDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQzFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUM7YUFDbkMsV0FBVyxFQUFFLENBQUM7S0FDdEI7SUFFRCxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQWhCLENBQWdCLENBQUM7U0FDakUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7U0FDakIsV0FBVyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQWRELDRDQWNDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzthQUMxQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQ25DLFdBQVcsRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsSUFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFoQixDQUFnQixDQUFDO1NBQ2pFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQ2pCLFdBQVcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFiRCw0Q0FhQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDekMsSUFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRTtTQUNiLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7U0FDNUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQztTQUNuQyxXQUFXLEVBQUU7U0FDYixPQUFPLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUF4QixDQUF3QixDQUFDO1NBQ3ZFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFYRCw0Q0FXQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDekMsSUFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQU5ELDRDQU1DO0FBUUQsU0FBZ0IsVUFBVSxDQUFDLElBQVk7SUFDbkMsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztBQUMxRSxDQUFDO0FBRkQsZ0NBRUM7QUFLRCxTQUFnQixTQUFTLENBQUMsSUFBWTtJQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBWSxFQUFFLE9BQWE7SUFBYix1Q0FBYTtJQUNuRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV0QyxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFQRCxrQ0FPQztBQUtELFNBQWdCLEtBQUssQ0FBQyxJQUFZLEVBQUUsR0FBVztJQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDM0QsQ0FBQztBQUZELHNCQUVDO0FBT0QsU0FBZ0IsTUFBTSxDQUFDLElBQVksRUFBRSxtQkFBMkI7SUFDNUQsT0FBTyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFlO0lBQ25ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRkQsOEJBRUM7QUFNRCxTQUFnQixRQUFRLENBQUMsSUFBWSxFQUFFLE1BQTBCLEVBQUUsS0FBWSxFQUFFLEdBQVU7SUFBeEIsb0NBQVk7SUFBRSxnQ0FBVTtJQUN2RixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pGLElBQU0sVUFBVSxHQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFL0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNmLElBQUksTUFBTSxDQUFJLFlBQVksYUFBUSxVQUFZLEVBQUUsR0FBRyxDQUFDLEVBQ3BELFVBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSyxhQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQ3JDLENBQUM7QUFDTixDQUFDO0FBUkQsNEJBUUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlO0lBQzVDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsNENBRUM7QUFTRCxTQUFnQixPQUFPLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWTtJQUFaLG1DQUFZO0lBQzFFLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBYyxJQUFhLFdBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQTdCLENBQTZCLENBQUM7SUFFaEYsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxJQUFNLE1BQU0sR0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQzdCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDbkQ7SUFFRCxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtRQUM3QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzdFO0lBRUQsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFkRCwwQkFjQztBQWNELFNBQWdCLFdBQVcsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLFdBQW1CO0lBQW5CLGlEQUFtQjtJQUN0RSxJQUFJLEtBQUssR0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQixJQUFNLElBQUksR0FBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMzQyxPQUFPLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDZixPQUFPLEVBQUUsQ0FBQztRQUNWLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDM0M7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBVkQsa0NBVUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxJQUFZO0lBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRkQsZ0RBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBWTtJQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtRQUM1QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckMsT0FBTyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCw0QkFNQztBQU9ELFNBQWdCLE1BQU0sQ0FBQyxJQUFZLEVBQUUsTUFBZ0IsRUFBRSxXQUFrQjtJQUFsQixnREFBa0I7SUFDckUsSUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLElBQUksU0FBUyxDQUFDO0lBQ2QsSUFBSSxXQUFXLEdBQVUsQ0FBQyxDQUFDO0lBQzNCLElBQUksT0FBTyxHQUFjLENBQUMsQ0FBQztJQUUzQixPQUFPLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzVCLFNBQVMsR0FBSyxXQUFXLENBQUM7UUFDMUIsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7S0FDckM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUV6QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQWhCRCx3QkFnQkM7QUFFRCxTQUFnQixzQkFBc0IsQ0FBQyxJQUFZO0lBQy9DLE9BQU8sa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuRixDQUFDO0FBRkQsd0RBRUM7QUFPRCxTQUFnQixhQUFhLENBQUMsT0FBZTtJQUN6QyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsS0FBcUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7UUFBekIsSUFBTSxNQUFNO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVBELHNDQU9DO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLElBQVk7SUFDcEMsT0FBTyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBWSxFQUFFLFNBQWlCO0lBQ3BELE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFGLENBQUM7QUFGRCw0QkFFQztBQVNELFNBQWdCLFVBQVUsQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLE9BQWU7SUFDdkUsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekQsT0FBTyxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckQ7SUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN6RCxPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUM7S0FDM0I7SUFFRCxPQUFPLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3RDLENBQUM7QUFWRCxnQ0FVQztBQVNELFNBQWdCLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBZSxFQUFFLE1BQVcsRUFBRSxPQUFZO0lBQTFDLDJDQUFlO0lBQUUsb0NBQVc7SUFBRSxzQ0FBWTtJQUNqRixPQUFPLGtCQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsR0FBVyxFQUFFLE1BQWU7SUFBZix3Q0FBZTtJQUMzRCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUMsT0FBTyxNQUFNLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQWJELGdEQWFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxPQUFlLEVBQUUsR0FBVztJQUNwRCxJQUFJLFVBQVUsR0FBUSxDQUFDLENBQUM7SUFDeEIsSUFBSSxNQUFNLEdBQVksQ0FBQyxDQUFDO0lBQ3hCLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBTSxTQUFTLEdBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUVqQyxPQUFPLFVBQVUsS0FBSyxhQUFhLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUN6RCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUN6QyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFNLE9BQU8sR0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNqQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLFdBQVcsS0FBSyxPQUFPLEVBQUU7WUFDekIsRUFBRSxVQUFVLENBQUM7U0FDaEI7UUFDRCxFQUFFLE1BQU0sQ0FBQztLQUNaO0lBRUQsT0FBTyxhQUFhLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLElBQUksVUFBVSxLQUFLLGFBQWEsQ0FBQztBQUNsRixDQUFDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE9BQWUsRUFBRSxNQUFnQixFQUFFLFdBQW1CO0lBQ2hGLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxjQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFGRCxzQ0FFQzs7Ozs7Ozs7Ozs7QUN6VkQsSUFBTSxLQUFLLEdBQUcsNEJBQTRCLENBQUM7QUFFM0MsU0FBZ0IsU0FBUyxDQUF1QyxJQUFPO0lBQ25FLE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUZELDhCQUVDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLGVBQW1DO0lBQzVELElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQ3JELElBQUksVUFBVSxDQUFDLGFBQWEsS0FBSyxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyx1QkFBdUIsRUFBRTtRQUNyRSxJQUFNLFNBQVMsR0FBSSxlQUFlLENBQUMsZUFBaUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFGLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUVELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBVkQsb0NBVUM7Ozs7Ozs7Ozs7O0FDZEQsSUFBTSxTQUFTLEdBQXNCO0lBQ2pDLE1BQU0sRUFBSSxRQUFRO0lBQ2xCLE9BQU8sRUFBRyxPQUFPO0lBQ2pCLE1BQU0sRUFBSSxNQUFNO0lBQ2hCLEtBQUssRUFBSyxLQUFLO0lBQ2YsTUFBTSxFQUFJLElBQUk7SUFDZCxRQUFRLEVBQUUsRUFBRTtJQUNaLFFBQVEsRUFBRSxDQUFDO0NBQ2QsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbEQsU0FBZ0IsT0FBTyxDQUFDLEtBQTZCO0lBQ2pELElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxPQUFPLEdBQUcsRUFBRSxFQUFFO1lBQ2QsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFDRCxJQUFJLE9BQU8sVUFBQztRQUNaLEtBQThCLFVBQWUsRUFBZixtQ0FBZSxFQUFmLDZCQUFlLEVBQWYsSUFBZSxFQUFFO1lBQXBDLDhCQUFlLEVBQWQsR0FBRyxVQUFFLFFBQVE7WUFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRTtnQkFDZCxTQUFTO2FBQ1o7WUFDRCxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsT0FBVSxPQUFPLFNBQUksR0FBRyxTQUFNLENBQUM7YUFDbEM7WUFFRCxPQUFVLE9BQU8sU0FBSSxHQUFHLFVBQU8sQ0FBQztTQUNuQztLQUNKO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQXJCRCwwQkFxQkM7QUFFRCxTQUFnQixVQUFVLENBQUMsSUFBVSxFQUFFLE9BQWU7SUFDbEQsSUFBTSxRQUFRLEdBQUcsVUFBQyxJQUFZLElBQWEsV0FBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksRUFBbEMsQ0FBa0MsQ0FBQztJQUU5RSxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5RCxJQUFNLEVBQUUsR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBTSxFQUFFLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLElBQU0sR0FBRyxHQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLElBQU0sRUFBRSxHQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQU0sRUFBRSxHQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN4QyxJQUFNLEVBQUUsR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDMUMsSUFBTSxFQUFFLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBQyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxFQUFFO1lBQ1AsS0FBSyxJQUFJO2dCQUNMLE9BQU8sRUFBRSxDQUFDO1lBQ2QsS0FBSyxJQUFJO2dCQUNMLE9BQU8sRUFBRSxDQUFDO1lBQ2QsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLEtBQUssS0FBSztnQkFDTixPQUFPLEdBQUcsQ0FBQztZQUNmLEtBQUssSUFBSTtnQkFDTCxPQUFPLEVBQUUsQ0FBQztZQUNkLEtBQUssSUFBSTtnQkFDTCxPQUFPLEVBQUUsQ0FBQztZQUNkLEtBQUssSUFBSTtnQkFDTCxPQUFPLEVBQUUsQ0FBQztZQUNkLEtBQUssSUFBSTtnQkFDTCxPQUFPLEVBQUUsQ0FBQztZQUNkO2dCQUNJLE9BQU8sQ0FBQyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBbkNELGdDQW1DQztBQUNELFNBQWdCLGVBQWU7SUFDM0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRXpCLElBQU0sU0FBUyxHQUFHLGNBQWMsV0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQztJQUVuRCxPQUFPO1FBQ0gsU0FBUztRQUNULE9BQU8sRUFBUDtZQUNJLE9BQU8sU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQztBQVhELDBDQVdDO0FBRUQsU0FBUyxPQUFPLENBQUMsSUFBVSxFQUFFLEdBQW9EO0lBQzdFLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDUCxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDaEM7SUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjtJQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEI7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBVTtJQUN2QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDakIsRUFBRSxFQUFFLENBQUM7UUFDTCxDQUFDLEVBQUcsQ0FBQztRQUNMLENBQUMsRUFBRyxDQUFDO1FBQ0wsQ0FBQyxFQUFHLENBQUM7S0FDUixDQUFDLENBQUM7QUFDUCxDQUFDO0FBUEQsNENBT0M7QUFFRCxTQUFnQixjQUFjLENBQUMsSUFBVTtJQUNyQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDakIsRUFBRSxFQUFFLEdBQUc7UUFDUCxDQUFDLEVBQUcsRUFBRTtRQUNOLENBQUMsRUFBRyxFQUFFO1FBQ04sQ0FBQyxFQUFHLEVBQUU7S0FDVCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBUEQsd0NBT0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hELGlEQUFrQzs7Ozs7Ozs7Ozs7QUNBbEMsSUFBTSxlQUFlLEdBQVMsdUpBQXVKLENBQUM7QUFDdEwsSUFBTSxxQkFBcUIsR0FBRyxxRkFBcUYsQ0FBQztBQUVwSCxTQUFTLE1BQU0sQ0FBQyxHQUFZO0lBQ3hCLE9BQU8sT0FBTyxHQUFHLENBQUM7QUFDdEIsQ0FBQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxHQUFRO0lBQy9CLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUN0QyxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsR0FBUTtJQUM3QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDcEMsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLEdBQVE7SUFDN0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQ3BDLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFRO0lBQzdCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNwQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixTQUFTLENBQUMsR0FBUTtJQUM5QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUM7QUFDckMsQ0FBQztBQUZELDhCQUVDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEdBQVE7SUFDNUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLEtBQUssQ0FBQyxHQUFRO0lBQzFCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRkQsc0JBRUM7QUFFRCxTQUFnQixPQUFPLENBQUMsR0FBUTtJQUM1QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEdBQVM7SUFDakMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxDQUFDO0FBQ3ZDLENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxHQUFRO0lBQzlCLElBQUk7UUFDQSxPQUFPLEdBQUcsWUFBWSxXQUFXLENBQUM7S0FDckM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUNoQixHQUFHLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNuQztBQUNMLENBQUM7QUFURCw4QkFTQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxLQUFVO0lBQzlCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUQ7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUM3QjtJQUVELElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7UUFDOUIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDMUM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBakJELDBCQWlCQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLEdBQVc7SUFDMUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNOLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQU5ELGdEQU1DO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLEtBQWE7SUFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFORCxvQ0FNQzs7Ozs7OztVQ3ZGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Imc0My1saWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkc0M0xpYlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRzQzTGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZGVjb3JhdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2NhbnZhcy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZG9tLWdldFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vdHlwZXMvY2FudmFzLXNoYWRvdy1jb25maWdcIjtcclxuXHJcbi8vIFRPRE8gbm90IHdvcmsgb24gYmFja2VuZFxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9kb20vZWxlbWVudC1idWlsZGVyXCI7XHJcblxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi92YWxpZGF0b3JzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9taXNjXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGh5c2ljc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC1kYXRhYmFzZS5maXh0dXJlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QubWFwcGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL3BhZ2luYXRlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlsc1wiO1xyXG4iLCJpbXBvcnQgeyBGaWxlVHlwZXMgfSBmcm9tIFwiLi4vZW51bXMvZmlsZS10eXBlcy5lbnVtXCI7XHJcblxyXG4vKipcclxuICogIEZpbGVNYW5hZ2VyIGlzIGNsYXNzIHVzZWQgZm9yIG9wZW4gYW5kIHNhdmUgZmlsZXNcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcml2YXRlIGlucHV0IHVzZWQgZm9yIG9wZW5pbmcgc3lzdGVtIHdpbmRvdyBmb3IgdXBsb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciBkb3dubG9hZCBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbms6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZpbGVzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0ZXh0IGNvbnRlbnQgaW50byBmaWxlIHdpdGggc3BlY2lmaWMgZXh0ZW5zaW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGZpbGUgbmFtZVxyXG4gICAgICogQHBhcmFtIHRleHQgZmlsZSBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBmaWxlIHtAbGluayBGaWxlVHlwZXN9LiBEZWZhdWx0IHZhbHVlIGlzIHtAbGluayBGaWxlVHlwZXMuVFhUfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2F2ZUZpbGUobmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHR5cGU6IEZpbGVUeXBlcyA9IEZpbGVUeXBlcy5UWFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxpbmsuaHJlZiAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFt0ZXh0XSwge3R5cGV9KSk7XHJcbiAgICAgICAgdGhpcy5saW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICB0aGlzLmxpbmsuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgaW1hZ2UgaW50byBmaWxlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgaW1hZ2UgbmFtZVxyXG4gICAgICogQHBhcmFtIGltYWdlIGltYWdlIGVsZW1lbnQgb3IgcGF0aCB0byBpbWFnZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2F2ZUltYWdlKG5hbWU6IHN0cmluZywgaW1hZ2U6IHN0cmluZyB8IEhUTUxJbWFnZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxpbmsuaHJlZiAgICAgPSB0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIgPyBpbWFnZSA6IGltYWdlLnNyYztcclxuICAgICAgICB0aGlzLmxpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluay5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBpbWFnZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIGZ1bmMgbG9hZGluZyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEltYWdlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZU5hbWU6IHN0cmluZykgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzICAgICAgICAgICAgICA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCAgICAgICAgICAgID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyAgID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBmdW5jKGltYWdlLCBmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzWzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgZmlsZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkRmlsZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVzOiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgID0gKGUudGFyZ2V0IGFzIGFueSkuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gZnVuYyhyZWFkZXIucmVzdWx0LCBmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgYmluYXJ5IGZpbGUgdXNpbmcgc3lzdGVtIGZpbGUgcGlja2VyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZ1bmMgbG9hZGluZyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJpbmFyeUZpbGUoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlTmFtZTogc3RyaW5nKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IGZ1bmMocmVhZGVyLnJlc3VsdCwgZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBHTWFwPFQsIFM+IGV4dGVuZHMgTWFwPFQsIFM+IHtcclxuICAgIHB1YmxpYyBnZXQoa2V5OiBULCBkZWZhdWx0VmFsdWU/OiBTKTogUyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpIHx8IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3JDcmVhdGUoa2V5OiBULCBkZWZhdWx0VmFsdWU6IFMpOiBTIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5nZXQoa2V5KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9maWxlLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbG9nZ2VyL2ctbG9nZ2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ctbWFwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL251bWJlci1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BhZ2luYXRvclwiO1xyXG5leHBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuZXhwb3J0IHsgR0xvZ2dlckRlZmF1bHRGb3JtYXR0ZXIsIFNpbXBsZUNvbG9yRm9ybWF0dGVyIH0gZnJvbSBcIi4vbG9nZ2VyL2ctbG9nZ2VyLWRlZmF1bHQtZm9ybWF0dGVyXCI7XHJcbmV4cG9ydCB7IEdMb2dnZXJDYWxsYmFja0hvbGRlciB9IGZyb20gXCIuL2xvZ2dlci9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXJcIjtcclxuZXhwb3J0IHsgR0xvZ2dlckluc3RhbmNlIH0gZnJvbSBcIi4vbG9nZ2VyL2ctbG9nZ2VyLWluc3RhbmNlXCI7XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlV3JhcHBlciB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZUNvdW50ZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc3VsdHM6IFNpbXBsZVdyYXBwZXJbXSAgICAgICAgPSBbXTtcclxuICAgIHByaXZhdGUgcHJvY2Vzc2VkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBhZGQoaXRlbTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGl0ZW0gaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpdGVtXSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpdGVtXSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQWxsKGl0ZW1zOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2godGhpcy5hZGQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogU2ltcGxlV3JhcHBlcltdIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VG9wTihjb3VudDogbnVtYmVyKTogU2ltcGxlV3JhcHBlcltdIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0cy5zbGljZSgwLCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKCkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2VzcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHRoaXMuZGF0YVtrZXldLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR0xvZ2dlckNhbGxiYWNrIH0gZnJvbSBcIi4vZy1sb2dnZXJcIjtcclxuaW1wb3J0IHsgU2ltcGxlQ29sb3JGb3JtYXR0ZXIgfSBmcm9tIFwiLi9nLWxvZ2dlci1kZWZhdWx0LWZvcm1hdHRlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdMb2dnZXJDYWxsYmFja0hvbGRlciB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsbGJhY2tzOiB7IFtrZXkgaW4gR0xvZ2dlclByaW9yaXR5XTogR0xvZ2dlckNhbGxiYWNrIH0pIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29weSgpOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgR0xvZ2dlckNhbGxiYWNrSG9sZGVyKHRoaXMuY2FsbGJhY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNvbnNvbGVDYWxsYmFja3MoZm9ybWF0dGVyID0gbmV3IFNpbXBsZUNvbG9yRm9ybWF0dGVyKCkpOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgR0xvZ2dlckNhbGxiYWNrSG9sZGVyKHtcclxuICAgICAgICAgICAgLy8gW0dMb2dnZXJQcmlvcml0eS5MT0ddICAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5sb2coY29udGV4dCA/IGAke1tjb250ZXh0XX1cXHRgIDogXCJcIiwgLi4ubWVzc2FnZSksXHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuV0FSTl0gICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUud2Fybihjb250ZXh0ID8gYCR7W2NvbnRleHRdfVxcdGAgOiBcIlwiLCAuLi5tZXNzYWdlKSxcclxuICAgICAgICAgICAgLy8gW0dMb2dnZXJQcmlvcml0eS5FUlJPUl0gIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihjb250ZXh0ID8gYCR7W2NvbnRleHRdfVxcdGAgOiBcIlwiLCAuLi5tZXNzYWdlKSxcclxuICAgICAgICAgICAgLy8gW0dMb2dnZXJQcmlvcml0eS5TVUNDRVNTXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5sb2coY29udGV4dCA/IGAke1tjb250ZXh0XX1cXHRgIDogXCJcIiwgLi4ubWVzc2FnZSksXHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRV06IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKGNvbnRleHQgPyBgJHtbY29udGV4dF19XFx0YCA6IFwiXCIsIC4uLm1lc3NhZ2UpLFxyXG5cclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5MT0ddICAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5sb2coLi4uZm9ybWF0dGVyLmZvcm1hdENvbG9yZWQoR0xvZ2dlclByaW9yaXR5LkxPRywgbWVzc2FnZSwgY29udGV4dCkpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LldBUk5dICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLndhcm4oLi4uZm9ybWF0dGVyLmZvcm1hdENvbG9yZWQoR0xvZ2dlclByaW9yaXR5LldBUk4sIG1lc3NhZ2UsIGNvbnRleHQpKSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5FUlJPUl0gIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5lcnJvciguLi5mb3JtYXR0ZXIuZm9ybWF0Q29sb3JlZChHTG9nZ2VyUHJpb3JpdHkuRVJST1IsIG1lc3NhZ2UsIGNvbnRleHQpKSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5TVUNDRVNTXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5sb2coLi4uZm9ybWF0dGVyLmZvcm1hdENvbG9yZWQoR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1MsIG1lc3NhZ2UsIGNvbnRleHQpKSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5WRVJCT1NFXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5sb2coLi4uZm9ybWF0dGVyLmZvcm1hdENvbG9yZWQoR0xvZ2dlclByaW9yaXR5LlZFUkJPU0UsIG1lc3NhZ2UsIGNvbnRleHQpKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUFycmF5Q2FsbGJhY2tzKGFycmF5OiB1bmtub3duW10sIG9wdGlvbnM6IHsgbWFwcGVyPzogKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIG1lc3NhZ2VzOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IHVua25vd24gfSA9IHt9KTogR0xvZ2dlckNhbGxiYWNrSG9sZGVyIHtcclxuICAgICAgICBjb25zdCBtYXBwZXIgICAgICAgID0gb3B0aW9ucy5tYXBwZXIgfHwgKChwcmlvcml0eSwgbWVzc2FnZXMsIGNvbnRleHQpID0+IFtwcmlvcml0eSwgbWVzc2FnZXMsIGNvbnRleHRdKTtcclxuICAgICAgICBjb25zdCBhcHBlbmRUb0FycmF5ID0gKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIG1lc3NhZ2VzOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChtYXBwZXIocHJpb3JpdHksIG1lc3NhZ2VzLCBjb250ZXh0KSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIoe1xyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LkxPR10gICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0FycmF5KEdMb2dnZXJQcmlvcml0eS5MT0csIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LldBUk5dICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0FycmF5KEdMb2dnZXJQcmlvcml0eS5XQVJOLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5FUlJPUl0gIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuRVJST1IsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1NdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0FycmF5KEdMb2dnZXJQcmlvcml0eS5TVUNDRVNTLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5WRVJCT1NFXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRSwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgY3JlYXRlRmlsZUNhbGxiYWNrcyhmaWxlUGF0aDogc3RyaW5nLCBvcHRpb25zOiB7IGVuY29kaW5nPzogXCJ1dGY4XCIgfSA9IHt9KTogR0xvZ2dlckNhbGxiYWNrSG9sZGVyIHtcclxuICAgIC8vICAgICBjb25zdCByZXNvbHZlZFBhdGggPSBwYXRoLnJlc29sdmUoZmlsZVBhdGgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGVuY29kaW5nICAgICA9IG9wdGlvbnMuZW5jb2RpbmcgfHwgXCJ1dGY4XCI7XHJcbiAgICAvLyAgICAgY29uc3QgYXBwZW5kVG9GaWxlID0gKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIG1lc3NhZ2VzOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgIC8vICAgICAgICAgZnMuYXBwZW5kRmlsZVN5bmMocmVzb2x2ZWRQYXRoLCBgJHtwcmlvcml0eX1gICsgKGNvbnRleHQgPyBgJHtjb250ZXh0fVxcdGAgOiBcIlwiKSArIG1lc3NhZ2VzLmpvaW4oXCIgXCIpLCB7ZW5jb2Rpbmd9KTtcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gbmV3IEdMb2dnZXJDYWxsYmFja0hvbGRlcih7XHJcbiAgICAvLyAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuTE9HXSAgICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvRmlsZShHTG9nZ2VyUHJpb3JpdHkuTE9HLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgIC8vICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5XQVJOXSAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9GaWxlKEdMb2dnZXJQcmlvcml0eS5XQVJOLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgIC8vICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5FUlJPUl0gIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9GaWxlKEdMb2dnZXJQcmlvcml0eS5FUlJPUiwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAvLyAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTU106IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvRmlsZShHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTUywgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAvLyAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRV06IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvRmlsZShHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRSwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHNldENhbGxiYWNrKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIGNhbGxiYWNrOiBHTG9nZ2VyQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrc1twcmlvcml0eV0gPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGhvbGRlcjogR0xvZ2dlckNhbGxiYWNrSG9sZGVyKTogdm9pZCB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhHTG9nZ2VyUHJpb3JpdHkpLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FsbGJhY2socHJpb3JpdHksIGhvbGRlci5nZXRDYWxsYmFjayhwcmlvcml0eSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDYWxsYmFjayhwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5KTogR0xvZ2dlckNhbGxiYWNrIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsYmFja3NbcHJpb3JpdHldO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGRhdGVBZ28sIHJhbmRvbUl0ZW0sIHRlbXBsYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJGb3JtYXR0ZXIgfSBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yR2VuZXJhdG9yIHtcclxuICAgIHB1YmxpYyB1c2VEaWZmZXJlbnRDb2xvcnNGb3JDb250ZXh0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRydWU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHRDb2xvck1hcDogeyBbY29udGV4dDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29sb3JGb3JDb250ZXh0KGNvbnRleHQ6IHN0cmluZywgZGVmYXVsdENvbG9yOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VEaWZmZXJlbnRDb2xvcnNGb3JDb250ZXh0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQgaW4gdGhpcy5jb250ZXh0Q29sb3JNYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dENvbG9yTWFwW2NvbnRleHRdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ29sb3IgPSAoKTogc3RyaW5nID0+XHJcbiAgICAgICAgICAgIGAjJHtuZXcgQXJyYXkoNikuZmlsbChcIlwiKS5tYXAoKCkgPT4gcmFuZG9tSXRlbShcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIpKS5qb2luKFwiXCIpfWBcclxuICAgICAgICA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRDb2xvck1hcFtjb250ZXh0XSA9IGNyZWF0ZUNvbG9yKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVDb2xvckZvcm1hdHRlciBpbXBsZW1lbnRzIEdMb2dnZXJGb3JtYXR0ZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2xvckdlbmVyYXRvciA9IG5ldyBDb2xvckdlbmVyYXRvcigpO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbG9yTWFwID0ge1xyXG4gICAgICAgIHByaW9yaXR5OiBcInJlZFwiLFxyXG4gICAgICAgIGNvbnRleHQ6IFwiYmx1ZVwiLFxyXG4gICAgICAgIGRhdGE6IFwiYmxhY2tcIixcclxuICAgICAgICBkZWZhdWx0OiBcImJsYWNrXCIsXHJcbiAgICB9O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGF0dGVybiA9IFwiW3t7cHJpb3JpdHl9fV0ge3tjb250ZXh0fX06IHt7ZGF0YX19XCIpIHtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmb3JtYXQocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBkYXRhUGxhY2Vob2xkZXJzID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiVvXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpdGVtICUgMSA9PT0gMCkgPyBcIiVkXCIgOiBcIiVmXCI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiVzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGVtcGxhdGUodGhpcy5wYXR0ZXJuLCB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5OiBcIiVzXCIsXHJcbiAgICAgICAgICAgIGNvbnRleHQgOiBcIiVzXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFQbGFjZWhvbGRlcnMuam9pbihcIiBcIiksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvZ0ZyYWdtZW50czogdW5rbm93bltdID0gW3RleHRdO1xyXG4gICAgICAgIHRoaXMucGF0dGVybi5yZXBsYWNlKC8ocHJpb3JpdHl8Y29udGV4dHxkYXRhKS9nLCAobWF0Y2gpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJpb3JpdHlcIjpcclxuICAgICAgICAgICAgICAgICAgICBsb2dGcmFnbWVudHMucHVzaChwcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY29udGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZyYWdtZW50cy5wdXNoKGNvbnRleHQgfHwgXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRhdGFcIjpcclxuICAgICAgICAgICAgICAgICAgICBsb2dGcmFnbWVudHMucHVzaCguLi5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxvZ0ZyYWdtZW50cy5qb2luKFwiLCBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdENvbG9yZWQocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogdW5rbm93bltdIHtcclxuICAgICAgICBjb25zdCBkYXRhUGxhY2Vob2xkZXJzID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiVvXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpdGVtICUgMSA9PT0gMCkgPyBcIiVkXCIgOiBcIiVmXCI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiVzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGVtcGxhdGUodGhpcy5wYXR0ZXJuLCB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5OiBcIiVjJXMlY1wiLFxyXG4gICAgICAgICAgICBjb250ZXh0IDogXCIlYyVzJWNcIixcclxuICAgICAgICAgICAgZGF0YTogYCVjJHtkYXRhUGxhY2Vob2xkZXJzLmpvaW4oXCIgXCIpfSVjYCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9nRnJhZ21lbnRzOiB1bmtub3duW10gPSBbdGV4dF07XHJcbiAgICAgICAgdGhpcy5wYXR0ZXJuLnJlcGxhY2UoLyhwcmlvcml0eXxjb250ZXh0fGRhdGEpL2csIChtYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2gobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmlvcml0eVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZyYWdtZW50cy5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9yTWFwW21hdGNoXX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2dGcmFnbWVudHMucHVzaChwcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nRnJhZ21lbnRzLnB1c2goYGNvbG9yOiAke3RoaXMuY29sb3JNYXAuZGVmYXVsdH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY29udGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZyYWdtZW50cy5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9yR2VuZXJhdG9yLmdldENvbG9yRm9yQ29udGV4dChjb250ZXh0IHx8IFwicm9vdFwiLCBcImJsYWNrXCIpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZyYWdtZW50cy5wdXNoKGNvbnRleHQgfHwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nRnJhZ21lbnRzLnB1c2goYGNvbG9yOiAke3RoaXMuY29sb3JNYXAuZGVmYXVsdH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGF0YVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZyYWdtZW50cy5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9yTWFwW21hdGNoXX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2dGcmFnbWVudHMucHVzaCguLi5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2dGcmFnbWVudHMucHVzaChgY29sb3I6ICR7dGhpcy5jb2xvck1hcC5kZWZhdWx0fWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbG9nRnJhZ21lbnRzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdMb2dnZXJEZWZhdWx0Rm9ybWF0dGVyIGltcGxlbWVudHMgR0xvZ2dlckZvcm1hdHRlciB7XHJcbiAgICBwdWJsaWMgc2hvd1ByaW9yaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93Q29udGV4dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2hvd1RpbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93VGltZU9mZnNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbG9yczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSAgICAgICAgICAgICAgID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbG9yR2VuZXJhdG9yID0gbmV3IENvbG9yR2VuZXJhdG9yKCk7XHJcbiAgICBwcml2YXRlIGxhc3RGb3JtYXRUaW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRDb2xvcmVkKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIGRhdGE6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZyk6IHVua25vd25bXSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFt0aGlzLmdldE91dHB1dEFycmF5KHByaW9yaXR5LCBkYXRhLCBjb250ZXh0KS5qb2luKFwiIFwiKV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dQcmlvcml0eSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgY29sb3I6ICR7dGhpcy5jb2xvcnMucHJpb3JpdHkgfHwgXCJibHVlXCJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dDb250ZXh0ICYmIGNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYGNvbG9yOiAke3RoaXMuY29sb3JHZW5lcmF0b3IuZ2V0Q29sb3JGb3JDb250ZXh0KGNvbnRleHQsIHRoaXMuY29sb3JzLmNvbnRleHQgfHwgXCJyZWRcIil9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgY29sb3I6ICR7dGhpcy5jb2xvcnMudGltZSB8fCBcImdyZWVuXCJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy50aW1lT2Zmc2V0IHx8IFwiZ3JlZW5cIn1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy50ZXh0Q29sb3IgfHwgXCJibGFja1wifWApO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXQocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPdXRwdXRBcnJheShwcmlvcml0eSwgZGF0YSwgY29udGV4dCkuam9pbihcIiBcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3V0cHV0QXJyYXkocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRpYWxzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93UHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgcGFydGlhbHMucHVzaChgWyR7cHJpb3JpdHl9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93Q29udGV4dCAmJiBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxzLnB1c2goY29udGV4dCArIFwiOlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxzLnB1c2goYFske25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX1dYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZU9mZnNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBwYXJ0aWFscy5wdXNoKGAke2RhdGVBZ28obm93IC0gdGhpcy5sYXN0Rm9ybWF0VGltZSl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZvcm1hdFRpbWUgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnRpYWxzLnB1c2goLi4uZGF0YS5tYXAoU3RyaW5nKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJ0aWFscztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHTG9nZ2VyQ2FsbGJhY2ssIEdMb2dnZXJDb250ZXh0VHlwZSB9IGZyb20gXCIuL2ctbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJDYWxsYmFja0hvbGRlciB9IGZyb20gXCIuL2ctbG9nZ2VyLWNhbGxiYWNrLWhvbGRlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdMb2dnZXJJbnN0YW5jZSB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGxvY2FsUHJpbnQodHlwZTogR0xvZ2dlclByaW9yaXR5LCBkYXRhOiB1bmtub3duW10sIGNhbGxiYWNrczogR0xvZ2dlckNhbGxiYWNrSG9sZGVyLCBjb250ZXh0Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY2FsbGJhY2tzLmdldENhbGxiYWNrKHR5cGUpKGRhdGEsIGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2V0Q29udGV4dFN0cmluZyhjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQ/LmNvbnN0cnVjdG9yPy5uYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQ/Lm5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9nZ2VyQ2FsbGJhY2tzOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUsXHJcbiAgICApIHtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRMb2dDYWxsYmFjayhwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBjYWxsYmFjazogR0xvZ2dlckNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXJDYWxsYmFja3M/LnNldENhbGxiYWNrKHByaW9yaXR5LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldExvZ0NhbGxiYWNrcyhjYWxsYmFja0hvbGRlcjogR0xvZ2dlckNhbGxiYWNrSG9sZGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXJDYWxsYmFja3M/LnNldChjYWxsYmFja0hvbGRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludCh0eXBlOiBHTG9nZ2VyUHJpb3JpdHksIGNvbnRleHQ6IEdMb2dnZXJDb250ZXh0VHlwZSA9IFwiXCIsIC4uLmRhdGE6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlYWxDb250ZXh0OiBzdHJpbmcgPSBHTG9nZ2VySW5zdGFuY2UuZ2V0Q29udGV4dFN0cmluZyhjb250ZXh0KTtcclxuXHJcbiAgICAgICAgR0xvZ2dlckluc3RhbmNlLmxvY2FsUHJpbnQodHlwZSwgZGF0YSwgdGhpcy5sb2dnZXJDYWxsYmFja3MsIHJlYWxDb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKC4uLm1lc3NhZ2VzOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByaW50KEdMb2dnZXJQcmlvcml0eS5MT0csIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3YXJuKC4uLm1lc3NhZ2VzOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByaW50KEdMb2dnZXJQcmlvcml0eS5XQVJOLCB0aGlzLmNvbnRleHQsIC4uLm1lc3NhZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3IoLi4ubWVzc2FnZXM6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJpbnQoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCB0aGlzLmNvbnRleHQsIC4uLm1lc3NhZ2VzKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBHTG9nZ2VyUHJpb3JpdHkge1xyXG4gICAgTE9HICAgICA9IFwiTE9HXCIsXHJcbiAgICBXQVJOICAgID0gXCJXQVJOXCIsXHJcbiAgICBFUlJPUiAgID0gXCJFUlJPUlwiLFxyXG4gICAgVkVSQk9TRSA9IFwiVkVSQk9TRVwiLFxyXG4gICAgU1VDQ0VTUyA9IFwiU1VDQ0VTU1wiXHJcbn1cclxuIiwiaW1wb3J0IHsgR0xvZ2dlckNhbGxiYWNrSG9sZGVyIH0gZnJvbSBcIi4vZy1sb2dnZXItY2FsbGJhY2staG9sZGVyXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJJbnN0YW5jZSB9IGZyb20gXCIuL2ctbG9nZ2VyLWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJQcmlvcml0eSB9IGZyb20gXCIuL2ctbG9nZ2VyLXByaW9yaXR5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBHTG9nZ2VyQ29udGV4dFR5cGUgPSBzdHJpbmcgfCB7IGNvbnN0cnVjdG9yPzogeyBuYW1lOiBzdHJpbmcgfSwgbmFtZT86IHN0cmluZyB9O1xyXG5leHBvcnQgdHlwZSBHTG9nZ2VyQ2FsbGJhY2sgPSAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHTG9nZ2VyRm9ybWF0dGVyIHtcclxuICAgIGZvcm1hdChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBkYXRhOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyIGV4dGVuZHMgR0xvZ2dlckluc3RhbmNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNraXBDb250ZXh0cyA9IFtcInJlbmRlcldvcmxkU3RhdGljXCIsIFwiQ2FudmFzRGlyZWN0aXZlXCIsIFwiV29ybGRSZW5kZXJlclNlcnZpY2VcIiwgXCJ2aWV3cG9ydFwiLCBcIldvcmxkSW5wdXRTZXJ2aWNlXCJdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc2tpcFJlZ2V4cCAgID0gbmV3IFJlZ0V4cChgJHtHTG9nZ2VyLnNraXBDb250ZXh0cy5qb2luKFwifFwiKX1gLCBcImdpXCIpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc3RhdGljQ2FsbGJhY2tzID0gR0xvZ2dlckNhbGxiYWNrSG9sZGVyLmNyZWF0ZUNvbnNvbGVDYWxsYmFja3MoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENhbGxiYWNrcyhjYWxsYmFja0hvbGRlcjogR0xvZ2dlckNhbGxiYWNrSG9sZGVyKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5zdGF0aWNDYWxsYmFja3Muc2V0KGNhbGxiYWNrSG9sZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExpbmUoc3RlcHMgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIGlmIChlcnJvci5zdGFjaykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZXJyb3Iuc3RhY2suc3BsaXQoXCJcXG5cIilbc3RlcHNdLnRyaW0oKS5tYXRjaCgvXFwoLipcXCkvKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXQgXCIgKyByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNsYXNzTG9nZ2VyKGNvbnRleHQ6IGFueSwgcGFyZW50PzogR0xvZ2dlcik6IEdMb2dnZXIge1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmV4dGVuZHMoY29udGV4dD8ubmFtZSB8fCBjb250ZXh0Py5jb25zdHJ1Y3Rvcj8ubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXIoY29udGV4dD8uY29uc3RydWN0b3I/Lm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQXJyYXlMb2dnZXIoYXJyYXk6IHVua25vd25bXSwgY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSwgbWFwcGVyPzogKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIG1lc3NhZ2VzOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IHVua25vd24pOiBHTG9nZ2VyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXIoY29udGV4dCwgR0xvZ2dlckNhbGxiYWNrSG9sZGVyLmNyZWF0ZUFycmF5Q2FsbGJhY2tzKGFycmF5LCB7bWFwcGVyfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJpbnQodHlwZTogR0xvZ2dlclByaW9yaXR5LCBjb250ZXh0OiBHTG9nZ2VyQ29udGV4dFR5cGUgPSBcIlwiLCAuLi5kYXRhOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZWFsQ29udGV4dDogc3RyaW5nID0gR0xvZ2dlci5nZXRDb250ZXh0U3RyaW5nKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCAgICAgICAgICAgICAgPSByZWFsQ29udGV4dCAmJiByZWFsQ29udGV4dC5tYXRjaChHTG9nZ2VyLnNraXBSZWdleHApO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBHTG9nZ2VySW5zdGFuY2UubG9jYWxQcmludCh0eXBlLCBkYXRhLCBHTG9nZ2VyLnN0YXRpY0NhbGxiYWNrcywgcmVhbENvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9nKG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLCBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuTE9HLCBjb250ZXh0LCAuLi4oQXJyYXkuaXNBcnJheShtZXNzYWdlKSA/IG1lc3NhZ2UgOiBbbWVzc2FnZV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLCBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuRVJST1IsIGNvbnRleHQsIC4uLihBcnJheS5pc0FycmF5KG1lc3NhZ2UpID8gbWVzc2FnZSA6IFttZXNzYWdlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd2FybihtZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSwgY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoR0xvZ2dlclByaW9yaXR5LldBUk4sIGNvbnRleHQsIC4uLihBcnJheS5pc0FycmF5KG1lc3NhZ2UpID8gbWVzc2FnZSA6IFttZXNzYWdlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlLFxyXG4gICAgICAgIGNhbGxiYWNrcyA9IEdMb2dnZXIuc3RhdGljQ2FsbGJhY2tzLmNvcHkoKSxcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGNhbGxiYWNrcywgY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4dGVuZHMoc3ViQ29udGV4dDogYW55KTogR0xvZ2dlciB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbnRleHQgICAgICAgID0gR0xvZ2dlci5nZXRDb250ZXh0U3RyaW5nKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3Qgc3ViQ29udGV4dE5hbWVDb250ZXh0ID0gR0xvZ2dlci5nZXRDb250ZXh0U3RyaW5nKHN1YkNvbnRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXIoXHJcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0ID8gYCR7Y3VycmVudENvbnRleHR9OiR7c3ViQ29udGV4dE5hbWVDb250ZXh0fWAgOiBzdWJDb250ZXh0TmFtZUNvbnRleHQsXHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyQ2FsbGJhY2tzLmNvcHkoKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBOdW1iZXJDb3VudGVyIHtcclxuICAgIHByaXZhdGUgbWluICAgICAgICAgICAgICAgICAgICAgICAgPSBJbmZpbml0eTtcclxuICAgIHByaXZhdGUgbWF4ICAgICAgICAgICAgICAgICAgICAgICAgPSAtSW5maW5pdHk7XHJcbiAgICBwcml2YXRlIHN1bSAgICAgICAgICAgICAgICAgICAgICAgID0gMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnVtYmVyczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgYWRkKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm51bWJlcnMucHVzaCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWluID0gTWF0aC5taW4odGhpcy5taW4sIHZhbHVlKTtcclxuICAgICAgICB0aGlzLm1heCA9IE1hdGgubWF4KHRoaXMubWF4LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zdW0gKz0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdmVyYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtIC8gdGhpcy5udW1iZXJzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQWxsKGl0ZW1zOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2godGhpcy5hZGQsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdUb29sc0NvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvcjxUID0gdW5rbm93bj4ge1xyXG4gICAgcHJpdmF0ZSBhY3RMaXN0OiBUW107XHJcbiAgICBwcml2YXRlIGFjdHVhbFBhZ2UgPSAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXN0UGFnZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFsbEl0ZW1zOiBUW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBpdGVtc1BlclBhZ2UgPSBHVG9vbHNDb25maWcuUEFHRV9MSU1JVCkge1xyXG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSBhbGxJdGVtcyA/IE1hdGguZmxvb3IoYWxsSXRlbXMubGVuZ3RoIC8gdGhpcy5pdGVtc1BlclBhZ2UpIDogMDtcclxuICAgICAgICB0aGlzLmFjdExpc3QgID0gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBY3R1YWxQYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0dWFsUGFnZSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdFBhZ2UgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYWdlc0Fyb3VuZCgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA8IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsxLCAyLCAzLCA0LCA1XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA+IHRoaXMubGFzdFBhZ2UgLSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMyxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSArIDEsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgLSAxLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSArIDEsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSArIDIsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSArIDMsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGlzdCgpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9OZXh0KCk6IFRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA8IHRoaXMubGFzdFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlKys7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb3RUbyhwYWdlOiBudW1iZXIpOiBUW10ge1xyXG4gICAgICAgIGlmIChwYWdlID49IDAgJiYgcGFnZSA8PSB0aGlzLmxhc3RQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IHBhZ2U7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvUHJldigpOiBUW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZS0tO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub0ZpcnN0KCk6IFRbXSB7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub0xhc3QoKTogVFtdIHtcclxuICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSB0aGlzLmxhc3RQYWdlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlQ2FsY0xpc3QoKTogVFtdIHtcclxuICAgICAgICBjb25zdCBzdGFydCAgPSB0aGlzLmFjdHVhbFBhZ2UgKiB0aGlzLml0ZW1zUGVyUGFnZTtcclxuICAgICAgICB0aGlzLmFjdExpc3QgPSB0aGlzLmFsbEl0ZW1zID8gdGhpcy5hbGxJdGVtcy5zbGljZShzdGFydCwgc3RhcnQgKyB0aGlzLml0ZW1zUGVyUGFnZSkgOiBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0TGlzdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHVG9vbHNDb25maWdJbnRlcmZhY2UgfSBmcm9tIFwiLi9ndG9vbHMtY29uZmlnLmludGVyZmFjZVwiO1xyXG5cclxubGV0IGNvbmZpZzogR1Rvb2xzQ29uZmlnSW50ZXJmYWNlO1xyXG5cclxuY29uc3QgY2hlY2tDb25maWcgPSAoKTogR1Rvb2xzQ29uZmlnSW50ZXJmYWNlID0+IHtcclxuICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgVVJMX0FQSSAgIDogXCJcIixcclxuICAgICAgICAgICAgTEFOR1VBR0UgIDogXCJcIixcclxuICAgICAgICAgICAgVkVSU0lPTiAgIDogXCJcIixcclxuICAgICAgICAgICAgUEFHRV9MSU1JVDogMCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbn07XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogY2xhc3MgQ2xhc3NPd25Db25maWcgZXh0ZW5kcyBDbGFzc0dUb29sc0NvbmZpZyBpbXBsZW1lbnRzIE93bkNvbmZpZ0ludGVyZmFjZSB7XHJcbiAqICAgICBwdWJsaWMgbmFtZSA9IFwiXCI7XHJcbiAqIH1cclxuICpcclxuICogZXhwb3J0IGNvbnN0IE93bkNvbmZpZyA9IG5ldyBDbGFzc093bkNvbmZpZygpO1xyXG4gKlxyXG4gKiBAc2VlIEdUb29sc0NvbmZpZ0ludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsYXNzR1Rvb2xzQ29uZmlnIGltcGxlbWVudHMgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlIHtcclxuICAgIHB1YmxpYyBnZXQgVVJMX0FQSSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLlVSTF9BUEk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBQQUdFX0xJTUlUKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuUEFHRV9MSU1JVDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IExBTkdVQUdFKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuTEFOR1VBR0U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBWRVJTSU9OKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuVkVSU0lPTjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29uZmlnKGFwcENvbmZpZzogR1Rvb2xzQ29uZmlnSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25maWcgPSBhcHBDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHVG9vbHNDb25maWcgPSBuZXcgQ2xhc3NHVG9vbHNDb25maWcoKTtcclxuIiwiZXhwb3J0IGNvbnN0IEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTID0gdHJ1ZTtcclxuXHJcbiIsImltcG9ydCB7IFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlcHJlY2F0ZWQodmFsdWU/OiBzdHJpbmcpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBhbnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9sZE1ldGhvZCAgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSAoLi4uYXJnczogYW55W10pOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNZXRob2QgXCIgKyB0YXJnZXQuY29uc3RydWN0b3IubmFtZSArIFwiLlwiICsgcHJvcGVydHlLZXkgKyBcIiBpcyBkZXByZWNhdGVkLiBcIiArICh2YWx1ZSB8fCBcIlwiKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkTWV0aG9kLmFwcGx5KHRhcmdldCwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEZpbmFsQ2xhc3M8VCBleHRlbmRzIG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KHRhcmdldDogVCk6IFQge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpbmFsIGV4dGVuZHMgdGFyZ2V0IHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgaWYgKG5ldy50YXJnZXQgIT09IEZpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5oZXJpdCBmcm9tIGZpbmFsIGNsYXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZGVwcmVjYXRlZC5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmluYWwtY2xhc3MuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hcHBlci5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2luZ2xldG9uLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93YXRjaC5kZWNvcmF0b3JcIjtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIE1hcHBlcihwYXJhbXM6IHsgb25HZXQ/OiAob2xkVmFsdWU6IGFueSkgPT4gYW55LCBvblNldD86IChvbGRWYWx1ZTogYW55KSA9PiBhbnkgfSA9IHt9LCBwcmVmaXggPSBcIl9cIik6IGFueSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKCFkZWxldGUgdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3TmFtZSAgICAgICAgICAgICAgICAgICAgICAgID0gcHJlZml4ICsga2V5O1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMub25HZXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSAoKSA9PiBwYXJhbXMub25HZXQgJiYgcGFyYW1zLm9uR2V0KHRhcmdldFtuZXdOYW1lXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9ICgpID0+IHRhcmdldFtuZXdOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMub25TZXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQgPSAobmV3VmFsOiBhbnkpID0+IHRhcmdldFtuZXdOYW1lXSA9IHBhcmFtcy5vblNldCAmJiBwYXJhbXMub25TZXQobmV3VmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKHZhbHVlKSA9PiB0YXJnZXRbbmV3TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xyXG4gICAgfTtcclxufVxyXG4iLCJjb25zdCBpbnN0YW5jZXM6IHsgW2NsYXNzTmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaW5nbGV0b248VCBleHRlbmRzIG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gYW55Pihjb25zdHJ1Y3RvcjogVCk6IGFueSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZXNbY2xhc3NOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2Ugb2YgXCIgKyBjbGFzc05hbWUgKyBcIiBpcyBhbHJlYWR5IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5zdGFuY2VzW2NsYXNzTmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XHJcbiAgICBlbnVtZXJhYmxlPzogYm9vbGVhbjtcclxuICAgIGNvbmZpZ3VyYWJsZT86IGJvb2xlYW47XHJcbiAgICBwcmVmaXg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBXYXRjaChvblNldD86IChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSA9PiBhbnksIG9wdGlvbnM/OiBXYXRjaE9wdGlvbnMpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICBjb25zdCBwcmVmaXggPSBvcHRpb25zICYmIG9wdGlvbnMucHJlZml4IHx8IFwiX1wiO1xyXG5cclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gKG5ld1ZhbDogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvblNldCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3ByZWZpeCArIGtleV0gPSBvblNldChuZXdWYWwsIHRhcmdldFtwcmVmaXggKyBrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJlZml4ICsga2V5XSA9IG5ld1ZhbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWRlbGV0ZSB0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRhcmdldFtwcmVmaXggKyBrZXldLFxyXG4gICAgICAgICAgICBzZXQgICAgICAgICA6IHNldHRlcixcclxuICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmVudW1lcmFibGUgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5lbnVtZXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmNvbmZpZ3VyYWJsZSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLmNvbmZpZ3VyYWJsZSA6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5vdEJyb3dzZXJFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXJyb3JzXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJndG9vbHMvbW9kZWxzXCI7XHJcblxyXG5jbGFzcyBBYnN0cmFjdENhbnZhc01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2NhbENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXJnMTogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50LCBhcmcyOiBudW1iZXIsIGFyZzM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmcxIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IGFyZzE7XHJcbiAgICAgICAgICAgIGlmIChhcmcyICYmIGFyZzMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzU2l6ZShhcmcyLCBhcmczKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJnMSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IENhbnZhc01hbmFnZXIuaW1hZ2VUb0NhbnZhcyhhcmcxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZzEgJiYgYXJnMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzEsIGFyZzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYWxDb250ZXh0ID0gdGhpcy5sb2NhbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm06IFRyYW5zZm9ybSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtUmF3KHRyYW5zZm9ybS5vZmZzZXQueCwgdHJhbnNmb3JtLm9mZnNldC55LCB0cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm1SYXcodHJhbnNsYXRpb25YOiBudW1iZXIsIHRyYW5zbGF0aW9uWTogbnVtYmVyLCBzY2FsZVg6IG51bWJlciwgc2NhbGVZID0gc2NhbGVYKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIENhbnZhc01hbmFnZXIuc2V0VHJhbnNmb3JtUmF3KHRoaXMubG9jYWxDb250ZXh0LCB0cmFuc2xhdGlvblgsIHRyYW5zbGF0aW9uWSwgc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIENhbnZhc01hbmFnZXIuY2FudmFzVG9JbWFnZSh0aGlzLmxvY2FsQ2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2hhZG93KHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBibHVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRTaGFkb3codGhpcy5sb2NhbENvbnRleHQsIHgsIHksIGNvbG9yLCBibHVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMubG9jYWxDYW52YXMudG9EYXRhVVJMKGZvcm1hdCksIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckNhbnZhcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgQ2FudmFzTWFuYWdlci5jbGVhckNhbnZhcyh0aGlzLmxvY2FsQ29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYW52YXNTaXplKHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0Q2FudmFzU2l6ZSh0aGlzLmxvY2FsQ2FudmFzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kVG8oZWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sb2NhbENhbnZhcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTWFuYWdlciBleHRlbmRzIEFic3RyYWN0Q2FudmFzTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQ2FudmFzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDYW52YXNTaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2hhZG93KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmx1cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yICAgPSBjb2xvcjtcclxuICAgICAgICBjdHguc2hhZG93Qmx1ciAgICA9IGJsdXI7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSB4O1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGltYWdlVG9DYW52YXMoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYW52YXMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICBjb25zdCBjdHggICAgID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldExpbmVEYXNoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCAuLi5hcmdzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY3R4LnNldExpbmVEYXNoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY3R4LnNldExpbmVEYXNoKGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGNUZXh0V2lkdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZhbHVlOiBzdHJpbmcsIGZvbnQ/OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChmb250KSB7XHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gZm9udDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQodmFsdWUpLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VHJhbnNmb3JtUmF3KFxyXG4gICAgICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIHRyYW5zbGF0aW9uWDogbnVtYmVyLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uWTogbnVtYmVyLFxyXG4gICAgICAgIHNjYWxlWDogbnVtYmVyLFxyXG4gICAgICAgIHNjYWxlWSA9IHNjYWxlWCxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oc2NhbGVYLCAwLCAwLCBzY2FsZVksIHRyYW5zbGF0aW9uWCwgdHJhbnNsYXRpb25ZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbnZhc1RvSW1hZ2UoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlICA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyAgICA9IGNhbnZhcy50b0RhdGFVUkwoZm9ybWF0KTtcclxuICAgICAgICBpbWFnZS53aWR0aCAgPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJmIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcbmltcG9ydCB7IENhbnZhc01hbmFnZXIgfSBmcm9tIFwiLi9jYW52YXMtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDYW52YXNTaGFkb3dDb25maWcgfSBmcm9tIFwiLi90eXBlcy9jYW52YXMtc2hhZG93LWNvbmZpZ1wiO1xyXG5cclxuZGVjbGFyZSBjb25zdCAkOiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbnZhc0NvbmZpZyB7XHJcbiAgICBzaGFkb3c/OiBDYW52YXNTaGFkb3dDb25maWc7XHJcbiAgICBwb3NpdGlvbj86IG51bWJlciB8IFZlY3RvcjJmO1xyXG4gICAgY2VudGVyPzogYm9vbGVhbjtcclxuICAgIHNpemU/OiBudW1iZXIgfCBWZWN0b3IyZjtcclxuICAgIGJnSW1hZ2U/OiB7XHJcbiAgICAgICAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdzogbnVtYmVyO1xyXG4gICAgICAgIGg6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBmaWxsOiBib29sZWFuO1xyXG4gICAgZmlsbENvbG9yOiBzdHJpbmc7XHJcbiAgICBkcmF3OiBib29sZWFuO1xyXG4gICAgYm9yZGVyV2lkdGg6IG51bWJlcjtcclxuICAgIHJhZGl1czogbnVtYmVyIHwge1xyXG4gICAgICAgIHRsOiBudW1iZXI7XHJcbiAgICAgICAgdHI6IG51bWJlcjtcclxuICAgICAgICBicjogbnVtYmVyO1xyXG4gICAgICAgIGJsOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgbGluZUNhcDogXCJidXR0XCIgfCBcInJvdW5kXCIgfCBcInNxdWFyZVwiO1xyXG4gICAgam9pblR5cGU6IFwiYmV2ZWxcIiB8IFwicm91bmRcIiB8IFwibWl0ZXJcIjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHN0YXJ0QW5nbGU6IG51bWJlcjtcclxuICAgIGVuZEFuZ2xlOiBudW1iZXI7XHJcbiAgICBvZmZzZXQ6IGFueTtcclxuICAgIGxpbmVEYXNoOiBudW1iZXJbXTtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2hhZG93KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29uZmlnPzogQ2FudmFzU2hhZG93Q29uZmlnKTogdm9pZCB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRTaGFkb3coY29udGV4dCwgY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcuY29sb3IsIGNvbmZpZy5ibHVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRTaGFkb3coY29udGV4dCwgMCwgMCwgXCJibGFja1wiLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2VzcyhyZXM6IENhbnZhc0NvbmZpZyk6IHZvaWQge1xyXG4gICAgaWYgKHJlcy5zaGFkb3cpIHtcclxuICAgICAgICBzZXRTaGFkb3cocmVzLmN0eCwgcmVzLnNoYWRvdyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzLmJnSW1hZ2UpIHtcclxuICAgICAgICByZXMuY3R4LnNhdmUoKTtcclxuICAgICAgICByZXMuY3R4LmNsaXAoKTtcclxuICAgICAgICBpZiAocmVzLmJnSW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHguZHJhd0ltYWdlKHJlcy5iZ0ltYWdlLCByZXMueCwgcmVzLnksIHJlcy53aWR0aCwgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5kcmF3SW1hZ2UocmVzLmJnSW1hZ2UuaW1nLFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UueCxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLnksXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS53LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UuaCxcclxuICAgICAgICAgICAgICAgIHJlcy54LFxyXG4gICAgICAgICAgICAgICAgcmVzLnksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICByZXMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHJlcy5maWxsKSB7XHJcbiAgICAgICAgcmVzLmN0eC5maWxsU3R5bGUgPSByZXMuZmlsbENvbG9yO1xyXG4gICAgICAgIHJlcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMuc2hhZG93KSB7XHJcbiAgICAgICAgc2V0U2hhZG93KHJlcy5jdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5jdHgubGluZUNhcCAgPSByZXMubGluZUNhcDtcclxuICAgIHJlcy5jdHgubGluZUpvaW4gPSByZXMuam9pblR5cGU7XHJcbiAgICBpZiAodHlwZW9mIHJlcy5jdHguc2V0TGluZURhc2ggPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJlcy5jdHguc2V0TGluZURhc2gocmVzLmxpbmVEYXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlcy5kcmF3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVzLmN0eC5saW5lV2lkdGggICA9IHJlcy5ib3JkZXJXaWR0aDtcclxuICAgIHJlcy5jdHguc3Ryb2tlU3R5bGUgPSByZXMuYm9yZGVyQ29sb3I7XHJcbiAgICByZXMuY3R4LnN0cm9rZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGVmKG9iajogYW55KTogQ2FudmFzQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICBjZW50ZXIgICAgIDogZmFsc2UsXHJcbiAgICAgICAgY3R4ICAgICAgICA6IG9iai5jdHgsXHJcbiAgICAgICAgZHJhdyAgICAgICA6IHR5cGVvZiBvYmouYm9yZGVyQ29sb3IgIT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai5ib3JkZXJXaWR0aCAhPT0gXCJ1bmRlZmluZWRcIixcclxuICAgICAgICBlbmRBbmdsZSAgIDogTWF0aC5QSSAqIDIsXHJcbiAgICAgICAgZmlsbCAgICAgICA6IHR5cGVvZiBvYmouZmlsbENvbG9yICE9PSBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIGZpbGxDb2xvciAgOiBcIndoaXRlXCIsXHJcbiAgICAgICAgaGVpZ2h0ICAgICA6IDAsXHJcbiAgICAgICAgam9pblR5cGUgICA6IFwiYmV2ZWxcIixcclxuICAgICAgICBsaW5lQ2FwICAgIDogXCJyb3VuZFwiLFxyXG4gICAgICAgIGxpbmVEYXNoICAgOiBbXSxcclxuICAgICAgICBvZmZzZXQgICAgIDogbnVsbCxcclxuICAgICAgICByYWRpdXMgICAgIDoge1xyXG4gICAgICAgICAgICB0bDogMCxcclxuICAgICAgICAgICAgdHI6IDAsXHJcbiAgICAgICAgICAgIGJyOiAwLFxyXG4gICAgICAgICAgICBibDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0QW5nbGUgOiAwLFxyXG4gICAgICAgIHdpZHRoICAgICAgOiAwLFxyXG4gICAgICAgIHggICAgICAgICAgOiAwLFxyXG4gICAgICAgIHkgICAgICAgICAgOiAwLFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtYWtlUG9zQW5kU2l6ZShkZWY6IENhbnZhc0NvbmZpZywgb2JqOiBhbnkpOiBDYW52YXNDb25maWcge1xyXG4gICAgY29uc3QgcmVzOiBDYW52YXNDb25maWcgPSAkLmV4dGVuZChkZWYsIG9iaikgYXMgQ2FudmFzQ29uZmlnO1xyXG4gICAgY29uc3QgY2hlY2tBdHRyaWJ1dGUgICAgPSAoYXR0ck5hbWU6IGtleW9mIENhbnZhc0NvbmZpZywgcGFydEE6IGtleW9mIENhbnZhc0NvbmZpZywgcGFydEI6IGtleW9mIENhbnZhc0NvbmZpZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzW2F0dHJOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVzW2F0dHJOYW1lXTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWVbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEFdID0gdmFsdWUgYXMgVmVjdG9yMmYueDtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWUgYXMgVmVjdG9yMmYueTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXR0cmlidXRlKFwic2l6ZVwiLCBcIndpZHRoXCIsIFwic2l6ZVwiKTtcclxuICAgIGNoZWNrQXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJ4XCIsIFwieVwiKTtcclxuXHJcbiAgICBpZiAocmVzLmNlbnRlcikge1xyXG4gICAgICAgIHJlcy54IC09IHJlcy53aWR0aCA+PiAxO1xyXG4gICAgICAgIHJlcy55IC09IHJlcy5oZWlnaHQgPj4gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Bvc0FuZFNpemUob2JqOiBDYW52YXNDb25maWcsIG5hbWU6IHN0cmluZyk6IENhbnZhc0NvbmZpZyB7XHJcblxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqLnggPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai55ID09PSBcInVuZGVmaW5lZFwiKSAmJiB0eXBlb2Ygb2JqLnBvc2l0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1BPU0lUSU9OOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodHlwZW9mIG9iai53aWR0aCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLmhlaWdodCA9PT0gXCJ1bmRlZmluZWRcIikgJiYgdHlwZW9mIG9iai5zaXplID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1NJWkU6IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai53aWR0aCA8PSAwIHx8IG9iai5oZWlnaHQgPD0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSF9ORUdfUE9TSVRJT046IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluaXREZWYob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1V0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZG9BcmMob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZXMgPSByZW1ha2VQb3NBbmRTaXplKGNoZWNrUG9zQW5kU2l6ZShvYmosIFwiQXJjXCIpLCBvYmopO1xyXG5cclxuICAgICAgICByZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzLmN0eC5lbGxpcHNlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5lbGxpcHNlKHJlcy54ICsgKHJlcy53aWR0aCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy55ICsgKHJlcy5oZWlnaHQgPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGggPj4gMSxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQgPj4gMSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgICAgIHJlcy5lbmRBbmdsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5yZWN0KHJlcy54ICsgKHJlcy53aWR0aCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy55ICsgKHJlcy5oZWlnaHQgPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGggPj4gMSxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQgPj4gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9jZXNzKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkb1JlY3Qob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkZWYgPSBjaGVja1Bvc0FuZFNpemUob2JqLCBcIlJlY3RcIik7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLnJhZGl1cyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKG9iai5yYWRpdXMpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoucmFkaXVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRsOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRlZi5yYWRpdXMgYXMgYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZi5yYWRpdXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoucmFkaXVzW2tleV0gPSBvYmoucmFkaXVzW2tleV0gfHwgKGRlZi5yYWRpdXMgYXMgYW55KVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gcmVtYWtlUG9zQW5kU2l6ZShkZWYsIG9iaik7XHJcblxyXG4gICAgICAgIHJlcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgcmVzLmN0eC5tb3ZlVG8ocmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyByZXMud2lkdGggLSAocmVzLnJhZGl1cyBhcyBhbnkpLnRyLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSwgcmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50cik7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgcmVzLmhlaWdodCAtIChyZXMucmFkaXVzIGFzIGFueSkuYnIpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyByZXMuaGVpZ2h0LCByZXMueCArIHJlcy53aWR0aCAtIChyZXMucmFkaXVzIGFzIGFueSkuYnIsIHJlcy55ICsgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLmJsLCByZXMueSArIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCwgcmVzLnkgKyByZXMuaGVpZ2h0LCByZXMueCwgcmVzLnkgKyByZXMuaGVpZ2h0IC0gKHJlcy5yYWRpdXMgYXMgYW55KS5ibCk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLngsIHJlcy55ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50bCk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54LCByZXMueSwgcmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgcHJvY2VzcyhyZXMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRPRE86IG5lZWQgdG8gYmUgY2hlY2tlZCBpZiBhcHAgaXMgcnVubmluZyBpbiBicm93c2VyXHJcblxyXG5sZXQgbG9jYWxDb250ZXh0OiBEb2N1bWVudCB8IG51bGwgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tR2V0IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IGRvY3VtZW50IGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDb250ZXh0KGNvbnRleHQ6IERvY3VtZW50KTogdm9pZCB7XHJcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lIG5hbWUgb2YgY2xhc3NcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIGNvbGxlY3Rpb24gb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGluayBuYW1lIG9mIGxpbmtcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlMaW5rKGxpbms6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBdPiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgYVthdHRyPVwiJHtsaW5rfVwiXWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBzZWFyY2hlZCBJRFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgZm91bmQgZWxlbWVudCBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlJZChpZDogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGVsZW1lbnRzIG5hbWVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlOYW1lKG5hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhZ05hbWUgZWxlbWVudHMgdGFnTmFtZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgbm9kZUxpc3Qgb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieVRhZyh0YWdOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkgYXMgYW55O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEJ1dHRvbiB7XHJcbiAgICBMRUZULFxyXG4gICAgUklHSFQsXHJcbiAgICBNSURETEUsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRGF5cyB7XHJcbiAgICBNT04gPSBcIk1PTlwiLFxyXG4gICAgVFVFID0gXCJUVUVcIixcclxuICAgIFdFRCA9IFwiV0VEXCIsXHJcbiAgICBUSFUgPSBcIlRIVVwiLFxyXG4gICAgRlJJID0gXCJGUklcIixcclxuICAgIFNBVCA9IFwiU0FUXCIsXHJcbiAgICBTVU4gPSBcIlNVTlwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEVuY29kaW5ncyB7XHJcbiAgICAvKlxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVVEY4ICAgID0gXCJ1dGY4XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVURjE2ICAgPSBcInV0ZjE2XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVOSUNPREUgPSBcInVuaWNvZGVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVNDSUkgICA9IFwiYXNjaWlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUNTMiAgICA9IFwidWNzMlwiO1xyXG4gICAgKi9cclxuICAgIFVURjggICAgPSBcInV0ZjhcIixcclxuICAgIFVURjE2ICAgPSBcInV0ZjE2XCIsXHJcbiAgICBVTklDT0RFID0gXCJ1bmljb2RlXCIsXHJcbiAgICBBU0NJSSAgID0gXCJhc2NpaVwiLFxyXG4gICAgVUNTMiAgICA9IFwidWNzMlwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEZpbGVUeXBlcyB7XHJcbiAgICBDU1MgID0gXCJ0ZXh0L2Nzc1wiLFxyXG4gICAgSFRNTCA9IFwidGV4dC9odG1sXCIsXHJcbiAgICBKUyAgID0gXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIsXHJcbiAgICBNUDMgID0gXCJhdWRpby9tcGVnXCIsXHJcbiAgICBNUDQgID0gXCJ2aWRlby9tcDRcIixcclxuICAgIE9HRyAgPSBcImFwcGxpY2F0aW9uL29nZ1wiLFxyXG4gICAgT0dWICA9IFwidmlkZW8vb2dnXCIsXHJcbiAgICBPR0EgID0gXCJhdWRpby9vZ2dcIixcclxuICAgIFRYVCAgPSBcInRleHQvcGxhaW5cIixcclxuICAgIFdBViAgPSBcImF1ZGlvL3gtd2F2XCIsXHJcbiAgICBXRUJNID0gXCJ2aWRlby93ZWJtXCIsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gSHR0cFN0YXR1c0NvZGVzIHtcclxuICAgIENPTlRJTlVFICAgICAgICAgICAgICAgICAgICAgICAgPSAxMDAsXHJcbiAgICBTV0lUQ0hJTkdfUFJPVE9DT0xTICAgICAgICAgICAgID0gMTAxLFxyXG4gICAgT0sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMCxcclxuICAgIENSRUFURUQgICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDEsXHJcbiAgICBBQ0NFUFRFRCAgICAgICAgICAgICAgICAgICAgICAgID0gMjAyLFxyXG4gICAgTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04gICA9IDIwMyxcclxuICAgIE5PX0NPTlRFTlQgICAgICAgICAgICAgICAgICAgICAgPSAyMDQsXHJcbiAgICBSRVNFVF9DT05URU5UICAgICAgICAgICAgICAgICAgID0gMjA1LFxyXG4gICAgUEFSVElBTF9DT05URU5UICAgICAgICAgICAgICAgICA9IDIwNixcclxuICAgIE1VTFRJUExFX0NIT0lDRVMgICAgICAgICAgICAgICAgPSAzMDAsXHJcbiAgICBNT1ZFRF9QRVJNQU5FTlRMWSAgICAgICAgICAgICAgID0gMzAxLFxyXG4gICAgRk9VTkQgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDMwMixcclxuICAgIFNFRV9PVEhFUiAgICAgICAgICAgICAgICAgICAgICAgPSAzMDMsXHJcbiAgICBOT1RfTU9ESUZJRUQgICAgICAgICAgICAgICAgICAgID0gMzA0LFxyXG4gICAgVVNFX1BST1hZICAgICAgICAgICAgICAgICAgICAgICA9IDMwNSxcclxuICAgIFRFTVBPUkFSWV9SRURJUkVDVCAgICAgICAgICAgICAgPSAzMDcsXHJcbiAgICBCQURfUkVRVUVTVCAgICAgICAgICAgICAgICAgICAgID0gNDAwLFxyXG4gICAgVU5BVVRIT1JJWkVEICAgICAgICAgICAgICAgICAgICA9IDQwMSxcclxuICAgIFBBWU1FTlRfUkVRVUlSRUQgICAgICAgICAgICAgICAgPSA0MDIsXHJcbiAgICBGT1JCSURERU4gICAgICAgICAgICAgICAgICAgICAgID0gNDAzLFxyXG4gICAgTk9UX0ZPVU5EICAgICAgICAgICAgICAgICAgICAgICA9IDQwNCxcclxuICAgIE1FVEhPRF9OT1RfQUxMT1dFRCAgICAgICAgICAgICAgPSA0MDUsXHJcbiAgICBOT1RfQUNDRVBUQUJMRSAgICAgICAgICAgICAgICAgID0gNDA2LFxyXG4gICAgUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgICA9IDQwNyxcclxuICAgIFJFUVVFU1RfVElNRU9VVCAgICAgICAgICAgICAgICAgPSA0MDgsXHJcbiAgICBDT05GTElDVCAgICAgICAgICAgICAgICAgICAgICAgID0gNDA5LFxyXG4gICAgR09ORSAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDQxMCxcclxuICAgIExFTkdUSF9SRVFVSVJFRCAgICAgICAgICAgICAgICAgPSA0MTEsXHJcbiAgICBQUkVDT05ESVRJT05fRkFJTEVEICAgICAgICAgICAgID0gNDEyLFxyXG4gICAgUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFICAgICAgICA9IDQxMyxcclxuICAgIFJFUVVFU1RfVVJJX1RPT19MT05HICAgICAgICAgICAgPSA0MTQsXHJcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFICAgICAgICAgID0gNDE1LFxyXG4gICAgUkVRVUVTVEVEX1JBTkdFX05PVF9TQVRJU0ZJQUJMRSA9IDQxNixcclxuICAgIEVYUEVDVEFUSU9OX0ZBSUxFRCAgICAgICAgICAgICAgPSA0MTcsXHJcbiAgICBVTlBST0NFU1NBQkxFX0VOVElUWSAgICAgICAgICAgID0gNDIyLFxyXG4gICAgVE9PX01BTllfUkVRVUVTVFMgICAgICAgICAgICAgICA9IDQyOSxcclxuICAgIElOVEVSTkFMX1NFUlZFUl9FUlJPUiAgICAgICAgICAgPSA1MDAsXHJcbiAgICBOT1RfSU1QTEVNRU5URUQgICAgICAgICAgICAgICAgID0gNTAxLFxyXG4gICAgQkFEX0dBVEVXQVkgICAgICAgICAgICAgICAgICAgICA9IDUwMixcclxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEUgICAgICAgICAgICAgPSA1MDMsXHJcbiAgICBHQVRFV0FZX1RJTUVPVVQgICAgICAgICAgICAgICAgID0gNTA0LFxyXG4gICAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQgICAgICA9IDUwNSxcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9idXR0b24uZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kYXlzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW5jb2RpbmdzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmlsZS10eXBlcy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHAtc3RhdHVzLWNvZGVzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4va2V5cy5lbnVtXCI7XHJcbiIsImV4cG9ydCBlbnVtIEtleXMge1xyXG4gICAgQVJST1dfVVAgICAgPSBcIkFycm93VXBcIixcclxuICAgIEFSUk9XX0RPV04gID0gXCJBcnJvd0Rvd25cIixcclxuICAgIEFSUk9XX0xFRlQgID0gXCJBcnJvd0xlZnRcIixcclxuICAgIEFSUk9XX1JJR0hUID0gXCJBcnJvd1JpZ2h0XCIsXHJcbiAgICBERUxFVEUgICAgICA9IFwiRGVsZXRlXCIsXHJcbiAgICBDT05UUk9MICAgICA9IFwiQ29udHJvbExlZnRcIixcclxuICAgIFNISUZUICAgICAgID0gXCJTaGlmdExlZnRcIixcclxuICAgIFBBR0VfVVAgICAgID0gXCJQYWdlVXBcIixcclxuICAgIFBBR0VfRE9XTiAgID0gXCJQYWdlRG93blwiLFxyXG4gICAgRVNDQVBFICAgICAgPSBcIkVzY2FwZVwiLFxyXG4gICAgVyAgICAgICAgICAgPSBcIktleVdcIixcclxuICAgIEYgICAgICAgICAgID0gXCJLZXlGXCIsXHJcbiAgICBBICAgICAgICAgICA9IFwiS2V5QVwiLFxyXG4gICAgUCAgICAgICAgICAgPSBcIktleVBcIixcclxuICAgIFMgICAgICAgICAgID0gXCJLZXlTXCIsXHJcbiAgICBEICAgICAgICAgICA9IFwiS2V5RFwiLFxyXG4gICAgUiAgICAgICAgICAgPSBcIktleVJcIixcclxuXHJcbiAgICBESUdJVF8xICAgICAgICAgICA9IFwiRGlnaXQxXCIsXHJcbiAgICBESUdJVF8yICAgICAgICAgICA9IFwiRGlnaXQyXCIsXHJcbiAgICBESUdJVF8zICAgICAgICAgICA9IFwiRGlnaXQzXCIsXHJcbiAgICBESUdJVF80ICAgICAgICAgICA9IFwiRGlnaXQ0XCIsXHJcbiAgICBESUdJVF81ICAgICAgICAgICA9IFwiRGlnaXQ1XCIsXHJcbiAgICBESUdJVF82ICAgICAgICAgICA9IFwiRGlnaXQ2XCIsXHJcbiAgICBESUdJVF83ICAgICAgICAgICA9IFwiRGlnaXQ3XCIsXHJcbiAgICBESUdJVF84ICAgICAgICAgICA9IFwiRGlnaXQ4XCIsXHJcbiAgICBESUdJVF85ICAgICAgICAgICA9IFwiRGlnaXQ5XCIsXHJcbiAgICBESUdJVF8wICAgICAgICAgICA9IFwiRGlnaXQwXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlzT2xkIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRU5URVIgICAgICAgPSAxMztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFCICAgICAgICAgPSA5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXICAgICAgICAgICA9IDg3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBICAgICAgICAgICA9IDY1O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTICAgICAgICAgICA9IDgzO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEICAgICAgICAgICA9IDY4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBRICAgICAgICAgICA9IDgxO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFICAgICAgICAgICA9IDY5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGICAgICAgICAgICA9IDcwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMQ09OVFJPTCAgICA9IDE3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFU0NBUEUgICAgICA9IDI3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMQUxUICAgICAgICA9IDE4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMU0hJRlQgICAgICA9IDE2O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTUEFDRSAgICAgICA9IDMyO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19VUCAgICA9IDM4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19ET1dOICA9IDQwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19SSUdIVCA9IDM5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19MRUZUICA9IDM3O1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL25vdC1icm93c2VyLmV4Y2VwdGlvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9udWxsLXBvaW50ZXIuZXhjZXB0aW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dyb25nLXBhcmFtZXRlci5leGNlcHRpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWlzc2luZy1wYXJhbWV0ZXIuZXJyb3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbm8tZGF0YWJhc2UtY29ubmVjdGlvbi5lcnJvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93cm9uZy10eXBlLmV4Y2VwdGlvblwiO1xyXG4iLCJleHBvcnQgY2xhc3MgTWlzc2luZ1BhcmFtZXRlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtZXRlck5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGBQYXJhbWV0ZXIgJHtwYXJhbWV0ZXJOYW1lfSBtdXN0IGJlIGRlZmluZWRgKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTm9EYXRhYmFzZUNvbm5lY3Rpb25FcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIkRhdGFiYXNlIGNvbm5lY3Rpb24gaXMgbm8gZXN0YWJsaXNoZWRcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gZ2V0VGV4dCh0ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0ID8gYDogJHt0ZXh0fWAgOiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90QnJvd3NlckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYEFwcCBpcyBub3QgcnVubmluZyBpbiBicm93c2VyJHtnZXRUZXh0KHRleHQpfSFgKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE5vdEJyb3dzZXJFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTnVsbFBvaW50ZXJFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiTnVsbCBwb2ludGVyIGV4Y2VwdGlvbiBhdCBsaW5lXCIgKyAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIgPyBcIjogXCIgKyB0ZXh0IDogXCIhXCIpKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE51bGxQb2ludGVyRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFdyb25nUGFyYW1ldGVyRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihgV3JvbmcgcGFyYW1ldGVyIGV4Y2VwdGlvbiBhdCBsaW5lJHt0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIiA/IFwiOiBcIiArIHRleHQgOiBcIiFcIn1gKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFdyb25nUGFyYW1ldGVyRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFdyb25nVHlwZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyZXF1aXJlZFR5cGU6IHN0cmluZywgdGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGBXcm9uZyB0eXBlIGV4Y2VwdGlvbiBhdCBsaW5lLiAke3R5cGVvZiByZXF1aXJlZFR5cGV9IG11c3QgYmUgJHtyZXF1aXJlZFR5cGV9JHt0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIiA/IFwiOiBcIiArIHRleHQgOiBcIiFcIn1gKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFdyb25nVHlwZUV4Y2VwdGlvbi5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0dVdGlsc1wiO1xyXG5cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlY3RvcjJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yMmZcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yM1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92ZWN0b3I0XCI7XHJcbiIsImltcG9ydCB7IFJhbmdlIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyIGltcGxlbWVudHMgU2ltcGxlVmVjdG9yMiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB5ID0gMCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFpFUk8oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFVQKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMRUZUKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigtMSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQk9UVE9NKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUklHSFQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE9ORSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhdmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW0gLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3VtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21BcnJheSh2YWw6IFtudW1iZXIsIG51bWJlcl0gfCBGbG9hdDMyQXJyYXkpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmFsWzBdLCB2YWxbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodmVjQSA9PT0gdmVjQikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNBLnggPT09IHZlY0IueCAmJiB2ZWNBLnkgPT09IHZlY0IueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1Yih2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY0EueCAtIHZlY0IueCwgdmVjQS55IC0gdmVjQi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb20odmFsQTogbnVtYmVyLCB2YWxCID0gdmFsQSk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2YWxBLCB2YWxCKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmlzaWJsZShvYnNYOiBudW1iZXIsIG9ic1k6IG51bWJlciwgYW5nbGU6IG51bWJlciwgY3V0T2ZmOiBudW1iZXIsIHB4OiBudW1iZXIsIHB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYW5nbGUgLSBNYXRoLmF0YW4yKFxyXG4gICAgICAgICAgICBweSAtIG9ic1ksXHJcbiAgICAgICAgICAgIHB4IC0gb2JzWCxcclxuICAgICAgICApIDw9IGN1dE9mZjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT3V0bGluZVJhbmdlKHBvaW50czogcmVhZG9ubHkgU2ltcGxlVmVjdG9yMltdKTogUmFuZ2U8U2ltcGxlVmVjdG9yMj4ge1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IHtcclxuICAgICAgICAgICAgeDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIHk6IEluZmluaXR5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWF4ID0ge1xyXG4gICAgICAgICAgICB4OiAtSW5maW5pdHksXHJcbiAgICAgICAgICAgIHk6IC1JbmZpbml0eSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb2ludHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocC54IDwgbWluLngpIHtcclxuICAgICAgICAgICAgICAgIG1pbi54ID0gcC54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwLnkgPCBtaW4ueSkge1xyXG4gICAgICAgICAgICAgICAgbWluLnkgPSBwLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHAueCA+IG1heC54KSB7XHJcbiAgICAgICAgICAgICAgICBtYXgueCA9IHAueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocC55ID4gbWF4LnkpIHtcclxuICAgICAgICAgICAgICAgIG1heC55ID0gcC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UobWluLCBtYXgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhbmdsZUJldHdlZW5Qb2ludHMob2JzWDogbnVtYmVyLCBvYnNZOiBudW1iZXIsIHB4MTogbnVtYmVyLCBweTE6IG51bWJlciwgcHgyOiBudW1iZXIsIHB5MjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgcHkxIC0gb2JzWSxcclxuICAgICAgICAgICAgcHgxIC0gb2JzWCxcclxuICAgICAgICApIC0gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgcHkyIC0gb2JzWSxcclxuICAgICAgICAgICAgcHgyIC0gb2JzWCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWZWN0b3IoaXRlbTogYW55KTogaXRlbSBpcyBTaW1wbGVWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiAhaXNOYU4oaXRlbS54KSAmJiAhaXNOYU4oaXRlbS55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bSh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY0EueCArIHZlY0IueCwgdmVjQS55ICsgdmVjQi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1pbih2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKE1hdGgubWluKHZlY0EueCwgdmVjQi54KSwgTWF0aC5taW4odmVjQS55LCB2ZWNCLnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1heCh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKE1hdGgubWF4KHZlY0EueCwgdmVjQi54KSwgTWF0aC5tYXgodmVjQS55LCB2ZWNCLnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3QodmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh2ZWNBLnggLSB2ZWNCLngsIDIpICsgTWF0aC5wb3codmVjQS55IC0gdmVjQi55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzWmVybygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm9ybWFsaXplZCgpOiBTaW1wbGVWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bE51bSh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2YWw6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNBLnggKiB2YWwsIHZlY0EueSAqIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bCh2YWx1ZTogU2ltcGxlVmVjdG9yMiB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWUueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQodmFsdWU6IFNpbXBsZVZlY3RvcjIgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHZhbHVlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHZhbHVlLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViKHZhbHVlOiBTaW1wbGVWZWN0b3IyIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggLT0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB2YWx1ZS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpdih2YWx1ZTogU2ltcGxlVmVjdG9yMiB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54IC89IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gdmFsdWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gdmFsdWUueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHZlYzogU2ltcGxlVmVjdG9yMik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBwcm9jZXNzID0gKFxyXG4gICAgb3A6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCxcclxuICAgIGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLFxyXG4gICAgYXJnMj86IG51bWJlcixcclxuKTogdm9pZCA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBvcChhcmcxIGFzIG51bWJlciwgYXJnMik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgb3AoYXJnMSwgYXJnMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wKGFyZzEueCwgYXJnMS55KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBpcyB1c2VkIGZvciBob2xkaW5nIDIgbnVtZXJpYyB2YWx1ZXMgYW5kIG1hbmlwdWxhdGlvbiB3aXRoIHRoZW1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyZiB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBYIHZhbHVlIG9mIHZlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgWSB2YWx1ZSBvZiB2ZWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHggPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCB2ZWN0b3JzIHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgY3JlYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gYWRkIHZhbHVlcyBpbnRvIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGRpdmlkZSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXYoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBtdWx0aXBseSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtdWwoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBzdWJ0cmFjdCB2YWx1ZXMgZnJvbSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWIoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMyB9IGZyb20gXCIuL3NpbXBsZS12ZWN0b3IzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi92ZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMyBpbXBsZW1lbnRzIFNpbXBsZVZlY3RvcjMge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB4ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeSA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHogPSAwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgVVAoKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIDEsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFpFUk8oKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE9ORSgpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMSwgMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhdmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCArIHRoaXMueSArIHRoaXMueikgLyAzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodmVjQSA9PT0gdmVjQikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNBLnggPT09IHZlY0IueCAmJiB2ZWNBLnkgPT09IHZlY0IueSAmJiB2ZWNBLnogPT09IHZlY0IuejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1Yih2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY0EueCAtIHZlY0IueCwgdmVjQS55IC0gdmVjQi55LCB2ZWNBLnogLSB2ZWNCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICsgdmVjQi54LCB2ZWNBLnkgKyB2ZWNCLnksIHZlY0EueiArIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0odmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWNBLnggKyB2ZWNCLngsIHZlY0EueSArIHZlY0IueSwgdmVjQS56ICsgdmVjQi56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bE51bSh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2YWw6IG51bWJlcik6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWNBLnggKiB2YWwsIHZlY0EueSAqIHZhbCwgdmVjQS56ICogdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bCh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY0EueCArIHZlY0IueCwgdmVjQS55ICsgdmVjQi55LCB2ZWNBLnogKyB2ZWNCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoTWF0aC5taW4odmVjQS54LCB2ZWNCLngpLCBNYXRoLm1pbih2ZWNBLnksIHZlY0IueSksIE1hdGgubWluKHZlY0EueiwgdmVjQi56KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGcm9tU3BoZXJpY2FsQ29vcmRzKHJhZGl1czogbnVtYmVyLCBwaGk6IG51bWJlciwgdGhldGE6IG51bWJlcik6IFZlY3RvcjMge1xyXG4gICAgICAgIGNvbnN0IHNpblBoaVJhZGl1cyA9IE1hdGguc2luKHBoaSkgKiByYWRpdXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBzaW5QaGlSYWRpdXMgKiBNYXRoLnNpbih0aGV0YSk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguY29zKHBoaSkgKiByYWRpdXM7XHJcbiAgICAgICAgY29uc3QgeiA9IHNpblBoaVJhZGl1cyAqIE1hdGguY29zKHRoZXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWF4KHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLCBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSksIE1hdGgubWF4KHZlY0EueiwgdmVjQi56KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codmVjQS54IC0gdmVjQi54LCAyKSArIE1hdGgucG93KHZlY0EueSAtIHZlY0IueSwgMikgKyBNYXRoLnBvdyh2ZWNBLnogLSB2ZWNCLnosIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5vcm1hbGl6ZTxUIGV4dGVuZHMgU2ltcGxlVmVjdG9yMz4odmVjOiBUKTogVCB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55ICsgdmVjLnogKiB2ZWMueik7XHJcbiAgICAgICAgdmVjLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy55IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueiAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB4eSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbSh2YWxBOiBudW1iZXIsIHZhbEIgPSB2YWxBLCB2YWxDID0gdmFsQSk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2YWxBLCB2YWxCLCB2YWxDKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmVjdG9yKGl0ZW06IGFueSk6IGl0ZW0gaXMgU2ltcGxlVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgIWlzTmFOKGl0ZW0ueCkgJiYgIWlzTmFOKGl0ZW0ueSkgJiYgIWlzTmFOKGl0ZW0ueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvQXJyYXkoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdW0oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy55ICsgdGhpcy56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3JtYWxpemVkKCk6IFNpbXBsZVZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnogLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsKHZhbHVlOiBTaW1wbGVWZWN0b3IzIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy56ICo9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWUueTtcclxuICAgICAgICAgICAgdGhpcy56ICo9IHZhbHVlLno7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHZlYzogU2ltcGxlVmVjdG9yMyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56ICs9IHZlYy56O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3Jvc3ModjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsWCA9IHRoaXMueSAqIHYueiAtIHRoaXMueiAqIHYueTtcclxuICAgICAgICBjb25zdCBsb2NhbFkgPSB0aGlzLnogKiB2LnggLSB0aGlzLnggKiB2Lno7XHJcbiAgICAgICAgY29uc3QgbG9jYWxaID0gdGhpcy54ICogdi55IC0gdGhpcy55ICogdi54O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMobG9jYWxYLCBsb2NhbFksIGxvY2FsWik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRvdCh2OiBTaW1wbGVWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55ICsgdGhpcy56ICogdi56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWIodmVjOiBTaW1wbGVWZWN0b3IzKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogLT0gdmVjLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh2ZWM6IFNpbXBsZVZlY3RvcjMpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogPSB2ZWMuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5eCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeXooKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueSwgdGhpcy56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHp5KCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnosIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB4eigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgengoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueiwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21BcnJheSh2YWx1ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHwgRmxvYXQzMkFycmF5KTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjQgfSBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yNFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjQgaW1wbGVtZW50cyBTaW1wbGVWZWN0b3I0IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHkgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB6ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgdyA9IDApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBaRVJPKCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCgwLCAwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBPTkUoKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KDEsIDEsIDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUFycmF5KHZhbDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfCBGbG9hdDMyQXJyYXkpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQodmFsWzBdLCB2YWxbMV0sIHZhbFsyXSwgdmFsWzNdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb20odmFsQTogbnVtYmVyLCB2YWxCID0gdmFsQSwgdmFsQyA9IHZhbEIsIHZhbEQgPSB2YWxDKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KHZhbEEsIHZhbEIsIHZhbEMsIHZhbEQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXZnKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKyB0aGlzLnkgKyB0aGlzLnogKyB0aGlzLncpIC8gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICsgdGhpcy53ICogdGhpcy53KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVxdWFscyh2ZWNBOiBTaW1wbGVWZWN0b3I0LCB2ZWNCOiBTaW1wbGVWZWN0b3I0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHZlY0EgPT09IHZlY0IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmVjQS54ID09PSB2ZWNCLnggJiYgdmVjQS55ID09PSB2ZWNCLnkgJiYgdmVjQS56ID09PSB2ZWNCLnogJiYgdmVjQS53ID09PSB2ZWNCLnc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtaW4odmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNChcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS54LCB2ZWNCLngpLFxyXG4gICAgICAgICAgICBNYXRoLm1pbih2ZWNBLnksIHZlY0IueSksXHJcbiAgICAgICAgICAgIE1hdGgubWluKHZlY0EueiwgdmVjQi56KSxcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS53LCB2ZWNCLncpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYXgodmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNChcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLFxyXG4gICAgICAgICAgICBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSksXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHZlY0EueiwgdmVjQi56KSxcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS53LCB2ZWNCLncpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHZlY0E6IFNpbXBsZVZlY3RvcjQsIHZlY0I6IFNpbXBsZVZlY3RvcjQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EueCAtIHZlY0IueCwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyh2ZWNBLnkgLSB2ZWNCLnksIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3codmVjQS56IC0gdmVjQi56LCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EudyAtIHZlY0IudywgMiksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5vcm1hbGl6ZTxUIGV4dGVuZHMgU2ltcGxlVmVjdG9yND4odmVjOiBUKTogVCB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55ICsgdmVjLnogKiB2ZWMueiArIHZlYy53ICogdmVjLncpO1xyXG4gICAgICAgIHZlYy54IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdmVjLnogLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy53IC89IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlYztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZlY3RvcihpdGVtOiBhbnkpOiBpdGVtIGlzIFNpbXBsZVZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBpdGVtICYmICFpc05hTihpdGVtLngpICYmICFpc05hTihpdGVtLnkpICYmICFpc05hTihpdGVtLnopICYmICFpc05hTihpdGVtLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0FycmF5KCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMud107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vcm1hbGl6ZWQoKTogU2ltcGxlVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KHRoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMudyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZSgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy56IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLncgLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsKHZhbHVlOiBTaW1wbGVWZWN0b3I0IHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy56ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLncgKj0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZS55O1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWUuejtcclxuICAgICAgICAgICAgdGhpcy53ICo9IHZhbHVlLnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHZlYzogU2ltcGxlVmVjdG9yNCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56ICs9IHZlYy56O1xyXG4gICAgICAgIHRoaXMudyArPSB2ZWMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Yih2ZWM6IFNpbXBsZVZlY3RvcjQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiAtPSB2ZWMuejtcclxuICAgICAgICB0aGlzLncgLT0gdmVjLnc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHc6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQodmVjOiBTaW1wbGVWZWN0b3I0KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56ID0gdmVjLno7XHJcbiAgICAgICAgdGhpcy53ID0gdmVjLnc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgQWpheFBhcmFtcyB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIgfCBcIlBPU1RcIjtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgb25SZXNwb25zZTogKGRhdGE6IGFueSkgPT4gdm9pZDtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmNsYXNzIEFqYXhXcmFwcGVyIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFqYXhIYW5kbGVyOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWpheCh7XHJcbiAgICBtZXRob2QgPSBcIkdFVFwiLFxyXG4gICAgdXJsLFxyXG4gICAgb25SZXNwb25zZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBoZWFkZXJzID0ge30sXHJcbn06IEFqYXhQYXJhbXMpOiBBamF4V3JhcHBlciB7XHJcbiAgICBjb25zdCByZXF1ZXN0ICAgICAgICAgICAgICA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0ICYmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwIHx8IHJlcXVlc3Quc3RhdHVzID09PSAyMDEpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb25SZXNwb25zZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9uUmVzcG9uc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG4gICAgT2JqZWN0LmVudHJpZXMoaGVhZGVycykuZm9yRWFjaCgoZW50cnkpID0+IHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihlbnRyeVswXSwgZW50cnlbMV0pKTtcclxuICAgIHJlcXVlc3Quc2VuZChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFqYXhXcmFwcGVyKHJlcXVlc3QpO1xyXG59XHJcbiIsImNvbnN0IEZJTEVfU0laRV9VTklUUyAgICAgID0gW1wiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiLCBcIlRCXCIsIFwiUEJcIiwgXCJFQlwiLCBcIlpCXCIsIFwiWUJcIl07XHJcbmNvbnN0IEZJTEVfU0laRV9VTklUU19MT05HID0gW1wiQnl0ZXNcIiwgXCJLaWxvYnl0ZXNcIiwgXCJNZWdhYnl0ZXNcIiwgXCJHaWdhYnl0ZXNcIiwgXCJQZXR0YWJ5dGVzXCIsIFwiRXhhYnl0ZXNcIiwgXCJaZXR0YWJ5dGVzXCIsIFwiWW90dGFieXRlc1wiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWxlU2l6ZShzaXplSW5CeXRlczogbnVtYmVyLCBsb25nRm9ybSA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHVuaXRzID0gbG9uZ0Zvcm1cclxuICAgICAgICA/IEZJTEVfU0laRV9VTklUU19MT05HXHJcbiAgICAgICAgOiBGSUxFX1NJWkVfVU5JVFM7XHJcblxyXG4gICAgbGV0IHBvd2VyID0gTWF0aC5yb3VuZChNYXRoLmxvZyhzaXplSW5CeXRlcykgLyBNYXRoLmxvZygxMDI0KSk7XHJcbiAgICBwb3dlciAgICAgPSBNYXRoLm1pbihwb3dlciwgdW5pdHMubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZSAgICAgICAgICA9IHNpemVJbkJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgcG93ZXIpOyAvLyBzaXplIGluIG5ldyB1bml0c1xyXG4gICAgY29uc3QgZm9ybWF0dGVkU2l6ZSA9IE1hdGgucm91bmQoc2l6ZSAqIDEwMCkgLyAxMDA7IC8vIGtlZXAgdXAgdG8gMiBkZWNpbWFsc1xyXG4gICAgY29uc3QgdW5pdCAgICAgICAgICA9IHVuaXRzW3Bvd2VyXTtcclxuXHJcbiAgICByZXR1cm4gc2l6ZSA/IGAke2Zvcm1hdHRlZFNpemV9ICR7dW5pdH1gIDogXCIwXCI7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2xvdmFrLXN0ZW1tZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYWpheFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9maWxlLXNpemUtZm9ybWF0dGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS1sb29wXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bnRpbWUtdmFsaWRhdG9yc1wiO1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0QXNTdHJpbmcgPSAoa2V5OiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhcmlhYmxlIHdpdGggdmFsdWUgJHtrZXl9IGlzIG5vdCBhIHN0cmluZ2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRBc051bWJlciA9IChrZXk6IGFueSk6IG51bWJlciA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgd2l0aCB2YWx1ZSAke2tleX0gaXMgbm90IGEgbnVtYmVyYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZUxvb3AoY2FsbGJhY2s6IChkZWx0YTogbnVtYmVyKSA9PiB2b2lkLCByZXF1aXJlZEZwcyA9IDYwKTogeyBzdG9wOiAoKSA9PiB2b2lkIH0ge1xyXG4gICAgbGV0IHN0YXJ0OiBudW1iZXI7XHJcbiAgICBsZXQgcmVxOiBudW1iZXI7XHJcbiAgICBjb25zdCByZXF1aXJlZER1cmF0aW9uID0gMTAwMCAvIHJlcXVpcmVkRnBzO1xyXG4gICAgY29uc3QgdGljayA9ICh0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRpbWUgLSBzdGFydDtcclxuICAgICAgICBzdGFydCA9IHRpbWU7XHJcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xyXG4gICAgICAgIGNhbGxiYWNrKChkdXJhdGlvbiAvIHJlcXVpcmVkRHVyYXRpb24pIHx8IDEpO1xyXG4gICAgfTtcclxuICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0b3A6KCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKSxcclxuICAgIH07XHJcbn1cclxuIiwiZnVuY3Rpb24gcmVtb3ZlUHJlZHBvbmEoY2hhcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChjaGFyLmxlbmd0aCA+IDYgJiYgY2hhci5zdGFydHNXaXRoKFwibmFqXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYXIuc3Vic3RyKDMsIGNoYXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2hhcjtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmZ1bmN0aW9uIHJlbW92ZUNhc2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuID0ga2V5Lmxlbmd0aDtcclxuICAgIGlmIChsZW4gPiA5ICYmIGtleS5lbmRzV2l0aChcImVqxaFpZWhvXCIpXHJcbiAgICAgICAgfHwga2V5LmVuZHNXaXRoKFwiZWrFoWllbXVcIikpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA3KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gOCAmJiAoa2V5LmVuZHNXaXRoKFwiZWrFocOtY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNvY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61taVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY2FtaVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA2KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNyAmJiAoa2V5LmVuZHNXaXRoKFwiZWrFoWlhXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiYXRhbWlcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmllY1wiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY29tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoW9tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFocOtbVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFlalwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFvdVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFpdVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFpZVwiKVxyXG4gICAgKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA2ICYmXHJcbiAgICAgICAgKGtleS5lbmRzV2l0aChcImXFpW9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhbWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWlb21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZpYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVuY2VcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZW11XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWV0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61cIikgfHxcclxuICAgICAgICAgICAgLy8gZ2Fib3NcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5pZVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNSAmJlxyXG4gICAgICAgIChrZXkuZW5kc1dpdGgoXCJpY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDqWhvXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6ltdVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtdVwiKSB8fFxyXG4gICAgICAgICAgICAvKmtleS5lbmRzV2l0aChcImlob1wiKSB8fCovIC8vIFZlxL5taSBtYWzDvSB2cGx5dlxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOhY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsOpXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w71cIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDrVwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92aVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWXFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71taVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInltaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhY2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFtXCIpIHx8XHJcbiAgICAgICAgICAgIC8qa2V5LmVuZHNXaXRoKFwiYXTDoVwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhY1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpdGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxpXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm9jaFwiKVxyXG4gICAgICAgICkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNCAmJlxyXG4gICAgICAgICgvKmtleS5lbmRzV2l0aChcIsOtblwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOhbVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInVzXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71tXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIml1XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImltXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm11XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw7rFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw63FoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw7pjXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImXFoVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gMykge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5W2xlbiAtIDFdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJvXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDulwiOlxyXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw6FcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOpXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDrVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw71cIjpcclxuICAgICAgICAgICAgICAgIC8qY2FzZSBcIsO0XCI6Ki9cclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3NzZXNzaXZlcyhzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuID0gcy5sZW5ndGg7XHJcbiAgICBpZiAobGVuID4gNSAmJiBzLmVuZHNXaXRoKFwiaW5cIikgfHxcclxuICAgICAgICBzLmVuZHNXaXRoKFwib3ZcIikpIHtcclxuICAgICAgICByZXR1cm4gcy5zdWJzdHIoMCwgbGVuIC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuID0gcy5sZW5ndGg7XHJcbiAgICAvLyB0b3RvIHByYXZpZGxvIHpuacW+dWplIEZQIGFsZSB6dnnFoXVqZSBGTlxyXG4gICAgLyogICAgICAgIGlmIChsZW4gPiAxICYmIHNbbGVuIC0gMl0gPT0gXCJpXCIgJiYgc1tsZW4tMV09PVwiY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzW2xlbiAtIDJdID0gc1tsZW4gLSAxXTsgLy8gZSogPiAqXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVuIC0gMTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICBzd2l0Y2ggKHNbbGVuIC0gMV0pIHtcclxuICAgICAgICBjYXNlIFwiY1wiOiAvLyBbY8SNXSAtPiBrXHJcbiAgICAgICAgY2FzZSBcIsSNXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJrXCIpO1xyXG4gICAgICAgIGNhc2UgXCLEvlwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcImxcIik7XHJcbiAgICAgICAgY2FzZSBcIsWIXCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwiblwiKTtcclxuICAgICAgICBjYXNlIFwixaVcIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJ0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiAzICYmIHNbbGVuIC0gM10gPT09IFwiaVwiICYmIChzW2xlbiAtIDJdID09PSBcImVcIiB8fCBzW2xlbiAtIDJdID09PSBcImFcIiB8fCBzW2xlbiAtIDJdID09PSBcInVcIikpIHtcclxuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1tsZW4gLSAyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuIC0gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNbbGVuIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2xvdmFrU3RlbW1lciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHN0ZW1lKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVtb3ZlUG9zc2Vzc2l2ZXMocmVtb3ZlQ2FzZShyZW1vdmVQcmVkcG9uYSh3b3JkKSkpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaGV4MnJnYiwgaW50MnJnYiwgcmdiMmhleCwgcmdiMmludCB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tDb2xvclZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHZhbHVlID49IDApO1xyXG4gICAgY29uc29sZS5hc3NlcnQodmFsdWUgPD0gMjU1KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQkxBQ0sgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdISVRFID0gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkFZICA9IG5ldyBDb2xvcigxMjgsIDEyOCwgMTI4KTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVEICAgPSBuZXcgQ29sb3IoMjU1LCAwLCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JFRU4gPSBuZXcgQ29sb3IoMCwgMjU1LCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQkxVRSAgPSBuZXcgQ29sb3IoMCwgMCwgMjU1KTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHJlZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBncmVlbjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBibHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGFscGhhID0gMjU1KSB7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKHJlZCk7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGdyZWVuKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoYmx1ZSk7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGFscGhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYigpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZ2JTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMucmVkfSwgJHt0aGlzLmdyZWVufSwgJHt0aGlzLmJsdWV9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZ2JhKCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWUsIHRoaXMuYWxwaGFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaGV4KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHJnYjJoZXgoTWF0aC5mbG9vcih0aGlzLnJlZCksIE1hdGguZmxvb3IodGhpcy5ncmVlbiksIE1hdGguZmxvb3IodGhpcy5ibHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcmdiMmludCh0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21IZXgoY29sb3I6IHN0cmluZyk6IENvbG9yIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhleDJyZ2IoY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKC4uLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21JbnQoY29sb3I6IG51bWJlcik6IENvbG9yIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGludDJyZ2IoY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKC4uLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplZCgpOiBDb2xvciB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVkID4gMSB8fCB0aGlzLmdyZWVuID4gMSB8fCB0aGlzLmJsdWUgPiAxIHx8IHRoaXMuYWxwaGEgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IodGhpcy5yZWQgLyAyNTUsIHRoaXMuZ3JlZW4gLyAyNTUsIHRoaXMuYmx1ZSAvIDI1NSwgdGhpcy5hbHBoYSAvIDI1NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBHZW5kZXJ9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCB0eXBlIEdlbmRlclR5cGUgPSBcIk1BTlwiIHwgXCJXT01BTlwiIHwgXCJcIjtcclxuXHJcbmNvbnN0IG1hbGVSZWdleHAgICA9IC9eKG1hbGV8bWFufG11enxib3l8Y2hsYXBlY3xtKSQvZztcclxuY29uc3QgZmVtYWxlUmVnZXhwID0gL14oZmVtYWxlfHdvbWFufHplbmF8Z2lybHxkaWV2Y2F8Znx3fHopJC9nO1xyXG5cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICAgIE1BTiAgID0gXCJNQU5cIixcclxuICAgIFdPTUFOID0gXCJXT01BTlwiLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VHZW5kZXIoZ2VuZGVyOiBzdHJpbmcpOiBHZW5kZXIgfCBudWxsIHtcclxuICAgIGlmICghZ2VuZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZW5kZXJMb3dlckNhc2UgPSBnZW5kZXIudHJpbSgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIsW+XCIsIFwielwiKS5yZXBsYWNlKFwixI1cIiwgXCJjXCIpO1xyXG4gICAgaWYgKGdlbmRlckxvd2VyQ2FzZS5tYXRjaChtYWxlUmVnZXhwKSkge1xyXG4gICAgICAgIHJldHVybiBHZW5kZXIuTUFOO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZW5kZXJMb3dlckNhc2UubWF0Y2goZmVtYWxlUmVnZXhwKSkge1xyXG4gICAgICAgIHJldHVybiBHZW5kZXIuV09NQU47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHBhcnNlR2VuZGVyfSBhbmQge0BsaW5rIEdlbmRlcn0gaW5zdGVhZFxyXG4gKiBDbGFzcyBpcyB1c2VkIGZvciBwYXJzaW5nIGdlbmRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdlbmRlckNsYXNzIHtcclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHBhcnNlIHN0cmluZyBhbmQgcmV0dXJuIEdlbmRlclR5cGVcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcGFyc2VHZW5kZXJ9IGluc3RlYWRcclxuICAgICAqIEBwYXJhbSBnZW5kZXIgZ2VuZGVyIGluIGFueSBmb3JtYXRUaW1lXHJcbiAgICAgKiBAcmV0dXJucyBwYXJzZWQgZ2VuZGVyIGFzIHtAbGluayBHZW5kZXJUeXBlfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlID0gcGFyc2VHZW5kZXI7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE1vZGVsIGlzIGVudW0gYW5kIHBhcnNlclxyXG4gKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2dlbmRlci5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xvci5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90cmFuc2Zvcm1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmFuZ2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGF0aFwiO1xyXG5cclxuLy8gVE9ETzogQ2Fubm90IGltcG9ydCBjb3VudHJpZXMuZGF0YS5qc29uXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2NvdW50cmllcy9jb3VudHJ5LmludGVyZmFjZVwiO1xyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5tb2RlbFwiO1xyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aDxUIGV4dGVuZHMgU2ltcGxlVmVjdG9yMj4ge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBwb2ludHM6IHJlYWRvbmx5IFRbXSkge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgY3JlYXRlIHBhdGggd2l0aCBsZXNzIHRoYW4gMiBwb2ludHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZpcnN0KCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50c1swXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxhc3QoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb2ludChpbmRleDogbnVtYmVyKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2luZGV4XTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcbmltcG9ydCB7IHJhbmRvbUZsb2F0QmV0d2VlbiwgcmFuZG9tSW50QmV0d2VlbiB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL2NvbG9yLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZ2U8VD4ge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBtaW46IFQsIHB1YmxpYyByZWFkb25seSBtYXg6IFQgPSBtaW4pIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbShyYW5nZTogUmFuZ2U8bnVtYmVyPik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4sIHJhbmdlLm1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21WZWN0b3IocmFuZ2U6IFJhbmdlPFNpbXBsZVZlY3RvcjI+KTogU2ltcGxlVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogcmFuZG9tRmxvYXRCZXR3ZWVuKHJhbmdlLm1pbi54LCByYW5nZS5tYXgueCksXHJcbiAgICAgICAgICAgIHk6IHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4ueSwgcmFuZ2UubWF4LnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Db2xvckYocmFuZ2U6IFJhbmdlPENvbG9yPik6IENvbG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLnJlZCwgcmFuZ2UubWF4LnJlZCksXHJcbiAgICAgICAgICAgIHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4uZ3JlZW4sIHJhbmdlLm1heC5ncmVlbiksXHJcbiAgICAgICAgICAgIHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4uYmx1ZSwgcmFuZ2UubWF4LmJsdWUpLFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLmFscGhhLCByYW5nZS5tYXguYWxwaGEpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Db2xvckkocmFuZ2U6IFJhbmdlPENvbG9yPik6IENvbG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKFxyXG4gICAgICAgICAgICByYW5kb21JbnRCZXR3ZWVuKHJhbmdlLm1pbi5yZWQsIHJhbmdlLm1heC5yZWQpLFxyXG4gICAgICAgICAgICByYW5kb21JbnRCZXR3ZWVuKHJhbmdlLm1pbi5ncmVlbiwgcmFuZ2UubWF4LmdyZWVuKSxcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4uYmx1ZSwgcmFuZ2UubWF4LmJsdWUpLFxyXG4gICAgICAgICAgICByYW5kb21JbnRCZXR3ZWVuKHJhbmdlLm1pbi5hbHBoYSwgcmFuZ2UubWF4LmFscGhhKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNmb3JtIHtcclxuICAgIHJlYWRvbmx5IG9mZnNldDogUmVhZG9ubHk8U2ltcGxlVmVjdG9yMj47XHJcbiAgICByZWFkb25seSBzY2FsZTogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm90YXRpb246IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRUcmFuc2Zvcm0oKTogVHJhbnNmb3JtIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb2Zmc2V0ICA6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlICAgOiAxLFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcbmltcG9ydCB7IE1pbk1heCwgUG9zU2l6ZSwgWFlXSCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgU3BoZXJlIH0gZnJvbSBcIi4vb2JqZWN0cy8yZC9zcGhlcmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaXhYWVdIKG1pbk1heDogTWluTWF4LCB4eXdoOiBYWVdIKTogU2ltcGxlVmVjdG9yMiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7eDogeHl3aC54LCB5OiB4eXdoLnl9O1xyXG5cclxuICAgIGlmICh4eXdoLnggPCBtaW5NYXgubWluLngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5taW4ueDtcclxuICAgIH0gZWxzZSBpZiAoeHl3aC54ICsgeHl3aC53ID4gbWluTWF4Lm1heC54KSB7XHJcbiAgICAgICAgcmVzdWx0LnggPSBtaW5NYXgubWF4LnggLSB4eXdoLnc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHh5d2gueSA8IG1pbk1heC5taW4ueSkge1xyXG4gICAgICAgIHJlc3VsdC55ID0gbWluTWF4Lm1pbi55O1xyXG4gICAgfSBlbHNlIGlmICh4eXdoLnkgKyB4eXdoLmggPiBtaW5NYXgubWF4LnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5tYXgueSAtIHh5d2guaDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZml4UG9zU2l6ZShtaW5NYXg6IE1pbk1heCwgdGFyZ2V0OiBQb3NTaXplKTogU2ltcGxlVmVjdG9yMiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7Li4udGFyZ2V0LnBvc2l0aW9ufTtcclxuICAgIGlmICh0YXJnZXQucG9zaXRpb24ueCA8IG1pbk1heC5taW4ueCkge1xyXG4gICAgICAgIHJlc3VsdC54ID0gbWluTWF4Lm1pbi54O1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC5zaXplLnggPiBtaW5NYXgubWF4LngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5tYXgueCAtIHRhcmdldC5zaXplLng7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5wb3NpdGlvbi55IDwgbWluTWF4Lm1pbi55KSB7XHJcbiAgICAgICAgcmVzdWx0LnkgPSBtaW5NYXgubWluLnk7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LnNpemUueSA+IG1pbk1heC5tYXgueSkge1xyXG4gICAgICAgIHJlc3VsdC55ID0gbWluTWF4Lm1heC55IC0gdGFyZ2V0LnNpemUueTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZml4U3BoZXJlKG1pbk1heDogTWluTWF4LCBzcGhlcmU6IFNwaGVyZSk6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgY29uc3QgcmVzdWx0ICAgICA9IHsuLi5zcGhlcmUuY2VudGVyfTtcclxuICAgIGNvbnN0IGhhbGZSYWRpdXMgPSBzcGhlcmUucmFkaXVzIC8gMjtcclxuXHJcbiAgICBpZiAoc3BoZXJlLmNlbnRlci54IC0gaGFsZlJhZGl1cyA8IG1pbk1heC5taW4ueCkge1xyXG4gICAgICAgIHJlc3VsdC54ID0gbWluTWF4Lm1pbi54ICsgaGFsZlJhZGl1cztcclxuICAgIH0gZWxzZSBpZiAoc3BoZXJlLmNlbnRlci54ICsgaGFsZlJhZGl1cyA+IG1pbk1heC5tYXgueCkge1xyXG4gICAgICAgIHJlc3VsdC54ID0gbWluTWF4Lm1heC54IC0gaGFsZlJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3BoZXJlLmNlbnRlci55IC0gaGFsZlJhZGl1cyA8IG1pbk1heC5taW4ueSkge1xyXG4gICAgICAgIHJlc3VsdC55ID0gbWluTWF4Lm1pbi55ICsgaGFsZlJhZGl1cztcclxuICAgIH0gZWxzZSBpZiAoc3BoZXJlLmNlbnRlci55ICsgaGFsZlJhZGl1cyA+IG1pbk1heC5tYXgueSkge1xyXG4gICAgICAgIHJlc3VsdC55ID0gbWluTWF4Lm1heC55IC0gaGFsZlJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludExpbmUyZENsb3Nlc3QoXHJcbiAgICBzeDE6IG51bWJlcixcclxuICAgIHN5MTogbnVtYmVyLFxyXG4gICAgc3gyOiBudW1iZXIsXHJcbiAgICBzeTI6IG51bWJlcixcclxuICAgIHB4OiBudW1iZXIsXHJcbiAgICBweTogbnVtYmVyLFxyXG4pOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgeERlbHRhID0gc3gyIC0gc3gxO1xyXG4gICAgY29uc3QgeURlbHRhID0gc3kyIC0gc3kxO1xyXG5cclxuICAgIGNvbnN0IHUgPSAoKHB4IC0gc3gxKSAqIHhEZWx0YSArIChweSAtIHN5MSkgKiB5RGVsdGEpIC8gKHhEZWx0YSAqIHhEZWx0YSArIHlEZWx0YSAqIHlEZWx0YSk7XHJcblxyXG4gICAgaWYgKHUgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogc3gxLFxyXG4gICAgICAgICAgICB5OiBzeTEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodSA+IDEpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBzeDIsXHJcbiAgICAgICAgICAgIHk6IHN5MixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogc3gxICsgdSAqIHhEZWx0YSxcclxuICAgICAgICB5OiBzeTEgKyB1ICogeURlbHRhLFxyXG4gICAgfTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMyB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3RQb2ludE9uTGluZShcclxuICAgIHN4MTogbnVtYmVyLFxyXG4gICAgc3kxOiBudW1iZXIsXHJcbiAgICBzejE6IG51bWJlcixcclxuICAgIHN4MjogbnVtYmVyLFxyXG4gICAgc3kyOiBudW1iZXIsXHJcbiAgICBzejI6IG51bWJlcixcclxuICAgIHB4OiBudW1iZXIsXHJcbiAgICBweTogbnVtYmVyLFxyXG4gICAgcHo6IG51bWJlcixcclxuKTogU2ltcGxlVmVjdG9yMyB7XHJcbiAgICBjb25zdCB4RGVsdGEgPSBzeDIgLSBzeDE7XHJcbiAgICBjb25zdCB5RGVsdGEgPSBzeTIgLSBzeTE7XHJcbiAgICBjb25zdCB6RGVsdGEgPSBzejIgLSBzejE7XHJcblxyXG4gICAgbGV0IHUgPSAoKHB4IC0gc3gxKSAqIHhEZWx0YSArIChweSAtIHN5MSkgKiB5RGVsdGEgKyAocHogLSBzejEpICogekRlbHRhKTtcclxuICAgIHUgLz0gKHhEZWx0YSAqIHhEZWx0YSArIHlEZWx0YSAqIHlEZWx0YSArIHpEZWx0YSAqIHpEZWx0YSk7XHJcblxyXG4gICAgaWYgKHUgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogc3gxLFxyXG4gICAgICAgICAgICB5OiBzeTEsXHJcbiAgICAgICAgICAgIHo6IHN6MSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHUgPiAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogc3gyLFxyXG4gICAgICAgICAgICB5OiBzeTIsXHJcbiAgICAgICAgICAgIHo6IHN6MixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogc3gxICsgdSAqIHhEZWx0YSxcclxuICAgICAgICB5OiBzeTEgKyB1ICogeURlbHRhLFxyXG4gICAgICAgIHo6IHN6MSArIHUgKiB6RGVsdGEsXHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IHBvaW50UG9pbnQyZERpc3RhbmNlIH0gZnJvbSBcIi4vZGlzdGFuY2VzLTJkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlUmVjdDJkQ29sbGlzaW9uKFxyXG4gICAgY1Bvc1g6IG51bWJlcixcclxuICAgIGNQb3NZOiBudW1iZXIsXHJcbiAgICBjUmFkaXVzOiBudW1iZXIsXHJcbiAgICByUG9zWDogbnVtYmVyLFxyXG4gICAgclBvc1k6IG51bWJlcixcclxuICAgIHJTaXplWDogbnVtYmVyLFxyXG4gICAgclNpemVZOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2lyY2xlRGlzdGFuY2VYID0gTWF0aC5hYnMoY1Bvc1ggLSByUG9zWCk7XHJcbiAgICBjb25zdCBjaXJjbGVEaXN0YW5jZVkgPSBNYXRoLmFicyhjUG9zWSAtIHJQb3NZKTtcclxuXHJcbiAgICBpZiAoY2lyY2xlRGlzdGFuY2VYID4gclNpemVYIC8gMiArIGNSYWRpdXMpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoY2lyY2xlRGlzdGFuY2VZID4gclNpemVZIC8gMiArIGNSYWRpdXMpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWCA8PSByU2l6ZVggLyAyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY2lyY2xlRGlzdGFuY2VZIDw9IHJTaXplWSAvIDIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3JuZXJEaXN0YW5jZVNRID1cclxuICAgICAgICAgICAgICBNYXRoLnBvdyhjaXJjbGVEaXN0YW5jZVggLSByUG9zWCAvIDIsIDIpICtcclxuICAgICAgICAgICAgICBNYXRoLnBvdyhjaXJjbGVEaXN0YW5jZVkgLSByUG9zWSAvIDIsIDIpO1xyXG5cclxuICAgIHJldHVybiBjb3JuZXJEaXN0YW5jZVNRIDw9IE1hdGgucG93KGNSYWRpdXMsIDIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZVJlY3RhbmdsZTJkQ29sbGlzaW9uKFxyXG4gICAgYVN0YXJ0WDogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WTogbnVtYmVyLFxyXG4gICAgYUVuZFg6IG51bWJlcixcclxuICAgIGFFbmRZOiBudW1iZXIsXHJcbiAgICBiUG9zWDogbnVtYmVyLFxyXG4gICAgYlBvc1k6IG51bWJlcixcclxuICAgIGJTaXplWDogbnVtYmVyLFxyXG4gICAgYlNpemVZOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBvaW50UmVjdDJkQ29sbGlzaW9uKGFTdGFydFgsIGFTdGFydFksIGJQb3NYLCBiUG9zWSwgYlNpemVYLCBiU2l6ZVkpIHx8XHJcbiAgICAgICAgcG9pbnRSZWN0MmRDb2xsaXNpb24oYUVuZFgsIGFFbmRZLCBiUG9zWCwgYlBvc1ksIGJTaXplWCwgYlNpemVZKSB8fFxyXG4gICAgICAgIGxpbmVMaW5lMmRDb2xsaXNpb24oYVN0YXJ0WCxcclxuICAgICAgICAgICAgYVN0YXJ0WSxcclxuICAgICAgICAgICAgYUVuZFgsXHJcbiAgICAgICAgICAgIGFFbmRZLFxyXG4gICAgICAgICAgICBiUG9zWCxcclxuICAgICAgICAgICAgYlBvc1ksXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLFxyXG4gICAgICAgICAgICBiUG9zWSArIGJTaXplWSkgfHxcclxuICAgICAgICBsaW5lTGluZTJkQ29sbGlzaW9uKGFTdGFydFgsXHJcbiAgICAgICAgICAgIGFTdGFydFksXHJcbiAgICAgICAgICAgIGFFbmRYLFxyXG4gICAgICAgICAgICBhRW5kWSxcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsXHJcbiAgICAgICAgICAgIGJQb3NZLFxyXG4gICAgICAgICAgICBiUG9zWCxcclxuICAgICAgICAgICAgYlBvc1kgKyBiU2l6ZVkpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVMaW5lMmRDb2xsaXNpb24oXHJcbiAgICBhU3RhcnRYOiBudW1iZXIsXHJcbiAgICBhU3RhcnRZOiBudW1iZXIsXHJcbiAgICBhRW5kWDogbnVtYmVyLFxyXG4gICAgYUVuZFk6IG51bWJlcixcclxuICAgIGJTdGFydFg6IG51bWJlcixcclxuICAgIGJTdGFydFk6IG51bWJlcixcclxuICAgIGJFbmRYOiBudW1iZXIsXHJcbiAgICBiRW5kWTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuXHJcbiAgICBjb25zdCBkZW5vbWluYXRvciA9IChhRW5kWCAtIGFTdGFydFgpICogKGJFbmRZIC0gYlN0YXJ0WSkgLSAoYUVuZFkgLSBhU3RhcnRZKSAqIChiRW5kWCAtIGJTdGFydFgpO1xyXG4gICAgY29uc3QgbnVtZXJhdG9yMSAgPSAoYVN0YXJ0WSAtIGJTdGFydFkpICogKGJFbmRYIC0gYlN0YXJ0WCkgLSAoYVN0YXJ0WCAtIGJTdGFydFgpICogKGJFbmRZIC0gYlN0YXJ0WSk7XHJcbiAgICBjb25zdCBudW1lcmF0b3IyICA9IChhU3RhcnRZIC0gYlN0YXJ0WSkgKiAoYUVuZFggLSBhU3RhcnRYKSAtIChhU3RhcnRYIC0gYlN0YXJ0WCkgKiAoYUVuZFkgLSBhU3RhcnRZKTtcclxuXHJcbiAgICAvLyBEZXRlY3QgY29pbmNpZGVudCBsaW5lcyAoaGFzIGEgcHJvYmxlbSwgcmVhZCBiZWxvdylcclxuICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudW1lcmF0b3IxID09PSAwICYmIG51bWVyYXRvcjIgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgciA9IG51bWVyYXRvcjEgLyBkZW5vbWluYXRvcjtcclxuICAgIGNvbnN0IHMgPSBudW1lcmF0b3IyIC8gZGVub21pbmF0b3I7XHJcblxyXG4gICAgcmV0dXJuIHIgPj0gMCAmJiByIDw9IDEgJiYgKHMgPj0gMCAmJiBzIDw9IDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjdFJlY3QyZENvbGxpc2lvbihcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXc6IG51bWJlcixcclxuICAgIGFoOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ3OiBudW1iZXIsXHJcbiAgICBiaDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBieCArIGJ3ID49IGF4ICYmIGJ5ICsgYmggPj0gYXkgJiYgYnggPD0gYXggKyBhdyAmJiBieSA8PSBheSArIGFoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ2lyY2xlMmRDb2xsaXNpb24oXHJcbiAgICBhWDogbnVtYmVyLFxyXG4gICAgYVk6IG51bWJlcixcclxuICAgIGFSYWRpdXM6IG51bWJlcixcclxuICAgIGJYOiBudW1iZXIsXHJcbiAgICBiWTogbnVtYmVyLFxyXG4gICAgYlJhZGl1czogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFBvaW50MmREaXN0YW5jZShhWCwgYVksIGJYLCBiWSkgPD0gYVJhZGl1cyArIGJSYWRpdXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFJlY3QyZENvbGxpc2lvbihcclxuICAgIHBvaW50WDogbnVtYmVyLFxyXG4gICAgcG9pbnRZOiBudW1iZXIsXHJcbiAgICByZWN0WDogbnVtYmVyLFxyXG4gICAgcmVjdFk6IG51bWJlcixcclxuICAgIHJlY3RXOiBudW1iZXIsXHJcbiAgICByZWN0SDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFggPj0gcmVjdFggJiZcclxuICAgICAgICBwb2ludFkgPj0gcmVjdFkgJiZcclxuICAgICAgICBwb2ludFggPD0gcmVjdFggKyByZWN0VyAmJlxyXG4gICAgICAgIHBvaW50WSA8PSByZWN0WSArIHJlY3RIO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRSZWN0TWluTWF4MmRDb2xsaXNpb24oXHJcbiAgICBwb2ludFg6IG51bWJlcixcclxuICAgIHBvaW50WTogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFggPj0gbWluWCAmJlxyXG4gICAgICAgIHBvaW50WSA+PSBtaW5ZICYmXHJcbiAgICAgICAgcG9pbnRYIDw9IG1heFggJiZcclxuICAgICAgICBwb2ludFkgPD0gbWF4WTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Q2lyY2xlMmRDb2xsaXNpb24oXHJcbiAgICBwb2ludFg6IG51bWJlcixcclxuICAgIHBvaW50WTogbnVtYmVyLFxyXG4gICAgY2lyY2xlWDogbnVtYmVyLFxyXG4gICAgY2lyY2xlWTogbnVtYmVyLFxyXG4gICAgY2lyY2xlUmFkaXVzOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBvaW50UG9pbnQyZERpc3RhbmNlKHBvaW50WCwgcG9pbnRZLCBjaXJjbGVYLCBjaXJjbGVZKSA8PSBjaXJjbGVSYWRpdXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiwgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoXCI7XHJcbmltcG9ydCB7IGdldENsb3Nlc3RQb2ludE9uTGluZSB9IGZyb20gXCIuL2Nsb3Nlc3QtM2RcIjtcclxuaW1wb3J0IHsgcG9pbnRQb2ludDJkRGlzdGFuY2UgfSBmcm9tIFwiLi9kaXN0YW5jZXMtMmRcIjtcclxuaW1wb3J0IHsgcG9pbnRMaW5lM2REaXN0YW5jZSwgcG9pbnRQb2ludDNkRGlzdGFuY2UgfSBmcm9tIFwiLi9kaXN0YW5jZXMtM2RcIjtcclxuaW1wb3J0IHsgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QgfSBmcm9tIFwiLi9pbnRlcnNlY3RzLTNkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BoZXJlU3BoZXJlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYVJhZGl1czogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYlJhZGl1czogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRpc3QgPSBwb2ludFBvaW50M2REaXN0YW5jZShheCwgYXksIGF6LCBieCwgYnksIGJ6KTtcclxuXHJcbiAgICByZXR1cm4gZGlzdCA8PSBhUmFkaXVzICsgYlJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50U3BoZXJlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYlJhZGl1czogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRpc3QgPSBwb2ludFBvaW50M2REaXN0YW5jZShheCwgYXksIGF6LCBieCwgYnksIGJ6KTtcclxuXHJcbiAgICByZXR1cm4gZGlzdCA8PSBiUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZVNwaGVyZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIHN4OiBudW1iZXIsXHJcbiAgICBzeTogbnVtYmVyLFxyXG4gICAgc3o6IG51bWJlcixcclxuICAgIHNyOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBvaW50TGluZTNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieiwgc3gsIHN5LCBzeikgPCBzcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW50ZXJzZWN0aW9uVHlwZSB7XHJcbiAgICBPVVRTSURFICAgICAgICAgID0gXCJPVVRTSURFXCIsXHJcbiAgICBJTlNJREUgICAgICAgICAgID0gXCJJTlNJREVcIixcclxuICAgIE9ORV9JTlRFUlNFQ1RJT04gPSBcIk9ORV9JTlRFUlNFQ1RJT05cIixcclxuICAgIFRXT19JTlRFUlNFQ1RJT04gPSBcIlRXT19JTlRFUlNFQ1RJT05cIixcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUJveDIoXHJcbiAgICBwMFg6IG51bWJlcixcclxuICAgIHAwWTogbnVtYmVyLFxyXG4gICAgcDBaOiBudW1iZXIsXHJcbiAgICBwMVg6IG51bWJlcixcclxuICAgIHAxWTogbnVtYmVyLFxyXG4gICAgcDFaOiBudW1iZXIsXHJcbiAgICBtaW5YOiBudW1iZXIsXHJcbiAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICBtaW5aOiBudW1iZXIsXHJcbiAgICBtYXhYOiBudW1iZXIsXHJcbiAgICBtYXhZOiBudW1iZXIsXHJcbiAgICBtYXhaOiBudW1iZXIsXHJcbiAgICByZXN1bHQ6IFNpbXBsZVZlY3RvcjIsXHJcbik6IEludGVyc2VjdGlvblR5cGUge1xyXG4gICAgY29uc3QgZGlyWCAgICA9IHAxWCAtIHAwWDtcclxuICAgIGNvbnN0IGRpclkgICAgPSBwMVkgLSBwMFk7XHJcbiAgICBjb25zdCBkaXJaICAgID0gcDFaIC0gcDBaO1xyXG4gICAgY29uc3QgaW52RGlyWCA9IDEgLyBkaXJYO1xyXG4gICAgY29uc3QgaW52RGlyWSA9IDEgLyBkaXJZO1xyXG4gICAgY29uc3QgaW52RGlyWiA9IDEgLyBkaXJaO1xyXG5cclxuICAgIGxldCB0TmVhcjtcclxuICAgIGxldCB0RmFyO1xyXG4gICAgbGV0IHR5bWluO1xyXG4gICAgbGV0IHR5bWF4O1xyXG4gICAgbGV0IHR6bWluO1xyXG4gICAgbGV0IHR6bWF4O1xyXG5cclxuICAgIGlmIChpbnZEaXJYID49IDApIHtcclxuICAgICAgICB0TmVhciA9IChtaW5YIC0gcDBYKSAqIGludkRpclg7XHJcbiAgICAgICAgdEZhciAgPSAobWF4WCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0TmVhciA9IChtYXhYIC0gcDBYKSAqIGludkRpclg7XHJcbiAgICAgICAgdEZhciAgPSAobWluWCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgfVxyXG4gICAgaWYgKGludkRpclkgPj0gMCkge1xyXG4gICAgICAgIHR5bWluID0gKG1pblkgLSBwMFkpICogaW52RGlyWTtcclxuICAgICAgICB0eW1heCA9IChtYXhZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR5bWluID0gKG1heFkgLSBwMFkpICogaW52RGlyWTtcclxuICAgICAgICB0eW1heCA9IChtaW5ZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICB9XHJcbiAgICBpZiAodE5lYXIgPiB0eW1heCB8fCB0eW1pbiA+IHRGYXIpIHtcclxuICAgICAgICByZXR1cm4gSW50ZXJzZWN0aW9uVHlwZS5PVVRTSURFO1xyXG4gICAgfVxyXG4gICAgaWYgKGludkRpclogPj0gMCkge1xyXG4gICAgICAgIHR6bWluID0gKG1pblogLSBwMFopICogaW52RGlyWjtcclxuICAgICAgICB0em1heCA9IChtYXhaIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR6bWluID0gKG1heFogLSBwMFopICogaW52RGlyWjtcclxuICAgICAgICB0em1heCA9IChtaW5aIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICB9XHJcbiAgICBpZiAodE5lYXIgPiB0em1heCB8fCB0em1pbiA+IHRGYXIpIHtcclxuICAgICAgICByZXR1cm4gSW50ZXJzZWN0aW9uVHlwZS5PVVRTSURFO1xyXG4gICAgfVxyXG4gICAgdE5lYXIgICAgPSB0eW1pbiA+IHROZWFyIHx8IGlzTmFOKHROZWFyKSA/IHR5bWluIDogdE5lYXI7XHJcbiAgICB0RmFyICAgICA9IHR5bWF4IDwgdEZhciB8fCBpc05hTih0RmFyKSA/IHR5bWF4IDogdEZhcjtcclxuICAgIHROZWFyICAgID0gdHptaW4gPiB0TmVhciA/IHR6bWluIDogdE5lYXI7XHJcbiAgICB0RmFyICAgICA9IHR6bWF4IDwgdEZhciA/IHR6bWF4IDogdEZhcjtcclxuICAgIGxldCB0eXBlID0gSW50ZXJzZWN0aW9uVHlwZS5PVVRTSURFO1xyXG4gICAgaWYgKHROZWFyIDwgdEZhciAmJiB0TmVhciA8PSAxICYmIHRGYXIgPj0gMCkge1xyXG4gICAgICAgIGlmICh0TmVhciA+IDAgJiYgdEZhciA+IDEpIHtcclxuICAgICAgICAgICAgdEZhciA9IHROZWFyO1xyXG4gICAgICAgICAgICB0eXBlID0gSW50ZXJzZWN0aW9uVHlwZS5PTkVfSU5URVJTRUNUSU9OO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodE5lYXIgPCAwICYmIHRGYXIgPCAxKSB7XHJcbiAgICAgICAgICAgIHROZWFyID0gdEZhcjtcclxuICAgICAgICAgICAgdHlwZSAgPSBJbnRlcnNlY3Rpb25UeXBlLk9ORV9JTlRFUlNFQ1RJT047XHJcbiAgICAgICAgfSBlbHNlIGlmICh0TmVhciA8IDAgJiYgdEZhciA+IDEpIHtcclxuICAgICAgICAgICAgdHlwZSA9IEludGVyc2VjdGlvblR5cGUuSU5TSURFO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBJbnRlcnNlY3Rpb25UeXBlLlRXT19JTlRFUlNFQ1RJT047XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC54ID0gdE5lYXI7XHJcbiAgICAgICAgcmVzdWx0LnkgPSB0RmFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0eXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRCb3goXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBhV2lkdGg6IG51bWJlcixcclxuICAgIGFIZWlnaHQ6IG51bWJlcixcclxuICAgIGFEZXB0aDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBheCA8IGJ4ICYmIGF4ICsgYVdpZHRoID4gYnggJiZcclxuICAgICAgICBheSA8IGJ5ICYmIGF5ICsgYUhlaWdodCA+IGJ5ICYmXHJcbiAgICAgICAgYXogPCBieiAmJiBheiArIGFEZXB0aCA+IGJ6O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRCb3hNaW5NYXgoXHJcbiAgICBiUG9zWDogbnVtYmVyLFxyXG4gICAgYlBvc1k6IG51bWJlcixcclxuICAgIGJQb3NaOiBudW1iZXIsXHJcbiAgICBtaW5YOiBudW1iZXIsXHJcbiAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICBtaW5aOiBudW1iZXIsXHJcbiAgICBtYXhYOiBudW1iZXIsXHJcbiAgICBtYXhZOiBudW1iZXIsXHJcbiAgICBtYXhaOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGJQb3NYID49IG1pblggJiYgYlBvc1kgPj0gbWluWSAmJiBiUG9zWiA+PSBtaW5aICYmXHJcbiAgICAgICAgYlBvc1ggPD0gbWF4WCAmJiBiUG9zWSA+PSBtaW5ZICYmIGJQb3NaIDw9IG1heFo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lQm94KFxyXG4gICAgYTF4OiBudW1iZXIsXHJcbiAgICBhMXk6IG51bWJlcixcclxuICAgIGExejogbnVtYmVyLFxyXG4gICAgYTJ4OiBudW1iZXIsXHJcbiAgICBhMnk6IG51bWJlcixcclxuICAgIGEyejogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgYlNpemVYOiBudW1iZXIsXHJcbiAgICBiU2l6ZVk6IG51bWJlcixcclxuICAgIGJTaXplWjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZChhMXgsIGExeSwgYTF6LFxyXG4gICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiAtIGJTaXplWixcclxuICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaIC0gYlNpemVaLFxyXG4gICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWikgfHxcclxuICAgICAgICB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZChhMXgsIGExeSwgYTF6LFxyXG4gICAgICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKSB8fFxyXG4gICAgICAgIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKGExeCwgYTF5LCBhMXosXHJcbiAgICAgICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSAtIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiAtIGJTaXplWikgfHxcclxuICAgICAgICB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZChhMXgsIGExeSwgYTF6LFxyXG4gICAgICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTcGhlcmUyKFxyXG4gICAgcDBYOiBudW1iZXIsXHJcbiAgICBwMFk6IG51bWJlcixcclxuICAgIHAwWjogbnVtYmVyLFxyXG4gICAgcDFYOiBudW1iZXIsXHJcbiAgICBwMVk6IG51bWJlcixcclxuICAgIHAxWjogbnVtYmVyLFxyXG4gICAgY2VudGVyWDogbnVtYmVyLFxyXG4gICAgY2VudGVyWTogbnVtYmVyLFxyXG4gICAgY2VudGVyWjogbnVtYmVyLFxyXG4gICAgcmFkaXVzU3F1YXJlZDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGxldCBkWCAgICA9IHAxWCAtIHAwWDtcclxuICAgIGxldCBkWSAgICA9IHAxWSAtIHAwWTtcclxuICAgIGxldCBkWiAgICA9IHAxWiAtIHAwWjtcclxuICAgIGNvbnN0IG5vbSA9IChjZW50ZXJYIC0gcDBYKSAqIGRYICsgKGNlbnRlclkgLSBwMFkpICogZFkgKyAoY2VudGVyWiAtIHAwWikgKiBkWjtcclxuICAgIGNvbnN0IGRlbiA9IGRYICogZFggKyBkWSAqIGRZICsgZFogKiBkWjtcclxuICAgIGNvbnN0IHUgICA9IG5vbSAvIGRlbjtcclxuICAgIGlmICh1IDwgMCkge1xyXG4gICAgICAgIGRYID0gcDBYIC0gY2VudGVyWDtcclxuICAgICAgICBkWSA9IHAwWSAtIGNlbnRlclk7XHJcbiAgICAgICAgZFogPSBwMFogLSBjZW50ZXJaO1xyXG4gICAgfSBlbHNlIGlmICh1ID4gMSkge1xyXG4gICAgICAgIGRYID0gcDFYIC0gY2VudGVyWDtcclxuICAgICAgICBkWSA9IHAxWSAtIGNlbnRlclk7XHJcbiAgICAgICAgZFogPSBwMVogLSBjZW50ZXJaO1xyXG4gICAgfSBlbHNlIHsgLy8gaGFzIHRvIGJlID49IDAgYW5kIDw9IDFcclxuICAgICAgICBjb25zdCBwWCA9IHAwWCArIHUgKiBkWDtcclxuICAgICAgICBjb25zdCBwWSA9IHAwWSArIHUgKiBkWTtcclxuICAgICAgICBjb25zdCBwWiA9IHAwWiArIHUgKiBkWjtcclxuICAgICAgICBkWCAgICAgICA9IHBYIC0gY2VudGVyWDtcclxuICAgICAgICBkWSAgICAgICA9IHBZIC0gY2VudGVyWTtcclxuICAgICAgICBkWiAgICAgICA9IHBaIC0gY2VudGVyWjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3QgPSBkWCAqIGRYICsgZFkgKiBkWSArIGRaICogZFo7XHJcblxyXG4gICAgcmV0dXJuIGRpc3QgPD0gcmFkaXVzU3F1YXJlZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJveEJveChcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGF3OiBudW1iZXIsXHJcbiAgICBhaDogbnVtYmVyLFxyXG4gICAgYWQ6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJ3OiBudW1iZXIsXHJcbiAgICBiaDogbnVtYmVyLFxyXG4gICAgYmQ6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYXggKyBhdyA+IGJ4ICYmIGJ4ICsgYncgPiBheCAmJlxyXG4gICAgICAgIGF5ICsgYWggPiBieSAmJiBieSArIGJoID4gYXkgJiZcclxuICAgICAgICBheiArIGFkID4gYnogJiYgYnogKyBiZCA+IGF6O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRFbGxpcHNvaWQoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBiUG9zWDogbnVtYmVyLFxyXG4gICAgYlBvc1k6IG51bWJlcixcclxuICAgIGJQb3NaOiBudW1iZXIsXHJcbiAgICBiU2l6ZVg6IG51bWJlcixcclxuICAgIGJTaXplWTogbnVtYmVyLFxyXG4gICAgYlNpemVaOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYXBvc05ld1ggPSBheCAtIGJQb3NYO1xyXG4gICAgY29uc3QgYXBvc05ld1kgPSBheSAtIGJQb3NZO1xyXG4gICAgY29uc3QgYXBvc05ld1ogPSBheiAtIGJQb3NaO1xyXG5cclxuICAgIGNvbnN0IHhhID0gKGFwb3NOZXdYICogYXBvc05ld1gpIC8gKGJTaXplWCAqIGJTaXplWCk7XHJcbiAgICBjb25zdCB5YiA9IChhcG9zTmV3WSAqIGFwb3NOZXdZKSAvIChiU2l6ZVkgKiBiU2l6ZVkpO1xyXG4gICAgY29uc3QgemMgPSAoYXBvc05ld1ogKiBhcG9zTmV3WikgLyAoYlNpemVaICogYlNpemVaKTtcclxuXHJcbiAgICByZXR1cm4geGEgKyB5YiArIHpjIDw9IDE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lRWxsaXBzb2lkKFxyXG4gICAgYVN0YXJ0WDogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WTogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WjogbnVtYmVyLFxyXG4gICAgYUVuZFg6IG51bWJlcixcclxuICAgIGFFbmRZOiBudW1iZXIsXHJcbiAgICBhRW5kWjogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgYlNpemVYOiBudW1iZXIsXHJcbiAgICBiU2l6ZVk6IG51bWJlcixcclxuICAgIGJTaXplWjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHBvaW50ID0gZ2V0Q2xvc2VzdFBvaW50T25MaW5lKFxyXG4gICAgICAgIGFTdGFydFgsXHJcbiAgICAgICAgYVN0YXJ0WSxcclxuICAgICAgICBhU3RhcnRaLFxyXG4gICAgICAgIGFFbmRYLFxyXG4gICAgICAgIGFFbmRZLFxyXG4gICAgICAgIGFFbmRaLFxyXG4gICAgICAgIGJQb3NYLFxyXG4gICAgICAgIGJQb3NZLFxyXG4gICAgICAgIGJQb3NaLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcG9pbnRFbGxpcHNvaWQocG9pbnQueCwgcG9pbnQueSwgcG9pbnQueiwgYlBvc1gsIGJQb3NZLCBiUG9zWiwgYlNpemVYLCBiU2l6ZVksIGJTaXplWik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludEN5bGluZGVyKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYlJhZGl1czogbnVtYmVyLFxyXG4gICAgYkhlaWdodDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbk9uZSA9IGF5ID4gYnkgJiYgYXkgPCBieSArIGJIZWlnaHQ7XHJcbiAgICBjb25zdCBjb25kaXRpb25Ud28gPSBwb2ludFBvaW50MmREaXN0YW5jZShheCwgYXosIGJ4LCBieikgPCBiUmFkaXVzO1xyXG5cclxuICAgIHJldHVybiBjb25kaXRpb25PbmUgJiYgY29uZGl0aW9uVHdvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BoZXJlQ3lsaW5kZXIoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBhUmFkaXVzOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBiUmFkaXVzOiBudW1iZXIsXHJcbiAgICBiSGVpZ2h0OiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY29uZGl0aW9uT25lID0gYXkgKyBhUmFkaXVzID4gYnkgJiYgYXkgLSBhUmFkaXVzIDwgYnkgKyBiSGVpZ2h0O1xyXG4gICAgY29uc3QgY29uZGl0aW9uVHdvID0gcG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF6LCBieCwgYnopIDwgYVJhZGl1cyArIGJSYWRpdXM7XHJcblxyXG4gICAgcmV0dXJuIGNvbmRpdGlvbk9uZSAmJiBjb25kaXRpb25Ud287XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0U3BoZXJlQm94TWluTWF4KFxyXG4gICAgY2VudGVyWDogbnVtYmVyLFxyXG4gICAgY2VudGVyWTogbnVtYmVyLFxyXG4gICAgY2VudGVyWjogbnVtYmVyLFxyXG4gICAgcmFkaXVzU3F1YXJlZDogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWluWjogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4gICAgbWF4WjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGxldCByYWRpdXMyID0gcmFkaXVzU3F1YXJlZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFggLSBtaW5cclxuICAgICAqIFkgLSBtYXhcclxuICAgICAqIFogLSBjZW50ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3QgZnVuYyAgID0gKHZhbDogVmVjdG9yMyk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgbGV0IGQgPSAwO1xyXG4gICAgICAgIGlmICh2YWwueiA8IHZhbC54KSB7XHJcbiAgICAgICAgICAgIGQgPSB2YWwueiAtIHZhbC54O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsLnogPiB2YWwueSkge1xyXG4gICAgICAgICAgICBkID0gdmFsLnogLSB2YWwueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkICogZDtcclxuICAgIH07XHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgcmFkaXVzMiAtPSBmdW5jKHBhcmFtcy5zZXREYXRhKG1pblgsIG1heFgsIGNlbnRlclgpKTtcclxuICAgIHJhZGl1czIgLT0gZnVuYyhwYXJhbXMuc2V0RGF0YShtaW5ZLCBtYXhZLCBjZW50ZXJZKSk7XHJcbiAgICByYWRpdXMyIC09IGZ1bmMocGFyYW1zLnNldERhdGEobWluWiwgbWF4WiwgY2VudGVyWikpO1xyXG5cclxuICAgIHJldHVybiByYWRpdXMyID49IDA7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBvaW50UG9pbnQyZERpc3RhbmNlKGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChwb2ludFBvaW50U3FyMmREaXN0YW5jZShheCwgYXksIGJ4LCBieSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaXN0WCA9IGF4IC0gYng7XHJcbiAgICBjb25zdCBkaXN0WSA9IGF5IC0gYnk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ2lyY2xlMmREaXN0YW5jZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXI6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYnI6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1heChwb2ludFBvaW50MmREaXN0YW5jZShheCwgYXksIGJ4LCBieSkgLSBiciAtIGFyLCAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZVNxcjJkRGlzdGFuY2UoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGFyOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIgLSBhcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludENpcmNsZTJkRGlzdGFuY2UoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYnI6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1heChwb2ludFBvaW50MmREaXN0YW5jZShheCwgYXksIGJ4LCBieSkgLSBiciwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludENpcmNsZVNxcjJkRGlzdGFuY2UoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYnI6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1heChwb2ludFBvaW50U3FyMmREaXN0YW5jZShheCwgYXksIGJ4LCBieSkgLSBiciwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludExpbmUyZERpc3RhbmNlKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIHBYOiBudW1iZXIsXHJcbiAgICBwWTogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChwb2ludExpbmVTcXIyZERpc3RhbmNlKGFYLCBhWSwgYlgsIGJZLCBwWCwgcFkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50TGluZVNxcjJkRGlzdGFuY2UoXHJcbiAgICBhWDogbnVtYmVyLFxyXG4gICAgYVk6IG51bWJlcixcclxuICAgIGJYOiBudW1iZXIsXHJcbiAgICBiWTogbnVtYmVyLFxyXG4gICAgcFg6IG51bWJlcixcclxuICAgIHBZOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBBID0gcFggLSBhWDtcclxuICAgIGNvbnN0IEIgPSBwWSAtIGFZO1xyXG4gICAgY29uc3QgQyA9IGJYIC0gYVg7XHJcbiAgICBjb25zdCBEID0gYlkgLSBhWTtcclxuXHJcbiAgICBjb25zdCBkb3QgICAgICAgICAgPSBBICogQyArIEIgKiBEO1xyXG4gICAgY29uc3QgbGVuZ3RoU3F1YXJlID0gQyAqIEMgKyBEICogRDtcclxuICAgIGxldCBwYXJhbSAgICAgICAgICA9IC0xO1xyXG4gICAgaWYgKGxlbmd0aFNxdWFyZSAhPT0gMCkge1xyXG4gICAgICAgIHBhcmFtID0gZG90IC8gbGVuZ3RoU3F1YXJlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB4eDogbnVtYmVyO1xyXG4gICAgbGV0IHl5OiBudW1iZXI7XHJcblxyXG4gICAgaWYgKHBhcmFtIDwgMCkge1xyXG4gICAgICAgIHh4ID0gYVg7XHJcbiAgICAgICAgeXkgPSBhWTtcclxuICAgIH0gZWxzZSBpZiAocGFyYW0gPiAxKSB7XHJcbiAgICAgICAgeHggPSBiWDtcclxuICAgICAgICB5eSA9IGJZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB4eCA9IGFYICsgcGFyYW0gKiBDO1xyXG4gICAgICAgIHl5ID0gYVkgKyBwYXJhbSAqIEQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHggPSBwWCAtIHh4O1xyXG4gICAgY29uc3QgZHkgPSBwWSAtIHl5O1xyXG5cclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UG9pbnQzZERpc3RhbmNlKGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGF6OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIsIGJ6OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChwb2ludFBvaW50U3FyM2REaXN0YW5jZShheCwgYXksIGF6LCBieCwgYnksIGJ6KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50U3FyM2REaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBhejogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyLCBiejogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGRpc3RYID0gYXggLSBieDtcclxuICAgIGNvbnN0IGRpc3RZID0gYXkgLSBieTtcclxuICAgIGNvbnN0IGRpc3RaID0gYXogLSBiejtcclxuXHJcbiAgICByZXR1cm4gZGlzdFggKiBkaXN0WCArIGRpc3RZICogZGlzdFkgKyBkaXN0WiAqIGRpc3RaO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lM2REaXN0YW5jZShcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFTdGFydFo6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYUVuZFo6IG51bWJlcixcclxuICAgIGJDZW50ZXJYOiBudW1iZXIsXHJcbiAgICBiQ2VudGVyWTogbnVtYmVyLFxyXG4gICAgYkNlbnRlclo6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGFTdWJCeCA9IGFTdGFydFggLSBhRW5kWDtcclxuICAgIGNvbnN0IGFTdWJCeSA9IGFTdGFydFkgLSBhRW5kWTtcclxuICAgIGNvbnN0IGFTdWJCeiA9IGFTdGFydFogLSBhRW5kWjtcclxuICAgIGNvbnN0IHBTdWJCeCA9IGJDZW50ZXJYIC0gYUVuZFg7XHJcbiAgICBjb25zdCBwU3ViQnkgPSBiQ2VudGVyWSAtIGFFbmRZO1xyXG4gICAgY29uc3QgcFN1YkJ6ID0gYkNlbnRlclogLSBhRW5kWjtcclxuICAgIGNvbnN0IGRvdEEgICA9IGFTdWJCeCAqIHBTdWJCeCArIGFTdWJCeSAqIHBTdWJCeSArIGFTdWJCeiAqIHBTdWJCejtcclxuICAgIGlmIChkb3RBIDwgMCkge1xyXG4gICAgICAgIHJldHVybiBwb2ludFBvaW50M2REaXN0YW5jZShiQ2VudGVyWCwgYkNlbnRlclksIGJDZW50ZXJaLCBhRW5kWCwgYUVuZFksIGFFbmRaKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiU3ViQXggPSBhRW5kWCAtIGFTdGFydFg7XHJcbiAgICBjb25zdCBiU3ViQXkgPSBhRW5kWSAtIGFTdGFydFk7XHJcbiAgICBjb25zdCBiU3ViQXogPSBhRW5kWiAtIGFTdGFydFo7XHJcbiAgICBjb25zdCBwU3ViQXggPSBiQ2VudGVyWCAtIGFTdGFydFg7XHJcbiAgICBjb25zdCBwU3ViQXkgPSBiQ2VudGVyWSAtIGFTdGFydFk7XHJcbiAgICBjb25zdCBwU3ViQXogPSBiQ2VudGVyWiAtIGFTdGFydFo7XHJcbiAgICBjb25zdCBkb3RCICAgPSBiU3ViQXggKiBwU3ViQXggKyBiU3ViQXkgKiBwU3ViQXkgKyBiU3ViQXogKiBwU3ViQXo7XHJcbiAgICBpZiAoZG90QiA8IDApIHtcclxuICAgICAgICByZXR1cm4gcG9pbnRQb2ludDNkRGlzdGFuY2UoYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWiwgYVN0YXJ0WCwgYVN0YXJ0WSwgYVN0YXJ0Wik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZlY3RvclBvaW50M2REaXN0YW5jZShhU3RhcnRYLCBhU3RhcnRZLCBhU3RhcnRaLCBhRW5kWCwgYUVuZFksIGFFbmRaLCBiQ2VudGVyWCwgYkNlbnRlclksIGJDZW50ZXJaKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Tm9ybWFsUGxhbmUzZERpc3RhbmNlKGFOb3JtYWw6IFZlY3RvcjMsIGFQb2ludDogVmVjdG9yMywgYlBvaW50OiBWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGQgPSAtVmVjdG9yMy5tdWwoYU5vcm1hbCwgYVBvaW50KS5zdW0oKTtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5hYnMoKFZlY3RvcjMubXVsKGFOb3JtYWwsIGJQb2ludCkuc3VtKCkgKyBkKSAvIE1hdGguc3FydChWZWN0b3IzLm11bChhTm9ybWFsLCBhTm9ybWFsKS5zdW0oKSkpO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gcG9pbnRQbGFuZShWZWN0b3IzIGExLCBWZWN0b3IzIGEyLCBWZWN0b3IzIGEzLCBWZWN0b3IzIGJQb2ludCkge1xyXG4vLyAgICAgcmV0dXJuIHBvaW50UGxhbmUoYTMuc3ViKGEyKS5jcm9zcyhhMS5zdWIoYTIpKSwgYTEsIGJQb2ludCk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWN0b3JQb2ludDNkRGlzdGFuY2UoXHJcbiAgICBzdGFydFg6IG51bWJlcixcclxuICAgIHN0YXJ0WTogbnVtYmVyLFxyXG4gICAgc3RhcnRaOiBudW1iZXIsXHJcbiAgICBlbmRYOiBudW1iZXIsXHJcbiAgICBlbmRZOiBudW1iZXIsXHJcbiAgICBlbmRaOiBudW1iZXIsXHJcbiAgICBwb2ludFg6IG51bWJlcixcclxuICAgIHBvaW50WTogbnVtYmVyLFxyXG4gICAgcG9pbnRaOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzdGFydFN1YkVuZFggPSBzdGFydFggLSBlbmRYO1xyXG4gICAgY29uc3Qgc3RhcnRTdWJFbmRZID0gc3RhcnRZIC0gZW5kWTtcclxuICAgIGNvbnN0IHN0YXJ0U3ViRW5kWiA9IHN0YXJ0WiAtIGVuZFo7XHJcblxyXG4gICAgY29uc3QgZW5kU3ViUG9pbnRYID0gZW5kWCAtIHBvaW50WDtcclxuICAgIGNvbnN0IGVuZFN1YlBvaW50WSA9IGVuZFkgLSBwb2ludFk7XHJcbiAgICBjb25zdCBlbmRTdWJQb2ludFogPSBlbmRaIC0gcG9pbnRaO1xyXG5cclxuICAgIGNvbnN0IGNyb3NzWCA9IHN0YXJ0U3ViRW5kWSAqIGVuZFN1YlBvaW50WiAtIHN0YXJ0U3ViRW5kWiAqIGVuZFN1YlBvaW50WTtcclxuICAgIGNvbnN0IGNyb3NzWSA9IHN0YXJ0U3ViRW5kWiAqIGVuZFN1YlBvaW50WCAtIHN0YXJ0U3ViRW5kWCAqIGVuZFN1YlBvaW50WjtcclxuICAgIGNvbnN0IGNyb3NzWiA9IHN0YXJ0U3ViRW5kWCAqIGVuZFN1YlBvaW50WSAtIHN0YXJ0U3ViRW5kWSAqIGVuZFN1YlBvaW50WDtcclxuXHJcbiAgICBjb25zdCBsZW5ndGgxID0gTWF0aC5zcXJ0KGNyb3NzWCAqIGNyb3NzWCArIGNyb3NzWSAqIGNyb3NzWSArIGNyb3NzWiAqIGNyb3NzWik7XHJcbiAgICBjb25zdCBsZW5ndGgyID0gTWF0aC5zcXJ0KHN0YXJ0U3ViRW5kWCAqIHN0YXJ0U3ViRW5kWCArIHN0YXJ0U3ViRW5kWSAqIHN0YXJ0U3ViRW5kWSArIHN0YXJ0U3ViRW5kWiAqIHN0YXJ0U3ViRW5kWik7XHJcblxyXG4gICAgcmV0dXJuIGxlbmd0aDEgLyBsZW5ndGgyO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2Nsb3Nlc3QtMmRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY2xvc2VzdC0zZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsaXNpb25zLTJkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbGxpc2lvbnMtM2RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZGlzdGFuY2VzLTJkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Rpc3RhbmNlcy0zZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ib3VuZGVycy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ludGVyc2VjdHMtM2RcIjtcclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMywgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoXHJcbiAgICByMXg6IG51bWJlcixcclxuICAgIHIxeTogbnVtYmVyLFxyXG4gICAgcjF6OiBudW1iZXIsXHJcbiAgICByMng6IG51bWJlcixcclxuICAgIHIyeTogbnVtYmVyLFxyXG4gICAgcjJ6OiBudW1iZXIsXHJcbiAgICBzMXg6IG51bWJlcixcclxuICAgIHMxeTogbnVtYmVyLFxyXG4gICAgczF6OiBudW1iZXIsXHJcbiAgICBzMng6IG51bWJlcixcclxuICAgIHMyeTogbnVtYmVyLFxyXG4gICAgczJ6OiBudW1iZXIsXHJcbiAgICBzM3g6IG51bWJlcixcclxuICAgIHMzeTogbnVtYmVyLFxyXG4gICAgczN6OiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZlY3RvclNxdWFyZUludGVyc2VjdDNkXzIoXHJcbiAgICAgICAgbmV3IFZlY3RvcjMocjF4LCByMXksIHIxeiksXHJcbiAgICAgICAgbmV3IFZlY3RvcjMocjJ4LCByMnksIHIyeiksXHJcbiAgICAgICAgbmV3IFZlY3RvcjMoczF4LCBzMXksIHMxeiksXHJcbiAgICAgICAgbmV3IFZlY3RvcjMoczJ4LCBzMnksIHMyeiksXHJcbiAgICAgICAgbmV3IFZlY3RvcjMoczN4LCBzM3ksIHMzeiksXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2RfMihcclxuICAgIFIxOiBTaW1wbGVWZWN0b3IzLFxyXG4gICAgUjI6IFNpbXBsZVZlY3RvcjMsXHJcbiAgICBTMTogU2ltcGxlVmVjdG9yMyxcclxuICAgIFMyOiBTaW1wbGVWZWN0b3IzLFxyXG4gICAgUzM6IFNpbXBsZVZlY3RvcjMsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZFMyMSA9IFZlY3RvcjMuc3ViKFMyLCBTMSk7XHJcbiAgICBjb25zdCBkUzMxID0gVmVjdG9yMy5zdWIoUzMsIFMxKTtcclxuICAgIGNvbnN0IGRSICAgPSBWZWN0b3IzLnN1YihSMSwgUjIpO1xyXG4gICAgY29uc3QgbiAgICA9IGRTMjEuY3Jvc3MoZFMzMSk7XHJcblxyXG4gICAgY29uc3QgbmRvdGRSID0gbi5kb3QoZFIpO1xyXG5cclxuICAgIGlmIChNYXRoLmFicyhuZG90ZFIpIDwgMWUtNikgeyAvLyBDaG9vc2UgeW91ciB0b2xlcmFuY2VcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdCA9IC1uLmRvdChWZWN0b3IzLnN1YihSMSwgUzEpKSAvIG5kb3RkUjtcclxuICAgIGNvbnN0IE0gPSBWZWN0b3IzLmFkZChSMSwgZFIubXVsKHQpKTtcclxuXHJcbiAgICBjb25zdCBkTVMxID0gTS5zdWIoUzEpO1xyXG4gICAgY29uc3QgdSAgICA9IGRNUzEuZG90KGRTMjEpO1xyXG4gICAgY29uc3QgdiAgICA9IGRNUzEuZG90KGRTMzEpO1xyXG5cclxuICAgIHJldHVybiAodSA+PSAwICYmIHUgPD0gZFMyMS5kb3QoZFMyMSkgJiYgdiA+PSAwICYmIHYgPD0gZFMzMS5kb3QoZFMzMSkpO1xyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuaW1wb3J0IHsgTWluTWF4IH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UG9zU2l6ZVRvTWluTWF4IH0gZnJvbSBcIi4uL29iamVjdC1jb252ZXJ0b3JzXCI7XHJcbmltcG9ydCB7IFNwaGVyZSB9IGZyb20gXCIuL3NwaGVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3Qge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBwb3NpdGlvbjogU2ltcGxlVmVjdG9yMixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgc2l6ZTogU2ltcGxlVmVjdG9yMixcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXJlYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2lyY3VpdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUueCArIHRoaXMuc2l6ZS54ICsgdGhpcy5zaXplLnkgKyB0aGlzLnNpemUueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9NaW5NYXgoKTogTWluTWF4IHtcclxuICAgICAgICByZXR1cm4gY29udmVydFBvc1NpemVUb01pbk1heCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21TcGhlcmUoe3JhZGl1cywgY2VudGVyfTogUGljazxTcGhlcmUsIFwicmFkaXVzXCIgfCBcImNlbnRlclwiPik6IFJlY3Qge1xyXG4gICAgICAgIHJldHVybiBSZWN0LmZyb21NaW5NYXgoe1xyXG4gICAgICAgICAgICBtaW46IHtcclxuICAgICAgICAgICAgICAgIHg6IGNlbnRlci54IC0gcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgeTogY2VudGVyLnkgLSByYWRpdXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1heDoge1xyXG4gICAgICAgICAgICAgICAgeDogY2VudGVyLnggKyByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICB5OiBjZW50ZXIueSArIHJhZGl1cyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21NaW5NYXgoe21pbiwgbWF4fTogTWluTWF4KTogUmVjdCB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgICAgICAgeDogbWF4LnggLSBtaW4ueCxcclxuICAgICAgICAgICAgeTogbWF4LnkgLSBtaW4ueSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgbWluKSwgc2l6ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5pbXBvcnQgeyBNaW5NYXgsIFBvc1NpemUgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRQb3NTaXplVG9NaW5NYXggfSBmcm9tIFwiLi4vb2JqZWN0LWNvbnZlcnRvcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGhlcmUge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSByYWRpdXM6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY2VudGVyOiBTaW1wbGVWZWN0b3IyLFxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjaXJjdWl0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJICogdGhpcy5yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhcmVhKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguUEkgKiB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbU1pbk1heCh7bWluLCBtYXh9OiBNaW5NYXgsIGNob29zZVNpemU6IFwibWluXCIgfCBcIm1heFwiID0gXCJtYXhcIik6IFNwaGVyZSB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiAobWluLnggKyBtYXgueCkgLyAyLFxyXG4gICAgICAgICAgICB5OiAobWluLnkgKyBtYXgueSkgLyAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVYID0gbWF4LnggLSBtaW4ueDtcclxuICAgICAgICBjb25zdCBzaXplWSA9IG1heC55IC0gbWluLnk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGNob29zZVNpemUgPT09IFwibWluXCIgPyBNYXRoLm1pbihzaXplWCwgc2l6ZVkpIDogTWF0aC5tYXgoc2l6ZVgsIHNpemVZKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTcGhlcmUocmFkaXVzLCBjZW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbVBvc1NpemUocG9zU2l6ZTogUG9zU2l6ZSwgY2hvb3NlU2l6ZTogXCJtaW5cIiB8IFwibWF4XCIgPSBcIm1heFwiKTogU3BoZXJlIHtcclxuICAgICAgICByZXR1cm4gU3BoZXJlLmZyb21NaW5NYXgoY29udmVydFBvc1NpemVUb01pbk1heChwb3NTaXplKSwgY2hvb3NlU2l6ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vMmQvcmVjdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi8yZC9zcGhlcmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0LWNvbnZlcnRvcnNcIjtcclxuIiwiaW1wb3J0IHsgTWluTWF4LCBQb3NTaXplIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRNaW5NYXhUb1Bvc1NpemUoe21pbiwgbWF4fTogTWluTWF4KTogUG9zU2l6ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IG1pbi54LFxyXG4gICAgICAgICAgICB5OiBtaW4ueSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgeDogbWF4LnggLSBtaW4ueCxcclxuICAgICAgICAgICAgeTogbWF4LnkgLSBtaW4ueSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFBvc1NpemVUb01pbk1heCh7cG9zaXRpb24sIHNpemV9OiBQb3NTaXplKTogTWluTWF4IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXg6IHtcclxuICAgICAgICAgICAgeDogcG9zaXRpb24ueCArIHNpemUueCxcclxuICAgICAgICAgICAgeTogcG9zaXRpb24ueSArIHNpemUueSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBYnN0cmFjdEZpeHR1cmUgfSBmcm9tIFwiLi9hYnN0cmFjdC5maXh0dXJlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0TWFwcGVyIH0gZnJvbSBcIi4vYWJzdHJhY3QubWFwcGVyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3REYXRhYmFzZUZpeHR1cmU8T2JqLCBPYmpEdG8+IGV4dGVuZHMgQWJzdHJhY3RGaXh0dXJlPE9iaj4ge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxpc3REdG86IE9iakR0b1tdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGRldGFpbER0bzogT2JqRHRvO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihsaXN0OiBPYmpbXSwgbWFwcGVyOiBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4pIHtcclxuICAgICAgICBzdXBlcihsaXN0KTtcclxuICAgICAgICB0aGlzLmxpc3REdG8gICA9IGxpc3QubWFwKG1hcHBlci5tYXBUb0R0bywgbWFwcGVyKTtcclxuICAgICAgICB0aGlzLmRldGFpbER0byA9IHRoaXMubGlzdER0b1swXTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGaXh0dXJlPE9iaj4ge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGRldGFpbDogT2JqO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbGlzdDogT2JqW10pIHtcclxuICAgICAgICB0aGlzLmRldGFpbCA9IGxpc3RbMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWFwcGVyPE9iaiwgT2JqRHRvPiB7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgbWFwVG9EdG8ob2JqZWN0OiBQYXJ0aWFsPE9iaj4pOiBPYmpEdG87XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcEZyb21EdG8ob2JqZWN0OiBQYXJ0aWFsPE9iakR0bz4pOiBPYmo7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBhZ2luYXRlTW9kZWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBJVEVNU19QRVJfUEFHRSA9IDEwO1xyXG4gICAgcHVibGljIGxpbWl0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvdW50ID0gUGFnaW5hdGVNb2RlbC5JVEVNU19QRVJfUEFHRSwgb2Zmc2V0ID0gMCkge1xyXG4gICAgICAgIHRoaXMubGltaXQgID0gK2NvdW50O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gK29mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHZhbGlkYXRlKHBhZ2luYXRlPzogUGFnaW5hdGVNb2RlbCk6IFBhZ2luYXRlTW9kZWwge1xyXG4gICAgICAgIGlmICghcGFnaW5hdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFBhZ2luYXRlTW9kZWwoXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLmxpbWl0KSA/IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UgOiBwYWdpbmF0ZS5saW1pdCxcclxuICAgICAgICAgICAgaXNOYU4ocGFnaW5hdGUub2Zmc2V0KSA/IDAgOiBwYWdpbmF0ZS5vZmZzZXQsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzL21pbi1tYXguaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnMveHl3aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzL3h5endoZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzL3Bvcy1zaXplXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9ob3Jpem9udGFsLWFsaWduLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4va2V5LXZhbHVlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXN0ZWQtc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0LWVudHJ5LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vcHRpb25hbC50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb3AudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wZXJ0eS1kZWNvcmF0b3IudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXkyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JheTNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm91bmQtZGF0YS50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpemUuaW50ZXJhZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0LW9wdGlvbnMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGUuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaXQtbnVtYmVyLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVydGljYWwtYWxpZ24udHlwZVwiO1xyXG4iLCIvKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBJbnRlcm5ldCBleHBsb3JlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSUUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBJbnRlcm5ldCBleHBsb3JlciA2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJRTYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA2XCIpID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIEludGVybmV0IGV4cGxvcmVyIDExXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJRTExKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgRWRnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWRnZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgU2FmYXJ5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpID49IDAgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWUvXCIpIDwgMCAmJlxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2UvXCIpIDwgMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgSU9TXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJT1MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkvZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIENocm9tZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lQXBwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KT8uY2hyb21lPy5hcHA/LnJ1bnRpbWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgb25NZXNzYWdlIFdpbmRvd3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1dpbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiV2luXCIpID4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBvbk1lc3NhZ2UgTWFjIE9TXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNYWMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1hY1wiKSA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgQ2hyb21lIE9TXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWVPcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAvXFxiQ3JPU1xcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBkZXZpY2Ugc3VwcG9ydCB0b3VjaCBldmVudHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RvdWNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGRldmljZSBzdXBwb3J0IG1vdXNlIGV2ZW50c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc01vdXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFwib25tb3VzZW1vdmVcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zdCBhcnJheSA9IFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCB7bmFtZTogXCJKb2FjaGltXCIsIGFnZTogMTV9LCB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICogIGNvbnN0IGNvbmRpdGlvbnMgPSB7YWdlOiAyMywgbmFtZTogXCJNb25pY2FcIn1cclxuICogIHdoZXJlKGFycmF5LCBjb25kaXRpb25zKTsgLy8gW3tuYW1lOiBcIk1pY2hhZWxcIiwgYWdlOiAyM30sICB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGVyZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KGFycmF5OiBUW10sIGNvbmRpdGlvbjogUGFydGlhbDxUPik6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZGl0aW9uIHx8IHR5cGVvZiBjb25kaXRpb24gIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBUW10gICAgICA9IFtdO1xyXG4gICAgY29uc3QgY29uZGl0aW9uRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGNvbmRpdGlvbik7XHJcblxyXG4gICAgYXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZCA9IGNvbmRpdGlvbkVudHJpZXMuc29tZSgoY29uZGl0aW9uRW50cnkpID0+IGVbY29uZGl0aW9uRW50cnlbMF0gYXMga2V5b2YgVF0gPT09IGNvbmRpdGlvbkVudHJ5WzFdKTtcclxuICAgICAgICBpZiAoYWRkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb21wYXJlQXJyYXlzKFtcImFcIiwgXCJiXCIsIFwiY1wiXSwgW1wiYVwiLCBcImJcIiwgXCJjXCJdKSA9PiB0cnVlXHJcbiAqICBjb21wYXJlQXJyYXlzKFt7djogXCJhXCJ9LCB7djogXCJiXCJ9LCB7djogXCJjXCJ9XSwgW3t2OiBcImFcIn0sIHt2OiBcImJcIn0sIHt2OiBcImNcIn1dKSA9PiBmYWxzZVxyXG4gKiAgY29tcGFyZUFycmF5cyhbe3Y6IFwiYVwifSwge3Y6IFwiYlwifSwge3Y6IFwiY1wifV0sIFt7djogXCJhXCJ9LCB7djogXCJiXCJ9LCB7djogXCJjXCJ9XSwgKGEsIGIpID0+IGEudiA9PT0gYi52KSA9PiB0cnVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5czxUPihcclxuICAgIHByZXY6IFRbXSxcclxuICAgIGFjdDogVFtdLFxyXG4gICAgY29tcGFyYXRvcjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4gPSAoYSwgYikgPT4gYSA9PT0gYixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAocHJldi5sZW5ndGggIT09IGFjdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFjb21wYXJhdG9yKHByZXZbaV0sIGFjdFtpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBhbmFseXplQXJyYXlDaGFuZ2VzKFtcImFcIiwgXCJiXCIsIFwiY1wiXSwgW1wiYVwiLCBcImJcIiwgXCJjXCJdKSA9PT4ge3RvQWRkOiBbXSwgdG9SZW1vdmU6IFtdfVxyXG4gKiAgYW5hbHl6ZUFycmF5Q2hhbmdlcyhbXCJhXCIsIFwiYlwiLCBcImNcIl0sIFtcImJcIiwgXCJjXCIsIFwiZFwiXSkgPT0+IHt0b0FkZDogW1wiZFwiXSwgdG9SZW1vdmU6IFtcImFcIl19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZUFycmF5Q2hhbmdlczxUPihcclxuICAgIHByZXY6IFRbXSxcclxuICAgIGFjdDogVFtdLFxyXG4gICAgY29tcGFyYXRvcjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4gPSAoYSwgYikgPT4gYSA9PT0gYixcclxuKTogeyB0b0FkZDogVFtdLCB0b1JlbW92ZTogVFtdIH0ge1xyXG4gICAgY29uc3QgZXhpc3RpbmdQcmV2SW5kaWNlczogeyBba2V5OiBudW1iZXJdOiB0cnVlIH0gPSB7fTtcclxuXHJcbiAgICBjb25zdCB0b1JlbW92ZTogVFtdID0gW107XHJcbiAgICBjb25zdCB0b0FkZDogVFtdICAgID0gW107XHJcbiAgICBhY3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByZXZJbmRleCA9IHByZXYuZmluZEluZGV4KChpdGVtKSA9PiBjb21wYXJhdG9yKGUsIGl0ZW0pKTtcclxuXHJcbiAgICAgICAgaWYgKHByZXZJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdG9BZGQucHVzaChlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleGlzdGluZ1ByZXZJbmRpY2VzW3ByZXZJbmRleF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByZXYuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpIGluIGV4aXN0aW5nUHJldkluZGljZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1JlbW92ZS5wdXNoKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHt0b0FkZCwgdG9SZW1vdmV9O1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJuIHN1YiBhcnJheSBmcm9tIGFycmF5XHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnNsaWNlfSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBhcnJheSAtIGlucHV0IGFycmF5XHJcbiAqIEBwYXJhbSBtaW5JbmRleCAtIHN0YXJ0IGluZGV4XHJcbiAqIEBwYXJhbSBtYXhJbmRleCAtIGVuZCBpbmRleFxyXG4gKiBAcmV0dXJucyBmaW5hbCBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YkFycmF5PFQgPSBhbnk+KGFycmF5OiBUW10sIG1pbkluZGV4ID0gMCwgbWF4SW5kZXggPSBhcnJheS5sZW5ndGggLSAxKTogVFtdIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdO1xyXG4gICAgY29uc3QgZmluYWwgICAgICAgPSBhcnJheS5sZW5ndGggPCBtYXhJbmRleCA/IGFycmF5Lmxlbmd0aCAtIDEgOiBtYXhJbmRleDtcclxuICAgIGZvciAobGV0IGkgPSBtaW5JbmRleDsgaSA8PSBmaW5hbDsgaSsrKSB7XHJcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gYXJyYXlbaV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybiBtYXhpbWFsIHZhbHVlIGZyb20gbnVtZXJpYyBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIG1heGltYWwgbnVtYmVyIGZyb20gYXJyYXlcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNYXRoLm1heH0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1heChhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhID4gYiA/IGEgOiBiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybiBtaW5pbWFsIHZhbHVlIGZyb20gbnVtZXJpYyBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIG1pbmltYWwgbnVtYmVyIGZyb20gYXJyYXlcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNYXRoLm1pbn0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbihhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhIDwgYiA/IGEgOiBiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybiB0b3RhbCB2YWx1ZSBvZiBhbGwgZWxlbWVudHMgaW4gbnVtZXJpYyBhcnJheVxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgc3VtKFsxLCAyLCAzLCA0LCA1XSkgPT4gMTVcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBzdW1tYXJ5IG9mIGFsbCBudW1iZXJzIGluIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VtKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybnMgYXZlcmFnZSBvZiBudW1lcmljIGFycmF5IGdpdmVuIGFzIGlucHV0XHJcbiAqIEBleGFtcGxlXHJcbiAqICBhdmcoWzEsIDIsIDMsIDQsIDVdKSA9PiAzXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgYXZlcmFnZSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGF2ZyhhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBhcnJheS5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiBqb2luIGFycmF5IGJ5IGRlbGltaXRlciBhbmQgYXBwZW5kIHByZWZpeCBhbmQgcG9zdGZpeFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgam9pbihbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCJdLCBcIlwiKSA9PiBhYmNkXHJcbiAqICBqb2luKFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIl0sIFwiPVwiKSA9PiBhPWI9Yz1kXHJcbiAqICBqb2luKFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIl0sIFwiPVwiLCBcIj4+XCIsIFwiPDxcIikgPT4gPj5hPWI9Yz1kPDxcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBjaGFyYWN0ZXIgdXNlZCBmb3Igam9pbiBlbGVtZW50cyBpbiBhcnJheVxyXG4gKiBAcGFyYW0gcHJlZml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGZpbmFsIHN0cmluZ1xyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGVuZCBvZiBmaW5hbCBzdHJpbmdcclxuICogQHJldHVybnMgZmluYWwgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pbjxUPihhcnJheTogVFtdLCBkZWxpbWl0ZXI6IHN0cmluZywgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBhcnJheSArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGFycmF5LmpvaW4oZGVsaW1pdGVyKSArIHBvc3RmaXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJucyBsYXN0IGVsZW1lbnQgZnJvbSBhcnJheSBvciBudWxsIGlmIGFycmF5IGlzIGVtcHR5LiBJZiBhcmd1bWVudCBpcyBub3QgYXJyYXksIG1ldGhvZCByZXR1cm5zIGFyZ3VtZW50XHJcbiAqIEBleGFtcGxlXHJcbiAqICBnZXRMYXN0KFtdKSA9PiB1bmRlZmluZWRcclxuICogIGdldExhc3QoW1wiYVwiLCBcImJcIl0pID0+IGJcclxuICogIGdldExhc3QoWzUsIDZdKSA9PiA2XHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcmV0dXJucyBsYXN0IHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0PFQ+KGFycmF5OiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybnMgcmFuZG9tIGVsZW1lbnQgZnJvbSBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHJldHVybnMgcmFuZG9tIHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JdGVtPFQgPSB1bmtub3duPihhcnJheTogVFtdKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROUmFuZG9tPFQ+KGFyZ3M6IFRbXSwgY291bnQ6IG51bWJlcik6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA8PSBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8VD4oKTtcclxuXHJcbiAgICB3aGlsZSAocmVzdWx0LnNpemUgPD0gY291bnQpIHtcclxuICAgICAgICBjb25zdCByYW5kb21JdGVtID0gZ2V0UmFuZG9tSXRlbTxUPihhcmdzKTtcclxuICAgICAgICBpZiAocmFuZG9tSXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkKHJhbmRvbUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbTxUPihyZXN1bHQpO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybiBjb3B5IG9mIGFycmF5IHdpdGggb25seSBkaXN0aW5jdCBlbGVtZW50c1xyXG4gKiBAZXhhbXBsZVxyXG4gKiAgbWFrZVVuaXF1ZShbNSwgNSwgMywgMiwgMSwgNCwgNSwgNF0pID09PiBbNSwgMywgMiwgMSwgNF1cclxuICogIG1ha2VVbmlxdWUoW1wiNVwiLCBcIjVcIiwgXCIzXCIsIFwiMlwiLCBcIjFcIiwgXCI0XCIsIFwiNVwiLCBcIjRcIl0pID09PiBbXCI1XCIsIFwiM1wiLCBcIjJcIiwgXCIxXCIsIFwiNFwiXVxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSB3aXRoIGR1cGxpY2F0ZSBlbGVtZW50c1xyXG4gKiBAcmV0dXJucyB1bmlxdWUgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVW5pcXVlPFQ+KGFycmF5OiBUW10pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0PFQ+KGFycmF5KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lIDIgYXJyYXkgZWFjaCBvdGhlclxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hPdGhlcjxUPihhcnI6IFRbXSwgY2FsbGJhY2s6IChhOiBULCBiOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBhcnIuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlLCBhcnJbal0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjb2VyY2VCb29sZWFuUHJvcGVydHk8VD4odmFsdWU6IFQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSBcImZhbHNlXCI7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9tYXRoLXV0aWxzXCI7XHJcblxyXG5jb25zdCBjb2xvcnM6IHsgW2NvbG9yOiBzdHJpbmddOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfSA9IHtcclxuICAgIGJsYWNrOiBbMCwgMCwgMF0sXHJcbiAgICB3aGl0ZTogWzI1NSwgMjU1LCAyNTVdLFxyXG4gICAgcmVkICA6IFsyNTUsIDAsIDBdLFxyXG4gICAgZ3JlZW46IFswLCAyNTUsIDBdLFxyXG4gICAgYmx1ZSA6IFswLCAwLCAyNTVdLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnBDb2xvcihcclxuICAgIGZyb21Db2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXHJcbiAgICB0b0NvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcclxuICAgIHByb2dyZXNzOiBudW1iZXIsXHJcbik6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IHJlZCAgID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMF0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMF07XHJcbiAgICBjb25zdCBncmVlbiA9IHByb2dyZXNzICogZnJvbUNvbG9yWzFdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzFdO1xyXG4gICAgY29uc3QgYmx1ZSAgPSBwcm9ncmVzcyAqIGZyb21Db2xvclsyXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclsyXTtcclxuICAgIGNvbnN0IGFscGhhID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbM10gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbM107XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBjbGFtcChyZWQsIDAsIDI1NSksXHJcbiAgICAgICAgY2xhbXAoZ3JlZW4sIDAsIDI1NSksXHJcbiAgICAgICAgY2xhbXAoYmx1ZSwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChhbHBoYSwgMCwgMjU1KSxcclxuICAgIF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwSGV4YUNvbG9yKGE6IHN0cmluZywgYjogc3RyaW5nLCBhbW91bnQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBhaCA9ICthLnJlcGxhY2UoXCIjXCIsIFwiMHhcIik7XHJcbiAgICBjb25zdCBhciA9IGFoID4+IDE2O1xyXG4gICAgY29uc3QgYWcgPSBhaCA+PiA4ICYgMHhGRjtcclxuICAgIGNvbnN0IGFiID0gYWggJiAweEZGO1xyXG4gICAgY29uc3QgYmggPSArYi5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpO1xyXG4gICAgY29uc3QgYnIgPSBiaCA+PiAxNjtcclxuICAgIGNvbnN0IGJnID0gYmggPj4gOCAmIDB4RkY7XHJcbiAgICBjb25zdCBiYiA9IGJoICYgMHhGRjtcclxuICAgIGNvbnN0IHJyID0gYXIgKyBhbW91bnQgKiAoYnIgLSBhcik7XHJcbiAgICBjb25zdCByZyA9IGFnICsgYW1vdW50ICogKGJnIC0gYWcpO1xyXG4gICAgY29uc3QgcmIgPSBhYiArIGFtb3VudCAqIChiYiAtIGFiKTtcclxuXHJcbiAgICByZXR1cm4gXCIjXCIgKyAoKDEgPDwgMjQpICsgKHJyIDw8IDE2KSArIChyZyA8PCA4KSArIHJiIHwgMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4MnJnYihjb2xvcjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDEpLCAxNik7XHJcblxyXG4gICAgcmV0dXJuIFtudW0gPj4gMTYsIG51bSA+PiA4ICYgMHgwMEZGLCBudW0gJiAweDAwMDBGRl07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGFkZUNvbG9yKGNvbG9yOiBzdHJpbmcsIHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBudW0gPSBoZXgycmdiKGNvbG9yKTtcclxuICAgIGNvbnN0IGFtdCA9IE1hdGgucm91bmQoMi41NSAqIHBlcmNlbnQpO1xyXG4gICAgY29uc3QgUiAgID0gbnVtWzBdICsgYW10O1xyXG4gICAgY29uc3QgRyAgID0gbnVtWzFdICsgYW10O1xyXG4gICAgY29uc3QgQiAgID0gbnVtWzJdICsgYW10O1xyXG5cclxuICAgIHJldHVybiByZ2IyaGV4KFIsIEcsIEIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiMmhleChSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIiNcIiArICgweDEwMDAwMDAgKyAoUiA8IDI1NSA/IFIgPCAxID8gMCA6IFIgOiAyNTUpICogMHgxMDAwMCArXHJcbiAgICAgICAgKEcgPCAyNTUgPyBHIDwgMSA/IDAgOiBHIDogMjU1KSAqIDB4MTAwICtcclxuICAgICAgICAoQiA8IDI1NSA/IEIgPCAxID8gMCA6IEIgOiAyNTUpKS50b1N0cmluZygxNikuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnQyaGV4KHZhbDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbHVlICA9IHZhbC50b1N0cmluZygxNik7XHJcbiAgICBjb25zdCByZXN1bHQgPSBcIjAwMDAwMFwiLnN1YnN0cigwLCA2IC0gdmFsdWUubGVuZ3RoKSArIHZhbHVlO1xyXG5cclxuICAgIHJldHVybiBcIiNcIiArIHJlc3VsdC50b1VwcGVyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW50MnJnYih2YWw6IG51bWJlcik6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHZhbCA+PiAxNixcclxuICAgICAgICB2YWwgPj4gOCAmIDB4RkYsXHJcbiAgICAgICAgdmFsICYgMHhGRixcclxuICAgIF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgyaW50KHZhbDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDE2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYjJpbnQoUjogbnVtYmVyLCBHOiBudW1iZXIsIEI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUiA8PCAxNiB8IEcgPDwgOCAmIDB4RkZGRiB8IEI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgaWYgKGNvbG9yc1tjb2xvcl0pIHtcclxuICAgICAgICByZXR1cm4gY29sb3JzW2NvbG9yXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoZXhhTWF0Y2ggPSBjb2xvci5tYXRjaCgvXiMoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyk7XHJcbiAgICBpZiAoaGV4YU1hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzFdLCAxNiksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFsyXSwgMTYpLFxyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbM10sIDE2KSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJnYmFNYXRoID0gY29sb3IubWF0Y2goL3JnYmE/XFwoKFxcZHsxLDN9KSAqLCAqKFxcZHsxLDN9KSAqLCAqKFxcZHsxLDN9KSggKiwgKlxcZCouP1xcZCopXFwpLyk7XHJcbiAgICBpZiAocmdiYU1hdGgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBwYXJzZUludChyZ2JhTWF0aFsxXSwgMTApLFxyXG4gICAgICAgICAgICBwYXJzZUludChyZ2JhTWF0aFsyXSwgMTApLFxyXG4gICAgICAgICAgICBwYXJzZUludChyZ2JhTWF0aFszXSwgMTApLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBhcnNlIGNvbG9yOiBcIiArIGNvbG9yKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGU8VCBleHRlbmRzIG51bWJlciB8IHN0cmluZyB8IERhdGU+KG9iajogVCk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUob2JqKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICFpc05hTihkYXRlLmdldFRpbWUoKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IChOb2RlIHwgc3RyaW5nKVtdIHwgTm9kZSB8IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgb25DbGljaz86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgb25JbnB1dD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgc3R5bGVzPzogeyBbc3R5bGUgaW4ga2V5b2YgQ1NTU3R5bGVEZWNsYXJhdGlvbl0/OiBDU1NTdHlsZURlY2xhcmF0aW9uW3N0eWxlXSB9O1xyXG4gICAgY29udGVudD86IHN0cmluZztcclxuICAgIHZhbHVlPzogc3RyaW5nO1xyXG4gICAgc3JjPzogc3RyaW5nO1xyXG4gICAgZm9yPzogc3RyaW5nO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBhdXRvcGxheT86IGJvb2xlYW47XHJcbiAgICBocmVmPzogc3RyaW5nO1xyXG4gICAgZG93bmxvYWQ/OiBzdHJpbmc7XHJcbiAgICBjaGVja2VkPzogYm9vbGVhbjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFRvU3RyaW5nKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2xhc3NMaXN0KS5qb2luKFwiLlwiKTtcclxuICAgIGNvbnN0IGlkICAgICAgPSBlbGVtZW50LmlkID8gXCIjXCIgKyBlbGVtZW50LmlkIDogXCJcIjtcclxuICAgIGNvbnN0IHBhcmVudCAgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQgPyBlbGVtZW50VG9TdHJpbmcoZWxlbWVudC5wYXJlbnRFbGVtZW50KSArIFwiID4gXCIgOiBcIlwiO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnQgKyBlbGVtZW50LmxvY2FsTmFtZSArIGlkICsgKGNsYXNzZXMgPyBcIi5cIiArIGNsYXNzZXMgOiBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBoZWFkZXJTZWxlY3RvciA9IFwiLmhlYWRlclwiKTogeyBjbGVhcjogKCkgPT4gdm9pZCB9IHtcclxuICAgIGxldCBwb3MxID0gMDtcclxuICAgIGxldCBwb3MyID0gMDtcclxuICAgIGxldCBwb3MzID0gMDtcclxuICAgIGxldCBwb3M0ID0gMDtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50RHJhZyA9IChlOiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHBvczEgICAgICAgICAgICAgICA9IHBvczMgLSBlLmNsaWVudFg7XHJcbiAgICAgICAgcG9zMiAgICAgICAgICAgICAgID0gcG9zNCAtIGUuY2xpZW50WTtcclxuICAgICAgICBwb3MzICAgICAgICAgICAgICAgPSBlLmNsaWVudFg7XHJcbiAgICAgICAgcG9zNCAgICAgICAgICAgICAgID0gZS5jbGllbnRZO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wICA9IGVsZW1lbnQub2Zmc2V0VG9wIC0gcG9zMiArIFwicHhcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQgLSBwb3MxICsgXCJweFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkcmFnTW91c2VEb3duID0gKGU6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9zMyAgICAgICAgICAgICAgICAgICA9IGUuY2xpZW50WDtcclxuICAgICAgICBwb3M0ICAgICAgICAgICAgICAgICAgID0gZS5jbGllbnRZO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwICAgPSBjbG9zZURyYWdFbGVtZW50O1xyXG4gICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBlbGVtZW50RHJhZztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlclNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZURyYWdFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwICAgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVJbWFnZShvcHRpb25zPzogRWxlbWVudEF0dHJpYnV0ZXMpOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbXCJpbWdcIl0ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQ3JlYXRlRWxlbWVudChcImltZ1wiLCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAoQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMpIHtcclxuICAgICAgICByZXN1bHQuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGVja2JveChsYWJlbDogc3RyaW5nLCBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQsIGNoZWNrZWQgPSBmYWxzZSk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICBjaGVja2VkLFxyXG4gICAgICAgIHR5cGUgICAgOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IG9uQ2hhbmdlKGlucHV0RWxlbWVudC5jaGVja2VkKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBDcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge1xyXG4gICAgICAgIGNsYXNzTmFtZTogXCJjaGVja2JveC1jb250YWluZXJcIixcclxuICAgICAgICBjaGlsZHJlbiA6IFtsYWJlbCwgaW5wdXRFbGVtZW50LCBDcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImNoZWNrbWFya1wifSldLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHR5cGU6IEssIG9wdGlvbnM/OiBFbGVtZW50QXR0cmlidXRlcyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50PEs+KHR5cGUpO1xyXG4gICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhvcHRpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZW50cnlbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsYXNzTmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9IGVudHJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbkNoYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbkNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tlZFwiOlxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0eWxlc1wiOlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZW50cnlbMV0pLmZvckVhY2goKHN0eWxlRW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3R5bGVbc3R5bGVFbnRyeVswXSBhcyBhbnldID0gc3R5bGVFbnRyeVsxXSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hpbGRyZW5cIjpcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5WzFdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoLi4uZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwZW5kKGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29udGVudFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5WzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGVudHJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKGVudHJ5WzBdLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRPRE86IGVsZW1lbnQgcmVtYWlucyBhZnRlciBkZWxldGlvbiBvbk1lc3NhZ2Ugc2NyZWVuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1wYXJhbS1sYXN0XHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VDb2xvclVzaW5nRGVmYXVsdElucHV0KGNvbG9yID0gXCIjMDAwMDAwXCIsIG9uSW5wdXQ/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IENyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgICAgIHR5cGUgICAgIDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIHZhbHVlICAgIDogY29sb3IsXHJcbiAgICAgICAgICAgIG9uSW5wdXQ6IHR5cGVvZiBvbklucHV0ID09PSBcImZ1bmN0aW9uXCIgPyAoKSA9PiBvbklucHV0KGlucHV0LnZhbHVlKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgb25DaGFuZ2UgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGlucHV0LmNsaWNrKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmVudDogSFRNTEVsZW1lbnQsIHR5cGU6IEssIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXT4oYCR7dHlwZX0uJHtjbGFzc2VzLmpvaW4oXCIuXCIpfWApO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIENyZWF0ZUVsZW1lbnQodHlwZSwge2NsYXNzTmFtZTogY2xhc3Nlcy5qb2luKFwiIFwiKX0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JDcmVhdGVBbmRBcHBlbmQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4ocGFyZW50OiBIVE1MRWxlbWVudCwgdHlwZTogSywgLi4uY2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0T3JDcmVhdGU8Sz4ocGFyZW50LCB0eXBlLCAuLi5jbGFzc2VzKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ3JlYXRlRWxlbWVudCwgQ3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi9odG1sLXV0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplSW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2FudmFzID0gQ3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7XHJcbiAgICAgICAgd2lkdGggOiBpbWFnZS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcclxuICAgIH0pO1xyXG4gICAgKGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVJbWFnZShpbWFnZTogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICByZXR1cm4gQ3JlYXRlSW1hZ2Uoe1xyXG4gICAgICAgIHNyYzogaW1hZ2UsXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKGNhbGxiYWNrOiAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQgPSB3aWR0aCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IENyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgIH0pO1xyXG4gICAgY2FsbGJhY2soY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpO1xyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcblxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2FuYWx5dGljcy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcnJheS11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2VyY2UtdXRpbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xvci11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kYXRlLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2h0bWwtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaW1hZ2UtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0aC11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9taXNjLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RpbWUtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc29ydGVkLWFycmF5LXV0aWxzXCI7XHJcblxyXG4vLyBUT0RPOiBzaG91bGQgYmUgaW1wb3J0IGRpcmVjdGx5IHRvIGZpbGVcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vbmV0LWNsaWVudC11dGlsc1wiO1xyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9uZXQtc2VydmVyLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0LXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXItdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcHJvY2Vzcy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yZWZsZWN0aW9uLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JhbmRvbS11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmctdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3ZnLXV0aWxzXCI7XHJcbiIsImltcG9ydCB7IEJ1dHRvbiwgS2V5cyB9IGZyb20gXCIuLi9lbnVtc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1dHRvbkZyb21FdmVudChldmVudDogTW91c2VFdmVudCk6IEJ1dHRvbiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gZ2V0QnV0dG9uRnJvbUV2ZW50QnV0dG9ucyhldmVudC5idXR0b24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnV0dG9uRnJvbUV2ZW50QnV0dG9ucyhidXR0b246IE1vdXNlRXZlbnRbXCJidXR0b25cIl0pOiBCdXR0b24gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKGJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBCdXR0b24uTEVGVDtcclxuICAgIH1cclxuICAgIGlmIChidXR0b24gPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gQnV0dG9uLk1JRERMRTtcclxuICAgIH1cclxuICAgIGlmIChidXR0b24gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gQnV0dG9uLlJJR0hUO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUV2ZW50S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBrZXk6IEtleXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBldmVudC5jb2RlID09PSBrZXk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmFuZG9tIGZyb20gXCIuL3JhbmRvbS11dGlsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZChudW06IG51bWJlciwgc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHMgPSBcIjAwMDAwMDAwMDAwMDAwXCIgKyBudW07XHJcblxyXG4gICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3VuZFRvRGVjaW1hbHMobnVtOiBudW1iZXIsIGRlY2ltYWxzID0gMiwgdHlwZTogXCJmbG9vclwiIHwgXCJjZWlsXCIgfCBcInJvdW5kXCIgPSBcInJvdW5kXCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZGl2aWRlciA9IHBhcnNlSW50KDEgKyBuZXcgQXJyYXkoZGVjaW1hbHMgKyAxKS5qb2luKFwiMFwiKSwgMTApO1xyXG5cclxuICAgIHJldHVybiAoTWF0aFt0eXBlXShudW0gKiBkaXZpZGVyKSAvIGRpdmlkZXIpLnRvRml4ZWQoZGVjaW1hbHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaDJOdW1iZXJzKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHhGaW5hbCA9IHggPj0gMCA/IHggKiAyIDogLXggKiAyIC0gMTtcclxuICAgIGNvbnN0IHlGaW5hbCA9IHkgPj0gMCA/IHkgKiAyIDogLXkgKiAyIC0gMTtcclxuXHJcbiAgICByZXR1cm4gKHhGaW5hbCArIHlGaW5hbCkgKiAoeEZpbmFsICsgeUZpbmFsICsgMSkgLyAyICsgeUZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbm9taWFsQ29lZmZpY2llbnQobjogbnVtYmVyLCBrOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHIgPSAxO1xyXG4gICAgaWYgKGsgPiBuKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBkID0gMTsgZCA8PSBrOyBkKyspIHtcclxuICAgICAgICByICo9IG47XHJcbiAgICAgICAgbi0tO1xyXG4gICAgICAgIHIgLz0gZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBiICogdmFsICsgKDEgLSB2YWwpICogYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZzJpKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHIgPSAwO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB3aGlsZSAoKHZhbHVlID4+PSAxKSA+IDApIHtcclxuICAgICAgICByKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYW1wKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gY2xhbXAoKG1heCAtIG1pbikgKiBzY2FsZSArIG1pbiwgbWluLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByYW5kb21JbnRCZXR3ZWVufSBpbnN0ZWFkO1xyXG4gKlxyXG4gKiBAcGFyYW0gbWluIC0gbWluIHZhbHVlXHJcbiAqIEBwYXJhbSBtYXggLSBtYXggdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSYW5kb20ucmFuZG9tSW50QmV0d2VlbihtaW4sIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHJhbmRvbUZsb2F0QmV0d2Vlbn0gaW5zdGVhZDtcclxuICpcclxuICogQHBhcmFtIG1pbiAtIG1pbiB2YWx1ZVxyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUmFuZG9tLnJhbmRvbUZsb2F0QmV0d2VlbihtaW4sIG1heCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmVyYWdlKGFyZ3M6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFyZ3MpIHtcclxuICAgICAgICBzdW0gKz0gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VtIC8gYXJncy5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodmFsdWUgJiB2YWx1ZSAtIDEpID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZihudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtMSAtIG51bTIpO1xyXG59XHJcblxyXG5jb25zdCByYXRpbyA9IDE4MCAvIE1hdGguUEk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWVzKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIHJhdGlvO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcGFyc2UgY29va2llc1xyXG4gKiBAcGFyYW0gY29va2llcyAtIGNvb2tlIHRvIHBhcnNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXM6IHN0cmluZyk6IFN0cmluZ01hcCB7XHJcbiAgICBjb25zdCBsaXN0OiBTdHJpbmdNYXAgPSB7fTtcclxuICAgIGNvbnN0IGRhdGEgICAgICAgICAgICA9IGNvb2tpZXMgPyBjb29raWVzLnRvU3RyaW5nKClcclxuICAgICAgICAuc3BsaXQoXCI7XCIpIDogW107XHJcbiAgICBkYXRhLmZvckVhY2goKGNvb2tpZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzICAgICA9IGNvb2tpZS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRQYXJ0ID0gcGFydHMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoc2hpZnRQYXJ0KSB7XHJcbiAgICAgICAgICAgIGxpc3Rbc2hpZnRQYXJ0LnRyaW0oKV0gPSBkZWNvZGVVUkkocGFydHMuam9pbihcIj1cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIG9iamVjdCBpcyBpbiBhcnJheVxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgaXNJbihcImFcIiwgXCJiXCIsIFwiZFwiLCBcImFcIikgPT4gdHJ1ZVxyXG4gKiAgaXNJbihcImFcIiwgW1wiYlwiLCBcImRcIiwgXCJhXCJdKSA9PiB0cnVlXHJcbiAqICBpc0luKFwiY1wiLCBcImJcIiwgXCJkXCIsIFwiYVwiKSA9PiBmYWxzZVxyXG4gKiAgaXNJbihcImNcIiwgW1wiYlwiLCBcImRcIiwgXCJhXCJdKSA9PiBmYWxzZVxyXG4gKiAgaXNJbihcImNcIikgPT4gZmFsc2VcclxuICogIGlzSW4oXCJjXCIsIFtdKSA9PiBmYWxzZVxyXG4gKiBAcGFyYW0gb2JqIC0gc2VhcmNoZWQgb2JqZWN0XHJcbiAqIEBwYXJhbSBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjb21wYXJlIHdpdGggc2VhcmNoZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJbjxUPihvYmo6IFQsIC4uLmRhdGE6IHVua25vd25bXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVswXSkpIHtcclxuICAgICAgICBpZiAoZGF0YVswXS5pbmRleE9mKG9iaikgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuaW5kZXhPZihvYmopID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcGFyc2UgSlNPTiBjb250ZW50IHdpdGggY29tbWVudHNcclxuICogQHBhcmFtIGNvbnRlbnQgLSBzdHJpbmdpZnkgSlNPTlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSlNPTldpdGhDb21tZW50czxUPihjb250ZW50OiBzdHJpbmcpOiBUIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGNvbnRlbnQucmVwbGFjZSgvXFwvXFwvLipcXG4vZywgXCJcIikpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBzaG91bGQgYXBwZW5kIGNvb2tpZXMgb3IgYWRkIG9wdGlvbiB0byBhcHBlbmRpbmcgaW5zdGVhZCBvZiByZXBsYWNlIGNvb2tpZXNcclxuLy8gVE9ETzogZXhwaXJlcyBtdXN0IGJlIG9ubHkgaW4gdGhlIGVuZCBvZiBjb29raWVzXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiwgZGF5czogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgY29uc3QgZmluYWxDb29raWVzID0gYCR7bmFtZX09JHt2YWx1ZX07ZXhwaXJlcz0ke2QudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGZpbmFsQ29va2llcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmFtZX09JHt2YWx1ZX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lOiBzdHJpbmcsIHNvdXJjZSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNvb2tpZSA6IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgICBjb25zdCBjYSAgID0gc291cmNlLnNwbGl0KFwiO1wiKTtcclxuICAgIGZvciAobGV0IGMgb2YgY2EpIHtcclxuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKSB0eXBlb2Ygb2JqZWN0XHJcbiAqICBwYXJzZVBhcmFtczxhbnk+KFwibmFtZT1HYWJyaWVsJmFnZT0yMyZlbWFpbD1nY3NvbGxlaSZlbWFpbD1nYWJyaWVsY3NvbGxlaSZlbWFpbD10ZXN0XCIpLm5hbWUgPT4gR2FicmllbFxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5hZ2UgPT4gXCIyM1wiXHJcbiAqICBwYXJzZVBhcmFtczxhbnk+KFwibmFtZT1HYWJyaWVsJmFnZT0yMyZlbWFpbD1nY3NvbGxlaSZlbWFpbD1nYWJyaWVsY3NvbGxlaSZlbWFpbD10ZXN0XCIpLmVtYWlsIHR5cGVvZiBhcnJheVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbFswXSA9PiBnY3NvbGxlaVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbFsxXSA9PiBnYWJyaWVsY3NvbGxlaVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbFsyXSA9PiB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbXM8VD4ocXVlcnkgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpIDogXCJcIixcclxuICAgIHNlcGFyYXRvciA9IFwiJlwiLFxyXG4gICAgZGVsaW1pdGVyID0gXCI9XCIpOiBUIHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHZhcnM6IHN0cmluZ1tdICAgPSBxdWVyeS5zcGxpdChzZXBhcmF0b3IpO1xyXG4gICAgZm9yIChjb25zdCBwYWlyIG9mIHZhcnMpIHtcclxuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYWlyLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZ1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHF1ZXJ5U3RyaW5nW2tleV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XSA9IFtxdWVyeVN0cmluZ1trZXldLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBxdWVyeVN0cmluZyBhcyBUO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIG9iamVjdFRvUXVlcnlQYXJhbXMoe2E6IFwiYWFcIiwgYjogXCJiYlwifSkgPT4gP2E9YWEmYj1iYlxyXG4gKiAgb2JqZWN0VG9RdWVyeVBhcmFtcyh7YTogMjEsIGI6IDIyfSkgPT4gP2E9MjEmYj0yMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvUXVlcnlQYXJhbXMob2JqOiBTdHJpbmdNYXA8dW5rbm93bj4pOiBzdHJpbmcge1xyXG4gICAgLy8gVE9ETzogYWRkIHVybCBwcmVmaXhcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBvYmpLZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShvYmpLZXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBgJHtyZXN1bHQubGVuZ3RoID4gMCA/IFwiJlwiIDogXCI/XCJ9JHtvYmpLZXl9PSR7b2JqW29iaktleV19YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmo6IGFueSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIG9ialtrZXldID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqW2tleV0gPSBvYmpba2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlPFQ+KG9iajogc3RyaW5nKTogVCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKG9iaik7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gcmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoaSkgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHJlc3VsdFtpXSAhPT0gXCJzdHJpbmdcIiB8fCAhKHJlc3VsdFtpXS5pbmRleE9mKFwiZnVuY3Rpb24gKFwiKSA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldLm1hdGNoKC9eXFwoW19hLXpBLVowLTldKyggKiwgKltfYS16QS1aMC05XSspKlxcKSAqPT4vKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXHJcbiAgICAgICAgICAgIGV2YWwoXCJyZXN1bHRbaV0gPSBcIiArIHJlc3VsdFtpXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHRbaV0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwPFMgPSBhbnksIFQgPSBTPihzb3VyY2U6IFMsIGRhdGE6IHsgYXR0clM6IGtleW9mIFMsIGF0dHJEPzoga2V5b2YgVCwgbWFwRnVuY3Rpb246IChzcmM6IGFueSkgPT4gYW55IH1bXSk6IFQge1xyXG4gICAgY29uc3QgZGVzdGluYXRpb246IGFueSA9IHt9O1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLm1hcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmF0dHJEKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJEXSA9IGl0ZW0ubWFwRnVuY3Rpb24oc291cmNlW2l0ZW0uYXR0clNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0clNdID0gaXRlbS5tYXBGdW5jdGlvbihzb3VyY2VbaXRlbS5hdHRyU10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmF0dHJEKSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0ckRdID0gc291cmNlW2l0ZW0uYXR0clNdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0clNdID0gc291cmNlW2l0ZW0uYXR0clNdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBPYmplY3RFbnRyeSB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRob3V0PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqOiBULCBpdGVtczogKGtleW9mIFQpW10pOiBPbWl0PFQsIGFueT4ge1xyXG4gICAgcmV0dXJuIGdldE9iamVjdEVudHJpZXMob2JqKS5maWx0ZXIoKGVudHJ5KSA9PiAhaXRlbXMuaW5jbHVkZXMoZW50cnkua2V5KSlcclxuICAgICAgICAucmVkdWNlKChwcmV2LCBlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBwcmV2W2VudHJ5LmtleV0gPSBlbnRyeS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgIH0sIHt9IGFzIFQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsPFQ+KG9iakE6IFQsIG9iakI6IFQpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqQSAhPT0gdHlwZW9mIG9iakIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvYmpBID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKCFvYmpBIHx8ICFvYmpCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpBID09PSBvYmpCO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKG9iakEgYXMgYW55KT8uY29uc3RydWN0b3I/Lm5hbWUgIT09IChvYmpCIGFzIGFueSk/LmNvbnN0cnVjdG9yPy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpBKSBhcyAoa2V5b2YgVClbXTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhvYmpCKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKG9iakFba2V5XSwgb2JqQltrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIChvYmpBIGFzIGFueSkgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG9iakIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBpZiAoaXNOYU4oK29iakEpICYmIGlzTmFOKCtvYmpCKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iakEgPT09IG9iakI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weTxUPihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbWFwLXdpdGhvdXQtdXNhZ2VcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5tYXAoKGUpID0+IGRlZXBDb3B5KGUpKSBhcyBhbnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoc291cmNlIGFzIGFueSk/LmNvbnN0cnVjdG9yPy5uYW1lICE9PSBcIk9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGNhbm5vdCBjb3B5IGNsYXNzIGluc3RhbmNlc1wiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQ6IFBhcnRpYWw8VD4gPSB7fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc291cmNlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgKHJlc3VsdCBhcyBhbnkpW2tleV0gPSBkZWVwQ29weSh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQgYXMgVDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgY2Fubm90IGNvcHkgZnVuY3Rpb25zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzb3VyY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RFbnRyaWVzPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqOiBUKTogT2JqZWN0RW50cnk8VD5bXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IE9iamVjdEVudHJ5PFQ+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qgb2JqS2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KG9iaktleSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAga2V5ICA6IG9iaktleSxcclxuICAgICAgICAgICAgdmFsdWU6IG9ialtvYmpLZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXN0ZWRQcm9wZXJ0eShvYmplY3Q6IGFueSwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIHNlcGFyYXRvciA9IFwiLlwiKTogYW55IHtcclxuICAgIGNvbnN0IHByb3BlcnR5TGlzdCA9IHByb3BlcnR5UGF0aC5zcGxpdChzZXBhcmF0b3IpO1xyXG5cclxuICAgIHJldHVybiBwcm9wZXJ0eUxpc3QucmVkdWNlKChjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZSwgcHJvcGVydHlOYW1lKSA9PiBjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZSA/IGN1cnJlbnROZXN0ZWRQcm9wZXJ0eVZhbHVlW3Byb3BlcnR5TmFtZV0gOiB1bmRlZmluZWQsIG9iamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROZXN0ZWRQcm9wZXJ0eTxUPihrZXk6IHN0cmluZywgaXRlbTogYW55LCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgbGV0IG9iaiAgICAgICAgPSBpdGVtO1xyXG4gICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoXCIuXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdEtleS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBvYmogPSBvYmpbc3BsaXRLZXlbaV1dO1xyXG4gICAgfVxyXG4gICAgb2JqW3NwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdXSA9IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91Z2hTaXplT2ZPYmplY3Q8VD4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG9iamVjdExpc3QgICAgICAgPSBbXTtcclxuICAgIGNvbnN0IHN0YWNrOiB1bmtub3duW10gPSBbb2JqZWN0XTtcclxuICAgIGxldCBieXRlcyAgICAgICAgICAgICAgPSAwO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSA0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzICs9IHZhbHVlLmxlbmd0aCA8PCAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzICs9IDg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0TGlzdC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgb2JqZWN0TGlzdC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnl0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaXplPFQgZXh0ZW5kcyAoUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmtub3duW10pPihvYmplY3Q6IFQpOiBudW1iZXIge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICByZXN1bHQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW48VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihvYmplY3Q6IFQpOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3QgaW5kZXggaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShpbmRleCkgJiYgdHlwZW9mIG9iamVjdFtpbmRleF0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBsaXN0IC0gbGlzdCB0byBmbGF0XHJcbiAqIEBwYXJhbSBwcm9wZXJ0eVBhdGggLSBwYXRoIHRvIHByb3BlcnR5XHJcbiAqIEBwYXJhbSBzZXBhcmF0b3IgLSBzZXBhcmF0b3IgaW4gcHJvcGVydHlQYXRoXHJcbiAqIEBwYXJhbSBza2lwVW5kZWZpbmVkIC0gdHJ1ZSBpZiB1bmRlZmluZWQgc2hvdWxkIGJlIHNraXBwZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgXHJcbiAqIGNvbnN0IGl0ZW1zID0gW1xyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkdhYnJpZWxcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9LFxyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkVsbGFcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9LFxyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkdhYnJpZWxcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9LFxyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkpvZVwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH1cclxuICogXVxyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhtYWtlRmxhdChpdGVtcyksIFwicGVyc29uLm5hbWVcIik7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiR2FicmllbFwiLCBcIkpvZVwiXVxyXG4gKiBjb25zb2xlLmxvZyhtYWtlRmxhdChpdGVtcyksIFwicGVyc29uX25hbWVcIiwgXCJfXCIpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkdhYnJpZWxcIiwgXCJKb2VcIl1cclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbi5uYW1lXCIsIFwiLlwiLCB0cnVlKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJKb2VcIl1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZsYXQobGlzdDogYW55W10sIHByb3BlcnR5UGF0aDogc3RyaW5nLCBzZXBhcmF0b3IgPSBcIi5cIiwgc2tpcFVuZGVmaW5lZCA9IGZhbHNlKTogYW55IHtcclxuICAgIGNvbnN0IHByb3BlcnR5TGlzdCA9IHByb3BlcnR5UGF0aC5pbmRleE9mKHNlcGFyYXRvcikgPj0gMCA/IHByb3BlcnR5UGF0aC5zcGxpdChzZXBhcmF0b3IpIDogW3Byb3BlcnR5UGF0aF07XHJcblxyXG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnR5TGlzdC5yZWR1Y2UoKHByb3BWYWwsIHByb3BlcnR5TmFtZSkgPT4gcHJvcFZhbCA/IHByb3BWYWxbcHJvcGVydHlOYW1lXSA6IHVuZGVmaW5lZCwgY3Vycik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiAmJiBza2lwVW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjYy5wdXNoKHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VCb29sZWFuVmFsdWUoa2V5OiBzdHJpbmcpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChrZXkubWF0Y2goLygxfHRydWV8eWVzfGFub3zDoW5vKS9pKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleS5tYXRjaCgvKDB8ZmFsc2V8bm98bmllKS9pKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFByb2Nlc3NEYXRhIHtcclxuICAgIG1lbW9yeVVzYWdlOiBOb2RlSlMuTWVtb3J5VXNhZ2U7XHJcbiAgICBjcHVVc2FnZTogTm9kZUpTLkNwdVVzYWdlO1xyXG4gICAgdXBUaW1lOiBudW1iZXI7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBwbGF0Zm9ybTogTm9kZUpTLlBsYXRmb3JtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUZXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RldigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiIHx8ICFwcm9jZXNzLmVudi5OT0RFX0VOVjtcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW52aXJvbm1lbnQodHlwZTogXCJ0ZXN0XCIgfCBcInByb2R1Y3Rpb25cIiB8IFwiZGV2ZWxvcG1lbnRcIik6IHZvaWQge1xyXG4gICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSB0eXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc0RhdGEoKTogUHJvY2Vzc0RhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZW1vcnlVc2FnZTogcHJvY2Vzcy5tZW1vcnlVc2FnZSgpLFxyXG4gICAgICAgIGNwdVVzYWdlICAgOiBwcm9jZXNzLmNwdVVzYWdlKCksXHJcbiAgICAgICAgdXBUaW1lICAgICA6IHByb2Nlc3MudXB0aW1lKCksXHJcbiAgICAgICAgdmVyc2lvbiAgICA6IHByb2Nlc3MudmVyc2lvbixcclxuICAgICAgICBwbGF0Zm9ybSAgIDogcHJvY2Vzcy5wbGF0Zm9ybSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0RW52aXJvbm1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XHJcbiAgICAgICAgc2V0RW52aXJvbm1lbnQoXCJkZXZlbG9wbWVudFwiKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tRmxvYXRCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50QmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tRmxvYXRCZXR3ZWVuKG1pbiwgbWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Cb29sZWFuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JdGVtPFQ+KC4uLml0ZW1zOiBUW10pOiBUIHtcclxuICAgIHJldHVybiBpdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtcy5sZW5ndGgpXTtcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlIGNsYXNzIGJ5IG5hbWUgYW5kIGxpc3Qgb2YgcGFyYW1ldGVyc1xyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSAtIGNsYXNzIG5hbWVcclxuICogQHBhcmFtIGFyZ3MgLSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJcclxuICogQHJldHVybnMgY3JlYXRlZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGFzcyhuYW1lOiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgIGNvbnN0IHRlbXAgPSBPYmplY3QuY3JlYXRlKG5hbWUucHJvdG90eXBlKTtcclxuICAgIG5hbWUuYXBwbHkodGVtcCwgYXJncyk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsRmlyc3RGdW5jdGlvbiguLi5mdW5jdGlvbnM6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGZvciAoY29uc3QgZnVuYyBvZiBmdW5jdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZnVuYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogSWYgcmV0dXJuIHBvc2l0aXZlIHZhbHVlIHNvIHRoaXMgbnVtYmVyIGlzIGluZGV4IG9mIHRoZSBlbGVtZW50XHJcbiAqIGJ1dCBpZiBpdCByZXR1cm5zIG5lZ2F0aXZlIHZhbHVlIHRoYW4geW91IGNhbiB1c2UgfnJlc3VsdCB0byBkZXRlcm1pbmUgaW5kZXggb2YgbmV3IGVsZW1lbnRcclxuICogQGV4YW1wbGVcclxuICogIGJpbmFyeVNlYXJjaChbXCJiXCIsICBcImRcIl0sIFwiYVwiLCAoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKSA9PiAtMVxyXG4gKiAgYmluYXJ5U2VhcmNoKFtcImJcIiwgIFwiZFwiXSwgXCJiXCIsIChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpID0+IDBcclxuICogIGJpbmFyeVNlYXJjaChbXCJiXCIsICBcImRcIl0sIFwiY1wiLCAoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKSA9PiAtMlxyXG4gKiAgYmluYXJ5U2VhcmNoKFtcImJcIiwgIFwiZFwiXSwgXCJkXCIsIChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpID0+IDFcclxuICogIGJpbmFyeVNlYXJjaChbXCJiXCIsICBcImRcIl0sIFwiZVwiLCAoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKSA9PiAtM1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaDxUPihhcnJheTogcmVhZG9ubHkgVFtdLCBpdGVtOiBULCBjb21wYXJhdG9yOiAoYTogVCwgYjogVCkgPT4gbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBtID0gMDtcclxuICAgIGxldCBuID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuXHJcbiAgICB3aGlsZSAobSA8PSBuKSB7XHJcbiAgICAgICAgY29uc3QgayAgID0gKG4gKyBtKSA+PiAxO1xyXG4gICAgICAgIGNvbnN0IGNtcCA9IGNvbXBhcmF0b3IoaXRlbSwgYXJyYXlba10pO1xyXG5cclxuICAgICAgICBpZiAoY21wID4gMCkge1xyXG4gICAgICAgICAgICBtID0gayArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbXAgPCAwKSB7XHJcbiAgICAgICAgICAgIG4gPSBrIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIH5tO1xyXG59XHJcblxyXG4vKipcclxuICogIHNvcnRlZEZpbmQoW1wiYVwiLCBcImNcIl0sIFwiYVwiLCAoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKSA9PiBhXHJcbiAqICBzb3J0ZWRGaW5kKFtcImFcIiwgXCJjXCJdLCBcImJcIiwgKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSkgPT4gdW5kZWZpbmVkXHJcbiAqICBzb3J0ZWRGaW5kKFtcImFcIiwgXCJjXCJdLCBcImNcIiwgKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSkgPT4gY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRlZEZpbmQ8VD4oXHJcbiAgICBhcnJheTogcmVhZG9ubHkgVFtdLFxyXG4gICAgZWw6IFQsXHJcbiAgICBjb21wYXJlOiAobGVmdDogVCwgcmlnaHQ6IFQpID0+IG51bWJlcixcclxuKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICBjb25zdCBpZHggPSBiaW5hcnlTZWFyY2goYXJyYXksIGVsLCBjb21wYXJlKTtcclxuICAgIGlmIChpZHggPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheVtpZHhdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkSW5zZXJ0PFQ+KGFycmF5OiBUW10sIHZhbHVlOiBULCBjb21wYXJlOiAobGVmdDogVCwgcmlnaHQ6IFQpID0+IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBpZHggICAgPSBiaW5hcnlTZWFyY2goYXJyYXksIHZhbHVlLCBjb21wYXJlKTtcclxuICAgIGNvbnN0IG5ld0lkeCA9IGlkeCA8IDAgPyB+aWR4IDogaWR4O1xyXG4gICAgYXJyYXkuc3BsaWNlKG5ld0lkeCwgMCwgdmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBuZXdJZHg7XHJcbn1cclxuXHJcbi8vIEluc2VydCBhbGwgdmFsdWVzIGZyb20gdGhlICd2YWx1ZXMnIGludG8gJ2FycmF5Jy5cclxuLy8gQm90aCAnYXJyYXknIGFuZCAndmFsdWVzJyBhcmUgZXhwZWN0ZWQgdG8gYmUgc29ydGVkLlxyXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkSW5zZXJ0QWxsPFQ+KFxyXG4gICAgYXJyYXk6IFRbXSxcclxuICAgIHZhbHVlczogVFtdLFxyXG4gICAgY29tcGFyZTogKGxlZnQ6IFQsIHJpZ2h0OiBUKSA9PiBudW1iZXIsXHJcbiAgICBza2lwRHVwbGljYXRlcyA9IGZhbHNlLFxyXG4pOiBudW1iZXIge1xyXG4gICAgbGV0IGFjdHVhbEluZGV4ID0gMDtcclxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgYWN0dWFsSW5kZXggPSBiaW5hcnlTZWFyY2goYXJyYXkuc2xpY2UoYWN0dWFsSW5kZXgpLCB2YWx1ZSwgY29tcGFyZSk7XHJcbiAgICAgICAgaWYgKHNraXBEdXBsaWNhdGVzICYmIGFjdHVhbEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3R1YWxJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgYWN0dWFsSW5kZXggPSB+YWN0dWFsSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFycmF5LnNwbGljZShhY3R1YWxJbmRleCwgMCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkUmVtb3ZlPFQ+KGFycmF5OiBUW10sIHZhbHVlOiBULCBjb21wYXJlOiAobGVmdDogVCwgcmlnaHQ6IFQpID0+IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgY29uc3QgaWR4ID0gYmluYXJ5U2VhcmNoKGFycmF5LCB2YWx1ZSwgY29tcGFyZSk7XHJcbiAgICBpZiAoaWR4IDwgMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHIgPSBhcnJheVtpZHhdO1xyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb21tZW50ZWQtY29kZVxyXG4gICAgLy8gcHVsbEF0KGFycmF5LCBpZHgpO1xyXG4gICAgYXJyYXkuc3BsaWNlKGlkeCwgMSk7XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQaWNrcyB2YWx1ZXMgZnJvbSB0aGUgJ2FycmF5JyB0aGF0IGFyZSBwcmVzZW50IGluICd2YWx1ZXMnLlxyXG4gKiBCb3RoICdhcnJheScgYW5kICd2YWx1ZXMnIGFyZSBleHBlY3RlZCB0byBiZSBzb3J0ZWQuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBzb3J0ZWRQaWNrQWxsKFtcImFcIiwgXCJiXCIsIFwiY1wiXSwgW1wiYlwiLCBcImNcIiwgXCJkXCJdLCAoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKSA9PT4gW1wiYlwiLCBcImNcIl1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0ZWRQaWNrQWxsPFQ+KFxyXG4gICAgYXJyYXk6IHJlYWRvbmx5IFRbXSxcclxuICAgIHZhbHVlczogcmVhZG9ubHkgVFtdLFxyXG4gICAgY29tcGFyZTogKGxlZnQ6IFQsIHJpZ2h0OiBUKSA9PiBudW1iZXIsXHJcbik6IFRbXSB7XHJcbiAgICBsZXQgaTEgICAgICAgPSAwO1xyXG4gICAgbGV0IGkyICAgICAgID0gMDtcclxuICAgIGNvbnN0IHI6IFRbXSA9IFtdO1xyXG4gICAgd2hpbGUgKGkxIDwgdmFsdWVzLmxlbmd0aCAmJiBpMiA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGlkICA9IHZhbHVlc1tpMV07XHJcbiAgICAgICAgY29uc3QgZiAgID0gYXJyYXlbaTJdO1xyXG4gICAgICAgIGNvbnN0IGNtcCA9IGNvbXBhcmUoaWQsIGYpO1xyXG4gICAgICAgIGlmIChjbXAgPiAwKSB7XHJcbiAgICAgICAgICAgICsraTI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbXAgPCAwKSB7XHJcbiAgICAgICAgICAgICsraTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgci5wdXNoKGYpO1xyXG4gICAgICAgICAgICArK2kxO1xyXG4gICAgICAgICAgICArK2kyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBpY2tzIHZhbHVlcyBmcm9tIHRoZSAnYXJyYXknIHRoYXQgYXJlIE5PVCBwcmVzZW50IGluICd2YWx1ZXMnLlxyXG4gKiBCb3RoICdhcnJheScgYW5kICd2YWx1ZXMnIGFyZSBleHBlY3RlZCB0byBiZSBzb3J0ZWQuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBTb3J0ZWREaWZmZXJlbmNlKFtcImFcIiwgXCJiXCIsIFwiY1wiXSwgW1wiYlwiLCBcImNcIiwgXCJkXCJdLCAoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKSA9PT4gW1wiYVwiXVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnRlZERpZmZlcmVuY2U8VD4oXHJcbiAgICBhcnJheTogcmVhZG9ubHkgVFtdLFxyXG4gICAgdmFsdWVzOiByZWFkb25seSBUW10sXHJcbiAgICBjb21wYXJlOiAobGVmdDogVCwgcmlnaHQ6IFQpID0+IG51bWJlcixcclxuKTogVFtdIHtcclxuICAgIGxldCBpMSAgICAgICA9IDA7XHJcbiAgICBsZXQgaTIgICAgICAgPSAwO1xyXG4gICAgY29uc3QgcjogVFtdID0gW107XHJcbiAgICB3aGlsZSAoaTEgPCB2YWx1ZXMubGVuZ3RoICYmIGkyIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgID0gdmFsdWVzW2kxXTtcclxuICAgICAgICBjb25zdCBmICAgPSBhcnJheVtpMl07XHJcbiAgICAgICAgY29uc3QgY21wID0gY29tcGFyZShpZCwgZik7XHJcbiAgICAgICAgaWYgKGNtcCA+IDApIHtcclxuICAgICAgICAgICAgci5wdXNoKGYpO1xyXG4gICAgICAgICAgICArK2kyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY21wIDwgMCkge1xyXG4gICAgICAgICAgICArK2kxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICsraTE7XHJcbiAgICAgICAgICAgICsraTI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2hpbGUgKGkyIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZiA9IGFycmF5W2kyXTtcclxuICAgICAgICByLnB1c2goZik7XHJcbiAgICAgICAgKytpMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuLy8gU3BsaXRzIHZhbHVlcyBvZiB0aGUgJ2FycmF5JyB0byB0d28gYXJyYXlzLlxyXG4vLyBUaG9zZSB0aGF0IGFyZSBwcmVzZW50IGluICd2YWx1ZXMnIGFuZCB0aG9zZSB0aGF0IGFyZSBub3QuXHJcbi8vIEJvdGggJ2FycmF5JyBhbmQgJ3ZhbHVlcycgYXJlIGV4cGVjdGVkIHRvIGJlIHNvcnRlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnRlZFBhcnRpdGlvbjxUPihcclxuICAgIGFycmF5OiByZWFkb25seSBUW10sXHJcbiAgICB2YWx1ZXM6IHJlYWRvbmx5IFRbXSxcclxuICAgIGNvbXBhcmU6IChsZWZ0OiBULCByaWdodDogVCkgPT4gbnVtYmVyLFxyXG4pOiBbVFtdLCBUW11dIHtcclxuICAgIGxldCBpMSAgICAgICAgPSAwO1xyXG4gICAgbGV0IGkyICAgICAgICA9IDA7XHJcbiAgICBjb25zdCByMTogVFtdID0gW107XHJcbiAgICBjb25zdCByMjogVFtdID0gW107XHJcbiAgICB3aGlsZSAoaTEgPCB2YWx1ZXMubGVuZ3RoICYmIGkyIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgID0gdmFsdWVzW2kxXTtcclxuICAgICAgICBjb25zdCBmICAgPSBhcnJheVtpMl07XHJcbiAgICAgICAgY29uc3QgY21wID0gY29tcGFyZShpZCwgZik7XHJcbiAgICAgICAgaWYgKGNtcCA+IDApIHtcclxuICAgICAgICAgICAgcjIucHVzaChmKTtcclxuICAgICAgICAgICAgKytpMjtcclxuICAgICAgICB9IGVsc2UgaWYgKGNtcCA8IDApIHtcclxuICAgICAgICAgICAgKytpMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByMS5wdXNoKGYpO1xyXG4gICAgICAgICAgICArK2kxO1xyXG4gICAgICAgICAgICArK2kyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdoaWxlIChpMiA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGYgPSBhcnJheVtpMl07XHJcbiAgICAgICAgcjIucHVzaChmKTtcclxuICAgICAgICArK2kyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbcjEsIHIyXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyB2YWx1ZXMgZnJvbSB0aGUgJ2FycmF5JyBhbmQgJ3ZhbHVlcycgaW50byBvbmUgc29ydGVkIGFycmF5LlxyXG4gKiBCb3RoICdhcnJheScgYW5kICd2YWx1ZXMnIGFyZSBleHBlY3RlZCB0byBiZSBzb3J0ZWQuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBzb3J0ZWRNZXJnZShbXCJhXCIsIFwiY1wiLCBcImVcIl0sIFtcImJcIiwgXCJkXCIsIFwiZlwiXSwgKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSkgPT0+IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCJdXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkTWVyZ2U8VD4oXHJcbiAgICBhcnJheTogcmVhZG9ubHkgVFtdLFxyXG4gICAgdmFsdWVzOiByZWFkb25seSBUW10sXHJcbiAgICBjb21wYXJlOiAobGVmdDogVCwgcmlnaHQ6IFQpID0+IG51bWJlcixcclxuKTogVFtdIHtcclxuICAgIGxldCBpMSAgICAgICA9IDA7XHJcbiAgICBsZXQgaTIgICAgICAgPSAwO1xyXG4gICAgY29uc3QgcjogVFtdID0gW107XHJcbiAgICB3aGlsZSAoaTEgPCB2YWx1ZXMubGVuZ3RoICYmIGkyIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZjEgID0gdmFsdWVzW2kxXTtcclxuICAgICAgICBjb25zdCBmMiAgPSBhcnJheVtpMl07XHJcbiAgICAgICAgY29uc3QgY21wID0gY29tcGFyZShmMSwgZjIpO1xyXG4gICAgICAgIGlmIChjbXAgPiAwKSB7XHJcbiAgICAgICAgICAgIHIucHVzaChmMik7XHJcbiAgICAgICAgICAgICsraTI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbXAgPCAwKSB7XHJcbiAgICAgICAgICAgIHIucHVzaChmMSk7XHJcbiAgICAgICAgICAgICsraTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgci5wdXNoKGYxKTtcclxuICAgICAgICAgICAgKytpMTtcclxuICAgICAgICAgICAgKytpMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaTEgPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZiA9IHZhbHVlc1tpMV07XHJcbiAgICAgICAgci5wdXNoKGYpO1xyXG4gICAgICAgICsraTE7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaTIgPCBhcnJheS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBmID0gYXJyYXlbaTJdO1xyXG4gICAgICAgIHIucHVzaChmKTtcclxuICAgICAgICArK2kyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByO1xyXG59XHJcbiIsIi8qXHJcbiAqIFRPRE86IFRoaXMgaXMgZGVwcmVjYXRlZC4gTW92ZSB0aGlzIHRvIHZhbGlkYXRvcnNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBNaXNjVmFsaWRhdG9ycyBmcm9tIFwiLi4vdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnNcIjtcclxuXHJcbmNvbnN0IHRpbWVGb3JtYXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICAgSEggIDogXCIoMlswLTNdfFswMV1cXFxcZClcIixcclxuICAgIEggICA6IFwiKDJbMC0zXXxbMDFdP1xcXFxkKVwiLFxyXG4gICAgbW0gIDogXCIoWzAtNV1cXFxcZClcIixcclxuICAgIG0gICA6IFwiKFswLTVdP1xcXFxkKVwiLFxyXG4gICAgTU0gIDogXCIoMFxcXFxkfDFbMC0yXXxcXFxcZClcIixcclxuICAgIE0gICA6IFwiKFsxLTldfDFbMC0yXSlcIixcclxuICAgIHNzICA6IFwiKFswLTVdXFxcXGQpXCIsIC8vIG1tXHJcbiAgICBzICAgOiBcIihbMC01XT9cXFxcZClcIiwgLy8gc3NcclxuICAgIFlZWVk6IFwiKFsxLTldXFxcXGR7MywzfSlcIixcclxuICAgIFlZICA6IFwiKFxcXFxkezIsMn0pXCIsXHJcbiAgICBERCAgOiBcIihbMC0zXVxcXFxkKVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW0EtWl0/W2Etel0rKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXihbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bYS16XSsoW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW2Etel0qKF9bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW0EtWl0qKF9bQS1aXSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXihbYS16XSp8W0EtWl0qKShfW2EtekEtWl0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lRm9ybWF0KHRleHQ6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVGb3JtYXRzKSB7XHJcbiAgICAgICAgaWYgKHRpbWVGb3JtYXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2Uoa2V5LCB0aW1lRm9ybWF0c1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke2Zvcm1hdH0kYCkudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZFBob25lTnVtYmVyfSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBudW0gLSBudW0gdG8gdmFsaWRhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUGhvbmVOdW1iZXIobnVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkUGhvbmVOdW1iZXIobnVtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZEVtYWlsfSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBlbWFpbCAtIGVtYWlsIHRvIHZhbGlkYXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkRW1haWwoZW1haWwpO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCIuL2FycmF5LXV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIFN0cmluZ0NoZWNrZXJzIGZyb20gXCIuL3N0cmluZy1jaGVja2Vyc1wiO1xyXG5cclxuY29uc3QgYWNjZW50ZWRMb3dlckNoYXJhY3RlcnMgPSBcIsSFw6DDocOkw6LDo8Olw6bEg8SHxI3EicSPxJnDqMOpw6vDqsSdxKXDrMOtw6/DrsS1xYLEvsWExYjDssOzw7bFkcO0w7XDsMO4xZvImcWfxaHFncWlyJvFo8Wtw7nDusO8xbHDu8Oxw7/DvcOnxbzFusW+XCI7XHJcbmNvbnN0IG5vcm1hbExvd2VyQ2hhcmFjdGVycyAgID0gXCJhYWFhYWFhYWFjY2NkZWVlZWVnaGlpaWlqbGxubm9vb29vb29vc3Nzc3N0dHR1dXV1dXVueXljenp6XCI7XHJcbmNvbnN0IGFjY2VudGVkQ2hhcmFjdGVycyAgICAgID0gYWNjZW50ZWRMb3dlckNoYXJhY3RlcnMgKyBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycy50b1VwcGVyQ2FzZSgpO1xyXG5jb25zdCBub3JtYWxDaGFyYWN0ZXJzICAgICAgICA9IG5vcm1hbExvd2VyQ2hhcmFjdGVycyArIG5vcm1hbExvd2VyQ2hhcmFjdGVycy50b1VwcGVyQ2FzZSgpO1xyXG5cclxuLyogVE9ETzpcclxuICAgIHN0YXRpYyB1bmRlcnNjb3JlKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBodW1hbml6ZSh3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGFzaGVyaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIC8vZGFzaENhc2UgPSBhLWItYy1kLWVcclxuICAgIC8vZG90Q2FzZSBhLmMuZC52LnMuZFxyXG4gICAgLy9wYXNjYWxDYXNlID0gRm9vQmFyQmF6XHJcbiAgICAvL3BhdGhDYXNlID0gYS9iL2MvZFxyXG4gICAgLy9zbmFrZUNhc2UgPSBhX2JfY19kX1xyXG4gICAgc3RhdGljIGlzVXBwZXIod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzTG93ZXIod29yZCkge1xyXG4gICAgfVxyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFjY2VudGVkQ2hhcmFjdGVycyh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF3b3JkIHx8ICF3b3JkLnJlcGxhY2UpIHtcclxuICAgICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKC8uL2csIChlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFjY2VudGVkQ2hhcmFjdGVycy5pbmRleE9mKGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IG5vcm1hbENoYXJhY3RlcnNbaW5kZXhdIDogZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGN1dFVzaW5nKFwiYWJjZGVmZ2hpalwiLCAxMCkgPT4gYWJjZGVmZ2hpalxyXG4gKiAgY3V0VXNpbmcoXCJhYmNkZWZnaGlqXCIsIDE1KSA9PiBhYmNkZWZnaGlqXHJcbiAqICBjdXRVc2luZyhcImFiY2RlZmdoaWpcIiwgOSkgPT4gYWJjZGVmZy4uLlxyXG4gKiAgY3V0VXNpbmcoXCJhYmNkZWZnaGlqXCIsIDksIFwiLi4uXCIsIGZhbHNlKSA9PiBhYmNkZWZnaGkuLi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXRVc2luZyh0ZXh0OiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCBzdWZmaXggPSBcIi4uLlwiLCBsZW5ndGhJbmNsdWRlU3VmZml4ID0gdHJ1ZSk6IHN0cmluZyB7XHJcbiAgICBpZiAodGV4dC5sZW5ndGggPD0gbWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQuc3Vic3RyKDAsIG1heExlbmd0aCAtIChsZW5ndGhJbmNsdWRlU3VmZml4ID8gc3VmZml4Lmxlbmd0aCAtIDEgOiAwKSkgKyBzdWZmaXg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNDYW1lbENhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpXHJcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAoaSwgdSwgZSkgPT4gZSA/IFwiX1wiICsgZSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTG93ZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0NhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNMb3dlclNuYWtlQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLygtfF98IHxcXHMpKyguKT8vZywgKGksIHUsIGUpID0+IGUgPyBcIl9cIiArIGUgOiBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9eXy8sIFwiXCIpXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNMb3dlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKShbQS1aXSkvZywgXCIkMSQyXyQzXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChtYXRoLCBzZXAsIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChlKSA9PiBlLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9VcHBlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzVXBwZXJDYW1lbENhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9DYXBpdGFsKHRvTG93ZXJDYW1lbENhc2UodGV4dCkpO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGNhcGl0YWxpemUoXCJnYWJvXCIpID0+IEdhYm9cclxuICogIGNhcGl0YWxpemUoXCJHQUJPXCIpID0+IEdhYm9cclxuICogIGNhcGl0YWxpemUoXCJnQUJPXCIpID0+IEdhYm9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL14uLywgKGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIGNhcGl0YWxpemV9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0NhcGl0YWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL14uLywgKGUpID0+IGUudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0UGFydCh0ZXh0OiBzdHJpbmcsIGRpdmlkZXIgPSBcIiBcIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQuc3BsaXQpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNwbGl0VGV4dCA9IHRleHQuc3BsaXQoZGl2aWRlcik7XHJcblxyXG4gICAgcmV0dXJuIHNwbGl0VGV4dFtzcGxpdFRleHQubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIG9jY3VycmVuY2VzfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnQodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHRleHQubWF0Y2gobmV3IFJlZ0V4cChrZXksIFwiZ1wiKSkgfHwgW10pLmxlbmd0aDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB0ZXh0IC0gdGV4dCBuZWVkIHRvIGJlIHJlcGVhdFxyXG4gKiBAcGFyYW0gbnVtYmVyT2ZSZXBldGl0aW9ucyAtIG51bWJlciBvZiBpdGVyYXRpb25zXHJcbiAqIEBkZXByZWNhdGVkIC0gdXNlIHtAbGluayBTdHJpbmcjcmVwZWF0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCh0ZXh0OiBzdHJpbmcsIG51bWJlck9mUmVwZXRpdGlvbnM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KG51bWJlck9mUmVwZXRpdGlvbnMgKyAxKS5qb2luKHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsKHRleHQ6IHN0cmluZywgd29yZHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7d29yZHMuam9pbihcInxcIil9KWAsIFwiZ1wiKSwgXCJcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgdGVtcGxhdGUoXCJ7e25hbWV9fSBpcyB7e2FnZX19IHllYXJzIG9sZFwiLCB7bmFtZTogXCJHYWJyaWVsXCIsIGFnZTogMjN9KSA9PiBHYWJyaWVsIGlzIDIzIHllYXJzIG9sZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKHRleHQ6IHN0cmluZywgdmFsdWVzOiBTdHJpbmdNYXA8dW5rbm93bj4sIHN0YXJ0ID0gXCJ7e1wiLCBlbmQgPSBcIn19XCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdXBkYXRlZFN0YXJ0ID0gc3RhcnQucmVwbGFjZSgvWy1bXFxdKCkqXFxzXS9nLCBcIlxcXFwkJlwiKS5yZXBsYWNlKC9cXCQvZywgXCJcXFxcJFwiKTtcclxuICAgIGNvbnN0IHVwZGF0ZWRFbmQgICA9IGVuZC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG5cclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoXHJcbiAgICAgICAgbmV3IFJlZ0V4cChgJHt1cGRhdGVkU3RhcnR9KC4rPykke3VwZGF0ZWRFbmR9YCwgXCJnXCIpLFxyXG4gICAgICAgIChtYXRoLCBrZXkpID0+IFN0cmluZyh2YWx1ZXNba2V5XSksXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlMaW5lcyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXlxccyokKD86XFxyXFxuP3xcXG4pL2dtLCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBiZXR3ZWVuKFwibXkgbmFtZSBpcyBnYWJyaWVsIGFuZCBJIGFtIDI2IHllYXJzIG9sZFwiLCBcIk5BTUVcIiwgXCJnYWJyaWVsXCIpID0+IFwibXkgbmFtZSBpcyBcIlxyXG4gKiAgYmV0d2VlbihcIm15IG5hbWUgaXMgZ2FicmllbCBhbmQgSSBhbSAyNiB5ZWFycyBvbGRcIiwgXCJuYW1lXCIsIFwiR0FCUklFTFwiKSA9PiBcIiBpcyBnYWJyaWVsIGFuZCBJIGFtIDI2IHllYXJzIG9sZFwiXHJcbiAqICBiZXR3ZWVuKFwibXkgbmFtZSBpcyBnYWJyaWVsIGFuZCBJIGFtIDI2IHllYXJzIG9sZFwiLCBcIm5hbWVcIiwgXCJnYWJyaWVsXCIpID0+IFwiIGlzIFwiXHJcbiAqICBiZXR3ZWVuKFwibXkgbmFtZSBpcyBnYWJyaWVsIGFuZCBJIGFtIDI2IHllYXJzIG9sZFwiLCBcIm5hbWVcIiwgXCJnYWJyaWVsXCIsIHRydWUpID0+IFwiaXNcIlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJldHdlZW4odGV4dDogc3RyaW5nLCBrZXkxOiBzdHJpbmcsIGtleTI6IHN0cmluZywgdHJpbSA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHByb2Nlc3NSZXN1bHQgPSAocmVzdWx0OiBzdHJpbmcpOiBzdHJpbmcgPT4gdHJpbSA/IHJlc3VsdC50cmltKCkgOiByZXN1bHQ7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRQb3MgPSB0ZXh0LmluZGV4T2Yoa2V5MSk7XHJcbiAgICBjb25zdCBlbmRQb3MgICA9IHRleHQuaW5kZXhPZihrZXkyKTtcclxuICAgIGlmIChzdGFydFBvcyA8IDAgJiYgZW5kUG9zID49IDApIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh0ZXh0LnN1YnN0cmluZygwLCBlbmRQb3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW5kUG9zIDwgMCAmJiBzdGFydFBvcyA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQodGV4dC5zdWJzdHJpbmcoc3RhcnRQb3MgKyBrZXkxLmxlbmd0aCwgdGV4dC5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh0ZXh0LnN1YnN0cmluZyhzdGFydFBvcyArIGtleTEubGVuZ3RoLCBlbmRQb3MpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgbnVtYmVyIG9mIG9jY3VycmVuY2VzIG9mIHN1YnN0cmluZ1xyXG4gKiBAdmVyc2lvbiAwLjIuNDAgLSBtdWNoIGZhc3RlciB0aGVuIHByZXZpb3VzIHJlZ2V4IG1ldGhvZCB1c2luZyBgcmV0dXJuICh0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoa2V5LCBcImdcIikpIHx8IFtdKS5sZW5ndGg7YFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgb2NjdXJyZW5jZXMoXCJmb29mb29mb29cIiwgXCJiYXJcIik7ID0+IDBcclxuICogIG9jY3VycmVuY2VzKFwiZm9vZm9vZm9vXCIsIFwiZm9vXCIpOyA9PiAzXHJcbiAqICBvY2N1cnJlbmNlcyhcImZvb2Zvb2Zvb1wiLCBcImZvb2Zvb1wiKTsgPT4gMVxyXG4gKiAgb2NjdXJyZW5jZXMoXCJmb29mb29mb29cIiwgXCJmb29mb29cIiwgdHJ1ZSk7ID0+IDJcclxuICogQHBhcmFtIHRleHQgLSB0ZXh0XHJcbiAqIEBwYXJhbSBrZXkgLSBzZWFyY2hlZCBzdWJzdHJpbmdcclxuICogQHBhcmFtIG92ZXJsYXBwaW5nIC0gYWxsb3dzIG1hdGggb3ZlcmxhcHBpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvY2N1cnJlbmNlcyh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nLCBvdmVybGFwcGluZyA9IGZhbHNlKTogbnVtYmVyIHtcclxuICAgIGxldCBpbmRleCAgID0gdGV4dC5pbmRleE9mKGtleSk7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICBjb25zdCBzdGVwICA9IG92ZXJsYXBwaW5nID8gMSA6IGtleS5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICBpbmRleCA9IHRleHQuaW5kZXhPZihrZXksIGluZGV4ICsgc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZVdoaXRlc3BhY2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1tcXHNcXHVGRUZGXFx4QTBdezIsfS9nLCBcIiBcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2FwQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFxTL2csIChjaGFyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG93ZXJDYXNlID0gY2hhci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbG93ZXJDYXNlID09PSBjaGFyID8gY2hhci50b1VwcGVyQ2FzZSgpIDogbG93ZXJDYXNlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgZm9ybWF0VGltZShcInt9IGlzIGEgYmlnIHt9XCIsIFtcIkdhYm9cIiwgXCJoZXJvXCJdKSA9PiBHYWJvIGlzIGEgYmlnIGhlcm9cclxuICogIGZvcm1hdFRpbWUoXCI8PiBpcyBhIGJpZyA8PlwiLCBbXCJHYWJvXCIsIFwiaGVyb1wiXSwgXCI8PlwiKSA9PiBHYWJvIGlzIGEgYmlnIGhlcm9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodGV4dDogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCBwbGFjZUhvbGRlciA9IFwie31cIik6IHN0cmluZyB7XHJcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBsZXQgbGFzdEluZGV4O1xyXG4gICAgbGV0IGFjdHVhbEluZGV4ICAgICAgICA9IDA7XHJcbiAgICBsZXQgY291bnRlciAgICAgICAgICAgID0gMDtcclxuXHJcbiAgICB3aGlsZSAoY291bnRlciA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICBsYXN0SW5kZXggICA9IGFjdHVhbEluZGV4O1xyXG4gICAgICAgIGFjdHVhbEluZGV4ID0gdGV4dC5pbmRleE9mKHBsYWNlSG9sZGVyLCBhY3R1YWxJbmRleCk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2godGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBhY3R1YWxJbmRleCkpO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlc1tjb3VudGVyKytdKTtcclxuICAgICAgICBhY3R1YWxJbmRleCArPSBwbGFjZUhvbGRlci5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXN1bHQucHVzaCh0ZXh0LnN1YnN0cmluZyhhY3R1YWxJbmRleCkpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVRvQmFzaWNGb3JtYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBjb2xsYXBzZVdoaXRlc3BhY2UocmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQpLnRvTG93ZXJDYXNlKCkpLnRyaW0oKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBnZXRBc2NpaUFycmF5KFwiYWJjZGVmZ1wiKSA9PT4gWzk3LCA5OCwgOTksIDEwMCwgMTAxLCAxMDIsIDEwM11cclxuICogQHBhcmFtIHRoaXNBcmcgLSBhcmd1bWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzY2lpQXJyYXkodGhpc0FyZzogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGxldHRlciBvZiB0aGlzQXJnKSB7XHJcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gbGV0dGVyLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQmFzaWNGb3JtKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyh0ZXh0OiBzdHJpbmcsIHN1YnN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0ZXh0ICYmIHJlbW92ZUFjY2VudGVkQ2hhcmFjdGVycyh0ZXh0LnRvTG93ZXJDYXNlKCkpLmluZGV4T2Yoc3Vic3RyaW5nKSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGpvaW5TaW5nbGUoXCJwYWNrYWdlXCIsIFwiLlwiLCBcImpzb25cIikgPT4gcGFja2FnZS5qc29uXHJcbiAqICBqb2luU2luZ2xlKFwicGFja2FnZS5cIiwgXCIuXCIsIFwianNvblwiKSA9PiBwYWNrYWdlLmpzb25cclxuICogIGpvaW5TaW5nbGUoXCJwYWNrYWdlXCIsIFwiLlwiLCBcIi5qc29uXCIpID0+IHBhY2thZ2UuanNvblxyXG4gKiAgam9pblNpbmdsZShcInBhY2thZ2UuXCIsIFwiLlwiLCBcIi5qc29uXCIpID0+IHBhY2thZ2UuanNvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5TaW5nbGUocHJlZml4OiBzdHJpbmcsIGRpdmlkZXI6IHN0cmluZywgcG9zdGZpeDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChwb3N0Zml4LnN0YXJ0c1dpdGgoZGl2aWRlcikgJiYgcHJlZml4LmVuZHNXaXRoKGRpdmlkZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHBvc3RmaXguc3Vic3RyaW5nKGRpdmlkZXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdGZpeC5zdGFydHNXaXRoKGRpdmlkZXIpIHx8IHByZWZpeC5lbmRzV2l0aChkaXZpZGVyKSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBwb3N0Zml4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmVmaXggKyBkaXZpZGVyICsgcG9zdGZpeDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgam9pbn0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gZGF0YSAtIGRhdGEgdG8gam9pblxyXG4gKiBAcGFyYW0gZGVsaW1pdGVyIC0gZGVsaW1pdGVyXHJcbiAqIEBwYXJhbSBwcmVmaXggLSBwcmVmaXhcclxuICogQHBhcmFtIHBvc3RmaXggLSBwb3N0Zml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pblN0cmluZyhkYXRhOiBzdHJpbmdbXSwgZGVsaW1pdGVyID0gXCIgXCIsIHByZWZpeCA9IFwiXCIsIHBvc3RmaXggPSBcIlwiKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBqb2luKGRhdGEsIGRlbGltaXRlciwgcHJlZml4LCBwb3N0Zml4KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZE51bWJlcihudW06IHN0cmluZywgcHJlZml4ID0gXCIrNDIxXCIpOiBzdHJpbmcge1xyXG4gICAgbnVtID0gbnVtLnJlcGxhY2UoL1soICkvLV0vZywgXCJcIik7XHJcbiAgICBpZiAobnVtLnN0YXJ0c1dpdGgoXCIrXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIjAwXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bS5zdWJzdHJpbmcoMik7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtLnN0YXJ0c1dpdGgoXCIwOVwiKSB8fCBudW0uc3RhcnRzV2l0aChcIjAyXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIG51bS5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnV6enlfbWF0Y2hfc2ltcGxlKHBhdHRlcm46IHN0cmluZywgc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBwYXR0ZXJuSWR4ICAgICAgPSAwO1xyXG4gICAgbGV0IHN0cklkeCAgICAgICAgICA9IDA7XHJcbiAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XHJcbiAgICBjb25zdCBzdHJMZW5ndGggICAgID0gc3RyLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAocGF0dGVybklkeCAhPT0gcGF0dGVybkxlbmd0aCAmJiBzdHJJZHggIT09IHN0ckxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5DaGFyID0gcGF0dGVybi5jaGFyQXQocGF0dGVybklkeClcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3Qgc3RyQ2hhciAgICAgPSBzdHIuY2hhckF0KHN0cklkeClcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHBhdHRlcm5DaGFyID09PSBzdHJDaGFyKSB7XHJcbiAgICAgICAgICAgICsrcGF0dGVybklkeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKytzdHJJZHg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdHRlcm5MZW5ndGggIT09IDAgJiYgc3RyTGVuZ3RoICE9PSAwICYmIHBhdHRlcm5JZHggPT09IHBhdHRlcm5MZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRm9yQWxsKGNvbnRlbnQ6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSwgcGxhY2VIb2xkZXI6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gY29udGVudC5yZXBsYWNlKHBsYWNlSG9sZGVyLCB2YWx1ZSkpO1xyXG59XHJcbiIsImNvbnN0IHN2Z25zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2ZzxUIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KHR5cGU6IFQpOiBTVkdFbGVtZW50VGFnTmFtZU1hcFtUXSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCB0eXBlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZm9ybShzZWxlY3RlZEVsZW1lbnQ6IFNWR0dyYXBoaWNzRWxlbWVudCk6IFNWR1RyYW5zZm9ybSB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1zID0gc2VsZWN0ZWRFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsO1xyXG4gICAgaWYgKHRyYW5zZm9ybXMubnVtYmVyT2ZJdGVtcyA9PT0gMCB8fFxyXG4gICAgICAgIHRyYW5zZm9ybXMuZ2V0SXRlbSgwKS50eXBlICE9PSBTVkdUcmFuc2Zvcm0uU1ZHX1RSQU5TRk9STV9UUkFOU0xBVEUpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSAoc2VsZWN0ZWRFbGVtZW50Lm93bmVyU1ZHRWxlbWVudCBhcyBTVkdTVkdFbGVtZW50KS5jcmVhdGVTVkdUcmFuc2Zvcm0oKTtcclxuICAgICAgICB0cmFuc2xhdGUuc2V0VHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudC50cmFuc2Zvcm0uYmFzZVZhbC5pbnNlcnRJdGVtQmVmb3JlKHRyYW5zbGF0ZSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybXMuZ2V0SXRlbSgwKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG5jb25zdCBpbnRlcnZhbHM6IFN0cmluZ01hcDxudW1iZXI+ID0ge1xyXG4gICAgXCJ5ZWFyXCIgIDogMzE1MzYwMDAsXHJcbiAgICBcIm1vbnRoXCIgOiAyNTkyMDAwLFxyXG4gICAgXCJ3ZWVrXCIgIDogNjA0ODAwLFxyXG4gICAgXCJkYXlcIiAgIDogODY0MDAsXHJcbiAgICBcImhvdXJcIiAgOiAzNjAwLFxyXG4gICAgXCJtaW51dGVcIjogNjAsXHJcbiAgICBcInNlY29uZFwiOiAxLFxyXG59O1xyXG5cclxuY29uc3QgaW50ZXJ2YWxFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoaW50ZXJ2YWxzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRlQWdvKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlKTogbnVtYmVyIHwgc3RyaW5nIHwgRGF0ZSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoK25ldyBEYXRlKCkgLSArbmV3IERhdGUodmFsdWUpKSAvIDEwMDApO1xyXG4gICAgICAgIGlmIChzZWNvbmRzIDwgMjkpIHsgLy8gbGVzcyB0aGFuIDMwIHNlY29uZHMgYWdvIHdpbGwgc2hvdyBhcyAnSnVzdCBub3cnXHJcbiAgICAgICAgICAgIHJldHVybiBcIkp1c3Qgbm93XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb3VudGVyO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgaW50ZXJ2YWxdIG9mIGludGVydmFsRW50cmllcykge1xyXG4gICAgICAgICAgICBjb3VudGVyID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBpZiAoY291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnRlciA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2NvdW50ZXJ9ICR7a2V5fSBhZ29gOyAvLyBzaW5ndWxhciAoMSBkYXkgYWdvKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCR7Y291bnRlcn0gJHtrZXl9cyBhZ29gOyAvLyBwbHVyYWwgKDIgZGF5cyBhZ28pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0ZTogRGF0ZSwgcGF0dGVybjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKHRpbWU6IG51bWJlcik6IHN0cmluZyA9PiB0aW1lIDwgMTAgPyBcIjBcIiArIHRpbWUgOiBcIlwiICsgdGltZTtcclxuXHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXCIoRER8TU18WVlZWXxZWVl8WVl8SEh8bW18U1MpXCIsIFwiZ1wiKTtcclxuICAgIGNvbnN0IEREICAgID0gdG9TdHJpbmcoZGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgY29uc3QgTU0gICAgPSB0b1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuICAgIGNvbnN0IFlZWVkgID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIjtcclxuICAgIGNvbnN0IFlZWSAgID0gWVlZWS5zdWJzdHIoMSwgNCk7XHJcbiAgICBjb25zdCBZWSAgICA9IFlZWS5zdWJzdHIoMSwgNCk7XHJcbiAgICBjb25zdCBISCAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSk7XHJcbiAgICBjb25zdCBtbSAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIGNvbnN0IFNTICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG5cclxuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UocmVnZXgsIChlKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEREO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU1cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNTTtcclxuICAgICAgICAgICAgY2FzZSBcIllZWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWVlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlZXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWVlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWTtcclxuICAgICAgICAgICAgY2FzZSBcIkhIXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSEg7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtbVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1tO1xyXG4gICAgICAgICAgICBjYXNlIFwiU1NcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9wV2F0Y2goKTogeyBnZXREaWZmTXMoKTogbnVtYmVyOyBnZXREaWZmKCk6IHN0cmluZyB9IHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICBjb25zdCBnZXREaWZmTXMgPSAoKTogbnVtYmVyID0+IERhdGUubm93KCkgLSBzdGFydDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldERpZmZNcyxcclxuICAgICAgICBnZXREaWZmKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXREaWZmTXMoKSArIFwibXNcIjtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlOiBEYXRlLCBvcHQ6IHsgbXM6IG51bWJlciwgczogbnVtYmVyLCBtOiBudW1iZXIsIGg6IG51bWJlciB9KTogRGF0ZSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc05hTihvcHQubXMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHMob3B0Lm1zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LnMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKG9wdC5zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0Lm0pKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKG9wdC5tKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LmgpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhvcHQuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydE9mVGhlRGF5KGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIHJldHVybiBzZXREYXRlKGRhdGUsIHtcclxuICAgICAgICBtczogMCxcclxuICAgICAgICBzIDogMCxcclxuICAgICAgICBtIDogMCxcclxuICAgICAgICBoIDogMCxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kT2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge1xyXG4gICAgICAgIG1zOiA5OTksXHJcbiAgICAgICAgcyA6IDU5LFxyXG4gICAgICAgIG0gOiA1OSxcclxuICAgICAgICBoIDogMjMsXHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9taXNjLXZhbGlkYXRvcnNcIjtcclxuIiwiY29uc3QgdmFsaWRFbWFpbFJlZ2V4ICAgICAgID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbmNvbnN0IHZhbGlkUGhvbmVOdW1iZXJSZWdleCA9IC9eKFsrXXwwMCk/WyhdP1swLTldezMsNH1bKV0/Wy1cXHMuXT9bMC05XXsyLDN9Wy1cXHMuXT9bMC05XXsyLDZ9KFstXFxzLl0/WzAtOV17M30pPyQvaW07XHJcblxyXG5mdW5jdGlvbiB0eXBlT2YoYXJnOiB1bmtub3duKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgYXJnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhhcmc6IGFueSk6IGFyZyBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcInN0cmluZ1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJvYmplY3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGFyZzogYW55KTogYXJnIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oYXJnOiBhbnkpOiBhcmcgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwiYm9vbGVhblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCIgJiYgYXJnICUgMSA9PT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmxvYXQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxICE9PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnPzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwidW5kZWZpbmVkXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChvYmopICYmXHJcbiAgICAgICAgICAgIG9iai5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICBpc09iamVjdChvYmouc3R5bGUpICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5vd25lckRvY3VtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCAvXltcXHNcXHhhMF0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIW51bSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRQaG9uZU51bWJlclJlZ2V4LnRlc3QobnVtLnRyaW0oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZW1haWwudHJpbSgpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==