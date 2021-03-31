export class MissingParameterError extends Error {
    constructor(parameterName) {
        super(`Parameter ${parameterName} must be defined`);
    }
}
//# sourceMappingURL=missing-parameter.error.js.map