"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Mapper(params, prefix) {
    if (prefix === void 0) { prefix = "_"; }
    return function (target, key) {
        if (!delete target[key]) {
            return;
        }
        var descriptor = {
            enumerable: true,
            configurable: true,
        };
        if (params) {
            if (typeof params.onGet === "function") {
                // @ts-ignore
                descriptor.get = function () { return params.onGet(target[prefix + key]); };
            }
            if (params && typeof params.onSet === "function") {
                descriptor.set = function (newVal) {
                    // @ts-ignore
                    params.onSet(newVal);
                    target[prefix + key] = newVal;
                };
            }
        }
        Object.defineProperty(target, key, descriptor);
    };
}
exports.Mapper = Mapper;
