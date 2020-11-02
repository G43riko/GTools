export class MissingParameterError extends Error {
    public constructor(parameterName: string) {
        super(`Parameter ${parameterName} must be defined`);
    }
}
