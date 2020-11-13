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
/******/ 	var __webpack_modules__ = ({

/***/ 5839:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__exportStar(__webpack_require__(9787), exports);
__exportStar(__webpack_require__(5202), exports);
__exportStar(__webpack_require__(9126), exports);
__exportStar(__webpack_require__(5906), exports);
__exportStar(__webpack_require__(9572), exports);
__exportStar(__webpack_require__(5988), exports);
__exportStar(__webpack_require__(4620), exports);
__exportStar(__webpack_require__(4000), exports);
__exportStar(__webpack_require__(3670), exports);
__exportStar(__webpack_require__(6577), exports);
__exportStar(__webpack_require__(4574), exports);
__exportStar(__webpack_require__(5776), exports);
__exportStar(__webpack_require__(508), exports);
__exportStar(__webpack_require__(5667), exports);
__exportStar(__webpack_require__(8835), exports);
__exportStar(__webpack_require__(1130), exports);
__exportStar(__webpack_require__(1103), exports);
__exportStar(__webpack_require__(8114), exports);
__exportStar(__webpack_require__(4861), exports);


/***/ }),

/***/ 9126:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.initConfig = exports.Gender = void 0;
__exportStar(__webpack_require__(3547), exports);
var gender_model_1 = __webpack_require__(9878);
Object.defineProperty(exports, "Gender", ({ enumerable: true, get: function () { return gender_model_1.Gender; } }));
__exportStar(__webpack_require__(1903), exports);
__exportStar(__webpack_require__(6005), exports);
__exportStar(__webpack_require__(7826), exports);
__exportStar(__webpack_require__(8224), exports);
__exportStar(__webpack_require__(8917), exports);
__exportStar(__webpack_require__(4715), exports);
__exportStar(__webpack_require__(1628), exports);
__exportStar(__webpack_require__(5826), exports);
__exportStar(__webpack_require__(3388), exports);
var gtools_config_1 = __webpack_require__(5988);
Object.defineProperty(exports, "initConfig", ({ enumerable: true, get: function () { return gtools_config_1.initConfig; } }));
__exportStar(__webpack_require__(7953), exports);
__exportStar(__webpack_require__(6424), exports);
__exportStar(__webpack_require__(7191), exports);
__exportStar(__webpack_require__(8835), exports);
__exportStar(__webpack_require__(1130), exports);
__exportStar(__webpack_require__(1103), exports);
__exportStar(__webpack_require__(8114), exports);


/***/ }),

/***/ 1628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

/***/ 9638:
/***/ (function(__unused_webpack_module, exports) {

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLogger = exports.GLoggerInstance = void 0;
var GLoggerInstance = (function () {
    function GLoggerInstance(context) {
        this.context = context;
    }
    GLoggerInstance.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        GLogger.print.apply(GLogger, __spreadArrays(["log", this.context], messages));
    };
    GLoggerInstance.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        GLogger.print.apply(GLogger, __spreadArrays(["warn", this.context], messages));
    };
    GLoggerInstance.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        GLogger.print.apply(GLogger, __spreadArrays(["error", this.context], messages));
    };
    return GLoggerInstance;
}());
exports.GLoggerInstance = GLoggerInstance;
var GLogger = (function (_super) {
    __extends(GLogger, _super);
    function GLogger(context) {
        return _super.call(this, context) || this;
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
    GLogger.print = function (type, context) {
        var _a;
        if (context === void 0) { context = ""; }
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        var realContext = context && (typeof context === "string" ? context : (_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name);
        var result = realContext && realContext.match(GLogger.skipRegexp);
        if (result) {
            return;
        }
        var prefix = realContext ? "[" + realContext + "] " : "";
        console[type].apply(console, __spreadArrays([prefix], data));
    };
    GLogger.log = function (message, context) {
        GLogger.print("log", context, message);
    };
    GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    GLogger.skipRegexp = new RegExp("" + GLogger.skipContexts.join("|"), "gi");
    return GLogger;
}(GLoggerInstance));
exports.GLogger = GLogger;


/***/ }),

/***/ 2235:
/***/ (function(__unused_webpack_module, exports) {

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

"use strict";

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
__exportStar(__webpack_require__(1628), exports);
__exportStar(__webpack_require__(9638), exports);
__exportStar(__webpack_require__(2235), exports);
__exportStar(__webpack_require__(8917), exports);
__exportStar(__webpack_require__(4715), exports);
__exportStar(__webpack_require__(5826), exports);


/***/ }),

/***/ 8917:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
            if (this.data.hasOwnProperty(key)) {
                this.results.push({
                    key: key,
                    count: this.data[key],
                });
            }
        }
        this.results.sort(function (a, b) { return b.count - a.count; });
        this.processed = true;
    };
    return KeyValueCounter;
}());
exports.KeyValueCounter = KeyValueCounter;


/***/ }),

/***/ 4715:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5988:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS = void 0;
exports.ALLOW_IMAGES_ONLY_WITH_ALLOWED_CORS = true;


/***/ }),

/***/ 9318:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasManager = void 0;
var not_browser_exception_1 = __webpack_require__(2089);
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
                throw new not_browser_exception_1.NotBrowserException();
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
            throw new not_browser_exception_1.NotBrowserException();
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

"use strict";

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

/***/ 6577:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.Checkers = void 0;
var MiscValidators = __importStar(__webpack_require__(1025));
var Checkers = (function () {
    function Checkers() {
    }
    Checkers.isFunction = MiscValidators.isFunction;
    Checkers.isString = MiscValidators.isString;
    Checkers.isObject = MiscValidators.isObject;
    Checkers.isNumber = MiscValidators.isNumber;
    Checkers.isBoolean = MiscValidators.isBoolean;
    Checkers.isArray = MiscValidators.isArray;
    Checkers.isEmpty = MiscValidators.isEmpty;
    Checkers.isInt = MiscValidators.isInt;
    Checkers.isFloat = MiscValidators.isFloat;
    Checkers.isUndefined = MiscValidators.isUndefined;
    Checkers.isElement = MiscValidators.isElement;
    return Checkers;
}());
exports.Checkers = Checkers;


/***/ }),

/***/ 4574:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ 1903:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

/***/ 8224:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ 2089:
/***/ (function(__unused_webpack_module, exports) {

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

/***/ 8022:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

/***/ 3388:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ 4701:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
var color_utils_1 = __webpack_require__(7727);
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
            return color_utils_1.rgb2hex(Math.floor(this.red), Math.floor(this.green), Math.floor(this.blue));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "int", {
        get: function () {
            return color_utils_1.rgb2int(this.red, this.green, this.blue);
        },
        enumerable: false,
        configurable: true
    });
    Color.fromHex = function (color) {
        var value = color_utils_1.hex2rgb(color);
        return new (Color.bind.apply(Color, __spreadArrays([void 0], value)))();
    };
    Color.fromInt = function (color) {
        var value = color_utils_1.int2rgb(color);
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

"use strict";

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

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range = void 0;
var color_model_1 = __webpack_require__(8718);
var Range = (function () {
    function Range(min, max) {
        if (max === void 0) { max = min; }
        this.min = min;
        this.max = max;
    }
    Range.random = function (range) {
        return Math.random() * (range.max - range.min) + range.min;
    };
    Range.randomVector = function (range) {
        return {
            x: Math.random() * (range.max.x - range.min.x) + range.min.x,
            y: Math.random() * (range.max.y - range.min.y) + range.min.y,
        };
    };
    Range.randomColor = function (range, method) {
        if (method === void 0) { method = "rgba"; }
        var min = range.min.rgba;
        var max = range.max.rgba;
        return new color_model_1.Color(Math.random() * (max[0] - min[0]) + min[0], Math.random() * (max[1] - min[1]) + min[1], Math.random() * (max[2] - min[2]) + min[2], Math.random() * (max[3] - min[3]) + min[3]);
    };
    return Range;
}());
exports.Range = Range;


/***/ }),

/***/ 1317:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ 9787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__exportStar(__webpack_require__(4163), exports);
__exportStar(__webpack_require__(6689), exports);
__exportStar(__webpack_require__(1294), exports);
__exportStar(__webpack_require__(3451), exports);
__exportStar(__webpack_require__(9343), exports);
__exportStar(__webpack_require__(8519), exports);
__exportStar(__webpack_require__(7652), exports);
__exportStar(__webpack_require__(4115), exports);
__exportStar(__webpack_require__(6577), exports);
__exportStar(__webpack_require__(4000), exports);
__exportStar(__webpack_require__(4574), exports);


/***/ }),

/***/ 8835:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4861:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 1248:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6279:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9181:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9492:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4059:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2187:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4347:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2107:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7191:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6424:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 3896:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6937:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5632:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6170:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4912:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5088:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomUtils = void 0;
var Checkers_1 = __webpack_require__(6577);
var dom_get_1 = __webpack_require__(4574);
var not_browser_exception_1 = __webpack_require__(2089);
var DomUtils = (function () {
    function DomUtils() {
    }
    DomUtils.getWindowHeight = function () {
        if (typeof window === "undefined") {
            throw new not_browser_exception_1.NotBrowserException();
        }
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    DomUtils.getWindowWidth = function () {
        if (typeof window === "undefined") {
            throw new not_browser_exception_1.NotBrowserException();
        }
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    DomUtils.text = function (element, text, append) {
        if (append === void 0) { append = true; }
        if (append) {
            element.textContent += text;
        }
        else {
            element.textContent = text;
        }
        return element;
    };
    DomUtils.html = function (element, html, append) {
        if (append === void 0) { append = true; }
        if (append) {
            if (typeof html === "string") {
                element.innerHTML += html;
            }
            else if (Checkers_1.Checkers.isElement(html)) {
                element.appendChild(html);
            }
        }
        else if (typeof html === "string") {
            element.innerHTML = html;
        }
        else if (Checkers_1.Checkers.isElement(html)) {
            element.innerHTML = "";
            element.appendChild(html);
        }
        return element;
    };
    DomUtils.class = function (element, name, force) {
        if (force === void 0) { force = false; }
        if (Array.isArray(name)) {
            for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
                var className = name_1[_i];
                DomUtils.class(element, className, force);
            }
        }
        else {
            switch (name[0]) {
                case "+":
                    element.classList.add(name.substring(1));
                    break;
                case "-":
                    element.classList.remove(name.substring(1));
                    break;
                case "/":
                    name = name.substring(1);
                    if (Checkers_1.Checkers.isBoolean(force)) {
                        element.classList.toggle(name, force);
                    }
                    else {
                        element.classList.toggle(name);
                    }
                    break;
                default:
                    return element.classList.contains(name);
            }
        }
        return element;
    };
    DomUtils.createElement = function (name, attr, cont, style) {
        if (typeof document === "undefined") {
            throw new not_browser_exception_1.NotBrowserException();
        }
        if (typeof name === "object") {
            return DomUtils.createElement(name.name, name.attr || {}, name.cont || "", name.style);
        }
        var el = document.createElement(name);
        if (typeof attr === "object") {
            for (var key in attr) {
                if (attr.hasOwnProperty(key)) {
                    el.setAttribute(key, attr[key]);
                }
            }
        }
        if (typeof style === "object") {
            for (var key in style) {
                if (style.hasOwnProperty(key)) {
                    el.style[key] = style[key];
                }
            }
        }
        if (Array.isArray(cont)) {
            cont.forEach(function (e) {
                DomUtils.html(el, e, true);
            });
        }
        else {
            DomUtils.html(el, cont);
        }
        return el;
    };
    DomUtils.remove = function (element) {
        var parentElement = element.parentElement;
        if (parentElement) {
            parentElement.removeChild(element);
        }
        return element;
    };
    DomUtils.position = function (element) {
        var top = 0;
        var left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            x: left,
            y: top,
        };
    };
    DomUtils.indexOf = function (element) {
        var index = 0;
        while (element) {
            element = element.previousElementSibling;
            index++;
        }
        return index;
    };
    DomUtils.size = function (element) {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    };
    DomUtils.serialize = function (form) {
        var result = {};
        if (!Checkers_1.Checkers.isElement(form)) {
            return result;
        }
        if (form.tagName.toLowerCase() !== "form") {
            return result;
        }
        var elements = dom_get_1.DomGet.byTag("input");
        for (var key in elements) {
            if (!elements.hasOwnProperty(key)) {
                continue;
            }
            var e = elements[key];
            var name_2 = e.getAttribute("name");
            if (name_2) {
                result[name_2] = e.getAttribute("value");
            }
        }
        return result;
    };
    return DomUtils;
}());
exports.DomUtils = DomUtils;


/***/ }),

/***/ 6689:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.FileUtils = void 0;
var fs = __importStar(__webpack_require__(2993));
var path = __importStar(__webpack_require__(1386));
var StringUtils_1 = __webpack_require__(8519);
function walk(dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) {
            return done(err);
        }
        var pending = list.length;
        if (!pending) {
            return done(null, results);
        }
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err1, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err2, res) {
                        if (!res) {
                            return;
                        }
                        results.push.apply(results, res);
                        pending--;
                        if (!pending) {
                            done(null, results);
                        }
                    });
                }
                else {
                    results.push(file);
                    pending--;
                    if (!pending) {
                        done(null, results);
                    }
                }
            });
        });
    });
}
var FileUtils = (function () {
    function FileUtils() {
    }
    FileUtils.scanDirRecursive = function (dir) {
        return new Promise(function (success, reject) {
            fs.stat(dir, function (err0, stats) {
                if (err0) {
                    return reject(err0);
                }
                if (!stats.isDirectory()) {
                    return reject(dir + " is not directory");
                }
                walk(dir, function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    success(data);
                });
            });
        });
    };
    FileUtils.loadFileJSON = function (url, callback) {
        FileUtils.loadFile(url, function (err, data) { return callback(err, JSON.parse(data)); });
    };
    FileUtils.loadFile = function (url, callback, encoding) {
        if (encoding === void 0) { encoding = "utf8"; }
        fs.readFile(url, encoding, callback);
    };
    FileUtils.saveJsonFile = function (data, fileName) {
        return FileUtils.saveFile(JSON.stringify(data), fileName);
    };
    FileUtils.saveFile = function (data, fileName) {
        return new Promise(function (success, reject) {
            fs.writeFile(fileName, data, function (err) {
                err ? reject(err) : success("The file was saved!");
            });
        });
    };
    FileUtils.removeFile = function (fileName) {
        return new Promise(function (success, reject) {
            fs.unlink(fileName, function (err) {
                err ? reject(err) : success("The file was removed!");
            });
        });
    };
    FileUtils.checkExtension = function (name, extension) {
        if (name.endsWith(extension)) {
            return name;
        }
        return StringUtils_1.StringUtils.joinSingle(name, ".", extension);
    };
    return FileUtils;
}());
exports.FileUtils = FileUtils;


/***/ }),

/***/ 7962:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ 7727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

/***/ 4163:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.ArrayUtils = void 0;
var Arrays = __importStar(__webpack_require__(7962));
var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    ArrayUtils.where = function (array, condition) {
        return Arrays.where(array, condition);
    };
    ArrayUtils.subArray = function (array, minIndex, maxIndex) {
        if (minIndex === void 0) { minIndex = 0; }
        if (maxIndex === void 0) { maxIndex = array.length - 1; }
        return Arrays.subArray(array, minIndex, maxIndex);
    };
    ArrayUtils.max = function (array) {
        return Arrays.max(array);
    };
    ArrayUtils.min = function (array) {
        return Arrays.min(array);
    };
    ArrayUtils.sum = function (array) {
        return Arrays.sum(array);
    };
    ArrayUtils.avg = function (array) {
        return Arrays.avg(array);
    };
    ArrayUtils.join = function (array, delimiter, prefix, postfix) {
        if (prefix === void 0) { prefix = ""; }
        if (postfix === void 0) { postfix = ""; }
        return Arrays.join(array, delimiter, prefix, postfix);
    };
    ArrayUtils.getLast = function (array) {
        return Arrays.getLast(array);
    };
    ArrayUtils.getRandom = function (array) {
        return Arrays.getRandomItem(array);
    };
    ArrayUtils.getNRandom = function (array, count) {
        return Arrays.getNRandom(array, count);
    };
    ArrayUtils.makeUnique = function (array) {
        return Arrays.makeUnique(array);
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;


/***/ }),

/***/ 1294:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.MathUtils = void 0;
var Maths = __importStar(__webpack_require__(8132));
var MathUtils = (function () {
    function MathUtils() {
    }
    MathUtils.roundToDecimals = function (num, decimals, type) {
        if (decimals === void 0) { decimals = 2; }
        if (type === void 0) { type = "round"; }
        return Maths.roundToDecimals(num, decimals, type);
    };
    MathUtils.pad = function (num, size) {
        return Maths.pad(num, size);
    };
    MathUtils.clamp = function (value, min, max) {
        return Maths.clamp(value, min, max);
    };
    MathUtils.binomialCoefficient = function (n, k) {
        return Maths.binomialCoefficient(n, k);
    };
    MathUtils.lerp = function (a, b, val) {
        return Maths.lerp(a, b, val);
    };
    MathUtils.log2i = function (value) {
        return Maths.log2i(value);
    };
    MathUtils.lamp = function (min, max, scale) {
        return Maths.lamp(min, max, scale);
    };
    MathUtils.randomInt = function (min, max) {
        return Maths.randomInt(min, max);
    };
    MathUtils.random = function (min, max) {
        return Maths.random(min, max);
    };
    MathUtils.average = function (args) {
        return Maths.average(args);
    };
    MathUtils.diff = function (num1, num2) {
        return Maths.getDiff(num1, num2);
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;


/***/ }),

/***/ 3451:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MiscUtils = void 0;
var Misc = __importStar(__webpack_require__(5140));
var NetClient = __importStar(__webpack_require__(9383));
var Objects = __importStar(__webpack_require__(1265));
var Reflection = __importStar(__webpack_require__(9646));
var MiscUtils = (function () {
    function MiscUtils() {
    }
    MiscUtils.createClass = function (name, args) {
        return Reflection.createClass(name, args);
    };
    MiscUtils.parseCookies = function (cookies) {
        return Misc.parseCookies(cookies);
    };
    MiscUtils.isIn = function (obj) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return Misc.isIn.apply(Misc, __spreadArrays([obj], data));
    };
    MiscUtils.parseJSONWithComments = function (content) {
        return Misc.parseJSONWithComments(content);
    };
    MiscUtils.setCookie = function (name, value, days) {
        return Misc.setCookie(name, value, days);
    };
    MiscUtils.getCookie = function (cname, source) {
        if (source === void 0) { source = typeof document !== "undefined" ? document.cookie : ""; }
        return Misc.getCookie(cname, source);
    };
    MiscUtils.parseParams = function (query, separator, delimiter) {
        if (query === void 0) { query = typeof window !== "undefined" ? window.location.search.substring(1) : ""; }
        if (separator === void 0) { separator = "&"; }
        if (delimiter === void 0) { delimiter = "="; }
        return Misc.parseParams(query, separator, delimiter);
    };
    MiscUtils.roughSizeOfObject = function (object) {
        return Objects.roughSizeOfObject(object);
    };
    MiscUtils.objectToQueryParams = function (obj) {
        return Misc.objectToQueryParams(obj);
    };
    MiscUtils.includeFile = function (file) {
        return NetClient.includeFile(file);
    };
    MiscUtils.serialize = function (obj) {
        return Misc.serialize(obj);
    };
    MiscUtils.parse = function (obj) {
        return Misc.parse(obj);
    };
    MiscUtils.prototype.map = function (source, data) {
        return Misc.map(source, data);
    };
    return MiscUtils;
}());
exports.MiscUtils = MiscUtils;


/***/ }),

/***/ 9343:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.ObjectUtils = void 0;
var Objects = __importStar(__webpack_require__(1265));
var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    ObjectUtils.without = function (obj, items) {
        return Objects.without(obj, items);
    };
    ObjectUtils.getNestedProperty = function (object, propertyPath, separator) {
        if (separator === void 0) { separator = "."; }
        return Objects.getNestedProperty(object, propertyPath, separator);
    };
    ObjectUtils.size = function (object) {
        return Objects.size(object);
    };
    ObjectUtils.isPlain = function (object) {
        return Objects.isPlain(object);
    };
    ObjectUtils.makeFlat = function (list, propertyPath, separator) {
        if (separator === void 0) { separator = "."; }
        return Objects.makeFlat(list, propertyPath, separator);
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;


/***/ }),

/***/ 3547:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.StringCheckers = void 0;
var Checkers = __importStar(__webpack_require__(8592));
var StringCheckers = (function () {
    function StringCheckers() {
    }
    StringCheckers.isCamelCase = Checkers.isCamelCase;
    StringCheckers.isUpperCamelCase = Checkers.isUpperCamelCase;
    StringCheckers.isLowerCamelCase = Checkers.isLowerCamelCase;
    StringCheckers.isLowerSnakeCase = Checkers.isLowerSnakeCase;
    StringCheckers.isUpperSnakeCase = Checkers.isUpperSnakeCase;
    StringCheckers.isSnakeCase = Checkers.isSnakeCase;
    StringCheckers.isTimeFormat = Checkers.isTimeFormat;
    return StringCheckers;
}());
exports.StringCheckers = StringCheckers;


/***/ }),

/***/ 8519:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.StringUtils = void 0;
var validators_1 = __webpack_require__(5776);
var Checkers = __importStar(__webpack_require__(8592));
var Strings = __importStar(__webpack_require__(6131));
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.removeAccentedCharacters = function (word) {
        return Strings.removeAccentedCharacters(word);
    };
    StringUtils.join = function (data, delimiter, prefix, postfix) {
        if (delimiter === void 0) { delimiter = " "; }
        if (prefix === void 0) { prefix = ""; }
        if (postfix === void 0) { postfix = ""; }
        return Strings.joinString(data, delimiter, prefix, postfix);
    };
    StringUtils.toUpperSnakeCase = function (text) {
        return Strings.toUpperSnakeCase(text);
    };
    StringUtils.toLowerSnakeCase = function (text) {
        return Strings.toLowerSnakeCase(text);
    };
    StringUtils.toLowerCamelCase = function (text) {
        return Strings.toLowerCamelCase(text);
    };
    StringUtils.toUpperCamelCase = function (text) {
        return Strings.toUpperCamelCase(text);
    };
    StringUtils.toCapital = function (text) {
        return Strings.toCapital(text);
    };
    StringUtils.getLastPart = function (text, divider) {
        if (divider === void 0) { divider = " "; }
        return Strings.getLastPart(text, divider);
    };
    StringUtils.count = function (text, key) {
        return Strings.count(text, key);
    };
    StringUtils.repeat = function (text, count) {
        return text.repeat(count);
    };
    StringUtils.removeAll = function (text, words) {
        return Strings.removeAll(text, words);
    };
    StringUtils.template = function (text, values, start, end) {
        if (start === void 0) { start = "{{"; }
        if (end === void 0) { end = "}}"; }
        return Strings.template(text, values, start, end);
    };
    StringUtils.removeEmptyLines = function (content) {
        return Strings.removeEmptyLines(content);
    };
    StringUtils.between = function (text, key1, key2) {
        return Strings.between(text, key1, key2);
    };
    StringUtils.occurrences = function (text, key) {
        return Strings.occurrences(text, key);
    };
    StringUtils.collapseWhitespace = function (text) {
        return Strings.collapseWhitespace(text);
    };
    StringUtils.capitalize = function (text) {
        return Strings.capitalize(text);
    };
    StringUtils.isEmpty = function (text) {
        return validators_1.isEmpty(text);
    };
    StringUtils.swapCase = function (text) {
        return Strings.swapCase(text);
    };
    StringUtils.transformToBasicFormat = function (text) {
        return Strings.transformToBasicFormat(text);
    };
    StringUtils.isValidEmail = function (email) {
        return Checkers.isValidEmail(email);
    };
    StringUtils.isValidPhoneNumber = function (num) {
        return Checkers.isValidPhoneNumber(num);
    };
    StringUtils.getAsciiArray = function (text) {
        return Strings.getAsciiArray(text);
    };
    StringUtils.toBasicForm = function (text) {
        return Strings.toBasicForm(text);
    };
    StringUtils.contains = function (text, substring) {
        return Strings.contains(text, substring);
    };
    StringUtils.joinSingle = function (prefix, divider, postfix) {
        return Strings.joinSingle(prefix, divider, postfix);
    };
    StringUtils.getFormattedNumber = function (num, prefix) {
        if (prefix === void 0) { prefix = "+421"; }
        return Strings.getFormattedNumber(num, prefix);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),

/***/ 447:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

/***/ 8132:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

"use strict";

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

/***/ 9383:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.includeFile = exports.clientDownloadFile = exports.uploadFile = exports.uploadImage = void 0;
var not_browser_exception_1 = __webpack_require__(2089);
var html_utils_1 = __webpack_require__(447);
function uploadImage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (success, reject) {
                    var element = html_utils_1.CreateElement("input", {
                        type: "file",
                        onChange: function (event) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                success(html_utils_1.CreateImage({
                                    src: reader.result,
                                }));
                            };
                            reader.onerror = reject;
                            reader.readAsDataURL(event.target.files[0]);
                        },
                    });
                    element.style.display = "none";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                })];
        });
    });
}
exports.uploadImage = uploadImage;
function uploadFile() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (success) {
                    var element = html_utils_1.CreateElement("input", {
                        type: "file",
                        onChange: function (event) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                success(reader.result);
                            };
                            reader.readAsText(event.target.files[0]);
                        },
                    });
                    element.style.display = "none";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                })];
        });
    });
}
exports.uploadFile = uploadFile;
function clientDownloadFile(text, name) {
    var element = html_utils_1.CreateElement("a", {
        href: "data:text/plain;charset=utf-8," + encodeURIComponent(text),
        download: name,
    });
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
exports.clientDownloadFile = clientDownloadFile;
function includeFile(file) {
    if (typeof document === "undefined") {
        throw new not_browser_exception_1.NotBrowserException();
    }
    var script = document.createElement("script");
    if (!script) {
        return;
    }
    script.src = file;
    script.type = "text/javascript";
    script.defer = true;
    document.head.appendChild(script);
}
exports.includeFile = includeFile;


/***/ }),

/***/ 1265:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ 990:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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
exports.replaceForAll = exports.getFormattedNumber = exports.joinString = exports.joinSingle = exports.contains = exports.toBasicForm = exports.getAsciiArray = exports.transformToBasicFormat = exports.swapCase = exports.collapseWhitespace = exports.occurrences = exports.between = exports.removeEmptyLines = exports.template = exports.removeAll = exports.repeat = exports.count = exports.getLastPart = exports.toCapital = exports.capitalize = exports.toUpperCamelCase = exports.toLowerCamelCase = exports.toLowerSnakeCase = exports.toUpperSnakeCase = exports.removeAccentedCharacters = void 0;
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
    start = start.replace(/[-[\]()*\s]/g, "\\$&")
        .replace(/\$/g, "\\$");
    end = end.replace(/[-[\]()*\s]/g, "\\$&")
        .replace(/\$/g, "\\$");
    var regexp = new RegExp(start + "(.+?)'" + end, "g");
    var matches = text.match(regexp) || [];
    matches.forEach(function (match) {
        var key = match.substring(start.length, match.length - end.length)
            .trim();
        var value = values[key];
        if (value) {
            text = text.replace(match, value);
        }
    });
    return text;
}
exports.template = template;
function removeEmptyLines(content) {
    return content.replace(/^\s*$(?:\r\n?|\n)/gm, "");
}
exports.removeEmptyLines = removeEmptyLines;
function between(text, key1, key2) {
    var startPos = text.indexOf(key1);
    var endPos = text.indexOf(key2);
    if (startPos < 0 && endPos >= 0) {
        return text.substring(0, endPos);
    }
    if (endPos < 0 && startPos >= 0) {
        return text.substring(startPos + key1.length, text.length);
    }
    return text.substring(startPos + key1.length, endPos);
}
exports.between = between;
function occurrences(text, key) {
    return (text.match(new RegExp(key, "g")) || []).length;
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

/***/ 7652:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEndOfTheDay = exports.getStartOfTheDay = exports.createStopWatch = exports.format = exports.dateAgo = void 0;
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
function format(date, pattern) {
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
exports.format = format;
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

"use strict";

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

"use strict";

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


/***/ }),

/***/ 5202:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.get = exports.canvas = exports.check = exports.stemmer = exports.time = exports.string = exports.object = exports.misc = exports.dom = exports.math = exports.arrays = void 0;
var ArrayUtils_1 = __webpack_require__(4163);
Object.defineProperty(exports, "arrays", ({ enumerable: true, get: function () { return ArrayUtils_1.ArrayUtils; } }));
var MathUtils_1 = __webpack_require__(1294);
Object.defineProperty(exports, "math", ({ enumerable: true, get: function () { return MathUtils_1.MathUtils; } }));
var DomUtils_1 = __webpack_require__(5088);
Object.defineProperty(exports, "dom", ({ enumerable: true, get: function () { return DomUtils_1.DomUtils; } }));
var MiscUtils_1 = __webpack_require__(3451);
Object.defineProperty(exports, "misc", ({ enumerable: true, get: function () { return MiscUtils_1.MiscUtils; } }));
var ObjectUtils_1 = __webpack_require__(9343);
Object.defineProperty(exports, "object", ({ enumerable: true, get: function () { return ObjectUtils_1.ObjectUtils; } }));
var StringUtils_1 = __webpack_require__(8519);
Object.defineProperty(exports, "string", ({ enumerable: true, get: function () { return StringUtils_1.StringUtils; } }));
exports.time = __importStar(__webpack_require__(7652));
var slovak_stemmer_1 = __webpack_require__(4115);
Object.defineProperty(exports, "stemmer", ({ enumerable: true, get: function () { return slovak_stemmer_1.SlovakStemmer; } }));
var Checkers_1 = __webpack_require__(6577);
Object.defineProperty(exports, "check", ({ enumerable: true, get: function () { return Checkers_1.Checkers; } }));
var canvas_manager_1 = __webpack_require__(4000);
Object.defineProperty(exports, "canvas", ({ enumerable: true, get: function () { return canvas_manager_1.CanvasManager; } }));
var dom_get_1 = __webpack_require__(4574);
Object.defineProperty(exports, "get", ({ enumerable: true, get: function () { return dom_get_1.DomGet; } }));


/***/ }),

/***/ 2993:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1386:
/***/ (() => {

/* (ignored) */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9maWxlLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1tYXAudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMva2V5LXZhbHVlLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbnVtYmVyLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb25maWcvZ3Rvb2xzLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2RlcHJlY2F0ZWQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2ZpbmFsLWNsYXNzLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9tYXBwZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3NpbmdsZXRvbi5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvd2F0Y2guZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9jYW52YXMtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9kZXByZWNhdGVkL0NoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZG9tLWdldC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvZW5jb2RpbmdzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2ZpbGUtdHlwZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMvaHR0cC1zdGF0dXMtY29kZXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZW51bXMva2V5cy5lbnVtLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IyZi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9hamF4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2ZpbGUtc2l6ZS1mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvcnVudGltZS12YWxpZGF0b3JzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3Nsb3Zhay1zdGVtbWVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvY29sb3IubW9kZWwudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy9nZW5kZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL3JhbmdlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9ub2RlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9hYnN0cmFjdC1kYXRhYmFzZS5maXh0dXJlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9hYnN0cmFjdC5maXh0dXJlLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90ZXN0cy9hYnN0cmFjdC5tYXBwZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL3BhZ2luYXRlLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvRG9tVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL0ZpbGVVdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvYXJyYXktdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2NvbG9yLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL0FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2RlcHJlY2F0ZWQvTWF0aFV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL01pc2NVdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGVwcmVjYXRlZC9PYmplY3RVdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGVwcmVjYXRlZC9TdHJpbmdDaGVja2Vycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGVwcmVjYXRlZC9TdHJpbmdVdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvaHRtbC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWF0aC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbWlzYy11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvbmV0LWNsaWVudC11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvb2JqZWN0LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9yYW5kb20tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3JlZmxlY3Rpb24tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3N0cmluZy1jaGVja2Vycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3RyaW5nLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy90aW1lLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy92YWxpZGF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvd2ViLnRzIiwid2VicGFjazovL0c0M0xpYi9pZ25vcmVkfGZzIiwid2VicGFjazovL0c0M0xpYi9pZ25vcmVkfHBhdGgiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0c0M0xpYi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxpREFBdUI7QUFDdkIsaURBQXNCO0FBQ3RCLGlEQUF5QjtBQUV6QixpREFBNkI7QUFFN0IsaURBQWlEO0FB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R0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQ3hCLEVBQUU7UUFDQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUM7UUFDUCxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXBCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtRQUMzQixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUM7UUFDUCxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBSW5CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ3RCLEVBQUU7UUFDSCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUM7UUFDUCxDQUNJLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUN6QixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNULFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRztnQkFFSixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztLQUNKO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxDQUFTO0lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFNckIsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2hCLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDOUQsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDOUQsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDOUQsS0FBSyxHQUFHO1lBQ0osT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUF2QixDQUF1QixDQUFDLENBQUM7S0FDakU7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ25HLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxD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b24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkc0M0xpYlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRzQzTGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0ICogZnJvbSBcIi4vbm9kZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93ZWJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWcvZ3Rvb2xzLWNvbmZpZy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnL2d0b29scy1jb25maWdcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2RlY29yYXRvcnNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2NhbnZhcy1tYW5hZ2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9jYW52YXMtdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2RlcHJlY2F0ZWQvQ2hlY2tlcnNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2RvbS1nZXRcIjtcclxuXHJcbi8vIFRPRE8gbm90IHdvcmsgb24gYmFja2VuZFxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9kb20vZWxlbWVudC1idWlsZGVyXCI7XHJcblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9lbnVtc1wiO1xyXG5cclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi92YWxpZGF0b3JzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9taXNjXCI7XHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL21hdGhcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vcGh5c2ljc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC1kYXRhYmFzZS5maXh0dXJlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QubWFwcGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL3BhZ2luYXRlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xyXG5leHBvcnQgeyBDYW52YXNTaGFkb3dDb25maWcgfSBmcm9tIFwiLi9kb20vdHlwZXMvY2FudmFzLXNoYWRvdy1jb25maWdcIjtcclxuXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL3V0aWxzXCI7XHJcbiIsIi8vIFVUSUxTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ0NoZWNrZXJzXCI7XHJcblxyXG4vLyBNT0RFTFNcclxuXHJcbmV4cG9ydCB7IEdlbmRlclR5cGUsIEdlbmRlciB9IGZyb20gXCIuL21vZGVscy9nZW5kZXIubW9kZWxcIjtcclxuXHJcbi8vIEVOVU1TXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtcy9lbmNvZGluZ3MuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtcy9maWxlLXR5cGVzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMvaHR0cC1zdGF0dXMtY29kZXMuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtcy9rZXlzLmVudW1cIjtcclxuXHJcbi8vIENPTVBPTkVOVFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHMva2V5LXZhbHVlLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9udW1iZXItY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGUtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRvclwiO1xyXG5cclxuLy8gTUFUSFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGgvdmVjdG9yMmZcIjtcclxuXHJcbi8vIENPTkZJR1xyXG5cclxuZXhwb3J0IHsgaW5pdENvbmZpZyB9IGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG4vLyBJTlRFUkZBQ0VTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlcy9rZXktdmFsdWUuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzL3N0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzL3NpemUuaW50ZXJhZmFjZVwiO1xyXG5cclxuLy8gVEVTVFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5tYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvcGFnaW5hdGUubW9kZWxcIjtcclxuIiwiaW1wb3J0IHsgRmlsZVR5cGVzIH0gZnJvbSBcIi4uL2VudW1zL2ZpbGUtdHlwZXMuZW51bVwiO1xyXG5cclxuLyoqXHJcbiAqICBGaWxlTWFuYWdlciBpcyBjbGFzcyB1c2VkIGZvciBvcGVuIGFuZCBzYXZlIGZpbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcml2YXRlIGlucHV0IHVzZWQgZm9yIG9wZW5pbmcgc3lzdGVtIHdpbmRvdyBmb3IgdXBsb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciBkb3dubG9hZCBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbms6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZpbGVzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0ZXh0IGNvbnRlbnQgaW50byBmaWxlIHdpdGggc3BlY2lmaWMgZXh0ZW5zaW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGZpbGUgbmFtZVxyXG4gICAgICogQHBhcmFtIHRleHQgZmlsZSBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBmaWxlIHtAbGluayBGaWxlVHlwZXN9LiBEZWZhdWwgdmFsdWUgaXMge0BsaW5rIEZpbGVUeXBlcy5UWFR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlRmlsZShuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgdHlwZTogRmlsZVR5cGVzID0gRmlsZVR5cGVzLlRYVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3RleHRdLCB7dHlwZX0pKTtcclxuICAgICAgICB0aGlzLmxpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluay5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSBpbWFnZSBpbnRvIGZpbGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBpbWFnZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW1hZ2UgaW1hZ2UgZWxlbWVudCBvciBwYXRoIHRvIGltYWdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlSW1hZ2UobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nIHwgSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGltYWdlIDogaW1hZ2Uuc3JjO1xyXG4gICAgICAgIHRoaXMubGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5rLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2UoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlTmFtZTogc3RyaW5nKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgICAgICAgICAgICAgID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkICAgICAgICAgICAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjICAgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIGZ1bmMoaW1hZ2UsIGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBmaWxlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmdW5jIGxvYWRpbmcgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZXM6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSAoZS50YXJnZXQgYXMgYW55KS5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiBmdW5jKHJlYWRlci5yZXN1bHQsIGZpbGVzKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBiaW5hcnkgZmlsZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQmluYXJ5RmlsZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gZnVuYyhyZWFkZXIucmVzdWx0LCBmaWxlc1swXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdMb2dnZXJJbnN0YW5jZSB7XHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0Pzogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KFwibG9nXCIsIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3YXJuKC4uLm1lc3NhZ2VzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJ3YXJuXCIsIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvciguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KFwiZXJyb3JcIiwgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyIGV4dGVuZHMgR0xvZ2dlckluc3RhbmNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGluZShzdGVwcyA9IDIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlcnJvci5zdGFjay5zcGxpdChcIlxcblwiKVtzdGVwc10udHJpbSgpLm1hdGNoKC9cXCguKlxcKS8pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhdCBcIiArIHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNraXBDb250ZXh0cyA9IFtcInJlbmRlcldvcmxkU3RhdGljXCIsIFwiQ2FudmFzRGlyZWN0aXZlXCIsIFwiV29ybGRSZW5kZXJlclNlcnZpY2VcIiwgXCJ2aWV3cG9ydFwiLCBcIldvcmxkSW5wdXRTZXJ2aWNlXCJdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc2tpcFJlZ2V4cCAgID0gbmV3IFJlZ0V4cChgJHtHTG9nZ2VyLnNraXBDb250ZXh0cy5qb2luKFwifFwiKX1gLCBcImdpXCIpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0Pzogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmludCh0eXBlOiBcImxvZ1wiIHwgXCJ3YXJuXCIgfCBcImVycm9yXCIsIGNvbnRleHQ6IHN0cmluZyB8IHsgY29uc3RydWN0b3I6IHsgbmFtZTogc3RyaW5nIH0gfSA9IFwiXCIsIC4uLmRhdGE6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVhbENvbnRleHQgPSBjb250ZXh0ICYmICh0eXBlb2YgY29udGV4dCA9PT0gXCJzdHJpbmdcIiA/IGNvbnRleHQgOiBjb250ZXh0Py5jb25zdHJ1Y3Rvcj8ubmFtZSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ICAgICAgPSByZWFsQ29udGV4dCAmJiByZWFsQ29udGV4dC5tYXRjaChHTG9nZ2VyLnNraXBSZWdleHApO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmVmaXggPSByZWFsQ29udGV4dCA/IGBbJHtyZWFsQ29udGV4dH1dIGAgOiBcIlwiO1xyXG4gICAgICAgIGNvbnNvbGVbdHlwZV0ocHJlZml4LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZyhtZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSwgY29udGV4dD86IHN0cmluZyB8IHsgY29uc3RydWN0b3I6IHsgbmFtZTogc3RyaW5nIH0gfSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJsb2dcIiwgY29udGV4dCwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdNYXA8VCwgUz4gZXh0ZW5kcyBNYXA8VCwgUz4ge1xyXG4gICAgcHVibGljIGdldChrZXk6IFQsIGRlZmF1bHRWYWx1ZT86IFMpOiBTIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSkgfHwgZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPckNyZWF0ZShrZXk6IFQsIGRlZmF1bHRWYWx1ZTogUyk6IFMgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nLW1hcFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9rZXktdmFsdWUtY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9udW1iZXItY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYWdpbmF0b3JcIjtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBTaW1wbGVXcmFwcGVyIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlQ291bnRlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVzdWx0czogU2ltcGxlV3JhcHBlcltdICAgICAgICA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGFkZChpdGVtOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXRlbSBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3BOKGNvdW50OiBudW1iZXIpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzLnNsaWNlKDAsIGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRoaXMuZGF0YVtrZXldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE51bWJlckNvdW50ZXIge1xyXG4gICAgcHJpdmF0ZSBtaW4gICAgICAgICAgICAgICAgICAgICAgICA9IEluZmluaXR5O1xyXG4gICAgcHJpdmF0ZSBtYXggICAgICAgICAgICAgICAgICAgICAgICA9IC1JbmZpbml0eTtcclxuICAgIHByaXZhdGUgc3VtICAgICAgICAgICAgICAgICAgICAgICAgPSAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBudW1iZXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBhZGQodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubnVtYmVycy5wdXNoKHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbih0aGlzLm1pbiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMubWF4ID0gTWF0aC5tYXgodGhpcy5tYXgsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnN1bSArPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWluKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF2ZXJhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW0gLyB0aGlzLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR1Rvb2xzQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yPFQgPSB1bmtub3duPiB7XHJcbiAgICBwcml2YXRlIGFjdExpc3Q6IFRbXTtcclxuICAgIHByaXZhdGUgYWN0dWFsUGFnZSA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhc3RQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWxsSXRlbXM6IFRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW1zUGVyUGFnZSA9IEdUb29sc0NvbmZpZy5QQUdFX0xJTUlUKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IGFsbEl0ZW1zID8gTWF0aC5mbG9vcihhbGxJdGVtcy5sZW5ndGggLyB0aGlzLml0ZW1zUGVyUGFnZSkgOiAwO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCAgPSB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFjdHVhbFBhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxQYWdlICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFnZXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UGFnZSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZ2VzQXJvdW5kKCk6IG51bWJlcltdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm4gWzEsIDIsIDMsIDQsIDVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlID4gdGhpcy5sYXN0UGFnZSAtIDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMSxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlICsgMSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSAtIDEsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMixcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMyxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMaXN0KCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub05leHQoKTogVFtdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgdGhpcy5sYXN0UGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UrKztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvdFRvKHBhZ2U6IG51bWJlcik6IFRbXSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPj0gMCAmJiBwYWdlIDw9IHRoaXMubGFzdFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gcGFnZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9QcmV2KCk6IFRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlLS07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvRmlyc3QoKTogVFtdIHtcclxuICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTGFzdCgpOiBUW10ge1xyXG4gICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IHRoaXMubGFzdFBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVDYWxjTGlzdCgpOiBUW10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ICA9IHRoaXMuYWN0dWFsUGFnZSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCA9IHRoaXMuYWxsSXRlbXMgPyB0aGlzLmFsbEl0ZW1zLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlKSA6IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RMaXN0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdUb29sc0NvbmZpZ0ludGVyZmFjZSB9IGZyb20gXCIuL2d0b29scy1jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5sZXQgY29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2U7XHJcblxyXG5jb25zdCBjaGVja0NvbmZpZyA9ICgpOiBHVG9vbHNDb25maWdJbnRlcmZhY2UgPT4ge1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBVUkxfQVBJICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBMQU5HVUFHRSAgOiBcIlwiLFxyXG4gICAgICAgICAgICBWRVJTSU9OICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBQQUdFX0xJTUlUOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjbGFzcyBDbGFzc093bkNvbmZpZyBleHRlbmRzIENsYXNzR1Rvb2xzQ29uZmlnIGltcGxlbWVudHMgT3duQ29uZmlnSW50ZXJmYWNlIHtcclxuICogICAgIHB1YmxpYyBuYW1lID0gXCJcIjtcclxuICogfVxyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgT3duQ29uZmlnID0gbmV3IENsYXNzT3duQ29uZmlnKCk7XHJcbiAqXHJcbiAqIEBzZWUgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NHVG9vbHNDb25maWcgaW1wbGVtZW50cyBHVG9vbHNDb25maWdJbnRlcmZhY2Uge1xyXG4gICAgcHVibGljIGdldCBVUkxfQVBJKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuVVJMX0FQSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFBBR0VfTElNSVQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5QQUdFX0xJTUlUO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgTEFOR1VBR0UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5MQU5HVUFHRTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFZFUlNJT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5WRVJTSU9OO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWcoYXBwQ29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbmZpZyA9IGFwcENvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdUb29sc0NvbmZpZyA9IG5ldyBDbGFzc0dUb29sc0NvbmZpZygpO1xyXG4iLCJleHBvcnQgY29uc3QgQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMgPSB0cnVlO1xyXG5cclxuIiwiaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiLi4vdHlwZXMvcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXByZWNhdGVkKHZhbHVlPzogc3RyaW5nKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKTogYW55ID0+IHtcclxuICAgICAgICBjb25zdCBvbGRNZXRob2QgID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gKC4uLmFyZ3M6IGFueVtdKTogYW55ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTWV0aG9kIFwiICsgdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgKyBcIi5cIiArIHByb3BlcnR5S2V5ICsgXCIgaXMgZGVwcmVjYXRlZC4gXCIgKyAodmFsdWUgfHwgXCJcIikpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZE1ldGhvZC5hcHBseSh0YXJnZXQsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBGaW5hbENsYXNzPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+Pih0YXJnZXQ6IFQpOiBUIHtcclxuICAgIHJldHVybiBjbGFzcyBGaW5hbCBleHRlbmRzIHRhcmdldCB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcudGFyZ2V0ICE9PSBGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluaGVyaXQgZnJvbSBmaW5hbCBjbGFzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2RlcHJlY2F0ZWQuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbmFsLWNsYXNzLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBwZXIuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZXRvbi5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2F0Y2guZGVjb3JhdG9yXCI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBNYXBwZXIocGFyYW1zOiB7IG9uR2V0PzogKG9sZFZhbHVlOiBhbnkpID0+IGFueSwgb25TZXQ/OiAob2xkVmFsdWU6IGFueSkgPT4gYW55IH0gPSB7fSwgcHJlZml4ID0gXCJfXCIpOiBhbnkge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIGlmICghZGVsZXRlIHRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld05hbWUgICAgICAgICAgICAgICAgICAgICAgICA9IHByZWZpeCArIGtleTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uR2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gKCkgPT4gcGFyYW1zLm9uR2V0ICYmIHBhcmFtcy5vbkdldCh0YXJnZXRbbmV3TmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSAoKSA9PiB0YXJnZXRbbmV3TmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uU2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKG5ld1ZhbDogYW55KSA9PiB0YXJnZXRbbmV3TmFtZV0gPSBwYXJhbXMub25TZXQgJiYgcGFyYW1zLm9uU2V0KG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9ICh2YWx1ZSkgPT4gdGFyZ2V0W25ld05hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcclxuICAgIH07XHJcbn1cclxuIiwiY29uc3QgaW5zdGFuY2VzOiB7IFtjbGFzc05hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2luZ2xldG9uPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IGFueT4oY29uc3RydWN0b3I6IFQpOiBhbnkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VzW2NsYXNzTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIG9mIFwiICsgY2xhc3NOYW1lICsgXCIgaXMgYWxyZWFkeSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc3RhbmNlc1tjbGFzc05hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSBcIi4uL3R5cGVzL3Byb3BlcnR5LWRlY29yYXRvci50eXBlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XHJcbiAgICBlbnVtZXJhYmxlPzogYm9vbGVhbjtcclxuICAgIGNvbmZpZ3VyYWJsZT86IGJvb2xlYW47XHJcbiAgICBwcmVmaXg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBXYXRjaChvblNldD86IChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSA9PiBhbnksIG9wdGlvbnM/OiBXYXRjaE9wdGlvbnMpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICBjb25zdCBwcmVmaXggPSBvcHRpb25zICYmIG9wdGlvbnMucHJlZml4IHx8IFwiX1wiO1xyXG5cclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gKG5ld1ZhbDogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvblNldCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3ByZWZpeCArIGtleV0gPSBvblNldChuZXdWYWwsIHRhcmdldFtwcmVmaXggKyBrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJlZml4ICsga2V5XSA9IG5ld1ZhbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWRlbGV0ZSB0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRhcmdldFtwcmVmaXggKyBrZXldLFxyXG4gICAgICAgICAgICBzZXQgICAgICAgICA6IHNldHRlcixcclxuICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmVudW1lcmFibGUgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5lbnVtZXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmNvbmZpZ3VyYWJsZSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLmNvbmZpZ3VyYWJsZSA6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5vdEJyb3dzZXJFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5jbGFzcyBBYnN0cmFjdENhbnZhc01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2NhbENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXJnMTogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50LCBhcmcyOiBudW1iZXIsIGFyZzM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmcxIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IGFyZzE7XHJcbiAgICAgICAgICAgIGlmIChhcmcyICYmIGFyZzMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzU2l6ZShhcmcyLCBhcmczKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJnMSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IENhbnZhc01hbmFnZXIuaW1hZ2VUb0NhbnZhcyhhcmcxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZzEgJiYgYXJnMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzEsIGFyZzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYWxDb250ZXh0ID0gdGhpcy5sb2NhbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm06IFRyYW5zZm9ybSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtUmF3KHRyYW5zZm9ybS5vZmZzZXQueCwgdHJhbnNmb3JtLm9mZnNldC55LCB0cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm1SYXcodHJhbnNsYXRpb25YOiBudW1iZXIsIHRyYW5zbGF0aW9uWTogbnVtYmVyLCBzY2FsZVg6IG51bWJlciwgc2NhbGVZID0gc2NhbGVYKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIENhbnZhc01hbmFnZXIuc2V0VHJhbnNmb3JtUmF3KHRoaXMubG9jYWxDb250ZXh0LCB0cmFuc2xhdGlvblgsIHRyYW5zbGF0aW9uWSwgc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIENhbnZhc01hbmFnZXIuY2FudmFzVG9JbWFnZSh0aGlzLmxvY2FsQ2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2hhZG93KHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBibHVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRTaGFkb3codGhpcy5sb2NhbENvbnRleHQsIHgsIHksIGNvbG9yLCBibHVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMubG9jYWxDYW52YXMudG9EYXRhVVJMKGZvcm1hdCksIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckNhbnZhcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgQ2FudmFzTWFuYWdlci5jbGVhckNhbnZhcyh0aGlzLmxvY2FsQ29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYW52YXNTaXplKHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0Q2FudmFzU2l6ZSh0aGlzLmxvY2FsQ2FudmFzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kVG8oZWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sb2NhbENhbnZhcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTWFuYWdlciBleHRlbmRzIEFic3RyYWN0Q2FudmFzTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQ2FudmFzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDYW52YXNTaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2hhZG93KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmx1cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yICAgPSBjb2xvcjtcclxuICAgICAgICBjdHguc2hhZG93Qmx1ciAgICA9IGJsdXI7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSB4O1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGltYWdlVG9DYW52YXMoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYW52YXMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICBjb25zdCBjdHggICAgID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldExpbmVEYXNoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCAuLi5hcmdzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY3R4LnNldExpbmVEYXNoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY3R4LnNldExpbmVEYXNoKGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGNUZXh0V2lkdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZhbHVlOiBzdHJpbmcsIGZvbnQ/OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChmb250KSB7XHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gZm9udDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQodmFsdWUpLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VHJhbnNmb3JtUmF3KFxyXG4gICAgICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIHRyYW5zbGF0aW9uWDogbnVtYmVyLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uWTogbnVtYmVyLFxyXG4gICAgICAgIHNjYWxlWDogbnVtYmVyLFxyXG4gICAgICAgIHNjYWxlWSA9IHNjYWxlWCxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oc2NhbGVYLCAwLCAwLCBzY2FsZVksIHRyYW5zbGF0aW9uWCwgdHJhbnNsYXRpb25ZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbnZhc1RvSW1hZ2UoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlICA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyAgICA9IGNhbnZhcy50b0RhdGFVUkwoZm9ybWF0KTtcclxuICAgICAgICBpbWFnZS53aWR0aCAgPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJmIH0gZnJvbSBcIi4uL21hdGgvdmVjdG9yMmZcIjtcclxuaW1wb3J0IHsgQ2FudmFzTWFuYWdlciB9IGZyb20gXCIuL2NhbnZhcy1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENhbnZhc1NoYWRvd0NvbmZpZyB9IGZyb20gXCIuL3R5cGVzL2NhbnZhcy1zaGFkb3ctY29uZmlnXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzQ29uZmlnIHtcclxuICAgIHNoYWRvdz86IENhbnZhc1NoYWRvd0NvbmZpZztcclxuICAgIHBvc2l0aW9uPzogbnVtYmVyIHwgVmVjdG9yMmY7XHJcbiAgICBjZW50ZXI/OiBib29sZWFuO1xyXG4gICAgc2l6ZT86IG51bWJlciB8IFZlY3RvcjJmO1xyXG4gICAgYmdJbWFnZT86IHtcclxuICAgICAgICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB3OiBudW1iZXI7XHJcbiAgICAgICAgaDogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIGZpbGw6IGJvb2xlYW47XHJcbiAgICBmaWxsQ29sb3I6IHN0cmluZztcclxuICAgIGRyYXc6IGJvb2xlYW47XHJcbiAgICBib3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgcmFkaXVzOiBudW1iZXIgfCB7XHJcbiAgICAgICAgdGw6IG51bWJlcjtcclxuICAgICAgICB0cjogbnVtYmVyO1xyXG4gICAgICAgIGJyOiBudW1iZXI7XHJcbiAgICAgICAgYmw6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBsaW5lQ2FwOiBcImJ1dHRcIiB8IFwicm91bmRcIiB8IFwic3F1YXJlXCI7XHJcbiAgICBqb2luVHlwZTogXCJiZXZlbFwiIHwgXCJyb3VuZFwiIHwgXCJtaXRlclwiO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgc3RhcnRBbmdsZTogbnVtYmVyO1xyXG4gICAgZW5kQW5nbGU6IG51bWJlcjtcclxuICAgIG9mZnNldDogYW55O1xyXG4gICAgbGluZURhc2g6IG51bWJlcltdO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTaGFkb3coY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb25maWc/OiBDYW52YXNTaGFkb3dDb25maWcpOiB2b2lkIHtcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyhjb250ZXh0LCBjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5jb2xvciwgY29uZmlnLmJsdXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyhjb250ZXh0LCAwLCAwLCBcImJsYWNrXCIsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzKHJlczogQ2FudmFzQ29uZmlnKTogdm9pZCB7XHJcbiAgICBpZiAocmVzLnNoYWRvdykge1xyXG4gICAgICAgIHNldFNoYWRvdyhyZXMuY3R4LCByZXMuc2hhZG93KTtcclxuICAgIH1cclxuICAgIGlmIChyZXMuYmdJbWFnZSkge1xyXG4gICAgICAgIHJlcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHJlcy5jdHguY2xpcCgpO1xyXG4gICAgICAgIGlmIChyZXMuYmdJbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5kcmF3SW1hZ2UocmVzLmJnSW1hZ2UsIHJlcy54LCByZXMueSwgcmVzLndpZHRoLCByZXMuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuY3R4LmRyYXdJbWFnZShyZXMuYmdJbWFnZS5pbWcsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS54LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UueSxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLncsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS5oLFxyXG4gICAgICAgICAgICAgICAgcmVzLngsXHJcbiAgICAgICAgICAgICAgICByZXMueSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH0gZWxzZSBpZiAocmVzLmZpbGwpIHtcclxuICAgICAgICByZXMuY3R4LmZpbGxTdHlsZSA9IHJlcy5maWxsQ29sb3I7XHJcbiAgICAgICAgcmVzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zaGFkb3cpIHtcclxuICAgICAgICBzZXRTaGFkb3cocmVzLmN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmN0eC5saW5lQ2FwICA9IHJlcy5saW5lQ2FwO1xyXG4gICAgcmVzLmN0eC5saW5lSm9pbiA9IHJlcy5qb2luVHlwZTtcclxuICAgIGlmICh0eXBlb2YgcmVzLmN0eC5zZXRMaW5lRGFzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVzLmN0eC5zZXRMaW5lRGFzaChyZXMubGluZURhc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzLmRyYXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXMuY3R4LmxpbmVXaWR0aCAgID0gcmVzLmJvcmRlcldpZHRoO1xyXG4gICAgcmVzLmN0eC5zdHJva2VTdHlsZSA9IHJlcy5ib3JkZXJDb2xvcjtcclxuICAgIHJlcy5jdHguc3Ryb2tlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXREZWYob2JqOiBhbnkpOiBDYW52YXNDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIGNlbnRlciAgICAgOiBmYWxzZSxcclxuICAgICAgICBjdHggICAgICAgIDogb2JqLmN0eCxcclxuICAgICAgICBkcmF3ICAgICAgIDogdHlwZW9mIG9iai5ib3JkZXJDb2xvciAhPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLmJvcmRlcldpZHRoICE9PSBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIGVuZEFuZ2xlICAgOiBNYXRoLlBJICogMixcclxuICAgICAgICBmaWxsICAgICAgIDogdHlwZW9mIG9iai5maWxsQ29sb3IgIT09IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgZmlsbENvbG9yICA6IFwid2hpdGVcIixcclxuICAgICAgICBoZWlnaHQgICAgIDogMCxcclxuICAgICAgICBqb2luVHlwZSAgIDogXCJiZXZlbFwiLFxyXG4gICAgICAgIGxpbmVDYXAgICAgOiBcInJvdW5kXCIsXHJcbiAgICAgICAgbGluZURhc2ggICA6IFtdLFxyXG4gICAgICAgIG9mZnNldCAgICAgOiBudWxsLFxyXG4gICAgICAgIHJhZGl1cyAgICAgOiB7XHJcbiAgICAgICAgICAgIHRsOiAwLFxyXG4gICAgICAgICAgICB0cjogMCxcclxuICAgICAgICAgICAgYnI6IDAsXHJcbiAgICAgICAgICAgIGJsOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRBbmdsZSA6IDAsXHJcbiAgICAgICAgd2lkdGggICAgICA6IDAsXHJcbiAgICAgICAgeCAgICAgICAgICA6IDAsXHJcbiAgICAgICAgeSAgICAgICAgICA6IDAsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1ha2VQb3NBbmRTaXplKGRlZjogQ2FudmFzQ29uZmlnLCBvYmo6IGFueSk6IENhbnZhc0NvbmZpZyB7XHJcbiAgICBjb25zdCByZXM6IENhbnZhc0NvbmZpZyA9ICQuZXh0ZW5kKGRlZiwgb2JqKSBhcyBDYW52YXNDb25maWc7XHJcbiAgICBjb25zdCBjaGVja0F0dHJpYnV0ZSAgICA9IChhdHRyTmFtZToga2V5b2YgQ2FudmFzQ29uZmlnLCBwYXJ0QToga2V5b2YgQ2FudmFzQ29uZmlnLCBwYXJ0Qjoga2V5b2YgQ2FudmFzQ29uZmlnKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXNbYXR0ck5hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXNbYXR0ck5hbWVdO1xyXG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZVsxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZSBhcyBWZWN0b3IyZi54O1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZSBhcyBWZWN0b3IyZi55O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tBdHRyaWJ1dGUoXCJzaXplXCIsIFwid2lkdGhcIiwgXCJzaXplXCIpO1xyXG4gICAgY2hlY2tBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInhcIiwgXCJ5XCIpO1xyXG5cclxuICAgIGlmIChyZXMuY2VudGVyKSB7XHJcbiAgICAgICAgcmVzLnggLT0gcmVzLndpZHRoID4+IDE7XHJcbiAgICAgICAgcmVzLnkgLT0gcmVzLmhlaWdodCA+PiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUG9zQW5kU2l6ZShvYmo6IENhbnZhc0NvbmZpZywgbmFtZTogc3RyaW5nKTogQ2FudmFzQ29uZmlnIHtcclxuXHJcbiAgICBpZiAoKHR5cGVvZiBvYmoueCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLnkgPT09IFwidW5kZWZpbmVkXCIpICYmIHR5cGVvZiBvYmoucG9zaXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTVNHX1RSWV9EUkFXX1dJVEhPVVRfUE9TSVRJT046IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqLndpZHRoID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBvYmouaGVpZ2h0ID09PSBcInVuZGVmaW5lZFwiKSAmJiB0eXBlb2Ygb2JqLnNpemUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTVNHX1RSWV9EUkFXX1dJVEhPVVRfU0laRTogXCIgKyBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLndpZHRoIDw9IDAgfHwgb2JqLmhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIX05FR19QT1NJVElPTjogXCIgKyBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5pdERlZihvYmopO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBkb0FyYyhvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHJlbWFrZVBvc0FuZFNpemUoY2hlY2tQb3NBbmRTaXplKG9iaiwgXCJBcmNcIiksIG9iaik7XHJcblxyXG4gICAgICAgIHJlcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuY3R4LmVsbGlwc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXMuY3R4LmVsbGlwc2UocmVzLnggKyAocmVzLndpZHRoID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLnkgKyAocmVzLmhlaWdodCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCA+PiAxLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCA+PiAxLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIHJlcy5zdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgcmVzLmVuZEFuZ2xlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuY3R4LnJlY3QocmVzLnggKyAocmVzLndpZHRoID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLnkgKyAocmVzLmhlaWdodCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCA+PiAxLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCA+PiAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb2Nlc3MocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRvUmVjdChvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IGNoZWNrUG9zQW5kU2l6ZShvYmosIFwiUmVjdFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmoucmFkaXVzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4ob2JqLnJhZGl1cykpIHtcclxuICAgICAgICAgICAgICAgIG9iai5yYWRpdXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmw6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYnI6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGw6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHI6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGVmLnJhZGl1cyBhcyBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmLnJhZGl1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5yYWRpdXNba2V5XSA9IG9iai5yYWRpdXNba2V5XSB8fCAoZGVmLnJhZGl1cyBhcyBhbnkpW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSByZW1ha2VQb3NBbmRTaXplKGRlZiwgb2JqKTtcclxuXHJcbiAgICAgICAgcmVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICByZXMuY3R4Lm1vdmVUbyhyZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkudGwsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIHJlcy53aWR0aCAtIChyZXMucmFkaXVzIGFzIGFueSkudHIsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55LCByZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRyKTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyByZXMuaGVpZ2h0IC0gKHJlcy5yYWRpdXMgYXMgYW55KS5icik7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSArIHJlcy5oZWlnaHQsIHJlcy54ICsgcmVzLndpZHRoIC0gKHJlcy5yYWRpdXMgYXMgYW55KS5iciwgcmVzLnkgKyByZXMuaGVpZ2h0KTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkuYmwsIHJlcy55ICsgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54LCByZXMueSArIHJlcy5oZWlnaHQsIHJlcy54LCByZXMueSArIHJlcy5oZWlnaHQgLSAocmVzLnJhZGl1cyBhcyBhbnkpLmJsKTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCwgcmVzLnkgKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsKTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLngsIHJlcy55LCByZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkudGwsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBwcm9jZXNzKHJlcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgTWlzY1ZhbGlkYXRvcnMgZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWlzYy12YWxpZGF0b3JzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9yc30gaW5zdGVhZFxyXG4gKiBUT0RPOiBtb3ZlIHRoaXMgdG8gdmFsaWRhdG9yc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoZWNrZXJzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGdW5jdGlvbiA9IE1pc2NWYWxpZGF0b3JzLmlzRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1N0cmluZyA9IE1pc2NWYWxpZGF0b3JzLmlzU3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNPYmplY3QgPSBNaXNjVmFsaWRhdG9ycy5pc09iamVjdDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTnVtYmVyID0gTWlzY1ZhbGlkYXRvcnMuaXNOdW1iZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0Jvb2xlYW4gPSBNaXNjVmFsaWRhdG9ycy5pc0Jvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0FycmF5ID0gTWlzY1ZhbGlkYXRvcnMuaXNBcnJheTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRW1wdHkgPSBNaXNjVmFsaWRhdG9ycy5pc0VtcHR5O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbnQgPSBNaXNjVmFsaWRhdG9ycy5pc0ludDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRmxvYXQgPSBNaXNjVmFsaWRhdG9ycy5pc0Zsb2F0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNVbmRlZmluZWQgPSBNaXNjVmFsaWRhdG9ycy5pc1VuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRWxlbWVudCA9IE1pc2NWYWxpZGF0b3JzLmlzRWxlbWVudDtcclxufVxyXG4iLCIvLyBUT0RPOiBuZWVkIHRvIGJlIGNoZWNrZWQgaWYgYXBwIGlzIHJ1bm5pbmcgaW4gYnJvd3NlclxyXG5cclxubGV0IGxvY2FsQ29udGV4dDogRG9jdW1lbnQgfCBudWxsID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbUdldCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBkb2N1bWVudCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q29udGV4dChjb250ZXh0OiBEb2N1bWVudCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZSBuYW1lIG9mIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBjb2xsZWN0aW9uIG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxpbmsgbmFtZSBvZiBsaW5rXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5TGluayhsaW5rOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBba2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXT4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoYGFbYXR0cj1cIiR7bGlua31cIl1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWQgc2VhcmNoZWQgSURcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIGZvdW5kIGVsZW1lbnQgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5SWQoaWQ6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBlbGVtZW50cyBuYW1lXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5TmFtZShuYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlOYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0YWdOYW1lIGVsZW1lbnRzIHRhZ05hbWVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlUYWcodGFnTmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IE5vZGVMaXN0T2Y8RWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIGFzIGFueTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBFbmNvZGluZ3Mge1xyXG4gICAgLypcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVRGOCAgICA9IFwidXRmOFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVVEYxNiAgID0gXCJ1dGYxNlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVTklDT0RFID0gXCJ1bmljb2RlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFTQ0lJICAgPSBcImFzY2lpXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVDUzIgICAgPSBcInVjczJcIjtcclxuICAgICovXHJcbiAgICBVVEY4ICAgID0gXCJ1dGY4XCIsXHJcbiAgICBVVEYxNiAgID0gXCJ1dGYxNlwiLFxyXG4gICAgVU5JQ09ERSA9IFwidW5pY29kZVwiLFxyXG4gICAgQVNDSUkgICA9IFwiYXNjaWlcIixcclxuICAgIFVDUzIgICAgPSBcInVjczJcIixcclxufVxyXG4iLCJleHBvcnQgZW51bSBGaWxlVHlwZXMge1xyXG4gICAgQ1NTICA9IFwidGV4dC9jc3NcIixcclxuICAgIEhUTUwgPSBcInRleHQvaHRtbFwiLFxyXG4gICAgSlMgICA9IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiLFxyXG4gICAgTVAzICA9IFwiYXVkaW8vbXBlZ1wiLFxyXG4gICAgTVA0ICA9IFwidmlkZW8vbXA0XCIsXHJcbiAgICBPR0cgID0gXCJhcHBsaWNhdGlvbi9vZ2dcIixcclxuICAgIE9HViAgPSBcInZpZGVvL29nZ1wiLFxyXG4gICAgT0dBICA9IFwiYXVkaW8vb2dnXCIsXHJcbiAgICBUWFQgID0gXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICBXQVYgID0gXCJhdWRpby94LXdhdlwiLFxyXG4gICAgV0VCTSA9IFwidmlkZW8vd2VibVwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEh0dHBTdGF0dXNDb2RlcyB7XHJcbiAgICBDT05USU5VRSAgICAgICAgICAgICAgICAgICAgICAgID0gMTAwLFxyXG4gICAgU1dJVENISU5HX1BST1RPQ09MUyAgICAgICAgICAgICA9IDEwMSxcclxuICAgIE9LICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDAsXHJcbiAgICBDUkVBVEVEICAgICAgICAgICAgICAgICAgICAgICAgID0gMjAxLFxyXG4gICAgQUNDRVBURUQgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMixcclxuICAgIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OICAgPSAyMDMsXHJcbiAgICBOT19DT05URU5UICAgICAgICAgICAgICAgICAgICAgID0gMjA0LFxyXG4gICAgUkVTRVRfQ09OVEVOVCAgICAgICAgICAgICAgICAgICA9IDIwNSxcclxuICAgIFBBUlRJQUxfQ09OVEVOVCAgICAgICAgICAgICAgICAgPSAyMDYsXHJcbiAgICBNVUxUSVBMRV9DSE9JQ0VTICAgICAgICAgICAgICAgID0gMzAwLFxyXG4gICAgTU9WRURfUEVSTUFORU5UTFkgICAgICAgICAgICAgICA9IDMwMSxcclxuICAgIEZPVU5EICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAzMDIsXHJcbiAgICBTRUVfT1RIRVIgICAgICAgICAgICAgICAgICAgICAgID0gMzAzLFxyXG4gICAgTk9UX01PRElGSUVEICAgICAgICAgICAgICAgICAgICA9IDMwNCxcclxuICAgIFVTRV9QUk9YWSAgICAgICAgICAgICAgICAgICAgICAgPSAzMDUsXHJcbiAgICBURU1QT1JBUllfUkVESVJFQ1QgICAgICAgICAgICAgID0gMzA3LFxyXG4gICAgQkFEX1JFUVVFU1QgICAgICAgICAgICAgICAgICAgICA9IDQwMCxcclxuICAgIFVOQVVUSE9SSVpFRCAgICAgICAgICAgICAgICAgICAgPSA0MDEsXHJcbiAgICBQQVlNRU5UX1JFUVVJUkVEICAgICAgICAgICAgICAgID0gNDAyLFxyXG4gICAgRk9SQklEREVOICAgICAgICAgICAgICAgICAgICAgICA9IDQwMyxcclxuICAgIE5PVF9GT1VORCAgICAgICAgICAgICAgICAgICAgICAgPSA0MDQsXHJcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQgICAgICAgICAgICAgID0gNDA1LFxyXG4gICAgTk9UX0FDQ0VQVEFCTEUgICAgICAgICAgICAgICAgICA9IDQwNixcclxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEICAgPSA0MDcsXHJcbiAgICBSRVFVRVNUX1RJTUVPVVQgICAgICAgICAgICAgICAgID0gNDA4LFxyXG4gICAgQ09ORkxJQ1QgICAgICAgICAgICAgICAgICAgICAgICA9IDQwOSxcclxuICAgIEdPTkUgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSA0MTAsXHJcbiAgICBMRU5HVEhfUkVRVUlSRUQgICAgICAgICAgICAgICAgID0gNDExLFxyXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRCAgICAgICAgICAgICA9IDQxMixcclxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSAgICAgICAgPSA0MTMsXHJcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyAgICAgICAgICAgID0gNDE0LFxyXG4gICAgVU5TVVBQT1JURURfTUVESUFfVFlQRSAgICAgICAgICA9IDQxNSxcclxuICAgIFJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSA0MTYsXHJcbiAgICBFWFBFQ1RBVElPTl9GQUlMRUQgICAgICAgICAgICAgID0gNDE3LFxyXG4gICAgVU5QUk9DRVNTQUJMRV9FTlRJVFkgICAgICAgICAgICA9IDQyMixcclxuICAgIFRPT19NQU5ZX1JFUVVFU1RTICAgICAgICAgICAgICAgPSA0MjksXHJcbiAgICBJTlRFUk5BTF9TRVJWRVJfRVJST1IgICAgICAgICAgID0gNTAwLFxyXG4gICAgTk9UX0lNUExFTUVOVEVEICAgICAgICAgICAgICAgICA9IDUwMSxcclxuICAgIEJBRF9HQVRFV0FZICAgICAgICAgICAgICAgICAgICAgPSA1MDIsXHJcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFICAgICAgICAgICAgID0gNTAzLFxyXG4gICAgR0FURVdBWV9USU1FT1VUICAgICAgICAgICAgICAgICA9IDUwNCxcclxuICAgIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEICAgICAgPSA1MDUsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gS2V5cyB7XHJcbiAgICBBUlJPV19VUCAgICA9IFwiQXJyb3dVcFwiLFxyXG4gICAgQVJST1dfRE9XTiAgPSBcIkFycm93RG93blwiLFxyXG4gICAgQVJST1dfTEVGVCAgPSBcIkFycm93TGVmdFwiLFxyXG4gICAgQVJST1dfUklHSFQgPSBcIkFycm93UmlnaHRcIixcclxuICAgIERFTEVURSAgICAgID0gXCJEZWxldGVcIixcclxuICAgIENPTlRST0wgICAgID0gXCJDb250cm9sTGVmdFwiLFxyXG4gICAgU0hJRlQgICAgICAgPSBcIlNoaWZ0TGVmdFwiLFxyXG4gICAgUEFHRV9VUCAgICAgPSBcIlBhZ2VVcFwiLFxyXG4gICAgUEFHRV9ET1dOICAgPSBcIlBhZ2VEb3duXCIsXHJcbiAgICBFU0NBUEUgICAgICA9IFwiRXNjYXBlXCIsXHJcbiAgICBXICAgICAgICAgICA9IFwiS2V5V1wiLFxyXG4gICAgRiAgICAgICAgICAgPSBcIktleUZcIixcclxuICAgIEEgICAgICAgICAgID0gXCJLZXlBXCIsXHJcbiAgICBQICAgICAgICAgICA9IFwiS2V5UFwiLFxyXG4gICAgUyAgICAgICAgICAgPSBcIktleVNcIixcclxuICAgIEQgICAgICAgICAgID0gXCJLZXlEXCIsXHJcbiAgICBSICAgICAgICAgICA9IFwiS2V5UlwiLFxyXG5cclxuICAgIERJR0lUXzEgICAgICAgICAgID0gXCJEaWdpdDFcIixcclxuICAgIERJR0lUXzIgICAgICAgICAgID0gXCJEaWdpdDJcIixcclxuICAgIERJR0lUXzMgICAgICAgICAgID0gXCJEaWdpdDNcIixcclxuICAgIERJR0lUXzQgICAgICAgICAgID0gXCJEaWdpdDRcIixcclxuICAgIERJR0lUXzUgICAgICAgICAgID0gXCJEaWdpdDVcIixcclxuICAgIERJR0lUXzYgICAgICAgICAgID0gXCJEaWdpdDZcIixcclxuICAgIERJR0lUXzcgICAgICAgICAgID0gXCJEaWdpdDdcIixcclxuICAgIERJR0lUXzggICAgICAgICAgID0gXCJEaWdpdDhcIixcclxuICAgIERJR0lUXzkgICAgICAgICAgID0gXCJEaWdpdDlcIixcclxuICAgIERJR0lUXzAgICAgICAgICAgID0gXCJEaWdpdDBcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleXNPbGQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTlRFUiAgICAgICA9IDEzO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUIgICAgICAgICA9IDk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgICAgICAgICAgID0gODc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEEgICAgICAgICAgID0gNjU7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFMgICAgICAgICAgID0gODM7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEQgICAgICAgICAgID0gNjg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFEgICAgICAgICAgID0gODE7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEUgICAgICAgICAgID0gNjk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEYgICAgICAgICAgID0gNzA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExDT05UUk9MICAgID0gMTc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVTQ0FQRSAgICAgID0gMjc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExBTFQgICAgICAgID0gMTg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExTSElGVCAgICAgID0gMTY7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNQQUNFICAgICAgID0gMzI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX1VQICAgID0gMzg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX0RPV04gID0gNDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX1JJR0hUID0gMzk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX0xFRlQgID0gMzc7XHJcbn1cclxuIiwiZnVuY3Rpb24gZ2V0VGV4dCh0ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0ID8gYDogJHt0ZXh0fWAgOiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90QnJvd3NlckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYEFwcCBpcyBub3QgcnVubmluZyBpbiBicm93c2VyJHtnZXRUZXh0KHRleHQpfSFgKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE5vdEJyb3dzZXJFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9HVXRpbHNcIjtcclxuXHJcbiIsImNvbnN0IHByb2Nlc3MgPSAoXHJcbiAgICBvcDogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsXHJcbiAgICBhcmcyPzogbnVtYmVyLFxyXG4pOiB2b2lkID0+IHtcclxuICAgIGlmICh0eXBlb2YgYXJnMiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIG9wKGFyZzEgYXMgbnVtYmVyLCBhcmcyKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZzEgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBvcChhcmcxLCBhcmcxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3AoYXJnMS54LCBhcmcxLnkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGlzIHVzZWQgZm9yIGhvbGRpbmcgMiBudW1lcmljIHZhbHVlcyBhbmQgbWFuaXB1bGF0aW9uIHdpdGggdGhlbVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjJmIHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIFggdmFsdWUgb2YgdmVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB5ID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoZSBZIHZhbHVlIG9mIHZlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeCA9IDA7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gc2V0IHZlY3RvcnMgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyBjcmVhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBhZGQgdmFsdWVzIGludG8gY3VycmVudCB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHVwZGF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0geDtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gZGl2aWRlIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpdihhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54IC89IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAvPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIG11bHRpcGx5IGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIG11bChhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHN1YnRyYWN0IHZhbHVlcyBmcm9tIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN1YihhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIEFqYXhQYXJhbXMge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIG9uUmVzcG9uc2U6IChkYXRhOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59XHJcblxyXG5jbGFzcyBBamF4V3JhcHBlciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhamF4SGFuZGxlcjogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9OiBBamF4UGFyYW1zKTogQWpheFdyYXBwZXIge1xyXG4gICAgY29uc3QgcmVxdWVzdCAgICAgICAgICAgICAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCB8fCByZXF1ZXN0LnN0YXR1cyA9PT0gMjAxKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG9uUmVzcG9uc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvblJlc3BvbnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpLmZvckVhY2goKGVudHJ5KSA9PiByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoZW50cnlbMF0sIGVudHJ5WzFdKSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBamF4V3JhcHBlcihyZXF1ZXN0KTtcclxufVxyXG4iLCJjb25zdCBGSUxFX1NJWkVfVU5JVFMgICAgICA9IFtcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiLCBcIlBCXCIsIFwiRUJcIiwgXCJaQlwiLCBcIllCXCJdO1xyXG5jb25zdCBGSUxFX1NJWkVfVU5JVFNfTE9ORyA9IFtcIkJ5dGVzXCIsIFwiS2lsb2J5dGVzXCIsIFwiTWVnYWJ5dGVzXCIsIFwiR2lnYWJ5dGVzXCIsIFwiUGV0dGFieXRlc1wiLCBcIkV4YWJ5dGVzXCIsIFwiWmV0dGFieXRlc1wiLCBcIllvdHRhYnl0ZXNcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RmlsZVNpemUoc2l6ZUluQnl0ZXM6IG51bWJlciwgbG9uZ0Zvcm0gPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB1bml0cyA9IGxvbmdGb3JtXHJcbiAgICAgICAgPyBGSUxFX1NJWkVfVU5JVFNfTE9OR1xyXG4gICAgICAgIDogRklMRV9TSVpFX1VOSVRTO1xyXG5cclxuICAgIGxldCBwb3dlciA9IE1hdGgucm91bmQoTWF0aC5sb2coc2l6ZUluQnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpO1xyXG4gICAgcG93ZXIgICAgID0gTWF0aC5taW4ocG93ZXIsIHVuaXRzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIGNvbnN0IHNpemUgICAgICAgICAgPSBzaXplSW5CeXRlcyAvIE1hdGgucG93KDEwMjQsIHBvd2VyKTsgLy8gc2l6ZSBpbiBuZXcgdW5pdHNcclxuICAgIGNvbnN0IGZvcm1hdHRlZFNpemUgPSBNYXRoLnJvdW5kKHNpemUgKiAxMDApIC8gMTAwOyAvLyBrZWVwIHVwIHRvIDIgZGVjaW1hbHNcclxuICAgIGNvbnN0IHVuaXQgICAgICAgICAgPSB1bml0c1twb3dlcl07XHJcblxyXG4gICAgcmV0dXJuIHNpemUgPyBgJHtmb3JtYXR0ZWRTaXplfSAke3VuaXR9YCA6IFwiMFwiO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3Nsb3Zhay1zdGVtbWVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FqYXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmlsZS1zaXplLWZvcm1hdHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydW50aW1lLXZhbGlkYXRvcnNcIjtcclxuIiwiZXhwb3J0IGNvbnN0IGdldEFzU3RyaW5nID0gKGtleTogYW55KTogc3RyaW5nID0+IHtcclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSB3aXRoIHZhbHVlICR7a2V5fSBpcyBub3QgYSBzdHJpbmdgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0QXNOdW1iZXIgPSAoa2V5OiBhbnkpOiBudW1iZXIgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhcmlhYmxlIHdpdGggdmFsdWUgJHtrZXl9IGlzIG5vdCBhIG51bWJlcmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn07XHJcbiIsImZ1bmN0aW9uIHJlbW92ZVByZWRwb25hKGNoYXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoY2hhci5sZW5ndGggPiA2ICYmIGNoYXIuc3RhcnRzV2l0aChcIm5halwiKSkge1xyXG4gICAgICAgIHJldHVybiBjaGFyLnN1YnN0cigzLCBjaGFyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNoYXI7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5mdW5jdGlvbiByZW1vdmVDYXNlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxlbiA9IGtleS5sZW5ndGg7XHJcbiAgICBpZiAobGVuID4gOSAmJiBrZXkuZW5kc1dpdGgoXCJlasWhaWVob1wiKVxyXG4gICAgICAgIHx8IGtleS5lbmRzV2l0aChcImVqxaFpZW11XCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDggJiYgKGtleS5lbmRzV2l0aChcImVqxaHDrWNoXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jb2NoXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFocOtbWlcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNhbWlcIikpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDcgJiYgKGtleS5lbmRzV2l0aChcImVqxaFpYVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImF0YW1pXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoWNoXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5pZWNcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNvbVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFvbVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrW1cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhZWpcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhb3VcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhaXVcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhaWVcIilcclxuICAgICkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA1KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNiAmJlxyXG4gICAgICAgIChrZXkuZW5kc1dpdGgoXCJlxaVvbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFpW9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92aWFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFjaFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVtdVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlldGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFocOtXCIpIHx8XHJcbiAgICAgICAgICAgIC8vIGdhYm9zXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVuaWVcIikpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDUgJiZcclxuICAgICAgICAoa2V5LmVuZHNXaXRoKFwiaWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInljaFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6lob1wiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtaVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOpbXVcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbXVcIikgfHxcclxuICAgICAgICAgICAgLyprZXkuZW5kc1dpdGgoXCJpaG9cIikgfHwqLyAvLyBWZcS+bWkgbWFsw70gdnBseXZcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61taVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImltaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDoWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71jaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFtaVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDqVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsO9XCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w61cIikgfHwqL1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdmlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZcWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw610ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO9bWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5bWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhbVwiKSB8fFxyXG4gICAgICAgICAgICAvKmtleS5lbmRzV2l0aChcImF0w6FcIikgfHwqL1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYWNcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbGFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImltZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvY2hcIilcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDQgJiZcclxuICAgICAgICAoLyprZXkuZW5kc1dpdGgoXCLDrW5cIikgfHwqL1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrW1cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDoW1cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ1c1wiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO9bVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInltXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3VcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlalwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdlwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpdVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJtdVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO6xaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiacWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiacWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO6Y1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlxaFcIikpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDMpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleVtsZW4gLSAxXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwib1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwidVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw7pcIjpcclxuICAgICAgICAgICAgY2FzZSBcInlcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOhXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDqVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw61cIjpcclxuICAgICAgICAgICAgY2FzZSBcIsO9XCI6XHJcbiAgICAgICAgICAgICAgICAvKmNhc2UgXCLDtFwiOiovXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zc2Vzc2l2ZXMoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xyXG4gICAgaWYgKGxlbiA+IDUgJiYgcy5lbmRzV2l0aChcImluXCIpIHx8XHJcbiAgICAgICAgcy5lbmRzV2l0aChcIm92XCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHMuc3Vic3RyKDAsIGxlbiAtIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemUoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xyXG4gICAgLy8gdG90byBwcmF2aWRsbyB6bmnFvnVqZSBGUCBhbGUgenZ5xaF1amUgRk5cclxuICAgIC8qICAgICAgICBpZiAobGVuID4gMSAmJiBzW2xlbiAtIDJdID09IFwiaVwiICYmIHNbbGVuLTFdPT1cImNcIikge1xyXG4gICAgICAgICAgICAgICAgc1tsZW4gLSAyXSA9IHNbbGVuIC0gMV07IC8vIGUqID4gKlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlbiAtIDE7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgc3dpdGNoIChzW2xlbiAtIDFdKSB7XHJcbiAgICAgICAgY2FzZSBcImNcIjogLy8gW2PEjV0gLT4ga1xyXG4gICAgICAgIGNhc2UgXCLEjVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwia1wiKTtcclxuICAgICAgICBjYXNlIFwixL5cIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJsXCIpO1xyXG4gICAgICAgIGNhc2UgXCLFiFwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcIm5cIik7XHJcbiAgICAgICAgY2FzZSBcIsWlXCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwidFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gMyAmJiBzW2xlbiAtIDNdID09PSBcImlcIiAmJiAoc1tsZW4gLSAyXSA9PT0gXCJlXCIgfHwgc1tsZW4gLSAyXSA9PT0gXCJhXCIgfHwgc1tsZW4gLSAyXSA9PT0gXCJ1XCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuIC0gMykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNbbGVuIC0gMl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPT09IGxlbiAtIDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzW2xlbiAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3Zha1N0ZW1tZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBzdGVtZSh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlbW92ZVBvc3Nlc3NpdmVzKHJlbW92ZUNhc2UocmVtb3ZlUHJlZHBvbmEod29yZCkpKTtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGhleDJyZ2IsIGludDJyZ2IsIHJnYjJoZXgsIHJnYjJpbnQgfSBmcm9tIFwiLi4vdXRpbHMvY29sb3ItdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29sb3JWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmFzc2VydCh2YWx1ZSA+PSAwKTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHZhbHVlIDw9IDI1NSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJMQUNLID0gbmV3IENvbG9yKDAsIDAsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXSElURSA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JBWSAgPSBuZXcgQ29sb3IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFRCAgID0gbmV3IENvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSRUVOID0gbmV3IENvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJMVUUgID0gbmV3IENvbG9yKDAsIDAsIDI1NSk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSByZWQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZ3JlZW46IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYmx1ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBhbHBoYSA9IDI1NSkge1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShyZWQpO1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShncmVlbik7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGJsdWUpO1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShhbHBoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZ2IoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmdiU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt0aGlzLnJlZH0sICR7dGhpcy5ncmVlbn0sICR7dGhpcy5ibHVlfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmdiYSgpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlLCB0aGlzLmFscGhhXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhleCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiByZ2IyaGV4KE1hdGguZmxvb3IodGhpcy5yZWQpLCBNYXRoLmZsb29yKHRoaXMuZ3JlZW4pLCBNYXRoLmZsb29yKHRoaXMuYmx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHJnYjJpbnQodGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tSGV4KGNvbG9yOiBzdHJpbmcpOiBDb2xvciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBoZXgycmdiKGNvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciguLi52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tSW50KGNvbG9yOiBudW1iZXIpOiBDb2xvciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnQycmdiKGNvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvciguLi52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZWQoKTogQ29sb3Ige1xyXG4gICAgICAgIGlmICh0aGlzLnJlZCA+IDEgfHwgdGhpcy5ncmVlbiA+IDEgfHwgdGhpcy5ibHVlID4gMSB8fCB0aGlzLmFscGhhID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMucmVkIC8gMjU1LCB0aGlzLmdyZWVuIC8gMjU1LCB0aGlzLmJsdWUgLyAyNTUsIHRoaXMuYWxwaGEgLyAyNTUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgR2VuZGVyfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHZW5kZXJUeXBlID0gXCJNQU5cIiB8IFwiV09NQU5cIiB8IFwiXCI7XHJcblxyXG5jb25zdCBtYWxlUmVnZXhwICAgPSAvXihtYWxlfG1hbnxtdXp8Ym95fGNobGFwZWN8bSkkL2c7XHJcbmNvbnN0IGZlbWFsZVJlZ2V4cCA9IC9eKGZlbWFsZXx3b21hbnx6ZW5hfGdpcmx8ZGlldmNhfGZ8d3x6KSQvZztcclxuXHJcbmV4cG9ydCBlbnVtIEdlbmRlciB7XHJcbiAgICBNQU4gICA9IFwiTUFOXCIsXHJcbiAgICBXT01BTiA9IFwiV09NQU5cIixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlR2VuZGVyKGdlbmRlcjogc3RyaW5nKTogR2VuZGVyIHwgbnVsbCB7XHJcbiAgICBpZiAoIWdlbmRlcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2VuZGVyTG93ZXJDYXNlID0gZ2VuZGVyLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCLFvlwiLCBcInpcIikucmVwbGFjZShcIsSNXCIsIFwiY1wiKTtcclxuICAgIGlmIChnZW5kZXJMb3dlckNhc2UubWF0Y2gobWFsZVJlZ2V4cCkpIHtcclxuICAgICAgICByZXR1cm4gR2VuZGVyLk1BTjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2VuZGVyTG93ZXJDYXNlLm1hdGNoKGZlbWFsZVJlZ2V4cCkpIHtcclxuICAgICAgICByZXR1cm4gR2VuZGVyLldPTUFOO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBwYXJzZUdlbmRlcn0gYW5kIHtAbGluayBHZW5kZXJ9IGluc3RlYWRcclxuICogQ2xhc3MgaXMgdXNlZCBmb3IgcGFyc2luZyBnZW5kZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHZW5kZXJDbGFzcyB7XHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCBwYXJzZSBzdHJpbmcgYW5kIHJldHVybiBHZW5kZXJUeXBlXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHBhcnNlR2VuZGVyfSBpbnN0ZWFkXHJcbiAgICAgKiBAcGFyYW0gZ2VuZGVyIGdlbmRlciBpbiBhbnkgZm9ybWF0XHJcbiAgICAgKiBAcmV0dXJucyBwYXJzZWQgZ2VuZGVyIGFzIHtAbGluayBHZW5kZXJUeXBlfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlID0gcGFyc2VHZW5kZXI7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE1vZGVsIGlzIGVudW0gYW5kIHBhcnNlclxyXG4gKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2dlbmRlci5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xvci5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90cmFuc2Zvcm1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmFuZ2VcIjtcclxuXHJcbi8vIFRPRE86IENhbm5vdCBpbXBvcnQgY291bnRyaWVzLmRhdGEuanNvblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5pbnRlcmZhY2VcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vY291bnRyaWVzL2NvdW50cnkubW9kZWxcIjtcclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCIuLi9tYXRoXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vY29sb3IubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5nZTxUPiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG1pbjogVCwgcHVibGljIHJlYWRvbmx5IG1heDogVCA9IG1pbikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tKHJhbmdlOiBSYW5nZTxudW1iZXI+KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChyYW5nZS5tYXggLSByYW5nZS5taW4pICsgcmFuZ2UubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tVmVjdG9yKHJhbmdlOiBSYW5nZTxTaW1wbGVWZWN0b3IyPik6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiAocmFuZ2UubWF4LnggLSByYW5nZS5taW4ueCkgKyByYW5nZS5taW4ueCxcclxuICAgICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIChyYW5nZS5tYXgueSAtIHJhbmdlLm1pbi55KSArIHJhbmdlLm1pbi55LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Db2xvcihyYW5nZTogUmFuZ2U8Q29sb3I+LCBtZXRob2QgPSBcInJnYmFcIik6IENvbG9yIHtcclxuICAgICAgICBjb25zdCBtaW4gPSByYW5nZS5taW4ucmdiYTtcclxuICAgICAgICBjb25zdCBtYXggPSByYW5nZS5tYXgucmdiYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIChtYXhbMF0gLSBtaW5bMF0pICsgbWluWzBdLFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogKG1heFsxXSAtIG1pblsxXSkgKyBtaW5bMV0sXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAobWF4WzJdIC0gbWluWzJdKSArIG1pblsyXSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIChtYXhbM10gLSBtaW5bM10pICsgbWluWzNdLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCIuLi9tYXRoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZm9ybSB7XHJcbiAgICByZWFkb25seSBvZmZzZXQ6IFJlYWRvbmx5PFNpbXBsZVZlY3RvcjI+O1xyXG4gICAgcmVhZG9ubHkgc2NhbGU6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvdGF0aW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0VHJhbnNmb3JtKCk6IFRyYW5zZm9ybSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9mZnNldCAgOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZSAgIDogMSxcclxuICAgICAgICByb3RhdGlvbjogMCxcclxuICAgIH07XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogTk9ERSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gVVRJTFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9GaWxlVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NYXRoVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NaXNjVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9PYmplY3RVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL3RpbWUtdXRpbHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2Mvc2xvdmFrLXN0ZW1tZXJcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFdFQiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gRE9NXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZGVwcmVjYXRlZC9DaGVja2Vyc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2RvbS1nZXRcIjtcclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RGaXh0dXJlIH0gZnJvbSBcIi4vYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1hcHBlciB9IGZyb20gXCIuL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGF0YWJhc2VGaXh0dXJlPE9iaiwgT2JqRHRvPiBleHRlbmRzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBsaXN0RHRvOiBPYmpEdG9bXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWxEdG86IE9iakR0bztcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobGlzdDogT2JqW10sIG1hcHBlcjogQWJzdHJhY3RNYXBwZXI8T2JqLCBPYmpEdG8+KSB7XHJcbiAgICAgICAgc3VwZXIobGlzdCk7XHJcbiAgICAgICAgdGhpcy5saXN0RHRvICAgPSBsaXN0Lm1hcChtYXBwZXIubWFwVG9EdG8sIG1hcHBlcik7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxEdG8gPSB0aGlzLmxpc3REdG9bMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWw6IE9iajtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxpc3Q6IE9ialtdKSB7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBsaXN0WzBdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4ge1xyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcFRvRHRvKG9iamVjdDogUGFydGlhbDxPYmo+KTogT2JqRHRvO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBtYXBGcm9tRHRvKG9iamVjdDogUGFydGlhbDxPYmpEdG8+KTogT2JqO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQYWdpbmF0ZU1vZGVsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVRFTVNfUEVSX1BBR0UgPSAxMDtcclxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudCA9IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UsIG9mZnNldCA9IDApIHtcclxuICAgICAgICB0aGlzLmxpbWl0ICA9ICtjb3VudDtcclxuICAgICAgICB0aGlzLm9mZnNldCA9ICtvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShwYWdpbmF0ZT86IFBhZ2luYXRlTW9kZWwpOiBQYWdpbmF0ZU1vZGVsIHtcclxuICAgICAgICBpZiAoIXBhZ2luYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnaW5hdGVNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKFxyXG4gICAgICAgICAgICBpc05hTihwYWdpbmF0ZS5saW1pdCkgPyBQYWdpbmF0ZU1vZGVsLklURU1TX1BFUl9QQUdFIDogcGFnaW5hdGUubGltaXQsXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLm9mZnNldCkgPyAwIDogcGFnaW5hdGUub2Zmc2V0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaG9yaXpvbnRhbC1hbGlnbi50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmVzdGVkLXN0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb3B0aW9uYWwudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2l6ZS5pbnRlcmFmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHQtb3B0aW9ucy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdW5pdC1udW1iZXIudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yYXkyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JheTNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4veHl3aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9taW4tbWF4LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb3VuZC1kYXRhLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVydGljYWwtYWxpZ24udHlwZVwiO1xyXG4iLCJpbXBvcnQgeyBDaGVja2VycyB9IGZyb20gXCIuLi9kb20vZGVwcmVjYXRlZC9DaGVja2Vyc1wiO1xyXG5pbXBvcnQgeyBEb21HZXQgfSBmcm9tIFwiLi4vZG9tL2RvbS1nZXRcIjtcclxuaW1wb3J0IHsgTm90QnJvd3NlckV4Y2VwdGlvbiB9IGZyb20gXCIuLi9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiLi4vbWF0aFwiO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSBcIi4uL3R5cGVzL3NpemUuaW50ZXJhZmFjZVwiO1xyXG5pbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0Q3JlYXRvclBhcmFtcyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhdHRyPzogU3RyaW5nTWFwO1xyXG4gICAgY29udD86IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXTtcclxuICAgIHN0eWxlPzogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvbVV0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyBoZWlnaHQgb2Ygd2luZG93XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgd2luZG93IGhlaWdodCBpbiBwaXhlbHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXaW5kb3dIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgd2lkdGggb2Ygd2luZG93XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgd2luZG93IHdpZHRoIGluIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdpbmRvd1dpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBzZXQsIGFwcGVuZCBvciByZXR1cm5zIHRleHQgb2YgZWxlbWVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHRleHQgLSB0ZXh0IHRvIHB1dCBpbiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gYXBwZW5kIC0gZmxhZyBpZiB0ZXh0IHNob3VsZCBiZSBhcHBlbmQgb3IgcmVwbGFjZSBwcmV2aW91cyB0ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBlbGVtZW50IGdpdmVuIGFzIGlucHV0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdGV4dChlbGVtZW50OiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nLCBhcHBlbmQgPSB0cnVlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGlmIChhcHBlbmQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCArPSB0ZXh0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBzZXQsIGFwcGVuZCBvciByZXR1cm5zIGh0bWwgY29udGVudCBvZiBlbGVtZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gaHRtbCAtIGh0bWwgdG8gcHV0IGluIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBhcHBlbmQgLSBmbGFnIGlmIGh0bWwgc2hvdWxkIGJlIGFwcGVuZCBvciByZXBsYWNlIHByZXZpb3VzIGNvbnRlbnRcclxuICAgICAqIEByZXR1cm5zIGVsZW1lbnQgZ2l2ZW4gYXMgaW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBodG1sKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBodG1sOiBzdHJpbmcgfCBIVE1MRWxlbWVudCwgYXBwZW5kID0gdHJ1ZSk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAoYXBwZW5kKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gaHRtbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChDaGVja2Vycy5pc0VsZW1lbnQoaHRtbCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBodG1sID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB9IGVsc2UgaWYgKENoZWNrZXJzLmlzRWxlbWVudChodG1sKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaHRtbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMsIGFkZCwgcmVtb3ZlIG9yIHRvZ2dsZSBlbGVtZW50cyBjbGFzc2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtIGNsYXNzIG5hbWUgb3IgbGlzdCBvZiBjbGFzcyBuYW1lc1xyXG4gICAgICogQHBhcmFtIGZvcmNlIC0gZmxhZyBpZiBjbGFzcyBzaG91bGQgYmUgdG9nZ2xlZCBmYWxzZVxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiBpZiBmdW5jdGlvbiBpcyB1c2VkIHRvIGNoZWNrIGNsYXNzIHByZXNlbmNlIG90aGVyd2lzZSBlbGVtZW50IGdpdmVuIGFzIGlucHV0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdLCBmb3JjZSA9IGZhbHNlKTogSFRNTEVsZW1lbnQgfCBib29sZWFuIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBEb21VdGlscy5jbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobmFtZVswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZS5zdWJzdHJpbmcoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi1cIjpcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobmFtZS5zdWJzdHJpbmcoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENoZWNrZXJzLmlzQm9vbGVhbihmb3JjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsIGZvcmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gY3JldGUgbmV3IGVsZW1lbnRcclxuICAgICAqXHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpID0+IDxkaXY+PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwiaWRlXCJ9KSA9PiA8ZGl2IGlkPVwiaWRlXCI+PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSwgXCJ0ZXh0XCIpID0+IDxkaXY+dGV4dDwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge30sIFwiPGI+dGV4dDwvYj5cIikgPT4gPGRpdj48Yj50ZXh0PC9iPjwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge30sIFwidGV4dFwiLCB7Y29sb3I6IFwiYmx1ZVwifSkgPT4gPGRpdiBzdHlsZT1cImNvbG9yOiBibHVlO1wiPnRleHQ8L2Rpdj5cclxuICAgICAqXHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KHtuYW1lOiBcImRpdlwifSkgPT4gPGRpdj48L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KHtuYW1lOiBcImRpdlwifSkgPT4gPGRpdj48L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KHtuYW1lOiBcImRpdlwiLCBhdHRyOiB7aWQ6IFwiaWRlXCJ9fSkgPT4gPGRpdiBpZD1cImlkZVwiPjwvZGl2PjtcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtIG5hbWUgb2YgZWxlbWVudCBvciBvYmplY3QgY29udGFpbnMgYWxsIGNvbmZpZ3VyYXRpb25cclxuICAgICAqIEBwYXJhbSBhdHRyIC0gbWFwIG9mIGFsbCBlbGVtZW50IGF0dHJpYnV0ZXNcclxuICAgICAqIEBwYXJhbSBjb250IC0gZWxlbWVudCBjb250ZW50LiBDYW4gYmUgc3RyaW5nLCBlbGVtZW50IG9yIGFycmF5IG9mIGVsZW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gc3R5bGUgLSBzdHlsZXMgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcclxuICAgICAqIEByZXR1cm5zIGNyZWF0ZWQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnQobmFtZTogc3RyaW5nIHwgT2JqZWN0Q3JlYXRvclBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyPzogU3RyaW5nTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnQ/OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU/OiBDU1NTdHlsZURlY2xhcmF0aW9uKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gRG9tVXRpbHMuY3JlYXRlRWxlbWVudChuYW1lLm5hbWUsIG5hbWUuYXR0ciB8fCB7fSwgbmFtZS5jb250IHx8IFwiXCIsIG5hbWUuc3R5bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGF0dHIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dHIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IHN0eWxlW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnQuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRG9tVXRpbHMuaHRtbChlbCwgZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIERvbVV0aWxzLmh0bWwoZWwsIGNvbnQgYXMgc3RyaW5nIHwgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmVtb3ZlIGVsZW1lbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm5zIHJlbW92ZWQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZShlbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIG9iamVjdCB3aXRoIGVsZW1lbnQgcG9zaXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm5zIHBvc2l0aW9uIG9mIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IFNpbXBsZVZlY3RvcjIge1xyXG4gICAgICAgIGxldCB0b3AgID0gMDtcclxuICAgICAgICBsZXQgbGVmdCA9IDA7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcclxuICAgICAgICAgICAgbGVmdCArPSBlbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB9IHdoaWxlIChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogbGVmdCxcclxuICAgICAgICAgICAgeTogdG9wLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIG9yZGVyIG9mIGVsZW1lbnQgYmV0d2VlbiBzaWJsaW5nc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgaW5kZXggb2YgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5kZXhPZihlbGVtZW50OiBFbGVtZW50IHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICB3aGlsZSAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyBvYmplY3Qgd2l0aCBlbGVtZW50IHNpemVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm5zIHNpemUgb2YgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNpemUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBTaXplIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aCA6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZShmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiBTdHJpbmdNYXAge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogU3RyaW5nTWFwID0ge307XHJcbiAgICAgICAgLy8gaWYgZm9ybXMgaXMgbm90IGVsZW1lbnRcclxuICAgICAgICBpZiAoIUNoZWNrZXJzLmlzRWxlbWVudChmb3JtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgZm9ybSBpcyBub3QgZm9ybVxyXG4gICAgICAgIGlmIChmb3JtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJmb3JtXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBhbGwgaW5wdXRzXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBEb21HZXQuYnlUYWcoXCJpbnB1dFwiKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGFsbCB2YWx1ZXMgdG8gcmVzdWx0IG9iamVjdFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZTogRWxlbWVudCA9IGVsZW1lbnRzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgICAgICAgPSBlLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpIGFzIHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL2RlcHJlY2F0ZWQvU3RyaW5nVXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIHdhbGsoZGlyOiBzdHJpbmcsIGRvbmU6IChlcnJvcjogYW55LCBmaWxlcz86IHN0cmluZ1tdKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmcy5yZWFkZGlyKGRpciwgKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uIHwgbnVsbCwgbGlzdDogc3RyaW5nW10pID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwZW5kaW5nOiBudW1iZXIgPSBsaXN0Lmxlbmd0aDtcclxuICAgICAgICBpZiAoIXBlbmRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZmlsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGUgPSBwYXRoLnJlc29sdmUoZGlyLCBmaWxlKTtcclxuICAgICAgICAgICAgZnMuc3RhdChmaWxlLCAoZXJyMTogTm9kZUpTLkVycm5vRXhjZXB0aW9uIHwgbnVsbCwgc3RhdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YWxrKGZpbGUsIChlcnIyOiBhbnksIHJlcz86IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKC4uLnJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmctLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKG51bGwsIHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVV0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2NhbkRpclJlY3Vyc2l2ZShkaXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nW10+KChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMuc3RhdChkaXIsIChlcnIwOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBzdGF0czogZnMuU3RhdHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZGlyICsgXCIgaXMgbm90IGRpcmVjdG9yeVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdhbGsoZGlyLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRmlsZUpTT04odXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBkYXRhOiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIEZpbGVVdGlscy5sb2FkRmlsZSh1cmwsIChlcnIsIGRhdGEpID0+IGNhbGxiYWNrKGVyciwgSlNPTi5wYXJzZShkYXRhKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGUodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBkYXRhOiBzdHJpbmcpID0+IGFueSwgZW5jb2RpbmcgPSBcInV0ZjhcIik6IHZvaWQge1xyXG4gICAgICAgIGZzLnJlYWRGaWxlKHVybCwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVKc29uRmlsZShkYXRhOiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBGaWxlVXRpbHMuc2F2ZUZpbGUoSlNPTi5zdHJpbmdpZnkoZGF0YSksIGZpbGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVGaWxlKGRhdGE6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGZpbGVOYW1lLCBkYXRhLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHN1Y2Nlc3MoXCJUaGUgZmlsZSB3YXMgc2F2ZWQhXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMudW5saW5rKGZpbGVOYW1lLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHN1Y2Nlc3MoXCJUaGUgZmlsZSB3YXMgcmVtb3ZlZCFcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tFeHRlbnNpb24obmFtZTogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBTdHJpbmdVdGlscy5qb2luU2luZ2xlKG5hbWUsIFwiLlwiLCBleHRlbnNpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBhcnJheSA9IFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCB7bmFtZTogXCJKb2FjaGltXCIsIGFnZTogMTV9LCB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICogY29uc3QgY29uZGl0aW9ucyA9IHthZ2U6IDIzLCBuYW1lOiBcIk1vbmljYVwifVxyXG4gKiB3aGVyZShhcnJheSwgY29uZGl0aW9ucyk7IC8vIFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCAge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2hlcmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihhcnJheTogVFtdLCBjb25kaXRpb246IFBhcnRpYWw8VD4pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmRpdGlvbiB8fCB0eXBlb2YgY29uZGl0aW9uICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdICAgICAgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkVudHJpZXMgPSBPYmplY3QuZW50cmllcyhjb25kaXRpb24pO1xyXG5cclxuICAgIGFycmF5LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBjb25zdCBhZGQgPSBjb25kaXRpb25FbnRyaWVzLnNvbWUoKGNvbmRpdGlvbkVudHJ5KSA9PiBlW2NvbmRpdGlvbkVudHJ5WzBdIGFzIGtleW9mIFRdID09PSBjb25kaXRpb25FbnRyeVsxXSk7XHJcbiAgICAgICAgaWYgKGFkZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gc3ViIGFycmF5IGZyb20gYXJyYXlcclxuICpcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc2xpY2V9IGluc3RlYWRcclxuICogQHBhcmFtIGFycmF5IC0gaW5wdXQgYXJyYXlcclxuICogQHBhcmFtIG1pbkluZGV4IC0gc3RhcnQgaW5kZXhcclxuICogQHBhcmFtIG1heEluZGV4IC0gZW5kIGluZGV4XHJcbiAqIEByZXR1cm5zIGZpbmFsIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3ViQXJyYXk8VCA9IGFueT4oYXJyYXk6IFRbXSwgbWluSW5kZXggPSAwLCBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDEpOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XHJcbiAgICBjb25zdCBmaW5hbCAgICAgICA9IGFycmF5Lmxlbmd0aCA8IG1heEluZGV4ID8gYXJyYXkubGVuZ3RoIC0gMSA6IG1heEluZGV4O1xyXG4gICAgZm9yIChsZXQgaSA9IG1pbkluZGV4OyBpIDw9IGZpbmFsOyBpKyspIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBhcnJheVtpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1heGltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWF4aW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWF4fSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF4KGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPiBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1pbmltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWluaW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWlufSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPCBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgc3VtbWFyeSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5zIGF2ZXJhZ2Ugb2YgbnVtZXJpYyBhcnJheSBnaXZlbiBhcyBpbnB1dFxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIGF2ZXJhZ2Ugb2YgYWxsIG51bWJlcnMgaW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmcoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gYXJyYXkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gam9pbiBhcnJheSBieSBkZWxpbWl0ZXIgYW5kIGFwcGVuZCBwcmVmaXggYW5kIHBvc3RmaXhcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBjaGFyYWN0ZXIgdXNlZCBmb3Igam9pbiBlbGVtZW50cyBpbiBhcnJheVxyXG4gKiBAcGFyYW0gcHJlZml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGZpbmFsIHN0cmluZ1xyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGVuZCBvZiBmaW5hbCBzdHJpbmdcclxuICogQHJldHVybnMgZmluYWwgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pbjxUPihhcnJheTogVFtdLCBkZWxpbWl0ZXI6IHN0cmluZywgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBhcnJheSArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGFycmF5LmpvaW4oZGVsaW1pdGVyKSArIHBvc3RmaXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJucyBsYXN0IGVsZW1lbnQgZnJvbSBhcnJheSBvciBudWxsIGlmIGFycmF5IGlzIGVtcHR5LiBJZiBhcmd1bWVudCBpcyBub3QgYXJyYXksIG1ldGhvZCByZXR1cm5zIGFyZ3VtZW50XHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcmV0dXJucyBsYXN0IHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0PFQ+KGFycmF5OiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybnMgcmFuZG9tIGVsZW1lbnQgZnJvbSBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHJldHVybnMgcmFuZG9tIHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JdGVtPFQgPSB1bmtub3duPihhcnJheTogVFtdKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROUmFuZG9tPFQ+KGFyZ3M6IFRbXSwgY291bnQ6IG51bWJlcik6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA8PSBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8VD4oKTtcclxuXHJcbiAgICB3aGlsZSAocmVzdWx0LnNpemUgPD0gY291bnQpIHtcclxuICAgICAgICBjb25zdCByYW5kb21JdGVtID0gZ2V0UmFuZG9tSXRlbTxUPihhcmdzKTtcclxuICAgICAgICBpZiAocmFuZG9tSXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkKHJhbmRvbUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbTxUPihyZXN1bHQpO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybiBjb3B5IG9mIGFycmF5IHdpdGggb25seSBkaXN0aW5jdCBlbGVtZW50c1xyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSB3aXRoIGR1cGxpY2F0ZSBlbGVtZW50c1xyXG4gKiBAcmV0dXJucyB1bmlxdWUgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVW5pcXVlPFQ+KGFycmF5OiBUW10pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0PFQ+KGFycmF5KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lIDIgYXJyYXkgZWFjaCBvdGhlclxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hPdGhlcjxUPihhcnI6IFRbXSwgY2FsbGJhY2s6IChhOiBULCBiOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBhcnIuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlLCBhcnJbal0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vbWF0aC11dGlsc1wiO1xyXG5cclxuY29uc3QgY29sb3JzOiB7IFtjb2xvcjogc3RyaW5nXTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIH0gPSB7XHJcbiAgICBibGFjazogWzAsIDAsIDBdLFxyXG4gICAgd2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcclxuICAgIHJlZCAgOiBbMjU1LCAwLCAwXSxcclxuICAgIGdyZWVuOiBbMCwgMjU1LCAwXSxcclxuICAgIGJsdWUgOiBbMCwgMCwgMjU1XSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwQ29sb3IoXHJcbiAgICBmcm9tQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgdG9Db2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXHJcbiAgICBwcm9ncmVzczogbnVtYmVyLFxyXG4pOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCByZWQgICA9IHByb2dyZXNzICogZnJvbUNvbG9yWzBdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzBdO1xyXG4gICAgY29uc3QgZ3JlZW4gPSBwcm9ncmVzcyAqIGZyb21Db2xvclsxXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclsxXTtcclxuICAgIGNvbnN0IGJsdWUgID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMl0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMl07XHJcbiAgICBjb25zdCBhbHBoYSA9IHByb2dyZXNzICogZnJvbUNvbG9yWzNdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzNdO1xyXG5cbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGNsYW1wKHJlZCwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChncmVlbiwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChibHVlLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGFscGhhLCAwLCAyNTUpLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnBIZXhhQ29sb3IoYTogc3RyaW5nLCBiOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFoID0gK2EucmVwbGFjZShcIiNcIiwgXCIweFwiKTtcclxuICAgIGNvbnN0IGFyID0gYWggPj4gMTY7XHJcbiAgICBjb25zdCBhZyA9IGFoID4+IDggJiAweEZGO1xyXG4gICAgY29uc3QgYWIgPSBhaCAmIDB4RkY7XHJcbiAgICBjb25zdCBiaCA9ICtiLnJlcGxhY2UoXCIjXCIsIFwiMHhcIik7XHJcbiAgICBjb25zdCBiciA9IGJoID4+IDE2O1xyXG4gICAgY29uc3QgYmcgPSBiaCA+PiA4ICYgMHhGRjtcclxuICAgIGNvbnN0IGJiID0gYmggJiAweEZGO1xyXG4gICAgY29uc3QgcnIgPSBhciArIGFtb3VudCAqIChiciAtIGFyKTtcclxuICAgIGNvbnN0IHJnID0gYWcgKyBhbW91bnQgKiAoYmcgLSBhZyk7XHJcbiAgICBjb25zdCByYiA9IGFiICsgYW1vdW50ICogKGJiIC0gYWIpO1xyXG5cclxuICAgIHJldHVybiBcIiNcIiArICgoMSA8PCAyNCkgKyAocnIgPDwgMTYpICsgKHJnIDw8IDgpICsgcmIgfCAwKS50b1N0cmluZygxNikuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgycmdiKGNvbG9yOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMSksIDE2KTtcclxuXHJcbiAgICByZXR1cm4gW251bSA+PiAxNiwgbnVtID4+IDggJiAweDAwRkYsIG51bSAmIDB4MDAwMEZGXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRlQ29sb3IoY29sb3I6IHN0cmluZywgcGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IGhleDJyZ2IoY29sb3IpO1xyXG4gICAgY29uc3QgYW10ID0gTWF0aC5yb3VuZCgyLjU1ICogcGVyY2VudCk7XHJcbiAgICBjb25zdCBSICAgPSBudW1bMF0gKyBhbXQ7XHJcbiAgICBjb25zdCBHICAgPSBudW1bMV0gKyBhbXQ7XHJcbiAgICBjb25zdCBCICAgPSBudW1bMl0gKyBhbXQ7XHJcblxyXG4gICAgcmV0dXJuIHJnYjJoZXgoUiwgRywgQik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IyaGV4KFI6IG51bWJlciwgRzogbnVtYmVyLCBCOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiI1wiICsgKDB4MTAwMDAwMCArIChSIDwgMjU1ID8gUiA8IDEgPyAwIDogUiA6IDI1NSkgKiAweDEwMDAwICtcclxuICAgICAgICAoRyA8IDI1NSA/IEcgPCAxID8gMCA6IEcgOiAyNTUpICogMHgxMDAgK1xyXG4gICAgICAgIChCIDwgMjU1ID8gQiA8IDEgPyAwIDogQiA6IDI1NSkpLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludDJoZXgodmFsOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsdWUgID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFwiMDAwMDAwXCIuc3Vic3RyKDAsIDYgLSB2YWx1ZS5sZW5ndGgpICsgdmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIFwiI1wiICsgcmVzdWx0LnRvVXBwZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnQycmdiKHZhbDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgdmFsID4+IDE2LFxyXG4gICAgICAgIHZhbCA+PiA4ICYgMHhGRixcclxuICAgICAgICB2YWwgJiAweEZGLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJpbnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiMmludChSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSIDw8IDE2IHwgRyA8PCA4ICYgMHhGRkZGIHwgQjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3I6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBpZiAoY29sb3JzW2NvbG9yXSkge1xyXG4gICAgICAgIHJldHVybiBjb2xvcnNbY29sb3JdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhleGFNYXRjaCA9IGNvbG9yLm1hdGNoKC9eIyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvKTtcclxuICAgIGlmIChoZXhhTWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbMV0sIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzJdLCAxNiksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFszXSwgMTYpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmdiYU1hdGggPSBjb2xvci5tYXRjaCgvcmdiYT9cXCgoXFxkezEsM30pICosICooXFxkezEsM30pICosICooXFxkezEsM30pKCAqLCAqXFxkKi4/XFxkKilcXCkvKTtcclxuICAgIGlmIChyZ2JhTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzFdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzJdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzNdLCAxMCksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGFyc2UgY29sb3I6IFwiICsgY29sb3IpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIEFycmF5cyBmcm9tIFwiLi4vYXJyYXktdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIEFycmF5c30gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFycmF5VXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGNvbnN0IGFycmF5ID0gW3tuYW1lOiBcIk1pY2hhZWxcIiwgYWdlOiAyM30sIHtuYW1lOiBcIkpvYWNoaW1cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIkVucmljb1wiLCBhZ2U6IDE1fSwge25hbWU6IFwiTW9uaWNhXCIsIGFnZTogNTl9XVxyXG4gICAgICogY29uc3QgY29uZGl0aW9ucyA9IHthZ2U6IDIzLCBuYW1lOiBcIk1vbmljYVwifVxyXG4gICAgICogd2hlcmUoYXJyYXksIGNvbmRpdGlvbnMpOyAvLyBbe25hbWU6IFwiTWljaGFlbFwiLCBhZ2U6IDIzfSwgIHtuYW1lOiBcIkVucmljb1wiLCBhZ2U6IDE1fSwge25hbWU6IFwiTW9uaWNhXCIsIGFnZTogNTl9XVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHdoZXJlPFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IGFueSB9PihhcnJheTogVFtdLCBjb25kaXRpb246IGFueSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy53aGVyZShhcnJheSwgY29uZGl0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBzdWIgYXJyYXkgZnJvbSBhcnJheVxyXG4gICAgICpcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnNsaWNlfSBpbnN0ZWFkXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBpbnB1dCBhcnJheVxyXG4gICAgICogQHBhcmFtIG1pbkluZGV4IC0gc3RhcnQgaW5kZXhcclxuICAgICAqIEBwYXJhbSBtYXhJbmRleCAtIGVuZCBpbmRleFxyXG4gICAgICogQHJldHVybnMgZmluYWwgYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzdWJBcnJheTxUID0gYW55PihhcnJheTogVFtdLCBtaW5JbmRleCA9IDAsIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5zdWJBcnJheShhcnJheSwgbWluSW5kZXgsIG1heEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybiBtYXhpbWFsIHZhbHVlIGZyb20gbnVtZXJpYyBhcnJheVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICAgICAqIEByZXR1cm5zIG1heGltYWwgbnVtYmVyIGZyb20gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBtYXgoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLm1heChhcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm4gbWluaW1hbCB2YWx1ZSBmcm9tIG51bWVyaWMgYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAgICAgKiBAcmV0dXJucyBtaW5pbWFsIG51bWJlciBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5taW4oYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gICAgICogQHJldHVybnMgc3VtbWFyeSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMuc3VtKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgYXZlcmFnZSBvZiBudW1lcmljIGFycmF5IGdpdmVuIGFzIGlucHV0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gICAgICogQHJldHVybnMgYXZlcmFnZSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGF2ZyhhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMuYXZnKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGpvaW4gYXJyYXkgYnkgZGVsaW1pdGVyIGFuZCBhcHBlbmQgcHJlZml4IGFuZCBwb3N0Zml4XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAgICAgKiBAcGFyYW0gZGVsaW1pdGVyIC0gY2hhcmFjdGVyIHVzZWQgZm9yIGpvaW4gZWxlbWVudHMgaW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBwcmVmaXggLSBzdHJpbmcgYXBwZW5kIGF0IHRoZSBiZWdpbm5pbmcgb2YgZmluYWwgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gcG9zdGZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGVuZCBvZiBmaW5hbCBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIGZpbmFsIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW48VD4oYXJyYXk6IFRbXSwgZGVsaW1pdGVyOiBzdHJpbmcsIHByZWZpeCA9IFwiXCIsIHBvc3RmaXggPSBcIlwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLmpvaW4oYXJyYXksIGRlbGltaXRlciwgcHJlZml4LCBwb3N0Zml4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm5zIGxhc3QgZWxlbWVudCBmcm9tIGFycmF5IG9yIG51bGwgaWYgYXJyYXkgaXMgZW1wdHkuIElmIGFyZ3VtZW50IGlzIG5vdCBhcnJheSwgbWV0aG9kIHJldHVybnMgYXJndW1lbnRcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gICAgICogQHJldHVybnMgbGFzdCB2YWx1ZSBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdDxUID0gYW55PihhcnJheTogVFtdKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXRMYXN0KGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm5zIHJhbmRvbSBlbGVtZW50IGZyb20gYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSB2YWx1ZSBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tPFQgPSBhbnk+KGFycmF5OiBUW10pOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXRSYW5kb21JdGVtKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5SYW5kb208VCA9IGFueT4oYXJyYXk6IFRbXSwgY291bnQ6IG51bWJlcik6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXROUmFuZG9tKGFycmF5LCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcmV0dXJuIGNvcHkgb2YgYXJyYXkgd2l0aCBvbmx5IGRpc3RpbmN0IGVsZW1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgd2l0aCBkdXBsaWNhdGUgZWxlbWVudHNcclxuICAgICAqIEByZXR1cm5zIHVuaXF1ZSBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VVbmlxdWU8VCA9IGFueT4oYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5tYWtlVW5pcXVlKGFycmF5KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBNYXRocyBmcm9tIFwiLi4vbWF0aC11dGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWF0aHN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYXRoVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyByb3VuZFRvRGVjaW1hbHMobnVtOiBudW1iZXIsIGRlY2ltYWxzID0gMiwgdHlwZTogXCJmbG9vclwiIHwgXCJjZWlsXCIgfCBcInJvdW5kXCIgPSBcInJvdW5kXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5yb3VuZFRvRGVjaW1hbHMobnVtLCBkZWNpbWFscywgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYWQobnVtOiBudW1iZXIsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLnBhZChudW0sIHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMuY2xhbXAodmFsdWUsIG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJpbm9taWFsQ29lZmZpY2llbnQobjogbnVtYmVyLCBrOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5iaW5vbWlhbENvZWZmaWNpZW50KG4sIGspO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5sZXJwKGEsIGIsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2cyaSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMubG9nMmkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGFtcChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5sYW1wKG1pbiwgbWF4LCBzY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMucmFuZG9tSW50KG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5yYW5kb20obWluLCBtYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXZlcmFnZShhcmdzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLmF2ZXJhZ2UoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaWZmKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMuZ2V0RGlmZihudW0xLCBudW0yKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQHR5cGVkZWYgIHsoT2JqZWN0KX0gYW55XHJcbiAqL1xyXG5pbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0ICogYXMgTWlzYyBmcm9tIFwiLi4vbWlzYy11dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBOZXRDbGllbnQgZnJvbSBcIi4uL25ldC1jbGllbnQtdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgT2JqZWN0cyBmcm9tIFwiLi4vb2JqZWN0LXV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIFJlZmxlY3Rpb24gZnJvbSBcIi4uL3JlZmxlY3Rpb24tdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2N9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNaXNjVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgY2xhc3MgYnkgbmFtZSBhbmQgbGlzdCBvZiBwYXJhbWV0ZXJzXHJcbiAgICAgKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBjcmVhdGVDbGFzc30gaW5zdGVhZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZVxyXG4gICAgICogQHBhcmFtIGFyZ3MgLSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJcclxuICAgICAqIEByZXR1cm5zIGNyZWF0ZWQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2xhc3MobmFtZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Rpb24uY3JlYXRlQ2xhc3MobmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcGFyc2UgY29va2llc1xyXG4gICAgICogQHBhcmFtIGNvb2tpZXMgLSBjb29rZSB0byBwYXJzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlQ29va2llcyhjb29raWVzOiBzdHJpbmcpOiBTdHJpbmdNYXAge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnBhcnNlQ29va2llcyhjb29raWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCBjaGVjayBpZiBvYmplY3QgaXMgaW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBvYmogLSBzZWFyY2hlZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjb21wYXJlIHdpdGggc2VhcmNoZWQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbjxUPihvYmo6IFQsIC4uLmRhdGE6IFRbXSB8IFtUW11dKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MuaXNJbihvYmosIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHBhcnNlIEpTT04gY29udGVudCB3aXRoIGNvbW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCAtIHN0cmluZ2lmeSBKU09OXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VKU09OV2l0aENvbW1lbnRzKGNvbnRlbnQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MucGFyc2VKU09OV2l0aENvbW1lbnRzKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IHNob3VsZCBhcHBlbmQgY29va2llcyBvciBhZGQgb3B0aW9uIHRvIGFwcGVuZGluZyBpbnN0ZWFkIG9mIHJlcGxhY2UgY29va2llc1xyXG4gICAgLy8gVE9ETzogZXhwaXJlcyBtdXN0IGJlIG9ubHkgaW4gdGhlIGVuZCBvZiBjb29raWVzXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCBkYXlzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb29raWUoY25hbWU6IHN0cmluZywgc291cmNlID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY29va2llIDogXCJcIik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MuZ2V0Q29va2llKGNuYW1lLCBzb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VQYXJhbXMocXVlcnkgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gXCImXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlciA9IFwiPVwiKTogYW55IHtcclxuICAgICAgICByZXR1cm4gTWlzYy5wYXJzZVBhcmFtcyhxdWVyeSwgc2VwYXJhdG9yLCBkZWxpbWl0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByb3VnaFNpemVPZk9iamVjdH0gaW5zdGVhZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvYmplY3QgLSBvYmplY3QgdG8gZGV0ZXJtaW5lIHNpemVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByb3VnaFNpemVPZk9iamVjdChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMucm91Z2hTaXplT2ZPYmplY3Qob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdFRvUXVlcnlQYXJhbXMob2JqOiBTdHJpbmdNYXApOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLm9iamVjdFRvUXVlcnlQYXJhbXMob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgaW5jbHVkZUZpbGV9IGluc3RlYWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZSAtIHBhdGggdG8gZmlsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluY2x1ZGVGaWxlKGZpbGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiBOZXRDbGllbnQuaW5jbHVkZUZpbGUoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnNlcmlhbGl6ZShvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2Uob2JqOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnBhcnNlKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgICAgICByZXR1cm4gTWlzYy5tYXAoc291cmNlLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBPYmplY3RzIGZyb20gXCIuLi9vYmplY3QtdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE9iamVjdHN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHdpdGhvdXQob2JqOiBhbnksIGl0ZW1zOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMud2l0aG91dChvYmosIGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5lc3RlZFByb3BlcnR5KG9iamVjdDogYW55LCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmdldE5lc3RlZFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHlQYXRoLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2l6ZShvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMuc2l6ZShvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNQbGFpbihvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmlzUGxhaW4ob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VGbGF0KGxpc3Q6IGFueVtdLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLm1ha2VGbGF0KGxpc3QsIHByb3BlcnR5UGF0aCwgc2VwYXJhdG9yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDaGVja2VycyBmcm9tIFwiLi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBDaGVja2Vyc30gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0NoZWNrZXJzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNDYW1lbENhc2UgPSBDaGVja2Vycy5pc0NhbWVsQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJDYW1lbENhc2UgPSBDaGVja2Vycy5pc1VwcGVyQ2FtZWxDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNMb3dlckNhbWVsQ2FzZSA9IENoZWNrZXJzLmlzTG93ZXJDYW1lbENhc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0xvd2VyU25ha2VDYXNlID0gQ2hlY2tlcnMuaXNMb3dlclNuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1NuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVGltZUZvcm1hdCA9IENoZWNrZXJzLmlzVGltZUZvcm1hdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIENoZWNrZXJzIGZyb20gXCIuLi9zdHJpbmctY2hlY2tlcnNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5ncyBmcm9tIFwiLi4vc3RyaW5nLXV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBTdHJpbmdzfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5yZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBqb2luKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmpvaW5TdHJpbmcoZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9VcHBlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvVXBwZXJTbmFrZUNhc2UodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlclNuYWtlQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9VcHBlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0NhcGl0YWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50b0NhcGl0YWwodGV4dCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdFBhcnQodGV4dDogc3RyaW5nLCBkaXZpZGVyID0gXCIgXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmdldExhc3RQYXJ0KHRleHQsIGRpdmlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnQodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY291bnQodGV4dCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB0ZXh0IC0gdGV4dCBuZWVkIHRvIGJlIHJlcGVhdFxyXG4gICAgICogQHBhcmFtIGNvdW50IC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICAgICAqIEBkZXByZWNhdGVkIC0gdXNlIHtAbGluayBTdHJpbmcjcmVwZWF0fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGVhdCh0ZXh0OiBzdHJpbmcsIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGVhdChjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUFsbCh0ZXh0LCB3b3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogbmVlZCB0byBiZSBmaXhlZFxyXG4gICAgcHVibGljIHN0YXRpYyB0ZW1wbGF0ZSh0ZXh0OiBzdHJpbmcsIHZhbHVlczogU3RyaW5nTWFwLCBzdGFydCA9IFwie3tcIiwgZW5kID0gXCJ9fVwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50ZW1wbGF0ZSh0ZXh0LCB2YWx1ZXMsIHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRW1wdHlMaW5lcyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUVtcHR5TGluZXMoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBiZXR3ZWVuKHRleHQ6IHN0cmluZywga2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmJldHdlZW4odGV4dCwga2V5MSwga2V5Mik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvY2N1cnJlbmNlcyh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5vY2N1cnJlbmNlcyh0ZXh0LCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmNhcGl0YWxpemUodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0VtcHR5KHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc0VtcHR5KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3dhcENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5zd2FwQ2FzZSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyYW5zZm9ybVRvQmFzaWNGb3JtYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50cmFuc2Zvcm1Ub0Jhc2ljRm9ybWF0KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQ2hlY2tlcnMuaXNWYWxpZEVtYWlsKGVtYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgaXNWYWxpZFBob25lTnVtYmVyfSBpbnN0ZWFkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG51bSAtIHN0cmluZyB0byB2YWxpZGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmFsaWRQaG9uZU51bWJlcihudW06IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBDaGVja2Vycy5pc1ZhbGlkUGhvbmVOdW1iZXIobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFzY2lpQXJyYXkodGV4dDogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmdldEFzY2lpQXJyYXkodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0Jhc2ljRm9ybSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvQmFzaWNGb3JtKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29udGFpbnModGV4dDogc3RyaW5nLCBzdWJzdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmNvbnRhaW5zKHRleHQsIHN1YnN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBqb2luU2luZ2xlKHByZWZpeDogc3RyaW5nLCBkaXZpZGVyOiBzdHJpbmcsIHBvc3RmaXg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3Muam9pblNpbmdsZShwcmVmaXgsIGRpdmlkZXIsIHBvc3RmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bTogc3RyaW5nLCBwcmVmaXggPSBcIis0MjFcIik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bSwgcHJlZml4KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiAoTm9kZSB8IHN0cmluZylbXSB8IE5vZGUgfCBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9uQ2xpY2s/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9uSW5wdXQ/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHN0eWxlcz86IHsgW3N0eWxlIGluIGtleW9mIENTU1N0eWxlRGVjbGFyYXRpb25dPzogQ1NTU3R5bGVEZWNsYXJhdGlvbltzdHlsZV0gfTtcclxuICAgIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxuICAgIGZvcj86IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgYXV0b3BsYXk/OiBib29sZWFuO1xyXG4gICAgaHJlZj86IHN0cmluZztcclxuICAgIGRvd25sb2FkPzogc3RyaW5nO1xyXG4gICAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb1N0cmluZyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCkuam9pbihcIi5cIik7XHJcbiAgICBjb25zdCBpZCAgICAgID0gZWxlbWVudC5pZCA/IFwiI1wiICsgZWxlbWVudC5pZCA6IFwiXCI7XHJcbiAgICBjb25zdCBwYXJlbnQgID0gZWxlbWVudC5wYXJlbnRFbGVtZW50ID8gZWxlbWVudFRvU3RyaW5nKGVsZW1lbnQucGFyZW50RWxlbWVudCkgKyBcIiA+IFwiIDogXCJcIjtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50ICsgZWxlbWVudC5sb2NhbE5hbWUgKyBpZCArIChjbGFzc2VzID8gXCIuXCIgKyBjbGFzc2VzIDogXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgaGVhZGVyU2VsZWN0b3IgPSBcIi5oZWFkZXJcIik6IHsgY2xlYXI6ICgpID0+IHZvaWQgfSB7XHJcbiAgICBsZXQgcG9zMSA9IDA7XHJcbiAgICBsZXQgcG9zMiA9IDA7XHJcbiAgICBsZXQgcG9zMyA9IDA7XHJcbiAgICBsZXQgcG9zNCA9IDA7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudERyYWcgPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3MxICAgICAgICAgICAgICAgPSBwb3MzIC0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczIgICAgICAgICAgICAgICA9IHBvczQgLSBlLmNsaWVudFk7XHJcbiAgICAgICAgcG9zMyAgICAgICAgICAgICAgID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczQgICAgICAgICAgICAgICA9IGUuY2xpZW50WTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCAgPSBlbGVtZW50Lm9mZnNldFRvcCAtIHBvczIgKyBcInB4XCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0IC0gcG9zMSArIFwicHhcIjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZHJhZ01vdXNlRG93biA9IChlOiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHBvczMgICAgICAgICAgICAgICAgICAgPSBlLmNsaWVudFg7XHJcbiAgICAgICAgcG9zNCAgICAgICAgICAgICAgICAgICA9IGUuY2xpZW50WTtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCAgID0gY2xvc2VEcmFnRWxlbWVudDtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gZWxlbWVudERyYWc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXJTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VEcmFnRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCAgID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlSW1hZ2Uob3B0aW9ucz86IEVsZW1lbnRBdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1wiaW1nXCJdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IENyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgb3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTKSB7XHJcbiAgICAgICAgcmVzdWx0LmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3gobGFiZWw6IHN0cmluZywgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkLCBjaGVja2VkID0gZmFsc2UpOiBIVE1MTGFiZWxFbGVtZW50IHtcclxuICAgIGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IENyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICB0eXBlICAgIDogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiBvbkNoYW5nZShpbnB1dEVsZW1lbnQuY2hlY2tlZCksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gQ3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IFwiY2hlY2tib3gtY29udGFpbmVyXCIsXHJcbiAgICAgICAgY2hpbGRyZW4gOiBbbGFiZWwsIGlucHV0RWxlbWVudCwgQ3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJjaGVja21hcmtcIn0pXSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPih0eXBlOiBLLCBvcHRpb25zPzogRWxlbWVudEF0dHJpYnV0ZXMpOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudDxLPih0eXBlKTtcclxuICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGVudHJ5WzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGFzc05hbWVcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5jbGFzc05hbWUgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib25DaGFuZ2VcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib25DbGlja1wiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrZWRcIjpcclxuICAgICAgICAgICAgICAgIChyZXN1bHQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IGVudHJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHlsZXNcIjpcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGVudHJ5WzFdKS5mb3JFYWNoKChzdHlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0eWxlW3N0eWxlRW50cnlbMF0gYXMgYW55XSA9IHN0eWxlRW50cnlbMV0gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoaWxkcmVuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeVsxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwZW5kKC4uLmVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGVuZChlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbnRlbnRcIjpcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShlbnRyeVswXSwgZW50cnlbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUT0RPOiBlbGVtZW50IHJlbWFpbnMgYWZ0ZXIgZGVsZXRpb24gb25NZXNzYWdlIHNjcmVlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9yVXNpbmdEZWZhdWx0SW5wdXQoY29sb3IgPSBcIiMwMDAwMDBcIiwgb25JbnB1dD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgdHlwZSAgICAgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgdmFsdWUgICAgOiBjb2xvcixcclxuICAgICAgICAgICAgb25JbnB1dDogdHlwZW9mIG9uSW5wdXQgPT09IFwiZnVuY3Rpb25cIiA/ICgpID0+IG9uSW5wdXQoaW5wdXQudmFsdWUpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvbkNoYW5nZSA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JDcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4ocGFyZW50OiBIVE1MRWxlbWVudCwgdHlwZTogSywgLi4uY2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdPihgJHt0eXBlfS4ke2NsYXNzZXMuam9pbihcIi5cIil9YCk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQ3JlYXRlRWxlbWVudCh0eXBlLCB7Y2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oXCIgXCIpfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZUFuZEFwcGVuZDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBLLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBnZXRPckNyZWF0ZTxLPihwYXJlbnQsIHR5cGUsIC4uLmNsYXNzZXMpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSYW5kb20gZnJvbSBcIi4vcmFuZG9tLXV0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFkKG51bTogbnVtYmVyLCBzaXplOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcyA9IFwiMDAwMDAwMDAwMDAwMDBcIiArIG51bTtcclxuXHJcbiAgICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGggLSBzaXplKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG9EZWNpbWFscyhudW06IG51bWJlciwgZGVjaW1hbHMgPSAyLCB0eXBlOiBcImZsb29yXCIgfCBcImNlaWxcIiB8IFwicm91bmRcIiA9IFwicm91bmRcIik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBkaXZpZGVyID0gcGFyc2VJbnQoMSArIG5ldyBBcnJheShkZWNpbWFscyArIDEpLmpvaW4oXCIwXCIpLCAxMCk7XHJcblxyXG4gICAgcmV0dXJuIChNYXRoW3R5cGVdKG51bSAqIGRpdmlkZXIpIC8gZGl2aWRlcikudG9GaXhlZChkZWNpbWFscyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoMk51bWJlcnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgeEZpbmFsID0geCA+PSAwID8geCAqIDIgOiAteCAqIDIgLSAxO1xyXG4gICAgY29uc3QgeUZpbmFsID0geSA+PSAwID8geSAqIDIgOiAteSAqIDIgLSAxO1xyXG5cclxuICAgIHJldHVybiAoeEZpbmFsICsgeUZpbmFsKSAqICh4RmluYWwgKyB5RmluYWwgKyAxKSAvIDIgKyB5RmluYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmlub21pYWxDb2VmZmljaWVudChuOiBudW1iZXIsIGs6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgciA9IDE7XHJcbiAgICBpZiAoayA+IG4pIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGQgPSAxOyBkIDw9IGs7IGQrKykge1xyXG4gICAgICAgIHIgKj0gbjtcclxuICAgICAgICBuLS07XHJcbiAgICAgICAgciAvPSBkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGIgKiB2YWwgKyAoMSAtIHZhbCkgKiBhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nMmkodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgciA9IDA7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHdoaWxlICgodmFsdWUgPj49IDEpID4gMCkge1xyXG4gICAgICAgIHIrKztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhbXAobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBjbGFtcCgobWF4IC0gbWluKSAqIHNjYWxlICsgbWluLCBtaW4sIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHJhbmRvbUludEJldHdlZW59IGluc3RlYWQ7XHJcbiAqXHJcbiAqIEBwYXJhbSBtaW4gLSBtaW4gdmFsdWVcclxuICogQHBhcmFtIG1heCAtIG1heCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFJhbmRvbS5yYW5kb21JbnRCZXR3ZWVuKG1pbiwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcmFuZG9tRmxvYXRCZXR3ZWVufSBpbnN0ZWFkO1xyXG4gKlxyXG4gKiBAcGFyYW0gbWluIC0gbWluIHZhbHVlXHJcbiAqIEBwYXJhbSBtYXggLSBtYXggdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSYW5kb20ucmFuZG9tRmxvYXRCZXR3ZWVuKG1pbiwgbWF4KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF2ZXJhZ2UoYXJnczogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJncykge1xyXG4gICAgICAgIHN1bSArPSBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdW0gLyBhcmdzLmxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAmIHZhbHVlIC0gMSkgPT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhudW0xIC0gbnVtMik7XHJcbn1cclxuXHJcbmNvbnN0IHJhdGlvID0gMTgwIC8gTWF0aC5QSTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZXMocmFkaWFuczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiByYWRpYW5zICogcmF0aW87XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RyaW5nTWFwIH0gZnJvbSBcIi4uL3R5cGVzL3N0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICogTWV0aG9kIHBhcnNlIGNvb2tpZXNcclxuICogQHBhcmFtIGNvb2tpZXMgLSBjb29rZSB0byBwYXJzZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llcyhjb29raWVzOiBzdHJpbmcpOiBTdHJpbmdNYXA8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBsaXN0OiBTdHJpbmdNYXA8c3RyaW5nPiA9IHt9O1xyXG4gICAgY29uc3QgZGF0YSAgICAgICAgICAgICAgICAgICAgPSBjb29raWVzID8gY29va2llcy50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiO1wiKSA6IFtdO1xyXG4gICAgZGF0YS5mb3JFYWNoKChjb29raWUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJ0cyAgICAgPSBjb29raWUuc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0UGFydCA9IHBhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKHNoaWZ0UGFydCkge1xyXG4gICAgICAgICAgICBsaXN0W3NoaWZ0UGFydC50cmltKCldID0gZGVjb2RlVVJJKHBhcnRzLmpvaW4oXCI9XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBjaGVjayBpZiBvYmplY3QgaXMgaW4gYXJyYXlcclxuICogQHBhcmFtIG9iaiAtIHNlYXJjaGVkIG9iamVjdFxyXG4gKiBAcGFyYW0gZGF0YSAtIGFycmF5IG9mIG9iamVjdHMgdG8gYmUgY29tcGFyZSB3aXRoIHNlYXJjaGVkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW48VD4ob2JqOiBULCAuLi5kYXRhOiB1bmtub3duW10pOiBib29sZWFuIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFbMF0pKSB7XHJcbiAgICAgICAgaWYgKGRhdGFbMF0uaW5kZXhPZihvYmopID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXRhLmluZGV4T2Yob2JqKSA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHBhcnNlIEpTT04gY29udGVudCB3aXRoIGNvbW1lbnRzXHJcbiAqIEBwYXJhbSBjb250ZW50IC0gc3RyaW5naWZ5IEpTT05cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUpTT05XaXRoQ29tbWVudHM8VD4oY29udGVudDogc3RyaW5nKTogVCB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50LnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csIFwiXCIpKTtcclxufVxyXG5cclxuLy8gVE9ETzogc2hvdWxkIGFwcGVuZCBjb29raWVzIG9yIGFkZCBvcHRpb24gdG8gYXBwZW5kaW5nIGluc3RlYWQgb2YgcmVwbGFjZSBjb29raWVzXHJcbi8vIFRPRE86IGV4cGlyZXMgbXVzdCBiZSBvbmx5IGluIHRoZSBlbmQgb2YgY29va2llc1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sIGRheXM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGNvbnN0IGZpbmFsQ29va2llcyA9IGAke25hbWV9PSR7dmFsdWV9O2V4cGlyZXM9JHtkLnRvVVRDU3RyaW5nKCl9YDtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBmaW5hbENvb2tpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9PSR7dmFsdWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjbmFtZTogc3RyaW5nLCBzb3VyY2UgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jb29raWUgOiBcIlwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgY29uc3QgY2EgICA9IHNvdXJjZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKGxldCBjIG9mIGNhKSB7XHJcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbXM8VD4ocXVlcnkgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9IFwiJlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyID0gXCI9XCIpOiBUIHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHZhcnM6IHN0cmluZ1tdICAgPSBxdWVyeS5zcGxpdChzZXBhcmF0b3IpO1xyXG4gICAgZm9yIChjb25zdCBwYWlyIG9mIHZhcnMpIHtcclxuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYWlyLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZ1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHF1ZXJ5U3RyaW5nW2tleV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XSA9IFtxdWVyeVN0cmluZ1trZXldLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBxdWVyeVN0cmluZyBhcyBUO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9RdWVyeVBhcmFtcyhvYmo6IFN0cmluZ01hcDxzdHJpbmc+KTogc3RyaW5nIHtcclxuICAgIC8vIFRPRE86IGFkZCB1cmwgcHJlZml4XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGZvciAoY29uc3Qgb2JqS2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkob2JqS2V5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gYCR7cmVzdWx0Lmxlbmd0aCA+IDAgPyBcIiZcIiA6IFwiP1wifSR7b2JqS2V5fT0ke29ialtvYmpLZXldfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9ialtrZXldID0gb2JqW2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZTxUPihvYmo6IHN0cmluZyk6IFQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gSlNPTi5wYXJzZShvYmopO1xyXG4gICAgZm9yIChjb25zdCBpIGluIHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KGkpIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiByZXN1bHRbaV0gIT09IFwic3RyaW5nXCIgfHwgIShyZXN1bHRbaV0uaW5kZXhPZihcImZ1bmN0aW9uIChcIikgPT09IDAgfHxcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXS5tYXRjaCgvXlxcKFtfYS16QS1aMC05XSsoICosICpbX2EtekEtWjAtOV0rKSpcXCkgKj0+LykpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxyXG4gICAgICAgICAgICBldmFsKFwicmVzdWx0W2ldID0gXCIgKyByZXN1bHRbaV0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ldID0gZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uOiBhbnkgPSB7fTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5tYXBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25baXRlbS5hdHRyRF0gPSBpdGVtLm1hcEZ1bmN0aW9uKHNvdXJjZVtpdGVtLmF0dHJTXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IGl0ZW0ubWFwRnVuY3Rpb24oc291cmNlW2l0ZW0uYXR0clNdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJEXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgTm90QnJvd3NlckV4Y2VwdGlvbiB9IGZyb20gXCIuLi9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IENyZWF0ZUVsZW1lbnQsIENyZWF0ZUltYWdlIH0gZnJvbSBcIi4vaHRtbC11dGlsc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlKCk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ICAgICAgICAgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgICAgICB0eXBlICAgIDogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgICA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkICA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKENyZWF0ZUltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZWFkZXIucmVzdWx0IGFzIHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xpY2soKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ICAgICAgICAgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgICAgICB0eXBlICAgIDogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoKGV2ZW50LnRhcmdldCBhcyBhbnkpLmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmNsaWNrKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWVudERvd25sb2FkRmlsZSh0ZXh0OiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IENyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcclxuICAgICAgICBocmVmICAgIDogXCJkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCxcIiArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSxcclxuICAgICAgICBkb3dubG9hZDogbmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICBlbGVtZW50LmNsaWNrKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVGaWxlKGZpbGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgaWYgKCFzY3JpcHQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzY3JpcHQuc3JjICAgPSBmaWxlO1xyXG4gICAgc2NyaXB0LnR5cGUgID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgT2JqZWN0RW50cnkgfSBmcm9tIFwiLi4vdHlwZXMvb2JqZWN0LWVudHJ5LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhvdXQ8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihvYmo6IFQsIGl0ZW1zOiAoa2V5b2YgVClbXSk6IE9taXQ8VCwgYW55PiB7XHJcbiAgICByZXR1cm4gZ2V0T2JqZWN0RW50cmllcyhvYmopLmZpbHRlcigoZW50cnkpID0+ICFpdGVtcy5pbmNsdWRlcyhlbnRyeS5rZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZbZW50cnkua2V5XSA9IGVudHJ5LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30gYXMgVCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RFbnRyaWVzPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqOiBUKTogT2JqZWN0RW50cnk8VD5bXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IE9iamVjdEVudHJ5PFQ+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qgb2JqS2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KG9iaktleSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAga2V5ICA6IG9iaktleSxcclxuICAgICAgICAgICAgdmFsdWU6IG9ialtvYmpLZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXN0ZWRQcm9wZXJ0eShvYmplY3Q6IGFueSwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIHNlcGFyYXRvciA9IFwiLlwiKTogYW55IHtcclxuICAgIGNvbnN0IHByb3BlcnR5TGlzdCA9IHByb3BlcnR5UGF0aC5zcGxpdChzZXBhcmF0b3IpO1xyXG5cclxuICAgIHJldHVybiBwcm9wZXJ0eUxpc3QucmVkdWNlKChjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZSwgcHJvcGVydHlOYW1lKSA9PiBjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZSA/IGN1cnJlbnROZXN0ZWRQcm9wZXJ0eVZhbHVlW3Byb3BlcnR5TmFtZV0gOiB1bmRlZmluZWQsIG9iamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROZXN0ZWRQcm9wZXJ0eTxUPihrZXk6IHN0cmluZywgaXRlbTogYW55LCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgbGV0IG9iaiAgICAgICAgPSBpdGVtO1xyXG4gICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoXCIuXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdEtleS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBvYmogPSBvYmpbc3BsaXRLZXlbaV1dO1xyXG4gICAgfVxyXG4gICAgb2JqW3NwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdXSA9IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91Z2hTaXplT2ZPYmplY3Q8VD4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG9iamVjdExpc3QgICAgICAgPSBbXTtcclxuICAgIGNvbnN0IHN0YWNrOiB1bmtub3duW10gPSBbb2JqZWN0XTtcclxuICAgIGxldCBieXRlcyAgICAgICAgICAgICAgPSAwO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSA0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzICs9IHZhbHVlLmxlbmd0aCA8PCAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzICs9IDg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0TGlzdC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgb2JqZWN0TGlzdC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnl0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaXplPFQgZXh0ZW5kcyAoUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmtub3duW10pPihvYmplY3Q6IFQpOiBudW1iZXIge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICByZXN1bHQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW48VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihvYmplY3Q6IFQpOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3QgaW5kZXggaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShpbmRleCkgJiYgdHlwZW9mIG9iamVjdFtpbmRleF0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBsaXN0IC0gbGlzdCB0byBmbGF0XHJcbiAqIEBwYXJhbSBwcm9wZXJ0eVBhdGggLSBwYXRoIHRvIHByb3BlcnR5XHJcbiAqIEBwYXJhbSBzZXBhcmF0b3IgLSBzZXBhcmF0b3IgaW4gcHJvcGVydHlQYXRoXHJcbiAqIEBwYXJhbSBza2lwVW5kZWZpbmVkIC0gdHJ1ZSBpZiB1bmRlZmluZWQgc2hvdWxkIGJlIHNraXBwZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgXHJcbiAqIGNvbnN0IGl0ZW1zID0gW1xyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkdhYnJpZWxcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9LFxyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkVsbGFcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9LFxyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkdhYnJpZWxcIlxyXG4gKiAgICAgICAgfVxyXG4gKiAgICB9LFxyXG4gKiAgICB7XHJcbiAqICAgICAgICBwZXJzb246IHtcclxuICogICAgICAgICAgICBuYW1lOiBcIkpvZVwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH1cclxuICogXVxyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhtYWtlRmxhdChpdGVtcyksIFwicGVyc29uLm5hbWVcIik7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiR2FicmllbFwiLCBcIkpvZVwiXVxyXG4gKiBjb25zb2xlLmxvZyhtYWtlRmxhdChpdGVtcyksIFwicGVyc29uX25hbWVcIiwgXCJfXCIpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkdhYnJpZWxcIiwgXCJKb2VcIl1cclxuICogY29uc29sZS5sb2cobWFrZUZsYXQoaXRlbXMpLCBcInBlcnNvbi5uYW1lXCIsIFwiLlwiLCB0cnVlKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJKb2VcIl1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZsYXQobGlzdDogYW55W10sIHByb3BlcnR5UGF0aDogc3RyaW5nLCBzZXBhcmF0b3IgPSBcIi5cIiwgc2tpcFVuZGVmaW5lZCA9IGZhbHNlKTogYW55IHtcclxuICAgIGNvbnN0IHByb3BlcnR5TGlzdCA9IHByb3BlcnR5UGF0aC5pbmRleE9mKHNlcGFyYXRvcikgPj0gMCA/IHByb3BlcnR5UGF0aC5zcGxpdChzZXBhcmF0b3IpIDogW3Byb3BlcnR5UGF0aF07XHJcblxyXG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnR5TGlzdC5yZWR1Y2UoKHByb3BWYWwsIHByb3BlcnR5TmFtZSkgPT4gcHJvcFZhbCA/IHByb3BWYWxbcHJvcGVydHlOYW1lXSA6IHVuZGVmaW5lZCwgY3Vycik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiAmJiBza2lwVW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjYy5wdXNoKHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tRmxvYXRCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50QmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tRmxvYXRCZXR3ZWVuKG1pbiwgbWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Cb29sZWFuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JdGVtPFQ+KC4uLml0ZW1zOiBUW10pOiBUIHtcclxuICAgIHJldHVybiBpdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtcy5sZW5ndGgpXTtcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlIGNsYXNzIGJ5IG5hbWUgYW5kIGxpc3Qgb2YgcGFyYW1ldGVyc1xyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSAtIGNsYXNzIG5hbWVcclxuICogQHBhcmFtIGFyZ3MgLSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJcclxuICogQHJldHVybnMgY3JlYXRlZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGFzcyhuYW1lOiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgIGNvbnN0IHRlbXAgPSBPYmplY3QuY3JlYXRlKG5hbWUucHJvdG90eXBlKTtcclxuICAgIG5hbWUuYXBwbHkodGVtcCwgYXJncyk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsRmlyc3RGdW5jdGlvbiguLi5mdW5jdGlvbnM6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGZvciAoY29uc3QgZnVuYyBvZiBmdW5jdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZnVuYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBUT0RPOiBUaGlzIGlzIGRlcHJlY2F0ZWQuIE1vdmUgdGhpcyB0byB2YWxpZGF0b3JzXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgTWlzY1ZhbGlkYXRvcnMgZnJvbSBcIi4uL3ZhbGlkYXRvcnMvbWlzYy12YWxpZGF0b3JzXCI7XHJcblxyXG5jb25zdCB0aW1lRm9ybWF0czogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgIEhIICA6IFwiKDJbMC0zXXxbMDFdXFxcXGQpXCIsXHJcbiAgICBIICAgOiBcIigyWzAtM118WzAxXT9cXFxcZClcIixcclxuICAgIG1tICA6IFwiKFswLTVdXFxcXGQpXCIsXHJcbiAgICBtICAgOiBcIihbMC01XT9cXFxcZClcIixcclxuICAgIE1NICA6IFwiKDBcXFxcZHwxWzAtMl18XFxcXGQpXCIsXHJcbiAgICBNICAgOiBcIihbMS05XXwxWzAtMl0pXCIsXHJcbiAgICBzcyAgOiBcIihbMC01XVxcXFxkKVwiLCAvLyBtbVxyXG4gICAgcyAgIDogXCIoWzAtNV0/XFxcXGQpXCIsIC8vIHNzXHJcbiAgICBZWVlZOiBcIihbMS05XVxcXFxkezMsM30pXCIsXHJcbiAgICBZWSAgOiBcIihcXFxcZHsyLDJ9KVwiLFxyXG4gICAgREQgIDogXCIoWzAtM11cXFxcZClcIixcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXltBLVpdP1thLXpdKyhbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW2Etel0rKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlthLXpdKihfW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXltBLVpdKihfW0EtWl0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oW2Etel0qfFtBLVpdKikoX1thLXpBLVpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZUZvcm1hdCh0ZXh0OiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aW1lRm9ybWF0cykge1xyXG4gICAgICAgIGlmICh0aW1lRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGtleSwgdGltZUZvcm1hdHNba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHtmb3JtYXR9JGApLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRQaG9uZU51bWJlcn0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gbnVtIC0gbnVtIHRvIHZhbGlkYXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZFBob25lTnVtYmVyKG51bSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRFbWFpbH0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gZW1haWwgLSBlbWFpbCB0byB2YWxpZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZEVtYWlsKGVtYWlsKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCIuL2FycmF5LXV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIFN0cmluZ0NoZWNrZXJzIGZyb20gXCIuL3N0cmluZy1jaGVja2Vyc1wiO1xyXG5cclxuY29uc3QgYWNjZW50ZWRMb3dlckNoYXJhY3RlcnMgPSBcIsSFw6DDocOkw6LDo8Olw6bEg8SHxI3EicSPxJnDqMOpw6vDqsSdxKXDrMOtw6/DrsS1xYLEvsWExYjDssOzw7bFkcO0w7XDsMO4xZvImcWfxaHFncWlyJvFo8Wtw7nDusO8xbHDu8Oxw7/DvcOnxbzFusW+XCI7XHJcbmNvbnN0IG5vcm1hbExvd2VyQ2hhcmFjdGVycyAgID0gXCJhYWFhYWFhYWFjY2NkZWVlZWVnaGlpaWlqbGxubm9vb29vb29vc3Nzc3N0dHR1dXV1dXVueXljenp6XCI7XHJcbmNvbnN0IGFjY2VudGVkQ2hhcmFjdGVycyAgICAgID0gYWNjZW50ZWRMb3dlckNoYXJhY3RlcnMgKyBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycy50b1VwcGVyQ2FzZSgpO1xyXG5jb25zdCBub3JtYWxDaGFyYWN0ZXJzICAgICAgICA9IG5vcm1hbExvd2VyQ2hhcmFjdGVycyArIG5vcm1hbExvd2VyQ2hhcmFjdGVycy50b1VwcGVyQ2FzZSgpO1xyXG5cclxuLyogVE9ETzpcclxuICAgIHN0YXRpYyB1bmRlcnNjb3JlKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBodW1hbml6ZSh3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGFzaGVyaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIC8vZGFzaENhc2UgPSBhLWItYy1kLWVcclxuICAgIC8vZG90Q2FzZSBhLmMuZC52LnMuZFxyXG4gICAgLy9wYXNjYWxDYXNlID0gRm9vQmFyQmF6XHJcbiAgICAvL3BhdGhDYXNlID0gYS9iL2MvZFxyXG4gICAgLy9zbmFrZUNhc2UgPSBhX2JfY19kX1xyXG4gICAgc3RhdGljIGlzVXBwZXIod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzTG93ZXIod29yZCkge1xyXG4gICAgfVxyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFjY2VudGVkQ2hhcmFjdGVycyh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF3b3JkIHx8ICF3b3JkLnJlcGxhY2UpIHtcclxuICAgICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKC8uL2csIChlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFjY2VudGVkQ2hhcmFjdGVycy5pbmRleE9mKGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IG5vcm1hbENoYXJhY3RlcnNbaW5kZXhdIDogZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9VcHBlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAoaSwgdSwgZSkgPT4gZSA/IFwiX1wiICsgZSA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXy8sIFwiXCIpXHJcbiAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Mb3dlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzTG93ZXJTbmFrZUNhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChpLCB1LCBlKSA9PiBlID8gXCJfXCIgKyBlIDogXCJcIilcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNMb3dlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnRyaW0oKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkoW0EtWl0pL2csIFwiJDEkMl8kM1wiKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAobWF0aCwgc2VwLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogXCJcIilcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoL14uLywgKGUpID0+IGUudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNVcHBlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b0NhcGl0YWwodG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL14uLywgKGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIGNhcGl0YWxpemV9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0NhcGl0YWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL14uLywgKGUpID0+IGUudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0UGFydCh0ZXh0OiBzdHJpbmcsIGRpdmlkZXIgPSBcIiBcIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQuc3BsaXQpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNwbGl0VGV4dCA9IHRleHQuc3BsaXQoZGl2aWRlcik7XHJcblxyXG4gICAgcmV0dXJuIHNwbGl0VGV4dFtzcGxpdFRleHQubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGV4dC5tYXRjaChuZXcgUmVnRXhwKGtleSwgXCJnXCIpKSB8fCBbXSkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHRleHQgLSB0ZXh0IG5lZWQgdG8gYmUgcmVwZWF0XHJcbiAqIEBwYXJhbSBudW1iZXJPZlJlcGV0aXRpb25zIC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICogQGRlcHJlY2F0ZWQgLSB1c2Uge0BsaW5rIFN0cmluZyNyZXBlYXR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHRleHQ6IHN0cmluZywgbnVtYmVyT2ZSZXBldGl0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobnVtYmVyT2ZSZXBldGl0aW9ucyArIDEpLmpvaW4odGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3Jkcy5qb2luKFwifFwiKX0pYCwgXCJnXCIpLCBcIlwiKTtcclxufVxyXG5cclxuLy8gVE9ETzogbmVlZCB0byBiZSBmaXhlZFxyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dDogc3RyaW5nLCB2YWx1ZXM6IFN0cmluZ01hcDxzdHJpbmc+LCBzdGFydCA9IFwie3tcIiwgZW5kID0gXCJ9fVwiKTogc3RyaW5nIHtcclxuICAgIHN0YXJ0ICAgICAgICAgPSBzdGFydC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkL2csIFwiXFxcXCRcIik7XHJcbiAgICBlbmQgICAgICAgICAgID0gZW5kLnJlcGxhY2UoL1stW1xcXSgpKlxcc10vZywgXCJcXFxcJCZcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkL2csIFwiXFxcXCRcIik7XHJcbiAgICBjb25zdCByZWdleHAgID0gbmV3IFJlZ0V4cChgJHtzdGFydH0oLis/KScke2VuZH1gLCBcImdcIik7XHJcbiAgICBjb25zdCBtYXRjaGVzID0gdGV4dC5tYXRjaChyZWdleHApIHx8IFtdO1xyXG5cclxuICAgIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgICA9IG1hdGNoLnN1YnN0cmluZyhzdGFydC5sZW5ndGgsIG1hdGNoLmxlbmd0aCAtIGVuZC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShtYXRjaCwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlMaW5lcyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXlxccyokKD86XFxyXFxuP3xcXG4pL2dtLCBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJldHdlZW4odGV4dDogc3RyaW5nLCBrZXkxOiBzdHJpbmcsIGtleTI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzdGFydFBvcyA9IHRleHQuaW5kZXhPZihrZXkxKTtcclxuICAgIGNvbnN0IGVuZFBvcyAgID0gdGV4dC5pbmRleE9mKGtleTIpO1xyXG4gICAgaWYgKHN0YXJ0UG9zIDwgMCAmJiBlbmRQb3MgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCBlbmRQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbmRQb3MgPCAwICYmIHN0YXJ0UG9zID49IDApIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoc3RhcnRQb3MgKyBrZXkxLmxlbmd0aCwgdGV4dC5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhzdGFydFBvcyArIGtleTEubGVuZ3RoLCBlbmRQb3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2NjdXJyZW5jZXModGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHRleHQubWF0Y2gobmV3IFJlZ0V4cChrZXksIFwiZ1wiKSkgfHwgW10pLmxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlV2hpdGVzcGFjZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW1xcc1xcdUZFRkZcXHhBMF17Mix9L2csIFwiIFwiKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2FwQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFxTL2csIChjaGFyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG93ZXJDYXNlID0gY2hhci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbG93ZXJDYXNlID09PSBjaGFyID8gY2hhci50b1VwcGVyQ2FzZSgpIDogbG93ZXJDYXNlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub0Jhc2ljRm9ybWF0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29sbGFwc2VXaGl0ZXNwYWNlKHJlbW92ZUFjY2VudGVkQ2hhcmFjdGVycyh0ZXh0KS50b0xvd2VyQ2FzZSgpKS50cmltKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBc2NpaUFycmF5KHRoaXNBcmc6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBsZXR0ZXIgb2YgdGhpc0FyZykge1xyXG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGxldHRlci5jaGFyQ29kZUF0KDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0Jhc2ljRm9ybSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHJlbW92ZUFjY2VudGVkQ2hhcmFjdGVycyh0ZXh0LnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnModGV4dDogc3RyaW5nLCBzdWJzdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGV4dCAmJiByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dC50b0xvd2VyQ2FzZSgpKS5pbmRleE9mKHN1YnN0cmluZykgPj0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5TaW5nbGUocHJlZml4OiBzdHJpbmcsIGRpdmlkZXI6IHN0cmluZywgcG9zdGZpeDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChwb3N0Zml4LnN0YXJ0c1dpdGgoZGl2aWRlcikgJiYgcHJlZml4LmVuZHNXaXRoKGRpdmlkZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHBvc3RmaXguc3Vic3RyaW5nKGRpdmlkZXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdGZpeC5zdGFydHNXaXRoKGRpdmlkZXIpIHx8IHByZWZpeC5lbmRzV2l0aChkaXZpZGVyKSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBwb3N0Zml4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmVmaXggKyBkaXZpZGVyICsgcG9zdGZpeDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgam9pbn0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gZGF0YSAtIGRhdGEgdG8gam9pblxyXG4gKiBAcGFyYW0gZGVsaW1pdGVyIC0gZGVsaW1pdGVyXHJcbiAqIEBwYXJhbSBwcmVmaXggLSBwcmVmaXhcclxuICogQHBhcmFtIHBvc3RmaXggLSBwb3N0Zml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pblN0cmluZyhkYXRhOiBzdHJpbmdbXSwgZGVsaW1pdGVyID0gXCIgXCIsIHByZWZpeCA9IFwiXCIsIHBvc3RmaXggPSBcIlwiKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBqb2luKGRhdGEsIGRlbGltaXRlciwgcHJlZml4LCBwb3N0Zml4KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZE51bWJlcihudW06IHN0cmluZywgcHJlZml4ID0gXCIrNDIxXCIpOiBzdHJpbmcge1xyXG4gICAgbnVtID0gbnVtLnJlcGxhY2UoL1soICkvLV0vZywgXCJcIik7XHJcbiAgICBpZiAobnVtLnN0YXJ0c1dpdGgoXCIrXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIjAwXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bS5zdWJzdHJpbmcoMik7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtLnN0YXJ0c1dpdGgoXCIwOVwiKSB8fCBudW0uc3RhcnRzV2l0aChcIjAyXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIG51bS5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnV6enlfbWF0Y2hfc2ltcGxlKHBhdHRlcm46IHN0cmluZywgc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBwYXR0ZXJuSWR4ICAgICAgPSAwO1xyXG4gICAgbGV0IHN0cklkeCAgICAgICAgICA9IDA7XHJcbiAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XHJcbiAgICBjb25zdCBzdHJMZW5ndGggICAgID0gc3RyLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAocGF0dGVybklkeCAhPT0gcGF0dGVybkxlbmd0aCAmJiBzdHJJZHggIT09IHN0ckxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5DaGFyID0gcGF0dGVybi5jaGFyQXQocGF0dGVybklkeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBzdHJDaGFyICAgICA9IHN0ci5jaGFyQXQoc3RySWR4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHBhdHRlcm5DaGFyID09PSBzdHJDaGFyKSB7XHJcbiAgICAgICAgICAgICsrcGF0dGVybklkeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKytzdHJJZHg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdHRlcm5MZW5ndGggIT09IDAgJiYgc3RyTGVuZ3RoICE9PSAwICYmIHBhdHRlcm5JZHggPT09IHBhdHRlcm5MZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRm9yQWxsKGNvbnRlbnQ6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSwgcGxhY2VIb2xkZXI6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gY29udGVudC5yZXBsYWNlKHBsYWNlSG9sZGVyLCB2YWx1ZSkpO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgaW50ZXJ2YWxzOiBTdHJpbmdNYXA8bnVtYmVyPiA9IHtcclxuICAgIFwieWVhclwiICA6IDMxNTM2MDAwLFxyXG4gICAgXCJtb250aFwiIDogMjU5MjAwMCxcclxuICAgIFwid2Vla1wiICA6IDYwNDgwMCxcclxuICAgIFwiZGF5XCIgICA6IDg2NDAwLFxyXG4gICAgXCJob3VyXCIgIDogMzYwMCxcclxuICAgIFwibWludXRlXCI6IDYwLFxyXG4gICAgXCJzZWNvbmRcIjogMSxcclxufTtcclxuXHJcbmNvbnN0IGludGVydmFsRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGludGVydmFscyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF0ZUFnbyh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgRGF0ZSk6IG51bWJlciB8IHN0cmluZyB8IERhdGUge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKCtuZXcgRGF0ZSgpIC0gK25ldyBEYXRlKHZhbHVlKSkgLyAxMDAwKTtcclxuICAgICAgICBpZiAoc2Vjb25kcyA8IDI5KSB7IC8vIGxlc3MgdGhhbiAzMCBzZWNvbmRzIGFnbyB3aWxsIHNob3cgYXMgJ0p1c3Qgbm93J1xyXG4gICAgICAgICAgICByZXR1cm4gXCJKdXN0IG5vd1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnRlcjtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGludGVydmFsXSBvZiBpbnRlcnZhbEVudHJpZXMpIHtcclxuICAgICAgICAgICAgY291bnRlciA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIGludGVydmFsKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVyfSAke2tleX0gYWdvYDsgLy8gc2luZ3VsYXIgKDEgZGF5IGFnbylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGAke2NvdW50ZXJ9ICR7a2V5fXMgYWdvYDsgLy8gcGx1cmFsICgyIGRheXMgYWdvKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZTogRGF0ZSwgcGF0dGVybjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKHRpbWU6IG51bWJlcik6IHN0cmluZyA9PiB0aW1lIDwgMTAgPyBcIjBcIiArIHRpbWUgOiBcIlwiICsgdGltZTtcclxuXHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXCIoRER8TU18WVlZWXxZWVl8WVl8SEh8bW18U1MpXCIsIFwiZ1wiKTtcclxuICAgIGNvbnN0IEREICAgID0gdG9TdHJpbmcoZGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgY29uc3QgTU0gICAgPSB0b1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuICAgIGNvbnN0IFlZWVkgID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIjtcclxuICAgIGNvbnN0IFlZWSAgID0gWVlZWS5zdWJzdHIoMSwgNCk7XHJcbiAgICBjb25zdCBZWSAgICA9IFlZWS5zdWJzdHIoMSwgNCk7XHJcbiAgICBjb25zdCBISCAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSk7XHJcbiAgICBjb25zdCBtbSAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIGNvbnN0IFNTICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG5cclxuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UocmVnZXgsIChlKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEREO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU1cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNTTtcclxuICAgICAgICAgICAgY2FzZSBcIllZWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWVlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlZXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWVlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWTtcclxuICAgICAgICAgICAgY2FzZSBcIkhIXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSEg7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtbVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1tO1xyXG4gICAgICAgICAgICBjYXNlIFwiU1NcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9wV2F0Y2goKTogeyBnZXREaWZmTXMoKTogbnVtYmVyOyBnZXREaWZmKCk6IHN0cmluZyB9IHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICBjb25zdCBnZXREaWZmTXMgPSAoKTogbnVtYmVyID0+IERhdGUubm93KCkgLSBzdGFydDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldERpZmZNcyxcclxuICAgICAgICBnZXREaWZmKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXREaWZmTXMoKSArIFwibXNcIjtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlOiBEYXRlLCBvcHQ6IHsgbXM6IG51bWJlciwgczogbnVtYmVyLCBtOiBudW1iZXIsIGg6IG51bWJlciB9KTogRGF0ZSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc05hTihvcHQubXMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHMob3B0Lm1zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LnMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKG9wdC5zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0Lm0pKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKG9wdC5tKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LmgpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhvcHQuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydE9mVGhlRGF5KGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIHJldHVybiBzZXREYXRlKGRhdGUsIHtcclxuICAgICAgICBtczogMCxcclxuICAgICAgICBzIDogMCxcclxuICAgICAgICBtIDogMCxcclxuICAgICAgICBoIDogMCxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kT2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge1xyXG4gICAgICAgIG1zOiA5OTksXHJcbiAgICAgICAgcyA6IDU5LFxyXG4gICAgICAgIG0gOiA1OSxcclxuICAgICAgICBoIDogMjMsXHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9taXNjLXZhbGlkYXRvcnNcIjtcclxuIiwiY29uc3QgdmFsaWRFbWFpbFJlZ2V4ICAgICAgID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbmNvbnN0IHZhbGlkUGhvbmVOdW1iZXJSZWdleCA9IC9eKFsrXXwwMCk/WyhdP1swLTldezMsNH1bKV0/Wy1cXHMuXT9bMC05XXsyLDN9Wy1cXHMuXT9bMC05XXsyLDZ9KFstXFxzLl0/WzAtOV17M30pPyQvaW07XHJcblxyXG5mdW5jdGlvbiB0eXBlT2YoYXJnOiB1bmtub3duKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgYXJnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhhcmc6IGFueSk6IGFyZyBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcInN0cmluZ1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJvYmplY3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGFyZzogYW55KTogYXJnIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oYXJnOiBhbnkpOiBhcmcgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwiYm9vbGVhblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCIgJiYgYXJnICUgMSA9PT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmxvYXQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxICE9PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnPzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwidW5kZWZpbmVkXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChvYmopICYmXHJcbiAgICAgICAgICAgIG9iai5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICBpc09iamVjdChvYmouc3R5bGUpICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5vd25lckRvY3VtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCAvXltcXHNcXHhhMF0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIW51bSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRQaG9uZU51bWJlclJlZ2V4LnRlc3QobnVtLnRyaW0oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZW1haWwudHJpbSgpKTtcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBXRUIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIFVUSUxTXHJcblxyXG5leHBvcnQgeyBBcnJheVV0aWxzIGFzIGFycmF5cyB9IGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlsc1wiO1xyXG5leHBvcnQgeyBNYXRoVXRpbHMgYXMgbWF0aCB9IGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvTWF0aFV0aWxzXCI7XHJcbmV4cG9ydCB7IERvbVV0aWxzIGFzIGRvbSB9IGZyb20gXCIuL3V0aWxzL0RvbVV0aWxzXCI7XHJcbmV4cG9ydCB7IE1pc2NVdGlscyBhcyBtaXNjIH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NaXNjVXRpbHNcIjtcclxuZXhwb3J0IHsgT2JqZWN0VXRpbHMgYXMgb2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9PYmplY3RVdGlsc1wiO1xyXG5leHBvcnQgeyBTdHJpbmdVdGlscyBhcyBzdHJpbmcgfSBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzXCI7XHJcbmV4cG9ydCAqIGFzIHRpbWUgZnJvbSBcIi4vdXRpbHMvdGltZS11dGlsc1wiO1xyXG5cclxuZXhwb3J0IHsgU2xvdmFrU3RlbW1lciBhcyBzdGVtbWVyIH0gZnJvbSBcIi4vbWlzYy9zbG92YWstc3RlbW1lclwiO1xyXG5cclxuLy8gRE9NXHJcblxyXG5leHBvcnQgeyBDaGVja2VycyBhcyBjaGVjayB9IGZyb20gXCIuL2RvbS9kZXByZWNhdGVkL0NoZWNrZXJzXCI7XHJcbmV4cG9ydCB7IENhbnZhc01hbmFnZXIgYXMgY2FudmFzIH0gZnJvbSBcIi4vZG9tL2NhbnZhcy1tYW5hZ2VyXCI7XHJcbmV4cG9ydCB7IERvbUdldCBhcyBnZXQgfSBmcm9tIFwiLi9kb20vZG9tLWdldFwiO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDgwMjIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==