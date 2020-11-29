import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerInstance } from "./g-logger-instance";
import { GLoggerPriority } from "./g-logger-priority";

export type GLoggerContextType = string | { constructor?: { name: string }, name?: string };
export type GLoggerCallback = (message: unknown[], context?: string) => void;

export interface GLoggerFormatter {
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
}

export class GLogger extends GLoggerInstance {
    private static readonly staticCallbacks = GLoggerCallbackHolder.createConsoleCallbacks();

    public static setCallbacks(callbackHolder: GLoggerCallbackHolder): void {
        GLogger.staticCallbacks.set(callbackHolder);
    }

    public static getLine(steps = 2): string {
        const error = new Error();
        if (error.stack) {
            const results = error.stack.split("\n")[steps].trim().match(/\(.*\)/);
            if (results && results[0]) {
                return "at " + results[0];
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

    private static readonly skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    private static readonly skipRegexp   = new RegExp(`${GLogger.skipContexts.join("|")}`, "gi");

    public static createArrayLogger(array: unknown[], context?: GLoggerContextType, mapper?: (priority: GLoggerPriority, messages: unknown[], context?: string) => unknown): GLogger {
        return new GLogger(context, GLoggerCallbackHolder.createArrayCallbacks(array, {mapper}));
    }

    // public static createFileLogger(file: string, context?: GLoggerContextType, encoding: "utf8" = "utf8"): GLogger {
    //     return new GLogger(context, GLoggerCallbackHolder.createFileCallbacks(file, {encoding}));
    // }

    public static print(type: GLoggerPriority, context: GLoggerContextType = "", ...data: unknown[]): void {
        const realContext: string = GLogger.getContextString(context);
        const result              = realContext && realContext.match(GLogger.skipRegexp);
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

    private static getContextString(context?: GLoggerContextType): string {
        if (typeof context === "string") {
            return context;
        }

        if (typeof context?.constructor?.name === "string") {
            return context.constructor.name;
        }

        if (typeof context?.name === "string") {
            return context.name;
        }

        return undefined as any;
    }

    public extends(subContext: string): GLogger {
        const currentContext = GLogger.getContextString(this.context);

        return new GLogger(currentContext ? `${currentContext}:${subContext}` : subContext);
    }
}
