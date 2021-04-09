import { __awaiter } from "tslib";
export function createClass(name, args) {
    const temp = Object.create(name.prototype);
    name.apply(temp, args);
    return temp;
}
export function createInstance(type, ...params) {
    return new type(...params);
}
export function callFirstFunction(...functions) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const func of functions) {
            if (typeof func === "function") {
                return yield func();
            }
        }
    });
}
//# sourceMappingURL=reflection-utils.js.map