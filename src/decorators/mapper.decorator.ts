import { PropertyDecoratorType } from "../utils/DecoratorsUtils";

export function Mapper(params: { onGet?: (oldValue: any) => any, onSet?: (oldValue: any) => void }, prefix = "_"): PropertyDecoratorType {
    return (target: any, key: string) => {
        if (delete target[key]) {
            const descriptor: PropertyDescriptor = {
                enumerable  : true,
                configurable: true,
            };
            if (params) {
                if (typeof params.onGet === "function") {
                    // @ts-ignore
                    descriptor.get = () => params.onGet(target[prefix + key]);
                }

                if (params && typeof params.onSet === "function") {
                    // @ts-ignore
                    descriptor.set = (newVal: any) => target[prefix + key] = params.onSet(newVal);
                }
            }
            Object.defineProperty(target, key, descriptor);
        }
    };
}
