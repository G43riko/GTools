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
// export * from "./math";
// export * from "./physics";
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
            enumerable: options && typeof options.enumerable === "boolean" ? options.enumerable : true,
            configurable: options && typeof options.configurable === "boolean" ? options.configurable : true,
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
            res[partA] = value;
            // @ts-ignore
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
            case "y":
            case "á":
            case "é":
            case "í":
            case "ý":
                /*case "ô":*/
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
        return;
    }
    var genderLowerCase = gender.trim().toLowerCase().replace("ž", "z").replace("č", "c");
    if (genderLowerCase.match(maleRegexp)) {
        return Gender.MAN;
    }
    if (genderLowerCase.match(femaleRegexp)) {
        return Gender.WOMAN;
    }
}
exports.parseGender = parseGender;
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
        var add = conditionEntries.some(function (conditionEntry) { return e[conditionEntry[0]] === conditionEntry[1]; });
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
        return Arrays.subArray(array, minIndex, maxIndex);
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
            return [2 /*return*/, new Promise(function (success) {
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
                case 2: 
                // eslint-disable-next-line no-await-in-loop
                return [2 /*return*/, _b.sent()];
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
    return values.map(function (value) { return content.replace(placeHolder, value); });
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
    "second": 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9maWxlLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1tYXAudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMva2V5LXZhbHVlLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbnVtYmVyLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb25maWcvZ3Rvb2xzLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2RlcHJlY2F0ZWQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2ZpbmFsLWNsYXNzLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9tYXBwZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3NpbmdsZXRvbi5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvd2F0Y2guZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9jYW52YXMtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9kZXByZWNhdGVkL0NoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZGVwcmVjYXRlZC9jaGVja2Vycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZG9tL2RvbS1nZXQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2VuY29kaW5ncy5lbnVtLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lbnVtcy9maWxlLXR5cGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2h0dHAtc3RhdHVzLWNvZGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2tleXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvdmVjdG9yMmYudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvU2xvdmFrU3RlbW1lci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9hamF4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3J1bnRpbWUtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL2NvbG9yLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvZ2VuZGVyLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0LmZpeHR1cmUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0Lm1hcHBlci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvcGFnaW5hdGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9Eb21VdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvRmlsZVV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9hcnJheS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvY29sb3ItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGVwcmVjYXRlZC9NYXRoVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2RlcHJlY2F0ZWQvTWlzY1V0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL09iamVjdFV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL1N0cmluZ0NoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9odG1sLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9tYXRoLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9taXNjLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9uZXQtY2xpZW50LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9vYmplY3QtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3JhbmRvbS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcmVmbGVjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3RyaW5nLWNoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3RpbWUtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3ZhbGlkYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3ZhbGlkYXRvcnMvbWlzYy12YWxpZGF0b3JzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy93ZWIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliL2lnbm9yZWR8ZnMiLCJ3ZWJwYWNrOi8vRzQzTGliL2lnbm9yZWR8cGF0aCIsIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLGlEQUF1QjtBQUN2QixpREFBc0I7QUFDdEIsaURBQXlCO0FBRXpCLGlEQUE2QjtBQUU3QixpREFBaUQ7QUFDakQsaURBQXVDO0FBRXZDLGlEQUE2QjtBQUM3QixpREFBcUM7QUFDckMsaURBQW1DO0FBQ25DLGlEQUEwQztBQUMxQyxpREFBOEI7QUFFOUIsMkJBQTJC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LE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUksR0FBRyxDQUFDLE1BQWMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUksR0FBRyxDQUFDLE1BQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBSSxHQUFHLENBQUMsTUFBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FB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QyxPQUFPLENBQUM7UUFDakMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDeEIsRUFBRTtRQUNDLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNQLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDakIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEs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QVU7WUFDaEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVO1lBQ2hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVTtZQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVU7WUFDaEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVO1lBQ2hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFB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QyxLQUFLLEVBQUU7UUFDUixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBTkQsb0NBTUM7Ozs7Ozs7Ozs7QUN2RkQsK0RBQStEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELFFBQVE7QUFFUiw2Q0FBcUU7QUFBNUQsK0dBQVUsUUFBVTtBQUM3Qiw0Q0FBaUU7QUFBeEQsMkdBQVMsUUFBUTtBQUMxQiwyQ0FBbUQ7QUFBMUMsd0dBQVEsUUFBTztBQUN4Qiw0Q0FBaUU7QUFBeEQsMkdBQVMsUUFBUTtBQUMxQiw4Q0FBdUU7QUFBOUQsaUhBQVcsUUFBVTtBQUM5Qiw4Q0FBdUU7QUFBOUQsaUhBQVcsUUFBVTtBQUM5Qix1REFBMkM7QUFFM0MsZ0RBQWdFO0FBQXZELHNIQUFhLFFBQVc7QUFFakMsTUFBTTtBQUVOLDJDQUE4RDtBQUFyRCwwR0FBUSxRQUFTO0FBQzFCLGlEQUErRDtBQUF0RCxzSEFBYSxRQUFVO0FBQ2hDLDBDQUE4QztBQUFyQyxxR0FBTSxRQUFPOzs7Ozs7OztBQ2xCdEIsZTs7Ozs7OztBQ0FBLGU7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZzQzLWxpYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRzQzTGliXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkc0M0xpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgKiBmcm9tIFwiLi9ub2RlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dlYlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZGVjb3JhdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2NhbnZhcy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZGVwcmVjYXRlZC9jaGVja2Vyc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZG9tLWdldFwiO1xyXG5cclxuLy8gVE9ETyBub3Qgd29yayBvbiBiYWNrZW5kXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2RvbS9lbGVtZW50LWJ1aWxkZXJcIjtcclxuXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2VudW1zXCI7XHJcblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9lcnJvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZhbGlkYXRvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2NcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vbWF0aFwiO1xyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9waHlzaWNzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5tYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvcGFnaW5hdGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi91dGlsc1wiO1xyXG4iLCIvLyBVVElMU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9TdHJpbmdDaGVja2Vyc1wiO1xyXG5cclxuLy8gTU9ERUxTXHJcblxyXG5leHBvcnQgeyBHZW5kZXJUeXBlLCBHZW5kZXIgfSBmcm9tIFwiLi9tb2RlbHMvZ2VuZGVyLm1vZGVsXCI7XHJcblxyXG4vLyBFTlVNU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMvZW5jb2RpbmdzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMvZmlsZS10eXBlcy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VudW1zL2h0dHAtc3RhdHVzLWNvZGVzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMva2V5cy5lbnVtXCI7XHJcblxyXG4vLyBDT01QT05FTlRTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL2tleS12YWx1ZS1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHMvbnVtYmVyLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9wYWdpbmF0b3JcIjtcclxuXHJcbi8vIE1BVEhTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoL3ZlY3RvcjJmXCI7XHJcblxyXG4vLyBDT05GSUdcclxuXHJcbmV4cG9ydCB7IGluaXRDb25maWcgfSBmcm9tIFwiLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuLy8gSU5URVJGQUNFU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXMva2V5LXZhbHVlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlcy9zaXplLmludGVyYWZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXMvcG9pbnQuaW50ZXJhZmFjZVwiO1xyXG5cclxuLy8gVEVTVFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5tYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvcGFnaW5hdGUubW9kZWxcIjtcclxuIiwiaW1wb3J0IHsgRmlsZVR5cGVzIH0gZnJvbSBcIi4uL2VudW1zL2ZpbGUtdHlwZXMuZW51bVwiO1xyXG5cclxuLyoqXHJcbiAqICBGaWxlTWFuYWdlciBpcyBjbGFzcyB1c2VkIGZvciBvcGVuIGFuZCBzYXZlIGZpbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcml2YXRlIGlucHV0IHVzZWQgZm9yIG9wZW5pbmcgc3lzdGVtIHdpbmRvdyBmb3IgdXBsb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciBkb3dubG9hZCBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbms6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZpbGVzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0ZXh0IGNvbnRlbnQgaW50byBmaWxlIHdpdGggc3BlY2lmaWMgZXh0ZW5zaW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGZpbGUgbmFtZVxyXG4gICAgICogQHBhcmFtIHRleHQgZmlsZSBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBmaWxlIHtAbGluayBGaWxlVHlwZXN9LiBEZWZhdWwgdmFsdWUgaXMge0BsaW5rIEZpbGVUeXBlcy5UWFR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlRmlsZShuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgdHlwZTogRmlsZVR5cGVzID0gRmlsZVR5cGVzLlRYVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3RleHRdLCB7dHlwZX0pKTtcclxuICAgICAgICB0aGlzLmxpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluay5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSBpbWFnZSBpbnRvIGZpbGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBpbWFnZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW1hZ2UgaW1hZ2UgZWxlbWVudCBvciBwYXRoIHRvIGltYWdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlSW1hZ2UobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nIHwgSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGltYWdlIDogaW1hZ2Uuc3JjO1xyXG4gICAgICAgIHRoaXMubGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5rLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2UoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlTmFtZTogc3RyaW5nKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgICAgICAgICAgICAgID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkICAgICAgICAgICAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjICAgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIGZ1bmMoaW1hZ2UsIGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBmaWxlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmdW5jIGxvYWRpbmcgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZXM6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSAoZS50YXJnZXQgYXMgYW55KS5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiBmdW5jKHJlYWRlci5yZXN1bHQsIGZpbGVzKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBiaW5hcnkgZmlsZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQmluYXJ5RmlsZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gZnVuYyhyZWFkZXIucmVzdWx0LCBmaWxlc1swXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdMb2dnZXJJbnN0YW5jZSB7XHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0Pzogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KFwibG9nXCIsIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3YXJuKC4uLm1lc3NhZ2VzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJ3YXJuXCIsIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvciguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KFwiZXJyb3JcIiwgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyIGV4dGVuZHMgR0xvZ2dlckluc3RhbmNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGluZShzdGVwcyA9IDIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlcnJvci5zdGFjay5zcGxpdChcIlxcblwiKVtzdGVwc10udHJpbSgpLm1hdGNoKC9cXCguKlxcKS8pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhdCBcIiArIHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNraXBDb250ZXh0cyA9IFtcInJlbmRlcldvcmxkU3RhdGljXCIsIFwiQ2FudmFzRGlyZWN0aXZlXCIsIFwiV29ybGRSZW5kZXJlclNlcnZpY2VcIiwgXCJ2aWV3cG9ydFwiLCBcIldvcmxkSW5wdXRTZXJ2aWNlXCJdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc2tpcFJlZ2V4cCAgID0gbmV3IFJlZ0V4cChgJHtHTG9nZ2VyLnNraXBDb250ZXh0cy5qb2luKFwifFwiKX1gLCBcImdpXCIpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0Pzogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmludCh0eXBlOiBcImxvZ1wiIHwgXCJ3YXJuXCIgfCBcImVycm9yXCIsIGNvbnRleHQ6IHN0cmluZyB8IHsgY29uc3RydWN0b3I6IHsgbmFtZTogc3RyaW5nIH0gfSA9IFwiXCIsIC4uLmRhdGE6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVhbENvbnRleHQgPSBjb250ZXh0ICYmICh0eXBlb2YgY29udGV4dCA9PT0gXCJzdHJpbmdcIiA/IGNvbnRleHQgOiBjb250ZXh0Py5jb25zdHJ1Y3Rvcj8ubmFtZSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ICAgICAgPSByZWFsQ29udGV4dCAmJiByZWFsQ29udGV4dC5tYXRjaChHTG9nZ2VyLnNraXBSZWdleHApO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmVmaXggPSByZWFsQ29udGV4dCA/IGBbJHtyZWFsQ29udGV4dH1dIGAgOiBcIlwiO1xyXG4gICAgICAgIGNvbnNvbGVbdHlwZV0ocHJlZml4LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZyhtZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSwgY29udGV4dD86IHN0cmluZyB8IHsgY29uc3RydWN0b3I6IHsgbmFtZTogc3RyaW5nIH0gfSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJsb2dcIiwgY29udGV4dCwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdNYXA8VCwgUz4gZXh0ZW5kcyBNYXA8VCwgUz4ge1xyXG4gICAgcHVibGljIGdldChrZXk6IFQsIGRlZmF1bHRWYWx1ZT86IFMpOiBTIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSkgfHwgZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPckNyZWF0ZShrZXk6IFQsIGRlZmF1bHRWYWx1ZTogUyk6IFMgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nLW1hcFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9rZXktdmFsdWUtY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9udW1iZXItY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYWdpbmF0b3JcIjtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBTaW1wbGVXcmFwcGVyIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlQ291bnRlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVzdWx0czogU2ltcGxlV3JhcHBlcltdICAgICAgICA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGFkZChpdGVtOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXRlbSBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3BOKGNvdW50OiBudW1iZXIpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzLnNsaWNlKDAsIGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRoaXMuZGF0YVtrZXldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE51bWJlckNvdW50ZXIge1xyXG4gICAgcHJpdmF0ZSBtaW4gICAgICAgICAgICAgICAgICAgICAgICA9IEluZmluaXR5O1xyXG4gICAgcHJpdmF0ZSBtYXggICAgICAgICAgICAgICAgICAgICAgICA9IC1JbmZpbml0eTtcclxuICAgIHByaXZhdGUgc3VtICAgICAgICAgICAgICAgICAgICAgICAgPSAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBudW1iZXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBhZGQodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubnVtYmVycy5wdXNoKHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbih0aGlzLm1pbiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMubWF4ID0gTWF0aC5tYXgodGhpcy5tYXgsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnN1bSArPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWluKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF2ZXJhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW0gLyB0aGlzLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR1Rvb2xzQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yPFQgPSB1bmtub3duPiB7XHJcbiAgICBwcml2YXRlIGFjdExpc3Q6IFRbXTtcclxuICAgIHByaXZhdGUgYWN0dWFsUGFnZSA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhc3RQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWxsSXRlbXM6IFRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW1zUGVyUGFnZSA9IEdUb29sc0NvbmZpZy5QQUdFX0xJTUlUKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IGFsbEl0ZW1zID8gTWF0aC5mbG9vcihhbGxJdGVtcy5sZW5ndGggLyB0aGlzLml0ZW1zUGVyUGFnZSkgOiAwO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCAgPSB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFjdHVhbFBhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxQYWdlICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFnZXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UGFnZSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZ2VzQXJvdW5kKCk6IG51bWJlcltdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm4gWzEsIDIsIDMsIDQsIDVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlID4gdGhpcy5sYXN0UGFnZSAtIDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMSxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlICsgMSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSAtIDEsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMixcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMyxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMaXN0KCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub05leHQoKTogVFtdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgdGhpcy5sYXN0UGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UrKztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvdFRvKHBhZ2U6IG51bWJlcik6IFRbXSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPj0gMCAmJiBwYWdlIDw9IHRoaXMubGFzdFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gcGFnZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9QcmV2KCk6IFRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlLS07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvRmlyc3QoKTogVFtdIHtcclxuICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTGFzdCgpOiBUW10ge1xyXG4gICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IHRoaXMubGFzdFBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVDYWxjTGlzdCgpOiBUW10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ICA9IHRoaXMuYWN0dWFsUGFnZSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCA9IHRoaXMuYWxsSXRlbXMgPyB0aGlzLmFsbEl0ZW1zLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlKSA6IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RMaXN0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdUb29sc0NvbmZpZ0ludGVyZmFjZSB9IGZyb20gXCIuL2d0b29scy1jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5sZXQgY29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2U7XHJcblxyXG5jb25zdCBjaGVja0NvbmZpZyA9ICgpOiBHVG9vbHNDb25maWdJbnRlcmZhY2UgPT4ge1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBVUkxfQVBJICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBMQU5HVUFHRSAgOiBcIlwiLFxyXG4gICAgICAgICAgICBWRVJTSU9OICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBQQUdFX0xJTUlUOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjbGFzcyBDbGFzc093bkNvbmZpZyBleHRlbmRzIENsYXNzR1Rvb2xzQ29uZmlnIGltcGxlbWVudHMgT3duQ29uZmlnSW50ZXJmYWNlIHtcclxuICogICAgIHB1YmxpYyBuYW1lID0gXCJcIjtcclxuICogfVxyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgT3duQ29uZmlnID0gbmV3IENsYXNzT3duQ29uZmlnKCk7XHJcbiAqXHJcbiAqIEBzZWUgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NHVG9vbHNDb25maWcgaW1wbGVtZW50cyBHVG9vbHNDb25maWdJbnRlcmZhY2Uge1xyXG4gICAgcHVibGljIGdldCBVUkxfQVBJKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuVVJMX0FQSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFBBR0VfTElNSVQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5QQUdFX0xJTUlUO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgTEFOR1VBR0UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5MQU5HVUFHRTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFZFUlNJT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5WRVJTSU9OO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWcoYXBwQ29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbmZpZyA9IGFwcENvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdUb29sc0NvbmZpZyA9IG5ldyBDbGFzc0dUb29sc0NvbmZpZygpO1xyXG4iLCJleHBvcnQgY29uc3QgQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMgPSB0cnVlO1xyXG5cclxuIiwiaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiLi4vdHlwZXMvcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXByZWNhdGVkKHZhbHVlPzogc3RyaW5nKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKTogYW55ID0+IHtcclxuICAgICAgICBjb25zdCBvbGRNZXRob2QgID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gKC4uLmFyZ3M6IGFueVtdKTogYW55ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTWV0aG9kIFwiICsgdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgKyBcIi5cIiArIHByb3BlcnR5S2V5ICsgXCIgaXMgZGVwcmVjYXRlZC4gXCIgKyAodmFsdWUgfHwgXCJcIikpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZE1ldGhvZC5hcHBseSh0YXJnZXQsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBGaW5hbENsYXNzPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+Pih0YXJnZXQ6IFQpOiBUIHtcclxuICAgIHJldHVybiBjbGFzcyBGaW5hbCBleHRlbmRzIHRhcmdldCB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcudGFyZ2V0ICE9PSBGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluaGVyaXQgZnJvbSBmaW5hbCBjbGFzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2RlcHJlY2F0ZWQuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbmFsLWNsYXNzLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBwZXIuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZXRvbi5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2F0Y2guZGVjb3JhdG9yXCI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBNYXBwZXIocGFyYW1zOiB7IG9uR2V0PzogKG9sZFZhbHVlOiBhbnkpID0+IGFueSwgb25TZXQ/OiAob2xkVmFsdWU6IGFueSkgPT4gYW55IH0gPSB7fSwgcHJlZml4ID0gXCJfXCIpOiBhbnkge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIGlmICghZGVsZXRlIHRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld05hbWUgICAgICAgICAgICAgICAgICAgICAgICA9IHByZWZpeCArIGtleTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uR2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gKCkgPT4gcGFyYW1zLm9uR2V0ICYmIHBhcmFtcy5vbkdldCh0YXJnZXRbbmV3TmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSAoKSA9PiB0YXJnZXRbbmV3TmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uU2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKG5ld1ZhbDogYW55KSA9PiB0YXJnZXRbbmV3TmFtZV0gPSBwYXJhbXMub25TZXQgJiYgcGFyYW1zLm9uU2V0KG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9ICh2YWx1ZSkgPT4gdGFyZ2V0W25ld05hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcclxuICAgIH07XHJcbn1cclxuIiwiY29uc3QgaW5zdGFuY2VzOiB7IFtjbGFzc05hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2luZ2xldG9uPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+Pihjb25zdHJ1Y3RvcjogVCk6IGFueSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xyXG5cclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZXNbY2xhc3NOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2Ugb2YgXCIgKyBjbGFzc05hbWUgKyBcIiBpcyBhbHJlYWR5IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5zdGFuY2VzW2NsYXNzTmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiLi4vdHlwZXMvcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2F0Y2hPcHRpb25zIHtcclxuICAgIGVudW1lcmFibGU/OiBib29sZWFuO1xyXG4gICAgY29uZmlndXJhYmxlPzogYm9vbGVhbjtcclxuICAgIHByZWZpeD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFdhdGNoKG9uU2V0PzogKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpID0+IGFueSwgb3B0aW9ucz86IFdhdGNoT3B0aW9ucyk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIGNvbnN0IHByZWZpeCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wcmVmaXggfHwgXCJfXCI7XHJcblxyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBzZXR0ZXIgPSAobmV3VmFsOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uU2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJlZml4ICsga2V5XSA9IG9uU2V0KG5ld1ZhbCwgdGFyZ2V0W3ByZWZpeCArIGtleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldFtwcmVmaXggKyBrZXldID0gbmV3VmFsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghZGVsZXRlIHRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XHJcbiAgICAgICAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGFyZ2V0W3ByZWZpeCArIGtleV0sXHJcbiAgICAgICAgICAgIHNldCAgICAgICAgIDogc2V0dGVyLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlICA6IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuZW51bWVyYWJsZSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLmVudW1lcmFibGUgOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuY29uZmlndXJhYmxlID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMuY29uZmlndXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTm90QnJvd3NlckV4Y2VwdGlvbiB9IGZyb20gXCIuLi9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhcmcxOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQsIGFyZzI6IG51bWJlciwgYXJnMzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZzEgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FudmFzID0gYXJnMTtcclxuICAgICAgICAgICAgaWYgKGFyZzIgJiYgYXJnMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzIsIGFyZzMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmcxIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FudmFzID0gQ2FudmFzTWFuYWdlci5pbWFnZVRvQ2FudmFzKGFyZzEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJnMSAmJiBhcmcyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbnZhc1NpemUoYXJnMSwgYXJnMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NhbENvbnRleHQgPSB0aGlzLmxvY2FsQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxDYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsQ29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQ2FudmFzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDYW52YXNTaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk6IHZvaWQge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2hhZG93KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmx1cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yICAgPSBjb2xvcjtcclxuICAgICAgICBjdHguc2hhZG93Qmx1ciAgICA9IGJsdXI7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSB4O1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGltYWdlVG9DYW52YXMoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYW52YXMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICBjb25zdCBjdHggICAgID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldExpbmVEYXNoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCAuLi5hcmdzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY3R4LnNldExpbmVEYXNoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY3R4LnNldExpbmVEYXNoKGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGNUZXh0V2lkdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZhbHVlOiBzdHJpbmcsIGZvbnQ/OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChmb250KSB7XHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gZm9udDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQodmFsdWUpLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FudmFzVG9JbWFnZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmb3JtYXQgPSBcImltYWdlL3BuZ1wiKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjICAgID0gY2FudmFzLnRvRGF0YVVSTChmb3JtYXQpO1xyXG4gICAgICAgIGltYWdlLndpZHRoICA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICBpbWFnZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEltYWdlKCk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBDYW52YXNNYW5hZ2VyLmNhbnZhc1RvSW1hZ2UodGhpcy5sb2NhbENhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNoYWRvdyh4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmx1cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIENhbnZhc01hbmFnZXIuc2V0U2hhZG93KHRoaXMubG9jYWxDb250ZXh0LCB4LCB5LCBjb2xvciwgYmx1cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KGZvcm1hdCA9IFwiaW1hZ2UvcG5nXCIpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmxvY2FsQ2FudmFzLnRvRGF0YVVSTChmb3JtYXQpLCBcIl9ibGFua1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJDYW52YXMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIENhbnZhc01hbmFnZXIuY2xlYXJDYW52YXModGhpcy5sb2NhbENvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FudmFzU2l6ZSh3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpOiB2b2lkIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldENhbnZhc1NpemUodGhpcy5sb2NhbENhbnZhcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZFRvKGVsZW1lbnQ6IEVsZW1lbnQpOiBFbGVtZW50IHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubG9jYWxDYW52YXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyZiB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjJmXCI7XHJcbmltcG9ydCB7IENhbnZhc01hbmFnZXIgfSBmcm9tIFwiLi9jYW52YXMtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDaGVja2VycyB9IGZyb20gXCIuL2RlcHJlY2F0ZWQvQ2hlY2tlcnNcIjtcclxuXHJcbmRlY2xhcmUgY29uc3QgJDogYW55O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNTaGFkb3dDb25maWcge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxuICAgIGJsdXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNDb25maWcge1xyXG4gICAgc2hhZG93PzogQ2FudmFzU2hhZG93Q29uZmlnO1xyXG4gICAgcG9zaXRpb24/OiBudW1iZXIgfCBWZWN0b3IyZjtcclxuICAgIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgICBzaXplPzogbnVtYmVyIHwgVmVjdG9yMmY7XHJcbiAgICBiZ0ltYWdlPzoge1xyXG4gICAgICAgIGltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHc6IG51bWJlcjtcclxuICAgICAgICBoOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgZmlsbDogYm9vbGVhbjtcclxuICAgIGZpbGxDb2xvcjogc3RyaW5nO1xyXG4gICAgZHJhdzogYm9vbGVhbjtcclxuICAgIGJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICByYWRpdXM6IG51bWJlciB8IHtcclxuICAgICAgICB0bDogbnVtYmVyO1xyXG4gICAgICAgIHRyOiBudW1iZXI7XHJcbiAgICAgICAgYnI6IG51bWJlcjtcclxuICAgICAgICBibDogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGxpbmVDYXA6IFwiYnV0dFwiIHwgXCJyb3VuZFwiIHwgXCJzcXVhcmVcIjtcclxuICAgIGpvaW5UeXBlOiBcImJldmVsXCIgfCBcInJvdW5kXCIgfCBcIm1pdGVyXCI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBzdGFydEFuZ2xlOiBudW1iZXI7XHJcbiAgICBlbmRBbmdsZTogbnVtYmVyO1xyXG4gICAgb2Zmc2V0OiBhbnk7XHJcbiAgICBsaW5lRGFzaDogbnVtYmVyW107XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNoYWRvdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbmZpZz86IENhbnZhc1NoYWRvd0NvbmZpZyk6IHZvaWQge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0U2hhZG93KGNvbnRleHQsIGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLmNvbG9yLCBjb25maWcuYmx1cik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIENhbnZhc01hbmFnZXIuc2V0U2hhZG93KGNvbnRleHQsIDAsIDAsIFwiYmxhY2tcIiwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3MocmVzOiBDYW52YXNDb25maWcpOiB2b2lkIHtcclxuICAgIGlmIChyZXMuc2hhZG93KSB7XHJcbiAgICAgICAgc2V0U2hhZG93KHJlcy5jdHgsIHJlcy5zaGFkb3cpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcy5iZ0ltYWdlKSB7XHJcbiAgICAgICAgcmVzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgcmVzLmN0eC5jbGlwKCk7XHJcbiAgICAgICAgaWYgKHJlcy5iZ0ltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXMuY3R4LmRyYXdJbWFnZShyZXMuYmdJbWFnZSwgcmVzLngsIHJlcy55LCByZXMud2lkdGgsIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHguZHJhd0ltYWdlKHJlcy5iZ0ltYWdlLmltZyxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLngsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS55LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UudyxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLmgsXHJcbiAgICAgICAgICAgICAgICByZXMueCxcclxuICAgICAgICAgICAgICAgIHJlcy55LFxyXG4gICAgICAgICAgICAgICAgcmVzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfSBlbHNlIGlmIChyZXMuZmlsbCkge1xyXG4gICAgICAgIHJlcy5jdHguZmlsbFN0eWxlID0gcmVzLmZpbGxDb2xvcjtcclxuICAgICAgICByZXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLnNoYWRvdykge1xyXG4gICAgICAgIHNldFNoYWRvdyhyZXMuY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuY3R4LmxpbmVDYXAgID0gcmVzLmxpbmVDYXA7XHJcbiAgICByZXMuY3R4LmxpbmVKb2luID0gcmVzLmpvaW5UeXBlO1xyXG4gICAgaWYgKHR5cGVvZiByZXMuY3R4LnNldExpbmVEYXNoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXMuY3R4LnNldExpbmVEYXNoKHJlcy5saW5lRGFzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXMuZHJhdykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJlcy5jdHgubGluZVdpZHRoICAgPSByZXMuYm9yZGVyV2lkdGg7XHJcbiAgICByZXMuY3R4LnN0cm9rZVN0eWxlID0gcmVzLmJvcmRlckNvbG9yO1xyXG4gICAgcmVzLmN0eC5zdHJva2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERlZihvYmo6IGFueSk6IENhbnZhc0NvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgY2VudGVyICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGN0eCAgICAgICAgOiBvYmouY3R4LFxyXG4gICAgICAgIGRyYXcgICAgICAgOiB0eXBlb2Ygb2JqLmJvcmRlckNvbG9yICE9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBvYmouYm9yZGVyV2lkdGggIT09IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgZW5kQW5nbGUgICA6IE1hdGguUEkgKiAyLFxyXG4gICAgICAgIGZpbGwgICAgICAgOiB0eXBlb2Ygb2JqLmZpbGxDb2xvciAhPT0gXCJ1bmRlZmluZWRcIixcclxuICAgICAgICBmaWxsQ29sb3IgIDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodCAgICAgOiAwLFxyXG4gICAgICAgIGpvaW5UeXBlICAgOiBcImJldmVsXCIsXHJcbiAgICAgICAgbGluZUNhcCAgICA6IFwicm91bmRcIixcclxuICAgICAgICBsaW5lRGFzaCAgIDogW10sXHJcbiAgICAgICAgb2Zmc2V0ICAgICA6IG51bGwsXHJcbiAgICAgICAgcmFkaXVzICAgICA6IHtcclxuICAgICAgICAgICAgdGw6IDAsXHJcbiAgICAgICAgICAgIHRyOiAwLFxyXG4gICAgICAgICAgICBicjogMCxcclxuICAgICAgICAgICAgYmw6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydEFuZ2xlIDogMCxcclxuICAgICAgICB3aWR0aCAgICAgIDogMCxcclxuICAgICAgICB4ICAgICAgICAgIDogMCxcclxuICAgICAgICB5ICAgICAgICAgIDogMCxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbWFrZVBvc0FuZFNpemUoZGVmOiBDYW52YXNDb25maWcsIG9iajogYW55KTogQ2FudmFzQ29uZmlnIHtcclxuICAgIGNvbnN0IHJlczogQ2FudmFzQ29uZmlnID0gJC5leHRlbmQoZGVmLCBvYmopIGFzIENhbnZhc0NvbmZpZztcclxuICAgIGNvbnN0IGNoZWNrQXR0cmlidXRlICAgID0gKGF0dHJOYW1lOiBrZXlvZiBDYW52YXNDb25maWcsIHBhcnRBOiBrZXlvZiBDYW52YXNDb25maWcsIHBhcnRCOiBrZXlvZiBDYW52YXNDb25maWcpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlc1thdHRyTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc1thdHRyTmFtZV07XHJcbiAgICAgICAgaWYgKENoZWNrZXJzLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlc1twYXJ0QV0gPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWVbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEFdID0gdmFsdWUgYXMgVmVjdG9yMmYueDtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEJdID0gdmFsdWUgYXMgVmVjdG9yMmYueTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXR0cmlidXRlKFwic2l6ZVwiLCBcIndpZHRoXCIsIFwic2l6ZVwiKTtcclxuICAgIGNoZWNrQXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJ4XCIsIFwieVwiKTtcclxuXHJcbiAgICBpZiAocmVzLmNlbnRlcikge1xyXG4gICAgICAgIHJlcy54IC09IHJlcy53aWR0aCA+PiAxO1xyXG4gICAgICAgIHJlcy55IC09IHJlcy5oZWlnaHQgPj4gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Bvc0FuZFNpemUob2JqOiBDYW52YXNDb25maWcsIG5hbWU6IHN0cmluZyk6IENhbnZhc0NvbmZpZyB7XHJcblxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqLnggPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai55ID09PSBcInVuZGVmaW5lZFwiKSAmJiB0eXBlb2Ygb2JqLnBvc2l0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1BPU0lUSU9OOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodHlwZW9mIG9iai53aWR0aCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLmhlaWdodCA9PT0gXCJ1bmRlZmluZWRcIikgJiYgdHlwZW9mIG9iai5zaXplID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1TR19UUllfRFJBV19XSVRIT1VUX1NJWkU6IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai53aWR0aCA8PSAwIHx8IG9iai5oZWlnaHQgPD0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSF9ORUdfUE9TSVRJT046IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluaXREZWYob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1V0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZG9BcmMob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZXMgPSByZW1ha2VQb3NBbmRTaXplKGNoZWNrUG9zQW5kU2l6ZShvYmosIFwiQXJjXCIpLCBvYmopO1xyXG5cclxuICAgICAgICByZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzLmN0eC5lbGxpcHNlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5lbGxpcHNlKHJlcy54ICsgKHJlcy53aWR0aCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy55ICsgKHJlcy5oZWlnaHQgPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGggPj4gMSxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQgPj4gMSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgICAgIHJlcy5lbmRBbmdsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5yZWN0KHJlcy54ICsgKHJlcy53aWR0aCA+PiAxKSxcclxuICAgICAgICAgICAgICAgIHJlcy55ICsgKHJlcy5oZWlnaHQgPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMud2lkdGggPj4gMSxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQgPj4gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9jZXNzKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkb1JlY3Qob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkZWYgPSBjaGVja1Bvc0FuZFNpemUob2JqLCBcIlJlY3RcIik7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLnJhZGl1cyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoQ2hlY2tlcnMuaXNOdW1iZXIob2JqLnJhZGl1cykpIHtcclxuICAgICAgICAgICAgICAgIG9iai5yYWRpdXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmw6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYnI6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGw6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHI6IG9iai5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGVmLnJhZGl1cyBhcyBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmLnJhZGl1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5yYWRpdXNba2V5XSA9IG9iai5yYWRpdXNba2V5XSB8fCAoZGVmLnJhZGl1cyBhcyBhbnkpW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSByZW1ha2VQb3NBbmRTaXplKGRlZiwgb2JqKTtcclxuXHJcbiAgICAgICAgcmVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICByZXMuY3R4Lm1vdmVUbyhyZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkudGwsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIHJlcy53aWR0aCAtIChyZXMucmFkaXVzIGFzIGFueSkudHIsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55LCByZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRyKTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyByZXMuaGVpZ2h0IC0gKHJlcy5yYWRpdXMgYXMgYW55KS5icik7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSArIHJlcy5oZWlnaHQsIHJlcy54ICsgcmVzLndpZHRoIC0gKHJlcy5yYWRpdXMgYXMgYW55KS5iciwgcmVzLnkgKyByZXMuaGVpZ2h0KTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkuYmwsIHJlcy55ICsgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54LCByZXMueSArIHJlcy5oZWlnaHQsIHJlcy54LCByZXMueSArIHJlcy5oZWlnaHQgLSAocmVzLnJhZGl1cyBhcyBhbnkpLmJsKTtcclxuICAgICAgICByZXMuY3R4LmxpbmVUbyhyZXMueCwgcmVzLnkgKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsKTtcclxuICAgICAgICByZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocmVzLngsIHJlcy55LCByZXMueCArIChyZXMucmFkaXVzIGFzIGFueSkudGwsIHJlcy55KTtcclxuICAgICAgICByZXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBwcm9jZXNzKHJlcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgTWlzY1ZhbGlkYXRvcnMgZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWlzYy12YWxpZGF0b3JzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9yc30gaW5zdGVhZFxyXG4gKiBUT0RPOiBtb3ZlIHRoaXMgdG8gdmFsaWRhdG9yc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoZWNrZXJzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGdW5jdGlvbiA9IE1pc2NWYWxpZGF0b3JzLmlzRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1N0cmluZyA9IE1pc2NWYWxpZGF0b3JzLmlzU3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNPYmplY3QgPSBNaXNjVmFsaWRhdG9ycy5pc09iamVjdDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTnVtYmVyID0gTWlzY1ZhbGlkYXRvcnMuaXNOdW1iZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0Jvb2xlYW4gPSBNaXNjVmFsaWRhdG9ycy5pc0Jvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0FycmF5ID0gTWlzY1ZhbGlkYXRvcnMuaXNBcnJheTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRW1wdHkgPSBNaXNjVmFsaWRhdG9ycy5pc0VtcHR5O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbnQgPSBNaXNjVmFsaWRhdG9ycy5pc0ludDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRmxvYXQgPSBNaXNjVmFsaWRhdG9ycy5pc0Zsb2F0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNVbmRlZmluZWQgPSBNaXNjVmFsaWRhdG9ycy5pc1VuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRWxlbWVudCA9IE1pc2NWYWxpZGF0b3JzLmlzRWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBNaXNjVmFsaWRhdG9ycyBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2NWYWxpZGF0b3JzfSBpbnN0ZWFkXHJcbiAqIFRPRE86IG1vdmUgdGhpcyB0byB2YWxpZGF0b3JzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2hlY2tlcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0Z1bmN0aW9uID0gTWlzY1ZhbGlkYXRvcnMuaXNGdW5jdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzU3RyaW5nID0gTWlzY1ZhbGlkYXRvcnMuaXNTdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc09iamVjdCA9IE1pc2NWYWxpZGF0b3JzLmlzT2JqZWN0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNOdW1iZXIgPSBNaXNjVmFsaWRhdG9ycy5pc051bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQm9vbGVhbiA9IE1pc2NWYWxpZGF0b3JzLmlzQm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXJyYXkgPSBNaXNjVmFsaWRhdG9ycy5pc0FycmF5O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNFbXB0eSA9IE1pc2NWYWxpZGF0b3JzLmlzRW1wdHk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0ludCA9IE1pc2NWYWxpZGF0b3JzLmlzSW50O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGbG9hdCA9IE1pc2NWYWxpZGF0b3JzLmlzRmxvYXQ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1VuZGVmaW5lZCA9IE1pc2NWYWxpZGF0b3JzLmlzVW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNFbGVtZW50ID0gTWlzY1ZhbGlkYXRvcnMuaXNFbGVtZW50O1xyXG59XHJcbiIsIi8vIFRPRE86IG5lZWQgdG8gYmUgY2hlY2tlZCBpZiBhcHAgaXMgcnVubmluZyBpbiBicm93c2VyXHJcblxyXG5sZXQgbG9jYWxDb250ZXh0OiBEb2N1bWVudCB8IG51bGwgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tR2V0IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IGRvY3VtZW50IGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDb250ZXh0KGNvbnRleHQ6IERvY3VtZW50KTogdm9pZCB7XHJcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lIG5hbWUgb2YgY2xhc3NcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIGNvbGxlY3Rpb24gb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGluayBuYW1lIG9mIGxpbmtcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlMaW5rKGxpbms6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBdPiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgYVthdHRyPVwiJHtsaW5rfVwiXWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBzZWFyY2hlZCBJRFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgZm91bmQgZWxlbWVudCBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlJZChpZDogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGVsZW1lbnRzIG5hbWVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlOYW1lKG5hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhZ05hbWUgZWxlbWVudHMgdGFnTmFtZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgc2VhcmNoZWQgY29udGV4dFxyXG4gICAgICogQHJldHVybnMgbm9kZUxpc3Qgb2YgZm91bmQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBieVRhZyh0YWdOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkgYXMgYW55O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEVuY29kaW5ncyB7XHJcbiAgICAvKlxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVVEY4ICAgID0gXCJ1dGY4XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVURjE2ICAgPSBcInV0ZjE2XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVOSUNPREUgPSBcInVuaWNvZGVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVNDSUkgICA9IFwiYXNjaWlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUNTMiAgICA9IFwidWNzMlwiO1xyXG4gICAgKi9cclxuICAgIFVURjggICAgPSBcInV0ZjhcIixcclxuICAgIFVURjE2ICAgPSBcInV0ZjE2XCIsXHJcbiAgICBVTklDT0RFID0gXCJ1bmljb2RlXCIsXHJcbiAgICBBU0NJSSAgID0gXCJhc2NpaVwiLFxyXG4gICAgVUNTMiAgICA9IFwidWNzMlwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEZpbGVUeXBlcyB7XHJcbiAgICBDU1MgID0gXCJ0ZXh0L2Nzc1wiLFxyXG4gICAgSFRNTCA9IFwidGV4dC9odG1sXCIsXHJcbiAgICBKUyAgID0gXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIsXHJcbiAgICBNUDMgID0gXCJhdWRpby9tcGVnXCIsXHJcbiAgICBNUDQgID0gXCJ2aWRlby9tcDRcIixcclxuICAgIE9HRyAgPSBcImFwcGxpY2F0aW9uL29nZ1wiLFxyXG4gICAgT0dWICA9IFwidmlkZW8vb2dnXCIsXHJcbiAgICBPR0EgID0gXCJhdWRpby9vZ2dcIixcclxuICAgIFRYVCAgPSBcInRleHQvcGxhaW5cIixcclxuICAgIFdBViAgPSBcImF1ZGlvL3gtd2F2XCIsXHJcbiAgICBXRUJNID0gXCJ2aWRlby93ZWJtXCIsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gSHR0cFN0YXR1c0NvZGVzIHtcclxuICAgIENPTlRJTlVFICAgICAgICAgICAgICAgICAgICAgICAgPSAxMDAsXHJcbiAgICBTV0lUQ0hJTkdfUFJPVE9DT0xTICAgICAgICAgICAgID0gMTAxLFxyXG4gICAgT0sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMCxcclxuICAgIENSRUFURUQgICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDEsXHJcbiAgICBBQ0NFUFRFRCAgICAgICAgICAgICAgICAgICAgICAgID0gMjAyLFxyXG4gICAgTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04gICA9IDIwMyxcclxuICAgIE5PX0NPTlRFTlQgICAgICAgICAgICAgICAgICAgICAgPSAyMDQsXHJcbiAgICBSRVNFVF9DT05URU5UICAgICAgICAgICAgICAgICAgID0gMjA1LFxyXG4gICAgUEFSVElBTF9DT05URU5UICAgICAgICAgICAgICAgICA9IDIwNixcclxuICAgIE1VTFRJUExFX0NIT0lDRVMgICAgICAgICAgICAgICAgPSAzMDAsXHJcbiAgICBNT1ZFRF9QRVJNQU5FTlRMWSAgICAgICAgICAgICAgID0gMzAxLFxyXG4gICAgRk9VTkQgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDMwMixcclxuICAgIFNFRV9PVEhFUiAgICAgICAgICAgICAgICAgICAgICAgPSAzMDMsXHJcbiAgICBOT1RfTU9ESUZJRUQgICAgICAgICAgICAgICAgICAgID0gMzA0LFxyXG4gICAgVVNFX1BST1hZICAgICAgICAgICAgICAgICAgICAgICA9IDMwNSxcclxuICAgIFRFTVBPUkFSWV9SRURJUkVDVCAgICAgICAgICAgICAgPSAzMDcsXHJcbiAgICBCQURfUkVRVUVTVCAgICAgICAgICAgICAgICAgICAgID0gNDAwLFxyXG4gICAgVU5BVVRIT1JJWkVEICAgICAgICAgICAgICAgICAgICA9IDQwMSxcclxuICAgIFBBWU1FTlRfUkVRVUlSRUQgICAgICAgICAgICAgICAgPSA0MDIsXHJcbiAgICBGT1JCSURERU4gICAgICAgICAgICAgICAgICAgICAgID0gNDAzLFxyXG4gICAgTk9UX0ZPVU5EICAgICAgICAgICAgICAgICAgICAgICA9IDQwNCxcclxuICAgIE1FVEhPRF9OT1RfQUxMT1dFRCAgICAgICAgICAgICAgPSA0MDUsXHJcbiAgICBOT1RfQUNDRVBUQUJMRSAgICAgICAgICAgICAgICAgID0gNDA2LFxyXG4gICAgUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgICA9IDQwNyxcclxuICAgIFJFUVVFU1RfVElNRU9VVCAgICAgICAgICAgICAgICAgPSA0MDgsXHJcbiAgICBDT05GTElDVCAgICAgICAgICAgICAgICAgICAgICAgID0gNDA5LFxyXG4gICAgR09ORSAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDQxMCxcclxuICAgIExFTkdUSF9SRVFVSVJFRCAgICAgICAgICAgICAgICAgPSA0MTEsXHJcbiAgICBQUkVDT05ESVRJT05fRkFJTEVEICAgICAgICAgICAgID0gNDEyLFxyXG4gICAgUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFICAgICAgICA9IDQxMyxcclxuICAgIFJFUVVFU1RfVVJJX1RPT19MT05HICAgICAgICAgICAgPSA0MTQsXHJcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFICAgICAgICAgID0gNDE1LFxyXG4gICAgUkVRVUVTVEVEX1JBTkdFX05PVF9TQVRJU0ZJQUJMRSA9IDQxNixcclxuICAgIEVYUEVDVEFUSU9OX0ZBSUxFRCAgICAgICAgICAgICAgPSA0MTcsXHJcbiAgICBVTlBST0NFU1NBQkxFX0VOVElUWSAgICAgICAgICAgID0gNDIyLFxyXG4gICAgVE9PX01BTllfUkVRVUVTVFMgICAgICAgICAgICAgICA9IDQyOSxcclxuICAgIElOVEVSTkFMX1NFUlZFUl9FUlJPUiAgICAgICAgICAgPSA1MDAsXHJcbiAgICBOT1RfSU1QTEVNRU5URUQgICAgICAgICAgICAgICAgID0gNTAxLFxyXG4gICAgQkFEX0dBVEVXQVkgICAgICAgICAgICAgICAgICAgICA9IDUwMixcclxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEUgICAgICAgICAgICAgPSA1MDMsXHJcbiAgICBHQVRFV0FZX1RJTUVPVVQgICAgICAgICAgICAgICAgID0gNTA0LFxyXG4gICAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQgICAgICA9IDUwNSxcclxufVxyXG4iLCJleHBvcnQgZW51bSBLZXlzIHtcclxuICAgIEFSUk9XX1VQICAgID0gXCJBcnJvd1VwXCIsXHJcbiAgICBBUlJPV19ET1dOICA9IFwiQXJyb3dEb3duXCIsXHJcbiAgICBBUlJPV19MRUZUICA9IFwiQXJyb3dMZWZ0XCIsXHJcbiAgICBBUlJPV19SSUdIVCA9IFwiQXJyb3dSaWdodFwiLFxyXG4gICAgREVMRVRFICAgICAgPSBcIkRlbGV0ZVwiLFxyXG4gICAgQ09OVFJPTCAgICAgPSBcIkNvbnRyb2xMZWZ0XCIsXHJcbiAgICBTSElGVCAgICAgICA9IFwiU2hpZnRMZWZ0XCIsXHJcbiAgICBQQUdFX1VQICAgICA9IFwiUGFnZVVwXCIsXHJcbiAgICBQQUdFX0RPV04gICA9IFwiUGFnZURvd25cIixcclxuICAgIEVTQ0FQRSAgICAgID0gXCJFc2NhcGVcIixcclxuICAgIFcgICAgICAgICAgID0gXCJLZXlXXCIsXHJcbiAgICBGICAgICAgICAgICA9IFwiS2V5RlwiLFxyXG4gICAgQSAgICAgICAgICAgPSBcIktleUFcIixcclxuICAgIFAgICAgICAgICAgID0gXCJLZXlQXCIsXHJcbiAgICBTICAgICAgICAgICA9IFwiS2V5U1wiLFxyXG4gICAgRCAgICAgICAgICAgPSBcIktleURcIixcclxuICAgIFIgICAgICAgICAgID0gXCJLZXlSXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlzT2xkIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRU5URVIgICAgICAgPSAxMztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFCICAgICAgICAgPSA5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXICAgICAgICAgICA9IDg3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBICAgICAgICAgICA9IDY1O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTICAgICAgICAgICA9IDgzO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEICAgICAgICAgICA9IDY4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBRICAgICAgICAgICA9IDgxO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFICAgICAgICAgICA9IDY5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGICAgICAgICAgICA9IDcwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMQ09OVFJPTCAgICA9IDE3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFU0NBUEUgICAgICA9IDI3O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMQUxUICAgICAgICA9IDE4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMU0hJRlQgICAgICA9IDE2O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTUEFDRSAgICAgICA9IDMyO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19VUCAgICA9IDM4O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19ET1dOICA9IDQwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19SSUdIVCA9IDM5O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPV19MRUZUICA9IDM3O1xyXG59XHJcbiIsImZ1bmN0aW9uIGdldFRleHQodGV4dD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dCA/IGA6ICR7dGV4dH1gIDogXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdEJyb3dzZXJFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGBBcHAgaXMgbm90IHJ1bm5pbmcgaW4gYnJvd3NlciR7Z2V0VGV4dCh0ZXh0KX0hYCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBOb3RCcm93c2VyRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vR1V0aWxzXCI7XHJcblxyXG4iLCJjb25zdCBwcm9jZXNzID0gKFxyXG4gICAgb3A6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCxcclxuICAgIGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLFxyXG4gICAgYXJnMj86IG51bWJlcixcclxuKTogdm9pZCA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBvcChhcmcxIGFzIG51bWJlciwgYXJnMik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgb3AoYXJnMSwgYXJnMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wKGFyZzEueCwgYXJnMS55KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBpcyB1c2VkIGZvciBob2xkaW5nIDIgbnVtZXJpYyB2YWx1ZXMgYW5kIG1hbmlwdWxhdGlvbiB3aXRoIHRoZW1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyZiB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBYIHZhbHVlIG9mIHZlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgWSB2YWx1ZSBvZiB2ZWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHggPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCB2ZWN0b3JzIHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgY3JlYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBWZWN0b3IyZiB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGFkZCB2YWx1ZXMgaW50byBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBWZWN0b3IyZiB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0geDtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gZGl2aWRlIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpdihhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IFZlY3RvcjJmIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBtdWx0aXBseSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtdWwoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBWZWN0b3IyZiB7XHJcbiAgICAgICAgcHJvY2VzcygoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnggKj0geDtcclxuICAgICAgICAgICAgdGhpcy55ICo9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gc3VidHJhY3QgdmFsdWVzIGZyb20gY3VycmVudCB2YWx1ZXMgYW5kIHJldHVybiBvYmplY3QgaXRzZWxmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZzEgcGFyYW1ldGVyIGNhbiBieSB7QGxpbmsgVmVjdG9yMmZ9IG9yIG51bWJlciByZXByZXNlbnRpbmcge0BsaW5rIHh9IGlmIGFyZzIgaXMgcGFzc2VkIG90aGVyd2lzZSB7QGxpbmsgeH0gYW5kIHtAbGluayB5fVxyXG4gICAgICogQHBhcmFtIGFyZzIgaXMge0BsaW5rIHl9IHZhbHVlIGZvciB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHVwZGF0ZWQge0BsaW5rIFZlY3RvcjJmfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3ViKGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogVmVjdG9yMmYge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiByZW1vdmVQcmVkcG9uYShjaGFyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGNoYXIubGVuZ3RoID4gNiAmJiBjaGFyLnN0YXJ0c1dpdGgoXCJuYWpcIikpIHtcclxuICAgICAgICByZXR1cm4gY2hhci5zdWJzdHIoMywgY2hhci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGFyO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuZnVuY3Rpb24gcmVtb3ZlQ2FzZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBrZXkubGVuZ3RoO1xyXG4gICAgaWYgKGxlbiA+IDkgJiYga2V5LmVuZHNXaXRoKFwiZWrFoWllaG9cIilcclxuICAgICAgICB8fCBrZXkuZW5kc1dpdGgoXCJlasWhaWVtdVwiKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA4ICYmIChrZXkuZW5kc1dpdGgoXCJlasWhw61jaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY29jaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrW1pXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jYW1pXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDYpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA3ICYmIChrZXkuZW5kc1dpdGgoXCJlasWhaWFcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdGFtaVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FjaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuaWVjXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jb21cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhb21cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWVqXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoW91XCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWl1XCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWllXCIpXHJcbiAgICApKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDYgJiZcclxuICAgICAgICAoa2V5LmVuZHNXaXRoKFwiZcWlb21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFtaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaVvbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdmlhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhY2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZWhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllbXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrVwiKSB8fFxyXG4gICAgICAgICAgICAvLyBnYWJvc1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmllXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA1ICYmXHJcbiAgICAgICAgKGtleS5lbmRzV2l0aChcImljaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5Y2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61jaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOpaG9cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDqW11XCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW11XCIpIHx8XHJcbiAgICAgICAgICAgIC8qa2V5LmVuZHNXaXRoKFwiaWhvXCIpIHx8Ki8gLy8gVmXEvm1pIG1hbMO9IHZwbHl2XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6FjaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO9Y2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICAvKiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w6lcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDvVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsOtXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZpXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWXFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ1asO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtdGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61tZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFjaFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYW1cIikgfHxcclxuICAgICAgICAgICAgLyprZXkuZW5kc1dpdGgoXCJhdMOhXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFjXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIml0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbGlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsb1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib2NoXCIpXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA0ICYmXHJcbiAgICAgICAgKC8qa2V5LmVuZHNXaXRoKFwiw61uXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61tXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6FtXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidXNcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvW1cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5bVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJtaVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm91XCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWpcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDusWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImnFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImnFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDumNcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZcWhXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXlbbGVuIC0gMV0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgY2FzZSBcImVcIjpcclxuICAgICAgICAgICAgY2FzZSBcImlcIjpcclxuICAgICAgICAgICAgY2FzZSBcIm9cIjpcclxuICAgICAgICAgICAgY2FzZSBcInVcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsO6XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDoVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw6lcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOtXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDvVwiOlxyXG4gICAgICAgICAgICAgICAgLypjYXNlIFwiw7RcIjoqL1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3Nlc3NpdmVzKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIGlmIChsZW4gPiA1ICYmIHMuZW5kc1dpdGgoXCJpblwiKSB8fFxyXG4gICAgICAgIHMuZW5kc1dpdGgoXCJvdlwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnN1YnN0cigwLCBsZW4gLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIC8vIHRvdG8gcHJhdmlkbG8gem5pxb51amUgRlAgYWxlIHp2ecWhdWplIEZOXHJcbiAgICAvKiAgICAgICAgaWYgKGxlbiA+IDEgJiYgc1tsZW4gLSAyXSA9PSBcImlcIiAmJiBzW2xlbi0xXT09XCJjXCIpIHtcclxuICAgICAgICAgICAgICAgIHNbbGVuIC0gMl0gPSBzW2xlbiAtIDFdOyAvLyBlKiA+ICpcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZW4gLSAxO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgIHN3aXRjaCAoc1tsZW4gLSAxXSkge1xyXG4gICAgICAgIGNhc2UgXCJjXCI6IC8vIFtjxI1dIC0+IGtcclxuICAgICAgICBjYXNlIFwixI1cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcImtcIik7XHJcbiAgICAgICAgY2FzZSBcIsS+XCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwibFwiKTtcclxuICAgICAgICBjYXNlIFwixYhcIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJuXCIpO1xyXG4gICAgICAgIGNhc2UgXCLFpVwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcInRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDMgJiYgc1tsZW4gLSAzXSA9PT0gXCJpXCIgJiYgKHNbbGVuIC0gMl0gPT09IFwiZVwiIHx8IHNbbGVuIC0gMl0gPT09IFwiYVwiIHx8IHNbbGVuIC0gMl0gPT09IFwidVwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGxlbiAtIDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzW2xlbiAtIDJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1tsZW4gLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbG92YWtTdGVtbWVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3RlbWUod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZW1vdmVQb3NzZXNzaXZlcyhyZW1vdmVDYXNlKHJlbW92ZVByZWRwb25hKHdvcmQpKSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIEFqYXhQYXJhbXMge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIG9uUmVzcG9uc2U6IChkYXRhOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59XHJcblxyXG5jbGFzcyBBamF4V3JhcHBlciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhamF4SGFuZGxlcjogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXgoe1xyXG4gICAgbWV0aG9kID0gXCJHRVRcIixcclxuICAgIHVybCxcclxuICAgIG9uUmVzcG9uc2UsXHJcbiAgICBjb250ZW50LFxyXG4gICAgaGVhZGVycyA9IHt9LFxyXG59OiBBamF4UGFyYW1zKTogQWpheFdyYXBwZXIge1xyXG4gICAgY29uc3QgcmVxdWVzdCAgICAgICAgICAgICAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCB8fCByZXF1ZXN0LnN0YXR1cyA9PT0gMjAxKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG9uUmVzcG9uc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvblJlc3BvbnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpLmZvckVhY2goKGVudHJ5KSA9PiByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoZW50cnlbMF0sIGVudHJ5WzFdKSk7XHJcbiAgICByZXF1ZXN0LnNlbmQoY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBamF4V3JhcHBlcihyZXF1ZXN0KTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9hamF4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bnRpbWUtdmFsaWRhdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9TbG92YWtTdGVtbWVyXCI7XHJcbiIsImV4cG9ydCBjb25zdCBnZXRBc1N0cmluZyA9IChrZXk6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgd2l0aCB2YWx1ZSAke2tleX0gaXMgbm90IGEgc3RyaW5nYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEFzTnVtYmVyID0gKGtleTogYW55KTogbnVtYmVyID0+IHtcclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSB3aXRoIHZhbHVlICR7a2V5fSBpcyBub3QgYSBudW1iZXJgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBoZXgycmdiLCBpbnQycmdiLCByZ2IyaGV4LCByZ2IyaW50IH0gZnJvbSBcIi4uL3V0aWxzL2NvbG9yLXV0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBjaGVja0NvbG9yVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc29sZS5hc3NlcnQodmFsdWUgPj0gMCk7XHJcbiAgICBjb25zb2xlLmFzc2VydCh2YWx1ZSA8PSAyNTUpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCTEFDSyA9IG5ldyBDb2xvcigwLCAwLCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0hJVEUgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSQVkgID0gbmV3IENvbG9yKDEyOCwgMTI4LCAxMjgpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRUQgICA9IG5ldyBDb2xvcigyNTUsIDAsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkVFTiA9IG5ldyBDb2xvcigwLCAyNTUsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCTFVFICA9IG5ldyBDb2xvcigwLCAwLCAyNTUpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmVkOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGdyZWVuOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGJsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYWxwaGEgPSAyNTUpIHtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUocmVkKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoZ3JlZW4pO1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShibHVlKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoYWxwaGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmdiKCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYlN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgcmdiKCR7dGhpcy5yZWR9LCAke3RoaXMuZ3JlZW59LCAke3RoaXMuYmx1ZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYmEoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZSwgdGhpcy5hbHBoYV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZXgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcmdiMmhleChNYXRoLmZsb29yKHRoaXMucmVkKSwgTWF0aC5mbG9vcih0aGlzLmdyZWVuKSwgTWF0aC5mbG9vcih0aGlzLmJsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiByZ2IyaW50KHRoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUhleChjb2xvcjogc3RyaW5nKTogQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGV4MnJnYihjb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoLi4udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUludChjb2xvcjogbnVtYmVyKTogQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW50MnJnYihjb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoLi4udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemVkKCk6IENvbG9yIHtcclxuICAgICAgICBpZiAodGhpcy5yZWQgPiAxIHx8IHRoaXMuZ3JlZW4gPiAxIHx8IHRoaXMuYmx1ZSA+IDEgfHwgdGhpcy5hbHBoYSA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnJlZCAvIDI1NSwgdGhpcy5ncmVlbiAvIDI1NSwgdGhpcy5ibHVlIC8gMjU1LCB0aGlzLmFscGhhIC8gMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIEdlbmRlcn0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR2VuZGVyVHlwZSA9IFwiTUFOXCIgfCBcIldPTUFOXCIgfCBcIlwiO1xyXG5cclxuY29uc3QgbWFsZVJlZ2V4cCAgID0gL14obWFsZXxtYW58bXV6fGJveXxjaGxhcGVjfG0pJC9nO1xyXG5jb25zdCBmZW1hbGVSZWdleHAgPSAvXihmZW1hbGV8d29tYW58emVuYXxnaXJsfGRpZXZjYXxmfHd8eikkL2c7XHJcblxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gICAgTUFOICAgPSBcIk1BTlwiLFxyXG4gICAgV09NQU4gPSBcIldPTUFOXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUdlbmRlcihnZW5kZXI6IHN0cmluZyk6IEdlbmRlciB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIWdlbmRlcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGdlbmRlckxvd2VyQ2FzZSA9IGdlbmRlci50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwixb5cIiwgXCJ6XCIpLnJlcGxhY2UoXCLEjVwiLCBcImNcIik7XHJcbiAgICBpZiAoZ2VuZGVyTG93ZXJDYXNlLm1hdGNoKG1hbGVSZWdleHApKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlbmRlci5NQU47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdlbmRlckxvd2VyQ2FzZS5tYXRjaChmZW1hbGVSZWdleHApKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlbmRlci5XT01BTjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcGFyc2VHZW5kZXJ9IGFuZCB7QGxpbmsgR2VuZGVyfSBpbnN0ZWFkXHJcbiAqIENsYXNzIGlzIHVzZWQgZm9yIHBhcnNpbmcgZ2VuZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2VuZGVyQ2xhc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcGFyc2Ugc3RyaW5nIGFuZCByZXR1cm4gR2VuZGVyVHlwZVxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBwYXJzZUdlbmRlcn0gaW5zdGVhZFxyXG4gICAgICogQHBhcmFtIGdlbmRlciBnZW5kZXIgaW4gYW55IGZvcm1hdFxyXG4gICAgICogQHJldHVybnMgcGFyc2VkIGdlbmRlciBhcyB7QGxpbmsgR2VuZGVyVHlwZX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZSA9IHBhcnNlR2VuZGVyO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBNb2RlbCBpcyBlbnVtIGFuZCBwYXJzZXJcclxuICovXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9nZW5kZXIubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sb3IubW9kZWxcIjtcclxuXHJcbi8vIFRPRE86IENhbm5vdCBpbXBvcnQgY291bnRyaWVzLmRhdGEuanNvblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5pbnRlcmZhY2VcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vY291bnRyaWVzL2NvdW50cnkubW9kZWxcIjtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogTk9ERSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gVVRJTFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9GaWxlVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NYXRoVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NaXNjVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9PYmplY3RVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL3RpbWUtdXRpbHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2MvU2xvdmFrU3RlbW1lclwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogV0VCICoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyBET01cclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9kZXByZWNhdGVkL0NoZWNrZXJzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RvbS9jYW52YXMtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZG9tLWdldFwiO1xyXG4iLCJpbXBvcnQgeyBBYnN0cmFjdEZpeHR1cmUgfSBmcm9tIFwiLi9hYnN0cmFjdC5maXh0dXJlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0TWFwcGVyIH0gZnJvbSBcIi4vYWJzdHJhY3QubWFwcGVyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3REYXRhYmFzZUZpeHR1cmU8T2JqLCBPYmpEdG8+IGV4dGVuZHMgQWJzdHJhY3RGaXh0dXJlPE9iaj4ge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxpc3REdG86IE9iakR0b1tdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGRldGFpbER0bzogT2JqRHRvO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihsaXN0OiBPYmpbXSwgbWFwcGVyOiBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4pIHtcclxuICAgICAgICBzdXBlcihsaXN0KTtcclxuICAgICAgICB0aGlzLmxpc3REdG8gICA9IGxpc3QubWFwKG1hcHBlci5tYXBUb0R0bywgbWFwcGVyKTtcclxuICAgICAgICB0aGlzLmRldGFpbER0byA9IHRoaXMubGlzdER0b1swXTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGaXh0dXJlPE9iaj4ge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGRldGFpbDogT2JqO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbGlzdDogT2JqW10pIHtcclxuICAgICAgICB0aGlzLmRldGFpbCA9IGxpc3RbMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWFwcGVyPE9iaiwgT2JqRHRvPiB7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgbWFwVG9EdG8ob2JqZWN0OiBQYXJ0aWFsPE9iaj4pOiBPYmpEdG87XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcEZyb21EdG8ob2JqZWN0OiBQYXJ0aWFsPE9iakR0bz4pOiBPYmo7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBhZ2luYXRlTW9kZWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBJVEVNU19QRVJfUEFHRSA9IDEwO1xyXG4gICAgcHVibGljIGxpbWl0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvdW50ID0gUGFnaW5hdGVNb2RlbC5JVEVNU19QRVJfUEFHRSwgb2Zmc2V0ID0gMCkge1xyXG4gICAgICAgIHRoaXMubGltaXQgID0gK2NvdW50O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gK29mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHZhbGlkYXRlKHBhZ2luYXRlPzogUGFnaW5hdGVNb2RlbCk6IFBhZ2luYXRlTW9kZWwge1xyXG4gICAgICAgIGlmICghcGFnaW5hdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFBhZ2luYXRlTW9kZWwoXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLmxpbWl0KSA/IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UgOiBwYWdpbmF0ZS5saW1pdCxcclxuICAgICAgICAgICAgaXNOYU4ocGFnaW5hdGUub2Zmc2V0KSA/IDAgOiBwYWdpbmF0ZS5vZmZzZXQsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9ob3Jpem9udGFsLWFsaWduLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4va2V5LXZhbHVlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXN0ZWQtc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0LWVudHJ5LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vcHRpb25hbC50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvaW50LmludGVyYWZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcHJvcC50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb3BlcnR5LWRlY29yYXRvci50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpemUuaW50ZXJhZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0LW9wdGlvbnMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGUuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaXQtbnVtYmVyLnR5cGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmVydGljYWwtYWxpZ24udHlwZVwiO1xyXG4iLCJpbXBvcnQgeyBDaGVja2VycyB9IGZyb20gXCIuLi9kb20vZGVwcmVjYXRlZC9DaGVja2Vyc1wiO1xyXG5pbXBvcnQgeyBEb21HZXQgfSBmcm9tIFwiLi4vZG9tL2RvbS1nZXRcIjtcclxuaW1wb3J0IHsgTm90QnJvd3NlckV4Y2VwdGlvbiB9IGZyb20gXCIuLi9lcnJvcnMvbm90LWJyb3dzZXIuZXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uL3R5cGVzL3BvaW50LmludGVyYWZhY2VcIjtcclxuaW1wb3J0IHsgU2l6ZSB9IGZyb20gXCIuLi90eXBlcy9zaXplLmludGVyYWZhY2VcIjtcclxuaW1wb3J0IHsgU3RyaW5nTWFwIH0gZnJvbSBcIi4uL3R5cGVzL3N0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdENyZWF0b3JQYXJhbXMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXR0cj86IFN0cmluZ01hcDtcclxuICAgIGNvbnQ/OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W107XHJcbiAgICBzdHlsZT86IENTU1N0eWxlRGVjbGFyYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb21VdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgaGVpZ2h0IG9mIHdpbmRvd1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHdpbmRvdyBoZWlnaHQgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V2luZG93SGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIHdpZHRoIG9mIHdpbmRvd1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHdpbmRvdyB3aWR0aCBpbiBwaXhlbHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXaW5kb3dXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gc2V0LCBhcHBlbmQgb3IgcmV0dXJucyB0ZXh0IG9mIGVsZW1lbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB0ZXh0IC0gdGV4dCB0byBwdXQgaW4gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIGFwcGVuZCAtIGZsYWcgaWYgdGV4dCBzaG91bGQgYmUgYXBwZW5kIG9yIHJlcGxhY2UgcHJldmlvdXMgdGV4dFxyXG4gICAgICogQHJldHVybnMgZWxlbWVudCBnaXZlbiBhcyBpbnB1dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHRleHQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZywgYXBwZW5kID0gdHJ1ZSk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAoYXBwZW5kKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgKz0gdGV4dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gc2V0LCBhcHBlbmQgb3IgcmV0dXJucyBodG1sIGNvbnRlbnQgb2YgZWxlbWVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIGh0bWwgLSBodG1sIHRvIHB1dCBpbiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gYXBwZW5kIC0gZmxhZyBpZiBodG1sIHNob3VsZCBiZSBhcHBlbmQgb3IgcmVwbGFjZSBwcmV2aW91cyBjb250ZW50XHJcbiAgICAgKiBAcmV0dXJucyBlbGVtZW50IGdpdmVuIGFzIGlucHV0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaHRtbChlbGVtZW50OiBIVE1MRWxlbWVudCwgaHRtbDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsIGFwcGVuZCA9IHRydWUpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKGFwcGVuZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGh0bWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGh0bWw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ2hlY2tlcnMuaXNFbGVtZW50KGh0bWwpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaHRtbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChDaGVja2Vycy5pc0VsZW1lbnQoaHRtbCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zLCBhZGQsIHJlbW92ZSBvciB0b2dnbGUgZWxlbWVudHMgY2xhc3Nlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBjbGFzcyBuYW1lIG9yIGxpc3Qgb2YgY2xhc3MgbmFtZXNcclxuICAgICAqIEBwYXJhbSBmb3JjZSAtIGZsYWcgaWYgY2xhc3Mgc2hvdWxkIGJlIHRvZ2dsZWQgZmFsc2VcclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gaWYgZnVuY3Rpb24gaXMgdXNlZCB0byBjaGVjayBjbGFzcyBwcmVzZW5jZSBvdGhlcndpc2UgZWxlbWVudCBnaXZlbiBhcyBpbnB1dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBuYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSwgZm9yY2UgPSBmYWxzZSk6IEhUTUxFbGVtZW50IHwgYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjbGFzc05hbWUgb2YgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgRG9tVXRpbHMuY2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3JjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWVbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG5hbWUuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDaGVja2Vycy5pc0Jvb2xlYW4oZm9yY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCBmb3JjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGNyZXRlIG5ldyBlbGVtZW50XHJcbiAgICAgKlxyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKSA9PiA8ZGl2PjwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcImlkZVwifSkgPT4gPGRpdiBpZD1cImlkZVwiPjwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge30sIFwidGV4dFwiKSA9PiA8ZGl2PnRleHQ8L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHt9LCBcIjxiPnRleHQ8L2I+XCIpID0+IDxkaXY+PGI+dGV4dDwvYj48L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHt9LCBcInRleHRcIiwge2NvbG9yOiBcImJsdWVcIn0pID0+IDxkaXYgc3R5bGU9XCJjb2xvcjogYmx1ZTtcIj50ZXh0PC9kaXY+XHJcbiAgICAgKlxyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudCh7bmFtZTogXCJkaXZcIn0pID0+IDxkaXY+PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudCh7bmFtZTogXCJkaXZcIn0pID0+IDxkaXY+PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudCh7bmFtZTogXCJkaXZcIiwgYXR0cjoge2lkOiBcImlkZVwifX0pID0+IDxkaXYgaWQ9XCJpZGVcIj48L2Rpdj47XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBuYW1lIG9mIGVsZW1lbnQgb3Igb2JqZWN0IGNvbnRhaW5zIGFsbCBjb25maWd1cmF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYXR0ciAtIG1hcCBvZiBhbGwgZWxlbWVudCBhdHRyaWJ1dGVzXHJcbiAgICAgKiBAcGFyYW0gY29udCAtIGVsZW1lbnQgY29udGVudC4gQ2FuIGJlIHN0cmluZywgZWxlbWVudCBvciBhcnJheSBvZiBlbGVtZW50c1xyXG4gICAgICogQHBhcmFtIHN0eWxlIC0gc3R5bGVzIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyBjcmVhdGVkIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KG5hbWU6IHN0cmluZyB8IE9iamVjdENyZWF0b3JQYXJhbXMsXHJcbiAgICAgICAgYXR0cj86IFN0cmluZ01hcCxcclxuICAgICAgICBjb250Pzogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdLFxyXG4gICAgICAgIHN0eWxlPzogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQobmFtZS5uYW1lLCBuYW1lLmF0dHIgfHwge30sIG5hbWUuY29udCB8fCBcIlwiLCBuYW1lLnN0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhdHRyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRyLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250KSkge1xyXG4gICAgICAgICAgICBjb250LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLmh0bWwoZWwsIGUsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBEb21VdGlscy5odG1sKGVsLCBjb250IGFzIHN0cmluZyB8IEhUTUxFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJlbW92ZSBlbGVtZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyByZW1vdmVkIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmUoZWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyBvYmplY3Qgd2l0aCBlbGVtZW50IHBvc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyBwb3NpdGlvbiBvZiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQb2ludCB7XHJcbiAgICAgICAgbGV0IHRvcCAgPSAwO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gMDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRvcCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xyXG4gICAgICAgICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBsZWZ0LFxyXG4gICAgICAgICAgICB5OiB0b3AsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgb3JkZXIgb2YgZWxlbWVudCBiZXR3ZWVuIHNpYmxpbmdzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyBpbmRleCBvZiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbmRleE9mKGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIG9iamVjdCB3aXRoIGVsZW1lbnQgc2l6ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgc2l6ZSBvZiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2l6ZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IFNpemUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoIDogZWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKGZvcm06IEhUTUxGb3JtRWxlbWVudCk6IFN0cmluZ01hcCB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBTdHJpbmdNYXAgPSB7fTtcclxuICAgICAgICAvLyBpZiBmb3JtcyBpcyBub3QgZWxlbWVudFxyXG4gICAgICAgIGlmICghQ2hlY2tlcnMuaXNFbGVtZW50KGZvcm0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBmb3JtIGlzIG5vdCBmb3JtXHJcbiAgICAgICAgaWYgKGZvcm0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcImZvcm1cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IGFsbCBpbnB1dHNcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IERvbUdldC5ieVRhZyhcImlucHV0XCIpO1xyXG5cclxuICAgICAgICAvLyBhZGQgYWxsIHZhbHVlcyB0byByZXN1bHQgb2JqZWN0XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlOiBFbGVtZW50ID0gZWxlbWVudHNba2V5XTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSAgICAgICA9IGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vZGVwcmVjYXRlZC9TdHJpbmdVdGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gd2FsayhkaXI6IHN0cmluZywgZG9uZTogKGVycm9yOiBhbnksIGZpbGVzPzogc3RyaW5nW10pID0+IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcclxuICAgIGZzLnJlYWRkaXIoZGlyLCAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBsaXN0OiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBlbmRpbmc6IG51bWJlciA9IGxpc3QubGVuZ3RoO1xyXG4gICAgICAgIGlmICghcGVuZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCByZXN1bHRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChmaWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgZmlsZSA9IHBhdGgucmVzb2x2ZShkaXIsIGZpbGUpO1xyXG4gICAgICAgICAgICBmcy5zdGF0KGZpbGUsIChlcnIxOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBzdGF0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ICYmIHN0YXQuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhbGsoZmlsZSwgKGVycjI6IGFueSwgcmVzPzogc3RyaW5nW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goLi4ucmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmctLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShudWxsLCByZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBzY2FuRGlyUmVjdXJzaXZlKGRpcjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmdbXT4oKHN1Y2Nlc3MsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmcy5zdGF0KGRpciwgKGVycjA6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbiB8IG51bGwsIHN0YXRzOiBmcy5TdGF0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycjApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChkaXIgKyBcIiBpcyBub3QgZGlyZWN0b3J5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2FsayhkaXIsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRGaWxlSlNPTih1cmw6IHN0cmluZywgY2FsbGJhY2s6IChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbiB8IG51bGwsIGRhdGE6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgRmlsZVV0aWxzLmxvYWRGaWxlKHVybCwgKGVyciwgZGF0YSkgPT4gY2FsbGJhY2soZXJyLCBKU09OLnBhcnNlKGRhdGEpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRmlsZSh1cmw6IHN0cmluZywgY2FsbGJhY2s6IChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbiB8IG51bGwsIGRhdGE6IHN0cmluZykgPT4gYW55LCBlbmNvZGluZyA9IFwidXRmOFwiKTogdm9pZCB7XHJcbiAgICAgICAgZnMucmVhZEZpbGUodXJsLCBlbmNvZGluZywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZUpzb25GaWxlKGRhdGE6IGFueSwgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIEZpbGVVdGlscy5zYXZlRmlsZShKU09OLnN0cmluZ2lmeShkYXRhKSwgZmlsZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZUZpbGUoZGF0YTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmcy53cml0ZUZpbGUoZmlsZU5hbWUsIGRhdGEsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGVyciA/IHJlamVjdChlcnIpIDogc3VjY2VzcyhcIlRoZSBmaWxlIHdhcyBzYXZlZCFcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRmlsZShmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmcy51bmxpbmsoZmlsZU5hbWUsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGVyciA/IHJlamVjdChlcnIpIDogc3VjY2VzcyhcIlRoZSBmaWxlIHdhcyByZW1vdmVkIVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0V4dGVuc2lvbihuYW1lOiBzdHJpbmcsIGV4dGVuc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChleHRlbnNpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWxzLmpvaW5TaW5nbGUobmFtZSwgXCIuXCIsIGV4dGVuc2lvbik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGFycmF5ID0gW3tuYW1lOiBcIk1pY2hhZWxcIiwgYWdlOiAyM30sIHtuYW1lOiBcIkpvYWNoaW1cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIkVucmljb1wiLCBhZ2U6IDE1fSwge25hbWU6IFwiTW9uaWNhXCIsIGFnZTogNTl9XVxyXG4gKiBjb25zdCBjb25kaXRpb25zID0ge2FnZTogMjMsIG5hbWU6IFwiTW9uaWNhXCJ9XHJcbiAqIHdoZXJlKGFycmF5LCBjb25kaXRpb25zKTsgLy8gW3tuYW1lOiBcIk1pY2hhZWxcIiwgYWdlOiAyM30sICB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGVyZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KGFycmF5OiBUW10sIGNvbmRpdGlvbjogUGFydGlhbDxUPik6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZGl0aW9uIHx8IHR5cGVvZiBjb25kaXRpb24gIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBUW10gICAgICA9IFtdO1xyXG4gICAgY29uc3QgY29uZGl0aW9uRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGNvbmRpdGlvbik7XHJcblxyXG4gICAgYXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZCA9IGNvbmRpdGlvbkVudHJpZXMuc29tZSgoY29uZGl0aW9uRW50cnkpID0+IGVbY29uZGl0aW9uRW50cnlbMF0gYXMga2V5b2YgVF0gPT09IGNvbmRpdGlvbkVudHJ5WzFdKTtcclxuICAgICAgICBpZiAoYWRkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiBzdWIgYXJyYXkgZnJvbSBhcnJheVxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIEFycmF5LnByb3RvdHlwZS5zbGljZX0gaW5zdGVhZFxyXG4gKiBAcGFyYW0gYXJyYXkgLSBpbnB1dCBhcnJheVxyXG4gKiBAcGFyYW0gbWluSW5kZXggLSBzdGFydCBpbmRleFxyXG4gKiBAcGFyYW0gbWF4SW5kZXggLSBlbmQgaW5kZXhcclxuICogQHJldHVybnMgZmluYWwgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJBcnJheTxUID0gYW55PihhcnJheTogVFtdLCBtaW5JbmRleCA9IDAsIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMSk6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXTtcclxuICAgIGNvbnN0IGZpbmFsICAgICAgID0gYXJyYXkubGVuZ3RoIDwgbWF4SW5kZXggPyBhcnJheS5sZW5ndGggLSAxIDogbWF4SW5kZXg7XHJcbiAgICBmb3IgKGxldCBpID0gbWluSW5kZXg7IGkgPD0gZmluYWw7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGFycmF5W2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm4gbWF4aW1hbCB2YWx1ZSBmcm9tIG51bWVyaWMgYXJyYXlcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBtYXhpbWFsIG51bWJlciBmcm9tIGFycmF5XHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWF0aC5tYXh9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXgoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSA+IGIgPyBhIDogYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm4gbWluaW1hbCB2YWx1ZSBmcm9tIG51bWVyaWMgYXJyYXlcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBtaW5pbWFsIG51bWJlciBmcm9tIGFycmF5XHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWF0aC5taW59IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW4oYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSA8IGIgPyBhIDogYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm4gdG90YWwgdmFsdWUgb2YgYWxsIGVsZW1lbnRzIGluIG51bWVyaWMgYXJyYXlcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gKiBAcmV0dXJucyBzdW1tYXJ5IG9mIGFsbCBudW1iZXJzIGluIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VtKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybnMgYXZlcmFnZSBvZiBudW1lcmljIGFycmF5IGdpdmVuIGFzIGlucHV0XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgYXZlcmFnZSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGF2ZyhhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBhcnJheS5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiBqb2luIGFycmF5IGJ5IGRlbGltaXRlciBhbmQgYXBwZW5kIHByZWZpeCBhbmQgcG9zdGZpeFxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHBhcmFtIGRlbGltaXRlciAtIGNoYXJhY3RlciB1c2VkIGZvciBqb2luIGVsZW1lbnRzIGluIGFycmF5XHJcbiAqIEBwYXJhbSBwcmVmaXggLSBzdHJpbmcgYXBwZW5kIGF0IHRoZSBiZWdpbm5pbmcgb2YgZmluYWwgc3RyaW5nXHJcbiAqIEBwYXJhbSBwb3N0Zml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgZW5kIG9mIGZpbmFsIHN0cmluZ1xyXG4gKiBAcmV0dXJucyBmaW5hbCBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luPFQ+KGFycmF5OiBUW10sIGRlbGltaXRlcjogc3RyaW5nLCBwcmVmaXggPSBcIlwiLCBwb3N0Zml4ID0gXCJcIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIGFycmF5ICsgcG9zdGZpeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJlZml4ICsgYXJyYXkuam9pbihkZWxpbWl0ZXIpICsgcG9zdGZpeDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCByZXR1cm5zIGxhc3QgZWxlbWVudCBmcm9tIGFycmF5IG9yIG51bGwgaWYgYXJyYXkgaXMgZW1wdHkuIElmIGFyZ3VtZW50IGlzIG5vdCBhcnJheSwgbWV0aG9kIHJldHVybnMgYXJndW1lbnRcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEByZXR1cm5zIGxhc3QgdmFsdWUgZnJvbSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3Q8VD4oYXJyYXk6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJucyByYW5kb20gZWxlbWVudCBmcm9tIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcmV0dXJucyByYW5kb20gdmFsdWUgZnJvbSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUl0ZW08VCA9IHVua25vd24+KGFycmF5OiBUW10pOiBUIHwgbnVsbCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5SYW5kb208VD4oYXJnczogVFtdLCBjb3VudDogbnVtYmVyKTogVFtdIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwIHx8IGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoIDw9IGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxUPigpO1xyXG5cclxuICAgIHdoaWxlIChyZXN1bHQuc2l6ZSA8PSBjb3VudCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUl0ZW0gPSBnZXRSYW5kb21JdGVtPFQ+KGFyZ3MpO1xyXG4gICAgICAgIGlmIChyYW5kb21JdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGQocmFuZG9tSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tPFQ+KHJlc3VsdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJuIGNvcHkgb2YgYXJyYXkgd2l0aCBvbmx5IGRpc3RpbmN0IGVsZW1lbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IHdpdGggZHVwbGljYXRlIGVsZW1lbnRzXHJcbiAqIEByZXR1cm5zIHVuaXF1ZSBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVbmlxdWU8VD4oYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQ8VD4oYXJyYXkpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmUgMiBhcnJheSBlYWNoIG90aGVyXHJcbiAqIEBwYXJhbSBhcnJcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWFjaE90aGVyPFQ+KGFycjogVFtdLCBjYWxsYmFjazogKGE6IFQsIGI6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGFyci5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGUsIGFycltqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9tYXRoLXV0aWxzXCI7XHJcblxyXG5jb25zdCBjb2xvcnM6IHsgW2NvbG9yOiBzdHJpbmddOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfSA9IHtcclxuICAgIGJsYWNrOiBbMCwgMCwgMF0sXHJcbiAgICB3aGl0ZTogWzI1NSwgMjU1LCAyNTVdLFxyXG4gICAgcmVkICA6IFsyNTUsIDAsIDBdLFxyXG4gICAgZ3JlZW46IFswLCAyNTUsIDBdLFxyXG4gICAgYmx1ZSA6IFswLCAwLCAyNTVdLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnBDb2xvcihcclxuICAgIGZyb21Db2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXHJcbiAgICB0b0NvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcclxuICAgIHByb2dyZXNzOiBudW1iZXIsXHJcbik6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IHJlZCAgID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMF0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMF07XHJcbiAgICBjb25zdCBncmVlbiA9IHByb2dyZXNzICogZnJvbUNvbG9yWzFdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzFdO1xyXG4gICAgY29uc3QgYmx1ZSAgPSBwcm9ncmVzcyAqIGZyb21Db2xvclsyXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclsyXTtcclxuICAgIGNvbnN0IGFscGhhID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbM10gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbM107XHJcblxuICAgIHJldHVybiBbXHJcbiAgICAgICAgY2xhbXAocmVkLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGdyZWVuLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGJsdWUsIDAsIDI1NSksXHJcbiAgICAgICAgY2xhbXAoYWxwaGEsIDAsIDI1NSksXHJcbiAgICBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycEhleGFDb2xvcihhOiBzdHJpbmcsIGI6IHN0cmluZywgYW1vdW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYWggPSArYS5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpO1xyXG4gICAgY29uc3QgYXIgPSBhaCA+PiAxNjtcclxuICAgIGNvbnN0IGFnID0gYWggPj4gOCAmIDB4RkY7XHJcbiAgICBjb25zdCBhYiA9IGFoICYgMHhGRjtcclxuICAgIGNvbnN0IGJoID0gK2IucmVwbGFjZShcIiNcIiwgXCIweFwiKTtcclxuICAgIGNvbnN0IGJyID0gYmggPj4gMTY7XHJcbiAgICBjb25zdCBiZyA9IGJoID4+IDggJiAweEZGO1xyXG4gICAgY29uc3QgYmIgPSBiaCAmIDB4RkY7XHJcbiAgICBjb25zdCByciA9IGFyICsgYW1vdW50ICogKGJyIC0gYXIpO1xyXG4gICAgY29uc3QgcmcgPSBhZyArIGFtb3VudCAqIChiZyAtIGFnKTtcclxuICAgIGNvbnN0IHJiID0gYWIgKyBhbW91bnQgKiAoYmIgLSBhYik7XHJcblxyXG4gICAgcmV0dXJuIFwiI1wiICsgKCgxIDw8IDI0KSArIChyciA8PCAxNikgKyAocmcgPDwgOCkgKyByYiB8IDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJyZ2IoY29sb3I6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChjb2xvci5zbGljZSgxKSwgMTYpO1xyXG5cclxuICAgIHJldHVybiBbbnVtID4+IDE2LCBudW0gPj4gOCAmIDB4MDBGRiwgbnVtICYgMHgwMDAwRkZdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hhZGVDb2xvcihjb2xvcjogc3RyaW5nLCBwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gaGV4MnJnYihjb2xvcik7XHJcbiAgICBjb25zdCBhbXQgPSBNYXRoLnJvdW5kKDIuNTUgKiBwZXJjZW50KTtcclxuICAgIGNvbnN0IFIgICA9IG51bVswXSArIGFtdDtcclxuICAgIGNvbnN0IEcgICA9IG51bVsxXSArIGFtdDtcclxuICAgIGNvbnN0IEIgICA9IG51bVsyXSArIGFtdDtcclxuXHJcbiAgICByZXR1cm4gcmdiMmhleChSLCBHLCBCKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYjJoZXgoUjogbnVtYmVyLCBHOiBudW1iZXIsIEI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCIjXCIgKyAoMHgxMDAwMDAwICsgKFIgPCAyNTUgPyBSIDwgMSA/IDAgOiBSIDogMjU1KSAqIDB4MTAwMDAgK1xyXG4gICAgICAgIChHIDwgMjU1ID8gRyA8IDEgPyAwIDogRyA6IDI1NSkgKiAweDEwMCArXHJcbiAgICAgICAgKEIgPCAyNTUgPyBCIDwgMSA/IDAgOiBCIDogMjU1KSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW50MmhleCh2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZSAgPSB2YWwudG9TdHJpbmcoMTYpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gXCIwMDAwMDBcIi5zdWJzdHIoMCwgNiAtIHZhbHVlLmxlbmd0aCkgKyB2YWx1ZTtcclxuXHJcbiAgICByZXR1cm4gXCIjXCIgKyByZXN1bHQudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludDJyZ2IodmFsOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB2YWwgPj4gMTYsXHJcbiAgICAgICAgdmFsID4+IDggJiAweEZGLFxyXG4gICAgICAgIHZhbCAmIDB4RkYsXHJcbiAgICBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4MmludCh2YWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxNik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IyaW50KFI6IG51bWJlciwgRzogbnVtYmVyLCBCOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFIgPDwgMTYgfCBHIDw8IDggJiAweEZGRkYgfCBCO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb2xvcihjb2xvcjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmIChjb2xvcnNbY29sb3JdKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tjb2xvcl07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGV4YU1hdGNoID0gY29sb3IubWF0Y2goL14jKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8pO1xyXG4gICAgaWYgKGhleGFNYXRjaCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFsxXSwgMTYpLFxyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbMl0sIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzNdLCAxNiksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZ2JhTWF0aCA9IGNvbG9yLm1hdGNoKC9yZ2JhP1xcKChcXGR7MSwzfSkgKiwgKihcXGR7MSwzfSkgKiwgKihcXGR7MSwzfSkoICosICpcXGQqLj9cXGQqKVxcKS8pO1xyXG4gICAgaWYgKHJnYmFNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbMV0sIDEwKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbMl0sIDEwKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQocmdiYU1hdGhbM10sIDEwKSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwYXJzZSBjb2xvcjogXCIgKyBjb2xvcik7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQXJyYXlzIGZyb20gXCIuLi9hcnJheS11dGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgQXJyYXlzfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXJyYXlVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogY29uc3QgYXJyYXkgPSBbe25hbWU6IFwiTWljaGFlbFwiLCBhZ2U6IDIzfSwge25hbWU6IFwiSm9hY2hpbVwiLCBhZ2U6IDE1fSwge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAgICAgKiBjb25zdCBjb25kaXRpb25zID0ge2FnZTogMjMsIG5hbWU6IFwiTW9uaWNhXCJ9XHJcbiAgICAgKiB3aGVyZShhcnJheSwgY29uZGl0aW9ucyk7IC8vIFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCAge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgd2hlcmU8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogYW55IH0+KGFycmF5OiBUW10sIGNvbmRpdGlvbjogYW55KTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLndoZXJlKGFycmF5LCBjb25kaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHN1YiBhcnJheSBmcm9tIGFycmF5XHJcbiAgICAgKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc2xpY2V9IGluc3RlYWRcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIGlucHV0IGFycmF5XHJcbiAgICAgKiBAcGFyYW0gbWluSW5kZXggLSBzdGFydCBpbmRleFxyXG4gICAgICogQHBhcmFtIG1heEluZGV4IC0gZW5kIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyBmaW5hbCBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1YkFycmF5PFQgPSBhbnk+KGFycmF5OiBUW10sIG1pbkluZGV4ID0gMCwgbWF4SW5kZXggPSBhcnJheS5sZW5ndGggLSAxKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLnN1YkFycmF5KGFycmF5LCBtaW5JbmRleCwgbWF4SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJuIG1heGltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gICAgICogQHJldHVybnMgbWF4aW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG1heChhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMubWF4KGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybiBtaW5pbWFsIHZhbHVlIGZyb20gbnVtZXJpYyBhcnJheVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICAgICAqIEByZXR1cm5zIG1pbmltYWwgbnVtYmVyIGZyb20gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBtaW4oYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLm1pbihhcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm4gdG90YWwgdmFsdWUgb2YgYWxsIGVsZW1lbnRzIGluIG51bWVyaWMgYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAgICAgKiBAcmV0dXJucyBzdW1tYXJ5IG9mIGFsbCBudW1iZXJzIGluIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VtKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5zdW0oYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyBhdmVyYWdlIG9mIG51bWVyaWMgYXJyYXkgZ2l2ZW4gYXMgaW5wdXRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAgICAgKiBAcmV0dXJucyBhdmVyYWdlIG9mIGFsbCBudW1iZXJzIGluIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXZnKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5hdmcoYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gam9pbiBhcnJheSBieSBkZWxpbWl0ZXIgYW5kIGFwcGVuZCBwcmVmaXggYW5kIHBvc3RmaXhcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICAgICAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBjaGFyYWN0ZXIgdXNlZCBmb3Igam9pbiBlbGVtZW50cyBpbiBhcnJheVxyXG4gICAgICogQHBhcmFtIHByZWZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGJlZ2lubmluZyBvZiBmaW5hbCBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBwb3N0Zml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgZW5kIG9mIGZpbmFsIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgZmluYWwgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgam9pbjxUPihhcnJheTogVFtdLCBkZWxpbWl0ZXI6IHN0cmluZywgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMuam9pbihhcnJheSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHJldHVybnMgbGFzdCBlbGVtZW50IGZyb20gYXJyYXkgb3IgbnVsbCBpZiBhcnJheSBpcyBlbXB0eS4gSWYgYXJndW1lbnQgaXMgbm90IGFycmF5LCBtZXRob2QgcmV0dXJucyBhcmd1bWVudFxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyBsYXN0IHZhbHVlIGZyb20gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMYXN0PFQgPSBhbnk+KGFycmF5OiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLmdldExhc3QoYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHJldHVybnMgcmFuZG9tIGVsZW1lbnQgZnJvbSBhcnJheVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gICAgICogQHJldHVybnMgcmFuZG9tIHZhbHVlIGZyb20gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb208VCA9IGFueT4oYXJyYXk6IFRbXSk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLmdldFJhbmRvbUl0ZW0oYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TlJhbmRvbTxUID0gYW55PihhcnJheTogVFtdLCBjb3VudDogbnVtYmVyKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLmdldE5SYW5kb20oYXJyYXksIGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm4gY29weSBvZiBhcnJheSB3aXRoIG9ubHkgZGlzdGluY3QgZWxlbWVudHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBhcnJheSB3aXRoIGR1cGxpY2F0ZSBlbGVtZW50c1xyXG4gICAgICogQHJldHVybnMgdW5pcXVlIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFrZVVuaXF1ZTxUID0gYW55PihhcnJheTogVFtdKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLm1ha2VVbmlxdWUoYXJyYXkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIE1hdGhzIGZyb20gXCIuLi9tYXRoLXV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNYXRoc30gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdGhVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdW5kVG9EZWNpbWFscyhudW06IG51bWJlciwgZGVjaW1hbHMgPSAyLCB0eXBlOiBcImZsb29yXCIgfCBcImNlaWxcIiB8IFwicm91bmRcIiA9IFwicm91bmRcIik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLnJvdW5kVG9EZWNpbWFscyhudW0sIGRlY2ltYWxzLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhZChudW06IG51bWJlciwgc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMucGFkKG51bSwgc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5jbGFtcCh2YWx1ZSwgbWluLCBtYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmlub21pYWxDb2VmZmljaWVudChuOiBudW1iZXIsIGs6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLmJpbm9taWFsQ29lZmZpY2llbnQobiwgayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB2YWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLmxlcnAoYSwgYiwgdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZzJpKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5sb2cyaSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsYW1wKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLmNsYW1wKHNjYWxlLCBtaW4sIG1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMucmFuZG9tSW50KG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5yYW5kb20obWluLCBtYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXZlcmFnZShhcmdzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLmF2ZXJhZ2UoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaWZmKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMuZ2V0RGlmZihudW0xLCBudW0yKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQHR5cGVkZWYgIHsoT2JqZWN0KX0gYW55XHJcbiAqL1xyXG5pbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0ICogYXMgTWlzYyBmcm9tIFwiLi4vbWlzYy11dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBOZXRDbGllbnQgZnJvbSBcIi4uL25ldC1jbGllbnQtdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgT2JqZWN0cyBmcm9tIFwiLi4vb2JqZWN0LXV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIFJlZmxlY3Rpb24gZnJvbSBcIi4uL3JlZmxlY3Rpb24tdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2N9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNaXNjVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgY2xhc3MgYnkgbmFtZSBhbmQgbGlzdCBvZiBwYXJhbWV0ZXJzXHJcbiAgICAgKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBjcmVhdGVDbGFzc30gaW5zdGVhZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZVxyXG4gICAgICogQHBhcmFtIGFyZ3MgLSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJcclxuICAgICAqIEByZXR1cm5zIGNyZWF0ZWQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2xhc3MobmFtZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Rpb24uY3JlYXRlQ2xhc3MobmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcGFyc2UgY29va2llc1xyXG4gICAgICogQHBhcmFtIGNvb2tpZXMgLSBjb29rZSB0byBwYXJzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlQ29va2llcyhjb29raWVzOiBzdHJpbmcpOiBTdHJpbmdNYXAge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnBhcnNlQ29va2llcyhjb29raWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCBjaGVjayBpZiBvYmplY3QgaXMgaW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBvYmogLSBzZWFyY2hlZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjb21wYXJlIHdpdGggc2VhcmNoZWQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbihvYmo6IGFueSwgLi4uZGF0YTogYW55W10pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gTWlzYy5pc0luKG9iaiwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcGFyc2UgSlNPTiBjb250ZW50IHdpdGggY29tbWVudHNcclxuICAgICAqIEBwYXJhbSBjb250ZW50IC0gc3RyaW5naWZ5IEpTT05cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZUpTT05XaXRoQ29tbWVudHMoY29udGVudDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gTWlzYy5wYXJzZUpTT05XaXRoQ29tbWVudHMoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogc2hvdWxkIGFwcGVuZCBjb29raWVzIG9yIGFkZCBvcHRpb24gdG8gYXBwZW5kaW5nIGluc3RlYWQgb2YgcmVwbGFjZSBjb29raWVzXHJcbiAgICAvLyBUT0RPOiBleHBpcmVzIG11c3QgYmUgb25seSBpbiB0aGUgZW5kIG9mIGNvb2tpZXNcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sIGRheXM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2Muc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvb2tpZShjbmFtZTogc3RyaW5nLCBzb3VyY2UgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jb29raWUgOiBcIlwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gTWlzYy5nZXRDb29raWUoY25hbWUsIHNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZVBhcmFtcyhxdWVyeSAgICAgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkgOiBcIlwiLFxyXG4gICAgICAgIHNlcGFyYXRvciA9IFwiJlwiLFxyXG4gICAgICAgIGRlbGltaXRlciA9IFwiPVwiKTogYW55IHtcclxuICAgICAgICByZXR1cm4gTWlzYy5wYXJzZVBhcmFtcyhxdWVyeSwgc2VwYXJhdG9yLCBkZWxpbWl0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByb3VnaFNpemVPZk9iamVjdH0gaW5zdGVhZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvYmplY3QgLSBvYmplY3QgdG8gZGV0ZXJtaW5lIHNpemVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByb3VnaFNpemVPZk9iamVjdChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMucm91Z2hTaXplT2ZPYmplY3Qob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdFRvUXVlcnlQYXJhbXMob2JqOiBTdHJpbmdNYXApOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLm9iamVjdFRvUXVlcnlQYXJhbXMob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgaW5jbHVkZUZpbGV9IGluc3RlYWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZSAtIHBhdGggdG8gZmlsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluY2x1ZGVGaWxlKGZpbGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiBOZXRDbGllbnQuaW5jbHVkZUZpbGUoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnNlcmlhbGl6ZShvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2Uob2JqOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnBhcnNlKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgICAgICByZXR1cm4gTWlzYy5tYXAoc291cmNlLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBPYmplY3RzIGZyb20gXCIuLi9vYmplY3QtdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE9iamVjdHN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHdpdGhvdXQob2JqOiBhbnksIGl0ZW1zOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMud2l0aG91dChvYmosIGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5lc3RlZFByb3BlcnR5KG9iamVjdDogYW55LCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmdldE5lc3RlZFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHlQYXRoLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2l6ZShvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMuc2l6ZShvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNQbGFpbihvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmlzUGxhaW4ob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VGbGF0KGxpc3Q6IGFueVtdLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLm1ha2VGbGF0KGxpc3QsIHByb3BlcnR5UGF0aCwgc2VwYXJhdG9yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDaGVja2VycyBmcm9tIFwiLi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBDaGVja2Vyc30gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0NoZWNrZXJzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNDYW1lbENhc2UgPSBDaGVja2Vycy5pc0NhbWVsQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJDYW1lbENhc2UgPSBDaGVja2Vycy5pc1VwcGVyQ2FtZWxDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNMb3dlckNhbWVsQ2FzZSA9IENoZWNrZXJzLmlzTG93ZXJDYW1lbENhc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0xvd2VyU25ha2VDYXNlID0gQ2hlY2tlcnMuaXNMb3dlclNuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1NuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVGltZUZvcm1hdCA9IENoZWNrZXJzLmlzVGltZUZvcm1hdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIENoZWNrZXJzIGZyb20gXCIuLi9zdHJpbmctY2hlY2tlcnNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5ncyBmcm9tIFwiLi4vc3RyaW5nLXV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBTdHJpbmdzfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5yZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBqb2luKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmpvaW5TdHJpbmcoZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9VcHBlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvVXBwZXJTbmFrZUNhc2UodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlclNuYWtlQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9VcHBlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0NhcGl0YWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50b0NhcGl0YWwodGV4dCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdFBhcnQodGV4dDogc3RyaW5nLCBkaXZpZGVyID0gXCIgXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmdldExhc3RQYXJ0KHRleHQsIGRpdmlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnQodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY291bnQodGV4dCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB0ZXh0IC0gdGV4dCBuZWVkIHRvIGJlIHJlcGVhdFxyXG4gICAgICogQHBhcmFtIGNvdW50IC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICAgICAqIEBkZXByZWNhdGVkIC0gdXNlIHtAbGluayBTdHJpbmcjcmVwZWF0fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGVhdCh0ZXh0OiBzdHJpbmcsIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGVhdChjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUFsbCh0ZXh0LCB3b3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogbmVlZCB0byBiZSBmaXhlZFxyXG4gICAgcHVibGljIHN0YXRpYyB0ZW1wbGF0ZSh0ZXh0OiBzdHJpbmcsIHZhbHVlczogU3RyaW5nTWFwLCBzdGFydCA9IFwie3tcIiwgZW5kID0gXCJ9fVwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50ZW1wbGF0ZSh0ZXh0LCB2YWx1ZXMsIHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRW1wdHlMaW5lcyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUVtcHR5TGluZXMoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBiZXR3ZWVuKHRleHQ6IHN0cmluZywga2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmJldHdlZW4odGV4dCwga2V5MSwga2V5Mik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvY2N1cnJlbmNlcyh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5vY2N1cnJlbmNlcyh0ZXh0LCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvQ2FwaXRhbCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRW1wdHkodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzRW1wdHkodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzd2FwQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnN3YXBDYXNlKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhbnNmb3JtVG9CYXNpY0Zvcm1hdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRyYW5zZm9ybVRvQmFzaWNGb3JtYXQodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBDaGVja2Vycy5pc1ZhbGlkRW1haWwoZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBpc1ZhbGlkUGhvbmVOdW1iZXJ9IGluc3RlYWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbnVtIC0gc3RyaW5nIHRvIHZhbGlkYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIENoZWNrZXJzLmlzVmFsaWRQaG9uZU51bWJlcihudW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QXNjaWlBcnJheSh0ZXh0OiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuZ2V0QXNjaWlBcnJheSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRvQmFzaWNGb3JtKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9CYXNpY0Zvcm0odGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb250YWlucyh0ZXh0OiBzdHJpbmcsIHN1YnN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY29udGFpbnModGV4dCwgc3Vic3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5TaW5nbGUocHJlZml4OiBzdHJpbmcsIGRpdmlkZXI6IHN0cmluZywgcG9zdGZpeDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5qb2luU2luZ2xlKHByZWZpeCwgZGl2aWRlciwgcG9zdGZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRGb3JtYXR0ZWROdW1iZXIobnVtOiBzdHJpbmcsIHByZWZpeCA9IFwiKzQyMVwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5nZXRGb3JtYXR0ZWROdW1iZXIobnVtLCBwcmVmaXgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IChOb2RlIHwgc3RyaW5nKVtdIHwgTm9kZSB8IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgb25DbGljaz86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgc3R5bGVzPzogeyBbc3R5bGUgaW4ga2V5b2YgQ1NTU3R5bGVEZWNsYXJhdGlvbl0/OiBDU1NTdHlsZURlY2xhcmF0aW9uW3N0eWxlXSB9O1xyXG4gICAgY29udGVudD86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxuICAgIGZvcj86IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgYXV0b3BsYXk/OiBib29sZWFuO1xyXG4gICAgaHJlZj86IHN0cmluZztcclxuICAgIGRvd25sb2FkPzogc3RyaW5nO1xyXG4gICAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb1N0cmluZyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCkuam9pbihcIi5cIik7XHJcbiAgICBjb25zdCBpZCAgICAgID0gZWxlbWVudC5pZCA/IFwiI1wiICsgZWxlbWVudC5pZCA6IFwiXCI7XHJcbiAgICBjb25zdCBwYXJlbnQgID0gZWxlbWVudC5wYXJlbnRFbGVtZW50ID8gZWxlbWVudFRvU3RyaW5nKGVsZW1lbnQucGFyZW50RWxlbWVudCkgKyBcIiA+IFwiIDogXCJcIjtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50ICsgZWxlbWVudC5sb2NhbE5hbWUgKyBpZCArIChjbGFzc2VzID8gXCIuXCIgKyBjbGFzc2VzIDogXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgaGVhZGVyU2VsZWN0b3IgPSBcIi5oZWFkZXJcIik6IHsgY2xlYXI6ICgpID0+IHZvaWQgfSB7XHJcbiAgICBsZXQgcG9zMSA9IDA7XHJcbiAgICBsZXQgcG9zMiA9IDA7XHJcbiAgICBsZXQgcG9zMyA9IDA7XHJcbiAgICBsZXQgcG9zNCA9IDA7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudERyYWcgPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3MxICAgICAgICAgICAgICAgPSBwb3MzIC0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczIgICAgICAgICAgICAgICA9IHBvczQgLSBlLmNsaWVudFk7XHJcbiAgICAgICAgcG9zMyAgICAgICAgICAgICAgID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczQgICAgICAgICAgICAgICA9IGUuY2xpZW50WTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCAgPSBlbGVtZW50Lm9mZnNldFRvcCAtIHBvczIgKyBcInB4XCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0IC0gcG9zMSArIFwicHhcIjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZHJhZ01vdXNlRG93biA9IChlOiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHBvczMgICAgICAgICAgICAgICAgICAgPSBlLmNsaWVudFg7XHJcbiAgICAgICAgcG9zNCAgICAgICAgICAgICAgICAgICA9IGUuY2xpZW50WTtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCAgID0gY2xvc2VEcmFnRWxlbWVudDtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gZWxlbWVudERyYWc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXJTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VEcmFnRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCAgID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBkcmFnTW91c2VEb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlSW1hZ2Uob3B0aW9ucz86IEVsZW1lbnRBdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1wiaW1nXCJdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IENyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgb3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKEFMTE9XX0lNQUdFU19PTkxZX1dJVEhfQUxMT1dFRF9DT1JTKSB7XHJcbiAgICAgICAgcmVzdWx0LmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3gobGFiZWw6IHN0cmluZywgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkLCBjaGVja2VkID0gZmFsc2UpOiBIVE1MTGFiZWxFbGVtZW50IHtcclxuICAgIGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IENyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICB0eXBlICAgIDogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiBvbkNoYW5nZShpbnB1dEVsZW1lbnQuY2hlY2tlZCksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gQ3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IFwiY2hlY2tib3gtY29udGFpbmVyXCIsXHJcbiAgICAgICAgY2hpbGRyZW4gOiBbbGFiZWwsIGlucHV0RWxlbWVudCwgQ3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJjaGVja21hcmtcIn0pXSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPih0eXBlOiBLLCBvcHRpb25zPzogRWxlbWVudEF0dHJpYnV0ZXMpOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudDxLPih0eXBlKTtcclxuICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGVudHJ5WzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGFzc05hbWVcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5jbGFzc05hbWUgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib25DaGFuZ2VcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib25DbGlja1wiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrZWRcIjpcclxuICAgICAgICAgICAgICAgIChyZXN1bHQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IGVudHJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHlsZXNcIjpcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGVudHJ5WzFdKS5mb3JFYWNoKChzdHlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0eWxlW3N0eWxlRW50cnlbMF0gYXMgYW55XSA9IHN0eWxlRW50cnlbMV0gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoaWxkcmVuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeVsxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwZW5kKC4uLmVudHJ5WzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGVuZChlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbnRlbnRcIjpcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShlbnRyeVswXSwgZW50cnlbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUT0RPOiBlbGVtZW50IHJlbWFpbnMgYWZ0ZXIgZGVsZXRpb24gb25NZXNzYWdlIHNjcmVlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9yVXNpbmdEZWZhdWx0SW5wdXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgdHlwZSAgICAgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgb25DaGFuZ2UgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGlucHV0LmNsaWNrKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmVudDogSFRNTEVsZW1lbnQsIHR5cGU6IEssIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXT4oYCR7dHlwZX0uJHtjbGFzc2VzLmpvaW4oXCIuXCIpfWApO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIENyZWF0ZUVsZW1lbnQodHlwZSwge2NsYXNzTmFtZTogY2xhc3Nlcy5qb2luKFwiIFwiKX0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JDcmVhdGVBbmRBcHBlbmQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4ocGFyZW50OiBIVE1MRWxlbWVudCwgdHlwZTogSywgLi4uY2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0T3JDcmVhdGU8Sz4ocGFyZW50LCB0eXBlLCAuLi5jbGFzc2VzKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmFuZG9tIGZyb20gXCIuL3JhbmRvbS11dGlsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZChudW06IG51bWJlciwgc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHMgPSBcIjAwMDAwMDAwMDAwMDAwXCIgKyBudW07XHJcblxyXG4gICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3VuZFRvRGVjaW1hbHMobnVtOiBudW1iZXIsIGRlY2ltYWxzID0gMiwgdHlwZTogXCJmbG9vclwiIHwgXCJjZWlsXCIgfCBcInJvdW5kXCIgPSBcInJvdW5kXCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZGl2aWRlciA9IHBhcnNlSW50KDEgKyBuZXcgQXJyYXkoZGVjaW1hbHMgKyAxKS5qb2luKFwiMFwiKSwgMTApO1xyXG5cclxuICAgIHJldHVybiAoTWF0aFt0eXBlXShudW0gKiBkaXZpZGVyKSAvIGRpdmlkZXIpLnRvRml4ZWQoZGVjaW1hbHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaDJOdW1iZXJzKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHhGaW5hbCA9IHggPj0gMCA/IHggKiAyIDogLXggKiAyIC0gMTtcclxuICAgIGNvbnN0IHlGaW5hbCA9IHkgPj0gMCA/IHkgKiAyIDogLXkgKiAyIC0gMTtcclxuXHJcbiAgICByZXR1cm4gKHhGaW5hbCArIHlGaW5hbCkgKiAoeEZpbmFsICsgeUZpbmFsICsgMSkgLyAyICsgeUZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbm9taWFsQ29lZmZpY2llbnQobjogbnVtYmVyLCBrOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHIgPSAxO1xyXG4gICAgaWYgKGsgPiBuKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBkID0gMTsgZCA8PSBrOyBkKyspIHtcclxuICAgICAgICByICo9IG47XHJcbiAgICAgICAgbi0tO1xyXG4gICAgICAgIHIgLz0gZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBiICogdmFsICsgKDEgLSB2YWwpICogYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZzJpKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHIgPSAwO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB3aGlsZSAoKHZhbHVlID4+PSAxKSA+IDApIHtcclxuICAgICAgICByKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYW1wKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gY2xhbXAoKG1heCAtIG1pbikgKiBzY2FsZSArIG1pbiwgbWluLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByYW5kb21JbnRCZXR3ZWVufSBpbnN0ZWFkO1xyXG4gKlxyXG4gKiBAcGFyYW0gbWluIC0gbWluIHZhbHVlXHJcbiAqIEBwYXJhbSBtYXggLSBtYXggdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSYW5kb20ucmFuZG9tSW50QmV0d2VlbihtaW4sIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIHJhbmRvbUZsb2F0QmV0d2Vlbn0gaW5zdGVhZDtcclxuICpcclxuICogQHBhcmFtIG1pbiAtIG1pbiB2YWx1ZVxyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUmFuZG9tLnJhbmRvbUZsb2F0QmV0d2VlbihtaW4sIG1heCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmVyYWdlKGFyZ3M6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFyZ3MpIHtcclxuICAgICAgICBzdW0gKz0gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VtIC8gYXJncy5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodmFsdWUgJiB2YWx1ZSAtIDEpID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZihudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtMSAtIG51bTIpO1xyXG59XHJcblxyXG5jb25zdCByYXRpbyA9IDE4MCAvIE1hdGguUEk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWVzKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIHJhdGlvO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCIuLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBwYXJzZSBjb29raWVzXHJcbiAqIEBwYXJhbSBjb29raWVzIC0gY29va2UgdG8gcGFyc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMoY29va2llczogc3RyaW5nKTogU3RyaW5nTWFwPHN0cmluZz4ge1xyXG4gICAgY29uc3QgbGlzdDogU3RyaW5nTWFwPHN0cmluZz4gPSB7fTtcclxuICAgIGNvbnN0IGRhdGEgICAgICAgICAgICAgICAgICAgID0gY29va2llcyA/IGNvb2tpZXMudG9TdHJpbmcoKVxyXG4gICAgICAgIC5zcGxpdChcIjtcIikgOiBbXTtcclxuICAgIGRhdGEuZm9yRWFjaCgoY29va2llKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgICAgID0gY29va2llLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICBjb25zdCBzaGlmdFBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChzaGlmdFBhcnQpIHtcclxuICAgICAgICAgICAgbGlzdFtzaGlmdFBhcnQudHJpbSgpXSA9IGRlY29kZVVSSShwYXJ0cy5qb2luKFwiPVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgY2hlY2sgaWYgb2JqZWN0IGlzIGluIGFycmF5XHJcbiAqIEBwYXJhbSBvYmogLSBzZWFyY2hlZCBvYmplY3RcclxuICogQHBhcmFtIGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIHRvIGJlIGNvbXBhcmUgd2l0aCBzZWFyY2hlZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luKG9iajogdW5rbm93biwgLi4uZGF0YTogdW5rbm93bltdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhWzBdKSkge1xyXG4gICAgICAgIGlmIChkYXRhWzBdLmluZGV4T2Yob2JqKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGF0YS5pbmRleE9mKG9iaikgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBwYXJzZSBKU09OIGNvbnRlbnQgd2l0aCBjb21tZW50c1xyXG4gKiBAcGFyYW0gY29udGVudCAtIHN0cmluZ2lmeSBKU09OXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKU09OV2l0aENvbW1lbnRzPFQ+KGNvbnRlbnQ6IHN0cmluZyk6IFQge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY29udGVudC5yZXBsYWNlKC9cXC9cXC8uKlxcbi9nLCBcIlwiKSk7XHJcbn1cclxuXHJcbi8vIFRPRE86IHNob3VsZCBhcHBlbmQgY29va2llcyBvciBhZGQgb3B0aW9uIHRvIGFwcGVuZGluZyBpbnN0ZWFkIG9mIHJlcGxhY2UgY29va2llc1xyXG4vLyBUT0RPOiBleHBpcmVzIG11c3QgYmUgb25seSBpbiB0aGUgZW5kIG9mIGNvb2tpZXNcclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCBkYXlzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBjb25zdCBmaW5hbENvb2tpZXMgPSBgJHtuYW1lfT0ke3ZhbHVlfTtleHBpcmVzPSR7ZC50b1VUQ1N0cmluZygpfWA7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gZmluYWxDb29raWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuYW1lfT0ke3ZhbHVlfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUoY25hbWU6IHN0cmluZywgc291cmNlID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY29va2llIDogXCJcIik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBuYW1lID0gY25hbWUgKyBcIj1cIjtcclxuICAgIGNvbnN0IGNhICAgPSBzb3VyY2Uuc3BsaXQoXCI7XCIpO1xyXG4gICAgZm9yIChsZXQgYyBvZiBjYSkge1xyXG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1zPFQ+KHF1ZXJ5ICAgICA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSA6IFwiXCIsXHJcbiAgICBzZXBhcmF0b3IgPSBcIiZcIixcclxuICAgIGRlbGltaXRlciA9IFwiPVwiKTogVCB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZzogYW55ID0ge307XHJcbiAgICBjb25zdCB2YXJzOiBzdHJpbmdbXSAgID0gcXVlcnkuc3BsaXQoc2VwYXJhdG9yKTtcclxuICAgIGZvciAoY29uc3QgcGFpciBvZiB2YXJzKSB7XHJcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcGFpci5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBxdWVyeVN0cmluZ1trZXldID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0gPSBbcXVlcnlTdHJpbmdba2V5XSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XS5wdXNoKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcXVlcnlTdHJpbmcgYXMgVDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvUXVlcnlQYXJhbXMob2JqOiBTdHJpbmdNYXA8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICAvLyBUT0RPOiBhZGQgdXJsIHByZWZpeFxyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IG9iaktleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG9iaktleSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IGAke3Jlc3VsdC5sZW5ndGggPiAwID8gXCImXCIgOiBcIj9cIn0ke29iaktleX09JHtvYmpbb2JqS2V5XX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9iajogYW55KTogc3RyaW5nIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2Ygb2JqW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvYmpba2V5XSA9IG9ialtrZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2U8VD4ob2JqOiBzdHJpbmcpOiBUIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2Uob2JqKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiByZXN1bHQpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5oYXNPd25Qcm9wZXJ0eShpKSB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgcmVzdWx0W2ldICE9PSBcInN0cmluZ1wiIHx8ICEocmVzdWx0W2ldLmluZGV4T2YoXCJmdW5jdGlvbiAoXCIpID09PSAwIHx8XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0ubWF0Y2goL15cXChbX2EtekEtWjAtOV0rKCAqLCAqW19hLXpBLVowLTldKykqXFwpICo9Pi8pKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcclxuICAgICAgICAgICAgZXZhbChcInJlc3VsdFtpXSA9IFwiICsgcmVzdWx0W2ldKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXA8UyA9IGFueSwgVCA9IFM+KHNvdXJjZTogUywgZGF0YTogeyBhdHRyUzoga2V5b2YgUywgYXR0ckQ/OiBrZXlvZiBULCBtYXBGdW5jdGlvbjogKHNyYzogYW55KSA9PiBhbnkgfVtdKTogVCB7XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbjogYW55ID0ge307XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ubWFwRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uYXR0ckQpIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0ckRdID0gaXRlbS5tYXBGdW5jdGlvbihzb3VyY2VbaXRlbS5hdHRyU10pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25baXRlbS5hdHRyU10gPSBpdGVtLm1hcEZ1bmN0aW9uKHNvdXJjZVtpdGVtLmF0dHJTXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0uYXR0ckQpIHtcclxuICAgICAgICAgICAgZGVzdGluYXRpb25baXRlbS5hdHRyRF0gPSBzb3VyY2VbaXRlbS5hdHRyU107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVzdGluYXRpb25baXRlbS5hdHRyU10gPSBzb3VyY2VbaXRlbS5hdHRyU107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IE5vdEJyb3dzZXJFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBDcmVhdGVFbGVtZW50LCBDcmVhdGVJbWFnZSB9IGZyb20gXCIuL2h0bWwtdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRJbWFnZSgpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50Pigoc3VjY2VzcywgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCAgICAgICAgID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgdHlwZSAgICA6IFwiZmlsZVwiLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyICAgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhDcmVhdGVJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoKGV2ZW50LnRhcmdldCBhcyBhbnkpLmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmNsaWNrKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEZpbGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCAgICAgICAgID0gQ3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgdHlwZSAgICA6IFwiZmlsZVwiLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyICA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KChldmVudC50YXJnZXQgYXMgYW55KS5maWxlc1swXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5jbGljaygpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGllbnREb3dubG9hZEZpbGUodGV4dDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBDcmVhdGVFbGVtZW50KFwiYVwiLCB7XHJcbiAgICAgICAgaHJlZiAgICA6IFwiZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQodGV4dCksXHJcbiAgICAgICAgZG93bmxvYWQ6IG5hbWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgZWxlbWVudC5jbGljaygpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlRmlsZShmaWxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIGlmICghc2NyaXB0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2NyaXB0LnNyYyAgID0gZmlsZTtcclxuICAgIHNjcmlwdC50eXBlICA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE9iamVjdEVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRob3V0PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqOiBULCBpdGVtczogKGtleW9mIFQpW10pOiBPbWl0PFQsIGFueT4ge1xyXG4gICAgcmV0dXJuIGdldE9iamVjdEVudHJpZXMob2JqKS5maWx0ZXIoKGVudHJ5KSA9PiAhaXRlbXMuaW5jbHVkZXMoZW50cnkua2V5KSlcclxuICAgICAgICAucmVkdWNlKChwcmV2LCBlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBwcmV2W2VudHJ5LmtleV0gPSBlbnRyeS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgIH0sIHt9IGFzIFQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0RW50cmllczxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iajogVCk6IE9iamVjdEVudHJ5PFQ+W10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBPYmplY3RFbnRyeTxUPltdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG9iaktleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShvYmpLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgIGtleSAgOiBvYmpLZXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBvYmpbb2JqS2V5XSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVzdGVkUHJvcGVydHkob2JqZWN0OiBhbnksIHByb3BlcnR5UGF0aDogc3RyaW5nLCBzZXBhcmF0b3IgPSBcIi5cIik6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUxpc3QgPSBwcm9wZXJ0eVBhdGguc3BsaXQoc2VwYXJhdG9yKTtcclxuXHJcbiAgICByZXR1cm4gcHJvcGVydHlMaXN0LnJlZHVjZSgoY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUsIHByb3BlcnR5TmFtZSkgPT4gY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWUgPyBjdXJyZW50TmVzdGVkUHJvcGVydHlWYWx1ZVtwcm9wZXJ0eU5hbWVdIDogdW5kZWZpbmVkLCBvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmVzdGVkUHJvcGVydHk8VD4oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIGxldCBvYmogICAgICAgID0gaXRlbTtcclxuICAgIGNvbnN0IHNwbGl0S2V5ID0ga2V5LnNwbGl0KFwiLlwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRLZXkubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgb2JqID0gb2JqW3NwbGl0S2V5W2ldXTtcclxuICAgIH1cclxuICAgIG9ialtzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXV0gPSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdWdoU2l6ZU9mT2JqZWN0PFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBvYmplY3RMaXN0ICAgICAgID0gW107XHJcbiAgICBjb25zdCBzdGFjazogdW5rbm93bltdID0gW29iamVjdF07XHJcbiAgICBsZXQgYnl0ZXMgICAgICAgICAgICAgID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gNDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSB2YWx1ZS5sZW5ndGggPDwgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBieXRlcyArPSA4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIG9iamVjdExpc3QuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG9iamVjdExpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJ5dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2l6ZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvciAoY29uc3QgaSBpbiBvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbjxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iamVjdDogVCk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGluZGV4KSAmJiB0eXBlb2Ygb2JqZWN0W2luZGV4XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGxpc3QgLSBsaXN0IHRvIGZsYXRcclxuICogQHBhcmFtIHByb3BlcnR5UGF0aCAtIHBhdGggdG8gcHJvcGVydHlcclxuICogQHBhcmFtIHNlcGFyYXRvciAtIHNlcGFyYXRvciBpbiBwcm9wZXJ0eVBhdGhcclxuICogQHBhcmFtIHNraXBVbmRlZmluZWQgLSB0cnVlIGlmIHVuZGVmaW5lZCBzaG91bGQgYmUgc2tpcHBlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBcclxuICogY29uc3QgaXRlbXMgPSBbXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiR2FicmllbFwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiRWxsYVwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiR2FicmllbFwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiSm9lXCJcclxuICogICAgICAgIH1cclxuICogICAgfVxyXG4gKiBdXHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb24ubmFtZVwiKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJHYWJyaWVsXCIsIFwiSm9lXCJdXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb25fbmFtZVwiLCBcIl9cIik7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiR2FicmllbFwiLCBcIkpvZVwiXVxyXG4gKiBjb25zb2xlLmxvZyhtYWtlRmxhdChpdGVtcyksIFwicGVyc29uLm5hbWVcIiwgXCIuXCIsIHRydWUpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkpvZVwiXVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmxhdChsaXN0OiBhbnlbXSwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIHNlcGFyYXRvciA9IFwiLlwiLCBza2lwVW5kZWZpbmVkID0gZmFsc2UpOiBhbnkge1xyXG4gICAgY29uc3QgcHJvcGVydHlMaXN0ID0gcHJvcGVydHlQYXRoLmluZGV4T2Yoc2VwYXJhdG9yKSA+PSAwID8gcHJvcGVydHlQYXRoLnNwbGl0KHNlcGFyYXRvcikgOiBbcHJvcGVydHlQYXRoXTtcclxuXHJcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHlMaXN0LnJlZHVjZSgocHJvcFZhbCwgcHJvcGVydHlOYW1lKSA9PiBwcm9wVmFsID8gcHJvcFZhbFtwcm9wZXJ0eU5hbWVdIDogdW5kZWZpbmVkLCBjdXJyKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICYmIHNraXBVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9XHJcbiAgICAgICAgYWNjLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21GbG9hdEJldHdlZW4obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb21GbG9hdEJldHdlZW4obWluLCBtYXgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUJvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUl0ZW08VD4oLi4uaXRlbXM6IFRbXSk6IFQge1xyXG4gICAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCldO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGUgY2xhc3MgYnkgbmFtZSBhbmQgbGlzdCBvZiBwYXJhbWV0ZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZVxyXG4gKiBAcGFyYW0gYXJncyAtIGNvbnN0cnVjdG9yIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyBjcmVhdGVkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG5hbWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgY29uc3QgdGVtcCA9IE9iamVjdC5jcmVhdGUobmFtZS5wcm90b3R5cGUpO1xyXG4gICAgbmFtZS5hcHBseSh0ZW1wLCBhcmdzKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxGaXJzdEZ1bmN0aW9uKC4uLmZ1bmN0aW9uczogYW55W10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIGZ1bmN0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFRPRE86IFRoaXMgaXMgZGVwcmVjYXRlZC4gTW92ZSB0aGlzIHRvIHZhbGlkYXRvcnNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBNaXNjVmFsaWRhdG9ycyBmcm9tIFwiLi4vdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnNcIjtcclxuXHJcbmNvbnN0IHRpbWVGb3JtYXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICAgSEggIDogXCIoMlswLTNdfFswMV1cXFxcZClcIixcclxuICAgIEggICA6IFwiKDJbMC0zXXxbMDFdP1xcXFxkKVwiLFxyXG4gICAgbW0gIDogXCIoWzAtNV1cXFxcZClcIixcclxuICAgIG0gICA6IFwiKFswLTVdP1xcXFxkKVwiLFxyXG4gICAgTU0gIDogXCIoMFxcXFxkfDFbMC0yXXxcXFxcZClcIixcclxuICAgIE0gICA6IFwiKFsxLTldfDFbMC0yXSlcIixcclxuICAgIHNzICA6IFwiKFswLTVdXFxcXGQpXCIsIC8vIG1tXHJcbiAgICBzICAgOiBcIihbMC01XT9cXFxcZClcIiwgLy8gc3NcclxuICAgIFlZWVk6IFwiKFsxLTldXFxcXGR7MywzfSlcIixcclxuICAgIFlZICA6IFwiKFxcXFxkezIsMn0pXCIsXHJcbiAgICBERCAgOiBcIihbMC0zXVxcXFxkKVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW0EtWl0/W2Etel0rKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXihbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bYS16XSsoW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW2Etel0qKF9bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW0EtWl0qKF9bQS1aXSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXihbYS16XSp8W0EtWl0qKShfW2EtekEtWl0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lRm9ybWF0KHRleHQ6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVGb3JtYXRzKSB7XHJcbiAgICAgICAgaWYgKHRpbWVGb3JtYXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2Uoa2V5LCB0aW1lRm9ybWF0c1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke2Zvcm1hdH0kYCkudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZFBob25lTnVtYmVyfSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBudW0gLSBudW0gdG8gdmFsaWRhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUGhvbmVOdW1iZXIobnVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkUGhvbmVOdW1iZXIobnVtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZEVtYWlsfSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBlbWFpbCAtIGVtYWlsIHRvIHZhbGlkYXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkRW1haWwoZW1haWwpO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCIuLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcIi4vYXJyYXktdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5nQ2hlY2tlcnMgZnJvbSBcIi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG5jb25zdCBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyA9IFwixIXDoMOhw6TDosOjw6XDpsSDxIfEjcSJxI/EmcOow6nDq8OqxJ3EpcOsw63Dr8OuxLXFgsS+xYTFiMOyw7PDtsWRw7TDtcOww7jFm8iZxZ/FocWdxaXIm8Wjxa3DucO6w7zFscO7w7HDv8O9w6fFvMW6xb5cIjtcclxuY29uc3Qgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICAgPSBcImFhYWFhYWFhYWNjY2RlZWVlZWdoaWlpaWpsbG5ub29vb29vb29zc3Nzc3R0dHV1dXV1dW55eWN6enpcIjtcclxuY29uc3QgYWNjZW50ZWRDaGFyYWN0ZXJzICAgICAgPSBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyArIGFjY2VudGVkTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcbmNvbnN0IG5vcm1hbENoYXJhY3RlcnMgICAgICAgID0gbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICsgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4vKiBUT0RPOlxyXG4gICAgc3RhdGljIHVuZGVyc2NvcmUod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGh1bWFuaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkYXNoZXJpemUod29yZCkge1xyXG4gICAgfVxyXG4gICAgLy9kYXNoQ2FzZSA9IGEtYi1jLWQtZVxyXG4gICAgLy9kb3RDYXNlIGEuYy5kLnYucy5kXHJcbiAgICAvL3Bhc2NhbENhc2UgPSBGb29CYXJCYXpcclxuICAgIC8vcGF0aENhc2UgPSBhL2IvYy9kXHJcbiAgICAvL3NuYWtlQ2FzZSA9IGFfYl9jX2RfXHJcbiAgICBzdGF0aWMgaXNVcHBlcih3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaXNMb3dlcih3b3JkKSB7XHJcbiAgICB9XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXdvcmQgfHwgIXdvcmQucmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3b3JkLnJlcGxhY2UoLy4vZywgKGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWNjZW50ZWRDaGFyYWN0ZXJzLmluZGV4T2YoZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gbm9ybWFsQ2hhcmFjdGVyc1tpbmRleF0gOiBlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNDYW1lbENhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpXHJcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKC18X3wgfFxccykrKC4pPy9nLCAoaSwgdSwgZSkgPT4gZSA/IFwiX1wiICsgZSA6IFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTG93ZXJTbmFrZUNhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0NhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNMb3dlclNuYWtlQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLygtfF98IHxcXHMpKyguKT8vZywgKGksIHUsIGUpID0+IGUgPyBcIl9cIiArIGUgOiBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9eXy8sIFwiXCIpXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNMb3dlckNhbWVsQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKShbQS1aXSkvZywgXCIkMSQyXyQzXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChtYXRoLCBzZXAsIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChlKSA9PiBlLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9VcHBlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzVXBwZXJDYW1lbENhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9DYXBpdGFsKHRvTG93ZXJDYW1lbENhc2UodGV4dCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eLi8sIChjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9DYXBpdGFsKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8uLywgKGUpID0+IGUudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0UGFydCh0ZXh0OiBzdHJpbmcsIGRpdmlkZXIgPSBcIiBcIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQuc3BsaXQpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNwbGl0VGV4dCA9IHRleHQuc3BsaXQoZGl2aWRlcik7XHJcblxyXG4gICAgcmV0dXJuIHNwbGl0VGV4dFtzcGxpdFRleHQubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGV4dC5tYXRjaChuZXcgUmVnRXhwKGtleSwgXCJnXCIpKSB8fCBbXSkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHRleHQgLSB0ZXh0IG5lZWQgdG8gYmUgcmVwZWF0XHJcbiAqIEBwYXJhbSBudW1iZXJPZlJlcGV0aXRpb25zIC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICogQGRlcHJlY2F0ZWQgLSB1c2Uge0BsaW5rIFN0cmluZyNyZXBlYXR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHRleHQ6IHN0cmluZywgbnVtYmVyT2ZSZXBldGl0aW9uczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobnVtYmVyT2ZSZXBldGl0aW9ucyArIDEpLmpvaW4odGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3Jkcy5qb2luKFwifFwiKX0pYCwgXCJnXCIpLCBcIlwiKTtcclxufVxyXG5cclxuLy8gVE9ETzogbmVlZCB0byBiZSBmaXhlZFxyXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dDogc3RyaW5nLCB2YWx1ZXM6IFN0cmluZ01hcDxzdHJpbmc+LCBzdGFydCA9IFwie3tcIiwgZW5kID0gXCJ9fVwiKTogc3RyaW5nIHtcclxuICAgIHN0YXJ0ICAgICAgICAgPSBzdGFydC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG4gICAgZW5kICAgICAgICAgICA9IGVuZC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG4gICAgY29uc3QgcmVnZXhwICA9IG5ldyBSZWdFeHAoYCR7c3RhcnR9KC4rPyknJHtlbmR9YCwgXCJnXCIpO1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IHRleHQubWF0Y2gocmVnZXhwKSB8fCBbXTtcclxuXHJcbiAgICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ICAgPSBtYXRjaC5zdWJzdHJpbmcoc3RhcnQubGVuZ3RoLCBtYXRjaC5sZW5ndGggLSBlbmQubGVuZ3RoKVxyXG4gICAgICAgICAgICAudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobWF0Y2gsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVtcHR5TGluZXMoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL15cXHMqJCg/Olxcclxcbj98XFxuKS9nbSwgXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiZXR3ZWVuKHRleHQ6IHN0cmluZywga2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc3RhcnRQb3MgPSB0ZXh0LmluZGV4T2Yoa2V5MSk7XHJcbiAgICBjb25zdCBlbmRQb3MgICA9IHRleHQuaW5kZXhPZihrZXkyKTtcclxuICAgIGlmIChzdGFydFBvcyA8IDAgJiYgZW5kUG9zID49IDApIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCwgZW5kUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW5kUG9zIDwgMCAmJiBzdGFydFBvcyA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHN0YXJ0UG9zICsga2V5MS5sZW5ndGgsIHRleHQubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoc3RhcnRQb3MgKyBrZXkxLmxlbmd0aCwgZW5kUG9zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9jY3VycmVuY2VzKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICh0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoa2V5LCBcImdcIikpIHx8IFtdKS5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZVdoaXRlc3BhY2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1tcXHNcXHVGRUZGXFx4QTBdezIsfS9nLCBcIiBcIik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3dhcENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1xcUy9nLCAoY2hhcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvd2VyQ2FzZSA9IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZSA9PT0gY2hhciA/IGNoYXIudG9VcHBlckNhc2UoKSA6IGxvd2VyQ2FzZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVG9CYXNpY0Zvcm1hdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbGxhcHNlV2hpdGVzcGFjZShyZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dCkudG9Mb3dlckNhc2UoKSkudHJpbSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNjaWlBcnJheSh0aGlzQXJnOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIHRoaXNBcmcpIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsZXR0ZXIuY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9CYXNpY0Zvcm0odGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHRleHQ6IHN0cmluZywgc3Vic3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRleHQgJiYgcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihzdWJzdHJpbmcpID49IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luU2luZ2xlKHByZWZpeDogc3RyaW5nLCBkaXZpZGVyOiBzdHJpbmcsIHBvc3RmaXg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAocG9zdGZpeC5zdGFydHNXaXRoKGRpdmlkZXIpICYmIHByZWZpeC5lbmRzV2l0aChkaXZpZGVyKSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBwb3N0Zml4LnN1YnN0cmluZyhkaXZpZGVyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc3RmaXguc3RhcnRzV2l0aChkaXZpZGVyKSB8fCBwcmVmaXguZW5kc1dpdGgoZGl2aWRlcikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgcG9zdGZpeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJlZml4ICsgZGl2aWRlciArIHBvc3RmaXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIGpvaW59IGluc3RlYWRcclxuICogQHBhcmFtIGRhdGEgLSBkYXRhIHRvIGpvaW5cclxuICogQHBhcmFtIGRlbGltaXRlciAtIGRlbGltaXRlclxyXG4gKiBAcGFyYW0gcHJlZml4IC0gcHJlZml4XHJcbiAqIEBwYXJhbSBwb3N0Zml4IC0gcG9zdGZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5TdHJpbmcoZGF0YTogc3RyaW5nW10sIGRlbGltaXRlciA9IFwiIFwiLCBwcmVmaXggPSBcIlwiLCBwb3N0Zml4ID0gXCJcIik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gam9pbihkYXRhLCBkZWxpbWl0ZXIsIHByZWZpeCwgcG9zdGZpeCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWROdW1iZXIobnVtOiBzdHJpbmcsIHByZWZpeCA9IFwiKzQyMVwiKTogc3RyaW5nIHtcclxuICAgIG51bSA9IG51bS5yZXBsYWNlKC9bKCApLy1dL2csIFwiXCIpO1xyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiK1wiKSkge1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcbiAgICBpZiAobnVtLnN0YXJ0c1dpdGgoXCIwMFwiKSkge1xyXG4gICAgICAgIHJldHVybiBudW0uc3Vic3RyaW5nKDIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiMDlcIikgfHwgbnVtLnN0YXJ0c1dpdGgoXCIwMlwiKSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBudW0uc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1enp5X21hdGNoX3NpbXBsZShwYXR0ZXJuOiBzdHJpbmcsIHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcGF0dGVybklkeCAgICAgID0gMDtcclxuICAgIGxldCBzdHJJZHggICAgICAgICAgPSAwO1xyXG4gICAgY29uc3QgcGF0dGVybkxlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoO1xyXG4gICAgY29uc3Qgc3RyTGVuZ3RoICAgICA9IHN0ci5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKHBhdHRlcm5JZHggIT09IHBhdHRlcm5MZW5ndGggJiYgc3RySWR4ICE9PSBzdHJMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuQ2hhciA9IHBhdHRlcm4uY2hhckF0KHBhdHRlcm5JZHgpXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHN0ckNoYXIgICAgID0gc3RyLmNoYXJBdChzdHJJZHgpXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChwYXR0ZXJuQ2hhciA9PT0gc3RyQ2hhcikge1xyXG4gICAgICAgICAgICArK3BhdHRlcm5JZHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICsrc3RySWR4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXR0ZXJuTGVuZ3RoICE9PSAwICYmIHN0ckxlbmd0aCAhPT0gMCAmJiBwYXR0ZXJuSWR4ID09PSBwYXR0ZXJuTGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUZvckFsbChjb250ZW50OiBzdHJpbmcsIHZhbHVlczogc3RyaW5nW10sIHBsYWNlSG9sZGVyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdmFsdWVzLm1hcCgodmFsdWUpID0+IGNvbnRlbnQucmVwbGFjZShwbGFjZUhvbGRlciwgdmFsdWUpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IGludGVydmFsczogU3RyaW5nTWFwPG51bWJlcj4gPSB7XHJcbiAgICBcInllYXJcIiAgOiAzMTUzNjAwMCxcclxuICAgIFwibW9udGhcIiA6IDI1OTIwMDAsXHJcbiAgICBcIndlZWtcIiAgOiA2MDQ4MDAsXHJcbiAgICBcImRheVwiICAgOiA4NjQwMCxcclxuICAgIFwiaG91clwiICA6IDM2MDAsXHJcbiAgICBcIm1pbnV0ZVwiOiA2MCxcclxuICAgIFwic2Vjb25kXCI6IDEsXHJcbn07XHJcblxyXG5jb25zdCBpbnRlcnZhbEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhpbnRlcnZhbHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVBZ2UodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCgrbmV3IERhdGUoKSAtICtuZXcgRGF0ZSh2YWx1ZSkpIC8gMTAwMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAyOSkgeyAvLyBsZXNzIHRoYW4gMzAgc2Vjb25kcyBhZ28gd2lsbCBzaG93IGFzICdKdXN0IG5vdydcclxuICAgICAgICAgICAgcmV0dXJuIFwiSnVzdCBub3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnRlcnZhbF0gb2YgaW50ZXJ2YWxFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBNYXRoLmZsb29yKHNlY29uZHMgLyBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y291bnRlcn0gJHtrZXl9IGFnb2A7IC8vIHNpbmd1bGFyICgxIGRheSBhZ28pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVyfSAke2tleX1zIGFnb2A7IC8vIHBsdXJhbCAoMiBkYXlzIGFnbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGU6IERhdGUsIHBhdHRlcm46IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICh0aW1lOiBudW1iZXIpOiBzdHJpbmcgPT4gdGltZSA8IDEwID8gXCIwXCIgKyB0aW1lIDogXCJcIiArIHRpbWU7XHJcblxyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFwiKEREfE1NfFlZWVl8WVlZfFlZfEhIfG1tfFNTKVwiLCBcImdcIik7XHJcbiAgICBjb25zdCBERCAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIGNvbnN0IE1NICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSk7XHJcbiAgICBjb25zdCBZWVlZICA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiXCI7XHJcbiAgICBjb25zdCBZWVkgICA9IFlZWVkuc3Vic3RyKDEsIDQpO1xyXG4gICAgY29uc3QgWVkgICAgPSBZWVkuc3Vic3RyKDEsIDQpO1xyXG4gICAgY29uc3QgSEggICAgPSB0b1N0cmluZyhkYXRlLmdldEhvdXJzKCkpO1xyXG4gICAgY29uc3QgbW0gICAgPSB0b1N0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICBjb25zdCBTUyAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKTtcclxuXHJcbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKHJlZ2V4LCAoZSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiRERcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBERDtcclxuICAgICAgICAgICAgY2FzZSBcIk1NXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTU07XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVlZXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWVlZWTtcclxuICAgICAgICAgICAgY2FzZSBcIllZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZWTtcclxuICAgICAgICAgICAgY2FzZSBcIllZXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJISFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEhIO1xyXG4gICAgICAgICAgICBjYXNlIFwibW1cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtbTtcclxuICAgICAgICAgICAgY2FzZSBcIlNTXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1M7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlOiBEYXRlLCBvcHQ6IHsgbXM6IG51bWJlciwgczogbnVtYmVyLCBtOiBudW1iZXIsIGg6IG51bWJlciB9KTogRGF0ZSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc05hTihvcHQubXMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHMob3B0Lm1zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LnMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKG9wdC5zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0Lm0pKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKG9wdC5tKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LmgpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhvcHQuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydE9mVGhlRGF5KGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIHJldHVybiBzZXREYXRlKGRhdGUsIHtcclxuICAgICAgICBtczogMCxcclxuICAgICAgICBzIDogMCxcclxuICAgICAgICBtIDogMCxcclxuICAgICAgICBoIDogMCxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kT2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge1xyXG4gICAgICAgIG1zOiA5OTksXHJcbiAgICAgICAgcyA6IDU5LFxyXG4gICAgICAgIG0gOiA1OSxcclxuICAgICAgICBoIDogMjMsXHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9taXNjLXZhbGlkYXRvcnNcIjtcclxuIiwiY29uc3QgdmFsaWRFbWFpbFJlZ2V4ICAgICAgID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbmNvbnN0IHZhbGlkUGhvbmVOdW1iZXJSZWdleCA9IC9eKFsrXXwwMCk/WyhdP1swLTldezMsNH1bKV0/Wy1cXHMuXT9bMC05XXsyLDN9Wy1cXHMuXT9bMC05XXsyLDZ9KFstXFxzLl0/WzAtOV17M30pPyQvaW07XHJcblxyXG5mdW5jdGlvbiB0eXBlT2YoYXJnOiB1bmtub3duKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgYXJnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhhcmc6IGFueSk6IGFyZyBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcInN0cmluZ1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJvYmplY3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGFyZzogYW55KTogYXJnIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oYXJnOiBhbnkpOiBhcmcgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwiYm9vbGVhblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCIgJiYgYXJnICUgMSA9PT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmxvYXQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxICE9PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnPzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwidW5kZWZpbmVkXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChvYmopICYmXHJcbiAgICAgICAgICAgIG9iai5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICBpc09iamVjdChvYmouc3R5bGUpICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5vd25lckRvY3VtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDAgJiYgL15bXFxzXFx4YTBdKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUGhvbmVOdW1iZXIobnVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghbnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZFBob25lTnVtYmVyUmVnZXgudGVzdChudW0udHJpbSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZEVtYWlsUmVnZXgudGVzdChlbWFpbC50cmltKCkpO1xyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFdFQiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gVVRJTFNcclxuXHJcbmV4cG9ydCB7IEFycmF5VXRpbHMgYXMgYXJyYXlzIH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9BcnJheVV0aWxzXCI7XHJcbmV4cG9ydCB7IE1hdGhVdGlscyBhcyBtYXRoIH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NYXRoVXRpbHNcIjtcclxuZXhwb3J0IHsgRG9tVXRpbHMgYXMgZG9tIH0gZnJvbSBcIi4vdXRpbHMvRG9tVXRpbHNcIjtcclxuZXhwb3J0IHsgTWlzY1V0aWxzIGFzIG1pc2MgfSBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL01pc2NVdGlsc1wiO1xyXG5leHBvcnQgeyBPYmplY3RVdGlscyBhcyBvYmplY3QgfSBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL09iamVjdFV0aWxzXCI7XHJcbmV4cG9ydCB7IFN0cmluZ1V0aWxzIGFzIHN0cmluZyB9IGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvU3RyaW5nVXRpbHNcIjtcclxuZXhwb3J0ICogYXMgdGltZSBmcm9tIFwiLi91dGlscy90aW1lLXV0aWxzXCI7XHJcblxyXG5leHBvcnQgeyBTbG92YWtTdGVtbWVyIGFzIHN0ZW1tZXIgfSBmcm9tIFwiLi9taXNjL1Nsb3Zha1N0ZW1tZXJcIjtcclxuXHJcbi8vIERPTVxyXG5cclxuZXhwb3J0IHsgQ2hlY2tlcnMgYXMgY2hlY2sgfSBmcm9tIFwiLi9kb20vZGVwcmVjYXRlZC9DaGVja2Vyc1wiO1xyXG5leHBvcnQgeyBDYW52YXNNYW5hZ2VyIGFzIGNhbnZhcyB9IGZyb20gXCIuL2RvbS9jYW52YXMtbWFuYWdlclwiO1xyXG5leHBvcnQgeyBEb21HZXQgYXMgZ2V0IH0gZnJvbSBcIi4vZG9tL2RvbS1nZXRcIjtcclxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyg4MDIyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=