import { PropertyDecorator } from "../types";

export interface WatchOptions {
    enumerable?: boolean;
    configurable?: boolean;
    prefix?: string;
}

export function Watch(onSet?: (newValue: any, oldValue: any) => any, options?: WatchOptions): PropertyDecorator {
    const prefix = options && options.prefix || "_";

    return (target: any, key: string) => {
        const setter = (newVal: any): void => {
            if (onSet) {
                target[prefix + key] = onSet(newVal, target[prefix + key]);
            }
            target[prefix + key] = newVal;
        };

        if (!delete target[key]) {
            return;
        }
        Object.defineProperty(target, key, {
            get         : () => target[prefix + key],
            set         : setter,
            enumerable  : options && typeof options.enumerable === "boolean" ? options.enumerable : true,
            configurable: options && typeof options.configurable === "boolean" ? options.configurable : true,
        });
    };
}
