export function Mapper(params = {}, prefix = "_") {
    return (target, key) => {
        if (!delete target[key]) {
            return;
        }
        const descriptor = {
            enumerable: true,
            configurable: true,
        };
        const newName = prefix + key;
        if (params) {
            if (typeof params.onGet === "function") {
                descriptor.get = () => params.onGet && params.onGet(target[newName]);
            }
            else {
                descriptor.get = () => target[newName];
            }
            if (typeof params.onSet === "function") {
                descriptor.set = (newVal) => target[newName] = params.onSet && params.onSet(newVal);
            }
            else {
                descriptor.set = (value) => target[newName] = value;
            }
        }
        Object.defineProperty(target, key, descriptor);
    };
}
//# sourceMappingURL=mapper.decorator.js.map