export class GLoggerInstance {
    constructor(context) {
        this.context = context;
    }
    log(...messages) {
        GLogger.print("log", this.context, ...messages);
    }
    warn(...messages) {
        GLogger.print("warn", this.context, ...messages);
    }
    error(...messages) {
        GLogger.print("error", this.context, ...messages);
    }
}
export class GLogger extends GLoggerInstance {
    constructor(context) {
        super(context);
    }
    static getLine(steps = 2) {
        const error = new Error();
        if (error.stack) {
            const results = error.stack.split("\n")[steps].trim().match(/\(.*\)/);
            if (results && results[0]) {
                return "at " + results[0];
            }
        }
        return "";
    }
    static print(type, context = "", ...data) {
        var _a;
        const realContext = context && (typeof context === "string" ? context : (_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name);
        const result = realContext && realContext.match(GLogger.skipRegexp);
        if (result) {
            return;
        }
        const prefix = realContext ? `[${realContext}] ` : "";
        console[type](prefix, ...data);
    }
    static log(message, context) {
        GLogger.print("log", context, message);
    }
}
GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
GLogger.skipRegexp = new RegExp(`${GLogger.skipContexts.join("|")}`, "gi");
//# sourceMappingURL=g-logger.js.map