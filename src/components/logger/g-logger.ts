import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerInstance } from "./g-logger-instance";
import { GLoggerPriority } from "./g-logger-priority";

export type GLoggerContextType = string | { constructor?: { name: string }; name?: string };
export type GLoggerCallback = (message: unknown[], context?: string) => void;

export interface GLoggerFormatter {
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
}

export class GLogger extends GLoggerInstance {
    private static readonly skipContexts    = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    private static readonly skipRegexp      = new RegExp(`${GLogger.skipContexts.join("|")}`, "gi");
    private static readonly staticCallbacks = GLoggerCallbackHolder.createConsoleCallbacks();

    public static setCallbacks(callbackHolder: GLoggerCallbackHolder): void {
        GLogger.staticCallbacks.set(callbackHolder);
    }

    public static getLine(steps = 2): string {
        const error = new Error();
        if (error.stack) {
            const results = /\(.*\)/.exec(error.stack.split("\n")[steps].trim());
            if (results && results[0]) {
                return `at ${results[0]}`;
            }
        }

        return "";
    }

    public static createClassLogger(context: any, parent?: GLogger): GLogger {
        if (parent) {
            // @ts-ignore
            return parent.extends(context?.name || context?.constructor?.name);
        }

        return new GLogger(context?.constructor?.name);
    }

    public static createArrayLogger(array: unknown[], context?: GLoggerContextType, mapper?: (priority: GLoggerPriority, messages: unknown[], context?: string) => unknown): GLogger {
        return new GLogger(context, GLoggerCallbackHolder.createArrayCallbacks(array, {mapper}));
    }

    public static print(type: GLoggerPriority, context: GLoggerContextType = "", ...data: unknown[]): void {
        const realContext: string = GLogger.getContextString(context);
        const result              = realContext && (GLogger.skipRegexp.exec(realContext));
        if (result) {
            return;
        }
        GLoggerInstance.localPrint(type, data, GLogger.staticCallbacks, realContext);
    }

    public static log(message: string | string[], context?: GLoggerContextType): void {
        GLogger.print(GLoggerPriority.LOG, context, ...(Array.isArray(message) ? message : [message]));
    }

    public static error(message: string | string[], context?: GLoggerContextType): void {
        GLogger.print(GLoggerPriority.ERROR, context, ...(Array.isArray(message) ? message : [message]));
    }

    public static warn(message: string | string[], context?: GLoggerContextType): void {
        GLogger.print(GLoggerPriority.WARN, context, ...(Array.isArray(message) ? message : [message]));
    }

    public constructor(
        context?: GLoggerContextType,
        callbacks = GLogger.staticCallbacks.copy(),
    ) {
        super(callbacks, context);
    }

    public extends(subContext: any): GLogger {
        const currentContext        = GLogger.getContextString(this.context);
        const subContextNameContext = GLogger.getContextString(subContext);

        return new GLogger(
            currentContext ? `${currentContext}:${subContextNameContext}` : subContextNameContext,
            this.loggerCallbacks.copy(),
        );
    }
}
