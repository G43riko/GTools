export class WrongParameterException extends Error {
    constructor(text) {
        super(`Wrong parameter exception at line${typeof text === "string" ? ": " + text : "!"}`);
        Object.setPrototypeOf(this, WrongParameterException.prototype);
    }
}
//# sourceMappingURL=wrong-parameter.exception.js.map