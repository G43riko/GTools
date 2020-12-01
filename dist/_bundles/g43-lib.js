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
exports.GLoggerInstance = exports.GLoggerCallbackHolder = exports.GLoggerDefaultFormatter = exports.GLoggerPriority = void 0;
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

/***/ 1703:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLoggerDefaultFormatter = void 0;
var utils_1 = __webpack_require__(5928);
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
var g_logger_1 = __webpack_require__(3113);
var g_logger_priority_1 = __webpack_require__(4031);
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
    GLoggerInstance.prototype.setLogCallbacks = function (callbackHolder) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.set(callbackHolder);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2ctbWFwLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2tleS12YWx1ZS1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLWRlZmF1bHQtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9sb2dnZXIvZy1sb2dnZXItcHJpb3JpdHkudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL251bWJlci1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uZmlnL2d0b29scy1jb25maWcudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9kZXByZWNhdGVkLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9maW5hbC1jbGFzcy5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvbWFwcGVyLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9zaW5nbGV0b24uZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3dhdGNoLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZG9tL2NhbnZhcy1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZG9tLWdldC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvYnV0dG9uLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2RheXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvZW5jb2RpbmdzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2ZpbGUtdHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaHR0cC1zdGF0dXMtY29kZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2tleXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbWlzc2luZy1wYXJhbWV0ZXIuZXJyb3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy9uby1kYXRhYmFzZS1jb25uZWN0aW9uLmVycm9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbnVsbC1wb2ludGVyLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL3dyb25nLXBhcmFtZXRlci5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy93cm9uZy10eXBlLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IyZi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tYXRoL3ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvYWpheC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9maWxlLXNpemUtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3J1bnRpbWUtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zaW1wbGUtbG9vcC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zbG92YWstc3RlbW1lci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL2NvbG9yLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvZ2VuZGVyLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy9yYW5nZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9ib3VuZGVycy0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9jbG9zZXN0LTJkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2Nsb3Nlc3QtM2QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvY29sbGlzaW9ucy0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9jb2xsaXNpb25zLTNkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2Rpc3RhbmNlcy0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9kaXN0YW5jZXMtM2QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvaW50ZXJzZWN0cy0zZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9vYmplY3RzLzJkL3JlY3QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3Mvb2JqZWN0cy8yZC9zcGhlcmUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3Mvb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9vYmplY3RzL29iamVjdC1jb252ZXJ0b3JzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9hYnN0cmFjdC1kYXRhYmFzZS5maXh0dXJlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9hYnN0cmFjdC5maXh0dXJlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9hYnN0cmFjdC5tYXBwZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL3BhZ2luYXRlLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvYW5hbHl0aWNzLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9hcnJheS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvY29lcmNlLXV0aWwudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2NvbG9yLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kYXRlLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9odG1sLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9pbWFnZS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2lucHV0LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9tYXRoLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9taXNjLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9vYmplY3QtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3BhcnNlci11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcHJvY2Vzcy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcmFuZG9tLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9yZWZsZWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9zdHJpbmctY2hlY2tlcnMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3N0cmluZy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3ZnLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy90aW1lLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy92YWxpZGF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLGdEQUF3QjtBQUV4QixpREFBaUQ7QUFDakQsaURBQXVDO0FBRXZDLGlEQUE2QjtBQUM3QixpREFBcUM7QUFDckMsaURBQW1DO0FBQ25DLGlEQUE4QjtBQUM5QixpREFBaUQ7QUFNakQsaURBQTZCO0FBRTdCLGlEQUF5QjtBQUV6QixpREFBNkI7QUFFN0IsaURBQXVCO0FBQ3ZCLGlEQUF1QjtBQUN2QixpREFBMEI7QUFFMUIsaURBQXlCO0FBRXpCLGlEQUFrRDtBQUNsRCxpREFBeUM7QUFDekMsaURBQXdDO0FBQ3hDLGlEQUF1QztBQUV2QyxpREFBd0I7QUFDeEIsaURBQXdCOzs7Ozs7Ozs7OztBQ2pDeEIsa0RBQXFEO0FBTXJEO0lBVUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxD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QyxDQUFDLEVBQUU7UUFDekIsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUN4QixFQUFFO1FBQ0MsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1AsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNqQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUVwQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDM0IsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1AsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNoQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUluQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUN0QixFQUFFO1FBQ0gsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1AsQ0FDSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDekIsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDVCxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBRUosT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEM7S0FDSjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsQ0FBUztJQUNoQyxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUN4QixJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBTXJCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNoQixLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQzlELEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQzlELEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQzlELEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNuRyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFF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LEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDL0MsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkQsdUNBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUM5QyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBNUNELDBCQTRDQztBQUVELFNBQWdCLFdBQVcsQ0FDdkIsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsT0FBZSxFQUNmLE9BQWUsRUFDZixPQUFlLEVBQ2YsYUFBcUI7SUFFckIsSUFBSSxFQUFFLEdBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN0QixJQUFJLEVBQUUsR0FBTSxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLElBQUksRUFBRSxHQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdEIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0UsSUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDeEMsSUFBTSxDQUFDLEdBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDUCxFQUFFLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNuQixFQUFFLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNuQixFQUFFLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztLQUN0QjtTQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNkLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO0tBQ3RCO1NBQU07UUFDSCxJQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4QixFQUFFLEdBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUN4QixFQUFFLEdBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUN4QixFQUFFLEdBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQztLQUMzQjtJQUNELElBQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRXpDLE9BQU8sSUFBSSxJQUFJLGFBQWEsQ0FBQztBQUNqQyxDQUFDO0FBckNELGtDQXFDQztBQUVELFNBQWdCLE1BQU0sQ0FDbEIsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVO0lBRVYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7UUFDL0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQzVCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLENBQUM7QUFqQkQsd0JBaUJDO0FBRUQsU0FBZ0IsY0FBYyxDQUMxQixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixLQUFhLEVBQ2IsS0FBYSxFQUNiLEtBQWEsRUFDYixNQUFjLEVBQ2QsTUFBYyxFQUNkLE1BQWM7SUFFZCxJQUFNLFFBQVEsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzVCLElBQU0sUUFBUSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDNUIsSUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUU1QixJQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyRCxJQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyRCxJQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUVyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBcEJELHdDQW9CQztBQUVELFNBQWdCLGFBQWEsQ0FDekIsT0FBZSxFQUNmLE9BQWUsRUFDZixPQUFlLEVBQ2YsS0FBYSxFQUNiLEtBQWEsRUFDYixLQUFhLEVBQ2IsS0FBYSxFQUNiLEtBQWEsRUFDYixLQUFhLEVBQ2IsTUFBYyxFQUNkLE1BQWMsRUFDZCxNQUFjO0lBRWQsSUFBTSxLQUFLLEdBQUcsa0NBQXFCLENBQy9CLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxDQUNSLENBQUM7SUFFRixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xHLENBQUM7QUEzQkQsc0NBMkJDO0FBRUQsU0FBZ0IsYUFBYSxDQUN6QixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixPQUFlLEVBQ2YsT0FBZTtJQUVmLElBQU0sWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFDbEQsSUFBTSxZQUFZLEdBQUcsbUNBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBRXBFLE9BQU8sWUFBWSxJQUFJLFlBQVksQ0FBQztBQUN4QyxDQUFDO0FBZEQsc0NBY0M7QUFFRCxTQUFnQixjQUFjLENBQzFCLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLE9BQWUsRUFDZixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixPQUFlLEVBQ2YsT0FBZTtJQUVmLElBQU0sWUFBWSxHQUFHLEVBQUUsR0FBRyxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUN0RSxJQUFNLFlBQVksR0FBRyxtQ0FBb0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRTlFLE9BQU8sWUFBWSxJQUFJLFlBQVksQ0FBQztBQUN4QyxDQUFDO0FBZkQsd0NBZUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FDL0IsT0FBZSxFQUNmLE9BQWUsRUFDZixPQUFlLEVBQ2YsYUFBcUIsRUFDckIsSUFBWSxFQUNaLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixJQUFZO0lBRVosSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDO0lBTzVCLElBQU0sSUFBSSxHQUFLLFVBQUMsR0FBWTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNmLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckI7YUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0QixDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUNGLElBQU0sTUFBTSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7SUFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRCxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFckQsT0FBTyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFuQ0Qsa0RBbUNDOzs7Ozs7Ozs7OztBQ3hZRCxTQUFnQixvQkFBb0IsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO0lBQy9FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFGRCxvREFFQztBQUVELFNBQWdCLHVCQUF1QixDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7SUFDbEYsSUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixJQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRXRCLE9BQU8sS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUM7QUFMRCwwREFLQztBQUVELFNBQWdCLHNCQUFzQixDQUNsQyxFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7SUFFVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBVEQsd0RBU0M7QUFFRCxTQUFnQix5QkFBeUIsQ0FDckMsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVO0lBRVYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBVEQsOERBU0M7QUFFRCxTQUFnQixxQkFBcUIsQ0FDakMsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7SUFFVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFSRCxzREFRQztBQUVELFNBQWdCLHdCQUF3QixDQUNwQyxFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQztBQVJELDREQVFDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQy9CLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQztBQVRELGtEQVNDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQ2xDLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLElBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNsQixJQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLElBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFbEIsSUFBTSxHQUFHLEdBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLElBQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxJQUFJLEtBQUssR0FBWSxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDcEIsS0FBSyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7S0FDOUI7SUFFRCxJQUFJLEVBQVUsQ0FBQztJQUNmLElBQUksRUFBVSxDQUFDO0lBRWYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLEVBQUUsR0FBRyxFQUFFLENBQUM7S0FDWDtTQUFNLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNsQixFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNYO1NBQU07UUFDSCxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDcEIsRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNuQixJQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRW5CLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUF0Q0Qsd0RBc0NDOzs7Ozs7Ozs7OztBQ3RHRCx1Q0FBa0M7QUFFbEMsU0FBZ0Isb0JBQW9CLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO0lBQ3ZHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUZELG9EQUVDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO0lBQzFHLElBQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEIsSUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixJQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRXRCLE9BQU8sS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDekQsQ0FBQztBQU5ELDBEQU1DO0FBRUQsU0FBZ0IsbUJBQW1CLENBQy9CLE9BQWUsRUFDZixPQUFlLEVBQ2YsT0FBZSxFQUNmLEtBQWEsRUFDYixLQUFhLEVBQ2IsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFFBQWdCO0lBRWhCLElBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDL0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQy9CLElBQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNoQyxJQUFNLE1BQU0sR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLElBQU0sSUFBSSxHQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ25FLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sb0JBQW9CLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNsRjtJQUVELElBQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDL0IsSUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztJQUMvQixJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQy9CLElBQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDbEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUNsQyxJQUFNLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ2xDLElBQU0sSUFBSSxHQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ25FLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sb0JBQW9CLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN4RjtJQUVELE9BQU8scUJBQXFCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvRyxDQUFDO0FBbENELGtEQWtDQztBQUVELFNBQWdCLDBCQUEwQixDQUFDLE9BQWdCLEVBQUUsTUFBZSxFQUFFLE1BQWU7SUFDekYsSUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUU5QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRyxDQUFDO0FBSkQsZ0VBSUM7QUFNRCxTQUFnQixxQkFBcUIsQ0FDakMsTUFBYyxFQUNkLE1BQWMsRUFDZCxNQUFjLEVBQ2QsSUFBWSxFQUNaLElBQVksRUFDWixJQUFZLEVBQ1osTUFBYyxFQUNkLE1BQWMsRUFDZCxNQUFjO0lBRWQsSUFBTSxZQUFZLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNuQyxJQUFNLFlBQVksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ25DLElBQU0sWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFbkMsSUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNuQyxJQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ25DLElBQU0sWUFBWSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7SUFFbkMsSUFBTSxNQUFNLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3pFLElBQU0sTUFBTSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUN6RSxJQUFNLE1BQU0sR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUM7SUFFekUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQy9FLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQztJQUVuSCxPQUFPLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDN0IsQ0FBQztBQTNCRCxzREEyQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZELGlEQUE2QjtBQUM3QixpREFBNkI7QUFDN0IsaURBQWdDO0FBQ2hDLGlEQUFnQztBQUNoQyxpREFBK0I7QUFDL0IsaURBQStCO0FBQy9CLGlEQUE4QjtBQUM5QixpREFBMEI7QUFDMUIsaURBQWdDOzs7Ozs7Ozs7OztBQ1JoQyx1Q0FBaUQ7QUFFakQsU0FBZ0IsdUJBQXVCLENBQ25DLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEdBQVcsRUFDWCxHQUFXLEVBQ1gsR0FBVztJQUVYLE9BQU8seUJBQXlCLENBQzVCLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQzdCLENBQUM7QUFDTixDQUFDO0FBeEJELDBEQXdCQztBQUVELFNBQWdCLHlCQUF5QixDQUNyQyxFQUFpQixFQUNqQixFQUFpQixFQUNqQixFQUFpQixFQUNqQixFQUFpQixFQUNqQixFQUFpQjtJQUVqQixJQUFNLElBQUksR0FBRyxjQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqQyxJQUFNLElBQUksR0FBRyxjQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqQyxJQUFNLEVBQUUsR0FBSyxjQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqQyxJQUFNLENBQUMsR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFekIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUMvQyxJQUFNLENBQUMsR0FBRyxjQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckMsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixJQUFNLENBQUMsR0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLElBQU0sQ0FBQyxHQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFNUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUM7QUExQkQsOERBMEJDOzs7Ozs7Ozs7OztBQ3BERCxvREFBOEQ7QUFHOUQ7SUFDSSxjQUNvQixRQUF1QixFQUN2QixJQUFtQjtRQURuQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQWU7SUFFdkMsQ0FBQztJQUVELHNCQUFXLHNCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcseUJBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBRU0sdUJBQVEsR0FBZjtRQUNJLE9BQU8sMENBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVhLGVBQVUsR0FBeEIsVUFBeUIsRUFBbUQ7WUFBbEQsTUFBTSxjQUFFLE1BQU07UUFDcEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLEdBQUcsRUFBRTtnQkFDRCxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNO2dCQUNwQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNO2FBQ3ZCO1lBQ0QsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU07Z0JBQ3BCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU07YUFDdkI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWEsZUFBVSxHQUF4QixVQUF5QixFQUFrQjtZQUFqQixHQUFHLFdBQUUsR0FBRztRQUM5QixJQUFNLElBQUksR0FBRztZQUNULENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ25CLENBQUM7UUFFRixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQXhDWSxvQkFBSTs7Ozs7Ozs7Ozs7QUNIakIsb0RBQThEO0FBRTlEO0lBQ0ksZ0JBQ29CLE1BQWMsRUFDZCxNQUFxQjtRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUV6QyxDQUFDO0lBRUQsc0JBQVcsMkJBQU87YUFBbEI7WUFDSSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVhLGlCQUFVLEdBQXhCLFVBQXlCLEVBQWtCLEVBQUUsVUFBaUM7WUFBcEQsR0FBRyxXQUFFLEdBQUc7UUFBVywrQ0FBaUM7UUFDMUUsSUFBTSxNQUFNLEdBQUc7WUFDWCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDekIsQ0FBQztRQUVGLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBTSxNQUFNLEdBQUcsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRGLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFYSxrQkFBVyxHQUF6QixVQUEwQixPQUFnQixFQUFFLFVBQWlDO1FBQWpDLCtDQUFpQztRQUN6RSxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsMENBQXNCLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDO0FBaENZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puQixnREFBMEI7QUFDMUIsaURBQTRCO0FBQzVCLGlEQUFvQzs7Ozs7Ozs7Ozs7QUNBcEMsU0FBZ0Isc0JBQXNCLENBQUMsRUFBa0I7UUFBakIsR0FBRyxXQUFFLEdBQUc7SUFDNUMsT0FBTztRQUNILFFBQVEsRUFBRTtZQUNOLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNSLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDbkI7S0FDSixDQUFDO0FBQ04sQ0FBQztBQVhELHdEQVdDO0FBQ0QsU0FBZ0Isc0JBQXNCLENBQUMsRUFBeUI7UUFBeEIsUUFBUSxnQkFBRSxJQUFJO0lBQ2xELE9BQU87UUFDSCxHQUFHLEVBQUU7WUFDRCxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDaEI7UUFDRCxHQUFHLEVBQUU7WUFDRCxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN6QjtLQUNKLENBQUM7QUFDTixDQUFDO0FBWEQsd0RBV0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRCxtREFBcUQ7QUFHckQ7SUFBbUUsMkNBQW9CO0lBSW5GLGlDQUFzQixJQUFXLEVBQUUsTUFBbUM7UUFBdEUsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FHZDtRQUZHLEtBQUksQ0FBQyxPQUFPLEdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDckMsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyxDQVRrRSxrQ0FBZSxHQVNqRjtBQVRxQiwwREFBdUI7Ozs7Ozs7Ozs7O0FDSDdDO0lBR0kseUJBQXNDLElBQVc7UUFBWCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7QUFOcUIsMENBQWU7Ozs7Ozs7Ozs7O0FDQXJDO0lBQUE7SUFJQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDO0FBSnFCLHdDQUFjOzs7Ozs7Ozs7OztBQ0FwQztJQUtJLHVCQUFtQixLQUFvQyxFQUFFLE1BQVU7UUFBaEQsZ0NBQVEsYUFBYSxDQUFDLGNBQWM7UUFBRSxtQ0FBVTtRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVhLHNCQUFRLEdBQXRCLFVBQXVCLFFBQXdCO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPLElBQUksYUFBYSxFQUFFLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksYUFBYSxDQUNwQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUNyRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQy9DLENBQUM7SUFDTixDQUFDO0lBbEJhLDRCQUFjLEdBQUcsRUFBRSxDQUFDO0lBbUJ0QyxvQkFBQztDQUFBO0FBcEJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ExQixpREFBNEM7QUFDNUMsaURBQStCO0FBQy9CLGlEQUFpQztBQUNqQyxpREFBbUM7QUFFbkMsaURBQXdDO0FBQ3hDLGlEQUFzQztBQUN0QyxpREFBOEM7QUFDOUMsaURBQXlDO0FBQ3pDLGlEQUFnQztBQUNoQyxnREFBNEI7QUFDNUIsaURBQTBDO0FBQzFDLGlEQUF1QjtBQUN2QixpREFBdUI7QUFDdkIsaURBQWtDO0FBQ2xDLGlEQUFrQztBQUNsQyxpREFBdUM7QUFDdkMsaURBQXlDO0FBQ3pDLGlEQUFpQztBQUNqQyxpREFBbUM7QUFDbkMsaURBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdEMsU0FBZ0IsSUFBSTtJQUNoQixPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRkQsb0JBRUM7QUFLRCxTQUFnQixLQUFLO0lBQ2pCLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCxzQkFFQztBQUtELFNBQWdCLE1BQU07SUFDbEIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUZELHdCQUVDO0FBS0QsU0FBZ0IsTUFBTTtJQUNsQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRkQsd0JBRUM7QUFLRCxTQUFnQixRQUFRO0lBQ3BCLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNuRCxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSkQsNEJBSUM7QUFLRCxTQUFnQixLQUFLO0lBQ2pCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUZELHNCQUVDO0FBS0QsU0FBZ0IsV0FBVzs7SUFDdkIseUJBQVEsTUFBYywwQ0FBRSxNQUFNLDBDQUFFLEdBQUcsMENBQUUsT0FBTyxDQUFDO0FBQ2pELENBQUM7QUFGRCxrQ0FFQztBQUtELFNBQWdCLEtBQUs7SUFDakIsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUZELHNCQUVDO0FBS0QsU0FBZ0IsS0FBSztJQUNqQixPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRkQsc0JBRUM7QUFLRCxTQUFnQixVQUFVO0lBQ3RCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUZELGdDQUVDO0FBS0QsU0FBZ0IsT0FBTztJQUNuQixPQUFPLGNBQWMsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQ3RELENBQUM7QUFGRCwwQkFFQztBQUtELFNBQWdCLFFBQVE7SUFDcEIsT0FBTyxhQUFhLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxDQUFDO0FBRkQsNEJBRUM7Ozs7Ozs7Ozs7O0FDN0VELFNBQWdCLEtBQUssQ0FBb0MsS0FBVSxFQUFFLFNBQXFCO0lBQ3RGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7UUFDN0MsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUVELElBQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7UUFDWixJQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBQyxjQUFjLElBQUssUUFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQVksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxDQUFDO1FBQzdHLElBQUksR0FBRyxFQUFFO1lBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFwQkQsc0JBb0JDO0FBV0QsU0FBZ0IsUUFBUSxDQUFVLEtBQVUsRUFBRSxRQUFZLEVBQUUsUUFBMkI7SUFBekMsdUNBQVk7SUFBRSxzQ0FBVyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFDdkIsSUFBTSxLQUFLLEdBQVMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDMUUsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFYRCw0QkFXQztBQVNELFNBQWdCLEdBQUcsQ0FBQyxLQUFlO0lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLENBQUMsQ0FBQztLQUNaO0lBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBVEQsa0JBU0M7QUFTRCxTQUFnQixHQUFHLENBQUMsS0FBZTtJQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQVRELGtCQVNDO0FBU0QsU0FBZ0IsR0FBRyxDQUFDLEtBQWU7SUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQVRELGtCQVNDO0FBU0QsU0FBZ0IsR0FBRyxDQUFDLEtBQWU7SUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN4RCxDQUFDO0FBVEQsa0JBU0M7QUFjRCxTQUFnQixJQUFJLENBQUksS0FBVSxFQUFFLFNBQWlCLEVBQUUsTUFBVyxFQUFFLE9BQVk7SUFBekIsb0NBQVc7SUFBRSxzQ0FBWTtJQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO0tBQ25DO0lBRUQsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDcEQsQ0FBQztBQU5ELG9CQU1DO0FBV0QsU0FBZ0IsT0FBTyxDQUFJLEtBQVU7SUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFORCwwQkFNQztBQVFELFNBQWdCLGFBQWEsQ0FBYyxLQUFVO0lBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQVRELHNDQVNDO0FBRUQsU0FBZ0IsVUFBVSxDQUFJLElBQVMsRUFBRSxLQUFhO0lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUFLLENBQUM7SUFFNUIsT0FBTyxNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN6QixJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUksSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxVQUFVLEVBQUU7WUFDWixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzFCO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUksTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQXJCRCxnQ0FxQkM7QUFVRCxTQUFnQixVQUFVLENBQUksS0FBVTtJQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFORCxnQ0FNQztBQU9ELFNBQWdCLFNBQVMsQ0FBSSxHQUFRLEVBQUUsUUFBOEI7SUFDakUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCw4QkFNQzs7Ozs7Ozs7Ozs7QUNuT0QsU0FBZ0IscUJBQXFCLENBQUksS0FBUTtJQUM3QyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksS0FBRyxLQUFPLEtBQUssT0FBTyxDQUFDO0FBQ3BELENBQUM7QUFGRCxzREFFQzs7Ozs7Ozs7Ozs7QUNGRCw2Q0FBcUM7QUFFckMsSUFBTSxNQUFNLEdBQWtEO0lBQzFELEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3RCLEdBQUcsRUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLElBQUksRUFBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLENBQUM7QUFFRixTQUFnQixTQUFTLENBQ3JCLFNBQTJDLEVBQzNDLE9BQXlDLEVBQ3pDLFFBQWdCO0lBRWhCLElBQU0sR0FBRyxHQUFLLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLElBQU0sS0FBSyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLElBQU0sSUFBSSxHQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLElBQU0sS0FBSyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBFLE9BQU87UUFDSCxrQkFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ2xCLGtCQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDcEIsa0JBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNuQixrQkFBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0tBQ3ZCLENBQUM7QUFDTixDQUFDO0FBaEJELDhCQWdCQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWM7SUFDOUQsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxJQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BCLElBQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzFCLElBQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDckIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxJQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BCLElBQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzFCLElBQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDckIsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuQyxJQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLElBQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFbkMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBZEQsc0NBY0M7QUFFRCxTQUFnQixPQUFPLENBQUMsS0FBYTtJQUNqQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV6QyxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUpELDBCQUlDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEtBQWEsRUFBRSxPQUFlO0lBQ3JELElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQztJQUN2QyxJQUFNLENBQUMsR0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLElBQU0sQ0FBQyxHQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekIsSUFBTSxDQUFDLEdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUV6QixPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFSRCxnQ0FRQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDbkQsT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTztRQUMvRCxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLO1FBQ3ZDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBSkQsMEJBSUM7QUFFRCxTQUFnQixPQUFPLENBQUMsR0FBVztJQUMvQixJQUFNLEtBQUssR0FBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBRTVELE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN0QyxDQUFDO0FBTEQsMEJBS0M7QUFFRCxTQUFnQixPQUFPLENBQUMsR0FBVztJQUMvQixPQUFPO1FBQ0gsR0FBRyxJQUFJLEVBQUU7UUFDVCxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDZixHQUFHLEdBQUcsSUFBSTtLQUNiLENBQUM7QUFDTixDQUFDO0FBTkQsMEJBTUM7QUFFRCxTQUFnQixPQUFPLENBQUMsR0FBVztJQUMvQixPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztJQUNuRCxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxLQUFhO0lBQ3BDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7SUFFRCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDckYsSUFBSSxTQUFTLEVBQUU7UUFDWCxPQUFPO1lBQ0gsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDN0IsQ0FBQztLQUNMO0lBRUQsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO0lBQzlGLElBQUksUUFBUSxFQUFFO1FBQ1YsT0FBTztZQUNILFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQzVCLENBQUM7S0FDTDtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQXhCRCxnQ0F3QkM7Ozs7Ozs7Ozs7O0FDakhELFNBQWdCLFdBQVcsQ0FBbUMsR0FBTTtJQUNoRSxJQUFJO1FBQ0EsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNqQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDTCxDQUFDO0FBUkQsa0NBUUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JELDRDQUFtRTtBQXVCbkUsU0FBZ0IsZUFBZSxDQUFDLE9BQW9CO0lBQ2hELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxJQUFNLEVBQUUsR0FBUSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25ELElBQU0sTUFBTSxHQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFNUYsT0FBTyxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVFLENBQUM7QUFORCwwQ0FNQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxPQUFvQixFQUFFLGNBQTBCO0lBQTFCLDJEQUEwQjtJQUN4RSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFFYixJQUFNLFdBQVcsR0FBRyxVQUFDLENBQWU7UUFDaEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLEdBQWlCLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUksR0FBaUIsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEMsSUFBSSxHQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksR0FBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBSSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUMsQ0FBQztJQUVGLElBQU0sYUFBYSxHQUFHLFVBQUMsQ0FBZTtRQUNsQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksR0FBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLEdBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkMsUUFBUSxDQUFDLFdBQVcsR0FBSyxnQkFBZ0IsQ0FBQztRQUMxQyxRQUFRLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDLENBQUM7SUFFRixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBZ0IsQ0FBQztJQUNwRSxJQUFJLE1BQU0sRUFBRTtRQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDekQ7U0FBTTtRQUNILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDMUQ7SUFFRCxTQUFTLGdCQUFnQjtRQUNyQixRQUFRLENBQUMsV0FBVyxHQUFLLElBQUksQ0FBQztRQUM5QixRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsT0FBTztRQUNILEtBQUssRUFBRTtZQUNILElBQUksTUFBTSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDNUQ7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUM3RDtRQUNMLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQztBQS9DRCxrQ0ErQ0M7QUFFRCxTQUFnQixXQUFXLENBQUMsT0FBMkI7SUFDbkQsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU3QyxJQUFJLCtDQUFtQyxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ3BDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVJELGtDQVFDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLEtBQWEsRUFBRSxRQUFvQyxFQUFFLE9BQWU7SUFBZix5Q0FBZTtJQUMvRixJQUFNLFlBQVksR0FBcUIsYUFBYSxDQUFDLE9BQU8sRUFBRTtRQUMxRCxPQUFPO1FBQ1AsSUFBSSxFQUFNLFVBQVU7UUFDcEIsUUFBUSxFQUFFLGNBQU0sZUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBOUIsQ0FBOEI7S0FDakQsQ0FBQyxDQUFDO0lBRUgsT0FBTyxhQUFhLENBQUMsT0FBTyxFQUFFO1FBQzFCLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsUUFBUSxFQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7S0FDcEYsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVhELHdDQVdDO0FBRUQsU0FBZ0IsYUFBYSxDQUF3QyxJQUFPLEVBQUUsT0FBMkI7SUFDckcsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBSSxJQUFJLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1YsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7UUFDbEMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZCxLQUFLLFdBQVc7Z0JBQ1osTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNULE1BQTJCLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7b0JBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBUSxDQUFDO2dCQUM5RCxDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDekIsTUFBTSxDQUFDLE1BQU0sT0FBYixNQUFNLEVBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUM5QjtxQkFBTTtvQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNWLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUEzQ0Qsc0NBMkNDO0FBTUQsU0FBZ0IsNEJBQTRCLENBQUMsS0FBaUIsRUFBRSxPQUFpQztJQUFwRCx5Q0FBaUI7SUFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87UUFDdkIsSUFBTSxLQUFLLEdBQXFCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDbkQsSUFBSSxFQUFPLE9BQU87WUFDbEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsS0FBSyxFQUFNLEtBQUs7WUFDaEIsT0FBTyxFQUFFLE9BQU8sT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBTSxjQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQy9FLFFBQVEsRUFBRztnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWZELG9FQWVDO0FBRUQsU0FBZ0IsV0FBVyxDQUF3QyxNQUFtQixFQUFFLElBQU87SUFBRSxpQkFBb0I7U0FBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1FBQXBCLGdDQUFvQjs7SUFDakgsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBOEIsSUFBSSxTQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQztJQUM5RixJQUFJLE1BQU0sRUFBRTtRQUNSLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0lBRUQsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFQRCxrQ0FPQztBQUVELFNBQWdCLG9CQUFvQixDQUF3QyxNQUFtQixFQUFFLElBQU87SUFBRSxpQkFBb0I7U0FBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1FBQXBCLGdDQUFvQjs7SUFDMUgsSUFBTSxNQUFNLEdBQUcsV0FBVywrQkFBSSxNQUFNLEVBQUUsSUFBSSxHQUFLLE9BQU8sRUFBQyxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0IsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUxELG9EQUtDOzs7Ozs7Ozs7OztBQ3ZMRCw2Q0FBMEQ7QUFFMUQsU0FBZ0IsY0FBYyxDQUFDLEtBQXVCO0lBQ2xELElBQU0sTUFBTSxHQUFHLDBCQUFhLENBQUMsUUFBUSxFQUFFO1FBQ25DLEtBQUssRUFBRyxLQUFLLENBQUMsS0FBSztRQUNuQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07S0FDdkIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQThCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0UsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFSRCx3Q0FRQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLEtBQWE7SUFDMUMsT0FBTyx3QkFBVyxDQUFDO1FBQ2YsR0FBRyxFQUFFLEtBQUs7S0FDYixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSkQsNENBSUM7QUFFRCxTQUFnQixXQUFXLENBQUMsUUFBcUQsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUFkLHVDQUFjO0lBQzVHLElBQU0sTUFBTSxHQUFHLDBCQUFhLENBQUMsUUFBUSxFQUFFO1FBQ25DLEtBQUs7UUFDTCxNQUFNO0tBQ1QsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUE2QixDQUFDLENBQUM7SUFFOUQsT0FBTyxNQUFNLENBQUM7QUFFbEIsQ0FBQztBQVRELGtDQVNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRCxpREFBa0M7QUFDbEMsaURBQThCO0FBQzlCLGlEQUE4QjtBQUM5QixpREFBOEI7QUFDOUIsaURBQTZCO0FBQzdCLGlEQUE2QjtBQUM3QixpREFBOEI7QUFDOUIsaURBQTZCO0FBQzdCLGlEQUE2QjtBQUM3QixpREFBNkI7QUFLN0IsZ0RBQThCO0FBQzlCLGlEQUErQjtBQUMvQixpREFBK0I7QUFDL0IsaURBQWdDO0FBQ2hDLGlEQUFtQztBQUNuQyxpREFBK0I7QUFDL0IsaURBQStCO0FBQy9CLGlEQUE0Qjs7Ozs7Ozs7Ozs7QUNyQjVCLHVDQUF3QztBQUV4QyxTQUFnQixrQkFBa0IsQ0FBQyxLQUFpQjtJQUNoRCxPQUFPLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRkQsZ0RBRUM7QUFFRCxTQUFnQix5QkFBeUIsQ0FBQyxNQUE0QjtJQUNsRSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLGNBQU0sQ0FBQyxJQUFJLENBQUM7S0FDdEI7SUFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLGNBQU0sQ0FBQyxNQUFNLENBQUM7S0FDeEI7SUFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLGNBQU0sQ0FBQyxLQUFLLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBVkQsOERBVUM7QUFFRCxTQUFnQixlQUFlLENBQUMsS0FBb0IsRUFBRSxHQUFTO0lBQzNELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUM7QUFDOUIsQ0FBQztBQUZELDBDQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQscURBQXlDO0FBRXpDLFNBQWdCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBWTtJQUN6QyxJQUFNLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFFakMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUpELGtCQUlDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEdBQVcsRUFBRSxRQUFZLEVBQUUsSUFBMEM7SUFBeEQsdUNBQVk7SUFBRSxxQ0FBMEM7SUFDakcsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXBFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBSkQsMENBSUM7QUFFRCxTQUFnQixZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDN0MsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTNDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEUsQ0FBQztBQUxELG9DQUtDO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUN6RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHNCQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1AsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNWO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBWkQsa0RBWUM7QUFFRCxTQUFnQixJQUFJLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxHQUFXO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUZELG9CQUVDO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLEtBQWE7SUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRVYsT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEIsQ0FBQyxFQUFFLENBQUM7S0FDUDtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQVJELHNCQVFDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTtJQUN4RCxPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsb0JBRUM7QUFRRCxTQUFnQixTQUFTLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDOUMsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCw4QkFFQztBQVFELFNBQWdCLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBVztJQUMzQyxPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLElBQWM7SUFDbEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBbUIsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtRQUFwQixJQUFNLElBQUk7UUFDWCxHQUFHLElBQUksSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLENBQUM7QUFQRCwwQkFPQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxTQUFnQixPQUFPLENBQUMsSUFBWSxFQUFFLElBQVk7SUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsMEJBRUM7QUFFRCxJQUFNLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUU1QixTQUFnQixTQUFTLENBQUMsT0FBZTtJQUNyQyxPQUFPLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDM0IsQ0FBQztBQUZELDhCQUVDOzs7Ozs7Ozs7OztBQzVGRCxTQUFnQixZQUFZLENBQUMsT0FBZTtJQUN4QyxJQUFNLElBQUksR0FBYyxFQUFFLENBQUM7SUFDM0IsSUFBTSxJQUFJLEdBQWMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1NBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1FBQ2hCLElBQU0sS0FBSyxHQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFiRCxvQ0FhQztBQWNELFNBQWdCLElBQUksQ0FBSSxHQUFNO0lBQUUsY0FBa0I7U0FBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1FBQWxCLDZCQUFrQjs7SUFDOUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3hCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO1NBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVZELG9CQVVDO0FBTUQsU0FBZ0IscUJBQXFCLENBQUksT0FBZTtJQUNwRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRkQsc0RBRUM7QUFJRCxTQUFnQixTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWdDLEVBQUUsSUFBWTtJQUNsRixJQUFNLENBQUMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRCxJQUFNLFlBQVksR0FBTSxJQUFJLFNBQUksS0FBSyxpQkFBWSxDQUFDLENBQUMsV0FBVyxFQUFJLENBQUM7SUFDbkUsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDakMsUUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7S0FDbEM7SUFFRCxPQUFVLElBQUksU0FBSSxLQUFPLENBQUM7QUFDOUIsQ0FBQztBQVRELDhCQVNDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUErRDtJQUEvRCxrQ0FBUyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDcEcsSUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN6QixJQUFNLEVBQUUsR0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLEtBQWMsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUUsRUFBRTtRQUFiLElBQUksQ0FBQztRQUNOLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QztLQUNKO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBYkQsOEJBYUM7QUFZRCxTQUFnQixXQUFXLENBQUksS0FBb0YsRUFDL0csU0FBZSxFQUNmLFNBQWU7SUFGWSxnQ0FBWSxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMvRywyQ0FBZTtJQUNmLDJDQUFlO0lBQ2YsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO0lBQzVCLElBQU0sSUFBSSxHQUFlLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsS0FBbUIsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtRQUFwQixJQUFNLElBQUk7UUFDTCxTQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQW5DLEdBQUcsVUFBRSxLQUFLLFFBQXlCLENBQUM7UUFDM0MsSUFBSSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDekMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDN0MsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNILFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwRDtLQUNKO0lBRUQsT0FBTyxXQUFnQixDQUFDO0FBQzVCLENBQUM7QUFqQkQsa0NBaUJDO0FBT0QsU0FBZ0IsbUJBQW1CLENBQUMsR0FBdUI7SUFFdkQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLEtBQUssSUFBTSxNQUFNLElBQUksR0FBRyxFQUFFO1FBQ3RCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksTUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUcsTUFBTSxTQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUcsQ0FBQztTQUN4RTtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVZELGtEQVVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQVE7SUFDOUIsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDbkIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMzRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQVJELDhCQVFDO0FBRUQsU0FBZ0IsS0FBSyxDQUFJLEdBQVc7SUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixLQUFLLElBQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLEVBQ3JFO1lBQ0UsU0FBUztTQUNaO1FBQ0QsSUFBSTtZQUVBLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFsQkQsc0JBa0JDO0FBRUQsU0FBZ0IsR0FBRyxDQUFpQixNQUFTLEVBQUUsSUFBMkU7SUFDdEgsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO0lBRTVCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xFO2lCQUFNO2dCQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEU7WUFFRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQztBQXJCRCxrQkFxQkM7Ozs7Ozs7Ozs7O0FDaExELFNBQWdCLE9BQU8sQ0FBb0MsR0FBTSxFQUFFLEtBQWtCO0lBQ2pGLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLFFBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUM7U0FDckUsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsRUFBRSxFQUFPLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBUEQsMEJBT0M7QUFFRCxTQUFnQixTQUFTLENBQUksSUFBTyxFQUFFLElBQU87O0lBQ3pDLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUMxQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksYUFBQyxJQUFZLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxtQkFBTSxJQUFZLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxHQUFFO1lBQ3ZFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWdCLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzFDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsS0FBaUIsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtZQUFuQixJQUFNLEdBQUc7WUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLE9BQVEsSUFBWSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDL0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUM7QUFDekIsQ0FBQztBQW5DRCw4QkFtQ0M7QUFFRCxTQUFnQixRQUFRLENBQUksTUFBUzs7SUFDakMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXZCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxlQUFRLENBQUMsQ0FBQyxDQUFDLEVBQVgsQ0FBVyxDQUFRLENBQUM7U0FDaEQ7UUFDRCxJQUFJLGFBQUMsTUFBYywwQ0FBRSxXQUFXLDBDQUFFLElBQUksTUFBSyxRQUFRLEVBQUU7WUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzlEO1FBR0QsSUFBTSxRQUFNLEdBQWUsRUFBRSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtnQkFBWCxHQUFHLFVBQUUsS0FBSztZQUN0QyxRQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFXLENBQUM7S0FDdEI7SUFFRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtRQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBekJELDRCQXlCQztBQUVELFNBQWdCLGdCQUFnQixDQUFvQyxHQUFNO0lBQ3RFLElBQU0sTUFBTSxHQUFxQixFQUFFLENBQUM7SUFDcEMsS0FBSyxJQUFNLE1BQU0sSUFBSSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsU0FBUztTQUNaO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBSSxNQUFNO1lBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDckIsQ0FBQyxDQUFDO0tBQ047SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBYkQsNENBYUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsWUFBb0IsRUFBRSxTQUFlO0lBQWYsMkNBQWU7SUFDaEYsSUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuRCxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQywwQkFBMEIsRUFBRSxZQUFZLElBQUssaUNBQTBCLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQWpGLENBQWlGLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEssQ0FBQztBQUpELDhDQUlDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUksR0FBVyxFQUFFLElBQVMsRUFBRSxLQUFRO0lBQ2pFLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQztJQUN0QixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQy9DLENBQUM7QUFQRCw4Q0FPQztBQUVELFNBQWdCLGlCQUFpQixDQUFJLE1BQVM7SUFDMUMsSUFBTSxVQUFVLEdBQVMsRUFBRSxDQUFDO0lBQzVCLElBQU0sS0FBSyxHQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsSUFBSSxLQUFLLEdBQWdCLENBQUMsQ0FBQztJQUMzQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsSUFBTSxLQUFLLEdBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2xDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2xDLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixLQUFLLElBQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDckIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUF2QkQsOENBdUJDO0FBRUQsU0FBZ0IsSUFBSSxDQUFrRCxNQUFTO0lBQzNFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBTSxDQUFDLElBQUksTUFBTSxFQUFFO1FBQ3BCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixNQUFNLEVBQUUsQ0FBQztTQUNaO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBVEQsb0JBU0M7QUFFRCxTQUFnQixPQUFPLENBQW9DLE1BQVM7SUFDaEUsS0FBSyxJQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDeEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUNuRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQVJELDBCQVFDO0FBMENELFNBQWdCLFFBQVEsQ0FBQyxJQUFXLEVBQUUsWUFBb0IsRUFBRSxTQUFlLEVBQUUsYUFBcUI7SUFBdEMsMkNBQWU7SUFBRSxxREFBcUI7SUFDOUYsSUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFM0csT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7UUFDekIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sRUFBRSxZQUFZLElBQUssY0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBM0MsQ0FBMkMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoSCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxhQUFhLEVBQUU7WUFDL0MsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBWkQsNEJBWUM7Ozs7Ozs7Ozs7O0FDM01ELFNBQWdCLGlCQUFpQixDQUFDLEdBQVc7SUFDekMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDcEMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQztBQVBELDhDQU9DOzs7Ozs7Ozs7OztBQ0NELFNBQWdCLE1BQU07SUFDbEIsT0FBTyxZQUFvQixLQUFLLE1BQU0sQ0FBQztBQUMzQyxDQUFDO0FBRkQsd0JBRUM7QUFFRCxTQUFnQixNQUFNO0lBQ2xCLE9BQU8sWUFBb0IsS0FBSyxZQUFZLENBQUM7QUFDakQsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsS0FBSztJQUNqQixPQUFPLE1BQXNDLElBQUksQ0FBQyxZQUFvQixDQUFDO0FBQzNFLENBQUM7QUFGRCxzQkFFQztBQUdELFNBQWdCLGNBQWMsQ0FBQyxJQUEyQztBQUUxRSxDQUFDO0FBRkQsd0NBRUM7QUFFRCxTQUFnQixjQUFjO0lBQzFCLE9BQU87UUFDSCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUNsQyxRQUFRLEVBQUssT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUMvQixNQUFNLEVBQU8sT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUM3QixPQUFPLEVBQU0sT0FBTyxDQUFDLE9BQU87UUFDNUIsUUFBUSxFQUFLLE9BQU8sQ0FBQyxRQUFRO0tBQ2hDLENBQUM7QUFDTixDQUFDO0FBUkQsd0NBUUM7QUFFRCxTQUFnQixxQkFBcUI7SUFDakMsSUFBSSxLQUFxQixFQUFFLEVBRTFCO0FBQ0wsQ0FBQztBQUpELHNEQUlDOzs7Ozs7Ozs7OztBQ3ZDRCxTQUFnQixrQkFBa0IsQ0FBQyxHQUFXLEVBQUUsR0FBVztJQUN2RCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELGdEQUVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDckQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCw0Q0FFQztBQUVELFNBQWdCLGFBQWE7SUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQy9CLENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLFVBQVU7SUFBSSxlQUFhO1NBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtRQUFiLDBCQUFhOztJQUN2QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRkQsZ0NBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQsU0FBZ0IsV0FBVyxDQUFDLElBQVMsRUFBRSxJQUFXO0lBQzlDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXZCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFMRCxrQ0FLQztBQUVELFNBQXNCLGlCQUFpQjtJQUFDLG1CQUFtQjtTQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7UUFBbkIsOEJBQW1COzs7Ozs7OzBCQUMzQixFQUFULHVCQUFTOzs7eUJBQVQsd0JBQVM7b0JBQWpCLElBQUk7eUJBQ1AsUUFBTyxJQUFJLEtBQUssVUFBVSxHQUExQixjQUEwQjtvQkFFbkIsV0FBTSxJQUFJLEVBQUU7d0JBQW5CLFdBQU8sU0FBWSxFQUFDOztvQkFIVCxJQUFTOzs7Ozs7Q0FNL0I7QUFQRCw4Q0FPQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJELDZEQUFnRTtBQUVoRSxJQUFNLFdBQVcsR0FBOEI7SUFDM0MsRUFBRSxFQUFJLGtCQUFrQjtJQUN4QixDQUFDLEVBQUssbUJBQW1CO0lBQ3pCLEVBQUUsRUFBSSxZQUFZO0lBQ2xCLENBQUMsRUFBSyxhQUFhO0lBQ25CLEVBQUUsRUFBSSxtQkFBbUI7SUFDekIsQ0FBQyxFQUFLLGdCQUFnQjtJQUN0QixFQUFFLEVBQUksWUFBWTtJQUNsQixDQUFDLEVBQUssYUFBYTtJQUNuQixJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCLEVBQUUsRUFBSSxZQUFZO0lBQ2xCLEVBQUUsRUFBSSxZQUFZO0NBQ3JCLENBQUM7QUFFRixTQUFnQixXQUFXLENBQUMsSUFBWTtJQUNwQyxPQUFPLElBQUksTUFBTSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3pDLE9BQU8sSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCw0Q0FFQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDekMsT0FBTyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxPQUFPLElBQUksTUFBTSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3pDLE9BQU8sSUFBSSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFGRCw0Q0FFQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sSUFBSSxNQUFNLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLFlBQVksQ0FBQyxJQUFZLEVBQUUsTUFBYztJQUNyRCxLQUFLLElBQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTtRQUMzQixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO0tBQ0o7SUFFRCxPQUFPLElBQUksTUFBTSxDQUFDLE1BQUksTUFBTSxNQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQVJELG9DQVFDO0FBTUQsU0FBZ0Isa0JBQWtCLENBQUMsR0FBVztJQUMxQyxPQUFPLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRkQsZ0RBRUM7QUFNRCxTQUFnQixZQUFZLENBQUMsS0FBYTtJQUN0QyxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELG9DQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUQsOENBQXFDO0FBQ3JDLDZEQUFvRDtBQUVwRCxJQUFNLHVCQUF1QixHQUFHLDREQUE0RCxDQUFDO0FBQzdGLElBQU0scUJBQXFCLEdBQUssNERBQTRELENBQUM7QUFDN0YsSUFBTSxrQkFBa0IsR0FBUSx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRyxJQUFNLGdCQUFnQixHQUFVLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBb0I1RixTQUFnQix3QkFBd0IsQ0FBQyxJQUFZO0lBQ2pELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBUztRQUNoQyxJQUFNLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELDREQVVDO0FBU0QsU0FBZ0IsUUFBUSxDQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxtQkFBMEI7SUFBMUMsdUNBQWM7SUFBRSxnRUFBMEI7SUFDaEcsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtRQUMxQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzlGLENBQUM7QUFORCw0QkFNQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDekMsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUM7YUFDMUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzthQUNuQyxXQUFXLEVBQUUsQ0FBQztLQUN0QjtJQUVELElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQztTQUNqRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqQixXQUFXLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBZEQsNENBY0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3pDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQzFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUM7YUFDbkMsV0FBVyxFQUFFLENBQUM7S0FDdEI7SUFDRCxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQWhCLENBQWdCLENBQUM7U0FDakUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7U0FDakIsV0FBVyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQWJELDRDQWFDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ2IsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQztTQUM1QyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO1NBQ25DLFdBQVcsRUFBRTtTQUNiLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQXhCLENBQXdCLENBQUM7U0FDdkUsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQVhELDRDQVdDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBTkQsNENBTUM7QUFRRCxTQUFnQixVQUFVLENBQUMsSUFBWTtJQUNuQyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFGRCxnQ0FFQztBQUtELFNBQWdCLFNBQVMsQ0FBQyxJQUFZO0lBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCw4QkFFQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxJQUFZLEVBQUUsT0FBYTtJQUFiLHVDQUFhO0lBQ25ELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXRDLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQVBELGtDQU9DO0FBS0QsU0FBZ0IsS0FBSyxDQUFDLElBQVksRUFBRSxHQUFXO0lBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMzRCxDQUFDO0FBRkQsc0JBRUM7QUFPRCxTQUFnQixNQUFNLENBQUMsSUFBWSxFQUFFLG1CQUEyQjtJQUM1RCxPQUFPLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRkQsd0JBRUM7QUFFRCxTQUFnQixTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWU7SUFDbkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFGRCw4QkFFQztBQU1ELFNBQWdCLFFBQVEsQ0FBQyxJQUFZLEVBQUUsTUFBMEIsRUFBRSxLQUFZLEVBQUUsR0FBVTtJQUF4QixvQ0FBWTtJQUFFLGdDQUFVO0lBQ3ZGLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakYsSUFBTSxVQUFVLEdBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUvRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQ2YsSUFBSSxNQUFNLENBQUksWUFBWSxhQUFRLFVBQVksRUFBRSxHQUFHLENBQUMsRUFDcEQsVUFBQyxJQUFJLEVBQUUsR0FBRyxJQUFLLGFBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FDckMsQ0FBQztBQUNOLENBQUM7QUFSRCw0QkFRQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLE9BQWU7SUFDNUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCw0Q0FFQztBQVNELFNBQWdCLE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZO0lBQVosbUNBQVk7SUFDMUUsSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUFjLElBQWEsV0FBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBN0IsQ0FBNkIsQ0FBQztJQUVoRixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQU0sTUFBTSxHQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDN0IsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNuRDtJQUVELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1FBQzdCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDN0U7SUFFRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQWRELDBCQWNDO0FBY0QsU0FBZ0IsV0FBVyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsV0FBbUI7SUFBbkIsaURBQW1CO0lBQ3RFLElBQUksS0FBSyxHQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLElBQU0sSUFBSSxHQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzNDLE9BQU8sS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNmLE9BQU8sRUFBRSxDQUFDO1FBQ1YsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztLQUMzQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFWRCxrQ0FVQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLElBQVk7SUFDM0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCxnREFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxJQUFZO0lBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUFJO1FBQzVCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyQyxPQUFPLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELDRCQU1DO0FBT0QsU0FBZ0IsTUFBTSxDQUFDLElBQVksRUFBRSxNQUFnQixFQUFFLFdBQWtCO0lBQWxCLGdEQUFrQjtJQUNyRSxJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLFdBQVcsR0FBVSxDQUFDLENBQUM7SUFDM0IsSUFBSSxPQUFPLEdBQWMsQ0FBQyxDQUFDO0lBRTNCLE9BQU8sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDNUIsU0FBUyxHQUFLLFdBQVcsQ0FBQztRQUMxQixXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQztLQUNyQztJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRXpDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBaEJELHdCQWdCQztBQUVELFNBQWdCLHNCQUFzQixDQUFDLElBQVk7SUFDL0MsT0FBTyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25GLENBQUM7QUFGRCx3REFFQztBQU9ELFNBQWdCLGFBQWEsQ0FBQyxPQUFlO0lBQ3pDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixLQUFxQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtRQUF6QixJQUFNLE1BQU07UUFDYixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBUEQsc0NBT0M7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBWTtJQUNwQyxPQUFPLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxJQUFZLEVBQUUsU0FBaUI7SUFDcEQsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUYsQ0FBQztBQUZELDRCQUVDO0FBU0QsU0FBZ0IsVUFBVSxDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsT0FBZTtJQUN2RSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN6RCxPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRDtJQUVELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3pELE9BQU8sTUFBTSxHQUFHLE9BQU8sQ0FBQztLQUMzQjtJQUVELE9BQU8sTUFBTSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdEMsQ0FBQztBQVZELGdDQVVDO0FBU0QsU0FBZ0IsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUFlLEVBQUUsTUFBVyxFQUFFLE9BQVk7SUFBMUMsMkNBQWU7SUFBRSxvQ0FBVztJQUFFLHNDQUFZO0lBQ2pGLE9BQU8sa0JBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxHQUFXLEVBQUUsTUFBZTtJQUFmLHdDQUFlO0lBQzNELEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckIsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUNELElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7SUFDRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM5QyxPQUFPLE1BQU0sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBYkQsZ0RBYUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLE9BQWUsRUFBRSxHQUFXO0lBQ3BELElBQUksVUFBVSxHQUFRLENBQUMsQ0FBQztJQUN4QixJQUFJLE1BQU0sR0FBWSxDQUFDLENBQUM7SUFDeEIsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFNLFNBQVMsR0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRWpDLE9BQU8sVUFBVSxLQUFLLGFBQWEsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3pELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQ3pDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQU0sT0FBTyxHQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2pDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksV0FBVyxLQUFLLE9BQU8sRUFBRTtZQUN6QixFQUFFLFVBQVUsQ0FBQztTQUNoQjtRQUNELEVBQUUsTUFBTSxDQUFDO0tBQ1o7SUFFRCxPQUFPLGFBQWEsS0FBSyxDQUFDLElBQUksU0FBUyxLQUFLLENBQUMsSUFBSSxVQUFVLEtBQUssYUFBYSxDQUFDO0FBQ2xGLENBQUM7QUFFRCxTQUFnQixhQUFhLENBQUMsT0FBZSxFQUFFLE1BQWdCLEVBQUUsV0FBbUI7SUFDaEYsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLGNBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUZELHNDQUVDOzs7Ozs7Ozs7OztBQ3pWRCxJQUFNLEtBQUssR0FBRyw0QkFBNEIsQ0FBQztBQUUzQyxTQUFnQixTQUFTLENBQXVDLElBQU87SUFDbkUsT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixZQUFZLENBQUMsZUFBbUM7SUFDNUQsSUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDckQsSUFBSSxVQUFVLENBQUMsYUFBYSxLQUFLLENBQUM7UUFDOUIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLHVCQUF1QixFQUFFO1FBQ3JFLElBQU0sU0FBUyxHQUFJLGVBQWUsQ0FBQyxlQUFpQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUYsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3BFO0lBRUQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFWRCxvQ0FVQzs7Ozs7Ozs7Ozs7QUNkRCxJQUFNLFNBQVMsR0FBc0I7SUFDakMsTUFBTSxFQUFJLFFBQVE7SUFDbEIsT0FBTyxFQUFHLE9BQU87SUFDakIsTUFBTSxFQUFJLE1BQU07SUFDaEIsS0FBSyxFQUFLLEtBQUs7SUFDZixNQUFNLEVBQUksSUFBSTtJQUNkLFFBQVEsRUFBRSxFQUFFO0lBQ1osUUFBUSxFQUFFLENBQUM7Q0FDZCxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVsRCxTQUFnQixPQUFPLENBQUMsS0FBNkI7SUFDakQsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLE9BQU8sR0FBRyxFQUFFLEVBQUU7WUFDZCxPQUFPLFVBQVUsQ0FBQztTQUNyQjtRQUNELElBQUksT0FBTyxVQUFDO1FBQ1osS0FBOEIsVUFBZSxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlLEVBQUU7WUFBcEMsOEJBQWUsRUFBZCxHQUFHLFVBQUUsUUFBUTtZQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUNkLFNBQVM7YUFDWjtZQUNELElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFVLE9BQU8sU0FBSSxHQUFHLFNBQU0sQ0FBQzthQUNsQztZQUVELE9BQVUsT0FBTyxTQUFJLEdBQUcsVUFBTyxDQUFDO1NBQ25DO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBckJELDBCQXFCQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxJQUFVLEVBQUUsT0FBZTtJQUNsRCxJQUFNLFFBQVEsR0FBRyxVQUFDLElBQVksSUFBYSxXQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFsQyxDQUFrQyxDQUFDO0lBRTlFLElBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlELElBQU0sRUFBRSxHQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFNLEVBQUUsR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEMsSUFBTSxHQUFHLEdBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsSUFBTSxFQUFFLEdBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBTSxFQUFFLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLElBQU0sRUFBRSxHQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMxQyxJQUFNLEVBQUUsR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFFMUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFDLENBQUM7UUFDNUIsUUFBUSxDQUFDLEVBQUU7WUFDUCxLQUFLLElBQUk7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7WUFDZCxLQUFLLElBQUk7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7WUFDZCxLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLENBQUM7WUFDaEIsS0FBSyxLQUFLO2dCQUNOLE9BQU8sR0FBRyxDQUFDO1lBQ2YsS0FBSyxJQUFJO2dCQUNMLE9BQU8sRUFBRSxDQUFDO1lBQ2QsS0FBSyxJQUFJO2dCQUNMLE9BQU8sRUFBRSxDQUFDO1lBQ2QsS0FBSyxJQUFJO2dCQUNMLE9BQU8sRUFBRSxDQUFDO1lBQ2QsS0FBSyxJQUFJO2dCQUNMLE9BQU8sRUFBRSxDQUFDO1lBQ2Q7Z0JBQ0ksT0FBTyxDQUFDLENBQUM7U0FDaEI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFuQ0QsZ0NBbUNDO0FBQ0QsU0FBZ0IsZUFBZTtJQUMzQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFekIsSUFBTSxTQUFTLEdBQUcsY0FBYyxXQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDO0lBRW5ELE9BQU87UUFDSCxTQUFTO1FBQ1QsT0FBTyxFQUFQO1lBQ0ksT0FBTyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBWEQsMENBV0M7QUFFRCxTQUFTLE9BQU8sQ0FBQyxJQUFVLEVBQUUsR0FBb0Q7SUFDN0UsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNQLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdkI7SUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQztJQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUI7SUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4QjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFVO0lBQ3ZDLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRTtRQUNqQixFQUFFLEVBQUUsQ0FBQztRQUNMLENBQUMsRUFBRyxDQUFDO1FBQ0wsQ0FBQyxFQUFHLENBQUM7UUFDTCxDQUFDLEVBQUcsQ0FBQztLQUNSLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCw0Q0FPQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFVO0lBQ3JDLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRTtRQUNqQixFQUFFLEVBQUUsR0FBRztRQUNQLENBQUMsRUFBRyxFQUFFO1FBQ04sQ0FBQyxFQUFHLEVBQUU7UUFDTixDQUFDLEVBQUcsRUFBRTtLQUNULENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCx3Q0FPQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEQsaURBQWtDOzs7Ozs7Ozs7OztBQ0FsQyxJQUFNLGVBQWUsR0FBUyx1SkFBdUosQ0FBQztBQUN0TCxJQUFNLHFCQUFxQixHQUFHLHFGQUFxRixDQUFDO0FBRXBILFNBQVMsTUFBTSxDQUFDLEdBQVk7SUFDeEIsT0FBTyxPQUFPLEdBQUcsQ0FBQztBQUN0QixDQUFDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEdBQVE7SUFDL0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3RDLENBQUM7QUFGRCxnQ0FFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFRO0lBQzdCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNwQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsR0FBUTtJQUM3QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDcEMsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLEdBQVE7SUFDN0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQ3BDLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxHQUFRO0lBQzlCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixPQUFPLENBQUMsR0FBUTtJQUM1QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLEdBQVE7SUFDMUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFGRCxzQkFFQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxHQUFRO0lBQzVCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRkQsMEJBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsR0FBUztJQUNqQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLENBQUM7QUFDdkMsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQVE7SUFDOUIsSUFBSTtRQUNBLE9BQU8sR0FBRyxZQUFZLFdBQVcsQ0FBQztLQUNyQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUNsQixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNuQixRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ25DO0FBQ0wsQ0FBQztBQVRELDhCQVNDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEtBQVU7SUFDOUIsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDdkMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxRDtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0lBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTtRQUM5QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUMxQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFqQkQsMEJBaUJDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsR0FBVztJQUMxQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ04sT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxPQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBTkQsZ0RBTUM7QUFFRCxTQUFnQixZQUFZLENBQUMsS0FBYTtJQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQU5ELG9DQU1DOzs7Ozs7O1VDdkZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZzQzLWxpYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRzQzTGliXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkc0M0xpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgKiBmcm9tIFwiLi9lbnVtc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnL2d0b29scy1jb25maWcuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kZWNvcmF0b3JzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9jYW52YXMtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9kb20tZ2V0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS90eXBlcy9jYW52YXMtc2hhZG93LWNvbmZpZ1wiO1xyXG5cclxuLy8gVE9ETyBub3Qgd29yayBvbiBiYWNrZW5kXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2RvbS9lbGVtZW50LWJ1aWxkZXJcIjtcclxuXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9lcnJvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZhbGlkYXRvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2NcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9waHlzaWNzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5tYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvcGFnaW5hdGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzXCI7XHJcbiIsImltcG9ydCB7IEZpbGVUeXBlcyB9IGZyb20gXCIuLi9lbnVtcy9maWxlLXR5cGVzLmVudW1cIjtcclxuXHJcbi8qKlxyXG4gKiAgRmlsZU1hbmFnZXIgaXMgY2xhc3MgdXNlZCBmb3Igb3BlbiBhbmQgc2F2ZSBmaWxlc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciB1cGxvYWQgZmlsZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIC8qKlxyXG4gICAgICogcHJpdmF0ZSBpbnB1dCB1c2VkIGZvciBvcGVuaW5nIHN5c3RlbSB3aW5kb3cgZm9yIGRvd25sb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGluazogSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcclxuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZmlsZXNcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIHRleHQgY29udGVudCBpbnRvIGZpbGUgd2l0aCBzcGVjaWZpYyBleHRlbnNpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgZmlsZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBmaWxlIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSB0eXBlIGZpbGUge0BsaW5rIEZpbGVUeXBlc30uIERlZmF1bHQgdmFsdWUgaXMge0BsaW5rIEZpbGVUeXBlcy5UWFR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlRmlsZShuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgdHlwZTogRmlsZVR5cGVzID0gRmlsZVR5cGVzLlRYVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3RleHRdLCB7dHlwZX0pKTtcclxuICAgICAgICB0aGlzLmxpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluay5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSBpbWFnZSBpbnRvIGZpbGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBpbWFnZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW1hZ2UgaW1hZ2UgZWxlbWVudCBvciBwYXRoIHRvIGltYWdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlSW1hZ2UobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nIHwgSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGltYWdlIDogaW1hZ2Uuc3JjO1xyXG4gICAgICAgIHRoaXMubGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5rLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2UoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlTmFtZTogc3RyaW5nKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgICAgICAgICAgICAgID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkICAgICAgICAgICAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjICAgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIGZ1bmMoaW1hZ2UsIGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBmaWxlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmdW5jIGxvYWRpbmcgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZXM6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSAoZS50YXJnZXQgYXMgYW55KS5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiBmdW5jKHJlYWRlci5yZXN1bHQsIGZpbGVzKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBiaW5hcnkgZmlsZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQmluYXJ5RmlsZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gZnVuYyhyZWFkZXIucmVzdWx0LCBmaWxlc1swXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdNYXA8VCwgUz4gZXh0ZW5kcyBNYXA8VCwgUz4ge1xyXG4gICAgcHVibGljIGdldChrZXk6IFQsIGRlZmF1bHRWYWx1ZT86IFMpOiBTIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSkgfHwgZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPckNyZWF0ZShrZXk6IFQsIGRlZmF1bHRWYWx1ZTogUyk6IFMgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZy1tYXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4va2V5LXZhbHVlLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbnVtYmVyLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFnaW5hdG9yXCI7XHJcbmV4cG9ydCB7IEdMb2dnZXJQcmlvcml0eSB9IGZyb20gXCIuL2xvZ2dlci9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5leHBvcnQgeyBHTG9nZ2VyRGVmYXVsdEZvcm1hdHRlciB9IGZyb20gXCIuL2xvZ2dlci9nLWxvZ2dlci1kZWZhdWx0LWZvcm1hdHRlclwiO1xyXG5leHBvcnQgeyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIgfSBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXItY2FsbGJhY2staG9sZGVyXCI7XHJcbmV4cG9ydCB7IEdMb2dnZXJJbnN0YW5jZSB9IGZyb20gXCIuL2xvZ2dlci9nLWxvZ2dlci1pbnN0YW5jZVwiO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFNpbXBsZVdyYXBwZXIge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5VmFsdWVDb3VudGVyIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXN1bHRzOiBTaW1wbGVXcmFwcGVyW10gICAgICAgID0gW107XHJcbiAgICBwcml2YXRlIHByb2Nlc3NlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgYWRkKGl0ZW06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChpdGVtIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbV0rKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbV0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEFsbChpdGVtczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKHRoaXMuYWRkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCk6IFNpbXBsZVdyYXBwZXJbXSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRvcE4oY291bnQ6IG51bWJlcik6IFNpbXBsZVdyYXBwZXJbXSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHMuc2xpY2UoMCwgY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3MoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiB0aGlzLmRhdGFba2V5XSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzdWx0cy5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdMb2dnZXJDYWxsYmFjayB9IGZyb20gXCIuL2ctbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJEZWZhdWx0Rm9ybWF0dGVyIH0gZnJvbSBcIi4vZy1sb2dnZXItZGVmYXVsdC1mb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHsgR0xvZ2dlclByaW9yaXR5IH0gZnJvbSBcIi4vZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhbGxiYWNrczogeyBba2V5IGluIEdMb2dnZXJQcmlvcml0eV06IEdMb2dnZXJDYWxsYmFjayB9KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDb25zb2xlQ2FsbGJhY2tzKGZvcm1hdHRlciA9IG5ldyBHTG9nZ2VyRGVmYXVsdEZvcm1hdHRlcigpKTogR0xvZ2dlckNhbGxiYWNrSG9sZGVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXJDYWxsYmFja0hvbGRlcih7XHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuTE9HXSAgICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKGNvbnRleHQgPyBgJHtbY29udGV4dF19XFx0YCA6IFwiXCIsIC4uLm1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAvLyBbR0xvZ2dlclByaW9yaXR5LldBUk5dICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLndhcm4oY29udGV4dCA/IGAke1tjb250ZXh0XX1cXHRgIDogXCJcIiwgLi4ubWVzc2FnZSksXHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoY29udGV4dCA/IGAke1tjb250ZXh0XX1cXHRgIDogXCJcIiwgLi4ubWVzc2FnZSksXHJcbiAgICAgICAgICAgIC8vIFtHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTU106IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKGNvbnRleHQgPyBgJHtbY29udGV4dF19XFx0YCA6IFwiXCIsIC4uLm1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAvLyBbR0xvZ2dlclByaW9yaXR5LlZFUkJPU0VdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhjb250ZXh0ID8gYCR7W2NvbnRleHRdfVxcdGAgOiBcIlwiLCAuLi5tZXNzYWdlKSxcclxuXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuTE9HXSAgICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5MT0csIG1lc3NhZ2UsIGNvbnRleHQpKSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5XQVJOXSAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS53YXJuKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5XQVJOLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoLi4uZm9ybWF0dGVyLmZvcm1hdENvbG9yZWQoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTU106IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5TVUNDRVNTLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRV06IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5WRVJCT1NFLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVBcnJheUNhbGxiYWNrcyhhcnJheTogdW5rbm93bltdLCBvcHRpb25zOiB7IG1hcHBlcj86IChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBtZXNzYWdlczogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiB1bmtub3duIH0gPSB7fSk6IEdMb2dnZXJDYWxsYmFja0hvbGRlciB7XHJcbiAgICAgICAgY29uc3QgbWFwcGVyICAgICAgICA9IG9wdGlvbnMubWFwcGVyIHx8ICgocHJpb3JpdHksIG1lc3NhZ2VzLCBjb250ZXh0KSA9PiBbcHJpb3JpdHksIG1lc3NhZ2VzLCBjb250ZXh0XSk7XHJcbiAgICAgICAgY29uc3QgYXBwZW5kVG9BcnJheSA9IChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBtZXNzYWdlczogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobWFwcGVyKHByaW9yaXR5LCBtZXNzYWdlcywgY29udGV4dCkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR0xvZ2dlckNhbGxiYWNrSG9sZGVyKHtcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5MT0ddICAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuTE9HLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5XQVJOXSAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuV0FSTiwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvQXJyYXkoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5TVUNDRVNTXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9BcnJheShHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTUywgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRV06IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvQXJyYXkoR0xvZ2dlclByaW9yaXR5LlZFUkJPU0UsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGNyZWF0ZUZpbGVDYWxsYmFja3MoZmlsZVBhdGg6IHN0cmluZywgb3B0aW9uczogeyBlbmNvZGluZz86IFwidXRmOFwiIH0gPSB7fSk6IEdMb2dnZXJDYWxsYmFja0hvbGRlciB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVQYXRoKTtcclxuICAgIC8vICAgICBjb25zdCBlbmNvZGluZyAgICAgPSBvcHRpb25zLmVuY29kaW5nIHx8IFwidXRmOFwiO1xyXG4gICAgLy8gICAgIGNvbnN0IGFwcGVuZFRvRmlsZSA9IChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBtZXNzYWdlczogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGZzLmFwcGVuZEZpbGVTeW5jKHJlc29sdmVkUGF0aCwgYCR7cHJpb3JpdHl9YCArIChjb250ZXh0ID8gYCR7Y29udGV4dH1cXHRgIDogXCJcIikgKyBtZXNzYWdlcy5qb2luKFwiIFwiKSwge2VuY29kaW5nfSk7XHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIoe1xyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LkxPR10gICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LkxPRywgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAvLyAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuV0FSTl0gICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvRmlsZShHTG9nZ2VyUHJpb3JpdHkuV0FSTiwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAvLyAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuRVJST1JdICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvRmlsZShHTG9nZ2VyUHJpb3JpdHkuRVJST1IsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1NdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1MsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlZFUkJPU0VdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LlZFUkJPU0UsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYWxsYmFjayhwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBjYWxsYmFjazogR0xvZ2dlckNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3NbcHJpb3JpdHldID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChob2xkZXI6IEdMb2dnZXJDYWxsYmFja0hvbGRlcik6IHZvaWQge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoR0xvZ2dlclByaW9yaXR5KS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldENhbGxiYWNrKHByaW9yaXR5LCBob2xkZXIuZ2V0Q2FsbGJhY2socHJpb3JpdHkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FsbGJhY2socHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSk6IEdMb2dnZXJDYWxsYmFjayB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzW3ByaW9yaXR5XTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkYXRlQWdvLCByYW5kb21JdGVtIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJGb3JtYXR0ZXIgfSBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdMb2dnZXJEZWZhdWx0Rm9ybWF0dGVyIGltcGxlbWVudHMgR0xvZ2dlckZvcm1hdHRlciB7XHJcbiAgICBwdWJsaWMgc2hvd1ByaW9yaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93Q29udGV4dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2hvd1RpbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93VGltZU9mZnNldCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgcHVibGljIHVzZURpZmZlcmVudENvbG9yc0ZvckNvbnRleHRzICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdHJ1ZTtcclxuICAgIHB1YmxpYyByZWFkb25seSBjb2xvcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gICAgICAgICAgICAgICA9IHt9O1xyXG4gICAgcHJpdmF0ZSBsYXN0Rm9ybWF0VGltZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gRGF0ZS5ub3coKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dENvbG9yTWFwOiB7IFtjb250ZXh0OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBmb3JtYXRDb2xvcmVkKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIGRhdGE6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW3RoaXMuZ2V0T3V0cHV0QXJyYXkocHJpb3JpdHksIGRhdGEsIGNvbnRleHQpLmpvaW4oXCIgXCIpXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1ByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy5wcmlvcml0eSB8fCBcImJsdWVcIn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0NvbnRleHQgJiYgY29udGV4dCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgY29sb3I6ICR7dGhpcy5nZXRDb2xvckZvckNvbnRleHQoY29udGV4dCwgdGhpcy5jb2xvcnMuY29udGV4dCB8fCBcInJlZFwiKX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy50aW1lIHx8IFwiZ3JlZW5cIn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1RpbWVPZmZzZXQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYGNvbG9yOiAke3RoaXMuY29sb3JzLnRpbWVPZmZzZXQgfHwgXCJncmVlblwifWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0LnB1c2goYGNvbG9yOiAke3RoaXMuY29sb3JzLnRleHRDb2xvciB8fCBcImJsYWNrXCJ9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBkYXRhOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE91dHB1dEFycmF5KHByaW9yaXR5LCBkYXRhLCBjb250ZXh0KS5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbG9yRm9yQ29udGV4dChjb250ZXh0OiBzdHJpbmcsIGRlZmF1bHRDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlRGlmZmVyZW50Q29sb3JzRm9yQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0IGluIHRoaXMuY29udGV4dENvbG9yTWFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRDb2xvck1hcFtjb250ZXh0XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbG9yID0gKCk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgICBgIyR7bmV3IEFycmF5KDYpLmZpbGwoXCJcIikubWFwKCgpID0+IHJhbmRvbUl0ZW0oXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiKSkuam9pbihcIlwiKX1gXHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Q29sb3JNYXBbY29udGV4dF0gPSBjcmVhdGVDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3V0cHV0QXJyYXkocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRpYWxzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93UHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgcGFydGlhbHMucHVzaChgWyR7cHJpb3JpdHl9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93Q29udGV4dCAmJiBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxzLnB1c2goY29udGV4dCArIFwiOlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxzLnB1c2goYFske25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX1dYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZU9mZnNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBwYXJ0aWFscy5wdXNoKGAke2RhdGVBZ28obm93IC0gdGhpcy5sYXN0Rm9ybWF0VGltZSl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZvcm1hdFRpbWUgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnRpYWxzLnB1c2goLi4uZGF0YS5tYXAoU3RyaW5nKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJ0aWFscztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHTG9nZ2VyLCBHTG9nZ2VyQ2FsbGJhY2ssIEdMb2dnZXJDb250ZXh0VHlwZSB9IGZyb20gXCIuL2ctbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJDYWxsYmFja0hvbGRlciB9IGZyb20gXCIuL2ctbG9nZ2VyLWNhbGxiYWNrLWhvbGRlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdMb2dnZXJJbnN0YW5jZSB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXJDYWxsYmFja3M/OiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGxvY2FsUHJpbnQodHlwZTogR0xvZ2dlclByaW9yaXR5LCBkYXRhOiB1bmtub3duW10sIGNhbGxiYWNrczogR0xvZ2dlckNhbGxiYWNrSG9sZGVyLCBjb250ZXh0Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY2FsbGJhY2tzLmdldENhbGxiYWNrKHR5cGUpKGRhdGEsIGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMb2dDYWxsYmFjayhwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBjYWxsYmFjazogR0xvZ2dlckNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXJDYWxsYmFja3M/LnNldENhbGxiYWNrKHByaW9yaXR5LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0TG9nQ2FsbGJhY2tzKGNhbGxiYWNrSG9sZGVyOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ2dlckNhbGxiYWNrcz8uc2V0KGNhbGxiYWNrSG9sZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKC4uLm1lc3NhZ2VzOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KEdMb2dnZXJQcmlvcml0eS5MT0csIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3YXJuKC4uLm1lc3NhZ2VzOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KEdMb2dnZXJQcmlvcml0eS5XQVJOLCB0aGlzLmNvbnRleHQsIC4uLm1lc3NhZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3IoLi4ubWVzc2FnZXM6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCB0aGlzLmNvbnRleHQsIC4uLm1lc3NhZ2VzKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBHTG9nZ2VyUHJpb3JpdHkge1xyXG4gICAgTE9HICAgICA9IFwiTE9HXCIsXHJcbiAgICBXQVJOICAgID0gXCJXQVJOXCIsXHJcbiAgICBFUlJPUiAgID0gXCJFUlJPUlwiLFxyXG4gICAgVkVSQk9TRSA9IFwiVkVSQk9TRVwiLFxyXG4gICAgU1VDQ0VTUyA9IFwiU1VDQ0VTU1wiXHJcbn1cclxuIiwiaW1wb3J0IHsgR0xvZ2dlckNhbGxiYWNrSG9sZGVyIH0gZnJvbSBcIi4vZy1sb2dnZXItY2FsbGJhY2staG9sZGVyXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJJbnN0YW5jZSB9IGZyb20gXCIuL2ctbG9nZ2VyLWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJQcmlvcml0eSB9IGZyb20gXCIuL2ctbG9nZ2VyLXByaW9yaXR5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBHTG9nZ2VyQ29udGV4dFR5cGUgPSBzdHJpbmcgfCB7IGNvbnN0cnVjdG9yPzogeyBuYW1lOiBzdHJpbmcgfSwgbmFtZT86IHN0cmluZyB9O1xyXG5leHBvcnQgdHlwZSBHTG9nZ2VyQ2FsbGJhY2sgPSAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHTG9nZ2VyRm9ybWF0dGVyIHtcclxuICAgIGZvcm1hdChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBkYXRhOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyIGV4dGVuZHMgR0xvZ2dlckluc3RhbmNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHN0YXRpY0NhbGxiYWNrcyA9IEdMb2dnZXJDYWxsYmFja0hvbGRlci5jcmVhdGVDb25zb2xlQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDYWxsYmFja3MoY2FsbGJhY2tIb2xkZXI6IEdMb2dnZXJDYWxsYmFja0hvbGRlcik6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIuc3RhdGljQ2FsbGJhY2tzLnNldChjYWxsYmFja0hvbGRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMaW5lKHN0ZXBzID0gMik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKTtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhY2spIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpW3N0ZXBzXS50cmltKCkubWF0Y2goL1xcKC4qXFwpLyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImF0IFwiICsgcmVzdWx0c1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDbGFzc0xvZ2dlcihjb250ZXh0OiBhbnksIHBhcmVudD86IEdMb2dnZXIpOiBHTG9nZ2VyIHtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5leHRlbmRzKGNvbnRleHQ/Lm5hbWUgfHwgY29udGV4dD8uY29uc3RydWN0b3I/Lm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyKGNvbnRleHQ/LmNvbnN0cnVjdG9yPy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBza2lwQ29udGV4dHMgPSBbXCJyZW5kZXJXb3JsZFN0YXRpY1wiLCBcIkNhbnZhc0RpcmVjdGl2ZVwiLCBcIldvcmxkUmVuZGVyZXJTZXJ2aWNlXCIsIFwidmlld3BvcnRcIiwgXCJXb3JsZElucHV0U2VydmljZVwiXTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNraXBSZWdleHAgICA9IG5ldyBSZWdFeHAoYCR7R0xvZ2dlci5za2lwQ29udGV4dHMuam9pbihcInxcIil9YCwgXCJnaVwiKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUFycmF5TG9nZ2VyKGFycmF5OiB1bmtub3duW10sIGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUsIG1hcHBlcj86IChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBtZXNzYWdlczogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiB1bmtub3duKTogR0xvZ2dlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyKGNvbnRleHQsIEdMb2dnZXJDYWxsYmFja0hvbGRlci5jcmVhdGVBcnJheUNhbGxiYWNrcyhhcnJheSwge21hcHBlcn0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGNyZWF0ZUZpbGVMb2dnZXIoZmlsZTogc3RyaW5nLCBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlLCBlbmNvZGluZzogXCJ1dGY4XCIgPSBcInV0ZjhcIik6IEdMb2dnZXIge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgR0xvZ2dlcihjb250ZXh0LCBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIuY3JlYXRlRmlsZUNhbGxiYWNrcyhmaWxlLCB7ZW5jb2Rpbmd9KSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmludCh0eXBlOiBHTG9nZ2VyUHJpb3JpdHksIGNvbnRleHQ6IEdMb2dnZXJDb250ZXh0VHlwZSA9IFwiXCIsIC4uLmRhdGE6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlYWxDb250ZXh0OiBzdHJpbmcgPSBHTG9nZ2VyLmdldENvbnRleHRTdHJpbmcoY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ICAgICAgICAgICAgICA9IHJlYWxDb250ZXh0ICYmIHJlYWxDb250ZXh0Lm1hdGNoKEdMb2dnZXIuc2tpcFJlZ2V4cCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdMb2dnZXJJbnN0YW5jZS5sb2NhbFByaW50KHR5cGUsIGRhdGEsIEdMb2dnZXIuc3RhdGljQ2FsbGJhY2tzLCByZWFsQ29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2cobWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW10sIGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUpOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KEdMb2dnZXJQcmlvcml0eS5MT0csIGNvbnRleHQsIC4uLihBcnJheS5pc0FycmF5KG1lc3NhZ2UpID8gbWVzc2FnZSA6IFttZXNzYWdlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXJyb3IobWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW10sIGNvbnRleHQ/OiBHTG9nZ2VyQ29udGV4dFR5cGUpOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KEdMb2dnZXJQcmlvcml0eS5FUlJPUiwgY29udGV4dCwgLi4uKEFycmF5LmlzQXJyYXkobWVzc2FnZSkgPyBtZXNzYWdlIDogW21lc3NhZ2VdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB3YXJuKG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLCBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuV0FSTiwgY29udGV4dCwgLi4uKEFycmF5LmlzQXJyYXkobWVzc2FnZSkgPyBtZXNzYWdlIDogW21lc3NhZ2VdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q29udGV4dFN0cmluZyhjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQ/LmNvbnN0cnVjdG9yPy5uYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQ/Lm5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHRlbmRzKHN1YkNvbnRleHQ6IHN0cmluZyk6IEdMb2dnZXIge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0gR0xvZ2dlci5nZXRDb250ZXh0U3RyaW5nKHRoaXMuY29udGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR0xvZ2dlcihjdXJyZW50Q29udGV4dCA/IGAke2N1cnJlbnRDb250ZXh0fToke3N1YkNvbnRleHR9YCA6IHN1YkNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBOdW1iZXJDb3VudGVyIHtcclxuICAgIHByaXZhdGUgbWluICAgICAgICAgICAgICAgICAgICAgICAgPSBJbmZpbml0eTtcclxuICAgIHByaXZhdGUgbWF4ICAgICAgICAgICAgICAgICAgICAgICAgPSAtSW5maW5pdHk7XHJcbiAgICBwcml2YXRlIHN1bSAgICAgICAgICAgICAgICAgICAgICAgID0gMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnVtYmVyczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgYWRkKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm51bWJlcnMucHVzaCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWluID0gTWF0aC5taW4odGhpcy5taW4sIHZhbHVlKTtcclxuICAgICAgICB0aGlzLm1heCA9IE1hdGgubWF4KHRoaXMubWF4LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zdW0gKz0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdmVyYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtIC8gdGhpcy5udW1iZXJzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQWxsKGl0ZW1zOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2godGhpcy5hZGQsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdUb29sc0NvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvcjxUID0gdW5rbm93bj4ge1xyXG4gICAgcHJpdmF0ZSBhY3RMaXN0OiBUW107XHJcbiAgICBwcml2YXRlIGFjdHVhbFBhZ2UgPSAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXN0UGFnZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFsbEl0ZW1zOiBUW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBpdGVtc1BlclBhZ2UgPSBHVG9vbHNDb25maWcuUEFHRV9MSU1JVCkge1xyXG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSBhbGxJdGVtcyA/IE1hdGguZmxvb3IoYWxsSXRlbXMubGVuZ3RoIC8gdGhpcy5pdGVtc1BlclBhZ2UpIDogMDtcclxuICAgICAgICB0aGlzLmFjdExpc3QgID0gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBY3R1YWxQYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0dWFsUGFnZSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdFBhZ2UgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYWdlc0Fyb3VuZCgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA8IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsxLCAyLCAzLCA0LCA1XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA+IHRoaXMubGFzdFBhZ2UgLSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMyxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSArIDEsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgLSAxLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSArIDEsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSArIDIsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSArIDMsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGlzdCgpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9OZXh0KCk6IFRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA8IHRoaXMubGFzdFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlKys7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb3RUbyhwYWdlOiBudW1iZXIpOiBUW10ge1xyXG4gICAgICAgIGlmIChwYWdlID49IDAgJiYgcGFnZSA8PSB0aGlzLmxhc3RQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IHBhZ2U7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvUHJldigpOiBUW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZS0tO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub0ZpcnN0KCk6IFRbXSB7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub0xhc3QoKTogVFtdIHtcclxuICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSB0aGlzLmxhc3RQYWdlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlQ2FsY0xpc3QoKTogVFtdIHtcclxuICAgICAgICBjb25zdCBzdGFydCAgPSB0aGlzLmFjdHVhbFBhZ2UgKiB0aGlzLml0ZW1zUGVyUGFnZTtcclxuICAgICAgICB0aGlzLmFjdExpc3QgPSB0aGlzLmFsbEl0ZW1zID8gdGhpcy5hbGxJdGVtcy5zbGljZShzdGFydCwgc3RhcnQgKyB0aGlzLml0ZW1zUGVyUGFnZSkgOiBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0TGlzdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHVG9vbHNDb25maWdJbnRlcmZhY2UgfSBmcm9tIFwiLi9ndG9vbHMtY29uZmlnLmludGVyZmFjZVwiO1xyXG5cclxubGV0IGNvbmZpZzogR1Rvb2xzQ29uZmlnSW50ZXJmYWNlO1xyXG5cclxuY29uc3QgY2hlY2tDb25maWcgPSAoKTogR1Rvb2xzQ29uZmlnSW50ZXJmYWNlID0+IHtcclxuICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgVVJMX0FQSSAgIDogXCJcIixcclxuICAgICAgICAgICAgTEFOR1VBR0UgIDogXCJcIixcclxuICAgICAgICAgICAgVkVSU0lPTiAgIDogXCJcIixcclxuICAgICAgICAgICAgUEFHRV9MSU1JVDogMCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbn07XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogY2xhc3MgQ2xhc3NPd25Db25maWcgZXh0ZW5kcyBDbGFzc0dUb29sc0NvbmZpZyBpbXBsZW1lbnRzIE93bkNvbmZpZ0ludGVyZmFjZSB7XHJcbiAqICAgICBwdWJsaWMgbmFtZSA9IFwiXCI7XHJcbiAqIH1cclxuICpcclxuICogZXhwb3J0IGNvbnN0IE93bkNvbmZpZyA9IG5ldyBDbGFzc093bkNvbmZpZygpO1xyXG4gKlxyXG4gKiBAc2VlIEdUb29sc0NvbmZpZ0ludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsYXNzR1Rvb2xzQ29uZmlnIGltcGxlbWVudHMgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlIHtcclxuICAgIHB1YmxpYyBnZXQgVVJMX0FQSSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLlVSTF9BUEk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBQQUdFX0xJTUlUKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuUEFHRV9MSU1JVDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IExBTkdVQUdFKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuTEFOR1VBR0U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBWRVJTSU9OKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuVkVSU0lPTjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29uZmlnKGFwcENvbmZpZzogR1Rvb2xzQ29uZmlnSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25maWcgPSBhcHBDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHVG9vbHNDb25maWcgPSBuZXcgQ2xhc3NHVG9vbHNDb25maWcoKTtcclxuIiwiZXhwb3J0IGNvbnN0IEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTID0gdHJ1ZTtcclxuXHJcbiIsImltcG9ydCB7IFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlcHJlY2F0ZWQodmFsdWU/OiBzdHJpbmcpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBhbnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9sZE1ldGhvZCAgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSAoLi4uYXJnczogYW55W10pOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNZXRob2QgXCIgKyB0YXJnZXQuY29uc3RydWN0b3IubmFtZSArIFwiLlwiICsgcHJvcGVydHlLZXkgKyBcIiBpcyBkZXByZWNhdGVkLiBcIiArICh2YWx1ZSB8fCBcIlwiKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkTWV0aG9kLmFwcGx5KHRhcmdldCwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEZpbmFsQ2xhc3M8VCBleHRlbmRzIG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KHRhcmdldDogVCk6IFQge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpbmFsIGV4dGVuZHMgdGFyZ2V0IHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgaWYgKG5ldy50YXJnZXQgIT09IEZpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5oZXJpdCBmcm9tIGZpbmFsIGNsYXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZGVwcmVjYXRlZC5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmluYWwtY2xhc3MuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hcHBlci5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2luZ2xldG9uLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93YXRjaC5kZWNvcmF0b3JcIjtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIE1hcHBlcihwYXJhbXM6IHsgb25HZXQ/OiAob2xkVmFsdWU6IGFueSkgPT4gYW55LCBvblNldD86IChvbGRWYWx1ZTogYW55KSA9PiBhbnkgfSA9IHt9LCBwcmVmaXggPSBcIl9cIik6IGFueSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKCFkZWxldGUgdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3TmFtZSAgICAgICAgICAgICAgICAgICAgICAgID0gcHJlZml4ICsga2V5O1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMub25HZXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSAoKSA9PiBwYXJhbXMub25HZXQgJiYgcGFyYW1zLm9uR2V0KHRhcmdldFtuZXdOYW1lXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9ICgpID0+IHRhcmdldFtuZXdOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMub25TZXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQgPSAobmV3VmFsOiBhbnkpID0+IHRhcmdldFtuZXdOYW1lXSA9IHBhcmFtcy5vblNldCAmJiBwYXJhbXMub25TZXQobmV3VmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKHZhbHVlKSA9PiB0YXJnZXRbbmV3TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xyXG4gICAgfTtcclxufVxyXG4iLCJjb25zdCBpbnN0YW5jZXM6IHsgW2NsYXNzTmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaW5nbGV0b248VCBleHRlbmRzIG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gYW55Pihjb25zdHJ1Y3RvcjogVCk6IGFueSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZXNbY2xhc3NOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2Ugb2YgXCIgKyBjbGFzc05hbWUgKyBcIiBpcyBhbHJlYWR5IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5zdGFuY2VzW2NsYXNzTmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XHJcbiAgICBlbnVtZXJhYmxlPzogYm9vbGVhbjtcclxuICAgIGNvbmZpZ3VyYWJsZT86IGJvb2xlYW47XHJcbiAgICBwcmVmaXg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBXYXRjaChvblNldD86IChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSA9PiBhbnksIG9wdGlvbnM/OiBXYXRjaE9wdGlvbnMpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICBjb25zdCBwcmVmaXggPSBvcHRpb25zICYmIG9wdGlvbnMucHJlZml4IHx8IFwiX1wiO1xyXG5cclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gKG5ld1ZhbDogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvblNldCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3ByZWZpeCArIGtleV0gPSBvblNldChuZXdWYWwsIHRhcmdldFtwcmVmaXggKyBrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJlZml4ICsga2V5XSA9IG5ld1ZhbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWRlbGV0ZSB0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRhcmdldFtwcmVmaXggKyBrZXldLFxyXG4gICAgICAgICAgICBzZXQgICAgICAgICA6IHNldHRlcixcclxuICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmVudW1lcmFibGUgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5lbnVtZXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmNvbmZpZ3VyYWJsZSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLmNvbmZpZ3VyYWJsZSA6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5vdEJyb3dzZXJFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXJyb3JzXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJndG9vbHMvbW9kZWxzXCI7XHJcblxyXG5jbGFzcyBBYnN0cmFjdENhbnZhc01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2NhbENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXJnMTogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50LCBhcmcyOiBudW1iZXIsIGFyZzM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmcxIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IGFyZzE7XHJcbiAgICAgICAgICAgIGlmIChhcmcyICYmIGFyZzMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzU2l6ZShhcmcyLCBhcmczKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJnMSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IENhbnZhc01hbmFnZXIuaW1hZ2VUb0NhbnZhcyhhcmcxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZzEgJiYgYXJnMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzEsIGFyZzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYWxDb250ZXh0ID0gdGhpcy5sb2NhbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm06IFRyYW5zZm9ybSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtUmF3KHRyYW5zZm9ybS5vZmZzZXQueCwgdHJhbnNmb3JtLm9mZnNldC55LCB0cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm1SYXcodHJhbnNsYXRpb25YOiBudW1iZXIsIHRyYW5zbGF0aW9uWTogbnVtYmVyLCBzY2FsZVg6IG51bWJlciwgc2NhbGVZID0gc2NhbGVYKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIENhbnZhc01hbmFnZXIuc2V0VHJhbnNmb3JtUmF3KHRoaXMubG9jYWxDb250ZXh0LCB0cmFuc2xhdGlvblgsIHRyYW5zbGF0aW9uWSwgc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIENhbnZhc01hbmFnZXIuY2FudmFzVG9JbWFnZSh0aGlzLmxvY2FsQ2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2hhZG93KHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBibHVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRTaGFkb3codGhpcy5sb2NhbENvbnRleHQsIHgsIHksIGNvbG9yLCBibHVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMubG9jYWxDYW52YXMudG9EYXRhVVJMKGZvcm1hdCksIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckNhbnZhcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgQ2FudmFzTWFuYWdlci5jbGVhckNhbnZhcyh0aGlzLmxvY2FsQ29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYW52YXNTaXplKHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0Q2FudmFzU2l6ZSh0aGlzLmxvY2FsQ2FudmFzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kVG8oZWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sb2NhbENhbnZhcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTWFuYWdlciBleHRlbmRzIEFic3RyYWN0Q2FudmFzTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQ2FudmFzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDYW52YXNTaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2hhZG93KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmx1cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yICAgPSBjb2xvcjtcclxuICAgICAgICBjdHguc2hhZG93Qmx1ciAgICA9IGJsdXI7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSB4O1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGltYWdlVG9DYW52YXMoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYW52YXMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICBjb25zdCBjdHggICAgID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldExpbmVEYXNoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCAuLi5hcmdzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY3R4LnNldExpbmVEYXNoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY3R4LnNldExpbmVEYXNoKGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGNUZXh0V2lkdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZhbHVlOiBzdHJpbmcsIGZvbnQ/OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChmb250KSB7XHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gZm9udDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQodmFsdWUpLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VHJhbnNmb3JtUmF3KFxyXG4gICAgICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIHRyYW5zbGF0aW9uWDogbnVtYmVyLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uWTogbnVtYmVyLFxyXG4gICAgICAgIHNjYWxlWDogbnVtYmVyLFxyXG4gICAgICAgIHNjYWxlWSA9IHNjYWxlWCxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oc2NhbGVYLCAwLCAwLCBzY2FsZVksIHRyYW5zbGF0aW9uWCwgdHJhbnNsYXRpb25ZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbnZhc1RvSW1hZ2UoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlICA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyAgICA9IGNhbnZhcy50b0RhdGFVUkwoZm9ybWF0KTtcclxuICAgICAgICBpbWFnZS53aWR0aCAgPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJmIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcbmltcG9ydCB7IENhbnZhc01hbmFnZXIgfSBmcm9tIFwiLi9jYW52YXMtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDYW52YXNTaGFkb3dDb25maWcgfSBmcm9tIFwiLi90eXBlcy9jYW52YXMtc2hhZG93LWNvbmZpZ1wiO1xyXG5cclxuZGVjbGFyZSBjb25zdCAkOiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbnZhc0NvbmZpZyB7XHJcbiAgICBzaGFkb3c/OiBDYW52YXNTaGFkb3dDb25maWc7XHJcbiAgICBwb3NpdGlvbj86IG51bWJlciB8IFZlY3RvcjJmO1xyXG4gICAgY2VudGVyPzogYm9vbGVhbjtcclxuICAgIHNpemU/OiBudW1iZXIgfCBWZWN0b3IyZjtcclxuICAgIGJnSW1hZ2U/OiB7XHJcbiAgICAgICAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdzogbnVtYmVyO1xyXG4gICAgICAgIGg6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBmaWxsOiBib29sZWFuO1xyXG4gICAgZmlsbENvbG9yOiBzdHJpbmc7XHJcbiAgICBkcmF3OiBib29sZWFuO1xyXG4gICAgYm9yZGVyV2lkdGg6IG51bWJlcjtcclxuICAgIHJhZGl1czogbnVtYmVyIHwge1xyXG4gICAgICAgIHRsOiBudW1iZXI7XHJcbiAgICAgICAgdHI6IG51bWJlcjtcclxuICAgICAgICBicjogbnVtYmVyO1xyXG4gICAgICAgIGJsOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgbGluZUNhcDogXCJidXR0XCIgfCBcInJvdW5kXCIgfCBcInNxdWFyZVwiO1xyXG4gICAgam9pblR5cGU6IFwiYmV2ZWxcIiB8IFwicm91bmRcIiB8IFwibWl0ZXJcIjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHN0YXJ0QW5nbGU6IG51bWJlcjtcclxuICAgIGVuZEFuZ2xlOiBudW1iZXI7XHJcbiAgICBvZmZzZXQ6IGFueTtcclxuICAgIGxpbmVEYXNoOiBudW1iZXJbXTtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2hhZG93KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29uZmlnPzogQ2FudmFzU2hhZG93Q29uZmlnKTogdm9pZCB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRTaGFkb3coY29udGV4dCwgY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcuY29sb3IsIGNvbmZpZy5ibHVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRTaGFkb3coY29udGV4dCwgMCwgMCwgXCJibGFja1wiLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2VzcyhyZXM6IENhbnZhc0NvbmZpZyk6IHZvaWQge1xyXG4gICAgaWYgKHJlcy5zaGFkb3cpIHtcclxuICAgICAgICBzZXRTaGFkb3cocmVzLmN0eCwgcmVzLnNoYWRvdyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzLmJnSW1hZ2UpIHtcclxuICAgICAgICByZXMuY3R4LnNhdmUoKTtcclxuICAgICAgICByZXMuY3R4LmNsaXAoKTtcclxuICAgICAgICBpZiAocmVzLmJnSW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHguZHJhd0ltYWdlKHJlcy5iZ0ltYWdlLCByZXMueCwgcmVzLnksIHJlcy53aWR0aCwgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5kcmF3SW1hZ2UocmVzLmJnSW1hZ2UuaW1nLFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UueCxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLnksXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS53LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UuaCxcclxuICAgICAgICAgICAgICAgIHJlcy54LFxyXG4gICAgICAgICAgICAgICAgcmVzLnksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICByZXMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHJlcy5maWxsKSB7XHJcbiAgICAgICAgcmVzLmN0eC5maWxsU3R5bGUgPSByZXMuZmlsbENvbG9yO1xyXG4gICAgICAgIHJlcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMuc2hhZG93KSB7XHJcbiAgICAgICAgc2V0U2hhZG93KHJlcy5jdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5jdHgubGluZUNhcCAgPSByZXMubGluZUNhcDtcclxuICAgIHJlcy5jdHgubGluZUpvaW4gPSByZXMuam9pblR5cGU7XHJcbiAgICBpZiAodHlwZW9mIHJlcy5jdHguc2V0TGluZURhc2ggPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJlcy5jdHguc2V0TGluZURhc2gocmVzLmxpbmVEYXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlcy5kcmF3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVzLmN0eC5saW5lV2lkdGggICA9IHJlcy5ib3JkZXJXaWR0aDtcclxuICAgIHJlcy5jdHguc3Ryb2tlU3R5bGUgPSByZXMuYm9yZGVyQ29sb3I7XHJcbiAgICByZXMuY3R4LnN0cm9rZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGVmKG9iajogYW55KTogQ2FudmFzQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICBjZW50ZXIgICAgIDogZmFsc2UsXHJcbiAgICAgICAgY3R4ICAgICAgICA6IG9iai5jdHgsXHJcbiAgICAgICAgZHJhdyAgICAgICA6IHR5cGVvZiBvYmouYm9yZGVyQ29sb3IgIT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai5ib3JkZXJXaWR0aCAhPT0gXCJ1bmRlZmluZWRcIixcclxuICAgICAgICBlbmRBbmdsZSAgIDogTWF0aC5QSSAqIDIsXHJcbiAgICAgICAgZmlsbCAgICAgICA6IHR5cGVvZiBvYmouZmlsbENvbG9yICE9PSBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIGZpbGxDb2xvciAgOiBcIndoaXRlXCIsXHJcbiAgICAgICAgaGVpZ2h0ICAgICA6IDAsXHJcbiAgICAgICAgam9pblR5cGUgICA6IFwiYmV2ZWxcIixcclxuICAgICAgICBsaW5lQ2FwICAgIDogXCJyb3VuZFwiLFxyXG4gICAgICAgIGxpbmVEYXNoICAgOiBbXSxcclxuICAgICAgICBvZmZzZXQgICAgIDogbnVsbCxcclxuICAgICAgICByYWRpdXMgICAgIDoge1xyXG4gICAgICAgICAgICB0bDogMCxcclxuICAgICAgICAgICAgdHI6IDAsXHJcbiAgICAgICAgICAgIGJyOiAwLFxyXG4gICAgICAgICAgICBibDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0QW5nbGUgOiAwLFxyXG4gICAgICAgIHdpZHRoICAgICAgOiAwLFxyXG4gICAgICAgIHggICAgICAgICAgOiAwLFxyXG4gICAgICAgIHkgICAgICAgICAgOiAwLFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtYWtlUG9zQW5kU2l6ZShkZWY6IENhbnZhc0NvbmZpZywgb2JqOiBhbnkpOiBDYW52YXNDb25maWcge1xyXG4gICAgY29uc3QgcmVzOiBDYW52YXNDb25maWcgPSAkLmV4dGVuZChkZWYsIG9iaikgYXMgQ2FudmFzQ29uZmlnO1xyXG4gICAgY29uc3QgY2hlY2tBdHRyaWJ1dGUgICAgPSAoYXR0ck5hbWU6IGtleW9mIENhbnZhc0NvbmZpZywgcGFydEE6IGtleW9mIENhbnZhc0NvbmZpZywgcGFydEI6IGtleW9mIENhbnZhc0NvbmZpZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzW2F0dHJOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVzW2F0dHJOYW1lXTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWVbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEFdID0gdmFsdWUgYXMgVmVjdG9yMmYueDtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWUgYXMgVmVjdG9yMmYueTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXR0cmlidXRlKFwic2l6ZVwiLCBcIndpZHRoXCIsIFwic2l6ZVwiKTtcclxuICAgIGNoZWNrQXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJ4XCIsIFwieVwiKTtcclxuXHJcbiAgICBpZiAocmVzLmNlbnRlcikge1xyXG4gICAgICAgIHJlcy54IC09IHJlcy53aWR0aCA+PiAxO1xyXG4gICAgICAgIHJlcy55IC09IHJlcy5oZWlnaHQgPj4gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Bvc0FuZFNpemUob2JqOiBDYW52YXNDb25maWcsIG5hbWU6IHN0cmluZyk6IENhbnZhc0NvbmZpZyB7XHJcblxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqLnggPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai55ID09PSBcInVuZGVmaW5lZFwiKSAmJiB0eXBlb2Ygb2JqLnBvc2l0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1BPU0lUSU9OOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodHlwZW9mIG9iai53aWR0aCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLmhlaWdodCA9PT0gXCJ1bmRlZmluZWRcIikgJiYgdHlwZW9mIG9iai5zaXplID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1NJWkU6IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai53aWR0aCA8PSAwIHx8IG9iai5oZWlnaHQgPD0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSF9ORUdfUE9TSVRJT046IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluaXREZWYob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1V0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZG9BcmMob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZXMgPSByZW1ha2VQb3NBbmRTaXplKGNoZWNrUG9zQW5kU2l6ZShvYmosIFwiQXJjXCIpLCBvYmopO1xyXG5cclxuICAgICAgICByZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzLmN0eC5lbGxpcHNlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5lbGxpcHNlKHJlcy54ICsgKHJlcy53aWR0aCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy55ICsgKHJlcy5oZWlnaHQgPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGggPj4gMSxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQgPj4gMSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgICAgIHJlcy5lbmRBbmdsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5yZWN0KHJlcy54ICsgKHJlcy53aWR0aCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy55ICsgKHJlcy5oZWlnaHQgPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGggPj4gMSxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQgPj4gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9jZXNzKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkb1JlY3Qob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkZWYgPSBjaGVja1Bvc0FuZFNpemUob2JqLCBcIlJlY3RcIik7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLnJhZGl1cyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKG9iai5yYWRpdXMpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoucmFkaXVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRsOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRlZi5yYWRpdXMgYXMgYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZi5yYWRpdXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoucmFkaXVzW2tleV0gPSBvYmoucmFkaXVzW2tleV0gfHwgKGRlZi5yYWRpdXMgYXMgYW55KVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gcmVtYWtlUG9zQW5kU2l6ZShkZWYsIG9iaik7XHJcblxyXG4gICAgICAgIHJlcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgcmVzLmN0eC5tb3ZlVG8ocmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyByZXMud2lkdGggLSAocmVzLnJhZGl1cyBhcyBhbnkpLnRyLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSwgcmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50cik7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgcmVzLmhlaWdodCAtIChyZXMucmFkaXVzIGFzIGFueSkuYnIpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyByZXMuaGVpZ2h0LCByZXMueCArIHJlcy53aWR0aCAtIChyZXMucmFkaXVzIGFzIGFueSkuYnIsIHJlcy55ICsgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLmJsLCByZXMueSArIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCwgcmVzLnkgKyByZXMuaGVpZ2h0LCByZXMueCwgcmVzLnkgKyByZXMuaGVpZ2h0IC0gKHJlcy5yYWRpdXMgYXMgYW55KS5ibCk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLngsIHJlcy55ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50bCk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54LCByZXMueSwgcmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgcHJvY2VzcyhyZXMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRPRE86IG5lZWQgdG8gYmUgY2hlY2tlZCBpZiBhcHAgaXMgcnVubmluZyBpbiBicm93c2VyXHJcblxyXG5sZXQgbG9jYWxDb250ZXh0OiBEb2N1bWVudCB8IG51bGwgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tR2V0IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IGRvY3VtZW50IGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDb250ZXh0KGNvbnRleHQ6IERvY3VtZW50KTogdm9pZCB7XHJcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lIG5hbWUgb2YgY2xhc3NcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIGNvbGxlY3Rpb24gb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGluayBuYW1lIG9mIGxpbmtcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlMaW5rKGxpbms6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBdPiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgYVthdHRyPVwiJHtsaW5rfVwiXWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBzZWFyY2hlZCBJRFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgZm91bmQgZWxlbWVudCBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlJZChpZDogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGVsZW1lbnRzIG5hbWVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlOYW1lKG5hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhZ05hbWUgZWxlbWVudHMgdGFnTmFtZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgbm9kZUxpc3Qgb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieVRhZyh0YWdOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkgYXMgYW55O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEJ1dHRvbiB7XHJcbiAgICBMRUZULFxyXG4gICAgUklHSFQsXHJcbiAgICBNSURETEUsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRGF5cyB7XHJcbiAgICBNT04gPSBcIk1PTlwiLFxyXG4gICAgVFVFID0gXCJUVUVcIixcclxuICAgIFdFRCA9IFwiV0VEXCIsXHJcbiAgICBUSFUgPSBcIlRIVVwiLFxyXG4gICAgRlJJID0gXCJGUklcIixcclxuICAgIFNBVCA9IFwiU0FUXCIsXHJcbiAgICBTVU4gPSBcIlNVTlwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEVuY29kaW5ncyB7XHJcbiAgICAvKlxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVVEY4ICAgID0gXCJ1dGY4XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVURjE2ICAgPSBcInV0ZjE2XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVOSUNPREUgPSBcInVuaWNvZGVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVNDSUkgICA9IFwiYXNjaWlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUNTMiAgICA9IFwidWNzMlwiO1xyXG4gICAgKi9cclxuICAgIFVURjggICAgPSBcInV0ZjhcIixcclxuICAgIFVURjE2ICAgPSBcInV0ZjE2XCIsXHJcbiAgICBVTklDT0RFID0gXCJ1bmljb2RlXCIsXHJcbiAgICBBU0NJSSAgID0gXCJhc2NpaVwiLFxyXG4gICAgVUNTMiAgICA9IFwidWNzMlwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEZpbGVUeXBlcyB7XHJcbiAgICBDU1MgID0gXCJ0ZXh0L2Nzc1wiLFxyXG4gICAgSFRNTCA9IFwidGV4dC9odG1sXCIsXHJcbiAgICBKUyAgID0gXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIsXHJcbiAgICBNUDMgID0gXCJhdWRpby9tcGVnXCIsXHJcbiAgICBNUDQgID0gXCJ2aWRlby9tcDRcIixcclxuICAgIE9HRyAgPSBcImFwcGxpY2F0aW9uL29nZ1wiLFxyXG4gICAgT0dWICA9IFwidmlkZW8vb2dnXCIsXHJcbiAgICBPR0EgID0gXCJhdWRpby9vZ2dcIixcclxuICAgIFRYVCAgPSBcInRleHQvcGxhaW5cIixcclxuICAgIFdBViAgPSBcImF1ZGlvL3gtd2F2XCIsXHJcbiAgICBXRUJNID0gXCJ2aWRlby93ZWJtXCIsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gSHR0cFN0YXR1c0NvZGVzIHtcclxuICAgIENPTlRJTlVFICAgICAgICAgICAgICAgICAgICAgICAgPSAxMDAsXHJcbiAgICBTV0lUQ0hJTkdfUFJPVE9DT0xTICAgICAgICAgICAgID0gMTAxLFxyXG4gICAgT0sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMCxcclxuICAgIENSRUFURUQgICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDEsXHJcbiAgICBBQ0NFUFRFRCAgICAgICAgICAgICAgICAgICAgICAgID0gMjAyLFxyXG4gICAgTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04gICA9IDIwMyxcclxuICAgIE5PX0NPTlRFTlQgICAgICAgICAgICAgICAgICAgICAgPSAyMDQsXHJcbiAgICBSRVNFVF9DT05URU5UICAgICAgICAgICAgICAgICAgID0gMjA1LFxyXG4gICAgUEFSVElBTF9DT05URU5UICAgICAgICAgICAgICAgICA9IDIwNixcclxuICAgIE1VTFRJUExFX0NIT0lDRVMgICAgICAgICAgICAgICAgPSAzMDAsXHJcbiAgICBNT1ZFRF9QRVJNQU5FTlRMWSAgICAgICAgICAgICAgID0gMzAxLFxyXG4gICAgRk9VTkQgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDMwMixcclxuICAgIFNFRV9PVEhFUiAgICAgICAgICAgICAgICAgICAgICAgPSAzMDMsXHJcbiAgICBOT1RfTU9ESUZJRUQgICAgICAgICAgICAgICAgICAgID0gMzA0LFxyXG4gICAgVVNFX1BST1hZICAgICAgICAgICAgICAgICAgICAgICA9IDMwNSxcclxuICAgIFRFTVBPUkFSWV9SRURJUkVDVCAgICAgICAgICAgICAgPSAzMDcsXHJcbiAgICBCQURfUkVRVUVTVCAgICAgICAgICAgICAgICAgICAgID0gNDAwLFxyXG4gICAgVU5BVVRIT1JJWkVEICAgICAgICAgICAgICAgICAgICA9IDQwMSxcclxuICAgIFBBWU1FTlRfUkVRVUlSRUQgICAgICAgICAgICAgICAgPSA0MDIsXHJcbiAgICBGT1JCSURERU4gICAgICAgICAgICAgICAgICAgICAgID0gNDAzLFxyXG4gICAgTk9UX0ZPVU5EICAgICAgICAgICAgICAgICAgICAgICA9IDQwNCxcclxuICAgIE1FVEhPRF9OT1RfQUxMT1dFRCAgICAgICAgICAgICAgPSA0MDUsXHJcbiAgICBOT1RfQUNDRVBUQUJMRSAgICAgICAgICAgICAgICAgID0gNDA2LFxyXG4gICAgUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgICA9IDQwNyxcclxuICAgIFJFUVVFU1RfVElNRU9VVCAgICAgICAgICAgICAgICAgPSA0MDgsXHJcbiAgICBDT05GTElDVCAgICAgICAgICAgICAgICAgICAgICAgID0gNDA5LFxyXG4gICAgR09ORSAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDQxMCxcclxuICAgIExFTkdUSF9SRVFVSVJFRCAgICAgICAgICAgICAgICAgPSA0MTEsXHJcbiAgICBQUkVDT05ESVRJT05fRkFJTEVEICAgICAgICAgICAgID0gNDEyLFxyXG4gICAgUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFICAgICAgICA9IDQxMyxcclxuICAgIFJFUVVFU1RfVVJJX1RPT19MT05HICAgICAgICAgICAgPSA0MTQsXHJcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFICAgICAgICAgID0gNDE1LFxyXG4gICAgUkVRVUVTVEVEX1JBTkdFX05PVF9TQVRJU0ZJQUJMRSA9IDQxNixcclxuICAgIEVYUEVDVEFUSU9OX0ZBSUxFRCAgICAgICAgICAgICAgPSA0MTcsXHJcbiAgICBVTlBST0NFU1NBQkxFX0VOVElUWSAgICAgICAgICAgID0gNDIyLFxyXG4gICAgVE9PX01BTllfUkVRVUVTVFMgICAgICAgICAgICAgICA9IDQyOSxcclxuICAgIElOVEVSTkFMX1NFUlZFUl9FUlJPUiAgICAgICAgICAgPSA1MDAsXHJcbiAgICBOT1RfSU1QTEVNRU5URUQgICAgICAgICAgICAgICAgID0gNTAxLFxyXG4gICAgQkFEX0dBVEVXQVkgICAgICAgICAgICAgICAgICAgICA9IDUwMixcclxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEUgICAgICAgICAgICAgPSA1MDMsXHJcbiAgICBHQVRFV0FZX1RJTUVPVVQgICAgICAgICAgICAgICAgID0gNTA0LFxyXG4gICAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQgICAgICA9IDUwNSxcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9idXR0b24uZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kYXlzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW5jb2RpbmdzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmlsZS10eXBlcy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHAtc3RhdHVzLWNvZGVzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4va2V5cy5lbnVtXCI7XHJcbiIsImV4cG9ydCBlbnVtIEtleXMge1xyXG4gICAgQVJST1dfVVAgICAgPSBcIkFycm93VXBcIixcclxuICAgIEFSUk9XX0RPV04gID0gXCJBcnJvd0Rvd25cIixcclxuICAgIEFSUk9XX0xFRlQgID0gXCJBcnJvd0xlZnRcIixcclxuICAgIEFSUk9XX1JJR0hUID0gXCJBcnJvd1JpZ2h0XCIsXHJcbiAgICBERUxFVEUgICAgICA9IFwiRGVsZXRlXCIsXHJcbiAgICBDT05UUk9MICAgICA9IFwiQ29udHJvbExlZnRcIixcclxuICAgIFNISUZUICAgICAgID0gXCJTaGlmdExlZnRcIixcclxuICAgIFBBR0VfVVAgICAgID0gXCJQYWdlVXBcIixcclxuICAgIFBBR0VfRE9XTiAgID0gXCJQYWdlRG93blwiLFxyXG4gICAgRVNDQVBFICAgICAgPSBcIkVzY2FwZVwiLFxyXG4gICAgVyAgICAgICAgICAgPSBcIktleVdcIixcclxuICAgIEYgICAgICAgICAgID0gXCJLZXlGXCIsXHJcbiAgICBBICAgICAgICAgICA9IFwiS2V5QVwiLFxyXG4gICAgUCAgICAgICAgICAgPSBcIktleVBcIixcclxuICAgIFMgICAgICAgICAgID0gXCJLZXlTXCIsXHJcbiAgICBEICAgICAgICAgICA9IFwiS2V5RFwiLFxyXG4gICAgUiAgICAgICAgICAgPSBcIktleVJcIixcclxuXHJcbiAgICBESUdJVF8xICAgICAgICAgICA9IFwiRGlnaXQxXCIsXHJcbiAgICBESUdJVF8yICAgICAgICAgICA9IFwiRGlnaXQyXCIsXHJcbiAgICBESUdJVF8zICAgICAgICAgICA9IFwiRGlnaXQzXCIsXHJcbiAgICBESUdJVF80ICAgICAgICAgICA9IFwiRGlnaXQ0XCIsXHJcbiAgICBESUdJVF81ICAgICAgICAgICA9IFwiRGlnaXQ1XCIsXHJcbiAgICBESUdJVF82ICAgICAgICAgICA9IFwiRGlnaXQ2XCIsXHJcbiAgICBESUdJVF83ICAgICAgICAgICA9IFwiRGlnaXQ3XCIsXHJcbiAgICBESUdJVF84ICAgICAgICAgICA9IFwiRGlnaXQ4XCIsXHJcbiAgICBESUdJVF85ICAgICAgICAgICA9IFwiRGlnaXQ5XCIsXHJcbiAgICBESUdJVF8wICAgICAgICAgICA9IFwiRGlnaXQwXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlzT2xkIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRU5URVIgICAgICAgPSAxMztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFCICAgICAgICAgPSA5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXICAgICAgICAgICA9IDg3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBICAgICAgICAgICA9IDY1O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTICAgICAgICAgICA9IDgzO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEICAgICAgICAgICA9IDY4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBRICAgICAgICAgICA9IDgxO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFICAgICAgICAgICA9IDY5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGICAgICAgICAgICA9IDcwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMQ09OVFJPTCAgICA9IDE3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFU0NBUEUgICAgICA9IDI3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMQUxUICAgICAgICA9IDE4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMU0hJRlQgICAgICA9IDE2O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTUEFDRSAgICAgICA9IDMyO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19VUCAgICA9IDM4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19ET1dOICA9IDQwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19SSUdIVCA9IDM5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19MRUZUICA9IDM3O1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL25vdC1icm93c2VyLmV4Y2VwdGlvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9udWxsLXBvaW50ZXIuZXhjZXB0aW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dyb25nLXBhcmFtZXRlci5leGNlcHRpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWlzc2luZy1wYXJhbWV0ZXIuZXJyb3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbm8tZGF0YWJhc2UtY29ubmVjdGlvbi5lcnJvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93cm9uZy10eXBlLmV4Y2VwdGlvblwiO1xyXG4iLCJleHBvcnQgY2xhc3MgTWlzc2luZ1BhcmFtZXRlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtZXRlck5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGBQYXJhbWV0ZXIgJHtwYXJhbWV0ZXJOYW1lfSBtdXN0IGJlIGRlZmluZWRgKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTm9EYXRhYmFzZUNvbm5lY3Rpb25FcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIkRhdGFiYXNlIGNvbm5lY3Rpb24gaXMgbm8gZXN0YWJsaXNoZWRcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gZ2V0VGV4dCh0ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0ID8gYDogJHt0ZXh0fWAgOiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90QnJvd3NlckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYEFwcCBpcyBub3QgcnVubmluZyBpbiBicm93c2VyJHtnZXRUZXh0KHRleHQpfSFgKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE5vdEJyb3dzZXJFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTnVsbFBvaW50ZXJFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiTnVsbCBwb2ludGVyIGV4Y2VwdGlvbiBhdCBsaW5lXCIgKyAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIgPyBcIjogXCIgKyB0ZXh0IDogXCIhXCIpKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE51bGxQb2ludGVyRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFdyb25nUGFyYW1ldGVyRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihgV3JvbmcgcGFyYW1ldGVyIGV4Y2VwdGlvbiBhdCBsaW5lJHt0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIiA/IFwiOiBcIiArIHRleHQgOiBcIiFcIn1gKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFdyb25nUGFyYW1ldGVyRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFdyb25nVHlwZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyZXF1aXJlZFR5cGU6IHN0cmluZywgdGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGBXcm9uZyB0eXBlIGV4Y2VwdGlvbiBhdCBsaW5lLiAke3R5cGVvZiByZXF1aXJlZFR5cGV9IG11c3QgYmUgJHtyZXF1aXJlZFR5cGV9JHt0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIiA/IFwiOiBcIiArIHRleHQgOiBcIiFcIn1gKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFdyb25nVHlwZUV4Y2VwdGlvbi5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0dVdGlsc1wiO1xyXG5cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlY3RvcjJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yMmZcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yM1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92ZWN0b3I0XCI7XHJcbiIsImltcG9ydCB7IFJhbmdlIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyIGltcGxlbWVudHMgU2ltcGxlVmVjdG9yMiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB5ID0gMCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFpFUk8oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFVQKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMRUZUKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigtMSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQk9UVE9NKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUklHSFQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE9ORSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhdmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW0gLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3VtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21BcnJheSh2YWw6IFtudW1iZXIsIG51bWJlcl0gfCBGbG9hdDMyQXJyYXkpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmFsWzBdLCB2YWxbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodmVjQSA9PT0gdmVjQikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNBLnggPT09IHZlY0IueCAmJiB2ZWNBLnkgPT09IHZlY0IueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1Yih2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY0EueCAtIHZlY0IueCwgdmVjQS55IC0gdmVjQi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb20odmFsQTogbnVtYmVyLCB2YWxCID0gdmFsQSk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2YWxBLCB2YWxCKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmlzaWJsZShvYnNYOiBudW1iZXIsIG9ic1k6IG51bWJlciwgYW5nbGU6IG51bWJlciwgY3V0T2ZmOiBudW1iZXIsIHB4OiBudW1iZXIsIHB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYW5nbGUgLSBNYXRoLmF0YW4yKFxyXG4gICAgICAgICAgICBweSAtIG9ic1ksXHJcbiAgICAgICAgICAgIHB4IC0gb2JzWCxcclxuICAgICAgICApIDw9IGN1dE9mZjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT3V0bGluZVJhbmdlKHBvaW50czogcmVhZG9ubHkgU2ltcGxlVmVjdG9yMltdKTogUmFuZ2U8U2ltcGxlVmVjdG9yMj4ge1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IHtcclxuICAgICAgICAgICAgeDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIHk6IEluZmluaXR5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWF4ID0ge1xyXG4gICAgICAgICAgICB4OiAtSW5maW5pdHksXHJcbiAgICAgICAgICAgIHk6IC1JbmZpbml0eSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb2ludHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocC54IDwgbWluLngpIHtcclxuICAgICAgICAgICAgICAgIG1pbi54ID0gcC54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwLnkgPCBtaW4ueSkge1xyXG4gICAgICAgICAgICAgICAgbWluLnkgPSBwLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHAueCA+IG1heC54KSB7XHJcbiAgICAgICAgICAgICAgICBtYXgueCA9IHAueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocC55ID4gbWF4LnkpIHtcclxuICAgICAgICAgICAgICAgIG1heC55ID0gcC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UobWluLCBtYXgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhbmdsZUJldHdlZW5Qb2ludHMob2JzWDogbnVtYmVyLCBvYnNZOiBudW1iZXIsIHB4MTogbnVtYmVyLCBweTE6IG51bWJlciwgcHgyOiBudW1iZXIsIHB5MjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgcHkxIC0gb2JzWSxcclxuICAgICAgICAgICAgcHgxIC0gb2JzWCxcclxuICAgICAgICApIC0gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgcHkyIC0gb2JzWSxcclxuICAgICAgICAgICAgcHgyIC0gb2JzWCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWZWN0b3IoaXRlbTogYW55KTogaXRlbSBpcyBTaW1wbGVWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiAhaXNOYU4oaXRlbS54KSAmJiAhaXNOYU4oaXRlbS55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bSh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY0EueCArIHZlY0IueCwgdmVjQS55ICsgdmVjQi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1pbih2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKE1hdGgubWluKHZlY0EueCwgdmVjQi54KSwgTWF0aC5taW4odmVjQS55LCB2ZWNCLnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1heCh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKE1hdGgubWF4KHZlY0EueCwgdmVjQi54KSwgTWF0aC5tYXgodmVjQS55LCB2ZWNCLnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3QodmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh2ZWNBLnggLSB2ZWNCLngsIDIpICsgTWF0aC5wb3codmVjQS55IC0gdmVjQi55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzWmVybygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm9ybWFsaXplZCgpOiBTaW1wbGVWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bE51bSh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2YWw6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNBLnggKiB2YWwsIHZlY0EueSAqIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bCh2YWx1ZTogU2ltcGxlVmVjdG9yMiB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWUueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQodmFsdWU6IFNpbXBsZVZlY3RvcjIgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHZhbHVlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHZhbHVlLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViKHZhbHVlOiBTaW1wbGVWZWN0b3IyIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggLT0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB2YWx1ZS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpdih2YWx1ZTogU2ltcGxlVmVjdG9yMiB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54IC89IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gdmFsdWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gdmFsdWUueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHZlYzogU2ltcGxlVmVjdG9yMik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBwcm9jZXNzID0gKFxyXG4gICAgb3A6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCxcclxuICAgIGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLFxyXG4gICAgYXJnMj86IG51bWJlcixcclxuKTogdm9pZCA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBvcChhcmcxIGFzIG51bWJlciwgYXJnMik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgb3AoYXJnMSwgYXJnMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wKGFyZzEueCwgYXJnMS55KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBpcyB1c2VkIGZvciBob2xkaW5nIDIgbnVtZXJpYyB2YWx1ZXMgYW5kIG1hbmlwdWxhdGlvbiB3aXRoIHRoZW1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyZiB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBYIHZhbHVlIG9mIHZlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgWSB2YWx1ZSBvZiB2ZWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHggPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCB2ZWN0b3JzIHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgY3JlYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gYWRkIHZhbHVlcyBpbnRvIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGRpdmlkZSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXYoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBtdWx0aXBseSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtdWwoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBzdWJ0cmFjdCB2YWx1ZXMgZnJvbSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWIoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMyB9IGZyb20gXCIuL3NpbXBsZS12ZWN0b3IzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi92ZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMyBpbXBsZW1lbnRzIFNpbXBsZVZlY3RvcjMge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB4ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeSA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHogPSAwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgVVAoKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIDEsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFpFUk8oKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE9ORSgpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMSwgMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhdmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCArIHRoaXMueSArIHRoaXMueikgLyAzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodmVjQSA9PT0gdmVjQikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNBLnggPT09IHZlY0IueCAmJiB2ZWNBLnkgPT09IHZlY0IueSAmJiB2ZWNBLnogPT09IHZlY0IuejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1Yih2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY0EueCAtIHZlY0IueCwgdmVjQS55IC0gdmVjQi55LCB2ZWNBLnogLSB2ZWNCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICsgdmVjQi54LCB2ZWNBLnkgKyB2ZWNCLnksIHZlY0EueiArIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0odmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWNBLnggKyB2ZWNCLngsIHZlY0EueSArIHZlY0IueSwgdmVjQS56ICsgdmVjQi56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bE51bSh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2YWw6IG51bWJlcik6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWNBLnggKiB2YWwsIHZlY0EueSAqIHZhbCwgdmVjQS56ICogdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bCh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY0EueCArIHZlY0IueCwgdmVjQS55ICsgdmVjQi55LCB2ZWNBLnogKyB2ZWNCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoTWF0aC5taW4odmVjQS54LCB2ZWNCLngpLCBNYXRoLm1pbih2ZWNBLnksIHZlY0IueSksIE1hdGgubWluKHZlY0EueiwgdmVjQi56KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGcm9tU3BoZXJpY2FsQ29vcmRzKHJhZGl1czogbnVtYmVyLCBwaGk6IG51bWJlciwgdGhldGE6IG51bWJlcik6IFZlY3RvcjMge1xyXG4gICAgICAgIGNvbnN0IHNpblBoaVJhZGl1cyA9IE1hdGguc2luKHBoaSkgKiByYWRpdXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBzaW5QaGlSYWRpdXMgKiBNYXRoLnNpbih0aGV0YSk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguY29zKHBoaSkgKiByYWRpdXM7XHJcbiAgICAgICAgY29uc3QgeiA9IHNpblBoaVJhZGl1cyAqIE1hdGguY29zKHRoZXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWF4KHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLCBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSksIE1hdGgubWF4KHZlY0EueiwgdmVjQi56KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codmVjQS54IC0gdmVjQi54LCAyKSArIE1hdGgucG93KHZlY0EueSAtIHZlY0IueSwgMikgKyBNYXRoLnBvdyh2ZWNBLnogLSB2ZWNCLnosIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5vcm1hbGl6ZTxUIGV4dGVuZHMgU2ltcGxlVmVjdG9yMz4odmVjOiBUKTogVCB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55ICsgdmVjLnogKiB2ZWMueik7XHJcbiAgICAgICAgdmVjLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy55IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueiAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB4eSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbSh2YWxBOiBudW1iZXIsIHZhbEIgPSB2YWxBLCB2YWxDID0gdmFsQSk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2YWxBLCB2YWxCLCB2YWxDKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmVjdG9yKGl0ZW06IGFueSk6IGl0ZW0gaXMgU2ltcGxlVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgIWlzTmFOKGl0ZW0ueCkgJiYgIWlzTmFOKGl0ZW0ueSkgJiYgIWlzTmFOKGl0ZW0ueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvQXJyYXkoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdW0oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy55ICsgdGhpcy56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3JtYWxpemVkKCk6IFNpbXBsZVZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnogLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsKHZhbHVlOiBTaW1wbGVWZWN0b3IzIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy56ICo9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWUueTtcclxuICAgICAgICAgICAgdGhpcy56ICo9IHZhbHVlLno7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHZlYzogU2ltcGxlVmVjdG9yMyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56ICs9IHZlYy56O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3Jvc3ModjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsWCA9IHRoaXMueSAqIHYueiAtIHRoaXMueiAqIHYueTtcclxuICAgICAgICBjb25zdCBsb2NhbFkgPSB0aGlzLnogKiB2LnggLSB0aGlzLnggKiB2Lno7XHJcbiAgICAgICAgY29uc3QgbG9jYWxaID0gdGhpcy54ICogdi55IC0gdGhpcy55ICogdi54O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMobG9jYWxYLCBsb2NhbFksIGxvY2FsWik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRvdCh2OiBTaW1wbGVWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55ICsgdGhpcy56ICogdi56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWIodmVjOiBTaW1wbGVWZWN0b3IzKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogLT0gdmVjLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh2ZWM6IFNpbXBsZVZlY3RvcjMpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogPSB2ZWMuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5eCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeXooKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueSwgdGhpcy56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHp5KCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnosIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB4eigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgengoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueiwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21BcnJheSh2YWx1ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHwgRmxvYXQzMkFycmF5KTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjQgfSBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yNFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjQgaW1wbGVtZW50cyBTaW1wbGVWZWN0b3I0IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHkgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB6ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgdyA9IDApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBaRVJPKCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCgwLCAwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBPTkUoKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KDEsIDEsIDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUFycmF5KHZhbDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfCBGbG9hdDMyQXJyYXkpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQodmFsWzBdLCB2YWxbMV0sIHZhbFsyXSwgdmFsWzNdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb20odmFsQTogbnVtYmVyLCB2YWxCID0gdmFsQSwgdmFsQyA9IHZhbEIsIHZhbEQgPSB2YWxDKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KHZhbEEsIHZhbEIsIHZhbEMsIHZhbEQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXZnKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKyB0aGlzLnkgKyB0aGlzLnogKyB0aGlzLncpIC8gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICsgdGhpcy53ICogdGhpcy53KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVxdWFscyh2ZWNBOiBTaW1wbGVWZWN0b3I0LCB2ZWNCOiBTaW1wbGVWZWN0b3I0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHZlY0EgPT09IHZlY0IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmVjQS54ID09PSB2ZWNCLnggJiYgdmVjQS55ID09PSB2ZWNCLnkgJiYgdmVjQS56ID09PSB2ZWNCLnogJiYgdmVjQS53ID09PSB2ZWNCLnc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtaW4odmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNChcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS54LCB2ZWNCLngpLFxyXG4gICAgICAgICAgICBNYXRoLm1pbih2ZWNBLnksIHZlY0IueSksXHJcbiAgICAgICAgICAgIE1hdGgubWluKHZlY0EueiwgdmVjQi56KSxcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS53LCB2ZWNCLncpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYXgodmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNChcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLFxyXG4gICAgICAgICAgICBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSksXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHZlY0EueiwgdmVjQi56KSxcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS53LCB2ZWNCLncpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHZlY0E6IFNpbXBsZVZlY3RvcjQsIHZlY0I6IFNpbXBsZVZlY3RvcjQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EueCAtIHZlY0IueCwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyh2ZWNBLnkgLSB2ZWNCLnksIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3codmVjQS56IC0gdmVjQi56LCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EudyAtIHZlY0IudywgMiksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5vcm1hbGl6ZTxUIGV4dGVuZHMgU2ltcGxlVmVjdG9yND4odmVjOiBUKTogVCB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55ICsgdmVjLnogKiB2ZWMueiArIHZlYy53ICogdmVjLncpO1xyXG4gICAgICAgIHZlYy54IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdmVjLnogLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy53IC89IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlYztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZlY3RvcihpdGVtOiBhbnkpOiBpdGVtIGlzIFNpbXBsZVZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBpdGVtICYmICFpc05hTihpdGVtLngpICYmICFpc05hTihpdGVtLnkpICYmICFpc05hTihpdGVtLnopICYmICFpc05hTihpdGVtLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0FycmF5KCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMud107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vcm1hbGl6ZWQoKTogU2ltcGxlVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KHRoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMudyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZSgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy56IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLncgLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsKHZhbHVlOiBTaW1wbGVWZWN0b3I0IHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy56ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLncgKj0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZS55O1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWUuejtcclxuICAgICAgICAgICAgdGhpcy53ICo9IHZhbHVlLnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHZlYzogU2ltcGxlVmVjdG9yNCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56ICs9IHZlYy56O1xyXG4gICAgICAgIHRoaXMudyArPSB2ZWMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Yih2ZWM6IFNpbXBsZVZlY3RvcjQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiAtPSB2ZWMuejtcclxuICAgICAgICB0aGlzLncgLT0gdmVjLnc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHc6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQodmVjOiBTaW1wbGVWZWN0b3I0KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56ID0gdmVjLno7XHJcbiAgICAgICAgdGhpcy53ID0gdmVjLnc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgQWpheFBhcmFtcyB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIgfCBcIlBPU1RcIjtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgb25SZXNwb25zZTogKGRhdGE6IGFueSkgPT4gdm9pZDtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmNsYXNzIEFqYXhXcmFwcGVyIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFqYXhIYW5kbGVyOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWpheCh7XHJcbiAgICBtZXRob2QgPSBcIkdFVFwiLFxyXG4gICAgdXJsLFxyXG4gICAgb25SZXNwb25zZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBoZWFkZXJzID0ge30sXHJcbn06IEFqYXhQYXJhbXMpOiBBamF4V3JhcHBlciB7XHJcbiAgICBjb25zdCByZXF1ZXN0ICAgICAgICAgICAgICA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0ICYmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwIHx8IHJlcXVlc3Quc3RhdHVzID09PSAyMDEpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb25SZXNwb25zZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9uUmVzcG9uc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG4gICAgT2JqZWN0LmVudHJpZXMoaGVhZGVycykuZm9yRWFjaCgoZW50cnkpID0+IHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihlbnRyeVswXSwgZW50cnlbMV0pKTtcclxuICAgIHJlcXVlc3Quc2VuZChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFqYXhXcmFwcGVyKHJlcXVlc3QpO1xyXG59XHJcbiIsImNvbnN0IEZJTEVfU0laRV9VTklUUyAgICAgID0gW1wiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiLCBcIlRCXCIsIFwiUEJcIiwgXCJFQlwiLCBcIlpCXCIsIFwiWUJcIl07XHJcbmNvbnN0IEZJTEVfU0laRV9VTklUU19MT05HID0gW1wiQnl0ZXNcIiwgXCJLaWxvYnl0ZXNcIiwgXCJNZWdhYnl0ZXNcIiwgXCJHaWdhYnl0ZXNcIiwgXCJQZXR0YWJ5dGVzXCIsIFwiRXhhYnl0ZXNcIiwgXCJaZXR0YWJ5dGVzXCIsIFwiWW90dGFieXRlc1wiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWxlU2l6ZShzaXplSW5CeXRlczogbnVtYmVyLCBsb25nRm9ybSA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHVuaXRzID0gbG9uZ0Zvcm1cclxuICAgICAgICA/IEZJTEVfU0laRV9VTklUU19MT05HXHJcbiAgICAgICAgOiBGSUxFX1NJWkVfVU5JVFM7XHJcblxyXG4gICAgbGV0IHBvd2VyID0gTWF0aC5yb3VuZChNYXRoLmxvZyhzaXplSW5CeXRlcykgLyBNYXRoLmxvZygxMDI0KSk7XHJcbiAgICBwb3dlciAgICAgPSBNYXRoLm1pbihwb3dlciwgdW5pdHMubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZSAgICAgICAgICA9IHNpemVJbkJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgcG93ZXIpOyAvLyBzaXplIGluIG5ldyB1bml0c1xyXG4gICAgY29uc3QgZm9ybWF0dGVkU2l6ZSA9IE1hdGgucm91bmQoc2l6ZSAqIDEwMCkgLyAxMDA7IC8vIGtlZXAgdXAgdG8gMiBkZWNpbWFsc1xyXG4gICAgY29uc3QgdW5pdCAgICAgICAgICA9IHVuaXRzW3Bvd2VyXTtcclxuXHJcbiAgICByZXR1cm4gc2l6ZSA/IGAke2Zvcm1hdHRlZFNpemV9ICR7dW5pdH1gIDogXCIwXCI7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2xvdmFrLXN0ZW1tZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYWpheFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9maWxlLXNpemUtZm9ybWF0dGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS1sb29wXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bnRpbWUtdmFsaWRhdG9yc1wiO1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0QXNTdHJpbmcgPSAoa2V5OiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhcmlhYmxlIHdpdGggdmFsdWUgJHtrZXl9IGlzIG5vdCBhIHN0cmluZ2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRBc051bWJlciA9IChrZXk6IGFueSk6IG51bWJlciA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgd2l0aCB2YWx1ZSAke2tleX0gaXMgbm90IGEgbnVtYmVyYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZUxvb3AoY2FsbGJhY2s6IChkZWx0YTogbnVtYmVyKSA9PiB2b2lkLCByZXF1aXJlZEZwcyA9IDYwKTogeyBzdG9wOiAoKSA9PiB2b2lkIH0ge1xyXG4gICAgbGV0IHN0YXJ0OiBudW1iZXI7XHJcbiAgICBsZXQgcmVxOiBudW1iZXI7XHJcbiAgICBjb25zdCByZXF1aXJlZER1cmF0aW9uID0gMTAwMCAvIHJlcXVpcmVkRnBzO1xyXG4gICAgY29uc3QgdGljayA9ICh0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRpbWUgLSBzdGFydDtcclxuICAgICAgICBzdGFydCA9IHRpbWU7XHJcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xyXG4gICAgICAgIGNhbGxiYWNrKChkdXJhdGlvbiAvIHJlcXVpcmVkRHVyYXRpb24pIHx8IDEpO1xyXG4gICAgfTtcclxuICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0b3A6KCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKSxcclxuICAgIH07XHJcbn1cclxuIiwiZnVuY3Rpb24gcmVtb3ZlUHJlZHBvbmEoY2hhcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChjaGFyLmxlbmd0aCA+IDYgJiYgY2hhci5zdGFydHNXaXRoKFwibmFqXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYXIuc3Vic3RyKDMsIGNoYXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2hhcjtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmZ1bmN0aW9uIHJlbW92ZUNhc2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuID0ga2V5Lmxlbmd0aDtcclxuICAgIGlmIChsZW4gPiA5ICYmIGtleS5lbmRzV2l0aChcImVqxaFpZWhvXCIpXHJcbiAgICAgICAgfHwga2V5LmVuZHNXaXRoKFwiZWrFoWllbXVcIikpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA3KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gOCAmJiAoa2V5LmVuZHNXaXRoKFwiZWrFocOtY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNvY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61taVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY2FtaVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA2KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNyAmJiAoa2V5LmVuZHNXaXRoKFwiZWrFoWlhXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiYXRhbWlcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmllY1wiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY29tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoW9tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFocOtbVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFlalwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFvdVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFpdVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFpZVwiKVxyXG4gICAgKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA2ICYmXHJcbiAgICAgICAgKGtleS5lbmRzV2l0aChcImXFpW9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhbWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWlb21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZpYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVuY2VcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZW11XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWV0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61cIikgfHxcclxuICAgICAgICAgICAgLy8gZ2Fib3NcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5pZVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNSAmJlxyXG4gICAgICAgIChrZXkuZW5kc1dpdGgoXCJpY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDqWhvXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6ltdVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtdVwiKSB8fFxyXG4gICAgICAgICAgICAvKmtleS5lbmRzV2l0aChcImlob1wiKSB8fCovIC8vIFZlxL5taSBtYWzDvSB2cGx5dlxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOhY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsOpXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w71cIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDrVwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92aVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWXFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71taVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInltaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhY2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFtXCIpIHx8XHJcbiAgICAgICAgICAgIC8qa2V5LmVuZHNXaXRoKFwiYXTDoVwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhY1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpdGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxpXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm9jaFwiKVxyXG4gICAgICAgICkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNCAmJlxyXG4gICAgICAgICgvKmtleS5lbmRzV2l0aChcIsOtblwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOhbVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInVzXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71tXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIml1XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImltXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm11XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw7rFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw63FoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw7pjXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImXFoVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gMykge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5W2xlbiAtIDFdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJvXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDulwiOlxyXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw6FcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOpXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDrVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw71cIjpcclxuICAgICAgICAgICAgICAgIC8qY2FzZSBcIsO0XCI6Ki9cclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3NzZXNzaXZlcyhzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuID0gcy5sZW5ndGg7XHJcbiAgICBpZiAobGVuID4gNSAmJiBzLmVuZHNXaXRoKFwiaW5cIikgfHxcclxuICAgICAgICBzLmVuZHNXaXRoKFwib3ZcIikpIHtcclxuICAgICAgICByZXR1cm4gcy5zdWJzdHIoMCwgbGVuIC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuID0gcy5sZW5ndGg7XHJcbiAgICAvLyB0b3RvIHByYXZpZGxvIHpuacW+dWplIEZQIGFsZSB6dnnFoXVqZSBGTlxyXG4gICAgLyogICAgICAgIGlmIChsZW4gPiAxICYmIHNbbGVuIC0gMl0gPT0gXCJpXCIgJiYgc1tsZW4tMV09PVwiY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzW2xlbiAtIDJdID0gc1tsZW4gLSAxXTsgLy8gZSogPiAqXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVuIC0gMTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICBzd2l0Y2ggKHNbbGVuIC0gMV0pIHtcclxuICAgICAgICBjYXNlIFwiY1wiOiAvLyBbY8SNXSAtPiBrXHJcbiAgICAgICAgY2FzZSBcIsSNXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJrXCIpO1xyXG4gICAgICAgIGNhc2UgXCLEvlwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcImxcIik7XHJcbiAgICAgICAgY2FzZSBcIsWIXCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwiblwiKTtcclxuICAgICAgICBjYXNlIFwixaVcIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJ0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiAzICYmIHNbbGVuIC0gM10gPT09IFwiaVwiICYmIChzW2xlbiAtIDJdID09PSBcImVcIiB8fCBzW2xlbiAtIDJdID09PSBcImFcIiB8fCBzW2xlbiAtIDJdID09PSBcInVcIikpIHtcclxuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1tsZW4gLSAyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuIC0gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNbbGVuIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2xvdmFrU3RlbW1lciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHN0ZW1lKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVtb3ZlUG9zc2Vzc2l2ZXMocmVtb3ZlQ2FzZShyZW1vdmVQcmVkcG9uYSh3b3JkKSkpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaGV4MnJnYiwgaW50MnJnYiwgcmdiMmhleCwgcmdiMmludCB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tDb2xvclZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHZhbHVlID49IDApO1xyXG4gICAgY29uc29sZS5hc3NlcnQodmFsdWUgPD0gMjU1KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQkxBQ0sgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdISVRFID0gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkFZICA9IG5ldyBDb2xvcigxMjgsIDEyOCwgMTI4KTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVEICAgPSBuZXcgQ29sb3IoMjU1LCAwLCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JFRU4gPSBuZXcgQ29sb3IoMCwgMjU1LCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQkxVRSAgPSBuZXcgQ29sb3IoMCwgMCwgMjU1KTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHJlZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBncmVlbjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBibHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGFscGhhID0gMjU1KSB7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKHJlZCk7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGdyZWVuKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoYmx1ZSk7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGFscGhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYigpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZ2JTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMucmVkfSwgJHt0aGlzLmdyZWVufSwgJHt0aGlzLmJsdWV9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZ2JhKCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWUsIHRoaXMuYWxwaGFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaGV4KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHJnYjJoZXgoTWF0aC5mbG9vcih0aGlzLnJlZCksIE1hdGguZmxvb3IodGhpcy5ncmVlbiksIE1hdGguZmxvb3IodGhpcy5ibHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcmdiMmludCh0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21IZXgoY29sb3I6IHN0cmluZyk6IENvbG9yIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhleDJyZ2IoY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKC4uLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21JbnQoY29sb3I6IG51bWJlcik6IENvbG9yIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGludDJyZ2IoY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKC4uLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplZCgpOiBDb2xvciB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVkID4gMSB8fCB0aGlzLmdyZWVuID4gMSB8fCB0aGlzLmJsdWUgPiAxIHx8IHRoaXMuYWxwaGEgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IodGhpcy5yZWQgLyAyNTUsIHRoaXMuZ3JlZW4gLyAyNTUsIHRoaXMuYmx1ZSAvIDI1NSwgdGhpcy5hbHBoYSAvIDI1NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBHZW5kZXJ9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCB0eXBlIEdlbmRlclR5cGUgPSBcIk1BTlwiIHwgXCJXT01BTlwiIHwgXCJcIjtcclxuXHJcbmNvbnN0IG1hbGVSZWdleHAgICA9IC9eKG1hbGV8bWFufG11enxib3l8Y2hsYXBlY3xtKSQvZztcclxuY29uc3QgZmVtYWxlUmVnZXhwID0gL14oZmVtYWxlfHdvbWFufHplbmF8Z2lybHxkaWV2Y2F8Znx3fHopJC9nO1xyXG5cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICAgIE1BTiAgID0gXCJNQU5cIixcclxuICAgIFdPTUFOID0gXCJXT01BTlwiLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VHZW5kZXIoZ2VuZGVyOiBzdHJpbmcpOiBHZW5kZXIgfCBudWxsIHtcclxuICAgIGlmICghZ2VuZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZW5kZXJMb3dlckNhc2UgPSBnZW5kZXIudHJpbSgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIsW+XCIsIFwielwiKS5yZXBsYWNlKFwixI1cIiwgXCJjXCIpO1xyXG4gICAgaWYgKGdlbmRlckxvd2VyQ2FzZS5tYXRjaChtYWxlUmVnZXhwKSkge1xyXG4gICAgICAgIHJldHVybiBHZW5kZXIuTUFOO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZW5kZXJMb3dlckNhc2UubWF0Y2goZmVtYWxlUmVnZXhwKSkge1xyXG4gICAgICAgIHJldHVybiBHZW5kZXIuV09NQU47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHBhcnNlR2VuZGVyfSBhbmQge0BsaW5rIEdlbmRlcn0gaW5zdGVhZFxyXG4gKiBDbGFzcyBpcyB1c2VkIGZvciBwYXJzaW5nIGdlbmRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdlbmRlckNsYXNzIHtcclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHBhcnNlIHN0cmluZyBhbmQgcmV0dXJuIEdlbmRlclR5cGVcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcGFyc2VHZW5kZXJ9IGluc3RlYWRcclxuICAgICAqIEBwYXJhbSBnZW5kZXIgZ2VuZGVyIGluIGFueSBmb3JtYXRUaW1lXHJcbiAgICAgKiBAcmV0dXJucyBwYXJzZWQgZ2VuZGVyIGFzIHtAbGluayBHZW5kZXJUeXBlfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlID0gcGFyc2VHZW5kZXI7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE1vZGVsIGlzIGVudW0gYW5kIHBhcnNlclxyXG4gKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2dlbmRlci5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xvci5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90cmFuc2Zvcm1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmFuZ2VcIjtcclxuXHJcbi8vIFRPRE86IENhbm5vdCBpbXBvcnQgY291bnRyaWVzLmRhdGEuanNvblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5pbnRlcmZhY2VcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vY291bnRyaWVzL2NvdW50cnkubW9kZWxcIjtcclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5pbXBvcnQgeyByYW5kb21GbG9hdEJldHdlZW4sIHJhbmRvbUludEJldHdlZW4gfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jb2xvci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmdlPFQ+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbWluOiBULCBwdWJsaWMgcmVhZG9ubHkgbWF4OiBUID0gbWluKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb20ocmFuZ2U6IFJhbmdlPG51bWJlcj4pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLCByYW5nZS5tYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tVmVjdG9yKHJhbmdlOiBSYW5nZTxTaW1wbGVWZWN0b3IyPik6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4ueCwgcmFuZ2UubWF4LngpLFxyXG4gICAgICAgICAgICB5OiByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLnksIHJhbmdlLm1heC55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tQ29sb3JGKHJhbmdlOiBSYW5nZTxDb2xvcj4pOiBDb2xvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihcclxuICAgICAgICAgICAgcmFuZG9tRmxvYXRCZXR3ZWVuKHJhbmdlLm1pbi5yZWQsIHJhbmdlLm1heC5yZWQpLFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLmdyZWVuLCByYW5nZS5tYXguZ3JlZW4pLFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLmJsdWUsIHJhbmdlLm1heC5ibHVlKSxcclxuICAgICAgICAgICAgcmFuZG9tRmxvYXRCZXR3ZWVuKHJhbmdlLm1pbi5hbHBoYSwgcmFuZ2UubWF4LmFscGhhKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tQ29sb3JJKHJhbmdlOiBSYW5nZTxDb2xvcj4pOiBDb2xvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4ucmVkLCByYW5nZS5tYXgucmVkKSxcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4uZ3JlZW4sIHJhbmdlLm1heC5ncmVlbiksXHJcbiAgICAgICAgICAgIHJhbmRvbUludEJldHdlZW4ocmFuZ2UubWluLmJsdWUsIHJhbmdlLm1heC5ibHVlKSxcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4uYWxwaGEsIHJhbmdlLm1heC5hbHBoYSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZm9ybSB7XHJcbiAgICByZWFkb25seSBvZmZzZXQ6IFJlYWRvbmx5PFNpbXBsZVZlY3RvcjI+O1xyXG4gICAgcmVhZG9ubHkgc2NhbGU6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvdGF0aW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0VHJhbnNmb3JtKCk6IFRyYW5zZm9ybSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9mZnNldCAgOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZSAgIDogMSxcclxuICAgICAgICByb3RhdGlvbjogMCxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5pbXBvcnQgeyBNaW5NYXgsIFBvc1NpemUsIFhZV0ggfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcbmltcG9ydCB7IFNwaGVyZSB9IGZyb20gXCIuL29iamVjdHMvMmQvc3BoZXJlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZml4WFlXSChtaW5NYXg6IE1pbk1heCwgeHl3aDogWFlXSCk6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge3g6IHh5d2gueCwgeTogeHl3aC55fTtcclxuXHJcbiAgICBpZiAoeHl3aC54IDwgbWluTWF4Lm1pbi54KSB7XHJcbiAgICAgICAgcmVzdWx0LnggPSBtaW5NYXgubWluLng7XHJcbiAgICB9IGVsc2UgaWYgKHh5d2gueCArIHh5d2gudyA+IG1pbk1heC5tYXgueCkge1xyXG4gICAgICAgIHJlc3VsdC54ID0gbWluTWF4Lm1heC54IC0geHl3aC53O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh4eXdoLnkgPCBtaW5NYXgubWluLnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5taW4ueTtcclxuICAgIH0gZWxzZSBpZiAoeHl3aC55ICsgeHl3aC5oID4gbWluTWF4Lm1heC55KSB7XHJcbiAgICAgICAgcmVzdWx0LnkgPSBtaW5NYXgubWF4LnkgLSB4eXdoLmg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFBvc1NpemUobWluTWF4OiBNaW5NYXgsIHRhcmdldDogUG9zU2l6ZSk6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gey4uLnRhcmdldC5wb3NpdGlvbn07XHJcbiAgICBpZiAodGFyZ2V0LnBvc2l0aW9uLnggPCBtaW5NYXgubWluLngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5taW4ueDtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0LnBvc2l0aW9uLnggKyB0YXJnZXQuc2l6ZS54ID4gbWluTWF4Lm1heC54KSB7XHJcbiAgICAgICAgcmVzdWx0LnggPSBtaW5NYXgubWF4LnggLSB0YXJnZXQuc2l6ZS54O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQucG9zaXRpb24ueSA8IG1pbk1heC5taW4ueSkge1xyXG4gICAgICAgIHJlc3VsdC55ID0gbWluTWF4Lm1pbi55O1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5zaXplLnkgPiBtaW5NYXgubWF4LnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5tYXgueSAtIHRhcmdldC5zaXplLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFNwaGVyZShtaW5NYXg6IE1pbk1heCwgc3BoZXJlOiBTcGhlcmUpOiBTaW1wbGVWZWN0b3IyIHtcclxuICAgIGNvbnN0IHJlc3VsdCAgICAgPSB7Li4uc3BoZXJlLmNlbnRlcn07XHJcbiAgICBjb25zdCBoYWxmUmFkaXVzID0gc3BoZXJlLnJhZGl1cyAvIDI7XHJcblxyXG4gICAgaWYgKHNwaGVyZS5jZW50ZXIueCAtIGhhbGZSYWRpdXMgPCBtaW5NYXgubWluLngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5taW4ueCArIGhhbGZSYWRpdXM7XHJcbiAgICB9IGVsc2UgaWYgKHNwaGVyZS5jZW50ZXIueCArIGhhbGZSYWRpdXMgPiBtaW5NYXgubWF4LngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5tYXgueCAtIGhhbGZSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNwaGVyZS5jZW50ZXIueSAtIGhhbGZSYWRpdXMgPCBtaW5NYXgubWluLnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5taW4ueSArIGhhbGZSYWRpdXM7XHJcbiAgICB9IGVsc2UgaWYgKHNwaGVyZS5jZW50ZXIueSArIGhhbGZSYWRpdXMgPiBtaW5NYXgubWF4LnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5tYXgueSAtIGhhbGZSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lMmRDbG9zZXN0KFxyXG4gICAgc3gxOiBudW1iZXIsXHJcbiAgICBzeTE6IG51bWJlcixcclxuICAgIHN4MjogbnVtYmVyLFxyXG4gICAgc3kyOiBudW1iZXIsXHJcbiAgICBweDogbnVtYmVyLFxyXG4gICAgcHk6IG51bWJlcixcclxuKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IHhEZWx0YSA9IHN4MiAtIHN4MTtcclxuICAgIGNvbnN0IHlEZWx0YSA9IHN5MiAtIHN5MTtcclxuXHJcbiAgICBjb25zdCB1ID0gKChweCAtIHN4MSkgKiB4RGVsdGEgKyAocHkgLSBzeTEpICogeURlbHRhKSAvICh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEpO1xyXG5cclxuICAgIGlmICh1IDwgMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MSxcclxuICAgICAgICAgICAgeTogc3kxLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHUgPiAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogc3gyLFxyXG4gICAgICAgICAgICB5OiBzeTIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHN4MSArIHUgKiB4RGVsdGEsXHJcbiAgICAgICAgeTogc3kxICsgdSAqIHlEZWx0YSxcclxuICAgIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjMgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0UG9pbnRPbkxpbmUoXHJcbiAgICBzeDE6IG51bWJlcixcclxuICAgIHN5MTogbnVtYmVyLFxyXG4gICAgc3oxOiBudW1iZXIsXHJcbiAgICBzeDI6IG51bWJlcixcclxuICAgIHN5MjogbnVtYmVyLFxyXG4gICAgc3oyOiBudW1iZXIsXHJcbiAgICBweDogbnVtYmVyLFxyXG4gICAgcHk6IG51bWJlcixcclxuICAgIHB6OiBudW1iZXIsXHJcbik6IFNpbXBsZVZlY3RvcjMge1xyXG4gICAgY29uc3QgeERlbHRhID0gc3gyIC0gc3gxO1xyXG4gICAgY29uc3QgeURlbHRhID0gc3kyIC0gc3kxO1xyXG4gICAgY29uc3QgekRlbHRhID0gc3oyIC0gc3oxO1xyXG5cclxuICAgIGxldCB1ID0gKChweCAtIHN4MSkgKiB4RGVsdGEgKyAocHkgLSBzeTEpICogeURlbHRhICsgKHB6IC0gc3oxKSAqIHpEZWx0YSk7XHJcbiAgICB1IC89ICh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEgKyB6RGVsdGEgKiB6RGVsdGEpO1xyXG5cclxuICAgIGlmICh1IDwgMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MSxcclxuICAgICAgICAgICAgeTogc3kxLFxyXG4gICAgICAgICAgICB6OiBzejEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh1ID4gMSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MixcclxuICAgICAgICAgICAgeTogc3kyLFxyXG4gICAgICAgICAgICB6OiBzejIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHN4MSArIHUgKiB4RGVsdGEsXHJcbiAgICAgICAgeTogc3kxICsgdSAqIHlEZWx0YSxcclxuICAgICAgICB6OiBzejEgKyB1ICogekRlbHRhLFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBwb2ludFBvaW50MmREaXN0YW5jZSB9IGZyb20gXCIuL2Rpc3RhbmNlcy0yZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZVJlY3QyZENvbGxpc2lvbihcclxuICAgIGNQb3NYOiBudW1iZXIsXHJcbiAgICBjUG9zWTogbnVtYmVyLFxyXG4gICAgY1JhZGl1czogbnVtYmVyLFxyXG4gICAgclBvc1g6IG51bWJlcixcclxuICAgIHJQb3NZOiBudW1iZXIsXHJcbiAgICByU2l6ZVg6IG51bWJlcixcclxuICAgIHJTaXplWTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNpcmNsZURpc3RhbmNlWCA9IE1hdGguYWJzKGNQb3NYIC0gclBvc1gpO1xyXG4gICAgY29uc3QgY2lyY2xlRGlzdGFuY2VZID0gTWF0aC5hYnMoY1Bvc1kgLSByUG9zWSk7XHJcblxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWCA+IHJTaXplWCAvIDIgKyBjUmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWSA+IHJTaXplWSAvIDIgKyBjUmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaXJjbGVEaXN0YW5jZVggPD0gclNpemVYIC8gMikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWSA8PSByU2l6ZVkgLyAyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ybmVyRGlzdGFuY2VTUSA9XHJcbiAgICAgICAgICAgICAgTWF0aC5wb3coY2lyY2xlRGlzdGFuY2VYIC0gclBvc1ggLyAyLCAyKSArXHJcbiAgICAgICAgICAgICAgTWF0aC5wb3coY2lyY2xlRGlzdGFuY2VZIC0gclBvc1kgLyAyLCAyKTtcclxuXHJcbiAgICByZXR1cm4gY29ybmVyRGlzdGFuY2VTUSA8PSBNYXRoLnBvdyhjUmFkaXVzLCAyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVSZWN0YW5nbGUyZENvbGxpc2lvbihcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVg6IG51bWJlcixcclxuICAgIGJTaXplWTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFJlY3QyZENvbGxpc2lvbihhU3RhcnRYLCBhU3RhcnRZLCBiUG9zWCwgYlBvc1ksIGJTaXplWCwgYlNpemVZKSB8fFxyXG4gICAgICAgIHBvaW50UmVjdDJkQ29sbGlzaW9uKGFFbmRYLCBhRW5kWSwgYlBvc1gsIGJQb3NZLCBiU2l6ZVgsIGJTaXplWSkgfHxcclxuICAgICAgICBsaW5lTGluZTJkQ29sbGlzaW9uKGFTdGFydFgsXHJcbiAgICAgICAgICAgIGFTdGFydFksXHJcbiAgICAgICAgICAgIGFFbmRYLFxyXG4gICAgICAgICAgICBhRW5kWSxcclxuICAgICAgICAgICAgYlBvc1gsXHJcbiAgICAgICAgICAgIGJQb3NZLFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCxcclxuICAgICAgICAgICAgYlBvc1kgKyBiU2l6ZVkpIHx8XHJcbiAgICAgICAgbGluZUxpbmUyZENvbGxpc2lvbihhU3RhcnRYLFxyXG4gICAgICAgICAgICBhU3RhcnRZLFxyXG4gICAgICAgICAgICBhRW5kWCxcclxuICAgICAgICAgICAgYUVuZFksXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLFxyXG4gICAgICAgICAgICBiUG9zWSxcclxuICAgICAgICAgICAgYlBvc1gsXHJcbiAgICAgICAgICAgIGJQb3NZICsgYlNpemVZKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lTGluZTJkQ29sbGlzaW9uKFxyXG4gICAgYVN0YXJ0WDogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WTogbnVtYmVyLFxyXG4gICAgYUVuZFg6IG51bWJlcixcclxuICAgIGFFbmRZOiBudW1iZXIsXHJcbiAgICBiU3RhcnRYOiBudW1iZXIsXHJcbiAgICBiU3RhcnRZOiBudW1iZXIsXHJcbiAgICBiRW5kWDogbnVtYmVyLFxyXG4gICAgYkVuZFk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcblxyXG4gICAgY29uc3QgZGVub21pbmF0b3IgPSAoYUVuZFggLSBhU3RhcnRYKSAqIChiRW5kWSAtIGJTdGFydFkpIC0gKGFFbmRZIC0gYVN0YXJ0WSkgKiAoYkVuZFggLSBiU3RhcnRYKTtcclxuICAgIGNvbnN0IG51bWVyYXRvcjEgID0gKGFTdGFydFkgLSBiU3RhcnRZKSAqIChiRW5kWCAtIGJTdGFydFgpIC0gKGFTdGFydFggLSBiU3RhcnRYKSAqIChiRW5kWSAtIGJTdGFydFkpO1xyXG4gICAgY29uc3QgbnVtZXJhdG9yMiAgPSAoYVN0YXJ0WSAtIGJTdGFydFkpICogKGFFbmRYIC0gYVN0YXJ0WCkgLSAoYVN0YXJ0WCAtIGJTdGFydFgpICogKGFFbmRZIC0gYVN0YXJ0WSk7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGNvaW5jaWRlbnQgbGluZXMgKGhhcyBhIHByb2JsZW0sIHJlYWQgYmVsb3cpXHJcbiAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVtZXJhdG9yMSA9PT0gMCAmJiBudW1lcmF0b3IyID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHIgPSBudW1lcmF0b3IxIC8gZGVub21pbmF0b3I7XHJcbiAgICBjb25zdCBzID0gbnVtZXJhdG9yMiAvIGRlbm9taW5hdG9yO1xyXG5cclxuICAgIHJldHVybiByID49IDAgJiYgciA8PSAxICYmIChzID49IDAgJiYgcyA8PSAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF3OiBudW1iZXIsXHJcbiAgICBhaDogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBidzogbnVtYmVyLFxyXG4gICAgYmg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYnggKyBidyA+PSBheCAmJiBieSArIGJoID49IGF5ICYmIGJ4IDw9IGF4ICsgYXcgJiYgYnkgPD0gYXkgKyBhaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBhUmFkaXVzOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRQb2ludDJkRGlzdGFuY2UoYVgsIGFZLCBiWCwgYlkpIDw9IGFSYWRpdXMgKyBiUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBwb2ludFg6IG51bWJlcixcclxuICAgIHBvaW50WTogbnVtYmVyLFxyXG4gICAgcmVjdFg6IG51bWJlcixcclxuICAgIHJlY3RZOiBudW1iZXIsXHJcbiAgICByZWN0VzogbnVtYmVyLFxyXG4gICAgcmVjdEg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IHJlY3RYICYmXHJcbiAgICAgICAgcG9pbnRZID49IHJlY3RZICYmXHJcbiAgICAgICAgcG9pbnRYIDw9IHJlY3RYICsgcmVjdFcgJiZcclxuICAgICAgICBwb2ludFkgPD0gcmVjdFkgKyByZWN0SDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UmVjdE1pbk1heDJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIG1pblg6IG51bWJlcixcclxuICAgIG1pblk6IG51bWJlcixcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IG1pblggJiZcclxuICAgICAgICBwb2ludFkgPj0gbWluWSAmJlxyXG4gICAgICAgIHBvaW50WCA8PSBtYXhYICYmXHJcbiAgICAgICAgcG9pbnRZIDw9IG1heFk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludENpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIGNpcmNsZVg6IG51bWJlcixcclxuICAgIGNpcmNsZVk6IG51bWJlcixcclxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFBvaW50MmREaXN0YW5jZShwb2ludFgsIHBvaW50WSwgY2lyY2xlWCwgY2lyY2xlWSkgPD0gY2lyY2xlUmFkaXVzO1xyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aFwiO1xyXG5pbXBvcnQgeyBnZXRDbG9zZXN0UG9pbnRPbkxpbmUgfSBmcm9tIFwiLi9jbG9zZXN0LTNkXCI7XHJcbmltcG9ydCB7IHBvaW50UG9pbnQyZERpc3RhbmNlIH0gZnJvbSBcIi4vZGlzdGFuY2VzLTJkXCI7XHJcbmltcG9ydCB7IHBvaW50TGluZTNkRGlzdGFuY2UsIHBvaW50UG9pbnQzZERpc3RhbmNlIH0gZnJvbSBcIi4vZGlzdGFuY2VzLTNkXCI7XHJcbmltcG9ydCB7IHZlY3RvclNxdWFyZUludGVyc2VjdDNkIH0gZnJvbSBcIi4vaW50ZXJzZWN0cy0zZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaGVyZVNwaGVyZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGFSYWRpdXM6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkaXN0ID0gcG9pbnRQb2ludDNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieik7XHJcblxyXG4gICAgcmV0dXJuIGRpc3QgPD0gYVJhZGl1cyArIGJSYWRpdXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFNwaGVyZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkaXN0ID0gcG9pbnRQb2ludDNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieik7XHJcblxyXG4gICAgcmV0dXJuIGRpc3QgPD0gYlJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTcGhlcmUoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBzeDogbnVtYmVyLFxyXG4gICAgc3k6IG51bWJlcixcclxuICAgIHN6OiBudW1iZXIsXHJcbiAgICBzcjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludExpbmUzZERpc3RhbmNlKGF4LCBheSwgYXosIGJ4LCBieSwgYnosIHN4LCBzeSwgc3opIDwgc3I7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEludGVyc2VjdGlvblR5cGUge1xyXG4gICAgT1VUU0lERSAgICAgICAgICA9IFwiT1VUU0lERVwiLFxyXG4gICAgSU5TSURFICAgICAgICAgICA9IFwiSU5TSURFXCIsXHJcbiAgICBPTkVfSU5URVJTRUNUSU9OID0gXCJPTkVfSU5URVJTRUNUSU9OXCIsXHJcbiAgICBUV09fSU5URVJTRUNUSU9OID0gXCJUV09fSU5URVJTRUNUSU9OXCIsXHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVCb3gyKFxyXG4gICAgcDBYOiBudW1iZXIsXHJcbiAgICBwMFk6IG51bWJlcixcclxuICAgIHAwWjogbnVtYmVyLFxyXG4gICAgcDFYOiBudW1iZXIsXHJcbiAgICBwMVk6IG51bWJlcixcclxuICAgIHAxWjogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWluWjogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4gICAgbWF4WjogbnVtYmVyLFxyXG4gICAgcmVzdWx0OiBTaW1wbGVWZWN0b3IyLFxyXG4pOiBJbnRlcnNlY3Rpb25UeXBlIHtcclxuICAgIGNvbnN0IGRpclggICAgPSBwMVggLSBwMFg7XHJcbiAgICBjb25zdCBkaXJZICAgID0gcDFZIC0gcDBZO1xyXG4gICAgY29uc3QgZGlyWiAgICA9IHAxWiAtIHAwWjtcclxuICAgIGNvbnN0IGludkRpclggPSAxIC8gZGlyWDtcclxuICAgIGNvbnN0IGludkRpclkgPSAxIC8gZGlyWTtcclxuICAgIGNvbnN0IGludkRpclogPSAxIC8gZGlyWjtcclxuXHJcbiAgICBsZXQgdE5lYXI7XHJcbiAgICBsZXQgdEZhcjtcclxuICAgIGxldCB0eW1pbjtcclxuICAgIGxldCB0eW1heDtcclxuICAgIGxldCB0em1pbjtcclxuICAgIGxldCB0em1heDtcclxuXHJcbiAgICBpZiAoaW52RGlyWCA+PSAwKSB7XHJcbiAgICAgICAgdE5lYXIgPSAobWluWCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgICAgIHRGYXIgID0gKG1heFggLSBwMFgpICogaW52RGlyWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdE5lYXIgPSAobWF4WCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgICAgIHRGYXIgID0gKG1pblggLSBwMFgpICogaW52RGlyWDtcclxuICAgIH1cclxuICAgIGlmIChpbnZEaXJZID49IDApIHtcclxuICAgICAgICB0eW1pbiA9IChtaW5ZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICAgICAgdHltYXggPSAobWF4WSAtIHAwWSkgKiBpbnZEaXJZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eW1pbiA9IChtYXhZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICAgICAgdHltYXggPSAobWluWSAtIHAwWSkgKiBpbnZEaXJZO1xyXG4gICAgfVxyXG4gICAgaWYgKHROZWFyID4gdHltYXggfHwgdHltaW4gPiB0RmFyKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIH1cclxuICAgIGlmIChpbnZEaXJaID49IDApIHtcclxuICAgICAgICB0em1pbiA9IChtaW5aIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICAgICAgdHptYXggPSAobWF4WiAtIHAwWikgKiBpbnZEaXJaO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0em1pbiA9IChtYXhaIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICAgICAgdHptYXggPSAobWluWiAtIHAwWikgKiBpbnZEaXJaO1xyXG4gICAgfVxyXG4gICAgaWYgKHROZWFyID4gdHptYXggfHwgdHptaW4gPiB0RmFyKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIH1cclxuICAgIHROZWFyICAgID0gdHltaW4gPiB0TmVhciB8fCBpc05hTih0TmVhcikgPyB0eW1pbiA6IHROZWFyO1xyXG4gICAgdEZhciAgICAgPSB0eW1heCA8IHRGYXIgfHwgaXNOYU4odEZhcikgPyB0eW1heCA6IHRGYXI7XHJcbiAgICB0TmVhciAgICA9IHR6bWluID4gdE5lYXIgPyB0em1pbiA6IHROZWFyO1xyXG4gICAgdEZhciAgICAgPSB0em1heCA8IHRGYXIgPyB0em1heCA6IHRGYXI7XHJcbiAgICBsZXQgdHlwZSA9IEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIGlmICh0TmVhciA8IHRGYXIgJiYgdE5lYXIgPD0gMSAmJiB0RmFyID49IDApIHtcclxuICAgICAgICBpZiAodE5lYXIgPiAwICYmIHRGYXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHRGYXIgPSB0TmVhcjtcclxuICAgICAgICAgICAgdHlwZSA9IEludGVyc2VjdGlvblR5cGUuT05FX0lOVEVSU0VDVElPTjtcclxuICAgICAgICB9IGVsc2UgaWYgKHROZWFyIDwgMCAmJiB0RmFyIDwgMSkge1xyXG4gICAgICAgICAgICB0TmVhciA9IHRGYXI7XHJcbiAgICAgICAgICAgIHR5cGUgID0gSW50ZXJzZWN0aW9uVHlwZS5PTkVfSU5URVJTRUNUSU9OO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodE5lYXIgPCAwICYmIHRGYXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBJbnRlcnNlY3Rpb25UeXBlLklOU0lERTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlID0gSW50ZXJzZWN0aW9uVHlwZS5UV09fSU5URVJTRUNUSU9OO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQueCA9IHROZWFyO1xyXG4gICAgICAgIHJlc3VsdC55ID0gdEZhcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Qm94KFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYVdpZHRoOiBudW1iZXIsXHJcbiAgICBhSGVpZ2h0OiBudW1iZXIsXHJcbiAgICBhRGVwdGg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYXggPCBieCAmJiBheCArIGFXaWR0aCA+IGJ4ICYmXHJcbiAgICAgICAgYXkgPCBieSAmJiBheSArIGFIZWlnaHQgPiBieSAmJlxyXG4gICAgICAgIGF6IDwgYnogJiYgYXogKyBhRGVwdGggPiBiejtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Qm94TWluTWF4KFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWluWjogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4gICAgbWF4WjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBiUG9zWCA+PSBtaW5YICYmIGJQb3NZID49IG1pblkgJiYgYlBvc1ogPj0gbWluWiAmJlxyXG4gICAgICAgIGJQb3NYIDw9IG1heFggJiYgYlBvc1kgPj0gbWluWSAmJiBiUG9zWiA8PSBtYXhaO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUJveChcclxuICAgIGExeDogbnVtYmVyLFxyXG4gICAgYTF5OiBudW1iZXIsXHJcbiAgICBhMXo6IG51bWJlcixcclxuICAgIGEyeDogbnVtYmVyLFxyXG4gICAgYTJ5OiBudW1iZXIsXHJcbiAgICBhMno6IG51bWJlcixcclxuICAgIGJQb3NYOiBudW1iZXIsXHJcbiAgICBiUG9zWTogbnVtYmVyLFxyXG4gICAgYlBvc1o6IG51bWJlcixcclxuICAgIGJTaXplWDogbnVtYmVyLFxyXG4gICAgYlNpemVZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVosXHJcbiAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiAtIGJTaXplWixcclxuICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKSB8fFxyXG4gICAgICAgIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKGExeCwgYTF5LCBhMXosXHJcbiAgICAgICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSAtIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSAtIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiAtIGJTaXplWikgfHxcclxuICAgICAgICB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZChhMXgsIGExeSwgYTF6LFxyXG4gICAgICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKSB8fFxyXG4gICAgICAgIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKGExeCwgYTF5LCBhMXosXHJcbiAgICAgICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiAtIGJTaXplWik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lU3BoZXJlMihcclxuICAgIHAwWDogbnVtYmVyLFxyXG4gICAgcDBZOiBudW1iZXIsXHJcbiAgICBwMFo6IG51bWJlcixcclxuICAgIHAxWDogbnVtYmVyLFxyXG4gICAgcDFZOiBudW1iZXIsXHJcbiAgICBwMVo6IG51bWJlcixcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlcixcclxuICAgIGNlbnRlclo6IG51bWJlcixcclxuICAgIHJhZGl1c1NxdWFyZWQ6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZFggICAgPSBwMVggLSBwMFg7XHJcbiAgICBsZXQgZFkgICAgPSBwMVkgLSBwMFk7XHJcbiAgICBsZXQgZFogICAgPSBwMVogLSBwMFo7XHJcbiAgICBjb25zdCBub20gPSAoY2VudGVyWCAtIHAwWCkgKiBkWCArIChjZW50ZXJZIC0gcDBZKSAqIGRZICsgKGNlbnRlclogLSBwMFopICogZFo7XHJcbiAgICBjb25zdCBkZW4gPSBkWCAqIGRYICsgZFkgKiBkWSArIGRaICogZFo7XHJcbiAgICBjb25zdCB1ICAgPSBub20gLyBkZW47XHJcbiAgICBpZiAodSA8IDApIHtcclxuICAgICAgICBkWCA9IHAwWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgPSBwMFkgLSBjZW50ZXJZO1xyXG4gICAgICAgIGRaID0gcDBaIC0gY2VudGVyWjtcclxuICAgIH0gZWxzZSBpZiAodSA+IDEpIHtcclxuICAgICAgICBkWCA9IHAxWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgPSBwMVkgLSBjZW50ZXJZO1xyXG4gICAgICAgIGRaID0gcDFaIC0gY2VudGVyWjtcclxuICAgIH0gZWxzZSB7IC8vIGhhcyB0byBiZSA+PSAwIGFuZCA8PSAxXHJcbiAgICAgICAgY29uc3QgcFggPSBwMFggKyB1ICogZFg7XHJcbiAgICAgICAgY29uc3QgcFkgPSBwMFkgKyB1ICogZFk7XHJcbiAgICAgICAgY29uc3QgcFogPSBwMFogKyB1ICogZFo7XHJcbiAgICAgICAgZFggICAgICAgPSBwWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgICAgICAgPSBwWSAtIGNlbnRlclk7XHJcbiAgICAgICAgZFogICAgICAgPSBwWiAtIGNlbnRlclo7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXN0ID0gZFggKiBkWCArIGRZICogZFkgKyBkWiAqIGRaO1xyXG5cclxuICAgIHJldHVybiBkaXN0IDw9IHJhZGl1c1NxdWFyZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib3hCb3goXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBhdzogbnVtYmVyLFxyXG4gICAgYWg6IG51bWJlcixcclxuICAgIGFkOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBidzogbnVtYmVyLFxyXG4gICAgYmg6IG51bWJlcixcclxuICAgIGJkOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGF4ICsgYXcgPiBieCAmJiBieCArIGJ3ID4gYXggJiZcclxuICAgICAgICBheSArIGFoID4gYnkgJiYgYnkgKyBiaCA+IGF5ICYmXHJcbiAgICAgICAgYXogKyBhZCA+IGJ6ICYmIGJ6ICsgYmQgPiBhejtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50RWxsaXBzb2lkKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgYlNpemVYOiBudW1iZXIsXHJcbiAgICBiU2l6ZVk6IG51bWJlcixcclxuICAgIGJTaXplWjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFwb3NOZXdYID0gYXggLSBiUG9zWDtcclxuICAgIGNvbnN0IGFwb3NOZXdZID0gYXkgLSBiUG9zWTtcclxuICAgIGNvbnN0IGFwb3NOZXdaID0gYXogLSBiUG9zWjtcclxuXHJcbiAgICBjb25zdCB4YSA9IChhcG9zTmV3WCAqIGFwb3NOZXdYKSAvIChiU2l6ZVggKiBiU2l6ZVgpO1xyXG4gICAgY29uc3QgeWIgPSAoYXBvc05ld1kgKiBhcG9zTmV3WSkgLyAoYlNpemVZICogYlNpemVZKTtcclxuICAgIGNvbnN0IHpjID0gKGFwb3NOZXdaICogYXBvc05ld1opIC8gKGJTaXplWiAqIGJTaXplWik7XHJcblxyXG4gICAgcmV0dXJuIHhhICsgeWIgKyB6YyA8PSAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUVsbGlwc29pZChcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFTdGFydFo6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYUVuZFo6IG51bWJlcixcclxuICAgIGJQb3NYOiBudW1iZXIsXHJcbiAgICBiUG9zWTogbnVtYmVyLFxyXG4gICAgYlBvc1o6IG51bWJlcixcclxuICAgIGJTaXplWDogbnVtYmVyLFxyXG4gICAgYlNpemVZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwb2ludCA9IGdldENsb3Nlc3RQb2ludE9uTGluZShcclxuICAgICAgICBhU3RhcnRYLFxyXG4gICAgICAgIGFTdGFydFksXHJcbiAgICAgICAgYVN0YXJ0WixcclxuICAgICAgICBhRW5kWCxcclxuICAgICAgICBhRW5kWSxcclxuICAgICAgICBhRW5kWixcclxuICAgICAgICBiUG9zWCxcclxuICAgICAgICBiUG9zWSxcclxuICAgICAgICBiUG9zWixcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHBvaW50RWxsaXBzb2lkKHBvaW50LngsIHBvaW50LnksIHBvaW50LnosIGJQb3NYLCBiUG9zWSwgYlBvc1osIGJTaXplWCwgYlNpemVZLCBiU2l6ZVopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDeWxpbmRlcihcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuICAgIGJIZWlnaHQ6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb25kaXRpb25PbmUgPSBheSA+IGJ5ICYmIGF5IDwgYnkgKyBiSGVpZ2h0O1xyXG4gICAgY29uc3QgY29uZGl0aW9uVHdvID0gcG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF6LCBieCwgYnopIDwgYlJhZGl1cztcclxuXHJcbiAgICByZXR1cm4gY29uZGl0aW9uT25lICYmIGNvbmRpdGlvblR3bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaGVyZUN5bGluZGVyKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYVJhZGl1czogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYlJhZGl1czogbnVtYmVyLFxyXG4gICAgYkhlaWdodDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbk9uZSA9IGF5ICsgYVJhZGl1cyA+IGJ5ICYmIGF5IC0gYVJhZGl1cyA8IGJ5ICsgYkhlaWdodDtcclxuICAgIGNvbnN0IGNvbmRpdGlvblR3byA9IHBvaW50UG9pbnQyZERpc3RhbmNlKGF4LCBheiwgYngsIGJ6KSA8IGFSYWRpdXMgKyBiUmFkaXVzO1xyXG5cclxuICAgIHJldHVybiBjb25kaXRpb25PbmUgJiYgY29uZGl0aW9uVHdvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdFNwaGVyZUJveE1pbk1heChcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlcixcclxuICAgIGNlbnRlclo6IG51bWJlcixcclxuICAgIHJhZGl1c1NxdWFyZWQ6IG51bWJlcixcclxuICAgIG1pblg6IG51bWJlcixcclxuICAgIG1pblk6IG51bWJlcixcclxuICAgIG1pblo6IG51bWJlcixcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuICAgIG1heFo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcmFkaXVzMiA9IHJhZGl1c1NxdWFyZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBYIC0gbWluXHJcbiAgICAgKiBZIC0gbWF4XHJcbiAgICAgKiBaIC0gY2VudGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZ1bmMgICA9ICh2YWw6IFZlY3RvcjMpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGxldCBkID0gMDtcclxuICAgICAgICBpZiAodmFsLnogPCB2YWwueCkge1xyXG4gICAgICAgICAgICBkID0gdmFsLnogLSB2YWwueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbC56ID4gdmFsLnkpIHtcclxuICAgICAgICAgICAgZCA9IHZhbC56IC0gdmFsLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZCAqIGQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFZlY3RvcjMoKTtcclxuICAgIHJhZGl1czIgLT0gZnVuYyhwYXJhbXMuc2V0RGF0YShtaW5YLCBtYXhYLCBjZW50ZXJYKSk7XHJcbiAgICByYWRpdXMyIC09IGZ1bmMocGFyYW1zLnNldERhdGEobWluWSwgbWF4WSwgY2VudGVyWSkpO1xyXG4gICAgcmFkaXVzMiAtPSBmdW5jKHBhcmFtcy5zZXREYXRhKG1pblosIG1heFosIGNlbnRlclopKTtcclxuXHJcbiAgICByZXR1cm4gcmFkaXVzMiA+PSAwO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50MmREaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UG9pbnRTcXIyZERpc3RhbmNlKGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZGlzdFggPSBheCAtIGJ4O1xyXG4gICAgY29uc3QgZGlzdFkgPSBheSAtIGJ5O1xyXG5cclxuICAgIHJldHVybiBkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZTJkRGlzdGFuY2UoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGFyOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIgLSBhciwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVDaXJjbGVTcXIyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhcjogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBicjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KHBvaW50UG9pbnRTcXIyZERpc3RhbmNlKGF4LCBheSwgYngsIGJ5KSAtIGJyIC0gYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDaXJjbGUyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIsIDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDaXJjbGVTcXIyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIsIDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lMmREaXN0YW5jZShcclxuICAgIGFYOiBudW1iZXIsXHJcbiAgICBhWTogbnVtYmVyLFxyXG4gICAgYlg6IG51bWJlcixcclxuICAgIGJZOiBudW1iZXIsXHJcbiAgICBwWDogbnVtYmVyLFxyXG4gICAgcFk6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRMaW5lU3FyMmREaXN0YW5jZShhWCwgYVksIGJYLCBiWSwgcFgsIHBZKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludExpbmVTcXIyZERpc3RhbmNlKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIHBYOiBudW1iZXIsXHJcbiAgICBwWTogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3QgQSA9IHBYIC0gYVg7XHJcbiAgICBjb25zdCBCID0gcFkgLSBhWTtcclxuICAgIGNvbnN0IEMgPSBiWCAtIGFYO1xyXG4gICAgY29uc3QgRCA9IGJZIC0gYVk7XHJcblxyXG4gICAgY29uc3QgZG90ICAgICAgICAgID0gQSAqIEMgKyBCICogRDtcclxuICAgIGNvbnN0IGxlbmd0aFNxdWFyZSA9IEMgKiBDICsgRCAqIEQ7XHJcbiAgICBsZXQgcGFyYW0gICAgICAgICAgPSAtMTtcclxuICAgIGlmIChsZW5ndGhTcXVhcmUgIT09IDApIHtcclxuICAgICAgICBwYXJhbSA9IGRvdCAvIGxlbmd0aFNxdWFyZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeHg6IG51bWJlcjtcclxuICAgIGxldCB5eTogbnVtYmVyO1xyXG5cclxuICAgIGlmIChwYXJhbSA8IDApIHtcclxuICAgICAgICB4eCA9IGFYO1xyXG4gICAgICAgIHl5ID0gYVk7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtID4gMSkge1xyXG4gICAgICAgIHh4ID0gYlg7XHJcbiAgICAgICAgeXkgPSBiWTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeHggPSBhWCArIHBhcmFtICogQztcclxuICAgICAgICB5eSA9IGFZICsgcGFyYW0gKiBEO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGR4ID0gcFggLSB4eDtcclxuICAgIGNvbnN0IGR5ID0gcFkgLSB5eTtcclxuXHJcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIi4uL21hdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50M2REaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBhejogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyLCBiejogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRQb2ludFNxcjNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRQb2ludFNxcjNkRGlzdGFuY2UoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYXo6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlciwgYno6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaXN0WCA9IGF4IC0gYng7XHJcbiAgICBjb25zdCBkaXN0WSA9IGF5IC0gYnk7XHJcbiAgICBjb25zdCBkaXN0WiA9IGF6IC0gYno7XHJcblxyXG4gICAgcmV0dXJuIGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZICsgZGlzdFogKiBkaXN0WjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50TGluZTNkRGlzdGFuY2UoXHJcbiAgICBhU3RhcnRYOiBudW1iZXIsXHJcbiAgICBhU3RhcnRZOiBudW1iZXIsXHJcbiAgICBhU3RhcnRaOiBudW1iZXIsXHJcbiAgICBhRW5kWDogbnVtYmVyLFxyXG4gICAgYUVuZFk6IG51bWJlcixcclxuICAgIGFFbmRaOiBudW1iZXIsXHJcbiAgICBiQ2VudGVyWDogbnVtYmVyLFxyXG4gICAgYkNlbnRlclk6IG51bWJlcixcclxuICAgIGJDZW50ZXJaOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBhU3ViQnggPSBhU3RhcnRYIC0gYUVuZFg7XHJcbiAgICBjb25zdCBhU3ViQnkgPSBhU3RhcnRZIC0gYUVuZFk7XHJcbiAgICBjb25zdCBhU3ViQnogPSBhU3RhcnRaIC0gYUVuZFo7XHJcbiAgICBjb25zdCBwU3ViQnggPSBiQ2VudGVyWCAtIGFFbmRYO1xyXG4gICAgY29uc3QgcFN1YkJ5ID0gYkNlbnRlclkgLSBhRW5kWTtcclxuICAgIGNvbnN0IHBTdWJCeiA9IGJDZW50ZXJaIC0gYUVuZFo7XHJcbiAgICBjb25zdCBkb3RBICAgPSBhU3ViQnggKiBwU3ViQnggKyBhU3ViQnkgKiBwU3ViQnkgKyBhU3ViQnogKiBwU3ViQno7XHJcbiAgICBpZiAoZG90QSA8IDApIHtcclxuICAgICAgICByZXR1cm4gcG9pbnRQb2ludDNkRGlzdGFuY2UoYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWiwgYUVuZFgsIGFFbmRZLCBhRW5kWik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYlN1YkF4ID0gYUVuZFggLSBhU3RhcnRYO1xyXG4gICAgY29uc3QgYlN1YkF5ID0gYUVuZFkgLSBhU3RhcnRZO1xyXG4gICAgY29uc3QgYlN1YkF6ID0gYUVuZFogLSBhU3RhcnRaO1xyXG4gICAgY29uc3QgcFN1YkF4ID0gYkNlbnRlclggLSBhU3RhcnRYO1xyXG4gICAgY29uc3QgcFN1YkF5ID0gYkNlbnRlclkgLSBhU3RhcnRZO1xyXG4gICAgY29uc3QgcFN1YkF6ID0gYkNlbnRlclogLSBhU3RhcnRaO1xyXG4gICAgY29uc3QgZG90QiAgID0gYlN1YkF4ICogcFN1YkF4ICsgYlN1YkF5ICogcFN1YkF5ICsgYlN1YkF6ICogcFN1YkF6O1xyXG4gICAgaWYgKGRvdEIgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50UG9pbnQzZERpc3RhbmNlKGJDZW50ZXJYLCBiQ2VudGVyWSwgYkNlbnRlclosIGFTdGFydFgsIGFTdGFydFksIGFTdGFydFopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2ZWN0b3JQb2ludDNkRGlzdGFuY2UoYVN0YXJ0WCwgYVN0YXJ0WSwgYVN0YXJ0WiwgYUVuZFgsIGFFbmRZLCBhRW5kWiwgYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludE5vcm1hbFBsYW5lM2REaXN0YW5jZShhTm9ybWFsOiBWZWN0b3IzLCBhUG9pbnQ6IFZlY3RvcjMsIGJQb2ludDogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkID0gLVZlY3RvcjMubXVsKGFOb3JtYWwsIGFQb2ludCkuc3VtKCk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguYWJzKChWZWN0b3IzLm11bChhTm9ybWFsLCBiUG9pbnQpLnN1bSgpICsgZCkgLyBNYXRoLnNxcnQoVmVjdG9yMy5tdWwoYU5vcm1hbCwgYU5vcm1hbCkuc3VtKCkpKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvaW50UGxhbmUoVmVjdG9yMyBhMSwgVmVjdG9yMyBhMiwgVmVjdG9yMyBhMywgVmVjdG9yMyBiUG9pbnQpIHtcclxuLy8gICAgIHJldHVybiBwb2ludFBsYW5lKGEzLnN1YihhMikuY3Jvc3MoYTEuc3ViKGEyKSksIGExLCBiUG9pbnQpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjdG9yUG9pbnQzZERpc3RhbmNlKFxyXG4gICAgc3RhcnRYOiBudW1iZXIsXHJcbiAgICBzdGFydFk6IG51bWJlcixcclxuICAgIHN0YXJ0WjogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyLFxyXG4gICAgZW5kWjogbnVtYmVyLFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIHBvaW50WjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc3RhcnRTdWJFbmRYID0gc3RhcnRYIC0gZW5kWDtcclxuICAgIGNvbnN0IHN0YXJ0U3ViRW5kWSA9IHN0YXJ0WSAtIGVuZFk7XHJcbiAgICBjb25zdCBzdGFydFN1YkVuZFogPSBzdGFydFogLSBlbmRaO1xyXG5cclxuICAgIGNvbnN0IGVuZFN1YlBvaW50WCA9IGVuZFggLSBwb2ludFg7XHJcbiAgICBjb25zdCBlbmRTdWJQb2ludFkgPSBlbmRZIC0gcG9pbnRZO1xyXG4gICAgY29uc3QgZW5kU3ViUG9pbnRaID0gZW5kWiAtIHBvaW50WjtcclxuXHJcbiAgICBjb25zdCBjcm9zc1ggPSBzdGFydFN1YkVuZFkgKiBlbmRTdWJQb2ludFogLSBzdGFydFN1YkVuZFogKiBlbmRTdWJQb2ludFk7XHJcbiAgICBjb25zdCBjcm9zc1kgPSBzdGFydFN1YkVuZFogKiBlbmRTdWJQb2ludFggLSBzdGFydFN1YkVuZFggKiBlbmRTdWJQb2ludFo7XHJcbiAgICBjb25zdCBjcm9zc1ogPSBzdGFydFN1YkVuZFggKiBlbmRTdWJQb2ludFkgLSBzdGFydFN1YkVuZFkgKiBlbmRTdWJQb2ludFg7XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoMSA9IE1hdGguc3FydChjcm9zc1ggKiBjcm9zc1ggKyBjcm9zc1kgKiBjcm9zc1kgKyBjcm9zc1ogKiBjcm9zc1opO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IE1hdGguc3FydChzdGFydFN1YkVuZFggKiBzdGFydFN1YkVuZFggKyBzdGFydFN1YkVuZFkgKiBzdGFydFN1YkVuZFkgKyBzdGFydFN1YkVuZFogKiBzdGFydFN1YkVuZFopO1xyXG5cclxuICAgIHJldHVybiBsZW5ndGgxIC8gbGVuZ3RoMjtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jbG9zZXN0LTJkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Nsb3Nlc3QtM2RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sbGlzaW9ucy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsaXNpb25zLTNkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Rpc3RhbmNlcy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kaXN0YW5jZXMtM2RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYm91bmRlcnMtMmRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0c1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnRlcnNlY3RzLTNkXCI7XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjMsIFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKFxyXG4gICAgcjF4OiBudW1iZXIsXHJcbiAgICByMXk6IG51bWJlcixcclxuICAgIHIxejogbnVtYmVyLFxyXG4gICAgcjJ4OiBudW1iZXIsXHJcbiAgICByMnk6IG51bWJlcixcclxuICAgIHIyejogbnVtYmVyLFxyXG4gICAgczF4OiBudW1iZXIsXHJcbiAgICBzMXk6IG51bWJlcixcclxuICAgIHMxejogbnVtYmVyLFxyXG4gICAgczJ4OiBudW1iZXIsXHJcbiAgICBzMnk6IG51bWJlcixcclxuICAgIHMyejogbnVtYmVyLFxyXG4gICAgczN4OiBudW1iZXIsXHJcbiAgICBzM3k6IG51bWJlcixcclxuICAgIHMzejogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZF8yKFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHIxeCwgcjF5LCByMXopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHIyeCwgcjJ5LCByMnopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHMxeCwgczF5LCBzMXopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHMyeCwgczJ5LCBzMnopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHMzeCwgczN5LCBzM3opLFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlY3RvclNxdWFyZUludGVyc2VjdDNkXzIoXHJcbiAgICBSMTogU2ltcGxlVmVjdG9yMyxcclxuICAgIFIyOiBTaW1wbGVWZWN0b3IzLFxyXG4gICAgUzE6IFNpbXBsZVZlY3RvcjMsXHJcbiAgICBTMjogU2ltcGxlVmVjdG9yMyxcclxuICAgIFMzOiBTaW1wbGVWZWN0b3IzLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRTMjEgPSBWZWN0b3IzLnN1YihTMiwgUzEpO1xyXG4gICAgY29uc3QgZFMzMSA9IFZlY3RvcjMuc3ViKFMzLCBTMSk7XHJcbiAgICBjb25zdCBkUiAgID0gVmVjdG9yMy5zdWIoUjEsIFIyKTtcclxuICAgIGNvbnN0IG4gICAgPSBkUzIxLmNyb3NzKGRTMzEpO1xyXG5cclxuICAgIGNvbnN0IG5kb3RkUiA9IG4uZG90KGRSKTtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnMobmRvdGRSKSA8IDFlLTYpIHsgLy8gQ2hvb3NlIHlvdXIgdG9sZXJhbmNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHQgPSAtbi5kb3QoVmVjdG9yMy5zdWIoUjEsIFMxKSkgLyBuZG90ZFI7XHJcbiAgICBjb25zdCBNID0gVmVjdG9yMy5hZGQoUjEsIGRSLm11bCh0KSk7XHJcblxyXG4gICAgY29uc3QgZE1TMSA9IE0uc3ViKFMxKTtcclxuICAgIGNvbnN0IHUgICAgPSBkTVMxLmRvdChkUzIxKTtcclxuICAgIGNvbnN0IHYgICAgPSBkTVMxLmRvdChkUzMxKTtcclxuXHJcbiAgICByZXR1cm4gKHUgPj0gMCAmJiB1IDw9IGRTMjEuZG90KGRTMjEpICYmIHYgPj0gMCAmJiB2IDw9IGRTMzEuZG90KGRTMzEpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcbmltcG9ydCB7IE1pbk1heCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY29udmVydFBvc1NpemVUb01pbk1heCB9IGZyb20gXCIuLi9vYmplY3QtY29udmVydG9yc1wiO1xyXG5pbXBvcnQgeyBTcGhlcmUgfSBmcm9tIFwiLi9zcGhlcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcG9zaXRpb246IFNpbXBsZVZlY3RvcjIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHNpemU6IFNpbXBsZVZlY3RvcjIsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFyZWEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNpcmN1aXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLnggKyB0aGlzLnNpemUueCArIHRoaXMuc2l6ZS55ICsgdGhpcy5zaXplLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvTWluTWF4KCk6IE1pbk1heCB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRQb3NTaXplVG9NaW5NYXgodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tU3BoZXJlKHtyYWRpdXMsIGNlbnRlcn06IFBpY2s8U3BoZXJlLCBcInJhZGl1c1wiIHwgXCJjZW50ZXJcIj4pOiBSZWN0IHtcclxuICAgICAgICByZXR1cm4gUmVjdC5mcm9tTWluTWF4KHtcclxuICAgICAgICAgICAgbWluOiB7XHJcbiAgICAgICAgICAgICAgICB4OiBjZW50ZXIueCAtIHJhZGl1cyxcclxuICAgICAgICAgICAgICAgIHk6IGNlbnRlci55IC0gcmFkaXVzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXg6IHtcclxuICAgICAgICAgICAgICAgIHg6IGNlbnRlci54ICsgcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgeTogY2VudGVyLnkgKyByYWRpdXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tTWluTWF4KHttaW4sIG1heH06IE1pbk1heCk6IFJlY3Qge1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgICAgICAgIHg6IG1heC54IC0gbWluLngsXHJcbiAgICAgICAgICAgIHk6IG1heC55IC0gbWluLnksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KE9iamVjdC5hc3NpZ24oe30sIG1pbiksIHNpemUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuaW1wb3J0IHsgTWluTWF4LCBQb3NTaXplIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UG9zU2l6ZVRvTWluTWF4IH0gZnJvbSBcIi4uL29iamVjdC1jb252ZXJ0b3JzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3BoZXJlIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNlbnRlcjogU2ltcGxlVmVjdG9yMixcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2lyY3VpdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAqIHRoaXMucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXJlYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLlBJICogdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21NaW5NYXgoe21pbiwgbWF4fTogTWluTWF4LCBjaG9vc2VTaXplOiBcIm1pblwiIHwgXCJtYXhcIiA9IFwibWF4XCIpOiBTcGhlcmUge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHtcclxuICAgICAgICAgICAgeDogKG1pbi54ICsgbWF4LngpIC8gMixcclxuICAgICAgICAgICAgeTogKG1pbi55ICsgbWF4LnkpIC8gMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzaXplWCA9IG1heC54IC0gbWluLng7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVkgPSBtYXgueSAtIG1pbi55O1xyXG5cclxuICAgICAgICBjb25zdCByYWRpdXMgPSBjaG9vc2VTaXplID09PSBcIm1pblwiID8gTWF0aC5taW4oc2l6ZVgsIHNpemVZKSA6IE1hdGgubWF4KHNpemVYLCBzaXplWSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgU3BoZXJlKHJhZGl1cywgY2VudGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21Qb3NTaXplKHBvc1NpemU6IFBvc1NpemUsIGNob29zZVNpemU6IFwibWluXCIgfCBcIm1heFwiID0gXCJtYXhcIik6IFNwaGVyZSB7XHJcbiAgICAgICAgcmV0dXJuIFNwaGVyZS5mcm9tTWluTWF4KGNvbnZlcnRQb3NTaXplVG9NaW5NYXgocG9zU2l6ZSksIGNob29zZVNpemUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuLzJkL3JlY3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vMmQvc3BoZXJlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1jb252ZXJ0b3JzXCI7XHJcbiIsImltcG9ydCB7IE1pbk1heCwgUG9zU2l6ZSB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TWluTWF4VG9Qb3NTaXplKHttaW4sIG1heH06IE1pbk1heCk6IFBvc1NpemUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiBtaW4ueCxcclxuICAgICAgICAgICAgeTogbWluLnksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHg6IG1heC54IC0gbWluLngsXHJcbiAgICAgICAgICAgIHk6IG1heC55IC0gbWluLnksXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRQb3NTaXplVG9NaW5NYXgoe3Bvc2l0aW9uLCBzaXplfTogUG9zU2l6ZSk6IE1pbk1heCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjoge1xyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4OiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLnggKyBzaXplLngsXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnkgKyBzaXplLnksXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RGaXh0dXJlIH0gZnJvbSBcIi4vYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1hcHBlciB9IGZyb20gXCIuL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGF0YWJhc2VGaXh0dXJlPE9iaiwgT2JqRHRvPiBleHRlbmRzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBsaXN0RHRvOiBPYmpEdG9bXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWxEdG86IE9iakR0bztcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobGlzdDogT2JqW10sIG1hcHBlcjogQWJzdHJhY3RNYXBwZXI8T2JqLCBPYmpEdG8+KSB7XHJcbiAgICAgICAgc3VwZXIobGlzdCk7XHJcbiAgICAgICAgdGhpcy5saXN0RHRvICAgPSBsaXN0Lm1hcChtYXBwZXIubWFwVG9EdG8sIG1hcHBlcik7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxEdG8gPSB0aGlzLmxpc3REdG9bMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWw6IE9iajtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxpc3Q6IE9ialtdKSB7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBsaXN0WzBdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4ge1xyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcFRvRHRvKG9iamVjdDogUGFydGlhbDxPYmo+KTogT2JqRHRvO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBtYXBGcm9tRHRvKG9iamVjdDogUGFydGlhbDxPYmpEdG8+KTogT2JqO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQYWdpbmF0ZU1vZGVsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVRFTVNfUEVSX1BBR0UgPSAxMDtcclxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudCA9IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UsIG9mZnNldCA9IDApIHtcclxuICAgICAgICB0aGlzLmxpbWl0ICA9ICtjb3VudDtcclxuICAgICAgICB0aGlzLm9mZnNldCA9ICtvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShwYWdpbmF0ZT86IFBhZ2luYXRlTW9kZWwpOiBQYWdpbmF0ZU1vZGVsIHtcclxuICAgICAgICBpZiAoIXBhZ2luYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnaW5hdGVNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKFxyXG4gICAgICAgICAgICBpc05hTihwYWdpbmF0ZS5saW1pdCkgPyBQYWdpbmF0ZU1vZGVsLklURU1TX1BFUl9QQUdFIDogcGFnaW5hdGUubGltaXQsXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLm9mZnNldCkgPyAwIDogcGFnaW5hdGUub2Zmc2V0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy9taW4tbWF4LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzL3h5d2hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy94eXp3aGRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy9wb3Mtc2l6ZVwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vaG9yaXpvbnRhbC1hbGlnbi50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmVzdGVkLXN0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb3B0aW9uYWwudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmF5MlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXkzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JvdW5kLWRhdGEudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaXplLmludGVyYWZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dC1vcHRpb25zLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91bml0LW51bWJlci50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlcnRpY2FsLWFsaWduLnR5cGVcIjtcclxuIiwiLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgSW50ZXJuZXQgZXhwbG9yZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lFKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgSW50ZXJuZXQgZXhwbG9yZXIgNlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSUU2KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNlwiKSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBJbnRlcm5ldCBleHBsb3JlciAxMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSUUxMSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIEVkZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VkZ2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvLyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIFNhZmFyeVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSA+PSAwICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lL1wiKSA8IDAgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlL1wiKSA8IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIElPU1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSU9TKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBDaHJvbWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Nocm9tZUFwcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAod2luZG93IGFzIGFueSk/LmNocm9tZT8uYXBwPy5ydW50aW1lO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIG9uTWVzc2FnZSBXaW5kb3dzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNXaW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIldpblwiKSA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgb25NZXNzYWdlIE1hYyBPU1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFjKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNYWNcIikgPiAwO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIENocm9tZSBPU1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lT3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gL1xcYkNyT1NcXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgZGV2aWNlIHN1cHBvcnQgdG91Y2ggZXZlbnRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNUb3VjaCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBkZXZpY2Ugc3VwcG9ydCBtb3VzZSBldmVudHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNNb3VzZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBcIm9ubW91c2Vtb3ZlXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc3QgYXJyYXkgPSBbe25hbWU6IFwiTWljaGFlbFwiLCBhZ2U6IDIzfSwge25hbWU6IFwiSm9hY2hpbVwiLCBhZ2U6IDE1fSwge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAqICBjb25zdCBjb25kaXRpb25zID0ge2FnZTogMjMsIG5hbWU6IFwiTW9uaWNhXCJ9XHJcbiAqICB3aGVyZShhcnJheSwgY29uZGl0aW9ucyk7IC8vIFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCAge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2hlcmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihhcnJheTogVFtdLCBjb25kaXRpb246IFBhcnRpYWw8VD4pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmRpdGlvbiB8fCB0eXBlb2YgY29uZGl0aW9uICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdICAgICAgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkVudHJpZXMgPSBPYmplY3QuZW50cmllcyhjb25kaXRpb24pO1xyXG5cclxuICAgIGFycmF5LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBjb25zdCBhZGQgPSBjb25kaXRpb25FbnRyaWVzLnNvbWUoKGNvbmRpdGlvbkVudHJ5KSA9PiBlW2NvbmRpdGlvbkVudHJ5WzBdIGFzIGtleW9mIFRdID09PSBjb25kaXRpb25FbnRyeVsxXSk7XHJcbiAgICAgICAgaWYgKGFkZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gc3ViIGFycmF5IGZyb20gYXJyYXlcclxuICpcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc2xpY2V9IGluc3RlYWRcclxuICogQHBhcmFtIGFycmF5IC0gaW5wdXQgYXJyYXlcclxuICogQHBhcmFtIG1pbkluZGV4IC0gc3RhcnQgaW5kZXhcclxuICogQHBhcmFtIG1heEluZGV4IC0gZW5kIGluZGV4XHJcbiAqIEByZXR1cm5zIGZpbmFsIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3ViQXJyYXk8VCA9IGFueT4oYXJyYXk6IFRbXSwgbWluSW5kZXggPSAwLCBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDEpOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XHJcbiAgICBjb25zdCBmaW5hbCAgICAgICA9IGFycmF5Lmxlbmd0aCA8IG1heEluZGV4ID8gYXJyYXkubGVuZ3RoIC0gMSA6IG1heEluZGV4O1xyXG4gICAgZm9yIChsZXQgaSA9IG1pbkluZGV4OyBpIDw9IGZpbmFsOyBpKyspIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBhcnJheVtpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1heGltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWF4aW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWF4fSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF4KGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPiBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1pbmltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWluaW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWlufSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPCBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAqIEBleGFtcGxlXHJcbiAqICBzdW0oWzEsIDIsIDMsIDQsIDVdKSA9PiAxNVxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIHN1bW1hcnkgb2YgYWxsIG51bWJlcnMgaW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW0oYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJucyBhdmVyYWdlIG9mIG51bWVyaWMgYXJyYXkgZ2l2ZW4gYXMgaW5wdXRcclxuICogQGV4YW1wbGVcclxuICogIGF2ZyhbMSwgMiwgMywgNCwgNV0pID0+IDNcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBhdmVyYWdlIG9mIGFsbCBudW1iZXJzIGluIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXZnKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGFycmF5Lmxlbmd0aDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIGpvaW4gYXJyYXkgYnkgZGVsaW1pdGVyIGFuZCBhcHBlbmQgcHJlZml4IGFuZCBwb3N0Zml4XHJcbiAqIEBleGFtcGxlXHJcbiAqICBqb2luKFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIl0sIFwiXCIpID0+IGFiY2RcclxuICogIGpvaW4oW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiXSwgXCI9XCIpID0+IGE9Yj1jPWRcclxuICogIGpvaW4oW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiXSwgXCI9XCIsIFwiPj5cIiwgXCI8PFwiKSA9PiA+PmE9Yj1jPWQ8PFxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHBhcmFtIGRlbGltaXRlciAtIGNoYXJhY3RlciB1c2VkIGZvciBqb2luIGVsZW1lbnRzIGluIGFycmF5XHJcbiAqIEBwYXJhbSBwcmVmaXggLSBzdHJpbmcgYXBwZW5kIGF0IHRoZSBiZWdpbm5pbmcgb2YgZmluYWwgc3RyaW5nXHJcbiAqIEBwYXJhbSBwb3N0Zml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgZW5kIG9mIGZpbmFsIHN0cmluZ1xyXG4gKiBAcmV0dXJucyBmaW5hbCBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luPFQ+KGFycmF5OiBUW10sIGRlbGltaXRlcjogc3RyaW5nLCBwcmVmaXggPSBcIlwiLCBwb3N0Zml4ID0gXCJcIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIGFycmF5ICsgcG9zdGZpeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJlZml4ICsgYXJyYXkuam9pbihkZWxpbWl0ZXIpICsgcG9zdGZpeDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCByZXR1cm5zIGxhc3QgZWxlbWVudCBmcm9tIGFycmF5IG9yIG51bGwgaWYgYXJyYXkgaXMgZW1wdHkuIElmIGFyZ3VtZW50IGlzIG5vdCBhcnJheSwgbWV0aG9kIHJldHVybnMgYXJndW1lbnRcclxuICogQGV4YW1wbGVcclxuICogIGdldExhc3QoW10pID0+IHVuZGVmaW5lZFxyXG4gKiAgZ2V0TGFzdChbXCJhXCIsIFwiYlwiXSkgPT4gYlxyXG4gKiAgZ2V0TGFzdChbNSwgNl0pID0+IDZcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEByZXR1cm5zIGxhc3QgdmFsdWUgZnJvbSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3Q8VD4oYXJyYXk6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJucyByYW5kb20gZWxlbWVudCBmcm9tIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcmV0dXJucyByYW5kb20gdmFsdWUgZnJvbSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUl0ZW08VCA9IHVua25vd24+KGFycmF5OiBUW10pOiBUIHwgbnVsbCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5SYW5kb208VD4oYXJnczogVFtdLCBjb3VudDogbnVtYmVyKTogVFtdIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwIHx8IGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoIDw9IGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxUPigpO1xyXG5cclxuICAgIHdoaWxlIChyZXN1bHQuc2l6ZSA8PSBjb3VudCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUl0ZW0gPSBnZXRSYW5kb21JdGVtPFQ+KGFyZ3MpO1xyXG4gICAgICAgIGlmIChyYW5kb21JdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGQocmFuZG9tSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tPFQ+KHJlc3VsdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJuIGNvcHkgb2YgYXJyYXkgd2l0aCBvbmx5IGRpc3RpbmN0IGVsZW1lbnRzXHJcbiAqIEBleGFtcGxlXHJcbiAqICBtYWtlVW5pcXVlKFs1LCA1LCAzLCAyLCAxLCA0LCA1LCA0XSkgPT0+IFs1LCAzLCAyLCAxLCA0XVxyXG4gKiAgbWFrZVVuaXF1ZShbXCI1XCIsIFwiNVwiLCBcIjNcIiwgXCIyXCIsIFwiMVwiLCBcIjRcIiwgXCI1XCIsIFwiNFwiXSkgPT0+IFtcIjVcIiwgXCIzXCIsIFwiMlwiLCBcIjFcIiwgXCI0XCJdXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IHdpdGggZHVwbGljYXRlIGVsZW1lbnRzXHJcbiAqIEByZXR1cm5zIHVuaXF1ZSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVbmlxdWU8VD4oYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQ8VD4oYXJyYXkpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmUgMiBhcnJheSBlYWNoIG90aGVyXHJcbiAqIEBwYXJhbSBhcnJcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWFjaE90aGVyPFQ+KGFycjogVFtdLCBjYWxsYmFjazogKGE6IFQsIGI6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGFyci5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGUsIGFycltqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eTxUPih2YWx1ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIGAke3ZhbHVlfWAgIT09IFwiZmFsc2VcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL21hdGgtdXRpbHNcIjtcclxuXHJcbmNvbnN0IGNvbG9yczogeyBbY29sb3I6IHN0cmluZ106IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB9ID0ge1xyXG4gICAgYmxhY2s6IFswLCAwLCAwXSxcclxuICAgIHdoaXRlOiBbMjU1LCAyNTUsIDI1NV0sXHJcbiAgICByZWQgIDogWzI1NSwgMCwgMF0sXHJcbiAgICBncmVlbjogWzAsIDI1NSwgMF0sXHJcbiAgICBibHVlIDogWzAsIDAsIDI1NV0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycENvbG9yKFxyXG4gICAgZnJvbUNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcclxuICAgIHRvQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgcHJvZ3Jlc3M6IG51bWJlcixcclxuKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgcmVkICAgPSBwcm9ncmVzcyAqIGZyb21Db2xvclswXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclswXTtcclxuICAgIGNvbnN0IGdyZWVuID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMV0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMV07XHJcbiAgICBjb25zdCBibHVlICA9IHByb2dyZXNzICogZnJvbUNvbG9yWzJdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzJdO1xyXG4gICAgY29uc3QgYWxwaGEgPSBwcm9ncmVzcyAqIGZyb21Db2xvclszXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclszXTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGNsYW1wKHJlZCwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChncmVlbiwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChibHVlLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGFscGhhLCAwLCAyNTUpLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnBIZXhhQ29sb3IoYTogc3RyaW5nLCBiOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFoID0gK2EucmVwbGFjZShcIiNcIiwgXCIweFwiKTtcclxuICAgIGNvbnN0IGFyID0gYWggPj4gMTY7XHJcbiAgICBjb25zdCBhZyA9IGFoID4+IDggJiAweEZGO1xyXG4gICAgY29uc3QgYWIgPSBhaCAmIDB4RkY7XHJcbiAgICBjb25zdCBiaCA9ICtiLnJlcGxhY2UoXCIjXCIsIFwiMHhcIik7XHJcbiAgICBjb25zdCBiciA9IGJoID4+IDE2O1xyXG4gICAgY29uc3QgYmcgPSBiaCA+PiA4ICYgMHhGRjtcclxuICAgIGNvbnN0IGJiID0gYmggJiAweEZGO1xyXG4gICAgY29uc3QgcnIgPSBhciArIGFtb3VudCAqIChiciAtIGFyKTtcclxuICAgIGNvbnN0IHJnID0gYWcgKyBhbW91bnQgKiAoYmcgLSBhZyk7XHJcbiAgICBjb25zdCByYiA9IGFiICsgYW1vdW50ICogKGJiIC0gYWIpO1xyXG5cclxuICAgIHJldHVybiBcIiNcIiArICgoMSA8PCAyNCkgKyAocnIgPDwgMTYpICsgKHJnIDw8IDgpICsgcmIgfCAwKS50b1N0cmluZygxNikuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgycmdiKGNvbG9yOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMSksIDE2KTtcclxuXHJcbiAgICByZXR1cm4gW251bSA+PiAxNiwgbnVtID4+IDggJiAweDAwRkYsIG51bSAmIDB4MDAwMEZGXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRlQ29sb3IoY29sb3I6IHN0cmluZywgcGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IGhleDJyZ2IoY29sb3IpO1xyXG4gICAgY29uc3QgYW10ID0gTWF0aC5yb3VuZCgyLjU1ICogcGVyY2VudCk7XHJcbiAgICBjb25zdCBSICAgPSBudW1bMF0gKyBhbXQ7XHJcbiAgICBjb25zdCBHICAgPSBudW1bMV0gKyBhbXQ7XHJcbiAgICBjb25zdCBCICAgPSBudW1bMl0gKyBhbXQ7XHJcblxyXG4gICAgcmV0dXJuIHJnYjJoZXgoUiwgRywgQik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IyaGV4KFI6IG51bWJlciwgRzogbnVtYmVyLCBCOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiI1wiICsgKDB4MTAwMDAwMCArIChSIDwgMjU1ID8gUiA8IDEgPyAwIDogUiA6IDI1NSkgKiAweDEwMDAwICtcclxuICAgICAgICAoRyA8IDI1NSA/IEcgPCAxID8gMCA6IEcgOiAyNTUpICogMHgxMDAgK1xyXG4gICAgICAgIChCIDwgMjU1ID8gQiA8IDEgPyAwIDogQiA6IDI1NSkpLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludDJoZXgodmFsOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsdWUgID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFwiMDAwMDAwXCIuc3Vic3RyKDAsIDYgLSB2YWx1ZS5sZW5ndGgpICsgdmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIFwiI1wiICsgcmVzdWx0LnRvVXBwZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnQycmdiKHZhbDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgdmFsID4+IDE2LFxyXG4gICAgICAgIHZhbCA+PiA4ICYgMHhGRixcclxuICAgICAgICB2YWwgJiAweEZGLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJpbnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiMmludChSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSIDw8IDE2IHwgRyA8PCA4ICYgMHhGRkZGIHwgQjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3I6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBpZiAoY29sb3JzW2NvbG9yXSkge1xyXG4gICAgICAgIHJldHVybiBjb2xvcnNbY29sb3JdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhleGFNYXRjaCA9IGNvbG9yLm1hdGNoKC9eIyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvKTtcclxuICAgIGlmIChoZXhhTWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbMV0sIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzJdLCAxNiksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFszXSwgMTYpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmdiYU1hdGggPSBjb2xvci5tYXRjaCgvcmdiYT9cXCgoXFxkezEsM30pICosICooXFxkezEsM30pICosICooXFxkezEsM30pKCAqLCAqXFxkKi4/XFxkKilcXCkvKTtcclxuICAgIGlmIChyZ2JhTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzFdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzJdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzNdLCAxMCksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGFyc2UgY29sb3I6IFwiICsgY29sb3IpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZTxUIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4ob2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogKE5vZGUgfCBzdHJpbmcpW10gfCBOb2RlIHwgc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvbkNsaWNrPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvbklucHV0PzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBzdHlsZXM/OiB7IFtzdHlsZSBpbiBrZXlvZiBDU1NTdHlsZURlY2xhcmF0aW9uXT86IENTU1N0eWxlRGVjbGFyYXRpb25bc3R5bGVdIH07XHJcbiAgICBjb250ZW50Pzogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbiAgICBmb3I/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGF1dG9wbGF5PzogYm9vbGVhbjtcclxuICAgIGhyZWY/OiBzdHJpbmc7XHJcbiAgICBkb3dubG9hZD86IHN0cmluZztcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50VG9TdHJpbmcoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmpvaW4oXCIuXCIpO1xyXG4gICAgY29uc3QgaWQgICAgICA9IGVsZW1lbnQuaWQgPyBcIiNcIiArIGVsZW1lbnQuaWQgOiBcIlwiO1xyXG4gICAgY29uc3QgcGFyZW50ICA9IGVsZW1lbnQucGFyZW50RWxlbWVudCA/IGVsZW1lbnRUb1N0cmluZyhlbGVtZW50LnBhcmVudEVsZW1lbnQpICsgXCIgPiBcIiA6IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudCArIGVsZW1lbnQubG9jYWxOYW1lICsgaWQgKyAoY2xhc3NlcyA/IFwiLlwiICsgY2xhc3NlcyA6IFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGhlYWRlclNlbGVjdG9yID0gXCIuaGVhZGVyXCIpOiB7IGNsZWFyOiAoKSA9PiB2b2lkIH0ge1xyXG4gICAgbGV0IHBvczEgPSAwO1xyXG4gICAgbGV0IHBvczIgPSAwO1xyXG4gICAgbGV0IHBvczMgPSAwO1xyXG4gICAgbGV0IHBvczQgPSAwO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnREcmFnID0gKGU6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9zMSAgICAgICAgICAgICAgID0gcG9zMyAtIGUuY2xpZW50WDtcclxuICAgICAgICBwb3MyICAgICAgICAgICAgICAgPSBwb3M0IC0gZS5jbGllbnRZO1xyXG4gICAgICAgIHBvczMgICAgICAgICAgICAgICA9IGUuY2xpZW50WDtcclxuICAgICAgICBwb3M0ICAgICAgICAgICAgICAgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgID0gZWxlbWVudC5vZmZzZXRUb3AgLSBwb3MyICsgXCJweFwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCAtIHBvczEgKyBcInB4XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRyYWdNb3VzZURvd24gPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3MzICAgICAgICAgICAgICAgICAgID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczQgICAgICAgICAgICAgICAgICAgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgICA9IGNsb3NlRHJhZ0VsZW1lbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IGVsZW1lbnREcmFnO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyU2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlRHJhZ0VsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgICA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUltYWdlKG9wdGlvbnM/OiBFbGVtZW50QXR0cmlidXRlcyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtcImltZ1wiXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBDcmVhdGVFbGVtZW50KFwiaW1nXCIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUykge1xyXG4gICAgICAgIHJlc3VsdC5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94KGxhYmVsOiBzdHJpbmcsIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCwgY2hlY2tlZCA9IGZhbHNlKTogSFRNTExhYmVsRWxlbWVudCB7XHJcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgIGNoZWNrZWQsXHJcbiAgICAgICAgdHlwZSAgICA6IFwiY2hlY2tib3hcIixcclxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gb25DaGFuZ2UoaW5wdXRFbGVtZW50LmNoZWNrZWQpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIENyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBcImNoZWNrYm94LWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGNoaWxkcmVuIDogW2xhYmVsLCBpbnB1dEVsZW1lbnQsIENyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiY2hlY2ttYXJrXCJ9KV0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4odHlwZTogSywgb3B0aW9ucz86IEVsZW1lbnRBdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ8Sz4odHlwZSk7XHJcbiAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlbnRyeVswXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xhc3NOYW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuY2xhc3NOYW1lID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9uQ2hhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9uQ2xpY2tcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2VkXCI6XHJcbiAgICAgICAgICAgICAgICAocmVzdWx0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3R5bGVzXCI6XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhlbnRyeVsxXSkuZm9yRWFjaCgoc3R5bGVFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdHlsZVtzdHlsZUVudHJ5WzBdIGFzIGFueV0gPSBzdHlsZUVudHJ5WzFdIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGlsZHJlblwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnlbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGVuZCguLi5lbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb250ZW50XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnlbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoZW50cnlbMF0sIGVudHJ5WzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogVE9ETzogZWxlbWVudCByZW1haW5zIGFmdGVyIGRlbGV0aW9uIG9uTWVzc2FnZSBzY3JlZW5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LXBhcmFtLWxhc3RcclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9yVXNpbmdEZWZhdWx0SW5wdXQoY29sb3IgPSBcIiMwMDAwMDBcIiwgb25JbnB1dD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgdHlwZSAgICAgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgdmFsdWUgICAgOiBjb2xvcixcclxuICAgICAgICAgICAgb25JbnB1dDogdHlwZW9mIG9uSW5wdXQgPT09IFwiZnVuY3Rpb25cIiA/ICgpID0+IG9uSW5wdXQoaW5wdXQudmFsdWUpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvbkNoYW5nZSA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JDcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4ocGFyZW50OiBIVE1MRWxlbWVudCwgdHlwZTogSywgLi4uY2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdPihgJHt0eXBlfS4ke2NsYXNzZXMuam9pbihcIi5cIil9YCk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQ3JlYXRlRWxlbWVudCh0eXBlLCB7Y2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oXCIgXCIpfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZUFuZEFwcGVuZDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBLLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBnZXRPckNyZWF0ZTxLPihwYXJlbnQsIHR5cGUsIC4uLmNsYXNzZXMpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgeyBDcmVhdGVFbGVtZW50LCBDcmVhdGVJbWFnZSB9IGZyb20gXCIuL2h0bWwtdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBDcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcclxuICAgICAgICB3aWR0aCA6IGltYWdlLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgICAoY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUltYWdlKGltYWdlOiBzdHJpbmcpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgIHJldHVybiBDcmVhdGVJbWFnZSh7XHJcbiAgICAgICAgc3JjOiBpbWFnZSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2UoY2FsbGJhY2s6IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQsIHdpZHRoOiBudW1iZXIsIGhlaWdodCA9IHdpZHRoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgY29uc3QgY2FudmFzID0gQ3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgICBjYWxsYmFjayhjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk7XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vYW5hbHl0aWNzLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FycmF5LXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvZXJjZS11dGlsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbG9yLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RhdGUtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaHRtbC11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbWFnZS11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2MtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGltZS11dGlsc1wiO1xyXG5cclxuLy8gVE9ETzogc2hvdWxkIGJlIGltcG9ydCBkaXJlY3RseSB0byBmaWxlXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL25ldC1jbGllbnQtdXRpbHNcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vbmV0LXNlcnZlci11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnB1dC11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vYmplY3QtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2VyLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2Nlc3MtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmVmbGVjdGlvbi11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYW5kb20tdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N2Zy11dGlsc1wiO1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIEtleXMgfSBmcm9tIFwiLi4vZW51bXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXR0b25Gcm9tRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpOiBCdXR0b24gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIGdldEJ1dHRvbkZyb21FdmVudEJ1dHRvbnMoZXZlbnQuYnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1dHRvbkZyb21FdmVudEJ1dHRvbnMoYnV0dG9uOiBNb3VzZUV2ZW50W1wiYnV0dG9uXCJdKTogQnV0dG9uIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChidXR0b24gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gQnV0dG9uLkxFRlQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYnV0dG9uID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIEJ1dHRvbi5NSURETEU7XHJcbiAgICB9XHJcbiAgICBpZiAoYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIEJ1dHRvbi5SSUdIVDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVFdmVudEtleShldmVudDogS2V5Ym9hcmRFdmVudCwga2V5OiBLZXlzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZXZlbnQuY29kZSA9PT0ga2V5O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJhbmRvbSBmcm9tIFwiLi9yYW5kb20tdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtOiBudW1iZXIsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzID0gXCIwMDAwMDAwMDAwMDAwMFwiICsgbnVtO1xyXG5cclxuICAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aCAtIHNpemUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0RlY2ltYWxzKG51bTogbnVtYmVyLCBkZWNpbWFscyA9IDIsIHR5cGU6IFwiZmxvb3JcIiB8IFwiY2VpbFwiIHwgXCJyb3VuZFwiID0gXCJyb3VuZFwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGRpdmlkZXIgPSBwYXJzZUludCgxICsgbmV3IEFycmF5KGRlY2ltYWxzICsgMSkuam9pbihcIjBcIiksIDEwKTtcclxuXHJcbiAgICByZXR1cm4gKE1hdGhbdHlwZV0obnVtICogZGl2aWRlcikgLyBkaXZpZGVyKS50b0ZpeGVkKGRlY2ltYWxzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2gyTnVtYmVycyh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB4RmluYWwgPSB4ID49IDAgPyB4ICogMiA6IC14ICogMiAtIDE7XHJcbiAgICBjb25zdCB5RmluYWwgPSB5ID49IDAgPyB5ICogMiA6IC15ICogMiAtIDE7XHJcblxyXG4gICAgcmV0dXJuICh4RmluYWwgKyB5RmluYWwpICogKHhGaW5hbCArIHlGaW5hbCArIDEpIC8gMiArIHlGaW5hbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5vbWlhbENvZWZmaWNpZW50KG46IG51bWJlciwgazogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCByID0gMTtcclxuICAgIGlmIChrID4gbikge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgZCA9IDE7IGQgPD0gazsgZCsrKSB7XHJcbiAgICAgICAgciAqPSBuO1xyXG4gICAgICAgIG4tLTtcclxuICAgICAgICByIC89IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB2YWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYiAqIHZhbCArICgxIC0gdmFsKSAqIGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2cyaSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCByID0gMDtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgd2hpbGUgKCh2YWx1ZSA+Pj0gMSkgPiAwKSB7XHJcbiAgICAgICAgcisrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGFtcChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNsYW1wKChtYXggLSBtaW4pICogc2NhbGUgKyBtaW4sIG1pbiwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcmFuZG9tSW50QmV0d2Vlbn0gaW5zdGVhZDtcclxuICpcclxuICogQHBhcmFtIG1pbiAtIG1pbiB2YWx1ZVxyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUmFuZG9tLnJhbmRvbUludEJldHdlZW4obWluLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByYW5kb21GbG9hdEJldHdlZW59IGluc3RlYWQ7XHJcbiAqXHJcbiAqIEBwYXJhbSBtaW4gLSBtaW4gdmFsdWVcclxuICogQHBhcmFtIG1heCAtIG1heCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFJhbmRvbS5yYW5kb21GbG9hdEJldHdlZW4obWluLCBtYXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXZlcmFnZShhcmdzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1bSAvIGFyZ3MubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHZhbHVlICYgdmFsdWUgLSAxKSA9PT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpZmYobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKG51bTEgLSBudW0yKTtcclxufVxyXG5cclxuY29uc3QgcmF0aW8gPSAxODAgLyBNYXRoLlBJO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlcyhyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiByYXRpbztcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG4vKipcclxuICogTWV0aG9kIHBhcnNlIGNvb2tpZXNcclxuICogQHBhcmFtIGNvb2tpZXMgLSBjb29rZSB0byBwYXJzZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llcyhjb29raWVzOiBzdHJpbmcpOiBTdHJpbmdNYXAge1xyXG4gICAgY29uc3QgbGlzdDogU3RyaW5nTWFwID0ge307XHJcbiAgICBjb25zdCBkYXRhICAgICAgICAgICAgPSBjb29raWVzID8gY29va2llcy50b1N0cmluZygpXHJcbiAgICAgICAgLnNwbGl0KFwiO1wiKSA6IFtdO1xyXG4gICAgZGF0YS5mb3JFYWNoKChjb29raWUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJ0cyAgICAgPSBjb29raWUuc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0UGFydCA9IHBhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKHNoaWZ0UGFydCkge1xyXG4gICAgICAgICAgICBsaXN0W3NoaWZ0UGFydC50cmltKCldID0gZGVjb2RlVVJJKHBhcnRzLmpvaW4oXCI9XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBvYmplY3QgaXMgaW4gYXJyYXlcclxuICogQGV4YW1wbGVcclxuICogIGlzSW4oXCJhXCIsIFwiYlwiLCBcImRcIiwgXCJhXCIpID0+IHRydWVcclxuICogIGlzSW4oXCJhXCIsIFtcImJcIiwgXCJkXCIsIFwiYVwiXSkgPT4gdHJ1ZVxyXG4gKiAgaXNJbihcImNcIiwgXCJiXCIsIFwiZFwiLCBcImFcIikgPT4gZmFsc2VcclxuICogIGlzSW4oXCJjXCIsIFtcImJcIiwgXCJkXCIsIFwiYVwiXSkgPT4gZmFsc2VcclxuICogIGlzSW4oXCJjXCIpID0+IGZhbHNlXHJcbiAqICBpc0luKFwiY1wiLCBbXSkgPT4gZmFsc2VcclxuICogQHBhcmFtIG9iaiAtIHNlYXJjaGVkIG9iamVjdFxyXG4gKiBAcGFyYW0gZGF0YSAtIGFycmF5IG9mIG9iamVjdHMgdG8gYmUgY29tcGFyZSB3aXRoIHNlYXJjaGVkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW48VD4ob2JqOiBULCAuLi5kYXRhOiB1bmtub3duW10pOiBib29sZWFuIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFbMF0pKSB7XHJcbiAgICAgICAgaWYgKGRhdGFbMF0uaW5kZXhPZihvYmopID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXRhLmluZGV4T2Yob2JqKSA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHBhcnNlIEpTT04gY29udGVudCB3aXRoIGNvbW1lbnRzXHJcbiAqIEBwYXJhbSBjb250ZW50IC0gc3RyaW5naWZ5IEpTT05cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUpTT05XaXRoQ29tbWVudHM8VD4oY29udGVudDogc3RyaW5nKTogVCB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50LnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csIFwiXCIpKTtcclxufVxyXG5cclxuLy8gVE9ETzogc2hvdWxkIGFwcGVuZCBjb29raWVzIG9yIGFkZCBvcHRpb24gdG8gYXBwZW5kaW5nIGluc3RlYWQgb2YgcmVwbGFjZSBjb29raWVzXHJcbi8vIFRPRE86IGV4cGlyZXMgbXVzdCBiZSBvbmx5IGluIHRoZSBlbmQgb2YgY29va2llc1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sIGRheXM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGNvbnN0IGZpbmFsQ29va2llcyA9IGAke25hbWV9PSR7dmFsdWV9O2V4cGlyZXM9JHtkLnRvVVRDU3RyaW5nKCl9YDtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBmaW5hbENvb2tpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9PSR7dmFsdWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjbmFtZTogc3RyaW5nLCBzb3VyY2UgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jb29raWUgOiBcIlwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgY29uc3QgY2EgICA9IHNvdXJjZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKGxldCBjIG9mIGNhKSB7XHJcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikgdHlwZW9mIG9iamVjdFxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5uYW1lID0+IEdhYnJpZWxcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuYWdlID0+IFwiMjNcIlxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbCB0eXBlb2YgYXJyYXlcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuZW1haWxbMF0gPT4gZ2Nzb2xsZWlcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuZW1haWxbMV0gPT4gZ2FicmllbGNzb2xsZWlcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuZW1haWxbMl0gPT4gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1zPFQ+KHF1ZXJ5ICAgICA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSA6IFwiXCIsXHJcbiAgICBzZXBhcmF0b3IgPSBcIiZcIixcclxuICAgIGRlbGltaXRlciA9IFwiPVwiKTogVCB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZzogYW55ID0ge307XHJcbiAgICBjb25zdCB2YXJzOiBzdHJpbmdbXSAgID0gcXVlcnkuc3BsaXQoc2VwYXJhdG9yKTtcclxuICAgIGZvciAoY29uc3QgcGFpciBvZiB2YXJzKSB7XHJcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcGFpci5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBxdWVyeVN0cmluZ1trZXldID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0gPSBbcXVlcnlTdHJpbmdba2V5XSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XS5wdXNoKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcXVlcnlTdHJpbmcgYXMgVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBvYmplY3RUb1F1ZXJ5UGFyYW1zKHthOiBcImFhXCIsIGI6IFwiYmJcIn0pID0+ID9hPWFhJmI9YmJcclxuICogIG9iamVjdFRvUXVlcnlQYXJhbXMoe2E6IDIxLCBiOiAyMn0pID0+ID9hPTIxJmI9MjJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1F1ZXJ5UGFyYW1zKG9iajogU3RyaW5nTWFwPHVua25vd24+KTogc3RyaW5nIHtcclxuICAgIC8vIFRPRE86IGFkZCB1cmwgcHJlZml4XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGZvciAoY29uc3Qgb2JqS2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkob2JqS2V5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gYCR7cmVzdWx0Lmxlbmd0aCA+IDAgPyBcIiZcIiA6IFwiP1wifSR7b2JqS2V5fT0ke29ialtvYmpLZXldfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9ialtrZXldID0gb2JqW2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZTxUPihvYmo6IHN0cmluZyk6IFQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gSlNPTi5wYXJzZShvYmopO1xyXG4gICAgZm9yIChjb25zdCBpIGluIHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KGkpIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiByZXN1bHRbaV0gIT09IFwic3RyaW5nXCIgfHwgIShyZXN1bHRbaV0uaW5kZXhPZihcImZ1bmN0aW9uIChcIikgPT09IDAgfHxcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXS5tYXRjaCgvXlxcKFtfYS16QS1aMC05XSsoICosICpbX2EtekEtWjAtOV0rKSpcXCkgKj0+LykpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxyXG4gICAgICAgICAgICBldmFsKFwicmVzdWx0W2ldID0gXCIgKyByZXN1bHRbaV0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ldID0gZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uOiBhbnkgPSB7fTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5tYXBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25baXRlbS5hdHRyRF0gPSBpdGVtLm1hcEZ1bmN0aW9uKHNvdXJjZVtpdGVtLmF0dHJTXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IGl0ZW0ubWFwRnVuY3Rpb24oc291cmNlW2l0ZW0uYXR0clNdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJEXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgT2JqZWN0RW50cnkgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aG91dDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iajogVCwgaXRlbXM6IChrZXlvZiBUKVtdKTogT21pdDxULCBhbnk+IHtcclxuICAgIHJldHVybiBnZXRPYmplY3RFbnRyaWVzKG9iaikuZmlsdGVyKChlbnRyeSkgPT4gIWl0ZW1zLmluY2x1ZGVzKGVudHJ5LmtleSkpXHJcbiAgICAgICAgLnJlZHVjZSgocHJldiwgZW50cnkpID0+IHtcclxuICAgICAgICAgICAgcHJldltlbnRyeS5rZXldID0gZW50cnkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICB9LCB7fSBhcyBUKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbDxUPihvYmpBOiBULCBvYmpCOiBUKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIG9iakEgIT09IHR5cGVvZiBvYmpCKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb2JqQSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmICghb2JqQSB8fCAhb2JqQikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqQSA9PT0gb2JqQjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChvYmpBIGFzIGFueSk/LmNvbnN0cnVjdG9yPy5uYW1lICE9PSAob2JqQiBhcyBhbnkpPy5jb25zdHJ1Y3Rvcj8ubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqQSkgYXMgKGtleW9mIFQpW107XHJcblxyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMob2JqQikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChvYmpBW2tleV0sIG9iakJba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiAob2JqQSBhcyBhbnkpID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBvYmpCID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKCtvYmpBKSAmJiBpc05hTigrb2JqQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmpBID09PSBvYmpCO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHk8VD4oc291cmNlOiBUKTogVCB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW1hcC13aXRob3V0LXVzYWdlXHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubWFwKChlKSA9PiBkZWVwQ29weShlKSkgYXMgYW55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHNvdXJjZSBhcyBhbnkpPy5jb25zdHJ1Y3Rvcj8ubmFtZSAhPT0gXCJPYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBjYW5ub3QgY29weSBjbGFzcyBpbnN0YW5jZXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBQYXJ0aWFsPFQ+ID0ge307XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNvdXJjZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIChyZXN1bHQgYXMgYW55KVtrZXldID0gZGVlcENvcHkodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0IGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGNhbm5vdCBjb3B5IGZ1bmN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc291cmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0RW50cmllczxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iajogVCk6IE9iamVjdEVudHJ5PFQ+W10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBPYmplY3RFbnRyeTxUPltdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG9iaktleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShvYmpLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgIGtleSAgOiBvYmpLZXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBvYmpbb2JqS2V5XSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVzdGVkUHJvcGVydHkob2JqZWN0OiBhbnksIHByb3BlcnR5UGF0aDogc3RyaW5nLCBzZXBhcmF0b3IgPSBcIi5cIik6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUxpc3QgPSBwcm9wZXJ0eVBhdGguc3BsaXQoc2VwYXJhdG9yKTtcclxuXHJcbiAgICByZXR1cm4gcHJvcGVydHlMaXN0LnJlZHVjZSgoY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUsIHByb3BlcnR5TmFtZSkgPT4gY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUgPyBjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZVtwcm9wZXJ0eU5hbWVdIDogdW5kZWZpbmVkLCBvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmVzdGVkUHJvcGVydHk8VD4oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIGxldCBvYmogICAgICAgID0gaXRlbTtcclxuICAgIGNvbnN0IHNwbGl0S2V5ID0ga2V5LnNwbGl0KFwiLlwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRLZXkubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgb2JqID0gb2JqW3NwbGl0S2V5W2ldXTtcclxuICAgIH1cclxuICAgIG9ialtzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXV0gPSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdWdoU2l6ZU9mT2JqZWN0PFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBvYmplY3RMaXN0ICAgICAgID0gW107XHJcbiAgICBjb25zdCBzdGFjazogdW5rbm93bltdID0gW29iamVjdF07XHJcbiAgICBsZXQgYnl0ZXMgICAgICAgICAgICAgID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gNDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSB2YWx1ZS5sZW5ndGggPDwgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSA4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIG9iamVjdExpc3QuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG9iamVjdExpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJ5dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2l6ZTxUIGV4dGVuZHMgKFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5rbm93bltdKT4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBpIGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqZWN0OiBUKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaW5kZXgpICYmIHR5cGVvZiBvYmplY3RbaW5kZXhdID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gbGlzdCAtIGxpc3QgdG8gZmxhdFxyXG4gKiBAcGFyYW0gcHJvcGVydHlQYXRoIC0gcGF0aCB0byBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0gc2VwYXJhdG9yIC0gc2VwYXJhdG9yIGluIHByb3BlcnR5UGF0aFxyXG4gKiBAcGFyYW0gc2tpcFVuZGVmaW5lZCAtIHRydWUgaWYgdW5kZWZpbmVkIHNob3VsZCBiZSBza2lwcGVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBpdGVtcyA9IFtcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJHYWJyaWVsXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJFbGxhXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJHYWJyaWVsXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJKb2VcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9XHJcbiAqIF1cclxuICpcclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbi5uYW1lXCIpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkdhYnJpZWxcIiwgXCJKb2VcIl1cclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbl9uYW1lXCIsIFwiX1wiKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJHYWJyaWVsXCIsIFwiSm9lXCJdXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb24ubmFtZVwiLCBcIi5cIiwgdHJ1ZSk7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiSm9lXCJdXHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGbGF0KGxpc3Q6IGFueVtdLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIsIHNraXBVbmRlZmluZWQgPSBmYWxzZSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUxpc3QgPSBwcm9wZXJ0eVBhdGguaW5kZXhPZihzZXBhcmF0b3IpID49IDAgPyBwcm9wZXJ0eVBhdGguc3BsaXQoc2VwYXJhdG9yKSA6IFtwcm9wZXJ0eVBhdGhdO1xyXG5cclxuICAgIHJldHVybiBsaXN0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eUxpc3QucmVkdWNlKChwcm9wVmFsLCBwcm9wZXJ0eU5hbWUpID0+IHByb3BWYWwgPyBwcm9wVmFsW3Byb3BlcnR5TmFtZV0gOiB1bmRlZmluZWQsIGN1cnIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgJiYgc2tpcFVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY2MucHVzaCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQm9vbGVhblZhbHVlKGtleTogc3RyaW5nKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoa2V5Lm1hdGNoKC8oMXx0cnVlfHllc3xhbm98w6FubykvaSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChrZXkubWF0Y2goLygwfGZhbHNlfG5vfG5pZSkvaSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzRGF0YSB7XHJcbiAgICBtZW1vcnlVc2FnZTogTm9kZUpTLk1lbW9yeVVzYWdlO1xyXG4gICAgY3B1VXNhZ2U6IE5vZGVKUy5DcHVVc2FnZTtcclxuICAgIHVwVGltZTogbnVtYmVyO1xyXG4gICAgdmVyc2lvbjogc3RyaW5nO1xyXG4gICAgcGxhdGZvcm06IE5vZGVKUy5QbGF0Zm9ybTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVzdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2QoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEZXYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiB8fCAhcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVudmlyb25tZW50KHR5cGU6IFwidGVzdFwiIHwgXCJwcm9kdWN0aW9uXCIgfCBcImRldmVsb3BtZW50XCIpOiB2b2lkIHtcclxuICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID0gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NEYXRhKCk6IFByb2Nlc3NEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVtb3J5VXNhZ2U6IHByb2Nlc3MubWVtb3J5VXNhZ2UoKSxcclxuICAgICAgICBjcHVVc2FnZSAgIDogcHJvY2Vzcy5jcHVVc2FnZSgpLFxyXG4gICAgICAgIHVwVGltZSAgICAgOiBwcm9jZXNzLnVwdGltZSgpLFxyXG4gICAgICAgIHZlcnNpb24gICAgOiBwcm9jZXNzLnZlcnNpb24sXHJcbiAgICAgICAgcGxhdGZvcm0gICA6IHByb2Nlc3MucGxhdGZvcm0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdEVudmlyb25tZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKCFwcm9jZXNzLmVudi5OT0RFX0VOVikge1xyXG4gICAgICAgIHNldEVudmlyb25tZW50KFwiZGV2ZWxvcG1lbnRcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0QmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludEJldHdlZW4obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbUZsb2F0QmV0d2VlbihtaW4sIG1heCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQm9vbGVhbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSXRlbTxUPiguLi5pdGVtczogVFtdKTogVCB7XHJcbiAgICByZXR1cm4gaXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKV07XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZSBjbGFzcyBieSBuYW1lIGFuZCBsaXN0IG9mIHBhcmFtZXRlcnNcclxuICpcclxuICogQHBhcmFtIG5hbWUgLSBjbGFzcyBuYW1lXHJcbiAqIEBwYXJhbSBhcmdzIC0gY29uc3RydWN0b3IgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIGNyZWF0ZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xhc3MobmFtZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCB0ZW1wID0gT2JqZWN0LmNyZWF0ZShuYW1lLnByb3RvdHlwZSk7XHJcbiAgICBuYW1lLmFwcGx5KHRlbXAsIGFyZ3MpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbEZpcnN0RnVuY3Rpb24oLi4uZnVuY3Rpb25zOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgZnVuY3Rpb25zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVE9ETzogVGhpcyBpcyBkZXByZWNhdGVkLiBNb3ZlIHRoaXMgdG8gdmFsaWRhdG9yc1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIE1pc2NWYWxpZGF0b3JzIGZyb20gXCIuLi92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9yc1wiO1xyXG5cclxuY29uc3QgdGltZUZvcm1hdHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBISCAgOiBcIigyWzAtM118WzAxXVxcXFxkKVwiLFxyXG4gICAgSCAgIDogXCIoMlswLTNdfFswMV0/XFxcXGQpXCIsXHJcbiAgICBtbSAgOiBcIihbMC01XVxcXFxkKVwiLFxyXG4gICAgbSAgIDogXCIoWzAtNV0/XFxcXGQpXCIsXHJcbiAgICBNTSAgOiBcIigwXFxcXGR8MVswLTJdfFxcXFxkKVwiLFxyXG4gICAgTSAgIDogXCIoWzEtOV18MVswLTJdKVwiLFxyXG4gICAgc3MgIDogXCIoWzAtNV1cXFxcZClcIiwgLy8gbW1cclxuICAgIHMgICA6IFwiKFswLTVdP1xcXFxkKVwiLCAvLyBzc1xyXG4gICAgWVlZWTogXCIoWzEtOV1cXFxcZHszLDN9KVwiLFxyXG4gICAgWVkgIDogXCIoXFxcXGR7MiwyfSlcIixcclxuICAgIEREICA6IFwiKFswLTNdXFxcXGQpXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXT9bYS16XSsoW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlthLXpdKyhbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bYS16XSooX1thLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXSooX1tBLVpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFthLXpdKnxbQS1aXSopKF9bYS16QS1aXSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVGb3JtYXQodGV4dDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZUZvcm1hdHMpIHtcclxuICAgICAgICBpZiAodGltZUZvcm1hdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShrZXksIHRpbWVGb3JtYXRzW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7Zm9ybWF0fSRgKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkUGhvbmVOdW1iZXJ9IGluc3RlYWRcclxuICogQHBhcmFtIG51bSAtIG51bSB0byB2YWxpZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRQaG9uZU51bWJlcihudW06IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRQaG9uZU51bWJlcihudW0pO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkRW1haWx9IGluc3RlYWRcclxuICogQHBhcmFtIGVtYWlsIC0gZW1haWwgdG8gdmFsaWRhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRFbWFpbChlbWFpbCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RyaW5nTWFwIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcIi4vYXJyYXktdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5nQ2hlY2tlcnMgZnJvbSBcIi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG5jb25zdCBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyA9IFwixIXDoMOhw6TDosOjw6XDpsSDxIfEjcSJxI/EmcOow6nDq8OqxJ3EpcOsw63Dr8OuxLXFgsS+xYTFiMOyw7PDtsWRw7TDtcOww7jFm8iZxZ/FocWdxaXIm8Wjxa3DucO6w7zFscO7w7HDv8O9w6fFvMW6xb5cIjtcclxuY29uc3Qgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICAgPSBcImFhYWFhYWFhYWNjY2RlZWVlZWdoaWlpaWpsbG5ub29vb29vb29zc3Nzc3R0dHV1dXV1dW55eWN6enpcIjtcclxuY29uc3QgYWNjZW50ZWRDaGFyYWN0ZXJzICAgICAgPSBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyArIGFjY2VudGVkTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcbmNvbnN0IG5vcm1hbENoYXJhY3RlcnMgICAgICAgID0gbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICsgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4vKiBUT0RPOlxyXG4gICAgc3RhdGljIHVuZGVyc2NvcmUod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGh1bWFuaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkYXNoZXJpemUod29yZCkge1xyXG4gICAgfVxyXG4gICAgLy9kYXNoQ2FzZSA9IGEtYi1jLWQtZVxyXG4gICAgLy9kb3RDYXNlIGEuYy5kLnYucy5kXHJcbiAgICAvL3Bhc2NhbENhc2UgPSBGb29CYXJCYXpcclxuICAgIC8vcGF0aENhc2UgPSBhL2IvYy9kXHJcbiAgICAvL3NuYWtlQ2FzZSA9IGFfYl9jX2RfXHJcbiAgICBzdGF0aWMgaXNVcHBlcih3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaXNMb3dlcih3b3JkKSB7XHJcbiAgICB9XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXdvcmQgfHwgIXdvcmQucmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3b3JkLnJlcGxhY2UoLy4vZywgKGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWNjZW50ZWRDaGFyYWN0ZXJzLmluZGV4T2YoZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gbm9ybWFsQ2hhcmFjdGVyc1tpbmRleF0gOiBlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY3V0VXNpbmcoXCJhYmNkZWZnaGlqXCIsIDEwKSA9PiBhYmNkZWZnaGlqXHJcbiAqICBjdXRVc2luZyhcImFiY2RlZmdoaWpcIiwgMTUpID0+IGFiY2RlZmdoaWpcclxuICogIGN1dFVzaW5nKFwiYWJjZGVmZ2hpalwiLCA5KSA9PiBhYmNkZWZnLi4uXHJcbiAqICBjdXRVc2luZyhcImFiY2RlZmdoaWpcIiwgOSwgXCIuLi5cIiwgZmFsc2UpID0+IGFiY2RlZmdoaS4uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGN1dFVzaW5nKHRleHQ6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIsIHN1ZmZpeCA9IFwiLi4uXCIsIGxlbmd0aEluY2x1ZGVTdWZmaXggPSB0cnVlKTogc3RyaW5nIHtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5zdWJzdHIoMCwgbWF4TGVuZ3RoIC0gKGxlbmd0aEluY2x1ZGVTdWZmaXggPyBzdWZmaXgubGVuZ3RoIC0gMSA6IDApKSArIHN1ZmZpeDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVXBwZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0NhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzVXBwZXJTbmFrZUNhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChpLCB1LCBlKSA9PiBlID8gXCJfXCIgKyBlIDogXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvXl8vLCBcIlwiKVxyXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Mb3dlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0xvd2VyU25ha2VDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAoaSwgdSwgZSkgPT4gZSA/IFwiX1wiICsgZSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTG93ZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0xvd2VyQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pKFtBLVpdKS9nLCBcIiQxJDJfJDNcIilcclxuICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLygtfF98IHxcXHMpKyguKT8vZywgKG1hdGgsIHNlcCwgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKGUpID0+IGUudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNVcHBlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b0NhcGl0YWwodG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY2FwaXRhbGl6ZShcImdhYm9cIikgPT4gR2Fib1xyXG4gKiAgY2FwaXRhbGl6ZShcIkdBQk9cIikgPT4gR2Fib1xyXG4gKiAgY2FwaXRhbGl6ZShcImdBQk9cIikgPT4gR2Fib1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXi4vLCAoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgY2FwaXRhbGl6ZX0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ2FwaXRhbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXi4vLCAoZSkgPT4gZS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RQYXJ0KHRleHQ6IHN0cmluZywgZGl2aWRlciA9IFwiIFwiKTogc3RyaW5nIHtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC5zcGxpdCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRUZXh0ID0gdGV4dC5zcGxpdChkaXZpZGVyKTtcclxuXHJcbiAgICByZXR1cm4gc3BsaXRUZXh0W3NwbGl0VGV4dC5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgb2NjdXJyZW5jZXN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGV4dC5tYXRjaChuZXcgUmVnRXhwKGtleSwgXCJnXCIpKSB8fCBbXSkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHRleHQgLSB0ZXh0IG5lZWQgdG8gYmUgcmVwZWF0XHJcbiAqIEBwYXJhbSBudW1iZXJPZlJlcGV0aXRpb25zIC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICogQGRlcHJlY2F0ZWQgLSB1c2Uge0BsaW5rIFN0cmluZyNyZXBlYXR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHRleHQ6IHN0cmluZywgbnVtYmVyT2ZSZXBldGl0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobnVtYmVyT2ZSZXBldGl0aW9ucyArIDEpLmpvaW4odGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3Jkcy5qb2luKFwifFwiKX0pYCwgXCJnXCIpLCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICB0ZW1wbGF0ZShcInt7bmFtZX19IGlzIHt7YWdlfX0geWVhcnMgb2xkXCIsIHtuYW1lOiBcIkdhYnJpZWxcIiwgYWdlOiAyM30pID0+IEdhYnJpZWwgaXMgMjMgeWVhcnMgb2xkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dDogc3RyaW5nLCB2YWx1ZXM6IFN0cmluZ01hcDx1bmtub3duPiwgc3RhcnQgPSBcInt7XCIsIGVuZCA9IFwifX1cIik6IHN0cmluZyB7XHJcbiAgICBjb25zdCB1cGRhdGVkU3RhcnQgPSBzdGFydC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG4gICAgY29uc3QgdXBkYXRlZEVuZCAgID0gZW5kLnJlcGxhY2UoL1stW1xcXSgpKlxcc10vZywgXCJcXFxcJCZcIikucmVwbGFjZSgvXFwkL2csIFwiXFxcXCRcIik7XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShcclxuICAgICAgICBuZXcgUmVnRXhwKGAke3VwZGF0ZWRTdGFydH0oLis/KSR7dXBkYXRlZEVuZH1gLCBcImdcIiksXHJcbiAgICAgICAgKG1hdGgsIGtleSkgPT4gU3RyaW5nKHZhbHVlc1trZXldKSxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eUxpbmVzKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9eXFxzKiQoPzpcXHJcXG4/fFxcbikvZ20sIFwiXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwiTkFNRVwiLCBcImdhYnJpZWxcIikgPT4gXCJteSBuYW1lIGlzIFwiXHJcbiAqICBiZXR3ZWVuKFwibXkgbmFtZSBpcyBnYWJyaWVsIGFuZCBJIGFtIDI2IHllYXJzIG9sZFwiLCBcIm5hbWVcIiwgXCJHQUJSSUVMXCIpID0+IFwiIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCJcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwibmFtZVwiLCBcImdhYnJpZWxcIikgPT4gXCIgaXMgXCJcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwibmFtZVwiLCBcImdhYnJpZWxcIiwgdHJ1ZSkgPT4gXCJpc1wiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmV0d2Vlbih0ZXh0OiBzdHJpbmcsIGtleTE6IHN0cmluZywga2V5Mjogc3RyaW5nLCB0cmltID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcHJvY2Vzc1Jlc3VsdCA9IChyZXN1bHQ6IHN0cmluZyk6IHN0cmluZyA9PiB0cmltID8gcmVzdWx0LnRyaW0oKSA6IHJlc3VsdDtcclxuXHJcbiAgICBjb25zdCBzdGFydFBvcyA9IHRleHQuaW5kZXhPZihrZXkxKTtcclxuICAgIGNvbnN0IGVuZFBvcyAgID0gdGV4dC5pbmRleE9mKGtleTIpO1xyXG4gICAgaWYgKHN0YXJ0UG9zIDwgMCAmJiBlbmRQb3MgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHRleHQuc3Vic3RyaW5nKDAsIGVuZFBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbmRQb3MgPCAwICYmIHN0YXJ0UG9zID49IDApIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh0ZXh0LnN1YnN0cmluZyhzdGFydFBvcyArIGtleTEubGVuZ3RoLCB0ZXh0Lmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHRleHQuc3Vic3RyaW5nKHN0YXJ0UG9zICsga2V5MS5sZW5ndGgsIGVuZFBvcykpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgb2Ygc3Vic3RyaW5nXHJcbiAqIEB2ZXJzaW9uIDAuMi40MCAtIG11Y2ggZmFzdGVyIHRoZW4gcHJldmlvdXMgcmVnZXggbWV0aG9kIHVzaW5nIGByZXR1cm4gKHRleHQubWF0Y2gobmV3IFJlZ0V4cChrZXksIFwiZ1wiKSkgfHwgW10pLmxlbmd0aDtgXHJcbiAqIEBleGFtcGxlXHJcbiAqICBvY2N1cnJlbmNlcyhcImZvb2Zvb2Zvb1wiLCBcImJhclwiKTsgPT4gMFxyXG4gKiAgb2NjdXJyZW5jZXMoXCJmb29mb29mb29cIiwgXCJmb29cIik7ID0+IDNcclxuICogIG9jY3VycmVuY2VzKFwiZm9vZm9vZm9vXCIsIFwiZm9vZm9vXCIpOyA9PiAxXHJcbiAqICBvY2N1cnJlbmNlcyhcImZvb2Zvb2Zvb1wiLCBcImZvb2Zvb1wiLCB0cnVlKTsgPT4gMlxyXG4gKiBAcGFyYW0gdGV4dCAtIHRleHRcclxuICogQHBhcmFtIGtleSAtIHNlYXJjaGVkIHN1YnN0cmluZ1xyXG4gKiBAcGFyYW0gb3ZlcmxhcHBpbmcgLSBhbGxvd3MgbWF0aCBvdmVybGFwcGluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9jY3VycmVuY2VzKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcsIG92ZXJsYXBwaW5nID0gZmFsc2UpOiBudW1iZXIge1xyXG4gICAgbGV0IGluZGV4ICAgPSB0ZXh0LmluZGV4T2Yoa2V5KTtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGNvbnN0IHN0ZXAgID0gb3ZlcmxhcHBpbmcgPyAxIDoga2V5Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIGluZGV4ID0gdGV4dC5pbmRleE9mKGtleSwgaW5kZXggKyBzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY291bnRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlV2hpdGVzcGFjZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW1xcc1xcdUZFRkZcXHhBMF17Mix9L2csIFwiIFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXFMvZywgKGNoYXIpID0+IHtcclxuICAgICAgICBjb25zdCBsb3dlckNhc2UgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsb3dlckNhc2UgPT09IGNoYXIgPyBjaGFyLnRvVXBwZXJDYXNlKCkgOiBsb3dlckNhc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBmb3JtYXRUaW1lKFwie30gaXMgYSBiaWcge31cIiwgW1wiR2Fib1wiLCBcImhlcm9cIl0pID0+IEdhYm8gaXMgYSBiaWcgaGVyb1xyXG4gKiAgZm9ybWF0VGltZShcIjw+IGlzIGEgYmlnIDw+XCIsIFtcIkdhYm9cIiwgXCJoZXJvXCJdLCBcIjw+XCIpID0+IEdhYm8gaXMgYSBiaWcgaGVyb1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh0ZXh0OiBzdHJpbmcsIHZhbHVlczogc3RyaW5nW10sIHBsYWNlSG9sZGVyID0gXCJ7fVwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICAgIGxldCBsYXN0SW5kZXg7XHJcbiAgICBsZXQgYWN0dWFsSW5kZXggICAgICAgID0gMDtcclxuICAgIGxldCBjb3VudGVyICAgICAgICAgICAgPSAwO1xyXG5cclxuICAgIHdoaWxlIChjb3VudGVyIDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxhc3RJbmRleCAgID0gYWN0dWFsSW5kZXg7XHJcbiAgICAgICAgYWN0dWFsSW5kZXggPSB0ZXh0LmluZGV4T2YocGxhY2VIb2xkZXIsIGFjdHVhbEluZGV4KTtcclxuICAgICAgICByZXN1bHQucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIGFjdHVhbEluZGV4KSk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWVzW2NvdW50ZXIrK10pO1xyXG4gICAgICAgIGFjdHVhbEluZGV4ICs9IHBsYWNlSG9sZGVyLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJlc3VsdC5wdXNoKHRleHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4KSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVG9CYXNpY0Zvcm1hdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbGxhcHNlV2hpdGVzcGFjZShyZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dCkudG9Mb3dlckNhc2UoKSkudHJpbSgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGdldEFzY2lpQXJyYXkoXCJhYmNkZWZnXCIpID09PiBbOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzXVxyXG4gKiBAcGFyYW0gdGhpc0FyZyAtIGFyZ3VtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNjaWlBcnJheSh0aGlzQXJnOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIHRoaXNBcmcpIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsZXR0ZXIuY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9CYXNpY0Zvcm0odGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHRleHQ6IHN0cmluZywgc3Vic3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRleHQgJiYgcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihzdWJzdHJpbmcpID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgam9pblNpbmdsZShcInBhY2thZ2VcIiwgXCIuXCIsIFwianNvblwiKSA9PiBwYWNrYWdlLmpzb25cclxuICogIGpvaW5TaW5nbGUoXCJwYWNrYWdlLlwiLCBcIi5cIiwgXCJqc29uXCIpID0+IHBhY2thZ2UuanNvblxyXG4gKiAgam9pblNpbmdsZShcInBhY2thZ2VcIiwgXCIuXCIsIFwiLmpzb25cIikgPT4gcGFja2FnZS5qc29uXHJcbiAqICBqb2luU2luZ2xlKFwicGFja2FnZS5cIiwgXCIuXCIsIFwiLmpzb25cIikgPT4gcGFja2FnZS5qc29uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pblNpbmdsZShwcmVmaXg6IHN0cmluZywgZGl2aWRlcjogc3RyaW5nLCBwb3N0Zml4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHBvc3RmaXguc3RhcnRzV2l0aChkaXZpZGVyKSAmJiBwcmVmaXguZW5kc1dpdGgoZGl2aWRlcikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgcG9zdGZpeC5zdWJzdHJpbmcoZGl2aWRlci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwb3N0Zml4LnN0YXJ0c1dpdGgoZGl2aWRlcikgfHwgcHJlZml4LmVuZHNXaXRoKGRpdmlkZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGRpdmlkZXIgKyBwb3N0Zml4O1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBqb2lufSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBkYXRhIC0gZGF0YSB0byBqb2luXHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBkZWxpbWl0ZXJcclxuICogQHBhcmFtIHByZWZpeCAtIHByZWZpeFxyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHBvc3RmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luU3RyaW5nKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGpvaW4oZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bTogc3RyaW5nLCBwcmVmaXggPSBcIis0MjFcIik6IHN0cmluZyB7XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvWyggKS8tXS9nLCBcIlwiKTtcclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIitcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiMDBcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtLnN1YnN0cmluZygyKTtcclxuICAgIH1cclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIjA5XCIpIHx8IG51bS5zdGFydHNXaXRoKFwiMDJcIikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgbnVtLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdXp6eV9tYXRjaF9zaW1wbGUocGF0dGVybjogc3RyaW5nLCBzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHBhdHRlcm5JZHggICAgICA9IDA7XHJcbiAgICBsZXQgc3RySWR4ICAgICAgICAgID0gMDtcclxuICAgIGNvbnN0IHBhdHRlcm5MZW5ndGggPSBwYXR0ZXJuLmxlbmd0aDtcclxuICAgIGNvbnN0IHN0ckxlbmd0aCAgICAgPSBzdHIubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChwYXR0ZXJuSWR4ICE9PSBwYXR0ZXJuTGVuZ3RoICYmIHN0cklkeCAhPT0gc3RyTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybkNoYXIgPSBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuSWR4KVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBzdHJDaGFyICAgICA9IHN0ci5jaGFyQXQoc3RySWR4KVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocGF0dGVybkNoYXIgPT09IHN0ckNoYXIpIHtcclxuICAgICAgICAgICAgKytwYXR0ZXJuSWR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICArK3N0cklkeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0dGVybkxlbmd0aCAhPT0gMCAmJiBzdHJMZW5ndGggIT09IDAgJiYgcGF0dGVybklkeCA9PT0gcGF0dGVybkxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VGb3JBbGwoY29udGVudDogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCBwbGFjZUhvbGRlcjogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiBjb250ZW50LnJlcGxhY2UocGxhY2VIb2xkZXIsIHZhbHVlKSk7XHJcbn1cclxuIiwiY29uc3Qgc3ZnbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnPFQgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4odHlwZTogVCk6IFNWR0VsZW1lbnRUYWdOYW1lTWFwW1RdIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsIHR5cGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtKHNlbGVjdGVkRWxlbWVudDogU1ZHR3JhcGhpY3NFbGVtZW50KTogU1ZHVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybXMgPSBzZWxlY3RlZEVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XHJcbiAgICBpZiAodHJhbnNmb3Jtcy5udW1iZXJPZkl0ZW1zID09PSAwIHx8XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5nZXRJdGVtKDApLnR5cGUgIT09IFNWR1RyYW5zZm9ybS5TVkdfVFJBTlNGT1JNX1RSQU5TTEFURSkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IChzZWxlY3RlZEVsZW1lbnQub3duZXJTVkdFbGVtZW50IGFzIFNWR1NWR0VsZW1lbnQpLmNyZWF0ZVNWR1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIHRyYW5zbGF0ZS5zZXRUcmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsLmluc2VydEl0ZW1CZWZvcmUodHJhbnNsYXRlLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJhbnNmb3Jtcy5nZXRJdGVtKDApO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGludGVydmFsczogU3RyaW5nTWFwPG51bWJlcj4gPSB7XHJcbiAgICBcInllYXJcIiAgOiAzMTUzNjAwMCxcclxuICAgIFwibW9udGhcIiA6IDI1OTIwMDAsXHJcbiAgICBcIndlZWtcIiAgOiA2MDQ4MDAsXHJcbiAgICBcImRheVwiICAgOiA4NjQwMCxcclxuICAgIFwiaG91clwiICA6IDM2MDAsXHJcbiAgICBcIm1pbnV0ZVwiOiA2MCxcclxuICAgIFwic2Vjb25kXCI6IDEsXHJcbn07XHJcblxyXG5jb25zdCBpbnRlcnZhbEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhpbnRlcnZhbHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVBZ28odmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCgrbmV3IERhdGUoKSAtICtuZXcgRGF0ZSh2YWx1ZSkpIC8gMTAwMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAyOSkgeyAvLyBsZXNzIHRoYW4gMzAgc2Vjb25kcyBhZ28gd2lsbCBzaG93IGFzICdKdXN0IG5vdydcclxuICAgICAgICAgICAgcmV0dXJuIFwiSnVzdCBub3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnRlcnZhbF0gb2YgaW50ZXJ2YWxFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBNYXRoLmZsb29yKHNlY29uZHMgLyBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y291bnRlcn0gJHtrZXl9IGFnb2A7IC8vIHNpbmd1bGFyICgxIGRheSBhZ28pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVyfSAke2tleX1zIGFnb2A7IC8vIHBsdXJhbCAoMiBkYXlzIGFnbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlOiBEYXRlLCBwYXR0ZXJuOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAodGltZTogbnVtYmVyKTogc3RyaW5nID0+IHRpbWUgPCAxMCA/IFwiMFwiICsgdGltZSA6IFwiXCIgKyB0aW1lO1xyXG5cclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihERHxNTXxZWVlZfFlZWXxZWXxISHxtbXxTUylcIiwgXCJnXCIpO1xyXG4gICAgY29uc3QgREQgICAgPSB0b1N0cmluZyhkYXRlLmdldERhdGUoKSk7XHJcbiAgICBjb25zdCBNTSAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgY29uc3QgWVlZWSAgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIlwiO1xyXG4gICAgY29uc3QgWVlZICAgPSBZWVlZLnN1YnN0cigxLCA0KTtcclxuICAgIGNvbnN0IFlZICAgID0gWVlZLnN1YnN0cigxLCA0KTtcclxuICAgIGNvbnN0IEhIICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRIb3VycygpKTtcclxuICAgIGNvbnN0IG1tICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgY29uc3QgU1MgICAgPSB0b1N0cmluZyhkYXRlLmdldFNlY29uZHMoKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShyZWdleCwgKGUpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkREXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gREQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNTVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1NO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBISDtcclxuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW07XHJcbiAgICAgICAgICAgIGNhc2UgXCJTU1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNTO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3BXYXRjaCgpOiB7IGdldERpZmZNcygpOiBudW1iZXI7IGdldERpZmYoKTogc3RyaW5nIH0ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IGdldERpZmZNcyA9ICgpOiBudW1iZXIgPT4gRGF0ZS5ub3coKSAtIHN0YXJ0O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0RGlmZk1zLFxyXG4gICAgICAgIGdldERpZmYoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldERpZmZNcygpICsgXCJtc1wiO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIG9wdDogeyBtczogbnVtYmVyLCBzOiBudW1iZXIsIG06IG51bWJlciwgaDogbnVtYmVyIH0pOiBEYXRlIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzTmFOKG9wdC5tcykpIHtcclxuICAgICAgICBkYXRlLnNldE1pbGxpc2Vjb25kcyhvcHQubXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQucykpIHtcclxuICAgICAgICBkYXRlLnNldFNlY29uZHMob3B0LnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQubSkpIHtcclxuICAgICAgICBkYXRlLnNldE1pbnV0ZXMob3B0Lm0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQuaCkpIHtcclxuICAgICAgICBkYXRlLnNldEhvdXJzKG9wdC5oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0T2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge1xyXG4gICAgICAgIG1zOiAwLFxyXG4gICAgICAgIHMgOiAwLFxyXG4gICAgICAgIG0gOiAwLFxyXG4gICAgICAgIGggOiAwLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRPZlRoZURheShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gc2V0RGF0ZShkYXRlLCB7XHJcbiAgICAgICAgbXM6IDk5OSxcclxuICAgICAgICBzIDogNTksXHJcbiAgICAgICAgbSA6IDU5LFxyXG4gICAgICAgIGggOiAyMyxcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL21pc2MtdmFsaWRhdG9yc1wiO1xyXG4iLCJjb25zdCB2YWxpZEVtYWlsUmVnZXggICAgICAgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuY29uc3QgdmFsaWRQaG9uZU51bWJlclJlZ2V4ID0gL14oWytdfDAwKT9bKF0/WzAtOV17Myw0fVspXT9bLVxccy5dP1swLTldezIsM31bLVxccy5dP1swLTldezIsNn0oWy1cXHMuXT9bMC05XXszfSk/JC9pbTtcclxuXHJcbmZ1bmN0aW9uIHR5cGVPZihhcmc6IHVua25vd24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBhcmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGFyZzogYW55KTogYXJnIGlzIHN0cmluZyB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwic3RyaW5nXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm9iamVjdFwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoYXJnOiBhbnkpOiBhcmcgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbihhcmc6IGFueSk6IGFyZyBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJib29sZWFuXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGbG9hdChhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm51bWJlclwiICYmIGFyZyAlIDEgIT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChhcmc/OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJ1bmRlZmluZWRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KG9iaikgJiZcclxuICAgICAgICAgICAgb2JqLm5vZGVUeXBlID09PSAxICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5zdHlsZSkgJiZcclxuICAgICAgICAgICAgaXNPYmplY3Qob2JqLm93bmVyRG9jdW1lbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwIHx8IC9eW1xcc1xceGEwXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUGhvbmVOdW1iZXIobnVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghbnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZFBob25lTnVtYmVyUmVnZXgudGVzdChudW0udHJpbSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZEVtYWlsUmVnZXgudGVzdChlbWFpbC50cmltKCkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMzYwNyk7XG4iXSwic291cmNlUm9vdCI6IiJ9