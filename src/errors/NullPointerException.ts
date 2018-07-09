export class NullPointerException extends Error {
    public constructor(text?: string) {
        super("Null pointer exception at line " + (text ? ": " + text : "!"));

        Object.setPrototypeOf(this, NullPointerException.prototype);
    }
}
