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

/***/ 5839:
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
__exportStar(__webpack_require__(3323), exports);
__exportStar(__webpack_require__(9572), exports);
__exportStar(__webpack_require__(5988), exports);
__exportStar(__webpack_require__(4620), exports);
__exportStar(__webpack_require__(4000), exports);
__exportStar(__webpack_require__(3670), exports);
__exportStar(__webpack_require__(4574), exports);
__exportStar(__webpack_require__(3675), exports);
__exportStar(__webpack_require__(5906), exports);
__exportStar(__webpack_require__(6074), exports);
__exportStar(__webpack_require__(5776), exports);
__exportStar(__webpack_require__(508), exports);
__exportStar(__webpack_require__(5312), exports);
__exportStar(__webpack_require__(7584), exports);
__exportStar(__webpack_require__(5667), exports);
__exportStar(__webpack_require__(8835), exports);
__exportStar(__webpack_require__(1130), exports);
__exportStar(__webpack_require__(1103), exports);
__exportStar(__webpack_require__(8114), exports);
__exportStar(__webpack_require__(4861), exports);
__exportStar(__webpack_require__(6833), exports);


/***/ }),

/***/ 1628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManager = void 0;
var file_types_enum_1 = __webpack_require__(6005);
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

/***/ 2235:
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

/***/ 5906:
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
exports.GLoggerInstance = exports.GLoggerCallbackHolder = exports.GLoggerDefaultFormatter = exports.GLoggerPriority = void 0;
__exportStar(__webpack_require__(1628), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(2235), exports);
__exportStar(__webpack_require__(8917), exports);
__exportStar(__webpack_require__(4715), exports);
__exportStar(__webpack_require__(5826), exports);
var g_logger_priority_1 = __webpack_require__(6466);
Object.defineProperty(exports, "GLoggerPriority", ({ enumerable: true, get: function () { return g_logger_priority_1.GLoggerPriority; } }));
var g_logger_default_formatter_1 = __webpack_require__(604);
Object.defineProperty(exports, "GLoggerDefaultFormatter", ({ enumerable: true, get: function () { return g_logger_default_formatter_1.GLoggerDefaultFormatter; } }));
var g_logger_callback_holder_1 = __webpack_require__(90);
Object.defineProperty(exports, "GLoggerCallbackHolder", ({ enumerable: true, get: function () { return g_logger_callback_holder_1.GLoggerCallbackHolder; } }));
var g_logger_instance_1 = __webpack_require__(5257);
Object.defineProperty(exports, "GLoggerInstance", ({ enumerable: true, get: function () { return g_logger_instance_1.GLoggerInstance; } }));


/***/ }),

/***/ 8917:
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

/***/ 90:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerCallbackHolder = void 0;
var g_logger_default_formatter_1 = __webpack_require__(604);
var g_logger_priority_1 = __webpack_require__(6466);
var GLoggerCallbackHolder = (function () {
    function GLoggerCallbackHolder(callbacks) {
        this.callbacks = callbacks;
    }
    GLoggerCallbackHolder.createConsoleCallbacks = function (formatter) {
        var _a;
        if (formatter === void 0) { formatter = new g_logger_default_formatter_1.GLoggerDefaultFormatter(); }
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

/***/ 604:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerDefaultFormatter = void 0;
var utils_1 = __webpack_require__(6833);
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
        var result = [this.getOutputArray(priority, data, context, true).join(" ")];
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
    GLoggerDefaultFormatter.prototype.getOutputArray = function (priority, data, context, addColorPrefix) {
        if (addColorPrefix === void 0) { addColorPrefix = false; }
        var partials = [];
        var prefix = addColorPrefix ? "%c" : "";
        if (this.showPriority) {
            partials.push(prefix + "[" + priority + "]");
        }
        if (this.showContext && context) {
            partials.push(prefix + context + ":");
        }
        if (this.showTime) {
            partials.push(prefix + "[" + new Date().toISOString() + "]");
        }
        if (this.showTimeOffset) {
            var now = Date.now();
            partials.push("" + prefix + utils_1.dateAgo(now - this.lastFormatTime));
            this.lastFormatTime = now;
        }
        partials.push.apply(partials, data.map(function (item, index) { return index === 0 ? prefix + item : item; }));
        return partials;
    };
    return GLoggerDefaultFormatter;
}());
exports.GLoggerDefaultFormatter = GLoggerDefaultFormatter;


/***/ }),

/***/ 5257:
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
var g_logger_1 = __webpack_require__(11);
var g_logger_priority_1 = __webpack_require__(6466);
var GLoggerInstance = (function () {
    function GLoggerInstance(context, loggerCallbacks) {
        this.context = context;
        this.loggerCallbacks = loggerCallbacks;
    }
    GLoggerInstance.localPrint = function (type, data, callbacks, context) {
        callbacks.getCallback(type)(data, context);
    };
    GLoggerInstance.prototype.setLogCallback = function (priority, callback) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.setCallback(priority, callback);
    };
    GLoggerInstance.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        g_logger_1.GLogger.print.apply(g_logger_1.GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.LOG, this.context], messages));
    };
    GLoggerInstance.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        g_logger_1.GLogger.print.apply(g_logger_1.GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.WARN, this.context], messages));
    };
    GLoggerInstance.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        g_logger_1.GLogger.print.apply(g_logger_1.GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.ERROR, this.context], messages));
    };
    return GLoggerInstance;
}());
exports.GLoggerInstance = GLoggerInstance;


/***/ }),

/***/ 6466:
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

/***/ 11:
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
var g_logger_callback_holder_1 = __webpack_require__(90);
var g_logger_instance_1 = __webpack_require__(5257);
var g_logger_priority_1 = __webpack_require__(6466);
var GLogger = (function (_super) {
    __extends(GLogger, _super);
    function GLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    GLogger.getContextString = function (context) {
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
    GLogger.prototype.extends = function (subContext) {
        var currentContext = GLogger.getContextString(this.context);
        return new GLogger(currentContext ? currentContext + ":" + subContext : subContext);
    };
    GLogger.staticCallbacks = g_logger_callback_holder_1.GLoggerCallbackHolder.createConsoleCallbacks();
    GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    GLogger.skipRegexp = new RegExp("" + GLogger.skipContexts.join("|"), "gi");
    return GLogger;
}(g_logger_instance_1.GLoggerInstance));
exports.GLogger = GLogger;


/***/ }),

/***/ 4715:
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

/***/ 5826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Paginator = void 0;
var gtools_config_1 = __webpack_require__(5988);
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

/***/ 9572:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5988:
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

/***/ 6141:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS = void 0;
exports.ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS = true;


/***/ }),

/***/ 9318:
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

/***/ 1046:
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

/***/ 4620:
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
__exportStar(__webpack_require__(9318), exports);
__exportStar(__webpack_require__(1046), exports);
__exportStar(__webpack_require__(693), exports);
__exportStar(__webpack_require__(5055), exports);
__exportStar(__webpack_require__(3899), exports);


/***/ }),

/***/ 693:
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

/***/ 5055:
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

/***/ 3899:
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

/***/ 4000:
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
var errors_1 = __webpack_require__(6074);
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

/***/ 3670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasUtils = void 0;
var canvas_manager_1 = __webpack_require__(4000);
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

/***/ 4574:
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

/***/ 3675:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8998:
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

/***/ 2557:
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

/***/ 1903:
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

/***/ 6005:
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

/***/ 7826:
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

/***/ 3323:
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
__exportStar(__webpack_require__(8998), exports);
__exportStar(__webpack_require__(2557), exports);
__exportStar(__webpack_require__(1903), exports);
__exportStar(__webpack_require__(6005), exports);
__exportStar(__webpack_require__(7826), exports);
__exportStar(__webpack_require__(8224), exports);


/***/ }),

/***/ 8224:
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

/***/ 6074:
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
__exportStar(__webpack_require__(2089), exports);
__exportStar(__webpack_require__(7614), exports);
__exportStar(__webpack_require__(3761), exports);
__exportStar(__webpack_require__(2501), exports);
__exportStar(__webpack_require__(2357), exports);
__exportStar(__webpack_require__(5829), exports);


/***/ }),

/***/ 2501:
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

/***/ 2357:
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

/***/ 2089:
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

/***/ 7614:
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

/***/ 3761:
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

/***/ 5829:
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

/***/ 8022:
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
__exportStar(__webpack_require__(5839), exports);


/***/ }),

/***/ 5312:
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
__exportStar(__webpack_require__(7264), exports);
__exportStar(__webpack_require__(6606), exports);
__exportStar(__webpack_require__(5413), exports);
__exportStar(__webpack_require__(6900), exports);
__exportStar(__webpack_require__(4932), exports);
__exportStar(__webpack_require__(3388), exports);
__exportStar(__webpack_require__(4777), exports);
__exportStar(__webpack_require__(4261), exports);


/***/ }),

/***/ 7264:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5413:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6900:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4932:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
var models_1 = __webpack_require__(5667);
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

/***/ 3388:
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

/***/ 4777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
var vector2_1 = __webpack_require__(4932);
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

/***/ 4261:
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

/***/ 4701:
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

/***/ 1281:
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

/***/ 508:
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
__exportStar(__webpack_require__(4115), exports);
__exportStar(__webpack_require__(4701), exports);
__exportStar(__webpack_require__(1281), exports);
__exportStar(__webpack_require__(6546), exports);


/***/ }),

/***/ 6546:
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

/***/ 4115:
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

/***/ 8718:
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
var utils_1 = __webpack_require__(6833);
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

/***/ 9878:
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

/***/ 5667:
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
__exportStar(__webpack_require__(9878), exports);
__exportStar(__webpack_require__(8718), exports);
__exportStar(__webpack_require__(1317), exports);
__exportStar(__webpack_require__(3727), exports);


/***/ }),

/***/ 3727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range = void 0;
var utils_1 = __webpack_require__(6833);
var color_model_1 = __webpack_require__(8718);
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

/***/ 1317:
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

/***/ 8620:
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

/***/ 462:
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

/***/ 1847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointCircle2dCollision = exports.pointRectMinMax2dCollision = exports.pointRect2dCollision = exports.circleCircle2dCollision = exports.rectRect2dCollision = exports.lineLine2dCollision = exports.lineRectangle2dCollision = exports.circleRect2dCollision = void 0;
var distances_2d_1 = __webpack_require__(2653);
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

/***/ 7656:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testSphereBoxMinMax = exports.sphereCylinder = exports.pointCylinder = exports.lineEllipsoid = exports.pointEllipsoid = exports.boxBox = exports.lineSphere2 = exports.lineBox = exports.pointBoxMinMax = exports.pointBox = exports.lineBox2 = exports.IntersectionType = exports.lineSphere = exports.pointSphere = exports.sphereSphere = void 0;
var math_1 = __webpack_require__(5312);
var closest_3d_1 = __webpack_require__(462);
var distances_2d_1 = __webpack_require__(2653);
var distances_3d_1 = __webpack_require__(8707);
var intersects_3d_1 = __webpack_require__(4022);
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

/***/ 2653:
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

/***/ 8707:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vectorPoint3dDistance = exports.pointNormalPlane3dDistance = exports.pointLine3dDistance = exports.pointPointSqr3dDistance = exports.pointPoint3dDistance = void 0;
var math_1 = __webpack_require__(5312);
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

/***/ 7584:
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
__exportStar(__webpack_require__(8620), exports);
__exportStar(__webpack_require__(462), exports);
__exportStar(__webpack_require__(1847), exports);
__exportStar(__webpack_require__(7656), exports);
__exportStar(__webpack_require__(2653), exports);
__exportStar(__webpack_require__(8707), exports);
__exportStar(__webpack_require__(4022), exports);


/***/ }),

/***/ 4022:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vectorSquareIntersect3d_2 = exports.vectorSquareIntersect3d = void 0;
var math_1 = __webpack_require__(5312);
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

/***/ 8835:
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
var abstract_fixture_1 = __webpack_require__(1130);
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

/***/ 1130:
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

/***/ 1103:
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

/***/ 8114:
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

/***/ 4459:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4861:
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
__exportStar(__webpack_require__(4459), exports);
__exportStar(__webpack_require__(7953), exports);
__exportStar(__webpack_require__(6279), exports);
__exportStar(__webpack_require__(567), exports);
__exportStar(__webpack_require__(9181), exports);
__exportStar(__webpack_require__(9492), exports);
__exportStar(__webpack_require__(4059), exports);
__exportStar(__webpack_require__(7191), exports);
__exportStar(__webpack_require__(6424), exports);
__exportStar(__webpack_require__(3896), exports);
__exportStar(__webpack_require__(6937), exports);
__exportStar(__webpack_require__(5632), exports);
__exportStar(__webpack_require__(2187), exports);
__exportStar(__webpack_require__(4347), exports);
__exportStar(__webpack_require__(4912), exports);
__exportStar(__webpack_require__(1248), exports);
__exportStar(__webpack_require__(2107), exports);
__exportStar(__webpack_require__(6170), exports);


/***/ }),

/***/ 7953:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 1248:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6279:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9181:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9492:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4059:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2187:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4347:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2107:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7191:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6424:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 3896:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6937:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5632:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6170:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4912:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5028:
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

/***/ 7962:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eachOther = exports.makeUnique = exports.getNRandom = exports.getRandomItem = exports.getLast = exports.join = exports.avg = exports.sum = exports.min = exports.max = exports.subArray = exports.where = void 0;
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

/***/ 6028:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.coerceBooleanProperty = void 0;
function coerceBooleanProperty(value) {
    return value !== null && "" + value !== "false";
}
exports.coerceBooleanProperty = coerceBooleanProperty;


/***/ }),

/***/ 7727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseColor = exports.rgb2int = exports.hex2int = exports.int2rgb = exports.int2hex = exports.rgb2hex = exports.shadeColor = exports.hex2rgb = exports.lerpHexaColor = exports.lerpColor = void 0;
var math_utils_1 = __webpack_require__(8132);
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

/***/ 2917:
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

/***/ 447:
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
var constants_1 = __webpack_require__(6141);
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

/***/ 898:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createImage = exports.deserializeImage = exports.serializeImage = void 0;
var html_utils_1 = __webpack_require__(447);
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

/***/ 6833:
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
__exportStar(__webpack_require__(5028), exports);
__exportStar(__webpack_require__(7962), exports);
__exportStar(__webpack_require__(6028), exports);
__exportStar(__webpack_require__(7727), exports);
__exportStar(__webpack_require__(2917), exports);
__exportStar(__webpack_require__(447), exports);
__exportStar(__webpack_require__(898), exports);
__exportStar(__webpack_require__(8132), exports);
__exportStar(__webpack_require__(5140), exports);
__exportStar(__webpack_require__(7652), exports);
__exportStar(__webpack_require__(2932), exports);
__exportStar(__webpack_require__(1265), exports);
__exportStar(__webpack_require__(4086), exports);
__exportStar(__webpack_require__(4664), exports);
__exportStar(__webpack_require__(9646), exports);
__exportStar(__webpack_require__(990), exports);
__exportStar(__webpack_require__(6131), exports);
__exportStar(__webpack_require__(1807), exports);


/***/ }),

/***/ 2932:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compareEventKey = exports.getButtonFromEventButtons = exports.getButtonFromEvent = void 0;
var enums_1 = __webpack_require__(3323);
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

/***/ 8132:
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
var Random = __importStar(__webpack_require__(990));
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

/***/ 5140:
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

/***/ 1265:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeFlat = exports.isPlain = exports.size = exports.roughSizeOfObject = exports.setNestedProperty = exports.getNestedProperty = exports.getObjectEntries = exports.without = void 0;
function without(obj, items) {
    return getObjectEntries(obj).filter(function (entry) { return !items.includes(entry.key); })
        .reduce(function (prev, entry) {
        prev[entry.key] = entry.value;
        return prev;
    }, {});
}
exports.without = without;
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

/***/ 4086:
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

/***/ 4664:
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

/***/ 990:
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

/***/ 9646:
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

/***/ 8592:
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
var MiscValidators = __importStar(__webpack_require__(1025));
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

/***/ 6131:
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
var array_utils_1 = __webpack_require__(7962);
var StringCheckers = __importStar(__webpack_require__(8592));
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

/***/ 1807:
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

/***/ 7652:
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

/***/ 5776:
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
__exportStar(__webpack_require__(1025), exports);


/***/ }),

/***/ 1025:
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
/******/ 	return __webpack_require__(8022);
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2ctbWFwLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2tleS12YWx1ZS1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLWRlZmF1bHQtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9sb2dnZXIvZy1sb2dnZXItcHJpb3JpdHkudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL251bWJlci1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uZmlnL2d0b29scy1jb25maWcudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9kZXByZWNhdGVkLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9maW5hbC1jbGFzcy5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvbWFwcGVyLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9zaW5nbGV0b24uZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3dhdGNoLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZG9tL2NhbnZhcy1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZG9tLWdldC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvYnV0dG9uLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2RheXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvZW5jb2RpbmdzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2ZpbGUtdHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaHR0cC1zdGF0dXMtY29kZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2tleXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbWlzc2luZy1wYXJhbWV0ZXIuZXJyb3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy9uby1kYXRhYmFzZS1jb25uZWN0aW9uLmVycm9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbnVsbC1wb2ludGVyLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL3dyb25nLXBhcmFtZXRlci5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy93cm9uZy10eXBlLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IyZi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tYXRoL3ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvYWpheC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9maWxlLXNpemUtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3J1bnRpbWUtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zbG92YWstc3RlbW1lci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL2NvbG9yLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvZ2VuZGVyLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy9yYW5nZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9jbG9zZXN0LTJkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2Nsb3Nlc3QtM2QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvY29sbGlzaW9ucy0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9jb2xsaXNpb25zLTNkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2Rpc3RhbmNlcy0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9kaXN0YW5jZXMtM2QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvaW50ZXJzZWN0cy0zZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QtZGF0YWJhc2UuZml4dHVyZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QuZml4dHVyZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QubWFwcGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9wYWdpbmF0ZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2FuYWx5dGljcy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvYXJyYXktdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2NvZXJjZS11dGlsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9jb2xvci11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGF0ZS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaHRtbC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaW1hZ2UtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9pbnB1dC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWF0aC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWlzYy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvb2JqZWN0LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9wYXJzZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3Byb2Nlc3MtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3JhbmRvbS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcmVmbGVjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3RyaW5nLWNoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3N2Zy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvdGltZS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdmFsaWRhdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0c0M0xpYi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7UUFDekIsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUN4QixFQUFFO1FBQ0MsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1AsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNqQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUVwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDM0IsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1AsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNoQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUluQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUN0QixFQUFFO1FBQ0gsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1AsQ0FDSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxD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SyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxH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T0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxRDtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0lBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTtRQUM5QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUMxQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFqQkQsMEJBaUJDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsR0FBVztJQUMxQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ04sT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxPQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBTkQsZ0RBTUM7QUFFRCxTQUFnQixZQUFZLENBQUMsS0FBYTtJQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQU5ELG9DQU1DOzs7Ozs7O1VDdkZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZzQzLWxpYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRzQzTGliXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkc0M0xpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgKiBmcm9tIFwiLi9lbnVtc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnL2d0b29scy1jb25maWcuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kZWNvcmF0b3JzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9jYW52YXMtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9kb20tZ2V0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS90eXBlcy9jYW52YXMtc2hhZG93LWNvbmZpZ1wiO1xyXG5cclxuLy8gVE9ETyBub3Qgd29yayBvbiBiYWNrZW5kXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2RvbS9lbGVtZW50LWJ1aWxkZXJcIjtcclxuXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9lcnJvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZhbGlkYXRvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2NcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9waHlzaWNzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5tYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvcGFnaW5hdGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzXCI7XHJcbiIsImltcG9ydCB7IEZpbGVUeXBlcyB9IGZyb20gXCIuLi9lbnVtcy9maWxlLXR5cGVzLmVudW1cIjtcclxuXHJcbi8qKlxyXG4gKiAgRmlsZU1hbmFnZXIgaXMgY2xhc3MgdXNlZCBmb3Igb3BlbiBhbmQgc2F2ZSBmaWxlc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciB1cGxvYWQgZmlsZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIC8qKlxyXG4gICAgICogcHJpdmF0ZSBpbnB1dCB1c2VkIGZvciBvcGVuaW5nIHN5c3RlbSB3aW5kb3cgZm9yIGRvd25sb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGluazogSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcclxuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZmlsZXNcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIHRleHQgY29udGVudCBpbnRvIGZpbGUgd2l0aCBzcGVjaWZpYyBleHRlbnNpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgZmlsZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBmaWxlIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSB0eXBlIGZpbGUge0BsaW5rIEZpbGVUeXBlc30uIERlZmF1bHQgdmFsdWUgaXMge0BsaW5rIEZpbGVUeXBlcy5UWFR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlRmlsZShuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgdHlwZTogRmlsZVR5cGVzID0gRmlsZVR5cGVzLlRYVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3RleHRdLCB7dHlwZX0pKTtcclxuICAgICAgICB0aGlzLmxpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluay5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSBpbWFnZSBpbnRvIGZpbGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBpbWFnZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW1hZ2UgaW1hZ2UgZWxlbWVudCBvciBwYXRoIHRvIGltYWdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlSW1hZ2UobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nIHwgSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGltYWdlIDogaW1hZ2Uuc3JjO1xyXG4gICAgICAgIHRoaXMubGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5rLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2UoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlTmFtZTogc3RyaW5nKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgICAgICAgICAgICAgID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkICAgICAgICAgICAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjICAgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIGZ1bmMoaW1hZ2UsIGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBmaWxlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmdW5jIGxvYWRpbmcgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZXM6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSAoZS50YXJnZXQgYXMgYW55KS5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiBmdW5jKHJlYWRlci5yZXN1bHQsIGZpbGVzKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBiaW5hcnkgZmlsZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQmluYXJ5RmlsZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gZnVuYyhyZWFkZXIucmVzdWx0LCBmaWxlc1swXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdNYXA8VCwgUz4gZXh0ZW5kcyBNYXA8VCwgUz4ge1xyXG4gICAgcHVibGljIGdldChrZXk6IFQsIGRlZmF1bHRWYWx1ZT86IFMpOiBTIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSkgfHwgZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPckNyZWF0ZShrZXk6IFQsIGRlZmF1bHRWYWx1ZTogUyk6IFMgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZy1tYXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4va2V5LXZhbHVlLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbnVtYmVyLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFnaW5hdG9yXCI7XHJcbmV4cG9ydCB7IEdMb2dnZXJQcmlvcml0eSB9IGZyb20gXCIuL2xvZ2dlci9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5leHBvcnQgeyBHTG9nZ2VyRGVmYXVsdEZvcm1hdHRlciB9IGZyb20gXCIuL2xvZ2dlci9nLWxvZ2dlci1kZWZhdWx0LWZvcm1hdHRlclwiO1xyXG5leHBvcnQgeyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIgfSBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXItY2FsbGJhY2staG9sZGVyXCI7XHJcbmV4cG9ydCB7IEdMb2dnZXJJbnN0YW5jZSB9IGZyb20gXCIuL2xvZ2dlci9nLWxvZ2dlci1pbnN0YW5jZVwiO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFNpbXBsZVdyYXBwZXIge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5VmFsdWVDb3VudGVyIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXN1bHRzOiBTaW1wbGVXcmFwcGVyW10gICAgICAgID0gW107XHJcbiAgICBwcml2YXRlIHByb2Nlc3NlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgYWRkKGl0ZW06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChpdGVtIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbV0rKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbV0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEFsbChpdGVtczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKHRoaXMuYWRkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFNpbXBsZVdyYXBwZXJbXSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRvcE4oY291bnQ6IG51bWJlcik6IFNpbXBsZVdyYXBwZXJbXSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHMuc2xpY2UoMCwgY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3MoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiB0aGlzLmRhdGFba2V5XSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzdWx0cy5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdMb2dnZXJDYWxsYmFjayB9IGZyb20gXCIuL2ctbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJEZWZhdWx0Rm9ybWF0dGVyIH0gZnJvbSBcIi4vZy1sb2dnZXItZGVmYXVsdC1mb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHsgR0xvZ2dlclByaW9yaXR5IH0gZnJvbSBcIi4vZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhbGxiYWNrczogeyBba2V5IGluIEdMb2dnZXJQcmlvcml0eV06IEdMb2dnZXJDYWxsYmFjayB9KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDb25zb2xlQ2FsbGJhY2tzKGZvcm1hdHRlciA9IG5ldyBHTG9nZ2VyRGVmYXVsdEZvcm1hdHRlcigpKTogR0xvZ2dlckNhbGxiYWNrSG9sZGVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXJDYWxsYmFja0hvbGRlcih7XHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuTE9HXSAgICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKGNvbnRleHQgPyBgJHtbY29udGV4dF19XFx0YCA6IFwiXCIsIC4uLm1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAvLyBbR0xvZ2dlclByaW9yaXR5LldBUk5dICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLndhcm4oY29udGV4dCA/IGAke1tjb250ZXh0XX1cXHRgIDogXCJcIiwgLi4ubWVzc2FnZSksXHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoY29udGV4dCA/IGAke1tjb250ZXh0XX1cXHRgIDogXCJcIiwgLi4ubWVzc2FnZSksXHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTU106IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKGNvbnRleHQgPyBgJHtbY29udGV4dF19XFx0YCA6IFwiXCIsIC4uLm1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAvLyBbR0xvZ2dlclByaW9yaXR5LlZFUkJPU0VdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhjb250ZXh0ID8gYCR7W2NvbnRleHRdfVxcdGAgOiBcIlwiLCAuLi5tZXNzYWdlKSxcclxuXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuTE9HXSAgICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5MT0csIG1lc3NhZ2UsIGNvbnRleHQpKSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5XQVJOXSAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS53YXJuKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5XQVJOLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoLi4uZm9ybWF0dGVyLmZvcm1hdENvbG9yZWQoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTU106IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5TVUNDRVNTLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRV06IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5WRVJCT1NFLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVBcnJheUNhbGxiYWNrcyhhcnJheTogdW5rbm93bltdLCBvcHRpb25zOiB7IG1hcHBlcj86IChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBtZXNzYWdlczogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiB1bmtub3duIH0gPSB7fSk6IEdMb2dnZXJDYWxsYmFja0hvbGRlciB7XHJcbiAgICAgICAgY29uc3QgbWFwcGVyICAgICAgICA9IG9wdGlvbnMubWFwcGVyIHx8ICgocHJpb3JpdHksIG1lc3NhZ2VzLCBjb250ZXh0KSA9PiBbcHJpb3JpdHksIG1lc3NhZ2VzLCBjb250ZXh0XSk7XHJcbiAgICAgICAgY29uc3QgYXBwZW5kVG9BcnJheSA9IChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBtZXNzYWdlczogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobWFwcGVyKHByaW9yaXR5LCBtZXNzYWdlcywgY29udGV4dCkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR0xvZ2dlckNhbGxiYWNrSG9sZGVyKHtcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5MT0ddICAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuTE9HLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5XQVJOXSAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuV0FSTiwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvQXJyYXkoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5TVUNDRVNTXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTUywgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRV06IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvQXJyYXkoR0xvZ2dlclByaW9yaXR5LlZFUkJPU0UsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGNyZWF0ZUZpbGVDYWxsYmFja3MoZmlsZVBhdGg6IHN0cmluZywgb3B0aW9uczogeyBlbmNvZGluZz86IFwidXRmOFwiIH0gPSB7fSk6IEdMb2dnZXJDYWxsYmFja0hvbGRlciB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVQYXRoKTtcclxuICAgIC8vICAgICBjb25zdCBlbmNvZGluZyAgICAgPSBvcHRpb25zLmVuY29kaW5nIHx8IFwidXRmOFwiO1xyXG4gICAgLy8gICAgIGNvbnN0IGFwcGVuZFRvRmlsZSA9IChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBtZXNzYWdlczogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGZzLmFwcGVuZEZpbGVTeW5jKHJlc29sdmVkUGF0aCwgYCR7cHJpb3JpdHl9YCArIChjb250ZXh0ID8gYCR7Y29udGV4dH1cXHRgIDogXCJcIikgKyBtZXNzYWdlcy5qb2luKFwiIFwiKSwge2VuY29kaW5nfSk7XHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIoe1xyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LkxPR10gICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LkxPRywgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAvLyAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuV0FSTl0gICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvRmlsZShHTG9nZ2VyUHJpb3JpdHkuV0FSTiwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAvLyAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvRmlsZShHTG9nZ2VyUHJpb3JpdHkuRVJST1IsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1NdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1MsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlZFUkJPU0VdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LlZFUkJPU0UsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYWxsYmFjayhwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBjYWxsYmFjazogR0xvZ2dlckNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3NbcHJpb3JpdHldID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChob2xkZXI6IEdMb2dnZXJDYWxsYmFja0hvbGRlcik6IHZvaWQge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoR0xvZ2dlclByaW9yaXR5KS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldENhbGxiYWNrKHByaW9yaXR5LCBob2xkZXIuZ2V0Q2FsbGJhY2socHJpb3JpdHkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FsbGJhY2socHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSk6IEdMb2dnZXJDYWxsYmFjayB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzW3ByaW9yaXR5XTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkYXRlQWdvLCByYW5kb21JdGVtIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJGb3JtYXR0ZXIgfSBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdMb2dnZXJEZWZhdWx0Rm9ybWF0dGVyIGltcGxlbWVudHMgR0xvZ2dlckZvcm1hdHRlciB7XHJcbiAgICBwdWJsaWMgc2hvd1ByaW9yaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93Q29udGV4dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2hvd1RpbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93VGltZU9mZnNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgcHVibGljIHVzZURpZmZlcmVudENvbG9yc0ZvckNvbnRleHRzICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdHJ1ZTtcclxuICAgIHB1YmxpYyByZWFkb25seSBjb2xvcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gICAgICAgICAgICAgICA9IHt9O1xyXG4gICAgcHJpdmF0ZSBsYXN0Rm9ybWF0VGltZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gRGF0ZS5ub3coKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dENvbG9yTWFwOiB7IFtjb250ZXh0OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRDb2xvcmVkKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIGRhdGE6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW3RoaXMuZ2V0T3V0cHV0QXJyYXkocHJpb3JpdHksIGRhdGEsIGNvbnRleHQsIHRydWUpLmpvaW4oXCIgXCIpXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1ByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy5wcmlvcml0eSB8fCBcImJsdWVcIn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0NvbnRleHQgJiYgY29udGV4dCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgY29sb3I6ICR7dGhpcy5nZXRDb2xvckZvckNvbnRleHQoY29udGV4dCwgdGhpcy5jb2xvcnMuY29udGV4dCB8fCBcInJlZFwiKX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy50aW1lIHx8IFwiZ3JlZW5cIn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1RpbWVPZmZzZXQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYGNvbG9yOiAke3RoaXMuY29sb3JzLnRpbWVPZmZzZXQgfHwgXCJncmVlblwifWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0LnB1c2goYGNvbG9yOiAke3RoaXMuY29sb3JzLnRleHRDb2xvciB8fCBcImJsYWNrXCJ9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBkYXRhOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE91dHB1dEFycmF5KHByaW9yaXR5LCBkYXRhLCBjb250ZXh0KS5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbG9yRm9yQ29udGV4dChjb250ZXh0OiBzdHJpbmcsIGRlZmF1bHRDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlRGlmZmVyZW50Q29sb3JzRm9yQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0IGluIHRoaXMuY29udGV4dENvbG9yTWFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRDb2xvck1hcFtjb250ZXh0XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbG9yID0gKCk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgICBgIyR7bmV3IEFycmF5KDYpLmZpbGwoXCJcIikubWFwKCgpID0+IHJhbmRvbUl0ZW0oXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiKSkuam9pbihcIlwiKX1gXHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Q29sb3JNYXBbY29udGV4dF0gPSBjcmVhdGVDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3V0cHV0QXJyYXkocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nLCBhZGRDb2xvclByZWZpeCA9IGZhbHNlKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRpYWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGFkZENvbG9yUHJlZml4ID8gXCIlY1wiIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5zaG93UHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgcGFydGlhbHMucHVzaChgJHtwcmVmaXh9WyR7cHJpb3JpdHl9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93Q29udGV4dCAmJiBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxzLnB1c2gocHJlZml4ICsgY29udGV4dCArIFwiOlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxzLnB1c2goYCR7cHJlZml4fVske25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX1dYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZU9mZnNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBwYXJ0aWFscy5wdXNoKGAke3ByZWZpeH0ke2RhdGVBZ28obm93IC0gdGhpcy5sYXN0Rm9ybWF0VGltZSl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZvcm1hdFRpbWUgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnRpYWxzLnB1c2goLi4uZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gMCA/IHByZWZpeCArIGl0ZW0gOiBpdGVtIGFzIGFueSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFydGlhbHM7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR0xvZ2dlciwgR0xvZ2dlckNhbGxiYWNrLCBHTG9nZ2VyQ29udGV4dFR5cGUgfSBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIgfSBmcm9tIFwiLi9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXJcIjtcclxuaW1wb3J0IHsgR0xvZ2dlclByaW9yaXR5IH0gZnJvbSBcIi4vZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHTG9nZ2VySW5zdGFuY2Uge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyQ2FsbGJhY2tzPzogR0xvZ2dlckNhbGxiYWNrSG9sZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBsb2NhbFByaW50KHR5cGU6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjYWxsYmFja3M6IEdMb2dnZXJDYWxsYmFja0hvbGRlciwgY29udGV4dD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNhbGxiYWNrcy5nZXRDYWxsYmFjayh0eXBlKShkYXRhLCBjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TG9nQ2FsbGJhY2socHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgY2FsbGJhY2s6IEdMb2dnZXJDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyQ2FsbGJhY2tzPy5zZXRDYWxsYmFjayhwcmlvcml0eSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2coLi4ubWVzc2FnZXM6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoR0xvZ2dlclByaW9yaXR5LkxPRywgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm4oLi4ubWVzc2FnZXM6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoR0xvZ2dlclByaW9yaXR5LldBUk4sIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvciguLi5tZXNzYWdlczogdW5rbm93bltdKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuRVJST1IsIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEdMb2dnZXJQcmlvcml0eSB7XHJcbiAgICBMT0cgICAgID0gXCJMT0dcIixcclxuICAgIFdBUk4gICAgPSBcIldBUk5cIixcclxuICAgIEVSUk9SICAgPSBcIkVSUk9SXCIsXHJcbiAgICBWRVJCT1NFID0gXCJWRVJCT1NFXCIsXHJcbiAgICBTVUNDRVNTID0gXCJTVUNDRVNTXCJcclxufVxyXG4iLCJpbXBvcnQgeyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIgfSBmcm9tIFwiLi9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXJcIjtcclxuaW1wb3J0IHsgR0xvZ2dlckluc3RhbmNlIH0gZnJvbSBcIi4vZy1sb2dnZXItaW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgR0xvZ2dlclByaW9yaXR5IH0gZnJvbSBcIi4vZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEdMb2dnZXJDb250ZXh0VHlwZSA9IHN0cmluZyB8IHsgY29uc3RydWN0b3I/OiB7IG5hbWU6IHN0cmluZyB9LCBuYW1lPzogc3RyaW5nIH07XHJcbmV4cG9ydCB0eXBlIEdMb2dnZXJDYWxsYmFjayA9IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdMb2dnZXJGb3JtYXR0ZXIge1xyXG4gICAgZm9ybWF0KHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIGRhdGE6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMb2dnZXIgZXh0ZW5kcyBHTG9nZ2VySW5zdGFuY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc3RhdGljQ2FsbGJhY2tzID0gR0xvZ2dlckNhbGxiYWNrSG9sZGVyLmNyZWF0ZUNvbnNvbGVDYWxsYmFja3MoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENhbGxiYWNrcyhjYWxsYmFja0hvbGRlcjogR0xvZ2dlckNhbGxiYWNrSG9sZGVyKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5zdGF0aWNDYWxsYmFja3Muc2V0KGNhbGxiYWNrSG9sZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExpbmUoc3RlcHMgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIGlmIChlcnJvci5zdGFjaykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZXJyb3Iuc3RhY2suc3BsaXQoXCJcXG5cIilbc3RlcHNdLnRyaW0oKS5tYXRjaCgvXFwoLipcXCkvKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXQgXCIgKyByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNsYXNzTG9nZ2VyKGNvbnRleHQ6IGFueSwgcGFyZW50PzogR0xvZ2dlcik6IEdMb2dnZXIge1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmV4dGVuZHMoY29udGV4dD8ubmFtZSB8fCBjb250ZXh0Py5jb25zdHJ1Y3Rvcj8ubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXIoY29udGV4dD8uY29uc3RydWN0b3I/Lm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNraXBDb250ZXh0cyA9IFtcInJlbmRlcldvcmxkU3RhdGljXCIsIFwiQ2FudmFzRGlyZWN0aXZlXCIsIFwiV29ybGRSZW5kZXJlclNlcnZpY2VcIiwgXCJ2aWV3cG9ydFwiLCBcIldvcmxkSW5wdXRTZXJ2aWNlXCJdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc2tpcFJlZ2V4cCAgID0gbmV3IFJlZ0V4cChgJHtHTG9nZ2VyLnNraXBDb250ZXh0cy5qb2luKFwifFwiKX1gLCBcImdpXCIpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQXJyYXlMb2dnZXIoYXJyYXk6IHVua25vd25bXSwgY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSwgbWFwcGVyPzogKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIG1lc3NhZ2VzOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IHVua25vd24pOiBHTG9nZ2VyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXIoY29udGV4dCwgR0xvZ2dlckNhbGxiYWNrSG9sZGVyLmNyZWF0ZUFycmF5Q2FsbGJhY2tzKGFycmF5LCB7bWFwcGVyfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgY3JlYXRlRmlsZUxvZ2dlcihmaWxlOiBzdHJpbmcsIGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUsIGVuY29kaW5nOiBcInV0ZjhcIiA9IFwidXRmOFwiKTogR0xvZ2dlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyKGNvbnRleHQsIEdMb2dnZXJDYWxsYmFja0hvbGRlci5jcmVhdGVGaWxlQ2FsbGJhY2tzKGZpbGUsIHtlbmNvZGluZ30pKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByaW50KHR5cGU6IEdMb2dnZXJQcmlvcml0eSwgY29udGV4dDogR0xvZ2dlckNvbnRleHRUeXBlID0gXCJcIiwgLi4uZGF0YTogdW5rbm93bltdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVhbENvbnRleHQ6IHN0cmluZyA9IEdMb2dnZXIuZ2V0Q29udGV4dFN0cmluZyhjb250ZXh0KTtcclxuICAgICAgICBjb25zdCByZXN1bHQgICAgICAgICAgICAgID0gcmVhbENvbnRleHQgJiYgcmVhbENvbnRleHQubWF0Y2goR0xvZ2dlci5za2lwUmVnZXhwKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgR0xvZ2dlckluc3RhbmNlLmxvY2FsUHJpbnQodHlwZSwgZGF0YSwgR0xvZ2dlci5zdGF0aWNDYWxsYmFja3MsIHJlYWxDb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZyhtZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSwgY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoR0xvZ2dlclByaW9yaXR5LkxPRywgY29udGV4dCwgLi4uKEFycmF5LmlzQXJyYXkobWVzc2FnZSkgPyBtZXNzYWdlIDogW21lc3NhZ2VdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSwgY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCBjb250ZXh0LCAuLi4oQXJyYXkuaXNBcnJheShtZXNzYWdlKSA/IG1lc3NhZ2UgOiBbbWVzc2FnZV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHdhcm4obWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW10sIGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUpOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KEdMb2dnZXJQcmlvcml0eS5XQVJOLCBjb250ZXh0LCAuLi4oQXJyYXkuaXNBcnJheShtZXNzYWdlKSA/IG1lc3NhZ2UgOiBbbWVzc2FnZV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRDb250ZXh0U3RyaW5nKGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dD8uY29uc3RydWN0b3I/Lm5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dD8ubmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4dGVuZHMoc3ViQ29udGV4dDogc3RyaW5nKTogR0xvZ2dlciB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbnRleHQgPSBHTG9nZ2VyLmdldENvbnRleHRTdHJpbmcodGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyKGN1cnJlbnRDb250ZXh0ID8gYCR7Y3VycmVudENvbnRleHR9OiR7c3ViQ29udGV4dH1gIDogc3ViQ29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE51bWJlckNvdW50ZXIge1xyXG4gICAgcHJpdmF0ZSBtaW4gICAgICAgICAgICAgICAgICAgICAgICA9IEluZmluaXR5O1xyXG4gICAgcHJpdmF0ZSBtYXggICAgICAgICAgICAgICAgICAgICAgICA9IC1JbmZpbml0eTtcclxuICAgIHByaXZhdGUgc3VtICAgICAgICAgICAgICAgICAgICAgICAgPSAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBudW1iZXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBhZGQodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubnVtYmVycy5wdXNoKHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbih0aGlzLm1pbiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMubWF4ID0gTWF0aC5tYXgodGhpcy5tYXgsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnN1bSArPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWluKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF2ZXJhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW0gLyB0aGlzLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR1Rvb2xzQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yPFQgPSB1bmtub3duPiB7XHJcbiAgICBwcml2YXRlIGFjdExpc3Q6IFRbXTtcclxuICAgIHByaXZhdGUgYWN0dWFsUGFnZSA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhc3RQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWxsSXRlbXM6IFRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW1zUGVyUGFnZSA9IEdUb29sc0NvbmZpZy5QQUdFX0xJTUlUKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IGFsbEl0ZW1zID8gTWF0aC5mbG9vcihhbGxJdGVtcy5sZW5ndGggLyB0aGlzLml0ZW1zUGVyUGFnZSkgOiAwO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCAgPSB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFjdHVhbFBhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxQYWdlICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFnZXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UGFnZSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZ2VzQXJvdW5kKCk6IG51bWJlcltdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm4gWzEsIDIsIDMsIDQsIDVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlID4gdGhpcy5sYXN0UGFnZSAtIDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMSxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlICsgMSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSAtIDEsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMixcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMyxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMaXN0KCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub05leHQoKTogVFtdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgdGhpcy5sYXN0UGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UrKztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvdFRvKHBhZ2U6IG51bWJlcik6IFRbXSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPj0gMCAmJiBwYWdlIDw9IHRoaXMubGFzdFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gcGFnZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9QcmV2KCk6IFRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlLS07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvRmlyc3QoKTogVFtdIHtcclxuICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTGFzdCgpOiBUW10ge1xyXG4gICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IHRoaXMubGFzdFBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVDYWxjTGlzdCgpOiBUW10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ICA9IHRoaXMuYWN0dWFsUGFnZSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCA9IHRoaXMuYWxsSXRlbXMgPyB0aGlzLmFsbEl0ZW1zLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlKSA6IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RMaXN0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdUb29sc0NvbmZpZ0ludGVyZmFjZSB9IGZyb20gXCIuL2d0b29scy1jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5sZXQgY29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2U7XHJcblxyXG5jb25zdCBjaGVja0NvbmZpZyA9ICgpOiBHVG9vbHNDb25maWdJbnRlcmZhY2UgPT4ge1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBVUkxfQVBJICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBMQU5HVUFHRSAgOiBcIlwiLFxyXG4gICAgICAgICAgICBWRVJTSU9OICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBQQUdFX0xJTUlUOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjbGFzcyBDbGFzc093bkNvbmZpZyBleHRlbmRzIENsYXNzR1Rvb2xzQ29uZmlnIGltcGxlbWVudHMgT3duQ29uZmlnSW50ZXJmYWNlIHtcclxuICogICAgIHB1YmxpYyBuYW1lID0gXCJcIjtcclxuICogfVxyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgT3duQ29uZmlnID0gbmV3IENsYXNzT3duQ29uZmlnKCk7XHJcbiAqXHJcbiAqIEBzZWUgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NHVG9vbHNDb25maWcgaW1wbGVtZW50cyBHVG9vbHNDb25maWdJbnRlcmZhY2Uge1xyXG4gICAgcHVibGljIGdldCBVUkxfQVBJKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuVVJMX0FQSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFBBR0VfTElNSVQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5QQUdFX0xJTUlUO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgTEFOR1VBR0UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5MQU5HVUFHRTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFZFUlNJT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5WRVJTSU9OO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWcoYXBwQ29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbmZpZyA9IGFwcENvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdUb29sc0NvbmZpZyA9IG5ldyBDbGFzc0dUb29sc0NvbmZpZygpO1xyXG4iLCJleHBvcnQgY29uc3QgQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMgPSB0cnVlO1xyXG5cclxuIiwiaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVwcmVjYXRlZCh2YWx1ZT86IHN0cmluZyk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcik6IGFueSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2xkTWV0aG9kICA9IHRhcmdldFtwcm9wZXJ0eUtleV07XHJcbiAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9ICguLi5hcmdzOiBhbnlbXSk6IGFueSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1ldGhvZCBcIiArIHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIuXCIgKyBwcm9wZXJ0eUtleSArIFwiIGlzIGRlcHJlY2F0ZWQuIFwiICsgKHZhbHVlIHx8IFwiXCIpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRNZXRob2QuYXBwbHkodGFyZ2V0LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gRmluYWxDbGFzczxUIGV4dGVuZHMgbmV3KC4uLmFyZ3M6IGFueVtdKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4odGFyZ2V0OiBUKTogVCB7XHJcbiAgICByZXR1cm4gY2xhc3MgRmluYWwgZXh0ZW5kcyB0YXJnZXQge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICBpZiAobmV3LnRhcmdldCAhPT0gRmluYWwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBpbmhlcml0IGZyb20gZmluYWwgY2xhc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9kZXByZWNhdGVkLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9maW5hbC1jbGFzcy5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWFwcGVyLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaW5nbGV0b24uZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dhdGNoLmRlY29yYXRvclwiO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gTWFwcGVyKHBhcmFtczogeyBvbkdldD86IChvbGRWYWx1ZTogYW55KSA9PiBhbnksIG9uU2V0PzogKG9sZFZhbHVlOiBhbnkpID0+IGFueSB9ID0ge30sIHByZWZpeCA9IFwiX1wiKTogYW55IHtcclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogYW55ID0+IHtcclxuICAgICAgICBpZiAoIWRlbGV0ZSB0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciA9IHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBuZXdOYW1lICAgICAgICAgICAgICAgICAgICAgICAgPSBwcmVmaXggKyBrZXk7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5vbkdldCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9ICgpID0+IHBhcmFtcy5vbkdldCAmJiBwYXJhbXMub25HZXQodGFyZ2V0W25ld05hbWVdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gKCkgPT4gdGFyZ2V0W25ld05hbWVdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5vblNldCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9IChuZXdWYWw6IGFueSkgPT4gdGFyZ2V0W25ld05hbWVdID0gcGFyYW1zLm9uU2V0ICYmIHBhcmFtcy5vblNldChuZXdWYWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQgPSAodmFsdWUpID0+IHRhcmdldFtuZXdOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XHJcbiAgICB9O1xyXG59XHJcbiIsImNvbnN0IGluc3RhbmNlczogeyBbY2xhc3NOYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZXRvbjxUIGV4dGVuZHMgbmV3KC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGNvbnN0cnVjdG9yOiBUKTogYW55IHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLm5hbWU7XHJcblxyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlc1tjbGFzc05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnN0YW5jZSBvZiBcIiArIGNsYXNzTmFtZSArIFwiIGlzIGFscmVhZHkgY3JlYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnN0YW5jZXNbY2xhc3NOYW1lXSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eURlY29yYXRvciB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2F0Y2hPcHRpb25zIHtcclxuICAgIGVudW1lcmFibGU/OiBib29sZWFuO1xyXG4gICAgY29uZmlndXJhYmxlPzogYm9vbGVhbjtcclxuICAgIHByZWZpeD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFdhdGNoKG9uU2V0PzogKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpID0+IGFueSwgb3B0aW9ucz86IFdhdGNoT3B0aW9ucyk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIGNvbnN0IHByZWZpeCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wcmVmaXggfHwgXCJfXCI7XHJcblxyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBzZXR0ZXIgPSAobmV3VmFsOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uU2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJlZml4ICsga2V5XSA9IG9uU2V0KG5ld1ZhbCwgdGFyZ2V0W3ByZWZpeCArIGtleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldFtwcmVmaXggKyBrZXldID0gbmV3VmFsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghZGVsZXRlIHRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XHJcbiAgICAgICAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGFyZ2V0W3ByZWZpeCArIGtleV0sXHJcbiAgICAgICAgICAgIHNldCAgICAgICAgIDogc2V0dGVyLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlICA6IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuZW51bWVyYWJsZSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLmVudW1lcmFibGUgOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuY29uZmlndXJhYmxlID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMuY29uZmlndXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTm90QnJvd3NlckV4Y2VwdGlvbiB9IGZyb20gXCIuLi9lcnJvcnNcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcImd0b29scy9tb2RlbHNcIjtcclxuXHJcbmNsYXNzIEFic3RyYWN0Q2FudmFzTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhcmcxOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQsIGFyZzI6IG51bWJlciwgYXJnMzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZzEgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FudmFzID0gYXJnMTtcclxuICAgICAgICAgICAgaWYgKGFyZzIgJiYgYXJnMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzIsIGFyZzMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmcxIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FudmFzID0gQ2FudmFzTWFuYWdlci5pbWFnZVRvQ2FudmFzKGFyZzEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJnMSAmJiBhcmcyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbnZhc1NpemUoYXJnMSwgYXJnMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NhbENvbnRleHQgPSB0aGlzLmxvY2FsQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxDYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsQ29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm1SYXcodHJhbnNmb3JtLm9mZnNldC54LCB0cmFuc2Zvcm0ub2Zmc2V0LnksIHRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zZm9ybVJhdyh0cmFuc2xhdGlvblg6IG51bWJlciwgdHJhbnNsYXRpb25ZOiBudW1iZXIsIHNjYWxlWDogbnVtYmVyLCBzY2FsZVkgPSBzY2FsZVgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRUcmFuc2Zvcm1SYXcodGhpcy5sb2NhbENvbnRleHQsIHRyYW5zbGF0aW9uWCwgdHJhbnNsYXRpb25ZLCBzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gQ2FudmFzTWFuYWdlci5jYW52YXNUb0ltYWdlKHRoaXMubG9jYWxDYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaGFkb3coeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJsdXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ29udGV4dCkge1xyXG4gICAgICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyh0aGlzLmxvY2FsQ29udGV4dCwgeCwgeSwgY29sb3IsIGJsdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhmb3JtYXQgPSBcImltYWdlL3BuZ1wiKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5sb2NhbENhbnZhcy50b0RhdGFVUkwoZm9ybWF0KSwgXCJfYmxhbmtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ2FudmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ29udGV4dCkge1xyXG4gICAgICAgICAgICBDYW52YXNNYW5hZ2VyLmNsZWFyQ2FudmFzKHRoaXMubG9jYWxDb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENhbnZhc1NpemUod2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTogdm9pZCB7XHJcbiAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRDYW52YXNTaXplKHRoaXMubG9jYWxDYW52YXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRUbyhlbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxvY2FsQ2FudmFzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNNYW5hZ2VyIGV4dGVuZHMgQWJzdHJhY3RDYW52YXNNYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJDYW52YXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENhbnZhc1NpemUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTogdm9pZCB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTaGFkb3coY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBibHVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjdHguc2hhZG93Q29sb3IgICA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5zaGFkb3dCbHVyICAgID0gYmx1cjtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHg7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW1hZ2VUb0NhbnZhcyhpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCAgPSBpbWFnZS53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGN0eCAgICAgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TGluZURhc2goY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIC4uLmFyZ3M6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjdHguc2V0TGluZURhc2ggPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBjdHguc2V0TGluZURhc2goYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FsY1RleHRXaWR0aChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdmFsdWU6IHN0cmluZywgZm9udD86IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGZvbnQpIHtcclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBmb250O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN0eC5tZWFzdXJlVGV4dCh2YWx1ZSkud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRUcmFuc2Zvcm1SYXcoXHJcbiAgICAgICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgICAgdHJhbnNsYXRpb25YOiBudW1iZXIsXHJcbiAgICAgICAgdHJhbnNsYXRpb25ZOiBudW1iZXIsXHJcbiAgICAgICAgc2NhbGVYOiBudW1iZXIsXHJcbiAgICAgICAgc2NhbGVZID0gc2NhbGVYLFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybShzY2FsZVgsIDAsIDAsIHNjYWxlWSwgdHJhbnNsYXRpb25YLCB0cmFuc2xhdGlvblkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FudmFzVG9JbWFnZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmb3JtYXQgPSBcImltYWdlL3BuZ1wiKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjICAgID0gY2FudmFzLnRvRGF0YVVSTChmb3JtYXQpO1xyXG4gICAgICAgIGltYWdlLndpZHRoICA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICBpbWFnZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMmYgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuaW1wb3J0IHsgQ2FudmFzTWFuYWdlciB9IGZyb20gXCIuL2NhbnZhcy1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENhbnZhc1NoYWRvd0NvbmZpZyB9IGZyb20gXCIuL3R5cGVzL2NhbnZhcy1zaGFkb3ctY29uZmlnXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzQ29uZmlnIHtcclxuICAgIHNoYWRvdz86IENhbnZhc1NoYWRvd0NvbmZpZztcclxuICAgIHBvc2l0aW9uPzogbnVtYmVyIHwgVmVjdG9yMmY7XHJcbiAgICBjZW50ZXI/OiBib29sZWFuO1xyXG4gICAgc2l6ZT86IG51bWJlciB8IFZlY3RvcjJmO1xyXG4gICAgYmdJbWFnZT86IHtcclxuICAgICAgICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB3OiBudW1iZXI7XHJcbiAgICAgICAgaDogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIGZpbGw6IGJvb2xlYW47XHJcbiAgICBmaWxsQ29sb3I6IHN0cmluZztcclxuICAgIGRyYXc6IGJvb2xlYW47XHJcbiAgICBib3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgcmFkaXVzOiBudW1iZXIgfCB7XHJcbiAgICAgICAgdGw6IG51bWJlcjtcclxuICAgICAgICB0cjogbnVtYmVyO1xyXG4gICAgICAgIGJyOiBudW1iZXI7XHJcbiAgICAgICAgYmw6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBsaW5lQ2FwOiBcImJ1dHRcIiB8IFwicm91bmRcIiB8IFwic3F1YXJlXCI7XHJcbiAgICBqb2luVHlwZTogXCJiZXZlbFwiIHwgXCJyb3VuZFwiIHwgXCJtaXRlclwiO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgc3RhcnRBbmdsZTogbnVtYmVyO1xyXG4gICAgZW5kQW5nbGU6IG51bWJlcjtcclxuICAgIG9mZnNldDogYW55O1xyXG4gICAgbGluZURhc2g6IG51bWJlcltdO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTaGFkb3coY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb25maWc/OiBDYW52YXNTaGFkb3dDb25maWcpOiB2b2lkIHtcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyhjb250ZXh0LCBjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5jb2xvciwgY29uZmlnLmJsdXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyhjb250ZXh0LCAwLCAwLCBcImJsYWNrXCIsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzKHJlczogQ2FudmFzQ29uZmlnKTogdm9pZCB7XHJcbiAgICBpZiAocmVzLnNoYWRvdykge1xyXG4gICAgICAgIHNldFNoYWRvdyhyZXMuY3R4LCByZXMuc2hhZG93KTtcclxuICAgIH1cclxuICAgIGlmIChyZXMuYmdJbWFnZSkge1xyXG4gICAgICAgIHJlcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHJlcy5jdHguY2xpcCgpO1xyXG4gICAgICAgIGlmIChyZXMuYmdJbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5kcmF3SW1hZ2UocmVzLmJnSW1hZ2UsIHJlcy54LCByZXMueSwgcmVzLndpZHRoLCByZXMuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuY3R4LmRyYXdJbWFnZShyZXMuYmdJbWFnZS5pbWcsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS54LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UueSxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLncsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS5oLFxyXG4gICAgICAgICAgICAgICAgcmVzLngsXHJcbiAgICAgICAgICAgICAgICByZXMueSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH0gZWxzZSBpZiAocmVzLmZpbGwpIHtcclxuICAgICAgICByZXMuY3R4LmZpbGxTdHlsZSA9IHJlcy5maWxsQ29sb3I7XHJcbiAgICAgICAgcmVzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zaGFkb3cpIHtcclxuICAgICAgICBzZXRTaGFkb3cocmVzLmN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmN0eC5saW5lQ2FwICA9IHJlcy5saW5lQ2FwO1xyXG4gICAgcmVzLmN0eC5saW5lSm9pbiA9IHJlcy5qb2luVHlwZTtcclxuICAgIGlmICh0eXBlb2YgcmVzLmN0eC5zZXRMaW5lRGFzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVzLmN0eC5zZXRMaW5lRGFzaChyZXMubGluZURhc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzLmRyYXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXMuY3R4LmxpbmVXaWR0aCAgID0gcmVzLmJvcmRlcldpZHRoO1xyXG4gICAgcmVzLmN0eC5zdHJva2VTdHlsZSA9IHJlcy5ib3JkZXJDb2xvcjtcclxuICAgIHJlcy5jdHguc3Ryb2tlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXREZWYob2JqOiBhbnkpOiBDYW52YXNDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIGNlbnRlciAgICAgOiBmYWxzZSxcclxuICAgICAgICBjdHggICAgICAgIDogb2JqLmN0eCxcclxuICAgICAgICBkcmF3ICAgICAgIDogdHlwZW9mIG9iai5ib3JkZXJDb2xvciAhPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLmJvcmRlcldpZHRoICE9PSBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIGVuZEFuZ2xlICAgOiBNYXRoLlBJICogMixcclxuICAgICAgICBmaWxsICAgICAgIDogdHlwZW9mIG9iai5maWxsQ29sb3IgIT09IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgZmlsbENvbG9yICA6IFwid2hpdGVcIixcclxuICAgICAgICBoZWlnaHQgICAgIDogMCxcclxuICAgICAgICBqb2luVHlwZSAgIDogXCJiZXZlbFwiLFxyXG4gICAgICAgIGxpbmVDYXAgICAgOiBcInJvdW5kXCIsXHJcbiAgICAgICAgbGluZURhc2ggICA6IFtdLFxyXG4gICAgICAgIG9mZnNldCAgICAgOiBudWxsLFxyXG4gICAgICAgIHJhZGl1cyAgICAgOiB7XHJcbiAgICAgICAgICAgIHRsOiAwLFxyXG4gICAgICAgICAgICB0cjogMCxcclxuICAgICAgICAgICAgYnI6IDAsXHJcbiAgICAgICAgICAgIGJsOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRBbmdsZSA6IDAsXHJcbiAgICAgICAgd2lkdGggICAgICA6IDAsXHJcbiAgICAgICAgeCAgICAgICAgICA6IDAsXHJcbiAgICAgICAgeSAgICAgICAgICA6IDAsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1ha2VQb3NBbmRTaXplKGRlZjogQ2FudmFzQ29uZmlnLCBvYmo6IGFueSk6IENhbnZhc0NvbmZpZyB7XHJcbiAgICBjb25zdCByZXM6IENhbnZhc0NvbmZpZyA9ICQuZXh0ZW5kKGRlZiwgb2JqKSBhcyBDYW52YXNDb25maWc7XHJcbiAgICBjb25zdCBjaGVja0F0dHJpYnV0ZSAgICA9IChhdHRyTmFtZToga2V5b2YgQ2FudmFzQ29uZmlnLCBwYXJ0QToga2V5b2YgQ2FudmFzQ29uZmlnLCBwYXJ0Qjoga2V5b2YgQ2FudmFzQ29uZmlnKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXNbYXR0ck5hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXNbYXR0ck5hbWVdO1xyXG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZVsxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZSBhcyBWZWN0b3IyZi54O1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZSBhcyBWZWN0b3IyZi55O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tBdHRyaWJ1dGUoXCJzaXplXCIsIFwid2lkdGhcIiwgXCJzaXplXCIpO1xyXG4gICAgY2hlY2tBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInhcIiwgXCJ5XCIpO1xyXG5cclxuICAgIGlmIChyZXMuY2VudGVyKSB7XHJcbiAgICAgICAgcmVzLnggLT0gcmVzLndpZHRoID4+IDE7XHJcbiAgICAgICAgcmVzLnkgLT0gcmVzLmhlaWdodCA+PiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUG9zQW5kU2l6ZShvYmo6IENhbnZhc0NvbmZpZywgbmFtZTogc3RyaW5nKTogQ2FudmFzQ29uZmlnIHtcclxuXHJcbiAgICBpZiAoKHR5cGVvZiBvYmoueCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLnkgPT09IFwidW5kZWZpbmVkXCIpICYmIHR5cGVvZiBvYmoucG9zaXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTVNHX1RSWV9EUkFXX1dJVEhPVVRfUE9TSVRJT046IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqLndpZHRoID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBvYmouaGVpZ2h0ID09PSBcInVuZGVmaW5lZFwiKSAmJiB0eXBlb2Ygb2JqLnNpemUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTVNHX1RSWV9EUkFXX1dJVEhPVVRfU0laRTogXCIgKyBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLndpZHRoIDw9IDAgfHwgb2JqLmhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIX05FR19QT1NJVElPTjogXCIgKyBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5pdERlZihvYmopO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBkb0FyYyhvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHJlbWFrZVBvc0FuZFNpemUoY2hlY2tQb3NBbmRTaXplKG9iaiwgXCJBcmNcIiksIG9iaik7XHJcblxyXG4gICAgICAgIHJlcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuY3R4LmVsbGlwc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXMuY3R4LmVsbGlwc2UocmVzLnggKyAocmVzLndpZHRoID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLnkgKyAocmVzLmhlaWdodCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCA+PiAxLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCA+PiAxLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIHJlcy5zdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgcmVzLmVuZEFuZ2xlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuY3R4LnJlY3QocmVzLnggKyAocmVzLndpZHRoID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLnkgKyAocmVzLmhlaWdodCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCA+PiAxLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCA+PiAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb2Nlc3MocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRvUmVjdChvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IGNoZWNrUG9zQW5kU2l6ZShvYmosIFwiUmVjdFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmoucmFkaXVzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4ob2JqLnJhZGl1cykpIHtcclxuICAgICAgICAgICAgICAgIG9iai5yYWRpdXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmw6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYnI6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGw6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHI6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGVmLnJhZGl1cyBhcyBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmLnJhZGl1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5yYWRpdXNba2V5XSA9IG9iai5yYWRpdXNba2V5XSB8fCAoZGVmLnJhZGl1cyBhcyBhbnkpW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSByZW1ha2VQb3NBbmRTaXplKGRlZiwgb2JqKTtcclxuXHJcbiAgICAgICAgcmVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICByZXMuY3R4Lm1vdmVUbyhyZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkudGwsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIHJlcy53aWR0aCAtIChyZXMucmFkaXVzIGFzIGFueSkudHIsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55LCByZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRyKTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyByZXMuaGVpZ2h0IC0gKHJlcy5yYWRpdXMgYXMgYW55KS5icik7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSArIHJlcy5oZWlnaHQsIHJlcy54ICsgcmVzLndpZHRoIC0gKHJlcy5yYWRpdXMgYXMgYW55KS5iciwgcmVzLnkgKyByZXMuaGVpZ2h0KTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkuYmwsIHJlcy55ICsgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54LCByZXMueSArIHJlcy5oZWlnaHQsIHJlcy54LCByZXMueSArIHJlcy5oZWlnaHQgLSAocmVzLnJhZGl1cyBhcyBhbnkpLmJsKTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCwgcmVzLnkgKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsKTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLngsIHJlcy55LCByZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkudGwsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBwcm9jZXNzKHJlcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVE9ETzogbmVlZCB0byBiZSBjaGVja2VkIGlmIGFwcCBpcyBydW5uaW5nIGluIGJyb3dzZXJcclxuXHJcbmxldCBsb2NhbENvbnRleHQ6IERvY3VtZW50IHwgbnVsbCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb21HZXQge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgZG9jdW1lbnQgY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENvbnRleHQoY29udGV4dDogRG9jdW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbENvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjbGFzc05hbWUgbmFtZSBvZiBjbGFzc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgY29sbGVjdGlvbiBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsaW5rIG5hbWUgb2YgbGlua1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgbm9kZUxpc3Qgb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieUxpbmsobGluazogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcF0+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKGBhW2F0dHI9XCIke2xpbmt9XCJdYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkIHNlYXJjaGVkIElEXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBmb3VuZCBlbGVtZW50IG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieUlkKGlkOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgZWxlbWVudHMgbmFtZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgbm9kZUxpc3Qgb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieU5hbWUobmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGFnTmFtZSBlbGVtZW50cyB0YWdOYW1lXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5VGFnKHRhZ05hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSBhcyBhbnk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQnV0dG9uIHtcclxuICAgIExFRlQsXHJcbiAgICBSSUdIVCxcclxuICAgIE1JRERMRSxcclxufVxyXG4iLCJleHBvcnQgZW51bSBEYXlzIHtcclxuICAgIE1PTiA9IFwiTU9OXCIsXHJcbiAgICBUVUUgPSBcIlRVRVwiLFxyXG4gICAgV0VEID0gXCJXRURcIixcclxuICAgIFRIVSA9IFwiVEhVXCIsXHJcbiAgICBGUkkgPSBcIkZSSVwiLFxyXG4gICAgU0FUID0gXCJTQVRcIixcclxuICAgIFNVTiA9IFwiU1VOXCIsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRW5jb2RpbmdzIHtcclxuICAgIC8qXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVURjggICAgPSBcInV0ZjhcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVRGMTYgICA9IFwidXRmMTZcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVU5JQ09ERSA9IFwidW5pY29kZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBU0NJSSAgID0gXCJhc2NpaVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVQ1MyICAgID0gXCJ1Y3MyXCI7XHJcbiAgICAqL1xyXG4gICAgVVRGOCAgICA9IFwidXRmOFwiLFxyXG4gICAgVVRGMTYgICA9IFwidXRmMTZcIixcclxuICAgIFVOSUNPREUgPSBcInVuaWNvZGVcIixcclxuICAgIEFTQ0lJICAgPSBcImFzY2lpXCIsXHJcbiAgICBVQ1MyICAgID0gXCJ1Y3MyXCIsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRmlsZVR5cGVzIHtcclxuICAgIENTUyAgPSBcInRleHQvY3NzXCIsXHJcbiAgICBIVE1MID0gXCJ0ZXh0L2h0bWxcIixcclxuICAgIEpTICAgPSBcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIixcclxuICAgIE1QMyAgPSBcImF1ZGlvL21wZWdcIixcclxuICAgIE1QNCAgPSBcInZpZGVvL21wNFwiLFxyXG4gICAgT0dHICA9IFwiYXBwbGljYXRpb24vb2dnXCIsXHJcbiAgICBPR1YgID0gXCJ2aWRlby9vZ2dcIixcclxuICAgIE9HQSAgPSBcImF1ZGlvL29nZ1wiLFxyXG4gICAgVFhUICA9IFwidGV4dC9wbGFpblwiLFxyXG4gICAgV0FWICA9IFwiYXVkaW8veC13YXZcIixcclxuICAgIFdFQk0gPSBcInZpZGVvL3dlYm1cIixcclxufVxyXG4iLCJleHBvcnQgZW51bSBIdHRwU3RhdHVzQ29kZXMge1xyXG4gICAgQ09OVElOVUUgICAgICAgICAgICAgICAgICAgICAgICA9IDEwMCxcclxuICAgIFNXSVRDSElOR19QUk9UT0NPTFMgICAgICAgICAgICAgPSAxMDEsXHJcbiAgICBPSyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMjAwLFxyXG4gICAgQ1JFQVRFRCAgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMSxcclxuICAgIEFDQ0VQVEVEICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDIsXHJcbiAgICBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTiAgID0gMjAzLFxyXG4gICAgTk9fQ09OVEVOVCAgICAgICAgICAgICAgICAgICAgICA9IDIwNCxcclxuICAgIFJFU0VUX0NPTlRFTlQgICAgICAgICAgICAgICAgICAgPSAyMDUsXHJcbiAgICBQQVJUSUFMX0NPTlRFTlQgICAgICAgICAgICAgICAgID0gMjA2LFxyXG4gICAgTVVMVElQTEVfQ0hPSUNFUyAgICAgICAgICAgICAgICA9IDMwMCxcclxuICAgIE1PVkVEX1BFUk1BTkVOVExZICAgICAgICAgICAgICAgPSAzMDEsXHJcbiAgICBGT1VORCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMzAyLFxyXG4gICAgU0VFX09USEVSICAgICAgICAgICAgICAgICAgICAgICA9IDMwMyxcclxuICAgIE5PVF9NT0RJRklFRCAgICAgICAgICAgICAgICAgICAgPSAzMDQsXHJcbiAgICBVU0VfUFJPWFkgICAgICAgICAgICAgICAgICAgICAgID0gMzA1LFxyXG4gICAgVEVNUE9SQVJZX1JFRElSRUNUICAgICAgICAgICAgICA9IDMwNyxcclxuICAgIEJBRF9SRVFVRVNUICAgICAgICAgICAgICAgICAgICAgPSA0MDAsXHJcbiAgICBVTkFVVEhPUklaRUQgICAgICAgICAgICAgICAgICAgID0gNDAxLFxyXG4gICAgUEFZTUVOVF9SRVFVSVJFRCAgICAgICAgICAgICAgICA9IDQwMixcclxuICAgIEZPUkJJRERFTiAgICAgICAgICAgICAgICAgICAgICAgPSA0MDMsXHJcbiAgICBOT1RfRk9VTkQgICAgICAgICAgICAgICAgICAgICAgID0gNDA0LFxyXG4gICAgTUVUSE9EX05PVF9BTExPV0VEICAgICAgICAgICAgICA9IDQwNSxcclxuICAgIE5PVF9BQ0NFUFRBQkxFICAgICAgICAgICAgICAgICAgPSA0MDYsXHJcbiAgICBQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRCAgID0gNDA3LFxyXG4gICAgUkVRVUVTVF9USU1FT1VUICAgICAgICAgICAgICAgICA9IDQwOCxcclxuICAgIENPTkZMSUNUICAgICAgICAgICAgICAgICAgICAgICAgPSA0MDksXHJcbiAgICBHT05FICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gNDEwLFxyXG4gICAgTEVOR1RIX1JFUVVJUkVEICAgICAgICAgICAgICAgICA9IDQxMSxcclxuICAgIFBSRUNPTkRJVElPTl9GQUlMRUQgICAgICAgICAgICAgPSA0MTIsXHJcbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgICAgICAgID0gNDEzLFxyXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgICAgICAgICAgICA9IDQxNCxcclxuICAgIFVOU1VQUE9SVEVEX01FRElBX1RZUEUgICAgICAgICAgPSA0MTUsXHJcbiAgICBSRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFID0gNDE2LFxyXG4gICAgRVhQRUNUQVRJT05fRkFJTEVEICAgICAgICAgICAgICA9IDQxNyxcclxuICAgIFVOUFJPQ0VTU0FCTEVfRU5USVRZICAgICAgICAgICAgPSA0MjIsXHJcbiAgICBUT09fTUFOWV9SRVFVRVNUUyAgICAgICAgICAgICAgID0gNDI5LFxyXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SICAgICAgICAgICA9IDUwMCxcclxuICAgIE5PVF9JTVBMRU1FTlRFRCAgICAgICAgICAgICAgICAgPSA1MDEsXHJcbiAgICBCQURfR0FURVdBWSAgICAgICAgICAgICAgICAgICAgID0gNTAyLFxyXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRSAgICAgICAgICAgICA9IDUwMyxcclxuICAgIEdBVEVXQVlfVElNRU9VVCAgICAgICAgICAgICAgICAgPSA1MDQsXHJcbiAgICBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRCAgICAgID0gNTA1LFxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2J1dHRvbi5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RheXMuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lbmNvZGluZ3MuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9maWxlLXR5cGVzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaHR0cC1zdGF0dXMtY29kZXMuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9rZXlzLmVudW1cIjtcclxuIiwiZXhwb3J0IGVudW0gS2V5cyB7XHJcbiAgICBBUlJPV19VUCAgICA9IFwiQXJyb3dVcFwiLFxyXG4gICAgQVJST1dfRE9XTiAgPSBcIkFycm93RG93blwiLFxyXG4gICAgQVJST1dfTEVGVCAgPSBcIkFycm93TGVmdFwiLFxyXG4gICAgQVJST1dfUklHSFQgPSBcIkFycm93UmlnaHRcIixcclxuICAgIERFTEVURSAgICAgID0gXCJEZWxldGVcIixcclxuICAgIENPTlRST0wgICAgID0gXCJDb250cm9sTGVmdFwiLFxyXG4gICAgU0hJRlQgICAgICAgPSBcIlNoaWZ0TGVmdFwiLFxyXG4gICAgUEFHRV9VUCAgICAgPSBcIlBhZ2VVcFwiLFxyXG4gICAgUEFHRV9ET1dOICAgPSBcIlBhZ2VEb3duXCIsXHJcbiAgICBFU0NBUEUgICAgICA9IFwiRXNjYXBlXCIsXHJcbiAgICBXICAgICAgICAgICA9IFwiS2V5V1wiLFxyXG4gICAgRiAgICAgICAgICAgPSBcIktleUZcIixcclxuICAgIEEgICAgICAgICAgID0gXCJLZXlBXCIsXHJcbiAgICBQICAgICAgICAgICA9IFwiS2V5UFwiLFxyXG4gICAgUyAgICAgICAgICAgPSBcIktleVNcIixcclxuICAgIEQgICAgICAgICAgID0gXCJLZXlEXCIsXHJcbiAgICBSICAgICAgICAgICA9IFwiS2V5UlwiLFxyXG5cclxuICAgIERJR0lUXzEgICAgICAgICAgID0gXCJEaWdpdDFcIixcclxuICAgIERJR0lUXzIgICAgICAgICAgID0gXCJEaWdpdDJcIixcclxuICAgIERJR0lUXzMgICAgICAgICAgID0gXCJEaWdpdDNcIixcclxuICAgIERJR0lUXzQgICAgICAgICAgID0gXCJEaWdpdDRcIixcclxuICAgIERJR0lUXzUgICAgICAgICAgID0gXCJEaWdpdDVcIixcclxuICAgIERJR0lUXzYgICAgICAgICAgID0gXCJEaWdpdDZcIixcclxuICAgIERJR0lUXzcgICAgICAgICAgID0gXCJEaWdpdDdcIixcclxuICAgIERJR0lUXzggICAgICAgICAgID0gXCJEaWdpdDhcIixcclxuICAgIERJR0lUXzkgICAgICAgICAgID0gXCJEaWdpdDlcIixcclxuICAgIERJR0lUXzAgICAgICAgICAgID0gXCJEaWdpdDBcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleXNPbGQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTlRFUiAgICAgICA9IDEzO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUIgICAgICAgICA9IDk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgICAgICAgICAgID0gODc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEEgICAgICAgICAgID0gNjU7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFMgICAgICAgICAgID0gODM7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEQgICAgICAgICAgID0gNjg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFEgICAgICAgICAgID0gODE7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEUgICAgICAgICAgID0gNjk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEYgICAgICAgICAgID0gNzA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExDT05UUk9MICAgID0gMTc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVTQ0FQRSAgICAgID0gMjc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExBTFQgICAgICAgID0gMTg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExTSElGVCAgICAgID0gMTY7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNQQUNFICAgICAgID0gMzI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX1VQICAgID0gMzg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX0RPV04gID0gNDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX1JJR0hUID0gMzk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX0xFRlQgID0gMzc7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vbm90LWJyb3dzZXIuZXhjZXB0aW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL251bGwtcG9pbnRlci5leGNlcHRpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd3JvbmctcGFyYW1ldGVyLmV4Y2VwdGlvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9taXNzaW5nLXBhcmFtZXRlci5lcnJvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uby1kYXRhYmFzZS1jb25uZWN0aW9uLmVycm9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dyb25nLXR5cGUuZXhjZXB0aW9uXCI7XHJcbiIsImV4cG9ydCBjbGFzcyBNaXNzaW5nUGFyYW1ldGVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1ldGVyTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYFBhcmFtZXRlciAke3BhcmFtZXRlck5hbWV9IG11c3QgYmUgZGVmaW5lZGApO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBOb0RhdGFiYXNlQ29ubmVjdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiRGF0YWJhc2UgY29ubmVjdGlvbiBpcyBubyBlc3RhYmxpc2hlZFwiKTtcclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBnZXRUZXh0KHRleHQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQgPyBgOiAke3RleHR9YCA6IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RCcm93c2VyRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihgQXBwIGlzIG5vdCBydW5uaW5nIGluIGJyb3dzZXIke2dldFRleHQodGV4dCl9IWApO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgTm90QnJvd3NlckV4Y2VwdGlvbi5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBOdWxsUG9pbnRlckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJOdWxsIHBvaW50ZXIgZXhjZXB0aW9uIGF0IGxpbmVcIiArICh0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIiA/IFwiOiBcIiArIHRleHQgOiBcIiFcIikpO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgTnVsbFBvaW50ZXJFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgV3JvbmdQYXJhbWV0ZXJFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGBXcm9uZyBwYXJhbWV0ZXIgZXhjZXB0aW9uIGF0IGxpbmUke3R5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiID8gXCI6IFwiICsgdGV4dCA6IFwiIVwifWApO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgV3JvbmdQYXJhbWV0ZXJFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgV3JvbmdUeXBlRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHJlcXVpcmVkVHlwZTogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYFdyb25nIHR5cGUgZXhjZXB0aW9uIGF0IGxpbmUuICR7dHlwZW9mIHJlcXVpcmVkVHlwZX0gbXVzdCBiZSAke3JlcXVpcmVkVHlwZX0ke3R5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiID8gXCI6IFwiICsgdGV4dCA6IFwiIVwifWApO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgV3JvbmdUeXBlRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vR1V0aWxzXCI7XHJcblxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yMlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yM1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yNFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92ZWN0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yMlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92ZWN0b3IyZlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92ZWN0b3IzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlY3RvcjRcIjtcclxuIiwiaW1wb3J0IHsgUmFuZ2UgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjIgaW1wbGVtZW50cyBTaW1wbGVWZWN0b3IyIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHkgPSAwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgWkVSTygpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgVVAoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExFRlQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKC0xLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBCT1RUT00oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBSSUdIVCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgT05FKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF2ZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1bSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzdW0oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUFycmF5KHZhbDogW251bWJlciwgbnVtYmVyXSB8IEZsb2F0MzJBcnJheSk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2YWxbMF0sIHZhbFsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlcXVhbHModmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh2ZWNBID09PSB2ZWNCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY0EueCA9PT0gdmVjQi54ICYmIHZlY0EueSA9PT0gdmVjQi55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3ViKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjQS54IC0gdmVjQi54LCB2ZWNBLnkgLSB2ZWNCLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbSh2YWxBOiBudW1iZXIsIHZhbEIgPSB2YWxBKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZhbEEsIHZhbEIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWaXNpYmxlKG9ic1g6IG51bWJlciwgb2JzWTogbnVtYmVyLCBhbmdsZTogbnVtYmVyLCBjdXRPZmY6IG51bWJlciwgcHg6IG51bWJlciwgcHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBhbmdsZSAtIE1hdGguYXRhbjIoXHJcbiAgICAgICAgICAgIHB5IC0gb2JzWSxcclxuICAgICAgICAgICAgcHggLSBvYnNYLFxyXG4gICAgICAgICkgPD0gY3V0T2ZmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVPdXRsaW5lUmFuZ2UocG9pbnRzOiByZWFkb25seSBTaW1wbGVWZWN0b3IyW10pOiBSYW5nZTxTaW1wbGVWZWN0b3IyPiB7XHJcbiAgICAgICAgY29uc3QgbWluID0ge1xyXG4gICAgICAgICAgICB4OiBJbmZpbml0eSxcclxuICAgICAgICAgICAgeTogSW5maW5pdHksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtYXggPSB7XHJcbiAgICAgICAgICAgIHg6IC1JbmZpbml0eSxcclxuICAgICAgICAgICAgeTogLUluZmluaXR5LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBvaW50cy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwLnggPCBtaW4ueCkge1xyXG4gICAgICAgICAgICAgICAgbWluLnggPSBwLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHAueSA8IG1pbi55KSB7XHJcbiAgICAgICAgICAgICAgICBtaW4ueSA9IHAueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocC54ID4gbWF4LngpIHtcclxuICAgICAgICAgICAgICAgIG1heC54ID0gcC54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwLnkgPiBtYXgueSkge1xyXG4gICAgICAgICAgICAgICAgbWF4LnkgPSBwLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShtaW4sIG1heCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGFuZ2xlQmV0d2VlblBvaW50cyhvYnNYOiBudW1iZXIsIG9ic1k6IG51bWJlciwgcHgxOiBudW1iZXIsIHB5MTogbnVtYmVyLCBweDI6IG51bWJlciwgcHkyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKFxyXG4gICAgICAgICAgICBweTEgLSBvYnNZLFxyXG4gICAgICAgICAgICBweDEgLSBvYnNYLFxyXG4gICAgICAgICkgLSBNYXRoLmF0YW4yKFxyXG4gICAgICAgICAgICBweTIgLSBvYnNZLFxyXG4gICAgICAgICAgICBweDIgLSBvYnNYLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZlY3RvcihpdGVtOiBhbnkpOiBpdGVtIGlzIFNpbXBsZVZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBpdGVtICYmICFpc05hTihpdGVtLngpICYmICFpc05hTihpdGVtLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VtKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjQS54ICsgdmVjQi54LCB2ZWNBLnkgKyB2ZWNCLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5taW4odmVjQS54LCB2ZWNCLngpLCBNYXRoLm1pbih2ZWNBLnksIHZlY0IueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWF4KHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLCBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzdCh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHZlY0EueCAtIHZlY0IueCwgMikgKyBNYXRoLnBvdyh2ZWNBLnkgLSB2ZWNCLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNaZXJvKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3JtYWxpemVkKCk6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZSgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsTnVtKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZhbDogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY0EueCAqIHZhbCwgdmVjQS55ICogdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsKHZhbHVlOiBTaW1wbGVWZWN0b3IyIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCh2YWx1ZTogU2ltcGxlVmVjdG9yMiB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdmFsdWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdmFsdWUueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWIodmFsdWU6IFNpbXBsZVZlY3RvcjIgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55IC09IHZhbHVlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggLT0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55IC09IHZhbHVlLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGl2KHZhbHVlOiBTaW1wbGVWZWN0b3IyIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAvPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54IC89IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAvPSB2YWx1ZS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERhdGEoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQodmVjOiBTaW1wbGVWZWN0b3IyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHByb2Nlc3MgPSAoXHJcbiAgICBvcDogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsXHJcbiAgICBhcmcyPzogbnVtYmVyLFxyXG4pOiB2b2lkID0+IHtcclxuICAgIGlmICh0eXBlb2YgYXJnMiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIG9wKGFyZzEgYXMgbnVtYmVyLCBhcmcyKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZzEgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBvcChhcmcxLCBhcmcxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3AoYXJnMS54LCBhcmcxLnkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGlzIHVzZWQgZm9yIGhvbGRpbmcgMiBudW1lcmljIHZhbHVlcyBhbmQgbWFuaXB1bGF0aW9uIHdpdGggdGhlbVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjJmIHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIFggdmFsdWUgb2YgdmVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB5ID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoZSBZIHZhbHVlIG9mIHZlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeCA9IDA7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gc2V0IHZlY3RvcnMgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyBjcmVhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBhZGQgdmFsdWVzIGludG8gY3VycmVudCB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHVwZGF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0geDtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gZGl2aWRlIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpdihhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54IC89IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAvPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIG11bHRpcGx5IGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIG11bChhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHN1YnRyYWN0IHZhbHVlcyBmcm9tIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN1YihhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IzIH0gZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL3ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IzIGltcGxlbWVudHMgU2ltcGxlVmVjdG9yMyB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB5ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeiA9IDApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBVUCgpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgWkVSTygpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgT05FKCk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygxLCAxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF2ZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICsgdGhpcy55ICsgdGhpcy56KSAvIDM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlcXVhbHModmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh2ZWNBID09PSB2ZWNCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY0EueCA9PT0gdmVjQi54ICYmIHZlY0EueSA9PT0gdmVjQi55ICYmIHZlY0EueiA9PT0gdmVjQi56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3ViKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54IC0gdmVjQi54LCB2ZWNBLnkgLSB2ZWNCLnksIHZlY0EueiAtIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhZGQodmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWNBLnggKyB2ZWNCLngsIHZlY0EueSArIHZlY0IueSwgdmVjQS56ICsgdmVjQi56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bSh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY0EueCArIHZlY0IueCwgdmVjQS55ICsgdmVjQi55LCB2ZWNBLnogKyB2ZWNCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsTnVtKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZhbDogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY0EueCAqIHZhbCwgdmVjQS55ICogdmFsLCB2ZWNBLnogKiB2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICsgdmVjQi54LCB2ZWNBLnkgKyB2ZWNCLnksIHZlY0EueiArIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtaW4odmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhNYXRoLm1pbih2ZWNBLngsIHZlY0IueCksIE1hdGgubWluKHZlY0EueSwgdmVjQi55KSwgTWF0aC5taW4odmVjQS56LCB2ZWNCLnopKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUZyb21TcGhlcmljYWxDb29yZHMocmFkaXVzOiBudW1iZXIsIHBoaTogbnVtYmVyLCB0aGV0YTogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICAgICAgY29uc3Qgc2luUGhpUmFkaXVzID0gTWF0aC5zaW4ocGhpKSAqIHJhZGl1cztcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IHNpblBoaVJhZGl1cyAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5jb3MocGhpKSAqIHJhZGl1cztcclxuICAgICAgICBjb25zdCB6ID0gc2luUGhpUmFkaXVzICogTWF0aC5jb3ModGhldGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYXgodmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhNYXRoLm1heCh2ZWNBLngsIHZlY0IueCksIE1hdGgubWF4KHZlY0EueSwgdmVjQi55KSwgTWF0aC5tYXgodmVjQS56LCB2ZWNCLnopKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3QodmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh2ZWNBLnggLSB2ZWNCLngsIDIpICsgTWF0aC5wb3codmVjQS55IC0gdmVjQi55LCAyKSArIE1hdGgucG93KHZlY0EueiAtIHZlY0IueiwgMikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbm9ybWFsaXplPFQgZXh0ZW5kcyBTaW1wbGVWZWN0b3IzPih2ZWM6IFQpOiBUIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnkgKyB2ZWMueiAqIHZlYy56KTtcclxuICAgICAgICB2ZWMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdmVjLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy56IC89IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHh5KCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tKHZhbEE6IG51bWJlciwgdmFsQiA9IHZhbEEsIHZhbEMgPSB2YWxBKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZhbEEsIHZhbEIsIHZhbEMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWZWN0b3IoaXRlbTogYW55KTogaXRlbSBpcyBTaW1wbGVWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiAhaXNOYU4oaXRlbS54KSAmJiAhaXNOYU4oaXRlbS55KSAmJiAhaXNOYU4oaXRlbS56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJheSgpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1bSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLnkgKyB0aGlzLno7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vcm1hbGl6ZWQoKTogU2ltcGxlVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueiAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWwodmFsdWU6IFNpbXBsZVZlY3RvcjMgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZS55O1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWUuejtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQodmVjOiBTaW1wbGVWZWN0b3IzKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogKz0gdmVjLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcm9zcyh2OiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxYID0gdGhpcy55ICogdi56IC0gdGhpcy56ICogdi55O1xyXG4gICAgICAgIGNvbnN0IGxvY2FsWSA9IHRoaXMueiAqIHYueCAtIHRoaXMueCAqIHYuejtcclxuICAgICAgICBjb25zdCBsb2NhbFogPSB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2Lng7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhsb2NhbFgsIGxvY2FsWSwgbG9jYWxaKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG90KHY6IFNpbXBsZVZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Yih2ZWM6IFNpbXBsZVZlY3RvcjMpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiAtPSB2ZWMuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERhdGEoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHZlYzogU2ltcGxlVmVjdG9yMyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiA9IHZlYy56O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHl4KCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5eigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy55LCB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgenkoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueiwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHh6KCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB6eCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy56LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUFycmF5KHZhbHVlOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfCBGbG9hdDMyQXJyYXkpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yNCB9IGZyb20gXCIuL3NpbXBsZS12ZWN0b3I0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yNCBpbXBsZW1lbnRzIFNpbXBsZVZlY3RvcjQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB4ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeSA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHogPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB3ID0gMCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFpFUk8oKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE9ORSgpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQoMSwgMSwgMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tQXJyYXkodmFsOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB8IEZsb2F0MzJBcnJheSk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCh2YWxbMF0sIHZhbFsxXSwgdmFsWzJdLCB2YWxbM10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbSh2YWxBOiBudW1iZXIsIHZhbEIgPSB2YWxBLCB2YWxDID0gdmFsQiwgdmFsRCA9IHZhbEMpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQodmFsQSwgdmFsQiwgdmFsQywgdmFsRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhdmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCArIHRoaXMueSArIHRoaXMueiArIHRoaXMudykgLyA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKyB0aGlzLncgKiB0aGlzLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZlY0E6IFNpbXBsZVZlY3RvcjQsIHZlY0I6IFNpbXBsZVZlY3RvcjQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodmVjQSA9PT0gdmVjQikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNBLnggPT09IHZlY0IueCAmJiB2ZWNBLnkgPT09IHZlY0IueSAmJiB2ZWNBLnogPT09IHZlY0IueiAmJiB2ZWNBLncgPT09IHZlY0IudztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1pbih2ZWNBOiBTaW1wbGVWZWN0b3I0LCB2ZWNCOiBTaW1wbGVWZWN0b3I0KTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KFxyXG4gICAgICAgICAgICBNYXRoLm1pbih2ZWNBLngsIHZlY0IueCksXHJcbiAgICAgICAgICAgIE1hdGgubWluKHZlY0EueSwgdmVjQi55KSxcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS56LCB2ZWNCLnopLFxyXG4gICAgICAgICAgICBNYXRoLm1pbih2ZWNBLncsIHZlY0IudyksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1heCh2ZWNBOiBTaW1wbGVWZWN0b3I0LCB2ZWNCOiBTaW1wbGVWZWN0b3I0KTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KFxyXG4gICAgICAgICAgICBNYXRoLm1heCh2ZWNBLngsIHZlY0IueCksXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHZlY0EueSwgdmVjQi55KSxcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS56LCB2ZWNCLnopLFxyXG4gICAgICAgICAgICBNYXRoLm1heCh2ZWNBLncsIHZlY0IudyksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3QodmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3codmVjQS54IC0gdmVjQi54LCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EueSAtIHZlY0IueSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyh2ZWNBLnogLSB2ZWNCLnosIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3codmVjQS53IC0gdmVjQi53LCAyKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbm9ybWFsaXplPFQgZXh0ZW5kcyBTaW1wbGVWZWN0b3I0Pih2ZWM6IFQpOiBUIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnkgKyB2ZWMueiAqIHZlYy56ICsgdmVjLncgKiB2ZWMudyk7XHJcbiAgICAgICAgdmVjLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy55IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueiAvPSBsZW5ndGg7XHJcbiAgICAgICAgdmVjLncgLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdmVjO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmVjdG9yKGl0ZW06IGFueSk6IGl0ZW0gaXMgU2ltcGxlVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgIWlzTmFOKGl0ZW0ueCkgJiYgIWlzTmFOKGl0ZW0ueSkgJiYgIWlzTmFOKGl0ZW0ueikgJiYgIWlzTmFOKGl0ZW0udyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvQXJyYXkoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm9ybWFsaXplZCgpOiBTaW1wbGVWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQodGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnogLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudyAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWwodmFsdWU6IFNpbXBsZVZlY3RvcjQgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudyAqPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlLnk7XHJcbiAgICAgICAgICAgIHRoaXMueiAqPSB2YWx1ZS56O1xyXG4gICAgICAgICAgICB0aGlzLncgKj0gdmFsdWUudztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQodmVjOiBTaW1wbGVWZWN0b3I0KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogKz0gdmVjLno7XHJcbiAgICAgICAgdGhpcy53ICs9IHZlYy53O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViKHZlYzogU2ltcGxlVmVjdG9yNCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56IC09IHZlYy56O1xyXG4gICAgICAgIHRoaXMudyAtPSB2ZWMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERhdGEoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgdzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh2ZWM6IFNpbXBsZVZlY3RvcjQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogPSB2ZWMuejtcclxuICAgICAgICB0aGlzLncgPSB2ZWMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBBamF4UGFyYW1zIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIiB8IFwiUE9TVFwiO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBvblJlc3BvbnNlOiAoZGF0YTogYW55KSA9PiB2b2lkO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxufVxyXG5cclxuY2xhc3MgQWpheFdyYXBwZXIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWpheEhhbmRsZXI6IFhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4KHtcclxuICAgIG1ldGhvZCA9IFwiR0VUXCIsXHJcbiAgICB1cmwsXHJcbiAgICBvblJlc3BvbnNlLFxyXG4gICAgY29udGVudCxcclxuICAgIGhlYWRlcnMgPSB7fSxcclxufTogQWpheFBhcmFtcyk6IEFqYXhXcmFwcGVyIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgICAgICAgICAgICAgID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIShyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQgJiYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDAgfHwgcmVxdWVzdC5zdGF0dXMgPT09IDIwMSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvblJlc3BvbnNlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb25SZXNwb25zZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcbiAgICBPYmplY3QuZW50cmllcyhoZWFkZXJzKS5mb3JFYWNoKChlbnRyeSkgPT4gcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGVudHJ5WzBdLCBlbnRyeVsxXSkpO1xyXG4gICAgcmVxdWVzdC5zZW5kKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQWpheFdyYXBwZXIocmVxdWVzdCk7XHJcbn1cclxuIiwiY29uc3QgRklMRV9TSVpFX1VOSVRTICAgICAgPSBbXCJCXCIsIFwiS0JcIiwgXCJNQlwiLCBcIkdCXCIsIFwiVEJcIiwgXCJQQlwiLCBcIkVCXCIsIFwiWkJcIiwgXCJZQlwiXTtcclxuY29uc3QgRklMRV9TSVpFX1VOSVRTX0xPTkcgPSBbXCJCeXRlc1wiLCBcIktpbG9ieXRlc1wiLCBcIk1lZ2FieXRlc1wiLCBcIkdpZ2FieXRlc1wiLCBcIlBldHRhYnl0ZXNcIiwgXCJFeGFieXRlc1wiLCBcIlpldHRhYnl0ZXNcIiwgXCJZb3R0YWJ5dGVzXCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEZpbGVTaXplKHNpemVJbkJ5dGVzOiBudW1iZXIsIGxvbmdGb3JtID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdW5pdHMgPSBsb25nRm9ybVxyXG4gICAgICAgID8gRklMRV9TSVpFX1VOSVRTX0xPTkdcclxuICAgICAgICA6IEZJTEVfU0laRV9VTklUUztcclxuXHJcbiAgICBsZXQgcG93ZXIgPSBNYXRoLnJvdW5kKE1hdGgubG9nKHNpemVJbkJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKTtcclxuICAgIHBvd2VyICAgICA9IE1hdGgubWluKHBvd2VyLCB1bml0cy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICBjb25zdCBzaXplICAgICAgICAgID0gc2l6ZUluQnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBwb3dlcik7IC8vIHNpemUgaW4gbmV3IHVuaXRzXHJcbiAgICBjb25zdCBmb3JtYXR0ZWRTaXplID0gTWF0aC5yb3VuZChzaXplICogMTAwKSAvIDEwMDsgLy8ga2VlcCB1cCB0byAyIGRlY2ltYWxzXHJcbiAgICBjb25zdCB1bml0ICAgICAgICAgID0gdW5pdHNbcG93ZXJdO1xyXG5cclxuICAgIHJldHVybiBzaXplID8gYCR7Zm9ybWF0dGVkU2l6ZX0gJHt1bml0fWAgOiBcIjBcIjtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zbG92YWstc3RlbW1lclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hamF4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtc2l6ZS1mb3JtYXR0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVudGltZS12YWxpZGF0b3JzXCI7XHJcbiIsImV4cG9ydCBjb25zdCBnZXRBc1N0cmluZyA9IChrZXk6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgd2l0aCB2YWx1ZSAke2tleX0gaXMgbm90IGEgc3RyaW5nYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEFzTnVtYmVyID0gKGtleTogYW55KTogbnVtYmVyID0+IHtcclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSB3aXRoIHZhbHVlICR7a2V5fSBpcyBub3QgYSBudW1iZXJgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59O1xyXG4iLCJmdW5jdGlvbiByZW1vdmVQcmVkcG9uYShjaGFyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGNoYXIubGVuZ3RoID4gNiAmJiBjaGFyLnN0YXJ0c1dpdGgoXCJuYWpcIikpIHtcclxuICAgICAgICByZXR1cm4gY2hhci5zdWJzdHIoMywgY2hhci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGFyO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuZnVuY3Rpb24gcmVtb3ZlQ2FzZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBrZXkubGVuZ3RoO1xyXG4gICAgaWYgKGxlbiA+IDkgJiYga2V5LmVuZHNXaXRoKFwiZWrFoWllaG9cIilcclxuICAgICAgICB8fCBrZXkuZW5kc1dpdGgoXCJlasWhaWVtdVwiKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA4ICYmIChrZXkuZW5kc1dpdGgoXCJlasWhw61jaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY29jaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrW1pXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jYW1pXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDYpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA3ICYmIChrZXkuZW5kc1dpdGgoXCJlasWhaWFcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdGFtaVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FjaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuaWVjXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jb21cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhb21cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWVqXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoW91XCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWl1XCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWllXCIpXHJcbiAgICApKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDYgJiZcclxuICAgICAgICAoa2V5LmVuZHNXaXRoKFwiZcWlb21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFtaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaVvbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdmlhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhY2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZWhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllbXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrVwiKSB8fFxyXG4gICAgICAgICAgICAvLyBnYWJvc1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmllXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA1ICYmXHJcbiAgICAgICAgKGtleS5lbmRzV2l0aChcImljaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5Y2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61jaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOpaG9cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDqW11XCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW11XCIpIHx8XHJcbiAgICAgICAgICAgIC8qa2V5LmVuZHNXaXRoKFwiaWhvXCIpIHx8Ki8gLy8gVmXEvm1pIG1hbMO9IHZwbHl2XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6FjaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO9Y2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICAvKiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w6lcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDvVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsOtXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZpXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWXFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ1asO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtdGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61tZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFjaFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYW1cIikgfHxcclxuICAgICAgICAgICAgLyprZXkuZW5kc1dpdGgoXCJhdMOhXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFjXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIml0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbGlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsb1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib2NoXCIpXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA0ICYmXHJcbiAgICAgICAgKC8qa2V5LmVuZHNXaXRoKFwiw61uXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61tXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6FtXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidXNcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvW1cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5bVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJtaVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm91XCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWpcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDusWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImnFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImnFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDumNcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZcWhXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXlbbGVuIC0gMV0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgY2FzZSBcImVcIjpcclxuICAgICAgICAgICAgY2FzZSBcImlcIjpcclxuICAgICAgICAgICAgY2FzZSBcIm9cIjpcclxuICAgICAgICAgICAgY2FzZSBcInVcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsO6XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDoVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw6lcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOtXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDvVwiOlxyXG4gICAgICAgICAgICAgICAgLypjYXNlIFwiw7RcIjoqL1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3Nlc3NpdmVzKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIGlmIChsZW4gPiA1ICYmIHMuZW5kc1dpdGgoXCJpblwiKSB8fFxyXG4gICAgICAgIHMuZW5kc1dpdGgoXCJvdlwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnN1YnN0cigwLCBsZW4gLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIC8vIHRvdG8gcHJhdmlkbG8gem5pxb51amUgRlAgYWxlIHp2ecWhdWplIEZOXHJcbiAgICAvKiAgICAgICAgaWYgKGxlbiA+IDEgJiYgc1tsZW4gLSAyXSA9PSBcImlcIiAmJiBzW2xlbi0xXT09XCJjXCIpIHtcclxuICAgICAgICAgICAgICAgIHNbbGVuIC0gMl0gPSBzW2xlbiAtIDFdOyAvLyBlKiA+ICpcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZW4gLSAxO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgIHN3aXRjaCAoc1tsZW4gLSAxXSkge1xyXG4gICAgICAgIGNhc2UgXCJjXCI6IC8vIFtjxI1dIC0+IGtcclxuICAgICAgICBjYXNlIFwixI1cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcImtcIik7XHJcbiAgICAgICAgY2FzZSBcIsS+XCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwibFwiKTtcclxuICAgICAgICBjYXNlIFwixYhcIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJuXCIpO1xyXG4gICAgICAgIGNhc2UgXCLFpVwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcInRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDMgJiYgc1tsZW4gLSAzXSA9PT0gXCJpXCIgJiYgKHNbbGVuIC0gMl0gPT09IFwiZVwiIHx8IHNbbGVuIC0gMl0gPT09IFwiYVwiIHx8IHNbbGVuIC0gMl0gPT09IFwidVwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGxlbiAtIDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzW2xlbiAtIDJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1tsZW4gLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbG92YWtTdGVtbWVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3RlbWUod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZW1vdmVQb3NzZXNzaXZlcyhyZW1vdmVDYXNlKHJlbW92ZVByZWRwb25hKHdvcmQpKSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBoZXgycmdiLCBpbnQycmdiLCByZ2IyaGV4LCByZ2IyaW50IH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBjaGVja0NvbG9yVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc29sZS5hc3NlcnQodmFsdWUgPj0gMCk7XHJcbiAgICBjb25zb2xlLmFzc2VydCh2YWx1ZSA8PSAyNTUpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCTEFDSyA9IG5ldyBDb2xvcigwLCAwLCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0hJVEUgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSQVkgID0gbmV3IENvbG9yKDEyOCwgMTI4LCAxMjgpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRUQgICA9IG5ldyBDb2xvcigyNTUsIDAsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkVFTiA9IG5ldyBDb2xvcigwLCAyNTUsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCTFVFICA9IG5ldyBDb2xvcigwLCAwLCAyNTUpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmVkOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGdyZWVuOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGJsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYWxwaGEgPSAyNTUpIHtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUocmVkKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoZ3JlZW4pO1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShibHVlKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoYWxwaGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmdiKCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYlN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgcmdiKCR7dGhpcy5yZWR9LCAke3RoaXMuZ3JlZW59LCAke3RoaXMuYmx1ZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYmEoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZSwgdGhpcy5hbHBoYV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZXgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcmdiMmhleChNYXRoLmZsb29yKHRoaXMucmVkKSwgTWF0aC5mbG9vcih0aGlzLmdyZWVuKSwgTWF0aC5mbG9vcih0aGlzLmJsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiByZ2IyaW50KHRoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUhleChjb2xvcjogc3RyaW5nKTogQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGV4MnJnYihjb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoLi4udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUludChjb2xvcjogbnVtYmVyKTogQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW50MnJnYihjb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoLi4udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemVkKCk6IENvbG9yIHtcclxuICAgICAgICBpZiAodGhpcy5yZWQgPiAxIHx8IHRoaXMuZ3JlZW4gPiAxIHx8IHRoaXMuYmx1ZSA+IDEgfHwgdGhpcy5hbHBoYSA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnJlZCAvIDI1NSwgdGhpcy5ncmVlbiAvIDI1NSwgdGhpcy5ibHVlIC8gMjU1LCB0aGlzLmFscGhhIC8gMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIEdlbmRlcn0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR2VuZGVyVHlwZSA9IFwiTUFOXCIgfCBcIldPTUFOXCIgfCBcIlwiO1xyXG5cclxuY29uc3QgbWFsZVJlZ2V4cCAgID0gL14obWFsZXxtYW58bXV6fGJveXxjaGxhcGVjfG0pJC9nO1xyXG5jb25zdCBmZW1hbGVSZWdleHAgPSAvXihmZW1hbGV8d29tYW58emVuYXxnaXJsfGRpZXZjYXxmfHd8eikkL2c7XHJcblxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gICAgTUFOICAgPSBcIk1BTlwiLFxyXG4gICAgV09NQU4gPSBcIldPTUFOXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUdlbmRlcihnZW5kZXI6IHN0cmluZyk6IEdlbmRlciB8IG51bGwge1xyXG4gICAgaWYgKCFnZW5kZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGdlbmRlckxvd2VyQ2FzZSA9IGdlbmRlci50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwixb5cIiwgXCJ6XCIpLnJlcGxhY2UoXCLEjVwiLCBcImNcIik7XHJcbiAgICBpZiAoZ2VuZGVyTG93ZXJDYXNlLm1hdGNoKG1hbGVSZWdleHApKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlbmRlci5NQU47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdlbmRlckxvd2VyQ2FzZS5tYXRjaChmZW1hbGVSZWdleHApKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlbmRlci5XT01BTjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcGFyc2VHZW5kZXJ9IGFuZCB7QGxpbmsgR2VuZGVyfSBpbnN0ZWFkXHJcbiAqIENsYXNzIGlzIHVzZWQgZm9yIHBhcnNpbmcgZ2VuZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2VuZGVyQ2xhc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcGFyc2Ugc3RyaW5nIGFuZCByZXR1cm4gR2VuZGVyVHlwZVxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBwYXJzZUdlbmRlcn0gaW5zdGVhZFxyXG4gICAgICogQHBhcmFtIGdlbmRlciBnZW5kZXIgaW4gYW55IGZvcm1hdFRpbWVcclxuICAgICAqIEByZXR1cm5zIHBhcnNlZCBnZW5kZXIgYXMge0BsaW5rIEdlbmRlclR5cGV9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2UgPSBwYXJzZUdlbmRlcjtcclxufVxyXG4iLCIvKipcclxuICogTW9kZWwgaXMgZW51bSBhbmQgcGFyc2VyXHJcbiAqL1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZ2VuZGVyLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbG9yLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RyYW5zZm9ybVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYW5nZVwiO1xyXG5cclxuLy8gVE9ETzogQ2Fubm90IGltcG9ydCBjb3VudHJpZXMuZGF0YS5qc29uXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2NvdW50cmllcy9jb3VudHJ5LmludGVyZmFjZVwiO1xyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5tb2RlbFwiO1xyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcbmltcG9ydCB7IHJhbmRvbUZsb2F0QmV0d2VlbiwgcmFuZG9tSW50QmV0d2VlbiB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL2NvbG9yLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZ2U8VD4ge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBtaW46IFQsIHB1YmxpYyByZWFkb25seSBtYXg6IFQgPSBtaW4pIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbShyYW5nZTogUmFuZ2U8bnVtYmVyPik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4sIHJhbmdlLm1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21WZWN0b3IocmFuZ2U6IFJhbmdlPFNpbXBsZVZlY3RvcjI+KTogU2ltcGxlVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogcmFuZG9tRmxvYXRCZXR3ZWVuKHJhbmdlLm1pbi54LCByYW5nZS5tYXgueCksXHJcbiAgICAgICAgICAgIHk6IHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4ueSwgcmFuZ2UubWF4LnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Db2xvckYocmFuZ2U6IFJhbmdlPENvbG9yPik6IENvbG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLnJlZCwgcmFuZ2UubWF4LnJlZCksXHJcbiAgICAgICAgICAgIHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4uZ3JlZW4sIHJhbmdlLm1heC5ncmVlbiksXHJcbiAgICAgICAgICAgIHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4uYmx1ZSwgcmFuZ2UubWF4LmJsdWUpLFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLmFscGhhLCByYW5nZS5tYXguYWxwaGEpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Db2xvckkocmFuZ2U6IFJhbmdlPENvbG9yPik6IENvbG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKFxyXG4gICAgICAgICAgICByYW5kb21JbnRCZXR3ZWVuKHJhbmdlLm1pbi5yZWQsIHJhbmdlLm1heC5yZWQpLFxyXG4gICAgICAgICAgICByYW5kb21JbnRCZXR3ZWVuKHJhbmdlLm1pbi5ncmVlbiwgcmFuZ2UubWF4LmdyZWVuKSxcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4uYmx1ZSwgcmFuZ2UubWF4LmJsdWUpLFxyXG4gICAgICAgICAgICByYW5kb21JbnRCZXR3ZWVuKHJhbmdlLm1pbi5hbHBoYSwgcmFuZ2UubWF4LmFscGhhKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNmb3JtIHtcclxuICAgIHJlYWRvbmx5IG9mZnNldDogUmVhZG9ubHk8U2ltcGxlVmVjdG9yMj47XHJcbiAgICByZWFkb25seSBzY2FsZTogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm90YXRpb246IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRUcmFuc2Zvcm0oKTogVHJhbnNmb3JtIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb2Zmc2V0ICA6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlICAgOiAxLFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lMmRDbG9zZXN0KFxyXG4gICAgc3gxOiBudW1iZXIsXHJcbiAgICBzeTE6IG51bWJlcixcclxuICAgIHN4MjogbnVtYmVyLFxyXG4gICAgc3kyOiBudW1iZXIsXHJcbiAgICBweDogbnVtYmVyLFxyXG4gICAgcHk6IG51bWJlcixcclxuKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IHhEZWx0YSA9IHN4MiAtIHN4MTtcclxuICAgIGNvbnN0IHlEZWx0YSA9IHN5MiAtIHN5MTtcclxuXHJcbiAgICBjb25zdCB1ID0gKChweCAtIHN4MSkgKiB4RGVsdGEgKyAocHkgLSBzeTEpICogeURlbHRhKSAvICh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEpO1xyXG5cclxuICAgIGlmICh1IDwgMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MSxcclxuICAgICAgICAgICAgeTogc3kxLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHUgPiAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogc3gyLFxyXG4gICAgICAgICAgICB5OiBzeTIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHN4MSArIHUgKiB4RGVsdGEsXHJcbiAgICAgICAgeTogc3kxICsgdSAqIHlEZWx0YSxcclxuICAgIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjMgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0UG9pbnRPbkxpbmUoXHJcbiAgICBzeDE6IG51bWJlcixcclxuICAgIHN5MTogbnVtYmVyLFxyXG4gICAgc3oxOiBudW1iZXIsXHJcbiAgICBzeDI6IG51bWJlcixcclxuICAgIHN5MjogbnVtYmVyLFxyXG4gICAgc3oyOiBudW1iZXIsXHJcbiAgICBweDogbnVtYmVyLFxyXG4gICAgcHk6IG51bWJlcixcclxuICAgIHB6OiBudW1iZXIsXHJcbik6IFNpbXBsZVZlY3RvcjMge1xyXG4gICAgY29uc3QgeERlbHRhID0gc3gyIC0gc3gxO1xyXG4gICAgY29uc3QgeURlbHRhID0gc3kyIC0gc3kxO1xyXG4gICAgY29uc3QgekRlbHRhID0gc3oyIC0gc3oxO1xyXG5cclxuICAgIGxldCB1ID0gKChweCAtIHN4MSkgKiB4RGVsdGEgKyAocHkgLSBzeTEpICogeURlbHRhICsgKHB6IC0gc3oxKSAqIHpEZWx0YSk7XHJcbiAgICB1IC89ICh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEgKyB6RGVsdGEgKiB6RGVsdGEpO1xyXG5cclxuICAgIGlmICh1IDwgMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MSxcclxuICAgICAgICAgICAgeTogc3kxLFxyXG4gICAgICAgICAgICB6OiBzejEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh1ID4gMSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MixcclxuICAgICAgICAgICAgeTogc3kyLFxyXG4gICAgICAgICAgICB6OiBzejIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHN4MSArIHUgKiB4RGVsdGEsXHJcbiAgICAgICAgeTogc3kxICsgdSAqIHlEZWx0YSxcclxuICAgICAgICB6OiBzejEgKyB1ICogekRlbHRhLFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBwb2ludFBvaW50MmREaXN0YW5jZSB9IGZyb20gXCIuL2Rpc3RhbmNlcy0yZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZVJlY3QyZENvbGxpc2lvbihcclxuICAgIGNQb3NYOiBudW1iZXIsXHJcbiAgICBjUG9zWTogbnVtYmVyLFxyXG4gICAgY1JhZGl1czogbnVtYmVyLFxyXG4gICAgclBvc1g6IG51bWJlcixcclxuICAgIHJQb3NZOiBudW1iZXIsXHJcbiAgICByU2l6ZVg6IG51bWJlcixcclxuICAgIHJTaXplWTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNpcmNsZURpc3RhbmNlWCA9IE1hdGguYWJzKGNQb3NYIC0gclBvc1gpO1xyXG4gICAgY29uc3QgY2lyY2xlRGlzdGFuY2VZID0gTWF0aC5hYnMoY1Bvc1kgLSByUG9zWSk7XHJcblxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWCA+IHJTaXplWCAvIDIgKyBjUmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWSA+IHJTaXplWSAvIDIgKyBjUmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaXJjbGVEaXN0YW5jZVggPD0gclNpemVYIC8gMikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWSA8PSByU2l6ZVkgLyAyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ybmVyRGlzdGFuY2VTUSA9XHJcbiAgICAgICAgICAgICAgTWF0aC5wb3coY2lyY2xlRGlzdGFuY2VYIC0gclBvc1ggLyAyLCAyKSArXHJcbiAgICAgICAgICAgICAgTWF0aC5wb3coY2lyY2xlRGlzdGFuY2VZIC0gclBvc1kgLyAyLCAyKTtcclxuXHJcbiAgICByZXR1cm4gY29ybmVyRGlzdGFuY2VTUSA8PSBNYXRoLnBvdyhjUmFkaXVzLCAyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVSZWN0YW5nbGUyZENvbGxpc2lvbihcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVg6IG51bWJlcixcclxuICAgIGJTaXplWTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFJlY3QyZENvbGxpc2lvbihhU3RhcnRYLCBhU3RhcnRZLCBiUG9zWCwgYlBvc1ksIGJTaXplWCwgYlNpemVZKSB8fFxyXG4gICAgICAgIHBvaW50UmVjdDJkQ29sbGlzaW9uKGFFbmRYLCBhRW5kWSwgYlBvc1gsIGJQb3NZLCBiU2l6ZVgsIGJTaXplWSkgfHxcclxuICAgICAgICBsaW5lTGluZTJkQ29sbGlzaW9uKGFTdGFydFgsXHJcbiAgICAgICAgICAgIGFTdGFydFksXHJcbiAgICAgICAgICAgIGFFbmRYLFxyXG4gICAgICAgICAgICBhRW5kWSxcclxuICAgICAgICAgICAgYlBvc1gsXHJcbiAgICAgICAgICAgIGJQb3NZLFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCxcclxuICAgICAgICAgICAgYlBvc1kgKyBiU2l6ZVkpIHx8XHJcbiAgICAgICAgbGluZUxpbmUyZENvbGxpc2lvbihhU3RhcnRYLFxyXG4gICAgICAgICAgICBhU3RhcnRZLFxyXG4gICAgICAgICAgICBhRW5kWCxcclxuICAgICAgICAgICAgYUVuZFksXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLFxyXG4gICAgICAgICAgICBiUG9zWSxcclxuICAgICAgICAgICAgYlBvc1gsXHJcbiAgICAgICAgICAgIGJQb3NZICsgYlNpemVZKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lTGluZTJkQ29sbGlzaW9uKFxyXG4gICAgYVN0YXJ0WDogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WTogbnVtYmVyLFxyXG4gICAgYUVuZFg6IG51bWJlcixcclxuICAgIGFFbmRZOiBudW1iZXIsXHJcbiAgICBiU3RhcnRYOiBudW1iZXIsXHJcbiAgICBiU3RhcnRZOiBudW1iZXIsXHJcbiAgICBiRW5kWDogbnVtYmVyLFxyXG4gICAgYkVuZFk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcblxyXG4gICAgY29uc3QgZGVub21pbmF0b3IgPSAoYUVuZFggLSBhU3RhcnRYKSAqIChiRW5kWSAtIGJTdGFydFkpIC0gKGFFbmRZIC0gYVN0YXJ0WSkgKiAoYkVuZFggLSBiU3RhcnRYKTtcclxuICAgIGNvbnN0IG51bWVyYXRvcjEgID0gKGFTdGFydFkgLSBiU3RhcnRZKSAqIChiRW5kWCAtIGJTdGFydFgpIC0gKGFTdGFydFggLSBiU3RhcnRYKSAqIChiRW5kWSAtIGJTdGFydFkpO1xyXG4gICAgY29uc3QgbnVtZXJhdG9yMiAgPSAoYVN0YXJ0WSAtIGJTdGFydFkpICogKGFFbmRYIC0gYVN0YXJ0WCkgLSAoYVN0YXJ0WCAtIGJTdGFydFgpICogKGFFbmRZIC0gYVN0YXJ0WSk7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGNvaW5jaWRlbnQgbGluZXMgKGhhcyBhIHByb2JsZW0sIHJlYWQgYmVsb3cpXHJcbiAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVtZXJhdG9yMSA9PT0gMCAmJiBudW1lcmF0b3IyID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHIgPSBudW1lcmF0b3IxIC8gZGVub21pbmF0b3I7XHJcbiAgICBjb25zdCBzID0gbnVtZXJhdG9yMiAvIGRlbm9taW5hdG9yO1xyXG5cclxuICAgIHJldHVybiByID49IDAgJiYgciA8PSAxICYmIChzID49IDAgJiYgcyA8PSAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF3OiBudW1iZXIsXHJcbiAgICBhaDogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBidzogbnVtYmVyLFxyXG4gICAgYmg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYnggKyBidyA+PSBheCAmJiBieSArIGJoID49IGF5ICYmIGJ4IDw9IGF4ICsgYXcgJiYgYnkgPD0gYXkgKyBhaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBhUmFkaXVzOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRQb2ludDJkRGlzdGFuY2UoYVgsIGFZLCBiWCwgYlkpIDw9IGFSYWRpdXMgKyBiUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBwb2ludFg6IG51bWJlcixcclxuICAgIHBvaW50WTogbnVtYmVyLFxyXG4gICAgcmVjdFg6IG51bWJlcixcclxuICAgIHJlY3RZOiBudW1iZXIsXHJcbiAgICByZWN0VzogbnVtYmVyLFxyXG4gICAgcmVjdEg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IHJlY3RYICYmXHJcbiAgICAgICAgcG9pbnRZID49IHJlY3RZICYmXHJcbiAgICAgICAgcG9pbnRYIDw9IHJlY3RYICsgcmVjdFcgJiZcclxuICAgICAgICBwb2ludFkgPD0gcmVjdFkgKyByZWN0SDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UmVjdE1pbk1heDJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIG1pblg6IG51bWJlcixcclxuICAgIG1pblk6IG51bWJlcixcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IG1pblggJiZcclxuICAgICAgICBwb2ludFkgPj0gbWluWSAmJlxyXG4gICAgICAgIHBvaW50WCA8PSBtYXhYICYmXHJcbiAgICAgICAgcG9pbnRZIDw9IG1heFk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludENpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIGNpcmNsZVg6IG51bWJlcixcclxuICAgIGNpcmNsZVk6IG51bWJlcixcclxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFBvaW50MmREaXN0YW5jZShwb2ludFgsIHBvaW50WSwgY2lyY2xlWCwgY2lyY2xlWSkgPD0gY2lyY2xlUmFkaXVzO1xyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aFwiO1xyXG5pbXBvcnQgeyBnZXRDbG9zZXN0UG9pbnRPbkxpbmUgfSBmcm9tIFwiLi9jbG9zZXN0LTNkXCI7XHJcbmltcG9ydCB7IHBvaW50UG9pbnQyZERpc3RhbmNlIH0gZnJvbSBcIi4vZGlzdGFuY2VzLTJkXCI7XHJcbmltcG9ydCB7IHBvaW50TGluZTNkRGlzdGFuY2UsIHBvaW50UG9pbnQzZERpc3RhbmNlIH0gZnJvbSBcIi4vZGlzdGFuY2VzLTNkXCI7XHJcbmltcG9ydCB7IHZlY3RvclNxdWFyZUludGVyc2VjdDNkIH0gZnJvbSBcIi4vaW50ZXJzZWN0cy0zZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaGVyZVNwaGVyZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGFSYWRpdXM6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkaXN0ID0gcG9pbnRQb2ludDNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieik7XHJcblxyXG4gICAgcmV0dXJuIGRpc3QgPD0gYVJhZGl1cyArIGJSYWRpdXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFNwaGVyZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkaXN0ID0gcG9pbnRQb2ludDNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieik7XHJcblxyXG4gICAgcmV0dXJuIGRpc3QgPD0gYlJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTcGhlcmUoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBzeDogbnVtYmVyLFxyXG4gICAgc3k6IG51bWJlcixcclxuICAgIHN6OiBudW1iZXIsXHJcbiAgICBzcjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludExpbmUzZERpc3RhbmNlKGF4LCBheSwgYXosIGJ4LCBieSwgYnosIHN4LCBzeSwgc3opIDwgc3I7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEludGVyc2VjdGlvblR5cGUge1xyXG4gICAgT1VUU0lERSAgICAgICAgICA9IFwiT1VUU0lERVwiLFxyXG4gICAgSU5TSURFICAgICAgICAgICA9IFwiSU5TSURFXCIsXHJcbiAgICBPTkVfSU5URVJTRUNUSU9OID0gXCJPTkVfSU5URVJTRUNUSU9OXCIsXHJcbiAgICBUV09fSU5URVJTRUNUSU9OID0gXCJUV09fSU5URVJTRUNUSU9OXCIsXHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVCb3gyKFxyXG4gICAgcDBYOiBudW1iZXIsXHJcbiAgICBwMFk6IG51bWJlcixcclxuICAgIHAwWjogbnVtYmVyLFxyXG4gICAgcDFYOiBudW1iZXIsXHJcbiAgICBwMVk6IG51bWJlcixcclxuICAgIHAxWjogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWluWjogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4gICAgbWF4WjogbnVtYmVyLFxyXG4gICAgcmVzdWx0OiBTaW1wbGVWZWN0b3IyLFxyXG4pOiBJbnRlcnNlY3Rpb25UeXBlIHtcclxuICAgIGNvbnN0IGRpclggICAgPSBwMVggLSBwMFg7XHJcbiAgICBjb25zdCBkaXJZICAgID0gcDFZIC0gcDBZO1xyXG4gICAgY29uc3QgZGlyWiAgICA9IHAxWiAtIHAwWjtcclxuICAgIGNvbnN0IGludkRpclggPSAxIC8gZGlyWDtcclxuICAgIGNvbnN0IGludkRpclkgPSAxIC8gZGlyWTtcclxuICAgIGNvbnN0IGludkRpclogPSAxIC8gZGlyWjtcclxuXHJcbiAgICBsZXQgdE5lYXI7XHJcbiAgICBsZXQgdEZhcjtcclxuICAgIGxldCB0eW1pbjtcclxuICAgIGxldCB0eW1heDtcclxuICAgIGxldCB0em1pbjtcclxuICAgIGxldCB0em1heDtcclxuXHJcbiAgICBpZiAoaW52RGlyWCA+PSAwKSB7XHJcbiAgICAgICAgdE5lYXIgPSAobWluWCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgICAgIHRGYXIgID0gKG1heFggLSBwMFgpICogaW52RGlyWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdE5lYXIgPSAobWF4WCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgICAgIHRGYXIgID0gKG1pblggLSBwMFgpICogaW52RGlyWDtcclxuICAgIH1cclxuICAgIGlmIChpbnZEaXJZID49IDApIHtcclxuICAgICAgICB0eW1pbiA9IChtaW5ZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICAgICAgdHltYXggPSAobWF4WSAtIHAwWSkgKiBpbnZEaXJZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eW1pbiA9IChtYXhZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICAgICAgdHltYXggPSAobWluWSAtIHAwWSkgKiBpbnZEaXJZO1xyXG4gICAgfVxyXG4gICAgaWYgKHROZWFyID4gdHltYXggfHwgdHltaW4gPiB0RmFyKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIH1cclxuICAgIGlmIChpbnZEaXJaID49IDApIHtcclxuICAgICAgICB0em1pbiA9IChtaW5aIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICAgICAgdHptYXggPSAobWF4WiAtIHAwWikgKiBpbnZEaXJaO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0em1pbiA9IChtYXhaIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICAgICAgdHptYXggPSAobWluWiAtIHAwWikgKiBpbnZEaXJaO1xyXG4gICAgfVxyXG4gICAgaWYgKHROZWFyID4gdHptYXggfHwgdHptaW4gPiB0RmFyKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIH1cclxuICAgIHROZWFyICAgID0gdHltaW4gPiB0TmVhciB8fCBpc05hTih0TmVhcikgPyB0eW1pbiA6IHROZWFyO1xyXG4gICAgdEZhciAgICAgPSB0eW1heCA8IHRGYXIgfHwgaXNOYU4odEZhcikgPyB0eW1heCA6IHRGYXI7XHJcbiAgICB0TmVhciAgICA9IHR6bWluID4gdE5lYXIgPyB0em1pbiA6IHROZWFyO1xyXG4gICAgdEZhciAgICAgPSB0em1heCA8IHRGYXIgPyB0em1heCA6IHRGYXI7XHJcbiAgICBsZXQgdHlwZSA9IEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIGlmICh0TmVhciA8IHRGYXIgJiYgdE5lYXIgPD0gMSAmJiB0RmFyID49IDApIHtcclxuICAgICAgICBpZiAodE5lYXIgPiAwICYmIHRGYXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHRGYXIgPSB0TmVhcjtcclxuICAgICAgICAgICAgdHlwZSA9IEludGVyc2VjdGlvblR5cGUuT05FX0lOVEVSU0VDVElPTjtcclxuICAgICAgICB9IGVsc2UgaWYgKHROZWFyIDwgMCAmJiB0RmFyIDwgMSkge1xyXG4gICAgICAgICAgICB0TmVhciA9IHRGYXI7XHJcbiAgICAgICAgICAgIHR5cGUgID0gSW50ZXJzZWN0aW9uVHlwZS5PTkVfSU5URVJTRUNUSU9OO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodE5lYXIgPCAwICYmIHRGYXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBJbnRlcnNlY3Rpb25UeXBlLklOU0lERTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlID0gSW50ZXJzZWN0aW9uVHlwZS5UV09fSU5URVJTRUNUSU9OO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQueCA9IHROZWFyO1xyXG4gICAgICAgIHJlc3VsdC55ID0gdEZhcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Qm94KFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYVdpZHRoOiBudW1iZXIsXHJcbiAgICBhSGVpZ2h0OiBudW1iZXIsXHJcbiAgICBhRGVwdGg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYXggPCBieCAmJiBheCArIGFXaWR0aCA+IGJ4ICYmXHJcbiAgICAgICAgYXkgPCBieSAmJiBheSArIGFIZWlnaHQgPiBieSAmJlxyXG4gICAgICAgIGF6IDwgYnogJiYgYXogKyBhRGVwdGggPiBiejtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Qm94TWluTWF4KFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWluWjogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4gICAgbWF4WjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBiUG9zWCA+PSBtaW5YICYmIGJQb3NZID49IG1pblkgJiYgYlBvc1ogPj0gbWluWiAmJlxyXG4gICAgICAgIGJQb3NYIDw9IG1heFggJiYgYlBvc1kgPj0gbWluWSAmJiBiUG9zWiA8PSBtYXhaO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUJveChcclxuICAgIGExeDogbnVtYmVyLFxyXG4gICAgYTF5OiBudW1iZXIsXHJcbiAgICBhMXo6IG51bWJlcixcclxuICAgIGEyeDogbnVtYmVyLFxyXG4gICAgYTJ5OiBudW1iZXIsXHJcbiAgICBhMno6IG51bWJlcixcclxuICAgIGJQb3NYOiBudW1iZXIsXHJcbiAgICBiUG9zWTogbnVtYmVyLFxyXG4gICAgYlBvc1o6IG51bWJlcixcclxuICAgIGJTaXplWDogbnVtYmVyLFxyXG4gICAgYlNpemVZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVosXHJcbiAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiAtIGJTaXplWixcclxuICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKSB8fFxyXG4gICAgICAgIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKGExeCwgYTF5LCBhMXosXHJcbiAgICAgICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSAtIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSAtIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiAtIGJTaXplWikgfHxcclxuICAgICAgICB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZChhMXgsIGExeSwgYTF6LFxyXG4gICAgICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKSB8fFxyXG4gICAgICAgIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKGExeCwgYTF5LCBhMXosXHJcbiAgICAgICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiAtIGJTaXplWik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lU3BoZXJlMihcclxuICAgIHAwWDogbnVtYmVyLFxyXG4gICAgcDBZOiBudW1iZXIsXHJcbiAgICBwMFo6IG51bWJlcixcclxuICAgIHAxWDogbnVtYmVyLFxyXG4gICAgcDFZOiBudW1iZXIsXHJcbiAgICBwMVo6IG51bWJlcixcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlcixcclxuICAgIGNlbnRlclo6IG51bWJlcixcclxuICAgIHJhZGl1c1NxdWFyZWQ6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZFggICAgPSBwMVggLSBwMFg7XHJcbiAgICBsZXQgZFkgICAgPSBwMVkgLSBwMFk7XHJcbiAgICBsZXQgZFogICAgPSBwMVogLSBwMFo7XHJcbiAgICBjb25zdCBub20gPSAoY2VudGVyWCAtIHAwWCkgKiBkWCArIChjZW50ZXJZIC0gcDBZKSAqIGRZICsgKGNlbnRlclogLSBwMFopICogZFo7XHJcbiAgICBjb25zdCBkZW4gPSBkWCAqIGRYICsgZFkgKiBkWSArIGRaICogZFo7XHJcbiAgICBjb25zdCB1ICAgPSBub20gLyBkZW47XHJcbiAgICBpZiAodSA8IDApIHtcclxuICAgICAgICBkWCA9IHAwWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgPSBwMFkgLSBjZW50ZXJZO1xyXG4gICAgICAgIGRaID0gcDBaIC0gY2VudGVyWjtcclxuICAgIH0gZWxzZSBpZiAodSA+IDEpIHtcclxuICAgICAgICBkWCA9IHAxWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgPSBwMVkgLSBjZW50ZXJZO1xyXG4gICAgICAgIGRaID0gcDFaIC0gY2VudGVyWjtcclxuICAgIH0gZWxzZSB7IC8vIGhhcyB0byBiZSA+PSAwIGFuZCA8PSAxXHJcbiAgICAgICAgY29uc3QgcFggPSBwMFggKyB1ICogZFg7XHJcbiAgICAgICAgY29uc3QgcFkgPSBwMFkgKyB1ICogZFk7XHJcbiAgICAgICAgY29uc3QgcFogPSBwMFogKyB1ICogZFo7XHJcbiAgICAgICAgZFggICAgICAgPSBwWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgICAgICAgPSBwWSAtIGNlbnRlclk7XHJcbiAgICAgICAgZFogICAgICAgPSBwWiAtIGNlbnRlclo7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXN0ID0gZFggKiBkWCArIGRZICogZFkgKyBkWiAqIGRaO1xyXG5cclxuICAgIHJldHVybiBkaXN0IDw9IHJhZGl1c1NxdWFyZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib3hCb3goXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBhdzogbnVtYmVyLFxyXG4gICAgYWg6IG51bWJlcixcclxuICAgIGFkOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBidzogbnVtYmVyLFxyXG4gICAgYmg6IG51bWJlcixcclxuICAgIGJkOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGF4ICsgYXcgPiBieCAmJiBieCArIGJ3ID4gYXggJiZcclxuICAgICAgICBheSArIGFoID4gYnkgJiYgYnkgKyBiaCA+IGF5ICYmXHJcbiAgICAgICAgYXogKyBhZCA+IGJ6ICYmIGJ6ICsgYmQgPiBhejtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50RWxsaXBzb2lkKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgYlNpemVYOiBudW1iZXIsXHJcbiAgICBiU2l6ZVk6IG51bWJlcixcclxuICAgIGJTaXplWjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFwb3NOZXdYID0gYXggLSBiUG9zWDtcclxuICAgIGNvbnN0IGFwb3NOZXdZID0gYXkgLSBiUG9zWTtcclxuICAgIGNvbnN0IGFwb3NOZXdaID0gYXogLSBiUG9zWjtcclxuXHJcbiAgICBjb25zdCB4YSA9IChhcG9zTmV3WCAqIGFwb3NOZXdYKSAvIChiU2l6ZVggKiBiU2l6ZVgpO1xyXG4gICAgY29uc3QgeWIgPSAoYXBvc05ld1kgKiBhcG9zTmV3WSkgLyAoYlNpemVZICogYlNpemVZKTtcclxuICAgIGNvbnN0IHpjID0gKGFwb3NOZXdaICogYXBvc05ld1opIC8gKGJTaXplWiAqIGJTaXplWik7XHJcblxyXG4gICAgcmV0dXJuIHhhICsgeWIgKyB6YyA8PSAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUVsbGlwc29pZChcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFTdGFydFo6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYUVuZFo6IG51bWJlcixcclxuICAgIGJQb3NYOiBudW1iZXIsXHJcbiAgICBiUG9zWTogbnVtYmVyLFxyXG4gICAgYlBvc1o6IG51bWJlcixcclxuICAgIGJTaXplWDogbnVtYmVyLFxyXG4gICAgYlNpemVZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwb2ludCA9IGdldENsb3Nlc3RQb2ludE9uTGluZShcclxuICAgICAgICBhU3RhcnRYLFxyXG4gICAgICAgIGFTdGFydFksXHJcbiAgICAgICAgYVN0YXJ0WixcclxuICAgICAgICBhRW5kWCxcclxuICAgICAgICBhRW5kWSxcclxuICAgICAgICBhRW5kWixcclxuICAgICAgICBiUG9zWCxcclxuICAgICAgICBiUG9zWSxcclxuICAgICAgICBiUG9zWixcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHBvaW50RWxsaXBzb2lkKHBvaW50LngsIHBvaW50LnksIHBvaW50LnosIGJQb3NYLCBiUG9zWSwgYlBvc1osIGJTaXplWCwgYlNpemVZLCBiU2l6ZVopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDeWxpbmRlcihcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuICAgIGJIZWlnaHQ6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb25kaXRpb25PbmUgPSBheSA+IGJ5ICYmIGF5IDwgYnkgKyBiSGVpZ2h0O1xyXG4gICAgY29uc3QgY29uZGl0aW9uVHdvID0gcG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF6LCBieCwgYnopIDwgYlJhZGl1cztcclxuXHJcbiAgICByZXR1cm4gY29uZGl0aW9uT25lICYmIGNvbmRpdGlvblR3bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaGVyZUN5bGluZGVyKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYVJhZGl1czogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYlJhZGl1czogbnVtYmVyLFxyXG4gICAgYkhlaWdodDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbk9uZSA9IGF5ICsgYVJhZGl1cyA+IGJ5ICYmIGF5IC0gYVJhZGl1cyA8IGJ5ICsgYkhlaWdodDtcclxuICAgIGNvbnN0IGNvbmRpdGlvblR3byA9IHBvaW50UG9pbnQyZERpc3RhbmNlKGF4LCBheiwgYngsIGJ6KSA8IGFSYWRpdXMgKyBiUmFkaXVzO1xyXG5cclxuICAgIHJldHVybiBjb25kaXRpb25PbmUgJiYgY29uZGl0aW9uVHdvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdFNwaGVyZUJveE1pbk1heChcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlcixcclxuICAgIGNlbnRlclo6IG51bWJlcixcclxuICAgIHJhZGl1c1NxdWFyZWQ6IG51bWJlcixcclxuICAgIG1pblg6IG51bWJlcixcclxuICAgIG1pblk6IG51bWJlcixcclxuICAgIG1pblo6IG51bWJlcixcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuICAgIG1heFo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcmFkaXVzMiA9IHJhZGl1c1NxdWFyZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBYIC0gbWluXHJcbiAgICAgKiBZIC0gbWF4XHJcbiAgICAgKiBaIC0gY2VudGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZ1bmMgICA9ICh2YWw6IFZlY3RvcjMpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGxldCBkID0gMDtcclxuICAgICAgICBpZiAodmFsLnogPCB2YWwueCkge1xyXG4gICAgICAgICAgICBkID0gdmFsLnogLSB2YWwueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbC56ID4gdmFsLnkpIHtcclxuICAgICAgICAgICAgZCA9IHZhbC56IC0gdmFsLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZCAqIGQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFZlY3RvcjMoKTtcclxuICAgIHJhZGl1czIgLT0gZnVuYyhwYXJhbXMuc2V0RGF0YShtaW5YLCBtYXhYLCBjZW50ZXJYKSk7XHJcbiAgICByYWRpdXMyIC09IGZ1bmMocGFyYW1zLnNldERhdGEobWluWSwgbWF4WSwgY2VudGVyWSkpO1xyXG4gICAgcmFkaXVzMiAtPSBmdW5jKHBhcmFtcy5zZXREYXRhKG1pblosIG1heFosIGNlbnRlclopKTtcclxuXHJcbiAgICByZXR1cm4gcmFkaXVzMiA+PSAwO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50MmREaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UG9pbnRTcXIyZERpc3RhbmNlKGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZGlzdFggPSBheCAtIGJ4O1xyXG4gICAgY29uc3QgZGlzdFkgPSBheSAtIGJ5O1xyXG5cclxuICAgIHJldHVybiBkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZTJkRGlzdGFuY2UoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGFyOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIgLSBhciwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVDaXJjbGVTcXIyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhcjogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBicjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KHBvaW50UG9pbnRTcXIyZERpc3RhbmNlKGF4LCBheSwgYngsIGJ5KSAtIGJyIC0gYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDaXJjbGUyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIsIDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDaXJjbGVTcXIyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIsIDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lMmREaXN0YW5jZShcclxuICAgIGFYOiBudW1iZXIsXHJcbiAgICBhWTogbnVtYmVyLFxyXG4gICAgYlg6IG51bWJlcixcclxuICAgIGJZOiBudW1iZXIsXHJcbiAgICBwWDogbnVtYmVyLFxyXG4gICAgcFk6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRMaW5lU3FyMmREaXN0YW5jZShhWCwgYVksIGJYLCBiWSwgcFgsIHBZKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludExpbmVTcXIyZERpc3RhbmNlKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIHBYOiBudW1iZXIsXHJcbiAgICBwWTogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3QgQSA9IHBYIC0gYVg7XHJcbiAgICBjb25zdCBCID0gcFkgLSBhWTtcclxuICAgIGNvbnN0IEMgPSBiWCAtIGFYO1xyXG4gICAgY29uc3QgRCA9IGJZIC0gYVk7XHJcblxyXG4gICAgY29uc3QgZG90ICAgICAgICAgID0gQSAqIEMgKyBCICogRDtcclxuICAgIGNvbnN0IGxlbmd0aFNxdWFyZSA9IEMgKiBDICsgRCAqIEQ7XHJcbiAgICBsZXQgcGFyYW0gICAgICAgICAgPSAtMTtcclxuICAgIGlmIChsZW5ndGhTcXVhcmUgIT09IDApIHtcclxuICAgICAgICBwYXJhbSA9IGRvdCAvIGxlbmd0aFNxdWFyZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeHg6IG51bWJlcjtcclxuICAgIGxldCB5eTogbnVtYmVyO1xyXG5cclxuICAgIGlmIChwYXJhbSA8IDApIHtcclxuICAgICAgICB4eCA9IGFYO1xyXG4gICAgICAgIHl5ID0gYVk7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtID4gMSkge1xyXG4gICAgICAgIHh4ID0gYlg7XHJcbiAgICAgICAgeXkgPSBiWTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeHggPSBhWCArIHBhcmFtICogQztcclxuICAgICAgICB5eSA9IGFZICsgcGFyYW0gKiBEO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGR4ID0gcFggLSB4eDtcclxuICAgIGNvbnN0IGR5ID0gcFkgLSB5eTtcclxuXHJcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIi4uL21hdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50M2REaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBhejogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyLCBiejogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRQb2ludFNxcjNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRQb2ludFNxcjNkRGlzdGFuY2UoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYXo6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlciwgYno6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaXN0WCA9IGF4IC0gYng7XHJcbiAgICBjb25zdCBkaXN0WSA9IGF5IC0gYnk7XHJcbiAgICBjb25zdCBkaXN0WiA9IGF6IC0gYno7XHJcblxyXG4gICAgcmV0dXJuIGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZICsgZGlzdFogKiBkaXN0WjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50TGluZTNkRGlzdGFuY2UoXHJcbiAgICBhU3RhcnRYOiBudW1iZXIsXHJcbiAgICBhU3RhcnRZOiBudW1iZXIsXHJcbiAgICBhU3RhcnRaOiBudW1iZXIsXHJcbiAgICBhRW5kWDogbnVtYmVyLFxyXG4gICAgYUVuZFk6IG51bWJlcixcclxuICAgIGFFbmRaOiBudW1iZXIsXHJcbiAgICBiQ2VudGVyWDogbnVtYmVyLFxyXG4gICAgYkNlbnRlclk6IG51bWJlcixcclxuICAgIGJDZW50ZXJaOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBhU3ViQnggPSBhU3RhcnRYIC0gYUVuZFg7XHJcbiAgICBjb25zdCBhU3ViQnkgPSBhU3RhcnRZIC0gYUVuZFk7XHJcbiAgICBjb25zdCBhU3ViQnogPSBhU3RhcnRaIC0gYUVuZFo7XHJcbiAgICBjb25zdCBwU3ViQnggPSBiQ2VudGVyWCAtIGFFbmRYO1xyXG4gICAgY29uc3QgcFN1YkJ5ID0gYkNlbnRlclkgLSBhRW5kWTtcclxuICAgIGNvbnN0IHBTdWJCeiA9IGJDZW50ZXJaIC0gYUVuZFo7XHJcbiAgICBjb25zdCBkb3RBICAgPSBhU3ViQnggKiBwU3ViQnggKyBhU3ViQnkgKiBwU3ViQnkgKyBhU3ViQnogKiBwU3ViQno7XHJcbiAgICBpZiAoZG90QSA8IDApIHtcclxuICAgICAgICByZXR1cm4gcG9pbnRQb2ludDNkRGlzdGFuY2UoYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWiwgYUVuZFgsIGFFbmRZLCBhRW5kWik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYlN1YkF4ID0gYUVuZFggLSBhU3RhcnRYO1xyXG4gICAgY29uc3QgYlN1YkF5ID0gYUVuZFkgLSBhU3RhcnRZO1xyXG4gICAgY29uc3QgYlN1YkF6ID0gYUVuZFogLSBhU3RhcnRaO1xyXG4gICAgY29uc3QgcFN1YkF4ID0gYkNlbnRlclggLSBhU3RhcnRYO1xyXG4gICAgY29uc3QgcFN1YkF5ID0gYkNlbnRlclkgLSBhU3RhcnRZO1xyXG4gICAgY29uc3QgcFN1YkF6ID0gYkNlbnRlclogLSBhU3RhcnRaO1xyXG4gICAgY29uc3QgZG90QiAgID0gYlN1YkF4ICogcFN1YkF4ICsgYlN1YkF5ICogcFN1YkF5ICsgYlN1YkF6ICogcFN1YkF6O1xyXG4gICAgaWYgKGRvdEIgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50UG9pbnQzZERpc3RhbmNlKGJDZW50ZXJYLCBiQ2VudGVyWSwgYkNlbnRlclosIGFTdGFydFgsIGFTdGFydFksIGFTdGFydFopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2ZWN0b3JQb2ludDNkRGlzdGFuY2UoYVN0YXJ0WCwgYVN0YXJ0WSwgYVN0YXJ0WiwgYUVuZFgsIGFFbmRZLCBhRW5kWiwgYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludE5vcm1hbFBsYW5lM2REaXN0YW5jZShhTm9ybWFsOiBWZWN0b3IzLCBhUG9pbnQ6IFZlY3RvcjMsIGJQb2ludDogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkID0gLVZlY3RvcjMubXVsKGFOb3JtYWwsIGFQb2ludCkuc3VtKCk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguYWJzKChWZWN0b3IzLm11bChhTm9ybWFsLCBiUG9pbnQpLnN1bSgpICsgZCkgLyBNYXRoLnNxcnQoVmVjdG9yMy5tdWwoYU5vcm1hbCwgYU5vcm1hbCkuc3VtKCkpKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvaW50UGxhbmUoVmVjdG9yMyBhMSwgVmVjdG9yMyBhMiwgVmVjdG9yMyBhMywgVmVjdG9yMyBiUG9pbnQpIHtcclxuLy8gICAgIHJldHVybiBwb2ludFBsYW5lKGEzLnN1YihhMikuY3Jvc3MoYTEuc3ViKGEyKSksIGExLCBiUG9pbnQpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjdG9yUG9pbnQzZERpc3RhbmNlKFxyXG4gICAgc3RhcnRYOiBudW1iZXIsXHJcbiAgICBzdGFydFk6IG51bWJlcixcclxuICAgIHN0YXJ0WjogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyLFxyXG4gICAgZW5kWjogbnVtYmVyLFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIHBvaW50WjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc3RhcnRTdWJFbmRYID0gc3RhcnRYIC0gZW5kWDtcclxuICAgIGNvbnN0IHN0YXJ0U3ViRW5kWSA9IHN0YXJ0WSAtIGVuZFk7XHJcbiAgICBjb25zdCBzdGFydFN1YkVuZFogPSBzdGFydFogLSBlbmRaO1xyXG5cclxuICAgIGNvbnN0IGVuZFN1YlBvaW50WCA9IGVuZFggLSBwb2ludFg7XHJcbiAgICBjb25zdCBlbmRTdWJQb2ludFkgPSBlbmRZIC0gcG9pbnRZO1xyXG4gICAgY29uc3QgZW5kU3ViUG9pbnRaID0gZW5kWiAtIHBvaW50WjtcclxuXHJcbiAgICBjb25zdCBjcm9zc1ggPSBzdGFydFN1YkVuZFkgKiBlbmRTdWJQb2ludFogLSBzdGFydFN1YkVuZFogKiBlbmRTdWJQb2ludFk7XHJcbiAgICBjb25zdCBjcm9zc1kgPSBzdGFydFN1YkVuZFogKiBlbmRTdWJQb2ludFggLSBzdGFydFN1YkVuZFggKiBlbmRTdWJQb2ludFo7XHJcbiAgICBjb25zdCBjcm9zc1ogPSBzdGFydFN1YkVuZFggKiBlbmRTdWJQb2ludFkgLSBzdGFydFN1YkVuZFkgKiBlbmRTdWJQb2ludFg7XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoMSA9IE1hdGguc3FydChjcm9zc1ggKiBjcm9zc1ggKyBjcm9zc1kgKiBjcm9zc1kgKyBjcm9zc1ogKiBjcm9zc1opO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IE1hdGguc3FydChzdGFydFN1YkVuZFggKiBzdGFydFN1YkVuZFggKyBzdGFydFN1YkVuZFkgKiBzdGFydFN1YkVuZFkgKyBzdGFydFN1YkVuZFogKiBzdGFydFN1YkVuZFopO1xyXG5cclxuICAgIHJldHVybiBsZW5ndGgxIC8gbGVuZ3RoMjtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jbG9zZXN0LTJkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Nsb3Nlc3QtM2RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sbGlzaW9ucy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsaXNpb25zLTNkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Rpc3RhbmNlcy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kaXN0YW5jZXMtM2RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaW50ZXJzZWN0cy0zZFwiO1xyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IzLCBWZWN0b3IzIH0gZnJvbSBcIi4uL21hdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZChcclxuICAgIHIxeDogbnVtYmVyLFxyXG4gICAgcjF5OiBudW1iZXIsXHJcbiAgICByMXo6IG51bWJlcixcclxuICAgIHIyeDogbnVtYmVyLFxyXG4gICAgcjJ5OiBudW1iZXIsXHJcbiAgICByMno6IG51bWJlcixcclxuICAgIHMxeDogbnVtYmVyLFxyXG4gICAgczF5OiBudW1iZXIsXHJcbiAgICBzMXo6IG51bWJlcixcclxuICAgIHMyeDogbnVtYmVyLFxyXG4gICAgczJ5OiBudW1iZXIsXHJcbiAgICBzMno6IG51bWJlcixcclxuICAgIHMzeDogbnVtYmVyLFxyXG4gICAgczN5OiBudW1iZXIsXHJcbiAgICBzM3o6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2RfMihcclxuICAgICAgICBuZXcgVmVjdG9yMyhyMXgsIHIxeSwgcjF6KSxcclxuICAgICAgICBuZXcgVmVjdG9yMyhyMngsIHIyeSwgcjJ6KSxcclxuICAgICAgICBuZXcgVmVjdG9yMyhzMXgsIHMxeSwgczF6KSxcclxuICAgICAgICBuZXcgVmVjdG9yMyhzMngsIHMyeSwgczJ6KSxcclxuICAgICAgICBuZXcgVmVjdG9yMyhzM3gsIHMzeSwgczN6KSxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZF8yKFxyXG4gICAgUjE6IFNpbXBsZVZlY3RvcjMsXHJcbiAgICBSMjogU2ltcGxlVmVjdG9yMyxcclxuICAgIFMxOiBTaW1wbGVWZWN0b3IzLFxyXG4gICAgUzI6IFNpbXBsZVZlY3RvcjMsXHJcbiAgICBTMzogU2ltcGxlVmVjdG9yMyxcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkUzIxID0gVmVjdG9yMy5zdWIoUzIsIFMxKTtcclxuICAgIGNvbnN0IGRTMzEgPSBWZWN0b3IzLnN1YihTMywgUzEpO1xyXG4gICAgY29uc3QgZFIgICA9IFZlY3RvcjMuc3ViKFIxLCBSMik7XHJcbiAgICBjb25zdCBuICAgID0gZFMyMS5jcm9zcyhkUzMxKTtcclxuXHJcbiAgICBjb25zdCBuZG90ZFIgPSBuLmRvdChkUik7XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKG5kb3RkUikgPCAxZS02KSB7IC8vIENob29zZSB5b3VyIHRvbGVyYW5jZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ID0gLW4uZG90KFZlY3RvcjMuc3ViKFIxLCBTMSkpIC8gbmRvdGRSO1xyXG4gICAgY29uc3QgTSA9IFZlY3RvcjMuYWRkKFIxLCBkUi5tdWwodCkpO1xyXG5cclxuICAgIGNvbnN0IGRNUzEgPSBNLnN1YihTMSk7XHJcbiAgICBjb25zdCB1ICAgID0gZE1TMS5kb3QoZFMyMSk7XHJcbiAgICBjb25zdCB2ICAgID0gZE1TMS5kb3QoZFMzMSk7XHJcblxyXG4gICAgcmV0dXJuICh1ID49IDAgJiYgdSA8PSBkUzIxLmRvdChkUzIxKSAmJiB2ID49IDAgJiYgdiA8PSBkUzMxLmRvdChkUzMxKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RGaXh0dXJlIH0gZnJvbSBcIi4vYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1hcHBlciB9IGZyb20gXCIuL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGF0YWJhc2VGaXh0dXJlPE9iaiwgT2JqRHRvPiBleHRlbmRzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBsaXN0RHRvOiBPYmpEdG9bXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWxEdG86IE9iakR0bztcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobGlzdDogT2JqW10sIG1hcHBlcjogQWJzdHJhY3RNYXBwZXI8T2JqLCBPYmpEdG8+KSB7XHJcbiAgICAgICAgc3VwZXIobGlzdCk7XHJcbiAgICAgICAgdGhpcy5saXN0RHRvICAgPSBsaXN0Lm1hcChtYXBwZXIubWFwVG9EdG8sIG1hcHBlcik7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxEdG8gPSB0aGlzLmxpc3REdG9bMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWw6IE9iajtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxpc3Q6IE9ialtdKSB7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBsaXN0WzBdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4ge1xyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcFRvRHRvKG9iamVjdDogUGFydGlhbDxPYmo+KTogT2JqRHRvO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBtYXBGcm9tRHRvKG9iamVjdDogUGFydGlhbDxPYmpEdG8+KTogT2JqO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQYWdpbmF0ZU1vZGVsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVRFTVNfUEVSX1BBR0UgPSAxMDtcclxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudCA9IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UsIG9mZnNldCA9IDApIHtcclxuICAgICAgICB0aGlzLmxpbWl0ICA9ICtjb3VudDtcclxuICAgICAgICB0aGlzLm9mZnNldCA9ICtvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShwYWdpbmF0ZT86IFBhZ2luYXRlTW9kZWwpOiBQYWdpbmF0ZU1vZGVsIHtcclxuICAgICAgICBpZiAoIXBhZ2luYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnaW5hdGVNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKFxyXG4gICAgICAgICAgICBpc05hTihwYWdpbmF0ZS5saW1pdCkgPyBQYWdpbmF0ZU1vZGVsLklURU1TX1BFUl9QQUdFIDogcGFnaW5hdGUubGltaXQsXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLm9mZnNldCkgPyAwIDogcGFnaW5hdGUub2Zmc2V0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaG9yaXpvbnRhbC1hbGlnbi50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmVzdGVkLXN0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb3B0aW9uYWwudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2l6ZS5pbnRlcmFmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHQtb3B0aW9ucy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdW5pdC1udW1iZXIudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXkyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JheTNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4veHl3aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9taW4tbWF4LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb3VuZC1kYXRhLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVydGljYWwtYWxpZ24udHlwZVwiO1xyXG4iLCIvKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBJbnRlcm5ldCBleHBsb3JlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSUUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBJbnRlcm5ldCBleHBsb3JlciA2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJRTYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA2XCIpID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIEludGVybmV0IGV4cGxvcmVyIDExXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJRTExKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgRWRnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWRnZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgU2FmYXJ5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpID49IDAgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWUvXCIpIDwgMCAmJlxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2UvXCIpIDwgMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgSU9TXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJT1MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkvZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIENocm9tZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lQXBwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KT8uY2hyb21lPy5hcHA/LnJ1bnRpbWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgb25NZXNzYWdlIFdpbmRvd3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1dpbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiV2luXCIpID4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBvbk1lc3NhZ2UgTWFjIE9TXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNYWMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1hY1wiKSA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgQ2hyb21lIE9TXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWVPcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAvXFxiQ3JPU1xcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBkZXZpY2Ugc3VwcG9ydCB0b3VjaCBldmVudHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RvdWNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGRldmljZSBzdXBwb3J0IG1vdXNlIGV2ZW50c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc01vdXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFwib25tb3VzZW1vdmVcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zdCBhcnJheSA9IFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCB7bmFtZTogXCJKb2FjaGltXCIsIGFnZTogMTV9LCB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICogIGNvbnN0IGNvbmRpdGlvbnMgPSB7YWdlOiAyMywgbmFtZTogXCJNb25pY2FcIn1cclxuICogIHdoZXJlKGFycmF5LCBjb25kaXRpb25zKTsgLy8gW3tuYW1lOiBcIk1pY2hhZWxcIiwgYWdlOiAyM30sICB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGVyZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KGFycmF5OiBUW10sIGNvbmRpdGlvbjogUGFydGlhbDxUPik6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZGl0aW9uIHx8IHR5cGVvZiBjb25kaXRpb24gIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBUW10gICAgICA9IFtdO1xyXG4gICAgY29uc3QgY29uZGl0aW9uRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGNvbmRpdGlvbik7XHJcblxyXG4gICAgYXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZCA9IGNvbmRpdGlvbkVudHJpZXMuc29tZSgoY29uZGl0aW9uRW50cnkpID0+IGVbY29uZGl0aW9uRW50cnlbMF0gYXMga2V5b2YgVF0gPT09IGNvbmRpdGlvbkVudHJ5WzFdKTtcclxuICAgICAgICBpZiAoYWRkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiBzdWIgYXJyYXkgZnJvbSBhcnJheVxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIEFycmF5LnByb3RvdHlwZS5zbGljZX0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gYXJyYXkgLSBpbnB1dCBhcnJheVxyXG4gKiBAcGFyYW0gbWluSW5kZXggLSBzdGFydCBpbmRleFxyXG4gKiBAcGFyYW0gbWF4SW5kZXggLSBlbmQgaW5kZXhcclxuICogQHJldHVybnMgZmluYWwgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJBcnJheTxUID0gYW55PihhcnJheTogVFtdLCBtaW5JbmRleCA9IDAsIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMSk6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXTtcclxuICAgIGNvbnN0IGZpbmFsICAgICAgID0gYXJyYXkubGVuZ3RoIDwgbWF4SW5kZXggPyBhcnJheS5sZW5ndGggLSAxIDogbWF4SW5kZXg7XHJcbiAgICBmb3IgKGxldCBpID0gbWluSW5kZXg7IGkgPD0gZmluYWw7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGFycmF5W2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm4gbWF4aW1hbCB2YWx1ZSBmcm9tIG51bWVyaWMgYXJyYXlcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBtYXhpbWFsIG51bWJlciBmcm9tIGFycmF5XHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWF0aC5tYXh9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXgoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSA+IGIgPyBhIDogYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm4gbWluaW1hbCB2YWx1ZSBmcm9tIG51bWVyaWMgYXJyYXlcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBtaW5pbWFsIG51bWJlciBmcm9tIGFycmF5XHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWF0aC5taW59IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW4oYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSA8IGIgPyBhIDogYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm4gdG90YWwgdmFsdWUgb2YgYWxsIGVsZW1lbnRzIGluIG51bWVyaWMgYXJyYXlcclxuICogQGV4YW1wbGVcclxuICogIHN1bShbMSwgMiwgMywgNCwgNV0pID0+IDE1XHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgc3VtbWFyeSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5zIGF2ZXJhZ2Ugb2YgbnVtZXJpYyBhcnJheSBnaXZlbiBhcyBpbnB1dFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgYXZnKFsxLCAyLCAzLCA0LCA1XSkgPT4gM1xyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIGF2ZXJhZ2Ugb2YgYWxsIG51bWJlcnMgaW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmcoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gYXJyYXkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gam9pbiBhcnJheSBieSBkZWxpbWl0ZXIgYW5kIGFwcGVuZCBwcmVmaXggYW5kIHBvc3RmaXhcclxuICogQGV4YW1wbGVcclxuICogIGpvaW4oW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiXSwgXCJcIikgPT4gYWJjZFxyXG4gKiAgam9pbihbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCJdLCBcIj1cIikgPT4gYT1iPWM9ZFxyXG4gKiAgam9pbihbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCJdLCBcIj1cIiwgXCI+PlwiLCBcIjw8XCIpID0+ID4+YT1iPWM9ZDw8XHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcGFyYW0gZGVsaW1pdGVyIC0gY2hhcmFjdGVyIHVzZWQgZm9yIGpvaW4gZWxlbWVudHMgaW4gYXJyYXlcclxuICogQHBhcmFtIHByZWZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGJlZ2lubmluZyBvZiBmaW5hbCBzdHJpbmdcclxuICogQHBhcmFtIHBvc3RmaXggLSBzdHJpbmcgYXBwZW5kIGF0IHRoZSBlbmQgb2YgZmluYWwgc3RyaW5nXHJcbiAqIEByZXR1cm5zIGZpbmFsIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW48VD4oYXJyYXk6IFRbXSwgZGVsaW1pdGVyOiBzdHJpbmcsIHByZWZpeCA9IFwiXCIsIHBvc3RmaXggPSBcIlwiKTogc3RyaW5nIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgYXJyYXkgKyBwb3N0Zml4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmVmaXggKyBhcnJheS5qb2luKGRlbGltaXRlcikgKyBwb3N0Zml4O1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybnMgbGFzdCBlbGVtZW50IGZyb20gYXJyYXkgb3IgbnVsbCBpZiBhcnJheSBpcyBlbXB0eS4gSWYgYXJndW1lbnQgaXMgbm90IGFycmF5LCBtZXRob2QgcmV0dXJucyBhcmd1bWVudFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgZ2V0TGFzdChbXSkgPT4gdW5kZWZpbmVkXHJcbiAqICBnZXRMYXN0KFtcImFcIiwgXCJiXCJdKSA9PiBiXHJcbiAqICBnZXRMYXN0KFs1LCA2XSkgPT4gNlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHJldHVybnMgbGFzdCB2YWx1ZSBmcm9tIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdDxUPihhcnJheTogVFtdKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCByZXR1cm5zIHJhbmRvbSBlbGVtZW50IGZyb20gYXJyYXlcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEByZXR1cm5zIHJhbmRvbSB2YWx1ZSBmcm9tIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSXRlbTxUID0gdW5rbm93bj4oYXJyYXk6IFRbXSk6IFQgfCBudWxsIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TlJhbmRvbTxUPihhcmdzOiBUW10sIGNvdW50OiBudW1iZXIpOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDAgfHwgY291bnQgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPD0gY291bnQpIHtcclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PFQ+KCk7XHJcblxyXG4gICAgd2hpbGUgKHJlc3VsdC5zaXplIDw9IGNvdW50KSB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tSXRlbSA9IGdldFJhbmRvbUl0ZW08VD4oYXJncyk7XHJcbiAgICAgICAgaWYgKHJhbmRvbUl0ZW0pIHtcclxuICAgICAgICAgICAgcmVzdWx0LmFkZChyYW5kb21JdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb208VD4ocmVzdWx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCByZXR1cm4gY29weSBvZiBhcnJheSB3aXRoIG9ubHkgZGlzdGluY3QgZWxlbWVudHNcclxuICogQGV4YW1wbGVcclxuICogIG1ha2VVbmlxdWUoWzUsIDUsIDMsIDIsIDEsIDQsIDUsIDRdKSA9PT4gWzUsIDMsIDIsIDEsIDRdXHJcbiAqICBtYWtlVW5pcXVlKFtcIjVcIiwgXCI1XCIsIFwiM1wiLCBcIjJcIiwgXCIxXCIsIFwiNFwiLCBcIjVcIiwgXCI0XCJdKSA9PT4gW1wiNVwiLCBcIjNcIiwgXCIyXCIsIFwiMVwiLCBcIjRcIl1cclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgd2l0aCBkdXBsaWNhdGUgZWxlbWVudHNcclxuICogQHJldHVybnMgdW5pcXVlIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVuaXF1ZTxUPihhcnJheTogVFtdKTogVFtdIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldDxUPihhcnJheSkpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZSAyIGFycmF5IGVhY2ggb3RoZXJcclxuICogQHBhcmFtIGFyclxyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlYWNoT3RoZXI8VD4oYXJyOiBUW10sIGNhbGxiYWNrOiAoYTogVCwgYjogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgYXJyLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZSwgYXJyW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY29lcmNlQm9vbGVhblByb3BlcnR5PFQ+KHZhbHVlOiBUKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gXCJmYWxzZVwiO1xyXG59XHJcbiIsImltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vbWF0aC11dGlsc1wiO1xyXG5cclxuY29uc3QgY29sb3JzOiB7IFtjb2xvcjogc3RyaW5nXTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIH0gPSB7XHJcbiAgICBibGFjazogWzAsIDAsIDBdLFxyXG4gICAgd2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcclxuICAgIHJlZCAgOiBbMjU1LCAwLCAwXSxcclxuICAgIGdyZWVuOiBbMCwgMjU1LCAwXSxcclxuICAgIGJsdWUgOiBbMCwgMCwgMjU1XSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwQ29sb3IoXHJcbiAgICBmcm9tQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgdG9Db2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXHJcbiAgICBwcm9ncmVzczogbnVtYmVyLFxyXG4pOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCByZWQgICA9IHByb2dyZXNzICogZnJvbUNvbG9yWzBdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzBdO1xyXG4gICAgY29uc3QgZ3JlZW4gPSBwcm9ncmVzcyAqIGZyb21Db2xvclsxXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclsxXTtcclxuICAgIGNvbnN0IGJsdWUgID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMl0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMl07XHJcbiAgICBjb25zdCBhbHBoYSA9IHByb2dyZXNzICogZnJvbUNvbG9yWzNdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzNdO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgY2xhbXAocmVkLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGdyZWVuLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGJsdWUsIDAsIDI1NSksXHJcbiAgICAgICAgY2xhbXAoYWxwaGEsIDAsIDI1NSksXHJcbiAgICBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycEhleGFDb2xvcihhOiBzdHJpbmcsIGI6IHN0cmluZywgYW1vdW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYWggPSArYS5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpO1xyXG4gICAgY29uc3QgYXIgPSBhaCA+PiAxNjtcclxuICAgIGNvbnN0IGFnID0gYWggPj4gOCAmIDB4RkY7XHJcbiAgICBjb25zdCBhYiA9IGFoICYgMHhGRjtcclxuICAgIGNvbnN0IGJoID0gK2IucmVwbGFjZShcIiNcIiwgXCIweFwiKTtcclxuICAgIGNvbnN0IGJyID0gYmggPj4gMTY7XHJcbiAgICBjb25zdCBiZyA9IGJoID4+IDggJiAweEZGO1xyXG4gICAgY29uc3QgYmIgPSBiaCAmIDB4RkY7XHJcbiAgICBjb25zdCByciA9IGFyICsgYW1vdW50ICogKGJyIC0gYXIpO1xyXG4gICAgY29uc3QgcmcgPSBhZyArIGFtb3VudCAqIChiZyAtIGFnKTtcclxuICAgIGNvbnN0IHJiID0gYWIgKyBhbW91bnQgKiAoYmIgLSBhYik7XHJcblxyXG4gICAgcmV0dXJuIFwiI1wiICsgKCgxIDw8IDI0KSArIChyciA8PCAxNikgKyAocmcgPDwgOCkgKyByYiB8IDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJyZ2IoY29sb3I6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChjb2xvci5zbGljZSgxKSwgMTYpO1xyXG5cclxuICAgIHJldHVybiBbbnVtID4+IDE2LCBudW0gPj4gOCAmIDB4MDBGRiwgbnVtICYgMHgwMDAwRkZdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hhZGVDb2xvcihjb2xvcjogc3RyaW5nLCBwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gaGV4MnJnYihjb2xvcik7XHJcbiAgICBjb25zdCBhbXQgPSBNYXRoLnJvdW5kKDIuNTUgKiBwZXJjZW50KTtcclxuICAgIGNvbnN0IFIgICA9IG51bVswXSArIGFtdDtcclxuICAgIGNvbnN0IEcgICA9IG51bVsxXSArIGFtdDtcclxuICAgIGNvbnN0IEIgICA9IG51bVsyXSArIGFtdDtcclxuXHJcbiAgICByZXR1cm4gcmdiMmhleChSLCBHLCBCKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYjJoZXgoUjogbnVtYmVyLCBHOiBudW1iZXIsIEI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCIjXCIgKyAoMHgxMDAwMDAwICsgKFIgPCAyNTUgPyBSIDwgMSA/IDAgOiBSIDogMjU1KSAqIDB4MTAwMDAgK1xyXG4gICAgICAgIChHIDwgMjU1ID8gRyA8IDEgPyAwIDogRyA6IDI1NSkgKiAweDEwMCArXHJcbiAgICAgICAgKEIgPCAyNTUgPyBCIDwgMSA/IDAgOiBCIDogMjU1KSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW50MmhleCh2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZSAgPSB2YWwudG9TdHJpbmcoMTYpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gXCIwMDAwMDBcIi5zdWJzdHIoMCwgNiAtIHZhbHVlLmxlbmd0aCkgKyB2YWx1ZTtcclxuXHJcbiAgICByZXR1cm4gXCIjXCIgKyByZXN1bHQudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludDJyZ2IodmFsOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB2YWwgPj4gMTYsXHJcbiAgICAgICAgdmFsID4+IDggJiAweEZGLFxyXG4gICAgICAgIHZhbCAmIDB4RkYsXHJcbiAgICBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4MmludCh2YWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxNik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IyaW50KFI6IG51bWJlciwgRzogbnVtYmVyLCBCOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFIgPDwgMTYgfCBHIDw8IDggJiAweEZGRkYgfCBCO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb2xvcihjb2xvcjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmIChjb2xvcnNbY29sb3JdKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tjb2xvcl07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGV4YU1hdGNoID0gY29sb3IubWF0Y2goL14jKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8pO1xyXG4gICAgaWYgKGhleGFNYXRjaCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFsxXSwgMTYpLFxyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbMl0sIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzNdLCAxNiksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZ2JhTWF0aCA9IGNvbG9yLm1hdGNoKC9yZ2JhP1xcKChcXGR7MSwzfSkgKiwgKihcXGR7MSwzfSkgKiwgKihcXGR7MSwzfSkoICosICpcXGQqLj9cXGQqKVxcKS8pO1xyXG4gICAgaWYgKHJnYmFNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbMV0sIDEwKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbMl0sIDEwKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbM10sIDEwKSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwYXJzZSBjb2xvcjogXCIgKyBjb2xvcik7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlPFQgZXh0ZW5kcyBudW1iZXIgfCBzdHJpbmcgfCBEYXRlPihvYmo6IFQpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG9iaik7XHJcblxyXG4gICAgICAgIHJldHVybiAhaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiAoTm9kZSB8IHN0cmluZylbXSB8IE5vZGUgfCBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9uQ2xpY2s/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9uSW5wdXQ/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHN0eWxlcz86IHsgW3N0eWxlIGluIGtleW9mIENTU1N0eWxlRGVjbGFyYXRpb25dPzogQ1NTU3R5bGVEZWNsYXJhdGlvbltzdHlsZV0gfTtcclxuICAgIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxuICAgIGZvcj86IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgYXV0b3BsYXk/OiBib29sZWFuO1xyXG4gICAgaHJlZj86IHN0cmluZztcclxuICAgIGRvd25sb2FkPzogc3RyaW5nO1xyXG4gICAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb1N0cmluZyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCkuam9pbihcIi5cIik7XHJcbiAgICBjb25zdCBpZCAgICAgID0gZWxlbWVudC5pZCA/IFwiI1wiICsgZWxlbWVudC5pZCA6IFwiXCI7XHJcbiAgICBjb25zdCBwYXJlbnQgID0gZWxlbWVudC5wYXJlbnRFbGVtZW50ID8gZWxlbWVudFRvU3RyaW5nKGVsZW1lbnQucGFyZW50RWxlbWVudCkgKyBcIiA+IFwiIDogXCJcIjtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50ICsgZWxlbWVudC5sb2NhbE5hbWUgKyBpZCArIChjbGFzc2VzID8gXCIuXCIgKyBjbGFzc2VzIDogXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgaGVhZGVyU2VsZWN0b3IgPSBcIi5oZWFkZXJcIik6IHsgY2xlYXI6ICgpID0+IHZvaWQgfSB7XHJcbiAgICBsZXQgcG9zMSA9IDA7XHJcbiAgICBsZXQgcG9zMiA9IDA7XHJcbiAgICBsZXQgcG9zMyA9IDA7XHJcbiAgICBsZXQgcG9zNCA9IDA7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudERyYWcgPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3MxICAgICAgICAgICAgICAgPSBwb3MzIC0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczIgICAgICAgICAgICAgICA9IHBvczQgLSBlLmNsaWVudFk7XHJcbiAgICAgICAgcG9zMyAgICAgICAgICAgICAgID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczQgICAgICAgICAgICAgICA9IGUuY2xpZW50WTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCAgPSBlbGVtZW50Lm9mZnNldFRvcCAtIHBvczIgKyBcInB4XCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0IC0gcG9zMSArIFwicHhcIjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZHJhZ01vdXNlRG93biA9IChlOiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHBvczMgICAgICAgICAgICAgICAgICAgPSBlLmNsaWVudFg7XHJcbiAgICAgICAgcG9zNCAgICAgICAgICAgICAgICAgICA9IGUuY2xpZW50WTtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCAgID0gY2xvc2VEcmFnRWxlbWVudDtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gZWxlbWVudERyYWc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXJTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VEcmFnRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCAgID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlSW1hZ2Uob3B0aW9ucz86IEVsZW1lbnRBdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1wiaW1nXCJdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IENyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgb3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTKSB7XHJcbiAgICAgICAgcmVzdWx0LmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3gobGFiZWw6IHN0cmluZywgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkLCBjaGVja2VkID0gZmFsc2UpOiBIVE1MTGFiZWxFbGVtZW50IHtcclxuICAgIGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IENyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICB0eXBlICAgIDogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiBvbkNoYW5nZShpbnB1dEVsZW1lbnQuY2hlY2tlZCksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gQ3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IFwiY2hlY2tib3gtY29udGFpbmVyXCIsXHJcbiAgICAgICAgY2hpbGRyZW4gOiBbbGFiZWwsIGlucHV0RWxlbWVudCwgQ3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJjaGVja21hcmtcIn0pXSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPih0eXBlOiBLLCBvcHRpb25zPzogRWxlbWVudEF0dHJpYnV0ZXMpOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudDxLPih0eXBlKTtcclxuICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGVudHJ5WzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGFzc05hbWVcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5jbGFzc05hbWUgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib25DaGFuZ2VcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib25DbGlja1wiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrZWRcIjpcclxuICAgICAgICAgICAgICAgIChyZXN1bHQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IGVudHJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHlsZXNcIjpcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGVudHJ5WzFdKS5mb3JFYWNoKChzdHlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0eWxlW3N0eWxlRW50cnlbMF0gYXMgYW55XSA9IHN0eWxlRW50cnlbMV0gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoaWxkcmVuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeVsxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwZW5kKC4uLmVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGVuZChlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbnRlbnRcIjpcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShlbnRyeVswXSwgZW50cnlbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUT0RPOiBlbGVtZW50IHJlbWFpbnMgYWZ0ZXIgZGVsZXRpb24gb25NZXNzYWdlIHNjcmVlblxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtcGFyYW0tbGFzdFxyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlQ29sb3JVc2luZ0RlZmF1bHRJbnB1dChjb2xvciA9IFwiIzAwMDAwMFwiLCBvbklucHV0PzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgICAgICB0eXBlICAgICA6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICB2YWx1ZSAgICA6IGNvbG9yLFxyXG4gICAgICAgICAgICBvbklucHV0OiB0eXBlb2Ygb25JbnB1dCA9PT0gXCJmdW5jdGlvblwiID8gKCkgPT4gb25JbnB1dChpbnB1dC52YWx1ZSkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlIDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZTxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBLLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10+KGAke3R5cGV9LiR7Y2xhc3Nlcy5qb2luKFwiLlwiKX1gKTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBDcmVhdGVFbGVtZW50KHR5cGUsIHtjbGFzc05hbWU6IGNsYXNzZXMuam9pbihcIiBcIil9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlQW5kQXBwZW5kPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmVudDogSFRNTEVsZW1lbnQsIHR5cGU6IEssIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGdldE9yQ3JlYXRlPEs+KHBhcmVudCwgdHlwZSwgLi4uY2xhc3Nlcyk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCB7IENyZWF0ZUVsZW1lbnQsIENyZWF0ZUltYWdlIH0gZnJvbSBcIi4vaHRtbC11dGlsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IENyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge1xyXG4gICAgICAgIHdpZHRoIDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXHJcbiAgICB9KTtcclxuICAgIChjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuXHJcbiAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplSW1hZ2UoaW1hZ2U6IHN0cmluZyk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgcmV0dXJuIENyZWF0ZUltYWdlKHtcclxuICAgICAgICBzcmM6IGltYWdlLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZShjYWxsYmFjazogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0ID0gd2lkdGgpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBDcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQsXHJcbiAgICB9KTtcclxuICAgIGNhbGxiYWNrKGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTtcclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG5cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9hbmFseXRpY3MtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXJyYXktdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29lcmNlLXV0aWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sb3ItdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZGF0ZS11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9odG1sLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ltYWdlLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGgtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWlzYy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90aW1lLXV0aWxzXCI7XHJcblxyXG4vLyBUT0RPOiBzaG91bGQgYmUgaW1wb3J0IGRpcmVjdGx5IHRvIGZpbGVcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vbmV0LWNsaWVudC11dGlsc1wiO1xyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9uZXQtc2VydmVyLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0LXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXItdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcHJvY2Vzcy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yZWZsZWN0aW9uLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JhbmRvbS11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmctdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3ZnLXV0aWxzXCI7XHJcbiIsImltcG9ydCB7IEJ1dHRvbiwgS2V5cyB9IGZyb20gXCIuLi9lbnVtc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1dHRvbkZyb21FdmVudChldmVudDogTW91c2VFdmVudCk6IEJ1dHRvbiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gZ2V0QnV0dG9uRnJvbUV2ZW50QnV0dG9ucyhldmVudC5idXR0b24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnV0dG9uRnJvbUV2ZW50QnV0dG9ucyhidXR0b246IE1vdXNlRXZlbnRbXCJidXR0b25cIl0pOiBCdXR0b24gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKGJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBCdXR0b24uTEVGVDtcclxuICAgIH1cclxuICAgIGlmIChidXR0b24gPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gQnV0dG9uLk1JRERMRTtcclxuICAgIH1cclxuICAgIGlmIChidXR0b24gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gQnV0dG9uLlJJR0hUO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUV2ZW50S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBrZXk6IEtleXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBldmVudC5jb2RlID09PSBrZXk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmFuZG9tIGZyb20gXCIuL3JhbmRvbS11dGlsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZChudW06IG51bWJlciwgc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHMgPSBcIjAwMDAwMDAwMDAwMDAwXCIgKyBudW07XHJcblxyXG4gICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3VuZFRvRGVjaW1hbHMobnVtOiBudW1iZXIsIGRlY2ltYWxzID0gMiwgdHlwZTogXCJmbG9vclwiIHwgXCJjZWlsXCIgfCBcInJvdW5kXCIgPSBcInJvdW5kXCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZGl2aWRlciA9IHBhcnNlSW50KDEgKyBuZXcgQXJyYXkoZGVjaW1hbHMgKyAxKS5qb2luKFwiMFwiKSwgMTApO1xyXG5cclxuICAgIHJldHVybiAoTWF0aFt0eXBlXShudW0gKiBkaXZpZGVyKSAvIGRpdmlkZXIpLnRvRml4ZWQoZGVjaW1hbHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaDJOdW1iZXJzKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHhGaW5hbCA9IHggPj0gMCA/IHggKiAyIDogLXggKiAyIC0gMTtcclxuICAgIGNvbnN0IHlGaW5hbCA9IHkgPj0gMCA/IHkgKiAyIDogLXkgKiAyIC0gMTtcclxuXHJcbiAgICByZXR1cm4gKHhGaW5hbCArIHlGaW5hbCkgKiAoeEZpbmFsICsgeUZpbmFsICsgMSkgLyAyICsgeUZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbm9taWFsQ29lZmZpY2llbnQobjogbnVtYmVyLCBrOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHIgPSAxO1xyXG4gICAgaWYgKGsgPiBuKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBkID0gMTsgZCA8PSBrOyBkKyspIHtcclxuICAgICAgICByICo9IG47XHJcbiAgICAgICAgbi0tO1xyXG4gICAgICAgIHIgLz0gZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBiICogdmFsICsgKDEgLSB2YWwpICogYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZzJpKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHIgPSAwO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB3aGlsZSAoKHZhbHVlID4+PSAxKSA+IDApIHtcclxuICAgICAgICByKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYW1wKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gY2xhbXAoKG1heCAtIG1pbikgKiBzY2FsZSArIG1pbiwgbWluLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByYW5kb21JbnRCZXR3ZWVufSBpbnN0ZWFkO1xyXG4gKlxyXG4gKiBAcGFyYW0gbWluIC0gbWluIHZhbHVlXHJcbiAqIEBwYXJhbSBtYXggLSBtYXggdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSYW5kb20ucmFuZG9tSW50QmV0d2VlbihtaW4sIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHJhbmRvbUZsb2F0QmV0d2Vlbn0gaW5zdGVhZDtcclxuICpcclxuICogQHBhcmFtIG1pbiAtIG1pbiB2YWx1ZVxyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUmFuZG9tLnJhbmRvbUZsb2F0QmV0d2VlbihtaW4sIG1heCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmVyYWdlKGFyZ3M6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFyZ3MpIHtcclxuICAgICAgICBzdW0gKz0gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VtIC8gYXJncy5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodmFsdWUgJiB2YWx1ZSAtIDEpID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZihudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtMSAtIG51bTIpO1xyXG59XHJcblxyXG5jb25zdCByYXRpbyA9IDE4MCAvIE1hdGguUEk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWVzKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIHJhdGlvO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcGFyc2UgY29va2llc1xyXG4gKiBAcGFyYW0gY29va2llcyAtIGNvb2tlIHRvIHBhcnNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXM6IHN0cmluZyk6IFN0cmluZ01hcCB7XHJcbiAgICBjb25zdCBsaXN0OiBTdHJpbmdNYXAgPSB7fTtcclxuICAgIGNvbnN0IGRhdGEgICAgICAgICAgICA9IGNvb2tpZXMgPyBjb29raWVzLnRvU3RyaW5nKClcclxuICAgICAgICAuc3BsaXQoXCI7XCIpIDogW107XHJcbiAgICBkYXRhLmZvckVhY2goKGNvb2tpZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzICAgICA9IGNvb2tpZS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRQYXJ0ID0gcGFydHMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoc2hpZnRQYXJ0KSB7XHJcbiAgICAgICAgICAgIGxpc3Rbc2hpZnRQYXJ0LnRyaW0oKV0gPSBkZWNvZGVVUkkocGFydHMuam9pbihcIj1cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIG9iamVjdCBpcyBpbiBhcnJheVxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgaXNJbihcImFcIiwgXCJiXCIsIFwiZFwiLCBcImFcIikgPT4gdHJ1ZVxyXG4gKiAgaXNJbihcImFcIiwgW1wiYlwiLCBcImRcIiwgXCJhXCJdKSA9PiB0cnVlXHJcbiAqICBpc0luKFwiY1wiLCBcImJcIiwgXCJkXCIsIFwiYVwiKSA9PiBmYWxzZVxyXG4gKiAgaXNJbihcImNcIiwgW1wiYlwiLCBcImRcIiwgXCJhXCJdKSA9PiBmYWxzZVxyXG4gKiAgaXNJbihcImNcIikgPT4gZmFsc2VcclxuICogIGlzSW4oXCJjXCIsIFtdKSA9PiBmYWxzZVxyXG4gKiBAcGFyYW0gb2JqIC0gc2VhcmNoZWQgb2JqZWN0XHJcbiAqIEBwYXJhbSBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjb21wYXJlIHdpdGggc2VhcmNoZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJbjxUPihvYmo6IFQsIC4uLmRhdGE6IHVua25vd25bXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVswXSkpIHtcclxuICAgICAgICBpZiAoZGF0YVswXS5pbmRleE9mKG9iaikgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuaW5kZXhPZihvYmopID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcGFyc2UgSlNPTiBjb250ZW50IHdpdGggY29tbWVudHNcclxuICogQHBhcmFtIGNvbnRlbnQgLSBzdHJpbmdpZnkgSlNPTlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSlNPTldpdGhDb21tZW50czxUPihjb250ZW50OiBzdHJpbmcpOiBUIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGNvbnRlbnQucmVwbGFjZSgvXFwvXFwvLipcXG4vZywgXCJcIikpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBzaG91bGQgYXBwZW5kIGNvb2tpZXMgb3IgYWRkIG9wdGlvbiB0byBhcHBlbmRpbmcgaW5zdGVhZCBvZiByZXBsYWNlIGNvb2tpZXNcclxuLy8gVE9ETzogZXhwaXJlcyBtdXN0IGJlIG9ubHkgaW4gdGhlIGVuZCBvZiBjb29raWVzXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiwgZGF5czogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgY29uc3QgZmluYWxDb29raWVzID0gYCR7bmFtZX09JHt2YWx1ZX07ZXhwaXJlcz0ke2QudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGZpbmFsQ29va2llcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmFtZX09JHt2YWx1ZX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lOiBzdHJpbmcsIHNvdXJjZSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNvb2tpZSA6IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgICBjb25zdCBjYSAgID0gc291cmNlLnNwbGl0KFwiO1wiKTtcclxuICAgIGZvciAobGV0IGMgb2YgY2EpIHtcclxuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKSB0eXBlb2Ygb2JqZWN0XHJcbiAqICBwYXJzZVBhcmFtczxhbnk+KFwibmFtZT1HYWJyaWVsJmFnZT0yMyZlbWFpbD1nY3NvbGxlaSZlbWFpbD1nYWJyaWVsY3NvbGxlaSZlbWFpbD10ZXN0XCIpLm5hbWUgPT4gR2FicmllbFxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5hZ2UgPT4gXCIyM1wiXHJcbiAqICBwYXJzZVBhcmFtczxhbnk+KFwibmFtZT1HYWJyaWVsJmFnZT0yMyZlbWFpbD1nY3NvbGxlaSZlbWFpbD1nYWJyaWVsY3NvbGxlaSZlbWFpbD10ZXN0XCIpLmVtYWlsIHR5cGVvZiBhcnJheVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbFswXSA9PiBnY3NvbGxlaVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbFsxXSA9PiBnYWJyaWVsY3NvbGxlaVxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbFsyXSA9PiB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbXM8VD4ocXVlcnkgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpIDogXCJcIixcclxuICAgIHNlcGFyYXRvciA9IFwiJlwiLFxyXG4gICAgZGVsaW1pdGVyID0gXCI9XCIpOiBUIHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHZhcnM6IHN0cmluZ1tdICAgPSBxdWVyeS5zcGxpdChzZXBhcmF0b3IpO1xyXG4gICAgZm9yIChjb25zdCBwYWlyIG9mIHZhcnMpIHtcclxuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYWlyLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZ1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHF1ZXJ5U3RyaW5nW2tleV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XSA9IFtxdWVyeVN0cmluZ1trZXldLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBxdWVyeVN0cmluZyBhcyBUO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIG9iamVjdFRvUXVlcnlQYXJhbXMoe2E6IFwiYWFcIiwgYjogXCJiYlwifSkgPT4gP2E9YWEmYj1iYlxyXG4gKiAgb2JqZWN0VG9RdWVyeVBhcmFtcyh7YTogMjEsIGI6IDIyfSkgPT4gP2E9MjEmYj0yMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvUXVlcnlQYXJhbXMob2JqOiBTdHJpbmdNYXA8dW5rbm93bj4pOiBzdHJpbmcge1xyXG4gICAgLy8gVE9ETzogYWRkIHVybCBwcmVmaXhcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBvYmpLZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShvYmpLZXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBgJHtyZXN1bHQubGVuZ3RoID4gMCA/IFwiJlwiIDogXCI/XCJ9JHtvYmpLZXl9PSR7b2JqW29iaktleV19YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmo6IGFueSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIG9ialtrZXldID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqW2tleV0gPSBvYmpba2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlPFQ+KG9iajogc3RyaW5nKTogVCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKG9iaik7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gcmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoaSkgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHJlc3VsdFtpXSAhPT0gXCJzdHJpbmdcIiB8fCAhKHJlc3VsdFtpXS5pbmRleE9mKFwiZnVuY3Rpb24gKFwiKSA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldLm1hdGNoKC9eXFwoW19hLXpBLVowLTldKyggKiwgKltfYS16QS1aMC05XSspKlxcKSAqPT4vKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXHJcbiAgICAgICAgICAgIGV2YWwoXCJyZXN1bHRbaV0gPSBcIiArIHJlc3VsdFtpXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHRbaV0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwPFMgPSBhbnksIFQgPSBTPihzb3VyY2U6IFMsIGRhdGE6IHsgYXR0clM6IGtleW9mIFMsIGF0dHJEPzoga2V5b2YgVCwgbWFwRnVuY3Rpb246IChzcmM6IGFueSkgPT4gYW55IH1bXSk6IFQge1xyXG4gICAgY29uc3QgZGVzdGluYXRpb246IGFueSA9IHt9O1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLm1hcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmF0dHJEKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJEXSA9IGl0ZW0ubWFwRnVuY3Rpb24oc291cmNlW2l0ZW0uYXR0clNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0clNdID0gaXRlbS5tYXBGdW5jdGlvbihzb3VyY2VbaXRlbS5hdHRyU10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmF0dHJEKSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0ckRdID0gc291cmNlW2l0ZW0uYXR0clNdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0clNdID0gc291cmNlW2l0ZW0uYXR0clNdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBPYmplY3RFbnRyeSB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRob3V0PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqOiBULCBpdGVtczogKGtleW9mIFQpW10pOiBPbWl0PFQsIGFueT4ge1xyXG4gICAgcmV0dXJuIGdldE9iamVjdEVudHJpZXMob2JqKS5maWx0ZXIoKGVudHJ5KSA9PiAhaXRlbXMuaW5jbHVkZXMoZW50cnkua2V5KSlcclxuICAgICAgICAucmVkdWNlKChwcmV2LCBlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBwcmV2W2VudHJ5LmtleV0gPSBlbnRyeS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgIH0sIHt9IGFzIFQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0RW50cmllczxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iajogVCk6IE9iamVjdEVudHJ5PFQ+W10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBPYmplY3RFbnRyeTxUPltdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG9iaktleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShvYmpLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgIGtleSAgOiBvYmpLZXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBvYmpbb2JqS2V5XSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVzdGVkUHJvcGVydHkob2JqZWN0OiBhbnksIHByb3BlcnR5UGF0aDogc3RyaW5nLCBzZXBhcmF0b3IgPSBcIi5cIik6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUxpc3QgPSBwcm9wZXJ0eVBhdGguc3BsaXQoc2VwYXJhdG9yKTtcclxuXHJcbiAgICByZXR1cm4gcHJvcGVydHlMaXN0LnJlZHVjZSgoY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUsIHByb3BlcnR5TmFtZSkgPT4gY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUgPyBjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZVtwcm9wZXJ0eU5hbWVdIDogdW5kZWZpbmVkLCBvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmVzdGVkUHJvcGVydHk8VD4oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIGxldCBvYmogICAgICAgID0gaXRlbTtcclxuICAgIGNvbnN0IHNwbGl0S2V5ID0ga2V5LnNwbGl0KFwiLlwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRLZXkubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgb2JqID0gb2JqW3NwbGl0S2V5W2ldXTtcclxuICAgIH1cclxuICAgIG9ialtzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXV0gPSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdWdoU2l6ZU9mT2JqZWN0PFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBvYmplY3RMaXN0ICAgICAgID0gW107XHJcbiAgICBjb25zdCBzdGFjazogdW5rbm93bltdID0gW29iamVjdF07XHJcbiAgICBsZXQgYnl0ZXMgICAgICAgICAgICAgID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gNDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSB2YWx1ZS5sZW5ndGggPDwgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSA4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIG9iamVjdExpc3QuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG9iamVjdExpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJ5dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2l6ZTxUIGV4dGVuZHMgKFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5rbm93bltdKT4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBpIGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqZWN0OiBUKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaW5kZXgpICYmIHR5cGVvZiBvYmplY3RbaW5kZXhdID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gbGlzdCAtIGxpc3QgdG8gZmxhdFxyXG4gKiBAcGFyYW0gcHJvcGVydHlQYXRoIC0gcGF0aCB0byBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0gc2VwYXJhdG9yIC0gc2VwYXJhdG9yIGluIHByb3BlcnR5UGF0aFxyXG4gKiBAcGFyYW0gc2tpcFVuZGVmaW5lZCAtIHRydWUgaWYgdW5kZWZpbmVkIHNob3VsZCBiZSBza2lwcGVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBpdGVtcyA9IFtcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJHYWJyaWVsXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJFbGxhXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJHYWJyaWVsXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJKb2VcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9XHJcbiAqIF1cclxuICpcclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbi5uYW1lXCIpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkdhYnJpZWxcIiwgXCJKb2VcIl1cclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbl9uYW1lXCIsIFwiX1wiKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJHYWJyaWVsXCIsIFwiSm9lXCJdXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb24ubmFtZVwiLCBcIi5cIiwgdHJ1ZSk7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiSm9lXCJdXHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGbGF0KGxpc3Q6IGFueVtdLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIsIHNraXBVbmRlZmluZWQgPSBmYWxzZSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUxpc3QgPSBwcm9wZXJ0eVBhdGguaW5kZXhPZihzZXBhcmF0b3IpID49IDAgPyBwcm9wZXJ0eVBhdGguc3BsaXQoc2VwYXJhdG9yKSA6IFtwcm9wZXJ0eVBhdGhdO1xyXG5cclxuICAgIHJldHVybiBsaXN0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eUxpc3QucmVkdWNlKChwcm9wVmFsLCBwcm9wZXJ0eU5hbWUpID0+IHByb3BWYWwgPyBwcm9wVmFsW3Byb3BlcnR5TmFtZV0gOiB1bmRlZmluZWQsIGN1cnIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgJiYgc2tpcFVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY2MucHVzaCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQm9vbGVhblZhbHVlKGtleTogc3RyaW5nKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoa2V5Lm1hdGNoKC8oMXx0cnVlfHllc3xhbm98w6FubykvaSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChrZXkubWF0Y2goLygwfGZhbHNlfG5vfG5pZSkvaSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzRGF0YSB7XHJcbiAgICBtZW1vcnlVc2FnZTogTm9kZUpTLk1lbW9yeVVzYWdlO1xyXG4gICAgY3B1VXNhZ2U6IE5vZGVKUy5DcHVVc2FnZTtcclxuICAgIHVwVGltZTogbnVtYmVyO1xyXG4gICAgdmVyc2lvbjogc3RyaW5nO1xyXG4gICAgcGxhdGZvcm06IE5vZGVKUy5QbGF0Zm9ybTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVzdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2QoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEZXYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiB8fCAhcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVudmlyb25tZW50KHR5cGU6IFwidGVzdFwiIHwgXCJwcm9kdWN0aW9uXCIgfCBcImRldmVsb3BtZW50XCIpOiB2b2lkIHtcclxuICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID0gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NEYXRhKCk6IFByb2Nlc3NEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVtb3J5VXNhZ2U6IHByb2Nlc3MubWVtb3J5VXNhZ2UoKSxcclxuICAgICAgICBjcHVVc2FnZSAgIDogcHJvY2Vzcy5jcHVVc2FnZSgpLFxyXG4gICAgICAgIHVwVGltZSAgICAgOiBwcm9jZXNzLnVwdGltZSgpLFxyXG4gICAgICAgIHZlcnNpb24gICAgOiBwcm9jZXNzLnZlcnNpb24sXHJcbiAgICAgICAgcGxhdGZvcm0gICA6IHByb2Nlc3MucGxhdGZvcm0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdEVudmlyb25tZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKCFwcm9jZXNzLmVudi5OT0RFX0VOVikge1xyXG4gICAgICAgIHNldEVudmlyb25tZW50KFwiZGV2ZWxvcG1lbnRcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0QmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludEJldHdlZW4obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbUZsb2F0QmV0d2VlbihtaW4sIG1heCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQm9vbGVhbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSXRlbTxUPiguLi5pdGVtczogVFtdKTogVCB7XHJcbiAgICByZXR1cm4gaXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKV07XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZSBjbGFzcyBieSBuYW1lIGFuZCBsaXN0IG9mIHBhcmFtZXRlcnNcclxuICpcclxuICogQHBhcmFtIG5hbWUgLSBjbGFzcyBuYW1lXHJcbiAqIEBwYXJhbSBhcmdzIC0gY29uc3RydWN0b3IgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIGNyZWF0ZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xhc3MobmFtZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCB0ZW1wID0gT2JqZWN0LmNyZWF0ZShuYW1lLnByb3RvdHlwZSk7XHJcbiAgICBuYW1lLmFwcGx5KHRlbXAsIGFyZ3MpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbEZpcnN0RnVuY3Rpb24oLi4uZnVuY3Rpb25zOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgZnVuY3Rpb25zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVE9ETzogVGhpcyBpcyBkZXByZWNhdGVkLiBNb3ZlIHRoaXMgdG8gdmFsaWRhdG9yc1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIE1pc2NWYWxpZGF0b3JzIGZyb20gXCIuLi92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9yc1wiO1xyXG5cclxuY29uc3QgdGltZUZvcm1hdHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBISCAgOiBcIigyWzAtM118WzAxXVxcXFxkKVwiLFxyXG4gICAgSCAgIDogXCIoMlswLTNdfFswMV0/XFxcXGQpXCIsXHJcbiAgICBtbSAgOiBcIihbMC01XVxcXFxkKVwiLFxyXG4gICAgbSAgIDogXCIoWzAtNV0/XFxcXGQpXCIsXHJcbiAgICBNTSAgOiBcIigwXFxcXGR8MVswLTJdfFxcXFxkKVwiLFxyXG4gICAgTSAgIDogXCIoWzEtOV18MVswLTJdKVwiLFxyXG4gICAgc3MgIDogXCIoWzAtNV1cXFxcZClcIiwgLy8gbW1cclxuICAgIHMgICA6IFwiKFswLTVdP1xcXFxkKVwiLCAvLyBzc1xyXG4gICAgWVlZWTogXCIoWzEtOV1cXFxcZHszLDN9KVwiLFxyXG4gICAgWVkgIDogXCIoXFxcXGR7MiwyfSlcIixcclxuICAgIEREICA6IFwiKFswLTNdXFxcXGQpXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXT9bYS16XSsoW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlthLXpdKyhbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bYS16XSooX1thLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXSooX1tBLVpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFthLXpdKnxbQS1aXSopKF9bYS16QS1aXSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVGb3JtYXQodGV4dDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZUZvcm1hdHMpIHtcclxuICAgICAgICBpZiAodGltZUZvcm1hdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShrZXksIHRpbWVGb3JtYXRzW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7Zm9ybWF0fSRgKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkUGhvbmVOdW1iZXJ9IGluc3RlYWRcclxuICogQHBhcmFtIG51bSAtIG51bSB0byB2YWxpZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRQaG9uZU51bWJlcihudW06IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRQaG9uZU51bWJlcihudW0pO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkRW1haWx9IGluc3RlYWRcclxuICogQHBhcmFtIGVtYWlsIC0gZW1haWwgdG8gdmFsaWRhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRFbWFpbChlbWFpbCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RyaW5nTWFwIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcIi4vYXJyYXktdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5nQ2hlY2tlcnMgZnJvbSBcIi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG5jb25zdCBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyA9IFwixIXDoMOhw6TDosOjw6XDpsSDxIfEjcSJxI/EmcOow6nDq8OqxJ3EpcOsw63Dr8OuxLXFgsS+xYTFiMOyw7PDtsWRw7TDtcOww7jFm8iZxZ/FocWdxaXIm8Wjxa3DucO6w7zFscO7w7HDv8O9w6fFvMW6xb5cIjtcclxuY29uc3Qgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICAgPSBcImFhYWFhYWFhYWNjY2RlZWVlZWdoaWlpaWpsbG5ub29vb29vb29zc3Nzc3R0dHV1dXV1dW55eWN6enpcIjtcclxuY29uc3QgYWNjZW50ZWRDaGFyYWN0ZXJzICAgICAgPSBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyArIGFjY2VudGVkTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcbmNvbnN0IG5vcm1hbENoYXJhY3RlcnMgICAgICAgID0gbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICsgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4vKiBUT0RPOlxyXG4gICAgc3RhdGljIHVuZGVyc2NvcmUod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGh1bWFuaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkYXNoZXJpemUod29yZCkge1xyXG4gICAgfVxyXG4gICAgLy9kYXNoQ2FzZSA9IGEtYi1jLWQtZVxyXG4gICAgLy9kb3RDYXNlIGEuYy5kLnYucy5kXHJcbiAgICAvL3Bhc2NhbENhc2UgPSBGb29CYXJCYXpcclxuICAgIC8vcGF0aENhc2UgPSBhL2IvYy9kXHJcbiAgICAvL3NuYWtlQ2FzZSA9IGFfYl9jX2RfXHJcbiAgICBzdGF0aWMgaXNVcHBlcih3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaXNMb3dlcih3b3JkKSB7XHJcbiAgICB9XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXdvcmQgfHwgIXdvcmQucmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3b3JkLnJlcGxhY2UoLy4vZywgKGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWNjZW50ZWRDaGFyYWN0ZXJzLmluZGV4T2YoZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gbm9ybWFsQ2hhcmFjdGVyc1tpbmRleF0gOiBlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY3V0VXNpbmcoXCJhYmNkZWZnaGlqXCIsIDEwKSA9PiBhYmNkZWZnaGlqXHJcbiAqICBjdXRVc2luZyhcImFiY2RlZmdoaWpcIiwgMTUpID0+IGFiY2RlZmdoaWpcclxuICogIGN1dFVzaW5nKFwiYWJjZGVmZ2hpalwiLCA5KSA9PiBhYmNkZWZnLi4uXHJcbiAqICBjdXRVc2luZyhcImFiY2RlZmdoaWpcIiwgOSwgXCIuLi5cIiwgZmFsc2UpID0+IGFiY2RlZmdoaS4uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGN1dFVzaW5nKHRleHQ6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIsIHN1ZmZpeCA9IFwiLi4uXCIsIGxlbmd0aEluY2x1ZGVTdWZmaXggPSB0cnVlKTogc3RyaW5nIHtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5zdWJzdHIoMCwgbWF4TGVuZ3RoIC0gKGxlbmd0aEluY2x1ZGVTdWZmaXggPyBzdWZmaXgubGVuZ3RoIC0gMSA6IDApKSArIHN1ZmZpeDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVXBwZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0NhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzVXBwZXJTbmFrZUNhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChpLCB1LCBlKSA9PiBlID8gXCJfXCIgKyBlIDogXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvXl8vLCBcIlwiKVxyXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Mb3dlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0xvd2VyU25ha2VDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAoaSwgdSwgZSkgPT4gZSA/IFwiX1wiICsgZSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTG93ZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0xvd2VyQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pKFtBLVpdKS9nLCBcIiQxJDJfJDNcIilcclxuICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLygtfF98IHxcXHMpKyguKT8vZywgKG1hdGgsIHNlcCwgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKGUpID0+IGUudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNVcHBlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b0NhcGl0YWwodG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY2FwaXRhbGl6ZShcImdhYm9cIikgPT4gR2Fib1xyXG4gKiAgY2FwaXRhbGl6ZShcIkdBQk9cIikgPT4gR2Fib1xyXG4gKiAgY2FwaXRhbGl6ZShcImdBQk9cIikgPT4gR2Fib1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXi4vLCAoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgY2FwaXRhbGl6ZX0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ2FwaXRhbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXi4vLCAoZSkgPT4gZS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RQYXJ0KHRleHQ6IHN0cmluZywgZGl2aWRlciA9IFwiIFwiKTogc3RyaW5nIHtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC5zcGxpdCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRUZXh0ID0gdGV4dC5zcGxpdChkaXZpZGVyKTtcclxuXHJcbiAgICByZXR1cm4gc3BsaXRUZXh0W3NwbGl0VGV4dC5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgb2NjdXJyZW5jZXN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGV4dC5tYXRjaChuZXcgUmVnRXhwKGtleSwgXCJnXCIpKSB8fCBbXSkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHRleHQgLSB0ZXh0IG5lZWQgdG8gYmUgcmVwZWF0XHJcbiAqIEBwYXJhbSBudW1iZXJPZlJlcGV0aXRpb25zIC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICogQGRlcHJlY2F0ZWQgLSB1c2Uge0BsaW5rIFN0cmluZyNyZXBlYXR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHRleHQ6IHN0cmluZywgbnVtYmVyT2ZSZXBldGl0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobnVtYmVyT2ZSZXBldGl0aW9ucyArIDEpLmpvaW4odGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3Jkcy5qb2luKFwifFwiKX0pYCwgXCJnXCIpLCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICB0ZW1wbGF0ZShcInt7bmFtZX19IGlzIHt7YWdlfX0geWVhcnMgb2xkXCIsIHtuYW1lOiBcIkdhYnJpZWxcIiwgYWdlOiAyM30pID0+IEdhYnJpZWwgaXMgMjMgeWVhcnMgb2xkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dDogc3RyaW5nLCB2YWx1ZXM6IFN0cmluZ01hcDx1bmtub3duPiwgc3RhcnQgPSBcInt7XCIsIGVuZCA9IFwifX1cIik6IHN0cmluZyB7XHJcbiAgICBjb25zdCB1cGRhdGVkU3RhcnQgPSBzdGFydC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG4gICAgY29uc3QgdXBkYXRlZEVuZCAgID0gZW5kLnJlcGxhY2UoL1stW1xcXSgpKlxcc10vZywgXCJcXFxcJCZcIikucmVwbGFjZSgvXFwkL2csIFwiXFxcXCRcIik7XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShcclxuICAgICAgICBuZXcgUmVnRXhwKGAke3VwZGF0ZWRTdGFydH0oLis/KSR7dXBkYXRlZEVuZH1gLCBcImdcIiksXHJcbiAgICAgICAgKG1hdGgsIGtleSkgPT4gU3RyaW5nKHZhbHVlc1trZXldKSxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eUxpbmVzKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9eXFxzKiQoPzpcXHJcXG4/fFxcbikvZ20sIFwiXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwiTkFNRVwiLCBcImdhYnJpZWxcIikgPT4gXCJteSBuYW1lIGlzIFwiXHJcbiAqICBiZXR3ZWVuKFwibXkgbmFtZSBpcyBnYWJyaWVsIGFuZCBJIGFtIDI2IHllYXJzIG9sZFwiLCBcIm5hbWVcIiwgXCJHQUJSSUVMXCIpID0+IFwiIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCJcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwibmFtZVwiLCBcImdhYnJpZWxcIikgPT4gXCIgaXMgXCJcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwibmFtZVwiLCBcImdhYnJpZWxcIiwgdHJ1ZSkgPT4gXCJpc1wiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmV0d2Vlbih0ZXh0OiBzdHJpbmcsIGtleTE6IHN0cmluZywga2V5Mjogc3RyaW5nLCB0cmltID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcHJvY2Vzc1Jlc3VsdCA9IChyZXN1bHQ6IHN0cmluZyk6IHN0cmluZyA9PiB0cmltID8gcmVzdWx0LnRyaW0oKSA6IHJlc3VsdDtcclxuXHJcbiAgICBjb25zdCBzdGFydFBvcyA9IHRleHQuaW5kZXhPZihrZXkxKTtcclxuICAgIGNvbnN0IGVuZFBvcyAgID0gdGV4dC5pbmRleE9mKGtleTIpO1xyXG4gICAgaWYgKHN0YXJ0UG9zIDwgMCAmJiBlbmRQb3MgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHRleHQuc3Vic3RyaW5nKDAsIGVuZFBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbmRQb3MgPCAwICYmIHN0YXJ0UG9zID49IDApIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh0ZXh0LnN1YnN0cmluZyhzdGFydFBvcyArIGtleTEubGVuZ3RoLCB0ZXh0Lmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHRleHQuc3Vic3RyaW5nKHN0YXJ0UG9zICsga2V5MS5sZW5ndGgsIGVuZFBvcykpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgb2Ygc3Vic3RyaW5nXHJcbiAqIEB2ZXJzaW9uIDAuMi40MCAtIG11Y2ggZmFzdGVyIHRoZW4gcHJldmlvdXMgcmVnZXggbWV0aG9kIHVzaW5nIGByZXR1cm4gKHRleHQubWF0Y2gobmV3IFJlZ0V4cChrZXksIFwiZ1wiKSkgfHwgW10pLmxlbmd0aDtgXHJcbiAqIEBleGFtcGxlXHJcbiAqICBvY2N1cnJlbmNlcyhcImZvb2Zvb2Zvb1wiLCBcImJhclwiKTsgPT4gMFxyXG4gKiAgb2NjdXJyZW5jZXMoXCJmb29mb29mb29cIiwgXCJmb29cIik7ID0+IDNcclxuICogIG9jY3VycmVuY2VzKFwiZm9vZm9vZm9vXCIsIFwiZm9vZm9vXCIpOyA9PiAxXHJcbiAqICBvY2N1cnJlbmNlcyhcImZvb2Zvb2Zvb1wiLCBcImZvb2Zvb1wiLCB0cnVlKTsgPT4gMlxyXG4gKiBAcGFyYW0gdGV4dCAtIHRleHRcclxuICogQHBhcmFtIGtleSAtIHNlYXJjaGVkIHN1YnN0cmluZ1xyXG4gKiBAcGFyYW0gb3ZlcmxhcHBpbmcgLSBhbGxvd3MgbWF0aCBvdmVybGFwcGluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9jY3VycmVuY2VzKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcsIG92ZXJsYXBwaW5nID0gZmFsc2UpOiBudW1iZXIge1xyXG4gICAgbGV0IGluZGV4ICAgPSB0ZXh0LmluZGV4T2Yoa2V5KTtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGNvbnN0IHN0ZXAgID0gb3ZlcmxhcHBpbmcgPyAxIDoga2V5Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIGluZGV4ID0gdGV4dC5pbmRleE9mKGtleSwgaW5kZXggKyBzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY291bnRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlV2hpdGVzcGFjZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW1xcc1xcdUZFRkZcXHhBMF17Mix9L2csIFwiIFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXFMvZywgKGNoYXIpID0+IHtcclxuICAgICAgICBjb25zdCBsb3dlckNhc2UgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsb3dlckNhc2UgPT09IGNoYXIgPyBjaGFyLnRvVXBwZXJDYXNlKCkgOiBsb3dlckNhc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBmb3JtYXRUaW1lKFwie30gaXMgYSBiaWcge31cIiwgW1wiR2Fib1wiLCBcImhlcm9cIl0pID0+IEdhYm8gaXMgYSBiaWcgaGVyb1xyXG4gKiAgZm9ybWF0VGltZShcIjw+IGlzIGEgYmlnIDw+XCIsIFtcIkdhYm9cIiwgXCJoZXJvXCJdLCBcIjw+XCIpID0+IEdhYm8gaXMgYSBiaWcgaGVyb1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh0ZXh0OiBzdHJpbmcsIHZhbHVlczogc3RyaW5nW10sIHBsYWNlSG9sZGVyID0gXCJ7fVwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICAgIGxldCBsYXN0SW5kZXg7XHJcbiAgICBsZXQgYWN0dWFsSW5kZXggICAgICAgID0gMDtcclxuICAgIGxldCBjb3VudGVyICAgICAgICAgICAgPSAwO1xyXG5cclxuICAgIHdoaWxlIChjb3VudGVyIDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxhc3RJbmRleCAgID0gYWN0dWFsSW5kZXg7XHJcbiAgICAgICAgYWN0dWFsSW5kZXggPSB0ZXh0LmluZGV4T2YocGxhY2VIb2xkZXIsIGFjdHVhbEluZGV4KTtcclxuICAgICAgICByZXN1bHQucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIGFjdHVhbEluZGV4KSk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWVzW2NvdW50ZXIrK10pO1xyXG4gICAgICAgIGFjdHVhbEluZGV4ICs9IHBsYWNlSG9sZGVyLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJlc3VsdC5wdXNoKHRleHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4KSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVG9CYXNpY0Zvcm1hdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbGxhcHNlV2hpdGVzcGFjZShyZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dCkudG9Mb3dlckNhc2UoKSkudHJpbSgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGdldEFzY2lpQXJyYXkoXCJhYmNkZWZnXCIpID09PiBbOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzXVxyXG4gKiBAcGFyYW0gdGhpc0FyZyAtIGFyZ3VtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNjaWlBcnJheSh0aGlzQXJnOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIHRoaXNBcmcpIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsZXR0ZXIuY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9CYXNpY0Zvcm0odGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHRleHQ6IHN0cmluZywgc3Vic3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRleHQgJiYgcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihzdWJzdHJpbmcpID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgam9pblNpbmdsZShcInBhY2thZ2VcIiwgXCIuXCIsIFwianNvblwiKSA9PiBwYWNrYWdlLmpzb25cclxuICogIGpvaW5TaW5nbGUoXCJwYWNrYWdlLlwiLCBcIi5cIiwgXCJqc29uXCIpID0+IHBhY2thZ2UuanNvblxyXG4gKiAgam9pblNpbmdsZShcInBhY2thZ2VcIiwgXCIuXCIsIFwiLmpzb25cIikgPT4gcGFja2FnZS5qc29uXHJcbiAqICBqb2luU2luZ2xlKFwicGFja2FnZS5cIiwgXCIuXCIsIFwiLmpzb25cIikgPT4gcGFja2FnZS5qc29uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pblNpbmdsZShwcmVmaXg6IHN0cmluZywgZGl2aWRlcjogc3RyaW5nLCBwb3N0Zml4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHBvc3RmaXguc3RhcnRzV2l0aChkaXZpZGVyKSAmJiBwcmVmaXguZW5kc1dpdGgoZGl2aWRlcikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgcG9zdGZpeC5zdWJzdHJpbmcoZGl2aWRlci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwb3N0Zml4LnN0YXJ0c1dpdGgoZGl2aWRlcikgfHwgcHJlZml4LmVuZHNXaXRoKGRpdmlkZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGRpdmlkZXIgKyBwb3N0Zml4O1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBqb2lufSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBkYXRhIC0gZGF0YSB0byBqb2luXHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBkZWxpbWl0ZXJcclxuICogQHBhcmFtIHByZWZpeCAtIHByZWZpeFxyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHBvc3RmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luU3RyaW5nKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGpvaW4oZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bTogc3RyaW5nLCBwcmVmaXggPSBcIis0MjFcIik6IHN0cmluZyB7XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvWyggKS8tXS9nLCBcIlwiKTtcclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIitcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiMDBcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtLnN1YnN0cmluZygyKTtcclxuICAgIH1cclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIjA5XCIpIHx8IG51bS5zdGFydHNXaXRoKFwiMDJcIikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgbnVtLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdXp6eV9tYXRjaF9zaW1wbGUocGF0dGVybjogc3RyaW5nLCBzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHBhdHRlcm5JZHggICAgICA9IDA7XHJcbiAgICBsZXQgc3RySWR4ICAgICAgICAgID0gMDtcclxuICAgIGNvbnN0IHBhdHRlcm5MZW5ndGggPSBwYXR0ZXJuLmxlbmd0aDtcclxuICAgIGNvbnN0IHN0ckxlbmd0aCAgICAgPSBzdHIubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChwYXR0ZXJuSWR4ICE9PSBwYXR0ZXJuTGVuZ3RoICYmIHN0cklkeCAhPT0gc3RyTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybkNoYXIgPSBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuSWR4KVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBzdHJDaGFyICAgICA9IHN0ci5jaGFyQXQoc3RySWR4KVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocGF0dGVybkNoYXIgPT09IHN0ckNoYXIpIHtcclxuICAgICAgICAgICAgKytwYXR0ZXJuSWR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICArK3N0cklkeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0dGVybkxlbmd0aCAhPT0gMCAmJiBzdHJMZW5ndGggIT09IDAgJiYgcGF0dGVybklkeCA9PT0gcGF0dGVybkxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VGb3JBbGwoY29udGVudDogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCBwbGFjZUhvbGRlcjogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiBjb250ZW50LnJlcGxhY2UocGxhY2VIb2xkZXIsIHZhbHVlKSk7XHJcbn1cclxuIiwiY29uc3Qgc3ZnbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnPFQgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4odHlwZTogVCk6IFNWR0VsZW1lbnRUYWdOYW1lTWFwW1RdIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsIHR5cGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtKHNlbGVjdGVkRWxlbWVudDogU1ZHR3JhcGhpY3NFbGVtZW50KTogU1ZHVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybXMgPSBzZWxlY3RlZEVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XHJcbiAgICBpZiAodHJhbnNmb3Jtcy5udW1iZXJPZkl0ZW1zID09PSAwIHx8XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5nZXRJdGVtKDApLnR5cGUgIT09IFNWR1RyYW5zZm9ybS5TVkdfVFJBTlNGT1JNX1RSQU5TTEFURSkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IChzZWxlY3RlZEVsZW1lbnQub3duZXJTVkdFbGVtZW50IGFzIFNWR1NWR0VsZW1lbnQpLmNyZWF0ZVNWR1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIHRyYW5zbGF0ZS5zZXRUcmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsLmluc2VydEl0ZW1CZWZvcmUodHJhbnNsYXRlLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJhbnNmb3Jtcy5nZXRJdGVtKDApO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGludGVydmFsczogU3RyaW5nTWFwPG51bWJlcj4gPSB7XHJcbiAgICBcInllYXJcIiAgOiAzMTUzNjAwMCxcclxuICAgIFwibW9udGhcIiA6IDI1OTIwMDAsXHJcbiAgICBcIndlZWtcIiAgOiA2MDQ4MDAsXHJcbiAgICBcImRheVwiICAgOiA4NjQwMCxcclxuICAgIFwiaG91clwiICA6IDM2MDAsXHJcbiAgICBcIm1pbnV0ZVwiOiA2MCxcclxuICAgIFwic2Vjb25kXCI6IDEsXHJcbn07XHJcblxyXG5jb25zdCBpbnRlcnZhbEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhpbnRlcnZhbHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVBZ28odmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCgrbmV3IERhdGUoKSAtICtuZXcgRGF0ZSh2YWx1ZSkpIC8gMTAwMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAyOSkgeyAvLyBsZXNzIHRoYW4gMzAgc2Vjb25kcyBhZ28gd2lsbCBzaG93IGFzICdKdXN0IG5vdydcclxuICAgICAgICAgICAgcmV0dXJuIFwiSnVzdCBub3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnRlcnZhbF0gb2YgaW50ZXJ2YWxFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBNYXRoLmZsb29yKHNlY29uZHMgLyBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y291bnRlcn0gJHtrZXl9IGFnb2A7IC8vIHNpbmd1bGFyICgxIGRheSBhZ28pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVyfSAke2tleX1zIGFnb2A7IC8vIHBsdXJhbCAoMiBkYXlzIGFnbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlOiBEYXRlLCBwYXR0ZXJuOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAodGltZTogbnVtYmVyKTogc3RyaW5nID0+IHRpbWUgPCAxMCA/IFwiMFwiICsgdGltZSA6IFwiXCIgKyB0aW1lO1xyXG5cclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihERHxNTXxZWVlZfFlZWXxZWXxISHxtbXxTUylcIiwgXCJnXCIpO1xyXG4gICAgY29uc3QgREQgICAgPSB0b1N0cmluZyhkYXRlLmdldERhdGUoKSk7XHJcbiAgICBjb25zdCBNTSAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgY29uc3QgWVlZWSAgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIlwiO1xyXG4gICAgY29uc3QgWVlZICAgPSBZWVlZLnN1YnN0cigxLCA0KTtcclxuICAgIGNvbnN0IFlZICAgID0gWVlZLnN1YnN0cigxLCA0KTtcclxuICAgIGNvbnN0IEhIICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRIb3VycygpKTtcclxuICAgIGNvbnN0IG1tICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgY29uc3QgU1MgICAgPSB0b1N0cmluZyhkYXRlLmdldFNlY29uZHMoKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShyZWdleCwgKGUpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkREXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gREQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNTVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1NO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBISDtcclxuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW07XHJcbiAgICAgICAgICAgIGNhc2UgXCJTU1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNTO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3BXYXRjaCgpOiB7IGdldERpZmZNcygpOiBudW1iZXI7IGdldERpZmYoKTogc3RyaW5nIH0ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IGdldERpZmZNcyA9ICgpOiBudW1iZXIgPT4gRGF0ZS5ub3coKSAtIHN0YXJ0O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0RGlmZk1zLFxyXG4gICAgICAgIGdldERpZmYoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldERpZmZNcygpICsgXCJtc1wiO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIG9wdDogeyBtczogbnVtYmVyLCBzOiBudW1iZXIsIG06IG51bWJlciwgaDogbnVtYmVyIH0pOiBEYXRlIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzTmFOKG9wdC5tcykpIHtcclxuICAgICAgICBkYXRlLnNldE1pbGxpc2Vjb25kcyhvcHQubXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQucykpIHtcclxuICAgICAgICBkYXRlLnNldFNlY29uZHMob3B0LnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQubSkpIHtcclxuICAgICAgICBkYXRlLnNldE1pbnV0ZXMob3B0Lm0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQuaCkpIHtcclxuICAgICAgICBkYXRlLnNldEhvdXJzKG9wdC5oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0T2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge1xyXG4gICAgICAgIG1zOiAwLFxyXG4gICAgICAgIHMgOiAwLFxyXG4gICAgICAgIG0gOiAwLFxyXG4gICAgICAgIGggOiAwLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRPZlRoZURheShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gc2V0RGF0ZShkYXRlLCB7XHJcbiAgICAgICAgbXM6IDk5OSxcclxuICAgICAgICBzIDogNTksXHJcbiAgICAgICAgbSA6IDU5LFxyXG4gICAgICAgIGggOiAyMyxcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL21pc2MtdmFsaWRhdG9yc1wiO1xyXG4iLCJjb25zdCB2YWxpZEVtYWlsUmVnZXggICAgICAgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuY29uc3QgdmFsaWRQaG9uZU51bWJlclJlZ2V4ID0gL14oWytdfDAwKT9bKF0/WzAtOV17Myw0fVspXT9bLVxccy5dP1swLTldezIsM31bLVxccy5dP1swLTldezIsNn0oWy1cXHMuXT9bMC05XXszfSk/JC9pbTtcclxuXHJcbmZ1bmN0aW9uIHR5cGVPZihhcmc6IHVua25vd24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBhcmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGFyZzogYW55KTogYXJnIGlzIHN0cmluZyB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwic3RyaW5nXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm9iamVjdFwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoYXJnOiBhbnkpOiBhcmcgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbihhcmc6IGFueSk6IGFyZyBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJib29sZWFuXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGbG9hdChhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm51bWJlclwiICYmIGFyZyAlIDEgIT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChhcmc/OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJ1bmRlZmluZWRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KG9iaikgJiZcclxuICAgICAgICAgICAgb2JqLm5vZGVUeXBlID09PSAxICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5zdHlsZSkgJiZcclxuICAgICAgICAgICAgaXNPYmplY3Qob2JqLm93bmVyRG9jdW1lbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwIHx8IC9eW1xcc1xceGEwXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUGhvbmVOdW1iZXIobnVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghbnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZFBob25lTnVtYmVyUmVnZXgudGVzdChudW0udHJpbSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZEVtYWlsUmVnZXgudGVzdChlbWFpbC50cmltKCkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oODAyMik7XG4iXSwic291cmNlUm9vdCI6IiJ9