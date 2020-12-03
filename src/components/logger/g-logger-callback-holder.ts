import { GLoggerCallback } from "./g-logger";
import { GLoggerDefaultFormatter, SimpleColorFormatter } from "./g-logger-default-formatter";
import { GLoggerPriority } from "./g-logger-priority";

export class GLoggerCallbackHolder {
    private constructor(private readonly callbacks: { [key in GLoggerPriority]: GLoggerCallback }) {
    }

    public static createConsoleCallbacks(formatter = new SimpleColorFormatter()): GLoggerCallbackHolder {
        return new GLoggerCallbackHolder({
            // [GLoggerPriority.LOG]    : (message: unknown[], context?: string) => console.log(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.WARN]   : (message: unknown[], context?: string) => console.warn(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.ERROR]  : (message: unknown[], context?: string) => console.error(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.SUCCESS]: (message: unknown[], context?: string) => console.log(context ? `${[context]}\t` : "", ...message),
            // [GLoggerPriority.VERBOSE]: (message: unknown[], context?: string) => console.log(context ? `${[context]}\t` : "", ...message),

            [GLoggerPriority.LOG]    : (message: unknown[], context?: string) => console.log(...formatter.formatColored(GLoggerPriority.LOG, message, context)),
            [GLoggerPriority.WARN]   : (message: unknown[], context?: string) => console.warn(...formatter.formatColored(GLoggerPriority.WARN, message, context)),
            [GLoggerPriority.ERROR]  : (message: unknown[], context?: string) => console.error(...formatter.formatColored(GLoggerPriority.ERROR, message, context)),
            [GLoggerPriority.SUCCESS]: (message: unknown[], context?: string) => console.log(...formatter.formatColored(GLoggerPriority.SUCCESS, message, context)),
            [GLoggerPriority.VERBOSE]: (message: unknown[], context?: string) => console.log(...formatter.formatColored(GLoggerPriority.VERBOSE, message, context)),
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
