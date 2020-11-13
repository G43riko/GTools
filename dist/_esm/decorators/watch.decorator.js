export function Watch(onSet, options) {
    const prefix = options && options.prefix || "_";
    return (target, key) => {
        const setter = (newVal) => {
            if (onSet) {
                target[prefix + key] = onSet(newVal, target[prefix + key]);
            }
            target[prefix + key] = newVal;
        };
        if (!delete target[key]) {
            return;
        }
        Object.defineProperty(target, key, {
            get: () => target[prefix + key],
            set: setter,
            enumerable: options && typeof options.enumerable === "boolean" ? options.enumerable : true,
            configurable: options && typeof options.configurable === "boolean" ? options.configurable : true,
        });
    };
}
//# sourceMappingURL=watch.decorator.js.map