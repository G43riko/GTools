import { randomItem } from "../utils/random-utils";
import { dateAgo } from "../utils/time-utils";

export type GLoggerContextType = string | { constructor: { name: string } };
export type GLoggerCallback = (message: unknown[], context?: string) => void;

export enum GLoggerPriority {
    LOG     = "LOG",
    WARN    = "WARN",
    ERROR   = "ERROR",
    VERBOSE = "VERBOSE",
    SUCCESS = "SUCCESS"
}

export interface GLoggerFormatter {
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
}

export class GLoggerDefaultFormatter implements GLoggerFormatter {
    public showPriority                                             = true;
    public showContext                                              = true;
    public showTime                                                 = false;
    public showTimeOffset                                           = false;
    public useDifferentColorsForContexts                            = false;
    public readonly colors: { [key: string]: string }               = {};
    private lastFormatTime                                          = Date.now();
    private readonly contextColorMap: { [context: string]: string } = {};

    public formatColored(priority: GLoggerPriority, data: unknown[], context?: string): string[] {
        const result: string[] = [this.format(priority, data, context)];

        if (this.showPriority) {
            result.push(`color: ${this.colors.priority || "blue"}`);
        }
        if (this.showContext && context) {
            result.push(`color: ${this.getColorForContext(context, this.colors.context || "red")}`);
        }

        if (this.showTime) {
            result.push(`color: ${this.colors.time || "green"}`);
        }
        if (this.showTimeOffset) {
            result.push(`color: ${this.colors.timeOffset || "green"}`);
        }

        return result;
    }

    public format(priority: GLoggerPriority, data: unknown[], context?: string): string {
        return this.getOutputArray(priority, data, context).join(" ");
    }

    private getColorForContext(context: string, defaultColor: string): string {
        if (!this.useDifferentColorsForContexts) {
            return defaultColor;
        }

        if (context in this.contextColorMap) {
            return this.contextColorMap[context];
        }

        const createColor = (): string =>
            `#${new Array(6).map(() => randomItem("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D")).join("")}`
        ;

        return this.contextColorMap[context] = createColor();
    }

    private getOutputArray(priority: GLoggerPriority, data: unknown[], context?: string): string[] {
        const partials: string[] = [];

        if (this.showPriority) {
            partials.push(`[${priority}]`);
        }
        if (this.showContext && context) {
            partials.push(context + ":");
        }

        if (this.showTime) {
            partials.push(`[${new Date().toISOString()}]`);
        }

        if (this.showTimeOffset) {
            const now = Date.now();
            partials.push(`${dateAgo(now - this.lastFormatTime)}`);
            this.lastFormatTime = now;
        }
        partials.push(...data.map(String));

        return partials;
    }
}

export class GLoggerCallbackHolder {
    private constructor(private readonly callbacks: { [key in GLoggerPriority]: GLoggerCallback }) {
    }

    public static createConsoleCallbacks(formatter = new GLoggerDefaultFormatter()): GLoggerCallbackHolder {
        return new GLoggerCallbackHolder({
            // [GLoggerPriority.LOG]    : (message: unknown[], context?: string) => console.log(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.WARN]   : (message: unknown[], context?: string) => console.warn(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.ERROR]  : (message: unknown[], context?: string) => console.error(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.SUCCESS]: (message: unknown[], context?: string) => console.log(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.VERBOSE]: (message: unknown[], context?: string) => console.log(context ? `${[context]}\t` : "", ...message),

            [GLoggerPriority.LOG]    : (message: unknown[], context?: string) => console.log(formatter.formatColored(GLoggerPriority.LOG, message, context)),
            [GLoggerPriority.WARN]   : (message: unknown[], context?: string) => console.warn(formatter.formatColored(GLoggerPriority.WARN, message, context)),
            [GLoggerPriority.ERROR]  : (message: unknown[], context?: string) => console.error(formatter.formatColored(GLoggerPriority.ERROR, message, context)),
            [GLoggerPriority.SUCCESS]: (message: unknown[], context?: string) => console.log(formatter.formatColored(GLoggerPriority.SUCCESS, message, context)),
            [GLoggerPriority.VERBOSE]: (message: unknown[], context?: string) => console.log(formatter.formatColored(GLoggerPriority.VERBOSE, message, context)),
        });
    }

    public static createArrayCallbacks(array: unknown[], options: { mapper?: (priority: GLoggerPriority, messages: unknown[], context?: string) => unknown } = {}): GLoggerCallbackHolder {
        const mapper        = options.mapper || ((priority, messages, context) => [priority, messages, context]);
        const appendToArray = (priority: GLoggerPriority, messages: unknown[], context?: string): void => {
            array.push(mapper(priority, messages, context));
        };

        return new GLoggerCallbackHolder({
            [GLoggerPriority.LOG]    : (message: unknown[], context?: string) => appendToArray(GLoggerPriority.LOG, message, context),
            [GLoggerPriority.WARN]   : (message: unknown[], context?: string) => appendToArray(GLoggerPriority.WARN, message, context),
            [GLoggerPriority.ERROR]  : (message: unknown[], context?: string) => appendToArray(GLoggerPriority.ERROR, message, context),
            [GLoggerPriority.SUCCESS]: (message: unknown[], context?: string) => appendToArray(GLoggerPriority.SUCCESS, message, context),
            [GLoggerPriority.VERBOSE]: (message: unknown[], context?: string) => appendToArray(GLoggerPriority.VERBOSE, message, context),
        });
    }

    //
    // public static createFileCallbacks(filePath: string, options: { encoding?: "utf8" } = {}): GLoggerCallbackHolder {
    //     const resolvedPath = path.resolve(filePath);
    //     const encoding     = options.encoding || "utf8";
    //     const appendToFile = (priority: GLoggerPriority, messages: unknown[], context?: string): void => {
    //         fs.appendFileSync(resolvedPath, `${priority}` + (context ? `${context}\t` : "") + messages.join(" "), {encoding});
    //     };
    //
    //     return new GLoggerCallbackHolder({
    //         [GLoggerPriority.LOG]    : (message: unknown[], context?: string) => appendToFile(GLoggerPriority.LOG, message, context),
    //         [GLoggerPriority.WARN]   : (message: unknown[], context?: string) => appendToFile(GLoggerPriority.WARN, message, context),
    //         [GLoggerPriority.ERROR]  : (message: unknown[], context?: string) => appendToFile(GLoggerPriority.ERROR, message, context),
    //         [GLoggerPriority.SUCCESS]: (message: unknown[], context?: string) => appendToFile(GLoggerPriority.SUCCESS, message, context),
    //         [GLoggerPriority.VERBOSE]: (message: unknown[], context?: string) => appendToFile(GLoggerPriority.VERBOSE, message, context),
    //     });
    // }

    public setCallback(priority: GLoggerPriority, callback: GLoggerCallback): void {
        this.callbacks[priority] = callback;
    }

    public set(holder: GLoggerCallbackHolder): void {
        Object.values(GLoggerPriority).forEach((priority) => {
            this.setCallback(priority, holder.getCallback(priority));
        });
    }

    public getCallback(priority: GLoggerPriority): GLoggerCallback {
        return this.callbacks[priority];
    }
}

abstract class GLoggerInstance {
    public constructor(public readonly context?: GLoggerContextType,
                       private readonly loggerCallbacks?: GLoggerCallbackHolder) {
    }

    protected static localPrint(type: GLoggerPriority, data: unknown[], callbacks: GLoggerCallbackHolder, context?: string): void {
        callbacks.getCallback(type)(data, context);
    }

    public setLogCallback(priority: GLoggerPriority, callback: GLoggerCallback): void {
        this.loggerCallbacks?.setCallback(priority, callback);
    }

    public log(...messages: unknown[]): void {
        GLogger.print(GLoggerPriority.LOG, this.context, ...messages);
    }

    public warn(...messages: unknown[]): void {
        GLogger.print(GLoggerPriority.WARN, this.context, ...messages);
    }

    public error(...messages: unknown[]): void {
        GLogger.print(GLoggerPriority.ERROR, this.context, ...messages);
    }
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

    public static createClassLogger(context: { constructor: { name: string } }, parent?: GLogger): GLogger {
        if (parent) {
            return parent.extends(context?.constructor?.name);
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
        return context ? (typeof context === "string" ? context : context?.constructor?.name) : "";
    }

    public extends(subContext: string): GLogger {
        const currentContext = GLogger.getContextString(this.context);

        return new GLogger(currentContext ? `${currentContext}:${subContext}` : subContext);
    }
}
