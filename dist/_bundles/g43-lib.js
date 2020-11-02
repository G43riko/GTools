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
__exportStar(__webpack_require__(4761), exports);
__exportStar(__webpack_require__(4574), exports);
// TODO not work on backend
// export * from "./dom/element-builder";
// export * from "./enums";
// export * from "./errors";
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
// export * from "./utils";


/***/ }),

/***/ 9126:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// UTILS
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
// MODELS
var gender_model_1 = __webpack_require__(9878);
Object.defineProperty(exports, "Gender", ({ enumerable: true, get: function () { return gender_model_1.Gender; } }));
// ENUMS
__exportStar(__webpack_require__(1903), exports);
__exportStar(__webpack_require__(6005), exports);
__exportStar(__webpack_require__(7826), exports);
__exportStar(__webpack_require__(8224), exports);
// COMPONENTS
__exportStar(__webpack_require__(8917), exports);
__exportStar(__webpack_require__(4715), exports);
__exportStar(__webpack_require__(1628), exports);
__exportStar(__webpack_require__(5826), exports);
// MATHS
__exportStar(__webpack_require__(3388), exports);
// CONFIG
var gtools_config_1 = __webpack_require__(5988);
Object.defineProperty(exports, "initConfig", ({ enumerable: true, get: function () { return gtools_config_1.initConfig; } }));
// INTERFACES
__exportStar(__webpack_require__(7953), exports);
__exportStar(__webpack_require__(6424), exports);
__exportStar(__webpack_require__(7191), exports);
__exportStar(__webpack_require__(6137), exports);
// TESTS
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
/**
 *  FileManager is class used for open and save files
 */
var FileManager = /** @class */ (function () {
    function FileManager() {
        this.input = document.createElement("input");
        this.input.setAttribute("type", "file");
        this.input.setAttribute("value", "files");
        this.input.setAttribute("class", "hide");
        this.link = document.createElement("a");
        this.link.setAttribute("class", "hide");
        this.link.setAttribute("href", "");
    }
    /**
     * Save text content into file with specific extensions
     *
     * @param name file name
     * @param text file content
     * @param type file {@link FileTypes}. Defaul value is {@link FileTypes.TXT}
     */
    FileManager.prototype.saveFile = function (name, text, type) {
        if (type === void 0) { type = file_types_enum_1.FileTypes.TXT; }
        this.link.href = URL.createObjectURL(new Blob([text], { type: type }));
        this.link.download = name;
        this.link.click();
    };
    /**
     * Save image into file
     *
     * @param name image name
     * @param image image element or path to image
     */
    FileManager.prototype.saveImage = function (name, image) {
        this.link.href = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    };
    /**
     * Load image using system file picker
     *
     * @param  func loading callback
     */
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
    /**
     * Load file using system file picker
     *
     * @param func loading callback
     */
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
    /**
     * Load binary file using system file picker
     *
     * @param func loading callback
     */
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
var GLoggerInstance = /** @class */ (function () {
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
var GLogger = /** @class */ (function (_super) {
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
var GMap = /** @class */ (function (_super) {
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
var KeyValueCounter = /** @class */ (function () {
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
                this.results.push({ key: key, count: this.data[key] });
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
var NumberCounter = /** @class */ (function () {
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
var Paginator = /** @class */ (function () {
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
/**
 * @example
 * class ClassOwnConfig extends ClassGToolsConfig implements OwnConfigInterface {
 *     public name = "";
 * }
 *
 * export const OwnConfig = new ClassOwnConfig();
 *
 * @see GToolsConfigInterface
 */
var ClassGToolsConfig = /** @class */ (function () {
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
    return /** @class */ (function (_super) {
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
                // @ts-ignore
                descriptor.get = function () { return params.onGet(target[newName]); };
            }
            else {
                descriptor.get = function () { return target[newName]; };
            }
            if (typeof params.onSet === "function") {
                // @ts-ignore
                descriptor.set = function (newVal) { return target[newName] = params.onSet(newVal); };
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
    return /** @class */ (function (_super) {
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
            enumerable: (options && typeof options.enumerable === "boolean") ? options.enumerable : true,
            configurable: (options && typeof options.configurable === "boolean") ? options.configurable : true,
        });
    };
}
exports.Watch = Watch;


/***/ }),

/***/ 4000:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasManager = void 0;
var not_browser_exception_1 = __webpack_require__(2089);
var CanvasManager = /** @class */ (function () {
    function CanvasManager(arg1, arg2, arg3) {
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
    Object.defineProperty(CanvasManager.prototype, "canvas", {
        get: function () {
            return this.localCanvas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasManager.prototype, "context", {
        get: function () {
            return this.localContext;
        },
        enumerable: false,
        configurable: true
    });
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
    CanvasManager.canvasToImage = function (canvas, format) {
        if (format === void 0) { format = "image/png"; }
        var image = new Image();
        image.src = canvas.toDataURL(format);
        image.width = canvas.width;
        image.height = canvas.height;
        return image;
    };
    CanvasManager.prototype.getImage = function () {
        return CanvasManager.canvasToImage(this.localCanvas);
    };
    CanvasManager.prototype.setShadow = function (x, y, color, blur) {
        if (this.localContext) {
            CanvasManager.setShadow(this.localContext, x, y, color, blur);
        }
    };
    CanvasManager.prototype.show = function (format) {
        if (format === void 0) { format = "image/png"; }
        window.open(this.localCanvas.toDataURL(format), "_blank");
    };
    CanvasManager.prototype.clearCanvas = function () {
        if (this.localContext) {
            CanvasManager.clearCanvas(this.localContext);
        }
    };
    CanvasManager.prototype.setCanvasSize = function (width, height) {
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        CanvasManager.setCanvasSize(this.localCanvas, width, height);
    };
    CanvasManager.prototype.appendTo = function (element) {
        element.appendChild(this.localCanvas);
        return element;
    };
    return CanvasManager;
}());
exports.CanvasManager = CanvasManager;


/***/ }),

/***/ 3670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasUtils = void 0;
var canvas_manager_1 = __webpack_require__(4000);
var Checkers_1 = __webpack_require__(6577);
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
        radius: { tl: 0, tr: 0, br: 0, bl: 0 },
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
        if (Checkers_1.Checkers.isNumber(value)) {
            // @ts-ignore
            res[partA] = value;
            // @ts-ignore
            res[partB] = value;
        }
        else if (Array.isArray(value)) {
            // @ts-ignore
            res[partA] = value[0];
            // @ts-ignore
            res[partB] = value[1];
        }
        else {
            // @ts-ignore
            res[partA] = value.x;
            // @ts-ignore
            res[partB] = value.y;
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
var CanvasUtils = /** @class */ (function () {
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
            if (Checkers_1.Checkers.isNumber(obj.radius)) {
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
/**
 * @deprecated use {@link MiscValidators} instead
 * TODO: move this to validators
 */
var Checkers = /** @class */ (function () {
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

/***/ 4761:
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
/**
 * @deprecated use {@link MiscValidators} instead
 * TODO: move this to validators
 */
var Checkers = /** @class */ (function () {
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

// TODO: need to be checked if app is running in browser
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomGet = void 0;
var localContext = typeof document !== "undefined" ? document : null;
var DomGet = /** @class */ (function () {
    function DomGet() {
    }
    /**
     *
     * @param context document context
     */
    DomGet.setContext = function (context) {
        localContext = context;
    };
    /**
     *
     * @param className name of class
     * @param context searched context
     * @returns collection of found elements
     */
    DomGet.byClass = function (className, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByClassName(className);
    };
    /**
     *
     * @param link name of link
     * @param context searched context
     * @returns nodeList of found elements
     */
    DomGet.byLink = function (link, context) {
        if (context === void 0) { context = localContext; }
        return context.querySelectorAll("a[attr=\"" + link + "\"]");
    };
    /**
     *
     * @param id searched ID
     * @param context searched context
     * @returns found element or null
     */
    DomGet.byId = function (id, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementById(id);
    };
    /**
     *
     * @param name elements name
     * @param context searched context
     * @returns nodeList of found elements
     */
    DomGet.byName = function (name, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByName(name);
    };
    /**
     *
     * @param tagName elements tagName
     * @param context searched context
     * @returns nodeList of found elements
     */
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
    /*
    public static readonly UTF8    = "utf8";
    public static readonly UTF16   = "utf16";
    public static readonly UNICODE = "unicode";
    public static readonly ASCII   = "ascii";
    public static readonly UCS2    = "ucs2";
    */
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
})(Keys = exports.Keys || (exports.Keys = {}));
var KeysOld = /** @class */ (function () {
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
var NotBrowserException = /** @class */ (function (_super) {
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

/***/ 5312:
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
__exportStar(__webpack_require__(7264), exports);
__exportStar(__webpack_require__(6606), exports);
__exportStar(__webpack_require__(5413), exports);
__exportStar(__webpack_require__(4932), exports);
__exportStar(__webpack_require__(4777), exports);
__exportStar(__webpack_require__(4261), exports);


/***/ }),

/***/ 7264:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5413:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4932:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
var Vector2 = /** @class */ (function () {
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
    Object.defineProperty(Vector2, "ONE", {
        get: function () {
            return new Vector2(1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Vector2.prototype.isZero = function () {
        return this.x === 0 && this.y === 0;
    };
    Vector2.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y;
    };
    Vector2.sub = function (vecA, vecB) {
        return new Vector2(vecA.x - vecB.x, vecA.y - vecB.y);
    };
    Vector2.isVisible = function (obsX, obsY, angle, cutOff, px, py) {
        return (angle - Math.atan2(py - obsY, px - obsX)) <= cutOff;
    };
    Vector2.angleBetweenPoints = function (obsX, obsY, px1, py1, px2, py2) {
        return Math.atan2(py1 - obsY, px1 - obsX) - Math.atan2(py2 - obsY, px2 - obsX);
    };
    Object.defineProperty(Vector2.prototype, "avg", {
        get: function () {
            return (this.x + this.y) / 2;
        },
        enumerable: false,
        configurable: true
    });
    Vector2.sum = function (vecA, vecB) {
        return new Vector2(vecA.x + vecB.x, vecA.y + vecB.y);
    };
    Vector2.mulNum = function (vecA, val) {
        return new Vector2(vecA.x * val, vecA.y * val);
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
    Vector2.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Object.defineProperty(Vector2.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: false,
        configurable: true
    });
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.normalize = function () {
        var length = this.length;
        this.x /= length;
        this.y /= length;
        return this;
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
    Vector2.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    };
    Vector2.prototype.sub = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    };
    Vector2.from = function (valA, valB) {
        if (valB === void 0) { valB = valA; }
        return new Vector2(valA, valB);
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
/**
 * Class is used for holding 2 numeric values and manipulation with them
 */
var Vector2f = /** @class */ (function () {
    function Vector2f(x, y) {
        /**
         * the X value of vector
         */
        this.y = 0;
        /**
         * the Y value of vector
         */
        this.x = 0;
        this.x = x;
        this.y = y;
    }
    /**
     * Function set vectors values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns created {@link Vector2f}
     */
    Vector2f.prototype.set = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x = x;
            _this.y = y;
        }, arg1, arg2);
        return this;
    };
    /**
     * Function add values into current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    Vector2f.prototype.add = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x += x;
            _this.y += y;
        }, arg1, arg2);
        return this;
    };
    /**
     * Function divide current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    Vector2f.prototype.div = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x /= x;
            _this.y /= y;
        }, arg1, arg2);
        return this;
    };
    /**
     * Function multiply current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
    Vector2f.prototype.mul = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x *= x;
            _this.y *= y;
        }, arg1, arg2);
        return this;
    };
    /**
     * Function subtract values from current values and return object itself
     *
     * @param arg1 parameter can by {@link Vector2f} or number representing {@link x} if arg2 is passed otherwise {@link x} and {@link y}
     * @param arg2 is {@link y} value for vector
     * @returns updated {@link Vector2f}
     */
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
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
var Vector3 = /** @class */ (function () {
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
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    Vector3.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
    };
    Vector3.sub = function (vecA, vecB) {
        return new Vector3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z);
    };
    Object.defineProperty(Vector3.prototype, "avg", {
        get: function () {
            return (this.x + this.y + this.z) / 3;
        },
        enumerable: false,
        configurable: true
    });
    Vector3.sum = function (vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    };
    Vector3.mulNum = function (vecA, val) {
        return new Vector3(vecA.x * val, vecA.y * val, vecA.z * val);
    };
    Vector3.prototype.sum = function () {
        return this.x + this.y + this.z;
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
    Vector3.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Object.defineProperty(Vector3.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        enumerable: false,
        configurable: true
    });
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
    Vector3.prototype.sub = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    };
    Vector3.fromArray = function (value) {
        return new Vector3(value[0], value[1], value[2]);
    };
    Vector3.from = function (valA, valB, valC) {
        if (valB === void 0) { valB = valA; }
        if (valC === void 0) { valC = valA; }
        return new Vector3(valA, valB, valC);
    };
    Vector3.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z);
    };
    Vector3.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
    };
    return Vector3;
}());
exports.Vector3 = Vector3;


/***/ }),

/***/ 4261:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector4 = void 0;
var Vector4 = /** @class */ (function () {
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
    Vector4.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    Vector4.equals = function (vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z && vecA.w === vecB.w;
    };
    Object.defineProperty(Vector4.prototype, "avg", {
        get: function () {
            return (this.x + this.y + this.z + this.w) / 4;
        },
        enumerable: false,
        configurable: true
    });
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
    Vector4.prototype.getNormalized = function () {
        return this.clone().normalize();
    };
    Object.defineProperty(Vector4.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        },
        enumerable: false,
        configurable: true
    });
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
    Vector4.fromArray = function (value) {
        return new Vector4(value[0], value[1], value[2], value[3]);
    };
    Vector4.from = function (valA, valB, valC, valD) {
        if (valB === void 0) { valB = valA; }
        if (valC === void 0) { valC = valB; }
        if (valD === void 0) { valD = valC; }
        return new Vector4(valA, valB, valC, valD);
    };
    Vector4.isVector = function (item) {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z) && !isNaN(item.w);
    };
    Vector4.prototype.setFromValues = function (x, y, z, w) {
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

/***/ 4491:
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
// tslint:disable-next-line
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
            // gabos
            key.endsWith("enie"))) {
        return key.substring(0, len - 4);
    }
    if (len > 5 &&
        (key.endsWith("ich") || // From cz
            key.endsWith("eho") ||
            key.endsWith("ych") ||
            key.endsWith("ích") || // From cz
            key.endsWith("ého") || // From cz
            key.endsWith("emi") || // From cz
            key.endsWith("ému") || // From cz
            key.endsWith("emu") ||
            /*key.endsWith("iho") ||*/ // Veľmi malý vplyv
            key.endsWith("ími") || // From cz
            key.endsWith("imi") ||
            key.endsWith("ách") || // From cz
            key.endsWith("ých") || // From cz
            key.endsWith("ami") || // From cz
            /*                        key.endsWith("ové") ||
                                    key.endsWith("ový") ||
                                    key.endsWith("oví") ||*/
            key.endsWith("ovi") || // From cz
            key.endsWith("ieť") ||
            key.endsWith("ieš") ||
            key.endsWith("ejú") ||
            key.endsWith("ajú") ||
            key.endsWith("ujú") ||
            key.endsWith("ejú") ||
            key.endsWith("eme") ||
            key.endsWith("íte") ||
            key.endsWith("íme") ||
            key.endsWith("ými") || // From cz
            key.endsWith("ymi") ||
            key.endsWith("ach") ||
            key.endsWith("iam") ||
            /*key.endsWith("atá") ||*/
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
        ( /*key.endsWith("ín") ||*/key.endsWith("ím") || // From cz
            key.endsWith("ám") || // From cz
            key.endsWith("am") ||
            key.endsWith("us") || // From cz
            key.endsWith("ým") || // From cz
            key.endsWith("ym") ||
            key.endsWith("mi") || // From cz
            key.endsWith("ou") || // From cz
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
            /*case "ô":*/
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
    // toto pravidlo znižuje FP ale zvyšuje FN
    /*        if (len > 1 && s[len - 2] == "i" && s[len-1]=="c") {
                s[len - 2] = s[len - 1]; // e* > *
                return len - 1;
            }*/
    switch (s[len - 1]) {
        case "c": // [cč] -> k
        case "č":
            return s.replace(/./g, function (e, i) { return i === len - 1 ? e : "k"; });
        case "ľ": // [ľ] -> l
            return s.replace(/./g, function (e, i) { return i === len - 1 ? e : "l"; });
        case "ň": // [ľ] -> l
            return s.replace(/./g, function (e, i) { return i === len - 1 ? e : "n"; });
        case "ť": // [ľ] -> l
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
var SlovakStemmer = /** @class */ (function () {
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

/***/ 4701:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ajax = void 0;
var AjaxWrapper = /** @class */ (function () {
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
__exportStar(__webpack_require__(4701), exports);
__exportStar(__webpack_require__(6546), exports);
__exportStar(__webpack_require__(4491), exports);


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
var Color = /** @class */ (function () {
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
    Color.fromHex = function (color) {
        var value = color_utils_1.hex2rgb(color);
        return new (Color.bind.apply(Color, __spreadArrays([void 0], value)))();
    };
    Color.fromInt = function (color) {
        var value = color_utils_1.int2rgb(color);
        return new (Color.bind.apply(Color, __spreadArrays([void 0], value)))();
    };
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
    Color.prototype.normalized = function () {
        if (this.red > 1 || this.green > 1 || this.blue > 1 || this.alpha > 1) {
            return new Color(this.red / 255, this.green / 255, this.blue / 255, this.alpha / 255);
        }
        return this;
    };
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
exports.GenderClass = exports.Gender = exports.parseGender = void 0;
var maleRegexp = /^(male|man|muz|boy|chlapec|m)$/g;
var femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;
function parseGender(gender) {
    if (!gender) {
        return;
    }
    var genderLowerCase = gender.trim().toLowerCase().replace("ž", "z").replace("č", "c");
    if (genderLowerCase.match(maleRegexp)) {
        return Gender.MAN;
    }
    if (genderLowerCase.match(femaleRegexp)) {
        return Gender.WOMAN;
    }
    return;
}
exports.parseGender = parseGender;
var Gender;
(function (Gender) {
    Gender["MAN"] = "MAN";
    Gender["WOMAN"] = "WOMAN";
})(Gender = exports.Gender || (exports.Gender = {}));
/**
 * @deprecated use {@link parseGender} and {@link Gender} instead
 * Class is used for parsing gender
 */
var GenderClass = /** @class */ (function () {
    function GenderClass() {
    }
    /**
     * Method parse string and return GenderType
     * @deprecated use {@link parseGender} instead
     * @param gender gender in any format
     * @returns parsed gender as {@link GenderType}
     */
    GenderClass.parse = parseGender;
    return GenderClass;
}());
exports.GenderClass = GenderClass;


/***/ }),

/***/ 5667:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Model is enum and parser
 */
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
// TODO: Cannot import countries.data.json
// export * from "./countries/country.interface";
// export * from "./countries/country.model";


/***/ }),

/***/ 9787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**************************** NODE ****************************/
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
// UTILS
__exportStar(__webpack_require__(4163), exports);
__exportStar(__webpack_require__(6689), exports);
__exportStar(__webpack_require__(1294), exports);
__exportStar(__webpack_require__(3451), exports);
__exportStar(__webpack_require__(9343), exports);
__exportStar(__webpack_require__(8519), exports);
__exportStar(__webpack_require__(7652), exports);
__exportStar(__webpack_require__(4491), exports);
/**************************** WEB ****************************/
// DOM
__exportStar(__webpack_require__(6577), exports);
__exportStar(__webpack_require__(4000), exports);
__exportStar(__webpack_require__(4574), exports);


/***/ }),

/***/ 8620:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
            y: sy2
        };
    }
    return {
        x: sx1 + u * xDelta,
        y: sy1 + u * yDelta,
    };
}
exports.pointLine2dClosest = pointLine2dClosest;


/***/ }),

/***/ 1847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointCircle2dCollision = exports.pointRectMinMax2dCollision = exports.pointRect2dCollision = exports.circleCircle2dCollision = exports.rectRect2dCollision = exports.lineLine2dCollision = exports.lineRectangle2dCollision = exports.circleRect2dCollision = void 0;
var distances_2d_1 = __webpack_require__(2653);
function circleRect2dCollision(cPosX, cPosY, cRadius, rPosX, rPosY, rSizeX, rSizeY) {
    var circleDistanceX = Math.abs(cPosX - rPosX);
    var circleDistanceY = Math.abs(cPosY - rPosY);
    if (circleDistanceX > (rSizeX / 2 + cRadius)) {
        return false;
    }
    if (circleDistanceY > (rSizeY / 2 + cRadius)) {
        return false;
    }
    if (circleDistanceX <= (rSizeX / 2)) {
        return true;
    }
    if (circleDistanceY <= (rSizeY / 2)) {
        return true;
    }
    var cornerDistanceSQ = Math.pow((circleDistanceX - rPosX / 2), 2) +
        Math.pow((circleDistanceY - rPosY / 2), 2);
    return cornerDistanceSQ <= Math.pow(cRadius, 2);
}
exports.circleRect2dCollision = circleRect2dCollision;
function lineRectangle2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX, bPosY, bSizeX, bSizeY) {
    return (pointRect2dCollision(aStartX, aStartY, bPosX, bPosY, bSizeX, bSizeY)) ||
        pointRect2dCollision(aEndX, aEndY, bPosX, bPosY, bSizeX, bSizeY) ||
        lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX, bPosY, bPosX + bSizeX, bPosY + bSizeY) ||
        lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX + bSizeX, bPosY, bPosX, bPosY + bSizeY);
}
exports.lineRectangle2dCollision = lineRectangle2dCollision;
function lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bStartX, bStartY, bEndX, bEndY) {
    var denominator = ((aEndX - aStartX) * (bEndY - bStartY)) - ((aEndY - aStartY) * (bEndX - bStartX));
    var numerator1 = ((aStartY - bStartY) * (bEndX - bStartX)) - ((aStartX - bStartX) * (bEndY - bStartY));
    var numerator2 = ((aStartY - bStartY) * (aEndX - aStartX)) - ((aStartX - bStartX) * (aEndY - aStartY));
    // Detect coincident lines (has a problem, read below)
    if (denominator === 0) {
        return numerator1 === 0 && numerator2 === 0;
    }
    var r = numerator1 / denominator;
    var s = numerator2 / denominator;
    return (r >= 0 && r <= 1) && (s >= 0 && s <= 1);
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

/***/ 2653:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointLineSqrt2dDistance = exports.pointLine2dDistance = exports.pointPointSqrt2dDistance = exports.pointPoint2dDistance = void 0;
function pointPoint2dDistance(ax, ay, bx, by) {
    return Math.sqrt(pointPointSqrt2dDistance(ax, ay, bx, by));
}
exports.pointPoint2dDistance = pointPoint2dDistance;
function pointPointSqrt2dDistance(ax, ay, bx, by) {
    var distX = ax - bx;
    var distY = ay - by;
    return distX * distX + distY * distY;
}
exports.pointPointSqrt2dDistance = pointPointSqrt2dDistance;
function pointLine2dDistance(aX, aY, bX, bY, pX, pY) {
    return Math.sqrt(pointLineSqrt2dDistance(aX, aY, bX, bY, pX, pY));
}
exports.pointLine2dDistance = pointLine2dDistance;
function pointLineSqrt2dDistance(aX, aY, bX, bY, pX, pY) {
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
exports.pointLineSqrt2dDistance = pointLineSqrt2dDistance;


/***/ }),

/***/ 8707:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vectorPoint3dDistance = exports.pointNormalPlane3dDistance = exports.pointLine3dDistance = exports.pointPointSqr3dDistance = exports.pointPoint3dDistance = void 0;
var vector3_1 = __webpack_require__(4777);
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
    var d = -vector3_1.Vector3.mul(aNormal, aPoint).sum();
    return Math.abs((vector3_1.Vector3.mul(aNormal, bPoint).sum() + d) / Math.sqrt(vector3_1.Vector3.mul(aNormal, aNormal).sum()));
}
exports.pointNormalPlane3dDistance = pointNormalPlane3dDistance;
// export function pointPlane(Vector3 a1, Vector3 a2, Vector3 a3, Vector3 bPoint) {
//     return pointPlane(a3.sub(a2).cross(a1.sub(a2)), a1, bPoint);
// }
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
__exportStar(__webpack_require__(8620), exports);
__exportStar(__webpack_require__(1847), exports);
__exportStar(__webpack_require__(2653), exports);
__exportStar(__webpack_require__(8707), exports);


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
var AbstractDatabaseFixture = /** @class */ (function (_super) {
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
var AbstractFixture = /** @class */ (function () {
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
var AbstractMapper = /** @class */ (function () {
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
var PaginateModel = /** @class */ (function () {
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
__exportStar(__webpack_require__(6137), exports);
__exportStar(__webpack_require__(9492), exports);
__exportStar(__webpack_require__(4059), exports);
__exportStar(__webpack_require__(7191), exports);
__exportStar(__webpack_require__(6424), exports);
__exportStar(__webpack_require__(3896), exports);
__exportStar(__webpack_require__(6937), exports);
__exportStar(__webpack_require__(5632), exports);
__exportStar(__webpack_require__(6170), exports);


/***/ }),

/***/ 7953:
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

/***/ 6137:
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

/***/ 5088:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomUtils = void 0;
var Checkers_1 = __webpack_require__(6577);
var dom_get_1 = __webpack_require__(4574);
var not_browser_exception_1 = __webpack_require__(2089);
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    /**
     * Function returns height of window
     *
     * @returns window height in pixels
     */
    DomUtils.getWindowHeight = function () {
        if (typeof window === "undefined") {
            throw new not_browser_exception_1.NotBrowserException();
        }
        // @ts-ignore
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    /**
     * Function returns width of window
     *
     * @returns window width in pixels
     */
    DomUtils.getWindowWidth = function () {
        if (typeof window === "undefined") {
            throw new not_browser_exception_1.NotBrowserException();
        }
        // @ts-ignore
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    /**
     * Function set, append or returns text of element
     *
     * @param element - input element
     * @param text - text to put in element
     * @param append - flag if text should be append or replace previous text
     * @returns element given as input
     */
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
    /**
     * Function set, append or returns html content of element
     *
     * @param element - input element
     * @param html - html to put in element
     * @param append - flag if html should be append or replace previous content
     * @returns element given as input
     */
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
    /**
     * Function returns, add, remove or toggle elements classes
     *
     * @param element - input element
     * @param name - class name or list of class names
     * @param force - flag if class should be toggled false
     * @returns boolean if function is used to check class presence otherwise element given as input
     */
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
    /**
     * Function crete new element
     *
     * ElementManager.createElement("div") => <div></div>;
     * ElementManager.createElement("div", {id: "ide"}) => <div id="ide"></div>;
     * ElementManager.createElement("div", {}, "text") => <div>text</div>;
     * ElementManager.createElement("div", {}, "<b>text</b>") => <div><b>text</b></div>;
     * ElementManager.createElement("div", {}, "text", {color: "blue"}) => <div style="color: blue;">text</div>
     *
     * ElementManager.createElement({name: "div"}) => <div></div>;
     * ElementManager.createElement({name: "div"}) => <div></div>;
     * ElementManager.createElement({name: "div", attr: {id: "ide"}}) => <div id="ide"></div>;
     *
     * @param name - name of element or object contains all configuration
     * @param attr - map of all element attributes
     * @param cont - element content. Can be string, element or array of elements
     * @param style - styles that will be applied to the element
     * @returns created element
     */
    DomUtils.createElement = function (name, attr, cont, style) {
        if (typeof document === "undefined") {
            throw new not_browser_exception_1.NotBrowserException();
        }
        var el;
        if (typeof name === "object") {
            return DomUtils.createElement(name.name, name.attr || {}, name.cont || "", name.style);
        }
        el = document.createElement(name);
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
    /**
     * Function remove element
     *
     * @param element - input element
     * @returns removed element
     */
    DomUtils.remove = function (element) {
        var parentElement = element.parentElement;
        if (parentElement) {
            parentElement.removeChild(element);
        }
        return element;
    };
    /**
     * Function returns object with element position
     *
     * @param element - input element
     * @returns position of element
     */
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
    /**
     * Function returns order of element between siblings
     *
     * @param element - input element
     * @returns index of number
     */
    DomUtils.indexOf = function (element) {
        var index = 0;
        while (element) {
            element = element.previousElementSibling;
            index++;
        }
        return index;
    };
    /**
     * Function returns object with element size
     *
     * @param element - input element
     * @returns size of element
     */
    DomUtils.size = function (element) {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    };
    DomUtils.serialize = function (form) {
        var result = {};
        // if forms is not element
        if (!Checkers_1.Checkers.isElement(form)) {
            return result;
        }
        // if form is not form
        if (form.tagName.toLowerCase() !== "form") {
            return result;
        }
        // get all inputs
        var elements = dom_get_1.DomGet.byTag("input");
        // add all values to result object
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
var FileUtils = /** @class */ (function () {
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
/**
 *
 * @example
 * const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 * const conditions = {age: 23, name: "Monica"}
 * where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
 */
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
        var add = conditionEntries.some(function (conditionEntry) {
            return e[conditionEntry[0]] === conditionEntry[1];
        });
        if (add) {
            result[result.length] = e;
        }
    });
    return result;
}
exports.where = where;
/**
 * Return sub array from array
 *
 * @deprecated use {@link Array.prototype.slice} instead
 * @param array - input array
 * @param minIndex - start index
 * @param maxIndex - end index
 * @returns final array
 */
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
/**
 * Function return maximal value from numeric array
 *
 * @param array - array of numbers
 * @returns maximal number from array
 * @deprecated use {@link Math.max} instead
 */
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
/**
 * Function return minimal value from numeric array
 *
 * @param array - array of numbers
 * @returns minimal number from array
 * @deprecated use {@link Math.min} instead
 */
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
/**
 * Function return total value of all elements in numeric array
 *
 * @param array - array of numbers
 * @returns summary of all numbers in array
 */
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
/**
 * Function returns average of numeric array given as input
 *
 * @param array - array of numbers
 * @returns average of all numbers in array
 */
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
/**
 * Function join array by delimiter and append prefix and postfix
 *
 * @param array - not empty array
 * @param delimiter - character used for join elements in array
 * @param prefix - string append at the beginning of final string
 * @param postfix - string append at the end of final string
 * @returns final string
 */
function join(array, delimiter, prefix, postfix) {
    if (prefix === void 0) { prefix = ""; }
    if (postfix === void 0) { postfix = ""; }
    if (!Array.isArray(array)) {
        return prefix + array + postfix;
    }
    return prefix + array.join(delimiter) + postfix;
}
exports.join = join;
/**
 * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
 * @param array - not empty array
 * @returns last value from array
 */
function getLast(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return array[array.length - 1];
}
exports.getLast = getLast;
/**
 * Method returns random element from array
 *
 * @param array - not empty array
 * @returns random value from array
 */
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
/**
 * Method return copy of array with only distinct elements
 *
 * @param array - array with duplicate elements
 * @returns unique array
 */
function makeUnique(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return Array.from(new Set(array));
}
exports.makeUnique = makeUnique;
/**
 * Combine 2 array each other
 * @param arr
 * @param callback
 */
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
        (val >> 8) & 0xFF,
        val & 0xFF
    ];
}
exports.int2rgb = int2rgb;
function hex2int(val) {
    return parseInt(val, 16);
}
exports.hex2int = hex2int;
function rgb2int(R, G, B) {
    return R << 16 | (G << 8) & 0xFFFF | B;
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
/**
 * @deprecated use {@link Arrays} instead
 */
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    /**
     *
     * @example
     * const array = [{name: "Michael", age: 23}, {name: "Joachim", age: 15}, {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     * const conditions = {age: 23, name: "Monica"}
     * where(array, conditions); // [{name: "Michael", age: 23},  {name: "Enrico", age: 15}, {name: "Monica", age: 59}]
     */
    ArrayUtils.where = function (array, condition) {
        return Arrays.where(array, condition);
    };
    /**
     * Return sub array from array
     *
     * @deprecated use {@link Array.prototype.slice} instead
     * @param array - input array
     * @param minIndex - start index
     * @param maxIndex - end index
     * @returns final array
     */
    ArrayUtils.subArray = function (array, minIndex, maxIndex) {
        if (minIndex === void 0) { minIndex = 0; }
        if (maxIndex === void 0) { maxIndex = array.length - 1; }
        return Arrays.subArray(array);
    };
    /**
     * Function return maximal value from numeric array
     *
     * @param array - array of numbers
     * @returns maximal number from array
     */
    ArrayUtils.max = function (array) {
        return Arrays.max(array);
    };
    /**
     * Function return minimal value from numeric array
     *
     * @param array - array of numbers
     * @returns minimal number from array
     */
    ArrayUtils.min = function (array) {
        return Arrays.min(array);
    };
    /**
     * Function return total value of all elements in numeric array
     *
     * @param array - array of numbers
     * @returns summary of all numbers in array
     */
    ArrayUtils.sum = function (array) {
        return Arrays.sum(array);
    };
    /**
     * Function returns average of numeric array given as input
     *
     * @param array - array of numbers
     * @returns average of all numbers in array
     */
    ArrayUtils.avg = function (array) {
        return Arrays.avg(array);
    };
    /**
     * Function join array by delimiter and append prefix and postfix
     *
     * @param array - not empty array
     * @param delimiter - character used for join elements in array
     * @param prefix - string append at the beginning of final string
     * @param postfix - string append at the end of final string
     * @returns final string
     */
    ArrayUtils.join = function (array, delimiter, prefix, postfix) {
        if (prefix === void 0) { prefix = ""; }
        if (postfix === void 0) { postfix = ""; }
        return Arrays.join(array, delimiter, prefix, postfix);
    };
    /**
     * Method returns last element from array or null if array is empty. If argument is not array, method returns argument
     * @param array - not empty array
     * @returns last value from array
     */
    ArrayUtils.getLast = function (array) {
        return Arrays.getLast(array);
    };
    /**
     * Method returns random element from array
     *
     * @param array - not empty array
     * @returns random value from array
     */
    ArrayUtils.getRandom = function (array) {
        return Arrays.getRandomItem(array);
    };
    ArrayUtils.getNRandom = function (array, count) {
        return Arrays.getNRandom(array, count);
    };
    /**
     * Method return copy of array with only distinct elements
     *
     * @param array - array with duplicate elements
     * @returns unique array
     */
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
/**
 * @deprecated use {@link Maths} instead
 */
var MathUtils = /** @class */ (function () {
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
        return Maths.clamp(scale, min, max);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MiscUtils = void 0;
var Misc = __importStar(__webpack_require__(5140));
var NetClient = __importStar(__webpack_require__(9383));
var Objects = __importStar(__webpack_require__(1265));
var Reflection = __importStar(__webpack_require__(9646));
/**
 * @deprecated use {@link Misc} instead
 */
var MiscUtils = /** @class */ (function () {
    function MiscUtils() {
    }
    /**
     * Create class by name and list of parameters
     *
     * @deprecated use {@link createClass} instead
     *
     * @param name - class name
     * @param args - constructor parameter
     * @returns created object
     */
    MiscUtils.createClass = function (name, args) {
        return Reflection.createClass(name, args);
    };
    /**
     * Method parse cookies
     * @param cookies - cooke to parse
     */
    MiscUtils.parseCookies = function (cookies) {
        return Misc.parseCookies(cookies);
    };
    /**
     * Method check if object is in array
     * @param obj - searched object
     * @param data - array of objects to be compare with searched object
     */
    MiscUtils.isIn = function (obj) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return Misc.isIn(obj, data);
    };
    /**
     * Method parse JSON content with comments
     * @param content - stringify JSON
     */
    MiscUtils.parseJSONWithComments = function (content) {
        return Misc.parseJSONWithComments(content);
    };
    // TODO: should append cookies or add option to appending instead of replace cookies
    // TODO: expires must be only in the end of cookies
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
    /**
     * @deprecated use {@link roughSizeOfObject} instead
     *
     * @param object - object to determine size
     */
    MiscUtils.roughSizeOfObject = function (object) {
        return Objects.roughSizeOfObject(object);
    };
    MiscUtils.objectToQueryParams = function (obj) {
        return Misc.objectToQueryParams(obj);
    };
    /**
     * @deprecated use {@link includeFile} instead
     *
     * @param file - path to file
     */
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
/**
 * @deprecated use {@link Objects} instead
 */
var ObjectUtils = /** @class */ (function () {
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
/**
 * @deprecated use {@link Checkers} instead
 */
var StringCheckers = /** @class */ (function () {
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
/**
 * @deprecated use {@link Strings} instead
 */
var StringUtils = /** @class */ (function () {
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
    /**
     * @param text - text need to be repeat
     * @param count - number of iterations
     * @deprecated - use {@link String#repeat}
     */
    StringUtils.repeat = function (text, count) {
        return text.repeat(count);
    };
    StringUtils.removeAll = function (text, words) {
        return Strings.removeAll(text, words);
    };
    // TODO: need to be fixed
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
        return Strings.toCapital(text);
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
    /**
     * @deprecated use {@link isValidPhoneNumber} instead
     *
     * @param num - string to validate
     */
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
function elementToString(element, showParent) {
    if (showParent === void 0) { showParent = true; }
    var classes = Array.from(element.classList).join(".");
    var id = element.id ? "#" + element.id : "";
    var parent = element.parentElement ? elementToString(element.parentElement, false) + " > " : "";
    return parent + element.localName + id + (classes ? "." + classes : "");
}
exports.elementToString = elementToString;
function dragElement(element, headerSelector) {
    if (headerSelector === void 0) { headerSelector = ".header"; }
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;
    var dragMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointerup = closeDragElement;
        document.onpointermove = elementDrag;
    };
    var elementDrag = function (e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
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
        }
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
/**
 * TODO: element remains after deletion onMessage screen
 */
function chooseColorUsingDefaultInput() {
    return new Promise(function (success) {
        var input = CreateElement("input", {
            type: "color",
            className: "hidden",
            onChange: function () {
                success(input.value);
                document.body.removeChild(input);
            }
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
    return ((xFinal + yFinal) * (xFinal + yFinal + 1) / 2) + yFinal;
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
    // tslint:disable-next-line
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
/**
 * @deprecated use {@link randomIntBetween} instead;
 *
 * @param min - min value
 * @param max - max value
 */
function randomInt(min, max) {
    return Random.randomIntBetween(min, max);
}
exports.randomInt = randomInt;
/**
 * @deprecated use {@link randomFloatBetween} instead;
 *
 * @param min - min value
 * @param max - max value
 */
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
    return (value & (value - 1)) === 0;
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
/**
 * Method parse cookies
 * @param cookies - cooke to parse
 */
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
/**
 * Method check if object is in array
 * @param obj - searched object
 * @param data - array of objects to be compare with searched object
 */
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
/**
 * Method parse JSON content with comments
 * @param content - stringify JSON
 */
function parseJSONWithComments(content) {
    return JSON.parse(content.replace(/\/\/.*\n/g, ""));
}
exports.parseJSONWithComments = parseJSONWithComments;
// TODO: should append cookies or add option to appending instead of replace cookies
// TODO: expires must be only in the end of cookies
function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
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
    // TODO: add url prefix
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
            // tslint:disable-next-line no-eval
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
            return [2 /*return*/, new Promise(function (success, reject) {
                    var element = html_utils_1.CreateElement("input", {
                        type: "file",
                        onChange: function (event) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                success(html_utils_1.CreateImage({
                                    src: reader.result
                                }));
                            };
                            reader.onerror = reject;
                            reader.readAsDataURL(event.target.files[0]);
                        }
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
            return [2 /*return*/, new Promise(function (success) {
                    var element = html_utils_1.CreateElement("input", {
                        type: "file",
                        onChange: function (event) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                success(reader.result);
                            };
                            reader.readAsText(event.target.files[0]);
                        }
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
    return propertyList.reduce(function (currentNestedPropertyValue, propertyName) {
        return currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined;
    }, object);
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
/**
 *
 * @param list - list to flat
 * @param propertyPath - path to property
 * @param separator - separator in propertyPath
 * @param skipUndefined - true if undefined should be skipped
 *
 * @example
 * ```
 * const items = [
 *    {
 *        person: {
 *            name: "Gabriel"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Ella"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Gabriel"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Joe"
 *        }
 *    }
 * ]
 *
 * console.log(makeFlat(items), "person.name");
 * // ["Gabriel", "Ella", "Gabriel", "Joe"]
 * console.log(makeFlat(items), "person_name", "_");
 * // ["Gabriel", "Ella", "Gabriel", "Joe"]
 * console.log(makeFlat(items), "person.name", ".", true);
 * // ["Gabriel", "Ella", "Joe"]
 * ```
 */
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
/**
 * Create class by name and list of parameters
 *
 * @param name - class name
 * @param args - constructor parameter
 * @returns created object
 */
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
                    if (!(_a < functions_1.length)) return [3 /*break*/, 4];
                    func = functions_1[_a];
                    if (!(typeof func === "function")) return [3 /*break*/, 3];
                    return [4 /*yield*/, func()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    _a++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.callFirstFunction = callFirstFunction;


/***/ }),

/***/ 8592:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * TODO: This is deprecated. Move this to validators
 */
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
/**
 * @deprecated use {@link MiscValidators.isValidPhoneNumber} instead
 * @param num - num to validate
 */
function isValidPhoneNumber(num) {
    return MiscValidators.isValidPhoneNumber(num);
}
exports.isValidPhoneNumber = isValidPhoneNumber;
/**
 * @deprecated use {@link MiscValidators.isValidEmail} instead
 * @param email - email to validate
 */
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
/* TODO:
    static underscore(word) {
    }
    static humanize(word) {
    }
    static dasherize(word) {
    }
    //dashCase = a-b-c-d-e
    //dotCase a.c.d.v.s.d
    //pascalCase = FooBarBaz
    //pathCase = a/b/c/d
    //snakeCase = a_b_c_d_
    static isUpper(word) {
    }
    static isLower(word) {
    }
*/
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
    return text.replace(/./, function (e) { return e.toUpperCase(); });
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
/**
 * @param text - text need to be repeat
 * @param numberOfRepetitions - number of iterations
 * @deprecated - use {@link String#repeat}
 */
function repeat(text, numberOfRepetitions) {
    return new Array(numberOfRepetitions + 1).join(text);
}
exports.repeat = repeat;
function removeAll(text, words) {
    return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
}
exports.removeAll = removeAll;
// TODO: need to be fixed
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
/**
 * @deprecated use {@link join} instead
 * @param data - data to join
 * @param delimiter - delimiter
 * @param prefix - prefix
 * @param postfix - postfix
 */
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
    return values.map(function (value) {
        return content.replace(placeHolder, value);
    });
}
exports.replaceForAll = replaceForAll;


/***/ }),

/***/ 7652:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEndOfTheDay = exports.getStartOfTheDay = exports.format = exports.dateAge = void 0;
var intervals = {
    "year": 31536000,
    "month": 2592000,
    "week": 604800,
    "day": 86400,
    "hour": 3600,
    "minute": 60,
    "second": 1
};
var intervalEntries = Object.entries(intervals);
function dateAge(value) {
    if (value) {
        var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) { // less than 30 seconds ago will show as 'Just now'
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
                return counter + " " + key + " ago"; // singular (1 day ago)
            }
            return counter + " " + key + "s ago"; // plural (2 days ago)
        }
    }
    return value;
}
exports.dateAge = dateAge;
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
    return setDate(date, { ms: 0, s: 0, m: 0, h: 0 });
}
exports.getStartOfTheDay = getStartOfTheDay;
function getEndOfTheDay(date) {
    return setDate(date, { ms: 999, s: 59, m: 59, h: 23 });
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
    if (!value) {
        return false;
    }
    if (typeof value === "string") {
        return value.length > 0 && /^[\s\xa0]*$/.test(value);
    }
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    if (value.constructor === Object) {
        return Object.keys(value).length > 0;
    }
    return true;
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

/**************************** WEB ****************************/
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
// UTILS
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
var SlovakStemmer_1 = __webpack_require__(4491);
Object.defineProperty(exports, "stemmer", ({ enumerable: true, get: function () { return SlovakStemmer_1.SlovakStemmer; } }));
// DOM
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9maWxlLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1tYXAudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMva2V5LXZhbHVlLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbnVtYmVyLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb25maWcvZ3Rvb2xzLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2RlcHJlY2F0ZWQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2ZpbmFsLWNsYXNzLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9tYXBwZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3NpbmdsZXRvbi5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvd2F0Y2guZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9jYW52YXMtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9kZXByZWNhdGVkL0NoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZGVwcmVjYXRlZC9jaGVja2Vycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZG9tL2RvbS1nZXQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2VuY29kaW5ncy5lbnVtLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lbnVtcy9maWxlLXR5cGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2h0dHAtc3RhdHVzLWNvZGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2tleXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IyZi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tYXRoL3ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvU2xvdmFrU3RlbW1lci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9hamF4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3J1bnRpbWUtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL2NvbG9yLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvZ2VuZGVyLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvY2xvc2VzdC0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9jb2xsaXNpb25zLTJkLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9waHlzaWNzL2Rpc3RhbmNlcy0yZC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvcGh5c2ljcy9kaXN0YW5jZXMtM2QudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3BoeXNpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0LmZpeHR1cmUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0Lm1hcHBlci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvcGFnaW5hdGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9Eb21VdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvRmlsZVV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9hcnJheS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvY29sb3ItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGVwcmVjYXRlZC9NYXRoVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2RlcHJlY2F0ZWQvTWlzY1V0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL09iamVjdFV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL1N0cmluZ0NoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9odG1sLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9tYXRoLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9taXNjLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9uZXQtY2xpZW50LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9vYmplY3QtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3JhbmRvbS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcmVmbGVjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3RyaW5nLWNoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3RpbWUtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3ZhbGlkYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3ZhbGlkYXRvcnMvbWlzYy12YWxpZGF0b3JzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy93ZWIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliL2lnbm9yZWR8ZnMiLCJ3ZWJwYWNrOi8vRzQzTGliL2lnbm9yZWR8cGF0aCIsIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLGlEQUF1QjtBQUN2QixpREFBc0I7QUFDdEIsaURBQXlCO0FBR3pCLGlEQUE2QjtBQUU3QixpREFBaUQ7QUFDakQsaURBQXVDO0FBRXZDLGlEQUE2QjtBQUM3QixpREFBcUM7QUFDckMsaURBQW1DO0FBQ25DLGlEQUEwQztBQUMxQyxpREFBOEI7QUFFOUIsMkJBQTJCO0FBQzNCLHlDQUF5QztBQUV6QywyQkFBMkI7QUFFM0IsNEJBQTRCO0FBRTVCLGlEQUE2QjtBQUU3QixnREFBdUI7QUFDdkIsaURBQXVCO0FBQ3ZCLGlEQUEwQjtBQUUxQixpREFBeUI7QUFFekIsaURBQWtEO0FBQ2xELGlEQUF5QztBQUN6QyxpREFBd0M7QUFDeEMsaURBQXVDO0FBRXZDLGlEQUF3QjtBQUV4QiwyQkFBMkI7Ozs7Ozs7Ozs7QUN0QzNCLFFBQVE7Ozs7Ozs7Ozs7Ozs7QUFFUixpREFBa0Q7QUFFbEQsU0FBUztBQUVULCtDQUEyRDtBQUF0Qyw2R0FBTTtBQUUzQixRQUFRO0FBRVIsaURBQXVDO0FBQ3ZDLGlEQUF3QztBQUN4QyxpREFBK0M7QUFDL0MsaURBQWtDO0FBRWxDLGFBQWE7QUFFYixpREFBK0M7QUFDL0MsaURBQTRDO0FBQzVDLGlEQUEwQztBQUMxQyxpREFBdUM7QUFFdkMsUUFBUTtBQUVSLGlEQUFnQztBQUVoQyxTQUFTO0FBRVQsZ0RBQW9EO0FBQTNDLHNIQUFVO0FBRW5CLGFBQWE7QUFFYixpREFBNEM7QUFDNUMsaURBQTZDO0FBQzdDLGlEQUF3QztBQUN4QyxpREFBeUM7QUFFekMsUUFBUTtBQUVSLGlEQUFrRDtBQUNsRCxpREFBeUM7QUFDekMsaURBQXdDO0FBQ3hDLGlEQUF1Qzs7Ozs7Ozs7Ozs7O0FDMUN2QyxrREFBcUQ7QUFFckQ7O0dBRUc7QUFDSDtJQVVJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSw4QkFBUSxHQUFmLFVBQWdCLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBK0I7UUFBL0IsOEJBQWtCLDJCQUFTLENBQUMsR0FBRztRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksK0JBQVMsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLEtBQWdDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksK0JBQVMsR0FBaEIsVUFBaUIsSUFBNEM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFVO1lBQzdCLElBQU0sS0FBSyxHQUFnQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM5QyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNuQixPQUFPO2FBQ1Y7WUFDRCxJQUFNLE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxNQUFNLEdBQWM7Z0JBQ3ZCLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQzFCLEtBQUssQ0FBQyxHQUFHLEdBQUssTUFBTSxDQUFDLE1BQWdCLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksOEJBQVEsR0FBZixVQUFnQixJQUFzQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFDLENBQVE7WUFDM0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQyxJQUFNLEtBQUssR0FBSyxDQUFDLENBQUMsTUFBYyxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixNQUFNLENBQUMsTUFBTSxHQUFHLGNBQU0sV0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0NBQWMsR0FBckIsVUFBc0IsSUFBNEM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFVO1lBQzdCLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFDaEMsSUFBTSxLQUFLLEdBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDbEMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFNLFdBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztnQkFDekQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBckdZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QjtJQUNJLHlCQUF1QyxPQUFvRDtRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUE2QztJQUMzRixDQUFDO0lBRU0sNkJBQUcsR0FBVjtRQUFXLGtCQUFrQjthQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7WUFBbEIsNkJBQWtCOztRQUN6QixPQUFPLENBQUMsS0FBSyxPQUFiLE9BQU8sa0JBQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUssUUFBUSxHQUFFO0lBQ3BELENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQVksa0JBQWtCO2FBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtZQUFsQiw2QkFBa0I7O1FBQzFCLE9BQU8sQ0FBQyxLQUFLLE9BQWIsT0FBTyxrQkFBTyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBSyxRQUFRLEdBQUU7SUFDckQsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFBYSxrQkFBa0I7YUFBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1lBQWxCLDZCQUFrQjs7UUFDM0IsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLGtCQUFPLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFLLFFBQVEsR0FBRTtJQUN0RCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDO0FBZlksMENBQWU7QUFpQjVCO0lBQTZCLDJCQUFlO0lBYXhDLGlCQUFtQixPQUFvRDtlQUNuRSxrQkFBTSxPQUFPLENBQUM7SUFDbEIsQ0FBQztJQWRhLGVBQU8sR0FBckIsVUFBc0IsS0FBUztRQUFULGlDQUFTO1FBQzNCLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RFLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFTYSxhQUFLLEdBQW5CLFVBQW9CLElBQThCLEVBQUUsT0FBd0Q7O1FBQXhELHNDQUF3RDtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3hILElBQU0sV0FBVyxHQUFHLE9BQU8sSUFBSSxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBQyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVywwQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUNwRyxJQUFNLE1BQU0sR0FBUSxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsSUFBSSxNQUFNLEVBQUU7WUFDUixPQUFPO1NBQ1Y7UUFDRCxJQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQUksV0FBVyxPQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQWIsT0FBTyxrQkFBTyxNQUFNLEdBQUssSUFBSSxHQUFFO0lBQ25DLENBQUM7SUFFYSxXQUFHLEdBQWpCLFVBQWtCLE9BQTBCLEVBQUUsT0FBb0Q7UUFDOUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFmdUIsb0JBQVksR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pILGtCQUFVLEdBQUssSUFBSSxNQUFNLENBQUMsS0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQWVqRyxjQUFDO0NBQUEsQ0FqQzRCLGVBQWUsR0FpQzNDO0FBakNZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJwQjtJQUFnQyx3QkFBUztJQUF6Qzs7SUFjQSxDQUFDO0lBYlUsa0JBQUcsR0FBVixVQUFXLEdBQU0sRUFBRSxZQUFnQjtRQUMvQixPQUFPLGlCQUFNLEdBQUcsWUFBQyxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUM7SUFDMUMsQ0FBQztJQUVNLDBCQUFXLEdBQWxCLFVBQW1CLEdBQU0sRUFBRSxZQUFlO1FBQ3RDLElBQU0sTUFBTSxHQUFHLGlCQUFNLEdBQUcsWUFBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLE1BQU0sRUFBRTtZQUNSLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFNUIsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLENBZCtCLEdBQUcsR0FjbEM7QUFkWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWpCLGlEQUErQjtBQUMvQixpREFBMkI7QUFDM0IsaURBQXdCO0FBQ3hCLGlEQUFvQztBQUNwQyxpREFBaUM7QUFDakMsaURBQTRCOzs7Ozs7Ozs7Ozs7QUNBNUI7SUFBQTtRQUNxQixTQUFJLEdBQTRDLEVBQUUsQ0FBQztRQUNuRCxZQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUN2QyxjQUFTLEdBQTJCLEtBQUssQ0FBQztJQThDdEQsQ0FBQztJQTVDVSw2QkFBRyxHQUFWLFVBQVcsSUFBWTtRQUNuQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLEtBQWU7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxpQ0FBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRU8saUNBQU8sR0FBZjtRQUNJLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsT0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsRUFBQyxDQUFDLENBQUM7YUFDcEQ7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDO0FBakRZLDBDQUFlOzs7Ozs7Ozs7Ozs7QUNMNUI7SUFBQTtRQUNZLFFBQUcsR0FBMEIsUUFBUSxDQUFDO1FBQ3RDLFFBQUcsR0FBMEIsQ0FBQyxRQUFRLENBQUM7UUFDdkMsUUFBRyxHQUEwQixDQUFDLENBQUM7UUFDdEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQTZCNUMsQ0FBQztJQTNCVSwyQkFBRyxHQUFWLFVBQVcsS0FBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVNLGtDQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsS0FBZTtRQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQWpDWSxzQ0FBYTs7Ozs7Ozs7Ozs7O0FDQTFCLGdEQUF1RDtBQUV2RDtJQUtJLG1CQUFvQyxRQUFhLEVBQ2IsWUFBc0M7UUFBdEMsOENBQWUsNEJBQVksQ0FBQyxVQUFVO1FBRHRDLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDYixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFKbEUsZUFBVSxHQUFxQixDQUFDLENBQUM7UUFLckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0saUNBQWEsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sa0NBQWMsR0FBckI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDckMsT0FBTztnQkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7YUFDcEIsQ0FBQztTQUNMO1FBRUQsT0FBTztZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVTtZQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO1NBQ3RCLENBQUM7SUFDTixDQUFDO0lBRU0sMkJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVsQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSx5QkFBSyxHQUFaLFVBQWEsSUFBWTtRQUNyQixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRWxCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLCtCQUFXLEdBQW5CO1FBQ0ksSUFBTSxLQUFLLEdBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUUxRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQztBQTlGWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F0QixJQUFJLE1BQTZCLENBQUM7QUFFbEMsSUFBTSxXQUFXLEdBQUc7SUFDaEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNULE9BQU87WUFDSCxPQUFPLEVBQUssRUFBRTtZQUNkLFFBQVEsRUFBSSxFQUFFO1lBQ2QsT0FBTyxFQUFLLEVBQUU7WUFDZCxVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFDO0tBQ0w7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSDtJQUFBO0lBaUJBLENBQUM7SUFoQkcsc0JBQVcsc0NBQU87YUFBbEI7WUFDSSxPQUFPLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFVO2FBQXJCO1lBQ0ksT0FBTyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBUTthQUFuQjtZQUNJLE9BQU8sV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQU87YUFBbEI7WUFDSSxPQUFPLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVMLHdCQUFDO0FBQUQsQ0FBQztBQWpCWSw4Q0FBaUI7QUFtQjlCLFNBQWdCLFVBQVUsQ0FBQyxTQUFnQztJQUN2RCxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCxnQ0FFQztBQUVZLG9CQUFZLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsRHZDLDJDQUFtQyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O0FDRXhELFNBQWdCLFVBQVUsQ0FBQyxLQUFjO0lBQ3JDLE9BQU8sVUFBQyxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUNwRSxJQUFNLFNBQVMsR0FBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLEtBQUssR0FBRztZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTNHLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQVRELGdDQVNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQsU0FBZ0IsVUFBVSxDQUEwQyxNQUFTO0lBQ3pFO1FBQTJCLHlCQUFNO1FBQzdCOztZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFBMUIsaUJBS0M7WUFKRyxJQUFJLGVBQWUsS0FBSyxFQUFFO2dCQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDdEQ7WUFDRCwyQkFBUyxJQUFJLFVBQUU7O1FBQ25CLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FBQyxDQVAwQixNQUFNLEdBTy9CO0FBQ04sQ0FBQztBQVRELGdDQVNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURCxpREFBdUM7QUFDdkMsaURBQXdDO0FBQ3hDLGdEQUFtQztBQUNuQyxpREFBc0M7QUFDdEMsaURBQWtDOzs7Ozs7Ozs7Ozs7QUNKbEMsU0FBZ0IsTUFBTSxDQUFDLE1BQStFLEVBQUUsTUFBWTtJQUE3RixvQ0FBK0U7SUFBRSxxQ0FBWTtJQUNoSCxPQUFPLFVBQUMsTUFBVyxFQUFFLEdBQVc7UUFDNUIsSUFBSSxDQUFDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU87U0FDVjtRQUNELElBQU0sVUFBVSxHQUF1QjtZQUNuQyxVQUFVLEVBQUksSUFBSTtZQUNsQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDO1FBQ0YsSUFBTSxPQUFPLEdBQTBCLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEQsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQ3BDLGFBQWE7Z0JBQ2IsVUFBVSxDQUFDLEdBQUcsR0FBRyxjQUFNLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTdCLENBQTZCLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0gsVUFBVSxDQUFDLEdBQUcsR0FBRyxjQUFNLGFBQU0sQ0FBQyxPQUFPLENBQUMsRUFBZixDQUFlLENBQUM7YUFDMUM7WUFFRCxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQ3BDLGFBQWE7Z0JBQ2IsVUFBVSxDQUFDLEdBQUcsR0FBRyxVQUFDLE1BQVcsSUFBSyxhQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQzthQUM1RTtpQkFBTTtnQkFDSCxVQUFVLENBQUMsR0FBRyxHQUFHLFVBQUMsS0FBSyxJQUFLLGFBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEVBQXZCLENBQXVCLENBQUM7YUFDdkQ7U0FDSjtRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUM7QUFDTixDQUFDO0FBM0JELHdCQTJCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRCxJQUFNLFNBQVMsR0FBaUMsRUFBRSxDQUFDO0FBRW5ELFNBQWdCLFNBQVMsQ0FBc0MsV0FBYztJQUN6RSxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBRW5DO1FBQXFCLDJCQUFXO1FBQzVCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUExQiwrQkFDYSxJQUFJLFVBS2hCO1lBSkcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxHQUFHLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUksQ0FBQzs7UUFDaEMsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLENBUm9CLFdBQVcsR0FROUI7QUFDTixDQUFDO0FBWkQsOEJBWUM7Ozs7Ozs7Ozs7OztBQ05ELFNBQWdCLEtBQUssQ0FBQyxLQUE2QyxFQUFFLE9BQXNCO0lBQ3ZGLElBQU0sTUFBTSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztJQUVoRCxPQUFPLFVBQUMsTUFBVyxFQUFFLEdBQVc7UUFDNUIsSUFBTSxNQUFNLEdBQUcsVUFBQyxNQUFXO1lBQ3ZCLElBQUksS0FBSyxFQUFFO2dCQUNQLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDOUQ7WUFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTztTQUNWO1FBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQy9CLEdBQUcsRUFBVyxjQUFNLGFBQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQXBCLENBQW9CO1lBQ3hDLEdBQUcsRUFBVyxNQUFNO1lBQ3BCLFVBQVUsRUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDOUYsWUFBWSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNyRyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBckJELHNCQXFCQzs7Ozs7Ozs7Ozs7O0FDN0JELHdEQUFzRTtBQUV0RTtJQUlJLHVCQUFtQixJQUEwQyxFQUFFLElBQVksRUFBRSxJQUFZO1FBQ3JGLElBQUksSUFBSSxZQUFZLGlCQUFpQixFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNsQztTQUNKO2FBQ0ksSUFBSSxJQUFJLFlBQVksZ0JBQWdCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hEO2FBQ0k7WUFDRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxJQUFJLDJDQUFtQixFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxzQkFBVyxpQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGtDQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRWEseUJBQVcsR0FBekIsVUFBMEIsR0FBNkI7UUFDbkQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVhLDJCQUFhLEdBQTNCLFVBQTRCLE1BQXlCLEVBQUUsS0FBeUIsRUFBRSxNQUEyQjtRQUF0RCxnQ0FBUSxNQUFNLENBQUMsVUFBVTtRQUFFLGtDQUFTLE1BQU0sQ0FBQyxXQUFXO1FBQ3pHLE1BQU0sQ0FBQyxLQUFLLEdBQUksS0FBSyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFYSx1QkFBUyxHQUF2QixVQUF3QixHQUE2QixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDcEcsR0FBRyxDQUFDLFdBQVcsR0FBSyxLQUFLLENBQUM7UUFDMUIsR0FBRyxDQUFDLFVBQVUsR0FBTSxJQUFJLENBQUM7UUFDekIsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVhLDJCQUFhLEdBQTNCLFVBQTRCLEtBQXVCO1FBQy9DLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSwyQ0FBbUIsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBTSxNQUFNLEdBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsS0FBSyxHQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQU0sR0FBRyxHQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRWEseUJBQVcsR0FBekIsVUFBMEIsR0FBNkI7UUFBRSxjQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIsNkJBQWlCOztRQUN0RSxJQUFJLE9BQU8sR0FBRyxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7WUFDdkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFYSwyQkFBYSxHQUEzQixVQUE0QixHQUE2QixFQUFFLEtBQWEsRUFBRSxJQUFhO1FBQ25GLElBQUksSUFBSSxFQUFFO1lBQ04sR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFFRCxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFYSwyQkFBYSxHQUEzQixVQUE0QixNQUF5QixFQUFFLE1BQW9CO1FBQXBCLDZDQUFvQjtRQUN2RSxJQUFNLEtBQUssR0FBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxHQUFHLEdBQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsS0FBSyxHQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDNUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTdCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUM5RCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pFO0lBQ0wsQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxNQUFvQjtRQUFwQiw2Q0FBb0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sbUNBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBRU0scUNBQWEsR0FBcEIsVUFBcUIsS0FBeUIsRUFBRSxNQUEyQjtRQUF0RCxnQ0FBUSxNQUFNLENBQUMsVUFBVTtRQUFFLGtDQUFTLE1BQU0sQ0FBQyxXQUFXO1FBQ3ZFLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsT0FBZ0I7UUFDNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEMsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQXRIWSxzQ0FBYTs7Ozs7Ozs7Ozs7O0FDRDFCLGlEQUFpRDtBQUNqRCwyQ0FBaUQ7QUE4Q2pELFNBQVMsU0FBUyxDQUFDLE9BQWlDLEVBQUUsTUFBMkI7SUFDN0UsSUFBSSxNQUFNLEVBQUU7UUFDUiw4QkFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25GO1NBQ0k7UUFDRCw4QkFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7QUFDTCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsR0FBaUI7SUFDOUIsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ1osU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1FBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixJQUFJLEdBQUcsQ0FBQyxPQUFPLFlBQVksZ0JBQWdCLEVBQUU7WUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkU7YUFDSTtZQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUM3QixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDYixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDYixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDYixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDYixHQUFHLENBQUMsQ0FBQyxFQUNMLEdBQUcsQ0FBQyxDQUFDLEVBQ0wsR0FBRyxDQUFDLEtBQUssRUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkI7UUFDRCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3JCO1NBQ0ksSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2xCO0lBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ1osU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtJQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO1FBQzNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyQztJQUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ1gsT0FBTztLQUNWO0lBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUssR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckIsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEdBQVE7SUFDckIsT0FBTztRQUNILFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSxDQUFDO1FBQ2QsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7UUFDWixJQUFJLEVBQUUsT0FBTyxHQUFHLENBQUMsV0FBVyxLQUFLLFdBQVcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEtBQUssV0FBVztRQUN0RixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ3JCLElBQUksRUFBRSxPQUFPLEdBQUcsQ0FBQyxTQUFTLEtBQUssV0FBVztRQUMxQyxTQUFTLEVBQUUsT0FBTztRQUNsQixNQUFNLEVBQUUsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDO1FBQ3BDLFVBQVUsRUFBRSxDQUFDO1FBQ2IsS0FBSyxFQUFFLENBQUM7UUFDUixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO0tBQ1AsQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQWlCLEVBQUUsR0FBUTtJQUNqRCxJQUFNLEdBQUcsR0FBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFpQixDQUFDO0lBQzdELElBQU0sY0FBYyxHQUFNLFVBQUMsUUFBNEIsRUFBRSxLQUF5QixFQUFFLEtBQXlCO1FBQ3pHLElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUNELElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLGFBQWE7WUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ25CLGFBQWE7WUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLGFBQWE7WUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLGFBQWE7WUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDSCxhQUFhO1lBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFJLEtBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ25DLGFBQWE7WUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUksS0FBa0IsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDLENBQUM7SUFFRixjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVyQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFDWixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7S0FDNUI7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxHQUFpQixFQUFFLElBQVk7SUFFcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxXQUFXLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDdkcsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUMzRDtJQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEtBQUssV0FBVyxJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1FBQzVHLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDdkQ7SUFFRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDNUQ7SUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRUQ7SUFBQTtJQTZEQSxDQUFDO0lBNURpQixpQkFBSyxHQUFuQixVQUFvQixHQUFRO1FBQ3hCLElBQU0sR0FBRyxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUNwQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFDekIsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQ2QsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQ2YsQ0FBQyxFQUNELEdBQUcsQ0FBQyxVQUFVLEVBQ2QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JCO2FBQ0k7WUFDRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFDakMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUNkLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVhLGtCQUFNLEdBQXBCLFVBQXFCLEdBQVE7UUFDekIsSUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6QyxJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDbkMsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNLEdBQUc7b0JBQ1QsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNO29CQUNkLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTTtvQkFDZCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU07b0JBQ2QsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2lCQUNqQixDQUFDO2FBQ0w7aUJBQ0k7Z0JBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBYSxFQUFFO29CQUNqQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUssR0FBRyxDQUFDLE1BQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDakU7aUJBQ0o7YUFDSjtTQUNKO1FBRUQsSUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBSSxHQUFHLENBQUMsTUFBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBSSxHQUFHLENBQUMsTUFBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUksR0FBRyxDQUFDLE1BQWMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBSSxHQUFHLENBQUMsTUFBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRSxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBSSxHQUFHLENBQUMsTUFBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQTdEWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MeEIsNkRBQW1FO0FBRW5FOzs7R0FHRztBQUNIO0lBQUE7SUFzQkEsQ0FBQztJQXJCaUIsbUJBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBRXZDLGlCQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUVuQyxpQkFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFFbkMsaUJBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBRW5DLGtCQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUVyQyxnQkFBTyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFFakMsZ0JBQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBRWpDLGNBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBRTdCLGdCQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUVqQyxvQkFBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFFekMsa0JBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3ZELGVBQUM7Q0FBQTtBQXRCWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQiw2REFBbUU7QUFFbkU7OztHQUdHO0FBQ0g7SUFBQTtJQXNCQSxDQUFDO0lBckJpQixtQkFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFFdkMsaUJBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBRW5DLGlCQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUVuQyxpQkFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFFbkMsa0JBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBRXJDLGdCQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUVqQyxnQkFBTyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFFakMsY0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFN0IsZ0JBQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBRWpDLG9CQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUV6QyxrQkFBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDdkQsZUFBQztDQUFBO0FBdEJZLDRCQUFROzs7Ozs7Ozs7O0FDTnJCLHdEQUF3RDs7O0FBRXhELElBQUksWUFBWSxHQUFvQixPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBRXRGO0lBQUE7SUEwREEsQ0FBQztJQXpERzs7O09BR0c7SUFDVyxpQkFBVSxHQUF4QixVQUF5QixPQUFpQjtRQUN0QyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLGNBQU8sR0FBckIsVUFBc0IsU0FBaUIsRUFBRSxPQUE0QztRQUE1QyxvQ0FBb0IsWUFBd0I7UUFDakYsT0FBTyxPQUFPLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csYUFBTSxHQUFwQixVQUFxQixJQUFZLEVBQUUsT0FBNEM7UUFBNUMsb0NBQW9CLFlBQXdCO1FBQzNFLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLGNBQVcsSUFBSSxRQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxXQUFJLEdBQWxCLFVBQW1CLEVBQVUsRUFBRSxPQUE0QztRQUE1QyxvQ0FBb0IsWUFBd0I7UUFDdkUsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLGFBQU0sR0FBcEIsVUFBcUIsSUFBWSxFQUFFLE9BQTRDO1FBQTVDLG9DQUFvQixZQUF3QjtRQUMzRSxPQUFPLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxZQUFLLEdBQW5CLFVBQW9CLE9BQWUsRUFBRSxPQUE0QztRQUE1QyxvQ0FBb0IsWUFBd0I7UUFDN0UsT0FBTyxPQUFPLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFRLENBQUM7SUFDeEQsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDO0FBMURZLHdCQUFNOzs7Ozs7Ozs7Ozs7QUNKbkIsSUFBWSxTQWFYO0FBYkQsV0FBWSxTQUFTO0lBQ2pCOzs7Ozs7TUFNRTtJQUNGLDBCQUFnQjtJQUNoQiw0QkFBaUI7SUFDakIsZ0NBQW1CO0lBQ25CLDRCQUFpQjtJQUNqQiwwQkFBZ0I7QUFDcEIsQ0FBQyxFQWJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBYXBCOzs7Ozs7Ozs7Ozs7QUNiRCxJQUFZLFNBWVg7QUFaRCxXQUFZLFNBQVM7SUFDakIsNkJBQWlCO0lBQ2pCLCtCQUFrQjtJQUNsQiwwQ0FBK0I7SUFDL0IsK0JBQW1CO0lBQ25CLDhCQUFrQjtJQUNsQixvQ0FBd0I7SUFDeEIsOEJBQWtCO0lBQ2xCLDhCQUFrQjtJQUNsQiwrQkFBbUI7SUFDbkIsZ0NBQW9CO0lBQ3BCLGdDQUFtQjtBQUN2QixDQUFDLEVBWlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFZcEI7Ozs7Ozs7Ozs7OztBQ1pELElBQVksZUEyQ1g7QUEzQ0QsV0FBWSxlQUFlO0lBQ3ZCLCtEQUFxQztJQUNyQyxxRkFBcUM7SUFDckMsbURBQXFDO0lBQ3JDLDZEQUFxQztJQUNyQywrREFBcUM7SUFDckMseUdBQXFDO0lBQ3JDLG1FQUFxQztJQUNyQyx5RUFBcUM7SUFDckMsNkVBQXFDO0lBQ3JDLCtFQUFxQztJQUNyQyxpRkFBcUM7SUFDckMseURBQXFDO0lBQ3JDLGlFQUFxQztJQUNyQyx1RUFBcUM7SUFDckMsaUVBQXFDO0lBQ3JDLG1GQUFxQztJQUNyQyxxRUFBcUM7SUFDckMsdUVBQXFDO0lBQ3JDLCtFQUFxQztJQUNyQyxpRUFBcUM7SUFDckMsaUVBQXFDO0lBQ3JDLG1GQUFxQztJQUNyQywyRUFBcUM7SUFDckMseUdBQXFDO0lBQ3JDLDZFQUFxQztJQUNyQywrREFBcUM7SUFDckMsdURBQXFDO0lBQ3JDLDZFQUFxQztJQUNyQyxxRkFBcUM7SUFDckMsK0ZBQXFDO0lBQ3JDLHVGQUFxQztJQUNyQywyRkFBcUM7SUFDckMsNkdBQXFDO0lBQ3JDLG1GQUFxQztJQUNyQyx1RkFBcUM7SUFDckMsaUZBQXFDO0lBQ3JDLHlGQUFxQztJQUNyQyw2RUFBcUM7SUFDckMscUVBQXFDO0lBQ3JDLHFGQUFxQztJQUNyQyw2RUFBcUM7SUFDckMsbUdBQXFDO0FBQ3pDLENBQUMsRUEzQ1csZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUEyQzFCOzs7Ozs7Ozs7Ozs7QUMzQ0QsSUFBWSxJQWtCWDtBQWxCRCxXQUFZLElBQUk7SUFDWiw0QkFBdUI7SUFDdkIsZ0NBQXlCO0lBQ3pCLGdDQUF5QjtJQUN6QixrQ0FBMEI7SUFDMUIseUJBQXNCO0lBQ3RCLCtCQUEyQjtJQUMzQiwyQkFBeUI7SUFDekIsMEJBQXNCO0lBQ3RCLDhCQUF3QjtJQUN4Qix5QkFBc0I7SUFDdEIsa0JBQW9CO0lBQ3BCLGtCQUFvQjtJQUNwQixrQkFBb0I7SUFDcEIsa0JBQW9CO0lBQ3BCLGtCQUFvQjtJQUNwQixrQkFBb0I7SUFDcEIsa0JBQW9CO0FBQ3hCLENBQUMsRUFsQlcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBa0JmO0FBRUQ7SUFBQTtJQW1CQSxDQUFDO0lBbEIwQixhQUFLLEdBQVMsRUFBRSxDQUFDO0lBQ2pCLFdBQUcsR0FBVyxDQUFDLENBQUM7SUFDaEIsU0FBQyxHQUFhLEVBQUUsQ0FBQztJQUNqQixTQUFDLEdBQWEsRUFBRSxDQUFDO0lBQ2pCLFNBQUMsR0FBYSxFQUFFLENBQUM7SUFDakIsU0FBQyxHQUFhLEVBQUUsQ0FBQztJQUNqQixTQUFDLEdBQWEsRUFBRSxDQUFDO0lBQ2pCLFNBQUMsR0FBYSxFQUFFLENBQUM7SUFDakIsU0FBQyxHQUFhLEVBQUUsQ0FBQztJQUNqQixnQkFBUSxHQUFNLEVBQUUsQ0FBQztJQUNqQixjQUFNLEdBQVEsRUFBRSxDQUFDO0lBQ2pCLFlBQUksR0FBVSxFQUFFLENBQUM7SUFDakIsY0FBTSxHQUFRLEVBQUUsQ0FBQztJQUNqQixhQUFLLEdBQVMsRUFBRSxDQUFDO0lBQ2pCLGdCQUFRLEdBQU0sRUFBRSxDQUFDO0lBQ2pCLGtCQUFVLEdBQUksRUFBRSxDQUFDO0lBQ2pCLG1CQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLGtCQUFVLEdBQUksRUFBRSxDQUFDO0lBQzVDLGNBQUM7Q0FBQTtBQW5CWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCcEIsU0FBUyxPQUFPLENBQUMsSUFBYTtJQUMxQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBSyxJQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBRUQ7SUFBeUMsdUNBQUs7SUFDMUMsNkJBQW1CLElBQWE7UUFBaEMsWUFDSSxrQkFBTSxrQ0FBZ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFHLENBQUMsU0FHMUQ7UUFERyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDL0QsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxDQU53QyxLQUFLLEdBTTdDO0FBTlksa0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKaEMsaURBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBekIsaURBQWlDO0FBQ2pDLGlEQUFpQztBQUNqQyxpREFBaUM7QUFDakMsaURBQTBCO0FBQzFCLGlEQUEwQjtBQUMxQixpREFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gxQjtJQUNJLGlCQUEwQixDQUFLLEVBQ0wsQ0FBSztRQURMLHlCQUFLO1FBQ0wseUJBQUs7UUFETCxNQUFDLEdBQUQsQ0FBQyxDQUFJO1FBQ0wsTUFBQyxHQUFELENBQUMsQ0FBSTtJQUMvQixDQUFDO0lBRUQsc0JBQWtCLGVBQUk7YUFBdEI7WUFDSSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixjQUFHO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFTSx3QkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRWEsY0FBTSxHQUFwQixVQUFxQixJQUFtQixFQUFFLElBQW1CO1FBQ3pELElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVhLFdBQUcsR0FBakIsVUFBa0IsSUFBbUIsRUFBRSxJQUFtQjtRQUN0RCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRWEsaUJBQVMsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLElBQVksRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3JHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDdEIsRUFBRSxHQUFHLElBQUksRUFDVCxFQUFFLEdBQUcsSUFBSSxDQUNaLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUVhLDBCQUFrQixHQUFoQyxVQUFpQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDM0csT0FBTyxJQUFJLENBQUMsS0FBSyxDQUNiLEdBQUcsR0FBRyxJQUFJLEVBQ1YsR0FBRyxHQUFHLElBQUksQ0FDYixHQUFHLElBQUksQ0FBQyxLQUFLLENBQ1YsR0FBRyxHQUFHLElBQUksRUFDVixHQUFHLEdBQUcsSUFBSSxDQUNiLENBQUM7SUFDTixDQUFDO0lBRUQsc0JBQVcsd0JBQUc7YUFBZDtZQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFYSxXQUFHLEdBQWpCLFVBQWtCLElBQW1CLEVBQUUsSUFBbUI7UUFDdEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVhLGNBQU0sR0FBcEIsVUFBcUIsSUFBbUIsRUFBRSxHQUFXO1FBQ2pELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRWEsV0FBRyxHQUFqQixVQUFrQixJQUFtQixFQUFFLElBQW1CO1FBQ3RELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVhLFdBQUcsR0FBakIsVUFBa0IsSUFBbUIsRUFBRSxJQUFtQjtRQUN0RCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFYSxZQUFJLEdBQWxCLFVBQW1CLElBQW1CLEVBQUUsSUFBbUI7UUFDdkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVNLCtCQUFhLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHNCQUFXLDJCQUFNO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTtJQUVNLHVCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwyQkFBUyxHQUFoQjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7UUFDakIsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7UUFFakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHFCQUFHLEdBQVYsVUFBVyxLQUE2QjtRQUNwQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztTQUVuQjthQUFNO1lBQ0gsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBRyxHQUFWLFVBQVcsR0FBa0I7UUFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVoQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0scUJBQUcsR0FBVixVQUFXLEdBQWtCO1FBQ3pCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVhLFlBQUksR0FBbEIsVUFBbUIsSUFBWSxFQUFFLElBQVc7UUFBWCxrQ0FBVztRQUN4QyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0scUJBQUcsR0FBVixVQUFXLEdBQWtCO1FBQ3pCLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQS9IWSwwQkFBTzs7Ozs7Ozs7Ozs7O0FDRnBCLElBQU0sT0FBTyxHQUFHLFVBQUMsRUFBa0MsRUFDbEMsSUFBdUIsRUFDdkIsSUFBYTtJQUMxQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUMxQixFQUFFLENBQUMsSUFBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCO1NBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDakMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNsQjtTQUFNO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0FBQ0wsQ0FBQyxDQUFDO0FBRUY7O0dBRUc7QUFDSDtJQVdJLGtCQUFtQixDQUFTLEVBQUUsQ0FBUztRQVZ2Qzs7V0FFRztRQUNJLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFFYjs7V0FFRztRQUNJLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFHVCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHNCQUFHLEdBQVYsVUFBVyxJQUF1QixFQUFFLElBQWE7UUFBakQsaUJBT0M7UUFORyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNULEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHNCQUFHLEdBQVYsVUFBVyxJQUF1QixFQUFFLElBQWE7UUFBakQsaUJBT0M7UUFORyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNULEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1osS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxzQkFBRyxHQUFWLFVBQVcsSUFBdUIsRUFBRSxJQUFhO1FBQWpELGlCQU9DO1FBTkcsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNaLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksc0JBQUcsR0FBVixVQUFXLElBQXVCLEVBQUUsSUFBYTtRQUFqRCxpQkFPQztRQU5HLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1QsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWixLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHNCQUFHLEdBQVYsVUFBVyxJQUF1QixFQUFFLElBQWE7UUFBakQsaUJBT0M7UUFORyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNULEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1osS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQS9GWSw0QkFBUTs7Ozs7Ozs7Ozs7O0FDWnJCO0lBQ0ksaUJBQTBCLENBQUssRUFDTCxDQUFLLEVBQ0wsQ0FBSztRQUZMLHlCQUFLO1FBQ0wseUJBQUs7UUFDTCx5QkFBSztRQUZMLE1BQUMsR0FBRCxDQUFDLENBQUk7UUFDTCxNQUFDLEdBQUQsQ0FBQyxDQUFJO1FBQ0wsTUFBQyxHQUFELENBQUMsQ0FBSTtJQUMvQixDQUFDO0lBRUQsc0JBQWtCLGFBQUU7YUFBcEI7WUFDSSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsZUFBSTthQUF0QjtZQUNJLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixjQUFHO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRU0seUJBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFYSxjQUFNLEdBQXBCLFVBQXFCLElBQW1CLEVBQUUsSUFBbUI7UUFDekQsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVhLFdBQUcsR0FBakIsVUFBa0IsSUFBbUIsRUFBRSxJQUFtQjtRQUN0RCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELHNCQUFXLHdCQUFHO2FBQWQ7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFYSxXQUFHLEdBQWpCLFVBQWtCLElBQW1CLEVBQUUsSUFBbUI7UUFDdEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFYSxjQUFNLEdBQXBCLFVBQXFCLElBQW1CLEVBQUUsR0FBVztRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNNLHFCQUFHLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFYSxXQUFHLEdBQWpCLFVBQWtCLElBQW9CLEVBQUUsSUFBb0I7UUFDeEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFYSxXQUFHLEdBQWpCLFVBQWtCLElBQW1CLEVBQUUsSUFBbUI7UUFDdEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFYSxpQ0FBeUIsR0FBdkMsVUFBeUMsTUFBYyxFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQy9FLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLEdBQUcsTUFBTSxDQUFDO1FBRTlDLElBQU0sQ0FBQyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzNDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ25DLElBQU0sQ0FBQyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRTNDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRWEsV0FBRyxHQUFqQixVQUFrQixJQUFtQixFQUFFLElBQW1CO1FBQ3RELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRWEsWUFBSSxHQUFsQixVQUFtQixJQUFtQixFQUFFLElBQW1CO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFYSxpQkFBUyxHQUF2QixVQUFpRCxHQUFNO1FBQ25ELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUVoQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSwrQkFBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBVywyQkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7OztPQUFBO0lBRU0sdUJBQUssR0FBWjtRQUNJLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sMkJBQVMsR0FBaEI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBRyxHQUFWLFVBQVcsS0FBNkI7UUFDcEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7U0FDbkI7YUFBTTtZQUNILElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHFCQUFHLEdBQVYsVUFBVyxHQUFrQjtRQUN6QixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVoQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0scUJBQUcsR0FBVixVQUFXLEdBQWtCO1FBQ3pCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxpQkFBUyxHQUF2QixVQUF3QixLQUE4QjtRQUNsRCxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdhLFlBQUksR0FBbEIsVUFBbUIsSUFBWSxFQUFFLElBQVcsRUFBRSxJQUFXO1FBQXhCLGtDQUFXO1FBQUUsa0NBQVc7UUFDckQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFYSxnQkFBUSxHQUF0QixVQUF1QixJQUFTO1FBQzVCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxxQkFBRyxHQUFWLFVBQVcsR0FBa0I7UUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBM0pZLDBCQUFPOzs7Ozs7Ozs7Ozs7QUNEcEI7SUFDSSxpQkFBMEIsQ0FBSyxFQUNMLENBQUssRUFDTCxDQUFLLEVBQ0wsQ0FBSztRQUhMLHlCQUFLO1FBQ0wseUJBQUs7UUFDTCx5QkFBSztRQUNMLHlCQUFLO1FBSEwsTUFBQyxHQUFELENBQUMsQ0FBSTtRQUNMLE1BQUMsR0FBRCxDQUFDLENBQUk7UUFDTCxNQUFDLEdBQUQsQ0FBQyxDQUFJO1FBQ0wsTUFBQyxHQUFELENBQUMsQ0FBSTtJQUMvQixDQUFDO0lBRUQsc0JBQWtCLGVBQUk7YUFBdEI7WUFDSSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGNBQUc7YUFBckI7WUFDSSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRU0seUJBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVhLGNBQU0sR0FBcEIsVUFBcUIsSUFBbUIsRUFBRSxJQUFtQjtRQUN6RCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELHNCQUFXLHdCQUFHO2FBQWQ7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUVhLFdBQUcsR0FBakIsVUFBa0IsSUFBbUIsRUFBRSxJQUFtQjtRQUN0RCxPQUFPLElBQUksT0FBTyxDQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzNCLENBQUM7SUFDTixDQUFDO0lBRWEsV0FBRyxHQUFqQixVQUFrQixJQUFtQixFQUFFLElBQW1CO1FBQ3RELE9BQU8sSUFBSSxPQUFPLENBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDM0IsQ0FBQztJQUNOLENBQUM7SUFFYSxZQUFJLEdBQWxCLFVBQW1CLElBQW1CLEVBQUUsSUFBbUI7UUFDdkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMvQixDQUFDO0lBQ04sQ0FBQztJQUVhLGlCQUFTLEdBQXZCLFVBQWlELEdBQU07UUFDbkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUVoQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSwrQkFBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBVywyQkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RixDQUFDOzs7T0FBQTtJQUVNLHVCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sMkJBQVMsR0FBaEI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBRyxHQUFWLFVBQVcsS0FBNkI7UUFDcEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7U0FDbkI7YUFBTTtZQUNILElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBRyxHQUFWLFVBQVcsR0FBa0I7UUFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBRyxHQUFWLFVBQVcsR0FBa0I7UUFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxpQkFBUyxHQUF2QixVQUF3QixLQUFzRDtRQUMxRSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFYSxZQUFJLEdBQWxCLFVBQW1CLElBQVksRUFBRSxJQUFXLEVBQUUsSUFBVyxFQUFFLElBQVc7UUFBckMsa0NBQVc7UUFBRSxrQ0FBVztRQUFFLGtDQUFXO1FBQ2xFLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVhLGdCQUFRLEdBQXRCLFVBQXVCLElBQVM7UUFDNUIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDTSwrQkFBYSxHQUFwQixVQUFxQixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQzNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLHFCQUFHLEdBQVYsVUFBVyxHQUFrQjtRQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUF2SlksMEJBQU87Ozs7Ozs7Ozs7OztBQ0ZwQixTQUFTLGNBQWMsQ0FBQyxJQUFZO0lBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMzQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0QztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCwyQkFBMkI7QUFDM0IsU0FBUyxVQUFVLENBQUMsR0FBVztJQUMzQixJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztXQUMvQixHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzVCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDeEIsRUFBRTtRQUNDLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNQLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDakIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIs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LENBQUM7QUFDOUMsQ0FBQztBQU5ELG9DQU1DOzs7Ozs7Ozs7O0FDdkZELCtEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxRQUFRO0FBRVIsNkNBQXFFO0FBQTVELCtHQUFVLFFBQVU7QUFDN0IsNENBQWlFO0FBQXhELDJHQUFTLFFBQVE7QUFDMUIsMkNBQW1EO0FBQTFDLHdHQUFRLFFBQU87QUFDeEIsNENBQWlFO0FBQXhELDJHQUFTLFFBQVE7QUFDMUIsOENBQXVFO0FBQTlELGlIQUFXLFFBQVU7QUFDOUIsOENBQXVFO0FBQTlELGlIQUFXLFFBQVU7QUFDOUIsdURBQTJDO0FBRTNDLGdEQUFnRTtBQUF2RCxzSEFBYSxRQUFXO0FBRWpDLE1BQU07QUFFTiwyQ0FBOEQ7QUFBckQsMEdBQVEsUUFBUztBQUMxQixpREFBK0Q7QUFBdEQsc0hBQWEsUUFBVTtBQUNoQywwQ0FBOEM7QUFBckMscUdBQU0sUUFBTzs7Ozs7Ozs7QUNsQnRCLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Imc0My1saWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkc0M0xpYlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRzQzTGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0ICogZnJvbSBcIi4vbm9kZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93ZWJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnL2d0b29scy1jb25maWcuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kZWNvcmF0b3JzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9jYW52YXMtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLXV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9kZXByZWNhdGVkL2NoZWNrZXJzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9kb20tZ2V0XCI7XHJcblxyXG4vLyBUT0RPIG5vdCB3b3JrIG9uIGJhY2tlbmRcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vZG9tL2VsZW1lbnQtYnVpbGRlclwiO1xyXG5cclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vZW51bXNcIjtcclxuXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2Vycm9yc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdmFsaWRhdG9yc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbWlzY1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BoeXNpY3NcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QtZGF0YWJhc2UuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5maXh0dXJlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9wYWdpbmF0ZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL3V0aWxzXCI7XHJcbiIsIi8vIFVUSUxTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ0NoZWNrZXJzXCI7XHJcblxyXG4vLyBNT0RFTFNcclxuXHJcbmV4cG9ydCB7IEdlbmRlclR5cGUsIEdlbmRlciB9IGZyb20gXCIuL21vZGVscy9nZW5kZXIubW9kZWxcIjtcclxuXHJcbi8vIEVOVU1TXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtcy9lbmNvZGluZ3MuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtcy9maWxlLXR5cGVzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMvaHR0cC1zdGF0dXMtY29kZXMuZW51bVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtcy9rZXlzLmVudW1cIjtcclxuXHJcbi8vIENPTVBPTkVOVFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHMva2V5LXZhbHVlLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9udW1iZXItY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGUtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRvclwiO1xyXG5cclxuLy8gTUFUSFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGgvdmVjdG9yMmZcIjtcclxuXHJcbi8vIENPTkZJR1xyXG5cclxuZXhwb3J0IHsgaW5pdENvbmZpZyB9IGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG4vLyBJTlRFUkZBQ0VTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlcy9rZXktdmFsdWUuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzL3N0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzL3NpemUuaW50ZXJhZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlcy9wb2ludC5pbnRlcmFmYWNlXCI7XHJcblxyXG4vLyBURVNUU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QtZGF0YWJhc2UuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5maXh0dXJlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9wYWdpbmF0ZS5tb2RlbFwiO1xyXG4iLCJpbXBvcnQgeyBGaWxlVHlwZXMgfSBmcm9tIFwiLi4vZW51bXMvZmlsZS10eXBlcy5lbnVtXCI7XHJcblxyXG4vKipcclxuICogIEZpbGVNYW5hZ2VyIGlzIGNsYXNzIHVzZWQgZm9yIG9wZW4gYW5kIHNhdmUgZmlsZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciB1cGxvYWQgZmlsZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIC8qKlxyXG4gICAgICogcHJpdmF0ZSBpbnB1dCB1c2VkIGZvciBvcGVuaW5nIHN5c3RlbSB3aW5kb3cgZm9yIGRvd25sb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGluazogSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcclxuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZmlsZXNcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIHRleHQgY29udGVudCBpbnRvIGZpbGUgd2l0aCBzcGVjaWZpYyBleHRlbnNpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgZmlsZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBmaWxlIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSB0eXBlIGZpbGUge0BsaW5rIEZpbGVUeXBlc30uIERlZmF1bCB2YWx1ZSBpcyB7QGxpbmsgRmlsZVR5cGVzLlRYVH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNhdmVGaWxlKG5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nLCB0eXBlOiBGaWxlVHlwZXMgPSBGaWxlVHlwZXMuVFhUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5saW5rLmhyZWYgICAgID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbdGV4dF0sIHt0eXBlfSkpO1xyXG4gICAgICAgIHRoaXMubGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5rLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGltYWdlIGludG8gZmlsZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGltYWdlIG5hbWVcclxuICAgICAqIEBwYXJhbSBpbWFnZSBpbWFnZSBlbGVtZW50IG9yIHBhdGggdG8gaW1hZ2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNhdmVJbWFnZShuYW1lOiBzdHJpbmcsIGltYWdlOiBzdHJpbmcgfCBIVE1MSW1hZ2VFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5saW5rLmhyZWYgICAgID0gdHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiID8gaW1hZ2UgOiBpbWFnZS5zcmM7XHJcbiAgICAgICAgdGhpcy5saW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICB0aGlzLmxpbmsuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW1hZ2UgdXNpbmcgc3lzdGVtIGZpbGUgcGlja2VyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICBmdW5jIGxvYWRpbmcgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRJbWFnZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgICAgICAgICAgICAgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgICAgICAgICAgICA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgICA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZnVuYyhpbWFnZSwgZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1swXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGZpbGUgdXNpbmcgc3lzdGVtIGZpbGUgcGlja2VyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZ1bmMgbG9hZGluZyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEZpbGUoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlczogYW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzICA9IChlLnRhcmdldCBhcyBhbnkpLmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IGZ1bmMocmVhZGVyLnJlc3VsdCwgZmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGJpbmFyeSBmaWxlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmdW5jIGxvYWRpbmcgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRCaW5hcnlGaWxlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZU5hbWU6IHN0cmluZykgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzICA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiBmdW5jKHJlYWRlci5yZXN1bHQsIGZpbGVzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2xpY2soKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgR0xvZ2dlckluc3RhbmNlIHtcclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ/OiBzdHJpbmcgfCB7IGNvbnN0cnVjdG9yOiB7IG5hbWU6IHN0cmluZyB9IH0pIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKC4uLm1lc3NhZ2VzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJsb2dcIiwgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm4oLi4ubWVzc2FnZXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChcIndhcm5cIiwgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKC4uLm1lc3NhZ2VzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJlcnJvclwiLCB0aGlzLmNvbnRleHQsIC4uLm1lc3NhZ2VzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMb2dnZXIgZXh0ZW5kcyBHTG9nZ2VySW5zdGFuY2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMaW5lKHN0ZXBzID0gMik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKTtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhY2spIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpW3N0ZXBzXS50cmltKCkubWF0Y2goL1xcKC4qXFwpLyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImF0IFwiICsgcmVzdWx0c1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBzdHJpbmcgfCB7IGNvbnN0cnVjdG9yOiB7IG5hbWU6IHN0cmluZyB9IH0pIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBza2lwQ29udGV4dHMgPSBbXCJyZW5kZXJXb3JsZFN0YXRpY1wiLCBcIkNhbnZhc0RpcmVjdGl2ZVwiLCBcIldvcmxkUmVuZGVyZXJTZXJ2aWNlXCIsIFwidmlld3BvcnRcIiwgXCJXb3JsZElucHV0U2VydmljZVwiXTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNraXBSZWdleHAgICA9IG5ldyBSZWdFeHAoYCR7R0xvZ2dlci5za2lwQ29udGV4dHMuam9pbihcInxcIil9YCwgXCJnaVwiKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByaW50KHR5cGU6IFwibG9nXCIgfCBcIndhcm5cIiB8IFwiZXJyb3JcIiwgY29udGV4dDogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9ID0gXCJcIiwgLi4uZGF0YTogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZWFsQ29udGV4dCA9IGNvbnRleHQgJiYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiID8gY29udGV4dCA6IGNvbnRleHQ/LmNvbnN0cnVjdG9yPy5uYW1lKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgICAgICA9IHJlYWxDb250ZXh0ICYmIHJlYWxDb250ZXh0Lm1hdGNoKEdMb2dnZXIuc2tpcFJlZ2V4cCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHJlYWxDb250ZXh0ID8gYFske3JlYWxDb250ZXh0fV0gYCA6IFwiXCI7XHJcbiAgICAgICAgY29uc29sZVt0eXBlXShwcmVmaXgsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9nKG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLCBjb250ZXh0Pzogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9KTogdm9pZCB7XHJcbiAgICAgICAgR0xvZ2dlci5wcmludChcImxvZ1wiLCBjb250ZXh0LCBtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgR01hcDxULCBTPiBleHRlbmRzIE1hcDxULCBTPiB7XHJcbiAgICBwdWJsaWMgZ2V0KGtleTogVCwgZGVmYXVsdFZhbHVlPzogUyk6IFMgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KSB8fCBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9yQ3JlYXRlKGtleTogVCwgZGVmYXVsdFZhbHVlOiBTKTogUyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZmlsZS1tYW5hZ2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ctbG9nZ2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ctbWFwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL251bWJlci1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BhZ2luYXRvclwiO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFNpbXBsZVdyYXBwZXIge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5VmFsdWVDb3VudGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YToge1trZXk6IHN0cmluZ106IG51bWJlciB9ICAgICAgICAgICAgICAgID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc3VsdHM6IFNpbXBsZVdyYXBwZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzZWQgICAgICAgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgYWRkKGl0ZW06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChpdGVtIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbV0hKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3BOKGNvdW50OiBudW1iZXIpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzLnNsaWNlKDAsIGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKHtrZXksIGNvdW50OiB0aGlzLmRhdGFba2V5XSF9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3VsdHMuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTnVtYmVyQ291bnRlciB7XHJcbiAgICBwcml2YXRlIG1pbiAgICAgICAgICAgICAgICAgICAgICAgID0gSW5maW5pdHk7XHJcbiAgICBwcml2YXRlIG1heCAgICAgICAgICAgICAgICAgICAgICAgID0gLUluZmluaXR5O1xyXG4gICAgcHJpdmF0ZSBzdW0gICAgICAgICAgICAgICAgICAgICAgICA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG51bWJlcnM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIGFkZCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJzLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiA9IE1hdGgubWluKHRoaXMubWluLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5tYXggPSBNYXRoLm1heCh0aGlzLm1heCwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3VtICs9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1heCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXZlcmFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1bSAvIHRoaXMubnVtYmVycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEFsbChpdGVtczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKHRoaXMuYWRkLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHVG9vbHNDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2d0b29scy1jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3I8VCA9IHVua25vd24+IHtcclxuICAgIHByaXZhdGUgYWN0TGlzdDogVFtdO1xyXG4gICAgcHJpdmF0ZSBhY3R1YWxQYWdlICAgICAgICAgICAgICAgICAgID0gMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGFzdFBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhbGxJdGVtczogVFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaXRlbXNQZXJQYWdlID0gR1Rvb2xzQ29uZmlnLlBBR0VfTElNSVQpIHtcclxuICAgICAgICB0aGlzLmxhc3RQYWdlID0gYWxsSXRlbXMgPyBNYXRoLmZsb29yKGFsbEl0ZW1zLmxlbmd0aCAvIHRoaXMuaXRlbXNQZXJQYWdlKSA6IDA7XHJcbiAgICAgICAgdGhpcy5hY3RMaXN0ICA9IHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWN0dWFsUGFnZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdHVhbFBhZ2UgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQYWdlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RQYWdlICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFnZXNBcm91bmQoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPCAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbMSwgMiwgMywgNCwgNV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPiB0aGlzLmxhc3RQYWdlIC0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMixcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAxLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgKyAxLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlIC0gMSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgKyAxLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgKyAyLFxyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgKyAzLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExpc3QoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTmV4dCgpOiBUW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbFBhZ2UgPCB0aGlzLmxhc3RQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSsrO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ290VG8ocGFnZTogbnVtYmVyKTogVFtdIHtcclxuICAgICAgICBpZiAocGFnZSA+PSAwICYmIHBhZ2UgPD0gdGhpcy5sYXN0UGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSBwYWdlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub1ByZXYoKTogVFtdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UtLTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9GaXJzdCgpOiBUW10ge1xyXG4gICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9MYXN0KCk6IFRbXSB7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gdGhpcy5sYXN0UGFnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlQ2FsY0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZUNhbGNMaXN0KCk6IFRbXSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgID0gdGhpcy5hY3R1YWxQYWdlICogdGhpcy5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5hY3RMaXN0ID0gdGhpcy5hbGxJdGVtcyA/IHRoaXMuYWxsSXRlbXMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgdGhpcy5pdGVtc1BlclBhZ2UpIDogW107XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdExpc3Q7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSBcIi4vZ3Rvb2xzLWNvbmZpZy5pbnRlcmZhY2VcIjtcclxuXHJcbmxldCBjb25maWc6IEdUb29sc0NvbmZpZ0ludGVyZmFjZTtcclxuXHJcbmNvbnN0IGNoZWNrQ29uZmlnID0gKCk6IEdUb29sc0NvbmZpZ0ludGVyZmFjZSA9PiB7XHJcbiAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFVSTF9BUEkgICA6IFwiXCIsXHJcbiAgICAgICAgICAgIExBTkdVQUdFICA6IFwiXCIsXHJcbiAgICAgICAgICAgIFZFUlNJT04gICA6IFwiXCIsXHJcbiAgICAgICAgICAgIFBBR0VfTElNSVQ6IDAsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNsYXNzIENsYXNzT3duQ29uZmlnIGV4dGVuZHMgQ2xhc3NHVG9vbHNDb25maWcgaW1wbGVtZW50cyBPd25Db25maWdJbnRlcmZhY2Uge1xyXG4gKiAgICAgcHVibGljIG5hbWUgPSBcIlwiO1xyXG4gKiB9XHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBPd25Db25maWcgPSBuZXcgQ2xhc3NPd25Db25maWcoKTtcclxuICpcclxuICogQHNlZSBHVG9vbHNDb25maWdJbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc0dUb29sc0NvbmZpZyBpbXBsZW1lbnRzIEdUb29sc0NvbmZpZ0ludGVyZmFjZSB7XHJcbiAgICBwdWJsaWMgZ2V0IFVSTF9BUEkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5VUkxfQVBJO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgUEFHRV9MSU1JVCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLlBBR0VfTElNSVQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBMQU5HVUFHRSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLkxBTkdVQUdFO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgVkVSU0lPTigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbmZpZygpLlZFUlNJT047XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbmZpZyhhcHBDb25maWc6IEdUb29sc0NvbmZpZ0ludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uZmlnID0gYXBwQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR1Rvb2xzQ29uZmlnID0gbmV3IENsYXNzR1Rvb2xzQ29uZmlnKCk7XHJcbiIsImV4cG9ydCBjb25zdCBBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUyA9IHRydWU7XHJcblxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eURlY29yYXRvciB9IGZyb20gXCIuLi90eXBlcy9wcm9wZXJ0eS1kZWNvcmF0b3IudHlwZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlcHJlY2F0ZWQodmFsdWU/OiBzdHJpbmcpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBhbnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9sZE1ldGhvZCAgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSAoLi4uYXJnczogYW55W10pOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNZXRob2QgXCIgKyB0YXJnZXQuY29uc3RydWN0b3IubmFtZSArIFwiLlwiICsgcHJvcGVydHlLZXkgKyBcIiBpcyBkZXByZWNhdGVkLiBcIiArICh2YWx1ZSB8fCBcIlwiKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkTWV0aG9kLmFwcGx5KHRhcmdldCwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEZpbmFsQ2xhc3M8VCBleHRlbmRzIG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gb2JqZWN0Pih0YXJnZXQ6IFQpOiBUIHtcclxuICAgIHJldHVybiBjbGFzcyBGaW5hbCBleHRlbmRzIHRhcmdldCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgaWYgKG5ldy50YXJnZXQgIT09IEZpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5oZXJpdCBmcm9tIGZpbmFsIGNsYXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZGVwcmVjYXRlZC5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmluYWwtY2xhc3MuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hcHBlci5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2luZ2xldG9uLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93YXRjaC5kZWNvcmF0b3JcIjtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIE1hcHBlcihwYXJhbXM6IHsgb25HZXQ/OiAob2xkVmFsdWU6IGFueSkgPT4gYW55LCBvblNldD86IChvbGRWYWx1ZTogYW55KSA9PiBhbnkgfSA9IHt9LCBwcmVmaXggPSBcIl9cIik6IGFueSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKCFkZWxldGUgdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbmV3TmFtZSAgICAgICAgICAgICAgICAgICAgICAgID0gcHJlZml4ICsga2V5O1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMub25HZXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSAoKSA9PiBwYXJhbXMub25HZXQodGFyZ2V0W25ld05hbWVdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gKCkgPT4gdGFyZ2V0W25ld05hbWVdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5vblNldCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9IChuZXdWYWw6IGFueSkgPT4gdGFyZ2V0W25ld05hbWVdID0gcGFyYW1zLm9uU2V0KG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9ICh2YWx1ZSkgPT4gdGFyZ2V0W25ld05hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcclxuICAgIH07XHJcbn1cclxuIiwiY29uc3QgaW5zdGFuY2VzOiB7IFtjbGFzc05hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2luZ2xldG9uPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IHt9Pihjb25zdHJ1Y3RvcjogVCk6IGFueSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlc1tjbGFzc05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnN0YW5jZSBvZiBcIiArIGNsYXNzTmFtZSArIFwiIGlzIGFscmVhZHkgY3JlYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnN0YW5jZXNbY2xhc3NOYW1lXSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eURlY29yYXRvciB9IGZyb20gXCIuLi90eXBlcy9wcm9wZXJ0eS1kZWNvcmF0b3IudHlwZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXYXRjaE9wdGlvbnMge1xyXG4gICAgZW51bWVyYWJsZT86IGJvb2xlYW47XHJcbiAgICBjb25maWd1cmFibGU/OiBib29sZWFuO1xyXG4gICAgcHJlZml4Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gV2F0Y2gob25TZXQ/OiAobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSkgPT4gYW55LCBvcHRpb25zPzogV2F0Y2hPcHRpb25zKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgY29uc3QgcHJlZml4ID0gb3B0aW9ucyAmJiBvcHRpb25zLnByZWZpeCB8fCBcIl9cIjtcclxuXHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNldHRlciA9IChuZXdWYWw6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob25TZXQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtwcmVmaXggKyBrZXldID0gb25TZXQobmV3VmFsLCB0YXJnZXRbcHJlZml4ICsga2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0W3ByZWZpeCArIGtleV0gPSBuZXdWYWw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCFkZWxldGUgdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0YXJnZXRbcHJlZml4ICsga2V5XSxcclxuICAgICAgICAgICAgc2V0ICAgICAgICAgOiBzZXR0ZXIsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGUgIDogKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuZW51bWVyYWJsZSA9PT0gXCJib29sZWFuXCIpID8gb3B0aW9ucy5lbnVtZXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5jb25maWd1cmFibGUgPT09IFwiYm9vbGVhblwiKSA/IG9wdGlvbnMuY29uZmlndXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTm90QnJvd3NlckV4Y2VwdGlvbiB9IGZyb20gXCIuLi9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhcmcxOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQsIGFyZzI6IG51bWJlciwgYXJnMzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZzEgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FudmFzID0gYXJnMTtcclxuICAgICAgICAgICAgaWYgKGFyZzIgJiYgYXJnMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzIsIGFyZzMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZzEgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBDYW52YXNNYW5hZ2VyLmltYWdlVG9DYW52YXMoYXJnMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZzEgJiYgYXJnMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzEsIGFyZzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYWxDb250ZXh0ID0gdGhpcy5sb2NhbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGVhckNhbnZhcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q2FudmFzU2l6ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpOiB2b2lkIHtcclxuICAgICAgICBjYW52YXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNoYWRvdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJsdXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciAgID0gY29sb3I7XHJcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgICAgPSBibHVyO1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0geDtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbWFnZVRvQ2FudmFzKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoICA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY3R4ICAgICA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRMaW5lRGFzaChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgLi4uYXJnczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIGN0eC5zZXRMaW5lRGFzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGN0eC5zZXRMaW5lRGFzaChhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjYWxjVGV4dFdpZHRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2YWx1ZTogc3RyaW5nLCBmb250Pzogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoZm9udCkge1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IGZvbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHZhbHVlKS53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbnZhc1RvSW1hZ2UoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlICA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyAgICA9IGNhbnZhcy50b0RhdGFVUkwoZm9ybWF0KTtcclxuICAgICAgICBpbWFnZS53aWR0aCAgPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gQ2FudmFzTWFuYWdlci5jYW52YXNUb0ltYWdlKHRoaXMubG9jYWxDYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaGFkb3coeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJsdXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ29udGV4dCkge1xyXG4gICAgICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyh0aGlzLmxvY2FsQ29udGV4dCwgeCwgeSwgY29sb3IsIGJsdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhmb3JtYXQgPSBcImltYWdlL3BuZ1wiKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5sb2NhbENhbnZhcy50b0RhdGFVUkwoZm9ybWF0KSwgXCJfYmxhbmtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ2FudmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ29udGV4dCkge1xyXG4gICAgICAgICAgICBDYW52YXNNYW5hZ2VyLmNsZWFyQ2FudmFzKHRoaXMubG9jYWxDb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENhbnZhc1NpemUod2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTogdm9pZCB7XHJcbiAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRDYW52YXNTaXplKHRoaXMubG9jYWxDYW52YXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRUbyhlbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxvY2FsQ2FudmFzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMmYgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IyZlwiO1xyXG5pbXBvcnQgeyBDYW52YXNNYW5hZ2VyIH0gZnJvbSBcIi4vY2FudmFzLW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2hlY2tlcnMgfSBmcm9tIFwiLi9kZXByZWNhdGVkL0NoZWNrZXJzXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzU2hhZG93Q29uZmlnIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBibHVyOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNDb25maWcge1xyXG4gICAgc2hhZG93PzogQ2FudmFzU2hhZG93Q29uZmlnO1xyXG4gICAgcG9zaXRpb24/OiBudW1iZXIgfCBWZWN0b3IyZjtcclxuICAgIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgICBzaXplPzogbnVtYmVyIHwgVmVjdG9yMmY7XHJcbiAgICBiZ0ltYWdlPzoge1xyXG4gICAgICAgIGltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHc6IG51bWJlcjtcclxuICAgICAgICBoOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgZmlsbDogYm9vbGVhbjtcclxuICAgIGZpbGxDb2xvcjogc3RyaW5nO1xyXG4gICAgZHJhdzogYm9vbGVhbjtcclxuICAgIGJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICByYWRpdXM6IG51bWJlciB8IHtcclxuICAgICAgICB0bDogbnVtYmVyO1xyXG4gICAgICAgIHRyOiBudW1iZXI7XHJcbiAgICAgICAgYnI6IG51bWJlcjtcclxuICAgICAgICBibDogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGxpbmVDYXA6IFwiYnV0dFwiIHwgXCJyb3VuZFwiIHwgXCJzcXVhcmVcIjtcclxuICAgIGpvaW5UeXBlOiBcImJldmVsXCIgfCBcInJvdW5kXCIgfCBcIm1pdGVyXCI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBzdGFydEFuZ2xlOiBudW1iZXI7XHJcbiAgICBlbmRBbmdsZTogbnVtYmVyO1xyXG4gICAgb2Zmc2V0OiBhbnk7XHJcbiAgICBsaW5lRGFzaDogbnVtYmVyW107XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNoYWRvdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbmZpZz86IENhbnZhc1NoYWRvd0NvbmZpZyk6IHZvaWQge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0U2hhZG93KGNvbnRleHQsIGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLmNvbG9yLCBjb25maWcuYmx1cik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyhjb250ZXh0LCAwLCAwLCBcImJsYWNrXCIsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzKHJlczogQ2FudmFzQ29uZmlnKTogdm9pZCB7XHJcbiAgICBpZiAocmVzLnNoYWRvdykge1xyXG4gICAgICAgIHNldFNoYWRvdyhyZXMuY3R4LCByZXMuc2hhZG93KTtcclxuICAgIH1cclxuICAgIGlmIChyZXMuYmdJbWFnZSkge1xyXG4gICAgICAgIHJlcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHJlcy5jdHguY2xpcCgpO1xyXG4gICAgICAgIGlmIChyZXMuYmdJbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5kcmF3SW1hZ2UocmVzLmJnSW1hZ2UsIHJlcy54LCByZXMueSwgcmVzLndpZHRoLCByZXMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHguZHJhd0ltYWdlKHJlcy5iZ0ltYWdlLmltZyxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLngsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS55LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UudyxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLmgsXHJcbiAgICAgICAgICAgICAgICByZXMueCxcclxuICAgICAgICAgICAgICAgIHJlcy55LFxyXG4gICAgICAgICAgICAgICAgcmVzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVzLmZpbGwpIHtcclxuICAgICAgICByZXMuY3R4LmZpbGxTdHlsZSA9IHJlcy5maWxsQ29sb3I7XHJcbiAgICAgICAgcmVzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zaGFkb3cpIHtcclxuICAgICAgICBzZXRTaGFkb3cocmVzLmN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmN0eC5saW5lQ2FwICA9IHJlcy5saW5lQ2FwO1xyXG4gICAgcmVzLmN0eC5saW5lSm9pbiA9IHJlcy5qb2luVHlwZTtcclxuICAgIGlmICh0eXBlb2YgcmVzLmN0eC5zZXRMaW5lRGFzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVzLmN0eC5zZXRMaW5lRGFzaChyZXMubGluZURhc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzLmRyYXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXMuY3R4LmxpbmVXaWR0aCAgID0gcmVzLmJvcmRlcldpZHRoO1xyXG4gICAgcmVzLmN0eC5zdHJva2VTdHlsZSA9IHJlcy5ib3JkZXJDb2xvcjtcclxuICAgIHJlcy5jdHguc3Ryb2tlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXREZWYob2JqOiBhbnkpOiBDYW52YXNDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgY3R4OiBvYmouY3R4LFxyXG4gICAgICAgIGRyYXc6IHR5cGVvZiBvYmouYm9yZGVyQ29sb3IgIT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai5ib3JkZXJXaWR0aCAhPT0gXCJ1bmRlZmluZWRcIixcclxuICAgICAgICBlbmRBbmdsZTogTWF0aC5QSSAqIDIsXHJcbiAgICAgICAgZmlsbDogdHlwZW9mIG9iai5maWxsQ29sb3IgIT09IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgZmlsbENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGpvaW5UeXBlOiBcImJldmVsXCIsXHJcbiAgICAgICAgbGluZUNhcDogXCJyb3VuZFwiLFxyXG4gICAgICAgIGxpbmVEYXNoOiBbXSxcclxuICAgICAgICBvZmZzZXQ6IG51bGwsXHJcbiAgICAgICAgcmFkaXVzOiB7dGw6IDAsIHRyOiAwLCBicjogMCwgYmw6IDB9LFxyXG4gICAgICAgIHN0YXJ0QW5nbGU6IDAsXHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtYWtlUG9zQW5kU2l6ZShkZWY6IENhbnZhc0NvbmZpZywgb2JqOiBhbnkpOiBDYW52YXNDb25maWcge1xyXG4gICAgY29uc3QgcmVzOiBDYW52YXNDb25maWcgPSAkLmV4dGVuZChkZWYsIG9iaikgYXMgQ2FudmFzQ29uZmlnO1xyXG4gICAgY29uc3QgY2hlY2tBdHRyaWJ1dGUgICAgPSAoYXR0ck5hbWU6IGtleW9mIENhbnZhc0NvbmZpZywgcGFydEE6IGtleW9mIENhbnZhc0NvbmZpZywgcGFydEI6IGtleW9mIENhbnZhc0NvbmZpZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzW2F0dHJOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVzW2F0dHJOYW1lXTtcclxuICAgICAgICBpZiAoQ2hlY2tlcnMuaXNOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0Ql0gPSB2YWx1ZVsxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSAodmFsdWUgYXMgVmVjdG9yMmYpLng7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRCXSA9ICh2YWx1ZSBhcyBWZWN0b3IyZikueTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXR0cmlidXRlKFwic2l6ZVwiLCBcIndpZHRoXCIsIFwic2l6ZVwiKTtcclxuICAgIGNoZWNrQXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJ4XCIsIFwieVwiKTtcclxuXHJcbiAgICBpZiAocmVzLmNlbnRlcikge1xyXG4gICAgICAgIHJlcy54IC09IHJlcy53aWR0aCA+PiAxO1xyXG4gICAgICAgIHJlcy55IC09IHJlcy5oZWlnaHQgPj4gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Bvc0FuZFNpemUob2JqOiBDYW52YXNDb25maWcsIG5hbWU6IHN0cmluZyk6IENhbnZhc0NvbmZpZyB7XHJcblxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqLnggPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai55ID09PSBcInVuZGVmaW5lZFwiKSAmJiB0eXBlb2Ygb2JqLnBvc2l0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1BPU0lUSU9OOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodHlwZW9mIG9iai53aWR0aCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLmhlaWdodCA9PT0gXCJ1bmRlZmluZWRcIikgJiYgdHlwZW9mIG9iai5zaXplID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1NJWkU6IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai53aWR0aCA8PSAwIHx8IG9iai5oZWlnaHQgPD0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSF9ORUdfUE9TSVRJT046IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluaXREZWYob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1V0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZG9BcmMob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZXMgPSByZW1ha2VQb3NBbmRTaXplKGNoZWNrUG9zQW5kU2l6ZShvYmosIFwiQXJjXCIpLCBvYmopO1xyXG5cclxuICAgICAgICByZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzLmN0eC5lbGxpcHNlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5lbGxpcHNlKHJlcy54ICsgKHJlcy53aWR0aCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy55ICsgKHJlcy5oZWlnaHQgPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGggPj4gMSxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQgPj4gMSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgICAgIHJlcy5lbmRBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuY3R4LnJlY3QocmVzLnggKyAocmVzLndpZHRoID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLnkgKyAocmVzLmhlaWdodCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCA+PiAxLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCA+PiAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb2Nlc3MocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRvUmVjdChvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IGNoZWNrUG9zQW5kU2l6ZShvYmosIFwiUmVjdFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmoucmFkaXVzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChDaGVja2Vycy5pc051bWJlcihvYmoucmFkaXVzKSkge1xyXG4gICAgICAgICAgICAgICAgb2JqLnJhZGl1cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBibDogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICBicjogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB0bDogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB0cjogb2JqLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWYucmFkaXVzIGFzIGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWYucmFkaXVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnJhZGl1c1trZXldID0gb2JqLnJhZGl1c1trZXldIHx8IChkZWYucmFkaXVzIGFzIGFueSlba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IHJlbWFrZVBvc0FuZFNpemUoZGVmLCBvYmopO1xyXG5cclxuICAgICAgICByZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHJlcy5jdHgubW92ZVRvKHJlcy54ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50bCwgcmVzLnkpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54ICsgcmVzLndpZHRoIC0gKHJlcy5yYWRpdXMgYXMgYW55KS50ciwgcmVzLnkpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnksIHJlcy54ICsgcmVzLndpZHRoLCByZXMueSArIChyZXMucmFkaXVzIGFzIGFueSkudHIpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSArIHJlcy5oZWlnaHQgLSAocmVzLnJhZGl1cyBhcyBhbnkpLmJyKTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgcmVzLmhlaWdodCwgcmVzLnggKyByZXMud2lkdGggLSAocmVzLnJhZGl1cyBhcyBhbnkpLmJyLCByZXMueSArIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54ICsgKHJlcy5yYWRpdXMgYXMgYW55KS5ibCwgcmVzLnkgKyByZXMuaGVpZ2h0KTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLngsIHJlcy55ICsgcmVzLmhlaWdodCwgcmVzLngsIHJlcy55ICsgcmVzLmhlaWdodCAtIChyZXMucmFkaXVzIGFzIGFueSkuYmwpO1xyXG4gICAgICAgIHJlcy5jdHgubGluZVRvKHJlcy54LCByZXMueSArIChyZXMucmFkaXVzIGFzIGFueSkudGwpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCwgcmVzLnksIHJlcy54ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50bCwgcmVzLnkpO1xyXG4gICAgICAgIHJlcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIHByb2Nlc3MocmVzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBNaXNjVmFsaWRhdG9ycyBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2NWYWxpZGF0b3JzfSBpbnN0ZWFkXHJcbiAqIFRPRE86IG1vdmUgdGhpcyB0byB2YWxpZGF0b3JzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2hlY2tlcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0Z1bmN0aW9uID0gTWlzY1ZhbGlkYXRvcnMuaXNGdW5jdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzU3RyaW5nID0gTWlzY1ZhbGlkYXRvcnMuaXNTdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc09iamVjdCA9IE1pc2NWYWxpZGF0b3JzLmlzT2JqZWN0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNOdW1iZXIgPSBNaXNjVmFsaWRhdG9ycy5pc051bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQm9vbGVhbiA9IE1pc2NWYWxpZGF0b3JzLmlzQm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXJyYXkgPSBNaXNjVmFsaWRhdG9ycy5pc0FycmF5O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNFbXB0eSA9IE1pc2NWYWxpZGF0b3JzLmlzRW1wdHk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0ludCA9IE1pc2NWYWxpZGF0b3JzLmlzSW50O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGbG9hdCA9IE1pc2NWYWxpZGF0b3JzLmlzRmxvYXQ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1VuZGVmaW5lZCA9IE1pc2NWYWxpZGF0b3JzLmlzVW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNFbGVtZW50ID0gTWlzY1ZhbGlkYXRvcnMuaXNFbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIE1pc2NWYWxpZGF0b3JzIGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9yc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnN9IGluc3RlYWRcclxuICogVE9ETzogbW92ZSB0aGlzIHRvIHZhbGlkYXRvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGVja2VycyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRnVuY3Rpb24gPSBNaXNjVmFsaWRhdG9ycy5pc0Z1bmN0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTdHJpbmcgPSBNaXNjVmFsaWRhdG9ycy5pc1N0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzT2JqZWN0ID0gTWlzY1ZhbGlkYXRvcnMuaXNPYmplY3Q7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlciA9IE1pc2NWYWxpZGF0b3JzLmlzTnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNCb29sZWFuID0gTWlzY1ZhbGlkYXRvcnMuaXNCb29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBcnJheSA9IE1pc2NWYWxpZGF0b3JzLmlzQXJyYXk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0VtcHR5ID0gTWlzY1ZhbGlkYXRvcnMuaXNFbXB0eTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzSW50ID0gTWlzY1ZhbGlkYXRvcnMuaXNJbnQ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0Zsb2F0ID0gTWlzY1ZhbGlkYXRvcnMuaXNGbG9hdDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVW5kZWZpbmVkID0gTWlzY1ZhbGlkYXRvcnMuaXNVbmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0VsZW1lbnQgPSBNaXNjVmFsaWRhdG9ycy5pc0VsZW1lbnQ7XHJcbn1cclxuIiwiLy8gVE9ETzogbmVlZCB0byBiZSBjaGVja2VkIGlmIGFwcCBpcyBydW5uaW5nIGluIGJyb3dzZXJcclxuXHJcbmxldCBsb2NhbENvbnRleHQ6IERvY3VtZW50IHwgbnVsbCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb21HZXQge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgZG9jdW1lbnQgY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENvbnRleHQoY29udGV4dDogRG9jdW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbENvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjbGFzc05hbWUgbmFtZSBvZiBjbGFzc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgY29sbGVjdGlvbiBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsaW5rIG5hbWUgb2YgbGlua1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgbm9kZUxpc3Qgb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieUxpbmsobGluazogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcF0+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKGBhW2F0dHI9XCIke2xpbmt9XCJdYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkIHNlYXJjaGVkIElEXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBmb3VuZCBlbGVtZW50IG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieUlkKGlkOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgZWxlbWVudHMgbmFtZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgbm9kZUxpc3Qgb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieU5hbWUobmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGFnTmFtZSBlbGVtZW50cyB0YWdOYW1lXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5VGFnKHRhZ05hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSBhcyBhbnk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRW5jb2RpbmdzIHtcclxuICAgIC8qXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVURjggICAgPSBcInV0ZjhcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVRGMTYgICA9IFwidXRmMTZcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVU5JQ09ERSA9IFwidW5pY29kZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBU0NJSSAgID0gXCJhc2NpaVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVQ1MyICAgID0gXCJ1Y3MyXCI7XHJcbiAgICAqL1xyXG4gICAgVVRGOCAgICA9IFwidXRmOFwiLFxyXG4gICAgVVRGMTYgICA9IFwidXRmMTZcIixcclxuICAgIFVOSUNPREUgPSBcInVuaWNvZGVcIixcclxuICAgIEFTQ0lJICAgPSBcImFzY2lpXCIsXHJcbiAgICBVQ1MyICAgID0gXCJ1Y3MyXCIsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRmlsZVR5cGVzIHtcclxuICAgIENTUyAgPSBcInRleHQvY3NzXCIsXHJcbiAgICBIVE1MID0gXCJ0ZXh0L2h0bWxcIixcclxuICAgIEpTICAgPSBcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIixcclxuICAgIE1QMyAgPSBcImF1ZGlvL21wZWdcIixcclxuICAgIE1QNCAgPSBcInZpZGVvL21wNFwiLFxyXG4gICAgT0dHICA9IFwiYXBwbGljYXRpb24vb2dnXCIsXHJcbiAgICBPR1YgID0gXCJ2aWRlby9vZ2dcIixcclxuICAgIE9HQSAgPSBcImF1ZGlvL29nZ1wiLFxyXG4gICAgVFhUICA9IFwidGV4dC9wbGFpblwiLFxyXG4gICAgV0FWICA9IFwiYXVkaW8veC13YXZcIixcclxuICAgIFdFQk0gPSBcInZpZGVvL3dlYm1cIixcclxufVxyXG4iLCJleHBvcnQgZW51bSBIdHRwU3RhdHVzQ29kZXMge1xyXG4gICAgQ09OVElOVUUgICAgICAgICAgICAgICAgICAgICAgICA9IDEwMCxcclxuICAgIFNXSVRDSElOR19QUk9UT0NPTFMgICAgICAgICAgICAgPSAxMDEsXHJcbiAgICBPSyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMjAwLFxyXG4gICAgQ1JFQVRFRCAgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMSxcclxuICAgIEFDQ0VQVEVEICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDIsXHJcbiAgICBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTiAgID0gMjAzLFxyXG4gICAgTk9fQ09OVEVOVCAgICAgICAgICAgICAgICAgICAgICA9IDIwNCxcclxuICAgIFJFU0VUX0NPTlRFTlQgICAgICAgICAgICAgICAgICAgPSAyMDUsXHJcbiAgICBQQVJUSUFMX0NPTlRFTlQgICAgICAgICAgICAgICAgID0gMjA2LFxyXG4gICAgTVVMVElQTEVfQ0hPSUNFUyAgICAgICAgICAgICAgICA9IDMwMCxcclxuICAgIE1PVkVEX1BFUk1BTkVOVExZICAgICAgICAgICAgICAgPSAzMDEsXHJcbiAgICBGT1VORCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMzAyLFxyXG4gICAgU0VFX09USEVSICAgICAgICAgICAgICAgICAgICAgICA9IDMwMyxcclxuICAgIE5PVF9NT0RJRklFRCAgICAgICAgICAgICAgICAgICAgPSAzMDQsXHJcbiAgICBVU0VfUFJPWFkgICAgICAgICAgICAgICAgICAgICAgID0gMzA1LFxyXG4gICAgVEVNUE9SQVJZX1JFRElSRUNUICAgICAgICAgICAgICA9IDMwNyxcclxuICAgIEJBRF9SRVFVRVNUICAgICAgICAgICAgICAgICAgICAgPSA0MDAsXHJcbiAgICBVTkFVVEhPUklaRUQgICAgICAgICAgICAgICAgICAgID0gNDAxLFxyXG4gICAgUEFZTUVOVF9SRVFVSVJFRCAgICAgICAgICAgICAgICA9IDQwMixcclxuICAgIEZPUkJJRERFTiAgICAgICAgICAgICAgICAgICAgICAgPSA0MDMsXHJcbiAgICBOT1RfRk9VTkQgICAgICAgICAgICAgICAgICAgICAgID0gNDA0LFxyXG4gICAgTUVUSE9EX05PVF9BTExPV0VEICAgICAgICAgICAgICA9IDQwNSxcclxuICAgIE5PVF9BQ0NFUFRBQkxFICAgICAgICAgICAgICAgICAgPSA0MDYsXHJcbiAgICBQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRCAgID0gNDA3LFxyXG4gICAgUkVRVUVTVF9USU1FT1VUICAgICAgICAgICAgICAgICA9IDQwOCxcclxuICAgIENPTkZMSUNUICAgICAgICAgICAgICAgICAgICAgICAgPSA0MDksXHJcbiAgICBHT05FICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gNDEwLFxyXG4gICAgTEVOR1RIX1JFUVVJUkVEICAgICAgICAgICAgICAgICA9IDQxMSxcclxuICAgIFBSRUNPTkRJVElPTl9GQUlMRUQgICAgICAgICAgICAgPSA0MTIsXHJcbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgICAgICAgID0gNDEzLFxyXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgICAgICAgICAgICA9IDQxNCxcclxuICAgIFVOU1VQUE9SVEVEX01FRElBX1RZUEUgICAgICAgICAgPSA0MTUsXHJcbiAgICBSRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFID0gNDE2LFxyXG4gICAgRVhQRUNUQVRJT05fRkFJTEVEICAgICAgICAgICAgICA9IDQxNyxcclxuICAgIFVOUFJPQ0VTU0FCTEVfRU5USVRZICAgICAgICAgICAgPSA0MjIsXHJcbiAgICBUT09fTUFOWV9SRVFVRVNUUyAgICAgICAgICAgICAgID0gNDI5LFxyXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SICAgICAgICAgICA9IDUwMCxcclxuICAgIE5PVF9JTVBMRU1FTlRFRCAgICAgICAgICAgICAgICAgPSA1MDEsXHJcbiAgICBCQURfR0FURVdBWSAgICAgICAgICAgICAgICAgICAgID0gNTAyLFxyXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRSAgICAgICAgICAgICA9IDUwMyxcclxuICAgIEdBVEVXQVlfVElNRU9VVCAgICAgICAgICAgICAgICAgPSA1MDQsXHJcbiAgICBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRCAgICAgID0gNTA1LFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEtleXMge1xyXG4gICAgQVJST1dfVVAgICAgPSBcIkFycm93VXBcIixcclxuICAgIEFSUk9XX0RPV04gID0gXCJBcnJvd0Rvd25cIixcclxuICAgIEFSUk9XX0xFRlQgID0gXCJBcnJvd0xlZnRcIixcclxuICAgIEFSUk9XX1JJR0hUID0gXCJBcnJvd1JpZ2h0XCIsXHJcbiAgICBERUxFVEUgICAgICA9IFwiRGVsZXRlXCIsXHJcbiAgICBDT05UUk9MICAgICA9IFwiQ29udHJvbExlZnRcIixcclxuICAgIFNISUZUICAgICAgID0gXCJTaGlmdExlZnRcIixcclxuICAgIFBBR0VfVVAgICAgID0gXCJQYWdlVXBcIixcclxuICAgIFBBR0VfRE9XTiAgID0gXCJQYWdlRG93blwiLFxyXG4gICAgRVNDQVBFICAgICAgPSBcIkVzY2FwZVwiLFxyXG4gICAgVyAgICAgICAgICAgPSBcIktleVdcIixcclxuICAgIEYgICAgICAgICAgID0gXCJLZXlGXCIsXHJcbiAgICBBICAgICAgICAgICA9IFwiS2V5QVwiLFxyXG4gICAgUCAgICAgICAgICAgPSBcIktleVBcIixcclxuICAgIFMgICAgICAgICAgID0gXCJLZXlTXCIsXHJcbiAgICBEICAgICAgICAgICA9IFwiS2V5RFwiLFxyXG4gICAgUiAgICAgICAgICAgPSBcIktleVJcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleXNPbGQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTlRFUiAgICAgICA9IDEzO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUIgICAgICAgICA9IDk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgICAgICAgICAgID0gODc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEEgICAgICAgICAgID0gNjU7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFMgICAgICAgICAgID0gODM7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEQgICAgICAgICAgID0gNjg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFEgICAgICAgICAgID0gODE7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEUgICAgICAgICAgID0gNjk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEYgICAgICAgICAgID0gNzA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExDT05UUk9MICAgID0gMTc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVTQ0FQRSAgICAgID0gMjc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExBTFQgICAgICAgID0gMTg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExTSElGVCAgICAgID0gMTY7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNQQUNFICAgICAgID0gMzI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX1VQICAgID0gMzg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX0RPV04gID0gNDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX1JJR0hUID0gMzk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XX0xFRlQgID0gMzc7XHJcbn1cclxuIiwiZnVuY3Rpb24gZ2V0VGV4dCh0ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0ID8gYDogJHt0ZXh0fWAgOiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90QnJvd3NlckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYEFwcCBpcyBub3QgcnVubmluZyBpbiBicm93c2VyJHtnZXRUZXh0KHRleHQpfSFgKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE5vdEJyb3dzZXJFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9HVXRpbHNcIjtcclxuXHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS12ZWN0b3IyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS12ZWN0b3IzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS12ZWN0b3I0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlY3RvcjJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVjdG9yM1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92ZWN0b3I0XCI7XHJcbiIsImltcG9ydCB7IFNpbXBsZVZlY3RvcjIgfSBmcm9tIFwiLi9zaW1wbGUtdmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjIgaW1wbGVtZW50cyBTaW1wbGVWZWN0b3IyIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHkgPSAwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgWkVSTygpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgT05FKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNaZXJvKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodmVjQSA9PT0gdmVjQikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNBLnggPT09IHZlY0IueCAmJiB2ZWNBLnkgPT09IHZlY0IueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1Yih2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY0EueCAtIHZlY0IueCwgdmVjQS55IC0gdmVjQi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmlzaWJsZShvYnNYOiBudW1iZXIsIG9ic1k6IG51bWJlciwgYW5nbGU6IG51bWJlciwgY3V0T2ZmOiBudW1iZXIsIHB4OiBudW1iZXIsIHB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKGFuZ2xlIC0gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgcHkgLSBvYnNZLFxyXG4gICAgICAgICAgICBweCAtIG9ic1gsXHJcbiAgICAgICAgKSkgPD0gY3V0T2ZmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYW5nbGVCZXR3ZWVuUG9pbnRzKG9ic1g6IG51bWJlciwgb2JzWTogbnVtYmVyLCBweDE6IG51bWJlciwgcHkxOiBudW1iZXIsIHB4MjogbnVtYmVyLCBweTI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoXHJcbiAgICAgICAgICAgIHB5MSAtIG9ic1ksXHJcbiAgICAgICAgICAgIHB4MSAtIG9ic1gsXHJcbiAgICAgICAgKSAtIE1hdGguYXRhbjIoXHJcbiAgICAgICAgICAgIHB5MiAtIG9ic1ksXHJcbiAgICAgICAgICAgIHB4MiAtIG9ic1gsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF2ZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICsgdGhpcy55KSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0odmVjQTogU2ltcGxlVmVjdG9yMiwgdmVjQjogU2ltcGxlVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNBLnggKyB2ZWNCLngsIHZlY0EueSArIHZlY0IueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWxOdW0odmVjQTogU2ltcGxlVmVjdG9yMiwgdmFsOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjQS54ICogdmFsLCB2ZWNBLnkgKiB2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5taW4odmVjQS54LCB2ZWNCLngpLCBNYXRoLm1pbih2ZWNBLnksIHZlY0IueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWF4KHZlY0E6IFNpbXBsZVZlY3RvcjIsIHZlY0I6IFNpbXBsZVZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLCBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzdCh2ZWNBOiBTaW1wbGVWZWN0b3IyLCB2ZWNCOiBTaW1wbGVWZWN0b3IyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHZlY0EueCAtIHZlY0IueCwgMikgKyBNYXRoLnBvdyh2ZWNBLnkgLSB2ZWNCLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm9ybWFsaXplZCgpOiBTaW1wbGVWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsKHZhbHVlOiBTaW1wbGVWZWN0b3IyIHwgbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCh2ZWM6IFNpbXBsZVZlY3RvcjIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggKz0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViKHZlYzogU2ltcGxlVmVjdG9yMik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbSh2YWxBOiBudW1iZXIsIHZhbEIgPSB2YWxBKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZhbEEsIHZhbEIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQodmVjOiBTaW1wbGVWZWN0b3IyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XHJcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHByb2Nlc3MgPSAob3A6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICBhcmcxOiBWZWN0b3IyZiB8IG51bWJlcixcclxuICAgICAgICAgICAgICAgICBhcmcyPzogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBvcChhcmcxIGFzIG51bWJlciwgYXJnMik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgb3AoYXJnMSwgYXJnMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wKGFyZzEueCwgYXJnMS55KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBpcyB1c2VkIGZvciBob2xkaW5nIDIgbnVtZXJpYyB2YWx1ZXMgYW5kIG1hbmlwdWxhdGlvbiB3aXRoIHRoZW1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyZiB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBYIHZhbHVlIG9mIHZlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgWSB2YWx1ZSBvZiB2ZWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHggPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCB2ZWN0b3JzIHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgY3JlYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBWZWN0b3IyZiB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGFkZCB2YWx1ZXMgaW50byBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBWZWN0b3IyZiB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0geDtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gZGl2aWRlIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpdihhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IFZlY3RvcjJmIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBtdWx0aXBseSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtdWwoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBWZWN0b3IyZiB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0geDtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gc3VidHJhY3QgdmFsdWVzIGZyb20gY3VycmVudCB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHVwZGF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3ViKGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogVmVjdG9yMmYge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3IzZiB9IGZyb20gXCIuLi9waHlzaWNzL2Rpc3RhbmNlcy0zZFwiO1xyXG5pbXBvcnQgeyBTaW1wbGVWZWN0b3IzIH0gZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IzIGltcGxlbWVudHMgU2ltcGxlVmVjdG9yMyB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB5ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeiA9IDApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBVUCgpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgWkVSTygpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgT05FKCk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygxLCAxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJheSgpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlcXVhbHModmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh2ZWNBID09PSB2ZWNCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY0EueCA9PT0gdmVjQi54ICYmIHZlY0EueSA9PT0gdmVjQi55ICYmIHZlY0EueiA9PT0gdmVjQi56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3ViKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54IC0gdmVjQi54LCB2ZWNBLnkgLSB2ZWNCLnksIHZlY0EueiAtIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhdmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCArIHRoaXMueSArIHRoaXMueikgLyAzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VtKHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICsgdmVjQi54LCB2ZWNBLnkgKyB2ZWNCLnksIHZlY0EueiArIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWxOdW0odmVjQTogU2ltcGxlVmVjdG9yMywgdmFsOiBudW1iZXIpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICogdmFsLCB2ZWNBLnkgKiB2YWwsIHZlY0EueiAqIHZhbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3VtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMueSArIHRoaXMuejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bCh2ZWNBOiBTaW1wbGVWZWN0b3IzZiwgdmVjQjogU2ltcGxlVmVjdG9yM2YpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjQS54ICsgdmVjQi54LCB2ZWNBLnkgKyB2ZWNCLnksIHZlY0EueiArIHZlY0Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtaW4odmVjQTogU2ltcGxlVmVjdG9yMywgdmVjQjogU2ltcGxlVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhNYXRoLm1pbih2ZWNBLngsIHZlY0IueCksIE1hdGgubWluKHZlY0EueSwgdmVjQi55KSwgTWF0aC5taW4odmVjQS56LCB2ZWNCLnopKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUZyb21TcGhlcmljYWxDb29yZHMoIHJhZGl1czogbnVtYmVyLCBwaGk6IG51bWJlciwgdGhldGE6IG51bWJlciApOiBWZWN0b3IzIHtcclxuICAgICAgICBjb25zdCBzaW5QaGlSYWRpdXMgPSBNYXRoLnNpbiggcGhpICkgKiByYWRpdXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBzaW5QaGlSYWRpdXMgKiBNYXRoLnNpbiggdGhldGEgKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5jb3MoIHBoaSApICogcmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IHogPSBzaW5QaGlSYWRpdXMgKiBNYXRoLmNvcyggdGhldGEgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWF4KHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLCBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSksIE1hdGgubWF4KHZlY0EueiwgdmVjQi56KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHZlY0E6IFNpbXBsZVZlY3RvcjMsIHZlY0I6IFNpbXBsZVZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codmVjQS54IC0gdmVjQi54LCAyKSArIE1hdGgucG93KHZlY0EueSAtIHZlY0IueSwgMikgKyBNYXRoLnBvdyh2ZWNBLnogLSB2ZWNCLnosIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5vcm1hbGl6ZTxUIGV4dGVuZHMgU2ltcGxlVmVjdG9yMz4odmVjOiBUKTogVCB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55ICsgdmVjLnogKiB2ZWMueik7XHJcbiAgICAgICAgdmVjLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy55IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueiAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vcm1hbGl6ZWQoKTogU2ltcGxlVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueiAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWwodmFsdWU6IFNpbXBsZVZlY3RvcjMgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ICo9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMueSAqPSB2YWx1ZS55O1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWUuejtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQodmVjOiBTaW1wbGVWZWN0b3IzKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogKz0gdmVjLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWIodmVjOiBTaW1wbGVWZWN0b3IzKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogLT0gdmVjLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUFycmF5KHZhbHVlOiBudW1iZXJbXSB8IEZsb2F0MzJBcnJheSk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tKHZhbEE6IG51bWJlciwgdmFsQiA9IHZhbEEsIHZhbEMgPSB2YWxBKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZhbEEsIHZhbEIsIHZhbEMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWZWN0b3IoaXRlbTogYW55KTogaXRlbSBpcyBTaW1wbGVWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiAhaXNOYU4oaXRlbS54KSAmJiAhaXNOYU4oaXRlbS55KSAmJiAhaXNOYU4oaXRlbS56KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHZlYzogU2ltcGxlVmVjdG9yMyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xyXG4gICAgICAgIHRoaXMueiA9IHZlYy56O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1wbGVWZWN0b3I0IH0gZnJvbSBcIi4vc2ltcGxlLXZlY3RvcjRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3I0IGltcGxlbWVudHMgU2ltcGxlVmVjdG9yNCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyB5ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgeiA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHcgPSAwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgWkVSTygpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgT05FKCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCgxLCAxLCAxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJheSgpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLnddO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZlY0E6IFNpbXBsZVZlY3RvcjQsIHZlY0I6IFNpbXBsZVZlY3RvcjQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodmVjQSA9PT0gdmVjQikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNBLnggPT09IHZlY0IueCAmJiB2ZWNBLnkgPT09IHZlY0IueSAmJiB2ZWNBLnogPT09IHZlY0IueiAmJiB2ZWNBLncgPT09IHZlY0IudztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF2ZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICsgdGhpcy55ICsgdGhpcy56ICsgdGhpcy53KSAvIDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtaW4odmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNChcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS54LCB2ZWNCLngpLFxyXG4gICAgICAgICAgICBNYXRoLm1pbih2ZWNBLnksIHZlY0IueSksXHJcbiAgICAgICAgICAgIE1hdGgubWluKHZlY0EueiwgdmVjQi56KSxcclxuICAgICAgICAgICAgTWF0aC5taW4odmVjQS53LCB2ZWNCLncpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYXgodmVjQTogU2ltcGxlVmVjdG9yNCwgdmVjQjogU2ltcGxlVmVjdG9yNCk6IFZlY3RvcjQge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNChcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS54LCB2ZWNCLngpLFxyXG4gICAgICAgICAgICBNYXRoLm1heCh2ZWNBLnksIHZlY0IueSksXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHZlY0EueiwgdmVjQi56KSxcclxuICAgICAgICAgICAgTWF0aC5tYXgodmVjQS53LCB2ZWNCLncpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHZlY0E6IFNpbXBsZVZlY3RvcjQsIHZlY0I6IFNpbXBsZVZlY3RvcjQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EueCAtIHZlY0IueCwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyh2ZWNBLnkgLSB2ZWNCLnksIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3codmVjQS56IC0gdmVjQi56LCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KHZlY0EudyAtIHZlY0IudywgMiksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5vcm1hbGl6ZTxUIGV4dGVuZHMgU2ltcGxlVmVjdG9yND4odmVjOiBUKTogVCB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55ICsgdmVjLnogKiB2ZWMueiArIHZlYy53ICogdmVjLncpO1xyXG4gICAgICAgIHZlYy54IC89IGxlbmd0aDtcclxuICAgICAgICB2ZWMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdmVjLnogLz0gbGVuZ3RoO1xyXG4gICAgICAgIHZlYy53IC89IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm9ybWFsaXplZCgpOiBTaW1wbGVWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKyB0aGlzLncgKiB0aGlzLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQodGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnogLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudyAvPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWwodmFsdWU6IFNpbXBsZVZlY3RvcjQgfCBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnogKj0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudyAqPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHZhbHVlLnk7XHJcbiAgICAgICAgICAgIHRoaXMueiAqPSB2YWx1ZS56O1xyXG4gICAgICAgICAgICB0aGlzLncgKj0gdmFsdWUudztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQodmVjOiBTaW1wbGVWZWN0b3I0KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogKz0gdmVjLno7XHJcbiAgICAgICAgdGhpcy53ICs9IHZlYy53O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViKHZlYzogU2ltcGxlVmVjdG9yNCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XHJcbiAgICAgICAgdGhpcy56IC09IHZlYy56O1xyXG4gICAgICAgIHRoaXMudyAtPSB2ZWMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tQXJyYXkodmFsdWU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHwgRmxvYXQzMkFycmF5KTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0sIHZhbHVlWzNdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb20odmFsQTogbnVtYmVyLCB2YWxCID0gdmFsQSwgdmFsQyA9IHZhbEIsIHZhbEQgPSB2YWxDKTogVmVjdG9yNCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KHZhbEEsIHZhbEIsIHZhbEMsIHZhbEQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWZWN0b3IoaXRlbTogYW55KTogaXRlbSBpcyBTaW1wbGVWZWN0b3I0IHtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiAhaXNOYU4oaXRlbS54KSAmJiAhaXNOYU4oaXRlbS55KSAmJiAhaXNOYU4oaXRlbS56KSAmJiAhaXNOYU4oaXRlbS53KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRGcm9tVmFsdWVzKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHc6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCh2ZWM6IFNpbXBsZVZlY3RvcjQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB2ZWMueDtcclxuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcclxuICAgICAgICB0aGlzLnogPSB2ZWMuejtcclxuICAgICAgICB0aGlzLncgPSB2ZWMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gcmVtb3ZlUHJlZHBvbmEoY2hhcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChjaGFyLmxlbmd0aCA+IDYgJiYgY2hhci5zdGFydHNXaXRoKFwibmFqXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYXIuc3Vic3RyKDMsIGNoYXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2hhcjtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmZ1bmN0aW9uIHJlbW92ZUNhc2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuID0ga2V5Lmxlbmd0aDtcclxuICAgIGlmIChsZW4gPiA5ICYmIGtleS5lbmRzV2l0aChcImVqxaFpZWhvXCIpXHJcbiAgICAgICAgfHwga2V5LmVuZHNXaXRoKFwiZWrFoWllbXVcIikpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA3KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gOCAmJiAoa2V5LmVuZHNXaXRoKFwiZWrFocOtY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmNvY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61taVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY2FtaVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA2KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNyAmJiAoa2V5LmVuZHNXaXRoKFwiZWrFoWlhXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiYXRhbWlcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhY2hcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmllY1wiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY29tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoW9tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFocOtbVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFlalwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFvdVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFpdVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaFpZVwiKVxyXG4gICAgKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA2ICYmXHJcbiAgICAgICAgKGtleS5lbmRzV2l0aChcImXFpW9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhbWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWlb21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZpYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVuY2VcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZW11XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWV0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61cIikgfHxcclxuICAgICAgICAgICAgLy8gZ2Fib3NcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5pZVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSA0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNSAmJlxyXG4gICAgICAgIChrZXkuZW5kc1dpdGgoXCJpY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieWNoXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDqWhvXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6ltdVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtdVwiKSB8fFxyXG4gICAgICAgICAgICAvKmtleS5lbmRzV2l0aChcImlob1wiKSB8fCovIC8vIFZlxL5taSBtYWzDvSB2cGx5dlxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOhY2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvWNoXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsOpXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w71cIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDrVwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92aVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWXFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71taVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInltaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhY2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFtXCIpIHx8XHJcbiAgICAgICAgICAgIC8qa2V5LmVuZHNXaXRoKFwiYXTDoVwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhY1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpdGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxpXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsYVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm9jaFwiKVxyXG4gICAgICAgICkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gNCAmJlxyXG4gICAgICAgICgvKmtleS5lbmRzV2l0aChcIsOtblwiKSB8fCovXHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOhbVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFtXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInVzXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw71tXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm9tXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIml1XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImltXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm11XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcInRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw7rFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpxaVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw63FoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpxaFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw7pjXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImXFoVwiKSkpIHtcclxuICAgICAgICByZXR1cm4ga2V5LnN1YnN0cmluZygwLCBsZW4gLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVuID4gMykge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5W2xlbiAtIDFdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJvXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDulwiOlxyXG4gICAgICAgICAgICAvKmNhc2UgXCLDtFwiOiovXHJcbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDoVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw6lcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOtXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDvVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3Nlc3NpdmVzKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIGlmIChsZW4gPiA1ICYmIHMuZW5kc1dpdGgoXCJpblwiKSB8fFxyXG4gICAgICAgIHMuZW5kc1dpdGgoXCJvdlwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnN1YnN0cigwLCBsZW4gLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIC8vIHRvdG8gcHJhdmlkbG8gem5pxb51amUgRlAgYWxlIHp2ecWhdWplIEZOXHJcbiAgICAvKiAgICAgICAgaWYgKGxlbiA+IDEgJiYgc1tsZW4gLSAyXSA9PSBcImlcIiAmJiBzW2xlbi0xXT09XCJjXCIpIHtcclxuICAgICAgICAgICAgICAgIHNbbGVuIC0gMl0gPSBzW2xlbiAtIDFdOyAvLyBlKiA+ICpcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZW4gLSAxO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgIHN3aXRjaCAoc1tsZW4gLSAxXSkge1xyXG4gICAgICAgIGNhc2UgXCJjXCI6IC8vIFtjxI1dIC0+IGtcclxuICAgICAgICBjYXNlIFwixI1cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcImtcIik7XHJcbiAgICAgICAgY2FzZSBcIsS+XCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwibFwiKTtcclxuICAgICAgICBjYXNlIFwixYhcIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJuXCIpO1xyXG4gICAgICAgIGNhc2UgXCLFpVwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcInRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDMgJiYgc1tsZW4gLSAzXSA9PT0gXCJpXCIgJiYgKHNbbGVuIC0gMl0gPT09IFwiZVwiIHx8IHNbbGVuIC0gMl0gPT09IFwiYVwiIHx8IHNbbGVuIC0gMl0gPT09IFwidVwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGxlbiAtIDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzW2xlbiAtIDJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1tsZW4gLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbG92YWtTdGVtbWVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3RlbWUod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZW1vdmVQb3NzZXNzaXZlcyhyZW1vdmVDYXNlKHJlbW92ZVByZWRwb25hKHdvcmQpKSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIEFqYXhQYXJhbXMge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIG9uUmVzcG9uc2U6IChkYXRhOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59XHJcblxyXG5jbGFzcyBBamF4V3JhcHBlciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhamF4SGFuZGxlcjogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9OiBBamF4UGFyYW1zKTogQWpheFdyYXBwZXIge1xyXG4gICAgY29uc3QgcmVxdWVzdCAgICAgICAgICAgICAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCB8fCByZXF1ZXN0LnN0YXR1cyA9PT0gMjAxKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG9uUmVzcG9uc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvblJlc3BvbnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpLmZvckVhY2goKGVudHJ5KSA9PiByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoZW50cnlbMF0sIGVudHJ5WzFdKSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBamF4V3JhcHBlcihyZXF1ZXN0KTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9hamF4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bnRpbWUtdmFsaWRhdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9TbG92YWtTdGVtbWVyXCI7XHJcbiIsImV4cG9ydCBjb25zdCBnZXRBc1N0cmluZyA9IChrZXk6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgd2l0aCB2YWx1ZSAke2tleX0gaXMgbm90IGEgc3RyaW5nYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEFzTnVtYmVyID0gKGtleTogYW55KTogbnVtYmVyID0+IHtcclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSB3aXRoIHZhbHVlICR7a2V5fSBpcyBub3QgYSBudW1iZXJgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBoZXgycmdiLCBpbnQycmdiLCByZ2IyaGV4LCByZ2IyaW50IH0gZnJvbSBcIi4uL3V0aWxzL2NvbG9yLXV0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBjaGVja0NvbG9yVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc29sZS5hc3NlcnQodmFsdWUgPj0gMCk7XHJcbiAgICBjb25zb2xlLmFzc2VydCh2YWx1ZSA8PSAyNTUpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCTEFDSyA9IG5ldyBDb2xvcigwLCAwLCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0hJVEUgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSQVkgPSBuZXcgQ29sb3IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFRCAgID0gbmV3IENvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSRUVOID0gbmV3IENvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJMVUUgID0gbmV3IENvbG9yKDAsIDAsIDI1NSk7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHJlZDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBncmVlbjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBibHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGFscGhhID0gMjU1KSB7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKHJlZCk7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGdyZWVuKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoYmx1ZSk7XHJcbiAgICAgICAgY2hlY2tDb2xvclZhbHVlKGFscGhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21IZXgoY29sb3I6IHN0cmluZyk6IENvbG9yIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhleDJyZ2IoY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKC4uLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21JbnQoY29sb3I6IG51bWJlcik6IENvbG9yIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGludDJyZ2IoY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKC4uLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYigpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHJnYlN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgcmdiKCR7dGhpcy5yZWR9LCAke3RoaXMuZ3JlZW59LCAke3RoaXMuYmx1ZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplZCgpOiBDb2xvciB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVkID4gMSB8fCB0aGlzLmdyZWVuID4gMSB8fCB0aGlzLmJsdWUgPiAxIHx8IHRoaXMuYWxwaGEgPiAxICkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMucmVkIC8gMjU1LCB0aGlzLmdyZWVuIC8gMjU1LCB0aGlzLmJsdWUgLyAyNTUsIHRoaXMuYWxwaGEgLyAyNTUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZ2JhKCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWUsIHRoaXMuYWxwaGFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaGV4KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHJnYjJoZXgoTWF0aC5mbG9vcih0aGlzLnJlZCksIE1hdGguZmxvb3IodGhpcy5ncmVlbiksIE1hdGguZmxvb3IodGhpcy5ibHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcmdiMmludCh0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBHZW5kZXJ9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCB0eXBlIEdlbmRlclR5cGUgPSBcIk1BTlwiIHwgXCJXT01BTlwiIHwgXCJcIjtcclxuXHJcbmNvbnN0IG1hbGVSZWdleHAgICA9IC9eKG1hbGV8bWFufG11enxib3l8Y2hsYXBlY3xtKSQvZztcclxuY29uc3QgZmVtYWxlUmVnZXhwID0gL14oZmVtYWxlfHdvbWFufHplbmF8Z2lybHxkaWV2Y2F8Znx3fHopJC9nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlR2VuZGVyKGdlbmRlcjogc3RyaW5nKTogR2VuZGVyIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghZ2VuZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2VuZGVyTG93ZXJDYXNlID0gZ2VuZGVyLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCLFvlwiLCBcInpcIikucmVwbGFjZShcIsSNXCIsIFwiY1wiKTtcclxuICAgIGlmIChnZW5kZXJMb3dlckNhc2UubWF0Y2gobWFsZVJlZ2V4cCkpIHtcclxuICAgICAgICByZXR1cm4gR2VuZGVyLk1BTjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2VuZGVyTG93ZXJDYXNlLm1hdGNoKGZlbWFsZVJlZ2V4cCkpIHtcclxuICAgICAgICByZXR1cm4gR2VuZGVyLldPTUFOO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICAgIE1BTiA9IFwiTUFOXCIsXHJcbiAgICBXT01BTiA9IFwiV09NQU5cIixcclxufVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBwYXJzZUdlbmRlcn0gYW5kIHtAbGluayBHZW5kZXJ9IGluc3RlYWRcclxuICogQ2xhc3MgaXMgdXNlZCBmb3IgcGFyc2luZyBnZW5kZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHZW5kZXJDbGFzcyB7XHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCBwYXJzZSBzdHJpbmcgYW5kIHJldHVybiBHZW5kZXJUeXBlXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHBhcnNlR2VuZGVyfSBpbnN0ZWFkXHJcbiAgICAgKiBAcGFyYW0gZ2VuZGVyIGdlbmRlciBpbiBhbnkgZm9ybWF0XHJcbiAgICAgKiBAcmV0dXJucyBwYXJzZWQgZ2VuZGVyIGFzIHtAbGluayBHZW5kZXJUeXBlfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlID0gcGFyc2VHZW5kZXI7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE1vZGVsIGlzIGVudW0gYW5kIHBhcnNlclxyXG4gKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2dlbmRlci5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xvci5tb2RlbFwiO1xyXG5cclxuLy8gVE9ETzogQ2Fubm90IGltcG9ydCBjb3VudHJpZXMuZGF0YS5qc29uXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2NvdW50cmllcy9jb3VudHJ5LmludGVyZmFjZVwiO1xyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5tb2RlbFwiO1xyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBOT0RFICoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyBVVElMU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9BcnJheVV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL0ZpbGVVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL01hdGhVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL01pc2NVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL09iamVjdFV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvU3RyaW5nVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvdGltZS11dGlsc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbWlzYy9TbG92YWtTdGVtbWVyXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBXRUIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIERPTVxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2RlcHJlY2F0ZWQvQ2hlY2tlcnNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2NhbnZhcy1tYW5hZ2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9kb20tZ2V0XCI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludExpbmUyZENsb3Nlc3QoXHJcbiAgICBzeDE6IG51bWJlcixcclxuICAgIHN5MTogbnVtYmVyLFxyXG4gICAgc3gyOiBudW1iZXIsXHJcbiAgICBzeTI6IG51bWJlcixcclxuICAgIHB4OiBudW1iZXIsXHJcbiAgICBweTogbnVtYmVyXHJcbik6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCB4RGVsdGEgPSBzeDIgLSBzeDE7XHJcbiAgICBjb25zdCB5RGVsdGEgPSBzeTIgLSBzeTE7XHJcblxyXG4gICAgY29uc3QgdSA9ICgocHggLSBzeDEpICogeERlbHRhICsgKHB5IC0gc3kxKSAqIHlEZWx0YSkgLyAoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcclxuXHJcbiAgICBpZiAodSA8IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBzeDEsXHJcbiAgICAgICAgICAgIHk6IHN5MSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1ID4gMSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHN4MixcclxuICAgICAgICAgICAgeTogc3kyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHN4MSArIHUgKiB4RGVsdGEsXHJcbiAgICAgICAgeTogc3kxICsgdSAqIHlEZWx0YSxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgcG9pbnRQb2ludDJkRGlzdGFuY2UgfSBmcm9tIFwiLi9kaXN0YW5jZXMtMmRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBjUG9zWDogbnVtYmVyLFxyXG4gICAgY1Bvc1k6IG51bWJlcixcclxuICAgIGNSYWRpdXM6IG51bWJlcixcclxuICAgIHJQb3NYOiBudW1iZXIsXHJcbiAgICByUG9zWTogbnVtYmVyLFxyXG4gICAgclNpemVYOiBudW1iZXIsXHJcbiAgICByU2l6ZVk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjaXJjbGVEaXN0YW5jZVggPSBNYXRoLmFicyhjUG9zWCAtIHJQb3NYKTtcclxuICAgIGNvbnN0IGNpcmNsZURpc3RhbmNlWSA9IE1hdGguYWJzKGNQb3NZIC0gclBvc1kpO1xyXG5cclxuICAgIGlmIChjaXJjbGVEaXN0YW5jZVggPiAoclNpemVYIC8gMiArIGNSYWRpdXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWSA+IChyU2l6ZVkgLyAyICsgY1JhZGl1cykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNpcmNsZURpc3RhbmNlWCA8PSAoclNpemVYIC8gMikpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjaXJjbGVEaXN0YW5jZVkgPD0gKHJTaXplWSAvIDIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ybmVyRGlzdGFuY2VTUSA9XHJcbiAgICAgICAgICAgICAgTWF0aC5wb3coKGNpcmNsZURpc3RhbmNlWCAtIHJQb3NYIC8gMiksIDIpICtcclxuICAgICAgICAgICAgICBNYXRoLnBvdygoY2lyY2xlRGlzdGFuY2VZIC0gclBvc1kgLyAyKSwgMik7XHJcblxyXG4gICAgcmV0dXJuIGNvcm5lckRpc3RhbmNlU1EgPD0gTWF0aC5wb3coY1JhZGl1cywgMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lUmVjdGFuZ2xlMmRDb2xsaXNpb24oXHJcbiAgICBhU3RhcnRYOiBudW1iZXIsXHJcbiAgICBhU3RhcnRZOiBudW1iZXIsXHJcbiAgICBhRW5kWDogbnVtYmVyLFxyXG4gICAgYUVuZFk6IG51bWJlcixcclxuICAgIGJQb3NYOiBudW1iZXIsXHJcbiAgICBiUG9zWTogbnVtYmVyLFxyXG4gICAgYlNpemVYOiBudW1iZXIsXHJcbiAgICBiU2l6ZVk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBwb2ludFJlY3QyZENvbGxpc2lvbihhU3RhcnRYLCBhU3RhcnRZLCBiUG9zWCwgYlBvc1ksIGJTaXplWCwgYlNpemVZKSkgfHxcclxuICAgICAgICBwb2ludFJlY3QyZENvbGxpc2lvbihhRW5kWCwgYUVuZFksIGJQb3NYLCBiUG9zWSwgYlNpemVYLCBiU2l6ZVkpIHx8XHJcbiAgICAgICAgbGluZUxpbmUyZENvbGxpc2lvbihhU3RhcnRYLFxyXG4gICAgICAgICAgICBhU3RhcnRZLFxyXG4gICAgICAgICAgICBhRW5kWCxcclxuICAgICAgICAgICAgYUVuZFksXHJcbiAgICAgICAgICAgIGJQb3NYLFxyXG4gICAgICAgICAgICBiUG9zWSxcclxuICAgICAgICAgICAgYlBvc1ggKyBiU2l6ZVgsXHJcbiAgICAgICAgICAgIGJQb3NZICsgYlNpemVZKSB8fFxyXG4gICAgICAgIGxpbmVMaW5lMmRDb2xsaXNpb24oYVN0YXJ0WCxcclxuICAgICAgICAgICAgYVN0YXJ0WSxcclxuICAgICAgICAgICAgYUVuZFgsXHJcbiAgICAgICAgICAgIGFFbmRZLFxyXG4gICAgICAgICAgICBiUG9zWCArIGJTaXplWCxcclxuICAgICAgICAgICAgYlBvc1ksXHJcbiAgICAgICAgICAgIGJQb3NYLFxyXG4gICAgICAgICAgICBiUG9zWSArIGJTaXplWSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZUxpbmUyZENvbGxpc2lvbihcclxuICAgIGFTdGFydFg6IG51bWJlcixcclxuICAgIGFTdGFydFk6IG51bWJlcixcclxuICAgIGFFbmRYOiBudW1iZXIsXHJcbiAgICBhRW5kWTogbnVtYmVyLFxyXG4gICAgYlN0YXJ0WDogbnVtYmVyLFxyXG4gICAgYlN0YXJ0WTogbnVtYmVyLFxyXG4gICAgYkVuZFg6IG51bWJlcixcclxuICAgIGJFbmRZOiBudW1iZXIsXHJcbik6IGJvb2xlYW4ge1xyXG5cclxuICAgIGNvbnN0IGRlbm9taW5hdG9yID0gKChhRW5kWCAtIGFTdGFydFgpICogKGJFbmRZIC0gYlN0YXJ0WSkpIC0gKChhRW5kWSAtIGFTdGFydFkpICogKGJFbmRYIC0gYlN0YXJ0WCkpO1xyXG4gICAgY29uc3QgbnVtZXJhdG9yMSAgPSAoKGFTdGFydFkgLSBiU3RhcnRZKSAqIChiRW5kWCAtIGJTdGFydFgpKSAtICgoYVN0YXJ0WCAtIGJTdGFydFgpICogKGJFbmRZIC0gYlN0YXJ0WSkpO1xyXG4gICAgY29uc3QgbnVtZXJhdG9yMiAgPSAoKGFTdGFydFkgLSBiU3RhcnRZKSAqIChhRW5kWCAtIGFTdGFydFgpKSAtICgoYVN0YXJ0WCAtIGJTdGFydFgpICogKGFFbmRZIC0gYVN0YXJ0WSkpO1xyXG5cclxuICAgIC8vIERldGVjdCBjb2luY2lkZW50IGxpbmVzIChoYXMgYSBwcm9ibGVtLCByZWFkIGJlbG93KVxyXG4gICAgaWYgKGRlbm9taW5hdG9yID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWVyYXRvcjEgPT09IDAgJiYgbnVtZXJhdG9yMiA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByID0gbnVtZXJhdG9yMSAvIGRlbm9taW5hdG9yO1xyXG4gICAgY29uc3QgcyA9IG51bWVyYXRvcjIgLyBkZW5vbWluYXRvcjtcclxuXHJcbiAgICByZXR1cm4gKHIgPj0gMCAmJiByIDw9IDEpICYmIChzID49IDAgJiYgcyA8PSAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBheDogbnVtYmVyLFxyXG4gICAgYXk6IG51bWJlcixcclxuICAgIGF3OiBudW1iZXIsXHJcbiAgICBhaDogbnVtYmVyLFxyXG4gICAgYng6IG51bWJlcixcclxuICAgIGJ5OiBudW1iZXIsXHJcbiAgICBidzogbnVtYmVyLFxyXG4gICAgYmg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYnggKyBidyA+PSBheCAmJiBieSArIGJoID49IGF5ICYmIGJ4IDw9IGF4ICsgYXcgJiYgYnkgPD0gYXkgKyBhaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgYVg6IG51bWJlcixcclxuICAgIGFZOiBudW1iZXIsXHJcbiAgICBhUmFkaXVzOiBudW1iZXIsXHJcbiAgICBiWDogbnVtYmVyLFxyXG4gICAgYlk6IG51bWJlcixcclxuICAgIGJSYWRpdXM6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRQb2ludDJkRGlzdGFuY2UoYVgsIGFZLCBiWCwgYlkpIDw9IGFSYWRpdXMgKyBiUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRSZWN0MmRDb2xsaXNpb24oXHJcbiAgICBwb2ludFg6IG51bWJlcixcclxuICAgIHBvaW50WTogbnVtYmVyLFxyXG4gICAgcmVjdFg6IG51bWJlcixcclxuICAgIHJlY3RZOiBudW1iZXIsXHJcbiAgICByZWN0VzogbnVtYmVyLFxyXG4gICAgcmVjdEg6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IHJlY3RYICYmXHJcbiAgICAgICAgcG9pbnRZID49IHJlY3RZICYmXHJcbiAgICAgICAgcG9pbnRYIDw9IHJlY3RYICsgcmVjdFcgJiZcclxuICAgICAgICBwb2ludFkgPD0gcmVjdFkgKyByZWN0SDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UmVjdE1pbk1heDJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIG1pblg6IG51bWJlcixcclxuICAgIG1pblk6IG51bWJlcixcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcG9pbnRYID49IG1pblggJiZcclxuICAgICAgICBwb2ludFkgPj0gbWluWSAmJlxyXG4gICAgICAgIHBvaW50WCA8PSBtYXhYICYmXHJcbiAgICAgICAgcG9pbnRZIDw9IG1heFk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludENpcmNsZTJkQ29sbGlzaW9uKFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIGNpcmNsZVg6IG51bWJlcixcclxuICAgIGNpcmNsZVk6IG51bWJlcixcclxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyLFxyXG4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBwb2ludFBvaW50MmREaXN0YW5jZShwb2ludFgsIHBvaW50WSwgY2lyY2xlWCwgY2lyY2xlWSkgPD0gY2lyY2xlUmFkaXVzO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50MmREaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRQb2ludFNxcnQyZERpc3RhbmNlKGF4LCBheSwgYngsIGJ5KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludFBvaW50U3FydDJkRGlzdGFuY2UoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaXN0WCA9IGF4IC0gYng7XHJcbiAgICBjb25zdCBkaXN0WSA9IGF5IC0gYnk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lMmREaXN0YW5jZShcclxuICAgIGFYOiBudW1iZXIsXHJcbiAgICBhWTogbnVtYmVyLFxyXG4gICAgYlg6IG51bWJlcixcclxuICAgIGJZOiBudW1iZXIsXHJcbiAgICBwWDogbnVtYmVyLFxyXG4gICAgcFk6IG51bWJlcixcclxuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQocG9pbnRMaW5lU3FydDJkRGlzdGFuY2UoYVgsIGFZLCBiWCwgYlksIHBYLCBwWSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRMaW5lU3FydDJkRGlzdGFuY2UoXHJcbiAgICBhWDogbnVtYmVyLFxyXG4gICAgYVk6IG51bWJlcixcclxuICAgIGJYOiBudW1iZXIsXHJcbiAgICBiWTogbnVtYmVyLFxyXG4gICAgcFg6IG51bWJlcixcclxuICAgIHBZOiBudW1iZXIsXHJcbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBBID0gcFggLSBhWDtcclxuICAgIGNvbnN0IEIgPSBwWSAtIGFZO1xyXG4gICAgY29uc3QgQyA9IGJYIC0gYVg7XHJcbiAgICBjb25zdCBEID0gYlkgLSBhWTtcclxuXHJcbiAgICBjb25zdCBkb3QgICAgICAgICAgPSBBICogQyArIEIgKiBEO1xyXG4gICAgY29uc3QgbGVuZ3RoU3F1YXJlID0gQyAqIEMgKyBEICogRDtcclxuICAgIGxldCBwYXJhbSAgICAgICAgICA9IC0xO1xyXG4gICAgaWYgKGxlbmd0aFNxdWFyZSAhPT0gMCkge1xyXG4gICAgICAgIHBhcmFtID0gZG90IC8gbGVuZ3RoU3F1YXJlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB4eDogbnVtYmVyO1xyXG4gICAgbGV0IHl5OiBudW1iZXI7XHJcblxyXG4gICAgaWYgKHBhcmFtIDwgMCkge1xyXG4gICAgICAgIHh4ID0gYVg7XHJcbiAgICAgICAgeXkgPSBhWTtcclxuICAgIH0gZWxzZSBpZiAocGFyYW0gPiAxKSB7XHJcbiAgICAgICAgeHggPSBiWDtcclxuICAgICAgICB5eSA9IGJZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB4eCA9IGFYICsgcGFyYW0gKiBDO1xyXG4gICAgICAgIHl5ID0gYVkgKyBwYXJhbSAqIEQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHggPSBwWCAtIHh4O1xyXG4gICAgY29uc3QgZHkgPSBwWSAtIHl5O1xyXG5cclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRQb2ludDNkRGlzdGFuY2UoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYXo6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlciwgYno6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHBvaW50UG9pbnRTcXIzZERpc3RhbmNlKGF4LCBheSwgYXosIGJ4LCBieSwgYnopKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50UG9pbnRTcXIzZERpc3RhbmNlKGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGF6OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIsIGJ6OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZGlzdFggPSBheCAtIGJ4O1xyXG4gICAgY29uc3QgZGlzdFkgPSBheSAtIGJ5O1xyXG4gICAgY29uc3QgZGlzdFogPSBheiAtIGJ6O1xyXG5cclxuICAgIHJldHVybiBkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSArIGRpc3RaICogZGlzdFo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludExpbmUzZERpc3RhbmNlKFxyXG4gICAgYVN0YXJ0WDogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WTogbnVtYmVyLFxyXG4gICAgYVN0YXJ0WjogbnVtYmVyLFxyXG4gICAgYUVuZFg6IG51bWJlcixcclxuICAgIGFFbmRZOiBudW1iZXIsXHJcbiAgICBhRW5kWjogbnVtYmVyLFxyXG4gICAgYkNlbnRlclg6IG51bWJlcixcclxuICAgIGJDZW50ZXJZOiBudW1iZXIsXHJcbiAgICBiQ2VudGVyWjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3QgYVN1YkJ4ID0gYVN0YXJ0WCAtIGFFbmRYO1xyXG4gICAgY29uc3QgYVN1YkJ5ID0gYVN0YXJ0WSAtIGFFbmRZO1xyXG4gICAgY29uc3QgYVN1YkJ6ID0gYVN0YXJ0WiAtIGFFbmRaO1xyXG4gICAgY29uc3QgcFN1YkJ4ID0gYkNlbnRlclggLSBhRW5kWDtcclxuICAgIGNvbnN0IHBTdWJCeSA9IGJDZW50ZXJZIC0gYUVuZFk7XHJcbiAgICBjb25zdCBwU3ViQnogPSBiQ2VudGVyWiAtIGFFbmRaO1xyXG4gICAgY29uc3QgZG90QSAgID0gYVN1YkJ4ICogcFN1YkJ4ICsgYVN1YkJ5ICogcFN1YkJ5ICsgYVN1YkJ6ICogcFN1YkJ6O1xyXG4gICAgaWYgKGRvdEEgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50UG9pbnQzZERpc3RhbmNlKGJDZW50ZXJYLCBiQ2VudGVyWSwgYkNlbnRlclosIGFFbmRYLCBhRW5kWSwgYUVuZFopO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBiU3ViQXggPSBhRW5kWCAtIGFTdGFydFg7XHJcbiAgICBjb25zdCBiU3ViQXkgPSBhRW5kWSAtIGFTdGFydFk7XHJcbiAgICBjb25zdCBiU3ViQXogPSBhRW5kWiAtIGFTdGFydFo7XHJcbiAgICBjb25zdCBwU3ViQXggPSBiQ2VudGVyWCAtIGFTdGFydFg7XHJcbiAgICBjb25zdCBwU3ViQXkgPSBiQ2VudGVyWSAtIGFTdGFydFk7XHJcbiAgICBjb25zdCBwU3ViQXogPSBiQ2VudGVyWiAtIGFTdGFydFo7XHJcbiAgICBjb25zdCBkb3RCICAgPSBiU3ViQXggKiBwU3ViQXggKyBiU3ViQXkgKiBwU3ViQXkgKyBiU3ViQXogKiBwU3ViQXo7XHJcbiAgICBpZiAoZG90QiA8IDApIHtcclxuICAgICAgICByZXR1cm4gcG9pbnRQb2ludDNkRGlzdGFuY2UoYkNlbnRlclgsIGJDZW50ZXJZLCBiQ2VudGVyWiwgYVN0YXJ0WCwgYVN0YXJ0WSwgYVN0YXJ0Wik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZlY3RvclBvaW50M2REaXN0YW5jZShhU3RhcnRYLCBhU3RhcnRZLCBhU3RhcnRaLCBhRW5kWCwgYUVuZFksIGFFbmRaLCBiQ2VudGVyWCwgYkNlbnRlclksIGJDZW50ZXJaKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVWZWN0b3IzZiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB6OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludE5vcm1hbFBsYW5lM2REaXN0YW5jZShhTm9ybWFsOiBWZWN0b3IzLCBhUG9pbnQ6IFZlY3RvcjMsIGJQb2ludDogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkID0gLVZlY3RvcjMubXVsKGFOb3JtYWwsIGFQb2ludCkuc3VtKCk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguYWJzKChWZWN0b3IzLm11bChhTm9ybWFsLCBiUG9pbnQpLnN1bSgpICsgZCkgLyBNYXRoLnNxcnQoVmVjdG9yMy5tdWwoYU5vcm1hbCwgYU5vcm1hbCkuc3VtKCkpKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvaW50UGxhbmUoVmVjdG9yMyBhMSwgVmVjdG9yMyBhMiwgVmVjdG9yMyBhMywgVmVjdG9yMyBiUG9pbnQpIHtcclxuLy8gICAgIHJldHVybiBwb2ludFBsYW5lKGEzLnN1YihhMikuY3Jvc3MoYTEuc3ViKGEyKSksIGExLCBiUG9pbnQpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjdG9yUG9pbnQzZERpc3RhbmNlKFxyXG4gICAgc3RhcnRYOiBudW1iZXIsXHJcbiAgICBzdGFydFk6IG51bWJlcixcclxuICAgIHN0YXJ0WjogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyLFxyXG4gICAgZW5kWjogbnVtYmVyLFxyXG4gICAgcG9pbnRYOiBudW1iZXIsXHJcbiAgICBwb2ludFk6IG51bWJlcixcclxuICAgIHBvaW50WjogbnVtYmVyLFxyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc3RhcnRTdWJFbmRYID0gc3RhcnRYIC0gZW5kWDtcclxuICAgIGNvbnN0IHN0YXJ0U3ViRW5kWSA9IHN0YXJ0WSAtIGVuZFk7XHJcbiAgICBjb25zdCBzdGFydFN1YkVuZFogPSBzdGFydFogLSBlbmRaO1xyXG5cclxuICAgIGNvbnN0IGVuZFN1YlBvaW50WCA9IGVuZFggLSBwb2ludFg7XHJcbiAgICBjb25zdCBlbmRTdWJQb2ludFkgPSBlbmRZIC0gcG9pbnRZO1xyXG4gICAgY29uc3QgZW5kU3ViUG9pbnRaID0gZW5kWiAtIHBvaW50WjtcclxuXHJcblxyXG4gICAgY29uc3QgY3Jvc3NYID0gc3RhcnRTdWJFbmRZICogZW5kU3ViUG9pbnRaIC0gc3RhcnRTdWJFbmRaICogZW5kU3ViUG9pbnRZO1xyXG4gICAgY29uc3QgY3Jvc3NZID0gc3RhcnRTdWJFbmRaICogZW5kU3ViUG9pbnRYIC0gc3RhcnRTdWJFbmRYICogZW5kU3ViUG9pbnRaO1xyXG4gICAgY29uc3QgY3Jvc3NaID0gc3RhcnRTdWJFbmRYICogZW5kU3ViUG9pbnRZIC0gc3RhcnRTdWJFbmRZICogZW5kU3ViUG9pbnRYO1xyXG5cclxuICAgIGNvbnN0IGxlbmd0aDEgPSBNYXRoLnNxcnQoY3Jvc3NYICogY3Jvc3NYICsgY3Jvc3NZICogY3Jvc3NZICsgY3Jvc3NaICogY3Jvc3NaKTtcclxuICAgIGNvbnN0IGxlbmd0aDIgPSBNYXRoLnNxcnQoc3RhcnRTdWJFbmRYICogc3RhcnRTdWJFbmRYICsgc3RhcnRTdWJFbmRZICogc3RhcnRTdWJFbmRZICsgc3RhcnRTdWJFbmRaICogc3RhcnRTdWJFbmRaKTtcclxuXHJcbiAgICByZXR1cm4gbGVuZ3RoMSAvIGxlbmd0aDI7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vY2xvc2VzdC0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsaXNpb25zLTJkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Rpc3RhbmNlcy0yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kaXN0YW5jZXMtM2RcIjtcclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RGaXh0dXJlIH0gZnJvbSBcIi4vYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1hcHBlciB9IGZyb20gXCIuL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGF0YWJhc2VGaXh0dXJlPE9iaiwgT2JqRHRvPiBleHRlbmRzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBsaXN0RHRvOiBPYmpEdG9bXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWxEdG86IE9iakR0bztcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobGlzdDogT2JqW10sIG1hcHBlcjogQWJzdHJhY3RNYXBwZXI8T2JqLCBPYmpEdG8+KSB7XHJcbiAgICAgICAgc3VwZXIobGlzdCk7XHJcbiAgICAgICAgdGhpcy5saXN0RHRvICAgPSBsaXN0Lm1hcChtYXBwZXIubWFwVG9EdG8sIG1hcHBlcik7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxEdG8gPSB0aGlzLmxpc3REdG9bMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWw6IE9iajtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxpc3Q6IE9ialtdKSB7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBsaXN0WzBdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4ge1xyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcFRvRHRvKG9iamVjdDogUGFydGlhbDxPYmo+KTogT2JqRHRvO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBtYXBGcm9tRHRvKG9iamVjdDogUGFydGlhbDxPYmpEdG8+KTogT2JqO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQYWdpbmF0ZU1vZGVsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVRFTVNfUEVSX1BBR0UgPSAxMDtcclxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudCA9IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UsIG9mZnNldCA9IDApIHtcclxuICAgICAgICB0aGlzLmxpbWl0ICA9ICtjb3VudDtcclxuICAgICAgICB0aGlzLm9mZnNldCA9ICtvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShwYWdpbmF0ZT86IFBhZ2luYXRlTW9kZWwpOiBQYWdpbmF0ZU1vZGVsIHtcclxuICAgICAgICBpZiAoIXBhZ2luYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnaW5hdGVNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKFxyXG4gICAgICAgICAgICBpc05hTihwYWdpbmF0ZS5saW1pdCkgPyBQYWdpbmF0ZU1vZGVsLklURU1TX1BFUl9QQUdFIDogcGFnaW5hdGUubGltaXQsXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLm9mZnNldCkgPyAwIDogcGFnaW5hdGUub2Zmc2V0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaG9yaXpvbnRhbC1hbGlnbi50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmVzdGVkLXN0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb3B0aW9uYWwudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb2ludC5pbnRlcmFmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb3AudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wZXJ0eS1kZWNvcmF0b3IudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaXplLmludGVyYWZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dC1vcHRpb25zLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91bml0LW51bWJlci50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlcnRpY2FsLWFsaWduLnR5cGVcIjtcclxuIiwiaW1wb3J0IHsgQ2hlY2tlcnMgfSBmcm9tIFwiLi4vZG9tL2RlcHJlY2F0ZWQvQ2hlY2tlcnNcIjtcclxuaW1wb3J0IHsgRG9tR2V0IH0gZnJvbSBcIi4uL2RvbS9kb20tZ2V0XCI7XHJcbmltcG9ydCB7IE5vdEJyb3dzZXJFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuLi90eXBlcy9wb2ludC5pbnRlcmFmYWNlXCI7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tIFwiLi4vdHlwZXMvc2l6ZS5pbnRlcmFmYWNlXCI7XHJcbmltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCIuLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RDcmVhdG9yUGFyYW1zIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGF0dHI/OiBTdHJpbmdNYXA7XHJcbiAgICBjb250Pzogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdO1xyXG4gICAgc3R5bGU/OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIGhlaWdodCBvZiB3aW5kb3dcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB3aW5kb3cgaGVpZ2h0IGluIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdpbmRvd0hlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyB3aWR0aCBvZiB3aW5kb3dcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB3aW5kb3cgd2lkdGggaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V2luZG93V2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCwgYXBwZW5kIG9yIHJldHVybnMgdGV4dCBvZiBlbGVtZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gdGV4dCAtIHRleHQgdG8gcHV0IGluIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBhcHBlbmQgLSBmbGFnIGlmIHRleHQgc2hvdWxkIGJlIGFwcGVuZCBvciByZXBsYWNlIHByZXZpb3VzIHRleHRcclxuICAgICAqIEByZXR1cm5zIGVsZW1lbnQgZ2l2ZW4gYXMgaW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0ZXh0KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcsIGFwcGVuZCA9IHRydWUpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKGFwcGVuZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCwgYXBwZW5kIG9yIHJldHVybnMgaHRtbCBjb250ZW50IG9mIGVsZW1lbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBodG1sIC0gaHRtbCB0byBwdXQgaW4gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIGFwcGVuZCAtIGZsYWcgaWYgaHRtbCBzaG91bGQgYmUgYXBwZW5kIG9yIHJlcGxhY2UgcHJldmlvdXMgY29udGVudFxyXG4gICAgICogQHJldHVybnMgZWxlbWVudCBnaXZlbiBhcyBpbnB1dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGh0bWwoZWxlbWVudDogSFRNTEVsZW1lbnQsIGh0bWw6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBhcHBlbmQgPSB0cnVlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGlmIChhcHBlbmQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBodG1sID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBodG1sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKENoZWNrZXJzLmlzRWxlbWVudChodG1sKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGh0bWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQ2hlY2tlcnMuaXNFbGVtZW50KGh0bWwpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucywgYWRkLCByZW1vdmUgb3IgdG9nZ2xlIGVsZW1lbnRzIGNsYXNzZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZSBvciBsaXN0IG9mIGNsYXNzIG5hbWVzXHJcbiAgICAgKiBAcGFyYW0gZm9yY2UgLSBmbGFnIGlmIGNsYXNzIHNob3VsZCBiZSB0b2dnbGVkIGZhbHNlXHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIGlmIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY2hlY2sgY2xhc3MgcHJlc2VuY2Ugb3RoZXJ3aXNlIGVsZW1lbnQgZ2l2ZW4gYXMgaW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10sIGZvcmNlID0gZmFsc2UpOiBIVE1MRWxlbWVudCB8IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLmNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChuYW1lWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ2hlY2tlcnMuaXNCb29sZWFuKGZvcmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUobmFtZSwgZm9yY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjcmV0ZSBuZXcgZWxlbWVudFxyXG4gICAgICpcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgPT4gPGRpdj48L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJpZGVcIn0pID0+IDxkaXYgaWQ9XCJpZGVcIj48L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHt9LCBcInRleHRcIikgPT4gPGRpdj50ZXh0PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSwgXCI8Yj50ZXh0PC9iPlwiKSA9PiA8ZGl2PjxiPnRleHQ8L2I+PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSwgXCJ0ZXh0XCIsIHtjb2xvcjogXCJibHVlXCJ9KSA9PiA8ZGl2IHN0eWxlPVwiY29sb3I6IGJsdWU7XCI+dGV4dDwvZGl2PlxyXG4gICAgICpcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoe25hbWU6IFwiZGl2XCJ9KSA9PiA8ZGl2PjwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoe25hbWU6IFwiZGl2XCJ9KSA9PiA8ZGl2PjwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoe25hbWU6IFwiZGl2XCIsIGF0dHI6IHtpZDogXCJpZGVcIn19KSA9PiA8ZGl2IGlkPVwiaWRlXCI+PC9kaXY+O1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gbmFtZSBvZiBlbGVtZW50IG9yIG9iamVjdCBjb250YWlucyBhbGwgY29uZmlndXJhdGlvblxyXG4gICAgICogQHBhcmFtIGF0dHIgLSBtYXAgb2YgYWxsIGVsZW1lbnQgYXR0cmlidXRlc1xyXG4gICAgICogQHBhcmFtIGNvbnQgLSBlbGVtZW50IGNvbnRlbnQuIENhbiBiZSBzdHJpbmcsIGVsZW1lbnQgb3IgYXJyYXkgb2YgZWxlbWVudHNcclxuICAgICAqIEBwYXJhbSBzdHlsZSAtIHN0eWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgY3JlYXRlZCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChuYW1lOiBzdHJpbmcgfCBPYmplY3RDcmVhdG9yUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI/OiBTdHJpbmdNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udD86IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT86IENTU1N0eWxlRGVjbGFyYXRpb24pOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVsOiBIVE1MRWxlbWVudDtcclxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQobmFtZS5uYW1lLCBuYW1lLmF0dHIgfHwge30sIG5hbWUuY29udCB8fCBcIlwiLCBuYW1lLnN0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhdHRyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRyLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250KSkge1xyXG4gICAgICAgICAgICBjb250LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLmh0bWwoZWwsIGUsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBEb21VdGlscy5odG1sKGVsLCBjb250IGFzIHN0cmluZyB8IEhUTUxFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJlbW92ZSBlbGVtZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyByZW1vdmVkIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmUoZWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyBvYmplY3Qgd2l0aCBlbGVtZW50IHBvc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyBwb3NpdGlvbiBvZiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQb2ludCB7XHJcbiAgICAgICAgbGV0IHRvcCAgPSAwO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gMDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRvcCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xyXG4gICAgICAgICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBsZWZ0LFxyXG4gICAgICAgICAgICB5OiB0b3AsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgb3JkZXIgb2YgZWxlbWVudCBiZXR3ZWVuIHNpYmxpbmdzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyBpbmRleCBvZiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbmRleE9mKGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIG9iamVjdCB3aXRoIGVsZW1lbnQgc2l6ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgc2l6ZSBvZiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2l6ZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IFNpemUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoIDogZWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKGZvcm06IEhUTUxGb3JtRWxlbWVudCk6IFN0cmluZ01hcCB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBTdHJpbmdNYXAgPSB7fTtcclxuICAgICAgICAvLyBpZiBmb3JtcyBpcyBub3QgZWxlbWVudFxyXG4gICAgICAgIGlmICghQ2hlY2tlcnMuaXNFbGVtZW50KGZvcm0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBmb3JtIGlzIG5vdCBmb3JtXHJcbiAgICAgICAgaWYgKGZvcm0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcImZvcm1cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IGFsbCBpbnB1dHNcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IERvbUdldC5ieVRhZyhcImlucHV0XCIpO1xyXG5cclxuICAgICAgICAvLyBhZGQgYWxsIHZhbHVlcyB0byByZXN1bHQgb2JqZWN0XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlOiBFbGVtZW50ID0gZWxlbWVudHNba2V5XTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSAgICAgICA9IGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vZGVwcmVjYXRlZC9TdHJpbmdVdGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gd2FsayhkaXI6IHN0cmluZywgZG9uZTogKGVycm9yOiBhbnksIGZpbGVzPzogc3RyaW5nW10pID0+IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcclxuICAgIGZzLnJlYWRkaXIoZGlyLCAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBsaXN0OiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBlbmRpbmc6IG51bWJlciA9IGxpc3QubGVuZ3RoO1xyXG4gICAgICAgIGlmICghcGVuZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCByZXN1bHRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChmaWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgZmlsZSA9IHBhdGgucmVzb2x2ZShkaXIsIGZpbGUpO1xyXG4gICAgICAgICAgICBmcy5zdGF0KGZpbGUsIChlcnIxOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBzdGF0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ICYmIHN0YXQuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhbGsoZmlsZSwgKGVycjI6IGFueSwgcmVzPzogc3RyaW5nW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goLi4ucmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVV0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2NhbkRpclJlY3Vyc2l2ZShkaXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nW10+KChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMuc3RhdChkaXIsIChlcnIwOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBzdGF0czogZnMuU3RhdHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZGlyICsgXCIgaXMgbm90IGRpcmVjdG9yeVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdhbGsoZGlyLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRmlsZUpTT04odXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBkYXRhOiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIEZpbGVVdGlscy5sb2FkRmlsZSh1cmwsIChlcnIsIGRhdGEpID0+IGNhbGxiYWNrKGVyciwgSlNPTi5wYXJzZShkYXRhKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGUodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBkYXRhOiBzdHJpbmcpID0+IGFueSwgZW5jb2RpbmcgPSBcInV0ZjhcIik6IHZvaWQge1xyXG4gICAgICAgIGZzLnJlYWRGaWxlKHVybCwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVKc29uRmlsZShkYXRhOiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBGaWxlVXRpbHMuc2F2ZUZpbGUoSlNPTi5zdHJpbmdpZnkoZGF0YSksIGZpbGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVGaWxlKGRhdGE6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGZpbGVOYW1lLCBkYXRhLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHN1Y2Nlc3MoXCJUaGUgZmlsZSB3YXMgc2F2ZWQhXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMudW5saW5rKGZpbGVOYW1lLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHN1Y2Nlc3MoXCJUaGUgZmlsZSB3YXMgcmVtb3ZlZCFcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tFeHRlbnNpb24obmFtZTogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBTdHJpbmdVdGlscy5qb2luU2luZ2xlKG5hbWUsIFwiLlwiLCBleHRlbnNpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBhcnJheSA9IFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCB7bmFtZTogXCJKb2FjaGltXCIsIGFnZTogMTV9LCB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICogY29uc3QgY29uZGl0aW9ucyA9IHthZ2U6IDIzLCBuYW1lOiBcIk1vbmljYVwifVxyXG4gKiB3aGVyZShhcnJheSwgY29uZGl0aW9ucyk7IC8vIFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCAge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2hlcmU8VCBleHRlbmRzIG9iamVjdD4oYXJyYXk6IFRbXSwgY29uZGl0aW9uOiBQYXJ0aWFsPFQ+KTogVFtdIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb25kaXRpb24gfHwgdHlwZW9mIGNvbmRpdGlvbiAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQ6IFRbXSAgICAgID0gW107XHJcbiAgICBjb25zdCBjb25kaXRpb25FbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoY29uZGl0aW9uKTtcclxuXHJcbiAgICBhcnJheS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRkID0gY29uZGl0aW9uRW50cmllcy5zb21lKChjb25kaXRpb25FbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZVtjb25kaXRpb25FbnRyeVswXSBhcyBrZXlvZiBUXSA9PT0gY29uZGl0aW9uRW50cnlbMV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGFkZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gc3ViIGFycmF5IGZyb20gYXJyYXlcclxuICpcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc2xpY2V9IGluc3RlYWRcclxuICogQHBhcmFtIGFycmF5IC0gaW5wdXQgYXJyYXlcclxuICogQHBhcmFtIG1pbkluZGV4IC0gc3RhcnQgaW5kZXhcclxuICogQHBhcmFtIG1heEluZGV4IC0gZW5kIGluZGV4XHJcbiAqIEByZXR1cm5zIGZpbmFsIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3ViQXJyYXk8VCA9IGFueT4oYXJyYXk6IFRbXSwgbWluSW5kZXggPSAwLCBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDEpOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XHJcbiAgICBjb25zdCBmaW5hbCAgICAgICA9IGFycmF5Lmxlbmd0aCA8IG1heEluZGV4ID8gYXJyYXkubGVuZ3RoIC0gMSA6IG1heEluZGV4O1xyXG4gICAgZm9yIChsZXQgaSA9IG1pbkluZGV4OyBpIDw9IGZpbmFsOyBpKyspIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBhcnJheVtpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1heGltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWF4aW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWF4fSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF4KGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPiBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1pbmltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWluaW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWlufSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPCBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgc3VtbWFyeSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5zIGF2ZXJhZ2Ugb2YgbnVtZXJpYyBhcnJheSBnaXZlbiBhcyBpbnB1dFxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIGF2ZXJhZ2Ugb2YgYWxsIG51bWJlcnMgaW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmcoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gYXJyYXkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gam9pbiBhcnJheSBieSBkZWxpbWl0ZXIgYW5kIGFwcGVuZCBwcmVmaXggYW5kIHBvc3RmaXhcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBjaGFyYWN0ZXIgdXNlZCBmb3Igam9pbiBlbGVtZW50cyBpbiBhcnJheVxyXG4gKiBAcGFyYW0gcHJlZml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGZpbmFsIHN0cmluZ1xyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGVuZCBvZiBmaW5hbCBzdHJpbmdcclxuICogQHJldHVybnMgZmluYWwgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pbjxUPihhcnJheTogVFtdLCBkZWxpbWl0ZXI6IHN0cmluZywgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBhcnJheSArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGFycmF5LmpvaW4oZGVsaW1pdGVyKSArIHBvc3RmaXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJucyBsYXN0IGVsZW1lbnQgZnJvbSBhcnJheSBvciBudWxsIGlmIGFycmF5IGlzIGVtcHR5LiBJZiBhcmd1bWVudCBpcyBub3QgYXJyYXksIG1ldGhvZCByZXR1cm5zIGFyZ3VtZW50XHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcmV0dXJucyBsYXN0IHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0PFQ+KGFycmF5OiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybnMgcmFuZG9tIGVsZW1lbnQgZnJvbSBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHJldHVybnMgcmFuZG9tIHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JdGVtPFQgPSB1bmtub3duPihhcnJheTogVFtdKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROUmFuZG9tPFQ+KGFyZ3M6IFRbXSwgY291bnQ6IG51bWJlcik6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA8PSBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8VD4oKTtcclxuXHJcbiAgICB3aGlsZSAocmVzdWx0LnNpemUgPD0gY291bnQpIHtcclxuICAgICAgICBjb25zdCByYW5kb21JdGVtID0gZ2V0UmFuZG9tSXRlbTxUPihhcmdzKTtcclxuICAgICAgICBpZiAocmFuZG9tSXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkKHJhbmRvbUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbTxUPihyZXN1bHQpO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybiBjb3B5IG9mIGFycmF5IHdpdGggb25seSBkaXN0aW5jdCBlbGVtZW50c1xyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSB3aXRoIGR1cGxpY2F0ZSBlbGVtZW50c1xyXG4gKiBAcmV0dXJucyB1bmlxdWUgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVW5pcXVlPFQ+KGFycmF5OiBUW10pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0PFQ+KGFycmF5KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lIDIgYXJyYXkgZWFjaCBvdGhlclxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hPdGhlcjxUPihhcnI6IFRbXSwgY2FsbGJhY2s6KGE6IFQsIGI6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGFyci5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBqPWkrMTsgajxhcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZSwgYXJyW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL21hdGgtdXRpbHNcIjtcclxuXHJcbmNvbnN0IGNvbG9yczogeyBbY29sb3I6IHN0cmluZ106IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB9ID0ge1xyXG4gICAgYmxhY2s6IFswLCAwLCAwXSxcclxuICAgIHdoaXRlOiBbMjU1LCAyNTUsIDI1NV0sXHJcbiAgICByZWQgIDogWzI1NSwgMCwgMF0sXHJcbiAgICBncmVlbjogWzAsIDI1NSwgMF0sXHJcbiAgICBibHVlIDogWzAsIDAsIDI1NV0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycENvbG9yKFxyXG4gICAgZnJvbUNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcclxuICAgIHRvQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgcHJvZ3Jlc3M6IG51bWJlcixcclxuKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgcmVkICAgPSBwcm9ncmVzcyAqIGZyb21Db2xvclswXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclswXTtcclxuICAgIGNvbnN0IGdyZWVuID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMV0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMV07XHJcbiAgICBjb25zdCBibHVlICA9IHByb2dyZXNzICogZnJvbUNvbG9yWzJdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzJdO1xyXG4gICAgY29uc3QgYWxwaGEgPSBwcm9ncmVzcyAqIGZyb21Db2xvclszXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclszXTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgY2xhbXAocmVkLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGdyZWVuLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGJsdWUsIDAsIDI1NSksXHJcbiAgICAgICAgY2xhbXAoYWxwaGEsIDAsIDI1NSksXHJcbiAgICBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycEhleGFDb2xvcihhOiBzdHJpbmcsIGI6IHN0cmluZywgYW1vdW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYWggPSArYS5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpO1xyXG4gICAgY29uc3QgYXIgPSBhaCA+PiAxNjtcclxuICAgIGNvbnN0IGFnID0gYWggPj4gOCAmIDB4RkY7XHJcbiAgICBjb25zdCBhYiA9IGFoICYgMHhGRjtcclxuICAgIGNvbnN0IGJoID0gK2IucmVwbGFjZShcIiNcIiwgXCIweFwiKTtcclxuICAgIGNvbnN0IGJyID0gYmggPj4gMTY7XHJcbiAgICBjb25zdCBiZyA9IGJoID4+IDggJiAweEZGO1xyXG4gICAgY29uc3QgYmIgPSBiaCAmIDB4RkY7XHJcbiAgICBjb25zdCByciA9IGFyICsgYW1vdW50ICogKGJyIC0gYXIpO1xyXG4gICAgY29uc3QgcmcgPSBhZyArIGFtb3VudCAqIChiZyAtIGFnKTtcclxuICAgIGNvbnN0IHJiID0gYWIgKyBhbW91bnQgKiAoYmIgLSBhYik7XHJcblxyXG4gICAgcmV0dXJuIFwiI1wiICsgKCgxIDw8IDI0KSArIChyciA8PCAxNikgKyAocmcgPDwgOCkgKyByYiB8IDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJyZ2IoY29sb3I6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChjb2xvci5zbGljZSgxKSwgMTYpO1xyXG5cclxuICAgIHJldHVybiBbbnVtID4+IDE2LCBudW0gPj4gOCAmIDB4MDBGRiwgbnVtICYgMHgwMDAwRkZdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hhZGVDb2xvcihjb2xvcjogc3RyaW5nLCBwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gaGV4MnJnYihjb2xvcik7XHJcbiAgICBjb25zdCBhbXQgPSBNYXRoLnJvdW5kKDIuNTUgKiBwZXJjZW50KTtcclxuICAgIGNvbnN0IFIgICA9IG51bVswXSArIGFtdDtcclxuICAgIGNvbnN0IEcgICA9IG51bVsxXSArIGFtdDtcclxuICAgIGNvbnN0IEIgICA9IG51bVsyXSArIGFtdDtcclxuXHJcbiAgICByZXR1cm4gcmdiMmhleChSLCBHLCBCKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYjJoZXgoUjogbnVtYmVyLCBHOiBudW1iZXIsIEI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCIjXCIgKyAoMHgxMDAwMDAwICsgKFIgPCAyNTUgPyBSIDwgMSA/IDAgOiBSIDogMjU1KSAqIDB4MTAwMDAgK1xyXG4gICAgICAgIChHIDwgMjU1ID8gRyA8IDEgPyAwIDogRyA6IDI1NSkgKiAweDEwMCArXHJcbiAgICAgICAgKEIgPCAyNTUgPyBCIDwgMSA/IDAgOiBCIDogMjU1KSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW50MmhleCh2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZSAgPSB2YWwudG9TdHJpbmcoMTYpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gXCIwMDAwMDBcIi5zdWJzdHIoMCwgNiAtIHZhbHVlLmxlbmd0aCkgKyB2YWx1ZTtcclxuXHJcbiAgICByZXR1cm4gXCIjXCIgKyByZXN1bHQudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludDJyZ2IodmFsOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB2YWwgPj4gMTYsXHJcbiAgICAgICAgKHZhbCA+PiA4KSAmIDB4RkYsXHJcbiAgICAgICAgdmFsICYgMHhGRlxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJpbnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiMmludChSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSIDw8IDE2IHwgKEcgPDwgOCkgJiAweEZGRkYgfCBCO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb2xvcihjb2xvcjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmIChjb2xvcnNbY29sb3JdKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tjb2xvcl07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGV4YU1hdGNoID0gY29sb3IubWF0Y2goL14jKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8pO1xyXG4gICAgaWYgKGhleGFNYXRjaCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFsxXSwgMTYpLFxyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbMl0sIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzNdLCAxNiksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZ2JhTWF0aCA9IGNvbG9yLm1hdGNoKC9yZ2JhP1xcKChcXGR7MSwzfSkgKiwgKihcXGR7MSwzfSkgKiwgKihcXGR7MSwzfSkoICosICpcXGQqLj9cXGQqKVxcKS8pO1xyXG4gICAgaWYgKHJnYmFNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbMV0sIDEwKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbMl0sIDEwKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbM10sIDEwKSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwYXJzZSBjb2xvcjogXCIgKyBjb2xvcik7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQXJyYXlzIGZyb20gXCIuLi9hcnJheS11dGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgQXJyYXlzfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXJyYXlVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogY29uc3QgYXJyYXkgPSBbe25hbWU6IFwiTWljaGFlbFwiLCBhZ2U6IDIzfSwge25hbWU6IFwiSm9hY2hpbVwiLCBhZ2U6IDE1fSwge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAgICAgKiBjb25zdCBjb25kaXRpb25zID0ge2FnZTogMjMsIG5hbWU6IFwiTW9uaWNhXCJ9XHJcbiAgICAgKiB3aGVyZShhcnJheSwgY29uZGl0aW9ucyk7IC8vIFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCAge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgd2hlcmU8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogYW55IH0+KGFycmF5OiBUW10sIGNvbmRpdGlvbjogYW55KTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLndoZXJlKGFycmF5LCBjb25kaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHN1YiBhcnJheSBmcm9tIGFycmF5XHJcbiAgICAgKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc2xpY2V9IGluc3RlYWRcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIGlucHV0IGFycmF5XHJcbiAgICAgKiBAcGFyYW0gbWluSW5kZXggLSBzdGFydCBpbmRleFxyXG4gICAgICogQHBhcmFtIG1heEluZGV4IC0gZW5kIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyBmaW5hbCBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1YkFycmF5PFQgPSBhbnk+KGFycmF5OiBUW10sIG1pbkluZGV4ID0gMCwgbWF4SW5kZXggPSBhcnJheS5sZW5ndGggLSAxKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLnN1YkFycmF5KGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybiBtYXhpbWFsIHZhbHVlIGZyb20gbnVtZXJpYyBhcnJheVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICAgICAqIEByZXR1cm5zIG1heGltYWwgbnVtYmVyIGZyb20gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBtYXgoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLm1heChhcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm4gbWluaW1hbCB2YWx1ZSBmcm9tIG51bWVyaWMgYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAgICAgKiBAcmV0dXJucyBtaW5pbWFsIG51bWJlciBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5taW4oYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gICAgICogQHJldHVybnMgc3VtbWFyeSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMuc3VtKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgYXZlcmFnZSBvZiBudW1lcmljIGFycmF5IGdpdmVuIGFzIGlucHV0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gICAgICogQHJldHVybnMgYXZlcmFnZSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGF2ZyhhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMuYXZnKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGpvaW4gYXJyYXkgYnkgZGVsaW1pdGVyIGFuZCBhcHBlbmQgcHJlZml4IGFuZCBwb3N0Zml4XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAgICAgKiBAcGFyYW0gZGVsaW1pdGVyIC0gY2hhcmFjdGVyIHVzZWQgZm9yIGpvaW4gZWxlbWVudHMgaW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBwcmVmaXggLSBzdHJpbmcgYXBwZW5kIGF0IHRoZSBiZWdpbm5pbmcgb2YgZmluYWwgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gcG9zdGZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGVuZCBvZiBmaW5hbCBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIGZpbmFsIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW48VD4oYXJyYXk6IFRbXSwgZGVsaW1pdGVyOiBzdHJpbmcsIHByZWZpeCA9IFwiXCIsIHBvc3RmaXggPSBcIlwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLmpvaW4oYXJyYXksIGRlbGltaXRlciwgcHJlZml4LCBwb3N0Zml4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm5zIGxhc3QgZWxlbWVudCBmcm9tIGFycmF5IG9yIG51bGwgaWYgYXJyYXkgaXMgZW1wdHkuIElmIGFyZ3VtZW50IGlzIG5vdCBhcnJheSwgbWV0aG9kIHJldHVybnMgYXJndW1lbnRcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gICAgICogQHJldHVybnMgbGFzdCB2YWx1ZSBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdDxUID0gYW55PihhcnJheTogVFtdKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXRMYXN0KGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm5zIHJhbmRvbSBlbGVtZW50IGZyb20gYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSB2YWx1ZSBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tPFQgPSBhbnk+KGFycmF5OiBUW10pOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXRSYW5kb21JdGVtKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5SYW5kb208VCA9IGFueT4oYXJyYXk6IFRbXSwgY291bnQ6IG51bWJlcik6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXROUmFuZG9tKGFycmF5LCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcmV0dXJuIGNvcHkgb2YgYXJyYXkgd2l0aCBvbmx5IGRpc3RpbmN0IGVsZW1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgd2l0aCBkdXBsaWNhdGUgZWxlbWVudHNcclxuICAgICAqIEByZXR1cm5zIHVuaXF1ZSBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VVbmlxdWU8VCA9IGFueT4oYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5tYWtlVW5pcXVlKGFycmF5KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBNYXRocyBmcm9tIFwiLi4vbWF0aC11dGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWF0aHN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYXRoVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyByb3VuZFRvRGVjaW1hbHMobnVtOiBudW1iZXIsIGRlY2ltYWxzID0gMiwgdHlwZTogXCJmbG9vclwiIHwgXCJjZWlsXCIgfCBcInJvdW5kXCIgPSBcInJvdW5kXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5yb3VuZFRvRGVjaW1hbHMobnVtLCBkZWNpbWFscywgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYWQobnVtOiBudW1iZXIsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLnBhZChudW0sIHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMuY2xhbXAodmFsdWUsIG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJpbm9taWFsQ29lZmZpY2llbnQobjogbnVtYmVyLCBrOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5iaW5vbWlhbENvZWZmaWNpZW50KG4sIGspO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5sZXJwKGEsIGIsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2cyaSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMubG9nMmkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGFtcChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5jbGFtcChzY2FsZSwgbWluLCBtYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLnJhbmRvbUludChtaW4sIG1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMucmFuZG9tKG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGF2ZXJhZ2UoYXJnczogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5hdmVyYWdlKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlmZihudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLmdldERpZmYobnVtMSwgbnVtMik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEB0eXBlZGVmICB7KE9iamVjdCl9IGFueVxyXG4gKi9cclxuaW1wb3J0IHsgU3RyaW5nTWFwIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3N0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCAqIGFzIE1pc2MgZnJvbSBcIi4uL21pc2MtdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgTmV0Q2xpZW50IGZyb20gXCIuLi9uZXQtY2xpZW50LXV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIE9iamVjdHMgZnJvbSBcIi4uL29iamVjdC11dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWZsZWN0aW9uIGZyb20gXCIuLi9yZWZsZWN0aW9uLXV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWlzY1V0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGNsYXNzIGJ5IG5hbWUgYW5kIGxpc3Qgb2YgcGFyYW1ldGVyc1xyXG4gICAgICpcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgY3JlYXRlQ2xhc3N9IGluc3RlYWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtIGNsYXNzIG5hbWVcclxuICAgICAqIEBwYXJhbSBhcmdzIC0gY29uc3RydWN0b3IgcGFyYW1ldGVyXHJcbiAgICAgKiBAcmV0dXJucyBjcmVhdGVkIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNsYXNzKG5hbWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0aW9uLmNyZWF0ZUNsYXNzKG5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHBhcnNlIGNvb2tpZXNcclxuICAgICAqIEBwYXJhbSBjb29raWVzIC0gY29va2UgdG8gcGFyc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZUNvb2tpZXMoY29va2llczogc3RyaW5nKTogU3RyaW5nTWFwIHtcclxuICAgICAgICByZXR1cm4gTWlzYy5wYXJzZUNvb2tpZXMoY29va2llcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgY2hlY2sgaWYgb2JqZWN0IGlzIGluIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gb2JqIC0gc2VhcmNoZWQgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSAtIGFycmF5IG9mIG9iamVjdHMgdG8gYmUgY29tcGFyZSB3aXRoIHNlYXJjaGVkIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzSW4ob2JqOiBhbnksIC4uLmRhdGE6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MuaXNJbihvYmosIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHBhcnNlIEpTT04gY29udGVudCB3aXRoIGNvbW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCAtIHN0cmluZ2lmeSBKU09OXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VKU09OV2l0aENvbW1lbnRzKGNvbnRlbnQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MucGFyc2VKU09OV2l0aENvbW1lbnRzKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IHNob3VsZCBhcHBlbmQgY29va2llcyBvciBhZGQgb3B0aW9uIHRvIGFwcGVuZGluZyBpbnN0ZWFkIG9mIHJlcGxhY2UgY29va2llc1xyXG4gICAgLy8gVE9ETzogZXhwaXJlcyBtdXN0IGJlIG9ubHkgaW4gdGhlIGVuZCBvZiBjb29raWVzXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCBkYXlzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb29raWUoY25hbWU6IHN0cmluZywgc291cmNlID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY29va2llIDogXCJcIik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MuZ2V0Q29va2llKGNuYW1lLCBzb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VQYXJhbXMocXVlcnkgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gXCImXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlciA9IFwiPVwiKTogYW55IHtcclxuICAgICAgICByZXR1cm4gTWlzYy5wYXJzZVBhcmFtcyhxdWVyeSwgc2VwYXJhdG9yLCBkZWxpbWl0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByb3VnaFNpemVPZk9iamVjdH0gaW5zdGVhZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvYmplY3QgLSBvYmplY3QgdG8gZGV0ZXJtaW5lIHNpemVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByb3VnaFNpemVPZk9iamVjdChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMucm91Z2hTaXplT2ZPYmplY3Qob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdFRvUXVlcnlQYXJhbXMob2JqOiBTdHJpbmdNYXApOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLm9iamVjdFRvUXVlcnlQYXJhbXMob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgaW5jbHVkZUZpbGV9IGluc3RlYWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZSAtIHBhdGggdG8gZmlsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluY2x1ZGVGaWxlKGZpbGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiBOZXRDbGllbnQuaW5jbHVkZUZpbGUoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnNlcmlhbGl6ZShvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2Uob2JqOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnBhcnNlKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgICAgICByZXR1cm4gTWlzYy5tYXAoc291cmNlLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBPYmplY3RzIGZyb20gXCIuLi9vYmplY3QtdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE9iamVjdHN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHdpdGhvdXQob2JqOiBhbnksIGl0ZW1zOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMud2l0aG91dChvYmosIGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5lc3RlZFByb3BlcnR5KG9iamVjdDogYW55LCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmdldE5lc3RlZFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHlQYXRoLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2l6ZShvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMuc2l6ZShvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNQbGFpbihvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmlzUGxhaW4ob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VGbGF0KGxpc3Q6IGFueVtdLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLm1ha2VGbGF0KGxpc3QsIHByb3BlcnR5UGF0aCwgc2VwYXJhdG9yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDaGVja2VycyBmcm9tIFwiLi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBDaGVja2Vyc30gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0NoZWNrZXJzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNDYW1lbENhc2UgPSBDaGVja2Vycy5pc0NhbWVsQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJDYW1lbENhc2UgPSBDaGVja2Vycy5pc1VwcGVyQ2FtZWxDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNMb3dlckNhbWVsQ2FzZSA9IENoZWNrZXJzLmlzTG93ZXJDYW1lbENhc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0xvd2VyU25ha2VDYXNlID0gQ2hlY2tlcnMuaXNMb3dlclNuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1NuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVGltZUZvcm1hdCA9IENoZWNrZXJzLmlzVGltZUZvcm1hdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIENoZWNrZXJzIGZyb20gXCIuLi9zdHJpbmctY2hlY2tlcnNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5ncyBmcm9tIFwiLi4vc3RyaW5nLXV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBTdHJpbmdzfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5yZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBqb2luKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmpvaW5TdHJpbmcoZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9VcHBlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvVXBwZXJTbmFrZUNhc2UodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlclNuYWtlQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9VcHBlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0NhcGl0YWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50b0NhcGl0YWwodGV4dCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdFBhcnQodGV4dDogc3RyaW5nLCBkaXZpZGVyID0gXCIgXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmdldExhc3RQYXJ0KHRleHQsIGRpdmlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnQodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY291bnQodGV4dCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB0ZXh0IC0gdGV4dCBuZWVkIHRvIGJlIHJlcGVhdFxyXG4gICAgICogQHBhcmFtIGNvdW50IC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICAgICAqIEBkZXByZWNhdGVkIC0gdXNlIHtAbGluayBTdHJpbmcjcmVwZWF0fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGVhdCh0ZXh0OiBzdHJpbmcsIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGVhdChjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUFsbCh0ZXh0LCB3b3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogbmVlZCB0byBiZSBmaXhlZFxyXG4gICAgcHVibGljIHN0YXRpYyB0ZW1wbGF0ZSh0ZXh0OiBzdHJpbmcsIHZhbHVlczogU3RyaW5nTWFwLCBzdGFydCA9IFwie3tcIiwgZW5kID0gXCJ9fVwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50ZW1wbGF0ZSh0ZXh0LCB2YWx1ZXMsIHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRW1wdHlMaW5lcyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUVtcHR5TGluZXMoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBiZXR3ZWVuKHRleHQ6IHN0cmluZywga2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmJldHdlZW4odGV4dCwga2V5MSwga2V5Mik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvY2N1cnJlbmNlcyh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5vY2N1cnJlbmNlcyh0ZXh0LCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvQ2FwaXRhbCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRW1wdHkodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzRW1wdHkodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzd2FwQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnN3YXBDYXNlKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhbnNmb3JtVG9CYXNpY0Zvcm1hdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRyYW5zZm9ybVRvQmFzaWNGb3JtYXQodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBDaGVja2Vycy5pc1ZhbGlkRW1haWwoZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBpc1ZhbGlkUGhvbmVOdW1iZXJ9IGluc3RlYWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbnVtIC0gc3RyaW5nIHRvIHZhbGlkYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIENoZWNrZXJzLmlzVmFsaWRQaG9uZU51bWJlcihudW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QXNjaWlBcnJheSh0ZXh0OiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuZ2V0QXNjaWlBcnJheSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRvQmFzaWNGb3JtKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9CYXNpY0Zvcm0odGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb250YWlucyh0ZXh0OiBzdHJpbmcsIHN1YnN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY29udGFpbnModGV4dCwgc3Vic3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5TaW5nbGUocHJlZml4OiBzdHJpbmcsIGRpdmlkZXI6IHN0cmluZywgcG9zdGZpeDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5qb2luU2luZ2xlKHByZWZpeCwgZGl2aWRlciwgcG9zdGZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRGb3JtYXR0ZWROdW1iZXIobnVtOiBzdHJpbmcsIHByZWZpeCA9IFwiKzQyMVwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5nZXRGb3JtYXR0ZWROdW1iZXIobnVtLCBwcmVmaXgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IChOb2RlIHwgc3RyaW5nKVtdIHwgTm9kZSB8IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgb25DbGljaz86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgc3R5bGVzPzogeyBbc3R5bGUgaW4ga2V5b2YgQ1NTU3R5bGVEZWNsYXJhdGlvbl0/OiBDU1NTdHlsZURlY2xhcmF0aW9uW3N0eWxlXSB9O1xyXG4gICAgY29udGVudD86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxuICAgIGZvcj86IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgYXV0b3BsYXk/OiBib29sZWFuO1xyXG4gICAgaHJlZj86IHN0cmluZztcclxuICAgIGRvd25sb2FkPzogc3RyaW5nO1xyXG4gICAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb1N0cmluZyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc2hvd1BhcmVudCA9IHRydWUpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmpvaW4oXCIuXCIpO1xyXG4gICAgY29uc3QgaWQgICAgICA9IGVsZW1lbnQuaWQgPyBcIiNcIiArIGVsZW1lbnQuaWQgOiBcIlwiO1xyXG4gICAgY29uc3QgcGFyZW50ICA9IGVsZW1lbnQucGFyZW50RWxlbWVudCA/IGVsZW1lbnRUb1N0cmluZyhlbGVtZW50LnBhcmVudEVsZW1lbnQsIGZhbHNlKSArIFwiID4gXCIgOiBcIlwiO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnQgKyBlbGVtZW50LmxvY2FsTmFtZSArIGlkICsgKGNsYXNzZXMgPyBcIi5cIiArIGNsYXNzZXMgOiBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBoZWFkZXJTZWxlY3RvciA9IFwiLmhlYWRlclwiKTogeyBjbGVhcjogKCkgPT4gdm9pZCB9IHtcclxuICAgIGxldCBwb3MxID0gMDtcclxuICAgIGxldCBwb3MyID0gMDtcclxuICAgIGxldCBwb3MzID0gMDtcclxuICAgIGxldCBwb3M0ID0gMDtcclxuXHJcbiAgICBjb25zdCBkcmFnTW91c2VEb3duID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9zMyAgICAgICAgICAgICAgICAgICA9IGUuY2xpZW50WDtcclxuICAgICAgICBwb3M0ICAgICAgICAgICAgICAgICAgID0gZS5jbGllbnRZO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwICAgPSBjbG9zZURyYWdFbGVtZW50O1xyXG4gICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBlbGVtZW50RHJhZztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZWxlbWVudERyYWcgPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3MxICAgICAgICAgICAgICAgPSBwb3MzIC0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczIgICAgICAgICAgICAgICA9IHBvczQgLSBlLmNsaWVudFk7XHJcbiAgICAgICAgcG9zMyAgICAgICAgICAgICAgID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczQgICAgICAgICAgICAgICA9IGUuY2xpZW50WTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCAgPSAoZWxlbWVudC5vZmZzZXRUb3AgLSBwb3MyKSArIFwicHhcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAoZWxlbWVudC5vZmZzZXRMZWZ0IC0gcG9zMSkgKyBcInB4XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXJTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VEcmFnRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCAgID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVJbWFnZShvcHRpb25zPzogRWxlbWVudEF0dHJpYnV0ZXMpOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbXCJpbWdcIl0ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQ3JlYXRlRWxlbWVudChcImltZ1wiLCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAoQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMpIHtcclxuICAgICAgICByZXN1bHQuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGVja2JveChsYWJlbDogc3RyaW5nLCBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQsIGNoZWNrZWQgPSBmYWxzZSk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICBjaGVja2VkLFxyXG4gICAgICAgIHR5cGUgICAgOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IG9uQ2hhbmdlKGlucHV0RWxlbWVudC5jaGVja2VkKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBDcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge1xyXG4gICAgICAgIGNsYXNzTmFtZTogXCJjaGVja2JveC1jb250YWluZXJcIixcclxuICAgICAgICBjaGlsZHJlbiA6IFtsYWJlbCwgaW5wdXRFbGVtZW50LCBDcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImNoZWNrbWFya1wifSldLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHR5cGU6IEssIG9wdGlvbnM/OiBFbGVtZW50QXR0cmlidXRlcyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50PEs+KHR5cGUpO1xyXG4gICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhvcHRpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZW50cnlbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsYXNzTmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9IGVudHJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbkNoYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbkNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tlZFwiOlxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0eWxlc1wiOlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZW50cnlbMV0pLmZvckVhY2goKHN0eWxlRW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3R5bGVbc3R5bGVFbnRyeVswXSBhcyBhbnldID0gc3R5bGVFbnRyeVsxXSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hpbGRyZW5cIjpcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5WzFdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoLi4uZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwZW5kKGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29udGVudFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5WzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGVudHJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKGVudHJ5WzBdLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRPRE86IGVsZW1lbnQgcmVtYWlucyBhZnRlciBkZWxldGlvbiBvbk1lc3NhZ2Ugc2NyZWVuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlQ29sb3JVc2luZ0RlZmF1bHRJbnB1dCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgICAgICB0eXBlICAgICA6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICBvbkNoYW5nZSA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZTxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBLLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10+KGAke3R5cGV9LiR7Y2xhc3Nlcy5qb2luKFwiLlwiKX1gKTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBDcmVhdGVFbGVtZW50KHR5cGUsIHtjbGFzc05hbWU6IGNsYXNzZXMuam9pbihcIiBcIil9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlQW5kQXBwZW5kPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmVudDogSFRNTEVsZW1lbnQsIHR5cGU6IEssIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGdldE9yQ3JlYXRlPEs+KHBhcmVudCwgdHlwZSwgLi4uY2xhc3Nlcyk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJhbmRvbSBmcm9tIFwiLi9yYW5kb20tdXRpbHNcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZChudW06IG51bWJlciwgc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHMgPSBcIjAwMDAwMDAwMDAwMDAwXCIgKyBudW07XHJcblxyXG4gICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3VuZFRvRGVjaW1hbHMobnVtOiBudW1iZXIsIGRlY2ltYWxzID0gMiwgdHlwZTogXCJmbG9vclwiIHwgXCJjZWlsXCIgfCBcInJvdW5kXCIgPSBcInJvdW5kXCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZGl2aWRlciA9IHBhcnNlSW50KDEgKyBuZXcgQXJyYXkoZGVjaW1hbHMgKyAxKS5qb2luKFwiMFwiKSwgMTApO1xyXG5cclxuICAgIHJldHVybiAoTWF0aFt0eXBlXShudW0gKiBkaXZpZGVyKSAvIGRpdmlkZXIpLnRvRml4ZWQoZGVjaW1hbHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaDJOdW1iZXJzKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHhGaW5hbCA9IHggPj0gMCA/IHggKiAyIDogLXggKiAyIC0gMTtcclxuICAgIGNvbnN0IHlGaW5hbCA9IHkgPj0gMCA/IHkgKiAyIDogLXkgKiAyIC0gMTtcclxuXHJcbiAgICByZXR1cm4gKCh4RmluYWwgKyB5RmluYWwpICogKHhGaW5hbCArIHlGaW5hbCArIDEpIC8gMikgKyB5RmluYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmlub21pYWxDb2VmZmljaWVudChuOiBudW1iZXIsIGs6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgciA9IDE7XHJcbiAgICBpZiAoayA+IG4pIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGQgPSAxOyBkIDw9IGs7IGQrKykge1xyXG4gICAgICAgIHIgKj0gbjtcclxuICAgICAgICBuLS07XHJcbiAgICAgICAgciAvPSBkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGIgKiB2YWwgKyAoMSAtIHZhbCkgKiBhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nMmkodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgciA9IDA7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHdoaWxlICgodmFsdWUgPj49IDEpID4gMCkge1xyXG4gICAgICAgIHIrKztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhbXAobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBjbGFtcCgobWF4IC0gbWluKSAqIHNjYWxlICsgbWluLCBtaW4sIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHJhbmRvbUludEJldHdlZW59IGluc3RlYWQ7XHJcbiAqXHJcbiAqIEBwYXJhbSBtaW4gLSBtaW4gdmFsdWVcclxuICogQHBhcmFtIG1heCAtIG1heCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFJhbmRvbS5yYW5kb21JbnRCZXR3ZWVuKG1pbiwgbWF4KTtcclxufVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByYW5kb21GbG9hdEJldHdlZW59IGluc3RlYWQ7XHJcbiAqXHJcbiAqIEBwYXJhbSBtaW4gLSBtaW4gdmFsdWVcclxuICogQHBhcmFtIG1heCAtIG1heCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFJhbmRvbS5yYW5kb21GbG9hdEJldHdlZW4obWluLCBtYXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXZlcmFnZShhcmdzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1bSAvIGFyZ3MubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZihudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtMSAtIG51bTIpO1xyXG59XHJcblxyXG5jb25zdCByYXRpbyA9IDE4MCAvIE1hdGguUEk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWVzKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIHJhdGlvO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCIuLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBwYXJzZSBjb29raWVzXHJcbiAqIEBwYXJhbSBjb29raWVzIC0gY29va2UgdG8gcGFyc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMoY29va2llczogc3RyaW5nKTogU3RyaW5nTWFwPHN0cmluZz4ge1xyXG4gICAgY29uc3QgbGlzdDogU3RyaW5nTWFwPHN0cmluZz4gPSB7fTtcclxuICAgIGNvbnN0IGRhdGEgICAgICAgICAgICAgICAgICAgID0gY29va2llcyA/IGNvb2tpZXMudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIjtcIikgOiBbXTtcclxuICAgIGRhdGEuZm9yRWFjaCgoY29va2llKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgICAgID0gY29va2llLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICBjb25zdCBzaGlmdFBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChzaGlmdFBhcnQpIHtcclxuICAgICAgICAgICAgbGlzdFtzaGlmdFBhcnQudHJpbSgpXSA9IGRlY29kZVVSSShwYXJ0cy5qb2luKFwiPVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgb2JqZWN0IGlzIGluIGFycmF5XHJcbiAqIEBwYXJhbSBvYmogLSBzZWFyY2hlZCBvYmplY3RcclxuICogQHBhcmFtIGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIHRvIGJlIGNvbXBhcmUgd2l0aCBzZWFyY2hlZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luKG9iajogdW5rbm93biwgLi4uZGF0YTogdW5rbm93bltdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhWzBdKSkge1xyXG4gICAgICAgIGlmIChkYXRhWzBdLmluZGV4T2Yob2JqKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGF0YS5pbmRleE9mKG9iaikgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBwYXJzZSBKU09OIGNvbnRlbnQgd2l0aCBjb21tZW50c1xyXG4gKiBAcGFyYW0gY29udGVudCAtIHN0cmluZ2lmeSBKU09OXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKU09OV2l0aENvbW1lbnRzPFQ+KGNvbnRlbnQ6IHN0cmluZyk6IFQge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY29udGVudC5yZXBsYWNlKC9cXC9cXC8uKlxcbi9nLCBcIlwiKSk7XHJcbn1cclxuXHJcbi8vIFRPRE86IHNob3VsZCBhcHBlbmQgY29va2llcyBvciBhZGQgb3B0aW9uIHRvIGFwcGVuZGluZyBpbnN0ZWFkIG9mIHJlcGxhY2UgY29va2llc1xyXG4vLyBUT0RPOiBleHBpcmVzIG11c3QgYmUgb25seSBpbiB0aGUgZW5kIG9mIGNvb2tpZXNcclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCBkYXlzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgIGNvbnN0IGZpbmFsQ29va2llcyA9IGAke25hbWV9PSR7dmFsdWV9O2V4cGlyZXM9JHtkLnRvVVRDU3RyaW5nKCl9YDtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBmaW5hbENvb2tpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9PSR7dmFsdWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjbmFtZTogc3RyaW5nLCBzb3VyY2UgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jb29raWUgOiBcIlwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgY29uc3QgY2EgICA9IHNvdXJjZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKGxldCBjIG9mIGNhKSB7XHJcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbXM8VD4ocXVlcnkgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9IFwiJlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyID0gXCI9XCIpOiBUIHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHZhcnM6IHN0cmluZ1tdICAgPSBxdWVyeS5zcGxpdChzZXBhcmF0b3IpO1xyXG4gICAgZm9yIChjb25zdCBwYWlyIG9mIHZhcnMpIHtcclxuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYWlyLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZ1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHF1ZXJ5U3RyaW5nW2tleV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XSA9IFtxdWVyeVN0cmluZ1trZXldLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBxdWVyeVN0cmluZyBhcyBUO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9RdWVyeVBhcmFtcyhvYmo6IFN0cmluZ01hcDxzdHJpbmc+KTogc3RyaW5nIHtcclxuICAgIC8vIFRPRE86IGFkZCB1cmwgcHJlZml4XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGZvciAoY29uc3Qgb2JqS2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkob2JqS2V5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gYCR7cmVzdWx0Lmxlbmd0aCA+IDAgPyBcIiZcIiA6IFwiP1wifSR7b2JqS2V5fT0ke29ialtvYmpLZXldfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9ialtrZXldID0gb2JqW2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZTxUPihvYmo6IHN0cmluZyk6IFQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gSlNPTi5wYXJzZShvYmopO1xyXG4gICAgZm9yIChjb25zdCBpIGluIHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KGkpIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiByZXN1bHRbaV0gIT09IFwic3RyaW5nXCIgfHwgIShyZXN1bHRbaV0uaW5kZXhPZihcImZ1bmN0aW9uIChcIikgPT09IDAgfHxcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXS5tYXRjaCgvXlxcKFtfYS16QS1aMC05XSsoICosICpbX2EtekEtWjAtOV0rKSpcXCkgKj0+LykpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxyXG4gICAgICAgICAgICBldmFsKFwicmVzdWx0W2ldID0gXCIgKyByZXN1bHRbaV0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ldID0gZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uOiBhbnkgPSB7fTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5tYXBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25baXRlbS5hdHRyRF0gPSBpdGVtLm1hcEZ1bmN0aW9uKHNvdXJjZVtpdGVtLmF0dHJTXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IGl0ZW0ubWFwRnVuY3Rpb24oc291cmNlW2l0ZW0uYXR0clNdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5hdHRyRCkge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJEXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJTXSA9IHNvdXJjZVtpdGVtLmF0dHJTXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgTm90QnJvd3NlckV4Y2VwdGlvbiB9IGZyb20gXCIuLi9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IENyZWF0ZUVsZW1lbnQsIENyZWF0ZUltYWdlIH0gZnJvbSBcIi4vaHRtbC11dGlsc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlKCk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ICAgICAgICAgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgICAgICB0eXBlICAgIDogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgICA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkICA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKENyZWF0ZUltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZWFkZXIucmVzdWx0IGFzIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKChldmVudC50YXJnZXQgYXMgYW55KS5maWxlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmNsaWNrKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEZpbGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCAgICAgICAgID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgdHlwZSAgICA6IFwiZmlsZVwiLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyICA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KChldmVudC50YXJnZXQgYXMgYW55KS5maWxlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmNsaWNrKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGllbnREb3dubG9hZEZpbGUodGV4dDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBDcmVhdGVFbGVtZW50KFwiYVwiLCB7XHJcbiAgICAgICAgaHJlZiAgICA6IFwiZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQodGV4dCksXHJcbiAgICAgICAgZG93bmxvYWQ6IG5hbWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgZWxlbWVudC5jbGljaygpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlRmlsZShmaWxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIGlmICghc2NyaXB0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2NyaXB0LnNyYyAgID0gZmlsZTtcclxuICAgIHNjcmlwdC50eXBlICA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE9iamVjdEVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRob3V0PFQgZXh0ZW5kcyBvYmplY3Q+KG9iajogVCwgaXRlbXM6IChrZXlvZiBUKVtdKTogT21pdDxULCBhbnk+IHtcclxuICAgIHJldHVybiBnZXRPYmplY3RFbnRyaWVzKG9iaikuZmlsdGVyKChlbnRyeSkgPT4gIWl0ZW1zLmluY2x1ZGVzKGVudHJ5LmtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldltlbnRyeS5rZXldID0gZW50cnkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSBhcyBUKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdEVudHJpZXM8VCBleHRlbmRzIG9iamVjdD4ob2JqOiBUKTogT2JqZWN0RW50cnk8VD5bXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IE9iamVjdEVudHJ5PFQ+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qgb2JqS2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KG9iaktleSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAga2V5ICA6IG9iaktleSxcclxuICAgICAgICAgICAgdmFsdWU6IG9ialtvYmpLZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXN0ZWRQcm9wZXJ0eShvYmplY3Q6IGFueSwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIHNlcGFyYXRvciA9IFwiLlwiKTogYW55IHtcclxuICAgIGNvbnN0IHByb3BlcnR5TGlzdCA9IHByb3BlcnR5UGF0aC5zcGxpdChzZXBhcmF0b3IpO1xyXG5cclxuICAgIHJldHVybiBwcm9wZXJ0eUxpc3QucmVkdWNlKChjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZSwgcHJvcGVydHlOYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROZXN0ZWRQcm9wZXJ0eVZhbHVlID8gY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWVbcHJvcGVydHlOYW1lXSA6IHVuZGVmaW5lZDtcclxuICAgIH0sIG9iamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROZXN0ZWRQcm9wZXJ0eTxUPihrZXk6IHN0cmluZywgaXRlbTogYW55LCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgbGV0IG9iaiA9IGl0ZW07XHJcbiAgICBjb25zdCBzcGxpdEtleSA9IGtleS5zcGxpdChcIi5cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0S2V5Lmxlbmd0aCAtIDE7IGkrKyl7XHJcbiAgICAgICAgb2JqID0gb2JqW3NwbGl0S2V5W2ldXTtcclxuICAgIH1cclxuICAgIG9ialtzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXV0gPSB2YWx1ZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3VnaFNpemVPZk9iamVjdDxUPihvYmplY3Q6IFQpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgb2JqZWN0TGlzdCAgICAgICA9IFtdO1xyXG4gICAgY29uc3Qgc3RhY2s6IHVua25vd25bXSA9IFtvYmplY3RdO1xyXG4gICAgbGV0IGJ5dGVzICAgICAgICAgICAgICA9IDA7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gdmFsdWUubGVuZ3RoIDw8IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gODtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBvYmplY3RMaXN0LmluZGV4T2YodmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICBvYmplY3RMaXN0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHZhbHVlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBieXRlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpemU8VCBleHRlbmRzIG9iamVjdD4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBpIGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluPFQgZXh0ZW5kcyBvYmplY3Q+KG9iamVjdDogVCk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGluZGV4KSAmJiB0eXBlb2Ygb2JqZWN0W2luZGV4XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGxpc3QgLSBsaXN0IHRvIGZsYXRcclxuICogQHBhcmFtIHByb3BlcnR5UGF0aCAtIHBhdGggdG8gcHJvcGVydHlcclxuICogQHBhcmFtIHNlcGFyYXRvciAtIHNlcGFyYXRvciBpbiBwcm9wZXJ0eVBhdGhcclxuICogQHBhcmFtIHNraXBVbmRlZmluZWQgLSB0cnVlIGlmIHVuZGVmaW5lZCBzaG91bGQgYmUgc2tpcHBlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBcclxuICogY29uc3QgaXRlbXMgPSBbXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiR2FicmllbFwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiRWxsYVwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiR2FicmllbFwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiSm9lXCJcclxuICogICAgICAgIH1cclxuICogICAgfVxyXG4gKiBdXHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb24ubmFtZVwiKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJHYWJyaWVsXCIsIFwiSm9lXCJdXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb25fbmFtZVwiLCBcIl9cIik7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiR2FicmllbFwiLCBcIkpvZVwiXVxyXG4gKiBjb25zb2xlLmxvZyhtYWtlRmxhdChpdGVtcyksIFwicGVyc29uLm5hbWVcIiwgXCIuXCIsIHRydWUpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkpvZVwiXVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmxhdChsaXN0OiBhbnlbXSwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIHNlcGFyYXRvciA9IFwiLlwiLCBza2lwVW5kZWZpbmVkID0gZmFsc2UpOiBhbnkge1xyXG4gICAgY29uc3QgcHJvcGVydHlMaXN0ID0gcHJvcGVydHlQYXRoLmluZGV4T2Yoc2VwYXJhdG9yKSA+PSAwID8gcHJvcGVydHlQYXRoLnNwbGl0KHNlcGFyYXRvcikgOiBbcHJvcGVydHlQYXRoXTtcclxuXHJcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHlMaXN0LnJlZHVjZSgocHJvcFZhbCwgcHJvcGVydHlOYW1lKSA9PiBwcm9wVmFsID8gcHJvcFZhbFtwcm9wZXJ0eU5hbWVdIDogdW5kZWZpbmVkLCBjdXJyKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICYmIHNraXBVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9XHJcbiAgICAgICAgYWNjLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21GbG9hdEJldHdlZW4obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb21GbG9hdEJldHdlZW4obWluLCBtYXgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUJvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUl0ZW08VD4oLi4uaXRlbXM6IFRbXSk6IFQge1xyXG4gICAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCldO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGUgY2xhc3MgYnkgbmFtZSBhbmQgbGlzdCBvZiBwYXJhbWV0ZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZVxyXG4gKiBAcGFyYW0gYXJncyAtIGNvbnN0cnVjdG9yIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyBjcmVhdGVkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG5hbWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgY29uc3QgdGVtcCA9IE9iamVjdC5jcmVhdGUobmFtZS5wcm90b3R5cGUpO1xyXG4gICAgbmFtZS5hcHBseSh0ZW1wLCBhcmdzKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxGaXJzdEZ1bmN0aW9uKC4uLmZ1bmN0aW9uczogYW55W10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIGZ1bmN0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFRPRE86IFRoaXMgaXMgZGVwcmVjYXRlZC4gTW92ZSB0aGlzIHRvIHZhbGlkYXRvcnNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBNaXNjVmFsaWRhdG9ycyBmcm9tIFwiLi4vdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnNcIjtcclxuY29uc3QgdGltZUZvcm1hdHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBISCAgOiBcIigyWzAtM118WzAxXVxcXFxkKVwiLFxyXG4gICAgSCAgIDogXCIoMlswLTNdfFswMV0/XFxcXGQpXCIsXHJcbiAgICBtbSAgOiBcIihbMC01XVxcXFxkKVwiLFxyXG4gICAgbSAgIDogXCIoWzAtNV0/XFxcXGQpXCIsXHJcbiAgICBNTSAgOiBcIigwXFxcXGR8MVswLTJdfFxcXFxkKVwiLFxyXG4gICAgTSAgIDogXCIoWzEtOV18MVswLTJdKVwiLFxyXG4gICAgc3MgIDogXCIoWzAtNV1cXFxcZClcIiwgLy8gbW1cclxuICAgIHMgICA6IFwiKFswLTVdP1xcXFxkKVwiLCAvLyBzc1xyXG4gICAgWVlZWTogXCIoWzEtOV1cXFxcZHszLDN9KVwiLFxyXG4gICAgWVkgIDogXCIoXFxcXGR7MiwyfSlcIixcclxuICAgIEREICA6IFwiKFswLTNdXFxcXGQpXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXT9bYS16XSsoW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlthLXpdKyhbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bYS16XSooX1thLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bQS1aXSooX1tBLVpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFthLXpdKnxbQS1aXSopKF9bYS16QS1aXSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVGb3JtYXQodGV4dDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZUZvcm1hdHMpIHtcclxuICAgICAgICBpZiAodGltZUZvcm1hdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShrZXksIHRpbWVGb3JtYXRzW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7Zm9ybWF0fSRgKS50ZXN0KHRleHQpO1xyXG59XHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRQaG9uZU51bWJlcn0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gbnVtIC0gbnVtIHRvIHZhbGlkYXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZFBob25lTnVtYmVyKG51bSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2NWYWxpZGF0b3JzLmlzVmFsaWRFbWFpbH0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gZW1haWwgLSBlbWFpbCB0byB2YWxpZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZEVtYWlsKGVtYWlsKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCIuL2FycmF5LXV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIFN0cmluZ0NoZWNrZXJzIGZyb20gXCIuL3N0cmluZy1jaGVja2Vyc1wiO1xyXG5cclxuY29uc3QgYWNjZW50ZWRMb3dlckNoYXJhY3RlcnMgPSBcIsSFw6DDocOkw6LDo8Olw6bEg8SHxI3EicSPxJnDqMOpw6vDqsSdxKXDrMOtw6/DrsS1xYLEvsWExYjDssOzw7bFkcO0w7XDsMO4xZvImcWfxaHFncWlyJvFo8Wtw7nDusO8xbHDu8Oxw7/DvcOnxbzFusW+XCI7XHJcbmNvbnN0IG5vcm1hbExvd2VyQ2hhcmFjdGVycyAgID0gXCJhYWFhYWFhYWFjY2NkZWVlZWVnaGlpaWlqbGxubm9vb29vb29vc3Nzc3N0dHR1dXV1dXVueXljenp6XCI7XHJcbmNvbnN0IGFjY2VudGVkQ2hhcmFjdGVycyAgICAgID0gYWNjZW50ZWRMb3dlckNoYXJhY3RlcnMgKyBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycy50b1VwcGVyQ2FzZSgpO1xyXG5jb25zdCBub3JtYWxDaGFyYWN0ZXJzICAgICAgICA9IG5vcm1hbExvd2VyQ2hhcmFjdGVycyArIG5vcm1hbExvd2VyQ2hhcmFjdGVycy50b1VwcGVyQ2FzZSgpO1xyXG5cclxuLyogVE9ETzpcclxuICAgIHN0YXRpYyB1bmRlcnNjb3JlKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBodW1hbml6ZSh3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGFzaGVyaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIC8vZGFzaENhc2UgPSBhLWItYy1kLWVcclxuICAgIC8vZG90Q2FzZSBhLmMuZC52LnMuZFxyXG4gICAgLy9wYXNjYWxDYXNlID0gRm9vQmFyQmF6XHJcbiAgICAvL3BhdGhDYXNlID0gYS9iL2MvZFxyXG4gICAgLy9zbmFrZUNhc2UgPSBhX2JfY19kX1xyXG4gICAgc3RhdGljIGlzVXBwZXIod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzTG93ZXIod29yZCkge1xyXG4gICAgfVxyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFjY2VudGVkQ2hhcmFjdGVycyh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF3b3JkIHx8ICF3b3JkLnJlcGxhY2UpIHtcclxuICAgICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKC8uL2csIChlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFjY2VudGVkQ2hhcmFjdGVycy5pbmRleE9mKGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IG5vcm1hbENoYXJhY3RlcnNbaW5kZXhdIDogZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9VcHBlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAoaSwgdSwgZSkgPT4gZSA/IFwiX1wiICsgZSA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXy8sIFwiXCIpXHJcbiAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Mb3dlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzTG93ZXJTbmFrZUNhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChpLCB1LCBlKSA9PiBlID8gXCJfXCIgKyBlIDogXCJcIilcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNMb3dlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnRyaW0oKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkoW0EtWl0pL2csIFwiJDEkMl8kM1wiKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAobWF0aCwgc2VwLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogXCJcIilcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoL14uLywgKGUpID0+IGUudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNVcHBlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b0NhcGl0YWwodG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL14uLywgKGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0NhcGl0YWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLy4vLCAoZSkgPT4gZS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RQYXJ0KHRleHQ6IHN0cmluZywgZGl2aWRlciA9IFwiIFwiKTogc3RyaW5nIHtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC5zcGxpdCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRUZXh0ID0gdGV4dC5zcGxpdChkaXZpZGVyKTtcclxuXHJcbiAgICByZXR1cm4gc3BsaXRUZXh0W3NwbGl0VGV4dC5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50KHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICh0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoa2V5LCBcImdcIikpIHx8IFtdKS5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdGV4dCAtIHRleHQgbmVlZCB0byBiZSByZXBlYXRcclxuICogQHBhcmFtIG51bWJlck9mUmVwZXRpdGlvbnMgLSBudW1iZXIgb2YgaXRlcmF0aW9uc1xyXG4gKiBAZGVwcmVjYXRlZCAtIHVzZSB7QGxpbmsgU3RyaW5nI3JlcGVhdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQodGV4dDogc3RyaW5nLCBudW1iZXJPZlJlcGV0aXRpb25zOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShudW1iZXJPZlJlcGV0aXRpb25zICsgMSkuam9pbih0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbCh0ZXh0OiBzdHJpbmcsIHdvcmRzOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke3dvcmRzLmpvaW4oXCJ8XCIpfSlgLCBcImdcIiksIFwiXCIpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBuZWVkIHRvIGJlIGZpeGVkXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZXh0OiBzdHJpbmcsIHZhbHVlczogU3RyaW5nTWFwPHN0cmluZz4sIHN0YXJ0ID0gXCJ7e1wiLCBlbmQgPSBcIn19XCIpOiBzdHJpbmcge1xyXG4gICAgc3RhcnQgICAgICAgICA9IHN0YXJ0LnJlcGxhY2UoL1stW1xcXSgpKlxcc10vZywgXCJcXFxcJCZcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCQvZywgXCJcXFxcJFwiKTtcclxuICAgIGVuZCAgICAgICAgICAgPSBlbmQucmVwbGFjZSgvWy1bXFxdKCkqXFxzXS9nLCBcIlxcXFwkJlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCQvZywgXCJcXFxcJFwiKTtcclxuICAgIGNvbnN0IHJlZ2V4cCAgPSBuZXcgUmVnRXhwKGAke3N0YXJ0fSguKz8pJyR7ZW5kfWAsIFwiZ1wiKTtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHJlZ2V4cCkgfHwgW107XHJcblxyXG4gICAgbWF0Y2hlcy5mb3JFYWNoKChtYXRjaCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSAgID0gbWF0Y2guc3Vic3RyaW5nKHN0YXJ0Lmxlbmd0aCwgbWF0Y2gubGVuZ3RoIC0gZW5kLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKG1hdGNoLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eUxpbmVzKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9eXFxzKiQoPzpcXHJcXG4/fFxcbikvZ20sIFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmV0d2Vlbih0ZXh0OiBzdHJpbmcsIGtleTE6IHN0cmluZywga2V5Mjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHN0YXJ0UG9zID0gdGV4dC5pbmRleE9mKGtleTEpO1xyXG4gICAgY29uc3QgZW5kUG9zICAgPSB0ZXh0LmluZGV4T2Yoa2V5Mik7XHJcbiAgICBpZiAoc3RhcnRQb3MgPCAwICYmIGVuZFBvcyA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIGVuZFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVuZFBvcyA8IDAgJiYgc3RhcnRQb3MgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhzdGFydFBvcyArIGtleTEubGVuZ3RoLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHN0YXJ0UG9zICsga2V5MS5sZW5ndGgsIGVuZFBvcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvY2N1cnJlbmNlcyh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGV4dC5tYXRjaChuZXcgUmVnRXhwKGtleSwgXCJnXCIpKSB8fCBbXSkubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXFxzXFx1RkVGRlxceEEwXXsyLH0vZywgXCIgXCIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXFMvZywgKGNoYXIpID0+IHtcclxuICAgICAgICBjb25zdCBsb3dlckNhc2UgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsb3dlckNhc2UgPT09IGNoYXIgPyBjaGFyLnRvVXBwZXJDYXNlKCkgOiBsb3dlckNhc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVRvQmFzaWNGb3JtYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBjb2xsYXBzZVdoaXRlc3BhY2UocmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQpLnRvTG93ZXJDYXNlKCkpLnRyaW0oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzY2lpQXJyYXkodGhpc0FyZzogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGxldHRlciBvZiB0aGlzQXJnKSB7XHJcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gbGV0dGVyLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQmFzaWNGb3JtKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyh0ZXh0OiBzdHJpbmcsIHN1YnN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0ZXh0ICYmIHJlbW92ZUFjY2VudGVkQ2hhcmFjdGVycyh0ZXh0LnRvTG93ZXJDYXNlKCkpLmluZGV4T2Yoc3Vic3RyaW5nKSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gam9pblNpbmdsZShwcmVmaXg6IHN0cmluZywgZGl2aWRlcjogc3RyaW5nLCBwb3N0Zml4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHBvc3RmaXguc3RhcnRzV2l0aChkaXZpZGVyKSAmJiBwcmVmaXguZW5kc1dpdGgoZGl2aWRlcikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgcG9zdGZpeC5zdWJzdHJpbmcoZGl2aWRlci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwb3N0Zml4LnN0YXJ0c1dpdGgoZGl2aWRlcikgfHwgcHJlZml4LmVuZHNXaXRoKGRpdmlkZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGRpdmlkZXIgKyBwb3N0Zml4O1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBqb2lufSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBkYXRhIC0gZGF0YSB0byBqb2luXHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBkZWxpbWl0ZXJcclxuICogQHBhcmFtIHByZWZpeCAtIHByZWZpeFxyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHBvc3RmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luU3RyaW5nKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGpvaW4oZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bTogc3RyaW5nLCBwcmVmaXggPSBcIis0MjFcIik6IHN0cmluZyB7XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvWyggKS8tXS9nLCBcIlwiKTtcclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIitcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiMDBcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVtLnN1YnN0cmluZygyKTtcclxuICAgIH1cclxuICAgIGlmIChudW0uc3RhcnRzV2l0aChcIjA5XCIpIHx8IG51bS5zdGFydHNXaXRoKFwiMDJcIikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgbnVtLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdXp6eV9tYXRjaF9zaW1wbGUocGF0dGVybjogc3RyaW5nLCBzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHBhdHRlcm5JZHggICAgICA9IDA7XHJcbiAgICBsZXQgc3RySWR4ICAgICAgICAgID0gMDtcclxuICAgIGNvbnN0IHBhdHRlcm5MZW5ndGggPSBwYXR0ZXJuLmxlbmd0aDtcclxuICAgIGNvbnN0IHN0ckxlbmd0aCAgICAgPSBzdHIubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChwYXR0ZXJuSWR4ICE9PSBwYXR0ZXJuTGVuZ3RoICYmIHN0cklkeCAhPT0gc3RyTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybkNoYXIgPSBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuSWR4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHN0ckNoYXIgICAgID0gc3RyLmNoYXJBdChzdHJJZHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocGF0dGVybkNoYXIgPT09IHN0ckNoYXIpIHtcclxuICAgICAgICAgICAgKytwYXR0ZXJuSWR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICArK3N0cklkeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0dGVybkxlbmd0aCAhPT0gMCAmJiBzdHJMZW5ndGggIT09IDAgJiYgcGF0dGVybklkeCA9PT0gcGF0dGVybkxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VGb3JBbGwoY29udGVudDogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdLCBwbGFjZUhvbGRlcjogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShwbGFjZUhvbGRlciwgdmFsdWUpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RyaW5nTWFwIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBpbnRlcnZhbHM6IFN0cmluZ01hcDxudW1iZXI+ID0ge1xyXG4gICAgXCJ5ZWFyXCIgIDogMzE1MzYwMDAsXHJcbiAgICBcIm1vbnRoXCIgOiAyNTkyMDAwLFxyXG4gICAgXCJ3ZWVrXCIgIDogNjA0ODAwLFxyXG4gICAgXCJkYXlcIiAgIDogODY0MDAsXHJcbiAgICBcImhvdXJcIiAgOiAzNjAwLFxyXG4gICAgXCJtaW51dGVcIjogNjAsXHJcbiAgICBcInNlY29uZFwiOiAxXHJcbn07XHJcblxyXG5jb25zdCBpbnRlcnZhbEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhpbnRlcnZhbHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVBZ2UodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCgrbmV3IERhdGUoKSAtICtuZXcgRGF0ZSh2YWx1ZSkpIC8gMTAwMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAyOSkgeyAvLyBsZXNzIHRoYW4gMzAgc2Vjb25kcyBhZ28gd2lsbCBzaG93IGFzICdKdXN0IG5vdydcclxuICAgICAgICAgICAgcmV0dXJuIFwiSnVzdCBub3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnRlcnZhbF0gb2YgaW50ZXJ2YWxFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBNYXRoLmZsb29yKHNlY29uZHMgLyBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVyfSAke2tleX0gYWdvYDsgLy8gc2luZ3VsYXIgKDEgZGF5IGFnbylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGAke2NvdW50ZXJ9ICR7a2V5fXMgYWdvYDsgLy8gcGx1cmFsICgyIGRheXMgYWdvKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZTogRGF0ZSwgcGF0dGVybjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKHRpbWU6IG51bWJlcik6IHN0cmluZyA9PiB0aW1lIDwgMTAgPyBcIjBcIiArIHRpbWUgOiBcIlwiICsgdGltZTtcclxuXHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXCIoRER8TU18WVlZWXxZWVl8WVl8SEh8bW18U1MpXCIsIFwiZ1wiKTtcclxuICAgIGNvbnN0IEREICAgID0gdG9TdHJpbmcoZGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgY29uc3QgTU0gICAgPSB0b1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuICAgIGNvbnN0IFlZWVkgID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIjtcclxuICAgIGNvbnN0IFlZWSAgID0gWVlZWS5zdWJzdHIoMSwgNCk7XHJcbiAgICBjb25zdCBZWSAgICA9IFlZWS5zdWJzdHIoMSwgNCk7XHJcbiAgICBjb25zdCBISCAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSk7XHJcbiAgICBjb25zdCBtbSAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIGNvbnN0IFNTICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG5cclxuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UocmVnZXgsIChlKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEREO1xyXG4gICAgICAgICAgICBjYXNlIFwiTU1cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNTTtcclxuICAgICAgICAgICAgY2FzZSBcIllZWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWVlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlZXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWVlZO1xyXG4gICAgICAgICAgICBjYXNlIFwiWVlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBZWTtcclxuICAgICAgICAgICAgY2FzZSBcIkhIXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSEg7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtbVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1tO1xyXG4gICAgICAgICAgICBjYXNlIFwiU1NcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIG9wdDogeyBtczogbnVtYmVyLCBzOiBudW1iZXIsIG06IG51bWJlciwgaDogbnVtYmVyIH0pOiBEYXRlIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzTmFOKG9wdC5tcykpIHtcclxuICAgICAgICBkYXRlLnNldE1pbGxpc2Vjb25kcyhvcHQubXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQucykpIHtcclxuICAgICAgICBkYXRlLnNldFNlY29uZHMob3B0LnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQubSkpIHtcclxuICAgICAgICBkYXRlLnNldE1pbnV0ZXMob3B0Lm0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihvcHQuaCkpIHtcclxuICAgICAgICBkYXRlLnNldEhvdXJzKG9wdC5oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0T2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge21zOiAwLCBzOiAwLCBtOiAwLCBoOiAwfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRPZlRoZURheShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gc2V0RGF0ZShkYXRlLCB7bXM6IDk5OSwgczogNTksIG06IDU5LCBoOiAyM30pO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL21pc2MtdmFsaWRhdG9yc1wiO1xyXG4iLCJjb25zdCB2YWxpZEVtYWlsUmVnZXggICAgICAgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuY29uc3QgdmFsaWRQaG9uZU51bWJlclJlZ2V4ID0gL14oWytdfDAwKT9bKF0/WzAtOV17Myw0fVspXT9bLVxccy5dP1swLTldezIsM31bLVxccy5dP1swLTldezIsNn0oWy1cXHMuXT9bMC05XXszfSk/JC9pbTtcclxuXHJcbmZ1bmN0aW9uIHR5cGVPZihhcmc6IHVua25vd24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoYXJnOiBhbnkpOiBhcmcgaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJzdHJpbmdcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwib2JqZWN0XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihhcmc6IGFueSk6IGFyZyBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm51bWJlclwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKGFyZzogYW55KTogYXJnIGlzIGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcImJvb2xlYW5cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyZyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGbG9hdChhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcIm51bWJlclwiICYmIGFyZyAlIDEgIT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChhcmc/OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJ1bmRlZmluZWRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChvYmopICYmXHJcbiAgICAgICAgICAgIG9iai5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICBpc09iamVjdChvYmouc3R5bGUpICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5vd25lckRvY3VtZW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwICYmIC9eW1xcc1xceGEwXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIW51bSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRQaG9uZU51bWJlclJlZ2V4LnRlc3QobnVtLnRyaW0oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZW1haWwudHJpbSgpKTtcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBXRUIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIFVUSUxTXHJcblxyXG5leHBvcnQgeyBBcnJheVV0aWxzIGFzIGFycmF5cyB9IGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlsc1wiO1xyXG5leHBvcnQgeyBNYXRoVXRpbHMgYXMgbWF0aCB9IGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvTWF0aFV0aWxzXCI7XHJcbmV4cG9ydCB7IERvbVV0aWxzIGFzIGRvbSB9IGZyb20gXCIuL3V0aWxzL0RvbVV0aWxzXCI7XHJcbmV4cG9ydCB7IE1pc2NVdGlscyBhcyBtaXNjIH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NaXNjVXRpbHNcIjtcclxuZXhwb3J0IHsgT2JqZWN0VXRpbHMgYXMgb2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9PYmplY3RVdGlsc1wiO1xyXG5leHBvcnQgeyBTdHJpbmdVdGlscyBhcyBzdHJpbmcgfSBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzXCI7XHJcbmV4cG9ydCAqIGFzIHRpbWUgZnJvbSBcIi4vdXRpbHMvdGltZS11dGlsc1wiO1xyXG5cclxuZXhwb3J0IHsgU2xvdmFrU3RlbW1lciBhcyBzdGVtbWVyIH0gZnJvbSBcIi4vbWlzYy9TbG92YWtTdGVtbWVyXCI7XHJcblxyXG4vLyBET01cclxuXHJcbmV4cG9ydCB7IENoZWNrZXJzIGFzIGNoZWNrIH0gZnJvbSBcIi4vZG9tL2RlcHJlY2F0ZWQvQ2hlY2tlcnNcIjtcclxuZXhwb3J0IHsgQ2FudmFzTWFuYWdlciBhcyBjYW52YXMgfSBmcm9tIFwiLi9kb20vY2FudmFzLW1hbmFnZXJcIjtcclxuZXhwb3J0IHsgRG9tR2V0IGFzIGdldCB9IGZyb20gXCIuL2RvbS9kb20tZ2V0XCI7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oODAyMik7XG4iXSwic291cmNlUm9vdCI6IiJ9