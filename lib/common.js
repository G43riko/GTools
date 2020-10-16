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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConfig = exports.Gender = void 0;
__exportStar(require("./utils/StringCheckers"), exports);
// MODELS
var gender_model_1 = require("./models/gender.model");
Object.defineProperty(exports, "Gender", { enumerable: true, get: function () { return gender_model_1.Gender; } });
// ENUMS
__exportStar(require("./enums/encodings.enum"), exports);
__exportStar(require("./enums/file-types.enum"), exports);
__exportStar(require("./enums/http-status-codes.enum"), exports);
__exportStar(require("./enums/keys.enum"), exports);
// COMPONENTS
__exportStar(require("./components/KeyValueCounter"), exports);
__exportStar(require("./components/NumberCounter"), exports);
__exportStar(require("./components/FileManager"), exports);
__exportStar(require("./components/Paginator"), exports);
// MATHS
__exportStar(require("./math/Vector2f"), exports);
// CONFIG
var gtools_config_1 = require("./config/gtools-config");
Object.defineProperty(exports, "initConfig", { enumerable: true, get: function () { return gtools_config_1.initConfig; } });
// INTERFACES
__exportStar(require("./types/key-value.interface"), exports);
__exportStar(require("./types/string-map.interface"), exports);
__exportStar(require("./types/size.interaface"), exports);
__exportStar(require("./types/point.interaface"), exports);
// TESTS
__exportStar(require("./tests/abstract-database.fixture"), exports);
__exportStar(require("./tests/abstract.fixture"), exports);
__exportStar(require("./tests/abstract.mapper"), exports);
__exportStar(require("./tests/paginate.model"), exports);
