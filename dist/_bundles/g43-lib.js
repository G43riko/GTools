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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2ctbWFwLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2tleS12YWx1ZS1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLWRlZmF1bHQtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL2xvZ2dlci9nLWxvZ2dlci1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9sb2dnZXIvZy1sb2dnZXItcHJpb3JpdHkudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbG9nZ2VyL2ctbG9nZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL251bWJlci1jb3VudGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uZmlnL2d0b29scy1jb25maWcudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9kZXByZWNhdGVkLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9maW5hbC1jbGFzcy5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvbWFwcGVyLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9zaW5nbGV0b24uZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3dhdGNoLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZG9tL2NhbnZhcy1tYW5hZ2VyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZG9tLWdldC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvYnV0dG9uLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2RheXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvZW5jb2RpbmdzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2ZpbGUtdHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaHR0cC1zdGF0dXMtY29kZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2tleXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbWlzc2luZy1wYXJhbWV0ZXIuZXJyb3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy9uby1kYXRhYmFzZS1jb25uZWN0aW9uLmVycm9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbnVsbC1wb2ludGVyLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL3dyb25nLXBhcmFtZXRlci5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2Vycm9ycy93cm9uZy10eXBlLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IyZi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tYXRoL3ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvYWpheC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9maWxlLXNpemUtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3J1bnRpbWUtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zaW1wbGUtbG9vcC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zbG92YWstc3RlbW1lci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL2NvbG9yLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvZ2VuZGVyLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy9wYXRoLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvYm91bmRlcnMtMmQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvY2xvc2VzdC0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9jbG9zZXN0LTNkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2NvbGxpc2lvbnMtMmQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvY29sbGlzaW9ucy0zZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9kaXN0YW5jZXMtMmQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvZGlzdGFuY2VzLTNkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2ludGVyc2VjdHMtM2QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3Mvb2JqZWN0cy8yZC9yZWN0LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL29iamVjdHMvMmQvc3BoZXJlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL29iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3Mvb2JqZWN0cy9vYmplY3QtY29udmVydG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QtZGF0YWJhc2UuZml4dHVyZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QuZml4dHVyZS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvYWJzdHJhY3QubWFwcGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9wYWdpbmF0ZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2FuYWx5dGljcy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvYXJyYXktdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2NvZXJjZS11dGlsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9jb2xvci11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGF0ZS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaHRtbC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaW1hZ2UtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9pbnB1dC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWF0aC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWlzYy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvb2JqZWN0LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9wYXJzZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3Byb2Nlc3MtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3JhbmRvbS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcmVmbGVjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3RyaW5nLWNoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3N2Zy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvdGltZS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdmFsaWRhdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0c0M0xpYi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxnREFBd0I7QUFFeEIsaURBQWlEO0FBQ2pELGlEQUF1QztBQUV2QyxpREFBNkI7QUFDN0IsaURBQXFDO0FBQ3JDLGlEQUFtQztBQUNuQyxpREFBOEI7QUFDOUIsaURBQWlEO0FBTWpELGlEQUE2QjtBQUU3QixpREFBeUI7QUFFekIsaURBQTZCO0FBRTdCLGlEQUF1QjtBQUN2QixpREFBdUI7QUFDdkIsaURBQTBCO0FBRTFCLGlEQUF5QjtBQUV6QixpREFBa0Q7QUFDbEQsaURBQXlDO0FBQ3pDLGlEQUF3QztBQUN4QyxpREFBdUM7QUFFdkMsaURBQXdCO0FBQ3hCLGlEQUF3Qjs7Ozs7Ozs7Ozs7QUNqQ3hCLGtEQUFxRDtBQU1yRDtJQVVJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxD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LENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDeEIsRUFBRTtRQUNDLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNQLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDakIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNQLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDaEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFJbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FDdEIsRUFBRTtRQUNILE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNQLENBQ0ksR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsUUFBUSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUVKLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0o7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLENBQVM7SUFDaEMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyQixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMvQjtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLENBQVM7SUFDeEIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQU1yQixRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDaEIsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLEdBQUc7WUFDSixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUM5RCxLQUFLLEdBQUc7WUFDSixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUM5RCxLQUFLLEdBQUc7WUFDSixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUM5RCxLQUFLLEdBQUc7WUFDSixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQXZCLENBQXVCLENBQUMsQ0FBQztLQUNqRTtJQUVELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7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Z0IsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFlO0lBQ3RELElBQU0sTUFBTSxnQkFBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNsQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNCO1NBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN6RCxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNsQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNCO1NBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN6RCxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQWZELGdDQWVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLE1BQWMsRUFBRSxNQUFjO0lBQ3BELElBQU0sTUFBTSxnQkFBVyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7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RyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25ELHVDQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNqQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDYixLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25ELHVDQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNqQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDYixLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25ELHVDQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNqQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDYixLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFDOUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQzlDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25ELHVDQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxF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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Imc0My1saWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkc0M0xpYlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRzQzTGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZGVjb3JhdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2NhbnZhcy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZG9tLWdldFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vdHlwZXMvY2FudmFzLXNoYWRvdy1jb25maWdcIjtcclxuXHJcbi8vIFRPRE8gbm90IHdvcmsgb24gYmFja2VuZFxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9kb20vZWxlbWVudC1idWlsZGVyXCI7XHJcblxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi92YWxpZGF0b3JzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9taXNjXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGh5c2ljc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC1kYXRhYmFzZS5maXh0dXJlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QubWFwcGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL3BhZ2luYXRlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlsc1wiO1xyXG4iLCJpbXBvcnQgeyBGaWxlVHlwZXMgfSBmcm9tIFwiLi4vZW51bXMvZmlsZS10eXBlcy5lbnVtXCI7XHJcblxyXG4vKipcclxuICogIEZpbGVNYW5hZ2VyIGlzIGNsYXNzIHVzZWQgZm9yIG9wZW4gYW5kIHNhdmUgZmlsZXNcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcml2YXRlIGlucHV0IHVzZWQgZm9yIG9wZW5pbmcgc3lzdGVtIHdpbmRvdyBmb3IgdXBsb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciBkb3dubG9hZCBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbms6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZpbGVzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0ZXh0IGNvbnRlbnQgaW50byBmaWxlIHdpdGggc3BlY2lmaWMgZXh0ZW5zaW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGZpbGUgbmFtZVxyXG4gICAgICogQHBhcmFtIHRleHQgZmlsZSBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBmaWxlIHtAbGluayBGaWxlVHlwZXN9LiBEZWZhdWx0IHZhbHVlIGlzIHtAbGluayBGaWxlVHlwZXMuVFhUfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2F2ZUZpbGUobmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHR5cGU6IEZpbGVUeXBlcyA9IEZpbGVUeXBlcy5UWFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxpbmsuaHJlZiAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFt0ZXh0XSwge3R5cGV9KSk7XHJcbiAgICAgICAgdGhpcy5saW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICB0aGlzLmxpbmsuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgaW1hZ2UgaW50byBmaWxlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgaW1hZ2UgbmFtZVxyXG4gICAgICogQHBhcmFtIGltYWdlIGltYWdlIGVsZW1lbnQgb3IgcGF0aCB0byBpbWFnZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2F2ZUltYWdlKG5hbWU6IHN0cmluZywgaW1hZ2U6IHN0cmluZyB8IEhUTUxJbWFnZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxpbmsuaHJlZiAgICAgPSB0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIgPyBpbWFnZSA6IGltYWdlLnNyYztcclxuICAgICAgICB0aGlzLmxpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluay5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBpbWFnZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIGZ1bmMgbG9hZGluZyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEltYWdlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZU5hbWU6IHN0cmluZykgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzICAgICAgICAgICAgICA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCAgICAgICAgICAgID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyAgID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBmdW5jKGltYWdlLCBmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzWzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgZmlsZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkRmlsZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVzOiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgID0gKGUudGFyZ2V0IGFzIGFueSkuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gZnVuYyhyZWFkZXIucmVzdWx0LCBmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgYmluYXJ5IGZpbGUgdXNpbmcgc3lzdGVtIGZpbGUgcGlja2VyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZ1bmMgbG9hZGluZyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJpbmFyeUZpbGUoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlTmFtZTogc3RyaW5nKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IGZ1bmMocmVhZGVyLnJlc3VsdCwgZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBHTWFwPFQsIFM+IGV4dGVuZHMgTWFwPFQsIFM+IHtcclxuICAgIHB1YmxpYyBnZXQoa2V5OiBULCBkZWZhdWx0VmFsdWU/OiBTKTogUyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpIHx8IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3JDcmVhdGUoa2V5OiBULCBkZWZhdWx0VmFsdWU6IFMpOiBTIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5nZXQoa2V5KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9maWxlLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbG9nZ2VyL2ctbG9nZ2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ctbWFwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL251bWJlci1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BhZ2luYXRvclwiO1xyXG5leHBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuZXhwb3J0IHsgR0xvZ2dlckRlZmF1bHRGb3JtYXR0ZXIgfSBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXItZGVmYXVsdC1mb3JtYXR0ZXJcIjtcclxuZXhwb3J0IHsgR0xvZ2dlckNhbGxiYWNrSG9sZGVyIH0gZnJvbSBcIi4vbG9nZ2VyL2ctbG9nZ2VyLWNhbGxiYWNrLWhvbGRlclwiO1xyXG5leHBvcnQgeyBHTG9nZ2VySW5zdGFuY2UgfSBmcm9tIFwiLi9sb2dnZXIvZy1sb2dnZXItaW5zdGFuY2VcIjtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBTaW1wbGVXcmFwcGVyIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlQ291bnRlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVzdWx0czogU2ltcGxlV3JhcHBlcltdICAgICAgICA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGFkZChpdGVtOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXRlbSBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3BOKGNvdW50OiBudW1iZXIpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzLnNsaWNlKDAsIGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogdGhpcy5kYXRhW2tleV0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3VsdHMuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHTG9nZ2VyQ2FsbGJhY2sgfSBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyRGVmYXVsdEZvcm1hdHRlciB9IGZyb20gXCIuL2ctbG9nZ2VyLWRlZmF1bHQtZm9ybWF0dGVyXCI7XHJcbmltcG9ydCB7IEdMb2dnZXJQcmlvcml0eSB9IGZyb20gXCIuL2ctbG9nZ2VyLXByaW9yaXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR0xvZ2dlckNhbGxiYWNrSG9sZGVyIHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjYWxsYmFja3M6IHsgW2tleSBpbiBHTG9nZ2VyUHJpb3JpdHldOiBHTG9nZ2VyQ2FsbGJhY2sgfSkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ29uc29sZUNhbGxiYWNrcyhmb3JtYXR0ZXIgPSBuZXcgR0xvZ2dlckRlZmF1bHRGb3JtYXR0ZXIoKSk6IEdMb2dnZXJDYWxsYmFja0hvbGRlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIoe1xyXG4gICAgICAgICAgICAvLyBbR0xvZ2dlclByaW9yaXR5LkxPR10gICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhjb250ZXh0ID8gYCR7W2NvbnRleHRdfVxcdGAgOiBcIlwiLCAuLi5tZXNzYWdlKSxcclxuICAgICAgICAgICAgLy8gW0dMb2dnZXJQcmlvcml0eS5XQVJOXSAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS53YXJuKGNvbnRleHQgPyBgJHtbY29udGV4dF19XFx0YCA6IFwiXCIsIC4uLm1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAvLyBbR0xvZ2dlclByaW9yaXR5LkVSUk9SXSAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGNvbnRleHQgPyBgJHtbY29udGV4dF19XFx0YCA6IFwiXCIsIC4uLm1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAvLyBbR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1NdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhjb250ZXh0ID8gYCR7W2NvbnRleHRdfVxcdGAgOiBcIlwiLCAuLi5tZXNzYWdlKSxcclxuICAgICAgICAgICAgLy8gW0dMb2dnZXJQcmlvcml0eS5WRVJCT1NFXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gY29uc29sZS5sb2coY29udGV4dCA/IGAke1tjb250ZXh0XX1cXHRgIDogXCJcIiwgLi4ubWVzc2FnZSksXHJcblxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LkxPR10gICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyguLi5mb3JtYXR0ZXIuZm9ybWF0Q29sb3JlZChHTG9nZ2VyUHJpb3JpdHkuTE9HLCBtZXNzYWdlLCBjb250ZXh0KSksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuV0FSTl0gICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGNvbnNvbGUud2FybiguLi5mb3JtYXR0ZXIuZm9ybWF0Q29sb3JlZChHTG9nZ2VyUHJpb3JpdHkuV0FSTiwgbWVzc2FnZSwgY29udGV4dCkpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LkVSUk9SXSAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKC4uLmZvcm1hdHRlci5mb3JtYXRDb2xvcmVkKEdMb2dnZXJQcmlvcml0eS5FUlJPUiwgbWVzc2FnZSwgY29udGV4dCkpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1NdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyguLi5mb3JtYXR0ZXIuZm9ybWF0Q29sb3JlZChHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTUywgbWVzc2FnZSwgY29udGV4dCkpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlZFUkJPU0VdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyguLi5mb3JtYXR0ZXIuZm9ybWF0Q29sb3JlZChHTG9nZ2VyUHJpb3JpdHkuVkVSQk9TRSwgbWVzc2FnZSwgY29udGV4dCkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQXJyYXlDYWxsYmFja3MoYXJyYXk6IHVua25vd25bXSwgb3B0aW9uczogeyBtYXBwZXI/OiAocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgbWVzc2FnZXM6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gdW5rbm93biB9ID0ge30pOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIge1xyXG4gICAgICAgIGNvbnN0IG1hcHBlciAgICAgICAgPSBvcHRpb25zLm1hcHBlciB8fCAoKHByaW9yaXR5LCBtZXNzYWdlcywgY29udGV4dCkgPT4gW3ByaW9yaXR5LCBtZXNzYWdlcywgY29udGV4dF0pO1xyXG4gICAgICAgIGNvbnN0IGFwcGVuZFRvQXJyYXkgPSAocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgbWVzc2FnZXM6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG1hcHBlcihwcmlvcml0eSwgbWVzc2FnZXMsIGNvbnRleHQpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXJDYWxsYmFja0hvbGRlcih7XHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuTE9HXSAgICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvQXJyYXkoR0xvZ2dlclByaW9yaXR5LkxPRywgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuV0FSTl0gICA6IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvQXJyYXkoR0xvZ2dlclByaW9yaXR5LldBUk4sIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LkVSUk9SXSAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0FycmF5KEdMb2dnZXJQcmlvcml0eS5FUlJPUiwgbWVzc2FnZSwgY29udGV4dCksXHJcbiAgICAgICAgICAgIFtHTG9nZ2VyUHJpb3JpdHkuU1VDQ0VTU106IChtZXNzYWdlOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpID0+IGFwcGVuZFRvQXJyYXkoR0xvZ2dlclByaW9yaXR5LlNVQ0NFU1MsIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgICAgICAgICBbR0xvZ2dlclByaW9yaXR5LlZFUkJPU0VdOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0FycmF5KEdMb2dnZXJQcmlvcml0eS5WRVJCT1NFLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBjcmVhdGVGaWxlQ2FsbGJhY2tzKGZpbGVQYXRoOiBzdHJpbmcsIG9wdGlvbnM6IHsgZW5jb2Rpbmc/OiBcInV0ZjhcIiB9ID0ge30pOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHBhdGgucmVzb2x2ZShmaWxlUGF0aCk7XHJcbiAgICAvLyAgICAgY29uc3QgZW5jb2RpbmcgICAgID0gb3B0aW9ucy5lbmNvZGluZyB8fCBcInV0ZjhcIjtcclxuICAgIC8vICAgICBjb25zdCBhcHBlbmRUb0ZpbGUgPSAocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgbWVzc2FnZXM6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgLy8gICAgICAgICBmcy5hcHBlbmRGaWxlU3luYyhyZXNvbHZlZFBhdGgsIGAke3ByaW9yaXR5fWAgKyAoY29udGV4dCA/IGAke2NvbnRleHR9XFx0YCA6IFwiXCIpICsgbWVzc2FnZXMuam9pbihcIiBcIiksIHtlbmNvZGluZ30pO1xyXG4gICAgLy8gICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgR0xvZ2dlckNhbGxiYWNrSG9sZGVyKHtcclxuICAgIC8vICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5MT0ddICAgIDogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9GaWxlKEdMb2dnZXJQcmlvcml0eS5MT0csIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LldBUk5dICAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LldBUk4sIG1lc3NhZ2UsIGNvbnRleHQpLFxyXG4gICAgLy8gICAgICAgICBbR0xvZ2dlclByaW9yaXR5LkVSUk9SXSAgOiAobWVzc2FnZTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKSA9PiBhcHBlbmRUb0ZpbGUoR0xvZ2dlclByaW9yaXR5LkVSUk9SLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgIC8vICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5TVUNDRVNTXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9GaWxlKEdMb2dnZXJQcmlvcml0eS5TVUNDRVNTLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgIC8vICAgICAgICAgW0dMb2dnZXJQcmlvcml0eS5WRVJCT1NFXTogKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gYXBwZW5kVG9GaWxlKEdMb2dnZXJQcmlvcml0eS5WRVJCT1NFLCBtZXNzYWdlLCBjb250ZXh0KSxcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FsbGJhY2socHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgY2FsbGJhY2s6IEdMb2dnZXJDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzW3ByaW9yaXR5XSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoaG9sZGVyOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIpOiB2b2lkIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKEdMb2dnZXJQcmlvcml0eSkuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDYWxsYmFjayhwcmlvcml0eSwgaG9sZGVyLmdldENhbGxiYWNrKHByaW9yaXR5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhbGxiYWNrKHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHkpOiBHTG9nZ2VyQ2FsbGJhY2sge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrc1twcmlvcml0eV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGF0ZUFnbywgcmFuZG9tSXRlbSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyRm9ybWF0dGVyIH0gZnJvbSBcIi4vZy1sb2dnZXJcIjtcclxuaW1wb3J0IHsgR0xvZ2dlclByaW9yaXR5IH0gZnJvbSBcIi4vZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyRGVmYXVsdEZvcm1hdHRlciBpbXBsZW1lbnRzIEdMb2dnZXJGb3JtYXR0ZXIge1xyXG4gICAgcHVibGljIHNob3dQcmlvcml0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2hvd0NvbnRleHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0cnVlO1xyXG4gICAgcHVibGljIHNob3dUaW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2hvd1RpbWVPZmZzZXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyB1c2VEaWZmZXJlbnRDb2xvcnNGb3JDb250ZXh0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRydWU7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29sb3JzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICAgICAgICAgICAgICAgPSB7fTtcclxuICAgIHByaXZhdGUgbGFzdEZvcm1hdFRpbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IERhdGUubm93KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHRDb2xvck1hcDogeyBbY29udGV4dDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgZm9ybWF0Q29sb3JlZChwcmlvcml0eTogR0xvZ2dlclByaW9yaXR5LCBkYXRhOiB1bmtub3duW10sIGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFt0aGlzLmdldE91dHB1dEFycmF5KHByaW9yaXR5LCBkYXRhLCBjb250ZXh0KS5qb2luKFwiIFwiKV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dQcmlvcml0eSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgY29sb3I6ICR7dGhpcy5jb2xvcnMucHJpb3JpdHkgfHwgXCJibHVlXCJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dDb250ZXh0ICYmIGNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYGNvbG9yOiAke3RoaXMuZ2V0Q29sb3JGb3JDb250ZXh0KGNvbnRleHQsIHRoaXMuY29sb3JzLmNvbnRleHQgfHwgXCJyZWRcIil9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgY29sb3I6ICR7dGhpcy5jb2xvcnMudGltZSB8fCBcImdyZWVuXCJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy50aW1lT2Zmc2V0IHx8IFwiZ3JlZW5cIn1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGBjb2xvcjogJHt0aGlzLmNvbG9ycy50ZXh0Q29sb3IgfHwgXCJibGFja1wifWApO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JtYXQocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPdXRwdXRBcnJheShwcmlvcml0eSwgZGF0YSwgY29udGV4dCkuam9pbihcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb2xvckZvckNvbnRleHQoY29udGV4dDogc3RyaW5nLCBkZWZhdWx0Q29sb3I6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZURpZmZlcmVudENvbG9yc0ZvckNvbnRleHRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dCBpbiB0aGlzLmNvbnRleHRDb2xvck1hcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Q29sb3JNYXBbY29udGV4dF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVDb2xvciA9ICgpOiBzdHJpbmcgPT5cclxuICAgICAgICAgICAgYCMke25ldyBBcnJheSg2KS5maWxsKFwiXCIpLm1hcCgoKSA9PiByYW5kb21JdGVtKFwiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIikpLmpvaW4oXCJcIil9YFxyXG4gICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dENvbG9yTWFwW2NvbnRleHRdID0gY3JlYXRlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE91dHB1dEFycmF5KHByaW9yaXR5OiBHTG9nZ2VyUHJpb3JpdHksIGRhdGE6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBwYXJ0aWFsczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1ByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxzLnB1c2goYFske3ByaW9yaXR5fV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0NvbnRleHQgJiYgY29udGV4dCkge1xyXG4gICAgICAgICAgICBwYXJ0aWFscy5wdXNoKGNvbnRleHQgKyBcIjpcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICAgICAgICBwYXJ0aWFscy5wdXNoKGBbJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9XWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1RpbWVPZmZzZXQpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgcGFydGlhbHMucHVzaChgJHtkYXRlQWdvKG5vdyAtIHRoaXMubGFzdEZvcm1hdFRpbWUpfWApO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RGb3JtYXRUaW1lID0gbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJ0aWFscy5wdXNoKC4uLmRhdGEubWFwKFN0cmluZykpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFydGlhbHM7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR0xvZ2dlciwgR0xvZ2dlckNhbGxiYWNrLCBHTG9nZ2VyQ29udGV4dFR5cGUgfSBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIgfSBmcm9tIFwiLi9nLWxvZ2dlci1jYWxsYmFjay1ob2xkZXJcIjtcclxuaW1wb3J0IHsgR0xvZ2dlclByaW9yaXR5IH0gZnJvbSBcIi4vZy1sb2dnZXItcHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHTG9nZ2VySW5zdGFuY2Uge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyQ2FsbGJhY2tzPzogR0xvZ2dlckNhbGxiYWNrSG9sZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBsb2NhbFByaW50KHR5cGU6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjYWxsYmFja3M6IEdMb2dnZXJDYWxsYmFja0hvbGRlciwgY29udGV4dD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNhbGxiYWNrcy5nZXRDYWxsYmFjayh0eXBlKShkYXRhLCBjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TG9nQ2FsbGJhY2socHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgY2FsbGJhY2s6IEdMb2dnZXJDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyQ2FsbGJhY2tzPy5zZXRDYWxsYmFjayhwcmlvcml0eSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldExvZ0NhbGxiYWNrcyhjYWxsYmFja0hvbGRlcjogR0xvZ2dlckNhbGxiYWNrSG9sZGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXJDYWxsYmFja3M/LnNldChjYWxsYmFja0hvbGRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyguLi5tZXNzYWdlczogdW5rbm93bltdKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuTE9HLCB0aGlzLmNvbnRleHQsIC4uLm1lc3NhZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybiguLi5tZXNzYWdlczogdW5rbm93bltdKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuV0FSTiwgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKC4uLm1lc3NhZ2VzOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KEdMb2dnZXJQcmlvcml0eS5FUlJPUiwgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gR0xvZ2dlclByaW9yaXR5IHtcclxuICAgIExPRyAgICAgPSBcIkxPR1wiLFxyXG4gICAgV0FSTiAgICA9IFwiV0FSTlwiLFxyXG4gICAgRVJST1IgICA9IFwiRVJST1JcIixcclxuICAgIFZFUkJPU0UgPSBcIlZFUkJPU0VcIixcclxuICAgIFNVQ0NFU1MgPSBcIlNVQ0NFU1NcIlxyXG59XHJcbiIsImltcG9ydCB7IEdMb2dnZXJDYWxsYmFja0hvbGRlciB9IGZyb20gXCIuL2ctbG9nZ2VyLWNhbGxiYWNrLWhvbGRlclwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VySW5zdGFuY2UgfSBmcm9tIFwiLi9nLWxvZ2dlci1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBHTG9nZ2VyUHJpb3JpdHkgfSBmcm9tIFwiLi9nLWxvZ2dlci1wcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgR0xvZ2dlckNvbnRleHRUeXBlID0gc3RyaW5nIHwgeyBjb25zdHJ1Y3Rvcj86IHsgbmFtZTogc3RyaW5nIH0sIG5hbWU/OiBzdHJpbmcgfTtcclxuZXhwb3J0IHR5cGUgR0xvZ2dlckNhbGxiYWNrID0gKG1lc3NhZ2U6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR0xvZ2dlckZvcm1hdHRlciB7XHJcbiAgICBmb3JtYXQocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgZGF0YTogdW5rbm93bltdLCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR0xvZ2dlciBleHRlbmRzIEdMb2dnZXJJbnN0YW5jZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBzdGF0aWNDYWxsYmFja3MgPSBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIuY3JlYXRlQ29uc29sZUNhbGxiYWNrcygpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q2FsbGJhY2tzKGNhbGxiYWNrSG9sZGVyOiBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIpOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnN0YXRpY0NhbGxiYWNrcy5zZXQoY2FsbGJhY2tIb2xkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGluZShzdGVwcyA9IDIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlcnJvci5zdGFjay5zcGxpdChcIlxcblwiKVtzdGVwc10udHJpbSgpLm1hdGNoKC9cXCguKlxcKS8pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhdCBcIiArIHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2xhc3NMb2dnZXIoY29udGV4dDogYW55LCBwYXJlbnQ/OiBHTG9nZ2VyKTogR0xvZ2dlciB7XHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuZXh0ZW5kcyhjb250ZXh0Py5uYW1lIHx8IGNvbnRleHQ/LmNvbnN0cnVjdG9yPy5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR0xvZ2dlcihjb250ZXh0Py5jb25zdHJ1Y3Rvcj8ubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc2tpcENvbnRleHRzID0gW1wicmVuZGVyV29ybGRTdGF0aWNcIiwgXCJDYW52YXNEaXJlY3RpdmVcIiwgXCJXb3JsZFJlbmRlcmVyU2VydmljZVwiLCBcInZpZXdwb3J0XCIsIFwiV29ybGRJbnB1dFNlcnZpY2VcIl07XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBza2lwUmVnZXhwICAgPSBuZXcgUmVnRXhwKGAke0dMb2dnZXIuc2tpcENvbnRleHRzLmpvaW4oXCJ8XCIpfWAsIFwiZ2lcIik7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVBcnJheUxvZ2dlcihhcnJheTogdW5rbm93bltdLCBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlLCBtYXBwZXI/OiAocHJpb3JpdHk6IEdMb2dnZXJQcmlvcml0eSwgbWVzc2FnZXM6IHVua25vd25bXSwgY29udGV4dD86IHN0cmluZykgPT4gdW5rbm93bik6IEdMb2dnZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgR0xvZ2dlcihjb250ZXh0LCBHTG9nZ2VyQ2FsbGJhY2tIb2xkZXIuY3JlYXRlQXJyYXlDYWxsYmFja3MoYXJyYXksIHttYXBwZXJ9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBjcmVhdGVGaWxlTG9nZ2VyKGZpbGU6IHN0cmluZywgY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSwgZW5jb2Rpbmc6IFwidXRmOFwiID0gXCJ1dGY4XCIpOiBHTG9nZ2VyIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IEdMb2dnZXIoY29udGV4dCwgR0xvZ2dlckNhbGxiYWNrSG9sZGVyLmNyZWF0ZUZpbGVDYWxsYmFja3MoZmlsZSwge2VuY29kaW5nfSkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJpbnQodHlwZTogR0xvZ2dlclByaW9yaXR5LCBjb250ZXh0OiBHTG9nZ2VyQ29udGV4dFR5cGUgPSBcIlwiLCAuLi5kYXRhOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZWFsQ29udGV4dDogc3RyaW5nID0gR0xvZ2dlci5nZXRDb250ZXh0U3RyaW5nKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCAgICAgICAgICAgICAgPSByZWFsQ29udGV4dCAmJiByZWFsQ29udGV4dC5tYXRjaChHTG9nZ2VyLnNraXBSZWdleHApO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBHTG9nZ2VySW5zdGFuY2UubG9jYWxQcmludCh0eXBlLCBkYXRhLCBHTG9nZ2VyLnN0YXRpY0NhbGxiYWNrcywgcmVhbENvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9nKG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLCBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuTE9HLCBjb250ZXh0LCAuLi4oQXJyYXkuaXNBcnJheShtZXNzYWdlKSA/IG1lc3NhZ2UgOiBbbWVzc2FnZV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLCBjb250ZXh0PzogR0xvZ2dlckNvbnRleHRUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChHTG9nZ2VyUHJpb3JpdHkuRVJST1IsIGNvbnRleHQsIC4uLihBcnJheS5pc0FycmF5KG1lc3NhZ2UpID8gbWVzc2FnZSA6IFttZXNzYWdlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd2FybihtZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSwgY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoR0xvZ2dlclByaW9yaXR5LldBUk4sIGNvbnRleHQsIC4uLihBcnJheS5pc0FycmF5KG1lc3NhZ2UpID8gbWVzc2FnZSA6IFttZXNzYWdlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldENvbnRleHRTdHJpbmcoY29udGV4dD86IEdMb2dnZXJDb250ZXh0VHlwZSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0Py5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0Py5uYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0Lm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIGFzIGFueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXh0ZW5kcyhzdWJDb250ZXh0OiBzdHJpbmcpOiBHTG9nZ2VyIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IEdMb2dnZXIuZ2V0Q29udGV4dFN0cmluZyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdMb2dnZXIoY3VycmVudENvbnRleHQgPyBgJHtjdXJyZW50Q29udGV4dH06JHtzdWJDb250ZXh0fWAgOiBzdWJDb250ZXh0KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTnVtYmVyQ291bnRlciB7XHJcbiAgICBwcml2YXRlIG1pbiAgICAgICAgICAgICAgICAgICAgICAgID0gSW5maW5pdHk7XHJcbiAgICBwcml2YXRlIG1heCAgICAgICAgICAgICAgICAgICAgICAgID0gLUluZmluaXR5O1xyXG4gICAgcHJpdmF0ZSBzdW0gICAgICAgICAgICAgICAgICAgICAgICA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG51bWJlcnM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIGFkZCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJzLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiA9IE1hdGgubWluKHRoaXMubWluLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5tYXggPSBNYXRoLm1heCh0aGlzLm1heCwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3VtICs9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1heCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXZlcmFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1bSAvIHRoaXMubnVtYmVycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEFsbChpdGVtczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKHRoaXMuYWRkLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHVG9vbHNDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2d0b29scy1jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3I8VCA9IHVua25vd24+IHtcclxuICAgIHByaXZhdGUgYWN0TGlzdDogVFtdO1xyXG4gICAgcHJpdmF0ZSBhY3R1YWxQYWdlID0gMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGFzdFBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhbGxJdGVtczogVFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaXRlbXNQZXJQYWdlID0gR1Rvb2xzQ29uZmlnLlBBR0VfTElNSVQpIHtcclxuICAgICAgICB0aGlzLmxhc3RQYWdlID0gYWxsSXRlbXMgPyBNYXRoLmZsb29yKGFsbEl0ZW1zLmxlbmd0aCAvIHRoaXMuaXRlbXNQZXJQYWdlKSA6IDA7XHJcbiAgICAgICAgdGhpcy5hY3RMaXN0ICA9IHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWN0dWFsUGFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdHVhbFBhZ2UgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYWdlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RQYWdlICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFnZXNBcm91bmQoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPCAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbMSwgMiwgMywgNCwgNV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPiB0aGlzLmxhc3RQYWdlIC0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMixcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAxLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgKyAxLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlIC0gMSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgKyAxLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgKyAyLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgKyAzLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExpc3QoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTmV4dCgpOiBUW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPCB0aGlzLmxhc3RQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSsrO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ290VG8ocGFnZTogbnVtYmVyKTogVFtdIHtcclxuICAgICAgICBpZiAocGFnZSA+PSAwICYmIHBhZ2UgPD0gdGhpcy5sYXN0UGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSBwYWdlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub1ByZXYoKTogVFtdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UtLTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9GaXJzdCgpOiBUW10ge1xyXG4gICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9MYXN0KCk6IFRbXSB7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gdGhpcy5sYXN0UGFnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZUNhbGNMaXN0KCk6IFRbXSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgID0gdGhpcy5hY3R1YWxQYWdlICogdGhpcy5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5hY3RMaXN0ID0gdGhpcy5hbGxJdGVtcyA/IHRoaXMuYWxsSXRlbXMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgdGhpcy5pdGVtc1BlclBhZ2UpIDogW107XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdExpc3Q7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSBcIi4vZ3Rvb2xzLWNvbmZpZy5pbnRlcmZhY2VcIjtcclxuXHJcbmxldCBjb25maWc6IEdUb29sc0NvbmZpZ0ludGVyZmFjZTtcclxuXHJcbmNvbnN0IGNoZWNrQ29uZmlnID0gKCk6IEdUb29sc0NvbmZpZ0ludGVyZmFjZSA9PiB7XHJcbiAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFVSTF9BUEkgICA6IFwiXCIsXHJcbiAgICAgICAgICAgIExBTkdVQUdFICA6IFwiXCIsXHJcbiAgICAgICAgICAgIFZFUlNJT04gICA6IFwiXCIsXHJcbiAgICAgICAgICAgIFBBR0VfTElNSVQ6IDAsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNsYXNzIENsYXNzT3duQ29uZmlnIGV4dGVuZHMgQ2xhc3NHVG9vbHNDb25maWcgaW1wbGVtZW50cyBPd25Db25maWdJbnRlcmZhY2Uge1xyXG4gKiAgICAgcHVibGljIG5hbWUgPSBcIlwiO1xyXG4gKiB9XHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBPd25Db25maWcgPSBuZXcgQ2xhc3NPd25Db25maWcoKTtcclxuICpcclxuICogQHNlZSBHVG9vbHNDb25maWdJbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc0dUb29sc0NvbmZpZyBpbXBsZW1lbnRzIEdUb29sc0NvbmZpZ0ludGVyZmFjZSB7XHJcbiAgICBwdWJsaWMgZ2V0IFVSTF9BUEkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5VUkxfQVBJO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgUEFHRV9MSU1JVCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLlBBR0VfTElNSVQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBMQU5HVUFHRSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLkxBTkdVQUdFO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgVkVSU0lPTigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLlZFUlNJT047XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbmZpZyhhcHBDb25maWc6IEdUb29sc0NvbmZpZ0ludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uZmlnID0gYXBwQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR1Rvb2xzQ29uZmlnID0gbmV3IENsYXNzR1Rvb2xzQ29uZmlnKCk7XHJcbiIsImV4cG9ydCBjb25zdCBBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUyA9IHRydWU7XHJcblxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eURlY29yYXRvciB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXByZWNhdGVkKHZhbHVlPzogc3RyaW5nKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKTogYW55ID0+IHtcclxuICAgICAgICBjb25zdCBvbGRNZXRob2QgID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gKC4uLmFyZ3M6IGFueVtdKTogYW55ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTWV0aG9kIFwiICsgdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgKyBcIi5cIiArIHByb3BlcnR5S2V5ICsgXCIgaXMgZGVwcmVjYXRlZC4gXCIgKyAodmFsdWUgfHwgXCJcIikpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZE1ldGhvZC5hcHBseSh0YXJnZXQsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBGaW5hbENsYXNzPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+Pih0YXJnZXQ6IFQpOiBUIHtcclxuICAgIHJldHVybiBjbGFzcyBGaW5hbCBleHRlbmRzIHRhcmdldCB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcudGFyZ2V0ICE9PSBGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluaGVyaXQgZnJvbSBmaW5hbCBjbGFzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2RlcHJlY2F0ZWQuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbmFsLWNsYXNzLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBwZXIuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZXRvbi5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2F0Y2guZGVjb3JhdG9yXCI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBNYXBwZXIocGFyYW1zOiB7IG9uR2V0PzogKG9sZFZhbHVlOiBhbnkpID0+IGFueSwgb25TZXQ/OiAob2xkVmFsdWU6IGFueSkgPT4gYW55IH0gPSB7fSwgcHJlZml4ID0gXCJfXCIpOiBhbnkge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIGlmICghZGVsZXRlIHRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld05hbWUgICAgICAgICAgICAgICAgICAgICAgICA9IHByZWZpeCArIGtleTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uR2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gKCkgPT4gcGFyYW1zLm9uR2V0ICYmIHBhcmFtcy5vbkdldCh0YXJnZXRbbmV3TmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSAoKSA9PiB0YXJnZXRbbmV3TmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uU2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKG5ld1ZhbDogYW55KSA9PiB0YXJnZXRbbmV3TmFtZV0gPSBwYXJhbXMub25TZXQgJiYgcGFyYW1zLm9uU2V0KG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9ICh2YWx1ZSkgPT4gdGFyZ2V0W25ld05hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcclxuICAgIH07XHJcbn1cclxuIiwiY29uc3QgaW5zdGFuY2VzOiB7IFtjbGFzc05hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2luZ2xldG9uPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IGFueT4oY29uc3RydWN0b3I6IFQpOiBhbnkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VzW2NsYXNzTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIG9mIFwiICsgY2xhc3NOYW1lICsgXCIgaXMgYWxyZWFkeSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc3RhbmNlc1tjbGFzc05hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXYXRjaE9wdGlvbnMge1xyXG4gICAgZW51bWVyYWJsZT86IGJvb2xlYW47XHJcbiAgICBjb25maWd1cmFibGU/OiBib29sZWFuO1xyXG4gICAgcHJlZml4Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gV2F0Y2gob25TZXQ/OiAobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSkgPT4gYW55LCBvcHRpb25zPzogV2F0Y2hPcHRpb25zKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgY29uc3QgcHJlZml4ID0gb3B0aW9ucyAmJiBvcHRpb25zLnByZWZpeCB8fCBcIl9cIjtcclxuXHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNldHRlciA9IChuZXdWYWw6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAob25TZXQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtwcmVmaXggKyBrZXldID0gb25TZXQobmV3VmFsLCB0YXJnZXRbcHJlZml4ICsga2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0W3ByZWZpeCArIGtleV0gPSBuZXdWYWw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCFkZWxldGUgdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0YXJnZXRbcHJlZml4ICsga2V5XSxcclxuICAgICAgICAgICAgc2V0ICAgICAgICAgOiBzZXR0ZXIsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGUgIDogb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5lbnVtZXJhYmxlID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMuZW51bWVyYWJsZSA6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5jb25maWd1cmFibGUgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5jb25maWd1cmFibGUgOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBOb3RCcm93c2VyRXhjZXB0aW9uIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiZ3Rvb2xzL21vZGVsc1wiO1xyXG5cclxuY2xhc3MgQWJzdHJhY3RDYW52YXNNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2NhbENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGFyZzE6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudCwgYXJnMjogbnVtYmVyLCBhcmczOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJnMSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBhcmcxO1xyXG4gICAgICAgICAgICBpZiAoYXJnMiAmJiBhcmczKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbnZhc1NpemUoYXJnMiwgYXJnMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFyZzEgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBDYW52YXNNYW5hZ2VyLmltYWdlVG9DYW52YXMoYXJnMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcmcxICYmIGFyZzIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzU2l6ZShhcmcxLCBhcmcyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvY2FsQ29udGV4dCA9IHRoaXMubG9jYWxDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbENhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxDb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFRyYW5zZm9ybVJhdyh0cmFuc2Zvcm0ub2Zmc2V0LngsIHRyYW5zZm9ybS5vZmZzZXQueSwgdHJhbnNmb3JtLnNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtUmF3KHRyYW5zbGF0aW9uWDogbnVtYmVyLCB0cmFuc2xhdGlvblk6IG51bWJlciwgc2NhbGVYOiBudW1iZXIsIHNjYWxlWSA9IHNjYWxlWCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ29udGV4dCkge1xyXG4gICAgICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFRyYW5zZm9ybVJhdyh0aGlzLmxvY2FsQ29udGV4dCwgdHJhbnNsYXRpb25YLCB0cmFuc2xhdGlvblksIHNjYWxlWCwgc2NhbGVZKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEltYWdlKCk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBDYW52YXNNYW5hZ2VyLmNhbnZhc1RvSW1hZ2UodGhpcy5sb2NhbENhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNoYWRvdyh4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmx1cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIENhbnZhc01hbmFnZXIuc2V0U2hhZG93KHRoaXMubG9jYWxDb250ZXh0LCB4LCB5LCBjb2xvciwgYmx1cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KGZvcm1hdCA9IFwiaW1hZ2UvcG5nXCIpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmxvY2FsQ2FudmFzLnRvRGF0YVVSTChmb3JtYXQpLCBcIl9ibGFua1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJDYW52YXMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIENhbnZhc01hbmFnZXIuY2xlYXJDYW52YXModGhpcy5sb2NhbENvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FudmFzU2l6ZSh3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpOiB2b2lkIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldENhbnZhc1NpemUodGhpcy5sb2NhbENhbnZhcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZFRvKGVsZW1lbnQ6IEVsZW1lbnQpOiBFbGVtZW50IHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubG9jYWxDYW52YXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc01hbmFnZXIgZXh0ZW5kcyBBYnN0cmFjdENhbnZhc01hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGVhckNhbnZhcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q2FudmFzU2l6ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpOiB2b2lkIHtcclxuICAgICAgICBjYW52YXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNoYWRvdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJsdXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciAgID0gY29sb3I7XHJcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgICAgPSBibHVyO1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0geDtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbWFnZVRvQ2FudmFzKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoICA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY3R4ICAgICA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRMaW5lRGFzaChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgLi4uYXJnczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIGN0eC5zZXRMaW5lRGFzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGN0eC5zZXRMaW5lRGFzaChhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjYWxjVGV4dFdpZHRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2YWx1ZTogc3RyaW5nLCBmb250Pzogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoZm9udCkge1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IGZvbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHZhbHVlKS53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFRyYW5zZm9ybVJhdyhcclxuICAgICAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgICB0cmFuc2xhdGlvblg6IG51bWJlcixcclxuICAgICAgICB0cmFuc2xhdGlvblk6IG51bWJlcixcclxuICAgICAgICBzY2FsZVg6IG51bWJlcixcclxuICAgICAgICBzY2FsZVkgPSBzY2FsZVgsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKHNjYWxlWCwgMCwgMCwgc2NhbGVZLCB0cmFuc2xhdGlvblgsIHRyYW5zbGF0aW9uWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjYW52YXNUb0ltYWdlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGZvcm1hdCA9IFwiaW1hZ2UvcG5nXCIpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBpbWFnZSAgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5zcmMgICAgPSBjYW52YXMudG9EYXRhVVJMKGZvcm1hdCk7XHJcbiAgICAgICAgaW1hZ2Uud2lkdGggID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIGltYWdlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyZiB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5pbXBvcnQgeyBDYW52YXNNYW5hZ2VyIH0gZnJvbSBcIi4vY2FudmFzLW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2hhZG93Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXMvY2FudmFzLXNoYWRvdy1jb25maWdcIjtcclxuXHJcbmRlY2xhcmUgY29uc3QgJDogYW55O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNDb25maWcge1xyXG4gICAgc2hhZG93PzogQ2FudmFzU2hhZG93Q29uZmlnO1xyXG4gICAgcG9zaXRpb24/OiBudW1iZXIgfCBWZWN0b3IyZjtcclxuICAgIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgICBzaXplPzogbnVtYmVyIHwgVmVjdG9yMmY7XHJcbiAgICBiZ0ltYWdlPzoge1xyXG4gICAgICAgIGltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHc6IG51bWJlcjtcclxuICAgICAgICBoOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgZmlsbDogYm9vbGVhbjtcclxuICAgIGZpbGxDb2xvcjogc3RyaW5nO1xyXG4gICAgZHJhdzogYm9vbGVhbjtcclxuICAgIGJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICByYWRpdXM6IG51bWJlciB8IHtcclxuICAgICAgICB0bDogbnVtYmVyO1xyXG4gICAgICAgIHRyOiBudW1iZXI7XHJcbiAgICAgICAgYnI6IG51bWJlcjtcclxuICAgICAgICBibDogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGxpbmVDYXA6IFwiYnV0dFwiIHwgXCJyb3VuZFwiIHwgXCJzcXVhcmVcIjtcclxuICAgIGpvaW5UeXBlOiBcImJldmVsXCIgfCBcInJvdW5kXCIgfCBcIm1pdGVyXCI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBzdGFydEFuZ2xlOiBudW1iZXI7XHJcbiAgICBlbmRBbmdsZTogbnVtYmVyO1xyXG4gICAgb2Zmc2V0OiBhbnk7XHJcbiAgICBsaW5lRGFzaDogbnVtYmVyW107XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNoYWRvdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbmZpZz86IENhbnZhc1NoYWRvd0NvbmZpZyk6IHZvaWQge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0U2hhZG93KGNvbnRleHQsIGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLmNvbG9yLCBjb25maWcuYmx1cik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0U2hhZG93KGNvbnRleHQsIDAsIDAsIFwiYmxhY2tcIiwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3MocmVzOiBDYW52YXNDb25maWcpOiB2b2lkIHtcclxuICAgIGlmIChyZXMuc2hhZG93KSB7XHJcbiAgICAgICAgc2V0U2hhZG93KHJlcy5jdHgsIHJlcy5zaGFkb3cpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcy5iZ0ltYWdlKSB7XHJcbiAgICAgICAgcmVzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgcmVzLmN0eC5jbGlwKCk7XHJcbiAgICAgICAgaWYgKHJlcy5iZ0ltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXMuY3R4LmRyYXdJbWFnZShyZXMuYmdJbWFnZSwgcmVzLngsIHJlcy55LCByZXMud2lkdGgsIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHguZHJhd0ltYWdlKHJlcy5iZ0ltYWdlLmltZyxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLngsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS55LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UudyxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLmgsXHJcbiAgICAgICAgICAgICAgICByZXMueCxcclxuICAgICAgICAgICAgICAgIHJlcy55LFxyXG4gICAgICAgICAgICAgICAgcmVzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfSBlbHNlIGlmIChyZXMuZmlsbCkge1xyXG4gICAgICAgIHJlcy5jdHguZmlsbFN0eWxlID0gcmVzLmZpbGxDb2xvcjtcclxuICAgICAgICByZXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLnNoYWRvdykge1xyXG4gICAgICAgIHNldFNoYWRvdyhyZXMuY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuY3R4LmxpbmVDYXAgID0gcmVzLmxpbmVDYXA7XHJcbiAgICByZXMuY3R4LmxpbmVKb2luID0gcmVzLmpvaW5UeXBlO1xyXG4gICAgaWYgKHR5cGVvZiByZXMuY3R4LnNldExpbmVEYXNoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXMuY3R4LnNldExpbmVEYXNoKHJlcy5saW5lRGFzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXMuZHJhdykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJlcy5jdHgubGluZVdpZHRoICAgPSByZXMuYm9yZGVyV2lkdGg7XHJcbiAgICByZXMuY3R4LnN0cm9rZVN0eWxlID0gcmVzLmJvcmRlckNvbG9yO1xyXG4gICAgcmVzLmN0eC5zdHJva2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERlZihvYmo6IGFueSk6IENhbnZhc0NvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgY2VudGVyICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGN0eCAgICAgICAgOiBvYmouY3R4LFxyXG4gICAgICAgIGRyYXcgICAgICAgOiB0eXBlb2Ygb2JqLmJvcmRlckNvbG9yICE9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBvYmouYm9yZGVyV2lkdGggIT09IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgZW5kQW5nbGUgICA6IE1hdGguUEkgKiAyLFxyXG4gICAgICAgIGZpbGwgICAgICAgOiB0eXBlb2Ygb2JqLmZpbGxDb2xvciAhPT0gXCJ1bmRlZmluZWRcIixcclxuICAgICAgICBmaWxsQ29sb3IgIDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodCAgICAgOiAwLFxyXG4gICAgICAgIGpvaW5UeXBlICAgOiBcImJldmVsXCIsXHJcbiAgICAgICAgbGluZUNhcCAgICA6IFwicm91bmRcIixcclxuICAgICAgICBsaW5lRGFzaCAgIDogW10sXHJcbiAgICAgICAgb2Zmc2V0ICAgICA6IG51bGwsXHJcbiAgICAgICAgcmFkaXVzICAgICA6IHtcclxuICAgICAgICAgICAgdGw6IDAsXHJcbiAgICAgICAgICAgIHRyOiAwLFxyXG4gICAgICAgICAgICBicjogMCxcclxuICAgICAgICAgICAgYmw6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydEFuZ2xlIDogMCxcclxuICAgICAgICB3aWR0aCAgICAgIDogMCxcclxuICAgICAgICB4ICAgICAgICAgIDogMCxcclxuICAgICAgICB5ICAgICAgICAgIDogMCxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbWFrZVBvc0FuZFNpemUoZGVmOiBDYW52YXNDb25maWcsIG9iajogYW55KTogQ2FudmFzQ29uZmlnIHtcclxuICAgIGNvbnN0IHJlczogQ2FudmFzQ29uZmlnID0gJC5leHRlbmQoZGVmLCBvYmopIGFzIENhbnZhc0NvbmZpZztcclxuICAgIGNvbnN0IGNoZWNrQXR0cmlidXRlICAgID0gKGF0dHJOYW1lOiBrZXlvZiBDYW52YXNDb25maWcsIHBhcnRBOiBrZXlvZiBDYW52YXNDb25maWcsIHBhcnRCOiBrZXlvZiBDYW52YXNDb25maWcpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlc1thdHRyTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc1thdHRyTmFtZV07XHJcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRCXSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEFdID0gdmFsdWVbMF07XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRCXSA9IHZhbHVlWzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlIGFzIFZlY3RvcjJmLng7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRCXSA9IHZhbHVlIGFzIFZlY3RvcjJmLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja0F0dHJpYnV0ZShcInNpemVcIiwgXCJ3aWR0aFwiLCBcInNpemVcIik7XHJcbiAgICBjaGVja0F0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwieFwiLCBcInlcIik7XHJcblxyXG4gICAgaWYgKHJlcy5jZW50ZXIpIHtcclxuICAgICAgICByZXMueCAtPSByZXMud2lkdGggPj4gMTtcclxuICAgICAgICByZXMueSAtPSByZXMuaGVpZ2h0ID4+IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tQb3NBbmRTaXplKG9iajogQ2FudmFzQ29uZmlnLCBuYW1lOiBzdHJpbmcpOiBDYW52YXNDb25maWcge1xyXG5cclxuICAgIGlmICgodHlwZW9mIG9iai54ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBvYmoueSA9PT0gXCJ1bmRlZmluZWRcIikgJiYgdHlwZW9mIG9iai5wb3NpdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSE9VVF9QT1NJVElPTjogXCIgKyBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHR5cGVvZiBvYmoud2lkdGggPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai5oZWlnaHQgPT09IFwidW5kZWZpbmVkXCIpICYmIHR5cGVvZiBvYmouc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSE9VVF9TSVpFOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmoud2lkdGggPD0gMCB8fCBvYmouaGVpZ2h0IDw9IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTVNHX1RSWV9EUkFXX1dJVEhfTkVHX1BPU0lUSU9OOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbml0RGVmKG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRvQXJjKG9iajogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gcmVtYWtlUG9zQW5kU2l6ZShjaGVja1Bvc0FuZFNpemUob2JqLCBcIkFyY1wiKSwgb2JqKTtcclxuXHJcbiAgICAgICAgcmVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHJlcy5jdHguZWxsaXBzZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHguZWxsaXBzZShyZXMueCArIChyZXMud2lkdGggPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMueSArIChyZXMuaGVpZ2h0ID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLndpZHRoID4+IDEsXHJcbiAgICAgICAgICAgICAgICByZXMuaGVpZ2h0ID4+IDEsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgICAgICByZXMuZW5kQW5nbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHgucmVjdChyZXMueCArIChyZXMud2lkdGggPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMueSArIChyZXMuaGVpZ2h0ID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLndpZHRoID4+IDEsXHJcbiAgICAgICAgICAgICAgICByZXMuaGVpZ2h0ID4+IDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvY2VzcyhyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZG9SZWN0KG9iajogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGVmID0gY2hlY2tQb3NBbmRTaXplKG9iaiwgXCJSZWN0XCIpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9iai5yYWRpdXMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihvYmoucmFkaXVzKSkge1xyXG4gICAgICAgICAgICAgICAgb2JqLnJhZGl1cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBibDogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICBicjogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB0bDogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB0cjogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWYucmFkaXVzIGFzIGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWYucmFkaXVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnJhZGl1c1trZXldID0gb2JqLnJhZGl1c1trZXldIHx8IChkZWYucmFkaXVzIGFzIGFueSlba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IHJlbWFrZVBvc0FuZFNpemUoZGVmLCBvYmopO1xyXG5cclxuICAgICAgICByZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHJlcy5jdHgubW92ZVRvKHJlcy54ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50bCwgcmVzLnkpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54ICsgcmVzLndpZHRoIC0gKHJlcy5yYWRpdXMgYXMgYW55KS50ciwgcmVzLnkpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnksIHJlcy54ICsgcmVzLndpZHRoLCByZXMueSArIChyZXMucmFkaXVzIGFzIGFueSkudHIpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSArIHJlcy5oZWlnaHQgLSAocmVzLnJhZGl1cyBhcyBhbnkpLmJyKTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgcmVzLmhlaWdodCwgcmVzLnggKyByZXMud2lkdGggLSAocmVzLnJhZGl1cyBhcyBhbnkpLmJyLCByZXMueSArIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54ICsgKHJlcy5yYWRpdXMgYXMgYW55KS5ibCwgcmVzLnkgKyByZXMuaGVpZ2h0KTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLngsIHJlcy55ICsgcmVzLmhlaWdodCwgcmVzLngsIHJlcy55ICsgcmVzLmhlaWdodCAtIChyZXMucmFkaXVzIGFzIGFueSkuYmwpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54LCByZXMueSArIChyZXMucmFkaXVzIGFzIGFueSkudGwpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCwgcmVzLnksIHJlcy54ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50bCwgcmVzLnkpO1xyXG4gICAgICAgIHJlcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIHByb2Nlc3MocmVzKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUT0RPOiBuZWVkIHRvIGJlIGNoZWNrZWQgaWYgYXBwIGlzIHJ1bm5pbmcgaW4gYnJvd3NlclxyXG5cclxubGV0IGxvY2FsQ29udGV4dDogRG9jdW1lbnQgfCBudWxsID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbUdldCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBkb2N1bWVudCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q29udGV4dChjb250ZXh0OiBEb2N1bWVudCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZSBuYW1lIG9mIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBjb2xsZWN0aW9uIG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxpbmsgbmFtZSBvZiBsaW5rXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5TGluayhsaW5rOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBba2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXT4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoYGFbYXR0cj1cIiR7bGlua31cIl1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWQgc2VhcmNoZWQgSURcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIGZvdW5kIGVsZW1lbnQgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5SWQoaWQ6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBlbGVtZW50cyBuYW1lXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5TmFtZShuYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlOYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0YWdOYW1lIGVsZW1lbnRzIHRhZ05hbWVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlUYWcodGFnTmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IE5vZGVMaXN0T2Y8RWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIGFzIGFueTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBCdXR0b24ge1xyXG4gICAgTEVGVCxcclxuICAgIFJJR0hULFxyXG4gICAgTUlERExFLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIERheXMge1xyXG4gICAgTU9OID0gXCJNT05cIixcclxuICAgIFRVRSA9IFwiVFVFXCIsXHJcbiAgICBXRUQgPSBcIldFRFwiLFxyXG4gICAgVEhVID0gXCJUSFVcIixcclxuICAgIEZSSSA9IFwiRlJJXCIsXHJcbiAgICBTQVQgPSBcIlNBVFwiLFxyXG4gICAgU1VOID0gXCJTVU5cIixcclxufVxyXG4iLCJleHBvcnQgZW51bSBFbmNvZGluZ3Mge1xyXG4gICAgLypcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVRGOCAgICA9IFwidXRmOFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVVEYxNiAgID0gXCJ1dGYxNlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVTklDT0RFID0gXCJ1bmljb2RlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFTQ0lJICAgPSBcImFzY2lpXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVDUzIgICAgPSBcInVjczJcIjtcclxuICAgICovXHJcbiAgICBVVEY4ICAgID0gXCJ1dGY4XCIsXHJcbiAgICBVVEYxNiAgID0gXCJ1dGYxNlwiLFxyXG4gICAgVU5JQ09ERSA9IFwidW5pY29kZVwiLFxyXG4gICAgQVNDSUkgICA9IFwiYXNjaWlcIixcclxuICAgIFVDUzIgICAgPSBcInVjczJcIixcclxufVxyXG4iLCJleHBvcnQgZW51bSBGaWxlVHlwZXMge1xyXG4gICAgQ1NTICA9IFwidGV4dC9jc3NcIixcclxuICAgIEhUTUwgPSBcInRleHQvaHRtbFwiLFxyXG4gICAgSlMgICA9IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiLFxyXG4gICAgTVAzICA9IFwiYXVkaW8vbXBlZ1wiLFxyXG4gICAgTVA0ICA9IFwidmlkZW8vbXA0XCIsXHJcbiAgICBPR0cgID0gXCJhcHBsaWNhdGlvbi9vZ2dcIixcclxuICAgIE9HViAgPSBcInZpZGVvL29nZ1wiLFxyXG4gICAgT0dBICA9IFwiYXVkaW8vb2dnXCIsXHJcbiAgICBUWFQgID0gXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICBXQVYgID0gXCJhdWRpby94LXdhdlwiLFxyXG4gICAgV0VCTSA9IFwidmlkZW8vd2VibVwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEh0dHBTdGF0dXNDb2RlcyB7XHJcbiAgICBDT05USU5VRSAgICAgICAgICAgICAgICAgICAgICAgID0gMTAwLFxyXG4gICAgU1dJVENISU5HX1BST1RPQ09MUyAgICAgICAgICAgICA9IDEwMSxcclxuICAgIE9LICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDAsXHJcbiAgICBDUkVBVEVEICAgICAgICAgICAgICAgICAgICAgICAgID0gMjAxLFxyXG4gICAgQUNDRVBURUQgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMixcclxuICAgIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OICAgPSAyMDMsXHJcbiAgICBOT19DT05URU5UICAgICAgICAgICAgICAgICAgICAgID0gMjA0LFxyXG4gICAgUkVTRVRfQ09OVEVOVCAgICAgICAgICAgICAgICAgICA9IDIwNSxcclxuICAgIFBBUlRJQUxfQ09OVEVOVCAgICAgICAgICAgICAgICAgPSAyMDYsXHJcbiAgICBNVUxUSVBMRV9DSE9JQ0VTICAgICAgICAgICAgICAgID0gMzAwLFxyXG4gICAgTU9WRURfUEVSTUFORU5UTFkgICAgICAgICAgICAgICA9IDMwMSxcclxuICAgIEZPVU5EICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAzMDIsXHJcbiAgICBTRUVfT1RIRVIgICAgICAgICAgICAgICAgICAgICAgID0gMzAzLFxyXG4gICAgTk9UX01PRElGSUVEICAgICAgICAgICAgICAgICAgICA9IDMwNCxcclxuICAgIFVTRV9QUk9YWSAgICAgICAgICAgICAgICAgICAgICAgPSAzMDUsXHJcbiAgICBURU1QT1JBUllfUkVESVJFQ1QgICAgICAgICAgICAgID0gMzA3LFxyXG4gICAgQkFEX1JFUVVFU1QgICAgICAgICAgICAgICAgICAgICA9IDQwMCxcclxuICAgIFVOQVVUSE9SSVpFRCAgICAgICAgICAgICAgICAgICAgPSA0MDEsXHJcbiAgICBQQVlNRU5UX1JFUVVJUkVEICAgICAgICAgICAgICAgID0gNDAyLFxyXG4gICAgRk9SQklEREVOICAgICAgICAgICAgICAgICAgICAgICA9IDQwMyxcclxuICAgIE5PVF9GT1VORCAgICAgICAgICAgICAgICAgICAgICAgPSA0MDQsXHJcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQgICAgICAgICAgICAgID0gNDA1LFxyXG4gICAgTk9UX0FDQ0VQVEFCTEUgICAgICAgICAgICAgICAgICA9IDQwNixcclxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEICAgPSA0MDcsXHJcbiAgICBSRVFVRVNUX1RJTUVPVVQgICAgICAgICAgICAgICAgID0gNDA4LFxyXG4gICAgQ09ORkxJQ1QgICAgICAgICAgICAgICAgICAgICAgICA9IDQwOSxcclxuICAgIEdPTkUgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSA0MTAsXHJcbiAgICBMRU5HVEhfUkVRVUlSRUQgICAgICAgICAgICAgICAgID0gNDExLFxyXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRCAgICAgICAgICAgICA9IDQxMixcclxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSAgICAgICAgPSA0MTMsXHJcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyAgICAgICAgICAgID0gNDE0LFxyXG4gICAgVU5TVVBQT1JURURfTUVESUFfVFlQRSAgICAgICAgICA9IDQxNSxcclxuICAgIFJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSA0MTYsXHJcbiAgICBFWFBFQ1RBVElPTl9GQUlMRUQgICAgICAgICAgICAgID0gNDE3LFxyXG4gICAgVU5QUk9DRVNTQUJMRV9FTlRJVFkgICAgICAgICAgICA9IDQyMixcclxuICAgIFRPT19NQU5ZX1JFUVVFU1RTICAgICAgICAgICAgICAgPSA0MjksXHJcbiAgICBJTlRFUk5BTF9TRVJWRVJfRVJST1IgICAgICAgICAgID0gNTAwLFxyXG4gICAgTk9UX0lNUExFTUVOVEVEICAgICAgICAgICAgICAgICA9IDUwMSxcclxuICAgIEJBRF9HQVRFV0FZICAgICAgICAgICAgICAgICAgICAgPSA1MDIsXHJcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFICAgICAgICAgICAgID0gNTAzLFxyXG4gICAgR0FURVdBWV9USU1FT1VUICAgICAgICAgICAgICAgICA9IDUwNCxcclxuICAgIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEICAgICAgPSA1MDUsXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZGF5cy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VuY29kaW5ncy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtdHlwZXMuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9odHRwLXN0YXR1cy1jb2Rlcy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleXMuZW51bVwiO1xyXG4iLCJleHBvcnQgZW51bSBLZXlzIHtcclxuICAgIEFSUk9XX1VQICAgID0gXCJBcnJvd1VwXCIsXHJcbiAgICBBUlJPV19ET1dOICA9IFwiQXJyb3dEb3duXCIsXHJcbiAgICBBUlJPV19MRUZUICA9IFwiQXJyb3dMZWZ0XCIsXHJcbiAgICBBUlJPV19SSUdIVCA9IFwiQXJyb3dSaWdodFwiLFxyXG4gICAgREVMRVRFICAgICAgPSBcIkRlbGV0ZVwiLFxyXG4gICAgQ09OVFJPTCAgICAgPSBcIkNvbnRyb2xMZWZ0XCIsXHJcbiAgICBTSElGVCAgICAgICA9IFwiU2hpZnRMZWZ0XCIsXHJcbiAgICBQQUdFX1VQICAgICA9IFwiUGFnZVVwXCIsXHJcbiAgICBQQUdFX0RPV04gICA9IFwiUGFnZURvd25cIixcclxuICAgIEVTQ0FQRSAgICAgID0gXCJFc2NhcGVcIixcclxuICAgIFcgICAgICAgICAgID0gXCJLZXlXXCIsXHJcbiAgICBGICAgICAgICAgICA9IFwiS2V5RlwiLFxyXG4gICAgQSAgICAgICAgICAgPSBcIktleUFcIixcclxuICAgIFAgICAgICAgICAgID0gXCJLZXlQXCIsXHJcbiAgICBTICAgICAgICAgICA9IFwiS2V5U1wiLFxyXG4gICAgRCAgICAgICAgICAgPSBcIktleURcIixcclxuICAgIFIgICAgICAgICAgID0gXCJLZXlSXCIsXHJcblxyXG4gICAgRElHSVRfMSAgICAgICAgICAgPSBcIkRpZ2l0MVwiLFxyXG4gICAgRElHSVRfMiAgICAgICAgICAgPSBcIkRpZ2l0MlwiLFxyXG4gICAgRElHSVRfMyAgICAgICAgICAgPSBcIkRpZ2l0M1wiLFxyXG4gICAgRElHSVRfNCAgICAgICAgICAgPSBcIkRpZ2l0NFwiLFxyXG4gICAgRElHSVRfNSAgICAgICAgICAgPSBcIkRpZ2l0NVwiLFxyXG4gICAgRElHSVRfNiAgICAgICAgICAgPSBcIkRpZ2l0NlwiLFxyXG4gICAgRElHSVRfNyAgICAgICAgICAgPSBcIkRpZ2l0N1wiLFxyXG4gICAgRElHSVRfOCAgICAgICAgICAgPSBcIkRpZ2l0OFwiLFxyXG4gICAgRElHSVRfOSAgICAgICAgICAgPSBcIkRpZ2l0OVwiLFxyXG4gICAgRElHSVRfMCAgICAgICAgICAgPSBcIkRpZ2l0MFwiLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5c09sZCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVOVEVSICAgICAgID0gMTM7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBQiAgICAgICAgID0gOTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyAgICAgICAgICAgPSA4NztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQSAgICAgICAgICAgPSA2NTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUyAgICAgICAgICAgPSA4MztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRCAgICAgICAgICAgPSA2ODtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUSAgICAgICAgICAgPSA4MTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRSAgICAgICAgICAgPSA2OTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRiAgICAgICAgICAgPSA3MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTENPTlRST0wgICAgPSAxNztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVNDQVBFICAgICAgPSAyNztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTEFMVCAgICAgICAgPSAxODtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTFNISUZUICAgICAgPSAxNjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1BBQ0UgICAgICAgPSAzMjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfVVAgICAgPSAzODtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfRE9XTiAgPSA0MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfUklHSFQgPSAzOTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfTEVGVCAgPSAzNztcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9ub3QtYnJvd3Nlci5leGNlcHRpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbnVsbC1wb2ludGVyLmV4Y2VwdGlvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93cm9uZy1wYXJhbWV0ZXIuZXhjZXB0aW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc3NpbmctcGFyYW1ldGVyLmVycm9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25vLWRhdGFiYXNlLWNvbm5lY3Rpb24uZXJyb3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd3JvbmctdHlwZS5leGNlcHRpb25cIjtcclxuIiwiZXhwb3J0IGNsYXNzIE1pc3NpbmdQYXJhbWV0ZXJFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihgUGFyYW1ldGVyICR7cGFyYW1ldGVyTmFtZX0gbXVzdCBiZSBkZWZpbmVkYCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE5vRGF0YWJhc2VDb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJEYXRhYmFzZSBjb25uZWN0aW9uIGlzIG5vIGVzdGFibGlzaGVkXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIGdldFRleHQodGV4dD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dCA/IGA6ICR7dGV4dH1gIDogXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdEJyb3dzZXJFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGBBcHAgaXMgbm90IHJ1bm5pbmcgaW4gYnJvd3NlciR7Z2V0VGV4dCh0ZXh0KX0hYCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBOb3RCcm93c2VyRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE51bGxQb2ludGVyRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihcIk51bGwgcG9pbnRlciBleGNlcHRpb24gYXQgbGluZVwiICsgKHR5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiID8gXCI6IFwiICsgdGV4dCA6IFwiIVwiKSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBOdWxsUG9pbnRlckV4Y2VwdGlvbi5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBXcm9uZ1BhcmFtZXRlckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYFdyb25nIHBhcmFtZXRlciBleGNlcHRpb24gYXQgbGluZSR7dHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIgPyBcIjogXCIgKyB0ZXh0IDogXCIhXCJ9YCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBXcm9uZ1BhcmFtZXRlckV4Y2VwdGlvbi5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBXcm9uZ1R5cGVFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocmVxdWlyZWRUeXBlOiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihgV3JvbmcgdHlwZSBleGNlcHRpb24gYXQgbGluZS4gJHt0eXBlb2YgcmVxdWlyZWRUeXBlfSBtdXN0IGJlICR7cmVxdWlyZWRUeXBlfSR7dHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIgPyBcIjogXCIgKyB0ZXh0IDogXCIhXCJ9YCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBXcm9uZ1R5cGVFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9HVXRpbHNcIjtcclxuXHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS12ZWN0b3IyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS12ZWN0b3IzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS12ZWN0b3I0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlY3RvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92ZWN0b3IyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlY3RvcjJmXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlY3RvcjNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yNFwiO1xyXG4iLCJpbXBvcnQgeyBSYW5nZSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCIuL3NpbXBsZS12ZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMiBpbXBsZW1lbnRzIFNpbXBsZVZlY3RvcjIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB4ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeSA9IDApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBaRVJPKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBVUCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgTEVGVCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoLTEsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEJPVFRPTSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFJJR0hUKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBPTkUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXZnKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHN1bSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tQXJyYXkodmFsOiBbbnVtYmVyLCBudW1iZXJdIHwgRmxvYXQzMkFycmF5KTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZhbFswXSwgdmFsWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVxdWFscyh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHZlY0EgPT09IHZlY0IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmVjQS54ID09PSB2ZWNCLnggJiYgdmVjQS55ID09PSB2ZWNCLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdWIodmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNBLnggLSB2ZWNCLngsIHZlY0EueSAtIHZlY0IueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tKHZhbEE6IG51bWJlciwgdmFsQiA9IHZhbEEpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmFsQSwgdmFsQik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1Zpc2libGUob2JzWDogbnVtYmVyLCBvYnNZOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIGN1dE9mZjogbnVtYmVyLCBweDogbnVtYmVyLCBweTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlIC0gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgcHkgLSBvYnNZLFxyXG4gICAgICAgICAgICBweCAtIG9ic1gsXHJcbiAgICAgICAgKSA8PSBjdXRPZmY7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU91dGxpbmVSYW5nZShwb2ludHM6IHJlYWRvbmx5IFNpbXBsZVZlY3RvcjJbXSk6IFJhbmdlPFNpbXBsZVZlY3RvcjI+IHtcclxuICAgICAgICBjb25zdCBtaW4gPSB7XHJcbiAgICAgICAgICAgIHg6IEluZmluaXR5LFxyXG4gICAgICAgICAgICB5OiBJbmZpbml0eSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1heCA9IHtcclxuICAgICAgICAgICAgeDogLUluZmluaXR5LFxyXG4gICAgICAgICAgICB5OiAtSW5maW5pdHksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcG9pbnRzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgaWYgKHAueCA8IG1pbi54KSB7XHJcbiAgICAgICAgICAgICAgICBtaW4ueCA9IHAueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocC55IDwgbWluLnkpIHtcclxuICAgICAgICAgICAgICAgIG1pbi55ID0gcC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwLnggPiBtYXgueCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LnggPSBwLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHAueSA+IG1heC55KSB7XHJcbiAgICAgICAgICAgICAgICBtYXgueSA9IHAueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKG1pbiwgbWF4KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYW5nbGVCZXR3ZWVuUG9pbnRzKG9ic1g6IG51bWJlciwgb2JzWTogbnVtYmVyLCBweDE6IG51bWJlciwgcHkxOiBudW1iZXIsIHB4MjogbnVtYmVyLCBweTI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoXHJcbiAgICAgICAgICAgIHB5MSAtIG9ic1ksXHJcbiAgICAgICAgICAgIHB4MSAtIG9ic1gsXHJcbiAgICAgICAgKSAtIE1hdGguYXRhbjIoXHJcbiAgICAgICAgICAgIHB5MiAtIG9ic1ksXHJcbiAgICAgICAgICAgIHB4MiAtIG9ic1gsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmVjdG9yKGl0ZW06IGFueSk6IGl0ZW0gaXMgU2ltcGxlVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgIWlzTmFOKGl0ZW0ueCkgJiYgIWlzTmFOKGl0ZW0ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0odmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNBLnggKyB2ZWNCLngsIHZlY0EueSArIHZlY0IueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtaW4odmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihNYXRoLm1pbih2ZWNBLngsIHZlY0IueCksIE1hdGgubWluKHZlY0EueSwgdmVjQi55KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYXgodmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihNYXRoLm1heCh2ZWNBLngsIHZlY0IueCksIE1hdGgubWF4KHZlY0EueSwgdmVjQi55KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codmVjQS54IC0gdmVjQi54LCAyKSArIE1hdGgucG93KHZlY0EueSAtIHZlY0IueSwgMikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1plcm8oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vcm1hbGl6ZWQoKTogU2ltcGxlVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWxOdW0odmVjQTogU2ltcGxlVmVjdG9yMiwgdmFsOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjQS54ICogdmFsLCB2ZWNBLnkgKiB2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWwodmFsdWU6IFNpbXBsZVZlY3RvcjIgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHZhbHVlOiBTaW1wbGVWZWN0b3IyIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB2YWx1ZS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Yih2YWx1ZTogU2ltcGxlVmVjdG9yMiB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0gdmFsdWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0gdmFsdWUueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXYodmFsdWU6IFNpbXBsZVZlY3RvcjIgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55IC89IHZhbHVlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55IC89IHZhbHVlLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGF0YSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh2ZWM6IFNpbXBsZVZlY3RvcjIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgcHJvY2VzcyA9IChcclxuICAgIG9wOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICBhcmcxOiBWZWN0b3IyZiB8IG51bWJlcixcclxuICAgIGFyZzI/OiBudW1iZXIsXHJcbik6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgb3AoYXJnMSBhcyBudW1iZXIsIGFyZzIpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIG9wKGFyZzEsIGFyZzEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvcChhcmcxLngsIGFyZzEueSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xhc3MgaXMgdXNlZCBmb3IgaG9sZGluZyAyIG51bWVyaWMgdmFsdWVzIGFuZCBtYW5pcHVsYXRpb24gd2l0aCB0aGVtXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVjdG9yMmYge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgWCB2YWx1ZSBvZiB2ZWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHkgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIFkgdmFsdWUgb2YgdmVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB4ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBzZXQgdmVjdG9ycyB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIGNyZWF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0KGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGFkZCB2YWx1ZXMgaW50byBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBkaXZpZGUgY3VycmVudCB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHVwZGF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGl2KGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0geDtcclxuICAgICAgICAgICAgdGhpcy55IC89IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gbXVsdGlwbHkgY3VycmVudCB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHVwZGF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbXVsKGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0geDtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gc3VidHJhY3QgdmFsdWVzIGZyb20gY3VycmVudCB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHVwZGF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3ViKGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggLT0geDtcclxuICAgICAgICAgICAgdGhpcy55IC09IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjMgfSBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yM1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vdmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMgaW1wbGVtZW50cyBTaW1wbGVWZWN0b3IzIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHkgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB6ID0gMCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFVQKCk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBaRVJPKCk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBPTkUoKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDEsIDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXZnKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKyB0aGlzLnkgKyB0aGlzLnopIC8gMztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVxdWFscyh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHZlY0EgPT09IHZlY0IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmVjQS54ID09PSB2ZWNCLnggJiYgdmVjQS55ID09PSB2ZWNCLnkgJiYgdmVjQS56ID09PSB2ZWNCLno7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdWIodmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWNBLnggLSB2ZWNCLngsIHZlY0EueSAtIHZlY0IueSwgdmVjQS56IC0gdmVjQi56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZCh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY0EueCArIHZlY0IueCwgdmVjQS55ICsgdmVjQi55LCB2ZWNBLnogKyB2ZWNCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VtKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICsgdmVjQi54LCB2ZWNBLnkgKyB2ZWNCLnksIHZlY0EueiArIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWxOdW0odmVjQTogU2ltcGxlVmVjdG9yMywgdmFsOiBudW1iZXIpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICogdmFsLCB2ZWNBLnkgKiB2YWwsIHZlY0EueiAqIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWwodmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWNBLnggKyB2ZWNCLngsIHZlY0EueSArIHZlY0IueSwgdmVjQS56ICsgdmVjQi56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1pbih2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKE1hdGgubWluKHZlY0EueCwgdmVjQi54KSwgTWF0aC5taW4odmVjQS55LCB2ZWNCLnkpLCBNYXRoLm1pbih2ZWNBLnosIHZlY0IueikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRnJvbVNwaGVyaWNhbENvb3JkcyhyYWRpdXM6IG51bWJlciwgcGhpOiBudW1iZXIsIHRoZXRhOiBudW1iZXIpOiBWZWN0b3IzIHtcclxuICAgICAgICBjb25zdCBzaW5QaGlSYWRpdXMgPSBNYXRoLnNpbihwaGkpICogcmFkaXVzO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gc2luUGhpUmFkaXVzICogTWF0aC5zaW4odGhldGEpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmNvcyhwaGkpICogcmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IHogPSBzaW5QaGlSYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1heCh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKE1hdGgubWF4KHZlY0EueCwgdmVjQi54KSwgTWF0aC5tYXgodmVjQS55LCB2ZWNCLnkpLCBNYXRoLm1heCh2ZWNBLnosIHZlY0IueikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzdCh2ZWNBOiBTaW1wbGVWZWN0b3IzLCB2ZWNCOiBTaW1wbGVWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHZlY0EueCAtIHZlY0IueCwgMikgKyBNYXRoLnBvdyh2ZWNBLnkgLSB2ZWNCLnksIDIpICsgTWF0aC5wb3codmVjQS56IC0gdmVjQi56LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBub3JtYWxpemU8VCBleHRlbmRzIFNpbXBsZVZlY3RvcjM+KHZlYzogVCk6IFQge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueSArIHZlYy56ICogdmVjLnopO1xyXG4gICAgICAgIHZlYy54IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdmVjLnogLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdmVjO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeHkoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb20odmFsQTogbnVtYmVyLCB2YWxCID0gdmFsQSwgdmFsQyA9IHZhbEEpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmFsQSwgdmFsQiwgdmFsQyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZlY3RvcihpdGVtOiBhbnkpOiBpdGVtIGlzIFNpbXBsZVZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBpdGVtICYmICFpc05hTihpdGVtLngpICYmICFpc05hTihpdGVtLnkpICYmICFpc05hTihpdGVtLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0FycmF5KCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMueSArIHRoaXMuejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm9ybWFsaXplZCgpOiBTaW1wbGVWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54LCB0aGlzLnksIHRoaXMueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZSgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy56IC89IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bCh2YWx1ZTogU2ltcGxlVmVjdG9yMyB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueiAqPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlLnk7XHJcbiAgICAgICAgICAgIHRoaXMueiAqPSB2YWx1ZS56O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCh2ZWM6IFNpbXBsZVZlY3RvcjMpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggKz0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiArPSB2ZWMuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyb3NzKHY6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICBjb25zdCBsb2NhbFggPSB0aGlzLnkgKiB2LnogLSB0aGlzLnogKiB2Lnk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxZID0gdGhpcy56ICogdi54IC0gdGhpcy54ICogdi56O1xyXG4gICAgICAgIGNvbnN0IGxvY2FsWiA9IHRoaXMueCAqIHYueSAtIHRoaXMueSAqIHYueDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKGxvY2FsWCwgbG9jYWxZLCBsb2NhbFopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkb3QodjogU2ltcGxlVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueSArIHRoaXMueiAqIHYuejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViKHZlYzogU2ltcGxlVmVjdG9yMyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56IC09IHZlYy56O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGF0YSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQodmVjOiBTaW1wbGVWZWN0b3IzKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56ID0gdmVjLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeXgoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueSwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHl6KCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnksIHRoaXMueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB6eSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy56LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeHooKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHp4KCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnosIHRoaXMueCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tQXJyYXkodmFsdWU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB8IEZsb2F0MzJBcnJheSk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3I0IH0gZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3I0IGltcGxlbWVudHMgU2ltcGxlVmVjdG9yNCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB5ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeiA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHcgPSAwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgWkVSTygpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgT05FKCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCgxLCAxLCAxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21BcnJheSh2YWw6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHwgRmxvYXQzMkFycmF5KTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KHZhbFswXSwgdmFsWzFdLCB2YWxbMl0sIHZhbFszXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tKHZhbEE6IG51bWJlciwgdmFsQiA9IHZhbEEsIHZhbEMgPSB2YWxCLCB2YWxEID0gdmFsQyk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCh2YWxBLCB2YWxCLCB2YWxDLCB2YWxEKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF2ZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICsgdGhpcy55ICsgdGhpcy56ICsgdGhpcy53KSAvIDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiArIHRoaXMudyAqIHRoaXMudyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlcXVhbHModmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh2ZWNBID09PSB2ZWNCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY0EueCA9PT0gdmVjQi54ICYmIHZlY0EueSA9PT0gdmVjQi55ICYmIHZlY0EueiA9PT0gdmVjQi56ICYmIHZlY0EudyA9PT0gdmVjQi53O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKHZlY0E6IFNpbXBsZVZlY3RvcjQsIHZlY0I6IFNpbXBsZVZlY3RvcjQpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQoXHJcbiAgICAgICAgICAgIE1hdGgubWluKHZlY0EueCwgdmVjQi54KSxcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS55LCB2ZWNCLnkpLFxyXG4gICAgICAgICAgICBNYXRoLm1pbih2ZWNBLnosIHZlY0IueiksXHJcbiAgICAgICAgICAgIE1hdGgubWluKHZlY0EudywgdmVjQi53KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWF4KHZlY0E6IFNpbXBsZVZlY3RvcjQsIHZlY0I6IFNpbXBsZVZlY3RvcjQpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQoXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHZlY0EueCwgdmVjQi54KSxcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS55LCB2ZWNCLnkpLFxyXG4gICAgICAgICAgICBNYXRoLm1heCh2ZWNBLnosIHZlY0IueiksXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHZlY0EudywgdmVjQi53KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzdCh2ZWNBOiBTaW1wbGVWZWN0b3I0LCB2ZWNCOiBTaW1wbGVWZWN0b3I0KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBNYXRoLnBvdyh2ZWNBLnggLSB2ZWNCLngsIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3codmVjQS55IC0gdmVjQi55LCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EueiAtIHZlY0IueiwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyh2ZWNBLncgLSB2ZWNCLncsIDIpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBub3JtYWxpemU8VCBleHRlbmRzIFNpbXBsZVZlY3RvcjQ+KHZlYzogVCk6IFQge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueSArIHZlYy56ICogdmVjLnogKyB2ZWMudyAqIHZlYy53KTtcclxuICAgICAgICB2ZWMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdmVjLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy56IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMudyAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWZWN0b3IoaXRlbTogYW55KTogaXRlbSBpcyBTaW1wbGVWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiAhaXNOYU4oaXRlbS54KSAmJiAhaXNOYU4oaXRlbS55KSAmJiAhaXNOYU4oaXRlbS56KSAmJiAhaXNOYU4oaXRlbS53KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJheSgpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLnddO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3JtYWxpemVkKCk6IFNpbXBsZVZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCh0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueiAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy53IC89IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bCh2YWx1ZTogU2ltcGxlVmVjdG9yNCB8IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueiAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy53ICo9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZS54O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0gdmFsdWUueTtcclxuICAgICAgICAgICAgdGhpcy56ICo9IHZhbHVlLno7XHJcbiAgICAgICAgICAgIHRoaXMudyAqPSB2YWx1ZS53O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCh2ZWM6IFNpbXBsZVZlY3RvcjQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggKz0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiArPSB2ZWMuejtcclxuICAgICAgICB0aGlzLncgKz0gdmVjLnc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWIodmVjOiBTaW1wbGVWZWN0b3I0KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogLT0gdmVjLno7XHJcbiAgICAgICAgdGhpcy53IC09IHZlYy53O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGF0YSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCB3OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHZlYzogU2ltcGxlVmVjdG9yNCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiA9IHZlYy56O1xyXG4gICAgICAgIHRoaXMudyA9IHZlYy53O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIEFqYXhQYXJhbXMge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIG9uUmVzcG9uc2U6IChkYXRhOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59XHJcblxyXG5jbGFzcyBBamF4V3JhcHBlciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhamF4SGFuZGxlcjogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXgoe1xyXG4gICAgbWV0aG9kID0gXCJHRVRcIixcclxuICAgIHVybCxcclxuICAgIG9uUmVzcG9uc2UsXHJcbiAgICBjb250ZW50LFxyXG4gICAgaGVhZGVycyA9IHt9LFxyXG59OiBBamF4UGFyYW1zKTogQWpheFdyYXBwZXIge1xyXG4gICAgY29uc3QgcmVxdWVzdCAgICAgICAgICAgICAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCB8fCByZXF1ZXN0LnN0YXR1cyA9PT0gMjAxKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG9uUmVzcG9uc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvblJlc3BvbnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpLmZvckVhY2goKGVudHJ5KSA9PiByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoZW50cnlbMF0sIGVudHJ5WzFdKSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBamF4V3JhcHBlcihyZXF1ZXN0KTtcclxufVxyXG4iLCJjb25zdCBGSUxFX1NJWkVfVU5JVFMgICAgICA9IFtcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiLCBcIlBCXCIsIFwiRUJcIiwgXCJaQlwiLCBcIllCXCJdO1xyXG5jb25zdCBGSUxFX1NJWkVfVU5JVFNfTE9ORyA9IFtcIkJ5dGVzXCIsIFwiS2lsb2J5dGVzXCIsIFwiTWVnYWJ5dGVzXCIsIFwiR2lnYWJ5dGVzXCIsIFwiUGV0dGFieXRlc1wiLCBcIkV4YWJ5dGVzXCIsIFwiWmV0dGFieXRlc1wiLCBcIllvdHRhYnl0ZXNcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RmlsZVNpemUoc2l6ZUluQnl0ZXM6IG51bWJlciwgbG9uZ0Zvcm0gPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB1bml0cyA9IGxvbmdGb3JtXHJcbiAgICAgICAgPyBGSUxFX1NJWkVfVU5JVFNfTE9OR1xyXG4gICAgICAgIDogRklMRV9TSVpFX1VOSVRTO1xyXG5cclxuICAgIGxldCBwb3dlciA9IE1hdGgucm91bmQoTWF0aC5sb2coc2l6ZUluQnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpO1xyXG4gICAgcG93ZXIgICAgID0gTWF0aC5taW4ocG93ZXIsIHVuaXRzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIGNvbnN0IHNpemUgICAgICAgICAgPSBzaXplSW5CeXRlcyAvIE1hdGgucG93KDEwMjQsIHBvd2VyKTsgLy8gc2l6ZSBpbiBuZXcgdW5pdHNcclxuICAgIGNvbnN0IGZvcm1hdHRlZFNpemUgPSBNYXRoLnJvdW5kKHNpemUgKiAxMDApIC8gMTAwOyAvLyBrZWVwIHVwIHRvIDIgZGVjaW1hbHNcclxuICAgIGNvbnN0IHVuaXQgICAgICAgICAgPSB1bml0c1twb3dlcl07XHJcblxyXG4gICAgcmV0dXJuIHNpemUgPyBgJHtmb3JtYXR0ZWRTaXplfSAke3VuaXR9YCA6IFwiMFwiO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3Nsb3Zhay1zdGVtbWVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FqYXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmlsZS1zaXplLWZvcm1hdHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaW1wbGUtbG9vcFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydW50aW1lLXZhbGlkYXRvcnNcIjtcclxuIiwiZXhwb3J0IGNvbnN0IGdldEFzU3RyaW5nID0gKGtleTogYW55KTogc3RyaW5nID0+IHtcclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSB3aXRoIHZhbHVlICR7a2V5fSBpcyBub3QgYSBzdHJpbmdgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0QXNOdW1iZXIgPSAoa2V5OiBhbnkpOiBudW1iZXIgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhcmlhYmxlIHdpdGggdmFsdWUgJHtrZXl9IGlzIG5vdCBhIG51bWJlcmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzaW1wbGVMb29wKGNhbGxiYWNrOiAoZGVsdGE6IG51bWJlcikgPT4gdm9pZCwgcmVxdWlyZWRGcHMgPSA2MCk6IHsgc3RvcDogKCkgPT4gdm9pZCB9IHtcclxuICAgIGxldCBzdGFydDogbnVtYmVyO1xyXG4gICAgbGV0IHJlcTogbnVtYmVyO1xyXG4gICAgY29uc3QgcmVxdWlyZWREdXJhdGlvbiA9IDEwMDAgLyByZXF1aXJlZEZwcztcclxuICAgIGNvbnN0IHRpY2sgPSAodGltZTogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aW1lIC0gc3RhcnQ7XHJcbiAgICAgICAgc3RhcnQgPSB0aW1lO1xyXG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuICAgICAgICBjYWxsYmFjaygoZHVyYXRpb24gLyByZXF1aXJlZER1cmF0aW9uKSB8fCAxKTtcclxuICAgIH07XHJcbiAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdG9wOigpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSksXHJcbiAgICB9O1xyXG59XHJcbiIsImZ1bmN0aW9uIHJlbW92ZVByZWRwb25hKGNoYXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoY2hhci5sZW5ndGggPiA2ICYmIGNoYXIuc3RhcnRzV2l0aChcIm5halwiKSkge1xyXG4gICAgICAgIHJldHVybiBjaGFyLnN1YnN0cigzLCBjaGFyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNoYXI7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5mdW5jdGlvbiByZW1vdmVDYXNlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxlbiA9IGtleS5sZW5ndGg7XHJcbiAgICBpZiAobGVuID4gOSAmJiBrZXkuZW5kc1dpdGgoXCJlasWhaWVob1wiKVxyXG4gICAgICAgIHx8IGtleS5lbmRzV2l0aChcImVqxaFpZW11XCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDggJiYgKGtleS5lbmRzV2l0aChcImVqxaHDrWNoXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jb2NoXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFocOtbWlcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNhbWlcIikpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDcgJiYgKGtleS5lbmRzV2l0aChcImVqxaFpYVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImF0YW1pXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoWNoXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5pZWNcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNvbVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFvbVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrW1cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhZWpcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhb3VcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhaXVcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhaWVcIilcclxuICAgICkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA1KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNiAmJlxyXG4gICAgICAgIChrZXkuZW5kc1dpdGgoXCJlxaVvbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFpW9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92aWFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFjaFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVtdVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlldGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFocOtXCIpIHx8XHJcbiAgICAgICAgICAgIC8vIGdhYm9zXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVuaWVcIikpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDUgJiZcclxuICAgICAgICAoa2V5LmVuZHNXaXRoKFwiaWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInljaFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6lob1wiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtaVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOpbXVcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbXVcIikgfHxcclxuICAgICAgICAgICAgLyprZXkuZW5kc1dpdGgoXCJpaG9cIikgfHwqLyAvLyBWZcS+bWkgbWFsw70gdnBseXZcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61taVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImltaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDoWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71jaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFtaVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDqVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsO9XCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w61cIikgfHwqL1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdmlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZcWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw610ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO9bWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5bWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhbVwiKSB8fFxyXG4gICAgICAgICAgICAvKmtleS5lbmRzV2l0aChcImF0w6FcIikgfHwqL1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYWNcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbGFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImltZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvY2hcIilcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDQgJiZcclxuICAgICAgICAoLyprZXkuZW5kc1dpdGgoXCLDrW5cIikgfHwqL1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrW1cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDoW1cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ1c1wiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO9bVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInltXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3VcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlalwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdlwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpdVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJtdVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO6xaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiacWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiacWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO6Y1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlxaFcIikpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDMpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleVtsZW4gLSAxXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwib1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwidVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw7pcIjpcclxuICAgICAgICAgICAgY2FzZSBcInlcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOhXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDqVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw61cIjpcclxuICAgICAgICAgICAgY2FzZSBcIsO9XCI6XHJcbiAgICAgICAgICAgICAgICAvKmNhc2UgXCLDtFwiOiovXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zc2Vzc2l2ZXMoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xyXG4gICAgaWYgKGxlbiA+IDUgJiYgcy5lbmRzV2l0aChcImluXCIpIHx8XHJcbiAgICAgICAgcy5lbmRzV2l0aChcIm92XCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHMuc3Vic3RyKDAsIGxlbiAtIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemUoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xyXG4gICAgLy8gdG90byBwcmF2aWRsbyB6bmnFvnVqZSBGUCBhbGUgenZ5xaF1amUgRk5cclxuICAgIC8qICAgICAgICBpZiAobGVuID4gMSAmJiBzW2xlbiAtIDJdID09IFwiaVwiICYmIHNbbGVuLTFdPT1cImNcIikge1xyXG4gICAgICAgICAgICAgICAgc1tsZW4gLSAyXSA9IHNbbGVuIC0gMV07IC8vIGUqID4gKlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlbiAtIDE7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgc3dpdGNoIChzW2xlbiAtIDFdKSB7XHJcbiAgICAgICAgY2FzZSBcImNcIjogLy8gW2PEjV0gLT4ga1xyXG4gICAgICAgIGNhc2UgXCLEjVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwia1wiKTtcclxuICAgICAgICBjYXNlIFwixL5cIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJsXCIpO1xyXG4gICAgICAgIGNhc2UgXCLFiFwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcIm5cIik7XHJcbiAgICAgICAgY2FzZSBcIsWlXCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwidFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gMyAmJiBzW2xlbiAtIDNdID09PSBcImlcIiAmJiAoc1tsZW4gLSAyXSA9PT0gXCJlXCIgfHwgc1tsZW4gLSAyXSA9PT0gXCJhXCIgfHwgc1tsZW4gLSAyXSA9PT0gXCJ1XCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuIC0gMykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNbbGVuIC0gMl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPT09IGxlbiAtIDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzW2xlbiAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3Zha1N0ZW1tZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBzdGVtZSh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlbW92ZVBvc3Nlc3NpdmVzKHJlbW92ZUNhc2UocmVtb3ZlUHJlZHBvbmEod29yZCkpKTtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGhleDJyZ2IsIGludDJyZ2IsIHJnYjJoZXgsIHJnYjJpbnQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29sb3JWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmFzc2VydCh2YWx1ZSA+PSAwKTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHZhbHVlIDw9IDI1NSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJMQUNLID0gbmV3IENvbG9yKDAsIDAsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXSElURSA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JBWSAgPSBuZXcgQ29sb3IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFRCAgID0gbmV3IENvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSRUVOID0gbmV3IENvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJMVUUgID0gbmV3IENvbG9yKDAsIDAsIDI1NSk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSByZWQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZ3JlZW46IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYmx1ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBhbHBoYSA9IDI1NSkge1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShyZWQpO1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShncmVlbik7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGJsdWUpO1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShhbHBoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZ2IoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmdiU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt0aGlzLnJlZH0sICR7dGhpcy5ncmVlbn0sICR7dGhpcy5ibHVlfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmdiYSgpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlLCB0aGlzLmFscGhhXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhleCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiByZ2IyaGV4KE1hdGguZmxvb3IodGhpcy5yZWQpLCBNYXRoLmZsb29yKHRoaXMuZ3JlZW4pLCBNYXRoLmZsb29yKHRoaXMuYmx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHJnYjJpbnQodGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tSGV4KGNvbG9yOiBzdHJpbmcpOiBDb2xvciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBoZXgycmdiKGNvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciguLi52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tSW50KGNvbG9yOiBudW1iZXIpOiBDb2xvciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnQycmdiKGNvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciguLi52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZWQoKTogQ29sb3Ige1xyXG4gICAgICAgIGlmICh0aGlzLnJlZCA+IDEgfHwgdGhpcy5ncmVlbiA+IDEgfHwgdGhpcy5ibHVlID4gMSB8fCB0aGlzLmFscGhhID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMucmVkIC8gMjU1LCB0aGlzLmdyZWVuIC8gMjU1LCB0aGlzLmJsdWUgLyAyNTUsIHRoaXMuYWxwaGEgLyAyNTUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgR2VuZGVyfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHZW5kZXJUeXBlID0gXCJNQU5cIiB8IFwiV09NQU5cIiB8IFwiXCI7XHJcblxyXG5jb25zdCBtYWxlUmVnZXhwICAgPSAvXihtYWxlfG1hbnxtdXp8Ym95fGNobGFwZWN8bSkkL2c7XHJcbmNvbnN0IGZlbWFsZVJlZ2V4cCA9IC9eKGZlbWFsZXx3b21hbnx6ZW5hfGdpcmx8ZGlldmNhfGZ8d3x6KSQvZztcclxuXHJcbmV4cG9ydCBlbnVtIEdlbmRlciB7XHJcbiAgICBNQU4gICA9IFwiTUFOXCIsXHJcbiAgICBXT01BTiA9IFwiV09NQU5cIixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlR2VuZGVyKGdlbmRlcjogc3RyaW5nKTogR2VuZGVyIHwgbnVsbCB7XHJcbiAgICBpZiAoIWdlbmRlcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2VuZGVyTG93ZXJDYXNlID0gZ2VuZGVyLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCLFvlwiLCBcInpcIikucmVwbGFjZShcIsSNXCIsIFwiY1wiKTtcclxuICAgIGlmIChnZW5kZXJMb3dlckNhc2UubWF0Y2gobWFsZVJlZ2V4cCkpIHtcclxuICAgICAgICByZXR1cm4gR2VuZGVyLk1BTjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2VuZGVyTG93ZXJDYXNlLm1hdGNoKGZlbWFsZVJlZ2V4cCkpIHtcclxuICAgICAgICByZXR1cm4gR2VuZGVyLldPTUFOO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBwYXJzZUdlbmRlcn0gYW5kIHtAbGluayBHZW5kZXJ9IGluc3RlYWRcclxuICogQ2xhc3MgaXMgdXNlZCBmb3IgcGFyc2luZyBnZW5kZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHZW5kZXJDbGFzcyB7XHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCBwYXJzZSBzdHJpbmcgYW5kIHJldHVybiBHZW5kZXJUeXBlXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHBhcnNlR2VuZGVyfSBpbnN0ZWFkXHJcbiAgICAgKiBAcGFyYW0gZ2VuZGVyIGdlbmRlciBpbiBhbnkgZm9ybWF0VGltZVxyXG4gICAgICogQHJldHVybnMgcGFyc2VkIGdlbmRlciBhcyB7QGxpbmsgR2VuZGVyVHlwZX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZSA9IHBhcnNlR2VuZGVyO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBNb2RlbCBpcyBlbnVtIGFuZCBwYXJzZXJcclxuICovXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9nZW5kZXIubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sb3IubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHJhbnNmb3JtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JhbmdlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BhdGhcIjtcclxuXHJcbi8vIFRPRE86IENhbm5vdCBpbXBvcnQgY291bnRyaWVzLmRhdGEuanNvblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5pbnRlcmZhY2VcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vY291bnRyaWVzL2NvdW50cnkubW9kZWxcIjtcclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGg8VCBleHRlbmRzIFNpbXBsZVZlY3RvcjI+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgcG9pbnRzOiByZWFkb25seSBUW10pIHtcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNyZWF0ZSBwYXRoIHdpdGggbGVzcyB0aGFuIDIgcG9pbnRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmaXJzdCgpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb2ludHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsYXN0KCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9pbnQoaW5kZXg6IG51bWJlcik6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50c1tpbmRleF07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5pbXBvcnQgeyByYW5kb21GbG9hdEJldHdlZW4sIHJhbmRvbUludEJldHdlZW4gfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jb2xvci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmdlPFQ+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbWluOiBULCBwdWJsaWMgcmVhZG9ubHkgbWF4OiBUID0gbWluKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb20ocmFuZ2U6IFJhbmdlPG51bWJlcj4pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLCByYW5nZS5tYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tVmVjdG9yKHJhbmdlOiBSYW5nZTxTaW1wbGVWZWN0b3IyPik6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHJhbmRvbUZsb2F0QmV0d2VlbihyYW5nZS5taW4ueCwgcmFuZ2UubWF4LngpLFxyXG4gICAgICAgICAgICB5OiByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLnksIHJhbmdlLm1heC55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tQ29sb3JGKHJhbmdlOiBSYW5nZTxDb2xvcj4pOiBDb2xvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihcclxuICAgICAgICAgICAgcmFuZG9tRmxvYXRCZXR3ZWVuKHJhbmdlLm1pbi5yZWQsIHJhbmdlLm1heC5yZWQpLFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLmdyZWVuLCByYW5nZS5tYXguZ3JlZW4pLFxyXG4gICAgICAgICAgICByYW5kb21GbG9hdEJldHdlZW4ocmFuZ2UubWluLmJsdWUsIHJhbmdlLm1heC5ibHVlKSxcclxuICAgICAgICAgICAgcmFuZG9tRmxvYXRCZXR3ZWVuKHJhbmdlLm1pbi5hbHBoYSwgcmFuZ2UubWF4LmFscGhhKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tQ29sb3JJKHJhbmdlOiBSYW5nZTxDb2xvcj4pOiBDb2xvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4ucmVkLCByYW5nZS5tYXgucmVkKSxcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4uZ3JlZW4sIHJhbmdlLm1heC5ncmVlbiksXHJcbiAgICAgICAgICAgIHJhbmRvbUludEJldHdlZW4ocmFuZ2UubWluLmJsdWUsIHJhbmdlLm1heC5ibHVlKSxcclxuICAgICAgICAgICAgcmFuZG9tSW50QmV0d2VlbihyYW5nZS5taW4uYWxwaGEsIHJhbmdlLm1heC5hbHBoYSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZm9ybSB7XHJcbiAgICByZWFkb25seSBvZmZzZXQ6IFJlYWRvbmx5PFNpbXBsZVZlY3RvcjI+O1xyXG4gICAgcmVhZG9ubHkgc2NhbGU6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvdGF0aW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0VHJhbnNmb3JtKCk6IFRyYW5zZm9ybSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9mZnNldCAgOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZSAgIDogMSxcclxuICAgICAgICByb3RhdGlvbjogMCxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCJndG9vbHMvbWF0aFwiO1xyXG5pbXBvcnQgeyBNaW5NYXgsIFBvc1NpemUsIFhZV0ggfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcbmltcG9ydCB7IFNwaGVyZSB9IGZyb20gXCIuL29iamVjdHMvMmQvc3BoZXJlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZml4WFlXSChtaW5NYXg6IE1pbk1heCwgeHl3aDogWFlXSCk6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge3g6IHh5d2gueCwgeTogeHl3aC55fTtcclxuXHJcbiAgICBpZiAoeHl3aC54IDwgbWluTWF4Lm1pbi54KSB7XHJcbiAgICAgICAgcmVzdWx0LnggPSBtaW5NYXgubWluLng7XHJcbiAgICB9IGVsc2UgaWYgKHh5d2gueCArIHh5d2gudyA+IG1pbk1heC5tYXgueCkge1xyXG4gICAgICAgIHJlc3VsdC54ID0gbWluTWF4Lm1heC54IC0geHl3aC53O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh4eXdoLnkgPCBtaW5NYXgubWluLnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5taW4ueTtcclxuICAgIH0gZWxzZSBpZiAoeHl3aC55ICsgeHl3aC5oID4gbWluTWF4Lm1heC55KSB7XHJcbiAgICAgICAgcmVzdWx0LnkgPSBtaW5NYXgubWF4LnkgLSB4eXdoLmg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFBvc1NpemUobWluTWF4OiBNaW5NYXgsIHRhcmdldDogUG9zU2l6ZSk6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gey4uLnRhcmdldC5wb3NpdGlvbn07XHJcbiAgICBpZiAodGFyZ2V0LnBvc2l0aW9uLnggPCBtaW5NYXgubWluLngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5taW4ueDtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0LnBvc2l0aW9uLnggKyB0YXJnZXQuc2l6ZS54ID4gbWluTWF4Lm1heC54KSB7XHJcbiAgICAgICAgcmVzdWx0LnggPSBtaW5NYXgubWF4LnggLSB0YXJnZXQuc2l6ZS54O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQucG9zaXRpb24ueSA8IG1pbk1heC5taW4ueSkge1xyXG4gICAgICAgIHJlc3VsdC55ID0gbWluTWF4Lm1pbi55O1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5zaXplLnkgPiBtaW5NYXgubWF4LnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5tYXgueSAtIHRhcmdldC5zaXplLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFNwaGVyZShtaW5NYXg6IE1pbk1heCwgc3BoZXJlOiBTcGhlcmUpOiBTaW1wbGVWZWN0b3IyIHtcclxuICAgIGNvbnN0IHJlc3VsdCAgICAgPSB7Li4uc3BoZXJlLmNlbnRlcn07XHJcbiAgICBjb25zdCBoYWxmUmFkaXVzID0gc3BoZXJlLnJhZGl1cyAvIDI7XHJcblxyXG4gICAgaWYgKHNwaGVyZS5jZW50ZXIueCAtIGhhbGZSYWRpdXMgPCBtaW5NYXgubWluLngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5taW4ueCArIGhhbGZSYWRpdXM7XHJcbiAgICB9IGVsc2UgaWYgKHNwaGVyZS5jZW50ZXIueCArIGhhbGZSYWRpdXMgPiBtaW5NYXgubWF4LngpIHtcclxuICAgICAgICByZXN1bHQueCA9IG1pbk1heC5tYXgueCAtIGhhbGZSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNwaGVyZS5jZW50ZXIueSAtIGhhbGZSYWRpdXMgPCBtaW5NYXgubWluLnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5taW4ueSArIGhhbGZSYWRpdXM7XHJcbiAgICB9IGVsc2UgaWYgKHNwaGVyZS5jZW50ZXIueSArIGhhbGZSYWRpdXMgPiBtaW5NYXgubWF4LnkpIHtcclxuICAgICAgICByZXN1bHQueSA9IG1pbk1heC5tYXgueSAtIGhhbGZSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lMmRDbG9zZXN0KFxyXG4gICAgc3gxOiBudW1iZXIsXHJcbiAgICBzeTE6IG51bWJlcixcclxuICAgIHN4MjogbnVtYmVyLFxyXG4gICAgc3kyOiBudW1iZXIsXHJcbiAgICBweDogbnVtYmVyLFxyXG4gICAgcHk6IG51bWJlcixcclxuKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IHhEZWx0YSA9IHN4MiAtIHN4MTtcclxuICAgIGNvbnN0IHlEZWx0YSA9IHN5MiAtIHN5MTtcclxuXHJcbiAgICBjb25zdCB1ID0gKChweCAtIHN4MSkgKiB4RGVsdGEgKyAocHkgLSBzeTEpICogeURlbHRhKSAvICh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEpO1xyXG5cclxuICAgIGlmICh1IDwgMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MSxcclxuICAgICAgICAgICAgeTogc3kxLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHUgPiAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogc3gyLFxyXG4gICAgICAgICAgICB5OiBzeTIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHN4MSArIHUgKiB4RGVsdGEsXHJcbiAgICAgICAgeTogc3kxICsgdSAqIHlEZWx0YSxcclxuICAgIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjMgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0UG9pbnRPbkxpbmUoXHJcbiAgICBzeDE6IG51bWJlcixcclxuICAgIHN5MTogbnVtYmVyLFxyXG4gICAgc3oxOiBudW1iZXIsXHJcbiAgICBzeDI6IG51bWJlcixcclxuICAgIHN5MjogbnVtYmVyLFxyXG4gICAgc3oyOiBudW1iZXIsXHJcbiAgICBweDogbnVtYmVyLFxyXG4gICAgcHk6IG51bWJlcixcclxuICAgIHB6OiBudW1iZXIsXHJcbik6IFNpbXBsZVZlY3RvcjMge1xyXG4gICAgY29uc3QgeERlbHRhID0gc3gyIC0gc3gxO1xyXG4gICAgY29uc3QgeURlbHRhID0gc3kyIC0gc3kxO1xyXG4gICAgY29uc3QgekRlbHRhID0gc3oyIC0gc3oxO1xyXG5cclxuICAgIGxldCB1ID0gKChweCAtIHN4MSkgKiB4RGVsdGEgKyAocHkgLSBzeTEpICogeURlbHRhICsgKHB6IC0gc3oxKSAqIHpEZWx0YSk7XHJcbiAgICB1IC89ICh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEgKyB6RGVsdGEgKiB6RGVsdGEpO1xyXG5cclxuICAgIGlmICh1IDwgMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MSxcclxuICAgICAgICAgICAgeTogc3kxLFxyXG4gICAgICAgICAgICB6OiBzejEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh1ID4gMSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MixcclxuICAgICAgICAgICAgeTogc3kyLFxyXG4gICAgICAgICAgICB6OiBzejIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHN4MSArIHUgKiB4RGVsdGEsXHJcbiAgICAgICAgeTogc3kxICsgdSAqIHlEZWx0YSxcclxuICAgICAgICB6OiBzejEgKyB1ICogekRlbHRhLFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBwb2ludFBvaW50MmREaXN0YW5jZSB9IGZyb20gXCIuL2Rpc3RhbmNlcy0yZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZVJlY3QyZENvbGxpc2lvbihcclxuICAgIGNQb3NYOiBudW1iZXIsXHJcbiAgICBjUG9zWTogbnVtYmVyLFxyXG4gICAgY1JhZGl1czogbnVtYmVyLFxyXG4gICAgclBvc1g6IG51bWJlcixcclxuICAgIHJQb3NZOiBudW1iZXIsXHJcbiAgICByU2l6ZVg6IG51bWJlcixcclxuICAgIHJTaXplWTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNpcmNsZURpc3RhbmNlWCA9IE1hdGguYWJzKGNQb3NYIC0gclBvc1gpO1xyXG4gICAgY29uc3QgY2lyY2xlRGlzdGFuY2VZID0gTWF0aC5hYnMoY1Bvc1kgLSByUG9zWSk7XHJcblxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWCA+IHJTaXplWCAvIDIgKyBjUmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWSA+IHJTaXplWSAvIDIgKyBjUmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaXJjbGVEaXN0YW5jZVggPD0gclNpemVYIC8gMikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWSA8PSByU2l6ZVkgLyAyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ybmVyRGlzdGFuY2VTUSA9XHJcbiAgICAgICAgICAgICAgTWF0aC5wb3coY2lyY2xlRGlzdGFuY2VYIC0gclBvc1ggLyAyLCAyKSArXHJcbiAgICAgICAgICAgICAgTWF0aC5wb3coY2lyY2xlRGlzdGFuY2VZIC0gclBvc1kgLyAyLCAyKTtcclxuXHJcbiAgICByZXR1cm4gY29ybmVyRGlzdGFuY2VTUSA8PSBNYXRoLnBvdyhjUmFkaXVzLCAyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVSZWN0YW5nbGUyZENvbGxpc2lvbihcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVg6IG51bWJlcixcclxuICAgIGJTaXplWTogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFJlY3QyZENvbGxpc2lvbihhU3RhcnRYLCBhU3RhcnRZLCBiUG9zWCwgYlBvc1ksIGJTaXplWCwgYlNpemVZKSB8fFxyXG4gICAgICAgIHBvaW50UmVjdDJkQ29sbGlzaW9uKGFFbmRYLCBhRW5kWSwgYlBvc1gsIGJQb3NZLCBiU2l6ZVgsIGJTaXplWSkgfHxcclxuICAgICAgICBsaW5lTGluZTJkQ29sbGlzaW9uKGFTdGFydFgsXHJcbiAgICAgICAgICAgIGFTdGFydFksXHJcbiAgICAgICAgICAgIGFFbmRYLFxyXG4gICAgICAgICAgICBhRW5kWSxcclxuICAgICAgICAgICAgYlBvc1gsXHJcbiAgICAgICAgICAgIGJQb3NZLFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCxcclxuICAgICAgICAgICAgYlBvc1kgKyBiU2l6ZVkpIHx8XHJcbiAgICAgICAgbGluZUxpbmUyZENvbGxpc2lvbihhU3RhcnRYLFxyXG4gICAgICAgICAgICBhU3RhcnRZLFxyXG4gICAgICAgICAgICBhRW5kWCxcclxuICAgICAgICAgICAgYUVuZFksXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLFxyXG4gICAgICAgICAgICBiUG9zWSxcclxuICAgICAgICAgICAgYlBvc1gsXHJcbiAgICAgICAgICAgIGJQb3NZICsgYlNpemVZKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lTGluZTJkQ29sbGlzaW9uKFxyXG4gICAgYVN0YXJ0WDogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WTogbnVtYmVyLFxyXG4gICAgYUVuZFg6IG51bWJlcixcclxuICAgIGFFbmRZOiBudW1iZXIsXHJcbiAgICBiU3RhcnRYOiBudW1iZXIsXHJcbiAgICBiU3RhcnRZOiBudW1iZXIsXHJcbiAgICBiRW5kWDogbnVtYmVyLFxyXG4gICAgYkVuZFk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcblxyXG4gICAgY29uc3QgZGVub21pbmF0b3IgPSAoYUVuZFggLSBhU3RhcnRYKSAqIChiRW5kWSAtIGJTdGFydFkpIC0gKGFFbmRZIC0gYVN0YXJ0WSkgKiAoYkVuZFggLSBiU3RhcnRYKTtcclxuICAgIGNvbnN0IG51bWVyYXRvcjEgID0gKGFTdGFydFkgLSBiU3RhcnRZKSAqIChiRW5kWCAtIGJTdGFydFgpIC0gKGFTdGFydFggLSBiU3RhcnRYKSAqIChiRW5kWSAtIGJTdGFydFkpO1xyXG4gICAgY29uc3QgbnVtZXJhdG9yMiAgPSAoYVN0YXJ0WSAtIGJTdGFydFkpICogKGFFbmRYIC0gYVN0YXJ0WCkgLSAoYVN0YXJ0WCAtIGJTdGFydFgpICogKGFFbmRZIC0gYVN0YXJ0WSk7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGNvaW5jaWRlbnQgbGluZXMgKGhhcyBhIHByb2JsZW0sIHJlYWQgYmVsb3cpXHJcbiAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVtZXJhdG9yMSA9PT0gMCAmJiBudW1lcmF0b3IyID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHIgPSBudW1lcmF0b3IxIC8gZGVub21pbmF0b3I7XHJcbiAgICBjb25zdCBzID0gbnVtZXJhdG9yMiAvIGRlbm9taW5hdG9yO1xyXG5cclxuICAgIHJldHVybiByID49IDAgJiYgciA8PSAxICYmIChzID49IDAgJiYgcyA8PSAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF3OiBudW1iZXIsXHJcbiAgICBhaDogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBidzogbnVtYmVyLFxyXG4gICAgYmg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYnggKyBidyA+PSBheCAmJiBieSArIGJoID49IGF5ICYmIGJ4IDw9IGF4ICsgYXcgJiYgYnkgPD0gYXkgKyBhaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBhUmFkaXVzOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRQb2ludDJkRGlzdGFuY2UoYVgsIGFZLCBiWCwgYlkpIDw9IGFSYWRpdXMgKyBiUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBwb2ludFg6IG51bWJlcixcclxuICAgIHBvaW50WTogbnVtYmVyLFxyXG4gICAgcmVjdFg6IG51bWJlcixcclxuICAgIHJlY3RZOiBudW1iZXIsXHJcbiAgICByZWN0VzogbnVtYmVyLFxyXG4gICAgcmVjdEg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IHJlY3RYICYmXHJcbiAgICAgICAgcG9pbnRZID49IHJlY3RZICYmXHJcbiAgICAgICAgcG9pbnRYIDw9IHJlY3RYICsgcmVjdFcgJiZcclxuICAgICAgICBwb2ludFkgPD0gcmVjdFkgKyByZWN0SDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UmVjdE1pbk1heDJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIG1pblg6IG51bWJlcixcclxuICAgIG1pblk6IG51bWJlcixcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IG1pblggJiZcclxuICAgICAgICBwb2ludFkgPj0gbWluWSAmJlxyXG4gICAgICAgIHBvaW50WCA8PSBtYXhYICYmXHJcbiAgICAgICAgcG9pbnRZIDw9IG1heFk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludENpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIGNpcmNsZVg6IG51bWJlcixcclxuICAgIGNpcmNsZVk6IG51bWJlcixcclxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFBvaW50MmREaXN0YW5jZShwb2ludFgsIHBvaW50WSwgY2lyY2xlWCwgY2lyY2xlWSkgPD0gY2lyY2xlUmFkaXVzO1xyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aFwiO1xyXG5pbXBvcnQgeyBnZXRDbG9zZXN0UG9pbnRPbkxpbmUgfSBmcm9tIFwiLi9jbG9zZXN0LTNkXCI7XHJcbmltcG9ydCB7IHBvaW50UG9pbnQyZERpc3RhbmNlIH0gZnJvbSBcIi4vZGlzdGFuY2VzLTJkXCI7XHJcbmltcG9ydCB7IHBvaW50TGluZTNkRGlzdGFuY2UsIHBvaW50UG9pbnQzZERpc3RhbmNlIH0gZnJvbSBcIi4vZGlzdGFuY2VzLTNkXCI7XHJcbmltcG9ydCB7IHZlY3RvclNxdWFyZUludGVyc2VjdDNkIH0gZnJvbSBcIi4vaW50ZXJzZWN0cy0zZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaGVyZVNwaGVyZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGFSYWRpdXM6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkaXN0ID0gcG9pbnRQb2ludDNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieik7XHJcblxyXG4gICAgcmV0dXJuIGRpc3QgPD0gYVJhZGl1cyArIGJSYWRpdXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFNwaGVyZShcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkaXN0ID0gcG9pbnRQb2ludDNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieik7XHJcblxyXG4gICAgcmV0dXJuIGRpc3QgPD0gYlJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTcGhlcmUoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBzeDogbnVtYmVyLFxyXG4gICAgc3k6IG51bWJlcixcclxuICAgIHN6OiBudW1iZXIsXHJcbiAgICBzcjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludExpbmUzZERpc3RhbmNlKGF4LCBheSwgYXosIGJ4LCBieSwgYnosIHN4LCBzeSwgc3opIDwgc3I7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEludGVyc2VjdGlvblR5cGUge1xyXG4gICAgT1VUU0lERSAgICAgICAgICA9IFwiT1VUU0lERVwiLFxyXG4gICAgSU5TSURFICAgICAgICAgICA9IFwiSU5TSURFXCIsXHJcbiAgICBPTkVfSU5URVJTRUNUSU9OID0gXCJPTkVfSU5URVJTRUNUSU9OXCIsXHJcbiAgICBUV09fSU5URVJTRUNUSU9OID0gXCJUV09fSU5URVJTRUNUSU9OXCIsXHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVCb3gyKFxyXG4gICAgcDBYOiBudW1iZXIsXHJcbiAgICBwMFk6IG51bWJlcixcclxuICAgIHAwWjogbnVtYmVyLFxyXG4gICAgcDFYOiBudW1iZXIsXHJcbiAgICBwMVk6IG51bWJlcixcclxuICAgIHAxWjogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWluWjogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4gICAgbWF4WjogbnVtYmVyLFxyXG4gICAgcmVzdWx0OiBTaW1wbGVWZWN0b3IyLFxyXG4pOiBJbnRlcnNlY3Rpb25UeXBlIHtcclxuICAgIGNvbnN0IGRpclggICAgPSBwMVggLSBwMFg7XHJcbiAgICBjb25zdCBkaXJZICAgID0gcDFZIC0gcDBZO1xyXG4gICAgY29uc3QgZGlyWiAgICA9IHAxWiAtIHAwWjtcclxuICAgIGNvbnN0IGludkRpclggPSAxIC8gZGlyWDtcclxuICAgIGNvbnN0IGludkRpclkgPSAxIC8gZGlyWTtcclxuICAgIGNvbnN0IGludkRpclogPSAxIC8gZGlyWjtcclxuXHJcbiAgICBsZXQgdE5lYXI7XHJcbiAgICBsZXQgdEZhcjtcclxuICAgIGxldCB0eW1pbjtcclxuICAgIGxldCB0eW1heDtcclxuICAgIGxldCB0em1pbjtcclxuICAgIGxldCB0em1heDtcclxuXHJcbiAgICBpZiAoaW52RGlyWCA+PSAwKSB7XHJcbiAgICAgICAgdE5lYXIgPSAobWluWCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgICAgIHRGYXIgID0gKG1heFggLSBwMFgpICogaW52RGlyWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdE5lYXIgPSAobWF4WCAtIHAwWCkgKiBpbnZEaXJYO1xyXG4gICAgICAgIHRGYXIgID0gKG1pblggLSBwMFgpICogaW52RGlyWDtcclxuICAgIH1cclxuICAgIGlmIChpbnZEaXJZID49IDApIHtcclxuICAgICAgICB0eW1pbiA9IChtaW5ZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICAgICAgdHltYXggPSAobWF4WSAtIHAwWSkgKiBpbnZEaXJZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eW1pbiA9IChtYXhZIC0gcDBZKSAqIGludkRpclk7XHJcbiAgICAgICAgdHltYXggPSAobWluWSAtIHAwWSkgKiBpbnZEaXJZO1xyXG4gICAgfVxyXG4gICAgaWYgKHROZWFyID4gdHltYXggfHwgdHltaW4gPiB0RmFyKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIH1cclxuICAgIGlmIChpbnZEaXJaID49IDApIHtcclxuICAgICAgICB0em1pbiA9IChtaW5aIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICAgICAgdHptYXggPSAobWF4WiAtIHAwWikgKiBpbnZEaXJaO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0em1pbiA9IChtYXhaIC0gcDBaKSAqIGludkRpclo7XHJcbiAgICAgICAgdHptYXggPSAobWluWiAtIHAwWikgKiBpbnZEaXJaO1xyXG4gICAgfVxyXG4gICAgaWYgKHROZWFyID4gdHptYXggfHwgdHptaW4gPiB0RmFyKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIH1cclxuICAgIHROZWFyICAgID0gdHltaW4gPiB0TmVhciB8fCBpc05hTih0TmVhcikgPyB0eW1pbiA6IHROZWFyO1xyXG4gICAgdEZhciAgICAgPSB0eW1heCA8IHRGYXIgfHwgaXNOYU4odEZhcikgPyB0eW1heCA6IHRGYXI7XHJcbiAgICB0TmVhciAgICA9IHR6bWluID4gdE5lYXIgPyB0em1pbiA6IHROZWFyO1xyXG4gICAgdEZhciAgICAgPSB0em1heCA8IHRGYXIgPyB0em1heCA6IHRGYXI7XHJcbiAgICBsZXQgdHlwZSA9IEludGVyc2VjdGlvblR5cGUuT1VUU0lERTtcclxuICAgIGlmICh0TmVhciA8IHRGYXIgJiYgdE5lYXIgPD0gMSAmJiB0RmFyID49IDApIHtcclxuICAgICAgICBpZiAodE5lYXIgPiAwICYmIHRGYXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHRGYXIgPSB0TmVhcjtcclxuICAgICAgICAgICAgdHlwZSA9IEludGVyc2VjdGlvblR5cGUuT05FX0lOVEVSU0VDVElPTjtcclxuICAgICAgICB9IGVsc2UgaWYgKHROZWFyIDwgMCAmJiB0RmFyIDwgMSkge1xyXG4gICAgICAgICAgICB0TmVhciA9IHRGYXI7XHJcbiAgICAgICAgICAgIHR5cGUgID0gSW50ZXJzZWN0aW9uVHlwZS5PTkVfSU5URVJTRUNUSU9OO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodE5lYXIgPCAwICYmIHRGYXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBJbnRlcnNlY3Rpb25UeXBlLklOU0lERTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlID0gSW50ZXJzZWN0aW9uVHlwZS5UV09fSU5URVJTRUNUSU9OO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQueCA9IHROZWFyO1xyXG4gICAgICAgIHJlc3VsdC55ID0gdEZhcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Qm94KFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYVdpZHRoOiBudW1iZXIsXHJcbiAgICBhSGVpZ2h0OiBudW1iZXIsXHJcbiAgICBhRGVwdGg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYXggPCBieCAmJiBheCArIGFXaWR0aCA+IGJ4ICYmXHJcbiAgICAgICAgYXkgPCBieSAmJiBheSArIGFIZWlnaHQgPiBieSAmJlxyXG4gICAgICAgIGF6IDwgYnogJiYgYXogKyBhRGVwdGggPiBiejtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50Qm94TWluTWF4KFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgbWluWDogbnVtYmVyLFxyXG4gICAgbWluWTogbnVtYmVyLFxyXG4gICAgbWluWjogbnVtYmVyLFxyXG4gICAgbWF4WDogbnVtYmVyLFxyXG4gICAgbWF4WTogbnVtYmVyLFxyXG4gICAgbWF4WjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBiUG9zWCA+PSBtaW5YICYmIGJQb3NZID49IG1pblkgJiYgYlBvc1ogPj0gbWluWiAmJlxyXG4gICAgICAgIGJQb3NYIDw9IG1heFggJiYgYlBvc1kgPj0gbWluWSAmJiBiUG9zWiA8PSBtYXhaO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUJveChcclxuICAgIGExeDogbnVtYmVyLFxyXG4gICAgYTF5OiBudW1iZXIsXHJcbiAgICBhMXo6IG51bWJlcixcclxuICAgIGEyeDogbnVtYmVyLFxyXG4gICAgYTJ5OiBudW1iZXIsXHJcbiAgICBhMno6IG51bWJlcixcclxuICAgIGJQb3NYOiBudW1iZXIsXHJcbiAgICBiUG9zWTogbnVtYmVyLFxyXG4gICAgYlBvc1o6IG51bWJlcixcclxuICAgIGJTaXplWDogbnVtYmVyLFxyXG4gICAgYlNpemVZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVosXHJcbiAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiAtIGJTaXplWixcclxuICAgICAgICBiUG9zWCArIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKSB8fFxyXG4gICAgICAgIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKGExeCwgYTF5LCBhMXosXHJcbiAgICAgICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSAtIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSAtIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZICsgYlNpemVZLCBiUG9zWiAtIGJTaXplWikgfHxcclxuICAgICAgICB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZChhMXgsIGExeSwgYTF6LFxyXG4gICAgICAgICAgICBhMngsIGEyeSwgYTJ6LFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgLSBiU2l6ZVksIGJQb3NaICsgYlNpemVaLFxyXG4gICAgICAgICAgICBiUG9zWCAtIGJTaXplWCwgYlBvc1kgKyBiU2l6ZVksIGJQb3NaIC0gYlNpemVaKSB8fFxyXG4gICAgICAgIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKGExeCwgYTF5LCBhMXosXHJcbiAgICAgICAgICAgIGEyeCwgYTJ5LCBhMnosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYIC0gYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogKyBiU2l6ZVosXHJcbiAgICAgICAgICAgIGJQb3NYICsgYlNpemVYLCBiUG9zWSArIGJTaXplWSwgYlBvc1ogLSBiU2l6ZVopIHx8XHJcbiAgICAgICAgdmVjdG9yU3F1YXJlSW50ZXJzZWN0M2QoYTF4LCBhMXksIGExeixcclxuICAgICAgICAgICAgYTJ4LCBhMnksIGEyeixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggLSBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiArIGJTaXplWixcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsIGJQb3NZIC0gYlNpemVZLCBiUG9zWiAtIGJTaXplWik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lU3BoZXJlMihcclxuICAgIHAwWDogbnVtYmVyLFxyXG4gICAgcDBZOiBudW1iZXIsXHJcbiAgICBwMFo6IG51bWJlcixcclxuICAgIHAxWDogbnVtYmVyLFxyXG4gICAgcDFZOiBudW1iZXIsXHJcbiAgICBwMVo6IG51bWJlcixcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlcixcclxuICAgIGNlbnRlclo6IG51bWJlcixcclxuICAgIHJhZGl1c1NxdWFyZWQ6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZFggICAgPSBwMVggLSBwMFg7XHJcbiAgICBsZXQgZFkgICAgPSBwMVkgLSBwMFk7XHJcbiAgICBsZXQgZFogICAgPSBwMVogLSBwMFo7XHJcbiAgICBjb25zdCBub20gPSAoY2VudGVyWCAtIHAwWCkgKiBkWCArIChjZW50ZXJZIC0gcDBZKSAqIGRZICsgKGNlbnRlclogLSBwMFopICogZFo7XHJcbiAgICBjb25zdCBkZW4gPSBkWCAqIGRYICsgZFkgKiBkWSArIGRaICogZFo7XHJcbiAgICBjb25zdCB1ICAgPSBub20gLyBkZW47XHJcbiAgICBpZiAodSA8IDApIHtcclxuICAgICAgICBkWCA9IHAwWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgPSBwMFkgLSBjZW50ZXJZO1xyXG4gICAgICAgIGRaID0gcDBaIC0gY2VudGVyWjtcclxuICAgIH0gZWxzZSBpZiAodSA+IDEpIHtcclxuICAgICAgICBkWCA9IHAxWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgPSBwMVkgLSBjZW50ZXJZO1xyXG4gICAgICAgIGRaID0gcDFaIC0gY2VudGVyWjtcclxuICAgIH0gZWxzZSB7IC8vIGhhcyB0byBiZSA+PSAwIGFuZCA8PSAxXHJcbiAgICAgICAgY29uc3QgcFggPSBwMFggKyB1ICogZFg7XHJcbiAgICAgICAgY29uc3QgcFkgPSBwMFkgKyB1ICogZFk7XHJcbiAgICAgICAgY29uc3QgcFogPSBwMFogKyB1ICogZFo7XHJcbiAgICAgICAgZFggICAgICAgPSBwWCAtIGNlbnRlclg7XHJcbiAgICAgICAgZFkgICAgICAgPSBwWSAtIGNlbnRlclk7XHJcbiAgICAgICAgZFogICAgICAgPSBwWiAtIGNlbnRlclo7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXN0ID0gZFggKiBkWCArIGRZICogZFkgKyBkWiAqIGRaO1xyXG5cclxuICAgIHJldHVybiBkaXN0IDw9IHJhZGl1c1NxdWFyZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib3hCb3goXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF6OiBudW1iZXIsXHJcbiAgICBhdzogbnVtYmVyLFxyXG4gICAgYWg6IG51bWJlcixcclxuICAgIGFkOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJ6OiBudW1iZXIsXHJcbiAgICBidzogbnVtYmVyLFxyXG4gICAgYmg6IG51bWJlcixcclxuICAgIGJkOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGF4ICsgYXcgPiBieCAmJiBieCArIGJ3ID4gYXggJiZcclxuICAgICAgICBheSArIGFoID4gYnkgJiYgYnkgKyBiaCA+IGF5ICYmXHJcbiAgICAgICAgYXogKyBhZCA+IGJ6ICYmIGJ6ICsgYmQgPiBhejtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50RWxsaXBzb2lkKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYlBvc1g6IG51bWJlcixcclxuICAgIGJQb3NZOiBudW1iZXIsXHJcbiAgICBiUG9zWjogbnVtYmVyLFxyXG4gICAgYlNpemVYOiBudW1iZXIsXHJcbiAgICBiU2l6ZVk6IG51bWJlcixcclxuICAgIGJTaXplWjogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFwb3NOZXdYID0gYXggLSBiUG9zWDtcclxuICAgIGNvbnN0IGFwb3NOZXdZID0gYXkgLSBiUG9zWTtcclxuICAgIGNvbnN0IGFwb3NOZXdaID0gYXogLSBiUG9zWjtcclxuXHJcbiAgICBjb25zdCB4YSA9IChhcG9zTmV3WCAqIGFwb3NOZXdYKSAvIChiU2l6ZVggKiBiU2l6ZVgpO1xyXG4gICAgY29uc3QgeWIgPSAoYXBvc05ld1kgKiBhcG9zTmV3WSkgLyAoYlNpemVZICogYlNpemVZKTtcclxuICAgIGNvbnN0IHpjID0gKGFwb3NOZXdaICogYXBvc05ld1opIC8gKGJTaXplWiAqIGJTaXplWik7XHJcblxyXG4gICAgcmV0dXJuIHhhICsgeWIgKyB6YyA8PSAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUVsbGlwc29pZChcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFTdGFydFo6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYUVuZFo6IG51bWJlcixcclxuICAgIGJQb3NYOiBudW1iZXIsXHJcbiAgICBiUG9zWTogbnVtYmVyLFxyXG4gICAgYlBvc1o6IG51bWJlcixcclxuICAgIGJTaXplWDogbnVtYmVyLFxyXG4gICAgYlNpemVZOiBudW1iZXIsXHJcbiAgICBiU2l6ZVo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwb2ludCA9IGdldENsb3Nlc3RQb2ludE9uTGluZShcclxuICAgICAgICBhU3RhcnRYLFxyXG4gICAgICAgIGFTdGFydFksXHJcbiAgICAgICAgYVN0YXJ0WixcclxuICAgICAgICBhRW5kWCxcclxuICAgICAgICBhRW5kWSxcclxuICAgICAgICBhRW5kWixcclxuICAgICAgICBiUG9zWCxcclxuICAgICAgICBiUG9zWSxcclxuICAgICAgICBiUG9zWixcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHBvaW50RWxsaXBzb2lkKHBvaW50LngsIHBvaW50LnksIHBvaW50LnosIGJQb3NYLCBiUG9zWSwgYlBvc1osIGJTaXplWCwgYlNpemVZLCBiU2l6ZVopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDeWxpbmRlcihcclxuICAgIGF4OiBudW1iZXIsXHJcbiAgICBheTogbnVtYmVyLFxyXG4gICAgYXo6IG51bWJlcixcclxuICAgIGJ4OiBudW1iZXIsXHJcbiAgICBieTogbnVtYmVyLFxyXG4gICAgYno6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuICAgIGJIZWlnaHQ6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb25kaXRpb25PbmUgPSBheSA+IGJ5ICYmIGF5IDwgYnkgKyBiSGVpZ2h0O1xyXG4gICAgY29uc3QgY29uZGl0aW9uVHdvID0gcG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF6LCBieCwgYnopIDwgYlJhZGl1cztcclxuXHJcbiAgICByZXR1cm4gY29uZGl0aW9uT25lICYmIGNvbmRpdGlvblR3bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaGVyZUN5bGluZGVyKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhejogbnVtYmVyLFxyXG4gICAgYVJhZGl1czogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBiejogbnVtYmVyLFxyXG4gICAgYlJhZGl1czogbnVtYmVyLFxyXG4gICAgYkhlaWdodDogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbk9uZSA9IGF5ICsgYVJhZGl1cyA+IGJ5ICYmIGF5IC0gYVJhZGl1cyA8IGJ5ICsgYkhlaWdodDtcclxuICAgIGNvbnN0IGNvbmRpdGlvblR3byA9IHBvaW50UG9pbnQyZERpc3RhbmNlKGF4LCBheiwgYngsIGJ6KSA8IGFSYWRpdXMgKyBiUmFkaXVzO1xyXG5cclxuICAgIHJldHVybiBjb25kaXRpb25PbmUgJiYgY29uZGl0aW9uVHdvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdFNwaGVyZUJveE1pbk1heChcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlcixcclxuICAgIGNlbnRlclo6IG51bWJlcixcclxuICAgIHJhZGl1c1NxdWFyZWQ6IG51bWJlcixcclxuICAgIG1pblg6IG51bWJlcixcclxuICAgIG1pblk6IG51bWJlcixcclxuICAgIG1pblo6IG51bWJlcixcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuICAgIG1heFo6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcmFkaXVzMiA9IHJhZGl1c1NxdWFyZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBYIC0gbWluXHJcbiAgICAgKiBZIC0gbWF4XHJcbiAgICAgKiBaIC0gY2VudGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZ1bmMgICA9ICh2YWw6IFZlY3RvcjMpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGxldCBkID0gMDtcclxuICAgICAgICBpZiAodmFsLnogPCB2YWwueCkge1xyXG4gICAgICAgICAgICBkID0gdmFsLnogLSB2YWwueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbC56ID4gdmFsLnkpIHtcclxuICAgICAgICAgICAgZCA9IHZhbC56IC0gdmFsLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZCAqIGQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFZlY3RvcjMoKTtcclxuICAgIHJhZGl1czIgLT0gZnVuYyhwYXJhbXMuc2V0RGF0YShtaW5YLCBtYXhYLCBjZW50ZXJYKSk7XHJcbiAgICByYWRpdXMyIC09IGZ1bmMocGFyYW1zLnNldERhdGEobWluWSwgbWF4WSwgY2VudGVyWSkpO1xyXG4gICAgcmFkaXVzMiAtPSBmdW5jKHBhcmFtcy5zZXREYXRhKG1pblosIG1heFosIGNlbnRlclopKTtcclxuXHJcbiAgICByZXR1cm4gcmFkaXVzMiA+PSAwO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50MmREaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UG9pbnRTcXIyZERpc3RhbmNlKGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZGlzdFggPSBheCAtIGJ4O1xyXG4gICAgY29uc3QgZGlzdFkgPSBheSAtIGJ5O1xyXG5cclxuICAgIHJldHVybiBkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZTJkRGlzdGFuY2UoXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGFyOiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIgLSBhciwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVDaXJjbGVTcXIyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBhcjogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBicjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KHBvaW50UG9pbnRTcXIyZERpc3RhbmNlKGF4LCBheSwgYngsIGJ5KSAtIGJyIC0gYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDaXJjbGUyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludDJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIsIDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRDaXJjbGVTcXIyZERpc3RhbmNlKFxyXG4gICAgYXg6IG51bWJlcixcclxuICAgIGF5OiBudW1iZXIsXHJcbiAgICBieDogbnVtYmVyLFxyXG4gICAgYnk6IG51bWJlcixcclxuICAgIGJyOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgocG9pbnRQb2ludFNxcjJkRGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIC0gYnIsIDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lMmREaXN0YW5jZShcclxuICAgIGFYOiBudW1iZXIsXHJcbiAgICBhWTogbnVtYmVyLFxyXG4gICAgYlg6IG51bWJlcixcclxuICAgIGJZOiBudW1iZXIsXHJcbiAgICBwWDogbnVtYmVyLFxyXG4gICAgcFk6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRMaW5lU3FyMmREaXN0YW5jZShhWCwgYVksIGJYLCBiWSwgcFgsIHBZKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludExpbmVTcXIyZERpc3RhbmNlKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIHBYOiBudW1iZXIsXHJcbiAgICBwWTogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3QgQSA9IHBYIC0gYVg7XHJcbiAgICBjb25zdCBCID0gcFkgLSBhWTtcclxuICAgIGNvbnN0IEMgPSBiWCAtIGFYO1xyXG4gICAgY29uc3QgRCA9IGJZIC0gYVk7XHJcblxyXG4gICAgY29uc3QgZG90ICAgICAgICAgID0gQSAqIEMgKyBCICogRDtcclxuICAgIGNvbnN0IGxlbmd0aFNxdWFyZSA9IEMgKiBDICsgRCAqIEQ7XHJcbiAgICBsZXQgcGFyYW0gICAgICAgICAgPSAtMTtcclxuICAgIGlmIChsZW5ndGhTcXVhcmUgIT09IDApIHtcclxuICAgICAgICBwYXJhbSA9IGRvdCAvIGxlbmd0aFNxdWFyZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeHg6IG51bWJlcjtcclxuICAgIGxldCB5eTogbnVtYmVyO1xyXG5cclxuICAgIGlmIChwYXJhbSA8IDApIHtcclxuICAgICAgICB4eCA9IGFYO1xyXG4gICAgICAgIHl5ID0gYVk7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtID4gMSkge1xyXG4gICAgICAgIHh4ID0gYlg7XHJcbiAgICAgICAgeXkgPSBiWTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeHggPSBhWCArIHBhcmFtICogQztcclxuICAgICAgICB5eSA9IGFZICsgcGFyYW0gKiBEO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGR4ID0gcFggLSB4eDtcclxuICAgIGNvbnN0IGR5ID0gcFkgLSB5eTtcclxuXHJcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIi4uL21hdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50M2REaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBhejogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyLCBiejogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRQb2ludFNxcjNkRGlzdGFuY2UoYXgsIGF5LCBheiwgYngsIGJ5LCBieikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRQb2ludFNxcjNkRGlzdGFuY2UoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYXo6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlciwgYno6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaXN0WCA9IGF4IC0gYng7XHJcbiAgICBjb25zdCBkaXN0WSA9IGF5IC0gYnk7XHJcbiAgICBjb25zdCBkaXN0WiA9IGF6IC0gYno7XHJcblxyXG4gICAgcmV0dXJuIGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZICsgZGlzdFogKiBkaXN0WjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50TGluZTNkRGlzdGFuY2UoXHJcbiAgICBhU3RhcnRYOiBudW1iZXIsXHJcbiAgICBhU3RhcnRZOiBudW1iZXIsXHJcbiAgICBhU3RhcnRaOiBudW1iZXIsXHJcbiAgICBhRW5kWDogbnVtYmVyLFxyXG4gICAgYUVuZFk6IG51bWJlcixcclxuICAgIGFFbmRaOiBudW1iZXIsXHJcbiAgICBiQ2VudGVyWDogbnVtYmVyLFxyXG4gICAgYkNlbnRlclk6IG51bWJlcixcclxuICAgIGJDZW50ZXJaOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBhU3ViQnggPSBhU3RhcnRYIC0gYUVuZFg7XHJcbiAgICBjb25zdCBhU3ViQnkgPSBhU3RhcnRZIC0gYUVuZFk7XHJcbiAgICBjb25zdCBhU3ViQnogPSBhU3RhcnRaIC0gYUVuZFo7XHJcbiAgICBjb25zdCBwU3ViQnggPSBiQ2VudGVyWCAtIGFFbmRYO1xyXG4gICAgY29uc3QgcFN1YkJ5ID0gYkNlbnRlclkgLSBhRW5kWTtcclxuICAgIGNvbnN0IHBTdWJCeiA9IGJDZW50ZXJaIC0gYUVuZFo7XHJcbiAgICBjb25zdCBkb3RBICAgPSBhU3ViQnggKiBwU3ViQnggKyBhU3ViQnkgKiBwU3ViQnkgKyBhU3ViQnogKiBwU3ViQno7XHJcbiAgICBpZiAoZG90QSA8IDApIHtcclxuICAgICAgICByZXR1cm4gcG9pbnRQb2ludDNkRGlzdGFuY2UoYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWiwgYUVuZFgsIGFFbmRZLCBhRW5kWik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYlN1YkF4ID0gYUVuZFggLSBhU3RhcnRYO1xyXG4gICAgY29uc3QgYlN1YkF5ID0gYUVuZFkgLSBhU3RhcnRZO1xyXG4gICAgY29uc3QgYlN1YkF6ID0gYUVuZFogLSBhU3RhcnRaO1xyXG4gICAgY29uc3QgcFN1YkF4ID0gYkNlbnRlclggLSBhU3RhcnRYO1xyXG4gICAgY29uc3QgcFN1YkF5ID0gYkNlbnRlclkgLSBhU3RhcnRZO1xyXG4gICAgY29uc3QgcFN1YkF6ID0gYkNlbnRlclogLSBhU3RhcnRaO1xyXG4gICAgY29uc3QgZG90QiAgID0gYlN1YkF4ICogcFN1YkF4ICsgYlN1YkF5ICogcFN1YkF5ICsgYlN1YkF6ICogcFN1YkF6O1xyXG4gICAgaWYgKGRvdEIgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50UG9pbnQzZERpc3RhbmNlKGJDZW50ZXJYLCBiQ2VudGVyWSwgYkNlbnRlclosIGFTdGFydFgsIGFTdGFydFksIGFTdGFydFopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2ZWN0b3JQb2ludDNkRGlzdGFuY2UoYVN0YXJ0WCwgYVN0YXJ0WSwgYVN0YXJ0WiwgYUVuZFgsIGFFbmRZLCBhRW5kWiwgYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludE5vcm1hbFBsYW5lM2REaXN0YW5jZShhTm9ybWFsOiBWZWN0b3IzLCBhUG9pbnQ6IFZlY3RvcjMsIGJQb2ludDogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkID0gLVZlY3RvcjMubXVsKGFOb3JtYWwsIGFQb2ludCkuc3VtKCk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguYWJzKChWZWN0b3IzLm11bChhTm9ybWFsLCBiUG9pbnQpLnN1bSgpICsgZCkgLyBNYXRoLnNxcnQoVmVjdG9yMy5tdWwoYU5vcm1hbCwgYU5vcm1hbCkuc3VtKCkpKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvaW50UGxhbmUoVmVjdG9yMyBhMSwgVmVjdG9yMyBhMiwgVmVjdG9yMyBhMywgVmVjdG9yMyBiUG9pbnQpIHtcclxuLy8gICAgIHJldHVybiBwb2ludFBsYW5lKGEzLnN1YihhMikuY3Jvc3MoYTEuc3ViKGEyKSksIGExLCBiUG9pbnQpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjdG9yUG9pbnQzZERpc3RhbmNlKFxyXG4gICAgc3RhcnRYOiBudW1iZXIsXHJcbiAgICBzdGFydFk6IG51bWJlcixcclxuICAgIHN0YXJ0WjogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyLFxyXG4gICAgZW5kWjogbnVtYmVyLFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIHBvaW50WjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc3RhcnRTdWJFbmRYID0gc3RhcnRYIC0gZW5kWDtcclxuICAgIGNvbnN0IHN0YXJ0U3ViRW5kWSA9IHN0YXJ0WSAtIGVuZFk7XHJcbiAgICBjb25zdCBzdGFydFN1YkVuZFogPSBzdGFydFogLSBlbmRaO1xyXG5cclxuICAgIGNvbnN0IGVuZFN1YlBvaW50WCA9IGVuZFggLSBwb2ludFg7XHJcbiAgICBjb25zdCBlbmRTdWJQb2ludFkgPSBlbmRZIC0gcG9pbnRZO1xyXG4gICAgY29uc3QgZW5kU3ViUG9pbnRaID0gZW5kWiAtIHBvaW50WjtcclxuXHJcbiAgICBjb25zdCBjcm9zc1ggPSBzdGFydFN1YkVuZFkgKiBlbmRTdWJQb2ludFogLSBzdGFydFN1YkVuZFogKiBlbmRTdWJQb2ludFk7XHJcbiAgICBjb25zdCBjcm9zc1kgPSBzdGFydFN1YkVuZFogKiBlbmRTdWJQb2ludFggLSBzdGFydFN1YkVuZFggKiBlbmRTdWJQb2ludFo7XHJcbiAgICBjb25zdCBjcm9zc1ogPSBzdGFydFN1YkVuZFggKiBlbmRTdWJQb2ludFkgLSBzdGFydFN1YkVuZFkgKiBlbmRTdWJQb2ludFg7XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoMSA9IE1hdGguc3FydChjcm9zc1ggKiBjcm9zc1ggKyBjcm9zc1kgKiBjcm9zc1kgKyBjcm9zc1ogKiBjcm9zc1opO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IE1hdGguc3FydChzdGFydFN1YkVuZFggKiBzdGFydFN1YkVuZFggKyBzdGFydFN1YkVuZFkgKiBzdGFydFN1YkVuZFkgKyBzdGFydFN1YkVuZFogKiBzdGFydFN1YkVuZFopO1xyXG5cclxuICAgIHJldHVybiBsZW5ndGgxIC8gbGVuZ3RoMjtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jbG9zZXN0LTJkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Nsb3Nlc3QtM2RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sbGlzaW9ucy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsaXNpb25zLTNkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Rpc3RhbmNlcy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kaXN0YW5jZXMtM2RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYm91bmRlcnMtMmRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0c1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnRlcnNlY3RzLTNkXCI7XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjMsIFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlY3RvclNxdWFyZUludGVyc2VjdDNkKFxyXG4gICAgcjF4OiBudW1iZXIsXHJcbiAgICByMXk6IG51bWJlcixcclxuICAgIHIxejogbnVtYmVyLFxyXG4gICAgcjJ4OiBudW1iZXIsXHJcbiAgICByMnk6IG51bWJlcixcclxuICAgIHIyejogbnVtYmVyLFxyXG4gICAgczF4OiBudW1iZXIsXHJcbiAgICBzMXk6IG51bWJlcixcclxuICAgIHMxejogbnVtYmVyLFxyXG4gICAgczJ4OiBudW1iZXIsXHJcbiAgICBzMnk6IG51bWJlcixcclxuICAgIHMyejogbnVtYmVyLFxyXG4gICAgczN4OiBudW1iZXIsXHJcbiAgICBzM3k6IG51bWJlcixcclxuICAgIHMzejogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2ZWN0b3JTcXVhcmVJbnRlcnNlY3QzZF8yKFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHIxeCwgcjF5LCByMXopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHIyeCwgcjJ5LCByMnopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHMxeCwgczF5LCBzMXopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHMyeCwgczJ5LCBzMnopLFxyXG4gICAgICAgIG5ldyBWZWN0b3IzKHMzeCwgczN5LCBzM3opLFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlY3RvclNxdWFyZUludGVyc2VjdDNkXzIoXHJcbiAgICBSMTogU2ltcGxlVmVjdG9yMyxcclxuICAgIFIyOiBTaW1wbGVWZWN0b3IzLFxyXG4gICAgUzE6IFNpbXBsZVZlY3RvcjMsXHJcbiAgICBTMjogU2ltcGxlVmVjdG9yMyxcclxuICAgIFMzOiBTaW1wbGVWZWN0b3IzLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRTMjEgPSBWZWN0b3IzLnN1YihTMiwgUzEpO1xyXG4gICAgY29uc3QgZFMzMSA9IFZlY3RvcjMuc3ViKFMzLCBTMSk7XHJcbiAgICBjb25zdCBkUiAgID0gVmVjdG9yMy5zdWIoUjEsIFIyKTtcclxuICAgIGNvbnN0IG4gICAgPSBkUzIxLmNyb3NzKGRTMzEpO1xyXG5cclxuICAgIGNvbnN0IG5kb3RkUiA9IG4uZG90KGRSKTtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnMobmRvdGRSKSA8IDFlLTYpIHsgLy8gQ2hvb3NlIHlvdXIgdG9sZXJhbmNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHQgPSAtbi5kb3QoVmVjdG9yMy5zdWIoUjEsIFMxKSkgLyBuZG90ZFI7XHJcbiAgICBjb25zdCBNID0gVmVjdG9yMy5hZGQoUjEsIGRSLm11bCh0KSk7XHJcblxyXG4gICAgY29uc3QgZE1TMSA9IE0uc3ViKFMxKTtcclxuICAgIGNvbnN0IHUgICAgPSBkTVMxLmRvdChkUzIxKTtcclxuICAgIGNvbnN0IHYgICAgPSBkTVMxLmRvdChkUzMxKTtcclxuXHJcbiAgICByZXR1cm4gKHUgPj0gMCAmJiB1IDw9IGRTMjEuZG90KGRTMjEpICYmIHYgPj0gMCAmJiB2IDw9IGRTMzEuZG90KGRTMzEpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IyIH0gZnJvbSBcImd0b29scy9tYXRoXCI7XHJcbmltcG9ydCB7IE1pbk1heCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY29udmVydFBvc1NpemVUb01pbk1heCB9IGZyb20gXCIuLi9vYmplY3QtY29udmVydG9yc1wiO1xyXG5pbXBvcnQgeyBTcGhlcmUgfSBmcm9tIFwiLi9zcGhlcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcG9zaXRpb246IFNpbXBsZVZlY3RvcjIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHNpemU6IFNpbXBsZVZlY3RvcjIsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFyZWEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNpcmN1aXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLnggKyB0aGlzLnNpemUueCArIHRoaXMuc2l6ZS55ICsgdGhpcy5zaXplLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvTWluTWF4KCk6IE1pbk1heCB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRQb3NTaXplVG9NaW5NYXgodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tU3BoZXJlKHtyYWRpdXMsIGNlbnRlcn06IFBpY2s8U3BoZXJlLCBcInJhZGl1c1wiIHwgXCJjZW50ZXJcIj4pOiBSZWN0IHtcclxuICAgICAgICByZXR1cm4gUmVjdC5mcm9tTWluTWF4KHtcclxuICAgICAgICAgICAgbWluOiB7XHJcbiAgICAgICAgICAgICAgICB4OiBjZW50ZXIueCAtIHJhZGl1cyxcclxuICAgICAgICAgICAgICAgIHk6IGNlbnRlci55IC0gcmFkaXVzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXg6IHtcclxuICAgICAgICAgICAgICAgIHg6IGNlbnRlci54ICsgcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgeTogY2VudGVyLnkgKyByYWRpdXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tTWluTWF4KHttaW4sIG1heH06IE1pbk1heCk6IFJlY3Qge1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgICAgICAgIHg6IG1heC54IC0gbWluLngsXHJcbiAgICAgICAgICAgIHk6IG1heC55IC0gbWluLnksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KE9iamVjdC5hc3NpZ24oe30sIG1pbiksIHNpemUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiZ3Rvb2xzL21hdGhcIjtcclxuaW1wb3J0IHsgTWluTWF4LCBQb3NTaXplIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UG9zU2l6ZVRvTWluTWF4IH0gZnJvbSBcIi4uL29iamVjdC1jb252ZXJ0b3JzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3BoZXJlIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNlbnRlcjogU2ltcGxlVmVjdG9yMixcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2lyY3VpdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAqIHRoaXMucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXJlYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLlBJICogdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21NaW5NYXgoe21pbiwgbWF4fTogTWluTWF4LCBjaG9vc2VTaXplOiBcIm1pblwiIHwgXCJtYXhcIiA9IFwibWF4XCIpOiBTcGhlcmUge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHtcclxuICAgICAgICAgICAgeDogKG1pbi54ICsgbWF4LngpIC8gMixcclxuICAgICAgICAgICAgeTogKG1pbi55ICsgbWF4LnkpIC8gMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzaXplWCA9IG1heC54IC0gbWluLng7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVkgPSBtYXgueSAtIG1pbi55O1xyXG5cclxuICAgICAgICBjb25zdCByYWRpdXMgPSBjaG9vc2VTaXplID09PSBcIm1pblwiID8gTWF0aC5taW4oc2l6ZVgsIHNpemVZKSA6IE1hdGgubWF4KHNpemVYLCBzaXplWSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgU3BoZXJlKHJhZGl1cywgY2VudGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21Qb3NTaXplKHBvc1NpemU6IFBvc1NpemUsIGNob29zZVNpemU6IFwibWluXCIgfCBcIm1heFwiID0gXCJtYXhcIik6IFNwaGVyZSB7XHJcbiAgICAgICAgcmV0dXJuIFNwaGVyZS5mcm9tTWluTWF4KGNvbnZlcnRQb3NTaXplVG9NaW5NYXgocG9zU2l6ZSksIGNob29zZVNpemUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuLzJkL3JlY3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vMmQvc3BoZXJlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1jb252ZXJ0b3JzXCI7XHJcbiIsImltcG9ydCB7IE1pbk1heCwgUG9zU2l6ZSB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TWluTWF4VG9Qb3NTaXplKHttaW4sIG1heH06IE1pbk1heCk6IFBvc1NpemUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiBtaW4ueCxcclxuICAgICAgICAgICAgeTogbWluLnksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHg6IG1heC54IC0gbWluLngsXHJcbiAgICAgICAgICAgIHk6IG1heC55IC0gbWluLnksXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRQb3NTaXplVG9NaW5NYXgoe3Bvc2l0aW9uLCBzaXplfTogUG9zU2l6ZSk6IE1pbk1heCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjoge1xyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4OiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLnggKyBzaXplLngsXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnkgKyBzaXplLnksXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RGaXh0dXJlIH0gZnJvbSBcIi4vYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1hcHBlciB9IGZyb20gXCIuL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGF0YWJhc2VGaXh0dXJlPE9iaiwgT2JqRHRvPiBleHRlbmRzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBsaXN0RHRvOiBPYmpEdG9bXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWxEdG86IE9iakR0bztcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobGlzdDogT2JqW10sIG1hcHBlcjogQWJzdHJhY3RNYXBwZXI8T2JqLCBPYmpEdG8+KSB7XHJcbiAgICAgICAgc3VwZXIobGlzdCk7XHJcbiAgICAgICAgdGhpcy5saXN0RHRvICAgPSBsaXN0Lm1hcChtYXBwZXIubWFwVG9EdG8sIG1hcHBlcik7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxEdG8gPSB0aGlzLmxpc3REdG9bMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWw6IE9iajtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxpc3Q6IE9ialtdKSB7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBsaXN0WzBdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4ge1xyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcFRvRHRvKG9iamVjdDogUGFydGlhbDxPYmo+KTogT2JqRHRvO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBtYXBGcm9tRHRvKG9iamVjdDogUGFydGlhbDxPYmpEdG8+KTogT2JqO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQYWdpbmF0ZU1vZGVsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVRFTVNfUEVSX1BBR0UgPSAxMDtcclxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudCA9IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UsIG9mZnNldCA9IDApIHtcclxuICAgICAgICB0aGlzLmxpbWl0ICA9ICtjb3VudDtcclxuICAgICAgICB0aGlzLm9mZnNldCA9ICtvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShwYWdpbmF0ZT86IFBhZ2luYXRlTW9kZWwpOiBQYWdpbmF0ZU1vZGVsIHtcclxuICAgICAgICBpZiAoIXBhZ2luYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnaW5hdGVNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKFxyXG4gICAgICAgICAgICBpc05hTihwYWdpbmF0ZS5saW1pdCkgPyBQYWdpbmF0ZU1vZGVsLklURU1TX1BFUl9QQUdFIDogcGFnaW5hdGUubGltaXQsXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLm9mZnNldCkgPyAwIDogcGFnaW5hdGUub2Zmc2V0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy9taW4tbWF4LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzL3h5d2hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy94eXp3aGRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy9wb3Mtc2l6ZVwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vaG9yaXpvbnRhbC1hbGlnbi50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmVzdGVkLXN0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb3B0aW9uYWwudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmF5MlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXkzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JvdW5kLWRhdGEudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaXplLmludGVyYWZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dC1vcHRpb25zLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91bml0LW51bWJlci50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlcnRpY2FsLWFsaWduLnR5cGVcIjtcclxuIiwiLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgSW50ZXJuZXQgZXhwbG9yZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lFKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBhcHAgaXMgcnVubmluZyBpbnNpZGUgSW50ZXJuZXQgZXhwbG9yZXIgNlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSUU2KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNlwiKSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBJbnRlcm5ldCBleHBsb3JlciAxMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSUUxMSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIEVkZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VkZ2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvLyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIFNhZmFyeVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSA+PSAwICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lL1wiKSA8IDAgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlL1wiKSA8IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgaW5zaWRlIElPU1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSU9TKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIGluc2lkZSBDaHJvbWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Nocm9tZUFwcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAod2luZG93IGFzIGFueSk/LmNocm9tZT8uYXBwPy5ydW50aW1lO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIG9uTWVzc2FnZSBXaW5kb3dzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNXaW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIldpblwiKSA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgYXBwIGlzIHJ1bm5pbmcgb25NZXNzYWdlIE1hYyBPU1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFjKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNYWNcIikgPiAwO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIGFwcCBpcyBydW5uaW5nIENocm9tZSBPU1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lT3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gL1xcYkNyT1NcXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgZGV2aWNlIHN1cHBvcnQgdG91Y2ggZXZlbnRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNUb3VjaCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBkZXZpY2Ugc3VwcG9ydCBtb3VzZSBldmVudHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNNb3VzZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBcIm9ubW91c2Vtb3ZlXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc3QgYXJyYXkgPSBbe25hbWU6IFwiTWljaGFlbFwiLCBhZ2U6IDIzfSwge25hbWU6IFwiSm9hY2hpbVwiLCBhZ2U6IDE1fSwge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAqICBjb25zdCBjb25kaXRpb25zID0ge2FnZTogMjMsIG5hbWU6IFwiTW9uaWNhXCJ9XHJcbiAqICB3aGVyZShhcnJheSwgY29uZGl0aW9ucyk7IC8vIFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCAge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2hlcmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihhcnJheTogVFtdLCBjb25kaXRpb246IFBhcnRpYWw8VD4pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmRpdGlvbiB8fCB0eXBlb2YgY29uZGl0aW9uICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdICAgICAgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkVudHJpZXMgPSBPYmplY3QuZW50cmllcyhjb25kaXRpb24pO1xyXG5cclxuICAgIGFycmF5LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBjb25zdCBhZGQgPSBjb25kaXRpb25FbnRyaWVzLnNvbWUoKGNvbmRpdGlvbkVudHJ5KSA9PiBlW2NvbmRpdGlvbkVudHJ5WzBdIGFzIGtleW9mIFRdID09PSBjb25kaXRpb25FbnRyeVsxXSk7XHJcbiAgICAgICAgaWYgKGFkZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgYW5hbHl6ZUFycmF5Q2hhbmdlcyhbXCJhXCIsIFwiYlwiLCBcImNcIl0sIFtcImFcIiwgXCJiXCIsIFwiY1wiXSkgPT4gdHJ1ZVxyXG4gKiAgYW5hbHl6ZUFycmF5Q2hhbmdlcyhbe3Y6IFwiYVwifSwge3Y6IFwiYlwifSwge3Y6IFwiY1wifV0sIFt7djogXCJhXCJ9LCB7djogXCJiXCJ9LCB7djogXCJjXCJ9XSkgPT4gZmFsc2VcclxuICogIGFuYWx5emVBcnJheUNoYW5nZXMoW3t2OiBcImFcIn0sIHt2OiBcImJcIn0sIHt2OiBcImNcIn1dLCBbe3Y6IFwiYVwifSwge3Y6IFwiYlwifSwge3Y6IFwiY1wifV0sIGZ1bmN0aW9uKGEsIGIpe3JldHVybiBhLnYgPT09IGIudn0pID0+IHRydWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXJyYXlzPFQ+KFxyXG4gICAgcHJldjogVFtdLFxyXG4gICAgYWN0OiBUW10sXHJcbiAgICBjb21wYXJhdG9yOiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbiA9IChhLCBiKSA9PiBhID09PSBiLFxyXG4pOiBib29sZWFuIHtcclxuICAgIGlmIChwcmV2Lmxlbmd0aCAhPT0gYWN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWNvbXBhcmF0b3IocHJldltpXSwgYWN0W2ldKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQGV4YW1wbGVcclxuICogIGFuYWx5emVBcnJheUNoYW5nZXMoW1wiYVwiLCBcImJcIiwgXCJjXCJdLCBbXCJhXCIsIFwiYlwiLCBcImNcIl0pLnRvQWRkID09PiBbXVxyXG4gKiAgYW5hbHl6ZUFycmF5Q2hhbmdlcyhbXCJhXCIsIFwiYlwiLCBcImNcIl0sIFtcImFcIiwgXCJiXCIsIFwiY1wiXSkudG9SZW1vdmUgPT0+IFtdXHJcbiAqICBhbmFseXplQXJyYXlDaGFuZ2VzKFtcImFcIiwgXCJiXCIsIFwiY1wiXSwgW1wiYlwiLCBcImNcIiwgXCJkXCJdKS50b0FkZCA9PT4gW1wiZFwiXVxyXG4gKiAgYW5hbHl6ZUFycmF5Q2hhbmdlcyhbXCJhXCIsIFwiYlwiLCBcImNcIl0sIFtcImJcIiwgXCJjXCIsIFwiZFwiXSkudG9SZW1vdmUgPT0+IFtcImFcIl1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplQXJyYXlDaGFuZ2VzPFQ+KFxyXG4gICAgcHJldjogVFtdLFxyXG4gICAgYWN0OiBUW10sXHJcbiAgICBjb21wYXJhdG9yOiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbiA9IChhLCBiKSA9PiBhID09PSBiLFxyXG4pOiB7IHRvQWRkOiBUW10sIHRvUmVtb3ZlOiBUW10gfSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1ByZXZJbmRpY2VzOiB7IFtrZXk6IG51bWJlcl06IHRydWUgfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHRvUmVtb3ZlOiBUW10gPSBbXTtcclxuICAgIGNvbnN0IHRvQWRkOiBUW10gICAgPSBbXTtcclxuICAgIGFjdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gcHJldi5maW5kSW5kZXgoKGl0ZW0pID0+IGNvbXBhcmF0b3IoZSwgaXRlbSkpO1xyXG5cclxuICAgICAgICBpZiAocHJldkluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0b0FkZC5wdXNoKGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nUHJldkluZGljZXNbcHJldkluZGV4XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldi5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgaW4gZXhpc3RpbmdQcmV2SW5kaWNlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvUmVtb3ZlLnB1c2goZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge3RvQWRkLCB0b1JlbW92ZX07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gc3ViIGFycmF5IGZyb20gYXJyYXlcclxuICpcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc2xpY2V9IGluc3RlYWRcclxuICogQHBhcmFtIGFycmF5IC0gaW5wdXQgYXJyYXlcclxuICogQHBhcmFtIG1pbkluZGV4IC0gc3RhcnQgaW5kZXhcclxuICogQHBhcmFtIG1heEluZGV4IC0gZW5kIGluZGV4XHJcbiAqIEByZXR1cm5zIGZpbmFsIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3ViQXJyYXk8VCA9IGFueT4oYXJyYXk6IFRbXSwgbWluSW5kZXggPSAwLCBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDEpOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XHJcbiAgICBjb25zdCBmaW5hbCAgICAgICA9IGFycmF5Lmxlbmd0aCA8IG1heEluZGV4ID8gYXJyYXkubGVuZ3RoIC0gMSA6IG1heEluZGV4O1xyXG4gICAgZm9yIChsZXQgaSA9IG1pbkluZGV4OyBpIDw9IGZpbmFsOyBpKyspIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBhcnJheVtpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1heGltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWF4aW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWF4fSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF4KGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPiBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1pbmltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWluaW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWlufSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPCBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAqIEBleGFtcGxlXHJcbiAqICBzdW0oWzEsIDIsIDMsIDQsIDVdKSA9PiAxNVxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIHN1bW1hcnkgb2YgYWxsIG51bWJlcnMgaW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW0oYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJucyBhdmVyYWdlIG9mIG51bWVyaWMgYXJyYXkgZ2l2ZW4gYXMgaW5wdXRcclxuICogQGV4YW1wbGVcclxuICogIGF2ZyhbMSwgMiwgMywgNCwgNV0pID0+IDNcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBhdmVyYWdlIG9mIGFsbCBudW1iZXJzIGluIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXZnKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGFycmF5Lmxlbmd0aDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIGpvaW4gYXJyYXkgYnkgZGVsaW1pdGVyIGFuZCBhcHBlbmQgcHJlZml4IGFuZCBwb3N0Zml4XHJcbiAqIEBleGFtcGxlXHJcbiAqICBqb2luKFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIl0sIFwiXCIpID0+IGFiY2RcclxuICogIGpvaW4oW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiXSwgXCI9XCIpID0+IGE9Yj1jPWRcclxuICogIGpvaW4oW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiXSwgXCI9XCIsIFwiPj5cIiwgXCI8PFwiKSA9PiA+PmE9Yj1jPWQ8PFxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHBhcmFtIGRlbGltaXRlciAtIGNoYXJhY3RlciB1c2VkIGZvciBqb2luIGVsZW1lbnRzIGluIGFycmF5XHJcbiAqIEBwYXJhbSBwcmVmaXggLSBzdHJpbmcgYXBwZW5kIGF0IHRoZSBiZWdpbm5pbmcgb2YgZmluYWwgc3RyaW5nXHJcbiAqIEBwYXJhbSBwb3N0Zml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgZW5kIG9mIGZpbmFsIHN0cmluZ1xyXG4gKiBAcmV0dXJucyBmaW5hbCBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luPFQ+KGFycmF5OiBUW10sIGRlbGltaXRlcjogc3RyaW5nLCBwcmVmaXggPSBcIlwiLCBwb3N0Zml4ID0gXCJcIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIGFycmF5ICsgcG9zdGZpeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJlZml4ICsgYXJyYXkuam9pbihkZWxpbWl0ZXIpICsgcG9zdGZpeDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCByZXR1cm5zIGxhc3QgZWxlbWVudCBmcm9tIGFycmF5IG9yIG51bGwgaWYgYXJyYXkgaXMgZW1wdHkuIElmIGFyZ3VtZW50IGlzIG5vdCBhcnJheSwgbWV0aG9kIHJldHVybnMgYXJndW1lbnRcclxuICogQGV4YW1wbGVcclxuICogIGdldExhc3QoW10pID0+IHVuZGVmaW5lZFxyXG4gKiAgZ2V0TGFzdChbXCJhXCIsIFwiYlwiXSkgPT4gYlxyXG4gKiAgZ2V0TGFzdChbNSwgNl0pID0+IDZcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEByZXR1cm5zIGxhc3QgdmFsdWUgZnJvbSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3Q8VD4oYXJyYXk6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJucyByYW5kb20gZWxlbWVudCBmcm9tIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcmV0dXJucyByYW5kb20gdmFsdWUgZnJvbSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUl0ZW08VCA9IHVua25vd24+KGFycmF5OiBUW10pOiBUIHwgbnVsbCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5SYW5kb208VD4oYXJnczogVFtdLCBjb3VudDogbnVtYmVyKTogVFtdIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwIHx8IGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoIDw9IGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxUPigpO1xyXG5cclxuICAgIHdoaWxlIChyZXN1bHQuc2l6ZSA8PSBjb3VudCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUl0ZW0gPSBnZXRSYW5kb21JdGVtPFQ+KGFyZ3MpO1xyXG4gICAgICAgIGlmIChyYW5kb21JdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGQocmFuZG9tSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tPFQ+KHJlc3VsdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJuIGNvcHkgb2YgYXJyYXkgd2l0aCBvbmx5IGRpc3RpbmN0IGVsZW1lbnRzXHJcbiAqIEBleGFtcGxlXHJcbiAqICBtYWtlVW5pcXVlKFs1LCA1LCAzLCAyLCAxLCA0LCA1LCA0XSkgPT0+IFs1LCAzLCAyLCAxLCA0XVxyXG4gKiAgbWFrZVVuaXF1ZShbXCI1XCIsIFwiNVwiLCBcIjNcIiwgXCIyXCIsIFwiMVwiLCBcIjRcIiwgXCI1XCIsIFwiNFwiXSkgPT0+IFtcIjVcIiwgXCIzXCIsIFwiMlwiLCBcIjFcIiwgXCI0XCJdXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IHdpdGggZHVwbGljYXRlIGVsZW1lbnRzXHJcbiAqIEByZXR1cm5zIHVuaXF1ZSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVbmlxdWU8VD4oYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQ8VD4oYXJyYXkpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmUgMiBhcnJheSBlYWNoIG90aGVyXHJcbiAqIEBwYXJhbSBhcnJcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWFjaE90aGVyPFQ+KGFycjogVFtdLCBjYWxsYmFjazogKGE6IFQsIGI6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGFyci5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGUsIGFycltqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eTxUPih2YWx1ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIGAke3ZhbHVlfWAgIT09IFwiZmFsc2VcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL21hdGgtdXRpbHNcIjtcclxuXHJcbmNvbnN0IGNvbG9yczogeyBbY29sb3I6IHN0cmluZ106IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB9ID0ge1xyXG4gICAgYmxhY2s6IFswLCAwLCAwXSxcclxuICAgIHdoaXRlOiBbMjU1LCAyNTUsIDI1NV0sXHJcbiAgICByZWQgIDogWzI1NSwgMCwgMF0sXHJcbiAgICBncmVlbjogWzAsIDI1NSwgMF0sXHJcbiAgICBibHVlIDogWzAsIDAsIDI1NV0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycENvbG9yKFxyXG4gICAgZnJvbUNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcclxuICAgIHRvQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgcHJvZ3Jlc3M6IG51bWJlcixcclxuKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgcmVkICAgPSBwcm9ncmVzcyAqIGZyb21Db2xvclswXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclswXTtcclxuICAgIGNvbnN0IGdyZWVuID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMV0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMV07XHJcbiAgICBjb25zdCBibHVlICA9IHByb2dyZXNzICogZnJvbUNvbG9yWzJdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzJdO1xyXG4gICAgY29uc3QgYWxwaGEgPSBwcm9ncmVzcyAqIGZyb21Db2xvclszXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclszXTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGNsYW1wKHJlZCwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChncmVlbiwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChibHVlLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGFscGhhLCAwLCAyNTUpLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnBIZXhhQ29sb3IoYTogc3RyaW5nLCBiOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFoID0gK2EucmVwbGFjZShcIiNcIiwgXCIweFwiKTtcclxuICAgIGNvbnN0IGFyID0gYWggPj4gMTY7XHJcbiAgICBjb25zdCBhZyA9IGFoID4+IDggJiAweEZGO1xyXG4gICAgY29uc3QgYWIgPSBhaCAmIDB4RkY7XHJcbiAgICBjb25zdCBiaCA9ICtiLnJlcGxhY2UoXCIjXCIsIFwiMHhcIik7XHJcbiAgICBjb25zdCBiciA9IGJoID4+IDE2O1xyXG4gICAgY29uc3QgYmcgPSBiaCA+PiA4ICYgMHhGRjtcclxuICAgIGNvbnN0IGJiID0gYmggJiAweEZGO1xyXG4gICAgY29uc3QgcnIgPSBhciArIGFtb3VudCAqIChiciAtIGFyKTtcclxuICAgIGNvbnN0IHJnID0gYWcgKyBhbW91bnQgKiAoYmcgLSBhZyk7XHJcbiAgICBjb25zdCByYiA9IGFiICsgYW1vdW50ICogKGJiIC0gYWIpO1xyXG5cclxuICAgIHJldHVybiBcIiNcIiArICgoMSA8PCAyNCkgKyAocnIgPDwgMTYpICsgKHJnIDw8IDgpICsgcmIgfCAwKS50b1N0cmluZygxNikuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgycmdiKGNvbG9yOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMSksIDE2KTtcclxuXHJcbiAgICByZXR1cm4gW251bSA+PiAxNiwgbnVtID4+IDggJiAweDAwRkYsIG51bSAmIDB4MDAwMEZGXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRlQ29sb3IoY29sb3I6IHN0cmluZywgcGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IGhleDJyZ2IoY29sb3IpO1xyXG4gICAgY29uc3QgYW10ID0gTWF0aC5yb3VuZCgyLjU1ICogcGVyY2VudCk7XHJcbiAgICBjb25zdCBSICAgPSBudW1bMF0gKyBhbXQ7XHJcbiAgICBjb25zdCBHICAgPSBudW1bMV0gKyBhbXQ7XHJcbiAgICBjb25zdCBCICAgPSBudW1bMl0gKyBhbXQ7XHJcblxyXG4gICAgcmV0dXJuIHJnYjJoZXgoUiwgRywgQik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IyaGV4KFI6IG51bWJlciwgRzogbnVtYmVyLCBCOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiI1wiICsgKDB4MTAwMDAwMCArIChSIDwgMjU1ID8gUiA8IDEgPyAwIDogUiA6IDI1NSkgKiAweDEwMDAwICtcclxuICAgICAgICAoRyA8IDI1NSA/IEcgPCAxID8gMCA6IEcgOiAyNTUpICogMHgxMDAgK1xyXG4gICAgICAgIChCIDwgMjU1ID8gQiA8IDEgPyAwIDogQiA6IDI1NSkpLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludDJoZXgodmFsOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsdWUgID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFwiMDAwMDAwXCIuc3Vic3RyKDAsIDYgLSB2YWx1ZS5sZW5ndGgpICsgdmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIFwiI1wiICsgcmVzdWx0LnRvVXBwZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnQycmdiKHZhbDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgdmFsID4+IDE2LFxyXG4gICAgICAgIHZhbCA+PiA4ICYgMHhGRixcclxuICAgICAgICB2YWwgJiAweEZGLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJpbnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiMmludChSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSIDw8IDE2IHwgRyA8PCA4ICYgMHhGRkZGIHwgQjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3I6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBpZiAoY29sb3JzW2NvbG9yXSkge1xyXG4gICAgICAgIHJldHVybiBjb2xvcnNbY29sb3JdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhleGFNYXRjaCA9IGNvbG9yLm1hdGNoKC9eIyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvKTtcclxuICAgIGlmIChoZXhhTWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbMV0sIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzJdLCAxNiksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFszXSwgMTYpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmdiYU1hdGggPSBjb2xvci5tYXRjaCgvcmdiYT9cXCgoXFxkezEsM30pICosICooXFxkezEsM30pICosICooXFxkezEsM30pKCAqLCAqXFxkKi4/XFxkKilcXCkvKTtcclxuICAgIGlmIChyZ2JhTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzFdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzJdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzNdLCAxMCksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGFyc2UgY29sb3I6IFwiICsgY29sb3IpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZTxUIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4ob2JqOiBUKTogYm9vbGVhbiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogKE5vZGUgfCBzdHJpbmcpW10gfCBOb2RlIHwgc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvbkNsaWNrPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvbklucHV0PzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBzdHlsZXM/OiB7IFtzdHlsZSBpbiBrZXlvZiBDU1NTdHlsZURlY2xhcmF0aW9uXT86IENTU1N0eWxlRGVjbGFyYXRpb25bc3R5bGVdIH07XHJcbiAgICBjb250ZW50Pzogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbiAgICBmb3I/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGF1dG9wbGF5PzogYm9vbGVhbjtcclxuICAgIGhyZWY/OiBzdHJpbmc7XHJcbiAgICBkb3dubG9hZD86IHN0cmluZztcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50VG9TdHJpbmcoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmpvaW4oXCIuXCIpO1xyXG4gICAgY29uc3QgaWQgICAgICA9IGVsZW1lbnQuaWQgPyBcIiNcIiArIGVsZW1lbnQuaWQgOiBcIlwiO1xyXG4gICAgY29uc3QgcGFyZW50ICA9IGVsZW1lbnQucGFyZW50RWxlbWVudCA/IGVsZW1lbnRUb1N0cmluZyhlbGVtZW50LnBhcmVudEVsZW1lbnQpICsgXCIgPiBcIiA6IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudCArIGVsZW1lbnQubG9jYWxOYW1lICsgaWQgKyAoY2xhc3NlcyA/IFwiLlwiICsgY2xhc3NlcyA6IFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGhlYWRlclNlbGVjdG9yID0gXCIuaGVhZGVyXCIpOiB7IGNsZWFyOiAoKSA9PiB2b2lkIH0ge1xyXG4gICAgbGV0IHBvczEgPSAwO1xyXG4gICAgbGV0IHBvczIgPSAwO1xyXG4gICAgbGV0IHBvczMgPSAwO1xyXG4gICAgbGV0IHBvczQgPSAwO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnREcmFnID0gKGU6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9zMSAgICAgICAgICAgICAgID0gcG9zMyAtIGUuY2xpZW50WDtcclxuICAgICAgICBwb3MyICAgICAgICAgICAgICAgPSBwb3M0IC0gZS5jbGllbnRZO1xyXG4gICAgICAgIHBvczMgICAgICAgICAgICAgICA9IGUuY2xpZW50WDtcclxuICAgICAgICBwb3M0ICAgICAgICAgICAgICAgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgID0gZWxlbWVudC5vZmZzZXRUb3AgLSBwb3MyICsgXCJweFwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCAtIHBvczEgKyBcInB4XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRyYWdNb3VzZURvd24gPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3MzICAgICAgICAgICAgICAgICAgID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczQgICAgICAgICAgICAgICAgICAgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgICA9IGNsb3NlRHJhZ0VsZW1lbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IGVsZW1lbnREcmFnO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyU2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlRHJhZ0VsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgICA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUltYWdlKG9wdGlvbnM/OiBFbGVtZW50QXR0cmlidXRlcyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtcImltZ1wiXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBDcmVhdGVFbGVtZW50KFwiaW1nXCIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUykge1xyXG4gICAgICAgIHJlc3VsdC5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94KGxhYmVsOiBzdHJpbmcsIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCwgY2hlY2tlZCA9IGZhbHNlKTogSFRNTExhYmVsRWxlbWVudCB7XHJcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgIGNoZWNrZWQsXHJcbiAgICAgICAgdHlwZSAgICA6IFwiY2hlY2tib3hcIixcclxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gb25DaGFuZ2UoaW5wdXRFbGVtZW50LmNoZWNrZWQpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIENyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBcImNoZWNrYm94LWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGNoaWxkcmVuIDogW2xhYmVsLCBpbnB1dEVsZW1lbnQsIENyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiY2hlY2ttYXJrXCJ9KV0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4odHlwZTogSywgb3B0aW9ucz86IEVsZW1lbnRBdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ8Sz4odHlwZSk7XHJcbiAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlbnRyeVswXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xhc3NOYW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuY2xhc3NOYW1lID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9uQ2hhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9uQ2xpY2tcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2VkXCI6XHJcbiAgICAgICAgICAgICAgICAocmVzdWx0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3R5bGVzXCI6XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhlbnRyeVsxXSkuZm9yRWFjaCgoc3R5bGVFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdHlsZVtzdHlsZUVudHJ5WzBdIGFzIGFueV0gPSBzdHlsZUVudHJ5WzFdIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGlsZHJlblwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnlbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGVuZCguLi5lbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb250ZW50XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnlbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoZW50cnlbMF0sIGVudHJ5WzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogVE9ETzogZWxlbWVudCByZW1haW5zIGFmdGVyIGRlbGV0aW9uIG9uTWVzc2FnZSBzY3JlZW5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LXBhcmFtLWxhc3RcclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9yVXNpbmdEZWZhdWx0SW5wdXQoY29sb3IgPSBcIiMwMDAwMDBcIiwgb25JbnB1dD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgdHlwZSAgICAgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgdmFsdWUgICAgOiBjb2xvcixcclxuICAgICAgICAgICAgb25JbnB1dDogdHlwZW9mIG9uSW5wdXQgPT09IFwiZnVuY3Rpb25cIiA/ICgpID0+IG9uSW5wdXQoaW5wdXQudmFsdWUpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvbkNoYW5nZSA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JDcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4ocGFyZW50OiBIVE1MRWxlbWVudCwgdHlwZTogSywgLi4uY2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdPihgJHt0eXBlfS4ke2NsYXNzZXMuam9pbihcIi5cIil9YCk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQ3JlYXRlRWxlbWVudCh0eXBlLCB7Y2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oXCIgXCIpfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZUFuZEFwcGVuZDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBLLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBnZXRPckNyZWF0ZTxLPihwYXJlbnQsIHR5cGUsIC4uLmNsYXNzZXMpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgeyBDcmVhdGVFbGVtZW50LCBDcmVhdGVJbWFnZSB9IGZyb20gXCIuL2h0bWwtdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBDcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcclxuICAgICAgICB3aWR0aCA6IGltYWdlLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgICAoY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUltYWdlKGltYWdlOiBzdHJpbmcpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgIHJldHVybiBDcmVhdGVJbWFnZSh7XHJcbiAgICAgICAgc3JjOiBpbWFnZSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2UoY2FsbGJhY2s6IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQsIHdpZHRoOiBudW1iZXIsIGhlaWdodCA9IHdpZHRoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgY29uc3QgY2FudmFzID0gQ3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgICBjYWxsYmFjayhjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk7XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vYW5hbHl0aWNzLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FycmF5LXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvZXJjZS11dGlsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbG9yLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RhdGUtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaHRtbC11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbWFnZS11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2MtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGltZS11dGlsc1wiO1xyXG5cclxuLy8gVE9ETzogc2hvdWxkIGJlIGltcG9ydCBkaXJlY3RseSB0byBmaWxlXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL25ldC1jbGllbnQtdXRpbHNcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vbmV0LXNlcnZlci11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnB1dC11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vYmplY3QtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2VyLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2Nlc3MtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmVmbGVjdGlvbi11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYW5kb20tdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N2Zy11dGlsc1wiO1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIEtleXMgfSBmcm9tIFwiLi4vZW51bXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXR0b25Gcm9tRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpOiBCdXR0b24gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIGdldEJ1dHRvbkZyb21FdmVudEJ1dHRvbnMoZXZlbnQuYnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1dHRvbkZyb21FdmVudEJ1dHRvbnMoYnV0dG9uOiBNb3VzZUV2ZW50W1wiYnV0dG9uXCJdKTogQnV0dG9uIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChidXR0b24gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gQnV0dG9uLkxFRlQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYnV0dG9uID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIEJ1dHRvbi5NSURETEU7XHJcbiAgICB9XHJcbiAgICBpZiAoYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIEJ1dHRvbi5SSUdIVDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVFdmVudEtleShldmVudDogS2V5Ym9hcmRFdmVudCwga2V5OiBLZXlzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZXZlbnQuY29kZSA9PT0ga2V5O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJhbmRvbSBmcm9tIFwiLi9yYW5kb20tdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtOiBudW1iZXIsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzID0gXCIwMDAwMDAwMDAwMDAwMFwiICsgbnVtO1xyXG5cclxuICAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aCAtIHNpemUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0RlY2ltYWxzKG51bTogbnVtYmVyLCBkZWNpbWFscyA9IDIsIHR5cGU6IFwiZmxvb3JcIiB8IFwiY2VpbFwiIHwgXCJyb3VuZFwiID0gXCJyb3VuZFwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGRpdmlkZXIgPSBwYXJzZUludCgxICsgbmV3IEFycmF5KGRlY2ltYWxzICsgMSkuam9pbihcIjBcIiksIDEwKTtcclxuXHJcbiAgICByZXR1cm4gKE1hdGhbdHlwZV0obnVtICogZGl2aWRlcikgLyBkaXZpZGVyKS50b0ZpeGVkKGRlY2ltYWxzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2gyTnVtYmVycyh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB4RmluYWwgPSB4ID49IDAgPyB4ICogMiA6IC14ICogMiAtIDE7XHJcbiAgICBjb25zdCB5RmluYWwgPSB5ID49IDAgPyB5ICogMiA6IC15ICogMiAtIDE7XHJcblxyXG4gICAgcmV0dXJuICh4RmluYWwgKyB5RmluYWwpICogKHhGaW5hbCArIHlGaW5hbCArIDEpIC8gMiArIHlGaW5hbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5vbWlhbENvZWZmaWNpZW50KG46IG51bWJlciwgazogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCByID0gMTtcclxuICAgIGlmIChrID4gbikge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgZCA9IDE7IGQgPD0gazsgZCsrKSB7XHJcbiAgICAgICAgciAqPSBuO1xyXG4gICAgICAgIG4tLTtcclxuICAgICAgICByIC89IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB2YWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYiAqIHZhbCArICgxIC0gdmFsKSAqIGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2cyaSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCByID0gMDtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgd2hpbGUgKCh2YWx1ZSA+Pj0gMSkgPiAwKSB7XHJcbiAgICAgICAgcisrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGFtcChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNsYW1wKChtYXggLSBtaW4pICogc2NhbGUgKyBtaW4sIG1pbiwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcmFuZG9tSW50QmV0d2Vlbn0gaW5zdGVhZDtcclxuICpcclxuICogQHBhcmFtIG1pbiAtIG1pbiB2YWx1ZVxyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUmFuZG9tLnJhbmRvbUludEJldHdlZW4obWluLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByYW5kb21GbG9hdEJldHdlZW59IGluc3RlYWQ7XHJcbiAqXHJcbiAqIEBwYXJhbSBtaW4gLSBtaW4gdmFsdWVcclxuICogQHBhcmFtIG1heCAtIG1heCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFJhbmRvbS5yYW5kb21GbG9hdEJldHdlZW4obWluLCBtYXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXZlcmFnZShhcmdzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1bSAvIGFyZ3MubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHZhbHVlICYgdmFsdWUgLSAxKSA9PT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpZmYobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKG51bTEgLSBudW0yKTtcclxufVxyXG5cclxuY29uc3QgcmF0aW8gPSAxODAgLyBNYXRoLlBJO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlcyhyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiByYXRpbztcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG4vKipcclxuICogTWV0aG9kIHBhcnNlIGNvb2tpZXNcclxuICogQHBhcmFtIGNvb2tpZXMgLSBjb29rZSB0byBwYXJzZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llcyhjb29raWVzOiBzdHJpbmcpOiBTdHJpbmdNYXAge1xyXG4gICAgY29uc3QgbGlzdDogU3RyaW5nTWFwID0ge307XHJcbiAgICBjb25zdCBkYXRhICAgICAgICAgICAgPSBjb29raWVzID8gY29va2llcy50b1N0cmluZygpXHJcbiAgICAgICAgLnNwbGl0KFwiO1wiKSA6IFtdO1xyXG4gICAgZGF0YS5mb3JFYWNoKChjb29raWUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJ0cyAgICAgPSBjb29raWUuc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0UGFydCA9IHBhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKHNoaWZ0UGFydCkge1xyXG4gICAgICAgICAgICBsaXN0W3NoaWZ0UGFydC50cmltKCldID0gZGVjb2RlVVJJKHBhcnRzLmpvaW4oXCI9XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBvYmplY3QgaXMgaW4gYXJyYXlcclxuICogQGV4YW1wbGVcclxuICogIGlzSW4oXCJhXCIsIFwiYlwiLCBcImRcIiwgXCJhXCIpID0+IHRydWVcclxuICogIGlzSW4oXCJhXCIsIFtcImJcIiwgXCJkXCIsIFwiYVwiXSkgPT4gdHJ1ZVxyXG4gKiAgaXNJbihcImNcIiwgXCJiXCIsIFwiZFwiLCBcImFcIikgPT4gZmFsc2VcclxuICogIGlzSW4oXCJjXCIsIFtcImJcIiwgXCJkXCIsIFwiYVwiXSkgPT4gZmFsc2VcclxuICogIGlzSW4oXCJjXCIpID0+IGZhbHNlXHJcbiAqICBpc0luKFwiY1wiLCBbXSkgPT4gZmFsc2VcclxuICogQHBhcmFtIG9iaiAtIHNlYXJjaGVkIG9iamVjdFxyXG4gKiBAcGFyYW0gZGF0YSAtIGFycmF5IG9mIG9iamVjdHMgdG8gYmUgY29tcGFyZSB3aXRoIHNlYXJjaGVkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW48VD4ob2JqOiBULCAuLi5kYXRhOiB1bmtub3duW10pOiBib29sZWFuIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFbMF0pKSB7XHJcbiAgICAgICAgaWYgKGRhdGFbMF0uaW5kZXhPZihvYmopID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXRhLmluZGV4T2Yob2JqKSA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHBhcnNlIEpTT04gY29udGVudCB3aXRoIGNvbW1lbnRzXHJcbiAqIEBwYXJhbSBjb250ZW50IC0gc3RyaW5naWZ5IEpTT05cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUpTT05XaXRoQ29tbWVudHM8VD4oY29udGVudDogc3RyaW5nKTogVCB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50LnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csIFwiXCIpKTtcclxufVxyXG5cclxuLy8gVE9ETzogc2hvdWxkIGFwcGVuZCBjb29raWVzIG9yIGFkZCBvcHRpb24gdG8gYXBwZW5kaW5nIGluc3RlYWQgb2YgcmVwbGFjZSBjb29raWVzXHJcbi8vIFRPRE86IGV4cGlyZXMgbXVzdCBiZSBvbmx5IGluIHRoZSBlbmQgb2YgY29va2llc1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sIGRheXM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGNvbnN0IGZpbmFsQ29va2llcyA9IGAke25hbWV9PSR7dmFsdWV9O2V4cGlyZXM9JHtkLnRvVVRDU3RyaW5nKCl9YDtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBmaW5hbENvb2tpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9PSR7dmFsdWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjbmFtZTogc3RyaW5nLCBzb3VyY2UgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jb29raWUgOiBcIlwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgY29uc3QgY2EgICA9IHNvdXJjZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKGxldCBjIG9mIGNhKSB7XHJcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikgdHlwZW9mIG9iamVjdFxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5uYW1lID0+IEdhYnJpZWxcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuYWdlID0+IFwiMjNcIlxyXG4gKiAgcGFyc2VQYXJhbXM8YW55PihcIm5hbWU9R2FicmllbCZhZ2U9MjMmZW1haWw9Z2Nzb2xsZWkmZW1haWw9Z2FicmllbGNzb2xsZWkmZW1haWw9dGVzdFwiKS5lbWFpbCB0eXBlb2YgYXJyYXlcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuZW1haWxbMF0gPT4gZ2Nzb2xsZWlcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuZW1haWxbMV0gPT4gZ2FicmllbGNzb2xsZWlcclxuICogIHBhcnNlUGFyYW1zPGFueT4oXCJuYW1lPUdhYnJpZWwmYWdlPTIzJmVtYWlsPWdjc29sbGVpJmVtYWlsPWdhYnJpZWxjc29sbGVpJmVtYWlsPXRlc3RcIikuZW1haWxbMl0gPT4gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1zPFQ+KHF1ZXJ5ICAgICA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSA6IFwiXCIsXHJcbiAgICBzZXBhcmF0b3IgPSBcIiZcIixcclxuICAgIGRlbGltaXRlciA9IFwiPVwiKTogVCB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZzogYW55ID0ge307XHJcbiAgICBjb25zdCB2YXJzOiBzdHJpbmdbXSAgID0gcXVlcnkuc3BsaXQoc2VwYXJhdG9yKTtcclxuICAgIGZvciAoY29uc3QgcGFpciBvZiB2YXJzKSB7XHJcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcGFpci5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBxdWVyeVN0cmluZ1trZXldID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0gPSBbcXVlcnlTdHJpbmdba2V5XSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XS5wdXNoKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcXVlcnlTdHJpbmcgYXMgVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBvYmplY3RUb1F1ZXJ5UGFyYW1zKHthOiBcImFhXCIsIGI6IFwiYmJcIn0pID0+ID9hPWFhJmI9YmJcclxuICogIG9iamVjdFRvUXVlcnlQYXJhbXMoe2E6IDIxLCBiOiAyMn0pID0+ID9hPTIxJmI9MjJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1F1ZXJ5UGFyYW1zKG9iajogU3RyaW5nTWFwPHVua25vd24+KTogc3RyaW5nIHtcclxuICAgIC8vIFRPRE86IGFkZCB1cmwgcHJlZml4XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGZvciAoY29uc3Qgb2JqS2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkob2JqS2V5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gYCR7cmVzdWx0Lmxlbmd0aCA+IDAgPyBcIiZcIiA6IFwiP1wifSR7b2JqS2V5fT0ke29ialtvYmpLZXldfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9ialtrZXldID0gb2JqW2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZTxUPihvYmo6IHN0cmluZyk6IFQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gSlNPTi5wYXJzZShvYmopO1xyXG4gICAgZm9yIChjb25zdCBpIGluIHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KGkpIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiByZXN1bHRbaV0gIT09IFwic3RyaW5nXCIgfHwgIShyZXN1bHRbaV0uaW5kZXhPZihcImZ1bmN0aW9uIChcIikgPT09IDAgfHxcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXS5tYXRjaCgvXlxcKFtfYS16QS1aMC05XSsoICosICpbX2EtekEtWjAtOV0rKSpcXCkgKj0+LykpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxyXG4gICAgICAgICAgICBldmFsKFwicmVzdWx0W2ldID0gXCIgKyByZXN1bHRbaV0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ldID0gZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uOiBhbnkgPSB7fTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5tYXBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25baXRlbS5hdHRyRF0gPSBpdGVtLm1hcEZ1bmN0aW9uKHNvdXJjZVtpdGVtLmF0dHJTXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IGl0ZW0ubWFwRnVuY3Rpb24oc291cmNlW2l0ZW0uYXR0clNdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJEXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgT2JqZWN0RW50cnkgfSBmcm9tIFwiZ3Rvb2xzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aG91dDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iajogVCwgaXRlbXM6IChrZXlvZiBUKVtdKTogT21pdDxULCBhbnk+IHtcclxuICAgIHJldHVybiBnZXRPYmplY3RFbnRyaWVzKG9iaikuZmlsdGVyKChlbnRyeSkgPT4gIWl0ZW1zLmluY2x1ZGVzKGVudHJ5LmtleSkpXHJcbiAgICAgICAgLnJlZHVjZSgocHJldiwgZW50cnkpID0+IHtcclxuICAgICAgICAgICAgcHJldltlbnRyeS5rZXldID0gZW50cnkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICB9LCB7fSBhcyBUKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbDxUPihvYmpBOiBULCBvYmpCOiBUKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIG9iakEgIT09IHR5cGVvZiBvYmpCKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb2JqQSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmICghb2JqQSB8fCAhb2JqQikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqQSA9PT0gb2JqQjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChvYmpBIGFzIGFueSk/LmNvbnN0cnVjdG9yPy5uYW1lICE9PSAob2JqQiBhcyBhbnkpPy5jb25zdHJ1Y3Rvcj8ubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqQSkgYXMgKGtleW9mIFQpW107XHJcblxyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMob2JqQikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChvYmpBW2tleV0sIG9iakJba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiAob2JqQSBhcyBhbnkpID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBvYmpCID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKCtvYmpBKSAmJiBpc05hTigrb2JqQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmpBID09PSBvYmpCO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHk8VD4oc291cmNlOiBUKTogVCB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW1hcC13aXRob3V0LXVzYWdlXHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubWFwKChlKSA9PiBkZWVwQ29weShlKSkgYXMgYW55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHNvdXJjZSBhcyBhbnkpPy5jb25zdHJ1Y3Rvcj8ubmFtZSAhPT0gXCJPYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBjYW5ub3QgY29weSBjbGFzcyBpbnN0YW5jZXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBQYXJ0aWFsPFQ+ID0ge307XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNvdXJjZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIChyZXN1bHQgYXMgYW55KVtrZXldID0gZGVlcENvcHkodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0IGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGNhbm5vdCBjb3B5IGZ1bmN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc291cmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0RW50cmllczxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iajogVCk6IE9iamVjdEVudHJ5PFQ+W10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBPYmplY3RFbnRyeTxUPltdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG9iaktleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShvYmpLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgIGtleSAgOiBvYmpLZXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBvYmpbb2JqS2V5XSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVzdGVkUHJvcGVydHkob2JqZWN0OiBhbnksIHByb3BlcnR5UGF0aDogc3RyaW5nLCBzZXBhcmF0b3IgPSBcIi5cIik6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUxpc3QgPSBwcm9wZXJ0eVBhdGguc3BsaXQoc2VwYXJhdG9yKTtcclxuXHJcbiAgICByZXR1cm4gcHJvcGVydHlMaXN0LnJlZHVjZSgoY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUsIHByb3BlcnR5TmFtZSkgPT4gY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUgPyBjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZVtwcm9wZXJ0eU5hbWVdIDogdW5kZWZpbmVkLCBvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmVzdGVkUHJvcGVydHk8VD4oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIGxldCBvYmogICAgICAgID0gaXRlbTtcclxuICAgIGNvbnN0IHNwbGl0S2V5ID0ga2V5LnNwbGl0KFwiLlwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRLZXkubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgb2JqID0gb2JqW3NwbGl0S2V5W2ldXTtcclxuICAgIH1cclxuICAgIG9ialtzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXV0gPSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdWdoU2l6ZU9mT2JqZWN0PFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBvYmplY3RMaXN0ICAgICAgID0gW107XHJcbiAgICBjb25zdCBzdGFjazogdW5rbm93bltdID0gW29iamVjdF07XHJcbiAgICBsZXQgYnl0ZXMgICAgICAgICAgICAgID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gNDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSB2YWx1ZS5sZW5ndGggPDwgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSA4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIG9iamVjdExpc3QuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG9iamVjdExpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJ5dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2l6ZTxUIGV4dGVuZHMgKFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5rbm93bltdKT4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBpIGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqZWN0OiBUKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaW5kZXgpICYmIHR5cGVvZiBvYmplY3RbaW5kZXhdID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gbGlzdCAtIGxpc3QgdG8gZmxhdFxyXG4gKiBAcGFyYW0gcHJvcGVydHlQYXRoIC0gcGF0aCB0byBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0gc2VwYXJhdG9yIC0gc2VwYXJhdG9yIGluIHByb3BlcnR5UGF0aFxyXG4gKiBAcGFyYW0gc2tpcFVuZGVmaW5lZCAtIHRydWUgaWYgdW5kZWZpbmVkIHNob3VsZCBiZSBza2lwcGVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBpdGVtcyA9IFtcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJHYWJyaWVsXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJFbGxhXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJHYWJyaWVsXCJcclxuICogICAgICAgIH1cclxuICogICAgfSxcclxuICogICAge1xyXG4gKiAgICAgICAgcGVyc29uOiB7XHJcbiAqICAgICAgICAgICAgbmFtZTogXCJKb2VcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9XHJcbiAqIF1cclxuICpcclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbi5uYW1lXCIpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkdhYnJpZWxcIiwgXCJKb2VcIl1cclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbl9uYW1lXCIsIFwiX1wiKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJHYWJyaWVsXCIsIFwiSm9lXCJdXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb24ubmFtZVwiLCBcIi5cIiwgdHJ1ZSk7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiSm9lXCJdXHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGbGF0KGxpc3Q6IGFueVtdLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIsIHNraXBVbmRlZmluZWQgPSBmYWxzZSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUxpc3QgPSBwcm9wZXJ0eVBhdGguaW5kZXhPZihzZXBhcmF0b3IpID49IDAgPyBwcm9wZXJ0eVBhdGguc3BsaXQoc2VwYXJhdG9yKSA6IFtwcm9wZXJ0eVBhdGhdO1xyXG5cclxuICAgIHJldHVybiBsaXN0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eUxpc3QucmVkdWNlKChwcm9wVmFsLCBwcm9wZXJ0eU5hbWUpID0+IHByb3BWYWwgPyBwcm9wVmFsW3Byb3BlcnR5TmFtZV0gOiB1bmRlZmluZWQsIGN1cnIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgJiYgc2tpcFVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY2MucHVzaCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQm9vbGVhblZhbHVlKGtleTogc3RyaW5nKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoa2V5Lm1hdGNoKC8oMXx0cnVlfHllc3xhbm98w6FubykvaSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChrZXkubWF0Y2goLygwfGZhbHNlfG5vfG5pZSkvaSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzRGF0YSB7XHJcbiAgICBtZW1vcnlVc2FnZTogTm9kZUpTLk1lbW9yeVVzYWdlO1xyXG4gICAgY3B1VXNhZ2U6IE5vZGVKUy5DcHVVc2FnZTtcclxuICAgIHVwVGltZTogbnVtYmVyO1xyXG4gICAgdmVyc2lvbjogc3RyaW5nO1xyXG4gICAgcGxhdGZvcm06IE5vZGVKUy5QbGF0Zm9ybTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVzdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2QoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEZXYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiB8fCAhcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVudmlyb25tZW50KHR5cGU6IFwidGVzdFwiIHwgXCJwcm9kdWN0aW9uXCIgfCBcImRldmVsb3BtZW50XCIpOiB2b2lkIHtcclxuICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID0gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NEYXRhKCk6IFByb2Nlc3NEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVtb3J5VXNhZ2U6IHByb2Nlc3MubWVtb3J5VXNhZ2UoKSxcclxuICAgICAgICBjcHVVc2FnZSAgIDogcHJvY2Vzcy5jcHVVc2FnZSgpLFxyXG4gICAgICAgIHVwVGltZSAgICAgOiBwcm9jZXNzLnVwdGltZSgpLFxyXG4gICAgICAgIHZlcnNpb24gICAgOiBwcm9jZXNzLnZlcnNpb24sXHJcbiAgICAgICAgcGxhdGZvcm0gICA6IHByb2Nlc3MucGxhdGZvcm0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdEVudmlyb25tZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKCFwcm9jZXNzLmVudi5OT0RFX0VOVikge1xyXG4gICAgICAgIHNldEVudmlyb25tZW50KFwiZGV2ZWxvcG1lbnRcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0QmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludEJldHdlZW4obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbUZsb2F0QmV0d2VlbihtaW4sIG1heCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQm9vbGVhbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSXRlbTxUPiguLi5pdGVtczogVFtdKTogVCB7XHJcbiAgICByZXR1cm4gaXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKV07XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZSBjbGFzcyBieSBuYW1lIGFuZCBsaXN0IG9mIHBhcmFtZXRlcnNcclxuICpcclxuICogQHBhcmFtIG5hbWUgLSBjbGFzcyBuYW1lXHJcbiAqIEBwYXJhbSBhcmdzIC0gY29uc3RydWN0b3IgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIGNyZWF0ZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xhc3MobmFtZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCB0ZW1wID0gT2JqZWN0LmNyZWF0ZShuYW1lLnByb3RvdHlwZSk7XHJcbiAgICBuYW1lLmFwcGx5KHRlbXAsIGFyZ3MpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbEZpcnN0RnVuY3Rpb24oLi4uZnVuY3Rpb25zOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgZnVuY3Rpb25zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVE9ETzogVGhpcyBpcyBkZXByZWNhdGVkLiBNb3ZlIHRoaXMgdG8gdmFsaWRhdG9yc1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIE1pc2NWYWxpZGF0b3JzIGZyb20gXCIuLi92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9yc1wiO1xyXG5cclxuY29uc3QgdGltZUZvcm1hdHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBISCAgOiBcIigyWzAtM118WzAxXVxcXFxkKVwiLFxyXG4gICAgSCAgIDogXCIoMlswLTNdfFswMV0/XFxcXGQpXCIsXHJcbiAgICBtbSAgOiBcIihbMC01XVxcXFxkKVwiLFxyXG4gICAgbSAgIDogXCIoWzAtNV0/XFxcXGQpXCIsXHJcbiAgICBNTSAgOiBcIigwXFxcXGR8MVswLTJdfFxcXFxkKVwiLFxyXG4gICAgTSAgIDogXCIoWzEtOV18MVswLTJdKVwiLFxyXG4gICAgc3MgIDogXCIoWzAtNV1cXFxcZClcIiwgLy8gbW1cclxuICAgIHMgICA6IFwiKFswLTVdP1xcXFxkKVwiLCAvLyBzc1xyXG4gICAgWVlZWTogXCIoWzEtOV1cXFxcZHszLDN9KVwiLFxyXG4gICAgWVkgIDogXCIoXFxcXGR7MiwyfSlcIixcclxuICAgIEREICA6IFwiKFswLTNdXFxcXGQpXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXT9bYS16XSsoW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlthLXpdKyhbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bYS16XSooX1thLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXSooX1tBLVpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFthLXpdKnxbQS1aXSopKF9bYS16QS1aXSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVGb3JtYXQodGV4dDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZUZvcm1hdHMpIHtcclxuICAgICAgICBpZiAodGltZUZvcm1hdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShrZXksIHRpbWVGb3JtYXRzW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7Zm9ybWF0fSRgKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkUGhvbmVOdW1iZXJ9IGluc3RlYWRcclxuICogQHBhcmFtIG51bSAtIG51bSB0byB2YWxpZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRQaG9uZU51bWJlcihudW06IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRQaG9uZU51bWJlcihudW0pO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkRW1haWx9IGluc3RlYWRcclxuICogQHBhcmFtIGVtYWlsIC0gZW1haWwgdG8gdmFsaWRhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRFbWFpbChlbWFpbCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RyaW5nTWFwIH0gZnJvbSBcImd0b29scy90eXBlc1wiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcIi4vYXJyYXktdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5nQ2hlY2tlcnMgZnJvbSBcIi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG5jb25zdCBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyA9IFwixIXDoMOhw6TDosOjw6XDpsSDxIfEjcSJxI/EmcOow6nDq8OqxJ3EpcOsw63Dr8OuxLXFgsS+xYTFiMOyw7PDtsWRw7TDtcOww7jFm8iZxZ/FocWdxaXIm8Wjxa3DucO6w7zFscO7w7HDv8O9w6fFvMW6xb5cIjtcclxuY29uc3Qgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICAgPSBcImFhYWFhYWFhYWNjY2RlZWVlZWdoaWlpaWpsbG5ub29vb29vb29zc3Nzc3R0dHV1dXV1dW55eWN6enpcIjtcclxuY29uc3QgYWNjZW50ZWRDaGFyYWN0ZXJzICAgICAgPSBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyArIGFjY2VudGVkTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcbmNvbnN0IG5vcm1hbENoYXJhY3RlcnMgICAgICAgID0gbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICsgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4vKiBUT0RPOlxyXG4gICAgc3RhdGljIHVuZGVyc2NvcmUod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGh1bWFuaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkYXNoZXJpemUod29yZCkge1xyXG4gICAgfVxyXG4gICAgLy9kYXNoQ2FzZSA9IGEtYi1jLWQtZVxyXG4gICAgLy9kb3RDYXNlIGEuYy5kLnYucy5kXHJcbiAgICAvL3Bhc2NhbENhc2UgPSBGb29CYXJCYXpcclxuICAgIC8vcGF0aENhc2UgPSBhL2IvYy9kXHJcbiAgICAvL3NuYWtlQ2FzZSA9IGFfYl9jX2RfXHJcbiAgICBzdGF0aWMgaXNVcHBlcih3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaXNMb3dlcih3b3JkKSB7XHJcbiAgICB9XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXdvcmQgfHwgIXdvcmQucmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3b3JkLnJlcGxhY2UoLy4vZywgKGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWNjZW50ZWRDaGFyYWN0ZXJzLmluZGV4T2YoZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gbm9ybWFsQ2hhcmFjdGVyc1tpbmRleF0gOiBlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY3V0VXNpbmcoXCJhYmNkZWZnaGlqXCIsIDEwKSA9PiBhYmNkZWZnaGlqXHJcbiAqICBjdXRVc2luZyhcImFiY2RlZmdoaWpcIiwgMTUpID0+IGFiY2RlZmdoaWpcclxuICogIGN1dFVzaW5nKFwiYWJjZGVmZ2hpalwiLCA5KSA9PiBhYmNkZWZnLi4uXHJcbiAqICBjdXRVc2luZyhcImFiY2RlZmdoaWpcIiwgOSwgXCIuLi5cIiwgZmFsc2UpID0+IGFiY2RlZmdoaS4uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGN1dFVzaW5nKHRleHQ6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIsIHN1ZmZpeCA9IFwiLi4uXCIsIGxlbmd0aEluY2x1ZGVTdWZmaXggPSB0cnVlKTogc3RyaW5nIHtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5zdWJzdHIoMCwgbWF4TGVuZ3RoIC0gKGxlbmd0aEluY2x1ZGVTdWZmaXggPyBzdWZmaXgubGVuZ3RoIC0gMSA6IDApKSArIHN1ZmZpeDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVXBwZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0NhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzVXBwZXJTbmFrZUNhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChpLCB1LCBlKSA9PiBlID8gXCJfXCIgKyBlIDogXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvXl8vLCBcIlwiKVxyXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Mb3dlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0xvd2VyU25ha2VDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAoaSwgdSwgZSkgPT4gZSA/IFwiX1wiICsgZSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTG93ZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0xvd2VyQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pKFtBLVpdKS9nLCBcIiQxJDJfJDNcIilcclxuICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLygtfF98IHxcXHMpKyguKT8vZywgKG1hdGgsIHNlcCwgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKGUpID0+IGUudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNVcHBlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b0NhcGl0YWwodG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY2FwaXRhbGl6ZShcImdhYm9cIikgPT4gR2Fib1xyXG4gKiAgY2FwaXRhbGl6ZShcIkdBQk9cIikgPT4gR2Fib1xyXG4gKiAgY2FwaXRhbGl6ZShcImdBQk9cIikgPT4gR2Fib1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXi4vLCAoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgY2FwaXRhbGl6ZX0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ2FwaXRhbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXi4vLCAoZSkgPT4gZS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RQYXJ0KHRleHQ6IHN0cmluZywgZGl2aWRlciA9IFwiIFwiKTogc3RyaW5nIHtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC5zcGxpdCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRUZXh0ID0gdGV4dC5zcGxpdChkaXZpZGVyKTtcclxuXHJcbiAgICByZXR1cm4gc3BsaXRUZXh0W3NwbGl0VGV4dC5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgb2NjdXJyZW5jZXN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGV4dC5tYXRjaChuZXcgUmVnRXhwKGtleSwgXCJnXCIpKSB8fCBbXSkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHRleHQgLSB0ZXh0IG5lZWQgdG8gYmUgcmVwZWF0XHJcbiAqIEBwYXJhbSBudW1iZXJPZlJlcGV0aXRpb25zIC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICogQGRlcHJlY2F0ZWQgLSB1c2Uge0BsaW5rIFN0cmluZyNyZXBlYXR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHRleHQ6IHN0cmluZywgbnVtYmVyT2ZSZXBldGl0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobnVtYmVyT2ZSZXBldGl0aW9ucyArIDEpLmpvaW4odGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3Jkcy5qb2luKFwifFwiKX0pYCwgXCJnXCIpLCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICB0ZW1wbGF0ZShcInt7bmFtZX19IGlzIHt7YWdlfX0geWVhcnMgb2xkXCIsIHtuYW1lOiBcIkdhYnJpZWxcIiwgYWdlOiAyM30pID0+IEdhYnJpZWwgaXMgMjMgeWVhcnMgb2xkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dDogc3RyaW5nLCB2YWx1ZXM6IFN0cmluZ01hcDx1bmtub3duPiwgc3RhcnQgPSBcInt7XCIsIGVuZCA9IFwifX1cIik6IHN0cmluZyB7XHJcbiAgICBjb25zdCB1cGRhdGVkU3RhcnQgPSBzdGFydC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG4gICAgY29uc3QgdXBkYXRlZEVuZCAgID0gZW5kLnJlcGxhY2UoL1stW1xcXSgpKlxcc10vZywgXCJcXFxcJCZcIikucmVwbGFjZSgvXFwkL2csIFwiXFxcXCRcIik7XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShcclxuICAgICAgICBuZXcgUmVnRXhwKGAke3VwZGF0ZWRTdGFydH0oLis/KSR7dXBkYXRlZEVuZH1gLCBcImdcIiksXHJcbiAgICAgICAgKG1hdGgsIGtleSkgPT4gU3RyaW5nKHZhbHVlc1trZXldKSxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eUxpbmVzKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9eXFxzKiQoPzpcXHJcXG4/fFxcbikvZ20sIFwiXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwiTkFNRVwiLCBcImdhYnJpZWxcIikgPT4gXCJteSBuYW1lIGlzIFwiXHJcbiAqICBiZXR3ZWVuKFwibXkgbmFtZSBpcyBnYWJyaWVsIGFuZCBJIGFtIDI2IHllYXJzIG9sZFwiLCBcIm5hbWVcIiwgXCJHQUJSSUVMXCIpID0+IFwiIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCJcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwibmFtZVwiLCBcImdhYnJpZWxcIikgPT4gXCIgaXMgXCJcclxuICogIGJldHdlZW4oXCJteSBuYW1lIGlzIGdhYnJpZWwgYW5kIEkgYW0gMjYgeWVhcnMgb2xkXCIsIFwibmFtZVwiLCBcImdhYnJpZWxcIiwgdHJ1ZSkgPT4gXCJpc1wiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmV0d2Vlbih0ZXh0OiBzdHJpbmcsIGtleTE6IHN0cmluZywga2V5Mjogc3RyaW5nLCB0cmltID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcHJvY2Vzc1Jlc3VsdCA9IChyZXN1bHQ6IHN0cmluZyk6IHN0cmluZyA9PiB0cmltID8gcmVzdWx0LnRyaW0oKSA6IHJlc3VsdDtcclxuXHJcbiAgICBjb25zdCBzdGFydFBvcyA9IHRleHQuaW5kZXhPZihrZXkxKTtcclxuICAgIGNvbnN0IGVuZFBvcyAgID0gdGV4dC5pbmRleE9mKGtleTIpO1xyXG4gICAgaWYgKHN0YXJ0UG9zIDwgMCAmJiBlbmRQb3MgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHRleHQuc3Vic3RyaW5nKDAsIGVuZFBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbmRQb3MgPCAwICYmIHN0YXJ0UG9zID49IDApIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh0ZXh0LnN1YnN0cmluZyhzdGFydFBvcyArIGtleTEubGVuZ3RoLCB0ZXh0Lmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHRleHQuc3Vic3RyaW5nKHN0YXJ0UG9zICsga2V5MS5sZW5ndGgsIGVuZFBvcykpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgb2Ygc3Vic3RyaW5nXHJcbiAqIEB2ZXJzaW9uIDAuMi40MCAtIG11Y2ggZmFzdGVyIHRoZW4gcHJldmlvdXMgcmVnZXggbWV0aG9kIHVzaW5nIGByZXR1cm4gKHRleHQubWF0Y2gobmV3IFJlZ0V4cChrZXksIFwiZ1wiKSkgfHwgW10pLmxlbmd0aDtgXHJcbiAqIEBleGFtcGxlXHJcbiAqICBvY2N1cnJlbmNlcyhcImZvb2Zvb2Zvb1wiLCBcImJhclwiKTsgPT4gMFxyXG4gKiAgb2NjdXJyZW5jZXMoXCJmb29mb29mb29cIiwgXCJmb29cIik7ID0+IDNcclxuICogIG9jY3VycmVuY2VzKFwiZm9vZm9vZm9vXCIsIFwiZm9vZm9vXCIpOyA9PiAxXHJcbiAqICBvY2N1cnJlbmNlcyhcImZvb2Zvb2Zvb1wiLCBcImZvb2Zvb1wiLCB0cnVlKTsgPT4gMlxyXG4gKiBAcGFyYW0gdGV4dCAtIHRleHRcclxuICogQHBhcmFtIGtleSAtIHNlYXJjaGVkIHN1YnN0cmluZ1xyXG4gKiBAcGFyYW0gb3ZlcmxhcHBpbmcgLSBhbGxvd3MgbWF0aCBvdmVybGFwcGluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9jY3VycmVuY2VzKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcsIG92ZXJsYXBwaW5nID0gZmFsc2UpOiBudW1iZXIge1xyXG4gICAgbGV0IGluZGV4ICAgPSB0ZXh0LmluZGV4T2Yoa2V5KTtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGNvbnN0IHN0ZXAgID0gb3ZlcmxhcHBpbmcgPyAxIDoga2V5Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIGluZGV4ID0gdGV4dC5pbmRleE9mKGtleSwgaW5kZXggKyBzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY291bnRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlV2hpdGVzcGFjZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW1xcc1xcdUZFRkZcXHhBMF17Mix9L2csIFwiIFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXFMvZywgKGNoYXIpID0+IHtcclxuICAgICAgICBjb25zdCBsb3dlckNhc2UgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsb3dlckNhc2UgPT09IGNoYXIgPyBjaGFyLnRvVXBwZXJDYXNlKCkgOiBsb3dlckNhc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqICBmb3JtYXRUaW1lKFwie30gaXMgYSBiaWcge31cIiwgW1wiR2Fib1wiLCBcImhlcm9cIl0pID0+IEdhYm8gaXMgYSBiaWcgaGVyb1xyXG4gKiAgZm9ybWF0VGltZShcIjw+IGlzIGEgYmlnIDw+XCIsIFtcIkdhYm9cIiwgXCJoZXJvXCJdLCBcIjw+XCIpID0+IEdhYm8gaXMgYSBiaWcgaGVyb1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh0ZXh0OiBzdHJpbmcsIHZhbHVlczogc3RyaW5nW10sIHBsYWNlSG9sZGVyID0gXCJ7fVwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICAgIGxldCBsYXN0SW5kZXg7XHJcbiAgICBsZXQgYWN0dWFsSW5kZXggICAgICAgID0gMDtcclxuICAgIGxldCBjb3VudGVyICAgICAgICAgICAgPSAwO1xyXG5cclxuICAgIHdoaWxlIChjb3VudGVyIDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxhc3RJbmRleCAgID0gYWN0dWFsSW5kZXg7XHJcbiAgICAgICAgYWN0dWFsSW5kZXggPSB0ZXh0LmluZGV4T2YocGxhY2VIb2xkZXIsIGFjdHVhbEluZGV4KTtcclxuICAgICAgICByZXN1bHQucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIGFjdHVhbEluZGV4KSk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWVzW2NvdW50ZXIrK10pO1xyXG4gICAgICAgIGFjdHVhbEluZGV4ICs9IHBsYWNlSG9sZGVyLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJlc3VsdC5wdXNoKHRleHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4KSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVG9CYXNpY0Zvcm1hdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbGxhcHNlV2hpdGVzcGFjZShyZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dCkudG9Mb3dlckNhc2UoKSkudHJpbSgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGV4YW1wbGVcclxuICogIGdldEFzY2lpQXJyYXkoXCJhYmNkZWZnXCIpID09PiBbOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzXVxyXG4gKiBAcGFyYW0gdGhpc0FyZyAtIGFyZ3VtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNjaWlBcnJheSh0aGlzQXJnOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIHRoaXNBcmcpIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsZXR0ZXIuY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9CYXNpY0Zvcm0odGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHRleHQ6IHN0cmluZywgc3Vic3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRleHQgJiYgcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihzdWJzdHJpbmcpID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgam9pblNpbmdsZShcInBhY2thZ2VcIiwgXCIuXCIsIFwianNvblwiKSA9PiBwYWNrYWdlLmpzb25cclxuICogIGpvaW5TaW5nbGUoXCJwYWNrYWdlLlwiLCBcIi5cIiwgXCJqc29uXCIpID0+IHBhY2thZ2UuanNvblxyXG4gKiAgam9pblNpbmdsZShcInBhY2thZ2VcIiwgXCIuXCIsIFwiLmpzb25cIikgPT4gcGFja2FnZS5qc29uXHJcbiAqICBqb2luU2luZ2xlKFwicGFja2FnZS5cIiwgXCIuXCIsIFwiLmpzb25cIikgPT4gcGFja2FnZS5qc29uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pblNpbmdsZShwcmVmaXg6IHN0cmluZywgZGl2aWRlcjogc3RyaW5nLCBwb3N0Zml4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHBvc3RmaXguc3RhcnRzV2l0aChkaXZpZGVyKSAmJiBwcmVmaXguZW5kc1dpdGgoZGl2aWRlcikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgcG9zdGZpeC5zdWJzdHJpbmcoZGl2aWRlci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwb3N0Zml4LnN0YXJ0c1dpdGgoZGl2aWRlcikgfHwgcHJlZml4LmVuZHNXaXRoKGRpdmlkZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGRpdmlkZXIgKyBwb3N0Zml4O1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBqb2lufSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBkYXRhIC0gZGF0YSB0byBqb2luXHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBkZWxpbWl0ZXJcclxuICogQHBhcmFtIHByZWZpeCAtIHByZWZpeFxyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHBvc3RmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luU3RyaW5nKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGpvaW4oZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bTogc3RyaW5nLCBwcmVmaXggPSBcIis0MjFcIik6IHN0cmluZyB7XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvWyggKS8tXS9nLCBcIlwiKTtcclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIitcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiMDBcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtLnN1YnN0cmluZygyKTtcclxuICAgIH1cclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIjA5XCIpIHx8IG51bS5zdGFydHNXaXRoKFwiMDJcIikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgbnVtLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdXp6eV9tYXRjaF9zaW1wbGUocGF0dGVybjogc3RyaW5nLCBzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHBhdHRlcm5JZHggICAgICA9IDA7XHJcbiAgICBsZXQgc3RySWR4ICAgICAgICAgID0gMDtcclxuICAgIGNvbnN0IHBhdHRlcm5MZW5ndGggPSBwYXR0ZXJuLmxlbmd0aDtcclxuICAgIGNvbnN0IHN0ckxlbmd0aCAgICAgPSBzdHIubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChwYXR0ZXJuSWR4ICE9PSBwYXR0ZXJuTGVuZ3RoICYmIHN0cklkeCAhPT0gc3RyTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybkNoYXIgPSBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuSWR4KVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBzdHJDaGFyICAgICA9IHN0ci5jaGFyQXQoc3RySWR4KVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocGF0dGVybkNoYXIgPT09IHN0ckNoYXIpIHtcclxuICAgICAgICAgICAgKytwYXR0ZXJuSWR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICArK3N0cklkeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0dGVybkxlbmd0aCAhPT0gMCAmJiBzdHJMZW5ndGggIT09IDAgJiYgcGF0dGVybklkeCA9PT0gcGF0dGVybkxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VGb3JBbGwoY29udGVudDogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCBwbGFjZUhvbGRlcjogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiBjb250ZW50LnJlcGxhY2UocGxhY2VIb2xkZXIsIHZhbHVlKSk7XHJcbn1cclxuIiwiY29uc3Qgc3ZnbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnPFQgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4odHlwZTogVCk6IFNWR0VsZW1lbnRUYWdOYW1lTWFwW1RdIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsIHR5cGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtKHNlbGVjdGVkRWxlbWVudDogU1ZHR3JhcGhpY3NFbGVtZW50KTogU1ZHVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybXMgPSBzZWxlY3RlZEVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XHJcbiAgICBpZiAodHJhbnNmb3Jtcy5udW1iZXJPZkl0ZW1zID09PSAwIHx8XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5nZXRJdGVtKDApLnR5cGUgIT09IFNWR1RyYW5zZm9ybS5TVkdfVFJBTlNGT1JNX1RSQU5TTEFURSkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IChzZWxlY3RlZEVsZW1lbnQub3duZXJTVkdFbGVtZW50IGFzIFNWR1NWR0VsZW1lbnQpLmNyZWF0ZVNWR1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIHRyYW5zbGF0ZS5zZXRUcmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsLmluc2VydEl0ZW1CZWZvcmUodHJhbnNsYXRlLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJhbnNmb3Jtcy5nZXRJdGVtKDApO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCJndG9vbHMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGludGVydmFsczogU3RyaW5nTWFwPG51bWJlcj4gPSB7XHJcbiAgICBcInllYXJcIiAgOiAzMTUzNjAwMCxcclxuICAgIFwibW9udGhcIiA6IDI1OTIwMDAsXHJcbiAgICBcIndlZWtcIiAgOiA2MDQ4MDAsXHJcbiAgICBcImRheVwiICAgOiA4NjQwMCxcclxuICAgIFwiaG91clwiICA6IDM2MDAsXHJcbiAgICBcIm1pbnV0ZVwiOiA2MCxcclxuICAgIFwic2Vjb25kXCI6IDEsXHJcbn07XHJcblxyXG5jb25zdCBpbnRlcnZhbEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhpbnRlcnZhbHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVBZ28odmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCgrbmV3IERhdGUoKSAtICtuZXcgRGF0ZSh2YWx1ZSkpIC8gMTAwMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAyOSkgeyAvLyBsZXNzIHRoYW4gMzAgc2Vjb25kcyBhZ28gd2lsbCBzaG93IGFzICdKdXN0IG5vdydcclxuICAgICAgICAgICAgcmV0dXJuIFwiSnVzdCBub3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnRlcnZhbF0gb2YgaW50ZXJ2YWxFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBNYXRoLmZsb29yKHNlY29uZHMgLyBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y291bnRlcn0gJHtrZXl9IGFnb2A7IC8vIHNpbmd1bGFyICgxIGRheSBhZ28pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVyfSAke2tleX1zIGFnb2A7IC8vIHBsdXJhbCAoMiBkYXlzIGFnbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlOiBEYXRlLCBwYXR0ZXJuOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAodGltZTogbnVtYmVyKTogc3RyaW5nID0+IHRpbWUgPCAxMCA/IFwiMFwiICsgdGltZSA6IFwiXCIgKyB0aW1lO1xyXG5cclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihERHxNTXxZWVlZfFlZWXxZWXxISHxtbXxTUylcIiwgXCJnXCIpO1xyXG4gICAgY29uc3QgREQgICAgPSB0b1N0cmluZyhkYXRlLmdldERhdGUoKSk7XHJcbiAgICBjb25zdCBNTSAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgY29uc3QgWVlZWSAgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIlwiO1xyXG4gICAgY29uc3QgWVlZICAgPSBZWVlZLnN1YnN0cigxLCA0KTtcclxuICAgIGNvbnN0IFlZICAgID0gWVlZLnN1YnN0cigxLCA0KTtcclxuICAgIGNvbnN0IEhIICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRIb3VycygpKTtcclxuICAgIGNvbnN0IG1tICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgY29uc3QgU1MgICAgPSB0b1N0cmluZyhkYXRlLmdldFNlY29uZHMoKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShyZWdleCwgKGUpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkREXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gREQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNTVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1NO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBISDtcclxuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW07XHJcbiAgICAgICAgICAgIGNhc2UgXCJTU1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNTO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3BXYXRjaCgpOiB7IGdldERpZmZNcygpOiBudW1iZXI7IGdldERpZmYoKTogc3RyaW5nIH0ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IGdldERpZmZNcyA9ICgpOiBudW1iZXIgPT4gRGF0ZS5ub3coKSAtIHN0YXJ0O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0RGlmZk1zLFxyXG4gICAgICAgIGdldERpZmYoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldERpZmZNcygpICsgXCJtc1wiO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIG9wdDogeyBtczogbnVtYmVyLCBzOiBudW1iZXIsIG06IG51bWJlciwgaDogbnVtYmVyIH0pOiBEYXRlIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzTmFOKG9wdC5tcykpIHtcclxuICAgICAgICBkYXRlLnNldE1pbGxpc2Vjb25kcyhvcHQubXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQucykpIHtcclxuICAgICAgICBkYXRlLnNldFNlY29uZHMob3B0LnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQubSkpIHtcclxuICAgICAgICBkYXRlLnNldE1pbnV0ZXMob3B0Lm0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQuaCkpIHtcclxuICAgICAgICBkYXRlLnNldEhvdXJzKG9wdC5oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0T2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge1xyXG4gICAgICAgIG1zOiAwLFxyXG4gICAgICAgIHMgOiAwLFxyXG4gICAgICAgIG0gOiAwLFxyXG4gICAgICAgIGggOiAwLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRPZlRoZURheShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gc2V0RGF0ZShkYXRlLCB7XHJcbiAgICAgICAgbXM6IDk5OSxcclxuICAgICAgICBzIDogNTksXHJcbiAgICAgICAgbSA6IDU5LFxyXG4gICAgICAgIGggOiAyMyxcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL21pc2MtdmFsaWRhdG9yc1wiO1xyXG4iLCJjb25zdCB2YWxpZEVtYWlsUmVnZXggICAgICAgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuY29uc3QgdmFsaWRQaG9uZU51bWJlclJlZ2V4ID0gL14oWytdfDAwKT9bKF0/WzAtOV17Myw0fVspXT9bLVxccy5dP1swLTldezIsM31bLVxccy5dP1swLTldezIsNn0oWy1cXHMuXT9bMC05XXszfSk/JC9pbTtcclxuXHJcbmZ1bmN0aW9uIHR5cGVPZihhcmc6IHVua25vd24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBhcmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGFyZzogYW55KTogYXJnIGlzIHN0cmluZyB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwic3RyaW5nXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm9iamVjdFwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoYXJnOiBhbnkpOiBhcmcgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbihhcmc6IGFueSk6IGFyZyBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJib29sZWFuXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGbG9hdChhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm51bWJlclwiICYmIGFyZyAlIDEgIT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChhcmc/OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJ1bmRlZmluZWRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KG9iaikgJiZcclxuICAgICAgICAgICAgb2JqLm5vZGVUeXBlID09PSAxICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5zdHlsZSkgJiZcclxuICAgICAgICAgICAgaXNPYmplY3Qob2JqLm93bmVyRG9jdW1lbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwIHx8IC9eW1xcc1xceGEwXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUGhvbmVOdW1iZXIobnVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghbnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZFBob25lTnVtYmVyUmVnZXgudGVzdChudW0udHJpbSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZEVtYWlsUmVnZXgudGVzdChlbWFpbC50cmltKCkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMzYwNyk7XG4iXSwic291cmNlUm9vdCI6IiJ9