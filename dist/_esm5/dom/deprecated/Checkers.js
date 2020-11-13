import * as MiscValidators from "../../validators/misc-validators";
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
export { Checkers };
//# sourceMappingURL=Checkers.js.map