export class WrongTypeException extends Error {
    constructor(requiredType, text) {
        super(`Wrong type exception at line. ${typeof requiredType} must be ${requiredType}${typeof text === "string" ? ": " + text : "!"}`);
        Object.setPrototypeOf(this, WrongTypeException.prototype);
    }
}
//# sourceMappingURL=wrong-type.exception.js.map