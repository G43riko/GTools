export class NullPointerException extends Error {
    constructor(text) {
        super("Null pointer exception at line" + (typeof text === "string" ? ": " + text : "!"));
        Object.setPrototypeOf(this, NullPointerException.prototype);
    }
}
//# sourceMappingURL=null-pointer.exception.js.map