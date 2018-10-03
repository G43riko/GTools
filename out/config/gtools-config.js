"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config;
/**
 * @class
 * @implements {GToolsConfigInterface}
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
            return this.checkConfig().URL_API;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassGToolsConfig.prototype, "PAGE_LIMIT", {
        get: function () {
            return this.checkConfig().PAGE_LIMIT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassGToolsConfig.prototype, "LANGUAGE", {
        get: function () {
            return this.checkConfig().LANGUAGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassGToolsConfig.prototype, "VERSION", {
        get: function () {
            return this.checkConfig().VERSION;
        },
        enumerable: true,
        configurable: true
    });
    ClassGToolsConfig.prototype.checkConfig = function () {
        if (!config) {
            throw new Error("App config must be initializes(app-config/initConfig({...params}))");
        }
        return config;
    };
    return ClassGToolsConfig;
}());
exports.ClassGToolsConfig = ClassGToolsConfig;
function initConfig(appConfig) {
    config = appConfig;
}
exports.initConfig = initConfig;
exports.GToolsConfig = new ClassGToolsConfig();
