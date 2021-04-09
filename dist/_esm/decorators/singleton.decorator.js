const instances = {};
export function Singleton(constructor) {
    const className = constructor.name;
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (instances[className]) {
                throw new Error("Instance of " + className + " is already created");
            }
            instances[className] = this;
        }
    };
}
//# sourceMappingURL=singleton.decorator.js.map