import { __awaiter, __generator } from "tslib";
export function createClass(name, args) {
    var temp = Object.create(name.prototype);
    name.apply(temp, args);
    return temp;
}
export function callFirstFunction() {
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
//# sourceMappingURL=reflection-utils.js.map