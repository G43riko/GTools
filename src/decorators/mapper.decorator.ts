export function Mapper(params: { onGet?: (oldValue: any) => any, onSet?: (oldValue: any) => any } = {}, prefix = "_"): any {
    return (target: any, key: string): any => {
        if (!delete target[key]) {
            return;
        }
        const descriptor: PropertyDescriptor = {
            enumerable  : true,
            configurable: true,
        };
        const newName                        = prefix + key;
        if (params) {
            if (typeof params.onGet === "function") {
                // @ts-ignore
                descriptor.get = () => params.onGet(target[newName]);
            } else {
                descriptor.get = () => target[newName];
            }

            if (typeof params.onSet === "function") {
                // @ts-ignore
                descriptor.set = (newVal: any) => target[newName] = params.onSet(newVal);
            } else {
                descriptor.set = (value) => target[newName] = value;
            }
        }
        Object.defineProperty(target, key, descriptor);
    };
}
