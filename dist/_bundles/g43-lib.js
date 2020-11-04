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
    var size = sizeInBytes / Math.pow(1024, power); // size in new units
    var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
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
__exportStar(__webpack_require__(4115), exports);
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
        return Misc.isIn.apply(Misc, __spreadArrays([obj], data));
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
/**
 * @deprecated use {@link capitalize} instead
 */
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
var slovak_stemmer_1 = __webpack_require__(4115);
Object.defineProperty(exports, "stemmer", ({ enumerable: true, get: function () { return slovak_stemmer_1.SlovakStemmer; } }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9HVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29tcG9uZW50cy9maWxlLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvZy1tYXAudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMva2V5LXZhbHVlLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvbnVtYmVyLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9jb25maWcvZ3Rvb2xzLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2RlcHJlY2F0ZWQuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL2ZpbmFsLWNsYXNzLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZGVjb3JhdG9ycy9tYXBwZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kZWNvcmF0b3JzL3NpbmdsZXRvbi5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RlY29yYXRvcnMvd2F0Y2guZGVjb3JhdG9yLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vY2FudmFzLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9jYW52YXMtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2RvbS9kZXByZWNhdGVkL0NoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9kb20vZGVwcmVjYXRlZC9jaGVja2Vycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZG9tL2RvbS1nZXQudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2VuY29kaW5ncy5lbnVtLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9lbnVtcy9maWxlLXR5cGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2h0dHAtc3RhdHVzLWNvZGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL2VudW1zL2tleXMuZW51bS50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21hdGgvdmVjdG9yMmYudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL21pc2MvYWpheC50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9maWxlLXNpemUtZm9ybWF0dGVyLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9taXNjL3J1bnRpbWUtdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbWlzYy9zbG92YWstc3RlbW1lci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvbW9kZWxzL2NvbG9yLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvZ2VuZGVyLm1vZGVsLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0LmZpeHR1cmUudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3Rlc3RzL2Fic3RyYWN0Lm1hcHBlci50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdGVzdHMvcGFnaW5hdGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9Eb21VdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvRmlsZVV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9hcnJheS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvY29sb3ItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvZGVwcmVjYXRlZC9NYXRoVXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL2RlcHJlY2F0ZWQvTWlzY1V0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL09iamVjdFV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL1N0cmluZ0NoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9odG1sLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9tYXRoLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9taXNjLXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9uZXQtY2xpZW50LXV0aWxzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9vYmplY3QtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3JhbmRvbS11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvcmVmbGVjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9HNDNMaWIvLi9zcmMvdXRpbHMvc3RyaW5nLWNoZWNrZXJzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy91dGlscy9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3V0aWxzL3RpbWUtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3ZhbGlkYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRzQzTGliLy4vc3JjL3ZhbGlkYXRvcnMvbWlzYy12YWxpZGF0b3JzLnRzIiwid2VicGFjazovL0c0M0xpYi8uL3NyYy93ZWIudHMiLCJ3ZWJwYWNrOi8vRzQzTGliL2lnbm9yZWR8ZnMiLCJ3ZWJwYWNrOi8vRzQzTGliL2lnbm9yZWR8cGF0aCIsIndlYnBhY2s6Ly9HNDNMaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRzQzTGliL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLGlEQUF1QjtBQUN2QixpREFBc0I7QUFDdEIsaURBQXlCO0FBRXpCLGlEQUE2QjtBQUU3QixpREFBaUQ7QUFDakQsaURBQXVDO0FBRXZDLGlEQUE2QjtBQUM3QixpREFB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QUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUksR0FBRyxDQUFDLE1BQWMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUksR0FBRyxDQUFDLE1BQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBSSxHQUFHLENBQUMsTUFBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxNQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdC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RUFBRTtRQUM1QixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtRQUN6QixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQ3hCLEVBQUU7UUFDQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxHQUFHLENBQUM7UUFDUCxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BCLFFBQVE7WUFDUixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDM0IsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1AsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVU7WUFDOUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVO1lBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVTtZQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVU7WUFDakMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVO1lBQ2pD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QixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDekIsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDVCxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ0osYUFBYTtnQkFDYixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxD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LEtBQUssQ0FBQztLQUNoQjtJQUVELE9BQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFORCxnREFNQztBQUVELFNBQWdCLFlBQVksQ0FBQyxLQUFhO0lBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBTkQsb0NBTUM7Ozs7Ozs7Ozs7QUN2RkQsK0RBQStEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELFFBQVE7QUFFUiw2Q0FBcUU7QUFBNUQsK0dBQVUsUUFBVTtBQUM3Qiw0Q0FBaUU7QUFBeEQsMkdBQVMsUUFBUTtBQUMxQiwyQ0FBbUQ7QUFBMUMsd0dBQVEsUUFBTztBQUN4Qiw0Q0FBaUU7QUFBeEQsMkdBQVMsUUFBUTtBQUMxQiw4Q0FBdUU7QUFBOUQsaUhBQVcsUUFBVTtBQUM5Qiw4Q0FBdUU7QUFBOUQsaUhBQVcsUUFBVTtBQUM5Qix1REFBMkM7QUFFM0MsaURBQWlFO0FBQXhELHVIQUFhLFFBQVc7QUFFakMsTUFBTTtBQUVOLDJDQUE4RDtBQUFyRCwwR0FBUSxRQUFTO0FBQzFCLGlEQUErRDtBQUF0RCxzSEFBYSxRQUFVO0FBQ2hDLDBDQUE4QztBQUFyQyxxR0FBTSxRQUFPOzs7Ozs7OztBQ2xCdEIsZTs7Ozs7OztBQ0FBLGU7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZzQzLWxpYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRzQzTGliXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkc0M0xpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHNDNMaWJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgKiBmcm9tIFwiLi9ub2RlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dlYlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZy9ndG9vbHMtY29uZmlnLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZGVjb3JhdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2NhbnZhcy11dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZGVwcmVjYXRlZC9jaGVja2Vyc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZG9tLWdldFwiO1xyXG5cclxuLy8gVE9ETyBub3Qgd29yayBvbiBiYWNrZW5kXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2RvbS9lbGVtZW50LWJ1aWxkZXJcIjtcclxuXHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2VudW1zXCI7XHJcblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9lcnJvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZhbGlkYXRvcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2NcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vbWF0aFwiO1xyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9waHlzaWNzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5tYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvcGFnaW5hdGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi91dGlsc1wiO1xyXG4iLCIvLyBVVElMU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9TdHJpbmdDaGVja2Vyc1wiO1xyXG5cclxuLy8gTU9ERUxTXHJcblxyXG5leHBvcnQgeyBHZW5kZXJUeXBlLCBHZW5kZXIgfSBmcm9tIFwiLi9tb2RlbHMvZ2VuZGVyLm1vZGVsXCI7XHJcblxyXG4vLyBFTlVNU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMvZW5jb2RpbmdzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMvZmlsZS10eXBlcy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VudW1zL2h0dHAtc3RhdHVzLWNvZGVzLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZW51bXMva2V5cy5lbnVtXCI7XHJcblxyXG4vLyBDT01QT05FTlRTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL2tleS12YWx1ZS1jb3VudGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHMvbnVtYmVyLWNvdW50ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9wYWdpbmF0b3JcIjtcclxuXHJcbi8vIE1BVEhTXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoL3ZlY3RvcjJmXCI7XHJcblxyXG4vLyBDT05GSUdcclxuXHJcbmV4cG9ydCB7IGluaXRDb25maWcgfSBmcm9tIFwiLi9jb25maWcvZ3Rvb2xzLWNvbmZpZ1wiO1xyXG5cclxuLy8gSU5URVJGQUNFU1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXMva2V5LXZhbHVlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlcy9zaXplLmludGVyYWZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXMvcG9pbnQuaW50ZXJhZmFjZVwiO1xyXG5cclxuLy8gVEVTVFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3RzL2Fic3RyYWN0LWRhdGFiYXNlLmZpeHR1cmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0cy9hYnN0cmFjdC5tYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdHMvcGFnaW5hdGUubW9kZWxcIjtcclxuIiwiaW1wb3J0IHsgRmlsZVR5cGVzIH0gZnJvbSBcIi4uL2VudW1zL2ZpbGUtdHlwZXMuZW51bVwiO1xyXG5cclxuLyoqXHJcbiAqICBGaWxlTWFuYWdlciBpcyBjbGFzcyB1c2VkIGZvciBvcGVuIGFuZCBzYXZlIGZpbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcml2YXRlIGlucHV0IHVzZWQgZm9yIG9wZW5pbmcgc3lzdGVtIHdpbmRvdyBmb3IgdXBsb2FkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgaW5wdXQgdXNlZCBmb3Igb3BlbmluZyBzeXN0ZW0gd2luZG93IGZvciBkb3dubG9hZCBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbms6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZpbGVzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0ZXh0IGNvbnRlbnQgaW50byBmaWxlIHdpdGggc3BlY2lmaWMgZXh0ZW5zaW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIGZpbGUgbmFtZVxyXG4gICAgICogQHBhcmFtIHRleHQgZmlsZSBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBmaWxlIHtAbGluayBGaWxlVHlwZXN9LiBEZWZhdWwgdmFsdWUgaXMge0BsaW5rIEZpbGVUeXBlcy5UWFR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlRmlsZShuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgdHlwZTogRmlsZVR5cGVzID0gRmlsZVR5cGVzLlRYVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3RleHRdLCB7dHlwZX0pKTtcclxuICAgICAgICB0aGlzLmxpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluay5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSBpbWFnZSBpbnRvIGZpbGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBpbWFnZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW1hZ2UgaW1hZ2UgZWxlbWVudCBvciBwYXRoIHRvIGltYWdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlSW1hZ2UobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nIHwgSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5ocmVmICAgICA9IHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGltYWdlIDogaW1hZ2Uuc3JjO1xyXG4gICAgICAgIHRoaXMubGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5rLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2UoZnVuYzogKHJlc3VsdDogYW55LCBmaWxlTmFtZTogc3RyaW5nKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgICAgICAgICAgICAgID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkICAgICAgICAgICAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjICAgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIGZ1bmMoaW1hZ2UsIGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBmaWxlIHVzaW5nIHN5c3RlbSBmaWxlIHBpY2tlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmdW5jIGxvYWRpbmcgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKGZ1bmM6IChyZXN1bHQ6IGFueSwgZmlsZXM6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSAoZS50YXJnZXQgYXMgYW55KS5maWxlcztcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiBmdW5jKHJlYWRlci5yZXN1bHQsIGZpbGVzKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBiaW5hcnkgZmlsZSB1c2luZyBzeXN0ZW0gZmlsZSBwaWNrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBsb2FkaW5nIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQmluYXJ5RmlsZShmdW5jOiAocmVzdWx0OiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyAgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gZnVuYyhyZWFkZXIucmVzdWx0LCBmaWxlc1swXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdMb2dnZXJJbnN0YW5jZSB7XHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0Pzogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KFwibG9nXCIsIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3YXJuKC4uLm1lc3NhZ2VzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJ3YXJuXCIsIHRoaXMuY29udGV4dCwgLi4ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvciguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBHTG9nZ2VyLnByaW50KFwiZXJyb3JcIiwgdGhpcy5jb250ZXh0LCAuLi5tZXNzYWdlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTG9nZ2VyIGV4dGVuZHMgR0xvZ2dlckluc3RhbmNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGluZShzdGVwcyA9IDIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlcnJvci5zdGFjay5zcGxpdChcIlxcblwiKVtzdGVwc10udHJpbSgpLm1hdGNoKC9cXCguKlxcKS8pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhdCBcIiArIHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNraXBDb250ZXh0cyA9IFtcInJlbmRlcldvcmxkU3RhdGljXCIsIFwiQ2FudmFzRGlyZWN0aXZlXCIsIFwiV29ybGRSZW5kZXJlclNlcnZpY2VcIiwgXCJ2aWV3cG9ydFwiLCBcIldvcmxkSW5wdXRTZXJ2aWNlXCJdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc2tpcFJlZ2V4cCAgID0gbmV3IFJlZ0V4cChgJHtHTG9nZ2VyLnNraXBDb250ZXh0cy5qb2luKFwifFwiKX1gLCBcImdpXCIpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0Pzogc3RyaW5nIHwgeyBjb25zdHJ1Y3RvcjogeyBuYW1lOiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmludCh0eXBlOiBcImxvZ1wiIHwgXCJ3YXJuXCIgfCBcImVycm9yXCIsIGNvbnRleHQ6IHN0cmluZyB8IHsgY29uc3RydWN0b3I6IHsgbmFtZTogc3RyaW5nIH0gfSA9IFwiXCIsIC4uLmRhdGE6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVhbENvbnRleHQgPSBjb250ZXh0ICYmICh0eXBlb2YgY29udGV4dCA9PT0gXCJzdHJpbmdcIiA/IGNvbnRleHQgOiBjb250ZXh0Py5jb25zdHJ1Y3Rvcj8ubmFtZSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ICAgICAgPSByZWFsQ29udGV4dCAmJiByZWFsQ29udGV4dC5tYXRjaChHTG9nZ2VyLnNraXBSZWdleHApO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmVmaXggPSByZWFsQ29udGV4dCA/IGBbJHtyZWFsQ29udGV4dH1dIGAgOiBcIlwiO1xyXG4gICAgICAgIGNvbnNvbGVbdHlwZV0ocHJlZml4LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZyhtZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSwgY29udGV4dD86IHN0cmluZyB8IHsgY29uc3RydWN0b3I6IHsgbmFtZTogc3RyaW5nIH0gfSk6IHZvaWQge1xyXG4gICAgICAgIEdMb2dnZXIucHJpbnQoXCJsb2dcIiwgY29udGV4dCwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdNYXA8VCwgUz4gZXh0ZW5kcyBNYXA8VCwgUz4ge1xyXG4gICAgcHVibGljIGdldChrZXk6IFQsIGRlZmF1bHRWYWx1ZT86IFMpOiBTIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSkgfHwgZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPckNyZWF0ZShrZXk6IFQsIGRlZmF1bHRWYWx1ZTogUyk6IFMgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtbWFuYWdlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nLWxvZ2dlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nLW1hcFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9rZXktdmFsdWUtY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9udW1iZXItY291bnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYWdpbmF0b3JcIjtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBTaW1wbGVXcmFwcGVyIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlQ291bnRlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVzdWx0czogU2ltcGxlV3JhcHBlcltdICAgICAgICA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGFkZChpdGVtOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXRlbSBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW1dID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbCgpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3BOKGNvdW50OiBudW1iZXIpOiBTaW1wbGVXcmFwcGVyW10ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzLnNsaWNlKDAsIGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRoaXMuZGF0YVtrZXldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE51bWJlckNvdW50ZXIge1xyXG4gICAgcHJpdmF0ZSBtaW4gICAgICAgICAgICAgICAgICAgICAgICA9IEluZmluaXR5O1xyXG4gICAgcHJpdmF0ZSBtYXggICAgICAgICAgICAgICAgICAgICAgICA9IC1JbmZpbml0eTtcclxuICAgIHByaXZhdGUgc3VtICAgICAgICAgICAgICAgICAgICAgICAgPSAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBudW1iZXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBhZGQodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubnVtYmVycy5wdXNoKHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbih0aGlzLm1pbiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMubWF4ID0gTWF0aC5tYXgodGhpcy5tYXgsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnN1bSArPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWluKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF2ZXJhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW0gLyB0aGlzLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBbGwoaXRlbXM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR1Rvb2xzQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9ndG9vbHMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yPFQgPSB1bmtub3duPiB7XHJcbiAgICBwcml2YXRlIGFjdExpc3Q6IFRbXTtcclxuICAgIHByaXZhdGUgYWN0dWFsUGFnZSA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhc3RQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWxsSXRlbXM6IFRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW1zUGVyUGFnZSA9IEdUb29sc0NvbmZpZy5QQUdFX0xJTUlUKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IGFsbEl0ZW1zID8gTWF0aC5mbG9vcihhbGxJdGVtcy5sZW5ndGggLyB0aGlzLml0ZW1zUGVyUGFnZSkgOiAwO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCAgPSB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFjdHVhbFBhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxQYWdlICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFnZXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UGFnZSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZ2VzQXJvdW5kKCk6IG51bWJlcltdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm4gWzEsIDIsIDMsIDQsIDVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlID4gdGhpcy5sYXN0UGFnZSAtIDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgLSAzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSAtIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlIC0gMSxcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlICsgMSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSAtIDEsXHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsUGFnZSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMSxcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMixcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlICsgMyxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMaXN0KCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub05leHQoKTogVFtdIHtcclxuICAgICAgICBpZiAodGhpcy5hY3R1YWxQYWdlIDwgdGhpcy5sYXN0UGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbFBhZ2UrKztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvdFRvKHBhZ2U6IG51bWJlcik6IFRbXSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPj0gMCAmJiBwYWdlIDw9IHRoaXMubGFzdFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlID0gcGFnZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9QcmV2KCk6IFRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsUGFnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxQYWdlLS07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvRmlyc3QoKTogVFtdIHtcclxuICAgICAgICB0aGlzLmFjdHVhbFBhZ2UgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVDYWxjTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTGFzdCgpOiBUW10ge1xyXG4gICAgICAgIHRoaXMuYWN0dWFsUGFnZSA9IHRoaXMubGFzdFBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZUNhbGNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVDYWxjTGlzdCgpOiBUW10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ICA9IHRoaXMuYWN0dWFsUGFnZSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuYWN0TGlzdCA9IHRoaXMuYWxsSXRlbXMgPyB0aGlzLmFsbEl0ZW1zLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlKSA6IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RMaXN0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdUb29sc0NvbmZpZ0ludGVyZmFjZSB9IGZyb20gXCIuL2d0b29scy1jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5sZXQgY29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2U7XHJcblxyXG5jb25zdCBjaGVja0NvbmZpZyA9ICgpOiBHVG9vbHNDb25maWdJbnRlcmZhY2UgPT4ge1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBVUkxfQVBJICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBMQU5HVUFHRSAgOiBcIlwiLFxyXG4gICAgICAgICAgICBWRVJTSU9OICAgOiBcIlwiLFxyXG4gICAgICAgICAgICBQQUdFX0xJTUlUOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjbGFzcyBDbGFzc093bkNvbmZpZyBleHRlbmRzIENsYXNzR1Rvb2xzQ29uZmlnIGltcGxlbWVudHMgT3duQ29uZmlnSW50ZXJmYWNlIHtcclxuICogICAgIHB1YmxpYyBuYW1lID0gXCJcIjtcclxuICogfVxyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgT3duQ29uZmlnID0gbmV3IENsYXNzT3duQ29uZmlnKCk7XHJcbiAqXHJcbiAqIEBzZWUgR1Rvb2xzQ29uZmlnSW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NHVG9vbHNDb25maWcgaW1wbGVtZW50cyBHVG9vbHNDb25maWdJbnRlcmZhY2Uge1xyXG4gICAgcHVibGljIGdldCBVUkxfQVBJKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZmlnKCkuVVJMX0FQSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFBBR0VfTElNSVQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5QQUdFX0xJTUlUO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgTEFOR1VBR0UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5MQU5HVUFHRTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFZFUlNJT04oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2hlY2tDb25maWcoKS5WRVJTSU9OO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWcoYXBwQ29uZmlnOiBHVG9vbHNDb25maWdJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbmZpZyA9IGFwcENvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdUb29sc0NvbmZpZyA9IG5ldyBDbGFzc0dUb29sc0NvbmZpZygpO1xyXG4iLCJleHBvcnQgY29uc3QgQUxMT1dfSU1BR0VTX09OTFlfV0lUSF9BTExPV0VEX0NPUlMgPSB0cnVlO1xyXG5cclxuIiwiaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiLi4vdHlwZXMvcHJvcGVydHktZGVjb3JhdG9yLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXByZWNhdGVkKHZhbHVlPzogc3RyaW5nKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKTogYW55ID0+IHtcclxuICAgICAgICBjb25zdCBvbGRNZXRob2QgID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gKC4uLmFyZ3M6IGFueVtdKTogYW55ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTWV0aG9kIFwiICsgdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgKyBcIi5cIiArIHByb3BlcnR5S2V5ICsgXCIgaXMgZGVwcmVjYXRlZC4gXCIgKyAodmFsdWUgfHwgXCJcIikpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZE1ldGhvZC5hcHBseSh0YXJnZXQsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBGaW5hbENsYXNzPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+Pih0YXJnZXQ6IFQpOiBUIHtcclxuICAgIHJldHVybiBjbGFzcyBGaW5hbCBleHRlbmRzIHRhcmdldCB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcudGFyZ2V0ICE9PSBGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluaGVyaXQgZnJvbSBmaW5hbCBjbGFzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2RlcHJlY2F0ZWQuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbmFsLWNsYXNzLmRlY29yYXRvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBwZXIuZGVjb3JhdG9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZXRvbi5kZWNvcmF0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2F0Y2guZGVjb3JhdG9yXCI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBNYXBwZXIocGFyYW1zOiB7IG9uR2V0PzogKG9sZFZhbHVlOiBhbnkpID0+IGFueSwgb25TZXQ/OiAob2xkVmFsdWU6IGFueSkgPT4gYW55IH0gPSB7fSwgcHJlZml4ID0gXCJfXCIpOiBhbnkge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIGlmICghZGVsZXRlIHRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld05hbWUgICAgICAgICAgICAgICAgICAgICAgICA9IHByZWZpeCArIGtleTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uR2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gKCkgPT4gcGFyYW1zLm9uR2V0ICYmIHBhcmFtcy5vbkdldCh0YXJnZXRbbmV3TmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSAoKSA9PiB0YXJnZXRbbmV3TmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uU2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKG5ld1ZhbDogYW55KSA9PiB0YXJnZXRbbmV3TmFtZV0gPSBwYXJhbXMub25TZXQgJiYgcGFyYW1zLm9uU2V0KG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9ICh2YWx1ZSkgPT4gdGFyZ2V0W25ld05hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcclxuICAgIH07XHJcbn1cclxuIiwiY29uc3QgaW5zdGFuY2VzOiB7IFtjbGFzc05hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2luZ2xldG9uPFQgZXh0ZW5kcyBuZXcoLi4uYXJnczogYW55W10pID0+IGFueT4oY29uc3RydWN0b3I6IFQpOiBhbnkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcclxuXHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VzW2NsYXNzTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIG9mIFwiICsgY2xhc3NOYW1lICsgXCIgaXMgYWxyZWFkeSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc3RhbmNlc1tjbGFzc05hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSBcIi4uL3R5cGVzL3Byb3BlcnR5LWRlY29yYXRvci50eXBlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XHJcbiAgICBlbnVtZXJhYmxlPzogYm9vbGVhbjtcclxuICAgIGNvbmZpZ3VyYWJsZT86IGJvb2xlYW47XHJcbiAgICBwcmVmaXg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBXYXRjaChvblNldD86IChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSA9PiBhbnksIG9wdGlvbnM/OiBXYXRjaE9wdGlvbnMpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICBjb25zdCBwcmVmaXggPSBvcHRpb25zICYmIG9wdGlvbnMucHJlZml4IHx8IFwiX1wiO1xyXG5cclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gKG5ld1ZhbDogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvblNldCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3ByZWZpeCArIGtleV0gPSBvblNldChuZXdWYWwsIHRhcmdldFtwcmVmaXggKyBrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJlZml4ICsga2V5XSA9IG5ld1ZhbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWRlbGV0ZSB0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRhcmdldFtwcmVmaXggKyBrZXldLFxyXG4gICAgICAgICAgICBzZXQgICAgICAgICA6IHNldHRlcixcclxuICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmVudW1lcmFibGUgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5lbnVtZXJhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmNvbmZpZ3VyYWJsZSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLmNvbmZpZ3VyYWJsZSA6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5vdEJyb3dzZXJFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2NhbENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXJnMTogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50LCBhcmcyOiBudW1iZXIsIGFyZzM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmcxIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IGFyZzE7XHJcbiAgICAgICAgICAgIGlmIChhcmcyICYmIGFyZzMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzU2l6ZShhcmcyLCBhcmczKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJnMSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENhbnZhcyA9IENhbnZhc01hbmFnZXIuaW1hZ2VUb0NhbnZhcyhhcmcxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZzEgJiYgYXJnMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKGFyZzEsIGFyZzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYWxDb250ZXh0ID0gdGhpcy5sb2NhbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGVhckNhbnZhcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q2FudmFzU2l6ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpOiB2b2lkIHtcclxuICAgICAgICBjYW52YXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNoYWRvdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJsdXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciAgID0gY29sb3I7XHJcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgICAgPSBibHVyO1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0geDtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbWFnZVRvQ2FudmFzKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoICA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY3R4ICAgICA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRMaW5lRGFzaChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgLi4uYXJnczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIGN0eC5zZXRMaW5lRGFzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGN0eC5zZXRMaW5lRGFzaChhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjYWxjVGV4dFdpZHRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2YWx1ZTogc3RyaW5nLCBmb250Pzogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoZm9udCkge1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IGZvbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHZhbHVlKS53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbnZhc1RvSW1hZ2UoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZm9ybWF0ID0gXCJpbWFnZS9wbmdcIik6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlICA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyAgICA9IGNhbnZhcy50b0RhdGFVUkwoZm9ybWF0KTtcclxuICAgICAgICBpbWFnZS53aWR0aCAgPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gQ2FudmFzTWFuYWdlci5jYW52YXNUb0ltYWdlKHRoaXMubG9jYWxDYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaGFkb3coeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJsdXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ29udGV4dCkge1xyXG4gICAgICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyh0aGlzLmxvY2FsQ29udGV4dCwgeCwgeSwgY29sb3IsIGJsdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhmb3JtYXQgPSBcImltYWdlL3BuZ1wiKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5sb2NhbENhbnZhcy50b0RhdGFVUkwoZm9ybWF0KSwgXCJfYmxhbmtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ2FudmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ29udGV4dCkge1xyXG4gICAgICAgICAgICBDYW52YXNNYW5hZ2VyLmNsZWFyQ2FudmFzKHRoaXMubG9jYWxDb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENhbnZhc1NpemUod2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTogdm9pZCB7XHJcbiAgICAgICAgQ2FudmFzTWFuYWdlci5zZXRDYW52YXNTaXplKHRoaXMubG9jYWxDYW52YXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRUbyhlbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxvY2FsQ2FudmFzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMmYgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IyZlwiO1xyXG5pbXBvcnQgeyBDYW52YXNNYW5hZ2VyIH0gZnJvbSBcIi4vY2FudmFzLW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2hlY2tlcnMgfSBmcm9tIFwiLi9kZXByZWNhdGVkL0NoZWNrZXJzXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzU2hhZG93Q29uZmlnIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBibHVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzQ29uZmlnIHtcclxuICAgIHNoYWRvdz86IENhbnZhc1NoYWRvd0NvbmZpZztcclxuICAgIHBvc2l0aW9uPzogbnVtYmVyIHwgVmVjdG9yMmY7XHJcbiAgICBjZW50ZXI/OiBib29sZWFuO1xyXG4gICAgc2l6ZT86IG51bWJlciB8IFZlY3RvcjJmO1xyXG4gICAgYmdJbWFnZT86IHtcclxuICAgICAgICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB3OiBudW1iZXI7XHJcbiAgICAgICAgaDogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIGZpbGw6IGJvb2xlYW47XHJcbiAgICBmaWxsQ29sb3I6IHN0cmluZztcclxuICAgIGRyYXc6IGJvb2xlYW47XHJcbiAgICBib3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgcmFkaXVzOiBudW1iZXIgfCB7XHJcbiAgICAgICAgdGw6IG51bWJlcjtcclxuICAgICAgICB0cjogbnVtYmVyO1xyXG4gICAgICAgIGJyOiBudW1iZXI7XHJcbiAgICAgICAgYmw6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBsaW5lQ2FwOiBcImJ1dHRcIiB8IFwicm91bmRcIiB8IFwic3F1YXJlXCI7XHJcbiAgICBqb2luVHlwZTogXCJiZXZlbFwiIHwgXCJyb3VuZFwiIHwgXCJtaXRlclwiO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgc3RhcnRBbmdsZTogbnVtYmVyO1xyXG4gICAgZW5kQW5nbGU6IG51bWJlcjtcclxuICAgIG9mZnNldDogYW55O1xyXG4gICAgbGluZURhc2g6IG51bWJlcltdO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTaGFkb3coY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb25maWc/OiBDYW52YXNTaGFkb3dDb25maWcpOiB2b2lkIHtcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyhjb250ZXh0LCBjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5jb2xvciwgY29uZmlnLmJsdXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBDYW52YXNNYW5hZ2VyLnNldFNoYWRvdyhjb250ZXh0LCAwLCAwLCBcImJsYWNrXCIsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzKHJlczogQ2FudmFzQ29uZmlnKTogdm9pZCB7XHJcbiAgICBpZiAocmVzLnNoYWRvdykge1xyXG4gICAgICAgIHNldFNoYWRvdyhyZXMuY3R4LCByZXMuc2hhZG93KTtcclxuICAgIH1cclxuICAgIGlmIChyZXMuYmdJbWFnZSkge1xyXG4gICAgICAgIHJlcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHJlcy5jdHguY2xpcCgpO1xyXG4gICAgICAgIGlmIChyZXMuYmdJbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVzLmN0eC5kcmF3SW1hZ2UocmVzLmJnSW1hZ2UsIHJlcy54LCByZXMueSwgcmVzLndpZHRoLCByZXMuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuY3R4LmRyYXdJbWFnZShyZXMuYmdJbWFnZS5pbWcsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS54LFxyXG4gICAgICAgICAgICAgICAgcmVzLmJnSW1hZ2UueSxcclxuICAgICAgICAgICAgICAgIHJlcy5iZ0ltYWdlLncsXHJcbiAgICAgICAgICAgICAgICByZXMuYmdJbWFnZS5oLFxyXG4gICAgICAgICAgICAgICAgcmVzLngsXHJcbiAgICAgICAgICAgICAgICByZXMueSxcclxuICAgICAgICAgICAgICAgIHJlcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH0gZWxzZSBpZiAocmVzLmZpbGwpIHtcclxuICAgICAgICByZXMuY3R4LmZpbGxTdHlsZSA9IHJlcy5maWxsQ29sb3I7XHJcbiAgICAgICAgcmVzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zaGFkb3cpIHtcclxuICAgICAgICBzZXRTaGFkb3cocmVzLmN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmN0eC5saW5lQ2FwICA9IHJlcy5saW5lQ2FwO1xyXG4gICAgcmVzLmN0eC5saW5lSm9pbiA9IHJlcy5qb2luVHlwZTtcclxuICAgIGlmICh0eXBlb2YgcmVzLmN0eC5zZXRMaW5lRGFzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVzLmN0eC5zZXRMaW5lRGFzaChyZXMubGluZURhc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzLmRyYXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXMuY3R4LmxpbmVXaWR0aCAgID0gcmVzLmJvcmRlcldpZHRoO1xyXG4gICAgcmVzLmN0eC5zdHJva2VTdHlsZSA9IHJlcy5ib3JkZXJDb2xvcjtcclxuICAgIHJlcy5jdHguc3Ryb2tlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXREZWYob2JqOiBhbnkpOiBDYW52YXNDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIGNlbnRlciAgICAgOiBmYWxzZSxcclxuICAgICAgICBjdHggICAgICAgIDogb2JqLmN0eCxcclxuICAgICAgICBkcmF3ICAgICAgIDogdHlwZW9mIG9iai5ib3JkZXJDb2xvciAhPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqLmJvcmRlcldpZHRoICE9PSBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIGVuZEFuZ2xlICAgOiBNYXRoLlBJICogMixcclxuICAgICAgICBmaWxsICAgICAgIDogdHlwZW9mIG9iai5maWxsQ29sb3IgIT09IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgZmlsbENvbG9yICA6IFwid2hpdGVcIixcclxuICAgICAgICBoZWlnaHQgICAgIDogMCxcclxuICAgICAgICBqb2luVHlwZSAgIDogXCJiZXZlbFwiLFxyXG4gICAgICAgIGxpbmVDYXAgICAgOiBcInJvdW5kXCIsXHJcbiAgICAgICAgbGluZURhc2ggICA6IFtdLFxyXG4gICAgICAgIG9mZnNldCAgICAgOiBudWxsLFxyXG4gICAgICAgIHJhZGl1cyAgICAgOiB7XHJcbiAgICAgICAgICAgIHRsOiAwLFxyXG4gICAgICAgICAgICB0cjogMCxcclxuICAgICAgICAgICAgYnI6IDAsXHJcbiAgICAgICAgICAgIGJsOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRBbmdsZSA6IDAsXHJcbiAgICAgICAgd2lkdGggICAgICA6IDAsXHJcbiAgICAgICAgeCAgICAgICAgICA6IDAsXHJcbiAgICAgICAgeSAgICAgICAgICA6IDAsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1ha2VQb3NBbmRTaXplKGRlZjogQ2FudmFzQ29uZmlnLCBvYmo6IGFueSk6IENhbnZhc0NvbmZpZyB7XHJcbiAgICBjb25zdCByZXM6IENhbnZhc0NvbmZpZyA9ICQuZXh0ZW5kKGRlZiwgb2JqKSBhcyBDYW52YXNDb25maWc7XHJcbiAgICBjb25zdCBjaGVja0F0dHJpYnV0ZSAgICA9IChhdHRyTmFtZToga2V5b2YgQ2FudmFzQ29uZmlnLCBwYXJ0QToga2V5b2YgQ2FudmFzQ29uZmlnLCBwYXJ0Qjoga2V5b2YgQ2FudmFzQ29uZmlnKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXNbYXR0ck5hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXNbYXR0ck5hbWVdO1xyXG4gICAgICAgIGlmIChDaGVja2Vycy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRCXSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXNbcGFydEFdID0gdmFsdWVbMF07XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRCXSA9IHZhbHVlWzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRBXSA9IHZhbHVlIGFzIFZlY3RvcjJmLng7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzW3BhcnRCXSA9IHZhbHVlIGFzIFZlY3RvcjJmLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja0F0dHJpYnV0ZShcInNpemVcIiwgXCJ3aWR0aFwiLCBcInNpemVcIik7XHJcbiAgICBjaGVja0F0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwieFwiLCBcInlcIik7XHJcblxyXG4gICAgaWYgKHJlcy5jZW50ZXIpIHtcclxuICAgICAgICByZXMueCAtPSByZXMud2lkdGggPj4gMTtcclxuICAgICAgICByZXMueSAtPSByZXMuaGVpZ2h0ID4+IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tQb3NBbmRTaXplKG9iajogQ2FudmFzQ29uZmlnLCBuYW1lOiBzdHJpbmcpOiBDYW52YXNDb25maWcge1xyXG5cclxuICAgIGlmICgodHlwZW9mIG9iai54ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBvYmoueSA9PT0gXCJ1bmRlZmluZWRcIikgJiYgdHlwZW9mIG9iai5wb3NpdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSE9VVF9QT1NJVElPTjogXCIgKyBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHR5cGVvZiBvYmoud2lkdGggPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iai5oZWlnaHQgPT09IFwidW5kZWZpbmVkXCIpICYmIHR5cGVvZiBvYmouc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNU0dfVFJZX0RSQVdfV0lUSE9VVF9TSVpFOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmoud2lkdGggPD0gMCB8fCBvYmouaGVpZ2h0IDw9IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTVNHX1RSWV9EUkFXX1dJVEhfTkVHX1BPU0lUSU9OOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbml0RGVmKG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRvQXJjKG9iajogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gcmVtYWtlUG9zQW5kU2l6ZShjaGVja1Bvc0FuZFNpemUob2JqLCBcIkFyY1wiKSwgb2JqKTtcclxuXHJcbiAgICAgICAgcmVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHJlcy5jdHguZWxsaXBzZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHguZWxsaXBzZShyZXMueCArIChyZXMud2lkdGggPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMueSArIChyZXMuaGVpZ2h0ID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLndpZHRoID4+IDEsXHJcbiAgICAgICAgICAgICAgICByZXMuaGVpZ2h0ID4+IDEsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgICAgICByZXMuZW5kQW5nbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5jdHgucmVjdChyZXMueCArIChyZXMud2lkdGggPj4gMSksXHJcbiAgICAgICAgICAgICAgICByZXMueSArIChyZXMuaGVpZ2h0ID4+IDEpLFxyXG4gICAgICAgICAgICAgICAgcmVzLndpZHRoID4+IDEsXHJcbiAgICAgICAgICAgICAgICByZXMuaGVpZ2h0ID4+IDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvY2VzcyhyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZG9SZWN0KG9iajogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGVmID0gY2hlY2tQb3NBbmRTaXplKG9iaiwgXCJSZWN0XCIpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9iai5yYWRpdXMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKENoZWNrZXJzLmlzTnVtYmVyKG9iai5yYWRpdXMpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoucmFkaXVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRsOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyOiBvYmoucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRlZi5yYWRpdXMgYXMgYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZi5yYWRpdXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoucmFkaXVzW2tleV0gPSBvYmoucmFkaXVzW2tleV0gfHwgKGRlZi5yYWRpdXMgYXMgYW55KVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gcmVtYWtlUG9zQW5kU2l6ZShkZWYsIG9iaik7XHJcblxyXG4gICAgICAgIHJlcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgcmVzLmN0eC5tb3ZlVG8ocmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyByZXMud2lkdGggLSAocmVzLnJhZGl1cyBhcyBhbnkpLnRyLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54ICsgcmVzLndpZHRoLCByZXMueSwgcmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50cik7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyByZXMud2lkdGgsIHJlcy55ICsgcmVzLmhlaWdodCAtIChyZXMucmFkaXVzIGFzIGFueSkuYnIpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCArIHJlcy53aWR0aCwgcmVzLnkgKyByZXMuaGVpZ2h0LCByZXMueCArIHJlcy53aWR0aCAtIChyZXMucmFkaXVzIGFzIGFueSkuYnIsIHJlcy55ICsgcmVzLmhlaWdodCk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLmJsLCByZXMueSArIHJlcy5oZWlnaHQpO1xyXG4gICAgICAgIHJlcy5jdHgucXVhZHJhdGljQ3VydmVUbyhyZXMueCwgcmVzLnkgKyByZXMuaGVpZ2h0LCByZXMueCwgcmVzLnkgKyByZXMuaGVpZ2h0IC0gKHJlcy5yYWRpdXMgYXMgYW55KS5ibCk7XHJcbiAgICAgICAgcmVzLmN0eC5saW5lVG8ocmVzLngsIHJlcy55ICsgKHJlcy5yYWRpdXMgYXMgYW55KS50bCk7XHJcbiAgICAgICAgcmVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHJlcy54LCByZXMueSwgcmVzLnggKyAocmVzLnJhZGl1cyBhcyBhbnkpLnRsLCByZXMueSk7XHJcbiAgICAgICAgcmVzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgcHJvY2VzcyhyZXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIE1pc2NWYWxpZGF0b3JzIGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL21pc2MtdmFsaWRhdG9yc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnN9IGluc3RlYWRcclxuICogVE9ETzogbW92ZSB0aGlzIHRvIHZhbGlkYXRvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGVja2VycyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRnVuY3Rpb24gPSBNaXNjVmFsaWRhdG9ycy5pc0Z1bmN0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTdHJpbmcgPSBNaXNjVmFsaWRhdG9ycy5pc1N0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzT2JqZWN0ID0gTWlzY1ZhbGlkYXRvcnMuaXNPYmplY3Q7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlciA9IE1pc2NWYWxpZGF0b3JzLmlzTnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNCb29sZWFuID0gTWlzY1ZhbGlkYXRvcnMuaXNCb29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBcnJheSA9IE1pc2NWYWxpZGF0b3JzLmlzQXJyYXk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0VtcHR5ID0gTWlzY1ZhbGlkYXRvcnMuaXNFbXB0eTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzSW50ID0gTWlzY1ZhbGlkYXRvcnMuaXNJbnQ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0Zsb2F0ID0gTWlzY1ZhbGlkYXRvcnMuaXNGbG9hdDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVW5kZWZpbmVkID0gTWlzY1ZhbGlkYXRvcnMuaXNVbmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0VsZW1lbnQgPSBNaXNjVmFsaWRhdG9ycy5pc0VsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgTWlzY1ZhbGlkYXRvcnMgZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWlzYy12YWxpZGF0b3JzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBNaXNjVmFsaWRhdG9yc30gaW5zdGVhZFxyXG4gKiBUT0RPOiBtb3ZlIHRoaXMgdG8gdmFsaWRhdG9yc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoZWNrZXJzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGdW5jdGlvbiA9IE1pc2NWYWxpZGF0b3JzLmlzRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1N0cmluZyA9IE1pc2NWYWxpZGF0b3JzLmlzU3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNPYmplY3QgPSBNaXNjVmFsaWRhdG9ycy5pc09iamVjdDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTnVtYmVyID0gTWlzY1ZhbGlkYXRvcnMuaXNOdW1iZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0Jvb2xlYW4gPSBNaXNjVmFsaWRhdG9ycy5pc0Jvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0FycmF5ID0gTWlzY1ZhbGlkYXRvcnMuaXNBcnJheTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRW1wdHkgPSBNaXNjVmFsaWRhdG9ycy5pc0VtcHR5O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbnQgPSBNaXNjVmFsaWRhdG9ycy5pc0ludDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRmxvYXQgPSBNaXNjVmFsaWRhdG9ycy5pc0Zsb2F0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNVbmRlZmluZWQgPSBNaXNjVmFsaWRhdG9ycy5pc1VuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRWxlbWVudCA9IE1pc2NWYWxpZGF0b3JzLmlzRWxlbWVudDtcclxufVxyXG4iLCIvLyBUT0RPOiBuZWVkIHRvIGJlIGNoZWNrZWQgaWYgYXBwIGlzIHJ1bm5pbmcgaW4gYnJvd3NlclxyXG5cclxubGV0IGxvY2FsQ29udGV4dDogRG9jdW1lbnQgfCBudWxsID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbUdldCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBkb2N1bWVudCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q29udGV4dChjb250ZXh0OiBEb2N1bWVudCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZSBuYW1lIG9mIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBjb2xsZWN0aW9uIG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxpbmsgbmFtZSBvZiBsaW5rXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5TGluayhsaW5rOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBba2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXT4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoYGFbYXR0cj1cIiR7bGlua31cIl1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWQgc2VhcmNoZWQgSURcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIGZvdW5kIGVsZW1lbnQgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5SWQoaWQ6IHN0cmluZywgY29udGV4dDogRG9jdW1lbnQgPSBsb2NhbENvbnRleHQgYXMgRG9jdW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBlbGVtZW50cyBuYW1lXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBzZWFyY2hlZCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyBub2RlTGlzdCBvZiBmb3VuZCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ5TmFtZShuYW1lOiBzdHJpbmcsIGNvbnRleHQ6IERvY3VtZW50ID0gbG9jYWxDb250ZXh0IGFzIERvY3VtZW50KTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlOYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0YWdOYW1lIGVsZW1lbnRzIHRhZ05hbWVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHNlYXJjaGVkIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIG5vZGVMaXN0IG9mIGZvdW5kIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYnlUYWcodGFnTmFtZTogc3RyaW5nLCBjb250ZXh0OiBEb2N1bWVudCA9IGxvY2FsQ29udGV4dCBhcyBEb2N1bWVudCk6IE5vZGVMaXN0T2Y8RWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIGFzIGFueTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBFbmNvZGluZ3Mge1xyXG4gICAgLypcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVRGOCAgICA9IFwidXRmOFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVVEYxNiAgID0gXCJ1dGYxNlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVTklDT0RFID0gXCJ1bmljb2RlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFTQ0lJICAgPSBcImFzY2lpXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVDUzIgICAgPSBcInVjczJcIjtcclxuICAgICovXHJcbiAgICBVVEY4ICAgID0gXCJ1dGY4XCIsXHJcbiAgICBVVEYxNiAgID0gXCJ1dGYxNlwiLFxyXG4gICAgVU5JQ09ERSA9IFwidW5pY29kZVwiLFxyXG4gICAgQVNDSUkgICA9IFwiYXNjaWlcIixcclxuICAgIFVDUzIgICAgPSBcInVjczJcIixcclxufVxyXG4iLCJleHBvcnQgZW51bSBGaWxlVHlwZXMge1xyXG4gICAgQ1NTICA9IFwidGV4dC9jc3NcIixcclxuICAgIEhUTUwgPSBcInRleHQvaHRtbFwiLFxyXG4gICAgSlMgICA9IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiLFxyXG4gICAgTVAzICA9IFwiYXVkaW8vbXBlZ1wiLFxyXG4gICAgTVA0ICA9IFwidmlkZW8vbXA0XCIsXHJcbiAgICBPR0cgID0gXCJhcHBsaWNhdGlvbi9vZ2dcIixcclxuICAgIE9HViAgPSBcInZpZGVvL29nZ1wiLFxyXG4gICAgT0dBICA9IFwiYXVkaW8vb2dnXCIsXHJcbiAgICBUWFQgID0gXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICBXQVYgID0gXCJhdWRpby94LXdhdlwiLFxyXG4gICAgV0VCTSA9IFwidmlkZW8vd2VibVwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEh0dHBTdGF0dXNDb2RlcyB7XHJcbiAgICBDT05USU5VRSAgICAgICAgICAgICAgICAgICAgICAgID0gMTAwLFxyXG4gICAgU1dJVENISU5HX1BST1RPQ09MUyAgICAgICAgICAgICA9IDEwMSxcclxuICAgIE9LICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAyMDAsXHJcbiAgICBDUkVBVEVEICAgICAgICAgICAgICAgICAgICAgICAgID0gMjAxLFxyXG4gICAgQUNDRVBURUQgICAgICAgICAgICAgICAgICAgICAgICA9IDIwMixcclxuICAgIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OICAgPSAyMDMsXHJcbiAgICBOT19DT05URU5UICAgICAgICAgICAgICAgICAgICAgID0gMjA0LFxyXG4gICAgUkVTRVRfQ09OVEVOVCAgICAgICAgICAgICAgICAgICA9IDIwNSxcclxuICAgIFBBUlRJQUxfQ09OVEVOVCAgICAgICAgICAgICAgICAgPSAyMDYsXHJcbiAgICBNVUxUSVBMRV9DSE9JQ0VTICAgICAgICAgICAgICAgID0gMzAwLFxyXG4gICAgTU9WRURfUEVSTUFORU5UTFkgICAgICAgICAgICAgICA9IDMwMSxcclxuICAgIEZPVU5EICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAzMDIsXHJcbiAgICBTRUVfT1RIRVIgICAgICAgICAgICAgICAgICAgICAgID0gMzAzLFxyXG4gICAgTk9UX01PRElGSUVEICAgICAgICAgICAgICAgICAgICA9IDMwNCxcclxuICAgIFVTRV9QUk9YWSAgICAgICAgICAgICAgICAgICAgICAgPSAzMDUsXHJcbiAgICBURU1QT1JBUllfUkVESVJFQ1QgICAgICAgICAgICAgID0gMzA3LFxyXG4gICAgQkFEX1JFUVVFU1QgICAgICAgICAgICAgICAgICAgICA9IDQwMCxcclxuICAgIFVOQVVUSE9SSVpFRCAgICAgICAgICAgICAgICAgICAgPSA0MDEsXHJcbiAgICBQQVlNRU5UX1JFUVVJUkVEICAgICAgICAgICAgICAgID0gNDAyLFxyXG4gICAgRk9SQklEREVOICAgICAgICAgICAgICAgICAgICAgICA9IDQwMyxcclxuICAgIE5PVF9GT1VORCAgICAgICAgICAgICAgICAgICAgICAgPSA0MDQsXHJcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQgICAgICAgICAgICAgID0gNDA1LFxyXG4gICAgTk9UX0FDQ0VQVEFCTEUgICAgICAgICAgICAgICAgICA9IDQwNixcclxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEICAgPSA0MDcsXHJcbiAgICBSRVFVRVNUX1RJTUVPVVQgICAgICAgICAgICAgICAgID0gNDA4LFxyXG4gICAgQ09ORkxJQ1QgICAgICAgICAgICAgICAgICAgICAgICA9IDQwOSxcclxuICAgIEdPTkUgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSA0MTAsXHJcbiAgICBMRU5HVEhfUkVRVUlSRUQgICAgICAgICAgICAgICAgID0gNDExLFxyXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRCAgICAgICAgICAgICA9IDQxMixcclxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSAgICAgICAgPSA0MTMsXHJcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyAgICAgICAgICAgID0gNDE0LFxyXG4gICAgVU5TVVBQT1JURURfTUVESUFfVFlQRSAgICAgICAgICA9IDQxNSxcclxuICAgIFJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSA0MTYsXHJcbiAgICBFWFBFQ1RBVElPTl9GQUlMRUQgICAgICAgICAgICAgID0gNDE3LFxyXG4gICAgVU5QUk9DRVNTQUJMRV9FTlRJVFkgICAgICAgICAgICA9IDQyMixcclxuICAgIFRPT19NQU5ZX1JFUVVFU1RTICAgICAgICAgICAgICAgPSA0MjksXHJcbiAgICBJTlRFUk5BTF9TRVJWRVJfRVJST1IgICAgICAgICAgID0gNTAwLFxyXG4gICAgTk9UX0lNUExFTUVOVEVEICAgICAgICAgICAgICAgICA9IDUwMSxcclxuICAgIEJBRF9HQVRFV0FZICAgICAgICAgICAgICAgICAgICAgPSA1MDIsXHJcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFICAgICAgICAgICAgID0gNTAzLFxyXG4gICAgR0FURVdBWV9USU1FT1VUICAgICAgICAgICAgICAgICA9IDUwNCxcclxuICAgIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEICAgICAgPSA1MDUsXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gS2V5cyB7XHJcbiAgICBBUlJPV19VUCAgICA9IFwiQXJyb3dVcFwiLFxyXG4gICAgQVJST1dfRE9XTiAgPSBcIkFycm93RG93blwiLFxyXG4gICAgQVJST1dfTEVGVCAgPSBcIkFycm93TGVmdFwiLFxyXG4gICAgQVJST1dfUklHSFQgPSBcIkFycm93UmlnaHRcIixcclxuICAgIERFTEVURSAgICAgID0gXCJEZWxldGVcIixcclxuICAgIENPTlRST0wgICAgID0gXCJDb250cm9sTGVmdFwiLFxyXG4gICAgU0hJRlQgICAgICAgPSBcIlNoaWZ0TGVmdFwiLFxyXG4gICAgUEFHRV9VUCAgICAgPSBcIlBhZ2VVcFwiLFxyXG4gICAgUEFHRV9ET1dOICAgPSBcIlBhZ2VEb3duXCIsXHJcbiAgICBFU0NBUEUgICAgICA9IFwiRXNjYXBlXCIsXHJcbiAgICBXICAgICAgICAgICA9IFwiS2V5V1wiLFxyXG4gICAgRiAgICAgICAgICAgPSBcIktleUZcIixcclxuICAgIEEgICAgICAgICAgID0gXCJLZXlBXCIsXHJcbiAgICBQICAgICAgICAgICA9IFwiS2V5UFwiLFxyXG4gICAgUyAgICAgICAgICAgPSBcIktleVNcIixcclxuICAgIEQgICAgICAgICAgID0gXCJLZXlEXCIsXHJcbiAgICBSICAgICAgICAgICA9IFwiS2V5UlwiLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5c09sZCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVOVEVSICAgICAgID0gMTM7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBQiAgICAgICAgID0gOTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyAgICAgICAgICAgPSA4NztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQSAgICAgICAgICAgPSA2NTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUyAgICAgICAgICAgPSA4MztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRCAgICAgICAgICAgPSA2ODtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUSAgICAgICAgICAgPSA4MTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRSAgICAgICAgICAgPSA2OTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRiAgICAgICAgICAgPSA3MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTENPTlRST0wgICAgPSAxNztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVNDQVBFICAgICAgPSAyNztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTEFMVCAgICAgICAgPSAxODtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTFNISUZUICAgICAgPSAxNjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1BBQ0UgICAgICAgPSAzMjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfVVAgICAgPSAzODtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfRE9XTiAgPSA0MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfUklHSFQgPSAzOTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1dfTEVGVCAgPSAzNztcclxufVxyXG4iLCJmdW5jdGlvbiBnZXRUZXh0KHRleHQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRleHQgPyBgOiAke3RleHR9YCA6IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RCcm93c2VyRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihgQXBwIGlzIG5vdCBydW5uaW5nIGluIGJyb3dzZXIke2dldFRleHQodGV4dCl9IWApO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgTm90QnJvd3NlckV4Y2VwdGlvbi5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0dVdGlsc1wiO1xyXG5cclxuIiwiaW1wb3J0IHsgU2ltcGxlVmVjdG9yMiB9IGZyb20gXCIuL3NpbXBsZS12ZWN0b3IyXCI7XHJcblxyXG5jb25zdCBwcm9jZXNzID0gKFxyXG4gICAgb3A6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCxcclxuICAgIGFyZzE6IFZlY3RvcjJmIHwgbnVtYmVyLFxyXG4gICAgYXJnMj86IG51bWJlcixcclxuKTogdm9pZCA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBvcChhcmcxIGFzIG51bWJlciwgYXJnMik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgb3AoYXJnMSwgYXJnMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wKGFyZzEueCwgYXJnMS55KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBpcyB1c2VkIGZvciBob2xkaW5nIDIgbnVtZXJpYyB2YWx1ZXMgYW5kIG1hbmlwdWxhdGlvbiB3aXRoIHRoZW1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyZiB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBYIHZhbHVlIG9mIHZlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgWSB2YWx1ZSBvZiB2ZWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHggPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCB2ZWN0b3JzIHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgY3JlYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgfSwgYXJnMSwgYXJnMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gYWRkIHZhbHVlcyBpbnRvIGN1cnJlbnQgdmFsdWVzIGFuZCByZXR1cm4gb2JqZWN0IGl0c2VsZlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmcxIHBhcmFtZXRlciBjYW4gYnkge0BsaW5rIFZlY3RvcjJmfSBvciBudW1iZXIgcmVwcmVzZW50aW5nIHtAbGluayB4fSBpZiBhcmcyIGlzIHBhc3NlZCBvdGhlcndpc2Uge0BsaW5rIHh9IGFuZCB7QGxpbmsgeX1cclxuICAgICAqIEBwYXJhbSBhcmcyIGlzIHtAbGluayB5fSB2YWx1ZSBmb3IgdmVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB1cGRhdGVkIHtAbGluayBWZWN0b3IyZn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChhcmcxOiBWZWN0b3IyZiB8IG51bWJlciwgYXJnMj86IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHByb2Nlc3MoKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB5O1xyXG4gICAgICAgIH0sIGFyZzEsIGFyZzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGRpdmlkZSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXYoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBtdWx0aXBseSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtdWwoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAqPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgKj0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBzdWJ0cmFjdCB2YWx1ZXMgZnJvbSBjdXJyZW50IHZhbHVlcyBhbmQgcmV0dXJuIG9iamVjdCBpdHNlbGZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnMSBwYXJhbWV0ZXIgY2FuIGJ5IHtAbGluayBWZWN0b3IyZn0gb3IgbnVtYmVyIHJlcHJlc2VudGluZyB7QGxpbmsgeH0gaWYgYXJnMiBpcyBwYXNzZWQgb3RoZXJ3aXNlIHtAbGluayB4fSBhbmQge0BsaW5rIHl9XHJcbiAgICAgKiBAcGFyYW0gYXJnMiBpcyB7QGxpbmsgeX0gdmFsdWUgZm9yIHZlY3RvclxyXG4gICAgICogQHJldHVybnMgdXBkYXRlZCB7QGxpbmsgVmVjdG9yMmZ9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWIoYXJnMTogVmVjdG9yMmYgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBwcm9jZXNzKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0geTtcclxuICAgICAgICB9LCBhcmcxLCBhcmcyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBBamF4UGFyYW1zIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIiB8IFwiUE9TVFwiO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBvblJlc3BvbnNlOiAoZGF0YTogYW55KSA9PiB2b2lkO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxufVxyXG5cclxuY2xhc3MgQWpheFdyYXBwZXIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWpheEhhbmRsZXI6IFhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgfTogQWpheFBhcmFtcyk6IEFqYXhXcmFwcGVyIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgICAgICAgICAgICAgID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIShyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQgJiYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDAgfHwgcmVxdWVzdC5zdGF0dXMgPT09IDIwMSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvblJlc3BvbnNlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb25SZXNwb25zZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcbiAgICBPYmplY3QuZW50cmllcyhoZWFkZXJzKS5mb3JFYWNoKChlbnRyeSkgPT4gcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGVudHJ5WzBdLCBlbnRyeVsxXSkpO1xyXG4gICAgcmVxdWVzdC5zZW5kKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQWpheFdyYXBwZXIocmVxdWVzdCk7XHJcbn1cclxuIiwiY29uc3QgRklMRV9TSVpFX1VOSVRTICAgICAgPSBbXCJCXCIsIFwiS0JcIiwgXCJNQlwiLCBcIkdCXCIsIFwiVEJcIiwgXCJQQlwiLCBcIkVCXCIsIFwiWkJcIiwgXCJZQlwiXTtcclxuY29uc3QgRklMRV9TSVpFX1VOSVRTX0xPTkcgPSBbXCJCeXRlc1wiLCBcIktpbG9ieXRlc1wiLCBcIk1lZ2FieXRlc1wiLCBcIkdpZ2FieXRlc1wiLCBcIlBldHRhYnl0ZXNcIiwgXCJFeGFieXRlc1wiLCBcIlpldHRhYnl0ZXNcIiwgXCJZb3R0YWJ5dGVzXCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEZpbGVTaXplKHNpemVJbkJ5dGVzOiBudW1iZXIsIGxvbmdGb3JtID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdW5pdHMgPSBsb25nRm9ybVxyXG4gICAgICAgID8gRklMRV9TSVpFX1VOSVRTX0xPTkdcclxuICAgICAgICA6IEZJTEVfU0laRV9VTklUUztcclxuXHJcbiAgICBsZXQgcG93ZXIgPSBNYXRoLnJvdW5kKE1hdGgubG9nKHNpemVJbkJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKTtcclxuICAgIHBvd2VyICAgICA9IE1hdGgubWluKHBvd2VyLCB1bml0cy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICBjb25zdCBzaXplICAgICAgICAgID0gc2l6ZUluQnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBwb3dlcik7IC8vIHNpemUgaW4gbmV3IHVuaXRzXHJcbiAgICBjb25zdCBmb3JtYXR0ZWRTaXplID0gTWF0aC5yb3VuZChzaXplICogMTAwKSAvIDEwMDsgLy8ga2VlcCB1cCB0byAyIGRlY2ltYWxzXHJcbiAgICBjb25zdCB1bml0ICAgICAgICAgID0gdW5pdHNbcG93ZXJdO1xyXG5cclxuICAgIHJldHVybiBzaXplID8gYCR7Zm9ybWF0dGVkU2l6ZX0gJHt1bml0fWAgOiBcIjBcIjtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zbG92YWstc3RlbW1lclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hamF4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbGUtc2l6ZS1mb3JtYXR0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVudGltZS12YWxpZGF0b3JzXCI7XHJcbiIsImV4cG9ydCBjb25zdCBnZXRBc1N0cmluZyA9IChrZXk6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgd2l0aCB2YWx1ZSAke2tleX0gaXMgbm90IGEgc3RyaW5nYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEFzTnVtYmVyID0gKGtleTogYW55KTogbnVtYmVyID0+IHtcclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSB3aXRoIHZhbHVlICR7a2V5fSBpcyBub3QgYSBudW1iZXJgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59O1xyXG4iLCJmdW5jdGlvbiByZW1vdmVQcmVkcG9uYShjaGFyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGNoYXIubGVuZ3RoID4gNiAmJiBjaGFyLnN0YXJ0c1dpdGgoXCJuYWpcIikpIHtcclxuICAgICAgICByZXR1cm4gY2hhci5zdWJzdHIoMywgY2hhci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGFyO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuZnVuY3Rpb24gcmVtb3ZlQ2FzZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBrZXkubGVuZ3RoO1xyXG4gICAgaWYgKGxlbiA+IDkgJiYga2V5LmVuZHNXaXRoKFwiZWrFoWllaG9cIilcclxuICAgICAgICB8fCBrZXkuZW5kc1dpdGgoXCJlasWhaWVtdVwiKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA4ICYmIChrZXkuZW5kc1dpdGgoXCJlasWhw61jaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuY29jaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrW1pXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jYW1pXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDYpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA3ICYmIChrZXkuZW5kc1dpdGgoXCJlasWhaWFcIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdGFtaVwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImF0w6FjaFwiKSB8fFxyXG4gICAgICAgIGtleS5lbmRzV2l0aChcImVuaWVjXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jb21cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhb21cIikgfHxcclxuICAgICAgICBrZXkuZW5kc1dpdGgoXCJlasWhw61tXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWVqXCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoW91XCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWl1XCIpIHx8XHJcbiAgICAgICAga2V5LmVuZHNXaXRoKFwiZWrFoWllXCIpXHJcbiAgICApKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDYgJiZcclxuICAgICAgICAoa2V5LmVuZHNXaXRoKFwiZcWlb21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFtaVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhdMOhbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhxaVvbVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdmlhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlhY2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYXTDoW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW5jZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZWhvXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImllbXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVtZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZXRlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqxaHDrVwiKSB8fFxyXG4gICAgICAgICAgICAvLyBnYWJvc1xyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbmllXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA1ICYmXHJcbiAgICAgICAgKGtleS5lbmRzV2l0aChcImljaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVob1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5Y2hcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61jaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOpaG9cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJlbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDqW11XCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW11XCIpIHx8XHJcbiAgICAgICAgICAgIC8qa2V5LmVuZHNXaXRoKFwiaWhvXCIpIHx8Ki8gLy8gVmXEvm1pIG1hbMO9IHZwbHl2XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbWlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6FjaFwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsO9Y2hcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJhbWlcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICAvKiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm92w6lcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3bDvVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJvdsOtXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZpXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWXFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpZcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYWrDulwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ1asO6XCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImVqw7pcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZW1lXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIsOtdGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61tZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvW1pXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwieW1pXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImFjaFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpYW1cIikgfHxcclxuICAgICAgICAgICAgLyprZXkuZW5kc1dpdGgoXCJhdMOhXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFjXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIml0ZVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbGlcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWxhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImlsb1wiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib2NoXCIpXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiA0ICYmXHJcbiAgICAgICAgKC8qa2V5LmVuZHNXaXRoKFwiw61uXCIpIHx8Ki9cclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw61tXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiw6FtXCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidXNcIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDvW1cIikgfHwgLy8gRnJvbSBjelxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJ5bVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJtaVwiKSB8fCAvLyBGcm9tIGN6XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcIm91XCIpIHx8IC8vIEZyb20gY3pcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib21cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZWpcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwib3ZcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWFcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaW1cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiaG9cIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibXVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwibWVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwidGVcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiYcWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImHFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDusWlXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImnFpVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDrcWhXCIpIHx8XHJcbiAgICAgICAgICAgIGtleS5lbmRzV2l0aChcImnFoVwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCJpbFwiKSB8fFxyXG4gICAgICAgICAgICBrZXkuZW5kc1dpdGgoXCLDumNcIikgfHxcclxuICAgICAgICAgICAga2V5LmVuZHNXaXRoKFwiZcWhXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc3Vic3RyaW5nKDAsIGxlbiAtIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW4gPiAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXlbbGVuIC0gMV0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgY2FzZSBcImVcIjpcclxuICAgICAgICAgICAgY2FzZSBcImlcIjpcclxuICAgICAgICAgICAgY2FzZSBcIm9cIjpcclxuICAgICAgICAgICAgY2FzZSBcInVcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsO6XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDoVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiw6lcIjpcclxuICAgICAgICAgICAgY2FzZSBcIsOtXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLDvVwiOlxyXG4gICAgICAgICAgICAgICAgLypjYXNlIFwiw7RcIjoqL1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHJpbmcoMCwgbGVuIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3Nlc3NpdmVzKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIGlmIChsZW4gPiA1ICYmIHMuZW5kc1dpdGgoXCJpblwiKSB8fFxyXG4gICAgICAgIHMuZW5kc1dpdGgoXCJvdlwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnN1YnN0cigwLCBsZW4gLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIC8vIHRvdG8gcHJhdmlkbG8gem5pxb51amUgRlAgYWxlIHp2ecWhdWplIEZOXHJcbiAgICAvKiAgICAgICAgaWYgKGxlbiA+IDEgJiYgc1tsZW4gLSAyXSA9PSBcImlcIiAmJiBzW2xlbi0xXT09XCJjXCIpIHtcclxuICAgICAgICAgICAgICAgIHNbbGVuIC0gMl0gPSBzW2xlbiAtIDFdOyAvLyBlKiA+ICpcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZW4gLSAxO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgIHN3aXRjaCAoc1tsZW4gLSAxXSkge1xyXG4gICAgICAgIGNhc2UgXCJjXCI6IC8vIFtjxI1dIC0+IGtcclxuICAgICAgICBjYXNlIFwixI1cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcImtcIik7XHJcbiAgICAgICAgY2FzZSBcIsS+XCI6IC8vIFvEvl0gLT4gbFxyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8uL2csIChlLCBpKSA9PiBpID09PSBsZW4gLSAxID8gZSA6IFwibFwiKTtcclxuICAgICAgICBjYXNlIFwixYhcIjogLy8gW8S+XSAtPiBsXHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IGkgPT09IGxlbiAtIDEgPyBlIDogXCJuXCIpO1xyXG4gICAgICAgIGNhc2UgXCLFpVwiOiAvLyBbxL5dIC0+IGxcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvLi9nLCAoZSwgaSkgPT4gaSA9PT0gbGVuIC0gMSA/IGUgOiBcInRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbiA+IDMgJiYgc1tsZW4gLSAzXSA9PT0gXCJpXCIgJiYgKHNbbGVuIC0gMl0gPT09IFwiZVwiIHx8IHNbbGVuIC0gMl0gPT09IFwiYVwiIHx8IHNbbGVuIC0gMl0gPT09IFwidVwiKSkge1xyXG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoLy4vZywgKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGxlbiAtIDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzW2xlbiAtIDJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1tsZW4gLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbG92YWtTdGVtbWVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3RlbWUod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZW1vdmVQb3NzZXNzaXZlcyhyZW1vdmVDYXNlKHJlbW92ZVByZWRwb25hKHdvcmQpKSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBoZXgycmdiLCBpbnQycmdiLCByZ2IyaGV4LCByZ2IyaW50IH0gZnJvbSBcIi4uL3V0aWxzL2NvbG9yLXV0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBjaGVja0NvbG9yVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc29sZS5hc3NlcnQodmFsdWUgPj0gMCk7XHJcbiAgICBjb25zb2xlLmFzc2VydCh2YWx1ZSA8PSAyNTUpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCTEFDSyA9IG5ldyBDb2xvcigwLCAwLCAwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0hJVEUgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSQVkgID0gbmV3IENvbG9yKDEyOCwgMTI4LCAxMjgpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRUQgICA9IG5ldyBDb2xvcigyNTUsIDAsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkVFTiA9IG5ldyBDb2xvcigwLCAyNTUsIDApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCTFVFICA9IG5ldyBDb2xvcigwLCAwLCAyNTUpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmVkOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGdyZWVuOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGJsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYWxwaGEgPSAyNTUpIHtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUocmVkKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoZ3JlZW4pO1xyXG4gICAgICAgIGNoZWNrQ29sb3JWYWx1ZShibHVlKTtcclxuICAgICAgICBjaGVja0NvbG9yVmFsdWUoYWxwaGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmdiKCk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYlN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgcmdiKCR7dGhpcy5yZWR9LCAke3RoaXMuZ3JlZW59LCAke3RoaXMuYmx1ZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJnYmEoKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5yZWQsIHRoaXMuZ3JlZW4sIHRoaXMuYmx1ZSwgdGhpcy5hbHBoYV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZXgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcmdiMmhleChNYXRoLmZsb29yKHRoaXMucmVkKSwgTWF0aC5mbG9vcih0aGlzLmdyZWVuKSwgTWF0aC5mbG9vcih0aGlzLmJsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiByZ2IyaW50KHRoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUhleChjb2xvcjogc3RyaW5nKTogQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGV4MnJnYihjb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoLi4udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUludChjb2xvcjogbnVtYmVyKTogQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW50MnJnYihjb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoLi4udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemVkKCk6IENvbG9yIHtcclxuICAgICAgICBpZiAodGhpcy5yZWQgPiAxIHx8IHRoaXMuZ3JlZW4gPiAxIHx8IHRoaXMuYmx1ZSA+IDEgfHwgdGhpcy5hbHBoYSA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnJlZCAvIDI1NSwgdGhpcy5ncmVlbiAvIDI1NSwgdGhpcy5ibHVlIC8gMjU1LCB0aGlzLmFscGhhIC8gMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIEdlbmRlcn0gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR2VuZGVyVHlwZSA9IFwiTUFOXCIgfCBcIldPTUFOXCIgfCBcIlwiO1xyXG5cclxuY29uc3QgbWFsZVJlZ2V4cCAgID0gL14obWFsZXxtYW58bXV6fGJveXxjaGxhcGVjfG0pJC9nO1xyXG5jb25zdCBmZW1hbGVSZWdleHAgPSAvXihmZW1hbGV8d29tYW58emVuYXxnaXJsfGRpZXZjYXxmfHd8eikkL2c7XHJcblxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gICAgTUFOICAgPSBcIk1BTlwiLFxyXG4gICAgV09NQU4gPSBcIldPTUFOXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUdlbmRlcihnZW5kZXI6IHN0cmluZyk6IEdlbmRlciB8IG51bGwge1xyXG4gICAgaWYgKCFnZW5kZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGdlbmRlckxvd2VyQ2FzZSA9IGdlbmRlci50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwixb5cIiwgXCJ6XCIpLnJlcGxhY2UoXCLEjVwiLCBcImNcIik7XHJcbiAgICBpZiAoZ2VuZGVyTG93ZXJDYXNlLm1hdGNoKG1hbGVSZWdleHApKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlbmRlci5NQU47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdlbmRlckxvd2VyQ2FzZS5tYXRjaChmZW1hbGVSZWdleHApKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlbmRlci5XT01BTjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcGFyc2VHZW5kZXJ9IGFuZCB7QGxpbmsgR2VuZGVyfSBpbnN0ZWFkXHJcbiAqIENsYXNzIGlzIHVzZWQgZm9yIHBhcnNpbmcgZ2VuZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2VuZGVyQ2xhc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcGFyc2Ugc3RyaW5nIGFuZCByZXR1cm4gR2VuZGVyVHlwZVxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBwYXJzZUdlbmRlcn0gaW5zdGVhZFxyXG4gICAgICogQHBhcmFtIGdlbmRlciBnZW5kZXIgaW4gYW55IGZvcm1hdFxyXG4gICAgICogQHJldHVybnMgcGFyc2VkIGdlbmRlciBhcyB7QGxpbmsgR2VuZGVyVHlwZX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZSA9IHBhcnNlR2VuZGVyO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBNb2RlbCBpcyBlbnVtIGFuZCBwYXJzZXJcclxuICovXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9nZW5kZXIubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sb3IubW9kZWxcIjtcclxuXHJcbi8vIFRPRE86IENhbm5vdCBpbXBvcnQgY291bnRyaWVzLmRhdGEuanNvblxyXG4vLyBleHBvcnQgKiBmcm9tIFwiLi9jb3VudHJpZXMvY291bnRyeS5pbnRlcmZhY2VcIjtcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vY291bnRyaWVzL2NvdW50cnkubW9kZWxcIjtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogTk9ERSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gVVRJTFNcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9GaWxlVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NYXRoVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NaXNjVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9PYmplY3RVdGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL3RpbWUtdXRpbHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21pc2Mvc2xvdmFrLXN0ZW1tZXJcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFdFQiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gRE9NXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vZGVwcmVjYXRlZC9DaGVja2Vyc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kb20vY2FudmFzLW1hbmFnZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZG9tL2RvbS1nZXRcIjtcclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RGaXh0dXJlIH0gZnJvbSBcIi4vYWJzdHJhY3QuZml4dHVyZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1hcHBlciB9IGZyb20gXCIuL2Fic3RyYWN0Lm1hcHBlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGF0YWJhc2VGaXh0dXJlPE9iaiwgT2JqRHRvPiBleHRlbmRzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBsaXN0RHRvOiBPYmpEdG9bXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWxEdG86IE9iakR0bztcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobGlzdDogT2JqW10sIG1hcHBlcjogQWJzdHJhY3RNYXBwZXI8T2JqLCBPYmpEdG8+KSB7XHJcbiAgICAgICAgc3VwZXIobGlzdCk7XHJcbiAgICAgICAgdGhpcy5saXN0RHRvICAgPSBsaXN0Lm1hcChtYXBwZXIubWFwVG9EdG8sIG1hcHBlcik7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxEdG8gPSB0aGlzLmxpc3REdG9bMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Rml4dHVyZTxPYmo+IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBkZXRhaWw6IE9iajtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxpc3Q6IE9ialtdKSB7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBsaXN0WzBdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1hcHBlcjxPYmosIE9iakR0bz4ge1xyXG4gICAgcHVibGljIGFic3RyYWN0IG1hcFRvRHRvKG9iamVjdDogUGFydGlhbDxPYmo+KTogT2JqRHRvO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBtYXBGcm9tRHRvKG9iamVjdDogUGFydGlhbDxPYmpEdG8+KTogT2JqO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQYWdpbmF0ZU1vZGVsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVRFTVNfUEVSX1BBR0UgPSAxMDtcclxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudCA9IFBhZ2luYXRlTW9kZWwuSVRFTVNfUEVSX1BBR0UsIG9mZnNldCA9IDApIHtcclxuICAgICAgICB0aGlzLmxpbWl0ICA9ICtjb3VudDtcclxuICAgICAgICB0aGlzLm9mZnNldCA9ICtvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShwYWdpbmF0ZT86IFBhZ2luYXRlTW9kZWwpOiBQYWdpbmF0ZU1vZGVsIHtcclxuICAgICAgICBpZiAoIXBhZ2luYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFnaW5hdGVNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYWdpbmF0ZU1vZGVsKFxyXG4gICAgICAgICAgICBpc05hTihwYWdpbmF0ZS5saW1pdCkgPyBQYWdpbmF0ZU1vZGVsLklURU1TX1BFUl9QQUdFIDogcGFnaW5hdGUubGltaXQsXHJcbiAgICAgICAgICAgIGlzTmFOKHBhZ2luYXRlLm9mZnNldCkgPyAwIDogcGFnaW5hdGUub2Zmc2V0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaG9yaXpvbnRhbC1hbGlnbi50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2tleS12YWx1ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmVzdGVkLXN0cmluZy1tYXAuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdC1lbnRyeS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb3B0aW9uYWwudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb2ludC5pbnRlcmFmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb3AudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wZXJ0eS1kZWNvcmF0b3IudHlwZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaXplLmludGVyYWZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dC1vcHRpb25zLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90eXBlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91bml0LW51bWJlci50eXBlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZlcnRpY2FsLWFsaWduLnR5cGVcIjtcclxuIiwiaW1wb3J0IHsgQ2hlY2tlcnMgfSBmcm9tIFwiLi4vZG9tL2RlcHJlY2F0ZWQvQ2hlY2tlcnNcIjtcclxuaW1wb3J0IHsgRG9tR2V0IH0gZnJvbSBcIi4uL2RvbS9kb20tZ2V0XCI7XHJcbmltcG9ydCB7IE5vdEJyb3dzZXJFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXJyb3JzL25vdC1icm93c2VyLmV4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuLi90eXBlcy9wb2ludC5pbnRlcmFmYWNlXCI7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tIFwiLi4vdHlwZXMvc2l6ZS5pbnRlcmFmYWNlXCI7XHJcbmltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCIuLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RDcmVhdG9yUGFyYW1zIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGF0dHI/OiBTdHJpbmdNYXA7XHJcbiAgICBjb250Pzogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdO1xyXG4gICAgc3R5bGU/OiBDU1NTdHlsZURlY2xhcmF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIGhlaWdodCBvZiB3aW5kb3dcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB3aW5kb3cgaGVpZ2h0IGluIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdpbmRvd0hlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBOb3RCcm93c2VyRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyB3aWR0aCBvZiB3aW5kb3dcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB3aW5kb3cgd2lkdGggaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V2luZG93V2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCwgYXBwZW5kIG9yIHJldHVybnMgdGV4dCBvZiBlbGVtZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gdGV4dCAtIHRleHQgdG8gcHV0IGluIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBhcHBlbmQgLSBmbGFnIGlmIHRleHQgc2hvdWxkIGJlIGFwcGVuZCBvciByZXBsYWNlIHByZXZpb3VzIHRleHRcclxuICAgICAqIEByZXR1cm5zIGVsZW1lbnQgZ2l2ZW4gYXMgaW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0ZXh0KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcsIGFwcGVuZCA9IHRydWUpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKGFwcGVuZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHNldCwgYXBwZW5kIG9yIHJldHVybnMgaHRtbCBjb250ZW50IG9mIGVsZW1lbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBodG1sIC0gaHRtbCB0byBwdXQgaW4gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIGFwcGVuZCAtIGZsYWcgaWYgaHRtbCBzaG91bGQgYmUgYXBwZW5kIG9yIHJlcGxhY2UgcHJldmlvdXMgY29udGVudFxyXG4gICAgICogQHJldHVybnMgZWxlbWVudCBnaXZlbiBhcyBpbnB1dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGh0bWwoZWxlbWVudDogSFRNTEVsZW1lbnQsIGh0bWw6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBhcHBlbmQgPSB0cnVlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGlmIChhcHBlbmQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBodG1sID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBodG1sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKENoZWNrZXJzLmlzRWxlbWVudChodG1sKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGh0bWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQ2hlY2tlcnMuaXNFbGVtZW50KGh0bWwpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucywgYWRkLCByZW1vdmUgb3IgdG9nZ2xlIGVsZW1lbnRzIGNsYXNzZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZSBvciBsaXN0IG9mIGNsYXNzIG5hbWVzXHJcbiAgICAgKiBAcGFyYW0gZm9yY2UgLSBmbGFnIGlmIGNsYXNzIHNob3VsZCBiZSB0b2dnbGVkIGZhbHNlXHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIGlmIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY2hlY2sgY2xhc3MgcHJlc2VuY2Ugb3RoZXJ3aXNlIGVsZW1lbnQgZ2l2ZW4gYXMgaW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10sIGZvcmNlID0gZmFsc2UpOiBIVE1MRWxlbWVudCB8IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLmNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChuYW1lWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ2hlY2tlcnMuaXNCb29sZWFuKGZvcmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUobmFtZSwgZm9yY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjcmV0ZSBuZXcgZWxlbWVudFxyXG4gICAgICpcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgPT4gPGRpdj48L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJpZGVcIn0pID0+IDxkaXYgaWQ9XCJpZGVcIj48L2Rpdj47XHJcbiAgICAgKiBFbGVtZW50TWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHt9LCBcInRleHRcIikgPT4gPGRpdj50ZXh0PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSwgXCI8Yj50ZXh0PC9iPlwiKSA9PiA8ZGl2PjxiPnRleHQ8L2I+PC9kaXY+O1xyXG4gICAgICogRWxlbWVudE1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSwgXCJ0ZXh0XCIsIHtjb2xvcjogXCJibHVlXCJ9KSA9PiA8ZGl2IHN0eWxlPVwiY29sb3I6IGJsdWU7XCI+dGV4dDwvZGl2PlxyXG4gICAgICpcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoe25hbWU6IFwiZGl2XCJ9KSA9PiA8ZGl2PjwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoe25hbWU6IFwiZGl2XCJ9KSA9PiA8ZGl2PjwvZGl2PjtcclxuICAgICAqIEVsZW1lbnRNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoe25hbWU6IFwiZGl2XCIsIGF0dHI6IHtpZDogXCJpZGVcIn19KSA9PiA8ZGl2IGlkPVwiaWRlXCI+PC9kaXY+O1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gbmFtZSBvZiBlbGVtZW50IG9yIG9iamVjdCBjb250YWlucyBhbGwgY29uZmlndXJhdGlvblxyXG4gICAgICogQHBhcmFtIGF0dHIgLSBtYXAgb2YgYWxsIGVsZW1lbnQgYXR0cmlidXRlc1xyXG4gICAgICogQHBhcmFtIGNvbnQgLSBlbGVtZW50IGNvbnRlbnQuIENhbiBiZSBzdHJpbmcsIGVsZW1lbnQgb3IgYXJyYXkgb2YgZWxlbWVudHNcclxuICAgICAqIEBwYXJhbSBzdHlsZSAtIHN0eWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgY3JlYXRlZCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChuYW1lOiBzdHJpbmcgfCBPYmplY3RDcmVhdG9yUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI/OiBTdHJpbmdNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udD86IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT86IENTU1N0eWxlRGVjbGFyYXRpb24pOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90QnJvd3NlckV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEb21VdGlscy5jcmVhdGVFbGVtZW50KG5hbWUubmFtZSwgbmFtZS5hdHRyIHx8IHt9LCBuYW1lLmNvbnQgfHwgXCJcIiwgbmFtZS5zdHlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgYXR0ciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cltrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udCkpIHtcclxuICAgICAgICAgICAgY29udC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBEb21VdGlscy5odG1sKGVsLCBlLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRG9tVXRpbHMuaHRtbChlbCwgY29udCBhcyBzdHJpbmcgfCBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZW1vdmUgZWxlbWVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgcmVtb3ZlZCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlKGVsZW1lbnQ6IEVsZW1lbnQpOiBFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgb2JqZWN0IHdpdGggZWxlbWVudCBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgcG9zaXRpb24gb2YgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUG9pbnQge1xyXG4gICAgICAgIGxldCB0b3AgID0gMDtcclxuICAgICAgICBsZXQgbGVmdCA9IDA7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcclxuICAgICAgICAgICAgbGVmdCArPSBlbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB9IHdoaWxlIChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogbGVmdCxcclxuICAgICAgICAgICAgeTogdG9wLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm5zIG9yZGVyIG9mIGVsZW1lbnQgYmV0d2VlbiBzaWJsaW5nc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gaW5wdXQgZWxlbWVudFxyXG4gICAgICogQHJldHVybnMgaW5kZXggb2YgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5kZXhPZihlbGVtZW50OiBFbGVtZW50IHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICB3aGlsZSAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJucyBvYmplY3Qgd2l0aCBlbGVtZW50IHNpemVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGlucHV0IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm5zIHNpemUgb2YgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNpemUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBTaXplIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aCA6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZShmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiBTdHJpbmdNYXAge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogU3RyaW5nTWFwID0ge307XHJcbiAgICAgICAgLy8gaWYgZm9ybXMgaXMgbm90IGVsZW1lbnRcclxuICAgICAgICBpZiAoIUNoZWNrZXJzLmlzRWxlbWVudChmb3JtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgZm9ybSBpcyBub3QgZm9ybVxyXG4gICAgICAgIGlmIChmb3JtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJmb3JtXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBhbGwgaW5wdXRzXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBEb21HZXQuYnlUYWcoXCJpbnB1dFwiKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGFsbCB2YWx1ZXMgdG8gcmVzdWx0IG9iamVjdFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZTogRWxlbWVudCA9IGVsZW1lbnRzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgICAgICAgPSBlLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpIGFzIHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL2RlcHJlY2F0ZWQvU3RyaW5nVXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIHdhbGsoZGlyOiBzdHJpbmcsIGRvbmU6IChlcnJvcjogYW55LCBmaWxlcz86IHN0cmluZ1tdKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmcy5yZWFkZGlyKGRpciwgKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uIHwgbnVsbCwgbGlzdDogc3RyaW5nW10pID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwZW5kaW5nOiBudW1iZXIgPSBsaXN0Lmxlbmd0aDtcclxuICAgICAgICBpZiAoIXBlbmRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZmlsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGUgPSBwYXRoLnJlc29sdmUoZGlyLCBmaWxlKTtcclxuICAgICAgICAgICAgZnMuc3RhdChmaWxlLCAoZXJyMTogTm9kZUpTLkVycm5vRXhjZXB0aW9uIHwgbnVsbCwgc3RhdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YWxrKGZpbGUsIChlcnIyOiBhbnksIHJlcz86IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKC4uLnJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmctLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKG51bGwsIHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVV0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2NhbkRpclJlY3Vyc2l2ZShkaXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nW10+KChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMuc3RhdChkaXIsIChlcnIwOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBzdGF0czogZnMuU3RhdHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZGlyICsgXCIgaXMgbm90IGRpcmVjdG9yeVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdhbGsoZGlyLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRmlsZUpTT04odXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBkYXRhOiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIEZpbGVVdGlscy5sb2FkRmlsZSh1cmwsIChlcnIsIGRhdGEpID0+IGNhbGxiYWNrKGVyciwgSlNPTi5wYXJzZShkYXRhKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGUodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCBudWxsLCBkYXRhOiBzdHJpbmcpID0+IGFueSwgZW5jb2RpbmcgPSBcInV0ZjhcIik6IHZvaWQge1xyXG4gICAgICAgIGZzLnJlYWRGaWxlKHVybCwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVKc29uRmlsZShkYXRhOiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBGaWxlVXRpbHMuc2F2ZUZpbGUoSlNPTi5zdHJpbmdpZnkoZGF0YSksIGZpbGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVGaWxlKGRhdGE6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGZpbGVOYW1lLCBkYXRhLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHN1Y2Nlc3MoXCJUaGUgZmlsZSB3YXMgc2F2ZWQhXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMudW5saW5rKGZpbGVOYW1lLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHN1Y2Nlc3MoXCJUaGUgZmlsZSB3YXMgcmVtb3ZlZCFcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tFeHRlbnNpb24obmFtZTogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBTdHJpbmdVdGlscy5qb2luU2luZ2xlKG5hbWUsIFwiLlwiLCBleHRlbnNpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBhcnJheSA9IFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCB7bmFtZTogXCJKb2FjaGltXCIsIGFnZTogMTV9LCB7bmFtZTogXCJFbnJpY29cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIk1vbmljYVwiLCBhZ2U6IDU5fV1cclxuICogY29uc3QgY29uZGl0aW9ucyA9IHthZ2U6IDIzLCBuYW1lOiBcIk1vbmljYVwifVxyXG4gKiB3aGVyZShhcnJheSwgY29uZGl0aW9ucyk7IC8vIFt7bmFtZTogXCJNaWNoYWVsXCIsIGFnZTogMjN9LCAge25hbWU6IFwiRW5yaWNvXCIsIGFnZTogMTV9LCB7bmFtZTogXCJNb25pY2FcIiwgYWdlOiA1OX1dXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2hlcmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihhcnJheTogVFtdLCBjb25kaXRpb246IFBhcnRpYWw8VD4pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmRpdGlvbiB8fCB0eXBlb2YgY29uZGl0aW9uICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdICAgICAgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkVudHJpZXMgPSBPYmplY3QuZW50cmllcyhjb25kaXRpb24pO1xyXG5cclxuICAgIGFycmF5LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBjb25zdCBhZGQgPSBjb25kaXRpb25FbnRyaWVzLnNvbWUoKGNvbmRpdGlvbkVudHJ5KSA9PiBlW2NvbmRpdGlvbkVudHJ5WzBdIGFzIGtleW9mIFRdID09PSBjb25kaXRpb25FbnRyeVsxXSk7XHJcbiAgICAgICAgaWYgKGFkZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gc3ViIGFycmF5IGZyb20gYXJyYXlcclxuICpcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc2xpY2V9IGluc3RlYWRcclxuICogQHBhcmFtIGFycmF5IC0gaW5wdXQgYXJyYXlcclxuICogQHBhcmFtIG1pbkluZGV4IC0gc3RhcnQgaW5kZXhcclxuICogQHBhcmFtIG1heEluZGV4IC0gZW5kIGluZGV4XHJcbiAqIEByZXR1cm5zIGZpbmFsIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3ViQXJyYXk8VCA9IGFueT4oYXJyYXk6IFRbXSwgbWluSW5kZXggPSAwLCBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDEpOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XHJcbiAgICBjb25zdCBmaW5hbCAgICAgICA9IGFycmF5Lmxlbmd0aCA8IG1heEluZGV4ID8gYXJyYXkubGVuZ3RoIC0gMSA6IG1heEluZGV4O1xyXG4gICAgZm9yIChsZXQgaSA9IG1pbkluZGV4OyBpIDw9IGZpbmFsOyBpKyspIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBhcnJheVtpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1heGltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWF4aW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWF4fSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF4KGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPiBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIG1pbmltYWwgdmFsdWUgZnJvbSBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgbWluaW1hbCBudW1iZXIgZnJvbSBhcnJheVxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1hdGgubWlufSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgPCBiID8gYSA6IGIpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICogQHJldHVybnMgc3VtbWFyeSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5zIGF2ZXJhZ2Ugb2YgbnVtZXJpYyBhcnJheSBnaXZlbiBhcyBpbnB1dFxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAqIEByZXR1cm5zIGF2ZXJhZ2Ugb2YgYWxsIG51bWJlcnMgaW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmcoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gYXJyYXkubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gam9pbiBhcnJheSBieSBkZWxpbWl0ZXIgYW5kIGFwcGVuZCBwcmVmaXggYW5kIHBvc3RmaXhcclxuICpcclxuICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBjaGFyYWN0ZXIgdXNlZCBmb3Igam9pbiBlbGVtZW50cyBpbiBhcnJheVxyXG4gKiBAcGFyYW0gcHJlZml4IC0gc3RyaW5nIGFwcGVuZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGZpbmFsIHN0cmluZ1xyXG4gKiBAcGFyYW0gcG9zdGZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGVuZCBvZiBmaW5hbCBzdHJpbmdcclxuICogQHJldHVybnMgZmluYWwgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gam9pbjxUPihhcnJheTogVFtdLCBkZWxpbWl0ZXI6IHN0cmluZywgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBhcnJheSArIHBvc3RmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZWZpeCArIGFycmF5LmpvaW4oZGVsaW1pdGVyKSArIHBvc3RmaXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcmV0dXJucyBsYXN0IGVsZW1lbnQgZnJvbSBhcnJheSBvciBudWxsIGlmIGFycmF5IGlzIGVtcHR5LiBJZiBhcmd1bWVudCBpcyBub3QgYXJyYXksIG1ldGhvZCByZXR1cm5zIGFyZ3VtZW50XHJcbiAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gKiBAcmV0dXJucyBsYXN0IHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0PFQ+KGFycmF5OiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybnMgcmFuZG9tIGVsZW1lbnQgZnJvbSBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICogQHJldHVybnMgcmFuZG9tIHZhbHVlIGZyb20gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JdGVtPFQgPSB1bmtub3duPihhcnJheTogVFtdKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROUmFuZG9tPFQ+KGFyZ3M6IFRbXSwgY291bnQ6IG51bWJlcik6IFRbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA8PSBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8VD4oKTtcclxuXHJcbiAgICB3aGlsZSAocmVzdWx0LnNpemUgPD0gY291bnQpIHtcclxuICAgICAgICBjb25zdCByYW5kb21JdGVtID0gZ2V0UmFuZG9tSXRlbTxUPihhcmdzKTtcclxuICAgICAgICBpZiAocmFuZG9tSXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkKHJhbmRvbUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbTxUPihyZXN1bHQpO1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIHJldHVybiBjb3B5IG9mIGFycmF5IHdpdGggb25seSBkaXN0aW5jdCBlbGVtZW50c1xyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgLSBhcnJheSB3aXRoIGR1cGxpY2F0ZSBlbGVtZW50c1xyXG4gKiBAcmV0dXJucyB1bmlxdWUgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVW5pcXVlPFQ+KGFycmF5OiBUW10pOiBUW10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0PFQ+KGFycmF5KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lIDIgYXJyYXkgZWFjaCBvdGhlclxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hPdGhlcjxUPihhcnI6IFRbXSwgY2FsbGJhY2s6IChhOiBULCBiOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBhcnIuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlLCBhcnJbal0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vbWF0aC11dGlsc1wiO1xyXG5cclxuY29uc3QgY29sb3JzOiB7IFtjb2xvcjogc3RyaW5nXTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIH0gPSB7XHJcbiAgICBibGFjazogWzAsIDAsIDBdLFxyXG4gICAgd2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcclxuICAgIHJlZCAgOiBbMjU1LCAwLCAwXSxcclxuICAgIGdyZWVuOiBbMCwgMjU1LCAwXSxcclxuICAgIGJsdWUgOiBbMCwgMCwgMjU1XSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwQ29sb3IoXHJcbiAgICBmcm9tQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgdG9Db2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXHJcbiAgICBwcm9ncmVzczogbnVtYmVyLFxyXG4pOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCByZWQgICA9IHByb2dyZXNzICogZnJvbUNvbG9yWzBdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzBdO1xyXG4gICAgY29uc3QgZ3JlZW4gPSBwcm9ncmVzcyAqIGZyb21Db2xvclsxXSArICgxIC0gcHJvZ3Jlc3MpICogdG9Db2xvclsxXTtcclxuICAgIGNvbnN0IGJsdWUgID0gcHJvZ3Jlc3MgKiBmcm9tQ29sb3JbMl0gKyAoMSAtIHByb2dyZXNzKSAqIHRvQ29sb3JbMl07XHJcbiAgICBjb25zdCBhbHBoYSA9IHByb2dyZXNzICogZnJvbUNvbG9yWzNdICsgKDEgLSBwcm9ncmVzcykgKiB0b0NvbG9yWzNdO1xyXG5cbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGNsYW1wKHJlZCwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChncmVlbiwgMCwgMjU1KSxcclxuICAgICAgICBjbGFtcChibHVlLCAwLCAyNTUpLFxyXG4gICAgICAgIGNsYW1wKGFscGhhLCAwLCAyNTUpLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnBIZXhhQ29sb3IoYTogc3RyaW5nLCBiOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFoID0gK2EucmVwbGFjZShcIiNcIiwgXCIweFwiKTtcclxuICAgIGNvbnN0IGFyID0gYWggPj4gMTY7XHJcbiAgICBjb25zdCBhZyA9IGFoID4+IDggJiAweEZGO1xyXG4gICAgY29uc3QgYWIgPSBhaCAmIDB4RkY7XHJcbiAgICBjb25zdCBiaCA9ICtiLnJlcGxhY2UoXCIjXCIsIFwiMHhcIik7XHJcbiAgICBjb25zdCBiciA9IGJoID4+IDE2O1xyXG4gICAgY29uc3QgYmcgPSBiaCA+PiA4ICYgMHhGRjtcclxuICAgIGNvbnN0IGJiID0gYmggJiAweEZGO1xyXG4gICAgY29uc3QgcnIgPSBhciArIGFtb3VudCAqIChiciAtIGFyKTtcclxuICAgIGNvbnN0IHJnID0gYWcgKyBhbW91bnQgKiAoYmcgLSBhZyk7XHJcbiAgICBjb25zdCByYiA9IGFiICsgYW1vdW50ICogKGJiIC0gYWIpO1xyXG5cclxuICAgIHJldHVybiBcIiNcIiArICgoMSA8PCAyNCkgKyAocnIgPDwgMTYpICsgKHJnIDw8IDgpICsgcmIgfCAwKS50b1N0cmluZygxNikuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgycmdiKGNvbG9yOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMSksIDE2KTtcclxuXHJcbiAgICByZXR1cm4gW251bSA+PiAxNiwgbnVtID4+IDggJiAweDAwRkYsIG51bSAmIDB4MDAwMEZGXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRlQ29sb3IoY29sb3I6IHN0cmluZywgcGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IGhleDJyZ2IoY29sb3IpO1xyXG4gICAgY29uc3QgYW10ID0gTWF0aC5yb3VuZCgyLjU1ICogcGVyY2VudCk7XHJcbiAgICBjb25zdCBSICAgPSBudW1bMF0gKyBhbXQ7XHJcbiAgICBjb25zdCBHICAgPSBudW1bMV0gKyBhbXQ7XHJcbiAgICBjb25zdCBCICAgPSBudW1bMl0gKyBhbXQ7XHJcblxyXG4gICAgcmV0dXJuIHJnYjJoZXgoUiwgRywgQik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IyaGV4KFI6IG51bWJlciwgRzogbnVtYmVyLCBCOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiI1wiICsgKDB4MTAwMDAwMCArIChSIDwgMjU1ID8gUiA8IDEgPyAwIDogUiA6IDI1NSkgKiAweDEwMDAwICtcclxuICAgICAgICAoRyA8IDI1NSA/IEcgPCAxID8gMCA6IEcgOiAyNTUpICogMHgxMDAgK1xyXG4gICAgICAgIChCIDwgMjU1ID8gQiA8IDEgPyAwIDogQiA6IDI1NSkpLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludDJoZXgodmFsOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsdWUgID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFwiMDAwMDAwXCIuc3Vic3RyKDAsIDYgLSB2YWx1ZS5sZW5ndGgpICsgdmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIFwiI1wiICsgcmVzdWx0LnRvVXBwZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnQycmdiKHZhbDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgdmFsID4+IDE2LFxyXG4gICAgICAgIHZhbCA+PiA4ICYgMHhGRixcclxuICAgICAgICB2YWwgJiAweEZGLFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJpbnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiMmludChSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBSIDw8IDE2IHwgRyA8PCA4ICYgMHhGRkZGIHwgQjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3I6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XHJcbiAgICBpZiAoY29sb3JzW2NvbG9yXSkge1xyXG4gICAgICAgIHJldHVybiBjb2xvcnNbY29sb3JdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhleGFNYXRjaCA9IGNvbG9yLm1hdGNoKC9eIyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvKTtcclxuICAgIGlmIChoZXhhTWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBwYXJzZUludChoZXhhTWF0Y2hbMV0sIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaGV4YU1hdGNoWzJdLCAxNiksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGhleGFNYXRjaFszXSwgMTYpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmdiYU1hdGggPSBjb2xvci5tYXRjaCgvcmdiYT9cXCgoXFxkezEsM30pICosICooXFxkezEsM30pICosICooXFxkezEsM30pKCAqLCAqXFxkKi4/XFxkKilcXCkvKTtcclxuICAgIGlmIChyZ2JhTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzFdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzJdLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJnYmFNYXRoWzNdLCAxMCksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGFyc2UgY29sb3I6IFwiICsgY29sb3IpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIEFycmF5cyBmcm9tIFwiLi4vYXJyYXktdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIEFycmF5c30gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFycmF5VXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGNvbnN0IGFycmF5ID0gW3tuYW1lOiBcIk1pY2hhZWxcIiwgYWdlOiAyM30sIHtuYW1lOiBcIkpvYWNoaW1cIiwgYWdlOiAxNX0sIHtuYW1lOiBcIkVucmljb1wiLCBhZ2U6IDE1fSwge25hbWU6IFwiTW9uaWNhXCIsIGFnZTogNTl9XVxyXG4gICAgICogY29uc3QgY29uZGl0aW9ucyA9IHthZ2U6IDIzLCBuYW1lOiBcIk1vbmljYVwifVxyXG4gICAgICogd2hlcmUoYXJyYXksIGNvbmRpdGlvbnMpOyAvLyBbe25hbWU6IFwiTWljaGFlbFwiLCBhZ2U6IDIzfSwgIHtuYW1lOiBcIkVucmljb1wiLCBhZ2U6IDE1fSwge25hbWU6IFwiTW9uaWNhXCIsIGFnZTogNTl9XVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHdoZXJlPFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IGFueSB9PihhcnJheTogVFtdLCBjb25kaXRpb246IGFueSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy53aGVyZShhcnJheSwgY29uZGl0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBzdWIgYXJyYXkgZnJvbSBhcnJheVxyXG4gICAgICpcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnNsaWNlfSBpbnN0ZWFkXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBpbnB1dCBhcnJheVxyXG4gICAgICogQHBhcmFtIG1pbkluZGV4IC0gc3RhcnQgaW5kZXhcclxuICAgICAqIEBwYXJhbSBtYXhJbmRleCAtIGVuZCBpbmRleFxyXG4gICAgICogQHJldHVybnMgZmluYWwgYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzdWJBcnJheTxUID0gYW55PihhcnJheTogVFtdLCBtaW5JbmRleCA9IDAsIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5zdWJBcnJheShhcnJheSwgbWluSW5kZXgsIG1heEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybiBtYXhpbWFsIHZhbHVlIGZyb20gbnVtZXJpYyBhcnJheVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIGFycmF5IG9mIG51bWJlcnNcclxuICAgICAqIEByZXR1cm5zIG1heGltYWwgbnVtYmVyIGZyb20gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBtYXgoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLm1heChhcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiByZXR1cm4gbWluaW1hbCB2YWx1ZSBmcm9tIG51bWVyaWMgYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBhcnJheSBvZiBudW1iZXJzXHJcbiAgICAgKiBAcmV0dXJucyBtaW5pbWFsIG51bWJlciBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbWluKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5taW4oYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gcmV0dXJuIHRvdGFsIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiBudW1lcmljIGFycmF5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gICAgICogQHJldHVybnMgc3VtbWFyeSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMuc3VtKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHJldHVybnMgYXZlcmFnZSBvZiBudW1lcmljIGFycmF5IGdpdmVuIGFzIGlucHV0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgb2YgbnVtYmVyc1xyXG4gICAgICogQHJldHVybnMgYXZlcmFnZSBvZiBhbGwgbnVtYmVycyBpbiBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGF2ZyhhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBBcnJheXMuYXZnKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGpvaW4gYXJyYXkgYnkgZGVsaW1pdGVyIGFuZCBhcHBlbmQgcHJlZml4IGFuZCBwb3N0Zml4XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gbm90IGVtcHR5IGFycmF5XHJcbiAgICAgKiBAcGFyYW0gZGVsaW1pdGVyIC0gY2hhcmFjdGVyIHVzZWQgZm9yIGpvaW4gZWxlbWVudHMgaW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBwcmVmaXggLSBzdHJpbmcgYXBwZW5kIGF0IHRoZSBiZWdpbm5pbmcgb2YgZmluYWwgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gcG9zdGZpeCAtIHN0cmluZyBhcHBlbmQgYXQgdGhlIGVuZCBvZiBmaW5hbCBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIGZpbmFsIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW48VD4oYXJyYXk6IFRbXSwgZGVsaW1pdGVyOiBzdHJpbmcsIHByZWZpeCA9IFwiXCIsIHBvc3RmaXggPSBcIlwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQXJyYXlzLmpvaW4oYXJyYXksIGRlbGltaXRlciwgcHJlZml4LCBwb3N0Zml4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm5zIGxhc3QgZWxlbWVudCBmcm9tIGFycmF5IG9yIG51bGwgaWYgYXJyYXkgaXMgZW1wdHkuIElmIGFyZ3VtZW50IGlzIG5vdCBhcnJheSwgbWV0aG9kIHJldHVybnMgYXJndW1lbnRcclxuICAgICAqIEBwYXJhbSBhcnJheSAtIG5vdCBlbXB0eSBhcnJheVxyXG4gICAgICogQHJldHVybnMgbGFzdCB2YWx1ZSBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdDxUID0gYW55PihhcnJheTogVFtdKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXRMYXN0KGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm5zIHJhbmRvbSBlbGVtZW50IGZyb20gYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBub3QgZW1wdHkgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSB2YWx1ZSBmcm9tIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tPFQgPSBhbnk+KGFycmF5OiBUW10pOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXRSYW5kb21JdGVtKGFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5SYW5kb208VCA9IGFueT4oYXJyYXk6IFRbXSwgY291bnQ6IG51bWJlcik6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5nZXROUmFuZG9tKGFycmF5LCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcmV0dXJuIGNvcHkgb2YgYXJyYXkgd2l0aCBvbmx5IGRpc3RpbmN0IGVsZW1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFycmF5IC0gYXJyYXkgd2l0aCBkdXBsaWNhdGUgZWxlbWVudHNcclxuICAgICAqIEByZXR1cm5zIHVuaXF1ZSBhcnJheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VVbmlxdWU8VCA9IGFueT4oYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5cy5tYWtlVW5pcXVlKGFycmF5KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBNYXRocyBmcm9tIFwiLi4vbWF0aC11dGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWF0aHN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYXRoVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyByb3VuZFRvRGVjaW1hbHMobnVtOiBudW1iZXIsIGRlY2ltYWxzID0gMiwgdHlwZTogXCJmbG9vclwiIHwgXCJjZWlsXCIgfCBcInJvdW5kXCIgPSBcInJvdW5kXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5yb3VuZFRvRGVjaW1hbHMobnVtLCBkZWNpbWFscywgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYWQobnVtOiBudW1iZXIsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLnBhZChudW0sIHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMuY2xhbXAodmFsdWUsIG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJpbm9taWFsQ29lZmZpY2llbnQobjogbnVtYmVyLCBrOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5iaW5vbWlhbENvZWZmaWNpZW50KG4sIGspO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5sZXJwKGEsIGIsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2cyaSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMubG9nMmkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGFtcChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5sYW1wKG1pbiwgbWF4LCBzY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMucmFuZG9tSW50KG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRocy5yYW5kb20obWluLCBtYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXZlcmFnZShhcmdzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhzLmF2ZXJhZ2UoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaWZmKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aHMuZ2V0RGlmZihudW0xLCBudW0yKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQHR5cGVkZWYgIHsoT2JqZWN0KX0gYW55XHJcbiAqL1xyXG5pbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0ICogYXMgTWlzYyBmcm9tIFwiLi4vbWlzYy11dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBOZXRDbGllbnQgZnJvbSBcIi4uL25ldC1jbGllbnQtdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgT2JqZWN0cyBmcm9tIFwiLi4vb2JqZWN0LXV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIFJlZmxlY3Rpb24gZnJvbSBcIi4uL3JlZmxlY3Rpb24tdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE1pc2N9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNaXNjVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgY2xhc3MgYnkgbmFtZSBhbmQgbGlzdCBvZiBwYXJhbWV0ZXJzXHJcbiAgICAgKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBjcmVhdGVDbGFzc30gaW5zdGVhZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZVxyXG4gICAgICogQHBhcmFtIGFyZ3MgLSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJcclxuICAgICAqIEByZXR1cm5zIGNyZWF0ZWQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2xhc3MobmFtZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Rpb24uY3JlYXRlQ2xhc3MobmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgcGFyc2UgY29va2llc1xyXG4gICAgICogQHBhcmFtIGNvb2tpZXMgLSBjb29rZSB0byBwYXJzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlQ29va2llcyhjb29raWVzOiBzdHJpbmcpOiBTdHJpbmdNYXAge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnBhcnNlQ29va2llcyhjb29raWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCBjaGVjayBpZiBvYmplY3QgaXMgaW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBvYmogLSBzZWFyY2hlZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjb21wYXJlIHdpdGggc2VhcmNoZWQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbjxUPihvYmo6IFQsIC4uLmRhdGE6IFRbXSB8IFtUW11dKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MuaXNJbihvYmosIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHBhcnNlIEpTT04gY29udGVudCB3aXRoIGNvbW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCAtIHN0cmluZ2lmeSBKU09OXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VKU09OV2l0aENvbW1lbnRzKGNvbnRlbnQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MucGFyc2VKU09OV2l0aENvbW1lbnRzKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IHNob3VsZCBhcHBlbmQgY29va2llcyBvciBhZGQgb3B0aW9uIHRvIGFwcGVuZGluZyBpbnN0ZWFkIG9mIHJlcGxhY2UgY29va2llc1xyXG4gICAgLy8gVE9ETzogZXhwaXJlcyBtdXN0IGJlIG9ubHkgaW4gdGhlIGVuZCBvZiBjb29raWVzXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCBkYXlzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb29raWUoY25hbWU6IHN0cmluZywgc291cmNlID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY29va2llIDogXCJcIik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1pc2MuZ2V0Q29va2llKGNuYW1lLCBzb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VQYXJhbXMocXVlcnkgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gXCImXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlciA9IFwiPVwiKTogYW55IHtcclxuICAgICAgICByZXR1cm4gTWlzYy5wYXJzZVBhcmFtcyhxdWVyeSwgc2VwYXJhdG9yLCBkZWxpbWl0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByb3VnaFNpemVPZk9iamVjdH0gaW5zdGVhZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvYmplY3QgLSBvYmplY3QgdG8gZGV0ZXJtaW5lIHNpemVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByb3VnaFNpemVPZk9iamVjdChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMucm91Z2hTaXplT2ZPYmplY3Qob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdFRvUXVlcnlQYXJhbXMob2JqOiBTdHJpbmdNYXApOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLm9iamVjdFRvUXVlcnlQYXJhbXMob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgaW5jbHVkZUZpbGV9IGluc3RlYWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZSAtIHBhdGggdG8gZmlsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGluY2x1ZGVGaWxlKGZpbGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiBOZXRDbGllbnQuaW5jbHVkZUZpbGUoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemUob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnNlcmlhbGl6ZShvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2Uob2JqOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBNaXNjLnBhcnNlKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcDxTID0gYW55LCBUID0gUz4oc291cmNlOiBTLCBkYXRhOiB7IGF0dHJTOiBrZXlvZiBTLCBhdHRyRD86IGtleW9mIFQsIG1hcEZ1bmN0aW9uOiAoc3JjOiBhbnkpID0+IGFueSB9W10pOiBUIHtcclxuICAgICAgICByZXR1cm4gTWlzYy5tYXAoc291cmNlLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBPYmplY3RzIGZyb20gXCIuLi9vYmplY3QtdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIE9iamVjdHN9IGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHdpdGhvdXQob2JqOiBhbnksIGl0ZW1zOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMud2l0aG91dChvYmosIGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5lc3RlZFByb3BlcnR5KG9iamVjdDogYW55LCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmdldE5lc3RlZFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHlQYXRoLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2l6ZShvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdHMuc2l6ZShvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNQbGFpbihvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLmlzUGxhaW4ob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VGbGF0KGxpc3Q6IGFueVtdLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3RzLm1ha2VGbGF0KGxpc3QsIHByb3BlcnR5UGF0aCwgc2VwYXJhdG9yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDaGVja2VycyBmcm9tIFwiLi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBDaGVja2Vyc30gaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0NoZWNrZXJzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNDYW1lbENhc2UgPSBDaGVja2Vycy5pc0NhbWVsQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJDYW1lbENhc2UgPSBDaGVja2Vycy5pc1VwcGVyQ2FtZWxDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNMb3dlckNhbWVsQ2FzZSA9IENoZWNrZXJzLmlzTG93ZXJDYW1lbENhc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0xvd2VyU25ha2VDYXNlID0gQ2hlY2tlcnMuaXNMb3dlclNuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVXBwZXJTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1VwcGVyU25ha2VDYXNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTbmFrZUNhc2UgPSBDaGVja2Vycy5pc1NuYWtlQ2FzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVGltZUZvcm1hdCA9IENoZWNrZXJzLmlzVGltZUZvcm1hdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIENoZWNrZXJzIGZyb20gXCIuLi9zdHJpbmctY2hlY2tlcnNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5ncyBmcm9tIFwiLi4vc3RyaW5nLXV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBTdHJpbmdzfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5yZW1vdmVBY2NlbnRlZENoYXJhY3RlcnMod29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBqb2luKGRhdGE6IHN0cmluZ1tdLCBkZWxpbWl0ZXIgPSBcIiBcIiwgcHJlZml4ID0gXCJcIiwgcG9zdGZpeCA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmpvaW5TdHJpbmcoZGF0YSwgZGVsaW1pdGVyLCBwcmVmaXgsIHBvc3RmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9VcHBlclNuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvVXBwZXJTbmFrZUNhc2UodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlclNuYWtlQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0xvd2VyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9Mb3dlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b1VwcGVyQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MudG9VcHBlckNhbWVsQ2FzZSh0ZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0NhcGl0YWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50b0NhcGl0YWwodGV4dCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdFBhcnQodGV4dDogc3RyaW5nLCBkaXZpZGVyID0gXCIgXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmdldExhc3RQYXJ0KHRleHQsIGRpdmlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnQodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY291bnQodGV4dCwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB0ZXh0IC0gdGV4dCBuZWVkIHRvIGJlIHJlcGVhdFxyXG4gICAgICogQHBhcmFtIGNvdW50IC0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcclxuICAgICAqIEBkZXByZWNhdGVkIC0gdXNlIHtAbGluayBTdHJpbmcjcmVwZWF0fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGVhdCh0ZXh0OiBzdHJpbmcsIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGVhdChjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGwodGV4dDogc3RyaW5nLCB3b3Jkczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUFsbCh0ZXh0LCB3b3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogbmVlZCB0byBiZSBmaXhlZFxyXG4gICAgcHVibGljIHN0YXRpYyB0ZW1wbGF0ZSh0ZXh0OiBzdHJpbmcsIHZhbHVlczogU3RyaW5nTWFwLCBzdGFydCA9IFwie3tcIiwgZW5kID0gXCJ9fVwiKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50ZW1wbGF0ZSh0ZXh0LCB2YWx1ZXMsIHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRW1wdHlMaW5lcyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnJlbW92ZUVtcHR5TGluZXMoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBiZXR3ZWVuKHRleHQ6IHN0cmluZywga2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmJldHdlZW4odGV4dCwga2V5MSwga2V5Mik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvY2N1cnJlbmNlcyh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5vY2N1cnJlbmNlcyh0ZXh0LCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuY29sbGFwc2VXaGl0ZXNwYWNlKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmNhcGl0YWxpemUodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0VtcHR5KHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc0VtcHR5KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3dhcENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy5zd2FwQ2FzZSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyYW5zZm9ybVRvQmFzaWNGb3JtYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5ncy50cmFuc2Zvcm1Ub0Jhc2ljRm9ybWF0KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQ2hlY2tlcnMuaXNWYWxpZEVtYWlsKGVtYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgaXNWYWxpZFBob25lTnVtYmVyfSBpbnN0ZWFkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG51bSAtIHN0cmluZyB0byB2YWxpZGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmFsaWRQaG9uZU51bWJlcihudW06IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBDaGVja2Vycy5pc1ZhbGlkUGhvbmVOdW1iZXIobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFzY2lpQXJyYXkodGV4dDogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmdldEFzY2lpQXJyYXkodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0Jhc2ljRm9ybSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLnRvQmFzaWNGb3JtKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29udGFpbnModGV4dDogc3RyaW5nLCBzdWJzdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdzLmNvbnRhaW5zKHRleHQsIHN1YnN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBqb2luU2luZ2xlKHByZWZpeDogc3RyaW5nLCBkaXZpZGVyOiBzdHJpbmcsIHBvc3RmaXg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3Muam9pblNpbmdsZShwcmVmaXgsIGRpdmlkZXIsIHBvc3RmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bTogc3RyaW5nLCBwcmVmaXggPSBcIis0MjFcIik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuZ2V0Rm9ybWF0dGVkTnVtYmVyKG51bSwgcHJlZml4KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiAoTm9kZSB8IHN0cmluZylbXSB8IE5vZGUgfCBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9uQ2xpY2s/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIHN0eWxlcz86IHsgW3N0eWxlIGluIGtleW9mIENTU1N0eWxlRGVjbGFyYXRpb25dPzogQ1NTU3R5bGVEZWNsYXJhdGlvbltzdHlsZV0gfTtcclxuICAgIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbiAgICBmb3I/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGF1dG9wbGF5PzogYm9vbGVhbjtcclxuICAgIGhyZWY/OiBzdHJpbmc7XHJcbiAgICBkb3dubG9hZD86IHN0cmluZztcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50VG9TdHJpbmcoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmpvaW4oXCIuXCIpO1xyXG4gICAgY29uc3QgaWQgICAgICA9IGVsZW1lbnQuaWQgPyBcIiNcIiArIGVsZW1lbnQuaWQgOiBcIlwiO1xyXG4gICAgY29uc3QgcGFyZW50ICA9IGVsZW1lbnQucGFyZW50RWxlbWVudCA/IGVsZW1lbnRUb1N0cmluZyhlbGVtZW50LnBhcmVudEVsZW1lbnQpICsgXCIgPiBcIiA6IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudCArIGVsZW1lbnQubG9jYWxOYW1lICsgaWQgKyAoY2xhc3NlcyA/IFwiLlwiICsgY2xhc3NlcyA6IFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGhlYWRlclNlbGVjdG9yID0gXCIuaGVhZGVyXCIpOiB7IGNsZWFyOiAoKSA9PiB2b2lkIH0ge1xyXG4gICAgbGV0IHBvczEgPSAwO1xyXG4gICAgbGV0IHBvczIgPSAwO1xyXG4gICAgbGV0IHBvczMgPSAwO1xyXG4gICAgbGV0IHBvczQgPSAwO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnREcmFnID0gKGU6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9zMSAgICAgICAgICAgICAgID0gcG9zMyAtIGUuY2xpZW50WDtcclxuICAgICAgICBwb3MyICAgICAgICAgICAgICAgPSBwb3M0IC0gZS5jbGllbnRZO1xyXG4gICAgICAgIHBvczMgICAgICAgICAgICAgICA9IGUuY2xpZW50WDtcclxuICAgICAgICBwb3M0ICAgICAgICAgICAgICAgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgID0gZWxlbWVudC5vZmZzZXRUb3AgLSBwb3MyICsgXCJweFwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCAtIHBvczEgKyBcInB4XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRyYWdNb3VzZURvd24gPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwb3MzICAgICAgICAgICAgICAgICAgID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHBvczQgICAgICAgICAgICAgICAgICAgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgICA9IGNsb3NlRHJhZ0VsZW1lbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IGVsZW1lbnREcmFnO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyU2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlRHJhZ0VsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgICA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGRyYWdNb3VzZURvd24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZHJhZ01vdXNlRG93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUltYWdlKG9wdGlvbnM/OiBFbGVtZW50QXR0cmlidXRlcyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtcImltZ1wiXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBDcmVhdGVFbGVtZW50KFwiaW1nXCIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChBTExPV19JTUFHRVNfT05MWV9XSVRIX0FMTE9XRURfQ09SUykge1xyXG4gICAgICAgIHJlc3VsdC5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94KGxhYmVsOiBzdHJpbmcsIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCwgY2hlY2tlZCA9IGZhbHNlKTogSFRNTExhYmVsRWxlbWVudCB7XHJcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBDcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgIGNoZWNrZWQsXHJcbiAgICAgICAgdHlwZSAgICA6IFwiY2hlY2tib3hcIixcclxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gb25DaGFuZ2UoaW5wdXRFbGVtZW50LmNoZWNrZWQpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIENyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBcImNoZWNrYm94LWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGNoaWxkcmVuIDogW2xhYmVsLCBpbnB1dEVsZW1lbnQsIENyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiY2hlY2ttYXJrXCJ9KV0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4odHlwZTogSywgb3B0aW9ucz86IEVsZW1lbnRBdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ8Sz4odHlwZSk7XHJcbiAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlbnRyeVswXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xhc3NOYW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuY2xhc3NOYW1lID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9uQ2hhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9uQ2xpY2tcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2VkXCI6XHJcbiAgICAgICAgICAgICAgICAocmVzdWx0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSBlbnRyeVsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3R5bGVzXCI6XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhlbnRyeVsxXSkuZm9yRWFjaCgoc3R5bGVFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdHlsZVtzdHlsZUVudHJ5WzBdIGFzIGFueV0gPSBzdHlsZUVudHJ5WzFdIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGlsZHJlblwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnlbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGVuZCguLi5lbnRyeVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoZW50cnlbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb250ZW50XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnlbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gZW50cnlbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoZW50cnlbMF0sIGVudHJ5WzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogVE9ETzogZWxlbWVudCByZW1haW5zIGFmdGVyIGRlbGV0aW9uIG9uTWVzc2FnZSBzY3JlZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VDb2xvclVzaW5nRGVmYXVsdElucHV0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IENyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgICAgIHR5cGUgICAgIDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlIDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZTxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBLLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10+KGAke3R5cGV9LiR7Y2xhc3Nlcy5qb2luKFwiLlwiKX1gKTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBDcmVhdGVFbGVtZW50KHR5cGUsIHtjbGFzc05hbWU6IGNsYXNzZXMuam9pbihcIiBcIil9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlQW5kQXBwZW5kPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmVudDogSFRNTEVsZW1lbnQsIHR5cGU6IEssIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGdldE9yQ3JlYXRlPEs+KHBhcmVudCwgdHlwZSwgLi4uY2xhc3Nlcyk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJhbmRvbSBmcm9tIFwiLi9yYW5kb20tdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtOiBudW1iZXIsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzID0gXCIwMDAwMDAwMDAwMDAwMFwiICsgbnVtO1xyXG5cclxuICAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aCAtIHNpemUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0RlY2ltYWxzKG51bTogbnVtYmVyLCBkZWNpbWFscyA9IDIsIHR5cGU6IFwiZmxvb3JcIiB8IFwiY2VpbFwiIHwgXCJyb3VuZFwiID0gXCJyb3VuZFwiKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGRpdmlkZXIgPSBwYXJzZUludCgxICsgbmV3IEFycmF5KGRlY2ltYWxzICsgMSkuam9pbihcIjBcIiksIDEwKTtcclxuXHJcbiAgICByZXR1cm4gKE1hdGhbdHlwZV0obnVtICogZGl2aWRlcikgLyBkaXZpZGVyKS50b0ZpeGVkKGRlY2ltYWxzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2gyTnVtYmVycyh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB4RmluYWwgPSB4ID49IDAgPyB4ICogMiA6IC14ICogMiAtIDE7XHJcbiAgICBjb25zdCB5RmluYWwgPSB5ID49IDAgPyB5ICogMiA6IC15ICogMiAtIDE7XHJcblxyXG4gICAgcmV0dXJuICh4RmluYWwgKyB5RmluYWwpICogKHhGaW5hbCArIHlGaW5hbCArIDEpIC8gMiArIHlGaW5hbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5vbWlhbENvZWZmaWNpZW50KG46IG51bWJlciwgazogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCByID0gMTtcclxuICAgIGlmIChrID4gbikge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgZCA9IDE7IGQgPD0gazsgZCsrKSB7XHJcbiAgICAgICAgciAqPSBuO1xyXG4gICAgICAgIG4tLTtcclxuICAgICAgICByIC89IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB2YWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYiAqIHZhbCArICgxIC0gdmFsKSAqIGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2cyaSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCByID0gMDtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgd2hpbGUgKCh2YWx1ZSA+Pj0gMSkgPiAwKSB7XHJcbiAgICAgICAgcisrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGFtcChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNsYW1wKChtYXggLSBtaW4pICogc2NhbGUgKyBtaW4sIG1pbiwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgcmFuZG9tSW50QmV0d2Vlbn0gaW5zdGVhZDtcclxuICpcclxuICogQHBhcmFtIG1pbiAtIG1pbiB2YWx1ZVxyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUmFuZG9tLnJhbmRvbUludEJldHdlZW4obWluLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayByYW5kb21GbG9hdEJldHdlZW59IGluc3RlYWQ7XHJcbiAqXHJcbiAqIEBwYXJhbSBtaW4gLSBtaW4gdmFsdWVcclxuICogQHBhcmFtIG1heCAtIG1heCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFJhbmRvbS5yYW5kb21GbG9hdEJldHdlZW4obWluLCBtYXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXZlcmFnZShhcmdzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XHJcbiAgICAgICAgc3VtICs9IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1bSAvIGFyZ3MubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHZhbHVlICYgdmFsdWUgLSAxKSA9PT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpZmYobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKG51bTEgLSBudW0yKTtcclxufVxyXG5cclxuY29uc3QgcmF0aW8gPSAxODAgLyBNYXRoLlBJO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlcyhyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiByYXRpbztcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vdHlwZXMvc3RyaW5nLW1hcC5pbnRlcmZhY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcGFyc2UgY29va2llc1xyXG4gKiBAcGFyYW0gY29va2llcyAtIGNvb2tlIHRvIHBhcnNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXM6IHN0cmluZyk6IFN0cmluZ01hcDxzdHJpbmc+IHtcclxuICAgIGNvbnN0IGxpc3Q6IFN0cmluZ01hcDxzdHJpbmc+ID0ge307XHJcbiAgICBjb25zdCBkYXRhICAgICAgICAgICAgICAgICAgICA9IGNvb2tpZXMgPyBjb29raWVzLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCI7XCIpIDogW107XHJcbiAgICBkYXRhLmZvckVhY2goKGNvb2tpZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzICAgICA9IGNvb2tpZS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRQYXJ0ID0gcGFydHMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoc2hpZnRQYXJ0KSB7XHJcbiAgICAgICAgICAgIGxpc3Rbc2hpZnRQYXJ0LnRyaW0oKV0gPSBkZWNvZGVVUkkocGFydHMuam9pbihcIj1cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG4vKipcclxuICogTWV0aG9kIGNoZWNrIGlmIG9iamVjdCBpcyBpbiBhcnJheVxyXG4gKiBAcGFyYW0gb2JqIC0gc2VhcmNoZWQgb2JqZWN0XHJcbiAqIEBwYXJhbSBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjb21wYXJlIHdpdGggc2VhcmNoZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJbjxUPihvYmo6IFQsIC4uLmRhdGE6IHVua25vd25bXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVswXSkpIHtcclxuICAgICAgICBpZiAoZGF0YVswXS5pbmRleE9mKG9iaikgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuaW5kZXhPZihvYmopID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRob2QgcGFyc2UgSlNPTiBjb250ZW50IHdpdGggY29tbWVudHNcclxuICogQHBhcmFtIGNvbnRlbnQgLSBzdHJpbmdpZnkgSlNPTlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSlNPTldpdGhDb21tZW50czxUPihjb250ZW50OiBzdHJpbmcpOiBUIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGNvbnRlbnQucmVwbGFjZSgvXFwvXFwvLipcXG4vZywgXCJcIikpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBzaG91bGQgYXBwZW5kIGNvb2tpZXMgb3IgYWRkIG9wdGlvbiB0byBhcHBlbmRpbmcgaW5zdGVhZCBvZiByZXBsYWNlIGNvb2tpZXNcclxuLy8gVE9ETzogZXhwaXJlcyBtdXN0IGJlIG9ubHkgaW4gdGhlIGVuZCBvZiBjb29raWVzXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiwgZGF5czogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgY29uc3QgZmluYWxDb29raWVzID0gYCR7bmFtZX09JHt2YWx1ZX07ZXhwaXJlcz0ke2QudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGZpbmFsQ29va2llcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmFtZX09JHt2YWx1ZX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lOiBzdHJpbmcsIHNvdXJjZSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNvb2tpZSA6IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgICBjb25zdCBjYSAgID0gc291cmNlLnNwbGl0KFwiO1wiKTtcclxuICAgIGZvciAobGV0IGMgb2YgY2EpIHtcclxuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtczxUPihxdWVyeSAgICAgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gXCImXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXIgPSBcIj1cIik6IFQge1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmc6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgdmFyczogc3RyaW5nW10gICA9IHF1ZXJ5LnNwbGl0KHNlcGFyYXRvcik7XHJcbiAgICBmb3IgKGNvbnN0IHBhaXIgb2YgdmFycykge1xyXG4gICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBhaXIuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5U3RyaW5nW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdba2V5XSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcXVlcnlTdHJpbmdba2V5XSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZ1trZXldID0gW3F1ZXJ5U3RyaW5nW2tleV0sIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nW2tleV0ucHVzaChkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHF1ZXJ5U3RyaW5nIGFzIFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1F1ZXJ5UGFyYW1zKG9iajogU3RyaW5nTWFwPHN0cmluZz4pOiBzdHJpbmcge1xyXG4gICAgLy8gVE9ETzogYWRkIHVybCBwcmVmaXhcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBvYmpLZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShvYmpLZXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBgJHtyZXN1bHQubGVuZ3RoID4gMCA/IFwiJlwiIDogXCI/XCJ9JHtvYmpLZXl9PSR7b2JqW29iaktleV19YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmo6IGFueSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIG9ialtrZXldID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqW2tleV0gPSBvYmpba2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlPFQ+KG9iajogc3RyaW5nKTogVCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKG9iaik7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gcmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoaSkgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHJlc3VsdFtpXSAhPT0gXCJzdHJpbmdcIiB8fCAhKHJlc3VsdFtpXS5pbmRleE9mKFwiZnVuY3Rpb24gKFwiKSA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldLm1hdGNoKC9eXFwoW19hLXpBLVowLTldKyggKiwgKltfYS16QS1aMC05XSspKlxcKSAqPT4vKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXHJcbiAgICAgICAgICAgIGV2YWwoXCJyZXN1bHRbaV0gPSBcIiArIHJlc3VsdFtpXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHRbaV0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwPFMgPSBhbnksIFQgPSBTPihzb3VyY2U6IFMsIGRhdGE6IHsgYXR0clM6IGtleW9mIFMsIGF0dHJEPzoga2V5b2YgVCwgbWFwRnVuY3Rpb246IChzcmM6IGFueSkgPT4gYW55IH1bXSk6IFQge1xyXG4gICAgY29uc3QgZGVzdGluYXRpb246IGFueSA9IHt9O1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLm1hcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmF0dHJEKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltpdGVtLmF0dHJEXSA9IGl0ZW0ubWFwRnVuY3Rpb24oc291cmNlW2l0ZW0uYXR0clNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0clNdID0gaXRlbS5tYXBGdW5jdGlvbihzb3VyY2VbaXRlbS5hdHRyU10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmF0dHJEKSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0ckRdID0gc291cmNlW2l0ZW0uYXR0clNdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2l0ZW0uYXR0clNdID0gc291cmNlW2l0ZW0uYXR0clNdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBOb3RCcm93c2VyRXhjZXB0aW9uIH0gZnJvbSBcIi4uL2Vycm9ycy9ub3QtYnJvd3Nlci5leGNlcHRpb25cIjtcclxuaW1wb3J0IHsgQ3JlYXRlRWxlbWVudCwgQ3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi9odG1sLXV0aWxzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkSW1hZ2UoKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4oKHN1Y2Nlc3MsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgICAgICAgICA9IENyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgICAgIHR5cGUgICAgOiBcImZpbGVcIixcclxuICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciAgID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoQ3JlYXRlSW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKChldmVudC50YXJnZXQgYXMgYW55KS5maWxlc1swXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5jbGljaygpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgICAgICAgICA9IENyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgICAgIHR5cGUgICAgOiBcImZpbGVcIixcclxuICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciAgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xpY2soKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpZW50RG93bmxvYWRGaWxlKHRleHQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gQ3JlYXRlRWxlbWVudChcImFcIiwge1xyXG4gICAgICAgIGhyZWYgICAgOiBcImRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpLFxyXG4gICAgICAgIGRvd25sb2FkOiBuYW1lLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIGVsZW1lbnQuY2xpY2soKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZUZpbGUoZmlsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IE5vdEJyb3dzZXJFeGNlcHRpb24oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBpZiAoIXNjcmlwdCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNjcmlwdC5zcmMgICA9IGZpbGU7XHJcbiAgICBzY3JpcHQudHlwZSAgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBPYmplY3RFbnRyeSB9IGZyb20gXCIuLi90eXBlcy9vYmplY3QtZW50cnkuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aG91dDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iajogVCwgaXRlbXM6IChrZXlvZiBUKVtdKTogT21pdDxULCBhbnk+IHtcclxuICAgIHJldHVybiBnZXRPYmplY3RFbnRyaWVzKG9iaikuZmlsdGVyKChlbnRyeSkgPT4gIWl0ZW1zLmluY2x1ZGVzKGVudHJ5LmtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldltlbnRyeS5rZXldID0gZW50cnkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSBhcyBUKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdEVudHJpZXM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihvYmo6IFQpOiBPYmplY3RFbnRyeTxUPltdIHtcclxuICAgIGNvbnN0IHJlc3VsdDogT2JqZWN0RW50cnk8VD5bXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBvYmpLZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkob2JqS2V5KSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICBrZXkgIDogb2JqS2V5LFxyXG4gICAgICAgICAgICB2YWx1ZTogb2JqW29iaktleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lc3RlZFByb3BlcnR5KG9iamVjdDogYW55LCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgc2VwYXJhdG9yID0gXCIuXCIpOiBhbnkge1xyXG4gICAgY29uc3QgcHJvcGVydHlMaXN0ID0gcHJvcGVydHlQYXRoLnNwbGl0KHNlcGFyYXRvcik7XHJcblxyXG4gICAgcmV0dXJuIHByb3BlcnR5TGlzdC5yZWR1Y2UoKGN1cnJlbnROZXN0ZWRQcm9wZXJ0eVZhbHVlLCBwcm9wZXJ0eU5hbWUpID0+IGN1cnJlbnROZXN0ZWRQcm9wZXJ0eVZhbHVlID8gY3VycmVudE5lc3RlZFByb3BlcnR5VmFsdWVbcHJvcGVydHlOYW1lXSA6IHVuZGVmaW5lZCwgb2JqZWN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5lc3RlZFByb3BlcnR5PFQ+KGtleTogc3RyaW5nLCBpdGVtOiBhbnksIHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICBsZXQgb2JqICAgICAgICA9IGl0ZW07XHJcbiAgICBjb25zdCBzcGxpdEtleSA9IGtleS5zcGxpdChcIi5cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0S2V5Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIG9iaiA9IG9ialtzcGxpdEtleVtpXV07XHJcbiAgICB9XHJcbiAgICBvYmpbc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV1dID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3VnaFNpemVPZk9iamVjdDxUPihvYmplY3Q6IFQpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgb2JqZWN0TGlzdCAgICAgICA9IFtdO1xyXG4gICAgY29uc3Qgc3RhY2s6IHVua25vd25bXSA9IFtvYmplY3RdO1xyXG4gICAgbGV0IGJ5dGVzICAgICAgICAgICAgICA9IDA7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gdmFsdWUubGVuZ3RoIDw8IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKz0gODtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBvYmplY3RMaXN0LmluZGV4T2YodmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICBvYmplY3RMaXN0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHZhbHVlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBieXRlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpemU8VCBleHRlbmRzIChSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVua25vd25bXSk+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvciAoY29uc3QgaSBpbiBvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbjxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KG9iamVjdDogVCk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGluZGV4KSAmJiB0eXBlb2Ygb2JqZWN0W2luZGV4XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGxpc3QgLSBsaXN0IHRvIGZsYXRcclxuICogQHBhcmFtIHByb3BlcnR5UGF0aCAtIHBhdGggdG8gcHJvcGVydHlcclxuICogQHBhcmFtIHNlcGFyYXRvciAtIHNlcGFyYXRvciBpbiBwcm9wZXJ0eVBhdGhcclxuICogQHBhcmFtIHNraXBVbmRlZmluZWQgLSB0cnVlIGlmIHVuZGVmaW5lZCBzaG91bGQgYmUgc2tpcHBlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBcclxuICogY29uc3QgaXRlbXMgPSBbXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiR2FicmllbFwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiRWxsYVwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiR2FicmllbFwiXHJcbiAqICAgICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIHtcclxuICogICAgICAgIHBlcnNvbjoge1xyXG4gKiAgICAgICAgICAgIG5hbWU6IFwiSm9lXCJcclxuICogICAgICAgIH1cclxuICogICAgfVxyXG4gKiBdXHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb24ubmFtZVwiKTtcclxuICogLy8gW1wiR2FicmllbFwiLCBcIkVsbGFcIiwgXCJHYWJyaWVsXCIsIFwiSm9lXCJdXHJcbiAqIGNvbnNvbGUubG9nKG1ha2VGbGF0KGl0ZW1zKSwgXCJwZXJzb25fbmFtZVwiLCBcIl9cIik7XHJcbiAqIC8vIFtcIkdhYnJpZWxcIiwgXCJFbGxhXCIsIFwiR2FicmllbFwiLCBcIkpvZVwiXVxyXG4gKiBjb25zb2xlLmxvZyhtYWtlRmxhdChpdGVtcyksIFwicGVyc29uLm5hbWVcIiwgXCIuXCIsIHRydWUpO1xyXG4gKiAvLyBbXCJHYWJyaWVsXCIsIFwiRWxsYVwiLCBcIkpvZVwiXVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmxhdChsaXN0OiBhbnlbXSwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIHNlcGFyYXRvciA9IFwiLlwiLCBza2lwVW5kZWZpbmVkID0gZmFsc2UpOiBhbnkge1xyXG4gICAgY29uc3QgcHJvcGVydHlMaXN0ID0gcHJvcGVydHlQYXRoLmluZGV4T2Yoc2VwYXJhdG9yKSA+PSAwID8gcHJvcGVydHlQYXRoLnNwbGl0KHNlcGFyYXRvcikgOiBbcHJvcGVydHlQYXRoXTtcclxuXHJcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHlMaXN0LnJlZHVjZSgocHJvcFZhbCwgcHJvcGVydHlOYW1lKSA9PiBwcm9wVmFsID8gcHJvcFZhbFtwcm9wZXJ0eU5hbWVdIDogdW5kZWZpbmVkLCBjdXJyKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICYmIHNraXBVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9XHJcbiAgICAgICAgYWNjLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21GbG9hdEJldHdlZW4obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb21GbG9hdEJldHdlZW4obWluLCBtYXgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUJvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUl0ZW08VD4oLi4uaXRlbXM6IFRbXSk6IFQge1xyXG4gICAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCldO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGUgY2xhc3MgYnkgbmFtZSBhbmQgbGlzdCBvZiBwYXJhbWV0ZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIC0gY2xhc3MgbmFtZVxyXG4gKiBAcGFyYW0gYXJncyAtIGNvbnN0cnVjdG9yIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyBjcmVhdGVkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG5hbWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgY29uc3QgdGVtcCA9IE9iamVjdC5jcmVhdGUobmFtZS5wcm90b3R5cGUpO1xyXG4gICAgbmFtZS5hcHBseSh0ZW1wLCBhcmdzKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxGaXJzdEZ1bmN0aW9uKC4uLmZ1bmN0aW9uczogYW55W10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIGZ1bmN0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFRPRE86IFRoaXMgaXMgZGVwcmVjYXRlZC4gTW92ZSB0aGlzIHRvIHZhbGlkYXRvcnNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBNaXNjVmFsaWRhdG9ycyBmcm9tIFwiLi4vdmFsaWRhdG9ycy9taXNjLXZhbGlkYXRvcnNcIjtcclxuXHJcbmNvbnN0IHRpbWVGb3JtYXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICAgSEggIDogXCIoMlswLTNdfFswMV1cXFxcZClcIixcclxuICAgIEggICA6IFwiKDJbMC0zXXxbMDFdP1xcXFxkKVwiLFxyXG4gICAgbW0gIDogXCIoWzAtNV1cXFxcZClcIixcclxuICAgIG0gICA6IFwiKFswLTVdP1xcXFxkKVwiLFxyXG4gICAgTU0gIDogXCIoMFxcXFxkfDFbMC0yXXxcXFxcZClcIixcclxuICAgIE0gICA6IFwiKFsxLTldfDFbMC0yXSlcIixcclxuICAgIHNzICA6IFwiKFswLTVdXFxcXGQpXCIsIC8vIG1tXHJcbiAgICBzICAgOiBcIihbMC01XT9cXFxcZClcIiwgLy8gc3NcclxuICAgIFlZWVk6IFwiKFsxLTldXFxcXGR7MywzfSlcIixcclxuICAgIFlZICA6IFwiKFxcXFxkezIsMn0pXCIsXHJcbiAgICBERCAgOiBcIihbMC0zXVxcXFxkKVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FtZWxDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW0EtWl0/W2Etel0rKFtBLVpdW2Etel0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlckNhbWVsQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXihbQS1aXVthLXpdKikqJFwiLCBcImdcIikudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5bYS16XSsoW0EtWl1bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW2Etel0qKF9bYS16XSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeW0EtWl0qKF9bQS1aXSopKiRcIiwgXCJnXCIpLnRlc3QodGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NuYWtlQ2FzZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXihbYS16XSp8W0EtWl0qKShfW2EtekEtWl0qKSokXCIsIFwiZ1wiKS50ZXN0KHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lRm9ybWF0KHRleHQ6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVGb3JtYXRzKSB7XHJcbiAgICAgICAgaWYgKHRpbWVGb3JtYXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2Uoa2V5LCB0aW1lRm9ybWF0c1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke2Zvcm1hdH0kYCkudGVzdCh0ZXh0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZFBob25lTnVtYmVyfSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBudW0gLSBudW0gdG8gdmFsaWRhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUGhvbmVOdW1iZXIobnVtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkUGhvbmVOdW1iZXIobnVtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgTWlzY1ZhbGlkYXRvcnMuaXNWYWxpZEVtYWlsfSBpbnN0ZWFkXHJcbiAqIEBwYXJhbSBlbWFpbCAtIGVtYWlsIHRvIHZhbGlkYXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBNaXNjVmFsaWRhdG9ycy5pc1ZhbGlkRW1haWwoZW1haWwpO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gXCIuLi90eXBlcy9zdHJpbmctbWFwLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcIi4vYXJyYXktdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgU3RyaW5nQ2hlY2tlcnMgZnJvbSBcIi4vc3RyaW5nLWNoZWNrZXJzXCI7XHJcblxyXG5jb25zdCBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyA9IFwixIXDoMOhw6TDosOjw6XDpsSDxIfEjcSJxI/EmcOow6nDq8OqxJ3EpcOsw63Dr8OuxLXFgsS+xYTFiMOyw7PDtsWRw7TDtcOww7jFm8iZxZ/FocWdxaXIm8Wjxa3DucO6w7zFscO7w7HDv8O9w6fFvMW6xb5cIjtcclxuY29uc3Qgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICAgPSBcImFhYWFhYWFhYWNjY2RlZWVlZWdoaWlpaWpsbG5ub29vb29vb29zc3Nzc3R0dHV1dXV1dW55eWN6enpcIjtcclxuY29uc3QgYWNjZW50ZWRDaGFyYWN0ZXJzICAgICAgPSBhY2NlbnRlZExvd2VyQ2hhcmFjdGVycyArIGFjY2VudGVkTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcbmNvbnN0IG5vcm1hbENoYXJhY3RlcnMgICAgICAgID0gbm9ybWFsTG93ZXJDaGFyYWN0ZXJzICsgbm9ybWFsTG93ZXJDaGFyYWN0ZXJzLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4vKiBUT0RPOlxyXG4gICAgc3RhdGljIHVuZGVyc2NvcmUod29yZCkge1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGh1bWFuaXplKHdvcmQpIHtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkYXNoZXJpemUod29yZCkge1xyXG4gICAgfVxyXG4gICAgLy9kYXNoQ2FzZSA9IGEtYi1jLWQtZVxyXG4gICAgLy9kb3RDYXNlIGEuYy5kLnYucy5kXHJcbiAgICAvL3Bhc2NhbENhc2UgPSBGb29CYXJCYXpcclxuICAgIC8vcGF0aENhc2UgPSBhL2IvYy9kXHJcbiAgICAvL3NuYWtlQ2FzZSA9IGFfYl9jX2RfXHJcbiAgICBzdGF0aWMgaXNVcHBlcih3b3JkKSB7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaXNMb3dlcih3b3JkKSB7XHJcbiAgICB9XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXdvcmQgfHwgIXdvcmQucmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3b3JkLnJlcGxhY2UoLy4vZywgKGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWNjZW50ZWRDaGFyYWN0ZXJzLmluZGV4T2YoZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gbm9ybWFsQ2hhcmFjdGVyc1tpbmRleF0gOiBlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1VwcGVyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNDYW1lbENhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFN0cmluZ0NoZWNrZXJzLmlzVXBwZXJTbmFrZUNhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChpLCB1LCBlKSA9PiBlID8gXCJfXCIgKyBlIDogXCJcIilcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fLywgXCJcIilcclxuICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0xvd2VyU25ha2VDYXNlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNDYW1lbENhc2UodGV4dCkpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKShbQS1aXSkvZywgXCIkMV8kMlwiKVxyXG4gICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoU3RyaW5nQ2hlY2tlcnMuaXNMb3dlclNuYWtlQ2FzZSh0ZXh0KSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLygtfF98IHxcXHMpKyguKT8vZywgKGksIHUsIGUpID0+IGUgPyBcIl9cIiArIGUgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvXl8vLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTG93ZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc0xvd2VyQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQudHJpbSgpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKShbQS1aXSkvZywgXCIkMSQyXyQzXCIpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpXHJcbiAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oLXxffCB8XFxzKSsoLik/L2csIChtYXRoLCBzZXAsIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvXi4vLCAoZSkgPT4gZS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVXBwZXJDYW1lbENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChTdHJpbmdDaGVja2Vycy5pc1VwcGVyQ2FtZWxDYXNlKHRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvQ2FwaXRhbCh0b0xvd2VyQ2FtZWxDYXNlKHRleHQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXi4vLCAoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBjYXBpdGFsaXplfSBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9DYXBpdGFsKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9eLi8sIChlKSA9PiBlLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdFBhcnQodGV4dDogc3RyaW5nLCBkaXZpZGVyID0gXCIgXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnNwbGl0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzcGxpdFRleHQgPSB0ZXh0LnNwbGl0KGRpdmlkZXIpO1xyXG5cclxuICAgIHJldHVybiBzcGxpdFRleHRbc3BsaXRUZXh0Lmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnQodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHRleHQubWF0Y2gobmV3IFJlZ0V4cChrZXksIFwiZ1wiKSkgfHwgW10pLmxlbmd0aDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB0ZXh0IC0gdGV4dCBuZWVkIHRvIGJlIHJlcGVhdFxyXG4gKiBAcGFyYW0gbnVtYmVyT2ZSZXBldGl0aW9ucyAtIG51bWJlciBvZiBpdGVyYXRpb25zXHJcbiAqIEBkZXByZWNhdGVkIC0gdXNlIHtAbGluayBTdHJpbmcjcmVwZWF0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCh0ZXh0OiBzdHJpbmcsIG51bWJlck9mUmVwZXRpdGlvbnM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KG51bWJlck9mUmVwZXRpdGlvbnMgKyAxKS5qb2luKHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsKHRleHQ6IHN0cmluZywgd29yZHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7d29yZHMuam9pbihcInxcIil9KWAsIFwiZ1wiKSwgXCJcIik7XHJcbn1cclxuXHJcbi8vIFRPRE86IG5lZWQgdG8gYmUgZml4ZWRcclxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKHRleHQ6IHN0cmluZywgdmFsdWVzOiBTdHJpbmdNYXA8c3RyaW5nPiwgc3RhcnQgPSBcInt7XCIsIGVuZCA9IFwifX1cIik6IHN0cmluZyB7XHJcbiAgICBzdGFydCAgICAgICAgID0gc3RhcnQucmVwbGFjZSgvWy1bXFxdKCkqXFxzXS9nLCBcIlxcXFwkJlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG4gICAgZW5kICAgICAgICAgICA9IGVuZC5yZXBsYWNlKC9bLVtcXF0oKSpcXHNdL2csIFwiXFxcXCQmXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJC9nLCBcIlxcXFwkXCIpO1xyXG4gICAgY29uc3QgcmVnZXhwICA9IG5ldyBSZWdFeHAoYCR7c3RhcnR9KC4rPyknJHtlbmR9YCwgXCJnXCIpO1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IHRleHQubWF0Y2gocmVnZXhwKSB8fCBbXTtcclxuXHJcbiAgICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ICAgPSBtYXRjaC5zdWJzdHJpbmcoc3RhcnQubGVuZ3RoLCBtYXRjaC5sZW5ndGggLSBlbmQubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobWF0Y2gsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVtcHR5TGluZXMoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL15cXHMqJCg/Olxcclxcbj98XFxuKS9nbSwgXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiZXR3ZWVuKHRleHQ6IHN0cmluZywga2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc3RhcnRQb3MgPSB0ZXh0LmluZGV4T2Yoa2V5MSk7XHJcbiAgICBjb25zdCBlbmRQb3MgICA9IHRleHQuaW5kZXhPZihrZXkyKTtcclxuICAgIGlmIChzdGFydFBvcyA8IDAgJiYgZW5kUG9zID49IDApIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCwgZW5kUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW5kUG9zIDwgMCAmJiBzdGFydFBvcyA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHN0YXJ0UG9zICsga2V5MS5sZW5ndGgsIHRleHQubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoc3RhcnRQb3MgKyBrZXkxLmxlbmd0aCwgZW5kUG9zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9jY3VycmVuY2VzKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICh0ZXh0Lm1hdGNoKG5ldyBSZWdFeHAoa2V5LCBcImdcIikpIHx8IFtdKS5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZVdoaXRlc3BhY2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1tcXHNcXHVGRUZGXFx4QTBdezIsfS9nLCBcIiBcIik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3dhcENhc2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1xcUy9nLCAoY2hhcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvd2VyQ2FzZSA9IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZSA9PT0gY2hhciA/IGNoYXIudG9VcHBlckNhc2UoKSA6IGxvd2VyQ2FzZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVG9CYXNpY0Zvcm1hdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbGxhcHNlV2hpdGVzcGFjZShyZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dCkudG9Mb3dlckNhc2UoKSkudHJpbSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNjaWlBcnJheSh0aGlzQXJnOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIHRoaXNBcmcpIHtcclxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsZXR0ZXIuY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9CYXNpY0Zvcm0odGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiByZW1vdmVBY2NlbnRlZENoYXJhY3RlcnModGV4dC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKHRleHQ6IHN0cmluZywgc3Vic3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRleHQgJiYgcmVtb3ZlQWNjZW50ZWRDaGFyYWN0ZXJzKHRleHQudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihzdWJzdHJpbmcpID49IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luU2luZ2xlKHByZWZpeDogc3RyaW5nLCBkaXZpZGVyOiBzdHJpbmcsIHBvc3RmaXg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAocG9zdGZpeC5zdGFydHNXaXRoKGRpdmlkZXIpICYmIHByZWZpeC5lbmRzV2l0aChkaXZpZGVyKSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBwb3N0Zml4LnN1YnN0cmluZyhkaXZpZGVyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc3RmaXguc3RhcnRzV2l0aChkaXZpZGVyKSB8fCBwcmVmaXguZW5kc1dpdGgoZGl2aWRlcikpIHtcclxuICAgICAgICByZXR1cm4gcHJlZml4ICsgcG9zdGZpeDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJlZml4ICsgZGl2aWRlciArIHBvc3RmaXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIGpvaW59IGluc3RlYWRcclxuICogQHBhcmFtIGRhdGEgLSBkYXRhIHRvIGpvaW5cclxuICogQHBhcmFtIGRlbGltaXRlciAtIGRlbGltaXRlclxyXG4gKiBAcGFyYW0gcHJlZml4IC0gcHJlZml4XHJcbiAqIEBwYXJhbSBwb3N0Zml4IC0gcG9zdGZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5TdHJpbmcoZGF0YTogc3RyaW5nW10sIGRlbGltaXRlciA9IFwiIFwiLCBwcmVmaXggPSBcIlwiLCBwb3N0Zml4ID0gXCJcIik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gam9pbihkYXRhLCBkZWxpbWl0ZXIsIHByZWZpeCwgcG9zdGZpeCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWROdW1iZXIobnVtOiBzdHJpbmcsIHByZWZpeCA9IFwiKzQyMVwiKTogc3RyaW5nIHtcclxuICAgIG51bSA9IG51bS5yZXBsYWNlKC9bKCApLy1dL2csIFwiXCIpO1xyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiK1wiKSkge1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcbiAgICBpZiAobnVtLnN0YXJ0c1dpdGgoXCIwMFwiKSkge1xyXG4gICAgICAgIHJldHVybiBudW0uc3Vic3RyaW5nKDIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bS5zdGFydHNXaXRoKFwiMDlcIikgfHwgbnVtLnN0YXJ0c1dpdGgoXCIwMlwiKSkge1xyXG4gICAgICAgIHJldHVybiBwcmVmaXggKyBudW0uc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1enp5X21hdGNoX3NpbXBsZShwYXR0ZXJuOiBzdHJpbmcsIHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcGF0dGVybklkeCAgICAgID0gMDtcclxuICAgIGxldCBzdHJJZHggICAgICAgICAgPSAwO1xyXG4gICAgY29uc3QgcGF0dGVybkxlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoO1xyXG4gICAgY29uc3Qgc3RyTGVuZ3RoICAgICA9IHN0ci5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKHBhdHRlcm5JZHggIT09IHBhdHRlcm5MZW5ndGggJiYgc3RySWR4ICE9PSBzdHJMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuQ2hhciA9IHBhdHRlcm4uY2hhckF0KHBhdHRlcm5JZHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3Qgc3RyQ2hhciAgICAgPSBzdHIuY2hhckF0KHN0cklkeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChwYXR0ZXJuQ2hhciA9PT0gc3RyQ2hhcikge1xyXG4gICAgICAgICAgICArK3BhdHRlcm5JZHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICsrc3RySWR4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXR0ZXJuTGVuZ3RoICE9PSAwICYmIHN0ckxlbmd0aCAhPT0gMCAmJiBwYXR0ZXJuSWR4ID09PSBwYXR0ZXJuTGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUZvckFsbChjb250ZW50OiBzdHJpbmcsIHZhbHVlczogc3RyaW5nW10sIHBsYWNlSG9sZGVyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdmFsdWVzLm1hcCgodmFsdWUpID0+IGNvbnRlbnQucmVwbGFjZShwbGFjZUhvbGRlciwgdmFsdWUpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IGludGVydmFsczogU3RyaW5nTWFwPG51bWJlcj4gPSB7XHJcbiAgICBcInllYXJcIiAgOiAzMTUzNjAwMCxcclxuICAgIFwibW9udGhcIiA6IDI1OTIwMDAsXHJcbiAgICBcIndlZWtcIiAgOiA2MDQ4MDAsXHJcbiAgICBcImRheVwiICAgOiA4NjQwMCxcclxuICAgIFwiaG91clwiICA6IDM2MDAsXHJcbiAgICBcIm1pbnV0ZVwiOiA2MCxcclxuICAgIFwic2Vjb25kXCI6IDEsXHJcbn07XHJcblxyXG5jb25zdCBpbnRlcnZhbEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhpbnRlcnZhbHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVBZ2UodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCgrbmV3IERhdGUoKSAtICtuZXcgRGF0ZSh2YWx1ZSkpIC8gMTAwMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAyOSkgeyAvLyBsZXNzIHRoYW4gMzAgc2Vjb25kcyBhZ28gd2lsbCBzaG93IGFzICdKdXN0IG5vdydcclxuICAgICAgICAgICAgcmV0dXJuIFwiSnVzdCBub3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnRlcnZhbF0gb2YgaW50ZXJ2YWxFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBNYXRoLmZsb29yKHNlY29uZHMgLyBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y291bnRlcn0gJHtrZXl9IGFnb2A7IC8vIHNpbmd1bGFyICgxIGRheSBhZ28pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVyfSAke2tleX1zIGFnb2A7IC8vIHBsdXJhbCAoMiBkYXlzIGFnbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGU6IERhdGUsIHBhdHRlcm46IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICh0aW1lOiBudW1iZXIpOiBzdHJpbmcgPT4gdGltZSA8IDEwID8gXCIwXCIgKyB0aW1lIDogXCJcIiArIHRpbWU7XHJcblxyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFwiKEREfE1NfFlZWVl8WVlZfFlZfEhIfG1tfFNTKVwiLCBcImdcIik7XHJcbiAgICBjb25zdCBERCAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIGNvbnN0IE1NICAgID0gdG9TdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSk7XHJcbiAgICBjb25zdCBZWVlZICA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiXCI7XHJcbiAgICBjb25zdCBZWVkgICA9IFlZWVkuc3Vic3RyKDEsIDQpO1xyXG4gICAgY29uc3QgWVkgICAgPSBZWVkuc3Vic3RyKDEsIDQpO1xyXG4gICAgY29uc3QgSEggICAgPSB0b1N0cmluZyhkYXRlLmdldEhvdXJzKCkpO1xyXG4gICAgY29uc3QgbW0gICAgPSB0b1N0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICBjb25zdCBTUyAgICA9IHRvU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKTtcclxuXHJcbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKHJlZ2V4LCAoZSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiRERcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBERDtcclxuICAgICAgICAgICAgY2FzZSBcIk1NXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTU07XHJcbiAgICAgICAgICAgIGNhc2UgXCJZWVlZXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWVlZWTtcclxuICAgICAgICAgICAgY2FzZSBcIllZWVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFlZWTtcclxuICAgICAgICAgICAgY2FzZSBcIllZXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWVk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJISFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEhIO1xyXG4gICAgICAgICAgICBjYXNlIFwibW1cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtbTtcclxuICAgICAgICAgICAgY2FzZSBcIlNTXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1M7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlOiBEYXRlLCBvcHQ6IHsgbXM6IG51bWJlciwgczogbnVtYmVyLCBtOiBudW1iZXIsIGg6IG51bWJlciB9KTogRGF0ZSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc05hTihvcHQubXMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHMob3B0Lm1zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LnMpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKG9wdC5zKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0Lm0pKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKG9wdC5tKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4ob3B0LmgpKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhvcHQuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydE9mVGhlRGF5KGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIHJldHVybiBzZXREYXRlKGRhdGUsIHtcclxuICAgICAgICBtczogMCxcclxuICAgICAgICBzIDogMCxcclxuICAgICAgICBtIDogMCxcclxuICAgICAgICBoIDogMCxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kT2ZUaGVEYXkoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHNldERhdGUoZGF0ZSwge1xyXG4gICAgICAgIG1zOiA5OTksXHJcbiAgICAgICAgcyA6IDU5LFxyXG4gICAgICAgIG0gOiA1OSxcclxuICAgICAgICBoIDogMjMsXHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9taXNjLXZhbGlkYXRvcnNcIjtcclxuIiwiY29uc3QgdmFsaWRFbWFpbFJlZ2V4ICAgICAgID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbmNvbnN0IHZhbGlkUGhvbmVOdW1iZXJSZWdleCA9IC9eKFsrXXwwMCk/WyhdP1swLTldezMsNH1bKV0/Wy1cXHMuXT9bMC05XXsyLDN9Wy1cXHMuXT9bMC05XXsyLDZ9KFstXFxzLl0/WzAtOV17M30pPyQvaW07XHJcblxyXG5mdW5jdGlvbiB0eXBlT2YoYXJnOiB1bmtub3duKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgYXJnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhhcmc6IGFueSk6IGFyZyBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVPZihhcmcpID09PSBcInN0cmluZ1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJvYmplY3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGFyZzogYW55KTogYXJnIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oYXJnOiBhbnkpOiBhcmcgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwiYm9vbGVhblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShhcmc6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KGFyZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwibnVtYmVyXCIgJiYgYXJnICUgMSA9PT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmxvYXQoYXJnOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlT2YoYXJnKSA9PT0gXCJudW1iZXJcIiAmJiBhcmcgJSAxICE9PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnPzogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU9mKGFyZykgPT09IFwidW5kZWZpbmVkXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChvYmopICYmXHJcbiAgICAgICAgICAgIG9iai5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICBpc09iamVjdChvYmouc3R5bGUpICYmXHJcbiAgICAgICAgICAgIGlzT2JqZWN0KG9iai5vd25lckRvY3VtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCAvXltcXHNcXHhhMF0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFBob25lTnVtYmVyKG51bTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIW51bSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRQaG9uZU51bWJlclJlZ2V4LnRlc3QobnVtLnRyaW0oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZW1haWwudHJpbSgpKTtcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBXRUIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIFVUSUxTXHJcblxyXG5leHBvcnQgeyBBcnJheVV0aWxzIGFzIGFycmF5cyB9IGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvQXJyYXlVdGlsc1wiO1xyXG5leHBvcnQgeyBNYXRoVXRpbHMgYXMgbWF0aCB9IGZyb20gXCIuL3V0aWxzL2RlcHJlY2F0ZWQvTWF0aFV0aWxzXCI7XHJcbmV4cG9ydCB7IERvbVV0aWxzIGFzIGRvbSB9IGZyb20gXCIuL3V0aWxzL0RvbVV0aWxzXCI7XHJcbmV4cG9ydCB7IE1pc2NVdGlscyBhcyBtaXNjIH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9NaXNjVXRpbHNcIjtcclxuZXhwb3J0IHsgT2JqZWN0VXRpbHMgYXMgb2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZGVwcmVjYXRlZC9PYmplY3RVdGlsc1wiO1xyXG5leHBvcnQgeyBTdHJpbmdVdGlscyBhcyBzdHJpbmcgfSBmcm9tIFwiLi91dGlscy9kZXByZWNhdGVkL1N0cmluZ1V0aWxzXCI7XHJcbmV4cG9ydCAqIGFzIHRpbWUgZnJvbSBcIi4vdXRpbHMvdGltZS11dGlsc1wiO1xyXG5cclxuZXhwb3J0IHsgU2xvdmFrU3RlbW1lciBhcyBzdGVtbWVyIH0gZnJvbSBcIi4vbWlzYy9zbG92YWstc3RlbW1lclwiO1xyXG5cclxuLy8gRE9NXHJcblxyXG5leHBvcnQgeyBDaGVja2VycyBhcyBjaGVjayB9IGZyb20gXCIuL2RvbS9kZXByZWNhdGVkL0NoZWNrZXJzXCI7XHJcbmV4cG9ydCB7IENhbnZhc01hbmFnZXIgYXMgY2FudmFzIH0gZnJvbSBcIi4vZG9tL2NhbnZhcy1tYW5hZ2VyXCI7XHJcbmV4cG9ydCB7IERvbUdldCBhcyBnZXQgfSBmcm9tIFwiLi9kb20vZG9tLWdldFwiO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDgwMjIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==