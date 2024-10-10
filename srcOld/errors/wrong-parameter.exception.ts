export class WrongParameterException extends Error {
    public constructor(text?: string) {
        super(`Wrong parameter exception at line${typeof text === "string" ? `: ${text}` : "!"}`);

        Object.setPrototypeOf(this, WrongParameterException.prototype);
    }
}
