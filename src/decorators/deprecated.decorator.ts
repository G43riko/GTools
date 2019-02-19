import { PropertyDecoratorType } from "../utils/DecoratorsUtils";

export function Deprecated(value?: string): PropertyDecoratorType {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
        const oldMethod  = target[propertyKey];
        descriptor.value = (...args: any[]): any => {
            console.warn("Method " + target.constructor.name + "." + propertyKey + " is deprecated. " + (value || ""));

            return oldMethod.apply(target, args);
        };
    };
}
