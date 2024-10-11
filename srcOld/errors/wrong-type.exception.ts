export class WrongTypeException extends Error {
    public constructor(requiredType: string, text?: string) {
        super(
            `Wrong type exception at line. ${typeof requiredType} must be ${requiredType}${
                typeof text === "string" ? `: ${text}` : "!"
            }`,
        );

        Object.setPrototypeOf(this, WrongTypeException.prototype);
    }
}
