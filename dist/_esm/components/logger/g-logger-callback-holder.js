import { GLoggerDefaultFormatter } from "./g-logger-default-formatter";
import { GLoggerPriority } from "./g-logger-priority";
export class GLoggerCallbackHolder {
    constructor(callbacks) {
        this.callbacks = callbacks;
    }
    static createConsoleCallbacks(formatter = new GLoggerDefaultFormatter()) {
        return new GLoggerCallbackHolder({
            [GLoggerPriority.LOG]: (message, context) => console.log(...formatter.formatColored(GLoggerPriority.LOG, message, context)),
            [GLoggerPriority.WARN]: (message, context) => console.warn(...formatter.formatColored(GLoggerPriority.WARN, message, context)),
            [GLoggerPriority.ERROR]: (message, context) => console.error(...formatter.formatColored(GLoggerPriority.ERROR, message, context)),
            [GLoggerPriority.SUCCESS]: (message, context) => console.log(...formatter.formatColored(GLoggerPriority.SUCCESS, message, context)),
            [GLoggerPriority.VERBOSE]: (message, context) => console.log(...formatter.formatColored(GLoggerPriority.VERBOSE, message, context)),
        });
    }
    static createArrayCallbacks(array, options = {}) {
        const mapper = options.mapper || ((priority, messages, context) => [priority, messages, context]);
        const appendToArray = (priority, messages, context) => {
            array.push(mapper(priority, messages, context));
        };
        return new GLoggerCallbackHolder({
            [GLoggerPriority.LOG]: (message, context) => appendToArray(GLoggerPriority.LOG, message, context),
            [GLoggerPriority.WARN]: (message, context) => appendToArray(GLoggerPriority.WARN, message, context),
            [GLoggerPriority.ERROR]: (message, context) => appendToArray(GLoggerPriority.ERROR, message, context),
            [GLoggerPriority.SUCCESS]: (message, context) => appendToArray(GLoggerPriority.SUCCESS, message, context),
            [GLoggerPriority.VERBOSE]: (message, context) => appendToArray(GLoggerPriority.VERBOSE, message, context),
        });
    }
    setCallback(priority, callback) {
        this.callbacks[priority] = callback;
    }
    set(holder) {
        Object.values(GLoggerPriority).forEach((priority) => {
            this.setCallback(priority, holder.getCallback(priority));
        });
    }
    getCallback(priority) {
        return this.callbacks[priority];
    }
}
//# sourceMappingURL=g-logger-callback-holder.js.map