

export type ValueProvider<T, Args extends unknown[] = []> = T | ((...args: Args) => T);

export function isProviderFunction<T, Args extends unknown[] = []>(provider: ValueProvider<T, Args>): provider is (...args: Args) => T {
    return typeof provider === "function";
}

export function getValueFromProvider<T, Args extends unknown[]>(provider: ValueProvider<T, Args>, ...args: Args): T {
    if (isProviderFunction(provider)) {
        return provider(...args);
    }

    return provider;
}
