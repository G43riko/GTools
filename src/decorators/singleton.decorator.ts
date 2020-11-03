const instances: { [className: string]: any } = {};

export function Singleton<T extends new(...args: any[]) => Record<string, unknown>>(constructor: T): any {
    const className = constructor.name;

    return class extends constructor {
        public constructor(...args: any[]) {
            super(...args);
            if (instances[className]) {
                throw new Error("Instance of " + className + " is already created");
            }
            instances[className] = this;
        }
    };
}
