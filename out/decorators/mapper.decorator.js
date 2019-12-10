"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

function Mapper(params, prefix) {
    if (params === void 0) {
        params = {};
    }
    if (prefix === void 0) {
        prefix = "_";
    }
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
                descriptor.get = function () {
                    return params.onGet(target[newName]);
                };
            } else {
                descriptor.get = function () {
                    return target[newName];
                };
            }
            if (typeof params.onSet === "function") {
                // @ts-ignore
                descriptor.set = function (newVal) {
                    return target[newName] = params.onSet(newVal);
                };
            } else {
                descriptor.set = function (value) {
                    return target[newName] = value;
                };
            }
        }
        Object.defineProperty(target, key, descriptor);
    };
}

exports.Mapper = Mapper;
