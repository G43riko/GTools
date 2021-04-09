export function Deprecated(value) {
    return (target, propertyKey, descriptor) => {
        const oldMethod = target[propertyKey];
        descriptor.value = (...args) => {
            console.warn("Method " + target.constructor.name + "." + propertyKey + " is deprecated. " + (value || ""));
            return oldMethod.apply(target, args);
        };
    };
}
//# sourceMappingURL=deprecated.decorator.js.map