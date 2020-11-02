export class NullPointerException extends Error {
    public constructor(text?: string) {
        super("Null pointer exception at line" + (typeof text === "string" ? ": " + text : "!"));

        Object.setPrototypeOf(this, NullPointerException.prototype);
    }
}
